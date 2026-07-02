/**
 * src/pages/api/admin/research.ts
 *
 * Protected admin API for the research-data program. Lists/inspects/deletes the
 * anonymized session recordings stored in Vercel Blob by api/research/ingest.ts.
 *
 * Auth: header `x-admin-key` must equal env RESEARCH_ADMIN_SECRET (else 401).
 *       If RESEARCH_ADMIN_SECRET is unset the endpoint is disabled (503) — safe default.
 *
 * Blob credentials: read from env BLOB_READ_WRITE_TOKEN and passed explicitly to
 * every blob call (list/del/head) AND used as the bearer for private-blob content
 * fetches. This is deterministic across environments (the connected store is
 * OIDC-secured, so a plain auto-resolved token is not always present at runtime).
 *
 * Endpoints:
 *   GET  ?action=list                 -> { installs:[{id,objects,sessions,totalBytes,firstSeen,lastSeen}], totals }
 *   GET  ?action=get&path=<pathname>  -> { path, text }   (raw NDJSON of one session)
 *   POST { action:'delete', install } -> deletes every object under research/<install>/
 *   POST { action:'delete', path }    -> deletes a single object
 */
export const prerender = false;

import type { APIRoute } from 'astro';
import { list, del, head } from '@vercel/blob';

const PREFIX = 'research/';

function json(status: number, obj: unknown): Response {
  return new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json' } });
}

function authed(request: Request): boolean | null {
  const secret = import.meta.env.RESEARCH_ADMIN_SECRET ?? process.env.RESEARCH_ADMIN_SECRET;
  if (!secret) return null; // not configured
  return request.headers.get('x-admin-key') === secret;
}

function installOf(pathname: string): string {
  const m = pathname.match(/^research\/([^/]+)\//);
  return m ? m[1] : '(root)';
}

function sessionDate(pathname: string): string | null {
  const m = pathname.match(/session_(\d{8})_(\d{6})/);
  return m ? `${m[1]}` : null;
}

function blobToken(): string {
  return import.meta.env.BLOB_READ_WRITE_TOKEN ?? process.env.BLOB_READ_WRITE_TOKEN ?? '';
}

async function listAll(token: string) {
  let cursor: string | undefined;
  const blobs: { pathname: string; size: number; uploadedAt: Date; url: string }[] = [];
  do {
    const r = await list({ prefix: PREFIX, cursor, limit: 1000, token });
    for (const b of r.blobs) blobs.push({ pathname: b.pathname, size: b.size, uploadedAt: b.uploadedAt, url: b.url });
    cursor = r.cursor;
  } while (cursor);
  return blobs;
}

export const GET: APIRoute = async ({ request, url }) => {
  const ok = authed(request);
  if (ok === null) return json(503, { error: 'admin not configured (set RESEARCH_ADMIN_SECRET)' });
  if (!ok) return json(401, { error: 'unauthorized' });

  const token = blobToken();
  if (!token) return json(503, { error: 'blob token not configured (set BLOB_READ_WRITE_TOKEN)' });
  const action = url.searchParams.get('action') ?? 'list';

  if (action === 'list') {
    const blobs = await listAll(token);
    const map = new Map<
      string,
      { objects: number; sessions: Set<string>; bytes: number; first: number; last: number; dates: Set<string> }
    >();
    for (const b of blobs) {
      const id = installOf(b.pathname);
      const e = map.get(id) ?? {
        objects: 0,
        sessions: new Set(),
        bytes: 0,
        first: Infinity,
        last: 0,
        dates: new Set(),
      };
      e.objects++;
      e.sessions.add(b.pathname.split('/').pop() || b.pathname);
      e.bytes += b.size;
      const t = new Date(b.uploadedAt).getTime();
      e.first = Math.min(e.first, t);
      e.last = Math.max(e.last, t);
      const d = sessionDate(b.pathname);
      if (d) e.dates.add(d);
      map.set(id, e);
    }
    const installs = [...map.entries()]
      .map(([id, e]) => ({
        id,
        objects: e.objects,
        sessions: e.sessions.size,
        totalBytes: e.bytes,
        firstSeen: isFinite(e.first) ? new Date(e.first).toISOString() : null,
        lastSeen: e.last ? new Date(e.last).toISOString() : null,
        days: [...e.dates].sort(),
      }))
      .sort((a, b) => (b.lastSeen || '').localeCompare(a.lastSeen || ''));
    const totals = {
      installs: installs.length,
      objects: blobs.length,
      totalBytes: blobs.reduce((s, b) => s + b.size, 0),
    };
    return json(200, { installs, totals });
  }

  if (action === 'get') {
    const path = url.searchParams.get('path');
    if (!path || !path.startsWith(PREFIX)) return json(400, { error: 'bad path' });
    const h = await head(path, { token });
    const res = await fetch(h.url, { headers: { authorization: `Bearer ${token}` } });
    const text = await res.text();
    return json(200, { path, size: h.size, text });
  }

  if (action === 'sessions') {
    const install = url.searchParams.get('install');
    if (!install) return json(400, { error: 'install required' });
    const blobs = await listAll(token);
    const rows = blobs
      .filter((b) => installOf(b.pathname) === install)
      .map((b) => ({ path: b.pathname, size: b.size, uploadedAt: new Date(b.uploadedAt).toISOString() }))
      .sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt));
    return json(200, { install, sessions: rows });
  }

  return json(400, { error: 'unknown action' });
};

export const POST: APIRoute = async ({ request }) => {
  const ok = authed(request);
  if (ok === null) return json(503, { error: 'admin not configured (set RESEARCH_ADMIN_SECRET)' });
  if (!ok) return json(401, { error: 'unauthorized' });

  let body: any;
  try {
    body = await request.json();
  } catch {
    return json(400, { error: 'bad json' });
  }

  const token = blobToken();
  if (!token) return json(503, { error: 'blob token not configured (set BLOB_READ_WRITE_TOKEN)' });

  if (body?.action === 'delete') {
    const blobs = await listAll(token);
    let victims: { url: string; pathname: string }[] = [];
    if (body.install) victims = blobs.filter((b) => installOf(b.pathname) === body.install);
    else if (body.path) victims = blobs.filter((b) => b.pathname === body.path);
    else return json(400, { error: 'install or path required' });
    if (victims.length)
      await del(
        victims.map((v) => v.url),
        { token }
      );
    return json(200, { deleted: victims.length, paths: victims.map((v) => v.pathname) });
  }

  return json(400, { error: 'unknown action' });
};
