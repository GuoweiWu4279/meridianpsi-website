# Guard page refactor + site-wide honesty pass — BUILD SPEC

> Status: **EXECUTED 2026-06-26** (Phases 1–3 applied in-session; build + eslint green; /guard verified by screenshot).
> Remaining gated item: the Intel BLOCKER was resolved — Intel = **Core** (Gary, 2026-06-26); comparison table updated.
> Original plan below, authored 2026-06-26 from two product truth docs
> (`meridian-testbench/docs/GUARD-FOR-WEBSITE.md` = standalone app; NT8 `…/AddOns/GUARD_REFERENCE.md`
> = NT8 add-on) + a 75-finding site-wide audit. This doc is the single executable brief for the
> Web worktree session. **Where this disagrees with current copy, the truth docs win.**
> Cross-cutting facts → CANON. Pricing $ amounts → `src/data/pricing.json` (never from memory).

## Locked decisions (Gary, 2026-06-26)

1. **Structure:** ONE re-architected `/guard` page (keep the URL) with a platform **toggle** on the ladder
   section — NinjaTrader 8 (5 levels) ⟷ Standalone (6 tiers). Do **not** split into per-platform pages.
2. **Billing:** standalone is **co-equal** with NT8, not an "early-access appendix." Two ladders presented
   as peers; the Tradovate eval/demo broker lock becomes a headline (it is the strongest honest differentiator).
3. **Scope:** all three phases — flagship+sources, propagated on-site copy, AND off-site/channels.

## ⛔ BLOCKER — resolve before touching the Core-vs-Guard comparison table

**Is the Intel Layer a Core feature or a Guard feature?** The site contradicts itself:

- `src/pages/platforms.astro:40` → "Intel analytics workspace … **all tiers**" (Core included).
- `src/pages/guard.astro` comparison table (~L494-500) → Intel / Monthly Digest / PSI×P&L / Risk Brief / Stats
  listed as **Guard-only**.
- NT8 `GUARD_REFERENCE.md §1` (LicenseManager) → **Intelligence is Core-tier**.

This is a packaging/pricing fact owned by Client/Addon per CANON — **do not guess in copy.** Get the口径
confirmed, then make the comparison table + glossary + platforms agree. Likely outcome: Intel is **Core**,
and `guard.astro` mis-sells it as a Guard differentiator.

---

## The model the refactor is built on — the 3-layer enforcement spine

Every Guard action sits at one of three layers; the layer is what a determined, tilting trader can get around.
This is both the honest frame and the fix for ~3 of the 5 systemic overclaims.

| Layer               | What lives here                                                                                                                                                                                           | Bypassed by                                                | Device-proof?       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------- |
| **In-app friction** | NT8: Notify·Risk Alert·Acknowledge·Trading Pause·**Disconnect** (connection-level) · Strict Lock · Hard limits. Standalone: Notify·Alert·Acknowledge·Pause·**Cool-down Wall** · Strict Lock · Hard limits | close the app · another device                             | ❌                  |
| **OS / machine**    | Standalone **Cut** (Windows firewall, machine-wide)                                                                                                                                                       | another device (phone) · admin · close app                 | ❌                  |
| **Broker-level**    | Standalone + **Tradovate eval/demo only** → writes Tradovate's own liquidate-only lock                                                                                                                    | nothing device-side (edit the account's own risk settings) | ✅ **the only one** |

`NT8 (any broker)`, `Tradovate funded/live`, and `Ironbeam (any)` have **no** broker-level lock — app/connection-level only.

**The one-line correction:** "un-bypassable / can't be bypassed" belongs ONLY to the broker-level row.
Everywhere else, sell honest in-the-moment friction. Today the site has this backwards.

---

## Two products at a glance (what the toggle must encode)

|                             | NT8 add-on (GA, v1.5.x)                                                          | Standalone (Tradovate+Ironbeam, early access)                              |
| --------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Triggers                    | 6 (PSI / consec-losses / session P&L / unrealized / single-trade / session-time) | **same 6**                                                                 |
| Ladder                      | **5**: Notify · Risk Alert · Acknowledge · Trading Pause · **Disconnect**        | **6**: Notify · Alert · Acknowledge · Pause · **Cool-down Wall** · **Cut** |
| Hard limits                 | ✅ (Guard tier, off by default)                                                  | ✅ (Guard tier, off by default)                                            |
| Strict Lock                 | ✅ (app-level)                                                                   | ✅ (app-level)                                                             |
| Broker-level lock           | ❌                                                                               | ✅ **Tradovate eval/demo only**                                            |
| Never closes your positions | ✅                                                                               | ✅                                                                         |

Facts to keep straight while writing:

- **NT8 L2 "Risk Alert" is NON-BLOCKING** (a persistent banner). NT8 cannot reliably block a market order.
  Blocking/confirming an entry is **L3 Acknowledge**, never L2.
- **Standalone has NO "Disconnect" tier.** Its T5 is the Cool-down Wall. Standalone examples must never say "Disconnect (Broker)".
- **Cut is machine-wide, not account-wide** — a phone bypasses it. Always say "from that PC".
- The old **"Reverse market order"** Pause toggle no longer exists → it is now **automatic slipped-entry trim**.

