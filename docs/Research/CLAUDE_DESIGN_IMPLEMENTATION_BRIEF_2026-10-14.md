# SmartShopCA — Claude design and implementation brief

Prepared October 14, 2026. Founder requested a detailed design handoff for Claude to return code for Codex integration. Copy the text between BEGIN BRIEF and END BRIEF; attach the listed source files if your Claude environment accepts files. This is a code/design request, not permission to deploy or a statement that product claims are publication-ready.

BEGIN BRIEF

You are the designer and frontend implementer for SmartShopCA. Create a polished, responsive editorial website and return complete, integratable Next.js code. Do the design and implementation, not just describe a plan. Make reasonable visual decisions yourself. Preserve the founder's product architecture and evidence standards below.

## 1. The product you are designing

**One umbrella brand: SmartShopCA. Two distinct editorial pillars.** Both must be visible on the homepage and in navigation:

1. **Seasonal Canadian favourites** — small, well-reviewed selections of boutique or distinctive products that fit how Canadians shop in the current season. Each collection answers a specific use case and explains trade-offs. It is broader than gifting. Canadian-made, Canadian-owned and available in Canada are different attributes, to be verified and labelled.
2. **Canadian-made personal care & household** — Canadian-made products explained through transparent ingredient and origin evidence. Personal-care and household categories have distinct comparison criteria and evidence methods. Skincare launches first, with **both face and body moisturizers**, shown in separate comparisons. Laundry detergent and dishwashing liquid are later candidates.

The founder sometimes describes these as “two brands”; design them as distinct experiences under SmartShopCA, without inventing separate brand names or domains. The first launch sequence prioritizes skincare; **it does not authorize hiding the seasonal pillar or converting the umbrella homepage into a skincare-only storefront**.

SmartShopCA is an editorial discovery/affiliate platform, not a store. It helps readers choose among a small set of options. No cart, checkout, shipping service, giant catalogue, or mixed seasonal/skincare recommendation grid.

Founder constraints: approximately 14 hours/week, bootstrap, side income first. Existing Reddit/forum discussions guide initial customer discovery. Interviews are optional. No paid advertising, outreach, affiliate applications, deployment or spending is authorized by this brief.

## 2. Design objective and visual direction

Make this feel like a thoughtful Canadian editorial publication with clear buying help. Prioritize warmth, readability, product distinctions and trust over sale banners or dashboard styling. The founder wants Claude to exercise design judgment; do not merely copy the current sparse scaffold.

Suggested direction, not rigid style requirements:

- Warm ivory background, deep green/charcoal text, generous whitespace, subtle borders and a strong type hierarchy.
- Give seasonal content a warm amber/rust accent and personal-care/household a green/sage accent. Pair colour with text labels; never rely on colour alone.
- Two prominent, balanced pillar panels on the homepage. Both read as deliberate editorial destinations, with their own descriptions and honest readiness states.
- Refined cards, editorial section rhythm and restrained illustration. Use typography to express authority; avoid decorative complexity that slows mobile browsing.
- Design for Canadian readers without using a maple leaf on every element. No fake certification seals, shield icons suggesting product safety, or medical/scientific badges unsupported by evidence.
- Photos should be used only when supplied with usable rights. When assets are unavailable, use honest abstract editorial graphics or labelled neutral image placeholders. Never generate or scrape product-packaging representations and present them as real product photos.
- Keep light mode for this release. Use system fonts or the existing Inter stack without adding a mandatory new network dependency. A local serif stack is an option for editorial headings.

Do not show developer/task language in the public-facing experience: no issue IDs, framework labels, API setup notes or “Codex integration” messages. Explain unknown product details in plain reader language.

## 3. Reader journeys

**Seasonal:** homepage → Seasonal Canadian favourites → an honest informational landing state while collections are prepared. Do not link this card to the expired spring tech page or a broken destination. Future curated collections have their own seasonal evidence standards.

**Skincare:** homepage → Canadian-made personal care & household → skincare → face or body moisturizer comparison → evidence/methodology → correctly labelled merchant destination when eligible.

