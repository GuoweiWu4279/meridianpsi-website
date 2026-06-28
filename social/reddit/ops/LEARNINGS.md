# Reddit Content — Learnings (踩坑史 → 永久规则)

> 对标 YouTube `LEARNINGS.md`。每次 Gary 纠正 / 帖子数据反馈 → 在这里记一条永久规则,**session 开始先读这里**,这样同一个错不犯第二次。
> 每条:日期 · 症状 · 根因 · 永久规则 · 改了哪一层(从源头修,不打补丁)。

---

## L1 — 从旧帖起稿 = 复制死定位(2026-06-10)
- **症状**:重写置顶帖时,我拿旧帖当骨架改字,结果整篇还是旧的 anti-tilt"没工具做过这个直到 Meridian"叙事,完全没有现网的超集定位、"一个坏 session"thesis、edge-vs-luck 复盘。
- **根因**:没有"写前必读的当前定位简报",我默认从最近的现成文案(旧帖)起稿。旧文案带着已死的定位。
- **永久规则**:**绝不从任何旧帖/旧文案起稿。** 写前必读 `brand/POSITIONING.md`(定位)+ `MERIDIAN.md`(事实)。旧帖只能当"事实核对对象",不能当"声音/定位模板"。
- **改的层**:新建 `brand/POSITIONING.md`;写作循环 step 2 写死"绝不从旧帖起稿"。

## L2 — 禁词清单 ≠ 一个声音(2026-06-10)
- **症状**:我守了"禁 em dash",但写出满屏 AI 腔——三连碎句("The entries you'd have passed on. The size you swore off. The stop you slid twice.")、对仗句("a feeling you argue with and becomes a number you can't")。Gary:"纯纯 AI 写的办法,谁会这么写。"
- **根因**:旧 `writing-rules.md` 只有禁令(禁词/禁标点),没有正面声音规范,也没有命名真正的 AI 腔病征(碎句三连、对仗、抽象升华)。避开禁词照样能写出 AI 腔。
- **永久规则**:声音 = 正面规范 + **逐句过 AI 腔图鉴**(硬闸)。光避禁词不够。每篇 draft 完成后,脑子里读出声逐句扫 `brand/VOICE.md §2`,问"这是人在说话还是 AI 在表演"。
- **改的层**:新建 `brand/VOICE.md`(正面规范 + 10 条命名病征 + before/after);`writing-rules.md` 降级为指针。

## L3 — 把评论口吻用到官方置顶帖(2026-06-10)
- **症状**:我把"What is Meridian"官方置顶帖写成了第一人称、自我消解("take this with a grain of salt")、一堆短句博好感的样子。Gary:"我们这是在自己的 subreddit 发的公共 pin post,目标是介绍 Meridian 是什么,为什么要这么写?"
- **根因**:没有文体表。我手上唯一的声音规范是为"在别人帖里评论"校准的(PLAYBOOK 的 5 步评论流、voice-samples 的评论范例),就把它套到了完全不同的文体上。官方置顶帖应该是自信的产品说明书口吻,不是钻空子的同行评论。
- **永久规则**:**写前先归类文体**(`reddit/ops/ARTIFACTS.md`),按那一行的 register 写。register 由文体推导,绝不默认。官方 pinned intro = 产品说明书(第三人称、正常段落、分小节);foreign-sub 评论 = 第一人称同行。两者不通用。
- **改的层**:新建 `reddit/ops/ARTIFACTS.md`(8 种文体 × 目标/读者/register/结构/范例);写作循环 step 1 = 归类文体。

---

## L5 — 我的"临床第三人称"register 把力度抽干了(2026-06-10,Gary 亲手改稿)
- **症状**:我把 pinned 帖写成临床、第三人称、删了比喻的产品说明书。Gary 改写后说我的版本"根本没有力度,废话",还砍了我从网站搬的 "one bad session" 开头。
- **根因**:① 我把现网首页一句标题("one bad session, not bad strategy")当 thesis 照搬,没判断它作为钩子其实很平;② 我为了"反 AI 腔"过度求稳,把鲜活比喻删了、把对比一刀切了、把语气写平了——结果反 AI 腔变成了反力度。
- **永久规则(他赢,已改规则)**:
  - 开头**点名现有工具的缺口 + 心率比喻展开**,不用 "one bad session"(POSITIONING §2)。
  - 我们自己的官方帖 = **品牌 "we" 口吻 + 鲜活比喻 + 结尾一句 "I"**,不是冷第三人称(ARTIFACTS pinned register)。
  - **鲜活/放大的比喻是力度来源,不是 AI 腔;反 AI 腔 ≠ 写平**(VOICE §1.7)。
  - **干脆的单个对比(behavior, not P&L)是好的**;只禁堆叠/装饰对仗(VOICE Tell 2 放宽)。
  - 网站文案≠圣经:POSITIONING 是从网站蒸馏的,但**声音所有者 Gary 的判断高于网站文案**。
- **改的层**:POSITIONING §1/§2、VOICE §1.7 + Tell 2、ARTIFACTS pinned 行、voice-samples 加金样本。

