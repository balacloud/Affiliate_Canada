# Skincare launch scope and missing pieces

Recorded 2026-10-14. Founder approved covering **both face and body moisturizers**, with separate comparisons, within Canadian-made skincare. This supersedes earlier face-versus-body selection questions. It does not expand the launch to every skincare type, approve spending, or authorize publishing/deployment.

This is a scoped local-code/document review, not a completed eight-category audit or live deployment verification. Private research HTML is not production application content. Build/lint/runtime checks were not run because no application code changed.

**Founder design clarification:** the umbrella homepage must visibly show both Seasonal Canadian favourites and Canadian-made personal care & household, with separate navigation/entry points and truthful readiness states. “Skincare-first homepage” below means prioritizing ready content within a two-pillar shell, not replacing the umbrella with a skincare-only identity. Face/body are comparisons within the second pillar. Shared About describes both experiences.

## Current About page

`app/about/page.tsx` describes home office and remote work, claims a small Canadian team, describes researching dozens of options, and states participation in named affiliate programs. The reviewed project records do not establish those team/research/participation claims. The page is dated March 2026. It does not yet explain the approved personal-care/household direction, origin definitions, screening method, uncertainty, or the distinction between manufacturer evidence and hands-on testing.

About should explain who actually operates SmartShopCA, the launch scope and separate future pillar, what each Canadian-origin label means, how selection works, evidence limitations, independence from commissions, current relationship status, and contact/corrections. It should link to or contain methodology and medical-advice limits. The product page must still contain exact-product origin sources, formula references, dates and uncertainties; an About policy does not verify a product.

## Minimum launch work

| Workstream | Missing or unresolved | Next concrete deliverable | Owner / dependency |
|---|---|---|---|
| Scope and navigation | Homepage remains home-office scenarios and expired spring campaign; nav has Home/About only | Skincare-first homepage with separate face/body moisturizer entry points; keep seasonal direction distinct | Agent implementation; exact routing design needed |
| Product evidence | Four draft comparison candidates have unresolved origin/formula/stock/label details; Green Beaver scent wording needs qualification | Small verified-enough shortlist for each comparison, with explicit unknowns, current merchant sources, ingredient lists and usable images with permission | Agent primary research; physical labels or authorized manufacturer clarification may be needed |
| Evidence method | Research method records facts but is not a reviewed comprehensive ingredient/safety assessment | Declare what is checked, what constitutes missing/conflicting evidence, source hierarchy, review dates, and claim limits. No universal safety score | Agent drafts; specialist review where material health claims warrant it |
| About and trust | Old positioning and unsupported operational/affiliate assertions | Accurate About, methodology, disclosure, author/reviewer attribution, and corrections/contact route | Agent drafts/implements; founder identity/contact details need confirmation |
| Content/data integration | Product types only accept tech categories; content is tech MDX; comparisons are private HTML | Real application face/body collection pages and product records with evidence metadata; supported schema and accessible components | Agent implementation, build and focused checks |
| Merchant links and monetization | No confirmed affiliate acceptance; destination links remain placeholders in app | Real current merchant destinations; affiliate tracking/disclosure only where an actual relationship exists | Agent wires approved destinations; founder handles account applications/terms or authorizes them |
| Email | Component logs email and simulates success; no subscription stored | Server-side Kit integration, genuine success/error states, skincare face/body preferences, relevant welcome content and working unsubscribe | Agent implementation; founder configures account/secrets securely |
| Privacy and support | Privacy page exists but describes home-office focus and conditional integrations; contact inbox setup unconfirmed | Align copy with actual services/data processing, confirm reachable business contact and correction handling | Agent updates after integrations; founder inbox/provider configuration |
| Measurement | Click endpoint prints to console; no durable reporting or outcome measurements demonstrated | Verify merchant navigation, usable click reporting, opt-in results and basic source attribution. Separate traffic from actual purchase value | Agent implementation/verification; merchant conversion reporting requires program access |
| Launch QA and deployment | No current application verification for new direction; local/cached remote drift | Tailored publishing checks, build, mobile/accessibility/link checks, real email test, preview review, then explicitly authorized deployment and live-route verification | Agent checks; push/deploy requires founder authorization |

Editorial launch can use real non-affiliate merchant links if affiliate acceptance is pending; describe actual commercial relationships truthfully. Affiliate revenue cannot be claimed until a working approved relationship and attribution exist. Selection may include non-affiliate products. Do not manufacture a third recommendation to meet a card count.

## Product gaps already known

- **Face:** Marcelle exact-product manufacturing origin; Riversol current complete INCI and variant stock. Prices/merchant policy snapshots are dated, not live guarantees.
- **Body:** ATTITUDE exact-variant origin/label; Rocky current packaging and preference suitability. Their formats and units differ; do not rank by millilitres versus grams.
- **All:** no physical formula-version verification, hands-on performance testing, or complete safety-screening pass. Certification logos require separate checks if used in selection/copy. Check current Canadian availability, total cost and image-use rights before publication.
- The [evidence-gap prompt](MOISTURIZER_EVIDENCE_GAPS_PROMPT_2026-10-14.md) is ready for outside research; explicit unknown outcomes are acceptable. The [community first pass](MOISTURIZER_COMMUNITY_LISTENING_2026-10-14.md) supplies buying questions, not product verification or market prevalence.

## Publishing-document drift

`docs/stable/PRE_PUBLISH_CHECKLIST.md` still prescribes tech merchants as first CTAs, a financial/high-CPA product, mandatory “Best Overall/Budget/Premium” positions, and quarter/campaign language. These historical requirements are not a sound skincare-page plan. Reconcile the checklist and applicable rules with the approved product boundary before using its score as launch approval. Do not add irrelevant financial offers or invented rankings to obtain a passing score. Current affiliate/trust/legal assertions in older documents also need evidence-based treatment; they are not legal clearance.

Lint is not established through a non-interactive configuration; no automated test suite is established. Application changes must run `npm run build` and the smallest relevant behavioural verification. Do not treat historical build passes as verification of future changes.

## Practical implementation sequence

1. Prepare accurate About and methodology copy plus a minimal page/content design for both comparisons. Resolve product gaps in parallel; no new broad market report or mandatory interview round.
2. Implement shared shell, separate face/body comparison routes and sourced records; retire or clearly mark stale public home-office content.
3. Configure real email capture, truthful merchant/disclosure handling, contact and measurement.
4. Run tailored checks on a reviewable preview. Publish only after explicit authorization; then verify live routes and actual flows.

No requirement to launch all social channels at once, run paid ads, collect a representative national survey, build a shopping assistant, or establish subscription infrastructure. Public community participation and private Facebook access are not automatic permissions from this readiness review.
