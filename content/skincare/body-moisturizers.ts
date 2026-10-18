import type { SkincareComparison } from '@/types/editorial';
import { pickSources } from './sources';

/**
 * Research candidate snapshot — NOT live verification and NOT a published
 * recommendation. Both candidates are on research hold.
 */
export const bodyMoisturizers: SkincareComparison = {
  slug: 'body-moisturizers',
  path: '/care/skincare/body-moisturizers',
  category: 'body-moisturizer',
  pillar: 'care',
  readiness: 'preview',
  navLabel: 'Body moisturizers',
  h1: 'Body moisturizers for dry winter skin in Canada (2026)',
  purpose:
    'A body lotion and a body butter from Canadian brands, compared on origin evidence, ingredient disclosure and delivered cost.',
  metaTitle: 'Body moisturizers for dry winter skin in Canada (2026 draft comparison)',
  metaDescription:
    'A draft comparison of an unscented body lotion and a scent-free body butter from Canadian brands, with origin evidence, published ingredients and CAD prices checked October 14, 2026.',
  reviewed: '2026-10-14',
  tldr: {
    audience: 'People with dry skin on arms, legs and hands who prefer products without added fragrance.',
    distinction:
      'ATTITUDE is a large-format lotion with a published formula; Rocky Mountain Soap Co. is a small body butter with five disclosed ingredients, including beeswax.',
    price:
      'CAD $16.95 for 473 mL (CAD $3.58 per 100 mL) and CAD $17.00 for 55 g (CAD $30.91 per 100 g). Millilitres and grams are not directly comparable.',
    limits:
      "Both products are on hold for origin or label confirmation. We haven't handled either product, and stock isn't guaranteed.",
  },
  tableNote:
    'The lotion is sold by volume (mL) and the body butter by weight (g), so their unit prices are not directly comparable.',
  limitations: [
    'Prices are regular one-time CAD prices published on October 14, 2026, and may have changed.',
    'Shipping subtotals are illustrative, before tax and discounts — not checkout quotes.',
    'We did not test products, receive samples or check physical labels or batch information.',
    'Neither product has passed a complete screening review.',
  ],
  candidates: [
    {
      id: 'attitude-sensitive-body-lotion-unscented-473ml',
      brand: 'ATTITUDE',
      productName: 'ATTITUDE Sensitive Skin Body Lotion, Unscented',
      variant: '473 mL',
      format: 'Lotion',
      amount: { value: 473, unit: 'mL' },
      price: { amountCad: 16.95, priceType: 'regular', checked: '2026-10-14', sourceId: 'attitude-product' },
      scent: {
        brandClaim: 'no added fragrance',
        tableSummary: 'Brand: no added fragrance. No fragrance or aromatic oils found in the published list.',
      },
      origin: {
        statements: [
          {
            level: 'brand-wide-claim',
            scope: 'brand-wide',
            text: 'ATTITUDE describes a Canadian factory on its website.',
            sourceIds: ['attitude-factory'],
          },
          {
            level: 'not-confirmed',
            scope: 'none',
            text: "Manufacturing location not confirmed for this exact variant; the factory page doesn't establish it.",
            sourceIds: [],
          },
        ],
        tableSummary: 'Brand factory statement; this variant not confirmed',
      },
      ingredients: {
        completeness: 'full-published',
        text: 'Full formula published on the product page.',
        scentObservation:
          "We found no parfum/fragrance or aromatic essential oils in the published list. That isn't a guarantee against allergens or later formula changes.",
        sourceIds: ['attitude-product'],
      },
      shipping: {
        text: 'CAD $12.99 shipping for a small order; free shipping from CAD $74.00. Territories and PO boxes are excluded.',
        illustrativeSubtotalCad: 29.94,
        sourceIds: ['attitude-policies'],
      },
      returns: {
        text: 'Ordinary online purchases are final sale. Defective or problem orders are handled separately.',
        sourceIds: ['attitude-policies'],
      },
      chooseIf: ['You want a large-format body lotion with a published formula.'],
      skipIf: [
        "You need to be able to return it if it doesn't suit you, or you ship to a territory or PO box.",
      ],
      tradeOffs: ['A large liquid format, but shipping costs nearly as much as the bottle on a single-item order.'],
      status: 'research-hold',
      holdReasons: ['Origin of this exact variant not confirmed', 'Physical label not checked'],
      merchantLink: { kind: 'none', merchantId: 'attitude', merchantName: 'ATTITUDE', affiliateStatus: 'none' },
      reviewed: '2026-10-14',
    },
    {
      id: 'rocky-scent-free-body-butter-55g',
      brand: 'Rocky Mountain Soap Co.',
      productName: 'Rocky Mountain Soap Co. Scent Free Dry Skin Body Butter',
      variant: '55 g',
      format: 'Body butter',
      amount: { value: 55, unit: 'g' },
      price: { amountCad: 17, priceType: 'regular', checked: '2026-10-14', sourceId: 'rocky-product' },
      scent: {
        brandClaim: 'scent free',
        tableSummary: 'Brand: scent free. No fragrance or aromatic oils found in the published list.',
      },
      origin: {
        statements: [
          {
            level: 'product-page-claim',
            scope: 'exact-variant',
            text: 'The product page says it is made in the Canadian Rockies. Label and batch details not checked.',
            sourceIds: ['rocky-product'],
          },
        ],
        tableSummary: 'Product page states Canadian Rockies manufacture',
      },
      ingredients: {
        completeness: 'full-published',
        text: 'Five ingredients disclosed on the product page.',
        scentObservation:
          "We found no parfum/fragrance or aromatic essential oils in the published list. That isn't a guarantee against allergens or later formula changes.",
        criteriaNotes: ['Contains beeswax, so it does not meet a vegan preference.'],
        sourceIds: ['rocky-product'],
      },
      shipping: {
        text: 'CAD $8.95 standard shipping on orders under CAD $60.00. In-store stock not established.',
        illustrativeSubtotalCad: 25.95,
        sourceIds: ['rocky-product'],
      },
      returns: {
        text: 'The page includes return wording that covers used products; online returns are handled by contacting the company.',
        sourceIds: ['rocky-product'],
      },
      chooseIf: ['You want a short, fully disclosed ingredient list and a small size to try.'],
      skipIf: ['You avoid animal-derived ingredients such as beeswax.', 'You prefer a liquid lotion or a larger pack.'],
      tradeOffs: ['Five disclosed ingredients and a small 55 g solid format; its unit price cannot be directly compared with a lotion sold in mL.'],
      status: 'research-hold',
      holdReasons: ['Label and batch origin not checked'],
      merchantLink: {
        kind: 'none',
        merchantId: 'rocky-mountain-soap',
        merchantName: 'Rocky Mountain Soap Co.',
        affiliateStatus: 'none',
      },
      reviewed: '2026-10-14',
    },
  ],
  excludedExamples: [
    {
      name: 'Green Beaver Intense Moisture Body Lotion, 240 mL',
      reason:
        "Described with unscented language, but its published ingredients include aromatic oils and listed fragrance allergens. It isn't included in a shortlist that excludes aromatic oils. This is a labelling observation, not a safety judgement.",
      sourceIds: ['greenbeaver-product'],
    },
  ],
  sources: pickSources([
    'attitude-product',
    'attitude-factory',
    'attitude-policies',
    'rocky-product',
    'greenbeaver-product',
    'hc-cosmetics',
  ]),
  faqs: [
    {
      question: 'Why not compare the lotion and the body butter by price per 100?',
      answer:
        "The lotion is sold by volume and the butter by weight, and they're used in different amounts. We show each one's unit price in its own measure instead of pretending they line up.",
    },
    {
      question: 'Is "unscented" the same as having no fragrance ingredients?',
      answer:
        "Not always. Some products described as unscented still list aromatic oils or fragrance allergens. We report the brand's wording and what we saw in the published list separately.",
    },
    {
      question: 'What will one bottle or tin actually cost me?',
      answer:
        'We show an example one-item subtotal with standard shipping, before tax. Ordering several items can reach a free-shipping threshold and change the total.',
    },
  ],
};
