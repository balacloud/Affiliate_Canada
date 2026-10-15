import type { SkincareComparison } from '@/types/editorial';
import { formatCad, formatDate, packLabel, unitPrice } from '@/lib/format';

/**
 * Compact side-by-side table. Scrolls inside a labelled, focusable region on
 * narrow screens; the page itself never scrolls horizontally. Unknown values
 * are written out rather than left blank.
 */
export function ComparisonTable({ comparison }: { comparison: SkincareComparison }) {
  const { candidates } = comparison;
  const headingId = `${comparison.slug}-table`;
  const rows: { label: string; cells: React.ReactNode[] }[] = [
    { label: 'Pack price', cells: candidates.map((c) => packLabel(c)) },
    { label: 'Unit price', cells: candidates.map((c) => unitPrice(c.price, c.amount).label) },
    {
      label: 'One item, shipped (example)',
      cells: candidates.map((c) =>
        c.shipping.illustrativeSubtotalCad !== null ? (
          `${formatCad(c.shipping.illustrativeSubtotalCad)} before tax`
        ) : (
          <span className="text-ink-muted">Unknown — {c.shipping.unknownReason?.toLowerCase() ?? 'not confirmed'}</span>
        ),
      ),
    },
    { label: 'Format', cells: candidates.map((c) => c.format) },
    { label: 'Scent information', cells: candidates.map((c) => c.scent.tableSummary) },
    { label: 'Origin evidence', cells: candidates.map((c) => c.origin.tableSummary) },
  ];

  return (
    <section aria-labelledby={headingId} className="flex flex-col gap-4">
      <h2 id={headingId} className="heading-display text-[30px]">
        Side by side
      </h2>
      <div
        role="region"
        aria-label="Comparison table (scrolls sideways on small screens)"
        tabIndex={0}
        className="overflow-x-auto rounded-[14px] border border-line bg-paper"
      >
        <table className="w-full min-w-[640px] border-collapse text-[15px]">
          <caption className="px-[18px] py-3.5 text-left text-sm text-ink-muted">
            Regular CAD prices and policies as published {formatDate(comparison.reviewed)}. Shipping subtotals are examples
            before tax and discounts, not checkout quotes.
            {comparison.tableNote ? ` ${comparison.tableNote}` : ''}
          </caption>
          <thead>
            <tr className="bg-sand text-left">
              <td className="w-[26%] px-[18px] py-3" />
              {candidates.map((c) => (
                <th key={c.id} scope="col" className="px-[18px] py-3 font-semibold">
                  {c.productName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="border-t border-line-soft align-top">
                <th scope="row" className="px-[18px] py-3 text-left font-semibold">
                  {r.label}
                </th>
                {r.cells.map((cell, i) => (
                  <td key={candidates[i].id} className="px-[18px] py-3">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
