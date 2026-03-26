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

**KPI:** 200 email subscribers

---

## Phase 2 — Q3 Back-to-School (Weeks 7–14)

**Goal:** Rotate campaign, deepen content, add financial product layer.

- [ ] Q3_2026_BTS collection (back-to-school monitors, laptops, chairs)
- [ ] Financial product page (credit card for back-to-school tech in Canada)
- [ ] 3–5 evergreen guides published
- [ ] Pre-publish checklist enforced on every page
- [ ] Re-engagement email campaign for Phase 1 subscribers

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

## Version Log

| Version | Date | Summary |
|:--|:--|:--|
| v0.0.0 | 2026-03-25 | Project setup, docs structure adopted |
| v0.1.0 | 2026-03-25 | Full scaffold: Next.js 14, 8 components, 4 pages, API route, 5 seed products, build passing |
