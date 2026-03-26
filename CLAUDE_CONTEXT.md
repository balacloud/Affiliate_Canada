# SmartShopCA.ca — Master Session Guide

> **Last Updated:** 2026-03-26 (Day 2 — research synthesis, audit framework, golden rules updated)
> **Current Version:** v0.1.1 (research + audit framework added)
> **Active Campaign:** Q2_2026_SPRING

---

## Session Startup Checklist

Every session MUST follow this order:

1. Read this file (`CLAUDE_CONTEXT.md`) — current state, known issues, next priorities
2. Read `docs/stable/GOLDEN_RULES.md` — constraints + process rules
3. Read `docs/stable/ROADMAP.md` — phase status, done vs pending
4. Read `docs/status/PROJECT_STATUS_DAY{latest}_SHORT.md` — last session summary (check Session Log below for latest day number)
5. Read `docs/versioned/KNOWN_ISSUES_DAY{latest}.md` — open issues (same day number as step 4)
6. Read `docs/stable/TECH_SPEC.md` — only if touching components, data models, or API
7. Read `PLAN.md` — only if you need the full consolidated vision/spec (e.g., first scaffold session)

After reading, state: current version, current day's top priority, any blockers.
Then ask: "What would you like to focus on today?"

---

## Session Close Checklist

At every session end, update the following:

1. `CLAUDE_CONTEXT.md` — Last Updated, Current State table, Known Issues summary, Session Log, Next Session Priorities
2. `docs/versioned/KNOWN_ISSUES_DAY{N}.md` — new file for the session, mark resolved, add new
3. `docs/stable/ROADMAP.md` — tick completed items, update version log
4. `docs/status/PROJECT_STATUS_DAY{N}_SHORT.md` — new status snapshot
5. `docs/stable/TECH_SPEC.md` — if any component or data model changed
6. `docs/stable/GOLDEN_RULES.md` — if new rule learned
7. `memory/MEMORY.md` — update if project-level learnings
8. Git commit (skip if no git repo initialized — see KI-001)

---

## What This System Is

**SmartShopCA.ca** is a Canada-specific, quarterly seasonal buying-guide and deals website for the Canadian remote worker / home-office niche. It is a **decision helper, not deal spam** — 3–7 curated picks per scenario, opinionated recommendations, AI-search-friendly structured content.

- **NOT** a coupon aggregator
- **NOT** a price comparison engine
- **NOT** an Amazon storefront

**Revenue model:** Diversified affiliate stack (Best Buy CA, Newegg, MaxBounty, financial CPA) + email list. Amazon.ca is supplementary only.

**Revenue target:** $2,000 CAD/month within 9–12 months.

---

## Architecture

```
Framework:  Next.js 14+ (App Router, TypeScript, SSG/ISR)
Styling:    Tailwind CSS
Content:    MDX files in /content (products, collections, guides)
Deploy:     Vercel (free tier)
Email:      ConvertKit (Kit) via API
Analytics:  Vercel Analytics + custom click tracker
Schema:     JSON-LD components (Product, ItemList, FAQPage)
```

### Funnel

```
[FB Ad] → [Landing Page] → [Email Capture] → [ConvertKit Sequence] → [Site Pages] → [Affiliate Links]
```

Email is the spine. SEO and AI search citations build on top over time.

---

## Current State

| Area | Status | Notes |
|:--|:--|:--|
| Domain | smartshopca.ca registered | Needs Vercel connection |
| Documentation | DONE | CLAUDE.md, CLAUDE_CONTEXT.md, README.md, all docs/ files |
| Git repo | DONE | Initialized, .gitignore in place |
| Next.js project | DONE | Next.js 14.2, App Router, TypeScript, Tailwind CSS |
| TypeScript interfaces | DONE | types/index.ts — Product, Merchant, Collection, ClickEvent, FAQ, Campaign |
| Components | DONE (8/8) | DealCard, OutboundLink, JsonLd, SeasonBanner, CollectionGrid, ComparisonTable, FAQBlock, EmailCapture |
| Pages | DONE (4/4) | Homepage, Season, Guide, About |
| API routes | DONE | /api/track-click — logs clicks, returns { success: true } |
| Campaign config | DONE | config/campaigns.ts — 4 seasons, ACTIVE_CAMPAIGN = Q2_2026_SPRING |
| Seed content | DONE | 5 products + 1 collection in /content/ |
| Build | PASSING | `next build` — 11 pages generated, 0 errors |
| Vercel deploy | DONE | www.smartshopca.ca — Production, auto-deploys from main |
| ConvertKit | NOT STARTED | EmailCapture has placeholder — needs API key (blocked on user) |
| Affiliate accounts | NOT STARTED | Product links are placeholders (blocked on user) |
| Google Search Console | NOT STARTED | Needs Vercel DNS verification (blocked on user) |

---

## Known Issues

> Full details: `docs/versioned/KNOWN_ISSUES_DAY2.md`

| ID | Severity | Description |
|:--|:--|:--|
| KI-003 | MEDIUM | No ConvertKit account — EmailCapture is placeholder (blocked on user) |
| KI-004 | LOW | Affiliate accounts not yet applied — product links are placeholders (blocked on user) |
| KI-005 | LOW | Google Search Console not set up (blocked on user) |
| KI-007 | LOW | Seed product images are empty — no product photos yet |
| KI-008 | LOW | Guide pages use hardcoded data — need MDX content loading in Phase 1 |
| KI-009 | HIGH | Product schema basic (name+price) — needs brand, image, sku, url, description |
| KI-010 | HIGH | Visible HTML not optimized for AI parsing — needs structured elements |
| KI-011 | MEDIUM | No author attribution on content pages (E-E-A-T) |
| KI-012 | LOW | No privacy policy page (PIPEDA requirement) |

**Resolved Day 1:** KI-001 (git repo), KI-002 (Vercel deployed), KI-006 (.gitignore)

**Summary:** 0 CRITICAL, 2 HIGH, 2 MEDIUM, 5 LOW (9 total)

---

## Session Log

| Day | Date | Summary |
|:--|:--|:--|
| Day 0 | 2026-03-25 | Project setup: consolidated plan, adopted docs structure from options-iq |
| Day 1 | 2026-03-25 | Full scaffold: git init, Next.js 14, 8 components, 4 pages, API route, 5 seed products + 1 collection. Build passing. GitHub pushed, Vercel deployed, DNS configured — www.smartshopca.ca live. |
| Day 2 | 2026-03-26 | Multi-LLM Research reviewed + synthesized. Master Audit Framework created (8 categories). Golden Rules updated with 3 new research-backed rules (R22-R24). Roadmap updated with research findings + new Phase 1/2 items. |

---

## Next Session Priorities (Day 3)

> See `docs/stable/ROADMAP.md` → Phase 0/1 items.

- **P1:** Enrich Product schema (brand, image, sku, url, description) — research-validated
- **P1:** Ensure visible HTML is structured for AI parsing (audit Category 3/8)
- **P1:** Add author attribution to content pages (E-E-A-T — Rule 22)
- **P1:** User provides ConvertKit API key → wire up EmailCapture
- **P1:** Add product images to seed data (KI-007)
- **P2:** Build MDX content loading for guides (KI-008)
- **P2:** Add deals/[slug] individual product pages
- **P3:** Run first full audit using MASTER_AUDIT_FRAMEWORK
