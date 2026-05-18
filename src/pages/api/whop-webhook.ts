/**
 * src/pages/api/whop-webhook.ts
 *
 * Astro server endpoint (Vercel Function) — receives Whop membership
 * events and mirrors them to the NinjaTrader Ecosystem API so every
 * paying customer automatically gets an NT license without any manual
 * steps. Also sends a customer welcome email via Resend on first
 * activation.
 *
 * Why it lives here (and not at /api/whop-webhook.ts at the repo root):
 *   With `output: 'static'`, Vercel's Astro framework preset silently
 *   ignores the root /api/ folder — those files are never bundled as
 *   serverless functions and POST requests fall through to Vercel's
 *   static-file 405. The supported way to expose runtime endpoints in
 *   a mostly-static Astro project is an Astro server endpoint under
 *   src/pages/api/ with `export const prerender = false` and the
 *   @astrojs/vercel adapter. The 54 other pages remain pre-rendered.
 *
 * Environment variables required (Vercel Project → Settings → Environment Variables):
 *   WHOP_WEBHOOK_SECRET   — from Whop Dashboard → Developer → Webhooks → endpoint secret
 *   NT_TRADOVATE_USERNAME — Tradovate account username (used to mint NT API token)
 *   NT_TRADOVATE_PASSWORD — Tradovate account password
 *   NT_TRADOVATE_APP_ID   — provided by NT Vendor Support when API access is granted
 *   NT_TRADOVATE_APP_SECRET — provided by NT Vendor Support
 *   RESEND_API_KEY        — from resend.com dashboard (optional; if unset, email is skipped)
 *   RESEND_FROM           — sender, e.g. "Meridian <notifications@meridianpsi.com>"
 *                           (domain must be verified in Resend; defaults to onboarding@resend.dev for testing)
 */

import type { APIRoute } from 'astro';
import crypto from 'node:crypto';

// This route must run on-demand (Vercel Function), not be pre-rendered.
export const prerender = false;

// ── Constants ──────────────────────────────────────────────────────────────

const NT_PRODUCT_ID = 1468;
const NT_API_BASE   = 'https://ecosystemapi.ninjatrader.com/v1';

// Tradovate live auth endpoint (NT Ecosystem API uses live, not demo)
const TRADOVATE_AUTH_URL = 'https://live.tradovateapi.com/v1/auth/accesstokenrequest';

// ── Token cache — reuse the token until it expires ─────────────────────────

let _ntToken: string | null = null;
let _ntTokenExpiresAt: number = 0;

// ── Entry point ────────────────────────────────────────────────────────────

export const POST: APIRoute = async ({ request }) => {
  // 1. Read raw body (needed for signature verification)
  const rawBody = await request.text();

  // 2. Verify Whop webhook signature
  const signature = request.headers.get('whop-signature') ?? undefined;
  if (!verifyWhopSignature(rawBody, signature)) {
    console.error('[whop-webhook] Invalid signature');
    return new Response('Unauthorized', { status: 401 });
  }

  // 3. Parse event
  let event: WhopEvent;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return new Response('Bad Request', { status: 400 });
  }

  const email = event.data?.user?.email;
  if (!email) {
    // Some Whop events don't have a user — just acknowledge and ignore
    return new Response('OK', { status: 200 });
  }

  console.log(`[whop-webhook] action=${event.action} email=${email}`);

  // 4. Mirror to NT Ecosystem API
  try {
    switch (event.action) {
      // Subscription activated (new purchase or re-activation)
      case 'membership.went_valid': {
        const isNew = await createNtLicense(email, event.data.plan?.id);
        // Only send welcome email on first activation, not re-activations
        if (isNew) {
          const firstName = extractFirstName(event.data.user?.name, email);
          await sendWelcomeEmail(email, firstName).catch((err) => {
            // Log but don't fail the webhook — NT license already created
            console.error('[whop-webhook] Welcome email failed (non-fatal):', err);
          });
        }
        break;
      }

      // Subscription cancelled or expired
      case 'membership.went_invalid':
        await expireNtLicense(email);
        break;

      // Successful renewal — extend the existing license by refreshing it
      case 'membership.renewal_successful':
        await createNtLicense(email, event.data.plan?.id);
        break;

      default:
        // Other events (payment_failed, etc.) — no action needed
        break;
    }
  } catch (err) {
    const msg = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
    console.error('[whop-webhook] NT API error:', msg);
    // Echo the underlying error in the response body so that operators
    // calling /api/whop-webhook with a valid signature (e.g. the
    // scripts/replay-whop-event.mjs back-fill tool) can see what
    // actually failed without needing Vercel dashboard access. Whop's
    // production traffic ignores response bodies on 5xx and just
    // retries, so this is safe to expose.
    return new Response(`Internal Server Error: ${msg}`, { status: 500 });
  }

  return new Response('OK', { status: 200 });
};

