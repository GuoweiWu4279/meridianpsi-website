/**
 * src/utils/whop-license.ts
 *
 * One license check against Whop — the logic behind POST /api/license/validate
 * (src/pages/api/license/validate.ts). Kept free of Astro so it can be run on its
 * own: `node scripts/license-selftest.mjs` (add `--live` to also ask the real Whop).
 *
 * Whop retired API v2 on 2026-11-13: POST /api/v2/memberships/{key}/validate_license
 * now answers 410 Gone, which is what broke every activation from that day on.
 * The replacement is GET /api/v1/memberships/{id}, which takes a license key in
 * place of the mem_ id (docs.whop.com/developer/api/migrate-from-previous-versions#v2).
 *
 * v1 has no `valid` flag. A membership grants access when its status is one of
 * VALID_STATUSES — Whop's own list for license checks
 * (docs.whop.com/supported-business-models/saas.md#license-key-integration) plus
 * past_due, which Whop's guide says to add "if you let customers keep access while Whop
 * retries a failed renewal". We do (decided 2026-11-20): Guard is a risk tool, and a card
 * hiccup must not pull a trader's protection mid-session while Whop is still retrying.
 * When the retries fail Whop cancels the membership itself (James: failed 11-11, canceled
 * 11-14), and access ends then.
 *
 * The response the clients parse (NT8 add-on LicenseManager.cs, desktop AppLicense.cs)
 * is unchanged:
 *   200 {"valid":true|false,"status":"...","plan":"plan_xxx","id":"mem_xxx","product":"prod_xxx"}
 *   404 {"valid":false,"error":"license not found"}            (unknown key)
 *   502 {"valid":false,"error":"upstream ...","upstream_status":N}  (Whop or our key in trouble)
 * Clients treat 502 as OFFLINE and ride their 7-day grace; they never hard-deny on it.
 * `upstream_status` is new: the add-on prints the first 300 chars of a non-success body
 * to the NinjaScript Output, so the next outage of this kind shows up in a customer's log.
 */

export const WHOP_MEMBERSHIPS_URL = 'https://api.whop.com/api/v1/memberships';
// Whop: "pin a dated version with the Api-Version-Date header" — keeps the response shape fixed.
export const WHOP_API_VERSION = '2026-08-21-1';
export const UPSTREAM_TIMEOUT_MS = 10_000;

export const VALID_STATUSES: ReadonlySet<string> = new Set(['active', 'trialing', 'completed', 'past_due']);

// Whop product ids (stable while plans churn).
export const GUARD_PRODUCT = 'prod_1sWPRSzcJjAL5';
export const CORE_PRODUCT = 'prod_v1Y4P0lyJPHbT';

// Fallback only — used when Whop's response carries no product.
// Includes retired/hidden plans on purpose: existing members still hold them.
const PLAN_TO_PRODUCT: Record<string, string> = {
  plan_oM9AnpJdVDpgg: GUARD_PRODUCT, // Guard $29.99/mo (current)
  plan_ZHX4ySB65fahf: GUARD_PRODUCT, // Guard monthly (hidden, legacy members)
  plan_frPOgHtDTvBkR: GUARD_PRODUCT, // Guard annual (hidden, legacy members)
  plan_MGCcEbDRslnpn: GUARD_PRODUCT, // Guard (internal)
  plan_ywOyNPvDxrxxV: CORE_PRODUCT, // Core free (current)
  plan_4Z0XZqQl7TaDH: CORE_PRODUCT, // Core monthly (archived)
  plan_JhWetoQ39OCNz: CORE_PRODUCT, // Core annual (archived)
  plan_3g3DzRG6iLVr8: CORE_PRODUCT, // Core (internal)
};

export interface LicenseResult {
  status: number;
  body: Record<string, unknown>;
}

// Accepts a bare id string or an object carrying `id`; anything else → ''.
function idOf(v: unknown): string {
  if (typeof v === 'string') return v;
  if (v && typeof v === 'object' && typeof (v as { id?: unknown }).id === 'string') return (v as { id: string }).id;
  return '';
}

function planOf(m: Record<string, unknown>): string {
  return idOf(m.plan_id) || idOf(m.plan);
}

function productOf(m: Record<string, unknown>, plan: string): string {
  return idOf(m.product_id) || idOf(m.product) || idOf(m.access_pass) || PLAN_TO_PRODUCT[plan] || '';
}

/** Path-safe charset, sane length. Whop keys look like `X-XXXXXX-XXXXXXXX-XXXXXXX`; mem_ ids also pass. */
export function isPlausibleKey(key: string): boolean {
  return key.length > 0 && key.length <= 200 && /^[a-zA-Z0-9_-]+$/.test(key);
}

export async function checkLicense(
  key: string,
  apiKey: string,
  fetchImpl: typeof fetch = fetch
): Promise<LicenseResult> {
  if (!isPlausibleKey(key)) return { status: 404, body: { valid: false, error: 'license not found' } };

  let resp: Response;
  let text = '';
  try {
    resp = await fetchImpl(`${WHOP_MEMBERSHIPS_URL}/${encodeURIComponent(key)}`, {
      method: 'GET',
      headers: { authorization: `Bearer ${apiKey}`, 'Api-Version-Date': WHOP_API_VERSION },
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
    text = await resp.text();
  } catch {
    return { status: 502, body: { valid: false, error: 'upstream unreachable' } }; // client → offline grace
  }

  // Whop announces a retirement months ahead with Deprecation / Sunset headers on every response
  // of the doomed route. Nobody saw them for v2, so the first sign was a customer locked out.
  // Pass them through (additive fields; clients ignore unknown keys) so the health check
  // (ai-company-os hooks/meridian-license-recall.mjs) can warn before the date.
  const notice = upstreamNotice(resp.headers);

  if (resp.status === 404) return { status: 404, body: { valid: false, error: 'license not found', ...notice } };

  // Anything else that isn't a success (401/403 = OUR key, 410 = retired route, 429, 5xx)
  // is our side's trouble — never punish the customer for it.
  if (!resp.ok) {
    return { status: 502, body: { valid: false, error: 'upstream error', upstream_status: resp.status, ...notice } };
  }

  let m: Record<string, unknown>;
  try {
    m = JSON.parse(text);
  } catch {
    return {
      status: 502,
      body: { valid: false, error: 'upstream parse error', upstream_status: resp.status, ...notice },
    };
  }
  if (!m || typeof m !== 'object' || typeof m.status !== 'string') {
    return {
      status: 502,
      body: { valid: false, error: 'upstream parse error', upstream_status: resp.status, ...notice },
    };
  }

  // Sanitize: forward only what the clients parse. The raw membership (customer email,
  // license key, manage URL, …) never leaves this function.
  const plan = planOf(m);
  return {
    status: 200,
    body: {
      valid: VALID_STATUSES.has(m.status),
      status: m.status,
      plan,
      id: typeof m.id === 'string' ? m.id : '',
      product: productOf(m, plan),
      ...notice,
    },
  };
}

/** Whop's retirement signals, if any: `Deprecation: @<unix seconds>`, `Sunset: <HTTP date>`. */
export function upstreamNotice(headers: Headers): Record<string, string> {
  const clean = (v: string | null) => (v ? v.replace(/[^\x20-\x7e]/g, '').slice(0, 100) : '');
  const out: Record<string, string> = {};
  const sunset = clean(headers.get('sunset'));
  const deprecation = clean(headers.get('deprecation'));
  if (sunset) out.upstream_sunset = sunset;
  if (deprecation) out.upstream_deprecation = deprecation;
  return out;
}
