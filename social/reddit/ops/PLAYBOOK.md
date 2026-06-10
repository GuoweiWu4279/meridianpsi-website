# Reddit Ops Playbook — Meridian

我（Claude）全职负责 Meridian 的 Reddit 运营。这个文件是**每次跑都要照做的标准流程**。
Session 之间不共享记忆，所以一切状态都落在 `ops/` 文件里。每次被叫起来先读这个文件 + `log.md`。

---

## 运作模式（已和 Gary 定稿 2026-05-31）

- **触发方式：** 手动。Gary 叫我跑的时候才跑。没有定时任务。
- **发帖方式：** Gary 审核批准后，**我帮他发**。通过 Chrome 驱动他**已登录的浏览器**，以他本人身份发。不用 Reddit API 机器人（封号风险）。
- **审核门：** 我准备好全套（找帖 + 分析 + 英文草稿）→ Gary 审核/修改 → 批准后我才发。绝不先发后审。

---

## 通道现状（重要）

- **直连 reddit.com JSON：403**，服务端抓取被封，不可用。
- **WebSearch：** 能按话题找帖，但结果是索引过的**旧帖**，只做兜底/补充。
- **Chrome（主通道）：** 读新鲜帖 + 发帖都走这里。需要 Gary 在扩展里点 "Connect" 连上一个 tab 后我才能驱动。
  - 每次跑之前提醒 Gary：登录好 Reddit，连上 Chrome。

---

## 目标 Subreddit + 打分

| Sub | 优先级 | 备注 |
|-----|--------|------|
| r/Daytrading | 高 | **严管 AI 内容**，额外规则见 `social-voice.mdc`。少推产品，禁临床词（cortisol/prefrontal 等），允许小瑕疵。 |
| r/FuturesTrading | 高 | NT8 受众集中，产品契合度最高。 |
| r/FuturesTradingNQ | 中 | 同上，体量小。 |
| r/Trading | 中 | 泛交易，话题杂。 |
| r/MeridianPSI | 自有 | 我们自己的 sub。置顶帖见 `pinned-start-here.md`。运营/回评论可更完整地讲产品。 |

**契合度打分（每帖 0–5，只把 ≥3 的放进队列）：**
- +2 话题命中：复仇交易 / 过度交易 / 移止损 / 过早止盈 / 死扛亏损 / 纪律 vs 系统 / 实时 vs 事后日志 / prop 评估 / 心理 vs 策略
- +1 OP 真诚求助或在认真讨论（不是钓鱼/引战/广告）
- +1 我们的视角能真正增加价值，不是硬蹭
- +1 评论区还不饱和（前排没人说过一模一样的话）
- −2 明显引战 / 政治 / 喊单 / 加密为主（我们是 NT8 期货）

---

## 每次跑的步骤

1. **读状态：** 读本文件 + `log.md`（已发记录、待 followup、已看过的帖 ID 去重）。
2. **扫帖：** 提醒 Gary 连 Chrome。驱动浏览器逐个目标 sub 看 `/new` 和 `/top`（today/week）。跳过 `log.md` 里已评估过的帖。
3. **打分 + 去重：** 按上面标准打分，≥3 的留下。把看过但跳过的帖 ID 记进 `log.md` 的去重台账。
4. **起草（按 `social-voice.mdc` 的 5 步工作流）：**
   - 中文分析原帖逻辑（说了什么、是否合理）
   - 中文回复角度
   - 中文草稿
   - **英文草稿**（套用所有写作规则）
   - 写进 `queue.md`，等 Gary 审。
5. **审核门：** 把 `queue.md` 呈给 Gary。等他逐条批准 / 改 / 毙。
6. **发帖：** 批准的，用 Chrome 以 Gary 身份发到对应帖。记下评论的永久链接。
7. **收尾：**
   - 批准并发出的回复 → 追加到 `voice-samples.md`（Reddit 章节顶部）。
   - 在 `log.md` 记：日期、sub、原帖链接、我评论的链接、状态。
   - 需要追踪别人回复我的，加进 `log.md` 的 followup 区。
8. **Followup：** 下次跑时，先看 followup 区有没有人回复了我的评论，需要的话同样走审核门再回。

---

## 硬规则（违反就前功尽弃）

1. **禁 em dash（—）和 en dash（–）做句中连接。** 见 `writing-rules.md`。AI 最大特征。
2. **不每条都提产品。** 只在对方问工具、或"我自己做的"角度真能加可信度时提，且一句话带过 + 带 caveat（"obviously biased"、"NT8 only"）。
3. **r/Daytrading 额外严管：** 绝不说"市面上唯一的工具"，产品只能框成"我自己造的因为找不到合适的"。禁临床词。允许小瑕疵/口语。拿不准就根本不提产品。
4. **绝不引战、不脏话、不参与骂战。** 人设：交易者第一，产品创始人第二。友好、科普、逻辑。
5. **绝不先发后审。** 每条都要 Gary 过。

---

## 相关文件

- 语气/人设/5步工作流：`Web/.cursor/rules/social-voice.mdc`
- 已批准范例（必读，对节奏）：`Web/social/voice-samples.md`
- 防 AI 规则：`Web/social/writing-rules.md`
- 置顶帖正文：`Web/social/reddit/pinned-start-here.md`
- 产品事实（定价/Guard 等级/合规）：`MERIDIAN.md`
- 本目录其他：`queue.md`（当前候选）、`log.md`（已发+followup+去重台账）
