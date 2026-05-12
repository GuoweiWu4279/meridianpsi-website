# Meridian — AI 素材生成指南
**Version 2.0 — May 2026**

---

## 核心思维方式

**第一步：我想表达什么？**
**第二步：最有效呈现这个意思的方式是什么？**（可以是任何东西——真实照片、插画、图表、实拍、动画）
**第三步：微调，让它符合我们的品牌色调。**

不要反过来。不要先想"我们的风格是什么"，再去硬套内容。

---

## 模型选择

| 需求 | 模型 | 说明 |
|---|---|---|
| 需要带**精准文字**的图（信息图、流程图、对比图） | **GPT-Image-2.0** | 唯一能准确生成文字的模型 |
| 需要**高质量动态视频**（最重要的场景） | **Seedance 2.0** | 最贵，每条视频最多用1次 |
| 需要**普通动态视频** | **LTX 2.3 Fast** | 每条视频最多用4次 |
| 需要**静态插图/概念图**（无文字） | **Phoenix / Flux** | 最便宜，配合 CapCut Ken Burns |

---

## 品牌色彩参考（微调时用，不是限制）

```
深色背景：  #0D1117
主文字：    #F8FAFC
品牌绿：    #10B981  （安全、正面）
警告橙：    #F59E0B  （压力、注意）
危险红：    #EF4444  （爆仓、危机）
```

这些颜色是**参考**，不是强制。如果某个场景用暖色调更有效，用暖色调。

---

## GPT-Image-2.0 使用建议

**适合场景：**
- 需要文字标注的图（流程图、对比表、PSI解释图）
- 需要观众"读"而不只是"看"的内容

**Prompt 写法：**
直接描述你想要的图的内容和感觉就好，不需要死板的格式。
GPT-Image-2.0 理解自然语言，越清楚描述内容，出来越准确。

**基础收尾语（每次加在 prompt 末尾）：**
> Aesthetic: Dark slate background. Clean, sharp vector lines. High contrast for readability but using soft muted colors (e.g., sage green and deep terracotta red) instead of glowing neon. No blur, no haze, no unnecessary text. The visual logic must be instantly understandable. Include very minimal, elegant graphic details to emphasize the core concept, but keep it highly professional.

---

## Phoenix / Flux 使用建议

**适合场景：**
- 情感性的、氛围性的画面（开头 hook、比喻场景）
- 不需要文字的纯视觉素材

**Prompt 写法：**
描述你想要的**场景和感觉**，然后加上收尾语。
可以生成真实的人、真实的场景、抽象的概念——任何都行。

**基础收尾语（每次加在 prompt 末尾）：**
> Aesthetic: Dark, moody, premium cinematic quality. Use muted and sophisticated colors. Clean composition with generous padding. 16:9 ratio.

---

## 信用效率

1. 先生成静态图，看效果满意再考虑生成视频版本
2. 单条视频：Seedance 2.0 最多1个，LTX 最多4个，GPT-Image-2.0 图片不限
3. 通用素材可以跨视频复用，保存到 `video-assets/shared/`

---

*Last updated: May 2026.*
