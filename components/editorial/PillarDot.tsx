import type { PillarId } from '@/types/editorial';

/** Decorative pillar marker. Shape differs (circle vs square) as well as colour. */
export function PillarDot({ pillar }: { pillar: PillarId }) {
  return (
    <span
      aria-hidden="true"
      className={
        pillar === 'seasonal'
          ? 'inline-block h-2 w-2 shrink-0 rounded-full bg-rust'
          : 'inline-block h-2 w-2 shrink-0 rounded-[2px] bg-sage'
      }
    />
  );
}