---

## Canonical replacement phrasings — write ONCE, apply everywhere

Each propagated overclaim needs the SAME approved fix site-wide. Use these (trim to context; keep voice
"confident, with edge — honest beats 'can't be bypassed'").

**A. NT8 L2 Risk Alert (non-blocking)**

> Risk Alert — a persistent HUD banner that stays up while the condition holds and clears on its own.
> It doesn't block entries; it keeps the risk in front of you. (Stopping the entry is L3 Acknowledge's job.)

Short (ladders/lists): `persistent banner; non-blocking — warns, doesn't gate entries.`

**B. Cut (scope to the machine)**

> Cut — a Windows-firewall block of your broker's order servers. Machine-wide: an order physically cannot
> leave that PC — the one stop that holds even a market order **from that machine**. (A phone or second
> device is outside it; the device-proof lock is the broker-level one.)

Short: `…holds even a market order from that PC.`

**C. Strict Lock (drop bare "un-bypassable")**

> Strict Lock — one switch you set while calm. For the pause's full window it removes the in-app escape
> hatches: no early exit, no force-reset, Guard can't be switched off, rules frozen — and it survives a
> restart. The lock your tilted self can't talk its way out of.

Short: `the lock your tilted self can't switch off` — NOT "un-bypassable / no-bypass".

**D. Broker-level lock (PROMOTE to headline, strictly scoped)**

> On Tradovate challenge / eval accounts, Guard writes Tradovate's own liquidate-only lock — enforcement at
> the broker, so it holds even if you close the app, reboot, or log in from your phone. The one stop a
> determined, tilting trader can't get around. (Funded/live Tradovate and Ironbeam don't expose this API;
> there, enforcement is app-level.)

**E. Hard limits (NEW — both products)**

> Hard limits — a standing cap you set while calm (Guard tier, off by default): a max-contracts ceiling and
> blocked entry order types. A resting order over the cap or of a blocked type is cancelled at submission; a
> market order that slips through is trimmed back to the cap. Closing or reducing is never blocked. On both
> NinjaTrader 8 and the standalone apps.

---

## New `/guard` section map (Option A — single page, platform-aware)

| #   | Section                             | Change                                                                                                                                                     |
| --- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Hero                                | De-platform. Remove "up to a full broker disconnect" as a universal claim; neutral CTA copy.                                                               |
| 2   | Commitment-device premise           | Keep (shared, strong).                                                                                                                                     |
| 3   | Step 1 · the 6 triggers             | Keep (shared).                                                                                                                                             |
| 4   | **🆕 Enforcement spine**            | New centerpiece: in-app / OS / broker layers + which is device-proof (the table above). Resolves overclaims B & C & D structurally.                        |
| 5   | Step 2 · the ladder                 | **Platform toggle** NT8 (5) ⟷ Standalone (6). Kill the "Guard v2 = future preview" framing. Severity bar's hard end must not hardcode "broker disconnect". |
| 6   | **🆕 Hard limits**                  | New card, phrasing E, both products.                                                                                                                       |
| 7   | Strict Lock                         | Phrasing C; delete every bare "un-bypassable" incl. trust-strip + JSON-LD.                                                                                 |
| 8   | **🆕 Broker-level lock**            | Headline, phrasing D, scoped to Tradovate eval/demo standalone.                                                                                            |
| 9   | "Guard never closes your positions" | Keep.                                                                                                                                                      |
| 10  | Example configs                     | Split: NT8 examples may use Disconnect; **standalone examples use Pause/Wall/Cut only**.                                                                   |
| 11  | Core vs Guard table                 | Add Hard limits row. **Resolve Intel BLOCKER first.**                                                                                                      |
| 12  | Intel / Scenarios / CTA             | Keep; verify no L2-blocking phrasing; verify Intel tier.                                                                                                   |

Leave `/platforms` matrix as the per-platform compatibility model (already honest) — only add a Hard limits row
(`nt8: Yes (Guard tier)`, `tdv: Yes (Guard tier)`, `ib: Yes (Guard tier)`) and link `/guard` → `/platforms`.

---

## Phase 1 — sources + flagship + AI-facing surfaces (do first; cascades)

- `src/data/guard.json`: fix L2 Risk Alert desc (phrasing A); scope Cut "from that PC" (B); replace
  `perRuleOptions[0]` "Reverse market order" with automatic slipped-entry trim; **add a `hardLimits` block under
  BOTH the NT8 top level and the `standalone` key** (E); re-stamp `_comment` verified date → 2026-06-26.
