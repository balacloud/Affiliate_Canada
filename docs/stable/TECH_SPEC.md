# Technical Specification — SmartShopCA

> Updated 2026-10-16: describes the Day 10 local framework upgrade with Day 9 UX R2 retained. No new commit, push or deployment. Product boundaries: `BRAND_ARCHITECTURE.md`.

## Stack and rendering

Next.js 16.4.2 App Router, React 19.3.1, Node 22 target, strict TypeScript and Tailwind 3 CSS. Exact framework/React/lint versions are locked; `.nvmrc` selects Node 22 and verification used 22.17.0. Turbopack is the default build/dev bundler; its CSS worker needs a permitted local port. TypeScript uses ES2017 target, automatic JSX runtime and generated build/dev type includes. Public editorial pages are statically generated. The framework upgrade updates runtime/types/lint dependencies; it adds no external services. The shared layout provides a skip link, header, mobile navigation and footer. System serif/sans fonts avoid a remote-font dependency; ivory/ink foundations use rust for seasonal and sage for care.

The founder's retail-navigation reference is reflected in a two-row header: brand and utility links above, with two equal-width pillar links in a dedicated category bar below. Both pillar links remain visible on phones; the mobile menu includes methodology and About as well.

## Routes

Local development: SmartShopCA is assigned fixed port **3300**, checked against other projects under `/Users/balajik/projects`, the founder's Notion inventory and active listeners on October 16, 2026. Port 3200 belongs to Resume Builder. `./start.sh` runs a detached dev server at `http://127.0.0.1:3300`; `npm run dev` and `npm start` also use 3300. A busy port causes an explicit failure; no random port, incrementing fallback or termination of another listener. PID/start-time identity, URL and logs live in ignored `.local-run/`. `./stop.sh` stops only the recorded process after identity validation. Node 22 and installed dependencies are required. See `docs/Research/LOCAL_PORT_ASSIGNMENT_2026-10-16.md` for scan evidence. This supersedes the earlier automatic-port experiment.

| Route | Local behavior |
|:--|:--|
| `/` | Umbrella homepage with both separate pillar entry points |
| `/seasonal` | Seasonal Canadian favourites; collections being prepared |
| `/care` | Canadian-made personal care & household; skincare first, household later |
| `/care/skincare` | Separate face/body moisturizer entry points |
| `/care/skincare/face-moisturizers` | Sourced research preview; held candidates, no purchase CTAs, noindex |
| `/care/skincare/body-moisturizers` | Separate sourced research preview; held candidates, no purchase CTAs, noindex |
| `/methodology` | Origin evidence, ingredient identification, uncertainty and corrections |
| `/about` | Founder-approved biography, research approach, both pillars and disclosure |
| `/privacy` | Current data flows; disabled email and unconfirmed contact described truthfully |
| `/[season]` | Known legacy campaign URLs show archive notices and noindex; unknown slugs return 404 |
| `/guides/[slug]` | Known legacy guide shows archive notice and noindex; unknown slugs return 404 |
| `/api/track-click` | POST handler; required fields validated, console logging only |

The archive page components await Promise-based route params and still use generateStaticParams for known URLs; unknown slugs remain 404.

Legacy MDX, campaign config and `types/index.ts` are retained for history/compatibility. The expired `ACTIVE_CAMPAIGN` constant no longer drives the homepage or a current commerce page. No `/deals/[slug]` route is implemented.

## Configuration and content

- `config/site.ts`: pillar labels/routes/readiness, founder, canonical site origin, navigation and integration flags. `NEXT_PUBLIC_SITE_URL` overrides the fallback `https://smartshopca.ca`; confirm deployment canonical domain before publishing.
- `types/editorial.ts`: new editorial model, separate from legacy tech-deal types.
- `content/skincare/face-moisturizers.ts` and `body-moisturizers.ts`: exact variants, dated CAD price snapshots, pack units, origin/ingredient evidence, scent observations, shipping/returns, holds and source references.
- `lib/readiness.ts`: shared editorial status rule requires published status and no holds; distinct from merchant purchase eligibility.
- `lib/fragment.ts`: tolerates malformed fragments and resolves disclosure panels without throwing.
- `lib/format.ts`: CAD/date/pack formatting, separate per-100-mL and per-100-g calculations, and purchase eligibility. Never converts grams to millilitres.

Pillar IDs are `seasonal` and `care`. Readiness is `preparing`, `preview` or `published`. Care categories currently cover face/body moisturizers; household categories require their own evidence model and method before implementation.

A skincare candidate records origin statements with level, scope and source IDs; ingredient completeness and source IDs; exact variant; price/policy snapshot dates; practical trade-offs; status and hold reasons; merchant destination and affiliate status. A published status is an editorial decision, not a medical or safety certificate.

