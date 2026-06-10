# Reddit — Meridian Social Docs

**Subreddit:** [r/MeridianPSI](https://www.reddit.com/r/MeridianPSI/)  
**Purpose:** Community hub, product education, and warm traffic to [meridianpsi.com](https://www.meridianpsi.com).

This folder holds **subreddit-specific** canonical content. General Reddit reply voice and past samples live elsewhere (see below).

---

## Files in this folder

| File | Role |
|------|------|
| **`ops/PLAYBOOK.md`** | **每次跑的标准流程。** Claude 全职运营 Reddit 的 SOP：目标 sub、打分、扫帖→起草→审核→发帖步骤、硬规则、通道现状。被叫起来先读这个。 |
| **`ops/queue.md`** | 当前候选队列。Gary 审核区。 |
| **`ops/log.md`** | 已发记录 + 待 followup + 去重台账。 |
| **`pinned-start-here.md`** | Canonical text for the **pinned** “Start Here: What is Meridian PSI?” post. Source of truth for r/MeridianPSI onboarding copy. |
| **`instructions.md`** | How to write for Reddit (workflow, platform rules, link to voice guide). |

---

## Related docs (not in this folder)

| Path | Role |
|------|------|
| **`Web/social/voice-samples.md`** | Archive of **approved Reddit replies** (May 2026 batch + template). Add new thread replies here after approval. |
| **`Web/.cursor/rules/social-voice.mdc`** | **Voice & tone** for Reddit, Twitter, forums; r/Daytrading strict rules; reply generation workflow (analyze → draft CN → approve → EN → append to voice-samples). |
| **`Web/social/writing-rules.md`** | Anti-AI / anti-ban rules (em dash, structure). Platform section is sparse — Reddit specifics are in `social-voice.mdc`. |
| **`Web/social/video-framework.md`** | YouTube → Reddit repurpose strategy. |
| **`Web/social/automation-pipeline.md`** | Weekly metrics include Reddit comments/upvotes. |
| **`Web/social/youtube-scripts/*.md`** | Some scripts include a “Reddit followup” section after publish. |
| **`MERIDIAN.md`** | Product facts (pricing, Guard L1–L5 names, compliance). If pinned post disagrees with product docs, decide which is intentional for Reddit vs update pinned. |

---

## There is no separate “weboutreach Reddit” doc

Partner outreach email strategy is **`Web/social/outreach-strategy.md`** + **`meridian-outreach/OUTREACH_RULES.md`**. That pipeline is Instantly/email, not subreddit posts.

---

## Update protocol

1. Edit **`pinned-start-here.md`** when the pinned post changes; bump `last_updated` in frontmatter.
2. New **comment replies** on other subreddits: follow workflow in `social-voice.mdc` → append to `voice-samples.md`.
3. If product facts change (pricing, Guard levels), check **`MERIDIAN.md`** and align pinned post or add a “Reddit simplification” note in pinned frontmatter.
