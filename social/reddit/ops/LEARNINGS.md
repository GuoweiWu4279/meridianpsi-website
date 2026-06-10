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

## L0 — 元教训:现象 vs 系统(2026-06-10,Gary 点出)
反复纠正同一类错(文案不对)是**现象**;**问题是没有像 YouTube pipeline 那样的严谨系统**。修复不是写得更小心,是建系统让文案变成"查表推导 + 硬扫描 + 学习环"。这套系统(CONTENT-SYSTEM / POSITIONING / VOICE / ARTIFACTS / LEARNINGS)就是这次的产物。**以后再出现"反复纠正同一类东西",先问:是哪一层缺了?补那一层,别再靠小心。**

---

## (以下留给未来:帖子数据反馈)
发出去的帖/评论的表现(赞、回复质量、转化、被删/被踩)→ 哪类角度/开头/文体有效 → 记这里,反哺 ARTIFACTS 和打分标准。暂空,等真实数据。
