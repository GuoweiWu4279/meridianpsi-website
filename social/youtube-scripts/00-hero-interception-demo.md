# Hero Interception Demo — 30-60s

**Purpose:** Above-the-fold homepage video. The 3-second test: a stranger landing on meridianpsi.com sees Meridian actually working — not a brand pitch.

**Format:** Silent screen recording with on-screen captions (autoplay-friendly, no voiceover required, can also work as GIF). Optional muted soundtrack.

**Length:** 30-45 seconds total. Hard cap at 60.

**Setup before recording:**
- NT8 chart open on NQ or ES (whatever has clean candles in Market Replay)
- Meridian PSI HUD visible top-right
- Pre-load Market Replay to a session where you'll simulate a realistic loss → revenge sequence
- Record at 1920x1080, 30fps, screen-only (no webcam)

---

## Storyboard (frame by frame)

### Beat 1 — 0:00–0:04 — Setup (caption: silent)
**On screen:** NT8 with NQ chart, clean state. PSI HUD reads ~85 (Stable / green).
**Caption (top center, fade in):** "A trader takes a normal loss."
**Action:** Show a stop-out happening on a small position. Red candle, position closed at -$280.

### Beat 2 — 0:04–0:09 — The deviation begins
**Caption:** "12 seconds later: same direction. Bigger size."
**Action:** Cursor moves fast, opens order ticket. Size jumps from 1 contract to 3 contracts. Same direction as the trade that just stopped out.
**Visual cue:** PSI HUD starts dropping — 85 → 71 (yellow zone).

### Beat 3 — 0:09–0:14 — The escalation
**Caption:** "Stop on the new entry: pulled wider."
**Action:** Click the active stop loss line, drag it 8 ticks wider on the chart.
**Visual cue:** PSI continues dropping — 71 → 58 (orange).
**HUD signal bars:** "Revenge Entry" + "Stop Manipulation" + "Size Spike" all light up red.

### Beat 4 — 0:14–0:22 — The intervention
**Caption (centered, larger):** "Then this happens."
**Action:** Trader tries to add another contract. **Meridian Guard modal appears, blocking the order ticket.**
**Modal text (clearly readable):**
```
PSI: 58 — CRITICAL
Pattern detected: Revenge entry + size escalation + stop widening

Type the phrase you wrote when calm to continue:
"I will not trade my way out of a loss."

[ Acknowledge & continue ]   [ Stand down — 5 min cooldown ]
```

### Beat 5 — 0:22–0:30 — The resolution
**Caption:** "Mistake stopped before it reached the order window."
**Action:** Trader hits "Stand down — 5 min cooldown." NT8 entries are locked. PSI starts recovering.
**Final visual:** PSI climbs back to 67. Bottom-right text appears: "Meridian — Real-time behavioral monitoring for active traders."

### Beat 6 — 0:30 — End card (sticky)
**On screen, full frame:**
- Meridian wordmark
- Sub-line: "Powered by the Psychological Stability Index (PSI). Built first for NinjaTrader 8."
- CTA: "Try free for 7 days →" (linking to /pricing)

---

## Production notes

- **No voiceover required.** Captions carry the entire story. This means the video autoplays muted on the homepage and still works.
- **Captions style:** White text, semi-transparent dark backdrop, sans-serif (Inter or system default), large enough to read on mobile.
- **Pacing:** Every beat is 4-8 seconds. Don't drag. The whole point is "interception happens fast."
- **Realism over polish:** Don't over-edit. The real product working in real NT8 is more credible than slick post-production.
- **One take preferred.** If Beat 4 (the modal) doesn't trigger cleanly in Market Replay, set the Guard threshold lower temporarily so it fires reliably for the demo.

## Where this video lives

1. **Primary:** Homepage hero, autoplay muted loop above the existing `#video-demo` section
2. **Secondary:** First post on /r/NinjaTrader as a "look what I built" demo (low-key, no link drop)
3. **Tertiary:** Pinned tweet on @Meridian_PSI
4. **As a clip in:** Every long-form YouTube video where revenge trading or stop manipulation is discussed

## What this is NOT

- Not the explainer video (that already exists at `_LQIzJS2lA8`)
- Not a product walkthrough (that's the lecture series)
- Not a feature list (that's the features page)

This video does **one thing**: prove the product works, in 30 seconds, with no narration required.