**Retention:** appropriate page → voluntary email signup with topic preference → truthful success/failure state. No forced popup, fake signup count, automatically checked consent or subscription hidden inside another action.

Instagram, Facebook page/groups, Reddit and search may lead to a relevant pillar or comparison. Email is the intended follow-up route; WhatsApp is an optional alert channel. Accounts, handles and channel activation are unconfirmed. Do not invent social links, working WhatsApp subscriptions or follower counts.

## 4. Proposed route map for the implementation handoff

These are implementation proposals for review, not claims that these routes already exist. Use this map consistently unless a concrete repository constraint requires another structure, then explain the change:

```text
/                                  Umbrella homepage; both pillars
/seasonal                          Seasonal pillar; honest preparation state
/care                              Personal care & household pillar
/care/skincare                     Skincare overview; separate face/body entry points
/care/skincare/face-moisturizers    Face comparison
/care/skincare/body-moisturizers    Body comparison
/methodology                       Shared standards + distinct pillar/category methods
/about                             Operator, purpose, editorial independence, contact
/privacy                           Existing policy, updated to actual experience
```

The `/care` pathname is routing shorthand, not a new brand name. Always display the full personal-care/household pillar label at its entry point. Household expansion is explained on `/care`; it does not need empty product routes now. Preserve existing route compatibility or identify specific archive/redirect changes for review. Do not indiscriminately delete old content or redirect every legacy URL to an unrelated skincare page.

## 5. Homepage requirements

Create a page that makes the umbrella architecture unmistakable in the first screenful or immediately below the opening statement:

1. Shared header: SmartShopCA wordmark, both pillar destinations, Methodology/About access and usable mobile navigation.
2. Brand promise: help Canadians discover worthwhile products and understand the evidence needed to choose. Avoid blanket “all our products are Canadian-made”; only the second pillar has that intended manufacturing focus, subject to product evidence.
3. **Two distinct pillar panels:**
   - Seasonal Canadian favourites: “Discover useful picks for the current season.” Explain small, well-reviewed selections for a specific seasonal use case. Readiness: collections being prepared. CTA opens `/seasonal`.
   - Canadian-made personal care & household: “Understand ingredients and origin.” Explain separate personal-care/household categories. Readiness: skincare comparison preview, with face/body moisturizers first. CTA opens `/care`.
4. A concise shared explanation of small shortlists, origin clarity, sources/dates and transparent commercial relationships.
5. A labelled skincare preview section is acceptable. It must not combine skincare and seasonal products into a universal ranking, or claim the draft comparisons are fully reviewed recommendations.
6. Relevant email preference block with honest integration state.
7. Shared footer: About, Methodology, Privacy, disclosure and contact only when confirmed.

Do not use a huge empty hero that pushes both pillar choices out of reach. On mobile, stack two distinct readable panels. An unlaunched pillar remains a visible part of the brand, not a footnote.

## 6. Pillar and comparison page requirements

### Seasonal landing

Its identity and editorial promise must be as intentional as the second pillar's. Explain what future seasonal collections will help readers choose and how origin labels work. Do not fabricate products, reviews or launch dates. “Collections are being prepared” is an honest state. A functioning voluntary seasonal email preference may be offered once integration exists; otherwise display an honest unavailable state.

### Personal care & household landing

Show skincare first, with distinct Face moisturizers and Body moisturizers cards. Explain ingredient/origin transparency. Household categories are later planned coverage; avoid interactive controls pretending to filter nonexistent detergent content.

### Face and body moisturizer comparisons

Both are in launch scope. Separate pages with consistent design. Start from the research candidate data below; **they are not automatically publication-ready recommendations**.

