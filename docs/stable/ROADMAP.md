# Roadmap — SmartShopCA.ca

> **Current Phase:** Phase 0 (Build Core)
> **Current Version:** v0.1.0

---

## Phase 0 — Build Core (Now → Week 2)

**Goal:** Site scaffolded, deployed, affiliate accounts applied.

### Your Tasks (Manual)

- [x] Register domain — smartshopca.ca (C$15.99/year)
- [x] Consolidated plan document created (PLAN.md)
- [x] Documentation structure adopted (docs/, memory/, CLAUDE.md, CLAUDE_CONTEXT.md)
- [ ] Create Vercel account → connect to GitHub repo → deploy
- [ ] Apply for affiliate programs:
  - [ ] Best Buy Canada
  - [ ] Newegg Canada
  - [ ] Amazon.ca Associates
  - [ ] MaxBounty (requires phone interview — apply ASAP)
- [ ] Sign up for Kit (ConvertKit) — free up to 10,000 subscribers
  - [ ] Create form: "SmartShopCA Spring 2026 Deals"
  - [ ] Get API key and Form ID
  - [ ] Create 3-email welcome sequence
- [ ] Provide Kit API key + Form ID to Claude Code
- [ ] Set up Google Search Console (verify via Vercel DNS)
- [ ] Set up affiliate tracking spreadsheet

### Claude Code Tasks

- [x] Initialize git repo + .gitignore (Day 1)
- [x] Scaffold Next.js 14 project (App Router, TypeScript, Tailwind CSS) (Day 1)
- [x] Build TypeScript interfaces (types/index.ts) (Day 1)
- [x] Build campaign config (config/campaigns.ts) (Day 1)
- [x] Build components: (Day 1)
  - [x] DealCard
  - [x] OutboundLink
  - [x] JsonLd
  - [x] SeasonBanner
  - [x] CollectionGrid
  - [x] ComparisonTable
  - [x] FAQBlock
  - [x] EmailCapture
- [x] Build page templates: (Day 1)
  - [x] Homepage (/)
  - [x] Season page (/[season])
  - [x] Guide page (/guides/[slug])
  - [x] About page (/about)
- [x] Build click tracker API route (/api/track-click) (Day 1)
- [x] Create 5 seed products (MDX) (Day 1)
- [x] Create 1 seed collection (MDX) (Day 1)
- [x] Deploy to Vercel — www.smartshopca.ca live (Day 1)

---

## Phase 1 — Q2 Campaign Live (Weeks 3–6)

**Goal:** First real campaign live, first emails collected, first affiliate clicks tracked.

- [ ] Q2_2026_SPRING_WFH collection published (5–7 home office picks)
- [ ] Lead magnet PDF: "Canadian WFH Setup Guide — Spring 2026"
- [ ] FB ad campaign ($5–$10/day CAD)
- [ ] Ad → landing page → email capture → ConvertKit sequence
- [ ] Weekly click analysis — kill low performers, double down on winners
- [ ] Enrich Product schema (brand, image, sku, url, description) — from Multi-LLM Research
- [ ] Ensure visible HTML is structured for AI parsing (not just JSON-LD) — from Multi-LLM Research
- [ ] Add author attribution to content pages (E-E-A-T signal) — from Multi-LLM Research
- [ ] Lead magnet PDF: seasonal deals guide — from Multi-LLM Research

**KPI:** 200 email subscribers

---

## Phase 2 — Q3 Back-to-School (Weeks 7–14)

**Goal:** Rotate campaign, deepen content, add financial product layer.

