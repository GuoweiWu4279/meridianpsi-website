# Reddit Ops Playbook v2 — Meridian（2026-06-10 全面重写）

我（Claude）全权负责 Meridian 的 Reddit 运营：监控、找帖、打分、起草、排程、记录、策略、复盘全部归我。
**唯一留给 Gary 的动作 = 每天 ≤5 分钟把我备好的内容粘贴发出**（原因见"通道现实"——这是平台政策决定的，不是审核流程）。
Session 之间不共享记忆：每次跑先读本文件 + `log.md` + `queue.md`。

> 📐 **本文件管 Reddit 的策略/节奏/安全。写任何内容前,先走写作系统:**
> 入口 `social/CONTENT-SYSTEM.md`(目标链 + 写作循环)→ 文体查 `ops/ARTIFACTS.md` → 定位读 `brand/POSITIONING.md` → 写 + 逐句扫 `brand/VOICE.md` → 教训读 `ops/LEARNINGS.md`。
> **文案怎么写 = 那套系统;Reddit 怎么打 = 本文件。** 别在本文件里即兴定声音/文体。

---

## 为什么不是全自动（2026-06-10 研究定版，别再重新争论）

研究结论（两个独立 agent 交叉验证，来源链接见当日 session；[硬]=官方原文/实证，[中]=二手）：

1. **全自动发送在政策上无路**：2026-03-31 起 Reddit 强制"脚本运营的账号"注册打 **App 标签**，且 App 账号禁止人机混用——"创始人真人账号"与"全自动账号"在政策上互斥。平台用行为分析主动抓漏网者（触发 passkey/真人验证）。[硬]
2. **API 接入要先审批**（2025-11 起 Responsible Builder Policy），且"代表企业使用"=商业用途需书面许可。我们申请只用于**读取**（监控找帖），不用于发送。[硬]
3. **自动化冷私信是白纸黑字的封号项**（"Use automation for unsolicited outreach (e.g., unprompted DMs or Chat requests)"）；实测 ~15 条冷 DM 即有 shadowban 案例。老式 PM 已死（2025-08），一切私信走 Chat，陌生人只收到一条 chat request。[硬]
4. **实证死亡率**：r/Daytrading 标题含 "beta" 的工具招募帖 **21/21 全灭**（含多个与 Meridian 同品类的"防 tilt 工具"帖）；r/FuturesTrading 自我推广=当场封；某机构统计 340 个 startup 营销账号 89% 三十天内死。"把 Reddit 当投放渠道"的默认结局就是死。[硬/中]
5. **行业标杆同款答案**：头部排程工具 Postpone 在 2026 已主动退回"通知+人工发"模式（其文档原话：all scheduled Reddit posts use notification posting in accordance with Reddit's rules）。我们的模式与之相同 = 业界验证过的安全形态。[硬]
6. **机械节奏本身是 shadowban 第一触发器**——Gary 人手粘贴反而天然提供"人类时间曲线"。[中]

> 一句话：**我做大脑和工厂，Gary 做手。** 手一天只需要 5 分钟。

---

## 通道现实（2026-06-10 实测）

| 通道 | 状态 | 用途 |
|---|---|---|
| Claude-in-Chrome 驱动浏览器 | **❌ 死**——扩展层安全策略禁开 reddit.com（实测报 "This site is not allowed due to safety restrictions"），不是配置问题，v1 的"Chrome 主通道"作废 | 无 |
| 服务端直抓 reddit.com/.json | ❌ 403（2026-05 起匿名 json 全面封） | 无 |
| **WebSearch** | ✅ | 找帖兜底、查 sub 规则 |
| **Arctic Shift 镜像 API**（arctic-shift.photon-reddit.com） | ✅ 实测可用 | 读 sub 侧栏/规则/帖子存档（有滞后）——当前主力监控通道 |
| **Reddit 官方 API（只读）** | ⏳ 待审批（Gary 提工单，文案在 queue.md 顶部） | 批下来后 = 实时监控目标 sub 的 /new、收件箱、提及 |
| **Reddit Pro**（redditforpros.com，免费官方品牌工具） | ⏳ 待 Gary 注册 | Trends 关键词监听（NinjaTrader/prop firm/tilt 等无限关键词）+ 自有 profile/sub 的**官方原生定时发帖** |
| **Gary 的手**（手机/电脑粘贴） | ✅ | 一切对外发送的最后一步；我用 push 通知推成品给他 |

