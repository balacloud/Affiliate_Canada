# SmartShopCA.ca — Master Session Guide

> **Last Updated:** 2026-10-15 (Day 8 close — local redesign checkpoint; Claude UX round 2 verified separately)
> **Current Version:** Day 8 local checkpoint, Next.js 14.2.35; no new release tag or deployment. Claude UX round 2 is not integrated.
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
Framework:  Next.js 14+ (App Router, TypeScript, SSG/ISR)
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
| Email | DISABLED HONESTLY | Topic/consent UI exists; Kit subscription server action missing, no simulated success |
| Affiliates | RESEARCHED, NONE ACTIVE | Application-readiness research saved; no application or acceptance asserted |
| Contact | UNCONFIRMED | Inbox must be set up/tested before displaying a contact address |
| Tracking | BEST-EFFORT LOGGING | Real anchors navigate independently; API contract preserved; durable reporting missing |
| Build/tests | PASS LOCALLY | Build generates 18 static pages; 14 meaningful editorial tests pass |
| Browser checks | PASS LOCALLY | Nine routes at three widths, keyboard menu, links/states/schema/archive/API checks; no automated axe violations |
| Claude UX round 2 | VERIFIED, NOT INTEGRATED | 26 tests and 52 browser states pass in a temporary copy; root app still has 14 tests and the initial design. Move Key differences before product cards during integration |
| Lint | NOT ESTABLISHED | Interactive setup still requires non-interactive configuration |
| Git/deployment | LOCAL CHECKPOINT | Initial redesign/checkpoint saved locally; unrelated research/prototype work preserved separately. No push/deploy. October 15 live check still showed original home-office homepage |
| Business validation | PRE-LAUNCH | Community feedback first, interviews optional; buyer focus, evidence, pilot budget/date and conversion remain to validate |
| Governance | LOCAL | Repo agent/session/research instructions present; research monitoring schedule not configured |

Full initial integration result: `docs/status/SMARTSHOPCA_HANDOFF_INTEGRATION_2026-10-14.md`. Latest close and exact resume task: `docs/status/PROJECT_STATUS_DAY8_SHORT.md`.

---

## Known Issues

> Latest issue snapshot: `docs/versioned/KNOWN_ISSUES_DAY8.md`. Latest close: `docs/status/PROJECT_STATUS_DAY8_SHORT.md`. Local mitigations do not imply a production fix.

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
| KI-016 | MEDIUM | 14 editorial tests now pass locally; non-interactive lint remains missing |
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

---

## Next Session Priorities

**RESUME HERE — Day 8 close (2026-10-15):** Integrate `docs/Claude_Design_Handoff/New_oct12_2026_2pm/smartshopca-ux-revision-r2.zip` (19 source/test files, complete change set relative to supplied baseline). It has NOT been copied into the working app. Read the adjacent `VERIFICATION_R2.md`, preserve originals and unrelated changes, move Key differences above product cards and reorder on-page links/comments. Include `tests/fragment-readiness.test.cjs` in the normal test command. Run root build, all 26 tests and affected browser checks after merging; then update preview if requested. Next separate task: supported Next.js upgrade. Do not ask the founder to repeat this context or send a third design round for the reorder.

**Verification separation:** root `npm run build` + 14 tests passed on October 15 at close. The 26 tests/52 browser states refer to the isolated R2 candidate, not the root app or deployed site. Live checks on October 15 found old homepage, skincare URL 404, robots/sitemap 404 and apex redirect to www. No public citation/indexing or actual account billing evidence obtained.

**Claude Design handoff location (2026-10-15):** Founder requires future briefs/baseline ZIPs/returned outputs under `docs/Claude_Design_Handoff/`, organized by dated task. See its README. Current outgoing UX revision is in `2026-10-15_UX_Revision/`; its brief and verified source ZIP moved from Research. Awaiting Claude output; no UX implementation from this revision yet.

**Persona routing (2026-10-15):** `AGENTS.md` now routes tasks through `docs/stable/PERSONA_ROUTER.md`: one lead plus applicable evidence, UX, technical and retrieval checks. Role definitions/customer hypotheses are in `docs/Research/SMARTSHOPCA_ROLE_PACK_DRAFT_2026-10-15.md`. This is assistant instruction routing, not a background service or separate agents; no runtime implementation or empirical routing evaluation claimed.

**Latest completed work (2026-10-14):** Imported `docs/smartshopca-handoff.zip` into the existing Next.js app, reviewed it against the design brief and founder-approved copy, corrected tracking/gates/claims, archived stale routes and verified local build, tests and browser behavior. No commit, push, deployment, outreach, application or spending occurred.

**Header direction (2026-10-14):** Founder supplied a Banana Republic navigation reference. Local header now puts the brand/utility links above a dedicated two-column category bar. Seasonal and personal-care/household links remain visible at phone widths as well as desktop. Build passed; deployment remains unchanged.

1. Resolve exact-product manufacturing/formula gaps and finish a documented ingredient-identification review for the separate face/body comparisons. Keep unresolved candidates held. Community listening informs purchase questions; interviews are optional.
2. Confirm and test the business inbox, then expose contact/corrections details.
3. Connect Kit through a real server-side subscription action with topic preferences, consent, confirmation and provider failure handling; update privacy in the same change. Never put credentials into tracked files.
4. Review the useful original website/content against the researched brand-program criteria, then prepare truthful affiliate applications. No application submission is authorized yet; acceptance is not guaranteed by design.
5. Establish durable click reporting and a non-interactive lint configuration. Keep the existing passing editorial tests.
6. Complete pre-publish review, reconcile changes with Git and deploy only with explicit user authorization; verify the live routes after deployment. Historical pre-publish templates contain tech/finance assumptions that need category-specific review.

**Preserved decisions:** one umbrella brand, two visible pillars; skincare first with both face/body; household later with separate methods; grounded founder story; no absolute safety claims; no fabricated reviews/testing/affiliate membership; outside-LLM research prompt when a research gap cannot be completed here (Golden Rule 28).

**Reference handoffs/research:** `docs/HANDOFF.md` is Claude's supplied handoff, not deployment evidence. Design brief/addendum, approved About draft, affiliate readiness, community listening and moisturizer research remain in `docs/Research/`. Earlier documents describing these routes as proposed or the category as undecided are historical and superseded by the decisions above.
