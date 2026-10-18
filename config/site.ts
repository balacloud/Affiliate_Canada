import type { PillarDefinition, PillarId } from '@/types/editorial';

/**
 * Site-wide editorial configuration for the two-pillar redesign.
 * Readiness and integration states live here so pages render truthful
 * states without duplicating templates.
 */

export const siteName = 'SmartShopCA';

/**
 * Canonical origin for metadata and JSON-LD. Set NEXT_PUBLIC_SITE_URL in the
 * deployment environment; the fallback assumes the domain implied by the
 * repository's contact address and must be confirmed.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://smartshopca.ca').replace(/\/$/, '');

export const siteDescription =
  'An independent Canadian buying guide: small shortlists with clear origin, ingredient and price evidence.';

export const pillars: Record<PillarId, PillarDefinition> = {
  seasonal: {
    id: 'seasonal',
    label: 'Seasonal Canadian favourites',
    href: '/seasonal',
    promise: 'Discover useful picks for the current season.',
    description:
      'Small, well-reviewed selections of distinctive products for one specific seasonal need, explained with their trade-offs rather than ranked by hype. Broader than gifting.',
    summary: 'A few well-reviewed picks for one seasonal need at a time, with trade-offs and origin labelled precisely.',
    points: [
      'Up to seven picks, each answering one use case',
      'Made in, owned in and sold in Canada labelled separately',
      'Reviews and season fit checked for each collection',
    ],
    readiness: 'preparing',
    readinessLabel: 'Collections being prepared',
    ctaLabel: 'Explore seasonal favourites',
  },
  care: {
    id: 'care',
    label: 'Canadian-made personal care & household',
    href: '/care',
    promise: 'Understand ingredients and origin.',
    description:
      'Canadian-made products compared on published ingredient lists and product-level origin evidence. Personal care and household each get their own criteria, starting with skincare.',
    summary: 'Canadian-made products compared on published ingredients and product-level origin evidence. Skincare comes first.',
    points: [
      'Face and body moisturizers, compared separately',
      'Origin evidence checked per product, not inferred from a brand',
      'Laundry and dish care planned later, with their own method',
    ],
    readiness: 'preview',
    readinessLabel: 'Skincare comparison preview',
    ctaLabel: 'Explore personal care & household',
  },
};

export const pillarOrder: PillarId[] = ['seasonal', 'care'];

/**
 * Founder details confirmed by the founder for public use (2026-10-14).
 * No profile URL is supplied — do not add one until the founder provides it.
 */
export const founder = {
  name: 'Balaji Kothandaraman',
  location: 'Kitchener, Ontario',
  shortBio:
    'Canadian father of two and research-led founder with more than 18 years in software engineering and technical delivery, focused on data integrity and review.',
  role: 'Founder, researcher and editor',
};

/** Date the About page copy was last reviewed. */
export const aboutReviewed = '2026-10-14';

/**
 * Integration states. Nothing here is a secret. Flip a value only after the
 * corresponding integration genuinely works in production.
 */
export const integrations = {
  /** No subscribe server action exists yet; the email block renders "unavailable". */
  email: { configured: false as boolean },
  /** The repository names this address, but a working inbox is unconfirmed. */
  contact: { address: 'hello@smartshopca.ca', confirmed: false as boolean },
  /** Affiliate programs have been researched; none is active. */
  affiliate: { anyActive: false as boolean },
};

export const primaryNav = [
  { href: pillars.seasonal.href, label: 'Seasonal favourites', fullLabel: pillars.seasonal.label, pillar: 'seasonal' as const },
  { href: pillars.care.href, label: 'Canadian-made personal care & household', fullLabel: pillars.care.label, pillar: 'care' as const },
  { href: '/methodology', label: 'Methodology', fullLabel: 'Methodology' },
  { href: '/about', label: 'About', fullLabel: 'About' },
];
