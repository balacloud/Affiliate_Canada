/**
 * Editorial content model for the two-pillar SmartShopCA redesign.
 *
 * Kept separate from the legacy `types/index.ts` (tech-deal Product /
 * Collection / Merchant unions) so research-held skincare records are never
 * forced into fields that imply verified availability or active affiliates.
 */

/** The two editorial pillars under the SmartShopCA umbrella. */
export type PillarId = 'seasonal' | 'care';

/** Public readiness of a pillar or category. Controls copy, not routing. */
export type Readiness = 'preparing' | 'preview' | 'published';

/** Categories inside the personal care & household pillar. */
export type CareCategoryId = 'face-moisturizer' | 'body-moisturizer';

/** ISO date string, YYYY-MM-DD. */
export type IsoDate = string;

export type SourceKind =
  | 'product-page'
  | 'brand-statement'
  | 'brand-policy'
  | 'regulator'
  | 'retailer';

/** A dated, linkable piece of evidence. Never an affiliate link. */
export interface SourceRef {
  id: string;
  label: string;
  url: string;
  kind: SourceKind;
  accessed: IsoDate;
}

/**
 * How strong the origin evidence is for THIS exact product/variant.
 * Ordered roughly strongest → weakest. Absence of evidence is
 * `not-confirmed`, never a pass.
 */
export type OriginEvidenceLevel =
  | 'label-verified'
  | 'product-page-claim'
  | 'brand-wide-claim'
  | 'conflicting'
  | 'not-confirmed';

export type OriginClaimScope = 'exact-variant' | 'product-line' | 'brand-wide' | 'none';

export interface OriginStatement {
  level: OriginEvidenceLevel;
  scope: OriginClaimScope;
  /** Reader-facing sentence, attributed where it is a claim. */
  text: string;
  sourceIds: string[];
}

export interface OriginEvidence {
  /** One or more statements, e.g. a brand-wide claim plus a "not confirmed" line. */
  statements: OriginStatement[];
  /** Plain-language summary for compact table cells. */
  tableSummary: string;
}

export type IngredientCompleteness = 'full-published' | 'partial' | 'not-obtained';

export interface IngredientEvidence {
  completeness: IngredientCompleteness;
  /** Reader-facing explanation of what we have and what it does not prove. */
  text: string;
  sourceIds: string[];
  /** Factual observation about scent-related ingredients in the retrieved list, if any list was retrieved. */
  scentObservation?: string;
  /** Facts relevant to declared screening criteria (e.g. contains beeswax). */
  criteriaNotes?: string[];
}

export interface ScentInfo {
  /** The brand's own wording, reported as a claim, e.g. "fragrance-free". */
  brandClaim: string | null;
  /** Compact table text. */
  tableSummary: string;
}

export type MeasureUnit = 'mL' | 'g';

export interface PackAmount {
  value: number;
  unit: MeasureUnit;
}

export interface PriceSnapshot {
  amountCad: number;
  priceType: 'regular' | 'sale';
  checked: IsoDate;
  sourceId: string;
}

export interface ShippingSnapshot {
  /** Reader-facing summary of the published shipping terms. */
  text: string;
  /** Illustrative one-item subtotal before tax; null when it cannot be calculated honestly. */
  illustrativeSubtotalCad: number | null;
  /** Explains a null subtotal in table cells. */
  unknownReason?: string;
  sourceIds: string[];
}

export interface ReturnsSnapshot {
  text: string;
  sourceIds: string[];
}

export type AffiliateStatus = 'none' | 'researched' | 'applied' | 'active';

/**
 * How a product may link to a merchant.
 *  - `none`: no merchant link shown (evidence links still appear in Sources).
 *  - `merchant-direct`: plain non-commission link to the merchant.
 *  - `affiliate`: commission link; only rendered when affiliateStatus is `active`.
 */
export interface MerchantLink {
  kind: 'none' | 'merchant-direct' | 'affiliate';
  merchantId: string;
  merchantName: string;
  href?: string;
  affiliateStatus: AffiliateStatus;
}

export type CandidateStatus = 'research-hold' | 'ready-for-review' | 'published';

export interface SkincareCandidate {
  id: string;
  brand: string;
  productName: string;
  /** Exact variant as sold, e.g. "50 mL jar". */
  variant: string;
  format: string;
  amount: PackAmount;
  price: PriceSnapshot;
  scent: ScentInfo;
  origin: OriginEvidence;
  ingredients: IngredientEvidence;
  shipping: ShippingSnapshot;
  returns: ReturnsSnapshot;
  chooseIf: string[];
  skipIf: string[];
  tradeOffs: string[];
  status: CandidateStatus;
  /** Plain-language reasons shown on held cards. */
  holdReasons: string[];
  merchantLink: MerchantLink;
  reviewed: IsoDate;
}

export interface ExcludedExample {
  name: string;
  /** Factual reason, no medical verdict. */
  reason: string;
  sourceIds: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SkincareComparison {
  slug: string;
  path: string;
  category: CareCategoryId;
  pillar: 'care';
  readiness: Readiness;
  navLabel: string;
  h1: string;
  /** One-sentence purpose shown directly under the H1. */
  purpose: string;
  metaTitle: string;
  metaDescription: string;
  reviewed: IsoDate;
  tldr: {
    audience: string;
    distinction: string;
    price: string;
    limits: string;
  };
  /** Note shown under the table, e.g. when units differ across formats. */
  tableNote?: string;
  limitations: string[];
  candidates: SkincareCandidate[];
  excludedExamples: ExcludedExample[];
  sources: SourceRef[];
  faqs: FaqItem[];
}

export interface PillarDefinition {
  id: PillarId;
  label: string;
  href: string;
  promise: string;
  description: string;
  /** One-sentence benefit for compact entry points (homepage panels). */
  summary: string;
  points: string[];
  readiness: Readiness;
  readinessLabel: string;
  ctaLabel: string;
}

/** Result a future subscribe server action must return. */
export type SubscribeResult =
  | { ok: true }
  | { ok: false; reason: 'invalid-email' | 'missing-consent' | 'missing-topic' | 'service-error' };

export type SubscribeTopic = 'seasonal' | 'care' | 'both';
