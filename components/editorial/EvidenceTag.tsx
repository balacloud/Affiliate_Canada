import type { IngredientCompleteness, OriginEvidenceLevel } from '@/types/editorial';

type TagStyle = 'solid' | 'outline' | 'dashed';

const originTags: Record<OriginEvidenceLevel, { label: string; style: TagStyle }> = {
  'label-verified': { label: 'Label checked', style: 'solid' },
  'product-page-claim': { label: 'Product-page claim', style: 'outline' },
  'brand-wide-claim': { label: 'Brand-wide claim', style: 'outline' },
  conflicting: { label: 'Conflicting', style: 'dashed' },
  'not-confirmed': { label: 'Not confirmed', style: 'dashed' },
};

const ingredientTags: Record<IngredientCompleteness, { label: string; style: TagStyle }> = {
  'full-published': { label: 'Published list', style: 'solid' },
  partial: { label: 'Partial list', style: 'dashed' },
  'not-obtained': { label: 'Not obtained', style: 'dashed' },
};

const styleClass: Record<TagStyle, string> = {
  solid: 'bg-ink text-ivory border border-ink',
  outline: 'border border-ink-muted text-ink',
  dashed: 'border border-dashed border-ink-muted text-ink',
};

/**
 * Evidence label. Meaning is carried by the visible words and by fill vs
 * solid outline vs dashed outline — never by colour alone, and never with
 * shields or check marks that could imply safety clearance.
 */
export function EvidenceTag(
  props: { kind: 'origin'; level: OriginEvidenceLevel } | { kind: 'ingredients'; level: IngredientCompleteness },
) {
  const tag = props.kind === 'origin' ? originTags[props.level] : ingredientTags[props.level];
  return <span className={`tag mr-2 ${styleClass[tag.style]}`}>{tag.label}</span>;
}
