/**
 * src/pages/api/support/bundle.ts
 *
 * Astro server endpoint (Vercel Function) — receives a user-initiated DIAGNOSTIC BUNDLE (a zip:
 * logs + forensic sessions + recordings + safe config, credentials already stripped client-side)
 * from the Meridian standalone client's "Send to support" button, and stores it in Vercel Blob.
 * Mirrors research/ingest.ts (same shared-secret auth, same private store), under support/.
 *
 * Consent: this only ever fires on the user's explicit click (the bundle is their trading data).
 *
 * Size: Vercel serverless functions cap the REQUEST body at ~4.5 MB. Bundles larger than that
 * (usually because of big wire recordings) get a 413 here, and the client falls back to its
 * proven "the zip is on your Desktop — email it" path, so nothing is lost.
 *
 * Env (shared with research ingest): RESEARCH_INGEST_SECRET (required; 503 if unset),
 * BLOB_READ_WRITE_TOKEN (auto-injected by the connected Blob store).
 */
export const prerender = false;

import type { APIRoute } from 'astro';
import { put } from '@vercel/blob';

const MAX_BYTES = 4 * 1024 * 1024; // stay under Vercel's ~4.5 MB function request limit

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
    const file = safe(request.headers.get('x-meridian-file'), 'bundle.zip');

    const buf = await request.arrayBuffer();
    if (!buf || buf.byteLength === 0) return json(400, { error: 'empty body' });
    if (buf.byteLength > MAX_BYTES) return json(413, { error: 'too large' });

    const token = import.meta.env.BLOB_READ_WRITE_TOKEN ?? process.env.BLOB_READ_WRITE_TOKEN;
    const opts: Record<string, unknown> = {
      access: 'private',
      addRandomSuffix: false,
      contentType: 'application/zip',
    };
    if (token) opts.token = token;

    // One object per upload (timestamped) — keep every bundle a user sends.
    const key = `support/${anon}/${Date.now()}-${file}`;
    const blob = await put(key, Buffer.from(buf), opts as any);

    return json(200, { ok: true, pathname: blob.pathname });
  } catch (e) {
    return json(500, { error: 'bundle ingest failed' });
  }
};

export const GET: APIRoute = async () => json(405, { error: 'method not allowed' });
