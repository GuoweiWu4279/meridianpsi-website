---
title: 'Start Here: What is Meridian PSI?'
platform: reddit
subreddit: r/MeridianPSI
post_type: pinned
status: canonical
last_updated: 2026-06-10
author: Gary / MeridianPSI
notes: |
  v5 (2026-06-10) — the canonical version. This is the FORMAT/GENRE fix:
  written as a confident product explainer (third-person, full paragraphs,
  sectioned), which is the correct register for an official pinned "What is X"
  post in our own sub. Earlier versions wrongly used the foreign-sub COMMENT
  voice (first-person, scrappy, fragment-heavy) — see ops/LEARNINGS.md L3.
  Carries the current positioning (POSITIONING.md): superset reframe ("keep your
  loss limit; this adds the layer it's blind to"), "one bad session not bad
  strategy" thesis, edge-vs-luck review, funded-account wedge. Facts per
  MERIDIAN.md (Guard 5-level names, Strict Lock, honest v1.5 privacy, Intel-in-
  Core). Passed all three gates (VOICE.md AI-tell scan / compliance / fact).
  This post is the reference EXEMPLAR for the "Pinned intro" row in ops/ARTIFACTS.md.
  ✅ LIVE-SYNC CHECK — RESOLVED 2026-06-26: the live pinned snapshot HAD drifted — it still said
  "7-day free trial" plus several typos ("risk tool on the marker", "Most tool", "we watches the
  infrequencies", "We also uses", "then seeing it in real number"). Gary re-pasted a corrected
  version on 2026-06-26 (14-day card-required trial + typos fixed; facts re-verified vs MERIDIAN.md/
  CANON: v1.5.5, multi-platform NT8+Tradovate/Ironbeam early access, Guard 5-level names, local-first).
  This SOURCE was already 14-day + clean; only the live manual-paste snapshot (predating the 06-14
  trial change) was stale. Live now matches source on facts.
  To update: edit the post body and insert the three screenshots at the [IMAGE] markers
  (rich-text editor). If editing doesn't allow inserting images, delete the old pinned post,
  submit this as a new image+text post, and re-pin (we are mod of r/MeridianPSI).
  Title cannot change on edit; keep "Start Here: What is Meridian PSI?".
  IMAGES (v1.5 UI, simulated demo data):
    1. HUD            -> C:\Users\Administrator\meridian-testbench\ui-harness\out\hud.png
    2. Guard + Strict -> C:\Users\Administrator\meridian-testbench\ui-harness\out\real-guard-strict-on.png
    3. Intel          -> C:\Users\Administrator\OneDrive\Personal\Company\Web\public\screenshots\intel-overview.png
  Alternates: dash-Session.png / hud-ladder.png / debrief.png (same out\ folder),
  history-month-calendar.png (Web\public\screenshots).
---

# Start Here: What is Meridian PSI?

Copy below is the **canonical pinned post** for r/MeridianPSI. Paste into the Reddit post editor (rich text mode), inserting the three screenshots at the [IMAGE] markers.

---

## Body (paste from here)

**Start Here: What is Meridian PSI?**

Meridian is a real-time psychological stability monitor for futures traders. During a live session it watches how you are trading, scores it against your own baseline, and steps in when your discipline starts to slip. This is the pinned reference for the sub: what Meridian is, how it works, and who it is for.

**The problem it solves**

Every risk tool on the market right now ignores a significant part of risk management. They only step in once you hit a hard limit you set yourself: a daily stop-loss, a max drawdown, a number of losses. There is nothing wrong with that, but it can be done better. There is a long stretch between the moment a trader starts trading differently from their normal self and the moment they finally hit that limit, and nothing watches it.

Think of the heart-rate monitor on your watch. Old risk tools are the ones that call 9-1-1 when your heart rate hits 180. Meridian watches the spikes, the irregular beats, the drift away from your normal rhythm, and steps in long before you reach the limit. That is why we are not just another risk tool. We give you everything they have, and something much better: we monitor your behavior, not your P&L.

**How it works**

At the center is the PSI, a Psychological Stability Index. Meridian reads your live order flow and tracks seven behaviors that tend to show up right before traders blow up: revenge entries, oversizing, stop manipulation, overtrading, holding losers too long, position overstay, and breaking your own rules. It also uses adaptive learning: each signal is scored against your own trading history, not a fixed benchmark, so it learns what normal looks like for you and notices the moment you drift from it.

The result is a single score from 0 to 100, shown on a small HUD over your chart and updated in under a tenth of a second after every fill. Because it reads behavior instead of P&L, it sees trouble early. A daily loss limit cannot act until the money is already gone. Meridian can flag a revenge sequence on the second trade, while you still have an account to protect.

[IMAGE 1: the live PSI HUD]

**Guard: enforcement when seeing it is not enough**

Watching the number fall is not always enough to stop. That is what Meridian Guard does. You write the rules while you are calm, and Guard holds you to them during the session, escalating only as far as you choose:

| Level                  | What it does                                                                                   |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| **L1 - Notify**        | A quiet notification so you know what is building, without interrupting your trading           |
| **L2 - Risk Alert**    | A persistent banner; every new entry needs an active confirmation before it is placed          |
| **L3 - Acknowledge**   | You type a phrase you wrote yourself before you can continue, which breaks the autopilot       |
| **L4 - Trading Pause** | New entries are blocked for a cooldown you set in advance. Closing a position is never blocked |
| **L5 - Disconnect**    | Guard disconnects you from your broker, ending the session                                     |

For the days when you might talk yourself out of your own rules, there is Strict Lock. Turn it on while you are calm, and any pause Guard fires cannot be ended early, reset, or switched off until its timer runs out. Closing or reducing a position is always allowed. The only thing it stops is adding new risk.

[IMAGE 2: the Guard page with Strict Lock armed]

**After the session: Intel**

When a session ends, Meridian reviews it on two axes: how disciplined you were, and how it actually turned out. A green day that came mostly from luck shows up as luck, not skill, and a disciplined losing day reads as ordinary variance. Over time it attaches a dollar figure to the gap between your composed sessions and your tilted ones, and breaks your results down by time of day, instrument, hold time, and direction. Nothing sharpens discipline faster than seeing it in real numbers.

[IMAGE 3: the Intel overview]

_(Screenshots show simulated demo data.)_

**Who it is for**

Meridian is for active futures traders, and it earns its place fastest for anyone on a funded account or working through evaluations. Passing the evaluation is the easy part. Plenty of funded traders never reach a real payout, and it is rarely the strategy that takes the account back. It is the behavior. A reset is a fee and another month. One bad afternoon can be the whole account. Watching the behavior that causes it is cheap by comparison.

Meridian does not place trades and does not promise results. It watches what you are doing and gives you a way to stop yourself.

**Platforms and trust**

Meridian runs natively in NinjaTrader 8 today. Standalone apps for Tradovate and Ironbeam are in early access, and one license covers all of them. There is a 14-day free trial.

It is an Official NinjaTrader Ecosystem Vendor, audited by NinjaTrader's compliance, QA, and executive teams. It is local-first: your sessions, baselines, and journal live on your own machine, which is also why it runs inside prop firm environments.

**Questions**

I am the founder and I read this sub. Ask anything in the comments. If you are on Tradovate or Ironbeam and want in early, comment or send me a message.

meridianpsi.com

---

_Risk disclosure: Trading futures involves substantial risk of loss and is not appropriate for all investors. Meridian is a behavioral monitoring and risk-management tool. It does not provide financial advice or guarantee trading performance. Results vary._

---

## Changelog

| Date       | Change                                                                                                                                                                                                                                                                                                                                                                              |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-05-26 | Canonical version saved from founder final edit (replaces earlier draft in chat).                                                                                                                                                                                                                                                                                                   |
| 2026-06-10 | Patch: Guard level names + privacy line corrected.                                                                                                                                                                                                                                                                                                                                  |
| 2026-06-10 | v3 rewrite: Strict Lock, multi-platform funnel, FTC cleanup, image plan.                                                                                                                                                                                                                                                                                                            |
| 2026-06-10 | v4 rewrite around CURRENT site positioning: superset reframe, "one bad session" thesis, edge-vs-luck, funded wedge. (Still in comment-voice — too first-person/fragmenty.)                                                                                                                                                                                                          |
| 2026-06-10 | v5: genre fix to product-explainer register. Passed VOICE.md gates.                                                                                                                                                                                                                                                                                                                 |
| 2026-06-10 | v6: re-derived through the content system (loop + 3 gates).                                                                                                                                                                                                                                                                                                                         |
| 2026-06-10 | v7 (canonical): merged Gary's own rewrite — gap-first opening + heart-rate metaphor (replaces the flat "one bad session" website thesis), brand "we" voice, bold superset ("everything they have, and something much better"), punchier section closers. His edit fed back into POSITIONING/VOICE/ARTIFACTS (LEARNINGS L5). The reference exemplar for ARTIFACTS.md "Pinned intro". |
