#!/usr/bin/env node
/**
 * scripts/replay-whop-event.mjs
 *
 * One-off / on-demand tool for re-driving the production Whop webhook
 * after a real event has already passed (e.g. the customer paid while
 * the webhook function was broken, or you want to back-fill a license
 * without bothering the customer).
 *
 * It builds a Whop-shaped `membership.went_valid` payload, signs it
 * with WHOP_WEBHOOK_SECRET (HMAC-SHA256, same scheme as Whop), and
 * POSTs it to https://www.meridianpsi.com/api/whop-webhook.
 *
 * The deployed webhook then runs the full provisioning flow:
 *   - mint an NT Ecosystem license for that email (Monthly or Annual,
 *     decided from the plan id)
 *   - send the Resend welcome email
 *   - log everything to Vercel runtime logs
 *
 * Usage:
 *   $env:WHOP_WEBHOOK_SECRET = "whsec_..."   # PowerShell
 *   node scripts/replay-whop-event.mjs --email=foo@bar.com --plan=guard-monthly
 *
 *   # or pass the secret inline
 *   node scripts/replay-whop-event.mjs --secret=whsec_... --email=foo@bar.com --plan=core-annual
 *
 * Plan keys map to Whop plan IDs that match the source of truth in
 * `LicenseManager.cs` / `MERIDIAN.md` / `pricing.json`:
 *   guard-monthly -> plan_ZHX4ySB65fahf
 *   guard-annual  -> plan_frPOgHtDTvBkR
 *   core-monthly  -> plan_4Z0XZqQl7TaDH
 *   core-annual   -> plan_JhWetoQ39OCNz
 */

import crypto from 'node:crypto';

const PLAN_IDS = {
  'guard-monthly': 'plan_ZHX4ySB65fahf',
  'guard-annual':  'plan_frPOgHtDTvBkR',
  'core-monthly':  'plan_4Z0XZqQl7TaDH',
  'core-annual':   'plan_JhWetoQ39OCNz',
};

const DEFAULT_URL = 'https://www.meridianpsi.com/api/whop-webhook';

function parseArgs(argv) {
  const out = {};
  for (const a of argv.slice(2)) {
    const m = a.match(/^--([^=]+)=(.*)$/);
    if (m) out[m[1]] = m[2];
  }
  return out;
}

const args = parseArgs(process.argv);

const secret = args.secret ?? process.env.WHOP_WEBHOOK_SECRET;
const email  = args.email;
const planKey = (args.plan ?? '').toLowerCase();
const name   = args.name ?? '';
const action = args.action ?? 'membership.went_valid';
const url    = args.url ?? DEFAULT_URL;

if (!secret) {
  console.error('ERROR: no WHOP_WEBHOOK_SECRET. Pass --secret=... or set the env var.');
  process.exit(1);
}
if (!email) {
  console.error('ERROR: --email=<address> is required.');
  process.exit(1);
}
if (!PLAN_IDS[planKey]) {
  console.error(`ERROR: --plan must be one of: ${Object.keys(PLAN_IDS).join(', ')}`);
  process.exit(1);
}

const payload = {
  action,
  data: {
    id: `replay_${Date.now()}`,
    user: { email, name },
    plan: { id: PLAN_IDS[planKey] },
  },
};

const rawBody = JSON.stringify(payload);
const signature = crypto.createHmac('sha256', secret).update(rawBody, 'utf8').digest('hex');

console.log(`POST ${url}`);
console.log(`  email=${email}  plan=${planKey} (${PLAN_IDS[planKey]})  action=${action}`);

const res = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type':    'application/json',
    'whop-signature':  signature,
  },
  body: rawBody,
});

const text = await res.text();
console.log(`<- ${res.status} ${res.statusText}`);
console.log(text);

if (res.status >= 400) process.exit(2);
