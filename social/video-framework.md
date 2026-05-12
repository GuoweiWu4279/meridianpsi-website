# Meridian YouTube Video Framework
**Version 1.0 — Established May 2026**
**Do not modify mid-series. Treat this document as locked during any active 12-week content sprint.**

---

## 0. Core Decisions

| Decision | Choice | Reason |
|---|---|---|
| Voiceover | ElevenLabs (no on-camera) | Sustainable for a solo founder, consistent quality |
| Target length | 6–9 minutes | Long enough for depth, short enough for watch-time retention |
| Posting rhythm | 1 long-form/week + 2–3 shorts | Sustainable, algorithm-friendly |
| Primary channel | YouTube → Reddit repurpose | YouTube compounds via search; Reddit converts warm traffic |

---

## 1. Visual Identity

### 品牌色彩参考
视觉素材以**内容表达效果优先**，以下颜色作为参考，不是硬性限制：
```
深色背景参考：  #0D1117
品牌绿：        #10B981  （安全、正面、Meridian 品牌色）
警告橙：        #F59E0B  （压力、注意）
危险红：        #EF4444  （爆仓、危机，少用）
```

### CapCut 文字叠加参考
- 字体：Inter 或 Poppins（干净现代）
- 大标题：粗体，白色
- 关键词高亮：绿色 `#10B981`
- 底部字幕条：白字 + 深色背景条（80% 不透明）

---

## 2. Video Structure Template (6–9 minutes)

Every video follows this exact beat structure. Timings are targets, not rigid rules.

```
[00:00 – 00:30]  HOOK — State the painful problem, no intro
[00:30 – 01:30]  SETUP — Why this is harder than it looks / common misconception
[01:30 – 03:30]  CORE INSIGHT — The actual mechanism / the thing they got wrong
[03:30 – 05:30]  EVIDENCE / DEMO — Show it (NT8 replay, data, product if relevant)
[05:30 – 07:00]  IMPLICATION — So what does this mean for your trading?
[07:00 – 08:00]  SOLUTION FRAME — How to protect against this (product mention here, max 45 seconds)
[08:00 – 08:30]  CTA — Subscribe / comment / try Meridian (short, no hard sell)
```

### Hook Formula (00:00–00:30)
Do NOT start with "Hey guys, welcome back." Start with the problem, in the first sentence.
```
Pattern: "[Specific bad thing] doesn't happen because [common excuse]. 
          It happens because [true mechanism]. And no one talks about this."
```
Example: "Stop-loss manipulation doesn't happen because you're undisciplined. It happens because your brain literally changes its loss threshold under pressure. And no one talks about this."

### CTA Formula (08:00–08:30)
```
Pattern: "If you want [specific outcome], [specific next step]. 
          Link is in the description."
```
Example: "If you want to catch these patterns before they cost you real money, there's a free trial of Meridian linked below. No credit card."

---

## 3. Asset Classification System

Use the right asset type at the right moment. This prevents wasted Leonardo credits and inconsistent visuals.

| Asset Type | When to Use | Production Method | Cost |
|---|---|---|---|
| **Type A** — Abstract concept visual | Opening hook, concept explanations, psychological metaphors | Leonardo.ai **Phoenix/Flux image** → CapCut Ken Burns | Low |
| **Type B** — Animated concept clip | Key mechanism moments where motion adds clarity | Leonardo.ai **LTX 2.3 Fast** (≤4/video) or **Seedance 2.0** (1/video for hook only) | Medium/High |
| **Type C** — Real NT8 screen recording | Any product demo, trade sequence, PSI HUD, Guard lockout modal | OBS screen recording | Free |
| **Type D** — Text animation frame | Stat reveals, key quote highlights, section transitions | CapCut text animation tools | Free |
| **Type E** — Official product asset | Meridian logo, product UI screenshots, website screenshots | Your existing assets | Free |
| **Type F** — Infographic / slide with text | Labeled diagrams, process flows, comparison tables, PSI explainers | Leonardo.ai **GPT-Image-2.0** (stays on screen 8-15s, no Ken Burns) | Low |

