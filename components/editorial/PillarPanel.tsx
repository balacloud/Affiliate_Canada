import Link from 'next/link';
import type { ReactNode } from 'react';
import type { PillarDefinition } from '@/types/editorial';
import { ReadinessBadge } from './ReadinessBadge';
import { ArrowIcon } from './ArrowIcon';

/**
 * Compact entry point to one of the two editorial pillars.
 * Shows label, one-sentence benefit, truthful readiness and a single CTA.
 * Optional `children` render below the CTA as visually subordinate shortcuts
 * (e.g. direct links to the face and body comparisons inside the care pillar).
 */
export function PillarPanel({
  pillar,
  headingLevel = 2,
  children,
}: {
  pillar: PillarDefinition;
  headingLevel?: 2 | 3;
  children?: ReactNode;
}) {
  const seasonal = pillar.id === 'seasonal';
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  const headingId = `pillar-${pillar.id}`;
  return (
    <article
      aria-labelledby={headingId}
      className={`flex flex-col gap-3 rounded-[14px] border border-line border-t-[5px] bg-paper px-4 py-4 sm:gap-3.5 sm:p-7 ${
        seasonal ? 'border-t-rust' : 'border-t-sage'
      }`}
    >
      <p className={`kicker ${seasonal ? 'text-rust' : 'text-sage'}`}>{pillar.label}</p>
      <Heading id={headingId} className="heading-display text-[23px] sm:text-[30px]">
        {pillar.promise}
      </Heading>
      <p className="text-[16px] text-ink-body sm:text-[17px]">{pillar.summary}</p>
      <div>
        <ReadinessBadge tone={pillar.id} marker={pillar.readiness === 'preparing' ? 'ring' : 'square'}>
          {pillar.readinessLabel}
        </ReadinessBadge>
      </div>
      <div className="flex flex-col gap-3 sm:gap-4 sm:pt-1">
        <Link
          href={pillar.href}
          className={`btn self-start text-left text-white ${seasonal ? 'bg-rust hover:bg-rust-dark' : 'bg-sage hover:bg-sage-dark'}`}
        >
          {pillar.ctaLabel}
          <ArrowIcon />
        </Link>
        {children}
      </div>
    </article>
  );
}
