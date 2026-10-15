import type { SkincareComparison } from '@/types/editorial';
import { pickSources } from './sources';

/**
 * Research candidate snapshot — NOT live verification and NOT a published
 * recommendation. Both candidates are on research hold.
 */
export const faceMoisturizers: SkincareComparison = {
  slug: 'face-moisturizers',
  path: '/care/skincare/face-moisturizers',
  category: 'face-moisturizer',
  pillar: 'care',
  readiness: 'preview',
  navLabel: 'Face moisturizers',
  h1: 'Which face moisturizer should you compare for colder weather in Canada in 2026?',
  metaTitle: 'Face moisturizers for colder weather in Canada (2026 draft comparison)',
  metaDescription:
    'A draft comparison of two fragrance-free face creams from Canadian brands, with origin evidence, ingredient disclosure and CAD prices checked October 14, 2026.',
  reviewed: '2026-10-14',
  tldr: {
    audience:
      'People looking for a fragrance-free daily face cream from a Canadian brand for drier winter months.',
    distinction:
      "Marcelle publishes its full ingredient list but hasn't confirmed where this product is made; Riversol's product page says Made in Canada, but we couldn't get its current full ingredient list.",
    price: 'CAD $22.95 to $49.00 for 50 mL (CAD $45.90 to $98.00 per 100 mL), before shipping and tax.',
    limits:
      "Both products are on hold. We haven't handled either product or checked a physical label, and stock isn't guaranteed.",
  },
  limitations: [
    'Prices are regular one-time CAD prices published on October 14, 2026, and may have changed.',
    'Shipping subtotals are illustrative, before tax and discounts — not checkout quotes.',
    'We did not test products, receive samples or check physical labels.',
    'Neither product has passed a complete screening review.',
  ],
  candidates: [
    {
      id: 'marcelle-moisture-cream-50ml',
      brand: 'Marcelle',
      productName: 'Marcelle Moisture Cream',
      variant: '50 mL jar',
      format: 'Cream',
      amount: { value: 50, unit: 'mL' },
      price: { amountCad: 22.95, priceType: 'regular', checked: '2026-10-14', sourceId: 'marcelle-product' },
      scent: {
        brandClaim: 'fragrance-free',
        tableSummary: 'Brand: fragrance-free. No fragrance or aromatic oils found in the published list.',
      },
      origin: {
        statements: [
          {
            level: 'brand-wide-claim',
            scope: 'brand-wide',
            text: 'Marcelle says 89% of its skincare is made in Canada.',
            sourceIds: ['marcelle-origin'],
          },
          {
            level: 'not-confirmed',
            scope: 'none',
            text: 'Manufacturing location not confirmed for this product.',
            sourceIds: [],
          },
        ],
        tableSummary: 'Brand-wide claim only; this product not confirmed',
      },
      ingredients: {
        completeness: 'full-published',
        text: 'Full ingredient list published on the product page.',
        scentObservation:
          "We found no parfum/fragrance or aromatic essential oils in the published list. That isn't a guarantee against allergens or later formula changes.",
        sourceIds: ['marcelle-product'],
      },
      shipping: {
        text: 'CAD $8.00 standard shipping on orders under CAD $60.00.',
        illustrativeSubtotalCad: 30.95,
        sourceIds: ['marcelle-shipping'],
      },
      returns: {
        text:
          "30-day returns if unused and unopened; return postage isn't refunded. The policy page shows another brand's contact details, so confirm return steps with Marcelle first.",
        sourceIds: ['marcelle-refund'],
      },
      chooseIf: ['You want the lower price per 100 mL and to read the full ingredient list before buying.'],
      skipIf: ['Confirmed Canadian manufacture of this exact product is your deciding factor.'],
      tradeOffs: ['Lower cost per 100 mL, but origin is only supported by a brand-wide percentage.'],
      status: 'research-hold',
      holdReasons: ['Product origin not confirmed'],
      merchantLink: { kind: 'none', merchantId: 'marcelle', merchantName: 'Marcelle', affiliateStatus: 'none' },
      reviewed: '2026-10-14',
    },
    {
      id: 'riversol-daily-moisturizing-cream-50ml',
      brand: 'Riversol',
      productName: 'Riversol Daily Moisturizing Cream',
      variant: '50 mL',
      format: 'Cream',
      amount: { value: 50, unit: 'mL' },
      price: { amountCad: 49, priceType: 'regular', checked: '2026-10-14', sourceId: 'riversol-product' },
      scent: {
        brandClaim: 'fragrance-free',
        tableSummary: 'Brand: fragrance-free. Full ingredient list not obtained.',
      },
      origin: {
        statements: [
          {
            level: 'product-page-claim',
            scope: 'exact-variant',
            text: "The product page says Made in Canada. We haven't checked a physical label.",
            sourceIds: ['riversol-product'],
          },
        ],
        tableSummary: 'Product page says Made in Canada',
      },
      ingredients: {
        completeness: 'not-obtained',
        text: "Current full ingredient list not obtained, so we can't check it for fragrance or other ingredients.",
        sourceIds: ['riversol-product'],
      },
      shipping: {
        text: "Free shipping from CAD $69.00. Shipping for a single item wasn't confirmed.",
        illustrativeSubtotalCad: null,
        unknownReason: 'Single-item shipping not confirmed',
        sourceIds: ['riversol-product'],
      },
      returns: {
        text: 'The site advertises a 30-day money-back guarantee; eligibility details are unresolved.',
        sourceIds: ['riversol-refund'],
      },
      chooseIf: ['A product-level Made in Canada statement matters more to you than price.'],
      skipIf: [
        "You need to see the full current ingredient list first, or you're watching cost per 100 mL.",
      ],
      tradeOffs: ['Clearer origin statement, but about twice the cost per 100 mL and no current ingredient list.'],
      status: 'research-hold',
      holdReasons: ['Current full ingredient list not obtained', 'Stock status unclear'],
      merchantLink: { kind: 'none', merchantId: 'riversol', merchantName: 'Riversol', affiliateStatus: 'researched' },
      reviewed: '2026-10-14',
    },
  ],
  excludedExamples: [],
  sources: pickSources([
    'marcelle-product',
    'marcelle-origin',
    'marcelle-shipping',
    'marcelle-refund',
    'riversol-product',
    'riversol-refund',
    'hc-cosmetics',
  ]),
  faqs: [
    {
      question: 'Is a Canadian brand the same as Canadian-made?',
      answer:
        "No. A company can be Canadian-owned and make some products elsewhere. We only call a product Canadian-made when there's evidence for that specific item.",
    },
    {
      question: 'What does "fragrance-free" mean on these pages?',
      answer:
        "It's the brand's own wording, which we report as their claim. Where a full ingredient list was available, we also note whether we saw parfum, fragrance or aromatic essential oils in it. Neither is a guarantee about allergies.",
    },
    {
      question: "Why don't you show cost per month?",
      answer:
        'How long a jar lasts depends on how much you use. We show price per 100 mL and an example one-item delivered subtotal instead.',
    },
  ],
};