### Asset Decision Tree
```
Does this moment need MOTION to make the point?
  → YES: Does it need PHOTOREALISTIC motion (e.g., a hand, a face, a real object)?
        → YES: Use Leonardo Seedance 2.0 (15s max, expensive — use sparingly)
        → NO: Use Leonardo LTX 2.3 Fast (20s, cheaper) 
  → NO: Generate a STILL IMAGE in Leonardo + Ken Burns effect in CapCut (always try this first)

Is this a product demonstration moment?
  → YES: Always use real OBS recording. Never fake it with AI. Authenticity is non-negotiable here.

Is this a data point / statistic / key quote?
  → YES: Type D — CapCut text animation. No image needed.
```

### Leonardo Credit Budget Per Video
- **Target**: ≤ 5 video clips per video (use still images + Ken Burns for everything else)
- **Reserve Seedance 2.0** for: opening hook moment only (1 clip max per video)
- **Use LTX 2.3 Fast** for: mechanism illustrations (up to 4 clips per video)
- **Everything else**: static image + motion in CapCut

---

## 4. CapCut Assembly Rules

### Project Settings
- Resolution: 1920×1080 (for long-form), 1080×1920 (for shorts — export separate project)
- Frame rate: 30fps
- Export: H.264, High quality

### Timing Rules
- Visuals must change **every 3–5 seconds minimum** during narration
- If a visual needs to stay longer (e.g., a diagram), animate text callouts over it to keep the frame alive
- Ken Burns motion on stills: very slow (5–10% zoom over 4–6 seconds) — subtle, not distracting

### Text Animation Style
- **Entry**: Fade in (0.3s) or subtle slide up (0.3s). No zoom-in, no bounce, no spin.
- **Exit**: Fade out (0.2s)
- **Duration**: Match to spoken word. The text should appear slightly BEFORE the word is spoken, disappear slightly after.
- **Highlight animations**: When revealing a key term, use a green underline wipe effect or green background block, not a yellow highlighter

