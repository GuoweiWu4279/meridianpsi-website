# Comment Anatomy — how to write a high-trust Reddit reply (the daily work)

> This is the deep spec for the **"Topic comment"** row in `ARTIFACTS.md` — replies in other people's threads
> (r/Daytrading, r/FuturesTrading, r/Trading). It is the bread-and-butter, ~90% of daily Reddit work.
> Voice + the line-by-line anti-AI hard gate = `../../brand/VOICE.md`. Positioning/facts = `../../brand/POSITIONING.md` + `MERIDIAN.md`.
> Platform safety/cadence = `PLAYBOOK.md`. This file = **the shape of one good reply and the tests it must pass.**

---

## 0. What a reply is FOR (and is NOT for)

A comment sits at **reach + trust** in the goal chain — NOT conversion. Its only jobs: be seen by serious traders, and make them think "this person actually trades and actually thinks." That's it. A reply is winning if a stranger would screenshot it, not if it sells anything. **Conversion happens later, off the back of accumulated trust** (profile visit → our sub → site). Trying to convert inside a comment is the #1 way to destroy the trust that would have converted them.

The product does not need to appear. Most of our best comments (see `../../voice-samples.md`) never name Meridian.

---

## 1. The anatomy (the shape of one reply)

A high-trust reply is **2–8 sentences**, usually three moves:

1. **Answer first / engage the actual point.** No throat-clearing, no "great question," no preamble. Lead with the useful thing or the real disagreement. If you're countering, steelman them in one line first, then turn it.
2. **The real reasoning — from a trader, with a concrete detail.** This is the load-bearing move. Give the *why*, grounded in something only a real futures trader would write: an instrument (ES/NQ/MES), an eval mechanic (trailing drawdown, daily loss limit, consistency rule), a platform (NinjaTrader/Tradovate/Ironbeam), a specific number or moment ("2–8 minutes after a loss is where mine clustered"). Specificity is what separates us from AI and from every generic "manage your psychology" reply.
3. **(Optional, rare) one disclosed mention** — only if it genuinely belongs (see §3). One sentence, with the disclosure built in ("I built something for NT8 for exactly this, obviously biased"). Then stop. No link, no pitch, no second sentence about it.

Don't add a fourth move. No summary, no "hope that helps," no call to action. End on the substance.

---

## 2. The three hard tests (every reply, before it goes in the queue)

These are in addition to the VOICE.md gates (AI-tell scan / compliance / fact). A reply ships only if all pass.

### Test A — the 80/20 delete test (the anti-ad test)
**Delete every sentence that mentions or alludes to Meridian. If the comment collapses — loses its value, stops making sense, or clearly only existed to set up the mention — it's an ad. Rewrite it so the value stands 100% on its own.** A reader must get full value even if the product sentence were cut. Product content is ≤ ~20% of any comment that has it; most comments have 0%.

### Test B — the specificity gate (the anti-AI test)
**The reply must contain at least one detail only a real futures trader would write.** Instrument, eval mechanic, platform, a concrete number, a real remembered moment. A reply that could have been written by someone who has never traded — vague encouragement, generic "discipline matters," textbook psychology — fails. Add the concrete detail or don't post.

### Test C — disclosure when (and only when) we name the product
**If Meridian is named, disclosure is mandatory AND it builds trust** — "I built it, obviously biased / NT8 only." Undisclosed pitching is the fastest way to get removed and distrusted. But disclosure does not redeem a comment with no standalone value: disclosing on an otherwise-empty comment still reads as an ad. Disclosure is the price of mentioning, not a license to pitch.

---

## 3. Should THIS reply mention the product? (default: no)

Two gates, account-level and comment-level — don't conflate them:

- **Account-level (PLAYBOOK 70/30):** across everything you post, the large majority must be pure help with zero product. You earn the right to occasionally mention by being mostly useful. During Phase 1 (karma grind) this is **zero product, zero links, full stop** — it also clears per-sub automod karma/age gates and raises CQS.
- **Comment-level:** mention only when (a) someone is explicitly asking for tool recommendations, or (b) the personal-builder angle genuinely adds credibility to the point you're already making. Same sub, ≤ ~1 product mention per week.

