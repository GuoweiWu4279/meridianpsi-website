# Meridian — Positioning Brief (写任何文案前必读)

> 这份文件回答一个问题:**Meridian 现在到底是什么、对谁说、怎么定位。**
> 它是从现网首页(`Web/src/pages/index.astro`)+ `MERIDIAN.md` + CEO 报告蒸馏出来的"当前真理"。
> **铁律:写任何对外文案前读这份,绝不从某个旧帖/旧文案起稿**——旧文案带着死掉的定位,照着改就是把死定位复制一遍(这是 2026-06-10 置顶帖三次返工的根因,见 reddit/ops/LEARNINGS.md L1)。
> 事实(版本/价格/Guard 级名/隐私)以 `MERIDIAN.md` 为准;声音/反 AI 以 `brand/VOICE.md` 为准。
> Last synced to site: 2026-06-10 (rev.6 era).

---

## 0. 内容目标链(一切的根,和 YouTube 同一条)

> 对的内容 → reach 到对的人(认真的日内/期货交易者,funded/prop 是最锋利的核心)→ 建立信任(可信 = 像真人、像权威,不像广告/AI)→ 带到 meridianpsi.com → 转化成 Meridian 用户 / founding user。

每篇文案服务这条链。但**每篇的"那一环"不同**:置顶帖做"理解+信任",评论做"reach+信任",founding 帖做"转化",数据帖做"信任+reach"。先想清楚这一篇在链条的哪一环(查 `reddit/ops/ARTIFACTS.md`)。

---

## 1. 主定位:超集(SUPERSET)——这是当前的根,不是旧的"唯一/第一"

现网首页的 H1 和 eyebrow 已经定调,所有文案对齐它:

> **"Everything your risk tool does — and the part it's blind to."**
> eyebrow: **"NOT A DIFFERENT TOOL. A STRONGER ONE."**

**含义:不要再写"市面上没有工具做过这个,直到 Meridian"(旧 anti-tilt / Gen-1-2-3 叙事,已废)。** 正确的框是:
- 你已经有 daily loss limit / drawdown cap / loss-streak cutoff。**留着它们。Meridian 也全都有。**
- Meridian 多的是它们**看不见的那一层:行为本身**——revenge、oversizing、tilt——在订单之前读到,而不是亏损之后。
- 一句话:"Keep the safety net you already trust. Gain the layer none of them have."

**为什么改这个**(CEO 报告判断 4):硬锁正在被平台免费化(NT 官方在做),它只能当 checkbox 不能当卖点。**唯一查无对手的护城河 = 多维行为检测 + 触线前的早期预警。**

---

## 2. 核心论点(THE THESIS):一个坏 session,不是坏策略

现网 "WHY IT MATTERS" 段的灵魂,几乎所有文案都从这里起:

> **"Most blown accounts aren't bad strategy. They're one bad session."**

你花几个月打磨的策略很少背叛你。一个 session 会:昨天你会拒掉的进场、你早戒了的手数、你挪了两次的止损。**daily loss limit 在最后才抓到这个。Meridian 抓造成它的行为。**

具体对比(可引用):一个 $500 日亏锁要等你已经 −$500 才动手,四笔 revenge trade 太晚了;Meridian 在第二笔就标出 revenge 模式。

---

## 3. v1.5 产品英雄:赚来的 vs 运气的(EDGE vs LUCK)

这是 v1.5 REDESIGN 的真英雄,**几乎所有旧文案都漏了它**。复盘层(Intel)做的事:

> 把每个 session 拆成两轴:**你多自律(PSI 轴)× 你实际赚没赚(P&L 轴)。**
> 一个靠运气的绿天 = 警告,不是胜利。一个守了所有规则的红天 = 正常波动。
> 它给"自律的 session vs tilt 的 session"标上真实美元差,并按时段/品种/持仓时长/方向拆解。

矩阵四格:EARNED(自律+赚=真 edge)/ LUCK(不自律+赚=危险)/ VARIANCE(自律+亏=成本)/ THE SPIRAL(不自律+亏=爆仓的样子)。
卖点:**没有任何 P&L 日志能做这个,因为它们没有实时行为引擎。** 这是和 TradeZella/Edgewonk 的真差异。

---

## 4. 买家:广义认真期货交易者,但 funded / prop 是最锋利的楔子

