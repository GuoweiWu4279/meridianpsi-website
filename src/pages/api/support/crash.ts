/**
 * src/pages/api/support/crash.ts
 *
 * Astro server endpoint (Vercel Function) — receives an ANONYMIZED crash report from the
 * Meridian standalone client and stores it in Vercel Blob. Mirrors research/ingest.ts
 * (same shared-secret auth, same private Blob store), under a separate support/ prefix.
 *
 * The body is anonymized client-side (CrashReporter.cs): exception type + a scrubbed message
 * (6+ digit runs -> #) + stack FRAMES (method names only) + version/OS + the install's random
 * anon id. NEVER positions, P&L, accounts, or credentials.
 *
 * Env (shared with research ingest): RESEARCH_INGEST_SECRET (required; 503 if unset),
 * BLOB_READ_WRITE_TOKEN (auto-injected by the connected Blob store).
 */
export const prerender = false;

import type { APIRoute } from 'astro';
import { put } from '@vercel/blob';

const MAX_BYTES = 256 * 1024; // a crash report is a few KB

function json(status: number, obj: unknown): Response {
  return new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json' } });
}
function safe(s: string | null, fallback: string): string {
  return (s || '').replace(/[^a-zA-Z0-9_.-]/g, '').slice(0, 80) || fallback;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const secret = import.meta.env.RESEARCH_INGEST_SECRET ?? process.env.RESEARCH_INGEST_SECRET;
    if (!secret) return json(503, { error: 'support not configured' });
    if (request.headers.get('x-meridian-key') !== secret) return json(401, { error: 'unauthorized' });

    const anon = safe(request.headers.get('x-meridian-anon'), 'unknown');

    const body = await request.text();
    if (!body) return json(400, { error: 'empty body' });
    if (body.length > MAX_BYTES) return json(413, { error: 'too large' });

    const token = import.meta.env.BLOB_READ_WRITE_TOKEN ?? process.env.BLOB_READ_WRITE_TOKEN;
    const opts: Record<string, unknown> = {
      access: 'private',
      addRandomSuffix: false,
      contentType: 'application/json',
    };
    if (token) opts.token = token;

    // One object per crash (timestamped) — crashes are rare, so we keep each.
    const key = `support/${anon}/crash-${Date.now()}.json`;
    const blob = await put(key, body, opts as any);

    return json(200, { ok: true, pathname: blob.pathname });
  } catch (e) {
    return json(500, { error: 'crash ingest failed' });
  }
};

export const GET: APIRoute = async () => json(405, { error: 'method not allowed' });
