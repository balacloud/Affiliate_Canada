import type { SkincareComparison } from '@/types/editorial';
import { faceMoisturizers } from './face-moisturizers';
import { bodyMoisturizers } from './body-moisturizers';

/** Skincare comparisons in launch order. Face and body stay separate. */
export const skincareComparisons: SkincareComparison[] = [faceMoisturizers, bodyMoisturizers];

export function getSkincareComparison(slug: string): SkincareComparison | undefined {
  return skincareComparisons.find((c) => c.slug === slug);
}

export { faceMoisturizers, bodyMoisturizers };
