---
question: "How can I automatically stop revenge trading?"
category: psychology
order: 2
---

Revenge trading happens when a loss triggers an immediate, emotionally-driven re-entry — usually larger size, same direction, and within seconds or minutes of closing the losing trade. The trader is not responding to market conditions; they are responding to the feeling of having lost.

You cannot reliably stop revenge trading through awareness alone, because awareness is exactly what gets impaired in that state. The effective solution is **automated behavioral enforcement before the next order goes in**.

Meridian detects revenge-entry patterns in real time using its D1 signal (Revenge Entry), which flags rapid re-entry after a loss with elevated position size. When this signal fires, it can trigger [Meridian Guard](/guard) — the automated enforcement layer — to intervene with an acknowledgement prompt, a mandatory trading pause, or a platform disconnect, depending on the rules you configured in advance.

You set the response level when you are calm. Guard executes it when you are not. See [all seven behavioral signals](/features#seven-dimensions), [Guard response levels](/guard#guard-system), or read the full breakdown: [How Meridian detects and stops revenge trading in NinjaTrader 8](/ninjatrader-revenge-trading).
