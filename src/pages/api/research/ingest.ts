/**
 * src/pages/api/research/ingest.ts
 *
 * Astro server endpoint (Vercel Function) — receives an ANONYMIZED session recording
 * (NDJSON) from the Meridian add-on's research uploader and stores it in Vercel Blob.
 * This is the central storage for the (opt-in, anonymized) research-data program
 * behind PROTOCOL.md.
 *
 * Auth: a shared secret header (the add-on sends X-Meridian-Key). The body is already
 * anonymized client-side (account id -> random anon id; no PII, credentials, or funds).
 *
 * Environment variables (Vercel Project → Settings → Environment Variables):
 *   RESEARCH_INGEST_SECRET  — shared secret. The add-on must send the same value in the
 *                             X-Meridian-Key header, OR every request is rejected (401).
 *                             If unset, the endpoint is disabled (503) — safe default.
 *   BLOB_READ_WRITE_TOKEN   — auto-injected when you enable Vercel Blob on the project.
 *                             If unset, storage is unavailable (503).
 *
 * One-time setup: Vercel Project → Storage → create a Blob store (injects the token),
 * then add RESEARCH_INGEST_SECRET and put the same value in the add-on's
 * research_endpoint config. Nothing else.
 */
export const prerender = false;

import type { APIRoute } from 'astro';
import { put } from '@vercel/blob';

const MAX_BYTES = 8 * 1024 * 1024; // 8 MB per session — generous; a long session is ~500 KB

function json(status: number, obj: unknown): Response {
  return new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json' } });
}

function safe(s: string | null, fallback: string): string {
  return (s || '').replace(/[^a-zA-Z0-9_.-]/g, '').slice(0, 80) || fallback;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const secret = import.meta.env.RESEARCH_INGEST_SECRET ?? process.env.RESEARCH_INGEST_SECRET;
    if (!secret) return json(503, { error: 'ingest not configured' });
    if (request.headers.get('x-meridian-key') !== secret) return json(401, { error: 'unauthorized' });

    const anon = safe(request.headers.get('x-meridian-anon'), 'unknown');
    const session = safe(request.headers.get('x-meridian-session'), 'session');

    const body = await request.text();
    if (!body) return json(400, { error: 'empty body' });
    if (body.length > MAX_BYTES) return json(413, { error: 'too large' });

    // @vercel/blob auto-resolves credentials from the connected Blob store (or from
    // BLOB_READ_WRITE_TOKEN if explicitly set). Use the explicit token when present,
    // otherwise let the SDK pick it up — so we don't hard-require manual token setup.
    const token = import.meta.env.BLOB_READ_WRITE_TOKEN ?? process.env.BLOB_READ_WRITE_TOKEN;
    const opts: Record<string, unknown> = {
      access: 'private',         // the store is private — data is access-controlled
      addRandomSuffix: false,
      allowOverwrite: true,      // streaming flushes overwrite one object per session
      contentType: 'application/x-ndjson',
    };
    if (token) opts.token = token;

    // STABLE key per session (no timestamp suffix): the add-on streams the growing
    // recording every ~60 s, each POST overwriting the same object, so the stored copy
    // always converges to the latest bytes — near-real-time, exactly one object/session,
    // never duplicated.
    const key = `research/${anon}/${session}.ndjson`;
    const blob = await put(key, body, opts as any);

    return json(200, { ok: true, pathname: blob.pathname });
  } catch (e) {
    return json(500, { error: 'ingest failed' });
  }
};

// Reject other methods cleanly.
export const GET: APIRoute = async () => json(405, { error: 'method not allowed' });