- Specific question-style H1 containing Canada, 2026 and the buying use case. Example: “Which face moisturizer should you compare for colder weather in Canada in 2026?” Avoid claiming “best” before evidence supports ranking.
- TL;DR: who the comparison is for, meaningful distinctions, CAD price range where supported and important evidence limits.
- Clear category label and related-category navigation, without mixing face/body as directly interchangeable products.
- Small product set: two factual candidates per page currently; do not invent a third to fill a layout. Maximum seven products per collection.
- Each card: exact product/variant, format and units, source-dated CAD price, shipping/return information where known, evidence-labelled origin, ingredient information, choose-if and avoid-if statements, meaningful trade-offs, sources and reviewed date.
- Compact comparison table: pack price, unit price, illustrative shipping subtotal, format, scent information and origin evidence. Preserve unknown values. Do not compare grams directly with millilitres or imply monthly cost without application data.
- Explain manufacturer claims versus SmartShopCA observations. No invented ratings, reviews, scarcity, “clinically proven” summaries, performance tests or editorial awards.
- Show actionable uncertainty in normal language: “Manufacturing location not confirmed for this product” or “Current full ingredient list not obtained.” Do not hide uncertainty in tooltips alone.
- Research-held candidates have visible status and no public buy/affiliate CTA. They may link to evidence. Do not treat absence of evidence as a safety pass.
- Source lists, methodology, date, limitations, informational/non-medical boundary and factual affiliate disclosure must be easy to find.
- Useful FAQs based on actual questions, including manufacturing versus ownership, scent labels and total cost. Do not invent dermatological answers.

Preview readiness should be controlled in data/config, without duplicating whole page templates. Keep truthful preview/held states until product evidence and publication checks pass. This is not a request for authentication or an admin system.

## 7. About, methodology and privacy

### About

Describe **both pillars**, the initial skincare focus, actual operator identity and editorial role. Founder-confirmed details: **Balaji Kothandaraman, Kitchener, Ontario, Canada; father of two in his early 40s; more than 18 years of software engineering and technical delivery experience**, including insurance/financial-data systems, data integrity/reconciliation and governance/quality controls. He designs and guides AI-assisted research and decision systems. Connect this background to specific research practices: comparing sources, tracing claims, resolving conflicts and recording uncertainty. Keep the founder bio short; no full resume, employer endorsements or invented LinkedIn URL. Do not invent a team, medical qualifications, skincare testing or research volume. Use the current About draft/addendum if attached.

Explain independence from commissions, inclusion of non-affiliate options, corrections and actual relationship status. Affiliate programs have been researched but no acceptance is confirmed. Do not say we participate in Best Buy, Newegg, Amazon, Riversol or other programs until that is true. A conditional future disclosure can explain commissions without asserting active relationships.

### Methodology

Shared standards cover source hierarchy, dates, unknown/conflicting information, criteria and corrections. Category sections stay distinct:

- Seasonal: use case, Canada availability, relevant reviews/performance evidence and season appropriateness.
- Skincare: exact product origin, current ingredient disclosure, declared screening criteria/version, scent/ingredient preferences and evidence limitations.
- Household: later coverage with its own disclosure/use/exposure method; do not reuse skincare verdicts automatically.

About states the policy; **each product record still needs its own evidence**. Origin is not inferred from nationality, headquarters, retail availability or a factory alone. Canadian-made and Product of Canada are not interchangeable.

No universal “non-toxic,” “endocrine-disruptor-free,” “non-allergenic,” pregnancy-safe or medical advice claims. “Hypoallergenic” is an attributed manufacturer claim, not a guarantee. Natural ingredients do not inherently mean safer. A short list is not proof of safety. An exclusion preference is not an endocrine-risk assessment. Health Canada's Hotlist is a restrictions reference, not certification of a product.

### Privacy/contact

Keep the existing `/privacy` route and link. Update its product positioning; describe only actual data flows. Do not claim email is stored if integration is inactive. The repository names `hello@smartshopca.ca`, but functioning inbox status is unconfirmed. Do not build a contact form that pretends to deliver messages or add arbitrary third-party trackers.

## 8. Research candidate snapshot — not live product verification

Source access date: **October 14, 2026**. Always show this date when using the data. All prices are regular one-time CAD prices; metadata or Canadian market selectors were checked. Shipping subtotals are examples before tax/discounts, not checkout quotes. No samples or physical labels were checked, stock is not guaranteed, and no product has a comprehensive screening pass.

