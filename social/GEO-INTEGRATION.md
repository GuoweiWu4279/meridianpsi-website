# GEO ↔ Reddit — one loop (the merged system)

> **Why this file exists (Gary, 2026-06-25):** GEO and Reddit were run as two systems. They are one. The GEO audit
> already produces *exactly* what Reddit ops needs (which threads AI cites, which queries we're invisible on, who beats
> us) and Reddit is the **#1–2 lever** that moves those audits. This file wires them into a closed loop.
>
> **Read order for any GEO/Reddit work:** this file (the loop) → `CONTENT-SYSTEM.md` (the write loop) → `ARTIFACTS.md`
> (genre) → `COMMENT-ANATOMY.md` (the reply spec) → `brand/VOICE.md` (write + scan). Facts → `../../MERIDIAN.md` + CANON.
> Platform safety/cadence → `reddit/ops/PLAYBOOK.md`. Latest evidence → `GEO-FINDINGS-2026-06-25.md`.

---

## 0. The thesis (first principles)

AI answer engines assemble buyer-intent answers from **third-party sources they trust — and Reddit is the biggest one**
(~$130M/yr of Google+OpenAI Reddit licensing; Reddit is #1–2 most-cited domain). For our category, the engines literally
cite Reddit threads about revenge trading / tilt / overtrading / prop lockout. **So: the GEO answer changes when the
Reddit corpus changes.** Our job is to be genuinely, helpfully present (disclosed, value-first, by hand) in the exact
threads the engines mine — and to keep owned answer pages accurate as the durable backstop. Reddit moves the needle;
the site keeps the description right when Reddit's volatile share dips.

**The category is currently unclaimed off-site** (every psych-monitor competitor has zero Reddit + zero directories —
see `GEO-FINDINGS §2`). This is a land-grab window, not a catch-up. That is the reason to run this loop *now*.

---

## 0.5 The three Reddit→GEO levers (ranked) — "use Reddit for GEO" is NOT "reply to comments"

Using Reddit for GEO = **make `reddit.com` a source AI cites for our category**. Replying in other people's threads is
only the smallest, slowest lever (and account-gated). Ranked by control × leverage:

- **★ The full-source map drives all of this (`GEO-TARGETS.md`, upgraded 2026-06-26).** Every audit run now classifies
  EVERY source AI cites per query — not just Reddit — and assigns the play per type (对症下药): **Reddit** → disclosed
  comment + own-sub post; **content/editorial site** (daytrading.com, trademomentum…) → get cited there (pitch the
  author / be the resource they link); **directory** → get listed (free land-grab); **broker forum/help-desk** (Tradovate
  zendesk, tradeify…) → owned `/answers` page + community answers; **competitor product site** → can't enter, **DISPLACE**
  via our `/compare`+`/answers` for that exact query + directory listings. It also captures the engine's literal search
  terms when the API surfaces them. So each query is worked by its actual source mix; the levers below are the *plays*,
  the map says which one each query needs. (06-26 aggregate: competitor sites ×47, ours ×17, broker/forum ×15, content
  ×14, Reddit ×5.)
- **★ Lever 1 — own subreddit (r/MeridianPSI) as a citable answer-corpus (BIGGEST, fully controllable, no karma gate,
  no astroturf risk).** Our own sub is on `reddit.com` (a domain AI trusts) and we control it 100%: we name Meridian /
  PSI / Guard freely, date facts, and structure each post so an engine can lift a clean chunk. We write one structured
  answer post for **each buyer query the audit shows us invisible on** — these become canonical sources AI can quote.
  Evidence it works: our own `r/u_MeridianPSI` content was already cited once (06-18 audit). **Honest limit:** a small
  new sub won't out-rank a giant sub's viral thread, so Lever 1 is strongest for *entity/brand* queries ("what is
  Meridian", "Meridian vs X" — where we already win) and as durable corroboration; competitive "best tool" queries
  still need Lever 2. This was the **underweighted lever** — most of this doc was Lever 2.
- **Lever 2 — targeted presence in the threads AI already cites.** The audit hands us the exact `reddit.com` threads
  feeding answers (`GEO-TARGETS.md` Lane A). Disclosed, value-first presence there puts Meridian inside the engine's
  source. This is where founder comments live — but the strategic move is *which ~10 threads*, not "reply to everything."
- **Lever 3 — pair every Reddit asset with an owned `/answers` page.** Reddit citation share is volatile; the owned page
  keeps the description accurate when it dips, and the two cross-reinforce in Google ranking (which AI retrieval rides).
  **2026-06-25 reality check:** the twins for all 5 invisible queries ALREADY EXIST and are factually current (scanned:
  no 7-day / no-telemetry / Intel-Guard-exclusive / 1.4.x defects) — e.g. `/answers/can-ninjatrader-stop-revenge-trading`,
  `/answers/best-ninjatrader-tool-to-stop-trading-after-a-loss`, `/answers/how-to-prevent-overtrading-in-ninjatrader`,
  `/use-cases/prop-firm-behavioral-risk-control`, `/best-ninjatrader-risk-management-tools`. **So do NOT build new pages
  (page-inventory discipline, AGENTS.md).** That we're invisible *despite* accurate pages is the proof Failure B is an
  off-site problem (GEO_ACTION_PLAN §1: "no amount of on-site copy fixes this") — the lever is Reddit (Lever 1/2),
  blocked only on Phase-0. Lever-3 work = keep the existing twins in sync when facts change, not author duplicates.

Per-engine reality (don't spread evenly): Perplexity + ChatGPT cite Reddit heavily; **Gemini ~0.1% — reach it via the
owned site + Wikidata instead.** Lever 1 is account-blocked only by "the sub must exist" (Phase-0), not by karma — so
it is the first thing that can ship once the account exists, unlike the comment grind.

---

## 1. The loop

```
  ┌──────────────────────────────────────────────────────────────────────────┐
  │ 1. GEO AUDIT  (weekly geo_audit.py = ChatGPT; periodic multi-engine probe) │
  │    OUTPUT: invisible queries · competitors named · cited domains           │
  │            · ★ the exact Reddit thread URLs the engines cite               │
  └───────────────────────────────┬──────────────────────────────────────────┘
                                   ▼
  ┌──────────────────────────────────────────────────────────────────────────┐
  │ 2. BRIDGE (§2)  translate audit output → 3 Reddit target lanes             │
  └───────────────────────────────┬──────────────────────────────────────────┘
                                   ▼
  ┌──────────────────────────────────────────────────────────────────────────┐
  │ 3. REDDIT OPS  the existing write system (CONTENT-SYSTEM → ARTIFACTS →     │
  │    COMMENT-ANATOMY → VOICE) drafts disclosed, value-first, citable replies │
  │    Claude drafts → Gary pastes by hand (red lines, PLAYBOOK)               │
  └───────────────────────────────┬──────────────────────────────────────────┘
                                   ▼
  ┌──────────────────────────────────────────────────────────────────────────┐
  │ 4. CORPUS LANDS  Meridian named usefully in cited threads + own-sub indexed│
  │    (paired with owned /answers + /compare pages kept accurate)             │
  └───────────────────────────────┬──────────────────────────────────────────┘
                                   ▼
  ┌──────────────────────────────────────────────────────────────────────────┐
  │ 5. RE-CRAWL → next audit shows movement (visibility / share-of-voice /     │
  │    citations) + GA4 reddit referral + "saw you on Reddit" DMs              │  ──┐
  └────────────────────────────────────────────────────────────────────────────┘  │
                                   ▲                                                │
                                   └──────────────────── loop ──────────────────────┘
```

---

## 2. The bridge — WIRED, not narrated (the forcing function)

> 2026-06-25 rigor fix: the bridge used to be a sentence telling a future Claude to "derive targets by hand" — a
> reminder, which the factory-rigor rubric calls a *proven corpse* (fires 0×). It is now **mechanical**: every
> `geo_audit.py` run calls `write_geo_targets()`, which filters the run's citations for `reddit.com` threads and
> **auto-writes `reddit/ops/GEO-TARGETS.md`** (Lane A cited threads + Lane B invisible queries). No human "I derive"
> step — the audit producing the intake is now code, not discipline. The human-in-the-loop steps (forced by the red
> lines, not removable) are only: score each target ≥3, confirm it's live (tooling can't read reddit.com), draft
> through the gate, and promote the survivor into `queue.md` with a status. `GEO-TARGETS.md` is **machine-owned and
> regenerated each run**; the human-curated, status-tracked copy with RETRACT lives in `queue.md`.

The three lanes the emit produces (and the human curates):

- **Lane A — Cited-thread targets.** The actual `reddit.com/...` URLs the audit shows the engines citing for our queries
  → these threads are *already* feeding AI answers. If we add a genuinely useful, disclosed comment there (within red
  lines), we put Meridian inside the engine's source. **Highest leverage.** Score each with the COMMENT-ANATOMY intake
  gate (≥3) and the freshness/lock check (§4) before queuing.
- **Lane B — Invisible-query topics.** Every query where we're ❌/🟡 is an evergreen pain point traders post about
  constantly. Turn it into (i) a standing search to find *fresh* threads asking it, and (ii) an own-sub / owned-page
  topic so the durable answer exists. (e.g. "stop tilt in real time", "lock me out after N losses".)
- **Lane C — Competitor-gap angles.** Where the audit names a competitor, note the *gap* only we fill (behavioral layer
  vs. their static lockout; both layers vs. their journal-only). That gap is the honest, non-promotional *substance* of
  a comment — never "we're better," always the mechanism distinction a real trader would find useful.

> Maintenance tie-in (PLAYBOOK "canonical fact changed → re-sync live posts"): when an audit reveals a **stale fact in a
> third-party AI-cited source we control** (e.g. the NT Ecosystem listing showing "7-day trial"), that is a GEO defect —
> fix the source copy and queue the live correction. Accuracy in cited sources IS GEO.

---

## 3. What makes a Reddit comment CITABLE (the WHY; the enforced form is in the gate)

> 2026-06-25 rigor fix: the load-bearing 3 rules below now live as **enforced checklist item 7 in
> `reddit/ops/COMMENT-ANATOMY.md §8`** — the pre-send gate the writer cannot skip — so a drafting Claude with no GEO
> context still applies them (closes the producer-blind hole). This section is the **rationale**, not a second copy to
> drift from. The gate is the source of truth; this is the why.

These are GEO multipliers layered **on top of** COMMENT-ANATOMY's trust rules. A comment must pass the trust gates first;
these make a trust-passing comment more likely to be retrieved and quoted by an engine.

1. **Engines cite individual comments, not threads.** Write each reply **self-contained, 50–150 words, answer-first in
   sentence one**, readable with zero thread context. (Self-contained answer-first ≈ 2.3× citations, +40% retrieval.)
2. **Name entities explicitly — never "this tool / it."** Say *Meridian*, *PSI 0–100*, *Guard*, *the 7 signals*,
   *NinjaTrader 8 / Tradovate / Ironbeam*. (Stats +41%, quotations +28%, naming authoritative sources +115% — Princeton GEO.)
3. **Specificity is the strongest lever** — 1–3 concrete facts per paragraph: an instrument (ES/NQ/MES), an eval mechanic
   (trailing drawdown, daily loss limit), a real number/moment ("2–8 min after a loss is where mine clustered"). This is
   *also* COMMENT-ANATOMY Test B — the trust rule and the citation rule are the same rule.
4. **Lead with the differentiation sentence:** real-time behavior vs. *your own baseline*, catching the impulse *before*
   the order — not a static loss-limit that fires after you're already down. This is the one-line that distinguishes us
   from every lockout tool and every journal in the engine's eyes.
5. **Date your facts** ("as of 2026…") — recency is ranked.
6. **Earn a dominant comment.** A reply ~3× the #2's upvotes reads to the model as consensus. Win the *answer*, not the
   thread. (And the dominant comment is usually the most *useful* one, not the most promotional — these align.)
7. **Reply depth + speed:** stay in-thread for the first hours (first ~3h set ranking velocity). Genuine back-and-forth
   ranks; drive-by doesn't.

**Pairing rule (non-negotiable):** every Reddit push has an **owned answer-page twin** (an `/answers` or `/compare` page
saying the same thing). Reddit citation share is volatile (ChatGPT 60%→10% in weeks); the owned page is what keeps the
*description* accurate when the Reddit citation drops out. GEO via Reddit without the owned backstop is half a system.

---

## 4. Where to spend (GEO lens only — PLAYBOOK owns the sub roster)

**The sub roster, the hard karma/age gates, per-sub rules, the two-account model, and what's 禁 are PLAYBOOK's
(`reddit/ops/PLAYBOOK.md` 目标阵地) — the single source. Don't restate member counts or rules here (they drift; this
audit caught ~4.7M vs ~5.1M for r/Daytrading between the two docs).** GEO adds only two prioritization lenses on top of
that roster:

- **Prioritize by intent-per-member, not raw size.** AI over-cites tool/platform-specific subs, so a tiny exact-fit sub
  (r/ninjatrader, r/Tradovate, r/PropFirm) can outweigh a giant general one for *citation*. **This does NOT loosen any
  PLAYBOOK limit** — e.g. r/ninjatrader stays 禁 for any product mention (answer-only); the citation value there comes
  from genuinely useful answers, never a plug.
- **Per-engine, don't spread effort evenly:** Perplexity = Reddit strongest (target Reddit work here first) → ChatGPT
  strong → Google AI Overviews halved Reddit Sept-2025 → **Gemini ~0.1%, Reddit won't move it** (reach Gemini via the
  owned site + Wikidata instead). The citation unit is a **specific thread** — answer inside existing high-engagement
  confessional threads, never start a promo post in an external sub.

