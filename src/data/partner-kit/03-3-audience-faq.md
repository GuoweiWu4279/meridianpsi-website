---
title: Audience FAQ
section: talking-points
lastUpdated: "2026-05-14"
order: 3
faqs:
  - q: "Does it work on NinjaTrader 7?"
    a: "No. Meridian is built exclusively for NinjaTrader 8 on Windows. NT7 is not supported and there are no plans to add it."
  - q: "Does it work on Mac?"
    a: "No. NinjaTrader 8 is Windows-only, so Meridian is Windows-only by extension. Mac is not supported."
  - q: "Can it close my open positions automatically?"
    a: "No — by design. When Guard disconnects the broker, it stops you from placing new trades. Any positions already open remain under your full control. This is intentional: automatic liquidation during a volatile session can cause serious damage. The disconnect is a hard stop on new entries, not a forced exit from existing ones."
  - q: "What instruments does it support?"
    a: "Any instrument you can trade through NinjaTrader 8. It works with futures, forex, stocks, and options on NT8. The behavioral signals are instrument-agnostic — they monitor your execution behavior, not the market you're trading."
  - q: "Does my trading data go to the cloud?"
    a: "No. All behavioral data, session history, and the PSI baseline are stored locally on your machine. The only outbound network call Meridian makes is license validation with Whop. No trading data, session data, or behavioral data ever leaves your computer."
  - q: "Does it affect execution speed or latency?"
    a: "No measurable impact. Meridian runs as a native NT8 add-on and processes account and execution events that NinjaTrader already fires internally. It does not intercept or delay your order routing."
  - q: "What exactly happens when Guard disconnects the broker?"
    a: "Meridian calls NinjaTrader's standard broker disconnect API — the same action as manually clicking 'Disconnect' in the NT8 interface. Any open positions remain at the broker; they are not closed. To reconnect, you simply reconnect through NT8 normally. The disconnect is designed as a hard pause, not an emergency liquidation."
  - q: "Can I turn off specific signals I don't care about?"
    a: "Yes. Each of the seven behavioral dimensions has an individual weight in Settings — you can set it to zero (disabled) or tune the sensitivity. On Guard, each rule has its own threshold and response level, independent of the PSI weights."
  - q: "How is the baseline calculated? What if I change my strategy?"
    a: "The baseline uses online adaptive statistics — it continuously updates based on your recent sessions, with more recent sessions weighted more heavily than older ones. If you change your strategy significantly, the baseline adapts over time. Playback (Market Replay) sessions do not affect your live baseline, so you can practice without contaminating your real trading data."
  - q: "Does it work during Market Replay?"
    a: "Yes. Meridian monitors your behavior during Market Replay sessions as well. However, Replay data is tracked separately and does not affect your live trading baseline — the two session types are kept isolated."
  - q: "What's the difference between Meridian Core and Meridian Guard?"
    a: "Core includes real-time PSI monitoring, the seven behavioral signals, the floating HUD, the Session Journal, and 5 years of local session history. Guard adds two things: (1) the Guard System — automated rules with six trigger conditions and five response levels, from a quiet alert to a typed acknowledgment, forced countdown, confirmation-required mode, or full broker disconnect — and (2) the Intel Layer, which is the analytics view on top of your history (monthly digest, PSI × P&L correlation, weekday patterns, and a personalized pre-session Risk Brief). The Intel Layer is Guard-exclusive."
  - q: "Is there a free trial?"
    a: "Yes — 7 days, credit card required at checkout. The trial auto-cancels if not converted; you won't be charged unless you actively keep the subscription after the trial ends."
  - q: "Does it work with prop firm accounts (APEX, TopStep, etc.)?"
    a: "Yes. Meridian works with any brokerage or simulated account connected through NinjaTrader 8. Many traders use it specifically during prop firm evaluations, since the behavioral signals often start firing before the hard evaluation limits are reached."
  - q: "What happens if Guard disconnects me during a live trade?"
    a: "Your open position stays open at the broker — nothing is automatically closed. You need to manually reconnect in NT8 to resume trading. This is intentional: Guard fires when you are in a deteriorating behavioral state. The disconnect is meant to force a pause; what you do with your open position after that pause is your decision."
  - q: "How long until the baseline is fully calibrated?"
    a: "The baseline starts adapting immediately from your first session. After 5–10 live trading sessions, it has enough data to produce meaningful signals. After 20–30 sessions, the signals become noticeably more precise. The system improves continuously — there is no 'done' state, and there is no minimum session count before it's useful."
---

These are the questions you'll encounter in comments, DMs, and live chats. Having clean, accurate answers ready lets you respond quickly and builds your credibility with your audience.
