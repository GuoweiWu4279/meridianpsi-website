/**
 * src/pages/api/license/validate.ts
 *
 * Astro server endpoint (Vercel Function) — server-side proxy for Whop license
 * validation, so the Whop company API key NEVER ships inside the desktop app or
 * the NT8 add-on binaries (it used to be a hardcoded const in AppLicense.cs /
 * LicenseManager.cs — anyone with a decompiler could read it).
 *
 * The Whop call and the response contract live in src/utils/whop-license.ts
 * (moved to Whop's Current API on 2026-11-20 after Whop retired API v2 on 2026-11-13).
 *
 *   POST /api/license/validate   body: {"key":"<license key or mem_xxx>"}
 *   → 200 {"valid":true|false,"status":"...","plan":"plan_xxx","id":"mem_xxx","product":"prod_xxx"}
 *   → 404 {"valid":false,"error":"license not found"}
 *   → 400 {"valid":false,"error":"invalid json"}
 *   → 502 / 503 on upstream / config trouble — clients treat any other non-success
 *     as OFFLINE and fall back to the 7-day grace window, never hard-deny.
 *
 * Environment variables (Vercel Project → Settings → Environment Variables):
 *   WHOP_API_KEY — Whop company API key that can read memberships
 *                  (Whop Dashboard → Developer → API keys).
 *                  If unset the endpoint returns 503 and clients ride grace.
 */
export const prerender = false;

import type { APIRoute } from 'astro';
import { checkLicense } from '~/utils/whop-license';

function json(status: number, obj: unknown): Response {
  return new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json' } });
}

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.WHOP_API_KEY ?? process.env.WHOP_API_KEY;
  if (!apiKey) return json(503, { valid: false, error: 'not configured' });

  let key = '';
  try {
    const body = await request.json();
    key = String(body?.key ?? '').trim();
  } catch {
    return json(400, { valid: false, error: 'invalid json' });
  }

  const result = await checkLicense(key, apiKey);
  // Our side's trouble shows up in the Vercel runtime log (status + error kind only —
  // never the key, never Whop's body, which can echo the key back).
  if (result.status >= 500) {
    console.error(
      `[license] ${String(result.body.error)} upstream_status=${String(result.body.upstream_status ?? '-')}`
    );
  }
  return json(result.status, result.body);
};

// Reject other methods cleanly.
export const GET: APIRoute = async () => json(405, { valid: false, error: 'method not allowed' });
