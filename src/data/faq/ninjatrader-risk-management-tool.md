---
question: 'Is there a risk management tool that works natively inside NinjaTrader 8?'
category: psychology
order: 4
---

Yes. Meridian is a **native NinjaTrader 8 add-on** that delivers complete risk management — the traditional limits (daily loss, P&L and drawdown caps, single-trade loss caps, loss-streak cutoff) plus a real-time behavioral layer and automated enforcement — directly inside the platform.

It does not require a separate application or any broker API or credentials; it reads NinjaTrader's internal data directly. Once installed, it runs alongside your existing NinjaTrader setup and monitors all connected accounts simultaneously.

Key capabilities inside NinjaTrader 8:

- **[Live PSI score](/features#live-psi)** updated in under 100ms after every fill
- **[Seven behavioral signals](/features#seven-dimensions)** that detect patterns like revenge entries, stop widening, and overtrading pace
- **[Guard rules](/guard)** that can trigger alerts, acknowledgement prompts, trading pauses, or broker disconnection based on conditions you define (P&L limit, consecutive losses, PSI threshold, session time, and more)
- **[Hard limits](/guard)** (Guard tier, off by default) — a max-contracts cap and blocked entry order types enforced at order submission: an over-cap or forbidden entry is rejected, and a slipped market order is trimmed back to your cap (closing or reducing is never blocked)
- **Session history** stored locally on your machine

Meridian works with the brokers and prop firm connections that NinjaTrader 8 supports, including Apex, My Funded Futures, Take Profit Trader, and direct brokerage accounts. (Trading a Tradovate-based account instead? A standalone Meridian app is in early access — see [Platforms](/platforms).) See [pricing](/pricing) to start a free trial.
