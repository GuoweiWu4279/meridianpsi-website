---
title: Audience FAQ
section: talking-points
lastUpdated: "2026-05-14"
order: 3
faqs:
  - q: "Does it work on NinjaTrader 7?"
    a: "No. NT7 is not supported and there are no plans to add it. Meridian is native in NinjaTrader 8, with standalone Windows apps for Tradovate and Ironbeam accounts in early access."
  - q: "Does it work on Mac?"
    a: "No. Every Meridian app — the NT8 add-on and the standalone Tradovate/Ironbeam apps (early access) — is Windows-only. Mac is not supported."
  - q: "Can it close my open positions automatically?"
    a: "By default, no. Guard blocks you from adding risk — it stops new entries while leaving any open positions under your full control, and you can always exit yourself. Optionally, you can tick auto-flatten on a Trading Pause or Disconnect rule, and Guard will close all open positions the moment that rule fires — this is an explicit opt-in setting. If not enabled, open positions are never touched."
  - q: "What instruments does it support?"
    a: "Any instrument you can trade through a supported platform. On NinjaTrader 8 that includes futures, forex, stocks, and options; the standalone apps cover whatever your Tradovate or Ironbeam account trades. The behavioral signals are instrument-agnostic — they monitor your execution behavior, not the market you're trading."
  - q: "Does my trading data go to the cloud?"
    a: "Only an anonymized copy, and only if you don't opt out. Your behavioral data, session history, and PSI baseline are stored locally on your machine. Two requests go out: license validation with Whop, and an anonymized research upload — trading and behavioral records tied only to a random identifier (no name, credentials, account numbers, or funds), never sold, used solely to improve the product and for research. It's best-effort (the product works fully if it's blocked) and you can opt out anytime by email."
  - q: "Does it affect execution speed or latency?"
    a: "No measurable impact. Meridian runs as a native NT8 add-on and processes account and execution events that NinjaTrader already fires internally. It does not intercept or delay your order routing."
  - q: "What exactly happens when Guard disconnects the broker?"
    a: "Meridian calls NinjaTrader's standard broker disconnect API — the same action as manually clicking 'Disconnect' in the NT8 interface. By default, any open positions remain at the broker; they are not closed. If you've enabled the auto-liquidation option, Guard closes all open positions before disconnecting. By default, reconnecting while the rule's window is still active just gets re-disconnected (a per-rule setting); once the window ends, you reconnect through NT8 normally."
  - q: "Can I turn off specific signals I don't care about?"
    a: "Yes. Each of the seven behavioral dimensions has an individual weight in Settings — you can set it to zero (disabled) or tune the sensitivity. On Guard, each rule has its own threshold and response level, independent of the PSI weights."
  - q: "How is the baseline calculated? What if I change my strategy?"
    a: "The baseline uses online adaptive statistics — it continuously updates based on your recent sessions, with more recent sessions weighted more heavily than older ones. If you change your strategy significantly, the baseline adapts over time. Playback (Market Replay) sessions do not affect your live baseline, so you can practice without contaminating your real trading data."
  - q: "Does it work during Market Replay?"
    a: "Yes. Meridian monitors your behavior during Market Replay sessions as well. However, Replay data is tracked separately and does not affect your live trading baseline — the two session types are kept isolated."
  - q: "What's the difference between Meridian Core and Meridian Guard?"
    a: "Core includes real-time PSI monitoring, the seven behavioral signals, the floating HUD, the Session Journal, 5 years of local session history, and (since v1.5.0) the full Intel analytics workspace — monthly digest, PSI × P&L correlation, weekday patterns, breakdowns, and a personalized pre-session Risk Brief. Guard adds the enforcement layer: the Guard System — automated rules with six trigger conditions and five response levels, escalating from a quiet notify, to a persistent risk alert, to a typed acknowledgment, to a trading pause that blocks new entries, up to a full broker disconnect — plus Strict Lock, the un-bypassable commitment switch."
  - q: "Is there a free trial?"
    a: "Yes — 14 days, credit card required at checkout. The trial auto-cancels if not converted; you won't be charged unless you actively keep the subscription after the trial ends."
  - q: "Does it work with prop firm accounts (APEX, TopStep, etc.)?"
    a: "Yes. Meridian works with any brokerage or simulated account connected through NinjaTrader 8. Many traders use it specifically during prop firm evaluations, since the behavioral signals often start firing before the hard evaluation limits are reached."
  - q: "What happens if Guard disconnects me during a live trade?"
    a: "Your open position stays open at the broker unless you explicitly configure Guard to auto-liquidate. If positions are open when a Disconnect fires, Guard first shows a countdown with a one-click Flatten All so you can exit before the connection drops. If you keep the position, by default Guard re-disconnects NT8 reconnect attempts until the rule's window ends — the position itself remains at your broker. This is intentional: Guard fires when you are in a deteriorating behavioral state."
  - q: "How long until the baseline is fully calibrated?"
    a: "The baseline starts adapting immediately from your first session. After 5–10 live trading sessions, it has enough data to produce meaningful signals. After 20–30 sessions, the signals become noticeably more precise. The system improves continuously — there is no 'done' state, and there is no minimum session count before it's useful."
---

These are the questions you'll encounter in comments, DMs, and live chats. Having clean, accurate answers ready lets you respond quickly and builds your credibility with your audience.