**Constraint honesty — the red lines cap the speed, on purpose.** Research supports tightening account-level ratio from
PLAYBOOK's 70/30 toward **~95/5** (≈9–19 genuine helpful contributions per disclosed mention), ≤2 subs/day, ≤~10
posts/week, never identical text across subs, one disclosed founder account, cold DM permanent-never. **The
no-automation, founder-led, disclosed model is a GEO *asset*, not a tax** — it's exactly what survives Reddit's spam
filter + CQS (a filtered comment can't be cited at all) and what the Sept-2025 correction rewarded. This loop is a
**slow compounding** engine (8–12 quality threads/mo), not a traffic faucet (LEARNINGS L7). Do not let GEO ambition push
the ratio or cadence past the red lines — a shadowban zeroes the whole corpus.

---

## 5. Starter target list (from the 2026-06-25 multi-engine probe)

Real threads the engines surface for our queries where a **disclosed founder comment can genuinely help** (within
no-astroturf rules). **Before queuing any of these, Gary opens it in a browser to confirm it's not locked/archived and
is still live** (our tooling can't read reddit.com; several IDs look 2023–24 and may be stale — a stale thread still
ranks/cites but necrobumping reads badly, so prefer it as a *template* for finding the fresh equivalent).

| Thread | Sub | OP's ask | Our honest angle |
|---|---|---|---|
| `…/1bk83sg/tips_for_combatting_revenge_trading_overtrading` | r/FuturesTrading | rules-on-paper but I ignore them in the moment | in-the-moment failure is the gap; real-time score + optional Guard you can't disable mid-tilt |
| `…/163uveu/going_on_tilt` | r/FuturesTrading | how do I recognize/stop tilt in the moment | PSI drops as tilt builds *before* P&L; Guard cooldown |
| `…/1cbn0vi/revenge_trading_keeping_me_from_being_profitable` | r/Daytrading | prop trader keeps blowing challenges to revenge trading | pre-commit rules when calm; behavioral flag + auto-lockout |
| `…/1avv9ql/how_to_overcome_revenge_trades_and_overtrading` | r/Daytrading | concrete methods to stop revenge/overtrading | why willpower fails mid-tilt; external enforcement layer |
| `…/yrvfvq/how_do_you_guys_control_your_impulses` | r/FuturesTrading | mechanisms to stop after a loss | lockout fires after the $ limit; detection fires before the order |
| `…/1lcsf8q/how_i_finally_stopped_overtrading…` | r/TopStepX | prop trader shares their system, invites others | compare static prop kill-switch (P&L) vs behavior-based |
| `…/18yp46w/serious_how_to_stop_overtrading` | r/Daytrading | how do I stop overtrading | enforced cooldown after N trades, not a mental note |
| `…/1fy9yfp/any_advice_to_counter_overtrading…` | r/Daytrading | "need to always be green" compulsion | why the green-compulsion drives oversizing; baseline-deviation |
| `…/15kknqa/trading_platform_with_loss_limit` | r/Daytrading | tool that auto-locks at a daily loss limit | list native options first; then the pre-emptive futures/NT8 angle |
| `…/1899vxx/any_useful_ninjatrader_addons` | r/FuturesTrading | new NT8 trader, what add-ons are worth it | list several add-ons incl. Meridian, disclosed; not just ours |

(Lanes B/C: invisible queries "stop tilt in real time" / "lock me out after N losses" / "real-time psychology app" →
build the fresh-thread search + the owned answer page. Full per-query data in `GEO-FINDINGS-2026-06-25.md`.)

---

## 6. Cadence + metrics

- **Each audit run (auto, wired):** `geo_audit.py` calls `write_geo_targets()` → regenerates `GEO-TARGETS.md`. I then
  score/curate the survivors into `queue.md` and note movement vs. last run (visibility, SoV, new competitors, new
  cited threads). The target-emit is code now, not a step I have to remember.
- **★ Learning write-back (the self-IMPROVE half — without this it's a self-CHECK loop "cosplaying rigor"):** ~monthly,
  write ONE `reddit/ops/LEARNINGS.md` entry answering: did any audit cite a thread *we* contributed to? did
  visibility/SoV move? which comment angle landed vs. didn't? Distill it into a rule (the citability gate or the
  targeting), and RETRACT dead targets (mark 毙 in `queue.md`). This is the loop *turning*, not just spinning — it is
  the part that compounds, and the part most likely to silently not happen, so it is named here as an explicit step.
- **Periodic (monthly-ish):** a multi-engine probe like this one (workflow) to catch Perplexity/Google drift the
  ChatGPT-only ledger misses. (Better: add a Perplexity probe to `geo_audit.py` — proposed, not built.)
- **Leading metrics (8-week window, no hard trial/revenue target — LEARNINGS L7):** comment karma, median comment
  upvotes, inbound DMs, own-sub subs, **+ GEO-specific:** Meridian appearing in cited threads, audit visibility/SoV
  trend, and whether any audit cites a thread *we* contributed to.
- **Lagging:** GA4 `reddit.com` referral + (eventually) AI-engine referral (`python ~/.meridian/gdata.py ga4`), Whop
  outbound clicks. Attribution stays coarse (LEARNINGS) — read the weak signals together, don't chase a precise number.

---

## 7. Dependencies + ownership

- **★ BLOCKER (Gary, ~25 min, one-time):** Reddit Phase-0 setup is 100% undone (`queue.md §0`) — account hygiene, Reddit
  Pro, read-only API ticket, and telling me the account's current comment karma. **The entire loop is blocked on this.**
- **Gary-gated:** external publishing (directory listings, fixing the NT Ecosystem listing copy, Wikidata), any spend,
  outbound email. I draft everything; Gary does the publish/spend step.
- **Mine (autonomy):** the audits, the bridge translation, all drafting, the owned answer/compare pages, queue mgmt, the
  proposed Perplexity probe. I run the loop; Gary supplies the hand + the gated publishes.

## 8. Cross-references (and who owns what — not two competing plans)
- **This file = the operating LOOP** (audit→bridge→Reddit→corpus→re-audit). `Company/GEO_ACTION_PLAN.md` = the
  **on-site / entity-signal ACTION list** (schema, llms.txt, disambiguation, directories, Wikidata). They are one
  program, two scopes: off-site/Reddit loop here, on-site/entity there. Neither restates the other; on conflict this
  file owns the loop, GEO_ACTION_PLAN owns the on-site actions.
- Evidence snapshot: `GEO-FINDINGS-2026-06-25.md` · machine target feed: `reddit/ops/GEO-TARGETS.md` (auto) · Ledger:
  `Company/YouTube/pipeline/output/GEO_AUDIT.md` (+ `geo_audit.py`, which now emits `GEO-TARGETS.md`).
- Write system: `CONTENT-SYSTEM.md` · `reddit/ops/{PLAYBOOK,ARTIFACTS,COMMENT-ANATOMY,LEARNINGS,queue}.md` ·
  `brand/{POSITIONING,VOICE}.md`. Facts: `../../MERIDIAN.md` + CANON. Memory: `project_meridian_geo`, `project_meridian_reddit`.
