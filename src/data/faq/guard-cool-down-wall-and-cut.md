---
question: "What are the Cool-down Wall and Cut in Guard v2?"
category: trading
order: 3
---

Guard v2 — first on the standalone Meridian apps for Tradovate and Ironbeam accounts (early access) — is a six-tier escalation ladder: Notify, Alert, Acknowledge, Pause, Cool-down Wall, Cut. Each tier does exactly one job. The top two are new:

**Cool-down Wall (tier 5)** covers your whole screen when your rule fires — a guided cool-down with a breathing pacer and a countdown, not a popup you can click away. You pre-choose a soft wall (can be Alt-Tabbed in an emergency) or a hard wall (re-asserts focus until the timer releases you). If you hold a position, a small dialog comes first — close it for me, or I'll close it myself — and the wall only takes over once you are verifiably flat. Closing or reducing a position is never blocked, at any tier.

**Cut (tier 6)** blocks your broker's order servers in the Windows firewall. The block is at the network layer and machine-wide — an order physically cannot leave the PC, which makes it the one stop that holds even a market order on a prop account. Honest fine print: anything sharing that connection (including charts) can go dark for the window, it requires admin rights, and it lifts automatically when the window ends. Guard is fail-open by design — a watchdog and Force-reset both release the firewall, so it can never lock your machine permanently.

On Tradovate demo and eval accounts, Guard can additionally write the platform's own risk lock (liquidate-only) — enforcement at the broker itself. The NinjaTrader 8 add-on keeps its proven five-level ladder (Notify, Risk Alert, Acknowledge, Trading Pause, Disconnect); the Wall and the Cut are part of Guard v2 on the standalone apps. See [Meridian Guard](/guard#guard-v2) and the [platform capability matrix](/platforms).
