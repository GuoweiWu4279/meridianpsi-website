# Partner Program — Progress & Handoff

**Last updated:** 2026-05-12 (evening — accordion + redirect pass)
**Owner:** Gary
**Goal:** Maximize *recurring revenue* from partner-channel signups (not just partner count). Cold outreach via Instantly from `garycaffrey@meridian-partnership.com` (new domain, currently in warm-up).
**Target:** NT8-focused YouTubers / Twitter / podcasts / newsletters with 1k–20k followers (futures, prop firms, trading psychology).

---

## Status snapshot

- ✅ **Phase 1 — Site fixes & infrastructure** — complete
- ✅ **Phase 2 — `/partners` landing page** — complete
- ⏳ **Phase 3 — Creator kit assets** — not started (Gary's deliverable: logo pack, screenshots, video footage)
- ⏳ **Phase 4 — Email outreach copy + Gemini personalization** — not started

---

## What changed in the codebase (this session)

### Site-wide consistency fixes

- `src/pages/features.astro` — Lemon Squeezy URL → Whop checkout · `$24.99` → `$49.99` · "365 days" retention → "5 years" · removed false "zero HTTP calls" claim (corrected to license-validation only)
- `src/pages/compare/index.astro` — removed "no credit card to start" CTA
- `src/pages/glossary.astro` — PSI 4-zone numbers · 7-signal naming canonical
- `src/pages/what-is-meridian-psi.astro` — 7-signal list normalized · removed "Credit card required at checkout"
- `src/data/features.json` — PSI zones updated to 4-zone model
- `src/data/faq/what-is-psi.md` — 4-zone description (added Warning)
- `src/data/post/what-is-psychological-stability-index.md` — Hold Bias → Rushed Exit · 3-zone → 4-zone · "below 55 considered Critical" → "below 55 classified as Critical"
- `src/data/changelog/v0.9.0.md` — fixed `downloadUrl: ~` (null) schema error blocking dev server

### PSI zones (canonical, from add-on code)

| Zone | Range |
|---|---|
| Stable | PSI ≥ 88 |
| Caution | 72 ≤ PSI < 88 |
| Warning | 55 ≤ PSI < 72 |
| Critical | PSI < 55 |

### 7 behavioral signals (canonical naming)

D1 Revenge Entry · D2 Stop Manipulation · D3 Size Spike · D4 Rushed Exit · D5 Position Overstay · D6 Rule Violations · D7 Overtrading Pace

### About page

- `src/pages/about.astro` — full rewrite, **product-led**. Removed all false personal claims (5+ years trading, prop firm passes, etc.). Anchor: "We don't publish track records. The product is the work."

### Testimonials anonymization

- `src/pages/index.astro` — all 17 marquee testimonials → name = "Anonymous", role attribution kept
- `src/pages/checkout.astro` — 2 testimonials anonymized
- **Decision**: testimonials stay on the marketing site (Gary's call) but **never used in partner outreach materials**

### Affiliate / Partner consolidation

- `src/pages/partners.astro` — **NEW** comprehensive landing page (cold-outreach destination)
- `src/pages/affiliate.astro` — converted to `Astro.redirect('/partners', 301)` to preserve any inbound SEO
- `src/navigation.ts` — footer link "Affiliate Program" removed, "Partner Program" added
- `src/pages/index.astro` — homepage CTA now points to `/partners` with Partner Program label

---

## `/partners` page structure (current)

1. **Hero** — H1 "Partner with Meridian." · subhead one-liner · "Apply now" + "See the details" CTAs
2. **The Deal** — 3 cards (30% / 10% / Free) + earnings block:
   - Per-sub: $69.99 × 0.90 × 0.30 = **$18.90/mo recurring**
   - Tiers: 20 subs → $4,536/yr · 100 subs → $22,680/yr · 200 subs → $45,360/yr
   - "How this scales" callout — 10K-view video × 1% conversion = 100 trial installs · industry trial-to-paid 30–60% · long-term partnership compounds across content cycles
3. **Why this works** — 3 icon cards: Audience pays for NT8 software · Software not a guru · The trial does the convincing
4. **Details on demand (accordion, default-collapsed)** — 4 items:
   - What's in the creator kit?
   - How tracking & payouts work *(Whop affiliate-link attribution + separate 10%-off promo code, 30-day waiting period, monthly payouts via Whop affiliate panel)*
   - Brand-safe partnership *(reverse-risk reframe)*
   - Program terms & fine print
5. **Apply form** — Formspree endpoint `xaqalank` (same as `/support`), hidden `_subject = "Partner Application"`. 8 fields: name, email, channel name, channel URL, audience size, audience trades, fit reason, optional notes
6. **Bottom disclaimer** — single line (FTC + program terms)

### Visual system (for any future edits to keep consistency)

- Section bg alternates: `bg-white` ↔ `bg-zinc-50/50`
- Cards: `bg-white border border-zinc-200 rounded-2xl` on zinc-50 sections; inset cards inside white containers use `bg-zinc-50/60`
- Eyebrow text: `text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-700`
- Headlines: `text-zinc-900` bold
- Body: `text-zinc-500/600/700`
- Single accent color: emerald-600/700. **No gradients, no black backgrounds, no double borders.**

---

## Open decisions (waiting on Gary)

| Decision | Status | Notes |
|---|---|---|
| Add `/affiliate → /partners` 301 to `vercel.json` for proper edge-level redirect | ✅ Done 2026-05-12 PM | Added at the top of the `redirects` array. `affiliate.astro` retained as dev/preview fallback (Vercel only reads `vercel.json` on production). |
| Confirm Whop affiliate mechanics actually match what's written in the "How tracking & payouts work" accordion | ✅ Done 2026-05-12 PM | Verified against `docs.whop.com/manage-your-business/growth-marketing/affiliate-program` + `whop.com/earnings-terms`. Real model: **affiliate link = attribution** (URL param `?a=name`), **promo code = audience discount** (separate mechanism). Old accordion incorrectly fused them. Rewritten to 5 bullets; tax-form and cancel/resubscribe bullets removed (out of scope for partner outreach — affiliates handle their own taxes). 30% commission rate, recurring-on-subscription, 30-day waiting, monthly payout via Whop panel — all confirmed accurate. |
| Creator kit asset preparation | Waiting | Gary delivers: logo pack, screenshots, video footage. AI delivers: talking-points doc, 3 video script templates |
| Default-expand any accordion item? (currently all collapsed) | Waiting | Brand-safe partnership might be worth defaulting open — it's the trust-building section that small bloggers care about most |
| Reconcile stale root-level docs with canonical `/partners` offer | Waiting | `AFFILIATE_PROGRAM.md` (root) still says 20% first-purchase / 12 months access / 30-day attribution window — pre-Whop legacy text. `CREATOR_OUTREACH_EMAIL.md` says "10% off **first** purchase" — should be "10% permanent discount". Not user-facing; clean up next time we touch outreach copy. |

---

## Next phase — Email outreach

Once Phase 3 (creator kit) is done, the next conversation is Phase 4:

1. **Email angle proposals** — 3 distinct positioning angles (e.g., "the boring SaaS angle" vs "the audience-protection angle" vs "the recurring-revenue angle"). Gary picks one to start.
2. **Subject line variants** — 3–5 per angle, A/B-able in Instantly
3. **Body template** — 1 polished long-form, 1 polished short-form
4. **Gemini personalization prompt** — designed to read each blogger's last 3 videos and rewrite ONLY the opening 2 sentences (preserves quality, adds personalization)
5. **Follow-up sequence** — 2-3 emails over 14 days, decreasing length, increasing specificity

### Outreach principles agreed upon

- **Quality over volume** during warm-up (30–50/week, not mass blasts)
- Target: 1k–20k follower NT8-relevant creators
- KPI: paid subscriptions converted, not partner count
- **No fabricated testimonials in outreach materials** (separate from homepage marquee decision)
- Reverse-risk wording (final): *"Your audience trusts you. We do not take that lightly. If the response to your first piece of content is not what either of us hoped for, we close the partnership clean — assets pulled, no further obligation, no awkward follow-up."*

---

## Important context Gary established

- **Identity**: "Gary Caffrey" is a pseudonym. Real founder won't appear on camera. About page intentionally avoids personal narrative.
- **Honesty floor**: Real trading background = ~2 years stocks (lost), few months futures (no edge). Switched to building software. About page reframed product-led to avoid misrepresentation.
- **Whop checkout links** are the source of truth for plan IDs — Lemon Squeezy is fully deprecated.
- **Domain warm-up**: `meridian-partnership.com` is new (set up day before this session). Not sending volume yet; using time to build assets first.

---

## How to resume tomorrow

1. Open this file first.
2. Run `npm run dev` (`$nodeBin = "C:\Users\GaryWu\AppData\Local\nodejs\node-v22.15.0-win-x64"; $env:PATH = "$nodeBin;" + $env:PATH; npm run dev`).
3. Visit `http://localhost:4321/partners` to confirm current state.
4. Decide which open decision to address first.
5. Say "继续 partner program" — I'll re-read this doc and pick up cleanly.