## L0 — 元教训:现象 vs 系统(2026-06-10,Gary 点出)
反复纠正同一类错(文案不对)是**现象**;**问题是没有像 YouTube pipeline 那样的严谨系统**。修复不是写得更小心,是建系统让文案变成"查表推导 + 硬扫描 + 学习环"。这套系统(CONTENT-SYSTEM / POSITIONING / VOICE / ARTIFACTS / LEARNINGS)就是这次的产物。**以后再出现"反复纠正同一类东西",先问:是哪一层缺了?补那一层,别再靠小心。**

---

## L4 — 系统缺"学习闭环",尤其不会从 Gary 的写作学(2026-06-10,Gary 点出)
- **症状**:Gary 问"系统有学习功能吗,能学我给的反馈/我写的东西吗"。审下来:LEARNINGS 是手动笔记(捕获靠自觉、召回靠运气),而"从 Gary 自己写的东西学"完全没建。
- **根因**:只建了存储(日志),没建闭环(捕获/提炼/召回/强制),也没有把"Gary 的写作=最高信号样本"当成一个输入源。
- **永久规则**:学习闭环见 `CONTENT-SYSTEM.md §6`。两个输入源:①我收到的纠正 → 本文件;②**Gary 自己写/改的对外内容 → 按 `VOICE.md §7` extraction 程序榨成规则 + 贴进 voice-samples"★ Gary 的真实写作"区**。四环节:捕获(当场,不留以后)/ 提炼(每~5条压进规格)/ 召回(把高价值学习升级成硬闸,别靠记)/ 强制。**Gary 的写法与现有规则冲突时,改规则,他赢。**
- **改的层**:`CONTENT-SYSTEM.md` 加 §6 学习闭环;`VOICE.md` 加 §7 extraction;`voice-samples.md` 加"★ Gary 的真实写作"区(已seed本session观察)。

---

## L6 — 渠道选择:Reddit-only now,X 暂缓(2026-06-19 研究定)
- **结论**:现在只做 Reddit,不开 X。第二渠道是 YouTube(pipeline 已有),不是 X。
- **根因(不是优先级,是模型不匹配)**:X 互动已崩(2025 年约 0.12%),且其冷启动要高频、15 分钟窗口内实时回复——和我们"批量起草 + 手工粘贴 + 无自动化 + 不晒脸不晒 P&L"的模型结构性冲突。Reddit 的低频、异步、看深度的模型反而是罕见的契合。
- **永久规则**:别再重复争论 X-vs-Reddit。要开第二渠道先看 YouTube;X 账号可防御性占名后搁置。
- **改的层**:本条(LEARNINGS)。

## L7 — 现实预期:Reddit 是高意向慢渠道,不是流量水龙头(2026-06-19 研究定 + Gary 确认目标)
- **症状预防**:怕第 3 周没爆量就判渠道死(Reddit 被错杀的头号原因)。
- **事实**:标杆案例都是 40+ 帖、2 个月以上才见真实的赢;Reddit 表现像"高意向 + 需求创造 + 信任/SEO 复利",不是冲量。
- **永久规则(Gary 2026-06-19 确认)**:前 8 周只看领先指标,**不设试用/收入硬指标**。目标 = 信任 + 节奏 + 一小撮试用。**Phase 1 成功判据 = comment karma ≥150 + 日常节奏真在跑 + 非零"自报来自 Reddit"的试用。**
- **改的层**:本条 + `PLAYBOOK.md` 三阶段。

## L8 — GEO 和 Reddit 是一个系统;闭环要"接线"不是"画图"(2026-06-25,Gary 点出 + rigor 审计)
- **症状**:我把 GEO↔Reddit 整合写成了两篇好文档 + 一句"以后我手动把目标贴进 queue"。按 Gary 的工厂评分卡(memory `factory-rigor-audit`),这是"伪装成 self-improve 的 self-check":强制器是提醒型 = proven corpse,会触发 0 次;可引用性规则躺在"叫你去读"的文档里(producer-blind);没证明最小原子。
- **根因**:把"系统"当"计划"做了。GEO 审计每周早就抓到了 AI 引用的 Reddit 帖 URL,但那条情报"流向虚无"——没有代码把 audit 接到 queue,全靠人手 narrate。
- **永久规则**:① 闭环要**机械接线**——`geo_audit.py` 每轮自动 `write_geo_targets()` → `GEO-TARGETS.md`(生产时强制,不靠记)。② 质量规则进**起草者必过的闸**(COMMENT-ANATOMY §8 item 7),不另写"去读"文档。③ **先证明最小原子**(一条真帖→一条过闸评论→入列→下轮看动没动)再加底座。④ 学习写回是 self-improve 的另一半,本节(L9)就是第一条——别让它静默不发生。
- **改的层**:`geo_audit.py`(加 forcing function)、`COMMENT-ANATOMY.md §8`(折入可引用性)、`GEO-INTEGRATION.md §2/§3/§6`、本条。

