# SmartShopCA.ca — Master Session Guide

> **Last Updated:** 2026-10-18 (Day 12 — approved local commits and live-site strategy audit)
> **Current Version:** Day 12 local checkpoint, Next.js 16.4.2 / React 19.3.1; approved UX/runtime/tooling/monitor files committed. No push, release tag or deployment.
> **Active Campaign:** None in the redesigned experience; seasonal collections are preparing. Legacy Q2 config is retained but archive routes no longer promote it.

---

## Session Startup Checklist

This file remains the primary session-state document for the project.

Agent note:

- keep the filename `CLAUDE_CONTEXT.md` for continuity
- use it as the canonical session guide even when the active coding agent is Codex
- repository-wide agent instructions live in `AGENTS.md`
- the repository-local Codex lifecycle skill lives in `.codex/skills/smartshopca-session/SKILL.md`
- also read `docs/stable/SESSION_START_CHECKLIST.md` for the neutral startup flow

Every session MUST follow this order:

1. Read `AGENTS.md` — repository-wide boundaries and context routing
2. Read this file (`CLAUDE_CONTEXT.md`) — current state, known issues, next priorities
3. Read `docs/stable/GOLDEN_RULES.md` and `docs/stable/ROADMAP.md`
4. Read the latest matching files in `docs/status/` and `docs/versioned/`
5. Read `docs/stable/BRAND_ARCHITECTURE.md` for positioning, navigation, taxonomy, or pillar work
6. Read `docs/stable/TECH_SPEC.md` for routes, components, data models, or APIs
7. Treat `PLAN.md` as the original plan; it predates the multi-pillar direction

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
8. Git commit when the user requested a commit, save, checkpoint, or session close; never push or deploy without explicit authorization

---

## What This System Is

**SmartShopCA.ca** is a Canada-first, multi-affiliate discovery platform. It helps Canadians find fantastic products through small, trustworthy, opinionated shortlists. It is a **decision helper, not deal spam**.

The umbrella brand has two distinct initial editorial pillars:

1. **Seasonal Canadian favourites** — well-reviewed boutique or distinctive products Canadians prefer for a specific season or use case.
2. **Canadian-made personal care and household products** — skincare and categories such as laundry detergent and dishwashing liquid, explained through transparent, category-specific ingredient screening. Founder approved this broader scope on 2026-10-14; skincare is selected first, with separate face and body moisturizer comparisons. No blanket non-toxic, non-allergenic, or endocrine-disruptor-free guarantees.

The pillars share brand trust, infrastructure, affiliate disclosure, analytics, and email systems, but keep separate routes, editorial methods, product attributes, evidence standards, and subscriber interests. See `docs/stable/BRAND_ARCHITECTURE.md`.

- **NOT** a coupon aggregator
- **NOT** a price comparison engine
- **NOT** an Amazon storefront
- **NOT** an undifferentiated catalog mixing unrelated products
- **NOT** a medical-advice or absolute ingredient-safety service

**Revenue model:** Transparent affiliate relationships across Canadian merchants and direct brand programs plus an email audience. Amazon.ca is supplementary only.

**Revenue target:** $2,000 CAD/month within 9–12 months.

---

## Architecture

```
Framework:  Next.js 16.4.2 (App Router, TypeScript, SSG/ISR)
Styling:    Tailwind CSS
Content:    Typed editorial skincare records + retained legacy MDX
Deploy:     Vercel (free tier)
Email:      Kit intended; no server integration, forms disabled
Analytics:  Best-effort custom click logging; durable reporting absent
Schema:     Research previews: WebPage/BreadcrumbList; no product offers
Pillars:    Seasonal favourites + Canadian-made personal care and household
```

### Funnel

```
[Discovery/Ad] → [Pillar Landing Page] → [Email Preference] → [Kit Sequence] → [Decision Guide] → [Affiliate Link]
```

Email is the spine. SEO and AI search citations build on top over time.

---

## Current State

