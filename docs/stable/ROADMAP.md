# Roadmap — SmartShopCA.ca

> **Current Phase:** Product architecture reconciliation and launch readiness
> **Current Version:** Day 11 local working tree; Next.js 16.4.2 / React 19.3.1, UX R2 retained; no production release

---

## October 2026 Direction Reset

**Day 11 monitor/map — 2026-10-17:** Evidence-monitor operating profile and one custom agent definition created; six professional lenses and two existing skills mapped in interactive HTML. No daily schedule or live research pilot activated. See `docs/status/PROJECT_STATUS_DAY11_SHORT.md`.

- [x] Define report-only Product Evidence Monitor and visual persona/agent inventory
- [ ] Run/review initial evidence baseline and evaluate the specified failure cases
- [ ] Activate and verify a project-scoped daily task after the pilot; 09:00 Toronto is a proposed cadence

**Day 10 upgrade — 2026-10-16:** Next.js 16.4.2 / React 19.3.1, Node 22 target and ESLint 10 established locally. Build/lint/26 tests/clean install/64 browser states/12 fragment checks pass. Residual dependency advisories documented; no deployment. See `docs/status/PROJECT_STATUS_DAY10_SHORT.md`.

**Day 9 integration — 2026-10-15:** UX R2 merged locally with Key differences before product cards. Root build/26 tests/52 browser states/12 fragment checks pass; candidate records unchanged. No commit, push or deployment. See `docs/status/PROJECT_STATUS_DAY9_SHORT.md`.

**Day 8 close — 2026-10-15:** Initial app build and 14 tests pass. UX round 2 passes build/26 tests/52 browser states in isolation, including the two previous fragment-navigation failures. No production changes. See `docs/status/PROJECT_STATUS_DAY8_SHORT.md`.

- [x] Establish six working lenses and automatic task/persona routing in repository instructions
- [x] Establish dedicated dated Claude Design handoff folders and preserve returned artifacts
- [x] Independently verify Claude UX revision R2
- [x] Integrate R2, move Key differences above product cards, include new tests in normal script and verify merged app (Day 9)
- [x] Upgrade Next.js to a supported patched release as a separate verified change (Day 10)
- [ ] Resolve remaining legacy-parser and Tailwind/glob/selector dependency advisories in a scoped follow-up
- [ ] Resolve product-evidence/contact/email and crawler/canonical launch blockers before release

**Local integration — 2026-10-14:** Claude design/code imported and checked. Nine editorial pages and legacy archive states now work locally; build, 14 tests and 27 browser route/viewport checks passed. Email/contact/affiliates remain unconnected or unconfirmed; products remain research holds. No push or deployment. See `docs/status/SMARTSHOPCA_HANDOFF_INTEGRATION_2026-10-14.md`.

**Initial skincare scope — 2026-10-14:** both face and body moisturizers selected, with separate comparisons. No face-versus-body selection gate remains. See `docs/Research/SKINCARE_LAUNCH_READINESS_2026-10-14.md` for evidence, trust, integration and QA gaps before launch; seasonal remains a separate future pillar.

**First category — 2026-10-14:** skincare selected within Canadian-made personal care and household products. Face and body moisturizers are selected; next validate buyer questions and complete evidence; household categories follow only after separate validation. Reusable product research skill created; scheduled monitoring is not configured.

**Launch selection — 2026-10-14:** Canadian-made personal care and household products will be the first pillar. Select one category and buyer group, define evidence criteria, prepare a small comparison, repair website launch blockers, and test with actual buyers. Budget and timing remain pending. Seasonal favourites remains a distinct future pillar; older seasonal-first sequencing is superseded.

SmartShopCA is one Canada-first, multi-affiliate discovery brand with two separate initial pillars: seasonal Canadian favourites and Canadian-made personal care and household products. The second pillar's expanded scope was approved on 2026-10-14; validation starts with skincare, using separate face and body moisturizer comparisons. The older roadmap below records the original home-office scaffold and remains useful implementation history, but it is no longer the complete product direction.

- [x] Add repository-level `AGENTS.md` for Codex and compatible agents
- [x] Add repository-local SmartShopCA session skill
- [x] Document multi-pillar brand architecture and health-adjacent content boundaries
- [x] Implement shared homepage/navigation with separate `/seasonal` and `/care` pillars and `/care/skincare` categories (local handoff integration, 2026-10-14)
- [x] Add editorial models for pillar/readiness and sourced skincare candidates; retain legacy models separately
- [ ] Decide which legacy home-office content belongs in seasonal favourites
- [ ] Convert the skincare prototype into sourced, production-ready application content
- [x] Remove stale commerce from local homepage/legacy routes; legacy URLs now show archive notices (live deployment pending)
- [x] Add 14 passing editorial purchase-gate/outbound-contract tests
- [x] Configure non-interactive lint (Day 10); broader content validation remains future work
- [ ] Reconcile local, GitHub, Vercel, and canonical documentation state

---

## Historical seasonal-first plan (superseded sequencing)

The phases below preserve the original campaign plan and research claims; they are not the current launch schedule. The October direction reset and latest canonical context govern current work.

## Phase 0 — Build Core (original Weeks 1–2)

**Goal:** Site scaffolded, deployed, affiliate accounts applied.

### Your Tasks (Manual)

- [x] Register domain — smartshopca.ca (C$15.99/year)
- [x] Consolidated plan document created (PLAN.md)
- [x] Documentation structure adopted (docs/, memory/, CLAUDE.md, CLAUDE_CONTEXT.md)
- [x] Create Vercel account → connect to GitHub repo → deploy
- [ ] Apply for affiliate programs:
  - [ ] Best Buy Canada
  - [ ] Newegg Canada
  - [ ] Amazon.ca Associates
  - [ ] MaxBounty (requires phone interview — apply ASAP)
- [x] Sign up for **Kit (ConvertKit)** — free tier (up to 1,000 subscribers) — Day 3
  - [ ] Set up Zoho Mail → `hello@smartshopca.ca` (free, ~15 min)
  - [ ] Create form: "SmartShopCA Spring 2026 Deals"
  - [ ] Get API key and Form ID
  - [ ] Create 5-email welcome sequence (see Email Onboarding in Multi-LLM Research)
- [ ] Provide Kit API key + Form ID to implementation agent
- [ ] Set up Google Search Console (verify via Vercel DNS)
- [ ] Set up affiliate tracking spreadsheet

### Implementation Agent Tasks

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

- [x] Privacy policy page published at `/privacy` with footer link
- [ ] Q2_2026_SPRING_WFH collection published (5–7 home office picks)
- [ ] Lead magnet PDF: "Canadian WFH Setup Guide — Spring 2026"
- [ ] FB ad campaign ($5–$10/day CAD)
- [ ] Ad → landing page → email capture → Kit sequence
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
| v0.1.2 | 2026-05-09 | Codex transition documented, startup workflow neutralized, niche thesis added, stale roadmap wording corrected |
| v0.1.3 | 2026-05-14 | Privacy policy page added, footer updated, KI-012 resolved |
| v0.1.4 | 2026-10-09 | Codex-native governance and multi-pillar SmartShopCA direction documented |
| Day 8 checkpoint | 2026-10-15 | Initial two-pillar app saved locally; R2 UX verified but not integrated; no new release tag or deployment |
| Day 9 working tree | 2026-10-15 | R2 integrated with section reorder; build/26 tests/52 browser states/12 fragment checks pass; no commit or deployment |
| Day 10 working tree | 2026-10-16 | Next.js 16.4.2 / React 19.3.1; build/lint/26 tests/clean install/64 browser states pass; no commit or deployment |
