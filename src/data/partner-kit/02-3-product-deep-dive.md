---
title: Product Deep Dive
section: get-started
lastUpdated: "2026-05-14"
order: 3
---

This is more detail than you need to create good content — but having it gives you a foundation to answer nuanced questions confidently.

---

### The PSI score

The Psychological Stability Index is a 0–100 real-time score computed as a weighted composite of seven behavioral dimensions. Higher is more stable. The four zones:

| Zone | Range | Meaning |
|---|---|---|
| Stable | ≥ 88 | Behavior within normal range |
| Caution | 72–87 | Early-stage deviation; worth monitoring |
| Warning | 55–71 | Clear behavioral pressure; consider pausing |
| Critical | < 55 | Significant deviation; intervention recommended |

The score updates continuously throughout the session based on execution events NinjaTrader fires internally.

---

### The seven behavioral dimensions

Each dimension measures a specific pattern of potentially emotionally-driven behavior. Each has an individual weight you can tune.

| Code | Name | What it measures |
|---|---|---|
| D1 | Revenge Entry | How quickly you re-enter after a losing trade, relative to your normal re-entry cadence |
| D2 | Stop Manipulation | Whether you're widening your stop-loss after entry, relative to your baseline stop adjustment patterns |
| D3 | Size Spike | Position size relative to your typical sizing baseline for this instrument and time of day |
| D4 | Hold Bias | Holding losing trades significantly longer than your winning ones — the loss-aversion pattern (cutting losses fast is never penalized) |
| D5 | Position Overstay | Holding a losing position deeper into loss territory than your normal baseline |
| D6 | Rule Violations | Directly violating rules you've explicitly configured in your trading plan |
| D7 | Overtrading Pace | Trading frequency significantly above your normal session pace |

---

### The adaptive personal baseline

Every signal is measured relative to your own trading history, not a fixed industry threshold. This means:

- A position size that's normal for a trader who sizes up is not flagged as a spike
- A 3-second re-entry that's normal for a scalper is not flagged as revenge trading
- As your strategy evolves, the baseline follows

The system uses online adaptive statistics — continuous updates weighted toward recent sessions. There is no manual calibration required. The first ~5 sessions (roughly 30+ trades) are the "learning phase" where signals have wider confidence intervals; after that the baseline is meaningfully calibrated, and it keeps tightening through session 20–30 and beyond.

**Playback isolation:** Market Replay sessions are tracked in a separate data context. They never contribute to or contaminate the live session baseline.

---

### Guard: the intervention layer (Guard tier only)

Guard is the enforcement layer on top of the monitoring layer. You configure rules — when to trigger, and how strongly to intervene.

**6 trigger conditions:**

1. **PSI Below** — composite PSI drops under a user-set threshold
2. **Consecutive Losses** — N losses in a row in one session
3. **Session P&L Below** — realized daily P&L falls past a threshold
4. **Unrealized P&L Below** — open-position floating loss exceeds a threshold (fires before close)
5. **Single Trade Loss** — one trade loses more than a defined amount
6. **Session Time Over** — trader exceeds the planned session length

**5 response levels (L1 → L5, increasing severity):**

1. **Notify (L1)** — a quiet toast notification
2. **Risk Alert (L2)** — persistent banner; every new entry requires active confirmation
3. **Acknowledge (L3)** — the user types a phrase they wrote in advance, with an optional countdown, before continuing (set when calm, typed when not — the most powerful friction of the five)
4. **Trading Pause (L4)** — blocks new entries by cancelling orders; survives a NinjaTrader restart
5. **Disconnect (L5)** — severs the broker connection (NT8's standard broker-disconnect API); the strictest mode of a Trading Pause. By default Guard re-disconnects reconnect attempts made during the window (per-rule setting); the user reconnects through NT8 once the window ends.

**Does Guard close your positions?** By default, no — Guard blocks you from *adding* risk, and you can always exit yourself. But auto-flatten is a clear opt-in: tick the checkbox on a Trading Pause or Disconnect rule and Guard will close all open positions the moment that rule fires. It's off until you turn it on.

Each trigger fires once on entry and then resets — no spam. Any rule can be password-locked to prevent in-session override; most traders pick a password they won't remember under pressure as a deliberate friction device.

Guard is designed for traders who want hard enforcement, not just monitoring. The intervention is mechanical — it fires when the rule fires, regardless of whether the trader feels like they need a break.

---

### Intel workspace (included with every tier since v1.5.0)

The Intel tab turns 5 years of local session history into pre-session decisions and behavioral insight. **As of v1.5.0 it is included in Core as well as Guard** — the Guard tier gates only the enforcement engine. (If you made content before v1.5.0 that called Intel "Guard-exclusive", that was correct at the time but is no longer.)

Key views:

- **PSI × Performance** — P&L mapped against PSI zone. Shows exactly what Stable sessions average vs. Critical.
- **Monthly Digest** — composure trend, stable days, win rate, average P&L, best and worst days — every month.
- **Weekday Patterns** — identifies the trader's weakest trading day and tracks Composure progress.
- **Today's Risk Brief** — a pre-session summary built from the trader's own history; personalized before the first trade of the day.
- **Stats & Breakdowns** *(new in v1.5.0)* — core trading statistics plus breakdowns by instrument, side, time of day, hold time, and "discipline leak" (which behavioral signal cost the most).

This is the layer most useful for creators covering trading psychology or systematic improvement — it turns subjective "I need to be more disciplined" into quantifiable long-term data.
