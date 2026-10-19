# SmartShopCA.ca — Master Session Guide

> **Last Updated:** 2026-10-19 (Day 13 — recovery, session close and reopen)
> **Current Version:** Next.js 16.4.2 / React 19.3.1; live/GitHub baseline `49c152f` verified October 19. Approved logo/team titles, About review, preferred tagline, canonical/search metadata and brand assets are local only, not committed/pushed/deployed. No release tag or manual deployment.
> **Active Campaign:** None in the redesigned experience; seasonal collections are preparing. Legacy Q2 config is retained but archive routes no longer promote it.

> **Service decision — October 19:** GoDaddy domain, Vercel website, Namecheap selected for business email (purchase/setup not yet confirmed), Kit for later subscriptions. Launch recommended; founder screenshot quotes C$0 first month then C$21.07/year, indicative display rather than a paid expense. Supersedes the older Zoho plan. Contact flag stays false until receive/reply verification. Canonical service record: `docs/stable/SERVICE_PROVIDERS.md`.

> **Later email setup update:** Launch trial confirmed October 19–November 19, 2026; annual auto-renew enabled, zero mailboxes created. GoDaddy nameservers verified publicly; no MX/SPF answers observed. DNS, mailbox creation, DKIM/DMARC and receive/reply tests remain pending. No paid charge or working inbox asserted. This supersedes purchase-unconfirmed wording above.

> **Competitor research — October 19:** Completed `docs/Research/COMPETITOR_STUDY_2026-10-19.md` and interactive `COMPETITOR_BRIEFING_2026-10-19.html`: 18 services mapped, 14 multi-page inspections and four limited-access/watchlist profiles. Four competitor homepages visually inspected at two widths. Material finding: origin evidence, ingredient comparison, Canadian catalogues, AI connectors and supplier-fulfilled marketplaces already have examples; narrower decision quality remains an unvalidated differentiation hypothesis. Made by Canadians' public MCP metadata responds; tools/data quality not tested. No pivot, new feature scope, product evidence change, website code, account, contact, commit, push or deployment authorized/performed by this research.

> **External strategy synthesis — October 19:** All three supplied returns preserved separately (Perplexity attribution provisional; Gemini program identifiers redacted). Current assessment: `docs/Research/STRATEGY_SYNTHESIS_2026-10-19.md`. Founder requested substantive dropshipping research; `DROPSHIPPING_FEASIBILITY_2026-10-19.md` checks supplier fulfilment, wholesale/POD/private-label distinctions, costs/returns and both pillars. Recommendation is parallel supplier qualification and one completed comparison, not an adopted affiliate-only plan or store launch. No qualifying supplier/SKU, accepted terms or demand established. Direct HTTP checks returned 200 for home/face/Privacy, contradicting the unsupported Gemini outage claim. No app/roadmap change, outreach, account, spend, application, commit, push or deployment.

> **Latest application-page pass (October 19):** More polished homepage and dedicated disclosure/contact/partnership pages now implemented locally, with shared navigation and ten-URL sitemap. Lint/build (24 static entries)/26 tests pass; 36 browser states across nine routes and four widths pass, plus twelve built-route link/canonical checks. Verified inbox, completed relevant product research and an authorized live release remain readiness gaps. No application, account, commit, push or deployment in this pass. See `docs/Research/AFFILIATE_APPLICATION_WEBSITE_PASS_2026-10-19.md`.

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

**SmartShopCA.ca** is a Canada-first product-discovery and shopping business in development. It currently publishes research previews and is preparing applications for affiliate programs and dropshipping supplier partnerships. No approved partner/supplier arrangement, checkout or fulfilment is established. Its role is to help readers understand worthwhile products through useful comparisons, sources and visible gaps.

Preferred brand line: **Canadian products. Clearer choices.** Supporting message: **Worthwhile products. Clearer information. A Canadian perspective.** Ownership, manufacturing and availability remain distinct; the brand line/maple logo does not certify the origin of every product. See brand architecture for current scope.

The umbrella brand has two distinct initial editorial pillars:

1. **Seasonal Canadian favourites** — well-reviewed boutique or distinctive products Canadians prefer for a specific season or use case.
2. **Canadian-made personal care and household products** — skincare and categories such as laundry detergent and dishwashing liquid, explained through transparent, category-specific ingredient screening. Founder approved this broader scope on 2026-10-14; skincare is selected first, with separate face and body moisturizer comparisons. No blanket non-toxic, non-allergenic, or endocrine-disruptor-free guarantees.

The pillars share brand trust, infrastructure, affiliate disclosure, analytics, and email systems, but keep separate routes, editorial methods, product attributes, evidence standards, and subscriber interests. See `docs/stable/BRAND_ARCHITECTURE.md`.

