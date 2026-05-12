# YouTube Video #1 — The Anatomy of a Revenge Trade

**Series:** Behavioral Risk for Discretionary Traders (12-part lecture series)
**Length target:** 14-18 minutes
**Style:** Educational / lecture. White-board breakdowns + NT8 Market Replay demos. Voice can be ElevenLabs clone or live recording. Optional 30-sec face-on-camera intro/outro.
**Audience:** 35-50 year old discretionary futures traders on NT8. They've been trading 1-5 years, have read the typical psychology books (Trading in the Zone, Mark Douglas, Brett Steenbarger), but still bleed money to behavioral mistakes they "know better than to make."
**Goal of video:** Make the viewer say "this guy actually understands what's happening to me" — and the secondary goal is they remember the term "behavioral leading indicator" and the framing of "the in-session gap."

---

## Title options (pick one)

- **The Anatomy of a Revenge Trade** ← recommended (clean, authoritative)
- The 8 Minutes That Decide Most Trading Days
- What Actually Happens in Your Brain Between Loss #1 and Loss #2
- The In-Session Gap: Where Discretionary Traders Bleed Money

## Thumbnail

- White or off-white background, very clean
- Title text: "The Anatomy of a Revenge Trade" in serif (Source Serif Pro or similar)
- Subtitle in small caps: "EPISODE 1 — BEHAVIORAL RISK FOR DISCRETIONARY TRADERS"
- One small visual element — a minimal annotated chart with two losing candles labeled "L1" and "L2" connected by a curved line labeled "the gap"
- No clickbait faces, no "OMG" expressions, no red arrows everywhere. Looks like a Brett Steenbarger book cover, not a YouTube guru thumbnail

## Description (paste into YouTube)

> Most traders treat revenge trading as a discipline failure. The data tells a different story.
>
> In this first lecture of the series, we break down the exact behavioral sequence that turns a single loss into a blown session — and why every traditional risk tool fires at the wrong moment.
>
> 00:00 — The wrong question we keep asking
> 00:55 — Defining the in-session gap
> 03:10 — The four-stage behavioral sequence
> 07:20 — Why willpower fails specifically here
> 10:30 — The math of pressure decay
> 13:00 — What an early-warning system actually looks like
> 15:30 — Practical takeaways
>
> ---
>
> This is part 1 of a 12-part series on behavioral risk management for active futures traders.
>
> I'm the founder of Meridian (https://www.meridianpsi.com), a real-time behavioral monitoring add-on for NinjaTrader 8. The series stands on its own — you don't need any product to follow along. But if you want to see the concepts implemented in a live trading environment, the demo on the homepage shows the interception in action.
>
> Subscribe for the rest of the series. New lecture every Monday.

---

## SCRIPT

### Beat 1 — Cold open / hook (0:00–0:55)

**[Visual: Static title card. 3 seconds. Then cut to webcam — founder face, neutral background. No music.]**

> Most traders treat revenge trading like a discipline failure.
>
> They beat themselves up after a session goes wrong. They tell themselves they need to be more disciplined. They re-read Mark Douglas. They write the rules down. And then it happens again, the next time they take an early loss.
>
> In this lecture I want to argue that this entire framing is wrong. Revenge trading isn't a discipline problem. It's an architecture problem. And once you see that, a lot of things that have felt confusing about your own execution start to make sense.
>
> This is the first of twelve lectures on what I call behavioral risk management. The whole series is about a specific window in your trading day that almost no one talks about — and the reason almost no one talks about it is that the tools we have all act either too late or in the wrong place.
>
> So let's start with a question that I think is the wrong question.

**[Cut to white board / Excalidraw]**

### Beat 2 — Defining the in-session gap (0:55–3:10)

**[Visual: Excalidraw / whiteboard. Drawing a horizontal timeline labeled "ONE TRADING SESSION".]**

