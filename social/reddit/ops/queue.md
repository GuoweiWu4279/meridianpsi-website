# Reddit Queue — 当前队列（v2 模式：我备稿 → push 通知 → Gary 粘贴发送 → 回"发了"）

状态：`待发` / `已发` / `毙`。发出去的搬到 `log.md`。

---

## ⓪ Gary 一次性设置（做完划掉，约 20 分钟）

- [ ] **0a. 回我两个数**：Reddit 账号 username + 当前 comment karma（设置页或 profile 可见）。我用它定 Phase 1 起跑点。
- [ ] **0b. 注册 Reddit Pro**：浏览器开 `redditforpros.com` → 用你的 Reddit 账号登录 → 填公司信息（Meridian / meridianpsi.com / verified email 用 contactmeridianpsi@gmail.com）。免费。注册完告诉我，我接管 Trends 关键词配置清单。
- [ ] **0c. 提交 API 只读审批工单**：开 `https://support.reddithelp.com/hc/en-us/requests/new` → 选 Developer Support → 粘贴下面文案提交（如有"use case"字段同样粘贴）：

```
Subject: API access request — read-only monitoring for a founder account

Hi, I'm the founder of Meridian (meridianpsi.com), a behavioral risk-management
add-on for NinjaTrader 8. I'm requesting approval for a small read-only script
app on my own account (single account, no third-party users).

Use case: reading new posts in a handful of trading subreddits (r/Daytrading,
r/FuturesTrading, r/Trading) so I can personally join relevant discussions,
plus monitoring my own inbox/mentions and managing my own community
(r/MeridianPSI). Expected volume is far below the free-tier rate limit
(a few hundred requests/day).

To be explicit: no automated posting, no automated voting, no automated
messaging, no data resale, no model training. All posting stays manual,
done personally by me. I understand this is adjacent to my business, so
I'm happy to provide any further details you need.

Reddit username: u/<USERNAME>
```

- [ ] **0d. 手机确认**：Reddit app 已装、能收到我的 push 通知。

> 工单批复后的工具已提前建好在 `C:\Users\Administrator\reddit-ops\`（README 三步：建 script app → 跑 auth_setup.py 点一次 Allow → 跑 smoke.py 验证）。批复前不用碰。

---

## ① 待发队列

### ~~[1] r/MeridianPSI — 置顶帖更新~~ ✅ 已发（2026-06-10，Gary 贴出 v7）→ 已搬到 log.md。链接待回填。

### [2] 评论批次 #1 | 状态：等 0a（拿到 karma 数后我立刻扫帖出稿）
Phase 1 开跑：每天 2–5 条纯价值评论草稿（零产品、零链接）。我扫 r/Daytrading + r/FuturesTrading
的新帖，按打分表筛选，成稿后 push 你。

---

## ② 排程中（我这边的工作，无需你动）

- Founding User Program 帖（r/MeridianPSI + r/alphaandbetausers 两版）— Phase 2 发，草稿我先备
- Software Sunday #1 满血帖 — 等多平台公告时点对齐，年度 2 发之首
- Reddit Pro Trends 关键词清单（NinjaTrader / prop firm / tilt / revenge trading / daily loss limit …）— 等 0b
