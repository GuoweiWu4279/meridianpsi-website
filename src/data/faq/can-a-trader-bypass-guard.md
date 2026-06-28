---
question: 'Can a trader just bypass Guard?'
category: trading
order: 4
---

Honest answer: it depends on which lock fires, and we'd rather tell you up front. Guard works at three layers, and the layer is exactly what a determined, tilting trader can or can't get around.

**App / order layer** — Notify, Alert/Risk Alert, Acknowledge, Pause, the Cool-down Wall, Strict Lock, and Hard limits all run in the app. Hard limits and Pause enforce at the order layer — over-cap or blocked-type entries are rejected at submission and a slipped market order is trimmed back, exactly as a native risk control would. The escalation tiers put hard, deliberate friction between you and a tilt trade — the kind your in-the-moment self won't push through, which is the whole point of a commitment device. Like any in-platform risk tool, they govern this machine; someone who closes the app and trades from a phone is outside any app-level control, native or Meridian. Strict Lock means _you_ can't switch a fired pause off mid-session (no early exit, no force-reset, and it survives a restart) — but it's in-app friction, not a device-proof lock.

**OS / machine level** — Cut (standalone) blocks your broker's order servers in the Windows firewall. It's machine-wide: an order physically cannot leave that PC — it holds even a market order from that machine. A phone or a second device is still outside it.

**Broker level — the one device-proof stop** — on Tradovate demo and eval accounts, the standalone app writes Tradovate's _own_ liquidate-only lock. That one is enforced at the broker, not in our app, so it holds even if you close the app, reboot, or log in from another device. It's the real answer to "can a tilting trader just keep going?" Funded/live Tradovate and Ironbeam don't expose this API, and NinjaTrader has no broker-side lock — there, enforcement is app/connection-level only.

So when Meridian says _un-bypassable_, it means exactly one thing: the broker-level lock on Tradovate eval/demo, the one device-proof stop. Everywhere else, Guard enforces at the order and machine layer — the same place native risk tools enforce — and for most traders, the version of you that's tilting not being able to talk its way past it is all it takes. See [Meridian Guard](/guard) for the full enforcement model and the [platform capability matrix](/platforms) for what runs where.