| Category | Exact candidate | Price/format | Evidence distinction / hold |
|---|---|---|---|
| Face | Marcelle Moisture Cream | CAD $22.95 / 50 mL; CAD $45.90 per 100 mL | Published INCI; fragrance-free brand claim. Brand says 89% of skincare is Canadian-made; exact item origin unconfirmed. Hold for origin |
| Face | Riversol Daily Moisturizing Cream | CAD $49 / 50 mL; CAD $98 per 100 mL | Exact product page claims Made in Canada and fragrance-free. Current full INCI not retrieved; stock controls ambiguous. Hold for formula/stock |
| Body | ATTITUDE Sensitive Skin Body Lotion, Unscented | CAD $16.95 / 473 mL; CAD $3.58 per 100 mL | Published formula, no-added-fragrance claim. Canadian factory statement does not establish exact variant's manufacturing record. Origin/label pending |
| Body | Rocky Scent Free Dry Skin Body Butter | CAD $17 / 55 g; CAD $30.91 per 100 g | Five disclosed ingredients including beeswax; unsuitable for vegan criterion. Product page carries Canadian Rockies manufacture statement; label/batch pending |

Scent check: no parfum/fragrance or aromatic essential oils were identified in the published lists retrieved for Marcelle, ATTITUDE and Rocky. This does not guarantee no allergens or formula changes. Riversol's complete current list remains missing. Do not transform this observation into a safety endorsement.

Shipping/return snapshot:

- Marcelle: standard shipping CAD $8 below CAD $60 free threshold; illustrative one-item subtotal CAD $30.95 before tax. Thirty-day unused/unopened returns; return postage not refunded. Policy has another brand's contact text, so instructions require confirmation.
- ATTITUDE: CAD $12.99 for the low-value basket; illustrative subtotal CAD $29.94 before tax; free shipping at CAD $74+. Ordinary online purchases final sale; policy excludes territories and PO boxes. Defects/issues are handled separately.
- Rocky: standard shipping CAD $8.95 below threshold over CAD $60; illustrative subtotal CAD $25.95 before tax. Used-product return language exists; online handling requires contact. Local stock not established.
- Riversol: advertises free shipping at CAD $69+ and 30-day money-back language; exact lower-basket shipping/eligibility unresolved. Do not calculate an invented shipped total.

A fifth researched product, Green Beaver Intense Moisture Body Lotion, 240 mL, has unscented language alongside disclosed aromatic oils/fragrance allergens. It is not included in a proposed no-aromatic-oils shortlist. If used as an educational example, state the factual discrepancy without a medical verdict.

Primary source links:

- Marcelle product: https://marcelle.com/en/products/moisture-cream-50ml?variant=44454916423879
- Marcelle origin: https://marcelle.com/en/pages/notre-engagement-envers-vous
- Marcelle shipping/returns: https://marcelle.com/en/policies/shipping-policy and https://marcelle.com/en/policies/refund-policy
- Riversol product: https://www.riversol.com/products/daily-moisturizing-cream
- Riversol return terms: https://www.riversol.com/policies/refund-policy
- ATTITUDE product: https://ca.attitudeliving.com/products/body-lotion-sensitive-skin/
- ATTITUDE factory: https://ca.attitudeliving.com/our-factory
- ATTITUDE policies: https://ca.attitudeliving.com/refund-policy
- Rocky product, origin wording, shipping and returns: https://www.rockymountainsoap.com/products/unscented-body-butter
- Green Beaver example: https://greenbeaver.com/products/intense-moisture-body-lotion
- Health Canada cosmetic claims: https://www.canada.ca/en/health-canada/services/cosmetics/cosmetic-advertising-labelling-ingredients.html

Existing community questions concern winter hydration, value/pack size, texture, ingredient exclusions, scent preferences, manufacturing versus ownership, and Canadian availability. Some prefer fragrance or keep the same product year-round. Public posts are qualitative signals, not national popularity rankings, clinical evidence or demand for SmartShopCA. Do not use anonymous posts as fabricated customer testimonials.

## 9. Repository and technical requirements

The application already exists. Do not replace it with a new Vite/React project or a standalone HTML deliverable only.

```text
Next.js 14.2 (App Router)
React 18, strict TypeScript
Tailwind CSS 3
gray-matter for MDX frontmatter
Path alias: @/* → repository root
Package manager: npm; package-lock.json exists
Dev script: next dev -p 3200
Build: npm run build
Lint: next lint currently opens interactive setup; non-interactive lint not established
```