| Area | Status | Notes |
|:--|:--|:--|
| Brand architecture | IMPLEMENTED LOCALLY | One SmartShopCA brand; seasonal and care have distinct homepage entries, navigation/routes and readiness |
| Launch scope | SELECTED | Skincare first; face and body moisturizers in separate comparisons; household later |
| Local pages | VERIFIED | Nine editorial routes, founder About, methodology/privacy and archived legacy URLs |
| Founder | CONFIRMED BY USER | Balaji Kothandaraman, Kitchener, father of two, 18+ years technical delivery/data integrity; relevant approved copy integrated |
| Skincare evidence | RESEARCH HOLDS | Four candidates across two comparisons, dated sources/prices and explicit gaps; no complete screening passes or purchase CTAs |
| Email | LOCAL UNAVAILABLE; LIVE FAKE SUCCESS | Local form-free notice retained; live October 18 handler logs input and simulates success, with privacy URL 404. No provider/account metrics verified |
| Affiliates | RESEARCHED, NONE ACTIVE | Application-readiness research saved; no application or acceptance asserted |
| Contact | UNCONFIRMED | Inbox must be set up/tested before displaying a contact address |
| Tracking | BEST-EFFORT LOGGING | Real anchors navigate independently; API contract preserved; durable reporting missing |
| Build/tests | PASS LOCALLY | Next.js 16 build reports 17 static entries; all editorial/archive routes retained; all 26 tests pass |
| Browser checks | PASS LOCALLY | 14 routes at four widths plus 8 expanded states; 12 fragment checks, section order, keyboard menu, links/schema/archive/API pass; no automated axe violations |
| Claude UX round 2 | INTEGRATED LOCALLY | Key differences precede product cards; default test script runs all 26 tests; upgraded root passes 64 browser states and 12 fragment checks |
| Lint | PASS LOCALLY | ESLint 10 flat config; Core Web Vitals/TypeScript checks, zero warnings; run separately from build |
| Local app port | FIXED 3300 | Cross-project/Notion/listener scan completed October 16; start/dev/production scripts agree; busy port fails rather than auto-switching |
| Git/deployment | APPROVED FILES COMMITTED LOCALLY | Five logical commits save 56 approved changed paths; audit/snapshot recorded separately. Ask/ignore drafts and prior flagged history remain unresolved. No push/deploy. October 18 live check still shows original spring homepage |
| Business validation | PRE-LAUNCH | Community feedback first, interviews optional; buyer focus, evidence, pilot budget/date and conversion remain to validate |
| Governance | LOCAL | Six working lenses, two project skills and one new product_evidence_monitor custom definition; no live research pilot or active recurring schedule |

Full initial integration result: `docs/status/SMARTSHOPCA_HANDOFF_INTEGRATION_2026-10-14.md`. Latest state and next tasks: `docs/status/PROJECT_STATUS_DAY12_SHORT.md`; concise strategist handoff: `docs/status/STRATEGY_SNAPSHOT.md`.

---

## Known Issues

> Latest issue snapshot: `docs/versioned/KNOWN_ISSUES_DAY12.md`. Latest state: `docs/status/PROJECT_STATUS_DAY12_SHORT.md`. Local mitigations do not imply a production fix.

| ID | Severity | Description |
|:--|:--|:--|
| KI-003 | HIGH | Local fake-success flow removed; Kit integration still missing, forms disabled |
| KI-004 | HIGH | No active affiliate programs; held skincare candidates expose no purchase buttons |
| KI-005 | LOW | Google Search Console not set up (blocked on user) |
| KI-007 | LOW | Seed product images are empty — no product photos yet |
| KI-008 | LOW | Guide pages use hardcoded data — need MDX content loading in Phase 1 |
| KI-009 | HIGH | Legacy offer schema removed from served archive pages; publish schema only with supported product evidence |
| KI-010 | HIGH | Local redesign uses semantic headings/tables; public deployment remains unverified |
| KI-011 | MEDIUM | Local founder bylines/About implemented; deployment remains unverified |
| KI-013 | LOW | `hello@smartshopca.ca` business email setup is unconfirmed |
| KI-014 | HIGH | Local two-pillar architecture implemented; deployment and real email preferences remain pending |
| KI-015 | CRITICAL | Local legacy routes archived and stale commerce removed; live deployment not checked/replaced, do not drive traffic yet |
| KI-016 | MEDIUM | 26 tests and non-interactive ESLint pass locally; full-browser accessibility limits remain |
| KI-017 | MEDIUM | Local, GitHub, Vercel, and canonical documentation states are not aligned |

**Resolved Day 1:** KI-001 (git repo), KI-002 (Vercel deployed), KI-006 (.gitignore)
**Resolved Day 5:** KI-012 (`/privacy` page implemented and linked in footer)

**Tracking note:** The 13 historical issues retain their IDs; local mitigations above do not imply that the live deployment is fixed.

---

## Session Log

