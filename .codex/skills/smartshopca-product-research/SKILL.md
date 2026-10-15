---
name: smartshopca-product-research
description: "Research or recheck SmartShopCA Canadian-made skincare and household product evidence, including origin, disclosed ingredients, claims, formula changes, and merchant details. Use for product dossiers and evidence refreshes, not medical advice or automatic publishing."
---

# SmartShopCA Product Research

Create reviewable, sourced product dossiers or change reports. Read the root `AGENTS.md`, `docs/stable/BRAND_ARCHITECTURE.md`, and the current selection in `CLAUDE_CONTEXT.md`. Skincare is the selected first category; keep household research separate unless requested.

## Scope each run

For buyer-discovery context, start with existing Reddit, forums and accessible Facebook discussions when useful. The founder prefers community-first research; interviews are optional. Cite post URLs and dates, distinguish opened text from search leads, deduplicate discussions, and retain contrary preferences. Community product/health claims require separate primary-source checks. Do not treat selected posts, votes or sentiment as representative usage, purchase conversion or paid demand. Report inaccessible Facebook/private groups honestly and use Golden Rule 28 for a follow-up prompt.

Use the supplied product shortlist, category, or research question. For monitoring, use the existing dossiers as the baseline; report only checked fields and meaningful changes. If no products or baseline exist, return a bounded discovery proposal or initial candidates labelled unverified, not a fabricated change report. Product type, buyer, and budget remain founder choices.

This skill defines a repeatable method, not a running background agent. Do not create schedules, contact brands, subscribe, buy samples, commit, push, deploy, or publish unless separately authorized. Research-output authorization does not authorize editing public product content.

## Source and check

- Browse current primary sources; open relevant pages rather than relying on search snippets. Regulatory and health claims use Health Canada or appropriate scientific sources; manufacturer pages support attributed manufacturer statements, not independent proof of efficacy or safety.
- Check origin per exact product, not brand nationality. Record the source wording and qualifier; distinguish Canadian-owned, manufactured in Canada, and Product of Canada. Use the Competition Bureau's current origin-claims guidance. If evidence is insufficient, mark origin unconfirmed.
- Capture exact product/variant, size, formula or label version where available, disclosed ingredient list and its source/date, claimed fragrance status, certifications with verification, CAD price, availability, shipping/returns, and review date. Note gaps and disagreement between label, brand, and merchant; do not silently choose a convenient list.
- Check ingredient questions against a named, versioned methodology. Health Canada's Cosmetic Ingredient Hotlist is a restrictions/prohibitions reference, not a certification or comprehensive safety verdict. Match identity, concentration limits, product type and use conditions when available; missing concentration or incomplete disclosure means unresolved assessment.
- Separate hazard evidence from exposure and product-level risk. Do not infer “non-toxic,” “endocrine-disruptor-free,” “non-allergenic,” or universal suitability. Attribute “hypoallergenic” claims and explain their limits. An ingredient absent from an exclusion list is not proven safe; missing ingredients are not a pass.
- Treat review quality, performance, and sustainability as separate evidence questions. Clearly distinguish hands-on observations, sourced third-party reviews, and brand claims. No invented ratings or endorsements.
- For inaccessible sources, record access limits and stop that claim's verification. Preserve the old dated evidence alongside current unknown status; access failure does not prove a formula or stock change. Do not keep retrying indefinitely.

If research cannot be completed with available access or evidence, follow Golden Rule 28 in `docs/stable/GOLDEN_RULES.md`: explain the specific gap and provide a self-contained outside-LLM research prompt for the founder to run and return. Complete available research first. Review returned results with source attribution and material-claim checks; do not treat another model's answer as verification.

## Output

Include run date and scope, sources with URLs and access dates, findings, uncertainties, conflicts, and next verification steps. Label material claims as primary-source finding, attributed manufacturer claim, inference, or unknown. When authorized to save research, use dated records under `docs/Research/`; preserve prior evidence rather than overwriting history.

For each product, report origin status, ingredient-disclosure completeness, screening-method version and result (or not assessed), merchant details, and suitability trade-offs. A monitoring report compares old/new fields with source evidence, flags formula or claim changes for editorial review, and distinguishes “no change found in checked fields” from unverified fields.

Publication needs the repository pre-publish checklist and any relevant qualified review. This skill outputs research, not publication approval, legal clearance, or medical recommendations.

## Primary starting references

Open these afresh when relevant; they are starting points, not pre-verified evidence for a product:

- [Cosmetic advertising, labelling and ingredients](https://www.canada.ca/en/health-canada/services/cosmetics/cosmetic-advertising-labelling-ingredients.html)
- [Cosmetic Ingredient Hotlist](https://www.canada.ca/en/health-canada/services/consumer-product-safety/cosmetics/cosmetic-ingredient-hotlist-prohibited-restricted-ingredients.html)
- [Endocrine-related effects in risk assessment](https://www.canada.ca/en/health-canada/services/chemical-substances/fact-sheets/consideration-endocrine-related-effects-risk-assessment.html)
- [Made in Canada claims](https://competition-bureau.canada.ca/en/deceptive-marketing-practices/made-canada-claims)
