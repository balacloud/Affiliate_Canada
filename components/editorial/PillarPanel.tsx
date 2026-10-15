import Link from 'next/link';
import type { PillarDefinition } from '@/types/editorial';
import { ReadinessBadge } from './ReadinessBadge';
import { ArrowIcon } from './ArrowIcon';

/** One of the two balanced homepage pillar destinations. */
export function PillarPanel({ pillar, headingLevel = 2 }: { pillar: PillarDefinition; headingLevel?: 2 | 3 }) {
  const seasonal = pillar.id === 'seasonal';
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  const headingId = `pillar-${pillar.id}`;
  return (
    <article
      aria-labelledby={headingId}
      className={`flex flex-col gap-5 rounded-[14px] border border-line border-t-[6px] bg-paper p-6 sm:p-9 ${
        seasonal ? 'border-t-rust' : 'border-t-sage'
      }`}
    >
      <p className={`kicker ${seasonal ? 'text-rust' : 'text-sage'}`}>{pillar.label}</p>
      <Heading id={headingId} className="heading-display text-[28px] sm:text-[34px]">
        {pillar.promise}
      </Heading>
      <p className="text-ink-body">{pillar.description}</p>
      <ul className="flex flex-col gap-2.5 text-base">
        {pillar.points.map((pt) => (
          <li key={pt} className="flex gap-3">
            <span aria-hidden="true" className={seasonal ? 'text-rust' : 'text-sage'}>
              —
            </span>
            {pt}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-2">
        <ReadinessBadge tone={pillar.id} marker={pillar.readiness === 'preparing' ? 'ring' : 'square'}>
          {pillar.readinessLabel}
        </ReadinessBadge>
        <Link
          href={pillar.href}
          className={`btn text-white ${seasonal ? 'bg-rust hover:bg-rust-dark' : 'bg-sage hover:bg-sage-dark'}`}
        >
          {pillar.ctaLabel}
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