- **广义受众**(reach 面):认真的日内/期货交易者。教学/话题内容平台无关,不窄化成"NT8 用户"。
- **最该打动的核心买家**(转化面,CEO 报告判断 4):**funded prop trader / 在跑 eval 的人**。理由:账户里有真钱、爆仓成本具体可算、对月费不敏感(交易所数据费 $100+/月照付)。
- **成本数学**(funded 楔子,现网已用,FTC 安全的定性版):
  - 一个 eval = $89–540,失败就没了
  - 一个 revenge session = $300–800,外加它能爆掉的 funded 账户
  - Meridian = $49.99 一个月
  - 定性事实(可引,但精确数字需 Gary 批):大量 funded trader 拿不到有意义的 payout,而且夺走账户的通常不是策略,是一个 session。
- ⚠️ **不能承诺"Meridian 让你留在拿 payout 的那批人"**(结果承诺,FTC 红线)。只陈述现实 + 它监控造成爆仓的那件事。

---

## 5. 三层信息栈(MERIDIAN.md §12,按这个顺序铺)

| 层 | 用语 | 用在 |
|---|---|---|
| 一·身份 | "real-time psychological stability monitor" | 第一段、定义、meta |
| 二·竞争 | "behavioral leading indicator" / "fires before P&L, not after" | 对比、定位段 |
| 三·技术 | 7 个行为信号 + 认知科学 + 自适应学习,合成 PSI,对每个人自己的基线 | 产品页、FAQ、技术内容 |

冷启动比喻(可用):**"Think Apple Watch stress monitor — but for trading discipline."**

---

## 6. 我们是什么 / 不是什么

**是**:实时心理稳定监控(在行为上开火,不在 P&L 上);监控 + 强制(Guard)+ 复盘(Intel)的完整闭环;本地优先;NT8 原生 + Tradovate/Ironbeam 独立 App(early access),一个订阅全平台。

**不是**:不是信号、不是课程/导师/Discord、不是仓位计算器、不是 guru 产品、不是单纯的日志(我们有日志,但产品是实时行为监控)。我们不发战绩/不晒 P&L/不露脸。

---

## 7. 当前事实锚点(细节以 MERIDIAN.md 为准,这里只放最常用的)

- 版本:v1.5.0 已发布,v1.5.1 已打包待发。
- 价:Core $49.99 / Guard $69.99,7 天试用(**要绑卡**,绝不说 "no credit card")。
- 两档边界(**v1.5.0 起反转**):Intel 分析进了 **Core**;Guard 档只 gate 强制层(规则引擎 + Strict Lock)+ priority support。旧的"Intel 仅 Guard"已废。
- Guard 五级:**Notify · Risk Alert · Acknowledge · Trading Pause · Disconnect**(旧名 Alert/Countdown/Risk Alert Mode 已废)。
- PSI 四区:Stable(88-100)/ Caution(72-87)/ Warning(55-71)/ Critical(0-54)。
- 隐私(**绝不写"无遥测/数据永不出机"**):local-first;两类外呼 = license 验证 + 匿名研究数据(随机 ID、可 opt-out);anonymized 不说成数学上不可关联(实为 pseudonymous)。
- 7 信号:Revenge Entry / Stop Manipulation / Size Spike / Hold Bias / Position Overstay / Rule Violations / Overtrading Pace。

---

## 8. 可直接复用的 canonical 句子(现网原话,声音已对)

- "Everything your risk tool does, and the part it's blind to."
- "Keep the safety net you already trust. Gain the layer none of them have."
- "A limit reacts. Meridian prevents." / "A loss limit catches that at the end. Meridian catches the behavior that's causing it."
- "It watches how you trade, not just how much you've lost."
- "The 7 behaviors that quietly kill accounts."
- "Willpower is not a risk strategy."(⚠️ 这是网站标题,**Reddit 上别原样搬当口号**——见 VOICE.md AI-tell #8,改成平铺说法)
- "Trade the version of you that you respect."

> 注:网站文案大量用 em dash 和对仗,那是网站的体裁。**搬到 Reddit/邮件/社媒必须过 VOICE.md**(无 em dash + 反 AI 腔扫描),不能逐字照搬。canonical 句子是"意思和定位的来源",不是"逐字成品"。