---

## 目标阵地（v2 修订，依据逐 sub 规则核查）

| Sub | 订阅量级 | 角色 | 硬门槛 | 关键规则 |
|---|---|---|---|---|
| **r/Daytrading** | ~4.7M | 主战场（评论）+ **Software Sunday**（年 2 次产品帖） | 评论需账龄 3 天 + 10 comment karma | 严管 AI 文风；正区产品帖必死；Software Sunday 四规：指定 flair、详细描述产品、必回评论区、**同一产品每年最多 2 次**。发前用真人通道读一遍其 wiki 的 content-creator 指引 |
| **r/FuturesTrading** | ~120K+ | 主战场（评论先行） | **发文字帖需 50+ comment karma**（评论无门槛；mod 帖原文阶梯：50 文字/100 图/1000 链接） | 自我推广=当场封；内容创作者永不 approve。先攒 karma，后期只发纯价值文字帖 |
| **r/Trading** | ~250K | 次要 | restrict_posting | 链接到付费订阅站=必删 → 只发纯文字 |
| **r/MeridianPSI** | 自有 | 大本营：置顶帖、founding 计划帖、版本公告、AMA | 无 | 随便讲产品；AutoModerator / 官方 Automations / Reddit Pro 排程 = 完全合法的自动化 |
| **r/alphaandbetausers** | ~18K | founding user 招募专用（该 sub 即为"创新者找早期用户"而生） | 无 | 直接发招募帖=绿 |
| **r/Tradovate** | 小 | 只答题、被问才提 | — | broker 地盘，谦逊 |
| ~~r/FuturesTradingNQ~~ | 195 人 | **v2 移除**——个人领地小 sub（RonPosit 私地），无流量有风险 | — | — |
| ❌ r/ninjatrader | — | **禁**：简介明文 "NO LICENSE SALES, DEVELOPER SOLICITATIONS" | — | — |
| ❌ r/TopstepX / r/ApexTraderFunding 等 prop 官方 sub | — | **禁**发产品：别人官方场子；只可纯答题 | — | — |
| r/algotrading | ~1.7M | 仅纯技术分享 | — | 反卖软规则极硬，禁 paysites，不适合招募 |

**契合度打分（每帖 0–5，≥3 进队列）——沿用 v1：**
+2 话题命中（复仇交易/过度交易/移止损/死扛/纪律 vs 系统/实时 vs 事后/prop 评估/心理 vs 策略）；+1 OP 真诚求助；+1 我们真能加价值；+1 评论区未饱和；−2 引战/政治/喊单/加密为主。

---

## 运营节奏（三阶段）

### Phase 1 — 攒 karma（现在 → comment karma ≥50，预计 2–3 周）
- 每天 **2–5 条**高质量评论（r/Daytrading + r/FuturesTrading 为主），**零产品提及、零链接**。
- 目的：解锁 r/FuturesTrading 文字帖资格 + 建立"真参与者"行为曲线 + 喂高 CQS（隐藏账号信誉分，决定发帖/DM 配额）。
- 我每天出一批草稿（含原帖链接+分析+成品评论），push 给 Gary，他 5 分钟粘贴。

### Phase 2 — 建阵地（karma 达标后）
- r/MeridianPSI：重贴修正版置顶帖（`pinned-start-here.md` 2026-06-10 版）、发 **Founding User Program 帖**（60–90 天免费换证言；帖内声明 "comment or DM me if interested"）。
- r/alphaandbetausers：发招募帖。
- r/FuturesTrading / r/Trading：第一条纯价值文字帖（行为数据/方法论，无链接）；founder 身份放 profile 自然导流。
- 开启"**对方先动作 → 我们再 DM**"漏斗：只私信主动评论/来信的人；草稿我备，发送走 Gary 队列。

### Phase 3 — 满血一击（与多平台公告/Tradovate GA 对齐）
- **Software Sunday #1**：年度 2 发的第一发。截图+机制讲解+诚实局限+founding 邀请；发后 24h 内我备好每条评论的回复。第二发预留给下个大版本（间隔 ≥5 个月）。
- 数据帖系列化：研究 pipeline 产出（"PSI 预警提前 X 分钟"类）= 天然高赞素材。

