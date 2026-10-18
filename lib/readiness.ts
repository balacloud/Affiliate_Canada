import type { SkincareCandidate } from '@/types/editorial';

/**
 * Editorial readiness — one rule used everywhere a page says whether a
 * product is "still being checked".
 *
 * A candidate is editorially reviewed only when its status is `published`
 * AND it has no outstanding hold reasons. This is deliberately separate from
 * `isPurchaseEligible` (lib/format.ts): a fully reviewed product can still
 * lack an eligible merchant destination, and that must not make it look
 * unreviewed — nor may a merchant link make an unreviewed product look ready.
 */
export function isEditoriallyReviewed(c: Pick<SkincareCandidate, 'status' | 'holdReasons'>): boolean {
  return c.status === 'published' && c.holdReasons.length === 0;
}

export function isStillChecking(c: Pick<SkincareCandidate, 'status' | 'holdReasons'>): boolean {
  return !isEditoriallyReviewed(c);
}

/** Short status line, e.g. "2 products, both still being checked". */
export function comparisonStatusLabel(candidates: Pick<SkincareCandidate, 'status' | 'holdReasons'>[]): string {
  const n = candidates.length;
  const checking = candidates.filter(isStillChecking).length;
  if (checking === 0) return n === 1 ? '1 product reviewed' : `${n} products reviewed`;
  if (checking === n) {
    if (n === 1) return '1 product, still being checked';
    if (n === 2) return '2 products, both still being checked';
    return `${n} products, all still being checked`;
  }
  return `${n} products, ${checking} still being checked`;
}
