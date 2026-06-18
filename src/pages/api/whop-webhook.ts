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
 * Environment variables (Vercel Project → Settings → Environment Variables):
 *
 * REQUIRED — without these the webhook either rejects every request or
 * never delivers anything customer-facing:
 *
 *   WHOP_WEBHOOK_SECRET   — from Whop Dashboard → Developer → Webhooks
 *                           → endpoint secret. Missing this returns 401
 *                           for every Whop request (signature can't be
 *                           verified).
 *
 *   RESEND_API_KEY        — from resend.com dashboard. Missing this
 *                           silently skips the welcome email (logs as
 *                           `email=skipped(no-resend-key)`). The
 *                           webhook still returns 200.
 *
 * OPTIONAL — controls the NT Ecosystem mirror, which is *pure
 * bookkeeping* in v1.3.2+ (the add-on enforces licensing via Whop, not
 * `VendorLicense(1468)`). If any of the five are missing the NT
 * mirror is skipped entirely (logs as `nt=skipped(no-nt-env)`) and
 * the webhook still returns 200. Set all five only after the
 * Tradovate API user has been granted vendor-write permission on
 * productId 1468 by NinjaTrader support — otherwise NT will return
 * 403 on every call and you'll just see `nt=failed` in logs.
 *
 * Tradovate's /v1/auth/accesstokenrequest body REQUIRES all six of
 *   { name, password, appId, appVersion, cid, sec }
 * — leaving any out yields HTTP 400 "missing required field <name>".
 * An earlier version of this file omitted `sec` and put the secret
 * into `cid`, which is why every paying customer pre-1.3.2 had a
 * stuck NT provisioning even when the env vars were "set".
 *
 *   NT_TRADOVATE_USERNAME — the Tradovate username you logged in with (e.g. "wugary4")
 *   NT_TRADOVATE_PASSWORD — that Tradovate user's password
 *   NT_TRADOVATE_APP_ID   — the API key "name" you typed when creating the key
 *   NT_TRADOVATE_CID      — numeric Client ID shown by Tradovate after key creation
 *   NT_TRADOVATE_SEC      — string secret shown by Tradovate after key creation
 *                           (one-time reveal — re-issue the key if lost)
 *
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

  // 2. Verify Whop webhook signature (Standard Webhooks / Svix scheme)
  if (!verifyWhopSignature(rawBody, {
    id: request.headers.get('webhook-id') ?? undefined,
    timestamp: request.headers.get('webhook-timestamp') ?? undefined,
    signature: request.headers.get('webhook-signature') ?? undefined,
  })) {
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

  // ── Processing model ─────────────────────────────────────────────────────
  //
  // As of v1.3.2 the NT8 add-on enforces licensing purely against Whop
  // (`LicenseManager.cs`); we no longer call `VendorLicense(1468)` on
  // start-up. That means the NT Ecosystem mirror below is *pure
  // bookkeeping* — every paying customer can already use the product
  // the instant Whop hands them a key. So the webhook MUST satisfy:
  //
  //   1. Customer-facing work (welcome email) is attempted FIRST and is
  //      not gated on NT API health.
  //   2. NT mirror failures are logged but never propagated — Whop must
  //      see HTTP 200 so it doesn't disable our endpoint after retries.
  //   3. If the NT Tradovate env vars are absent, the NT mirror is
  //      skipped silently (treat "no creds" as "feature off"), so we
  //      can run the integration with the NT side intentionally off
  //      while waiting on NinjaTrader to grant the Tradovate API user
  //      vendor-write permission on productId 1468.
  //
  // One summary log line is emitted per processed event so operators
  // can grep Vercel runtime logs with a single query.
  // ─────────────────────────────────────────────────────────────────────────

  let emailStatus: WelcomeEmailStatus = 'n/a';
  let ntStatus: NtMirrorStatus = 'n/a';

  // Whop's current Standard-Webhooks payload puts the event name in `type`
  // using dot notation (e.g. "membership.activated"). Older/legacy variants
  // used `action` with "membership.went_valid" or underscore forms. Normalize
  // across all of them so we never silently miss an activation.
  const eventType = (event.type ?? event.action ?? '').toLowerCase();

  const isActivation =
    eventType === 'membership.activated' ||
    eventType === 'membership.went_valid' ||
    eventType === 'membership_activated';

  const isRenewal =
    eventType === 'membership.renewal_successful' ||
    eventType === 'payment.succeeded' ||
    eventType === 'payment_succeeded';

  const isDeactivation =
    eventType === 'membership.deactivated' ||
    eventType === 'membership.went_invalid' ||
    eventType === 'membership_deactivated';

  if (isActivation) {
    const firstName = extractFirstName(event.data.user?.name, email);
    emailStatus = await tryWelcomeEmail(email, firstName);
  }

  if (isActivation || isRenewal) {
    ntStatus = await tryCreateNtLicense(email, event.data.plan?.id);
  } else if (isDeactivation) {
    ntStatus = await tryExpireNtLicense(email);
  }

  // One greppable summary line per processed event:
  //   [whop-webhook] processed type=membership.activated recipient=foo@bar.com welcome=sent nt=skipped(no-nt-env)
  console.log(
    `[whop-webhook] processed type=${eventType || '(none)'} recipient=${email} welcome=${emailStatus} nt=${ntStatus}`
  );

  return new Response('OK', { status: 200 });
};

