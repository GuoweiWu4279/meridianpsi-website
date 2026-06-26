# Meridian GEO Findings — 2026-06-25 (multi-engine probe + gap analysis)

> Point-in-time artifact. The **permanent system** that produced this (and the GEO↔Reddit loop) lives in
> `GEO-INTEGRATION.md`. The weekly single-engine ledger is `Company/YouTube/pipeline/output/GEO_AUDIT.md`.
> Author: Claude (24-agent workflow `wf_ef4a46e3-085`) · cross-checked against the 2026-06-25 `geo_audit.py` run + GA4.

---

## 0. Methodology (read this — don't overclaim the numbers)

Two independent probes, deliberately different, cross-read against each other:

1. **Single-engine literal probe** (`geo_audit.py`, ran today): asks **OpenAI gpt-4o with forced `web_search`** the 7
   buyer queries, captures the real answer + the real cited URLs, LLM-judges mention/accuracy/competitors. This is the
   **authoritative "is Meridian literally in a ChatGPT answer"** signal. Every citation in its detail file carries
   `?utm_source=openai` — confirming it is **ChatGPT only**, one engine.
2. **Multi-engine reasoned probe** (this workflow, 12 queries): each agent runs live `WebSearch` over the *retrieval
   surface* an answer engine draws from, then reasons about what ChatGPT / Perplexity / Google AI Overviews / Gemini
   would assemble, who they'd cite, and which Reddit threads rank. **This is a grounded approximation, not literal API
   calls to Perplexity/Gemini.** It also surfaced a hard caveat: **reddit.com is blocked to our research crawler**
   (WebSearch returns zero reddit.com; threads were recovered via DuckDuckGo). The *consumer* engines DO ingest Reddit
   (they pay for it — see §4), so **our tools UNDERCOUNT Reddit's weight; the real lever is even bigger than shown.**

Treat the verdicts as directionally solid, not precise. The trend line and the *structure* of who-wins-what is the value.

---

## 1. Scoreboard — where Meridian stands across 12 buyer queries

| Buyer query | Status | What owns it instead |
|---|---|---|
| what is Meridian PSI trading tool | ✅ **surfaced + accurate** | (us — entity query) |
| Ironbeam risk management discipline tool | ✅ **surfaced + accurate** | small field; Ironbeam-native + us |
| behavioral risk management tool for prop firm traders | 🟡 mentioned, thin | Anchor, Tilt Proof, Tick Brain IQ, Edgewonk |
| NinjaTrader 8 psychology discipline add-on | 🟡 mentioned, thin | RiskMaster, Discipline Manager, NT8-native |
| discipline tool to pass a prop eval without blowing up | 🟡 mentioned, thin | MindGuard, Anchor, Edgewonk, TradeZella |
| best NinjaTrader risk add-on for discipline | ❌ absent | Guardian Angel Trader, Account Risk Manager, Discipline Manager |
| software to stop revenge trading futures | ❌ absent | Tradesyncer, CrossTrade, RiskGuard, broker-native lockouts |
| tool that locks you out after consecutive losses | ❌ absent | TiltGuard, LockMyTrades, Topstep/Tradovate/ProjectX lockouts |
| how to prevent overtrading as a day trader | ❌ absent | content sites (no tool wins) — TradingReset, HighStrike |
| Tradovate risk management lockout tool | ❌ absent | Tradovate-native, CrossTrade, TiltGuard |
| how to stop tilt trading in real time | ❌ absent | TiltGuard, Topstep "The Tilt", Edgewonk Tiltmeter |
| real-time trading psychology monitoring app | ❌ absent | Plancana, MindGuard, Edgewonk, TraderSync |

**Pattern (this is the whole story):**
- We **win where we are distinctive** — the words "Meridian / PSI / psychological / behavioral / real-time," and the
  small-field broker (Ironbeam). The model files us correctly under *trading psychology monitor*.