// GET is implemented purely so that a manual `curl https://.../api/whop-webhook`
// returns a useful health check instead of an opaque 404 / 405.
export const GET: APIRoute = () =>
  new Response(JSON.stringify({ ok: true, endpoint: 'whop-webhook', method: 'POST' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });

// ── Welcome email ──────────────────────────────────────────────────────────

async function sendWelcomeEmail(toEmail: string, firstName: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[whop-webhook] RESEND_API_KEY not set — skipping welcome email');
    return;
  }

  const from = process.env.RESEND_FROM ?? 'onboarding@resend.dev';

  const text = `Hi ${firstName},

Welcome to Meridian, and thank you for joining.

Below is everything you need, in order. If anything is unclear or you get stuck, reply to this email or write to contactmeridianpsi@gmail.com and include the email address you used at checkout on Whop. We typically respond within 24 hours on business days.

---

1) Get your license key (most important)

1. Sign in to whop.com using the same email you used at checkout.
2. Open your Meridian membership / product.
3. Find the Software section (exact placement can vary slightly depending on Whop's layout) and copy your license key in full — no extra spaces before or after.

If you cannot find the Software section, don't worry — Whop's interface changes from time to time, and we've seen that before. Email us with your checkout email and we'll help you locate it.

---

2) Download and install

1. Download the latest package: https://www.meridianpsi.com/download
2. Do not unzip the file — NinjaTrader imports it as a .zip.
3. In NinjaTrader 8: Tools → Import → NinjaScript Add-On → select the .zip.
4. Restart NinjaTrader if it asks you to.

---

3) Open Meridian and activate

1. Control Center → New → Add-on → Meridian Dashboard
2. Open the License tab → paste your key → Activate.

Meridian is an add-on, not a chart indicator — you will not find it under the chart Indicators list. That is expected.

---

4) After activation — configure Settings first

Open Settings and set your size, session window, signal weights, and response preset to match how you actually trade. Meridian uses this as the foundation it learns from.

Guard rules (Guard tier only) are configured in the Guard tab — not in Settings.

---

5) Practice without affecting your daily baseline

If you want to explore the product without continuing to write to your personal baseline:

- Open the Meridian Dashboard → go to the Profile tab → turn on Test Mode.
  While Test Mode is on, PSI still runs in real time, but baseline recording is paused.

Market Replay is also handled in a separate context from your live baseline, so it's a good way to get comfortable with the flow.

---

6) What to expect in your first sessions

Your first several sessions are a learning phase — signals are intentionally gentler until Meridian has enough history to reflect your real patterns. That is normal.

---

Full step-by-step guide: https://www.meridianpsi.com/installation-guide

Thanks again for choosing Meridian.

Meridian Team
contactmeridianpsi@gmail.com`;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [toEmail],
      subject: 'Welcome to Meridian — your next steps',
      text,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend API failed: HTTP ${response.status} — ${body}`);
  }

  const data = (await response.json()) as { id?: string };
  console.log(`[whop-webhook] Welcome email sent to ${toEmail} (id=${data.id})`);
}

function extractFirstName(name: string | undefined, email: string): string {
  if (name && name.trim()) {
    return name.trim().split(' ')[0];
  }
  // Fall back to the part before @ in the email
  const local = email.split('@')[0].replace(/[._\-+]/g, ' ').trim();
  return local.charAt(0).toUpperCase() + local.slice(1);
}

// ── NT Ecosystem API calls ─────────────────────────────────────────────────

async function createNtLicense(email: string, whopPlanId?: string): Promise<boolean> {
  const token = await getNtToken();

  // Determine license duration from the Whop plan.
  // Source of truth for these IDs is MERIDIAN.md §2 (and `pricing.json` /
  // `LicenseManager.cs` GuardPlanIds / CorePlanIds — all four must agree).
  const GUARD_ANNUAL_PLAN = 'plan_frPOgHtDTvBkR'; // Guard Annual
  const CORE_ANNUAL_PLAN  = 'plan_JhWetoQ39OCNz'; // Core Annual
  const isAnnual = whopPlanId === GUARD_ANNUAL_PLAN || whopPlanId === CORE_ANNUAL_PLAN;

  // NT license type: Monthly or Annual (no Lifetime for subscription products)
  const licenseType = isAnnual ? 'Annual' : 'Monthly';

  const response = await fetch(`${NT_API_BASE}/licenses`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      productId: NT_PRODUCT_ID,
      licenseType,
    }),
  });

  // 409 Conflict means the license already exists (re-activation / renewal)
  if (response.status === 409) {
    console.log(`[whop-webhook] NT license already exists for ${email} — skipping welcome email`);
    return false;
  }

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`NT createLicense failed: HTTP ${response.status} — ${body}`);
  }

  console.log(`[whop-webhook] NT license created for ${email} (${licenseType})`);
  return true;
}

async function expireNtLicense(email: string): Promise<void> {
  const token = await getNtToken();

  // Find the existing license for this email + product
  const searchResp = await fetch(
    `${NT_API_BASE}/licenses?email=${encodeURIComponent(email)}&productId=${NT_PRODUCT_ID}`,
    { headers: { 'Authorization': `Bearer ${token}` } }
  );

  if (!searchResp.ok) {
    const body = await searchResp.text();
    throw new Error(`NT searchLicense failed: HTTP ${searchResp.status} — ${body}`);
  }

  const licenses: NtLicense[] = await searchResp.json();
  const active = licenses.find((l) => l.status === 'Active');

  if (!active) {
    console.log(`[whop-webhook] No active NT license found for ${email} — nothing to expire`);
    return;
  }

  const deleteResp = await fetch(`${NT_API_BASE}/licenses/${active.id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` },
  });

  if (!deleteResp.ok) {
    const body = await deleteResp.text();
    throw new Error(`NT deleteLicense failed: HTTP ${deleteResp.status} — ${body}`);
  }

  console.log(`[whop-webhook] NT license expired for ${email}`);
}

// ── NT / Tradovate authentication ──────────────────────────────────────────

async function getNtToken(): Promise<string> {
  // Reuse cached token if still valid (with a 60 s buffer)
  if (_ntToken && Date.now() < _ntTokenExpiresAt - 60_000) {
    return _ntToken;
  }

  const response = await fetch(TRADOVATE_AUTH_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name:       process.env.NT_TRADOVATE_USERNAME,
      password:   process.env.NT_TRADOVATE_PASSWORD,
      appId:      process.env.NT_TRADOVATE_APP_ID,
      appVersion: '1.0.0',
      cid:        process.env.NT_TRADOVATE_APP_SECRET,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Tradovate auth failed: HTTP ${response.status} — ${body}`);
  }

  const data = await response.json();

  if (!data.accessToken) {
    throw new Error(`Tradovate auth: no accessToken in response — ${JSON.stringify(data)}`);
  }

  // Tradovate tokens last 24 hours; store expiry in ms
  _ntToken = data.accessToken as string;
  _ntTokenExpiresAt = Date.now() + 24 * 60 * 60 * 1000;

  return _ntToken;
}

// ── Whop signature verification ────────────────────────────────────────────

function verifyWhopSignature(rawBody: string, signature: string | undefined): boolean {
  const secret = process.env.WHOP_WEBHOOK_SECRET;
  if (!secret) {
    console.error('[whop-webhook] WHOP_WEBHOOK_SECRET is not set');
    return false;
  }
  if (!signature) return false;

  try {
    // Whop uses HMAC-SHA256; the header value is the hex digest
    const expected = crypto.createHmac('sha256', secret).update(rawBody, 'utf8').digest('hex');

    return crypto.timingSafeEqual(Buffer.from(signature, 'hex'), Buffer.from(expected, 'hex'));
  } catch {
    return false;
  }
}

// ── Types ──────────────────────────────────────────────────────────────────

interface WhopEvent {
  action: string;
  data: {
    id?: string;
    user?: { email?: string; name?: string };
    plan?: { id?: string };
  };
}

interface NtLicense {
  id: string;
  email: string;
  status: 'Active' | 'Expired';
  licenseType: string;
}