Relevant existing files:

```text
app/layout.tsx, app/page.tsx, app/globals.css
app/about/page.tsx, app/privacy/page.tsx
app/[season]/page.tsx, app/guides/[slug]/page.tsx
app/api/track-click/route.ts
components/DealCard.tsx, OutboundLink.tsx, EmailCapture.tsx
components/ComparisonTable.tsx, CollectionGrid.tsx, FAQBlock.tsx, JsonLd.tsx
components/SeasonBanner.tsx
types/index.ts
lib/getProducts.ts, lib/getCollections.ts, lib/trackClick.ts
config/campaigns.ts
tailwind.config.ts
content/products/*.mdx, content/collections/*.mdx
```

Current app behaviour and important constraints:

- Homepage and active campaign point to expired Q2 spring 2026 tech content. Do not carry that into the redesigned umbrella homepage.
- About/privacy positioning is legacy home office. About's named affiliate participation is unconfirmed.
- Existing `Product.category` is a tech-only union. Product records lack explicit origin/formula/evidence status. `Collection.season` is a legacy quarterly union. Do not label skincare as a seasonal-favourites collection simply to satisfy this type.
- MDX loaders read frontmatter synchronously on the server; they do not render arbitrary MDX body components. Preserve their server boundary. Do not import `fs` into client components.
- `Merchant.affiliateNetwork` currently lacks CJ/Rakuten. Design types for actual research/pending relationships without inventing approvals.
- `EmailCapture` logs an email and simulates success with a timer. **Remove false-success behaviour from redesigned components.** Integration needs later secure Kit configuration. Render an honest disabled/unavailable state when no backend is configured; keep a complete visual design for working states. Do not put API keys/form IDs in code or documentation, build a made-up endpoint, or claim server delivery was implemented when it was not.
- `OutboundLink` accepts `href`, `merchantName`, `productId`, `merchantId`, `campaignId`, `pageSlug` and `className`. It tracks a click then calls `window.open`. Every actual affiliate CTA must use the shared component; do not paste raw affiliate links into JSX. Distinguish non-affiliate evidence links. If improving navigation, keep tracking best-effort and never make a failed tracker block merchant navigation. Return the full affected component and explain the contract change.
- `/api/track-click` currently validates required fields and logs to console. Do not invent a dashboard, persistence or conversion attribution.
- Existing images are missing. No unlicensed product images or stock-photo stand-ins pretending to be the exact product.
- Preserve unrelated user changes. Never add secrets, push, deploy, or make bulk repository rewrites.

Propose a modest typed content model supporting pillar/category, evidence URLs/dates, exact variant, amount/unit, CAD pricing with source/date, origin claim scope/status, ingredient source/completeness, merchant-link kind, readiness, and meaningful choose/avoid criteria. Reuse existing loaders/components where sensible. New focused skincare types/modules are acceptable if they preserve compatibility; do not force research-held records into fields that imply verified availability or active affiliates.

Use App Router server components by default; client components only for interactive navigation/toggles/forms. Avoid new dependencies unless their benefit is clear and include every manifest/import change. Prefer inline SVG/CSS for simple icons over adding an icon package. Render `JsonLd` with supported facts only; do not emit fabricated Offer availability, ratings, reviews, author identities or safety claims. Evidence-held preview data must not produce an apparently verified purchase offer in schema.

## 10. Interaction and accessibility requirements

- Responsive layouts at approximately 375, 768 and 1440 px. No page-wide horizontal overflow; comparison tables may scroll within a labelled region.
- Usable touch targets, sufficient contrast, visible focus, semantic landmarks, a skip link, logical heading order, accessible names and descriptive links.
- Mobile menu opens/closes with keyboard support and accurate expanded state. No decorative-only controls that look interactive.
- Face/body navigation uses real routes; within-page toggles can be supplementary. Provide a meaningful no-JavaScript reading path.
- Expandable evidence/details are usable by keyboard. Essential limits remain visible without expansion.
- Only add filters/sorts if supplied records support real behaviour. An empty or no-match state must explain the result; do not silently restore all products.
- Email visual states: unavailable, idle, invalid input, submitting, genuine success and failure. Distinguish backend unavailable from a transient submission failure.
- Respect reduced-motion settings; keep animation subtle. No auto-playing video, intrusive modals or mandatory carousel.
- Avoid using colour as the only distinction between verified, attributed and unknown. Avoid green shields/checkmarks that imply medical clearance.