- **NOT** a coupon aggregator
- **NOT** a price comparison engine
- **NOT** an Amazon storefront
- **NOT** an undifferentiated catalog mixing unrelated products
- **NOT** a medical-advice or absolute ingredient-safety service

**Intended revenue model:** Disclosed affiliate referrals and a planned supplier-fulfilled shop; actual terms, margins and arrangements remain to establish. Email audience development is planned, not connected. Amazon.ca is supplementary only.

**Revenue target:** $2,000 CAD/month within 9–12 months.

---

## Architecture

```
Framework:  Next.js 16.4.2 (App Router, TypeScript, SSG/ISR)
Styling:    Tailwind CSS
Content:    Typed editorial skincare records + retained legacy MDX
Deploy:     Vercel (current account plan UNKNOWN)
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
| Founder | CONFIRMED; ABOUT ONLY | Founder-approved biography remains on About. October 19 preference: other pages use SmartShopCA attribution; no repeated personal name/location in homepage/footer/comparison copy or comparison schema. Implemented locally, not deployed |
| Human team | APPROVED TITLES; LOCAL COPY | Balaji Kothandaraman — Founder & Product Lead; Sathyadevi — Co-founder & Research Contributor. Participation/consent confirmed October 19. Both are founders in About schema; titles match visible copy. Comparisons say "Research by the SmartShopCA team". No historical individual-review claim; names stay on About. Human contributors differ from AI persona lenses/agents |
| Skincare evidence | RESEARCH HOLDS | Four candidates across two comparisons, dated sources/prices and explicit gaps; no complete screening passes or purchase CTAs |
| Email | UNAVAILABLE HONESTLY | Homepage has no signup form locally or in October 19 live responses; privacy route returns 200. Kit server integration missing. October 18 fake-success finding is historical, superseded by deployment 49c152f |
| Affiliates | RESEARCHED, NONE ACTIVE | Application-readiness research saved; no application or acceptance asserted |
| Contact | NAMECHEAP LAUNCH TRIAL; INBOX PENDING | Trial October 19–November 19; annual auto-renew enabled. Zero mailboxes; GoDaddy DNS activation/mail authentication and receive/reply tests pending; see SERVICE_PROVIDERS.md |
| Tracking | BEST-EFFORT LOGGING | Real anchors navigate independently; API contract preserved; durable reporting missing |
| Build/tests | PASS LOCALLY | Latest application-page build reports 24 static entries; TypeScript, lint and 26 tests pass |
| Browser checks | PASS LOCALLY | Latest finishing pass: 14 routes at four widths (56 states), then four final homepage/About checks; overflow, overlap, keyboard and axe pass. Earlier expanded/fragment checks remain dated evidence; no full conformance/performance claim |
| Claude UX round 2 | INTEGRATED LOCALLY | Key differences precede product cards; default test script runs all 26 tests; upgraded root passes 64 browser states and 12 fragment checks |
| Lint | PASS LOCALLY | ESLint 10 flat config; Core Web Vitals/TypeScript checks, zero warnings; run separately from build |
| Local app port | FIXED 3300 | Cross-project/Notion/listener scan completed October 16; start/dev/production scripts agree; busy port fails rather than auto-switching |
| Git/deployment | MAIN PUSHED; REDESIGN LIVE | October 19 normal push verified `49c152f` on remote main; Vercel commit status reports successful deployment. Public homepage shows "Fewer products, clearer reasons to choose.", privacy/face routes return 200 and homepage has no email form. Older history review resolved without exclusion/rewrite. Approved logo changes and unrelated drafts remain local |
| Logo/search assets | LOCAL FINISHING PASS | Approved PNG shared in header/footer; preferred tagline separate from logo. Added adapted vector browser icon, generated OG image, ten-URL sitemap, robots route and www canonical defaults. Draft/archive noindex retained. Not pushed/deployed; deployment environment override must be checked |
| Supplier-fulfilled retail | RESEARCHED; NO ACCEPTED SUPPLIER | Public routes, costs/returns and limitations saved in DROPSHIPPING_FEASIBILITY_2026-10-19.md; no store launch or supplier contract |
| Business validation | PRE-LAUNCH | Community feedback first, interviews optional; buyer focus, evidence, pilot budget/date and conversion remain to validate |
| Governance | LOCAL | Six working lenses, two project skills and one new product_evidence_monitor custom definition; no live research pilot or active recurring schedule |

Full initial integration result: `docs/status/SMARTSHOPCA_HANDOFF_INTEGRATION_2026-10-14.md`. Latest state: `docs/status/PROJECT_STATUS_DAY13_SHORT.md`; finishing plan: `docs/status/WEBSITE_FINISHING_PLAN_2026-10-19.md`. The strategy snapshot remains a dated October 18 handoff, not current deployment state.

---

## Known Issues

> Latest issue snapshot: `docs/versioned/KNOWN_ISSUES_DAY13.md`. Latest state: `docs/status/PROJECT_STATUS_DAY13_SHORT.md`. Local finishing changes are not deployed.

| ID | Severity | Description |
|:--|:--|:--|
| KI-003 | MEDIUM / planned | Real signup integration absent; no form/fake success in inspected October 19 live homepage |
| KI-004 | HIGH / application | Active approved tracked destinations not established; held candidates expose no buying buttons |
| KI-005 | MEDIUM | Search Console account/verification/indexing UNKNOWN; not a verified zero-traffic claim |
| KI-007 | MEDIUM | Accurate permitted product photos not integrated |
| KI-008 | DEFERRED | Legacy guide/campaigns archived; genuine seasonal collections remain in preparation |
| KI-009 | APPROPRIATE FOR PREVIEW | WebPage/BreadcrumbList avoid unsupported offers/ratings; homepage WebSite schema added locally |
| KI-010 | LOCAL CHECKS PASS | Responsive/keyboard/automated-accessibility evidence exists; not full conformance or measured performance |
| KI-011 | LOCAL UPDATE | Team titles/About/claim edits prepared; legal exposure cannot be guaranteed eliminated by persona review |
| KI-013 | HIGH / contact | Business inbox unverified; public corrections/partnership contact absent |
| KI-014 | PARTIAL | Both distinct pillars are live; email preferences/backend are not operational |
| KI-015 | LIVE BASELINE REPLACED | October 19 redesign serves real privacy/preview routes without the fake homepage signup. Further content and application readiness remain unfinished |
| KI-016 | LOCAL CHECKS PASS | Lint/build/26 tests pass; no blanket accessibility/security clearance |
| KI-017 | PARTIAL | Live/GitHub baseline is 49c152f; later finishing changes remain local and unpublished |

**Resolved Day 1:** KI-001 (git repo), KI-002 (Vercel deployed), KI-006 (.gitignore)
**Resolved Day 5:** KI-012 (`/privacy` page implemented and linked in footer)

**Tracking note:** The 13 historical issues retain their IDs; local mitigations above do not imply that the live deployment is fixed.

---

## Session Log

**October 19 checkpoint:** Competitor study/visual briefing, three preserved external returns, combined source-checked synthesis and substantive dropshipping feasibility are saved. Namecheap trial state reconciled. Documentation checks pass; earlier application lint/build/26 tests remain dated evidence, not rerun for docs-only work. Working tree retained; no new commit/push/deploy. Resume handoff: `docs/status/SESSION_CHECKPOINT_2026-10-19.md`.

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
| Day 13 | 2026-10-19 | Completed history review, normal push to 49c152f and verified automatic Vercel deployment. Then designed/locally integrated approved logo, team attribution and profiles; exact titles confirmed. Business direction clarified as preparing affiliate/dropshipping applications. First finishing pass updates About/brand/metadata/privacy, icon/share image/robots/sitemap; lint/build/26 tests and 56+4 browser states pass. Later changes remain local; inbox/product evidence/supplier work unfinished. |

---

## Next Session Priorities

**Recovery close/reopen — October 19:** Founder requested closing and reopening after an accidental window/app closure. Existing checkpoint, research files and website work remain on disk. Antigravity's inspected project chat index was empty; the interrupted transcript was not recovered. Recapped the Perplexity/Grok/Gemini competitor, monetization and dropshipping research without adopting a new strategy. This close saves lifecycle documents in a local commit only; application changes, research originals and unrelated drafts remain in the working tree. No push/deployment, supplier outreach or server lifecycle action. `git diff --check` and checkpoint links checked; earlier app results remain dated, not rerun. Reopen from the checkpoint and prepare the supplier matrix when substantive work resumes.

**Resume here — session checkpoint, October 19:** Read `docs/status/SESSION_CHECKPOINT_2026-10-19.md` first, then the combined strategy synthesis and dropshipping feasibility reports linked there. All three external returns are saved. Founder explicitly keeps affiliate AND supplier-fulfilled retail in scope; supplier qualification is proposed alongside a finished care comparison, not an approved store launch. Next agent task: make a small supplier qualification matrix from existing research (two care brand leads and one seasonal lead), showing exact products, individual-order fulfilment, origin/formula evidence, CAD cost, shipping/returns and UNKNOWNs. Do not repeat the whole competitor study or build checkout. Founder-side dependency: complete Namecheap DNS/mailbox and receive/reply verification; trial is already confirmed. Review the proposed sequence with the founder before material website changes. Preserve both pillars, separate face/body comparisons, product holds and unpublished user work. Main/live baseline remains 49c152f; newer website/docs are local. No new commit/push/deployment in this checkpoint.

**Name/co-founder correction and future option — 2026-10-19:** User corrected the public name to **Sathyadevi** and confirmed she is a co-founder. Updated local config/About schema to name both co-founders, with Sathyadevi also Research Contributor. She begins participating October 19; no implication she reviewed older product pages. User also stated the business may become a dropshipping platform in future. Recorded as a future option in brand architecture/roadmap, not a current merchant claim, approved store build or change to the two pillars. Public positioning remains a Canadian buying guide. No commit/push/deploy; this supersedes earlier Sathya Devi/sole-founder wording.

**Approved human team — 2026-10-19:** Founder confirmed Sathya Devi starts participating today and is comfortable joining; then approved the discussed wording. Implemented "Research by the SmartShopCA team" with `/about#team` links; About introduces the two people in early team cards, using approved biographies and Research Contributor role. Homepage has no byline, footer is generic with an About our team link. About metadata lists the real members; comparison author remains the SmartShopCA Organization. Only About review date advanced to October 19; both product comparison dates remain October 14, and product data files exactly match HEAD. Fresh lint/build pass; 16 generated HTML pages checked (personal names only on About), 12 browser states at 320/375/768/1440 pass overflow, logo/menu overlap and axe checks; keyboard menu/home-link checks pass. No employer/contact/private resume material copied. No commit/push/deploy; preserve unrelated drafts. See `docs/status/TEAM_IDENTITY_2026-10-19.md`. This supersedes the earlier single-contributor restriction below. Discuss substantive positioning/copy proposals with the founder before implementing them; their approval of this draft authorizes these specific changes.