// ── Best-effort wrappers ───────────────────────────────────────────────────
//
// Each of these swallows its own errors and converts the outcome to a
// short status enum, so the top-level handler can stay linear and
// always reach the final `return 200`.

type WelcomeEmailStatus = 'sent' | 'failed' | 'skipped(no-resend-key)' | 'n/a';
type NtMirrorStatus =
  | 'created'
  | 'exists'
  | 'expired'
  | 'not-found'
  | 'failed'
  | 'skipped(no-nt-env)'
  | 'n/a';

async function tryWelcomeEmail(email: string, firstName: string): Promise<WelcomeEmailStatus> {
  if (!process.env.RESEND_API_KEY) return 'skipped(no-resend-key)';
  try {
    await sendWelcomeEmail(email, firstName);
    return 'sent';
  } catch (err) {
    console.error('[whop-webhook] Welcome email failed (non-fatal):', errMsg(err));
    return 'failed';
  }
}

async function tryCreateNtLicense(email: string, planId: string | undefined): Promise<NtMirrorStatus> {
  if (!hasNtEnvVars()) return 'skipped(no-nt-env)';
  try {
    const isNew = await createNtLicense(email, planId);
    return isNew ? 'created' : 'exists';
  } catch (err) {
    console.error('[whop-webhook] NT createLicense failed (non-fatal):', errMsg(err));
    return 'failed';
  }
}

async function tryExpireNtLicense(email: string): Promise<NtMirrorStatus> {
  if (!hasNtEnvVars()) return 'skipped(no-nt-env)';
  try {
    const found = await expireNtLicense(email);
    return found ? 'expired' : 'not-found';
  } catch (err) {
    console.error('[whop-webhook] NT expireLicense failed (non-fatal):', errMsg(err));
    return 'failed';
  }
}

function hasNtEnvVars(): boolean {
  return Boolean(
    process.env.NT_TRADOVATE_USERNAME &&
      process.env.NT_TRADOVATE_PASSWORD &&
      process.env.NT_TRADOVATE_APP_ID &&
      process.env.NT_TRADOVATE_CID &&
      process.env.NT_TRADOVATE_SEC
  );
}

