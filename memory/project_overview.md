---
name: SmartShopCA Project Overview
description: Core project context — what SmartShopCA.ca is, current phase, and key decisions
type: project
---

SmartShopCA.ca is a Canada-specific seasonal affiliate deals site for the Canadian WFH/home-office niche. Decision helper, not deal spam. 3–7 curated picks per scenario.

**Why:** Diversified affiliate revenue ($2K CAD/month target) via email-first growth, not SEO-dependent.

**How to apply:** Every build decision should prioritize: email capture, affiliate link transparency, JSON-LD schema, and the "less choice" behavioral design principle. Amazon.ca is always secondary. The documentation structure mirrors the options-iq project pattern (CLAUDE.md → CLAUDE_CONTEXT.md → docs/stable + Research + status + versioned).

Current phase: Phase 0 complete → entering Phase 1. Site is live at www.smartshopca.ca (Next.js 14, Vercel, v0.1.1).

**Key platform decisions:**
- Email: MailerLite (not ConvertKit — too expensive for Day 0). Free up to 1,000 subs, good automation.
- Logo: Text-based SVG component first (can swap to designed logo later, no code changes needed).
- Stack: Next.js 14 (kept over Wix/Squarespace — developer has code ownership goals).

**Blocked on user:** Apply for affiliate programs (Best Buy CA, Newegg, Amazon.ca, MaxBounty), sign up for MailerLite and share API key + form ID.