- [ ] Q3_2026_BTS collection (back-to-school monitors, laptops, chairs)
- [ ] Financial product page (credit card for back-to-school tech in Canada)
- [ ] 3–5 evergreen guides published
- [ ] Pre-publish checklist enforced on every page
- [ ] Re-engagement email campaign for Phase 1 subscribers
- [ ] Province-level landing pages (Ontario, BC, Alberta) — from Multi-LLM Research
- [ ] Content calendar tied to seasonal events — from Multi-LLM Research
- [ ] Additional affiliate networks: Rakuten (Walmart CA), CJ (Indigo, Lowe's) — from Multi-LLM Research
- [ ] Skimlinks as auto-affiliate option — from Multi-LLM Research

**KPI:** First affiliate commissions earned

---

## Phase 3 — Q4 Boxing Day (Weeks 15–22)

**Goal:** Best season. Deploy everything learned.

- [ ] Q4_2026_BOXING collection (electronics, monitors, home office)
- [ ] Dedicated Boxing Day / Black Friday pages
- [ ] Email burst campaign (early picks 3 days before Dec 26)
- [ ] Increased FB ad budget around Black Friday + Boxing Day
- [ ] Financial product CPA push (holiday spending angle)

**KPI:** $500–$1,000/month revenue in December

---

## Phase 4 — Q1 2027 (Optimization)

**Goal:** Stop building, start optimizing. Quarterly content swaps.

- [ ] Analyze merchant EPC (earnings per click) — kill low performers
- [ ] French bilingual layer (top 3 pages for Quebec audience)
- [ ] Apply for Mediavine/Raptive display ads
- [ ] Email list health review (open rates, click rates, prune)

**KPI:** Consistent $2K/month

---

## Multi-LLM Research Synthesis (Day 2)

> Full research: `docs/Research/Multi_LLM_Research_1.md`
> Sources: GPT-4, Grok — cross-validated against GEO/AEO literature, arXiv papers, 2025-2026 industry guides

### What's VERIFIED (we're on the right track)

| Strategy | Verdict | Status in SmartShopCA |
|:--|:--|:--|
| 3–7 curated picks per scenario | VERIFIED | Built — CollectionGrid caps at 7 |
| "Choose this if / Avoid this if" framing | VERIFIED (30–40% GEO visibility lift) | Built — chooseIf/avoidIf in every product MDX |
| JSON-LD schema (Product, ItemList, FAQPage) | VERIFIED for traditional SEO + Google AI Overviews | Built — JsonLd component on all pages |
| Diversified affiliate stack (not Amazon-only) | VERIFIED | Architecture supports it — awaiting real links |
| Email-first growth strategy | VERIFIED (organic search declining for niche sites) | Built — EmailCapture on all content pages |
| Answer-first format (TL;DR + direct answers) | VERIFIED | Built — TL;DR blocks on content pages |
| FAQ sections targeting real queries | VERIFIED | Built — FAQBlock component with schema |
| Province-level pages ("National → Province → City") | VERIFIED for Canadian local relevance | Planned for Phase 2 |

### Key Correction: JSON-LD Is Not Enough

**MISLEADING claim corrected:** Current AI chatbots (ChatGPT, Claude, Perplexity) parse **visible HTML**, not JSON-LD, when browsing. JSON-LD helps Google AI Overviews + Bing Copilot, but for direct AI citation:
- Visible HTML must be equally structured (H2/H3 hierarchy, `<ul>/<li>` for pros/cons)
- "Choose this if" must be in a distinct element, not buried in paragraphs
- Comparison tables must be in `<table>` elements, not just visual grids

**Action:** Audit all components to ensure visible HTML is machine-readable (tracked in MASTER_AUDIT_FRAMEWORK Category 3 + Category 8).

### Product Schema Enrichment Needed

Current Product schema is basic (name + price). Research says each Product needs:
- `brand`, `image`, `sku`, `url`, `description` (all sources agree)
- `aggregateRating` (only when real reviews exist — no fabrication)
- Full `Offer` object with `availability`, `priceCurrency: "CAD"`

**Action:** Enrich JsonLd component and Product type — Phase 1 task.

### New Roadmap Items From Research

**Phase 1 additions:**
- [ ] Enrich Product schema (brand, image, sku, url, description fields)
- [ ] Ensure visible HTML is structured for AI parsing (not just JSON-LD)
- [ ] Lead magnet PDF: seasonal deals guide (verified tactic for email capture)
- [ ] Author attribution on content pages (E-E-A-T signal)

**Phase 2 additions:**
- [ ] Province-level landing pages (Ontario, BC, Alberta — verified architecture)
- [ ] Content calendar tied to seasonal events (quarterly rotation framework)
- [ ] Additional affiliate networks: Rakuten (Walmart CA), Impact (Best Buy CA), CJ (Indigo, Lowe's)
- [ ] Skimlinks as auto-affiliate option for content-heavy pages

### What Grok Flagged (Tech Stack Debate)

Grok recommended Wix/Squarespace for beginners instead of Next.js. **Our decision: keep Next.js.** Reasons:
- Developer has code ownership goals (not a drag-and-drop user)
- Next.js gives full control over schema, SSG/ISR, and component architecture
- Already scaffolded and deployed — switching cost > benefit
- Custom click tracking and campaign system would be harder on no-code platforms

This is documented as a conscious trade-off, not an oversight.

---

## Version Log

| Version | Date | Summary |
|:--|:--|:--|
| v0.0.0 | 2026-03-25 | Project setup, docs structure adopted |
| v0.1.0 | 2026-03-25 | Full scaffold: Next.js 14, 8 components, 4 pages, API route, 5 seed products, build passing |
| v0.1.1 | 2026-03-26 | Multi-LLM Research synthesis, Master Audit Framework (8 categories), Golden Rules R22-R24 added |
