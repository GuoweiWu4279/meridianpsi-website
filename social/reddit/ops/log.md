# Reddit Ops Log — 已发记录 / Followup / 去重台账

---

## 已发帖 / 评论

| 日期 | Sub | 类型 | 链接 | 提了产品? | 备注 |
|------|-----|------|------|-----------|------|
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

- **起点**:评论号 = **u/livingpeatut5196**（Gary 本人；Arctic Shift 无存档足迹 = 近乎空号，视作 ~0 karma 起步；精确 comment karma 待 Gary 报，可选）。品牌号 u/MeridianPSI 只管自有 sub。
- **门槛**:comment karma ≥50(解锁 r/FuturesTrading 文字帖)→ ≥150(Phase 1 成功线)
- **当前**:—

## 2026-06-19 实测状态（reddit.com 对所有工具封锁;以下经 Arctic Shift 镜像 + GA4 拿到，Chrome 打 reddit.com 实测仍报 "not allowed due to safety restrictions"）

- **账号 = u/MeridianPSI**（品牌名账号，非个人 founder handle —— 见 ⚠️）。
- **自有 sub r/MeridianPSI 订阅 = 1**（基本为空）。
- **置顶帖疑似仍是旧文**：Arctic Shift 存档正文 = "Meridian PSI is **the first**… safety harness —(em dash)… Built for discretionary futures traders on NinjaTrader 8" —— 含禁用的 "first" claim、em dash、NT8-only、无多平台、无 14-day。**v7 改写疑似没真贴上线**（或存档早于编辑）。需人眼核对线上正文，很可能要整篇重贴 v7。
- **历史评论**：~25+ 条，分布 r/Daytrading / r/Trading / r/FuturesTrading / r/PropFirmTester / r/propfirm；分数多在 1-5；**有 ≥4 条被删（[DELETED]）** —— 可能 mod 删（自推）或自删。
- **历史发帖**：同一标题 "Why do all our risk management tools wait…" **同时发到 r/Daytrading + r/FuturesTrading**（违反"同文多 sub"规则，已是历史）；其一拿到 13 条评论（钩子有效）。
- **GA4**：近 28 天 reddit→站 referral session = **0**。
- **✅ 账号身份（2026-06-19 定）**：识别出 u/MeridianPSI 是品牌号却在外部 sub 发第一人称 founder 评论（一眼公司假装个人，≥4 条被删大概率因此）。**已决定**：外部 sub 评论改用个人号 **u/livingpeatut5196**（Gary 本人，披露式提产品），u/MeridianPSI 只管自有 sub。见 PLAYBOOK "账号策略"。