> Here's how almost every conversation about trading risk is framed.
>
> [Mark "OPEN" on the left, "CLOSE" on the right]
>
> A session opens. A session closes. And during that session, you're supposed to follow your plan. If you follow it, good things tend to happen. If you don't, bad things tend to happen.
>
> Now, traditional risk tools fall into one of three categories. They're either threshold-based — like a daily loss limit. Or they're corrective — like a broker auto-flatten when you hit a max drawdown. Or they're analytical — like a journal you fill out at the end of the day.
>
> [Annotate the timeline: "DAILY LOSS LIMIT" toward the right. "AUTO-FLATTEN" further right. "JOURNAL" off the timeline entirely, after the session]
>
> Now look at where these tools live on the timeline. The daily loss limit doesn't fire until you've already lost the daily loss amount. The auto-flatten doesn't fire until you've already exceeded your max drawdown. The journal doesn't fire until you're sitting on your couch later that night.
>
> Every single one of these is an after-the-fact tool. By the time it does anything for you, you've already broken your plan.
>
> [Draw a thick vertical line about 1/3 of the way through the timeline, labeled "FIRST UNUSUAL BEHAVIOR"]
>
> But here's the thing. The actual moment your session breaks down — the moment your execution starts to drift from your plan — that happens way earlier. It happens around here.
>
> [Draw a hatched zone between "FIRST UNUSUAL BEHAVIOR" and the "DAILY LOSS LIMIT" mark, label it "THE IN-SESSION GAP"]
>
> The window between when you start trading abnormally and when any tool you have actually does anything about it — I call that the in-session gap. It's the most important window in your day. And almost nothing protects you during it.
>
> So the question we should be asking isn't "how do I stay disciplined?" The question is: what is happening to me, structurally, inside this gap?

### Beat 3 — The four-stage behavioral sequence (3:10–7:20)

**[Visual: New whiteboard frame. Four numbered stages drawn left to right.]**

> When I went back through my own data and a lot of session logs from traders I've worked with, the same four-stage pattern showed up over and over. I'm going to walk you through it because if you can see it in advance, you can interrupt it. If you can't, you're flying blind.

**Stage 1 — The Trigger Loss (0:00 baseline)**

> [Write "1. Trigger Loss" on whiteboard]
>
> A trade goes against you. Could be a stop-out, could be a planned exit at a small loss, could be a loss that's normal for your strategy. By itself, this trade isn't a problem.
>
> What matters is what your nervous system is doing in the 90 seconds after this trade. Cortisol elevates. Heart rate goes up. Your brain shifts into what behavioral economists call hot cognition mode — fast, emotional, narrative-driven thinking. The slow, plan-following part of your brain is now harder to access.
>
> You don't notice this happening. From the inside, you just feel "ready to make it back."

**Stage 2 — The Re-entry (within 2-8 minutes)**

> [Write "2. Re-entry"]
>
> The next entry comes faster than your normal rhythm. Not always faster — sometimes the same speed — but in the cases that lead to blowups, it's almost always faster.
>
> [Cut to NT8 Market Replay. Show two losing trades. Highlight the time between them in red.]
>
> In my own data, my worst sessions are characterized by a re-entry within 2-8 minutes of a loss. Not 30 seconds — that's so obvious anyone notices it. 2-8 minutes is the dangerous window because it still feels like a "considered" decision, but the data on hot cognition says you're not making it from your prefrontal cortex.

**Stage 3 — The Size Drift (next 1-3 trades)**

> [Write "3. Size Drift"]
>
> Position sizing starts to creep. Maybe not on the next trade. Often by trade three or four. The internal narrative is something like "I have higher conviction on this one" or "I want to make it back faster."
>
> Both of those narratives are post-hoc. The actual driver is that hot cognition systematically underweights downside. You feel less risk than you should. So you size up.
>
> [Cut to NT8 chart. Show three trades — first at 1 contract, second at 1 contract, third at 2 contracts, fourth at 3 contracts. Highlight the size drift.]

**Stage 4 — The Stop Manipulation (during the bad trade)**

> [Write "4. Stop Manipulation"]
>
> This is the worst one because it's invisible. You enter a trade with a planned stop. The trade moves against you. You move the stop wider — usually with some narrative about "giving it room" or "the actual structure being a few ticks lower."
>
> The trade either comes back or it doesn't. If it comes back, your brain learns: "moving the stop worked." This is exactly the wrong lesson. It's the gambler's fallacy of risk management. The next time, you'll do it again, with more conviction. And eventually you'll do it on a trade that doesn't come back, and that one trade will erase a week of gains.

**[Cut back to webcam, brief.]**

> So that's the four stages: trigger loss, fast re-entry, size drift, stop manipulation. This sequence — in this exact order — is what most blown sessions actually look like under the hood. Not "I traded badly." A specific four-stage cascade.
>
> Now here's why willpower doesn't help.

### Beat 4 — Why willpower fails (7:20–10:30)

**[Visual: Whiteboard. Two columns, left labeled "Cold Cognition", right labeled "Hot Cognition".]**

