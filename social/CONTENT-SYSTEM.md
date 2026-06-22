# Meridian Social Content System (写任何社媒文案前,先读这一份)

> 这是社媒/Reddit 内容的**总入口和事实源**,等同 YouTube pipeline 的 `CLAUDE.md`。
> 它存在的理由:2026-06-10 同一篇置顶帖返工三次(死定位 → AI 腔 → 错文体)。根因不是"写得不够好",是**没有系统**——文案靠直觉,直觉就会滑回 AI 腔/错文体/旧素材。
> 修复方式和 YouTube 一样:**把"写"变成"推导"**。查表 + 硬扫描 + 学习环,而不是即兴。
> Owner: Claude(全权运营,Gary 2026-06-10 授权)。每次做社媒文案先读本文件 + 相关 `LEARNINGS.md`。

---

## 0. 目标链(第一性原理,和 YouTube 同一条)

> 对的内容 → reach 对的人(认真的日内/期货交易者;funded/prop 是最锋利的核心买家)→ 建立信任(**可信 = 像真人、像权威,不像广告/AI**)→ 带到 meridianpsi.com → 转化成 Meridian 用户 / founding user。

**每篇文案服务这条链,但每篇站在不同的一环。** 写之前先问:这一篇在链条哪一环?(置顶帖=理解+信任;评论=reach+信任;founding 帖=转化……)→ 查 `reddit/ops/ARTIFACTS.md`。

可信是这条链里最贵的货币。一句像广告或像 AI 的话,可信归零,整条链断。所以**反 AI 扫描是硬闸,不是建议。**

---

## 1. 分层模型(每件事住在哪,改哪一层)

从源头解决不打补丁:症状(某篇文案不对)→ 找是哪一层缺了或错了 → 改那一层,不是改这一篇。

| 层 | 文件 | 管什么 | 类比 YouTube |
|---|---|---|---|
| **0 事实** | `../../MERIDIAN.md` | 产品到底是什么(版本/价/功能/级名/隐私) | MERIDIAN.md |
| **1 定位** | `brand/POSITIONING.md` | 我们说什么、对谁说(超集/thesis/买家/三层信息栈)。**写前必读,绝不从旧帖起稿** | RESEARCH 简报 + 目标链 |
| **1 声音** | `brand/VOICE.md` | 读起来像什么 + **AI 腔图鉴**(逐句扫的硬闸) | STYLE.md 手艺层 |
| **2 平台策略** | `reddit/ops/PLAYBOOK.md` | Reddit 的打法/节奏/安全/为什么留人手发 | PLAYBOOK.md |
| **3 文体** | `reddit/ops/ARTIFACTS.md` | 每种内容的目标/读者/register/结构/范例(**查表第一步**) | STYLE §9.5 决策表 |
| **4 学习** | `reddit/ops/LEARNINGS.md` | 每次纠正 → 一条永久规则(session 开始读) | LEARNINGS.md |
| 范例 | `voice-samples.md` | 过了三闸的好样本库 | 素材库 |
| 状态 | `reddit/ops/queue.md` / `log.md` | 待发队列 / 已发台账 | output 记录 |

---

## 2. ★ 写作循环(THE WRITE LOOP)— 把"写"变成"推导"

> 任何一篇对外文案,走这 7 步。这是防止返工的核心机制。跳步 = 滑回直觉 = 返工。

```
0. 定向   读本文件(目标链)+ 相关 LEARNINGS。  [session 开始一次]
1. 归类   这是什么文体? → 查 ARTIFACTS.md 表。表里没有 → 先在表里定义它。
2. 取简报 读 POSITIONING.md(当前定位)+ MERIDIAN.md(要用到的事实)。
          ⛔ 绝不从某个旧帖/旧文案起稿——旧的带着死定位。
3. 取规格 从 ARTIFACTS 拿这文体的:目标 / 读者+心态 / register / 结构(section-role 序列) / 长度 / do-don't / 范例。
4. 起草   按规格写。讲问题的段像人,讲功能的段临床(由 section-role 推导)。
5. 过三闸 [硬闸,不可跳]
          a. AI 腔扫描:逐句过 VOICE.md §2 图鉴,零命中。(脑子里读出声,问"这是人在说话还是 AI 在表演")
          b. 合规闸:VOICE.md §3,零命中。
          c. 事实闸:每个产品事实可追溯 MERIDIAN.md。
          + register 闸:和 ARTIFACTS 对应行的范例并排读,声音一致吗?
6. 入列   写进 queue.md(目标 URL + 粘哪 + 成品)。push 给 Gary。
7. 学习   走 §6 学习闭环:把这次的纠正 / Gary 的写作 捕获成永久规则,回灌对应层。
          这样同一个错不会犯第二次。
```

**两类闸,别混:**
- **硬闸**(第 5 步三条 + register):不过不发,无例外。等同 YouTube 的"hook 必 SHOW + 引用必核验"。
- **软推导**(register/结构/长度):由 ARTIFACTS 按文体给默认,读起来对就行,内容可在不破坏文体目标下微调。

---

## 3. 谁发(政策决定的,不是流程偏好)

我做全部脑力 + 生产(0-5 步 + 入列 + 学习)。**对外发送的最后一步由 Gary 粘贴**(每天≤5 分钟)。原因是 Reddit 政策(全自动账号必须打 App 标签、与创始人真人账号互斥;自动私信是封号项)——详见 `reddit/ops/PLAYBOOK.md`"为什么不是全自动"。这不是审核门(我不需要他逐条批),是政策要求的那双手。

---