### Caption Style (for auto-captions)
- Font: Inter / Poppins Bold
- Size: 28–30px
- Color: White
- Background: Dark strip (#18181B, 75% opacity)
- Position: Bottom center, not covering any key visual
- Never: Rainbow captions, emoji in captions, all-caps captions

### Transition Rules
- Between regular sections: **simple cut** (no transition effect)
- Between major video beats (e.g., SETUP → CORE INSIGHT): 0.3s **cross-dissolve only**
- Never: swipe transitions, zoom transitions, star wipes, anything that feels "vlog"

### Color Grading
- For AI-generated images: slight +5 brightness, -5 saturation (keeps images from looking too "AI vivid")
- For NT8 screen recordings: no grading needed (keep authentic)
- For the whole video: +3 contrast, slight warm tone (+5 temperature) for cohesion

---

## 5. ElevenLabs Script Formatting Rules

These rules improve AI voice quality. Apply them to every script before pasting into ElevenLabs.

### Formatting for Better Output
```
- Use "..." for natural pauses (generates a 0.5s pause)
- Use em dash "—" for a beat within a sentence
- Break long sentences into two shorter ones
- Avoid numbers: write "forty-seven percent" not "47%"
- Avoid abbreviations: write "NinjaTrader" not "NT8" (unless you test it and it sounds right)
- Put a blank line between paragraphs — ElevenLabs will pause naturally at the break
```

### Section-by-Section Generation
- Generate in chunks of **200–350 words max** (not the full script at once)
- This lets you regenerate just one bad paragraph without wasting credits
- Download each chunk as a separate MP3: `v01-hook.mp3`, `v01-setup.mp3`, etc.
- Assemble in CapCut in order

### Voice Consistency
- Use the same ElevenLabs voice profile for every video in the series
- Save it as **"Meridian — Lecture"**
- Test settings once at the start: stability ~70%, similarity ~80%, style ~30%
- Do NOT change settings between videos

---

## 6. Script Writing Rules (for AI-assisted drafts)

Use this when asking Cursor/Claude to help draft a video script.

### Mandatory Script Brief (copy-paste this when asking for a draft)
```
Video topic: [ONE specific problem/question]
Target viewer: A discretionary futures trader who has been trading for 1-3 years.
                They know what a stop loss is. They don't know what Meridian is.
Video goal: Educate them on [topic] so thoroughly they trust us enough to try Meridian.
Tone: Direct, precise, no fluff. Like a smart professor who also trades.
       No motivational speech. No "you got this." Facts + logic only.
Format: Follow the 8-beat structure from video-framework.md.
Length: Target 1,400–1,800 words (spoken at ~160 WPM = 9–11 min, will be edited down to 6–9)
Product mention: One mention only, in Beat 7 (Solution Frame), 45 seconds max.
```

### Writing Rules (applies to all scripts)
1. First sentence of the video must contain the problem. No warm-up sentences.
2. Every beat must end with a micro-hook that pulls to the next beat (one sentence max).
3. Statistics and references must be real. Do not fabricate research citations.
4. No rhetorical questions used more than once per video.
5. Never end a sentence with "right?" or "okay?" — sounds like a nervous presenter.
6. "Discipline" is not the answer. Never write scripts that conclude with "just be more disciplined." The whole brand is premised on the opposite.

---

## 7. File & Folder Naming Convention

```
social/
├── video-framework.md          ← this file
├── leonardo-prompts.md         ← prompt library
├── automation-pipeline.md      ← workflow steps
├── metrics-tracking.md         ← weekly numbers
│
├── youtube-scripts/
│   ├── 00-hero-interception-demo.md
│   ├── 01-anatomy-of-revenge-trade.md
│   ├── 02-[slug].md
│   └── ...
│
└── video-assets/               ← create this folder
    ├── 01-revenge-trade/
    │   ├── a-hook-brain.mp4           ← Leonardo Type B
    │   ├── a-trader-chart.jpg         ← Leonardo Type A
    │   ├── b-nt8-replay-clip.mp4      ← OBS recording
    │   ├── v01-hook.mp3               ← ElevenLabs audio
    │   ├── v01-setup.mp3
    │   └── ...
    └── 02-stop-manipulation/
        └── ...
```

### File Naming Rules
- Every Leonardo asset prefixed with `a-` (AI-generated)
- Every OBS recording prefixed with `b-` (because it's authentic B-roll)
- Every ElevenLabs audio prefixed with `v[number]-` (voice chunk number)
- Final exported video: `YT_[video-number]_[slug]_[YYYYMMDD].mp4`
  - Example: `YT_01_revenge-trade_20260510.mp4`

---

## 8. Pre-Export Quality Checklist

Run this before every export. Copy the list and check each item.

```
[ ] Hook — does the first sentence name the problem? (no warm-up)
[ ] Length — 6–9 minutes? (check timeline in CapCut)
[ ] Visuals change at least every 5 seconds throughout
[ ] Product mention — only once, in Beat 7, under 45 seconds
[ ] CTA — link to free trial in YouTube description? (copy from script template)
[ ] Captions — reviewed for NT8, PSI, Guard spelling errors?
[ ] Audio levels — consistent throughout? (no loud/quiet jumps)
[ ] Color grade applied to Leonardo assets (see Section 4)?
[ ] Meridian watermark visible bottom-right? (not during NT8 demos — remove then)
[ ] Title matches the SEO keyword from the script file?
[ ] Thumbnail designed? (see thumbnail rules below)
```

### Thumbnail Rules
- 1280×720px
- One clear human pain-point phrase in large text (max 6 words)
- High contrast: dark text or white text, green accent element
- No clickbait faces (we don't have an on-camera host)
- Use a relevant AI-generated image from the video assets as background (slightly blurred)
- Text: same font as video (Inter/Poppins), Bold
- Example: "Why You Keep Moving Your Stop Loss" on a slightly-blurred chart image with green text

---

## 9. What This Framework Does NOT Cover

- Specific script content → see `youtube-scripts/` folder
- Weekly production workflow → see `automation-pipeline.md`
- Leonardo.ai prompt text → see `leonardo-prompts.md`
- Social media posting strategy → see the 90-day distribution plan

---

*Last updated: May 2026. Revisit and version-bump after 12-week series completes.*
