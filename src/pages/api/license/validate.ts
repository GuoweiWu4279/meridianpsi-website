/**
 * src/pages/api/license/validate.ts
 *
 * Astro server endpoint (Vercel Function) — server-side proxy for Whop license
 * validation, so the Whop company API key NEVER ships inside the desktop app or
 * the NT8 add-on binaries (it used to be a hardcoded const in AppLicense.cs /
 * LicenseManager.cs — anyone with a decompiler could read it).
 *
 * Contract (kept bit-compatible with what the clients already parse):
 *   POST /api/license/validate   body: {"key":"<license key or mem_xxx>"}
 *   → 200 {"valid":true|false,"status":"...","plan":"plan_xxx","id":"mem_xxx"}
 *   → 404 {"valid":false,"error":"license not found"}        (unknown key)
 *   → 400 {"valid":false,"error":"metadata mismatch"|"bad request"}
 *   → 502/503 on upstream/config trouble — clients treat any other non-success
 *     as OFFLINE and fall back to the 7-day grace window, never hard-deny.
 *
 * The success body is a SANITIZED subset: only valid/status/plan/id are
 * forwarded. The raw Whop membership object (customer email, discord, manage
 * URL, …) never leaves this function.
 *
 * Environment variables (Vercel Project → Settings → Environment Variables):
 *   WHOP_API_KEY — Whop company API key with "Validate license keys"
 *                  permission (Whop Dashboard → Developer → Company API Keys).
 *                  If unset the endpoint returns 503 and clients ride grace.
 */
export const prerender = false;

import type { APIRoute } from 'astro';

const WHOP_BASE = 'https://api.whop.com/api/v2/memberships';
const UPSTREAM_TIMEOUT_MS = 10_000;

function json(status: number, obj: unknown): Response {
  return new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json' } });
}

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.WHOP_API_KEY ?? process.env.WHOP_API_KEY;
  if (!apiKey) return json(503, { valid: false, error: 'not configured' });

  // Parse + sanity-check the key (path-safe charset, sane length).
  let key = '';
  try {
    const body = await request.json();
    key = String(body?.key ?? '').trim();
  } catch {
    return json(400, { valid: false, error: 'invalid json' });
  }
  if (!key || key.length > 200 || !/^[a-zA-Z0-9_-]+$/.test(key)) {
    return json(404, { valid: false, error: 'license not found' });
  }

  let resp: Response;
  let text = '';
  try {
    resp = await fetch(`${WHOP_BASE}/${encodeURIComponent(key)}/validate_license`, {
      method: 'POST',
      headers: { authorization: `Bearer ${apiKey}`, 'content-type': 'application/json' },
      body: '{"metadata":{}}',
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
    text = await resp.text();
  } catch {
    return json(502, { valid: false, error: 'upstream unreachable' }); // client → offline grace
  }

  if (resp.status === 404) return json(404, { valid: false, error: 'license not found' });
  if (resp.status === 400) {
    // Legacy machine-binding mismatch — forward the marker word the clients
    // look for ("metadata"/"machine") without forwarding Whop's raw body.
    const mismatch = /metadata|machine/i.test(text);
    return json(400, { valid: false, error: mismatch ? 'metadata mismatch' : 'bad request' });
  }
  // 401/403 here means OUR key is broken — never punish the customer for it.
  if (!resp.ok) return json(502, { valid: false, error: 'upstream error' });

  // Sanitize: forward only what the clients parse.
  try {
    const m = JSON.parse(text);
    const plan = typeof m?.plan === 'string' ? m.plan : (m?.plan?.id ?? m?.plan_id ?? '');
    return json(200, {
      valid: m?.valid === true || m?.valid === 'true',
      status: typeof m?.status === 'string' ? m.status : '',
      plan: typeof plan === 'string' ? plan : '',
      id: typeof m?.id === 'string' ? m.id : '',
    });
  } catch {
    return json(502, { valid: false, error: 'upstream parse error' });
  }
};

// Reject other methods cleanly.
export const GET: APIRoute = async () => json(405, { valid: false, error: 'method not allowed' });