> There's a body of research in behavioral economics — Loewenstein, Ariely, Kahneman, others — about a phenomenon called the hot-cold empathy gap. The short version is: when you're in a calm, deliberative state, you systematically underestimate how much your behavior will change when you enter a hot, emotional state. And vice versa.
>
> [Fill in the columns]
>
> In cold cognition, you write your trading plan. You set your max trades. You define your stop discipline. You promise yourself you won't take revenge trades. You really, sincerely mean it.
>
> In hot cognition — which is the state you're actually in after a stop-out — you're a different decision-maker. Faster, more narrative-driven, less risk-sensitive. The plan you wrote in column A doesn't have access to your steering wheel anymore.
>
> [Draw a one-way arrow from column A to column B labeled "no feedback"]
>
> Here's the part that destroys most willpower-based approaches: the connection between cold cognition and hot cognition is almost entirely one-directional. Cold-you can write rules for hot-you. But hot-you doesn't have to honor them.
>
> This is why "I'll just be more disciplined" never works. You're asking hot-you to do something that hot-you isn't structurally equipped to do.
>
> The solution to a hot-cold problem is never more willpower. It's always pre-commitment. That is a well-established result in behavioral economics — Ulysses tying himself to the mast, employees auto-deducting retirement contributions, alcoholics avoiding bars. The pattern is the same: cold-you sets up an environment that constrains hot-you, because hot-you can't be trusted to constrain itself.
>
> The trading equivalent of pre-commitment is what behavioral economists would call commitment devices. And the question becomes: what would a commitment device for trading actually look like?

### Beat 5 — The math of pressure decay (10:30–13:00)

**[Visual: Whiteboard. A line graph with X-axis "TIME WITHIN SESSION" and Y-axis "BEHAVIORAL PRESSURE".]**

> Before we get to what a commitment device looks like, one more piece of the picture. This is what behavioral pressure looks like over a session.
>
> [Draw a baseline at the bottom — relatively flat, low pressure]
>
> Most of a normal session, your behavioral state looks like this. Stable. Decisions are coming from your plan, not your emotions.
>
> [Draw a sharp spike upward at the moment of a loss, then a slow decay back toward baseline]
>
> When you take a loss, pressure spikes fast. The spike is the sympathetic nervous system response. Then it decays slowly back toward baseline — but not on its own. It decays as a function of what you do next.
>
> [Annotate: "Decay = function of behavior in next 8 min"]
>
> If your behavior in the next 8 minutes is restrained — you stay out of the market, you breathe, you check your plan — pressure decays. If your behavior is escalating — fast re-entry, size drift, stop manipulation — pressure stays elevated, or worse, compounds.
>
> [Draw a second spike, taller, on top of the first]
>
> A second loss while pressure is still elevated doesn't just add — it multiplies. Now you're in what I call cascade mode, where each subsequent decision is being made under more impairment than the last. This is what a blown session feels like from the inside. It doesn't feel like ten bad decisions. It feels like one decision compounding in a way you can't seem to stop.
>
> The math is interesting. If you can break the cascade once — even once — and let pressure decay back below threshold, the rest of the session is salvageable. If you can't, the rest of the session is almost mechanically lost.
>
> So the question becomes: how do you break the cascade? Specifically, how do you break it at the moment when hot-you is least equipped to break it?

### Beat 6 — What an early-warning system actually looks like (13:00–15:30)

**[Visual: Cut to a cleaner illustration of a "behavioral leading indicator" — a dashboard with seven signal bars and a composite score, similar to PSI but shown abstractly.]**

> The answer, structurally, is that you need a leading indicator that fires before the cascade — and a commitment device that activates when it does.
>
> A leading indicator means it's measuring inputs to behavior, not outputs of behavior. P&L is an output. By the time P&L tells you something's wrong, the damage is already done.
>
> Inputs are things like: how fast are you entering after a loss? Is your sizing drifting from your plan? Are you modifying stops on losing trades? Is your trade pace accelerating? These are observable. They're measurable in real time. And they happen before — sometimes minutes before — the P&L damage shows up.
>
> [Annotate the dashboard with the four behavioral inputs]
>
> So a behavioral leading indicator is just a system that watches these inputs and says: based on what you're doing right now, you're entering the cascade.
>
> The commitment device is what happens next. It's not auto-flattening your position — that's after-the-fact and panic-inducing. It's friction at the next decision. A modal that asks you to type a phrase. A 60-second cooldown before the next entry. A broker disconnect after repeated violations. The point is to slow hot-you down enough that cold-you can re-engage.
>
> This pairing — leading indicator plus commitment device — is what was missing from every other category of risk tool. Journals are leading-cognition tools but lagging-time tools. Daily loss limits are real-time tools but lagging-cognition tools. The thing that actually works has to be both: real-time and leading.
>
> That's the architecture I've been building, and it's why I think this whole problem is a category that didn't exist before. Not better risk management — different stage of risk management.

