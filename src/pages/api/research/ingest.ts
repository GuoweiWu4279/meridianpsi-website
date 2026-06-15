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

// ── Server-side write throttle (cost guard) ──────────────────────────────────
// The add-on re-POSTs the whole growing session file on a ~60s cadence; idle PSI
// heartbeats keep the file growing, so a session left open (e.g. overnight) would
// otherwise trigger one Blob `put` — a billable "advanced operation" — every minute
// (one real overnight session burned ~795 and tripped the store's quota). We cannot
// force already-installed builds to update, so we cap writes HERE — the choke point
// every upload flows through regardless of client version: at most one stored write
// per session per STORE_MIN_INTERVAL_MS, and PER_ANON_DAILY per install per day.
// State lives on the warm Fluid Compute instance (per-instance; fine at this scale —
// swap in a KV/Redis for exact multi-instance accounting later).
const STORE_MIN_INTERVAL_MS = 10 * 60 * 1000; // ≤ 1 stored write per session / 10 min
const PER_ANON_DAILY = 300; // per-install daily backstop
const lastStoreAt = new Map<string, number>();
const anonDaily = new Map<string, { day: string; n: number }>();

function prune(now: number): void {
  if (lastStoreAt.size > 5000) for (const [k, t] of lastStoreAt) if (now - t > 86_400_000) lastStoreAt.delete(k);
}

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
    // STABLE key per session (no timestamp suffix): every POST overwrites one object
    // per session, so streaming + final flushes converge — never duplicated.
    const key = `research/${anon}/${session}.ndjson`;

    // Throttle BEFORE reading the (up to 8 MB) body or touching Blob. A throttled
    // flush returns 429 (NOT a 2xx), so the add-on never marks it "done" — the
    // session's complete file still lands on a later streaming window, or via the
    // add-on's next-launch DrainPending retry. So we save the billable write without
    // ever losing a session.
    const now = Date.now();
    prune(now);
    const today = new Date(now).toISOString().slice(0, 10);
    const ad = anonDaily.get(anon);
    const dayN = ad && ad.day === today ? ad.n : 0;
    if (dayN >= PER_ANON_DAILY) return json(429, { throttled: 'anon-daily-cap' });
    const prevAt = lastStoreAt.get(key);
    if (prevAt && now - prevAt < STORE_MIN_INTERVAL_MS)
      return json(429, { throttled: 'min-interval', retryAfterMs: STORE_MIN_INTERVAL_MS - (now - prevAt) });

    const body = await request.text();
    if (!body) return json(400, { error: 'empty body' });
    if (body.length > MAX_BYTES) return json(413, { error: 'too large' });

    // @vercel/blob auto-resolves credentials from the connected Blob store (or from
    // BLOB_READ_WRITE_TOKEN if explicitly set). Use the explicit token when present,
    // otherwise let the SDK pick it up — so we don't hard-require manual token setup.
    const token = import.meta.env.BLOB_READ_WRITE_TOKEN ?? process.env.BLOB_READ_WRITE_TOKEN;
    const opts: Record<string, unknown> = {
      access: 'private', // the store is private — data is access-controlled
      addRandomSuffix: false,
      allowOverwrite: true, // streaming flushes overwrite one object per session
      contentType: 'application/x-ndjson',
    };
    if (token) opts.token = token;

    const blob = await put(key, body, opts as any);
    lastStoreAt.set(key, now); // record store time (for the per-session interval gate)
    anonDaily.set(anon, { day: today, n: dayN + 1 }); // count toward the daily backstop

    return json(200, { ok: true, pathname: blob.pathname });
  } catch (e) {
    return json(500, { error: 'ingest failed' });
  }
};

// Reject other methods cleanly.
export const GET: APIRoute = async () => json(405, { error: 'method not allowed' });