| Day | Date | Summary |
|:--|:--|:--|
| Day 0 | 2026-03-25 | Project setup: consolidated plan, adopted docs structure from options-iq |
| Day 1 | 2026-03-25 | Full scaffold: git init, Next.js 14, 8 components, 4 pages, API route, 5 seed products + 1 collection. Build passing. GitHub pushed, Vercel deployed, DNS configured — www.smartshopca.ca live. |
| Day 2 | 2026-03-26 | Multi-LLM Research reviewed + synthesized. Master Audit Framework created (8 categories). Golden Rules updated with 3 new research-backed rules (R22-R24). Roadmap updated with research findings + new Phase 1/2 items. Decided: MailerLite over ConvertKit (cost). Text-based SVG logo planned for Day 3. |
| Day 3 | 2026-03-30 | Planning/strategy day. Kit (ConvertKit) free tier signed up — replaces MailerLite decision. Business email strategy decided: Zoho Mail free tier for `hello@smartshopca.ca`. No code changes. |
| Day 4 | 2026-05-09 | Codex reviewed the repo, verified build/runtime structure, documented implementation-vs-doc drift, added a formal transition handoff, added a neutral session-start checklist, and documented the niche thesis. No product code changes. |
| Day 5 | 2026-05-14 | Implemented `/privacy`, linked it from the global footer, verified the build still passes, and closed KI-012. |
| Day 6 | 2026-10-09 | Added Codex-native governance; clarified SmartShopCA as an umbrella brand with seasonal-favourites and clean-skincare pillars; documented campaign and deployment drift. |
| Day 7 | 2026-10-13–14 | Saved first-pass review, continuation handoff, customer-needs and generic SaaS prompts. Confirmed side-income-first, 14 hours/week, bootstrap constraints. Generic reports attributed to ChatGPT/Gemini; Perplexity supplied a prompt audit. No product changes or pivot approved. |
| Day 8 | 2026-10-14–15 | Initial two-pillar design integrated locally with grounded founder About and held face/body research; community/affiliate/hosting/exit research reviewed, role routing and design handoff convention saved. Claude UX round 1 had two reproduced bugs; round 2 passes 26 tests and 52 browser states in isolation but is NOT integrated. Root build/14 tests pass at close; no push/deploy. |
| Day 9 | 2026-10-15 | Integrated the 19-file UX R2 handoff, moved Key differences before product cards and enabled all 26 tests in the normal command. Merged build, 52 browser states and 12 fragment checks pass; all four candidate records unchanged. No commit, push or deploy. |
| Day 10 | 2026-10-15–16 | Upgraded Next.js 14.2.35 to 16.4.2, React to 19.3.1 and Node target/types to 22; migrated archive params and established ESLint 10. Build/lint/26 tests/clean lockfile install and 64 browser states/12 fragment checks pass. Remaining dependency audit findings documented. No commit, push or deploy. |
| Day 11 | 2026-10-16–17 | Explained Kit, mapped six working lenses/two customer hypotheses/two skills, defined a research-only custom monitor and created verified interactive HTML. Configuration syntax checked; no live evidence pilot or recurring task activation. No commit, push or deploy. |
| Day 12 | 2026-10-17–18 | Inventoried/scanned local/unpublished files; user approved confident files. Saved 56 changed paths in five logical commits, fresh lint/build/26 tests pass. Read-only live audit confirms stale spring commerce, placeholder destinations, fake signup and privacy 404. Strategy snapshot records UNKNOWN account/deploy metrics. Safety and prior-history approvals pending; no push/deploy. |

---

## Next Session Priorities

**Day 12 approval gate — 2026-10-18:** User approved committing confident files only. Five logical commits saved 56 inventoried changed paths; ask/ignore files were not added and the earlier four commits were not rewritten. Lint/build/26 tests freshly pass. Read-only live audit confirms Spring Setup 2026, five placeholder buying destinations, simulated signup success and `/privacy` 404; new care/robots/sitemap routes 404. Deployed SHA, account metrics, current billing and deployment trigger settings UNKNOWN. Strategy snapshot and audit are in `docs/status/`. Proposed minimum safety intervention is hide signup/placeholder CTAs plus paused/noindex; no safety implementation or deployment performed. Stop for that decision. Do not push: 25 ask-classified paths remain in older unpublished history, and an ordinary push may trigger Vercel deployment. No force push or silent history rewrite.

**Day 11 monitoring/map update (2026-10-17):** Created `docs/status/SMARTSHOPCA_PERSONA_AGENT_MAP_2026-10-16.html`, `docs/stable/PRODUCT_EVIDENCE_MONITOR.md` and `.codex/agents/product-evidence-monitor.toml` (agent name `product_evidence_monitor`). Six professional lenses and two customer hypotheses remain distinct from agents/skills. Custom definition parses; HTML checks pass at three widths. No live research pilot or active daily schedule; no claim of validated accuracy. Next monitoring step is a reviewable baseline run followed by the defined acceptance cases, then actual scheduler activation/verification. Suggested 09:00 America/Toronto cadence is only a proposal. Existing publication and dependency blockers remain. See Day 11 status.

