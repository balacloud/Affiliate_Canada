# Brand Architecture — SmartShopCA.ca

> **Status:** Canonical product-direction decision
> **Confirmed:** 2026-10-09
> **Scope expanded:** 2026-10-14 — founder approved expanding the skincare pillar to Canadian-made personal-care and household products with transparent ingredient screening. First launch category remains undecided.
> **Launch pillar selected:** 2026-10-14 — Canadian-made personal care and household products. Seasonal favourites remains a separate future pillar. The first product category, buyer group, budget, and launch date are pending.
> **First category selected:** 2026-10-14 — skincare. Product type, buyer group, cash cap, and launch date remain pending; household categories are expansion candidates.
> **Initial skincare scope selected:** 2026-10-14 — both face and body moisturizers, presented in separate comparisons. This supersedes earlier product-type selection questions. Buyer context, evidence readiness, cash cap, and launch date remain pending.

## Product vision

SmartShopCA helps Canadians discover fantastic Canadian products through small, trustworthy, opinionated shortlists. It is a multi-affiliate editorial platform: SmartShopCA recommends products from multiple brands and merchants and may earn a commission when a reader buys through a disclosed affiliate link.

SmartShopCA is one umbrella brand with multiple focused editorial pillars. It is not a merchant, a marketplace, or a random multi-category catalog.

## Initial pillars

### Seasonal Canadian favourites

Curated, well-reviewed boutique or distinctive products that fit how Canadians shop in a particular season. Recommendations should answer a specific use case and remain intentionally limited.

### Canadian-made personal care and household products

Canadian-made personal-care and household products explained through transparent ingredient screening. Category candidates include skincare, laundry detergent, and dishwashing liquid. Readers should understand manufacturing origin, disclosed ingredients, certifications, packaging, suitability, evidence, and uncertainty.

Keep personal-care and household categories distinct within this pillar: they require different comparison criteria, exposure contexts, disclosure checks, and evidence methods. Verify any sustainability claims separately. Missing ingredient information means screening is incomplete, not that a product passes.

Do not promise “non-toxic,” “non-allergenic,” or “endocrine-disruptor-free” products. Record specific screening criteria and supporting evidence; attribute manufacturer “hypoallergenic” claims without treating them as a guarantee. No medical advice or universal safety verdicts.

Start validation with one product category, selected through customer access and evidence feasibility. Canadian-made fragrance-free laundry detergent is an example candidate, not an approved launch or pilot.

## Family-of-brands inspiration

Gap Inc.'s Canadian storefronts illustrate the useful operating idea: distinct shopping experiences can share a parent ecosystem, subscriber relationship, rewards, and infrastructure.

SmartShopCA adapts the pattern rather than copying it:

| Shared across SmartShopCA | Kept distinct by pillar |
|:--|:--|
| Brand trust and Canadian focus | Editorial promise and audience intent |
| Design system and global navigation | Landing pages and URL namespaces |
| Affiliate disclosure and tracking | Product attributes and filters |
| Email platform and consent system | Subscriber topics/preferences |
| Author, methodology, and corrections policy | Evidence and review methodology |
| Analytics and publishing workflow | Schema, comparison criteria, and content calendar |

The homepage should explain the common promise and route visitors into a pillar. It should not combine unrelated seasonal goods and skincare in one undifferentiated ranking or product grid.

### Homepage design clarification — founder confirmed 2026-10-14

Keep **both pillars visibly represented on the umbrella homepage and in the information architecture**, even while only the skincare category is being prepared for first launch. Present two distinct entry points: Seasonal Canadian favourites and Canadian-made personal care & household products. Describe each promise separately. Show readiness truthfully: an unlaunched seasonal entry can explain that its content is being prepared, without presenting placeholder recommendations or a broken link.

Skincare-first is a launch sequence, not a rebrand of SmartShopCA into a skincare-only website. Face and body moisturizer comparisons sit within skincare under personal care & household; they are not the two top-level pillars. Laundry/dishwashing categories are later additions within that same pillar. Shared About, trust, disclosure and infrastructure should reflect both pillars, with category-specific evidence methods kept distinct. “Two brands” in the founder's discussion refers to these distinct experiences under the SmartShopCA umbrella; separate brand names or domains have not been selected.

## Information architecture direction

The exact routes require a design pass. Seasonal and ingredient-conscious experiences need separate namespaces, with distinct personal-care and household categories. The older proposed `/skincare` route below is a category candidate, not a complete namespace for the expanded pillar:

```text
/
/seasonal/
/seasonal/[collection]
/skincare/
/skincare/products/[slug]
/skincare/ingredients/[slug]
/methodology/
/about/
/privacy/
```

Existing `/{season}` routes are legacy scaffold behavior and may be migrated rather than expanded.

## Product and evidence boundaries

- "Canadian" must identify what is Canadian: brand ownership, headquarters, manufacturing, formulation, ingredients, or retail availability. Do not treat these as interchangeable.
- Reviews, prices, availability, certifications, merchant relationships, and Canadian-made claims require sources and a last-checked date.
- The ingredient identifier must show its inputs, rule version, sources, uncertainty, and last review date.
- Prefer precise screening language. Avoid absolute terms such as "safe", "non-toxic", and "hormone-safe" unless the page defines and supports the claim with appropriate evidence and qualifications.
- Skincare content is informational and not medical advice. It must not diagnose conditions or promise health outcomes.
- Adding a future pillar requires a distinct audience need, editorial method, content owner, merchant plan, and enough capacity to keep its data current.

## Near-term implementation consequence

The existing home-office application is reusable infrastructure, not the final information architecture. Before adding more legacy seasonal routes or directly converting the skincare prototype, define the shared shell, pillar navigation, route migration, common product fields, and pillar-specific product fields.
