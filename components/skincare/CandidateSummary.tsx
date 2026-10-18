import type { SkincareCandidate } from '@/types/editorial';
import { formatCad, unitPrice } from '@/lib/format';
import { isStillChecking } from '@/lib/readiness';

/**
 * Compact, skimmable product summary: exact name and pack, price with unit
 * basis, one fit statement, the main trade-off and the critical evidence gap.
 * The price date and "before tax and shipping" note is shown once above the
 * cards by ComparisonView. The only action points to the product's full
 * evidence on the same page — never a purchase link.
 */
export function CandidateSummary({ candidate: c }: { candidate: SkincareCandidate }) {
  const headingId = `p-${c.id}-h`;
  const unit = unitPrice(c.price, c.amount);
  const checking = isStillChecking(c);

  return (
    <article
      id={`p-${c.id}`}
      aria-labelledby={headingId}
      className="flex scroll-mt-6 flex-col gap-2.5 rounded-[14px] border border-line bg-paper p-4 sm:gap-3 sm:p-6"
    >
      <div>
        <h3 id={headingId} className="heading-display text-[21px] sm:text-[24px]">
          {c.productName}
        </h3>
        <p className="text-[15px] text-ink-muted">
          {c.format} · {c.variant} ·{' '}
          <span className="font-semibold text-ink">{formatCad(c.price.amountCad)}</span> ({unit.label})
        </p>
      </div>
      {checking ? (
        <p className="rounded-lg border border-dashed border-rust-dark bg-rust-tint/50 px-3 py-2 text-[15px]">
          <span className="font-bold text-rust-dark">Still checking, not a recommendation:</span>{' '}
          {c.holdReasons.length ? c.holdReasons.join('; ').toLowerCase() : 'review not complete'}.
        </p>
      ) : null}
      <dl className="flex flex-col gap-1.5 text-[15px]">
        {c.chooseIf[0] ? (
          <div>
            <dt className="inline font-bold">Fits if: </dt>
            <dd className="inline text-ink-body">{c.chooseIf[0]}</dd>
          </div>
        ) : null}
        {c.tradeOffs[0] ? (
          <div>
            <dt className="inline font-bold">Trade-off: </dt>
            <dd className="inline text-ink-body">{c.tradeOffs[0]}</dd>
          </div>
        ) : null}
      </dl>
      <a href={`#details-${c.id}`} className="self-start py-1 text-[15px] font-semibold text-sage-dark">
        Evidence and sources<span className="sr-only"> for {c.productName}</span>
        <span aria-hidden="true"> ↓</span>
      </a>
    </article>
  );
}
