# Meridian — CANONICAL PRODUCT FACTS (ground truth from plugin source, 2026-06-08)

The website MUST match these. Verified against `~/Documents/NinjaTrader 8/bin/Custom/AddOns/`
(GuardRule.cs, GuardEngine.cs, PsiEngineV2.cs/Config, TradeMonitor.cs, ARCHITECTURE.md) + confirmed by Gary.
Site data files `src/data/guard.json` + `src/data/signals.json` + `glossary.astro` are the canonical
user-facing representations and agree with the engine — use them; do NOT paraphrase facts per-page.

## THE 7 SIGNALS (signals.json — single source of truth; never hardcode/miscount)

D1 Revenge Entry · D2 Stop Manipulation (engine: "naked exposure"/"No Stop") · D3 Size Spike (oversize) ·
D4 Hold Bias · D5 Position Overstay · D6 Rule Violations (session-window/rule breach) · D7 Overtrading Pace.

- "tilt" is the STATE these compound into — NOT one of the seven signals. Never list "tilt" as a signal.
- Any page that says "seven signals" then lists fewer is WRONG → list all seven (or drop the count).

## GUARD — 6 TRIGGER TYPES (GuardConditionType enum)

PsiBelow · ConsecutiveLossesAtLeast · SessionPnlBelow · SessionMinutesOver · UnrealizedPnlBelow · SingleTradeLossExceeds.
("six trigger types" is correct. Pages that list 4 then say "six" are WRONG.)

## GUARD — 5 RESPONSE LEVELS (user-facing, lightest→hardest; guard.json canonical)

1. **Notify** (Toast) — non-blocking banner.
2. **Risk Alert** — persistent HUD banner; every new entry requires a one-click acknowledgment. Does NOT block orders.
3. **Acknowledge** — modal; type your pre-written phrase (and/or wait out an optional countdown timer) before continuing.
   (The old "Countdown" action was ABSORBED into Acknowledge. There is NO standalone "Countdown response level".)
4. **Trading Pause** — real enforcement: blocks new entry orders for a set duration. Mode = CancelOrders (stay connected) OR Disconnect (sever broker connection).
5. **Disconnect** — the strictest mode of Trading Pause (severs the broker connection; re-disconnects if you reconnect during the window).

- NEVER invent levels ("Countdown level", "Confirmation-required mode" as a separate level) or reorder. Match guard.json exactly.

## AUTO-FLATTEN (does Guard close your positions?)

- `AutoFlattenOnPause` field, **DEFAULT = false**. It's an opt-in CHECKBOX on a **Trading Pause / Disconnect** rule.
- When ENABLED: Guard automatically flattens (closes) all open positions the moment the pause/disconnect fires.
- So the TRUE framing (Gary approved): "By default Guard does NOT close your positions — it blocks you from ADDING risk.
  But auto-flatten is a clear, stable opt-in: tick it on a Trading Pause or Disconnect rule and Guard will close your
  positions for you." Writing "Guard can close your positions (if you enable it)" is CORRECT.
- WRONG claims to fix: "auto-flatten only applies to Sim/evaluation accounts" (false); "Guard never closes positions"
  (under-claims a real feature); "closes positions when any rule is broken" (it's pause/disconnect + the checkbox only).

## PSI — DIRECTION + ZONES

- **100 = calm/on-plan; the number FALLS as tilt sets in** (engine: Warning≈47, Critical≈31). LOW = bad. Never invert.
- Zones (glossary canonical): **Stable (≥88) · Caution (72–87) · Warning (55–71) · Critical (<55)**.
- Never invent zone names ("Composed", "Drifting"). Use Stable/Caution/Warning/Critical. A PSI of 60 = Warning (not Caution).

## COPY-FILL DEDUP (real feature — Gary confirmed; verified in ARCHITECTURE.md)

`_fillDedup` prevents copy-trading (e.g. Replikanto) duplicate fills from different accounts being double-counted
(key = Instrument|Direction|Qty, 250 ms TTL). Accurate claim: "Meridian de-duplicates copy-trading/mirrored fills so the
same trade isn't double-counted in your behavioral score." Don't over-state as "ignores all copy trades".

## VENDOR CLAIM (Gary's locked, confirmed-true wording — use VERBATIM everywhere, kill all variants)

**"Official NinjaTrader Ecosystem Vendor — audited and approved by NinjaTrader's Compliance, QA & Executive teams."**
(May 2026 optional where a date is shown.) KILL these drifted/fabricated variants found in the audit:

- "Reviewed and approved…" (ok meaning, but standardize to "audited and approved" for consistency)
- "Compliance and Executive teams" (disclaimer — dropped QA)
- "Compliance and QA teams" (compare pages — dropped Executive)
- "compliance team, executive BACKGROUND CHECK, and hands-on QA" (3 pages — FABRICATED, delete entirely)

## TESTIMONIALS — Gary confirms ALL are REAL (homepage + checkout). Keep them; keep "real quotes" framing. (Audit's "fabricated" flag was wrong here.)

## PRICING / TIER LINE (pricing.json canonical)

- Core $49.99/mo ($479.90/yr) · Guard $69.99/mo ($671.90/yr) · 14-day free trial.
- **5-year session history + post-session reports = CORE** (every tier). The Intel/Stats ANALYSIS layer (monthly digest,
  weekday patterns, PSI×P&L correlation, Today's Risk Brief, custom-range Stats) = **Guard-only**. Don't pair "5-year history" with "Guard".
- Subscription management = **Whop** (whop.com/@me/settings/memberships) — there is NO in-app "account dashboard" for billing.
- License-key retrieval = **same page** (whop.com/@me/settings/memberships → open the Meridian membership → Software / License Key section). Confirmed by Gary 2026-06-08; this is the canonical Step-1 link in installation-guide.astro. Do NOT use whop.com/login, whop.com/hub, or the public whop.com/meridian storefront for license-key instructions.
