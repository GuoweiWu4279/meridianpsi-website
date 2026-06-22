# Reddit Queue — 当前队列（v2 模式：我备稿 → push 通知 → Gary 粘贴发送 → 回"发了"）

状态：`待发` / `已发` / `毙`。发出去的搬到 `log.md`。

---

## ⓪ Gary 一次性设置（做完划掉，约 25 分钟）

- [ ] **0a. 账号 hygiene（先做这个）**：验证邮箱 + 绑手机 + 开 2FA，头像/简介填好。CQS 直接输入 + 最便宜的防 shadowban 保险（见 PLAYBOOK "账号健康"）。
- [ ] **0b. 回我两个数**：Reddit 账号 username + 当前 comment karma（设置页或 profile 可见）。我用它定 Phase 1 起跑点。
- [ ] **0c. 注册 Reddit Pro**：浏览器开 `redditforpros.com` → 用你的 Reddit 账号登录 → 填公司信息（Meridian / meridianpsi.com / verified email 用 contactmeridianpsi@gmail.com）。免费。注册完告诉我，我接管 Trends 关键词配置清单。
- [ ] **0d. 提交 API 只读审批工单**：开 `https://support.reddithelp.com/hc/en-us/requests/new` → 选 Developer Support → 粘贴下面文案提交（如有"use case"字段同样粘贴）：

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

- [ ] **0e. 手机确认**：Reddit app 已装、能收到我的 push 通知。

> 工单批复后的工具已提前建好在 `C:\Users\Administrator\reddit-ops\`（README 三步：建 script app → 跑 auth_setup.py 点一次 Allow → 跑 smoke.py 验证）。批复前不用碰。

---

## ① 待发队列

### ~~[1] r/MeridianPSI — 置顶帖更新~~ ✅ 已发（2026-06-10）：https://www.reddit.com/r/MeridianPSI/comments/1t36tfc/start_here_what_is_meridian_psi/

### [2] 评论草稿 — ★主intake = Gary 贴帖 → 我出草稿（2026-06-10 定；节奏 2026-06-19 选定:每天约 5 分钟,贴 3-5 帖）
Gary 每天把刷到的 **3-5 个值得回的帖**(标题+正文+sub，能带链接更好)贴给我；我按 `COMMENT-ANATOMY.md`（ARTIFACTS "Topic comment"）出草稿（答在前、具体细节、产品只在被问/天然相关时一句带过+披露），过三闸+三测试后给你，你打散时间贴。
（我自己用 Arctic Shift/WebSearch/官方API 扫帖 = 补充,不是主路。）

---

## ② 排程中（我这边的工作，无需你动）

### [2] r/MeridianPSI — Tradovate/Ironbeam Early Access 公告帖 ★待发

草稿完成：`social/reddit/founding-early-access-post.md`

- 文体：Founding / early-access 帖（ARTIFACTS.md 对应行）
- 定位：Tradovate/Ironbeam 平台解锁公告 + early access 申请入口
- 时机：与 D1 钥匙信同步发出（创作者收到邮件时，Reddit 上能找到）
- Gary：复制 `founding-early-access-post.md` 的 Post body，直接发到 r/MeridianPSI

---

- Software Sunday #1 满血帖 — 等多平台公告时点对齐，年度 2 发之首
- Reddit Pro Trends 关键词清单（NinjaTrader / prop firm / tilt / revenge trading / daily loss limit …）— 等 0c
- **★ 线上回灌:核对 r/MeridianPSI 置顶帖** — v7 是 2026-06-10 发的(那时试用还是 7 天),06-14 改成 14 天。线上快照可能仍写 7-day。Gary 用浏览器打开线上置顶帖核对试用天数,若是 7-day 就按 `pinned-start-here.md`(已是 14-day)改那一段。(PLAYBOOK 线上回灌规则)
