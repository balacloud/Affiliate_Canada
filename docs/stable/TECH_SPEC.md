# Technical Specification — SmartShopCA

> Updated 2026-10-15: describes the initial local Claude-handoff integration, saved in the Day 8 checkpoint. No push or deployment. Subsequent UX round 2 was verified in isolation and is not implemented here. Product boundaries: `BRAND_ARCHITECTURE.md`.

## Stack and rendering

Next.js 14.2.35 App Router, React 18, strict TypeScript and Tailwind CSS. Public editorial pages are statically generated. The redesign adds no dependencies. The shared layout provides a skip link, header, mobile navigation and footer. System serif/sans fonts avoid a remote-font dependency; ivory/ink foundations use rust for seasonal and sage for care.

The founder's retail-navigation reference is reflected in a two-row header: brand and utility links above, with two equal-width pillar links in a dedicated category bar below. Both pillar links remain visible on phones; the mobile menu includes methodology and About as well.

## Routes

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

Legacy MDX, campaign config and `types/index.ts` are retained for history/compatibility. The expired `ACTIVE_CAMPAIGN` constant no longer drives the homepage or a current commerce page. No `/deals/[slug]` route is implemented.

## Configuration and content

- `config/site.ts`: pillar labels/routes/readiness, founder, canonical site origin, navigation and integration flags. `NEXT_PUBLIC_SITE_URL` overrides the fallback `https://smartshopca.ca`; confirm deployment canonical domain before publishing.
- `types/editorial.ts`: new editorial model, separate from legacy tech-deal types.
- `content/skincare/face-moisturizers.ts` and `body-moisturizers.ts`: exact variants, dated CAD price snapshots, pack units, origin/ingredient evidence, scent observations, shipping/returns, holds and source references.
- `lib/format.ts`: CAD/date/pack formatting, separate per-100-mL and per-100-g calculations, and purchase eligibility. Never converts grams to millilitres.

Pillar IDs are `seasonal` and `care`. Readiness is `preparing`, `preview` or `published`. Care categories currently cover face/body moisturizers; household categories require their own evidence model and method before implementation.

A skincare candidate records origin statements with level, scope and source IDs; ingredient completeness and source IDs; exact variant; price/policy snapshot dates; practical trade-offs; status and hold reasons; merchant destination and affiliate status. A published status is an editorial decision, not a medical or safety certificate.

## Components and purchase boundary

`components/site/` contains the shared shell. `components/editorial/` contains breadcrumbs, bylines, pillar cards, readiness labels, disclosures and legacy notices. `components/skincare/` contains comparison views, semantic tables and candidate cards. `EvidenceLink` is an untracked source link.

`isPurchaseEligible` requires a published candidate, no holds, a real merchant destination, a sourced full published ingredient list, and sourced exact-variant origin evidence. Unconfirmed/conflicting origin blocks eligibility. Affiliate destinations additionally require an active program. Manual evidence review remains required; this gate does not scientifically validate ingredients or confirm the sources themselves.

All current candidates remain held. No Offer, Review or AggregateRating schema is emitted for research previews. New comparison schema describes WebPage/BreadcrumbList only. Draft comparison and legacy archive routes are noindex.

`OutboundLink` renders a real new-tab anchor. Best-effort beacon/fetch tracking never delays navigation or depends on popup opening. Affiliate links use `rel="sponsored noopener noreferrer"`; direct merchant links omit sponsored. Default visible labels disclose link kind. Custom labels need accompanying disclosure.

The tracker payload preserves `productId`, `merchantId`, `campaignId`, `pageSlug` and `affiliateLink`. Missing campaign/page values receive `EDITORIAL`/the current pathname. The API requires the first four fields and returns 200 with `{success:true}` for accepted events or 400 for missing/invalid requests. Logging is not durable analytics or proof of attribution; no database/reporting pipeline is installed.

## Email and contact

`EmailSignup` accepts an optional real subscription server action. Without it, all controls are disabled and no subscription is sent or stored. Topic preferences are seasonal, care or both; consent is not prechecked. The legacy `EmailCapture` delegates to this truthful unavailable state and no longer logs email or simulates success.

Future server integration must validate email, topic and consent, implement the provider request and actual confirmation behavior, and update privacy/config together. A success screen must follow a genuine provider response. `integrations.email.configured` currently affects privacy copy; it alone does not connect subscriptions. Contact and affiliate flags remain false; no unconfirmed inbox or acceptance claim is shown.

## Verification

- `npm run build`: passed; 18 statically generated pages including legacy archive paths, with TypeScript checks.
- `npm run test:editorial`: 14 passing tests covering purchase gates and outbound payload/failure behavior.
- Local production browser checks: 9 editorial routes × 375/768/1440 pixels; no horizontal overflow, runtime exceptions or axe WCAG 2 A/AA + best-practice violations. Keyboard menu, disabled email, internal routes, archive notices, draft noindex, schema and tracker response checks passed.
- Automated accessibility checks supplement manual review; they do not establish complete accessibility conformance.
- Non-interactive lint is not established; `npm run lint` still opens setup.

Details: `docs/status/SMARTSHOPCA_HANDOFF_INTEGRATION_2026-10-14.md`.

## Day 8 close: pending UX revision

`docs/Claude_Design_Handoff/New_oct12_2026_2pm/VERIFICATION_R2.md` records the separately verified 19-file revision. It adds fragment/readiness helpers, compact summaries, source links and collapsed evidence. Those components/types/tests are currently inside the returned ZIP, not the working application. At integration, place Key differences before cards and include both unit-test files in `test:editorial`. Root remains on the original 14-test suite. Framework upgrade, email server action and crawler/canonical fixes remain pending.