function errMsg(err: unknown): string {
  return err instanceof Error ? `${err.name}: ${err.message}` : String(err);
}

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

  // Copy approved by Gary 2026-06-10 (multi-platform rewrite; see
  // meridian-outreach/data/_customer_welcome_2026-06-10.md). Keep the manual
  // backfill copy (meridian-outreach/customer/welcome-message.js) in sync when
  // this changes. Layout rules: numbered steps on their own lines, menu paths
  // as "A > B > C", no "then" chains, no em dashes, no exclamation points.
  // The Settings/trading-profile step is the heart of onboarding.
  const text = `Hi ${firstName},

Thank you for joining Meridian. This email takes you from purchase to your first monitored session in about ten minutes. If anything is unclear or you get stuck, reply to this email (or write to contactmeridianpsi@gmail.com) and include the email address you used at checkout on Whop. We respond within 24 hours.

---

1) Get your license key

1. Sign in at https://whop.com/@me/settings/memberships using the same email you used at checkout.
2. Open your Meridian membership and copy your license key from the Software / License Key section, in full, with no extra spaces.

One key activates Meridian on every platform we support. If you cannot find the Software section, email us with your checkout email and we will help you locate it.

---

2) Install Meridian for the platform you trade on

If you trade through NinjaTrader 8:

1. Download the latest MeridianPSI .zip from https://www.meridianpsi.com/download. Do not extract it.
2. In NinjaTrader 8, go to Tools > Import > NinjaScript Add-On and select the .zip.
3. Open the dashboard: Control Center > New > Add-on > Meridian Dashboard.
4. Open the License tab, paste your key, and click Activate.

Meridian is an add-on, not a chart indicator, so it will not appear in the chart Indicators list. That is expected.

If you trade through a Tradovate or Ironbeam account:

The Tradovate and Ironbeam apps are in early access and downloadable now. Get the standalone app at meridianpsi.com/download (or meridianpsi.com/installation-guide for the step-by-step), sign in to your broker, and activate it with your Meridian license — the same key above. No NinjaTrader is required for this path.

The full guide with screenshots is at https://www.meridianpsi.com/installation-guide.

---

3) Set up your trading profile

This is the step that makes Meridian accurate for you, so please do not skip it. Open Settings and set your trading profile: position size limits, your session time window, signal weights, and a response preset. Meridian measures everything against your own baseline rather than generic thresholds, and the profile is what anchors that baseline. It takes about two minutes.

If you are on the Guard tier, set your rules in the Guard tab: choose the triggers you want watched and the response level for each. Nothing is enforced until you arm Guard, so you stay in full control of when it is active.

---

4) Before going live

Recommended: connect a SIM or demo account first and place a few small practice trades, so you can watch the HUD and dashboard respond before real money is involved.

On NinjaTrader 8 you can also turn on Test Mode (Meridian Dashboard > Profile tab) to explore freely: PSI still runs in real time, but baseline recording is paused. Market Replay is handled in a separate context from your live baseline as well.

---

5) What to expect in your first sessions

Your first several sessions are a learning phase. Signals are intentionally gentler until Meridian has enough history to reflect your real patterns. That is normal, and the readings sharpen with every session you give it.

---

Thanks again for choosing Meridian. If you have a question, run into any issue, or there is a feature you would like to see, just reply to this email. I read every message myself.

Gary Caffrey, Meridian Team
Official NinjaTrader Ecosystem Vendor
www.Meridianpsi.com`;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [toEmail],
      reply_to: 'contactmeridianpsi@gmail.com',
      subject: 'Welcome to Meridian, here is your setup',
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
    const clean = name.trim();
    // Company / business names (e.g. "The Algo Trader, LLC") make a bad
    // greeting — fall back to a neutral "there" rather than "Hi The,".
    const looksLikeCompany = /\b(LLC|L\.L\.C|Inc|Ltd|Co|Corp|Company|Capital|Group|Holdings|Trading|Trader|Markets?|Fund|Partners|Ventures|Labs?)\b/i.test(clean);
    const first = clean.split(/\s+/)[0];
    const isArticleOrTitle = /^(the|a|an|mr|mrs|ms|dr)$/i.test(first);
    if (looksLikeCompany || isArticleOrTitle || first.length < 2) return 'there';
    return first;
  }
  // Fall back to the part before @ in the email
  const local = email.split('@')[0].replace(/[._\-+]/g, ' ').trim();
  const firstLocal = local.split(' ')[0];
  if (!firstLocal || firstLocal.length < 2) return 'there';
  return firstLocal.charAt(0).toUpperCase() + firstLocal.slice(1);
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

  // NT Ecosystem API does NOT accept a "Monthly" / "Annual" enum like the
  // Vendor Dashboard UI does — it requires an explicit ISO-8601 UTC
  // `expirationDateUTC`. Compute one billing cycle from now to match Whop.
  const now = new Date();
  const expirationDate = new Date(now);
  if (isAnnual) {
    expirationDate.setUTCFullYear(expirationDate.getUTCFullYear() + 1);
  } else {
    expirationDate.setUTCMonth(expirationDate.getUTCMonth() + 1);
  }
  const expirationDateUTC = expirationDate.toISOString();

  // NT Ecosystem POST /v1/licenses takes a `licenses` ARRAY (batch
  // shape), NOT a single license object. Sending a flat object yields
  // HTTP 400 "body/licenses Required". Each entry requires email,
  // productId, and expirationDateUTC.
  const response = await fetch(`${NT_API_BASE}/licenses`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      licenses: [
        {
          email,
          productId: NT_PRODUCT_ID,
          expirationDateUTC,
        },
      ],
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

  const cycle = isAnnual ? 'Annual' : 'Monthly';
  console.log(
    `[whop-webhook] NT license created for ${email} (${cycle}, expires ${expirationDateUTC})`
  );
  return true;
}

/**
 * Returns `true` when an active license was found and deleted,
 * `false` when there was nothing to expire (already inactive, never
 * created on the NT side, etc.). Throws on transport / auth errors.
 */
async function expireNtLicense(email: string): Promise<boolean> {
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
    return false;
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
  return true;
}

// ── NT / Tradovate authentication ──────────────────────────────────────────

