# Writing Rules — Anti-AI, Anti-Ban

> ➡️ **已升级并搬家(2026-06-10):声音/反 AI 规范的唯一真理源现在是 `brand/VOICE.md`。**
> 那份有正面声音规范 + 命名的 AI 腔病征图鉴(before/after)+ 合规闸 + 事实闸,是写完逐句过的硬闸。
> 整套写作系统的入口 = `social/CONTENT-SYSTEM.md`(目标链 + 写作循环 + 文档索引)。
> 本文件保留在下,只作历史参考;新规则一律写进 `brand/VOICE.md`,别在这里加。

---

## 格式与标点

**Rule 1: 禁止 em dash（—）与 en dash（–）作为句中连接**

**所有对外文案（Reddit、邮件、网站、脚本、回复）一律不用横杠连接句子。** 横杠是 AI 最明显的格式特征之一。用句号拆开、逗号、括号，或单独短句代替。

❌ 错误：`Meridian monitors your behavior — entry timing, sizing, stop modifications — before the damage is done.`
✅ 正确：`Meridian monitors your behavior before the damage is done. Entry timing, sizing, stop modifications.`

**例外：** Markdown 表格分隔符、日期范围写法（若必须用，用 "to" 或 "through" 代替 `2024–2026`）。

---

## 结构与逻辑

**Rule 2: 不做"三明治"段落**（观点→解释→换句话再说一遍同一观点）。说一次就走。

**Rule 3: 不用反问句做段落过渡**（"But what does this mean for traders?"）。直接进下一个点。

**Rule 4: 不用 bullet 墙替代正常叙述**。列表只用于真正并列的事实。

---

## 平台特定规则

**Reddit**

- 置顶帖 canonical：`Web/social/reddit/pinned-start-here.md`
- 索引与写作说明：`Web/social/reddit/README.md`、`instructions.md`
- 回复文风与已批准范例：`Web/.cursor/rules/social-voice.mdc`、`voice-samples.md`（Reddit 章节）
- r/Daytrading 额外限制见 `social-voice.mdc`（禁 AI 腔、少硬推产品）
- **r/Daytrading 加严**（来自 ops/PLAYBOOK.md 硬规则）：禁说"市面上唯一的工具/only tool out there"；禁临床机制词（cortisol、prefrontal cortex、adrenaline、"chemicals in your brain"之类）——用 "threat response / not thinking straight" 这类日常语言

---

## 词汇与用语

**合规禁语（FTC + 事实，全平台一律禁止——与 MERIDIAN.md §12 同步，2026-06-10）：**

| 禁止 | 改说 |
|---|---|
| "will make you profitable" / "guaranteed to improve" | "monitors behavioral patterns that often precede losses" |
| "prevents blowups" / "eliminates emotions" | "intervenes when behavioral signals indicate elevated risk" |
| "reduces losses" | "intervenes during behavioral patterns associated with loss spirals" |
| "100% accurate" / "proven results" / "risk-free" | 删掉 |
| "no credit card"（试用） | **试用需要绑卡**，写 "7-day free trial, cancel anytime during the trial" |
| "no telemetry" / "no data ever leaves your machine" | **v1.5.0 起不成立**。写 "local-first；仅两类外呼=license 验证+匿名研究数据（可随时 opt out）" |
| "anti-tilt"（作为定位） | 已废弃。用 "real-time psychological stability monitor" |
| "Intel 仅 Guard 档" | **v1.5.0 起 Intel 进 Core**。Guard 卖点=强制层（规则引擎+Strict Lock） |
| Guard 旧级名（Alert/Countdown/Risk Alert Mode） | 正名：**Notify · Risk Alert · Acknowledge · Trading Pause · Disconnect** |

**禁 AI 腔词汇：** delve, navigate, tapestry, multifaceted, game-changer, revolutionary, groundbreaking, unlock, leverage(动词), seamlessly, robust, innovative, cutting-edge, empower
**禁短语：** "It's worth noting", "In conclusion", "At the end of the day", "It is important to understand", "In today's world"