### Beat 7 — Practical takeaways (15:30–17:30)

**[Visual: Cut to webcam. Cleaner background. Pen and paper visible.]**

> Even if you never use any tool — including mine — there are three things you can take away from this lecture and apply this week.
>
> First: track your re-entry timing. Open a notebook or spreadsheet. For every losing session, write down how many minutes elapsed between your last loss and your next entry. Do this for two weeks and look at the distribution. If most of your blown sessions cluster in the 2-8 minute re-entry window, you've identified your specific architecture problem. That's worth knowing.
>
> Second: track stop modifications, separately from P&L. How many times this week did you move a stop on a losing trade? How many times on a winning trade? The asymmetry will tell you something. Most discretionary traders, when they actually count, find a 5-to-1 or worse ratio of moving stops on losers. That's a signal you can act on.
>
> Third: pre-write a phrase, in cold cognition, that you would be willing to type before any re-entry within 5 minutes of a loss. Not a generic phrase — your phrase. Mine is "I will not trade my way out of a loss." Put it on a sticky note next to your monitor. The cost of typing it is small. The benefit, if it stops one cascade per month, is enormous.
>
> These three practices — re-entry timing, stop-modification ratio, and a pre-committed phrase — are the closest thing you can do, with no tool at all, to building a behavioral leading indicator for yourself.

### Beat 8 — Outro (17:30–18:00)

**[Visual: Webcam, brief. Then end card.]**

> Next lecture is on why your daily loss limit is a trailing indicator — and what the math says about how late it actually fires. If you've ever wondered why hitting a hard limit somehow always feels too late, that's because mathematically, it is.
>
> Subscribe so you don't miss it. New lecture every Monday for the next 11 weeks.
>
> If you want to see what I described in Beat 6 — a real-time behavioral leading indicator with a built-in commitment device — there's a 30-second demo on the homepage at meridianpsi.com showing it intervening on exactly the four-stage sequence I walked through today. The product is called Meridian. I built it for NinjaTrader 8 specifically because that's where I trade. It's not affiliated with any prop firm and it's the only Stage 1 tool I'm aware of in the category.
>
> Thanks for watching. See you next Monday.

**[End card: Meridian wordmark + "meridianpsi.com" + "Subscribe for next Monday's lecture"]**

---

## Production checklist

- [ ] Script trimmed to actual reading length (target 14-18 min spoken)
- [ ] Excalidraw boards prepared in advance (4 boards: timeline, four-stage, hot/cold columns, pressure decay graph)
- [ ] NT8 Market Replay session loaded with the right scenarios (size drift, stop modification, fast re-entry sequence)
- [ ] PSI HUD visible in screen recording for the dashboard illustration
- [ ] ElevenLabs voice clone tested with this script (or live recording booked)
- [ ] Webcam intro/outro recorded (~30 sec each)
- [ ] Descript project created, transcript edited
- [ ] Opus Clip configured to auto-generate 3-5 shorts
- [ ] Submagic captions applied
- [ ] Thumbnail designed (clean, book-cover style)
- [ ] Description filled with timestamps
- [ ] First comment pinned: link to the homepage demo

## Shorts to extract (Opus Clip will auto-find these, but here are the obvious ones)

1. **"The in-session gap" definition** (Beat 2, ~0:55–3:10) — the most quotable single concept. Strong standalone short.
2. **The four-stage sequence summary** (end of Beat 3, ~6:40–7:20) — extracts as a 40-second standalone.
3. **The hot-cold empathy gap** (Beat 4, ~8:00–9:30) — academically grounded, very shareable.
4. **The three practical takeaways** (Beat 7) — bullet-list-friendly, save-worthy.
5. **"Pressure compounds, it doesn't add"** (Beat 5) — visceral, repostable.

## Reddit followup

Within 24 hours of publishing this video, post a self-text on r/FuturesTrading or r/Daytrading following the **voice-samples.md** style:

> Title: I tried to map out exactly what happens between loss #1 and loss #2 in a blown session. Sharing the framework here for discussion.
>
> Body: Started tracking my own data because I kept ending sessions wondering "what just happened?" Pulled the four-stage sequence I keep falling into out of the mess: trigger loss → fast re-entry → size drift → stop manipulation. Wrote it up in a longer format on YouTube if anyone's interested, but happy to discuss the framework here. What does your blown-session anatomy look like?
>
> [Link to YouTube video as a comment, NOT in the body]

This is how the long-form video starts driving Reddit signal. The video does the heavy lifting; the Reddit post asks for discussion, not clicks.
