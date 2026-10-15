import type { PackAmount, PriceSnapshot, SkincareCandidate } from '@/types/editorial';

const cad = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/** "CAD $22.95" — explicit currency code avoids confusion with USD. */
export function formatCad(amount: number): string {
  return `CAD ${cad.format(amount)}`;
}

/** Formats an ISO date (YYYY-MM-DD) as "October 14, 2026" without timezone drift. */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** Price per 100 of the pack's own unit (mL or g). Never converts between units. */
export function unitPrice(price: PriceSnapshot, amount: PackAmount): { value: number; label: string } {
  const value = Math.round((price.amountCad / amount.value) * 100 * 100) / 100;
  return { value, label: `${formatCad(value)} per 100 ${amount.unit}` };
}

export function packLabel(c: Pick<SkincareCandidate, 'price' | 'amount'>): string {
  return `${formatCad(c.price.amountCad)} / ${c.amount.value} ${c.amount.unit}`;
}

/**
 * A candidate may show a merchant call-to-action only when it is published,
 * its evidence is complete enough, and (for affiliate links) the program is
 * genuinely active. Everything else links to evidence only.
 */
export function isPurchaseEligible(c: SkincareCandidate): boolean {
  if (c.status !== 'published') return false;
  if (c.holdReasons.length > 0) return false;
  if (c.merchantLink.kind === 'none' || !c.merchantLink.href) return false;
  if (c.merchantLink.kind === 'affiliate' && c.merchantLink.affiliateStatus !== 'active') return false;
  if (c.ingredients.completeness !== 'full-published') return false;
  if (!c.ingredients.sourceIds.length) return false;
  if (c.origin.statements.some((s) => s.level === 'not-confirmed' || s.level === 'conflicting')) return false;
  return c.origin.statements.some(
    (s) => s.scope === 'exact-variant' &&
      (s.level === 'label-verified' || s.level === 'product-page-claim') &&
      s.sourceIds.length > 0,
  );
}