## L9 — 第一条 GEO 数据反馈:我们的品类在 off-site 是无主之地(2026-06-25 多引擎实测)
- **事实**:8 个定位最像的竞品(TradePit/MindGuard/Anchor/Tier Lock/Vyron/CTX/Zentra/PropPulser)**全部零 Reddit、零目录、零第三方报道**;AI"点名"它们只因自家页被爬到(`utm_source=openai`),脆且临时。真正有护城河的是另一个品类——硬锁工具。`reddit.com` 是 AI 引用的第 2 大域名。
- **永久规则(targeting)**:这是**圈地窗口不是追赶**。打法 = 在 AI 已引用的 confessional 帖里(GEO-TARGETS Lane A)做披露式真价值评论,把 Meridian 接进引擎的来源;角度 = 桥接"硬锁(他们有/搜索者要)+ 行为层(只有我们有)",不跟硬锁比谁锁得狠。
- **改的层**:本条 + `GEO-INTEGRATION.md §0/§5` + `GEO-FINDINGS-2026-06-25.md`。

---

## L10 — 别主动 undercut 自己(通则;隐私是触发点)(2026-06-26,Gary 亲自纠正)
- **症状**:置顶帖 + GEO Post 4 里写了 "it's local-first... the only things that leave your PC are a license check and anonymized research records tied to a random ID, which you can opt out of"。Gary:"这种东西以后不要再写。不要主动提及我们收集数据什么的。谁他妈问你了。"
- **根因**:把**合规页**才该有的完整数据披露搬进了**营销/社媒文案**。在没人问的地方主动说"我们上传(哪怕匿名)数据"= 凭空种隐私疑虑、自损转化。
- **永久规则(通则)**:营销/社媒/GEO/SEO 文案**绝不主动抛没人问的负面**——不主动说收集/上传数据、不主动抛弱点/局限/"可能不适合你"、不过度对冲、不替对手说好话。**说正面,打住。** 隐私是最典型:只说 "local-first" 就停,别提匿名研究/外呼/opt-out。**唯一例外=法律/FTC 必须的**(风险披露、不保证盈利/非投资建议/results vary、PSI 反过度承诺的话、合规页 human-edit-only)。负面**只在被直接问时**答。⚠️ "不主动提"≠撒谎:仍绝不写假的 "nothing leaves your machine"。详见 VOICE §3。
- **改的层**:`VOICE.md §3`(加正面规则)、`POSITIONING.md §7`(隐私锚)、本条;已清 `pinned-start-here.md` + `geo-answer-posts.md` 的主动披露。

## L11 — 披露式外部评论的三个纠正(2026-06-28,Gary 亲手纠正)
- **症状**:给 r/PropFirms"要不要 prop 违规拦截工具"那帖起草披露式创始人评论,我犯了三个错——逻辑、漏核心、命名。
- **永久规则(三条)**:
  - **① 绝不写"撞亏损线=账户没了"**(我写了 "by the time you're at your daily loss cap the account is already gone")。撞每日/最大亏损线只是当天到底、停手,账户好好的;说它=爆仓 = 把线设离谱了,**且违背超集定位**(我们 INCLUDE 亏损线,绝不贬损它)。对的框:线**只在你已把当天额度亏光时才响**,救不了触线前那几笔 tilt;我们加的是**触线之前**那一层。
  - **② adaptive learning 必须做主角,不是泛泛"watch behavior"**:机制 = 引擎**每个 session 持续学你自己的"正常"(节奏/手数/红绿单后反应)= 个人基线**,然后在你**偏离自己基线**的瞬间、亏损前一步介入。"you're not trading like you right now" > 任何固定"你亏了 $X"阈值。写任何差异化论证先摆这条。
  - **③ off-site 提及一律 "Meridian PSI",不写裸 "Meridian"**:"Meridian"太泛(同名一堆),AI 难消歧绑到我们;"Meridian PSI" 独特、贴 meridianpsi.com + u/MeridianPSI,易被 AI 关联/检索。自有 sub 上裸"Meridian"可以(handle 已消歧);**外部 = Meridian PSI**。
- **改的层**:本条;`POSITIONING.md §7`(加外部命名锚);已修 `geo-answer-posts.md` Post 4 的 Guard 梯子(NT8 五级 vs standalone 六档)。

---

## 帖子数据反馈(开始记 — 每周日复盘填,反哺 ARTIFACTS 和打分)

> 召回最弱,所以把"哪类有效"写成可查的表,而不是散落印象。每周日从 `log.md` 的 KPI 行提炼一条进这里。

| 周 | 表现最好的角度/开头/文体 | 表现差的 | 反哺动作(改了哪层) |
|---|---|---|---|
| (待第一周数据) | | | |

**度量口径(和 `log.md` 周 KPI 对齐)**:领先 = comment karma 增量、评论中位赞、收到的主动 DM、profile 访问、自有 sub 订阅增量;滞后 = GA4 里 reddit.com referral session(`python ~/.meridian/gdata.py ga4` 看 sessionSourceMedium)、Whop 外链点击。**归因现实(Gary 2026-06-19 选了不加 Whop 结账问卷)**:Reddit→试用 的归因是粗的——主要靠"来 DM 的人 + 评论里自报 + GA4 referral 趋势"三个弱信号叠起来看,别指望精确数字。要更硬的归因,以后可重提 Whop 结账问卷。
