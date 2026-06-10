---
title: "Start Here: What is Meridian PSI?"
platform: reddit
subreddit: r/MeridianPSI
post_type: pinned
status: canonical
last_updated: 2026-06-10
author: Gary / MeridianPSI
notes: |
  v3 FULL REWRITE 2026-06-10 (supersedes the 2026-05-26 founder version and the
  2026-06-10 patch). Changes: canonical Guard 5-level names (old table had "Alert"
  twice), Strict Lock paragraph, honest v1.5 privacy wording (old "no data ever
  leaves" claim is false since v1.5.0 and must never be re-posted), removed
  "100% protected"/"fully protected" (FTC), multi-platform + early-access funnel
  ("comment or DM me"), v1.5 Intel/Breakdowns, typo fixes, em-dash free.
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

I've been trading futures for years.

And I kept running into the same problem, not just with myself, but with every risk tool I tried:

**They only fire after the damage is already done.**

Daily loss limit? It triggers after you've already blown past it.
Max drawdown protection? It cuts you off after the bad trades already happened.

By the time you hit the limit, you are already tilted and emotional. The damage is on the account.

There is a long gap between the moment you first start trading differently and the moment you are fully tilted. That gap is where accounts actually die, and no risk tool I could find even tried to look at it.

So I built Meridian.

---

### What exactly is Meridian?

Think of it like the stress monitor on an Apple Watch, but for your trading discipline.

It's the first real-time psychological stability monitor for futures traders. It watches 7 behavioral patterns in your live execution and, through a mix of cognitive science and adaptive learning, scores them against your own baseline instead of some fixed industry threshold. It learns what the "normal you" trades like, so it knows when you start drifting from it. Before you hit your limit, not after.

[IMAGE 1: the floating HUD]

Your Apple Watch doesn't wait for a heart attack to alert you. It tracks your vitals in real time and flags when something drifts from your normal baseline. Meridian does the same thing for what happens inside your execution:

- You just took a loss and immediately re-entered at double size → it sees that
- Your stop loss has been sliding further away every few minutes → it sees that
- Your entry pace is accelerating well past your normal session rhythm → it sees that
- You cut winners in 30 seconds but sit in losers for 20 minutes → it sees that

All of it rolls into one live score, the PSI (Psychological Stability Index, 0 to 100), with four zones: Stable, Caution, Warning, Critical. The longer you use it, the sharper your baseline gets and the earlier it catches the drift.

---

### Knowing you're tilted isn't enough

That's why **Meridian Guard** exists.

You set the rules when you are calm, and the system holds the line during the session so you can focus on what you should focus on. You do the analysis and decide when to enter. Guard watches the part of you that doesn't show up on a chart.

| Level | What happens |
|---|---|
| **L1 - Notify** | A quiet notification so you know what's building, without getting in your way |
| **L2 - Risk Alert** | A persistent banner. Every new entry needs an active confirmation before it goes through |
| **L3 - Acknowledge** | You must type a phrase you wrote yourself before you can continue. The most powerful level, and the psychology is real: it breaks the autopilot loop and forces your brain to slow down |
| **L4 - Trading Pause** | New entries are blocked for a cooldown you chose in advance. Closing positions is never blocked |
| **L5 - Disconnect** | The system disconnects you from your broker, so the session ends on your terms instead of tilt's |

And for the days you already know the tilted version of you will try to talk his way out of it, there is **Strict Lock**: one switch, set when calm. While it's on, every Guard pause is absolute. No ending it early, no force reset, no turning Guard off until the pause expires on its own. You can always close or reduce positions. You just can't add risk.

[IMAGE 2: Guard page with Strict Lock armed]

Think of Guard as a lock you set for your future self, written by the version of you that's thinking clearly.

---

### See your discipline in real numbers

After each session, Meridian gives you something traditional journals can't:

**Composure × P&L correlation**: you can literally see, on a chart, what your results look like on high-composure days vs low-composure days. That's the financial cost of your worst sessions, made visible.

[IMAGE 3: Intel overview]

You also get:

- **Intel reports**: up to 5 years of local history. Monthly digests, weekday patterns, and what your worst sessions have in common.
- **Breakdowns**: your results sliced by time of day, hold time, instrument, long vs short, and by which behavior leaked the most money.
- **Session report**: exactly how your composure and behaviors moved through every second of your session.
- **In-session journal**: log how you feel while you trade with one click, auto-compiled into a daily entry. No more relying on memory after hours of trading, and no more letting your brain rewrite the story after an accidental green day.

*(Screenshots show simulated demo data.)*

---

### Credibility

Meridian is an Official NinjaTrader Ecosystem Vendor: reviewed and approved by NinjaTrader's Compliance, QA, and Executive teams.

It's local-first. Your sessions, baselines, and journal live in files on your machine. Meridian never collects your name, broker credentials, account numbers, or funds. The only things it ever sends out are a license check and anonymized research records tied to a random ID, never to you, and you can opt out anytime. This is why it runs fine inside prop firm environments.

---

### Platforms

Native **NinjaTrader 8** add-on, available now. Standalone apps for **Tradovate** and **Ironbeam** are in early access. One license covers every platform.

If you trade on Tradovate or Ironbeam and want in early, comment below or DM me.

→ meridianpsi.com

---

### Questions?

Drop them in the comments. I read everything and reply to every thread.

If you've ever had a session where you knew you were losing it but couldn't stop, that's exactly who this was built for.

---

*Risk disclosure: Trading futures involves substantial risk of loss and is not appropriate for all investors. Meridian is a behavioral monitoring and risk-management tool. It does not provide financial advice or guarantee trading performance. Results vary.*

---

## Changelog

| Date | Change |
|------|--------|
| 2026-05-26 | Canonical version saved from founder final edit (replaces earlier draft in chat). |
| 2026-06-10 | Patch: Guard level names + privacy line corrected. |
| 2026-06-10 | v3 full rewrite: Strict Lock, multi-platform + early-access funnel, v1.5 Intel/Breakdowns, FTC cleanup ("100% protected" removed), image plan added. |
