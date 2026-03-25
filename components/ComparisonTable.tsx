import type { Product } from "@/types";

interface ComparisonTableProps {
  products: Product[];
}

export default function ComparisonTable({ products }: ComparisonTableProps) {
  if (products.length === 0) return null;

  // Collect all unique spec keys across products
  const allSpecKeys = Array.from(
    new Set(products.flatMap((p) => Object.keys(p.specs)))
  );

  return (
    <section className="my-8 overflow-x-auto">
      <h2 className="mb-4 text-2xl font-bold text-primary">
        Quick Comparison
      </h2>
      <table className="w-full min-w-[600px] border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-slate-200">
            <th className="py-3 pr-4 text-left font-medium text-slate-500">
              Feature
            </th>
            {products.map((p) => (
              <th key={p.id} className="px-4 py-3 text-left font-bold text-primary">
                {p.name}
                {p.editorialBadge && (
                  <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-white">
                    {p.editorialBadge}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Price row */}
          <tr className="border-b border-slate-100">
            <td className="py-2.5 pr-4 font-medium text-slate-500">Price</td>
            {products.map((p) => (
              <td key={p.id} className="px-4 py-2.5 font-semibold">
                {p.salePrice ? (
                  <>
                    <span className="text-emerald-600">${p.salePrice} CAD</span>
                    <span className="ml-1 text-xs text-slate-400 line-through">
                      ${p.normalPrice}
                    </span>
                  </>
                ) : (
                  <span>${p.normalPrice} CAD</span>
                )}
              </td>
            ))}
          </tr>

          {/* Spec rows */}
          {allSpecKeys.map((key) => (
            <tr key={key} className="border-b border-slate-100">
              <td className="py-2.5 pr-4 font-medium text-slate-500">{key}</td>
              {products.map((p) => (
                <td key={p.id} className="px-4 py-2.5 text-slate-600">
                  {p.specs[key] || "—"}
                </td>
              ))}
            </tr>
          ))}

          {/* Choose this if row */}
          <tr className="border-b border-slate-100">
            <td className="py-2.5 pr-4 font-medium text-slate-500">
              Best for
            </td>
            {products.map((p) => (
              <td key={p.id} className="px-4 py-2.5 text-sm italic text-slate-500">
                {p.chooseIf}
              </td>
            ))}
          </tr>

          {/* Top pros */}
          <tr>
            <td className="py-2.5 pr-4 font-medium text-slate-500">
              Top Pro
            </td>
            {products.map((p) => (
              <td key={p.id} className="px-4 py-2.5 text-sm text-emerald-600">
                &#10003; {p.pros[0]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </section>
  );
}