- `src/pages/guard.astro`: re-architect per the section map; fix the hardcoded Tier-6 Cut sentence (~L326→B),
  trust strip "Un-bypassable lockout…" (C), hero img alt (C), and the **schema.org JSON-LD featureList**
  (~L57-67) — it carries its own "un-bypassable" + Cut strings and is easy to miss (it's JSON-LD, not body copy).
- `src/data/geo-hooks.json`: scope Cut in **both** `schemaSoftwareGuard` AND `schemaSoftwarePsi` (B); add the
  broker-level-lock clause to the Guard hooks (D) — these feed AI/JSON-LD.
- `public/llms.txt`: drop "no-bypass" on Strict Lock (C); **correct L9** "does not reject orders for breaching a
  size cap" (now FALSE — Hard limits does, E); add standalone 6-tier + Tradovate broker-lock lines so AI stops
  attributing Disconnect to all platforms.

## Phase 2 — propagated on-site copy

Apply A/B/C/D/E by file:

- L2 non-blocking (A): `anti-tilt.astro:230`, `what-is-meridian-psi.astro:42`,
  `answers/can-trading-software-block-me-from-placing-orders.astro:67`, `compare/meridian-vs-guardian-angel-ninjatrader.astro:145`,
  `compare/cold-turkey-alternatives-daytraders.astro:146`, `answers/how-to-prevent-overtrading-in-ninjatrader.astro:74`.
- Cut scope (B): `glossary.astro:76-80`, `answers/can-trading-software-block-me-from-placing-orders.astro:7,12,81`,
  `answers/trading-lockout-that-forces-a-real-break.astro:70`.
- Strict Lock (C): `index.astro:401-402`, `ninjatrader-lockout.astro:19,66,70,126`,
  `answers/trading-lockout-that-forces-a-real-break.astro:75`, `pricing.json:46`.
- Promote broker lock (D, scoped): `use-cases/prop-firm-behavioral-risk-control.astro` (the #1 prop page — currently
  omits it entirely), `compare/meridian-vs-prop-firm-lockouts.astro:71,163`, `geo-hooks.json:4-9`.
- Add Hard limits (E): `platforms.astro:42`, `features.astro:67,224`, `best-ninjatrader-risk-management-tools.astro:52,184`,
  `ninjatrader-risk-management-discipline-tool.astro`, `data/post/meridian-vs-alternatives.md:102`.
- Product confusion: `glossary.astro:96-101` (Intel mis-tiered — see BLOCKER); keep `guard.json` examples NT8-scoped.
- Stale defect: delete the duplicated paragraph at `answers/best-anti-tilt-software-for-traders.astro:96`.

`ninjatrader-lockout.astro:173` is the MODEL phrasing (correctly non-blocking L2, no false un-bypassable) — copy its tone.

## Phase 3 — off-site + channels (runs on the Reddit/partner cadence,排期 separately)

- Off-site SEO repo `meridian-ninjatrader-risk-management/`: `README.md:142` + `docs/03-…:95` (L2 confirm-every-entry,
  AI-cited) — and sweep the rest of its `docs/` for the same pattern.
- Partner kit: `02-3-product-deep-dive.md:74,82`, `03-1-core-positioning.md:12,14,16`, `03-2-differentiation.md`,
  `03-3-audience-faq.md:28`, `03-4-angles-by-audience.md:61`, `06-1/06-2/06-3/06-5/06-6` — non-blocking L2; scope Strict
  Lock; don't say "broker disconnect" for standalone; add Hard limits.
- GEO/Reddit corpus: `social/reddit/geo-answer-posts.md` (rename "What makes it un-bypassable" header; per-product
  scope the ladder; name the Tradovate broker lock) and `social/brand/POSITIONING.md:106,108` (stale single-ladder
  anchor — the upstream cause; document both ladders + broker-lock scope; defer version to MERIDIAN.md).

## Also check (completeness gaps the audit could not fully reach)

- `src/data/faq/*.md` Guard entries for L2-blocking / un-bypassable; **add a new "Can a trader bypass Guard?" FAQ**
  (truth-doc fix #7 — answer per the spine: app/OS add real friction; the Tradovate eval/demo broker lock is the
  device-proof exception). Pre-empts the exact question sophisticated prospects ask.
- JSON-LD featureList on `features.astro`, `psi-monitor.astro`, `journal.astro` (not just body copy).
- `pricing.astro` rendered comparison rows (don't restate "6 triggers · 5 levels" as universal).
- `src/data/features.json` / `products.json` / `signals.json` for the same L2 / un-bypassable / missing-Hard-limits.
- `src/data/changelog/*.md` Guard release lines; nav/CTA microcopy; image `alt=` strings for "un-bypassable".

## Guardrails (do NOT touch without Gary)

- Legal/compliance: `disclaimer.astro`, `terms.md`, `privacy.md`, `refund.astro`, `compliance.json` — human-edit-only.
- Pricing **$ amounts**: read from `pricing.json`; never hardcode from memory. (Copy edits to `pricing.json:46`
  Strict-Lock phrasing are fine; the dollar fields are not.)
- Config files (`astro.config.ts`, `vercel.json`, etc.): show diff + get OK first.
- `RiskBanner` is global/mandatory; don't add per-page disclaimers.
- Verify QA with real screenshots at 1280–1440px (LOCAL RULE 1), and edit copy line-by-line (LOCAL RULE 2).
- Commit/push only when Gary asks.
