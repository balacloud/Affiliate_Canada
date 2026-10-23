import type { PillarDefinition, PillarId } from '@/types/editorial';

/**
 * Site-wide editorial configuration for the two-pillar redesign.
 * Readiness and integration states live here so pages render truthful
 * states without duplicating templates.
 */

export const siteName = 'SmartShopCA';
export const siteTagline = 'Canadian products. Clearer choices.';
export const siteSupportingMessage = 'Worthwhile products. Clearer information. A Canadian perspective.';

/**
 * Canonical origin for metadata and JSON-LD. Set NEXT_PUBLIC_SITE_URL in the
 * deployment environment; the fallback assumes the domain implied by the
 * repository's contact address and must be confirmed.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.smartshopca.ca').replace(/\/$/, '');

export const siteDescription =
  'Canadian product discovery, clear comparisons and source-based research. Affiliate recommendations and supplier-fulfilled shopping are in development.';

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
 * Founder details confirmed for public use (2026-10-14), limited to About
 * by the founder's October 19 preference. Other pages use publication attribution.
 * No profile URL is supplied — do not add one until the founder provides it.
 */
export const founder = {
  name: 'Balaji Kothandaraman',
  location: 'Kitchener, Ontario',
  shortBio:
    'Canadian father of two and research-led founder with more than 18 years in software engineering and technical delivery, focused on data integrity and review.',
  role: 'Founder & Product Lead',
};

/** Date the About page copy was last reviewed. */
export const aboutReviewed = '2026-10-19';

/** Public team profiles approved October 19; personal details stay on About. */
export const teamMembers = [
  {
    id: 'balaji',
    name: founder.name,
    role: 'Founder & Product Lead',
    bio: 'Balaji brings more than 18 years of experience in software engineering and technical delivery, including data integrity, reconciliation and quality controls. At SmartShopCA, his focus is the platform, product direction and making comparisons easier to use.',
  },
  {
    id: 'sathyadevi',
    name: 'Sathyadevi',
    role: 'Co-founder & Research Contributor',
    bio: 'Sathyadevi holds a Ph.D. in Microbiology-Biochemistry and has training in Applied Clinical Research, with experience in laboratory research and scientific writing. She began contributing to SmartShopCA in October 2026. Her focus is reading scientific literature, examining supporting sources and helping explain product evidence clearly.',
    joined: '2026-10-19',
  },
];

/**
 * Integration states. Nothing here is a secret. Flip a value only after the
 * corresponding integration genuinely works in production.
 */
export const integrations = {
  /** No subscribe server action exists yet; the email block renders "unavailable". */
  email: { configured: false as boolean },
  /** Receive/reply tested by the founder October 22, 2026. */
  contact: { address: 'support@smartshopca.ca', confirmed: true as boolean },
  /** Affiliate programs have been researched; none is active. */
  affiliate: { anyActive: false as boolean },
};

export const primaryNav = [
  { href: pillars.seasonal.href, label: 'Seasonal favourites', fullLabel: pillars.seasonal.label, pillar: 'seasonal' as const },
  { href: pillars.care.href, label: 'Canadian-made personal care & household', fullLabel: pillars.care.label, pillar: 'care' as const },
  { href: '/methodology', label: 'Methodology', fullLabel: 'Methodology' },
  { href: '/about', label: 'About', fullLabel: 'About' },
  { href: '/partnerships', label: 'For brands', fullLabel: 'For brands and retailers' },
  { href: '/contact', label: 'Contact', fullLabel: 'Contact' },
];
