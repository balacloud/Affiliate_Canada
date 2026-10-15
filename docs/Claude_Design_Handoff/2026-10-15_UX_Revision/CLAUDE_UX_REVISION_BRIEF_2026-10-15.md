# SmartShopCA — focused UX revision handoff

Prepared October 15, 2026. Send this brief with `SMARTSHOPCA_UX_BASELINE_2026-10-15.zip`. The ZIP is the current local application source, not the original Claude output or deployed site. No credentials, dependencies, build output or Git history are included.

BEGIN CLAUDE INSTRUCTIONS

You are the UX designer and frontend implementer for SmartShopCA. Revise the attached current application and return complete code files for integration. Do the design and implementation, not just a proposal. Make sensible visual decisions without asking the founder to choose minor details.

## Goal

Make the experience useful to someone who may only skim a few lines before leaving. The visitor should quickly understand what the site does, choose a section and see the main product differences and limitations. Full evidence must remain available for careful readers and AI assistants.

This is not a claim that any particular attention span is universal or that the site is ADHD-tested. We have not run a comprehension study. Accessibility tools alone do not prove usability.

## Work from this baseline

Use the source in the attached new ZIP, not an earlier generated version. Since the original handoff, Codex has corrected outbound tracking, purchase eligibility, unsupported comparisons and email states, archived old commerce routes and changed the header. Preserve those fixes.

Stack: Next.js 14.2 App Router, React 18, strict TypeScript, Tailwind. Do not upgrade the framework or dependencies in this UX pass. Codex will handle the supported-version upgrade separately. Avoid new dependencies and remote fonts. Preserve package scripts and meaningful tests.

Roles for this task: UX leads; frontend implements; product-evidence checks factual wording/caveat visibility; search/retrieval checks readable HTML and extraction. These are review passes, not invented independent experts. No architecture overhaul or business-model redesign.

## Product boundaries — mandatory

One brand: SmartShopCA. Two visibly distinct editorial pillars:

1. **Seasonal Canadian favourites:** useful/distinctive products for specific seasonal needs; broader than gifts and skincare. Canadian-made, Canadian-owned and available in Canada are distinct attributes. Collections are being prepared.
2. **Canadian-made personal care & household:** ingredient/origin evidence with category-specific methods. Skincare first, separate face and body moisturizer comparisons. Laundry/dishwashing are later categories, not active shopping sections.

Do not hide seasonal because skincare launches first. Do not make face/body the two umbrella pillars. Do not add a third B2B pillar, chatbot, cart, checkout, account system or subscription product.

Keep the current retail-style header: brand/utility row above a dedicated, balanced two-pillar navigation bar. Both pillar destinations stay visibly accessible on phones. Refine spacing if necessary, but do not return to a cramped single row or hide the pillars entirely in a hamburger menu. Preserve Methodology/About access and keyboard-capable mobile navigation.

Keep warm ivory/paper, ink text, rust seasonal and sage care accents, editorial serif/system sans typography. Colour is supplementary to labels. Tighten vertical rhythm without making text tiny or tap targets cramped.

## Scope and priorities

Primary files: homepage, pillar panels, skincare comparison template/cards/table and related styles. Adjust care/skincare landing pages only where needed for the same concise journey. Preserve existing routes, navigation, About biography and shared trust policies.

### A. Homepage

- Short headline and one brief explanatory sentence; aim for roughly 25–45 introductory words rather than a long manifesto. This is an editorial target, not a regulatory or usability standard.
- Make the two section entry points prominent early. Each needs a label, concise benefit, truthful readiness and clear link. Avoid long lists of commitments inside each panel.
- Within the care entry, provide easy direct access to face and body comparisons so a task-focused visitor need not traverse every landing page. Keep these visually subordinate to the care pillar.
- Put fuller trust/methodology explanation below the entry points or behind an optional disclosure. A short founder/methodology link can support confidence without delaying the choice.
- Avoid repeating the same pillar description and comparison cards in several large sections. Keep enough context to explain the brand and why the evidence helps.
- Email is not connected. Prefer a compact truthful “Email updates coming later” presentation over a large disabled form consuming the homepage. If you retain EmailSignup, keep its honest state. Do not remove/rewrite its future working subscription contract or simulate success.

### B. Face/body comparison pages

Reorder the experience:

1. Concise descriptive title, brief purpose, review date/byline and visible draft state.
2. Direct answer/status that makes the evidence limitations immediately clear.
3. Compact candidate summaries with a small number of decision-relevant facts.
4. Essential side-by-side differences BEFORE long evidence cards.
5. Optional deeper product/evidence/policy detail, sources and FAQs.

Current face finding, based only on the attached snapshot: neither candidate is ready for recommendation; Marcelle lacks exact-product manufacturing confirmation, Riversol lacks a current full ingredient list. Current body finding: lotion and butter are different formats; both remain held pending the product-specific evidence in their records. Read each actual hold reason rather than inventing a generic explanation.

Use humane copy such as “Still checking” or “Research preview” where helpful, but do not weaken the meaning of the hold. Never make the polished summary imply an approved winner.

Compact product summary should show:
- Exact name and variant/pack size.
- Dated CAD pack price; unit price only with clear basis.
- One meaningful difference or preference fit, without unproven efficacy claims.
- Main trade-off and critical evidence gap.
- A clear action to inspect details/sources, not an invented purchase CTA.

