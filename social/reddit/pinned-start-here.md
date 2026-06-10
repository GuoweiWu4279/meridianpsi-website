---
title: "Start Here: What is Meridian PSI?"
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
  ⚠️ LIVE PINNED POST still has the old text. To update: edit the post body and
  insert the three screenshots at the [IMAGE] markers (rich-text editor). If
  editing doesn't allow inserting images, delete the old pinned post, submit
  this as a new image+text post, and re-pin (we are mod of r/MeridianPSI).
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

Meridian is a real-time psychological stability monitor for futures traders. It watches how you trade during a live session, scores your behavior against your own baseline, and can step in when your discipline starts to slip. This post is the pinned reference for the sub: what Meridian is, how it works, and who it's for.

**The problem it addresses**

Most accounts are not lost to a bad strategy. They are lost in a single session, when discipline slips: re-entering too fast after a loss, sizing up to win it back, moving a stop that should have been honored. The standard risk tools, daily loss limits, drawdown caps, loss-streak cutoffs, all measure the result. They trigger after the damage is done. None of them watch the behavior that causes it.

Meridian is built for that gap. It is not a replacement for those limits but the layer they cannot see: the behavior that trips them in the first place.

**How it works**

At the center is the PSI, a Psychological Stability Index. Meridian reads your live order flow and tracks seven behavioral patterns that tend to appear right before traders blow up: revenge entries, oversizing, stop manipulation, overtrading, holding losers too long, position overstay, and rule violations. Each one is measured against your own trading history rather than a fixed benchmark, so the system learns what normal looks like for you and recognizes when you start to drift from it.

The result is a single score from 0 to 100, shown on a HUD that sits over your chart and updates in under a tenth of a second after every fill. Because it reads behavior rather than P&L, it sees trouble early. A daily loss limit cannot act until the money is already gone; Meridian can flag a developing revenge sequence on the second trade, while there is still an account to protect.

[IMAGE 1: the live PSI HUD]

**Guard: enforcement when seeing it isn't enough**

Watching the score fall is not always enough to stop. Meridian Guard is the enforcement layer. You define the rules while you are calm, and Guard holds you to them during the session, escalating only as far as you choose:

| Level | What it does |
|---|---|
| **L1 - Notify** | A quiet notification so you know what is building, without interrupting your trading |
| **L2 - Risk Alert** | A persistent banner; every new entry requires an active confirmation before it is placed |
| **L3 - Acknowledge** | You must type a phrase you wrote yourself before continuing, which breaks the autopilot loop |
| **L4 - Trading Pause** | New entries are blocked for a cooldown you set in advance. Closing a position is never blocked |
| **L5 - Disconnect** | Meridian disconnects you from your broker, ending the session |

For the moments when a trader might try to override their own rules, there is Strict Lock. Switched on while you are calm, it makes any pause Guard fires impossible to end early, reset, or disable until its window closes. Closing or reducing a position is always allowed; the only thing Strict Lock prevents is adding new risk.

[IMAGE 2: the Guard page with Strict Lock armed]

**After the session: Intel**

When a session ends, Meridian reviews it. It separates how disciplined you were from how the session actually turned out, so a green day built on luck is shown as luck rather than skill, and a disciplined losing day reads as normal variance. Over time it puts a dollar figure on the difference between your composed and tilted sessions, and breaks your results down by time of day, instrument, hold time, and direction. The goal is to show, in numbers, what discipline is actually worth to your account.

[IMAGE 3: the Intel overview]

*(Screenshots show simulated demo data.)*

**Who it's for**

Meridian is built for active futures traders, and it matters most to anyone trading a funded account or working through prop firm evaluations. In that world the cost of one bad session is concrete. Passing an evaluation is the easy part; many funded traders never reach a meaningful payout, and it is usually a single undisciplined session, not the strategy, that ends the account. A reset costs a fee and another month. A tilt session can cost the account itself. Against that, monitoring the behavior that causes it is inexpensive.

Meridian does not place trades and does not guarantee results. It monitors behavior and gives you the means to stop yourself.

**Platforms, trial, and trust**

Meridian runs natively as a NinjaTrader 8 add-on today. Standalone apps for Tradovate and Ironbeam are in early access, and a single license covers every platform. There is a 7-day free trial.

It is an Official NinjaTrader Ecosystem Vendor, audited and approved by NinjaTrader's Compliance, QA, and Executive teams. It is local-first: your sessions, baselines, and journal stay on your machine, and it never collects your name, broker credentials, account numbers, or funds. The only data that ever leaves your PC is a license check and anonymized research records tied to a random identifier, which you can opt out of at any time. That is also why it runs inside prop firm environments.

**Questions**

I am the founder and I read this sub. Post questions in the comments and I will answer them. If you trade on Tradovate or Ironbeam and want early access, comment or send a message.

meridianpsi.com

---

*Risk disclosure: Trading futures involves substantial risk of loss and is not appropriate for all investors. Meridian is a behavioral monitoring and risk-management tool. It does not provide financial advice or guarantee trading performance. Results vary.*

---

## Changelog

| Date | Change |
|------|--------|
| 2026-05-26 | Canonical version saved from founder final edit (replaces earlier draft in chat). |
| 2026-06-10 | Patch: Guard level names + privacy line corrected. |
| 2026-06-10 | v3 rewrite: Strict Lock, multi-platform funnel, FTC cleanup, image plan. |
| 2026-06-10 | v4 rewrite around CURRENT site positioning: superset reframe, "one bad session" thesis, edge-vs-luck, funded wedge. (Still in comment-voice — too first-person/fragmenty.) |
| 2026-06-10 | v5 (canonical): genre fix to product-explainer register (the right voice for an official pinned intro). Passed VOICE.md gates. Now the exemplar for ARTIFACTS.md "Pinned intro". |