async function getNtToken(): Promise<string> {
  // Reuse cached token if still valid (with a 60 s buffer)
  if (_ntToken && Date.now() < _ntTokenExpiresAt - 60_000) {
    return _ntToken;
  }

  // Fail loudly with a useful message if any required env var is missing,
  // rather than letting Tradovate return its terse "missing required
  // field" error from which it's hard to tell which side is broken.
  const requiredEnv = {
    NT_TRADOVATE_USERNAME: process.env.NT_TRADOVATE_USERNAME,
    NT_TRADOVATE_PASSWORD: process.env.NT_TRADOVATE_PASSWORD,
    NT_TRADOVATE_APP_ID:   process.env.NT_TRADOVATE_APP_ID,
    NT_TRADOVATE_CID:      process.env.NT_TRADOVATE_CID,
    NT_TRADOVATE_SEC:      process.env.NT_TRADOVATE_SEC,
  };
  const missing = Object.entries(requiredEnv)
    .filter(([, v]) => !v)
    .map(([k]) => k);
  if (missing.length > 0) {
    throw new Error(`Tradovate auth: missing env vars: ${missing.join(', ')}`);
  }

  const cidNum = Number(requiredEnv.NT_TRADOVATE_CID);
  if (!Number.isFinite(cidNum)) {
    throw new Error(
      `Tradovate auth: NT_TRADOVATE_CID must be a number (got: ${requiredEnv.NT_TRADOVATE_CID})`
    );
  }

  // Tradovate's request body must include all six fields exactly:
  //   { name, password, appId, appVersion, cid (number), sec (string) }
  // See https://api.tradovate.com/ -> Authentication -> Access Token Request.
  const response = await fetch(TRADOVATE_AUTH_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name:       requiredEnv.NT_TRADOVATE_USERNAME,
      password:   requiredEnv.NT_TRADOVATE_PASSWORD,
      appId:      requiredEnv.NT_TRADOVATE_APP_ID,
      appVersion: '1.0.0',
      cid:        cidNum,
      sec:        requiredEnv.NT_TRADOVATE_SEC,
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

// ── Whop signature verification (Svix / "Standard Webhooks" scheme) ─────────
//
// Whop signs webhooks with the Standard Webhooks spec (Svix under the hood),
// NOT a plain HMAC of the body. The request carries three headers:
//   webhook-id         e.g. msg_8em8Sa...
//   webhook-timestamp  unix seconds, e.g. 1780200784
//   webhook-signature  space-delimited list of "v1,<base64sig>" entries
//
// The signed content is `${id}.${timestamp}.${rawBody}` and the signature is
// base64(HMAC-SHA256(key, signedContent)). The signing key is the part of the
// secret after the `ws_`/`whsec_` prefix, base64-decoded.

function verifyWhopSignature(
  rawBody: string,
  headers: { id?: string; timestamp?: string; signature?: string }
): boolean {
  const secret = process.env.WHOP_WEBHOOK_SECRET;
  if (!secret) {
    console.error('[whop-webhook] WHOP_WEBHOOK_SECRET is not set');
    return false;
  }

  const { id, timestamp, signature } = headers;
  if (!id || !timestamp || !signature) return false;

  const signedContent = `${id}.${timestamp}.${rawBody}`;

  // Candidate keys: the Svix-correct base64-decoded key, plus a couple of
  // defensive fallbacks (raw utf8) in case Whop changes the secret format.
  const afterPrefix = secret.includes('_') ? secret.slice(secret.indexOf('_') + 1) : secret;
  const candidateKeys: Buffer[] = [];
  try { candidateKeys.push(Buffer.from(afterPrefix, 'base64')); } catch { /* ignore */ }
  candidateKeys.push(Buffer.from(secret, 'utf8'));
  candidateKeys.push(Buffer.from(afterPrefix, 'utf8'));

  // The header may contain multiple "v{version},{sig}" entries separated by spaces.
  const passedSigs = signature
    .split(' ')
    .map((part) => part.includes(',') ? part.split(',')[1] : part)
    .filter(Boolean);

  for (const key of candidateKeys) {
    const expected = crypto.createHmac('sha256', key).update(signedContent, 'utf8').digest('base64');
    const expectedBuf = Buffer.from(expected, 'base64');
    for (const sig of passedSigs) {
      try {
        const sigBuf = Buffer.from(sig, 'base64');
        if (sigBuf.length === expectedBuf.length && crypto.timingSafeEqual(sigBuf, expectedBuf)) {
          return true;
        }
      } catch { /* malformed sig entry — skip */ }
    }
  }

  return false;
}

// ── Types ──────────────────────────────────────────────────────────────────

interface WhopEvent {
  type?: string;
  action?: string;
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
