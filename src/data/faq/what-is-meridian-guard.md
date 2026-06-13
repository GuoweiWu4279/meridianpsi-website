---
question: "What is Meridian Guard — a lockout, trade limiter, or risk manager?"
category: general
order: 0
---

Meridian Guard is the automated enforcement layer of Meridian — the complete risk manager for serious futures traders — native in NinjaTrader 8 today, with standalone Tradovate and Ironbeam apps in early access. Meridian does everything a traditional risk tool does (daily loss limit, P&L and drawdown caps, single-trade loss cap, loss-streak cutoff, session-time stop) plus a behavioral layer that detects revenge trading, overtrading, stop-loss manipulation, oversizing, and rule violations. Guard then enforces user-defined cooldowns, lockouts, and entry blocking before traders break their own rules.

Guard enforces the classic financial limits directly — session P&L floors, unrealized-loss and single-trade-loss caps, and consecutive-loss cutoffs — so it covers the same ground as your broker's daily loss limit or NinjaTrader's account risk settings, then goes further with a **behavior-first** layer: it reacts to rapid re-entry, session pace, stop manipulation, and rule pressure **before** P&L damage compounds — for example consecutive-loss cooldowns, mandatory pauses, and entry blocking when PSI or your triggers say the session is off-plan.

On NinjaTrader 8 the response ladder has five levels, up to a full broker Disconnect. The standalone apps run **Guard v2** — a six-tier ladder (Notify, Alert, Acknowledge, Pause, Cool-down Wall, Cut) whose top tiers go beyond what an in-platform add-on can do: a full-screen Cool-down Wall with guided breathing, and Cut, a Windows-firewall block of the broker's order servers so an order physically cannot leave the PC.

Meridian PSI (the monitor) is the real-time psychological stability index and seven-signal behavioral engine; Guard is the optional enforcement tier. See [What is Meridian PSI?](/what-is-meridian-psi) for the full product definition, [Meridian Guard](/guard) for triggers and response levels, and [use cases](/use-cases/ninjatrader-revenge-trading-lockout) for problem-specific pages.