**RESUME HERE — Day 10 framework upgrade (2026-10-16):** Root uses exact Next.js 16.4.2 / React 19.3.1, Node 22 and ESLint 10.12.0. Archive request params are async; TypeScript uses automatic JSX runtime. Build, lint, all 26 tests, clean lockfile installation, 64 browser states and 12 fragment checks pass. UX R2 ordering/holds retained. Remaining dependency advisories need a scoped follow-up; then resolve product evidence, contact/Kit and crawl/canonical release blockers. No commit, push or deployment. See `docs/status/PROJECT_STATUS_DAY10_SHORT.md` and the dated framework decision record.

**Verification separation:** Day 10 results apply to the upgraded root app; Next.js 16 reports 17 static entries, with all 14 editorial/archive URLs checked at four widths plus 8 expanded states. Earlier 18-page/52-state results are historical, not a lost-route finding. Production was not rechecked during this change; the last October 15 audit found old homepage, skincare URL 404 and robots/sitemap 404. No product-source/price refresh, public citation/indexing or account billing evidence obtained. Audit still reports 13 affected packages (7 high/6 moderate), production-only 4 moderate in legacy frontmatter dependencies; Next/React have no returned findings. Clean install emits legacy ESLint-plugin peer warnings but succeeds without force/legacy-peer-deps.

**Claude Design handoffs:** Original R2 archive and verification remain unchanged in `docs/Claude_Design_Handoff/New_oct12_2026_2pm/`. Future briefs/baselines/returns belong in dated folders under `docs/Claude_Design_Handoff/`; see its README. The October 15 UX revision is now integrated locally; no additional design return is needed for the section reorder.

**Persona routing (2026-10-15):** `AGENTS.md` now routes tasks through `docs/stable/PERSONA_ROUTER.md`: one lead plus applicable evidence, UX, technical and retrieval checks. Role definitions/customer hypotheses are in `docs/Research/SMARTSHOPCA_ROLE_PACK_DRAFT_2026-10-15.md`. The router remains assistant instruction routing, not a background service or evaluated classifier. Day 11 adds one separate custom evidence-monitor definition; it has not been live-piloted or scheduled.

**Latest completed work (2026-10-16):** Supported framework upgrade with async archive params, React/types/Node target, non-interactive ESLint and compatible transitive fixes. Preserved UX R2 and held product content; verified build/lint/tests/clean install/browser behavior. No commit, push, deployment, outreach, application or spending.

**Header direction (2026-10-14):** Founder supplied a Banana Republic navigation reference. Local header now puts the brand/utility links above a dedicated two-column category bar. Seasonal and personal-care/household links remain visible at phone widths as well as desktop. Build passed; deployment remains unchanged.

1. Resolve exact-product manufacturing/formula gaps and finish a documented ingredient-identification review for the separate face/body comparisons. Keep unresolved candidates held. Community listening informs purchase questions; interviews are optional.
2. Confirm and test the business inbox, then expose contact/corrections details.
3. Connect Kit through a real server-side subscription action with topic preferences, consent, confirmation and provider failure handling; update privacy in the same change. Never put credentials into tracked files.
4. Review the useful original website/content against the researched brand-program criteria, then prepare truthful affiliate applications. No application submission is authorized yet; acceptance is not guaranteed by design.
5. Establish durable click reporting and resolve the remaining dependency audit findings in a separate scoped change. Keep the passing non-interactive lint and editorial tests.
6. Complete pre-publish review, reconcile changes with Git and deploy only with explicit user authorization; verify the live routes after deployment. Historical pre-publish templates contain tech/finance assumptions that need category-specific review.

**Preserved decisions:** one umbrella brand, two visible pillars; skincare first with both face/body; household later with separate methods; grounded founder story; no absolute safety claims; no fabricated reviews/testing/affiliate membership; outside-LLM research prompt when a research gap cannot be completed here (Golden Rule 28).

**Reference handoffs/research:** `docs/HANDOFF.md` is Claude's supplied handoff, not deployment evidence. Design brief/addendum, approved About draft, affiliate readiness, community listening and moisturizer research remain in `docs/Research/`. Earlier documents describing these routes as proposed or the category as undecided are historical and superseded by the decisions above.
