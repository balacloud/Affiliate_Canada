import type { SourceRef } from '@/types/editorial';

/** Research snapshot sources. All accessed October 14, 2026. */
const accessed = '2026-10-14';

export const skincareSources: Record<string, SourceRef> = {
  'marcelle-product': {
    id: 'marcelle-product',
    label: 'Marcelle — Moisture Cream (50 mL) product page',
    url: 'https://marcelle.com/en/products/moisture-cream-50ml?variant=44454916423879',
    kind: 'product-page',
    accessed,
  },
  'marcelle-origin': {
    id: 'marcelle-origin',
    label: 'Marcelle — manufacturing commitment statement',
    url: 'https://marcelle.com/en/pages/notre-engagement-envers-vous',
    kind: 'brand-statement',
    accessed,
  },
  'marcelle-shipping': {
    id: 'marcelle-shipping',
    label: 'Marcelle — shipping policy',
    url: 'https://marcelle.com/en/policies/shipping-policy',
    kind: 'brand-policy',
    accessed,
  },
  'marcelle-refund': {
    id: 'marcelle-refund',
    label: 'Marcelle — refund policy',
    url: 'https://marcelle.com/en/policies/refund-policy',
    kind: 'brand-policy',
    accessed,
  },
  'riversol-product': {
    id: 'riversol-product',
    label: 'Riversol — Daily Moisturizing Cream product page',
    url: 'https://www.riversol.com/products/daily-moisturizing-cream',
    kind: 'product-page',
    accessed,
  },
  'riversol-refund': {
    id: 'riversol-refund',
    label: 'Riversol — refund policy',
    url: 'https://www.riversol.com/policies/refund-policy',
    kind: 'brand-policy',
    accessed,
  },
  'attitude-product': {
    id: 'attitude-product',
    label: 'ATTITUDE — Sensitive Skin Body Lotion product page',
    url: 'https://ca.attitudeliving.com/products/body-lotion-sensitive-skin/',
    kind: 'product-page',
    accessed,
  },
  'attitude-factory': {
    id: 'attitude-factory',
    label: 'ATTITUDE — "Our factory" page',
    url: 'https://ca.attitudeliving.com/our-factory',
    kind: 'brand-statement',
    accessed,
  },
  'attitude-policies': {
    id: 'attitude-policies',
    label: 'ATTITUDE — refund and shipping policy',
    url: 'https://ca.attitudeliving.com/refund-policy',
    kind: 'brand-policy',
    accessed,
  },
  'rocky-product': {
    id: 'rocky-product',
    label: 'Rocky Mountain Soap Co. — Scent Free Dry Skin Body Butter (origin wording, shipping and returns on page)',
    url: 'https://www.rockymountainsoap.com/products/unscented-body-butter',
    kind: 'product-page',
    accessed,
  },
  'greenbeaver-product': {
    id: 'greenbeaver-product',
    label: 'Green Beaver — Intense Moisture Body Lotion product page',
    url: 'https://greenbeaver.com/products/intense-moisture-body-lotion',
    kind: 'product-page',
    accessed,
  },
  'hc-cosmetics': {
    id: 'hc-cosmetics',
    label: 'Health Canada — cosmetic advertising, labelling and ingredients',
    url: 'https://www.canada.ca/en/health-canada/services/cosmetics/cosmetic-advertising-labelling-ingredients.html',
    kind: 'regulator',
    accessed,
  },
};

export function pickSources(ids: string[]): SourceRef[] {
  return ids.map((id) => {
    const s = skincareSources[id];
    if (!s) throw new Error(`Unknown skincare source id: ${id}`);
    return s;
  });
}