- We **lose every query framed as "risk management / lockout / discipline tool."** The AI's semantic frame for
  "discipline" is **hard lockout / drawdown-cap enforcement**, owned by enforcement incumbents with years of forum +
  Reddit footprint. We are not yet pattern-matched to that high-intent string.

---

## 2. ★ The finding that changes the strategy: the behavioral-monitor category is WIDE OPEN off-site

I profiled the 8 competitors closest to our positioning (TradePit AI, MindGuard, Anchor, Tier Lock, Vyron, CTX, Zentra,
PropPulser). **All 8 have essentially ZERO durable off-site footprint:**

| Competitor | Reddit | Directories (PH/G2/AlternativeTo/NT-Ecosystem) | Earned media / listicles |
|---|---|---|---|
| TradePit AI | none (vaporware/waitlist) | none | none |
| MindGuard | none | none | none |
| Anchor | none | none | none |
| Tier Lock | none | not even on NT Ecosystem | none |
| Vyron | none | none | none |
| CTX | none | none | absent from every "best journal" roundup |
| Zentra | none | none | none |
| PropPulser | none | none | none |

**Why this matters more than the scoreboard:** the competitors ChatGPT "names" for our queries mostly surface because
their own marketing pages got crawled (note the `utm_source=openai`), **not** because anyone trusts them across sources.
That's transient and fragile. **Nobody in the real-time-trading-psychology niche has won Reddit or the directories.**
The category's durable AI-citation surface is **unclaimed**. First mover who builds a genuine Reddit + directory corpus
**owns how AI describes this entire category.** That window is the opportunity; it will not stay open.

The real, durable incumbents are a *different* category — **hard-lockout** tools (Guardian Angel Trader, Account Risk
Manager / affordableindicators.com with 8,000+ customers + 4.8 Trustpilot, Discipline Manager, plus NT8-native and
broker-native lockouts). We don't beat them by out-lockout-ing them. We beat them by **bridging**: Meridian is the only
one with *both* the behavioral-monitor layer they lack *and* Guard (the lockout layer the searcher is actually asking
for). The on-site `/compare` + `/answers` copy and the Reddit corpus must make that bridge explicit.

---

## 3. GA4 reality check — cited ≠ clicked (yet)

Last 28 days, GA4 top-25 traffic sources: **no AI-engine referral at all** (no chatgpt.com, perplexity.ai, gemini).
Top referral is `ninjatraderecosystem.com` (36 sessions), then bing/organic, linkedin, vercel. So even though ChatGPT
cites `meridianpsi.com` ~11× per audit, that is **not yet producing measurable referral clicks** (small absolute
traffic, and AI assistants often strip the referrer into "(direct)"). **Baseline established: GEO citation is real but
pre-traffic.** The honest near-term win is *accurate presence + share-of-voice in answers*, not a traffic spike.

---

## 4. Why Reddit is the lever (deep-research summary)

- Reddit is the **#1–2 most-cited domain** on essentially every AI engine in 2025-26 (5W: ~12% of US ChatGPT citations,
  2nd to Wikipedia; Profound: #1 on Google AI Overviews + Perplexity). Driven by **paid licensing** — Google–Reddit
  (~$60M/yr) + OpenAI–Reddit (~$70M/yr) ≈ **$130M/yr** of legal, structured, real-time Reddit feed.
- **Per-engine:** Perplexity strongest (Reddit = ~24% of its citations); ChatGPT strong; **Google AI Overviews halved
  Reddit in Sept 2025**; **Gemini ~0.1% — don't expect Reddit work to move Gemini.**
- **Volatile, not guaranteed:** ChatGPT's Reddit share swung ~60%→10% in weeks (Sept 2025 `num=100` removal crashed
  Reddit citations ~95%); Reddit sued Perplexity (Oct 2025). **Reddit is necessary, not sufficient — always pair it with
  owned answer pages** so accuracy survives a citation downturn.