### 持续（全阶段）
- 我监控：Arctic Shift + WebSearch（官方 API 批后换实时；Reddit Pro 注册后加 Trends 关键词监听）。
- 任何人回复我们/来 DM → 我尽快备好回复草稿入队（目标当天）。
- `log.md` 记一切：已发、followup、去重台账、karma 进度。

---

## 硬规则（v2，违反=前功尽弃）

1. **禁 em dash / AI 腔**——全部草稿过 `writing-rules.md`；宁可口语小瑕疵。2025 苏黎世 r/changemyview 事件后，社区靠文风抓 AI 且容忍度为零。
2. **不每条提产品**：70/30 原则（70% 纯价值才换得 30% 的提及权）；提产品必须"被问到/天然相关"+利益声明（"I built it, obviously biased"）+caveat。同一 sub 提产品 ≤1 次/周。
3. **r/Daytrading 加严**：禁"市面唯一/only tool out there"、禁临床词（cortisol/chemicals in your brain 等）。
4. **冷 DM = 红线，永久**。私信只发给"先动作"的人（评论/来信/帖内响应过），纯手写个性化，首句披露身份来意，被拒不追。karma <500 期间不做任何主动 DM；之后也 ≤2–3 条/天。
5. **链接纪律**：单帖 ≤1 链接；同 URL 不跨 sub 重复；外部 sub 用 "details in my profile / our sub" 替代直链。
6. **绝不**：小号、协同点赞（vote manipulation）、封号后换号（ban evasion）、在禁推销 sub 发产品、同文多 sub 连发。
7. **行为曲线平滑**：发送时间由 Gary 真人节奏决定（特性不是缺陷）；我排队列时主动打散密度、控制每日条数。
8. **每条对外内容默认 Gary 过目**（粘贴时自然看到）；他有一票否决，但不设主动审批关——瓶颈已移除，责任在我备稿质量。

---

## 每次跑的步骤（我）

1. 读本文件 + `log.md` + `queue.md`；先处理 followup 区。
2. 扫帖（Arctic Shift / WebSearch / 官方 API）→ 打分 → 去重入账。
3. 起草（5 步：中文分析→回复角度→中文稿→英文稿→过 writing-rules）→ 写入 `queue.md`（每条含：目标 URL、粘到哪、成品文本）。
4. Push 通知 Gary（标题=今天 N 条 · 预计 X 分钟）。
5. Gary 回报"发了"后：链接补进 `log.md`、好范例入 `voice-samples.md`。
6. 每周日：周复盘写进 `log.md`（karma 进度、哪类评论得分高、下周重点）。

## Gary 的全部工作

**一次性（约 20 分钟）：**
1. 告诉我账号 username + 当前 comment karma（对照门槛定起跑点）。
2. 注册 **Reddit Pro**（redditforpros.com，免费，5 分钟）。
3. 提交 **API 只读审批工单**（文案在 `queue.md` 顶部，粘贴即提交；批复约 2–4 周，期间不影响运营）。
4. 手机装 Reddit app + 确认收得到我的 push 通知。

**日常：** 收到 push → 打开 `queue.md` → 粘贴发送 → 回一句"发了"。≤5 分钟/天，可隔天攒批。

---

## 相关文件
- 语气/人设：`Web/.cursor/rules/social-voice.mdc`；范例库：`voice-samples.md`（注意其中标注"勿模仿"的违规样本）
- 防 AI + 合规禁语总表：`Web/social/writing-rules.md`
- 置顶帖正文（2026-06-10 修正版，待重贴）：`pinned-start-here.md`
- 产品事实唯一来源：`Company/MERIDIAN.md`（rev.6）
- `queue.md`（当前队列）、`log.md`（台账）

## v1 → v2 变更记录（2026-06-10）
- 触发方式：手动"Gary 叫我跑" → **我自主排程跑，Gary 只做发送的手**
- 发帖通道：Chrome 代发（已被扩展政策封死）→ **queue + push + Gary 粘贴**（Postpone 同款模式）
- 审核门：逐条审批 → **默认发出、粘贴时过目、一票否决**（Gary 2026-06-10 授权）
- 目标表：移除 r/FuturesTradingNQ；新增 r/alphaandbetausers、Software Sunday 机制、r/Tradovate（答题）；明确 r/ninjatrader、prop 官方 sub 为禁区
- 新增：三阶段节奏（karma→阵地→Software Sunday）、冷 DM 永久红线、"对方先动作再 DM"的 founding 漏斗、Reddit Pro/官方 API 双通道申请
