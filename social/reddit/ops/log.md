# Reddit Ops Log — 已发记录 / Followup / 去重台账

---

## ⚡ 2026-06-29 现状对齐（reconcile — 台账此前滞后，以本块为准）

> 此前 log/queue 没把已发帖回写，台账落后真实进度（导致一次基于旧台账的误判）。本块 = 当前真状态（Gary 2026-06-29 报 + git 核对），读这里为准。
- **Phase-0 = 已完成**（账号 hygiene / Reddit Pro / API 工单 / karma 起点，`queue.md §0` 全部做完）。
- **Lever 1 已全量执行**：`geo-answer-posts.md` 的 **8 篇 GEO 答案帖已全发到 r/MeridianPSI**（Post 1-8；Post 6/7/8 = 06-28 加的 psych-stability / Tradovate / broad-futures）。逐篇 URL/日期待 Gary 回填。
- **Lever 2 已起步**：外部披露式创始人评论进入草稿层（`LEARNINGS.md` L11，r/PropFirms，06-28 Gary 亲改三处）。第一条 funded/prop 成品稿见 `queue.md` 待发区 [5]。
- **阶段**：自有 sub 不卡 karma，Lever 1 走完；外部评论(Lever 2)受账号信誉约束，按 L12 三腿配方推进。**当前 comment karma 待 Gary 报**（旧"~22"是 06-26 注，可能已变）。

---

## 已发帖 / 评论

| 日期 | Sub | 类型 | 链接 | 提了产品? | 备注 |
|------|-----|------|------|-----------|------|
| 2026-06(下旬) | r/MeridianPSI | GEO 答案帖 ×8 (Lever 1) | 线上已发 | 是(自有sub) | **全量已发**(Gary 确认 2026-06-29)。成品 `geo-answer-posts.md` Post 1-8，各对一个 GEO 隐形买家查询，写成 AI 可引用结构。(若想精到每篇归因可回填 URL，非必需) |
| 2026-06-10 | r/MeridianPSI | 置顶帖(pinned intro) v7 | https://www.reddit.com/r/MeridianPSI/comments/1t36tfc/start_here_what_is_meridian_psi/ | 是(自有sub) | 取代旧置顶；gap-first + 心率比喻 + we 口吻(Gary 改写后融合)；配图三张；ARTIFACTS pinned-intro 范例 |
| 2026-05-31 | r/Daytrading | 评论 | 待补链接 | 否 | algo 论据反驳。已存入 voice-samples.md |

---

## 待 Followup（别人回复了我的评论，需要跟进）

*(空。下次跑先检查这里。)*

---

## 去重台账（已评估过的帖 ID，避免重复处理）

格式：`帖ID | sub | 日期 | 处理结果（已回/跳过+原因）`

*(空。)*

---

## 周 KPI（每周日复盘填 — 领先指标为主,前 8 周不看收入）

> 目标(Gary 2026-06-19)= **信任 + 节奏 + 一小撮试用**。Phase 1 成功 = comment karma ≥150 + 节奏真在跑 + 非零"自报来自 Reddit"的试用。
> 取数:karma 看 profile 或 `~/reddit-ops/smoke.py`(API 通后);referral 跑 `python ~/.meridian/gdata.py ga4`(看 sessionSourceMedium 里的 reddit)。每周提炼一条进 `LEARNINGS.md` 的"帖子数据反馈"表。

| 周(始于) | comment karma 增量 | 本周发了几条 | 评论中位赞 | 来的主动 DM | profile 访问 | r/MeridianPSI 订阅增量 | GA4 reddit referral session | 最有效的角度/备注 |
|---|---|---|---|---|---|---|---|---|
| (待启动) | | | | | | | | |

## Phase 1 karma 进度

- **起点**:单号 **u/MeridianPSI**(2026-06-26 改单号;旧双号方案作废,个人号 u/livingpeatut5196 不用了)。
- **门槛**:comment karma ≥50(解锁 r/FuturesTrading 文字帖)→ ≥150(Phase 1 成功线)
- **当前(2026-06-29)**:**Gary 确认足够**(≥门槛,Lever 2 可直接上披露式提及,无需先铺纯价值)。永久纪律不变:披露自然、价值优先、绝不冒充中立用户(PLAYBOOK 2026-06-26)。

## 2026-06-19 实测状态（⚠️ 部分已被顶部 2026-06-29 对齐取代——尤其"订阅=1 / 置顶疑似旧文 / karma —"；其余作历史快照读）（reddit.com 对所有工具封锁;以下经 Arctic Shift 镜像 + GA4 拿到，Chrome 打 reddit.com 实测仍报 "not allowed due to safety restrictions"）

- **账号 = u/MeridianPSI**（品牌名账号，非个人 founder handle —— 见 ⚠️）。
- **自有 sub r/MeridianPSI 订阅 = 1**（基本为空）。
- **置顶帖疑似仍是旧文**：Arctic Shift 存档正文 = "Meridian PSI is **the first**… safety harness —(em dash)… Built for discretionary futures traders on NinjaTrader 8" —— 含禁用的 "first" claim、em dash、NT8-only、无多平台、无 14-day。**v7 改写疑似没真贴上线**（或存档早于编辑）。需人眼核对线上正文，很可能要整篇重贴 v7。
- **历史评论**：~25+ 条，分布 r/Daytrading / r/Trading / r/FuturesTrading / r/PropFirmTester / r/propfirm；分数多在 1-5；**有 ≥4 条被删（[DELETED]）** —— 可能 mod 删（自推）或自删。
- **历史发帖**：同一标题 "Why do all our risk management tools wait…" **同时发到 r/Daytrading + r/FuturesTrading**（违反"同文多 sub"规则，已是历史）；其一拿到 13 条评论（钩子有效）。
- **GA4**：近 28 天 reddit→站 referral session = **0**。
- **✅ 账号身份（2026-06-19 定）**：识别出 u/MeridianPSI 是品牌号却在外部 sub 发第一人称 founder 评论（一眼公司假装个人，≥4 条被删大概率因此）。**已决定**：外部 sub 评论改用个人号 **u/livingpeatut5196**（Gary 本人，披露式提产品），u/MeridianPSI 只管自有 sub。见 PLAYBOOK "账号策略"。
