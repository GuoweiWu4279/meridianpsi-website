---
title: Product Deep Dive
section: get-started
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
| D4 | Rushed Exit | Exiting a position significantly faster than your normal hold time for the session context |
| D5 | Position Overstay | Holding a losing position deeper into loss territory than your normal baseline |
| D6 | Rule Violations | Directly violating rules you've explicitly configured in your trading plan |
| D7 | Overtrading Pace | Trading frequency significantly above your normal session pace |

---

### The adaptive personal baseline

Every signal is measured relative to your own trading history, not a fixed industry threshold. This means:

- A position size that's normal for a trader who sizes up is not flagged as a spike
- A 3-second re-entry that's normal for a scalper is not flagged as revenge trading
- As your strategy evolves, the baseline follows

The system uses online adaptive statistics — continuous updates weighted toward recent sessions. There is no manual calibration required. The first 5–10 sessions are the "learning phase" where signals have wider confidence intervals; by session 20–30, the baseline is meaningfully calibrated.

**Playback isolation:** Market Replay sessions are tracked in a separate data context. They never contribute to or contaminate the live session baseline.

---

### Guard: the intervention layer (Guard tier only)

Guard is the enforcement layer on top of the monitoring layer. You configure rules — when to trigger and what to do. Interventions are:

1. **Warning overlay** — a non-blocking visual alert on the HUD
2. **Forced cooldown** — a countdown timer during which no new orders can be placed; the timer is skippable only if you've configured it to be
3. **Broker disconnect** — disconnects the NT8 broker connection, stopping all new order routing; open positions remain open and unaffected at the broker

Guard is designed for traders who want hard enforcement, not just monitoring. The intervention is mechanical — it fires when the rule fires, regardless of whether you feel like you need a break.

---

### The Intel layer (session analytics)

Beyond live monitoring, Meridian accumulates a behavioral history across all your sessions:

- **PSI timeline** — your stability score session-by-session over weeks and months
- **Dimension breakdown** — which of the seven signals fires most often for you specifically
- **Rule compliance rate** — how consistently you follow your own trading rules
- **Monthly behavioral report** — a summary of your patterns, most common violations, and rate of improvement

This is the layer most useful for creators covering trading psychology or systematic improvement — it turns subjective "I need to be more disciplined" into quantifiable long-term data.