When in doubt: skip the mention. Trust in the sub is worth more than one forced plug. A great comment with no mention beats a good comment with one.

---

## 4. Should you even reply to this thread? (intake scoring)

From PLAYBOOK's scoring (0–5, reply only if ≥3): +2 topic hit (revenge/overtrading/moving stops/holding losers/discipline-vs-system/realtime-vs-hindsight/prop-eval/psychology-vs-strategy); +1 OP is genuinely asking; +1 we can actually add value; +1 the thread isn't already saturated with the same point; −2 if it's bait/political/signals/crypto-pumping. Low-effort agreement comments ("100% this") are not worth posting — they don't build trust and they look like karma farming.

---

## 5. Sub-specific overrides

- **r/Daytrading (strictest — mods actively ban AI + "educational content with no personal experience"):** anchor in personal experience where it fits naturally; third-person explanation is fine once anchored. **No clinical/chemistry words** (cortisol, prefrontal cortex, "chemicals in your brain"). **Never "only tool on the market / there's currently only one tool that..."** — instant promo flag; frame any mention as "I ended up building something for myself on NT8 because I couldn't find anything that did this." A small typo or casual phrase actually helps. When unsure, skip the mention entirely.
- **r/FuturesTrading:** self-promo = instant ban; content-creators never get approved. Pure value only until we have the karma for a text post. Concrete, peer, no link.
- **r/Trading:** links to a paid-subscription site get deleted — text only, no direct links; "details in my profile" if asked.
- **r/MeridianPSI (own sub):** different genre — see ARTIFACTS "Pinned intro" / "AMA". Fuller product talk is expected there.

---

## 6. Format

Short paragraphs, line breaks between beats. No bold headers, no numbered lists unless the content truly is a list. No em dashes, no en dashes mid-sentence, no exclamation marks (VOICE Tell 10). First person ("I noticed", "what helped me"), never "we offer / our product". Acknowledge uncertainty where it's real ("worked for me, your mileage may vary").

---

## 7. Worked exemplars (read before drafting)

Study these approved samples in `../../voice-samples.md` (they pass all tests):
- **"bad strategy causes behavior, not reverse"** (r/Daytrading) — pure value, zero product, steelman-then-turn, Level-2/order-flow specificity.
- **"is journaling worth it"** / **"widening stop loss"** — the journal-is-an-autopsy angle with concrete behavioral sequence; product named once, disclosed, NT8-only.
- **"making a living from prop firms"** — peer advice, the builder mention earns its place, ends on advice not pitch.

⚠️ **Counter-exemplar (do NOT imitate):** the 2026-05-11 "adrenaline panic" reply — it uses "only one tool out there" + "chemicals in your brain" + typos. Kept in voice-samples as a flagged violation. Reuse its *logic* (threat response → you won't stop at your limit), never its wording.

---

## 8. Pre-send checklist (10 seconds)
1. Answer-first? No preamble/throat-clearing?
2. At least one detail only a real futures trader would write? (Test B)
3. If I delete every product sentence, does the value survive 100%? (Test A)
4. If the product is named: disclosed, one sentence, no link, NT8 caveat? (Test C)
5. VOICE.md AI-tell scan: zero hits. No em dash, no exclamation, no clinical words (esp. r/Daytrading).
6. Read it aloud in my head: a real trader typing, or a brand performing? If brand, rewrite.
7. **GEO add — ONLY if this thread came from `GEO-TARGETS.md` (a Lane-A cited thread).** These make a
   trust-passing comment *retrievable/quotable* by AI engines. **They never override 1–6 — a comment that
   fails any trust gate does not ship, citability be damned.** (Why: engines cite single comments, not threads,
   and reward named entities + recency — see `../../GEO-INTEGRATION.md` §3.)
   - a. **Self-contained:** reads correctly with zero thread context; the answer is in sentence 1.
   - b. **If the product is already named** (it passed 3+4), name it *exactly* — "Meridian" / "PSI 0–100" / "Guard",
     never "this tool / it". Do NOT add a mention just to name-drop; b only applies once C has cleared the mention.
   - c. **The one trader-detail from item 2 is concrete + datable** ("as of 2026, …"). Same specificity as item 2,
     not a second detail — just make it nameable and time-stamped.
