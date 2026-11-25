// Selftest for src/utils/whop-license.ts — the logic behind POST /api/license/validate.
//
//   node scripts/license-selftest.mjs          # mapping checks against a fake Whop (no network)
//   node scripts/license-selftest.mjs --live   # also asks the real Whop with $WHOP_API_KEY
//                                               (unknown key must come back 404, not 502)
//
// Red on purpose before the 2026-11-20 fix: the old route called the retired v2
// validate_license, which Whop answers with 410 — the live check below reported 502.
import { checkLicense, VALID_STATUSES } from '../src/utils/whop-license.ts';

let failed = 0;
function expect(name, cond, detail = '') {
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}${cond ? '' : '  ' + detail}`);
  if (!cond) failed++;
}

// A fake fetch that records the request and answers with a canned response.
function fakeWhop(status, body, headers = {}) {
  const calls = [];
  const fn = async (url, init) => {
    calls.push({ url: String(url), init });
    if (status === 'throw') throw new Error('network down');
    return new Response(typeof body === 'string' ? body : JSON.stringify(body), { status, headers });
  };
  fn.calls = calls;
  return fn;
}

const member = (status, extra = {}) => ({
  id: 'mem_TEST',
  status,
  plan_id: 'plan_oM9AnpJdVDpgg',
  product_id: 'prod_1sWPRSzcJjAL5',
  product: { id: 'prod_1sWPRSzcJjAL5', title: 'Meridian Guard' },
  license_key: 'X-SECRET-NOTFORWARD',
  manage_url: 'https://whop.com/billing/manage/x',
  ...extra,
});

// 1. The request goes to the Current API, by GET, with a pinned version, key in the path.
{
  const f = fakeWhop(200, member('active'));
  await checkLicense('A-1B2C3D-4E5F6A7B-8C9D0E1', 'k', f);
  const c = f.calls[0];
  expect(
    'calls v1 memberships/{key}',
    c.url === 'https://api.whop.com/api/v1/memberships/A-1B2C3D-4E5F6A7B-8C9D0E1',
    c.url
  );
  expect('uses GET', c.init.method === 'GET', c.init.method);
  expect('pins Api-Version-Date', !!c.init.headers['Api-Version-Date']);
  expect('never calls v2', !/\/v2\//.test(c.url), c.url);
}

// 2. Access statuses → valid:true; the rest → valid:false. Whop's list plus past_due
//    (access kept while Whop retries a failed renewal; decided 2026-11-20).
for (const s of ['active', 'trialing', 'completed', 'past_due']) {
  const r = await checkLicense('KEY-1', 'k', fakeWhop(200, member(s)));
  expect(`${s} → 200 valid:true`, r.status === 200 && r.body.valid === true, JSON.stringify(r));
}
for (const s of ['canceled', 'expired', 'drafted', 'unresolved']) {
  const r = await checkLicense('KEY-1', 'k', fakeWhop(200, member(s)));
  expect(
    `${s} → 200 valid:false status=${s}`,
    r.status === 200 && r.body.valid === false && r.body.status === s,
    JSON.stringify(r)
  );
}
expect(
  'VALID_STATUSES is exactly active/trialing/completed/past_due',
  [...VALID_STATUSES].sort().join() === 'active,completed,past_due,trialing'
);

// 3. Body is sanitized: only valid/status/plan/id/product, with the ids the clients read.
{
  const r = await checkLicense('KEY-1', 'k', fakeWhop(200, member('active')));
  expect(
    'body keys are the contract',
    Object.keys(r.body).sort().join() === 'id,plan,product,status,valid',
    Object.keys(r.body).join()
  );
  expect('plan = plan_id', r.body.plan === 'plan_oM9AnpJdVDpgg', r.body.plan);
  expect('product = product_id', r.body.product === 'prod_1sWPRSzcJjAL5', r.body.product);
  expect('id = mem id', r.body.id === 'mem_TEST', r.body.id);
  expect('license key not forwarded', !JSON.stringify(r.body).includes('SECRET'));
}

// 4. Product falls back to the plan map when Whop sends none.
{
  const r = await checkLicense(
    'KEY-1',
    'k',
    fakeWhop(200, member('active', { product_id: undefined, product: undefined, plan_id: 'plan_ywOyNPvDxrxxV' }))
  );
  expect('no product → plan map (Core)', r.body.product === 'prod_v1Y4P0lyJPHbT', r.body.product);
}

// 5. Unknown key → 404 (the clients show "not found"); bad shapes never reach Whop.
{
  const r = await checkLicense('NOPE', 'k', fakeWhop(404, { error: { type: 'not_found' } }));
  expect('Whop 404 → 404 valid:false', r.status === 404 && r.body.valid === false, JSON.stringify(r));
  const f = fakeWhop(200, member('active'));
  const bad = await checkLicense('../../etc', 'k', f);
  expect('path-unsafe key → 404 without calling Whop', bad.status === 404 && f.calls.length === 0, JSON.stringify(bad));
  const empty = await checkLicense('', 'k', f);
  expect('empty key → 404', empty.status === 404);
}

// 6. Our side's trouble → 502 (clients ride grace), with the upstream status for diagnosis.
for (const s of [401, 403, 410, 429, 500, 503]) {
  const r = await checkLicense('KEY-1', 'k', fakeWhop(s, { error: { type: 'x' } }));
  expect(
    `Whop ${s} → 502 upstream_status=${s}`,
    r.status === 502 && r.body.upstream_status === s && r.body.valid === false,
    JSON.stringify(r)
  );
}
{
  const r = await checkLicense('KEY-1', 'k', fakeWhop('throw'));
  expect(
    'network error → 502 unreachable',
    r.status === 502 && r.body.error === 'upstream unreachable',
    JSON.stringify(r)
  );
  const p = await checkLicense('KEY-1', 'k', fakeWhop(200, '<html>captive portal</html>'));
  expect(
    'non-JSON 200 → 502 parse error',
    p.status === 502 && p.body.error === 'upstream parse error',
    JSON.stringify(p)
  );
  const q = await checkLicense('KEY-1', 'k', fakeWhop(200, { hello: 'world' }));
  expect('JSON 200 without status → 502 (never a silent valid:false)', q.status === 502, JSON.stringify(q));
}

// 6b. Whop's retirement signals (Deprecation / Sunset headers) reach the health check.
{
  const hdr = { Sunset: 'Fri, 13 Nov 2026 00:00:00 GMT', Deprecation: '@1789948800' };
  const r = await checkLicense('NOPE', 'k', fakeWhop(404, { error: { type: 'not_found' } }, hdr));
  expect(
    'Sunset + Deprecation passed through on 404',
    r.status === 404 && r.body.upstream_sunset === hdr.Sunset && r.body.upstream_deprecation === hdr.Deprecation,
    JSON.stringify(r)
  );
  const ok = await checkLicense('KEY-1', 'k', fakeWhop(200, member('active'), hdr));
  expect(
    'Sunset passed through on 200, contract fields intact',
    ok.body.valid === true && !!ok.body.upstream_sunset,
    JSON.stringify(ok)
  );
  const none = await checkLicense('KEY-1', 'k', fakeWhop(200, member('active')));
  expect(
    'no notice fields when Whop sends none',
    !('upstream_sunset' in none.body) && !('upstream_deprecation' in none.body),
    JSON.stringify(none)
  );
}

// 7. Live: the real Whop answers an unknown key with 404 — proves the route exists and our key can read memberships.
if (process.argv.includes('--live')) {
  const apiKey = process.env.WHOP_API_KEY;
  if (!apiKey) {
    expect('live: WHOP_API_KEY set', false, 'set WHOP_API_KEY in the environment');
  } else {
    const r = await checkLicense('SELFTEST-UNKNOWN-KEY-0000', apiKey);
    expect('live: unknown key → 404 from real Whop', r.status === 404, JSON.stringify(r));
  }
}

console.log(failed ? `\n${failed} FAILED` : '\nALL PASS');
process.exitCode = failed ? 1 : 0;
