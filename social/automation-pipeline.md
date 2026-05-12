# Video Automation Pipeline — Setup & Weekly Workflow

This document is the operational handbook for the YouTube + shorts engine described in the 90-day distribution plan. Read once, set up tools once, then refer to the **Weekly Workflow** section every Saturday.

**Related documents (read these first if you haven't):**
- `social/video-framework.md` — Visual style, asset types, CapCut rules, script structure
- `social/leonardo-prompts.md` — Leonardo.ai prompt library and credit budget rules

---

## Tool Stack — Sign Up This Week

| Tool | Cost | Purpose | Sign-up link |
|---|---|---|---|
| **Descript** | $24/mo (Creator plan) | Record + edit by editing the transcript text. The single most important tool. Non-editors can produce broadcast-quality cuts. | descript.com |
| **ElevenLabs** | $22/mo (Creator plan) | Clone your voice once; then turn any script into your voice in seconds. Removes the "I don't feel like recording today" blocker. | elevenlabs.io |
| **Opus Clip** | $19/mo (Starter plan) | Drop a long video, get 3-5 short clips auto-cut with captions and viral scoring. Fully automated. | opus.pro |
| **Submagic** | $16/mo (Pro plan) | Better captions than Opus, plus AI B-roll suggestions. Use for shorts that need extra polish. Optional if Opus output is good enough. | submagic.co |
| **OBS Studio** | Free | Screen recording (NT8 + chart + Excalidraw). | obsproject.com |
| **Excalidraw** | Free | Whiteboard sketches for lecture explanations. | excalidraw.com |

**Total: ~$80/mo** (or ~$65/mo if you skip Submagic and rely on Opus Clip's built-in captions)

### One-time setup (do this Monday, takes ~2 hours)

1. Sign up for all four paid tools (start with monthly, switch to annual after month 2 if it's working)
2. **ElevenLabs voice clone**: Record a clean 5-minute sample of yourself reading any text. Upload to ElevenLabs → "Voice Lab" → "Instant Voice Cloning". Test by generating 30 seconds of a different script. If quality is good, save the voice profile as "Founder — Lecture".
3. **Descript**: Create a project. Test the workflow: record 30 seconds, watch it transcribe, delete a sentence in the transcript, watch the video automatically cut.
4. **OBS**: Add a scene with NT8 as the source, 1920x1080 capture, 30fps, .mp4 output.
5. **Opus Clip**: No setup needed beyond signing up. You'll just drop videos in.

---

## Weekly Workflow — Saturday Afternoon (3 hours, manual mode)

This is your week-by-week production rhythm. Do it the same way every Saturday for 12 weeks.

### Phase 1 — Script (30 min)
- Open the corresponding script file from `social/youtube-scripts/0X-*.md`
- Read it through. Adjust 5-10 phrases to match how you actually talk.
- Cut anything that feels redundant. Target **6–9 minutes** spoken (1,000–1,400 words at 160 WPM).
- Confirm the 8-beat structure from `video-framework.md` is intact before moving on.

### Phase 2 — Voice (45 min)

**Option A — ElevenLabs (recommended for first 4 weeks):**
- Open ElevenLabs, select "Founder — Lecture" voice profile
- Paste each script section (300-500 words at a time)
- Generate audio, listen, regenerate if a passage sounds off
- Download the audio files
- Time: 30-45 min for a full lecture

**Option B — Live recording in Descript:**
- Use a USB mic (Blue Yeti, Shure MV7, or similar)
- Record in a quiet room, no compression in the room
- Read the script naturally, leave gaps so editing is easier
- Time: 60-90 min for a full lecture (more re-takes than ElevenLabs)

For the first 4 videos, use ElevenLabs. Once you're comfortable with the format, try one live recording to see if the human-touch is worth the extra time.

### Phase 2.5 — Generate Leonardo.ai assets (30 min, can run in background)
- Open `social/leonardo-prompts.md`
- Identify which asset types (A/B/C/D/E) each video beat needs, using the Asset Decision Tree
- Generate still images first (cheap). Only generate video clips where motion genuinely helps.
- Budget: max 1 Seedance 2.0 clip (hook), max 4 LTX 2.3 Fast clips per video
- Save all assets to `social/video-assets/[video-number]-[slug]/` with naming convention from framework

### Phase 3 — Screen capture (30 min)
- Open NT8 with Market Replay loaded to the right session
- Record product demo sections only (OBS, 1920x1080, 30fps, MP4)
  - NT8 chart sequences (entries, exits, stop modifications)
  - PSI HUD walkthroughs if relevant
  - Guard lockout modal triggers
- Don't try to time the visuals to the script. Record ~2x the footage you need; you'll align it in CapCut.
- **Do NOT use Excalidraw** — replaced by Leonardo.ai Type A/B assets for diagrams

### Phase 4 — Assemble in CapCut (45-60 min)
- Create a new CapCut project (1920×1080, 30fps)
- Import: ElevenLabs audio chunks, Leonardo.ai assets, OBS screen recordings
- Lay down the audio track first (all ElevenLabs chunks in sequence)
- Align visuals to audio — use the asset type guide from `video-framework.md` for which clip goes where
- Apply Ken Burns motion to all still images (subtle: 5-10% zoom over 4-6 seconds)
- Apply color grade to Leonardo assets: +5 brightness, -5 saturation, +3 contrast
- Add text callout overlays where the script calls for key term emphasis
- Add captions: Inter/Poppins Bold, 28px, white text, dark strip background
- Verify: visual changes every 3-5 seconds throughout
- Export as 1080p H.264 MP4

### Phase 5 — Auto-shorts (5 min active, runs in background)
- Upload the long-form MP4 to Opus Clip
- Set "I want shorts" → 3-5 clips
- Wait 5-10 minutes (run while you do something else)
- Download the 3-5 shorts

### Phase 6 — Captions and polish (15 min)
- For shorts: Submagic for premium captions + B-roll, OR just use Opus Clip's built-in captions
- For long-form: YouTube auto-captions are usually sufficient; review for trading-specific terms (NT8, PSI, etc.) that may be transcribed wrong

### Phase 7 — Publish (15 min)
- Upload long-form to YouTube with the description from the script file
- Schedule for Monday 9am Eastern (when US traders are pre-market and likely to watch)
- Upload shorts to YouTube Shorts immediately
- Cross-post 1 short to Twitter/X with link to the long-form
- Save 1 short for Reddit (don't post immediately; wait for a relevant thread mid-week)

---

## Advanced Workflow — Batch Recording (Month 2 onward)

Once you're comfortable with the format, switch to batch mode. This drops actual weekly work to ~1 hour.

### Batch Saturday (one Saturday per month, ~8 hours)

- Morning (4 hours): Phases 1-2 for FOUR videos. Generate all four scripts' audio via ElevenLabs back-to-back.
- Afternoon (4 hours): Phase 3 for all four videos. Record all the screen captures and whiteboards in one session.

### Weekly upkeep (1 hour per week)

- Phases 4-7 for ONE video at a time, on Sunday or Monday morning
- The pre-batched assets mean you only need to assemble, not create

### Result

- 4 videos prepped per batch Saturday
- 1 video shipped per week with 1 hour of effort
- Capacity to layer in a 5th video as a "current event" or response to comments without breaking rhythm

---

## What to Track (Weekly)

Open a simple spreadsheet `social/metrics-tracking.md` and log every Friday:

| Week | Long-form views (7-day) | Long-form watch time (7-day) | Shorts total views | YT subscribers | Reddit comments left | Reddit upvotes received | New trial signups | Notes |
|---|---|---|---|---|---|---|---|---|

Don't check daily. Check Friday. The signal is in the trend over weeks, not the daily number.

---

## Rules That Keep You On Plan

1. **Never skip a Saturday.** Even a rough cut shipped beats a perfect cut delayed. Consistency compounds; perfection doesn't.
2. **Never change the format mid-series.** All 12 lectures stay in the same lecture style. Don't decide on Week 4 that confessional is better. The series only works as a series.
3. **Don't read comments until the next Saturday.** It's easy to derail your week chasing one viewer's request. Check comments only when planning next week's content.
4. **Don't add a new platform mid-series.** If TikTok suddenly looks attractive at Week 6, write it down for Week 13. Not now.
5. **Don't change the homepage during the 12 weeks.** The H1 is locked. The sub-line is locked. The eyebrow is locked. Pricing is locked. Only fix bugs.

---

## Decision Triggers — When to Adjust

These are the only situations where deviation is allowed:

- **Week 4 checkpoint fails ALL four metrics** → review format, but adjust no more than ONE variable (e.g., change thumbnail style, or change posting time, but not both)
- **Three consecutive videos under 50 views** → one video off-format is allowed as an experiment (e.g., one founder confessional to test)
- **A specific lecture goes 10x baseline views** → the next batch should lean into that topic's adjacent themes
- **An obvious product bug surfaces from feedback** → fix it immediately, not at the end of the 12 weeks. Bug fixes are not "changing strategy."

Anything else: stay the course.