## Components and purchase boundary

`components/site/` contains the shared shell. `components/editorial/` contains breadcrumbs, bylines, pillar cards, readiness labels, disclosures and legacy notices. `components/skincare/` contains comparison views, semantic tables and candidate cards. `EvidenceLink` is an untracked source link. The comparison order is answer/holds → Key differences → compact product summaries → full evidence → supporting material. Differences use a semantic description list with exact-product accessible labels. `CandidateCard` uses native details panels with server-rendered evidence and always-visible holds; `SourceLinks` prints adjacent source links with each source’s own checked date. `OpenDetailsOnHash` opens panels on initial deep links, hash changes and repeated same-hash clicks/keyboard activation, without preventing native navigation.

`isPurchaseEligible` requires a published candidate, no holds, a real merchant destination, a sourced full published ingredient list, and sourced exact-variant origin evidence. Unconfirmed/conflicting origin blocks eligibility. Affiliate destinations additionally require an active program. Manual evidence review remains required; this gate does not scientifically validate ingredients or confirm the sources themselves.

All current candidates remain held. No Offer, Review or AggregateRating schema is emitted for research previews. New comparison schema describes WebPage/BreadcrumbList only. Draft comparison and legacy archive routes are noindex.

`OutboundLink` renders a real new-tab anchor. Best-effort beacon/fetch tracking never delays navigation or depends on popup opening. Affiliate links use `rel="sponsored noopener noreferrer"`; direct merchant links omit sponsored. Default visible labels disclose link kind. Custom labels need accompanying disclosure.

The tracker payload preserves `productId`, `merchantId`, `campaignId`, `pageSlug` and `affiliateLink`. Missing campaign/page values receive `EDITORIAL`/the current pathname. The API requires the first four fields and returns 200 with `{success:true}` for accepted events or 400 for missing/invalid requests. Logging is not durable analytics or proof of attribution; no database/reporting pipeline is installed.

## Email and contact

`EmailSignup` accepts an optional real subscription server action. The homepage requires both the configured flag and an actual action before showing a form; without them it renders the form-free `EmailUpdatesNotice`. The reusable component disables its controls without an action; no subscription is sent or stored. Topic preferences are seasonal, care or both; consent is not prechecked. The legacy `EmailCapture` delegates to this truthful unavailable state and no longer logs email or simulates success.

Future server integration must validate email, topic and consent, implement the provider request and actual confirmation behavior, and update privacy/config together. A success screen must follow a genuine provider response. `integrations.email.configured` affects privacy copy and the homepage form gate; it alone does not connect subscriptions. Contact and affiliate flags remain false; no unconfirmed inbox or acceptance claim is shown.

## Verification

- `npm run build`: passed with Next.js 16/Turbopack; 17 reported static entries, all editorial/archive URLs verified; TypeScript checks included.
- `npm run test:editorial`: 26 passing tests covering purchase gates, outbound payload/failure behavior, malformed fragments and shared readiness; both test files are included in the script.
- Local production browser checks: 14 routes × 320/375/768/1440 pixels plus 8 expanded comparison states (64 total); no horizontal overflow in the standard states, runtime exceptions or axe WCAG 2 A/AA + best-practice violations. All 12 fragment-navigation checks, DOM section/nav order, keyboard menu, unavailable email, internal routes, archive notices, draft noindex, schema and tracker response checks passed.
- Automated accessibility checks supplement manual review; they do not establish complete accessibility conformance.
- `npm run lint`: passes non-interactively with ESLint 10, Next Core Web Vitals and TypeScript flat config; zero tolerated warnings. Application source/config and CommonJS tests are checked; docs/prototypes/generated output are excluded. Build does not run lint.
- Clean `npm ci --ignore-scripts` in a temporary directory: passes without force/legacy-peer-deps; old peer metadata in bundled ESLint plugins emits warnings.
- Dependency audit: 13 affected packages (7 high/6 moderate), production-only 4 moderate in the legacy parser chain; no Next/React findings returned. No forced Tailwind migration or parser downgrade. See the dated upgrade record for limitations.

Details: `docs/status/PROJECT_STATUS_DAY10_SHORT.md`; initial integration history: `docs/status/SMARTSHOPCA_HANDOFF_INTEGRATION_2026-10-14.md`.

## Preserved UX handoff

The original 19-file R2 ZIP and its independent-isolation verification remain in `docs/Claude_Design_Handoff/New_oct12_2026_2pm/`. Root includes that revision plus the requested section reorder and test-command update. Framework upgrade is complete locally. Email server action, residual dependency advisories and crawler/canonical fixes remain pending. Automated accessibility checks do not establish full conformance, and product sources were not refreshed during UX integration.