Essential uncertainty, price exclusions and commission context remain visible. Supporting detail may use native `<details>/<summary>` or accessible equivalent. Retain text in server HTML; do not load essential evidence only after a client-side click.

Phone layout needs an immediate readable comparison summary. Do not make sideways scrolling across a 640px table the only quick way to compare. A full semantic table may remain for detailed inspection; avoid duplicating entire evidence paragraphs in mobile and desktop markup. Use stable anchors for products and useful evidence sections.

Remove the 120px “photo not available” blocks. Show no image region until a useful licensed asset exists. Do not invent packaging photos, testimonials, ratings, badges or testing.

Shorten headings and duplicate wording. Keep source dates factual; a UI redesign is not a new product evidence check.

### C. Claim-to-source clarity

Use the existing source IDs to place relevant evidence links beside important origin/ingredient/policy observations where possible. Keep the full source list too. Source links are evidence, not affiliate purchase CTAs. Empty source IDs or missing evidence stay unknown; never fabricate a supporting source to fill a UI slot.

Preserve the original distinction between manufacturer claim, SmartShopCA observation and missing/conflicting information. No “safe,” “non-toxic,” “hypoallergenic guarantee,” “hormone-safe” or therapeutic claims. Ingredient preferences are not a medical risk assessment.

## Working contracts to preserve

- `config/site.ts`: full pillar names/readiness and confirmed founder identity; integrations currently false/unconfirmed.
- `content/skincare/*`: four candidate snapshots, all held. Preserve exact prices, variants, units, source references, dates, reasons and evidence status. Presentation titles/summary wording may be shortened accurately; no fabricated research refresh.
- `lib/format.ts`: isPurchaseEligible and unit calculations. Do not weaken this gate or equate grams and millilitres. Body lotion per100mL versus butter per100g are not a direct cheapest/value ranking.
- `OutboundLink`: real anchor with non-blocking beacon/fetch; existing API fields include productId, merchantId, campaignId, pageSlug and affiliateLink. No window.open-after-await regression. Preserve visible disclosure and affiliate rel handling.
- `EvidenceLink`: evidence navigation remains untracked and usable without JavaScript.
- `EmailSignup`: optional real subscription action; absent action means no submission, no stored email and no fake success. No client-side API credentials.
- Metadata: comparisons remain noindex while preview. Do not remove this for “AI SEO.” No unsupported Product, Offer, Review or AggregateRating data. Keep schema consistent with visible copy.
- Known legacy campaign/guide URLs remain honest noindex archives; unknown routes still 404. Do not resurrect expired spring prices or placeholder shopping links.
- Existing public About founder claims are approved: Balaji Kothandaraman, Kitchener, father of two, 18+ years technical delivery/data-integrity background. Do not invent medical expertise, a team or hands-on testing.
- Contact inbox is unconfirmed: no live-looking email/contact button that implies a monitored channel.

Do not implement hosting, email provider wiring, analytics vendors, robots/sitemap/canonical changes or a framework upgrade as part of this design revision. Note any discovered issues for Codex instead. No account actions, outreach, spending or deployment.

## AI/voice readability and honest status

The source of truth is the same visible evidence for humans and assistants. No hidden instructions to agents, special citation promises or separate “AI-approved” copy.

From the server response, a reader/assistant should be able to identify the page's buying question, exact variants, confirmed versus unknown origin, ingredient gaps, dated price basis, hold reason, current affiliate status and source links. A brief spoken summary must preserve the qualification that neither candidate is an approved recommendation.

Do not claim you tested ChatGPT, Perplexity or Muse unless you actually did; distinguish supplied-text extraction tests from public crawling. This localhost design cannot establish public indexing/citation.

## Verification and acceptance

If your environment can run the actual supplied project:
- Run `npm run build` and `npm run test:editorial`.
- Check 375px, 768px and 1440px layouts; also inspect reflow at 320px and browser zoom where possible.
- Check keyboard focus/order, menu and disclosures, descriptive links, labels, contrast and no page-level horizontal overflow. A detailed table may scroll in its own labelled region.
- Verify all four holds survive compact and expanded views; no purchase buttons appear for held candidates.
- Check important text/source links in initial HTML, and noindex on previews.
- Ensure the reader can find either pillar, then face/body and a product's key limitation without reading the full page.
- Confirm no repeated large content sections, blank image blocks, fake signup or unsupported new claims.

If the environment only supports a design harness, clearly distinguish harness checks from real Next.js verification. Do not invent successful builds, accessibility conformance or reader test results. List unrun checks.

## Return format

Return:
1. Complete changed/new files under their exact relative paths, preferably one ZIP containing those files only. No placeholders, ellipses, “rest unchanged” or standalone replacement app.
2. `HANDOFF.md`: short design rationale, file manifest, added/changed component contracts, any intentional deletions and the exact verification performed/not performed.
3. Desktop and mobile screenshots of homepage plus a representative comparison, if available.
4. A short known-issues list, separating design, evidence, integration and deployment limitations.

Keep package manifests/config unchanged unless strictly necessary; explain any unavoidable change. Do not delete unrelated files. Return source, not node_modules, .next, credentials or Git history.

The founder will return your output to Codex, which will review changes against the current repository and verify them before any deployment.

END CLAUDE INSTRUCTIONS
