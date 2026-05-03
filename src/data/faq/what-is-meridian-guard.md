---
question: "What is Meridian Guard for NinjaTrader 8 — a lockout, trade limiter, or risk manager?"
category: general
order: 0
---

Meridian Guard is a NinjaTrader 8 behavioral risk manager and trade lockout add-on for discretionary futures traders. It helps detect revenge trading, overtrading, stop-loss manipulation, oversizing, and rule violations, then enforces user-defined cooldowns, lockouts, and entry blocking.

It is **not** a replacement for your broker's daily loss limit or NinjaTrader's account risk settings. Those remain the financial floor. Guard adds a **behavior-first** layer on top: it reacts to rapid re-entry, session pace, stop manipulation, and rule pressure **before** P&L damage compounds — for example consecutive-loss cooldowns, mandatory pauses, and entry blocking when PSI or your triggers say the session is off-plan.

Meridian PSI (the monitor) is the real-time psychological stability index and seven-signal behavioral engine; Guard is the optional enforcement tier. See [What is Meridian PSI?](/what-is-meridian-psi) for the full product definition, [Meridian Guard](/guard) for triggers and response levels, and [use cases](/use-cases/ninjatrader-revenge-trading-lockout) for problem-specific pages.
