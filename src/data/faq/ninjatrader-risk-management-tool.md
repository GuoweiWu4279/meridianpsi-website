---
question: "Is there a risk management tool that works natively inside NinjaTrader 8?"
category: psychology
order: 4
---

Yes. Meridian is a **native NinjaTrader 8 add-on** that delivers complete risk management — the traditional limits (daily loss, max position size, P&L and drawdown caps, loss-streak cutoff) plus a real-time behavioral layer and automated enforcement — directly inside the platform.

It does not require a separate application or any broker API or credentials; it reads NinjaTrader's internal data directly. (A lightweight license check and optional anonymized telemetry do go out over HTTPS — it isn't fully offline.) Once installed, it runs alongside your existing NinjaTrader setup and monitors all connected accounts simultaneously.

Key capabilities inside NinjaTrader 8:
- **[Live PSI score](/features#live-psi)** updated in under 100ms after every fill
- **[Seven behavioral signals](/features#seven-dimensions)** that detect patterns like revenge entries, stop widening, and overtrading pace
- **[Guard rules](/guard)** that can trigger alerts, acknowledgement prompts, trading pauses, or broker disconnection based on conditions you define (P&L limit, consecutive losses, PSI threshold, session time, and more)
- **Session history** stored locally on your machine; anonymized data may be collected for research (opt-out)

Meridian works with all brokers and prop firm connections that NinjaTrader 8 supports, including Apex, Topstep, and direct brokerage accounts. See [pricing](/pricing) to start a free trial.