**Publication-first attribution — 2026-10-19:** Founder requested generic branding throughout the site and personal background only on About. Local homepage and comparison bylines now attribute SmartShopCA; footer uses generic publication wording. Comparison WebPage schema author is the SmartShopCA Organization with an About link, matching visible attribution. Founder biography/About metadata remains. No invented team. Fresh lint/build pass; all 16 generated HTML documents checked, personal name/location appears only in About, and both comparison authors/review dates verified. This and approved logo changes remain uncommitted/unpublished; preserve unrelated drafts. Do not restore repeated personal bylines based on older trust/SEO notes.

**Approved logo — 2026-10-19:** Founder accepted refined version 2. Integrated the preserved transparent PNG in shared header/footer with an accessible home link and mobile spacing; supporting line is separate footer text. Lint/build pass; eight local browser states across 320/375/768/1440 pass overflow, overlap and axe checks; keyboard menu/home link checked. See `docs/brand/2026-10-19/REFINEMENT_V2.md`. No logo commit/push/deploy. The previous authorized GitHub push did succeed at `49c152f`, Vercel automatically deployed it and public homepage/privacy/face URLs were verified. October 18 live-site findings below are historical, not current production status.

**Push authorized — 2026-10-19:** Following the completed history review and public-repository disclosure, user instructed "ok push ahead to git". Commit the review/state notes and perform a normal push of main, preserving uncommitted drafts. No force push or history rewrite. Vercel may automatically deploy from GitHub; verify the remote and public routes rather than assuming success. The separate paused-state proposal has not been implemented.