## 4. 文档索引(全集,别再翻散落的旧文件)

**读的顺序(做一篇时):** 本文件 → POSITIONING → ARTIFACTS(定位文体)→ VOICE(写 + 扫)→ 需要时 MERIDIAN/PLAYBOOK。

- `CONTENT-SYSTEM.md`(本文件)— 总入口、目标链、写作循环、索引
- `brand/POSITIONING.md` — 当前定位简报(写前必读)
- `brand/VOICE.md` — 声音 + AI 腔图鉴(三闸)
- `reddit/ops/ARTIFACTS.md` — 文体决策表
- `reddit/ops/COMMENT-ANATOMY.md` — 高信任评论的解剖模板(回复怎么写的逐项规格 + 80/20 删除测试 + 具体性闸)
- `reddit/ops/PLAYBOOK.md` — Reddit 策略/节奏/安全/三阶段
- `reddit/ops/LEARNINGS.md` — 教训库(session 开始读)
- `reddit/ops/queue.md` / `log.md` — 队列 / 台账
- `reddit/pinned-start-here.md` — 置顶帖(也是 pinned-intro 文体的范例)
- `voice-samples.md` — 评论范例库(注意"勿模仿"标注)
- `../../MERIDIAN.md` — 产品事实唯一来源

**已降级为指针(别再当真理源):** `writing-rules.md`(并入 `brand/VOICE.md`)。
**已归档到 `docs/archive/`(别照着复活,见 `docs/archive/README.md`):** `dm-templates.md`、`outreach-strategy.md`、`welcome-email-template.md`(冷外联 2026-06-09 已停)、`automation-pipeline.md`、`video-framework.md`、`leonardo-prompts.md`、`youtube-scripts/`(视频已移 `Company/YouTube/pipeline/`)。

---

## 6. ★ 学习闭环(系统怎么变好)

> 这是 Gary 问的:系统会不会从"给我的反馈"和"我自己写的东西"学。
> **诚实的前提:我是跨 session 无状态的,"学习"不可能是改权重。它只能是 = 结构化外部记忆 + 可靠的捕获 + 可靠的召回 + 定期提炼。** 召回是天生最弱的一环(下面有缓解)。一条学习只有进了硬闸或被可靠召回,才算真学到;躺在日志里没人读 = 没学到。

### 两个输入源

**A. 我收到的纠正/反馈**(Gary 否掉/改我的稿、口头指出)
→ 立刻写进 `reddit/ops/LEARNINGS.md`(日期·症状·根因·永久规则·改了哪层)。

**B. ★ Gary 自己写的东西**(他改我的稿、自己写一段评论/邮件、甩来一个他喜欢的样本)——**最高信号,他在直接示范目标声音**。程序(extraction):
1. 当作金样本,不是一次性。
2. **Diff 意图**:他做了什么我不会做的?和我的稿差在哪?
3. **归类**这条教训:VOICE(怎么写)/ POSITIONING(说什么)/ ARTIFACTS(文体-register)/ 事实。
4. **回灌**:在对应那一层加/改规则;干净的样本贴进 `voice-samples.md` 的"★ Gary 的真实写作"区。
5. **登记**:LEARNINGS 记一条,触发写"Gary 写/改了 X"。
6. **冲突时他赢**:他的写法和现有规则矛盾 → 改规则(他是声音的所有者),不是劝他。
   (procedure 细节见 `brand/VOICE.md §7`。)

### 四个环节(缺一不可)
- **捕获**:A 走 step 7,B 走上面 extraction。**铁律:每次 Gary 给反馈或写东西,当场捕获,不留到"以后"**——以后=蒸发。
- **提炼**:每攒 ~5 条 LEARNINGS,或每开一个新内容冲刺前,跑一次 consolidation:把反复出现的纠正压成 VOICE 的病征 / ARTIFACTS 的行 / POSITIONING 的句 / 金样本,然后把原始条目标记 "distilled"。(类比 memory consolidation。)一堆未提炼的日志不是学习。
- **召回**(最弱):缓解 = ①把最重要的学习做成**硬闸里的一条**(AI 腔图鉴),硬闸每篇必扫,想忘都忘不掉;②`MEMORY.md` 里有指针 memory(做社媒先读本系统 + LEARNINGS),会自动浮现;③本文件 step 0 写死"session 开始读 LEARNINGS"。**真理:别指望召回松散的笔记——把高价值学习升级成被强制执行的规则。**
- **强制**:学到的东西,优先级 = 进硬闸 > 进 ARTIFACTS/POSITIONING 规格 > 进 LEARNINGS 笔记。越往上越不会被忘。

### 可选:强制捕获(hook)
若要让"捕获"不靠我自觉,可在 `settings.json` 配一个 Stop hook:本回合若动过 `social/` 文件,收尾时提示"是否有该写进 LEARNINGS 的纠正?"。这是把软纪律变成硬提醒。默认没配(怕噪音);Gary 说要我就配。

---

## 5. 跨平台说明(为什么放在 social/ 而不是 reddit/)

`brand/`(POSITIONING + VOICE)是**跨平台**的:Reddit、X、IG、邮件、partner 内容都从这里取定位和声音。
`reddit/ops/`(ARTIFACTS + PLAYBOOK + LEARNINGS)是 **Reddit 专属**的。
将来开 X/IG 的严肃运营时:复制 `reddit/ops/` 的结构建 `x/ops/`(自己的 ARTIFACTS/PLAYBOOK/LEARNINGS),但共用 `brand/`。**别给每个平台重写定位和声音——那是 1 份,不是 N 份。**
