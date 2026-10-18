import type { SkincareCandidate, SourceRef } from '@/types/editorial';
import { formatCad, formatDate, isPurchaseEligible, unitPrice } from '@/lib/format';
import { EvidenceTag } from '@/components/editorial/EvidenceTag';
import { OutboundLink } from '@/components/OutboundLink';
import { EvidenceLink } from '@/components/EvidenceLink';
import { SourceLinks } from './SourceLinks';
import { isStillChecking } from '@/lib/readiness';

interface CandidateCardProps {
  candidate: SkincareCandidate;
  sources: Record<string, SourceRef>;
  pageSlug: string;
}

/**
 * Full evidence for one product, in a native <details> panel so the page
 * stays skimmable. All text is server-rendered in the initial HTML (the
 * panel only collapses it visually). The essential limits — hold status and
 * each hold reason — are repeated in the always-visible <summary> line and
 * in CandidateSummary, so they are never hidden behind a click.
 *
 * Anchor: #details-<candidate id>. Each claim carries its own source links
 * from the record's source IDs; empty IDs render no link.
 */
export function CandidateCard({ candidate: c, sources, pageSlug }: CandidateCardProps) {
  const unit = unitPrice(c.price, c.amount);
  const eligible = isPurchaseEligible(c);
  const held = isStillChecking(c);
  const productSource = sources[c.price.sourceId];

  return (
    <details id={`details-${c.id}`} className="group scroll-mt-6 rounded-2xl border border-line bg-paper">
      <summary className="flex min-h-[56px] list-none flex-col gap-2 px-5 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:px-6">
        <span className="flex flex-col gap-0.5">
          <span className="font-serif text-[20px] font-semibold leading-snug sm:text-[22px]">{c.productName}</span>
          <span className="text-sm text-ink-muted">
            {held ? (
              <>
                <span className="font-semibold text-rust-dark">Still checking:</span> {c.holdReasons.length ? c.holdReasons.join('; ') : 'review not complete'}
              </>
            ) : (
              'Full evidence, shipping and returns'
            )}
          </span>
        </span>
        <span className="mt-1 flex shrink-0 items-center gap-1.5 text-sm font-semibold text-sage-dark">
          <span className="group-open:hidden">Show evidence</span>
          <span className="hidden group-open:inline">Hide</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
            className="transition-transform group-open:rotate-180"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </summary>

      <div className="flex flex-col gap-5 border-t border-line-soft px-5 pb-6 pt-5 sm:px-6">
        <p className="text-[15px]">
          <span className="font-semibold">
            {formatCad(c.price.amountCad)} for {c.variant}
          </span>{' '}
          · {unit.label} · {c.price.priceType} price on {formatDate(c.price.checked)}
          <SourceLinks ids={[c.price.sourceId]} sources={sources} label="Price source" />
        </p>

        <dl className="flex flex-col gap-4 text-base">
          <div>
            <dt className="font-bold">Origin</dt>
            <dd className="mt-1 flex flex-col gap-2">
              {c.origin.statements.map((s) => (
                <span key={s.text}>
                  <EvidenceTag kind="origin" level={s.level} />
                  {s.text}
                  <SourceLinks ids={s.sourceIds} sources={sources} />
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="font-bold">Ingredients</dt>
            <dd className="mt-1">
              <EvidenceTag kind="ingredients" level={c.ingredients.completeness} />
              {c.ingredients.text}
              {c.ingredients.scentObservation ? (
                <>
                  {' '}
                  <span className="font-semibold">Our observation:</span> {c.ingredients.scentObservation}
                </>
              ) : null}
              {c.ingredients.criteriaNotes?.length ? (
                <ul className="mt-1.5 list-disc pl-5">
                  {c.ingredients.criteriaNotes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              ) : null}
              <SourceLinks ids={c.ingredients.sourceIds} sources={sources} />
            </dd>
          </div>
          <div>
            <dt className="font-bold">Scent</dt>
            <dd className="mt-1">
              {c.scent.brandClaim
                ? `Brand's own wording: "${c.scent.brandClaim}".`
                : 'The brand makes no scent claim we could find.'}
            </dd>
          </div>
          <div>
            <dt className="font-bold">Shipping</dt>
            <dd className="mt-1">
              {c.shipping.text}{' '}
              {c.shipping.illustrativeSubtotalCad !== null
                ? `One item comes to about ${formatCad(c.shipping.illustrativeSubtotalCad)} before tax.`
                : "We don't show a delivered total."}
              <SourceLinks ids={c.shipping.sourceIds} sources={sources} />
            </dd>
          </div>
          <div>
            <dt className="font-bold">Returns</dt>
            <dd className="mt-1">
              {c.returns.text}
              <SourceLinks ids={c.returns.sourceIds} sources={sources} />
            </dd>
          </div>
        </dl>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-[10px] border border-sage-line p-3.5">
            <p className="kicker mb-1 text-sage-dark">Choose if</p>
            <ul className="flex flex-col gap-1 text-[15px]">
              {c.chooseIf.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[10px] border border-rust-line p-3.5">
            <p className="kicker mb-1 text-rust-dark">Skip if</p>
            <ul className="flex flex-col gap-1 text-[15px]">
              {c.skipIf.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        {eligible && c.merchantLink.href ? (
          <div className="flex flex-wrap items-center gap-3">
            <OutboundLink
              href={c.merchantLink.href}
              merchantName={c.merchantLink.merchantName}
              merchantId={c.merchantLink.merchantId}
              productId={c.id}
              campaignId="SKINCARE_MOISTURIZERS_2026"
              pageSlug={pageSlug}
              linkKind={c.merchantLink.kind === 'affiliate' ? 'affiliate' : 'merchant'}
              className="btn bg-sage text-white hover:bg-sage-dark"
            >
              Check price at {c.merchantLink.merchantName}
            </OutboundLink>
            <span className="text-sm text-ink-muted">
              {c.merchantLink.kind === 'affiliate'
                ? 'Affiliate link — we may earn a commission at no cost to you.'
                : 'Merchant link — we earn nothing from it.'}
            </span>
          </div>
        ) : (
          <p className="text-[15px] text-ink-muted">
            No buying link while this product is on hold.{' '}
            {productSource ? (
              <EvidenceLink href={productSource.url} className="text-sage-dark">
                See the {c.brand} product page we checked
              </EvidenceLink>
            ) : null}
          </p>
        )}
        <p className="text-[13px] text-ink-muted">
          Reviewed {formatDate(c.reviewed)} ·{' '}
          <a href={`#p-${c.id}`} className="text-ink-muted">
            Back to {c.brand} summary
          </a>
        </p>
      </div>
    </details>
  );
}