- **The citation unit is an individual COMMENT in a specific thread, not a subreddit or a brand post** (≈99% of ChatGPT
  Reddit cites are individual threads). This is why our founder-comment model is the right shape, and why starting
  promo posts is the wrong one.

Full citability mechanics + the subreddit tier map + the do/don't are operationalized in `GEO-INTEGRATION.md §3–§4`.

---

## 5. Gaps — ranked (what we're missing)

**On-site (free, mostly already addressed by the 2026-06-10 plan — verify propagation):**
1. The "discipline / risk-management / lockout" query class has **no on-site page that bridges behavioral-monitor →
   enforcement**. `/answers` + `/compare` need a page explicitly answering "best NinjaTrader risk/discipline add-on"
   that says: keep your lockout, Guard *is* a lockout, and the PSI layer prevents you needing it. *(highest free lever)*
2. The live **NinjaTrader Ecosystem discourse listing still shows "7-day trial" + old pricing** — violates CANON
   (14-day, card required). It is an authoritative, AI-cited source. **Fix the copy at the source** (Gary controls that
   listing; draft ready on request). This is the live-fixed ≠ source-fixed re-sync rule biting again.

**Off-site (the real Failure-B gap — this is where we're thin):**
3. **Zero Reddit corpus** tying "Meridian" to revenge-trading / tilt / overtrading / prop-lockout. The threads AI cites
   for our queries name competitors and never us. **This is the #1 lever and it's barely started** (see §6). → starter
   target list in `GEO-INTEGRATION.md §5`.
4. **Zero authoritative third-party anchors** AI entity-resolution weights: no Wikidata, no AlternativeTo / Product Hunt
   / G2 listing, no independent review. The competitors don't have these either — **so this is a land-grab, not catch-up.**
5. **No multi-engine monitoring.** We only literally probe ChatGPT. Perplexity (where Reddit is strongest) and Google
   AI Overviews are unmonitored. → `geo_audit.py` should grow a Perplexity probe (proposed, not yet built).

**System gap (the one you flagged — now closed by this work):**
6. The GEO audit produced "which Reddit threads AI cites" every week and **that intelligence flowed nowhere.** The
   Reddit system and the GEO system were run as two things. They are now wired into one loop — `GEO-INTEGRATION.md`.

---

## 6. The hard dependency — the Reddit engine isn't keyed on yet

`reddit/ops/queue.md` shows **Phase 0 setup is 100% unchecked**: account hygiene (email/phone/2FA), Reddit Pro signup,
the read-only API ticket, and *even telling me the account's current comment karma* are all undone. **Until those
~25 minutes happen, the highest-leverage GEO lever cannot run.** Everything in §5.3 is blocked on it. This is the
single most important action and it is Gary-only.

---

## 7. Actions (ranked by leverage × who's gated)

| # | Action | Leverage | Gate |
|---|---|---|---|
| 1 | **Do the 25-min Reddit Phase-0 setup** (`queue.md §0`) — unblocks the entire Reddit-as-GEO engine | **HIGHEST** | **Gary only** |
| 2 | Start the founder-comment cadence on the §5 starter threads (disclosed, value-first, within red lines) | HIGH | Claude drafts / Gary pastes |
| 3 | Build the on-site "NinjaTrader risk/discipline add-on" bridge page (`/answers` or `/compare`) | HIGH (free) | Claude (then Gary OK) |
| 4 | Fix the stale "7-day trial" on the NT Ecosystem discourse listing | MED (free) | Gary (he controls listing) |
| 5 | Land 2-3 land-grab directory listings (Product Hunt, AlternativeTo, NT Ecosystem product page) | HIGH | Gary (external publishing) |
| 6 | Add a Perplexity probe to `geo_audit.py` (multi-engine monitoring) | MED | Claude (cross-dept; propose first) |
| 7 | Wikidata item once 1-2 independent anchors land (per original plan §4) | MED | Gary + notability gate |

Items 2-3 and 6 are in my autonomy lane (content/site/ops); 1, 4, 5, 7 need Gary (setup / external publishing / spend).
