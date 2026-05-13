# Partner Outreach Strategy & Templates (v6)

**Status:** Locked — 2026-05-12
**Owner:** Gary
**Sending platform:** Instantly via `garycaffrey@meridian-partnership.com` (in domain warm-up)
**Audience:** NT8-relevant creators with 1k–20k followers (YouTube, Twitter/X, podcasts, newsletters)
**KPI:** Active paying-subscription conversions through partner channel — NOT raw reply rate, NOT signed-partner count.

---

## TL;DR

Three-email sequence. Body paragraphs are **locked**. Only personalization variables (filled by Gemini from each creator's recent content) change per recipient. Send 30–50/day during weeks 1–4 of warm-up, ramp from there.

---

## Why this approach (rigorous case)

Each design decision below was chosen against alternatives we considered and rejected. Don't change without re-reading this:

1. **Direct + personalized + honest** — not "say hi", not "pretend to be a fan", not "hide intent". Hidden-intent and fake-fan styles kill brand long-term and risk FTC §255 violations. "Just say hi" doesn't scale to 30–50/week and wastes the recipient's 8-second attention window.
2. **Differentiation-first body, offer-second** — the offer (30% recurring) is table stakes across every Whop affiliate program. Leading with the offer attracts mercenary partners who jump for higher %. Leading with the product attracts aligned partners who recommend because they believe in the product.
3. **Preview-pane line signals commercial intent** — the first line "Reaching out about a partnership offer for NT8 creators" appears in the inbox preview, eliminating bait-and-switch feel without compromising body structure.
4. **No generic praise** — "your point was great" patterns are detected as templated by sophisticated readers. Warmth is conveyed via shared-purpose framing ("this is exactly the problem I built Meridian to solve").
5. **The "discipline made measurable" framing in paragraph 4** is the single most powerful talking point — the kind of thing a partner can quote verbatim in their own video as a hook. Don't dilute it with feature lists.
6. **Email 1 has no reverse-risk language** — research shows reverse-risk gives ~+2% lift in email 1 vs +12–18% in email 3. Saved for email 3 where it earns its keep. Email 1 ends with a clean, professional CTA.
7. **Spam-trigger words softened** — "commission" → "revenue share", no "$" / "%" in subject lines, no "earn" anywhere. Domain warm-up is sensitive.

---

## Operational flow (pipeline)

```
[Source list]                                                    
    │   manual research: NT8 YouTubers, Twitter creators, podcasters
    ▼   producing CSV: { email, channel_url }
[Gemini personalization]                                         
    │   one Gemini API call per row, with the prompt below
    ▼   producing CSV: { email, first_name, channel_name,
                         video_topic, video_title, specific_point }
[Manual QA]                                                      
    │   review first 20 outputs; spot-check rest
    ▼   reject any row where Gemini returned `error: no_relevant_specific_point`
[Instantly campaign]                                             
    │   upload CSV; Instantly maps variables to {{handles}} in template
    ▼   3-step sequence: Day 0, Day 5, Day 12
[Send]                                                           
    │   30–50/day in warm-up weeks 1–4
    ▼   ramp to 50–100/day weeks 5–8 if reputation is good
[Track]
        opens, replies, /partners applies (UTM-tagged), active sub conversions
```

---

## Variable fields (CSV columns)

These are the **only** things that change per recipient. Everything else in every email is hardcoded in the Instantly template.

| Variable | Used in | Filled by | Example |
|---|---|---|---|
| `{{email}}` | Recipient address | Manual research | `creator@gmail.com` |
| `{{first_name}}` | Greeting in all 3 emails | Manual or Gemini | `Alex` |
| `{{channel_name}}` | Subject variant B only | Manual or Gemini | `TradingMindsetTV` |
| `{{video_topic}}` | Subject + Email 1 paragraph 1 | Gemini | `revenge trading` |
| `{{video_title}}` | Email 1 paragraph 1 | Gemini | `Why I Stopped Adding to Losers` |
| `{{specific_point}}` | Email 1 paragraph 1 | Gemini | `letting one losing trade snowball because you couldn't accept a small loss` |

---

## Email 1 — Day 0

### Subject line A/B test

| Variant | Subject |
|---|---|
| **A (primary, 70% volume)** | `Partnership idea after your {{video_topic}} video` |
| **B (secondary, 30% volume)** | `{{channel_name}} × Meridian — partnership idea` |

After 100 sends per variant, compare reply rate and lock the winner.

### Body (locked — do not edit without strategic review)

```
Reaching out about a partnership offer for NT8 creators — full details below.

Hi {{first_name}},

I've watched several of your recent NT8 videos — specifically your point about {{specific_point}} in "{{video_title}}" — that's exactly one of the core problems I built Meridian to solve, which is why I'm reaching out directly.

The product is called Meridian. The fundamental difference from other NT8 risk tools: daily loss limits cap you after the damage (reactive); trade journals review it after the fact (post-hoc). Meridian monitors 7 behavioral leading indicators — revenge entries after losses, stop-loss widening, oversize entries, overtrading pace — and intervenes the moment a trader starts deviating from their normal trading rhythm or breaking their own plan (think Apple Watch stress-monitor, but for trading discipline). The intervention is graduated: from message alerts, to forced cooldown timeouts, to Meridian Guard auto-disconnecting your broker — before the next bad fill, not after.

Each dimension isn't a fixed threshold — it's a personal baseline continuously calibrated from your own session history, using adaptive learning to track your normal trading habits and strategy. The longer you use it, the sharper the baseline and the more precise the interventions.

The full loop: monitor → intervene → review → long-term trends. But the deeper point: discipline — the most-discussed but least-measured concept in trading — becomes a quantifiable indicator in Meridian. You see your discipline curve over time, the rules you break most often, your rate of improvement. Each month, a personalized report with concrete recommendations based on your specific behavioral patterns.

Partnership terms:

- 30% recurring revenue share — not first-purchase only, every billing cycle
- 10% permanent discount for your audience — applies on every renewal, not just signup
- Free Meridian Guard license — for the duration of the partnership, so you can use the product authentically

Full terms + earnings examples at meridianpsi.com/partners.

Reply if interested, or apply directly at /partners.

Best,
Gary Caffrey
Meridian
```

---

## Email 2 — Day 5 follow-up

### Subject

`Re: Partnership idea after your {{video_topic}} video` (preserves thread)

### Body (locked)

```
Hi {{first_name}},

Quick follow-up — the previous email may have gotten buried.

If it would help to see something more concrete before deciding, I can send:

- A one-page partner brief (terms, earnings examples, what we ask of partners)
- A walkthrough of the Intel Layer (the part that makes discipline measurable)
- Creator kit preview (logo pack, product screenshots, talking-points doc)

Just reply with which one — or all three.

Best,
Gary
```

---

## Email 3 — Day 12 final follow-up

### Subject

`Re: Partnership idea after your {{video_topic}} video` (preserves thread)

### Body (locked)

```
Hi {{first_name}},

Last follow-up — I won't keep cluttering your inbox.

If timing isn't right, the partnership stays on the table — happy to reconnect in three or six months. If it's just not a fit, a single-word reply removes you from the list.

If you'd rather just see the product before any partnership conversation, the 7-day free trial is at meridianpsi.com/download.

Best,
Gary
```

---

## Gemini personalization prompt

Use this prompt verbatim. Replace `{CHANNEL_INPUT}` with the channel URL or recent content (titles + descriptions, optionally transcripts of last 3 videos).

```
You are personalizing a B2B partnership outreach email to a YouTube creator who makes content about trading on NinjaTrader 8.

INPUT:
{CHANNEL_INPUT}

YOUR TASK:
Produce 4 fields used as variables in a partnership email. Output strict JSON, no preamble, no commentary.

OUTPUT FORMAT:

{
  "channel_name": "string — the channel's display name as it appears on YouTube",
  "video_topic": "string — 2-4 word lowercase topic of the most relevant video, e.g. 'revenge trading', 'prop firm risk', 'overtrading'",
  "video_title": "string — the EXACT title of the most relevant video (preserve original capitalization, no surrounding quotes)",
  "specific_point": "string — 10-15 words describing a CONCRETE claim, observation, or argument the creator made in that video about trading discipline, risk management, behavioral patterns, or psychology. Must be a SPECIFIC point, not a generic summary."
}

CONSTRAINTS:

1. specific_point must be a concrete claim, not a topic.
   GOOD: "letting one losing trade snowball because you couldn't accept a small loss"
   BAD: "talking about risk management" or "general trading psychology tips"

2. The most relevant video is the one most about behavioral discipline, risk control, mental game, or session execution. Skip pure technical-analysis videos if a behavioral one exists in the last 3.

3. If you cannot find a specific point relevant to discipline / risk / psychology / behavior, return:
   {"error": "no_relevant_specific_point"}
   Do NOT fabricate. Do NOT generalize. We will skip this creator.

4. video_topic must be 2-4 words, lowercase, no quotes
5. video_title must be the exact YouTube title, preserve capitalization
6. channel_name must match the displayed channel name on YouTube (not the @handle)

Output ONLY the JSON. No commentary.
```

### How to test the prompt before bulk run

Before running on the full target list:

1. Pick 5 known NT8 creators with a mix of content (some heavy on technical analysis, some heavy on psychology)
2. Run the prompt on each
3. Read the outputs:
   - Are the `specific_point` values concrete and quotable?
   - Did Gemini correctly return `error` for any creators with no relevant content?
   - Do the `video_title` values exactly match what's on YouTube?
4. Only proceed to bulk run if 4 of 5 pass

---

## Instantly setup checklist

### One-time setup

- [ ] Domain `meridian-partnership.com` registered
- [ ] DNS records configured: SPF, DKIM, DMARC (Instantly provides exact strings)
- [ ] Email account `garycaffrey@meridian-partnership.com` created
- [ ] Sender display name: `Gary Caffrey`
- [ ] Sender signature: matches the template signature exactly
- [ ] Domain warm-up enabled in Instantly (auto for first ~2 weeks)

### Campaign creation

1. **Campaign name:** `meridian-partner-outreach-v6`
2. **Sequence:** 3 steps, intervals Day 0 / +5 / +12
3. **Subject A/B:** Variant A 70%, Variant B 30%
4. **Variables:** map CSV columns to `{{first_name}}`, `{{channel_name}}`, `{{video_topic}}`, `{{video_title}}`, `{{specific_point}}`
5. **Tracking:** UTM tagging on the `meridianpsi.com/partners` link — see KPI section
6. **Send schedule:** Mon–Fri, 9am–4pm recipient timezone, 30–50/day during weeks 1–4

### Per-batch (each time you upload new CSV)

- [ ] CSV has all 6 required columns
- [ ] No row is missing `specific_point` (Gemini error rows must be removed)
- [ ] No duplicate emails across this campaign (Instantly will warn)
- [ ] Spot-check 5 random rows: does the `specific_point` actually appear in the named video?
- [ ] First 10 sends: monitor for bounces / spam-trigger flags before continuing batch

---

## KPI tracking

### Funnel metrics (target ranges)

| Stage | Metric | Healthy range |
|---|---|---|
| 1 | Open rate | 40–60% (personalized cold) |
| 2 | Reply rate | 8–15% (B2B partnership cold) |
| 3 | Apply-on-/partners rate | 2–5% of sends |
| 4 | Application acceptance | 50%+ of applies |
| 5 | Active partner (produced content within 30 days) | 30%+ of accepted |
| 6 | Partner-driven paying subs | tracking starts here — this is the actual KPI |

### UTM tagging

Every `meridianpsi.com/partners` link in outreach must carry UTM:

- Email 1: `?utm_source=outreach&utm_campaign=v6&utm_content=email1`
- Email 2: `?utm_source=outreach&utm_campaign=v6&utm_content=email2`
- Email 3: `?utm_source=outreach&utm_campaign=v6&utm_content=email3` (the `/download` link there)

Track via Vercel Analytics or whatever GA setup is wired into the site.

### Reply triage

Replies fall into 4 buckets — handle each consistently:

| Reply type | What they say | Response within | Action |
|---|---|---|---|
| Yes / interested | "send me the brief", "let's talk" | 24h | Send brief PDF + creator kit (when ready); start onboarding |
| Curious / need info | "what's the product like?", "how do payouts work?" | 24h | Short, factual answer; link to /partners; offer 7-day trial |
| Not now | "busy", "maybe later" | 48h | "No worries — happy to reconnect in 3 months" + tag for future re-outreach |
| No / pass | "not interested", "pass" | None — just remove | Remove from list, don't reply |

---

## When to revise this template

**Default = don't.** The lock is the feature. Only revise when ONE of these triggers fires:

1. **After 200 sends**, reply rate is below 5% across BOTH subject variants and personalization is verified high-quality (i.e., it's the body that's failing). Then re-evaluate paragraphs 2–4.
2. **A specific paragraph repeatedly comes up in negative replies** ("you said X but I think Y is misleading"). That's a pointed signal to revise the named paragraph.
3. **The product offer changes** (commission rate, discount, license terms). Then `AFFILIATE_PROGRAM.md` is updated first, then this doc, then Instantly template — in that order.
4. **A new differentiator emerges** that's stronger than the current ones (e.g., a major feature ships that changes the pitch). Then paragraph 2 or 4 may earn a revision.

**Do NOT revise** because:
- A specific creator didn't reply (one data point ≠ signal)
- "I want to try a different angle this week" (kills the data signal you're trying to collect)
- The team likes the new wording better (subjective; KPI > taste)

---

## Spam / deliverability hygiene

### Always

- Plain text format only (no HTML, no images, no attachments)
- Single recipient per send (never BCC)
- Subject lines have NO `$`, NO `%`, NO numbers as first character
- Body has NO "earn $X", NO "make money", NO ALL CAPS phrases
- One link per email (current templates comply: 1 link in Email 1, 0 in Email 2, 1 in Email 3)
- Every email has a soft-unsubscribe path ("a single-word reply removes you")

### Never

- Mass-blast / non-personalized batches
- URL shorteners (bit.ly, tinyurl)
- Subject lines starting with "RE:" or "FW:" when not actually a thread reply
- Using a different sender address mid-sequence

---

## Phase 3 dependencies (Gary delivers)

These need to be ready before Email 2 can be operationally complete:

- **One-page partner brief PDF** (terms, earnings table, what's expected of partners, FAQ)
- **Intel Layer walkthrough** (PDF or 60-second screen recording showing monthly report)
- **Creator kit zip** (logos PNG/SVG light+dark, product screenshots ×8, talking-points doc, video script templates)

Until these exist, Email 2 replies asking for them get a manual response: "Brief and creator kit in final review — sending you the v1 by [date]."