## 11. Code delivery format

Return a complete code handoff I can bring to Codex:

1. Concise design rationale and page map tied to the two-pillar architecture.
2. File manifest listing new/changed paths and why.
3. **Complete contents of every new or modified file**, each clearly labelled with its exact repository-relative path. No ellipses, “keep existing code,” missing helpers, unresolved imports or TODO-only implementations. If output length is limited, return a downloadable folder/archive where available or numbered batches ending at whole-file boundaries. Do not silently omit files.
4. All TypeScript types, data, global styles/Tailwind changes, route files and shared components needed to render the design.
5. Asset manifest: source/licence for supplied assets or honest placeholder descriptions. No undocumented external image dependencies.
6. Behaviour table: implemented versus intentionally unavailable (Kit, contact delivery, affiliate acceptance, durable analytics). Unavailable functionality must display truthfully.
7. Integration notes for legacy route/content treatment and any dependency changes.
8. Verification report: actual build, type/mobile/accessibility/link checks performed. If you cannot execute code, say “not run”; do not claim a build passes. Do not run interactive lint and label it a completed check.
9. Remaining founder/Codex inputs: product evidence, operator/contact details, secure account configuration, publication checks. Do not turn these into new invented data.

If delivering only a visual prototype as an intermediate artifact, label it clearly and still provide the requested App Router code handoff. A screenshot or a single HTML file does not fulfil the complete implementation request.

## 12. Acceptance checklist

- [ ] Homepage shows both pillars prominently, with distinct descriptions and functioning truthful destinations.
- [ ] Seasonal identity is preserved while its content is not yet launched.
- [ ] Personal-care/household identity is broader than skincare; skincare-first remains the sequence.
- [ ] Face and body moisturizer comparisons both exist and remain separate.
- [ ] Shared About describes both pillars and actual relationship/operator information without fabrication.
- [ ] Methodology separates shared standards from category evidence and product-level sourcing.
- [ ] Unknown origin, formula, stock and shipping information is visible and never converted into a safety/availability pass.
- [ ] No fabricated reviews, ratings, testimonials, certification, efficacy, social accounts, commissions or urgency.
- [ ] No false email/contact success and no secrets in returned files.
- [ ] Actual affiliate CTAs use shared tracking/disclosure; research sources are labelled separately.
- [ ] Mobile and keyboard interactions function; no decorative fake controls.
- [ ] The whole app remains compatible with Next.js 14, React 18 and strict TypeScript.
- [ ] Complete file contents and honest verification report are included.
- [ ] Nothing is published, deployed, contacted or purchased through this task.

## 13. Supporting files, if available in your environment

The brief is self-contained. If files are attached or accessible, use them for exact repository details and evidence context; do not claim access to paths you cannot read:

- `AGENTS.md`
- `docs/stable/BRAND_ARCHITECTURE.md`
- `docs/Research/SKINCARE_LAUNCH_READINESS_2026-10-14.md`
- `docs/Research/MOISTURIZER_SHORTLIST_2026-10-14.md`
- `docs/Research/MOISTURIZER_COMMUNITY_LISTENING_2026-10-14.md`
- `docs/Research/MOISTURIZER_COMPARISON_DRAFT_2026-10-14.html`
- `docs/status/SMARTSHOPCA_VISUAL_GUIDE_2026-10-14.html`
- Existing source files from Section 9, especially layout, types, loaders, EmailCapture and OutboundLink.

The old publishing checklist still includes tech-store/high-CPA financial requirements. Do not add irrelevant financial offers or invent rankings to satisfy those obsolete assumptions; report the mismatch for Codex to reconcile. Preserve genuine disclosure, sourcing and publishing constraints. A design/code handoff is not publication approval.

END BRIEF
