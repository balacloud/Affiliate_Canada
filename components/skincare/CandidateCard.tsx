import type { SkincareCandidate, SourceRef } from '@/types/editorial';
import { formatCad, formatDate, isPurchaseEligible, unitPrice } from '@/lib/format';
import { EvidenceTag } from '@/components/editorial/EvidenceTag';
import { ReadinessBadge } from '@/components/editorial/ReadinessBadge';
import { OutboundLink } from '@/components/OutboundLink';
import { EvidenceLink } from '@/components/EvidenceLink';

interface CandidateCardProps {
  candidate: SkincareCandidate;
  sources: Record<string, SourceRef>;
  pageSlug: string;
}

/**
 * One product in a comparison. Essential limits (hold reasons, unknown
 * origin, missing ingredient list) are always visible — never tucked into a
 * tooltip or a collapsed panel.
 */
export function CandidateCard({ candidate: c, sources, pageSlug }: CandidateCardProps) {
  const headingId = `p-${c.id}`;
  const unit = unitPrice(c.price, c.amount);
  const eligible = isPurchaseEligible(c);
  const productSource = sources[c.price.sourceId];

  return (
    <article aria-labelledby={headingId} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper">
      <div
        role="img"
        aria-label="No product photo available"
        className="flex h-[120px] items-center justify-center border-b border-line bg-sand text-[13px] text-ink-muted"
      >
        <span aria-hidden="true">Product photo not available</span>
      </div>
      <div className="flex flex-col gap-[18px] p-6 sm:p-7">
        {c.status !== 'published' ? (
          <ReadinessBadge tone="hold" marker="pause">
            On hold — {c.holdReasons.join('; ').toLowerCase()}
          </ReadinessBadge>
        ) : null}
        <div>
          <h3 id={headingId} className="heading-display text-[24px] sm:text-[26px]">
            {c.productName}
          </h3>
          <p className="mt-0.5 text-[15px] text-ink-muted">
            {c.format} · {c.variant}
          </p>
        </div>
        <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-[28px] font-bold">{formatCad(c.price.amountCad)}</span>
          <span className="text-[15px] text-ink-muted">
            {unit.label} · {c.price.priceType} price, {formatDate(c.price.checked)}
          </span>
        </p>

        <dl className="flex flex-col gap-3.5 text-base">
          <div>
            <dt className="font-bold">Origin</dt>
            <dd className="mt-1 flex flex-col gap-1.5">
              {c.origin.statements.map((s) => (
                <span key={s.text}>
                  <EvidenceTag kind="origin" level={s.level} />
                  {s.text}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="font-bold">Ingredients</dt>
            <dd className="mt-1">
              <EvidenceTag kind="ingredients" level={c.ingredients.completeness} />
              {c.ingredients.text}
              {c.ingredients.scentObservation ? <> {c.ingredients.scentObservation}</> : null}
              {c.ingredients.criteriaNotes?.length ? (
                <ul className="mt-1.5 list-disc pl-5">
                  {c.ingredients.criteriaNotes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              ) : null}
            </dd>
          </div>
          <div>
            <dt className="font-bold">Scent</dt>
            <dd className="mt-1">
              {c.scent.brandClaim ? `The brand describes it as ${c.scent.brandClaim}.` : 'The brand makes no scent claim we could find.'}
            </dd>
          </div>
          <div>
            <dt className="font-bold">Shipping &amp; returns</dt>
            <dd className="mt-1">
              {c.shipping.text}{' '}
              {c.shipping.illustrativeSubtotalCad !== null
                ? `One item comes to about ${formatCad(c.shipping.illustrativeSubtotalCad)} before tax.`
                : "We don't show a delivered total."}{' '}
              {c.returns.text}
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
        {c.tradeOffs.length ? (
          <p className="text-[15px] text-ink-body">
            <span className="font-semibold text-ink">Trade-off: </span>
            {c.tradeOffs.join(' ')}
          </p>
        ) : null}

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
                See the product page we checked
              </EvidenceLink>
            ) : null}
          </p>
        )}
        <p className="text-[13px] text-ink-muted">Reviewed {formatDate(c.reviewed)}</p>
      </div>
    </article>
  );
}