**History review — 2026-10-19 (supersedes the history hold below):** All 25 older ask-classified paths reviewed, including nine screenshots and four ZIPs. Fresh heuristic scan covers 611 text versions; no credential candidates found. No mandatory exclusion established; founder age references in five documents are optional minimization. The March memory snapshot has no founder profile, and the May privacy commit has no flagged paths. Public GitHub API verifies the repository is public, so a push shares documents/history as well as code. No history rewrite, push or deployment performed. See `docs/status/UNPUBLISHED_HISTORY_REVIEW_2026-10-19.md`. The separate live safety proposal and deployment-source/trigger checks remain pending; the acknowledgement to review files is not approval to publish.

**Day 12 approval gate — 2026-10-18 (historical):** User approved committing confident files only. Five logical commits saved 56 inventoried changed paths; ask/ignore files were not added and the earlier four commits were not rewritten. Lint/build/26 tests passed October 18. Read-only live audit confirmed Spring Setup 2026, five placeholder buying destinations, simulated signup success and `/privacy` 404; new care/robots/sitemap routes 404. Deployed SHA, account metrics, current billing and deployment trigger settings UNKNOWN. Strategy snapshot and audit are in `docs/status/`. Proposed minimum safety intervention is hide signup/placeholder CTAs plus paused/noindex; no safety implementation or deployment performed. The then-unreviewed history and possible automatic Vercel deployment deferred push. History-review results above narrow that concern; no force push or silent history rewrite.

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
