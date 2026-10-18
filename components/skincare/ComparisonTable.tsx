import { Fragment, type CSSProperties, type ReactNode } from 'react';
import type { IngredientCompleteness, SkincareComparison } from '@/types/editorial';
import { formatCad, formatDate, packLabel, unitPrice } from '@/lib/format';

const ingredientSummary: Record<IngredientCompleteness, string> = {
  'full-published': 'Full list published',
  partial: 'Partial list only',
  'not-obtained': 'Current full list not obtained',
};

/**
 * "Key differences": the side-by-side comparison as a description list.
 * One markup for every width — no horizontal scrolling and no duplicated
 * mobile/desktop copies.
 *   • Phones: each attribute is a row; with two products the values sit in
 *     two columns, each labelled with the brand.
 *   • ≥768px: a grid with an attribute column and one column per product;
 *     brand labels move to a visual header (still announced per value).
 * Every value carries a screen-reader label with the exact product name (the
 * short brand label is visual only, on phones), so values stay unambiguous
 * even if one brand has several variants on a page.
 * Unknown values are written out. Units are never converted between mL and g.
 */
export function ComparisonTable({ comparison }: { comparison: SkincareComparison }) {
  const { candidates } = comparison;
  const headingId = `${comparison.slug}-differences`;
  const n = candidates.length;
  const twoUp = n === 2;
  const style = { '--cols': n } as CSSProperties;

  const rows: { label: string; cells: ReactNode[] }[] = [
    {
      label: 'Price',
      cells: candidates.map((c) => (
        <Fragment key={c.id}>
          {packLabel(c)}
          <span className="block text-ink-muted">{unitPrice(c.price, c.amount).label}</span>
        </Fragment>
      )),
    },
    {
      label: 'One item delivered (example)',
      cells: candidates.map((c) =>
        c.shipping.illustrativeSubtotalCad !== null ? (
          `${formatCad(c.shipping.illustrativeSubtotalCad)} before tax`
        ) : (
          <span key={c.id} className="text-ink-muted">Unknown — {c.shipping.unknownReason?.toLowerCase() ?? 'not confirmed'}</span>
        ),
      ),
    },
    { label: 'Origin evidence', cells: candidates.map((c) => c.origin.tableSummary) },
    { label: 'Ingredient list', cells: candidates.map((c) => ingredientSummary[c.ingredients.completeness]) },
    { label: 'Scent information', cells: candidates.map((c) => c.scent.tableSummary) },
  ];

  const gridCols = 'md:[grid-template-columns:12rem_repeat(var(--cols),minmax(0,1fr))]';

  return (
    <section id="differences" aria-labelledby={headingId} className="flex scroll-mt-6 flex-col gap-3">
      <h2 id={headingId} className="heading-display text-[26px] sm:text-[28px]">
        Key differences
      </h2>
      <p className="text-ink-body">
        <span className="font-semibold text-ink">Main difference:</span> {comparison.tldr.distinction}
      </p>
      <p className="text-sm text-ink-muted">
        Regular CAD prices published {formatDate(comparison.reviewed)}, before tax. Delivered examples use standard
        shipping for one item, not checkout quotes.
        {comparison.tableNote ? <strong className="font-semibold text-ink"> {comparison.tableNote}</strong> : null}
      </p>
      <div className="rounded-[14px] border border-line bg-paper" style={style}>
        <div
          aria-hidden="true"
          className={`hidden border-b border-line bg-sand px-4 py-3 text-[15px] font-semibold md:grid md:gap-x-5 ${gridCols}`}
        >
          <span />
          {candidates.map((c) => (
            <span key={c.id}>{c.productName}</span>
          ))}
        </div>
        <dl>
          {rows.map((r, ri) => (
            <div
              key={r.label}
              className={`grid gap-x-4 gap-y-1 px-4 py-3 text-[15px] md:gap-x-5 ${gridCols} ${
                twoUp ? 'grid-cols-2' : 'grid-cols-1'
              } ${ri > 0 ? 'border-t border-line-soft' : ''}`}
            >
              <dt className={`font-semibold ${twoUp ? 'col-span-2' : ''} md:col-span-1`}>{r.label}</dt>
              {r.cells.map((cell, i) => (
                <dd key={candidates[i].id} className="min-w-0">
                  <span
                    aria-hidden="true"
                    className="block text-xs font-semibold uppercase tracking-[0.04em] text-ink-muted md:hidden"
                  >
                    {candidates[i].brand}
                  </span>
                  <span className="sr-only">{candidates[i].productName}: </span>
                  {cell}
                </dd>
              ))}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
