"use client";

import { useState } from "react";
import type { Product } from "@/types";
import OutboundLink from "./OutboundLink";

interface DealCardProps {
  product: Product;
  campaignId: string;
  pageSlug: string;
}

export default function DealCard({ product, campaignId, pageSlug }: DealCardProps) {
  const [expanded, setExpanded] = useState(false);

  const topSpecs = Object.entries(product.specs).slice(0, 3);

  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Editorial badge */}
      {product.editorialBadge && (
        <div className="bg-primary px-4 py-1.5 text-center text-xs font-semibold uppercase tracking-wider text-white">
          {product.editorialBadge}
        </div>
      )}

      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center bg-slate-50 p-6 md:w-1/3">
          <div className="flex h-40 w-40 items-center justify-center rounded-lg bg-slate-100 text-sm text-slate-400">
            {product.images.length > 0 ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-full w-full object-contain"
              />
            ) : (
              <span>No image</span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-5">
          {/* Name + merchant */}
          <div className="mb-2 flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold text-primary">{product.name}</h3>
            <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
              {product.merchantId}
            </span>
          </div>

          {/* Price */}
          <div className="mb-3 flex items-baseline gap-2">
            {product.salePrice ? (
              <>
                <span className="text-xl font-bold text-emerald-600">
                  ${product.salePrice} CAD
                </span>
                <span className="text-sm text-slate-400 line-through">
                  ${product.normalPrice} CAD
                </span>
              </>
            ) : (
              <span className="text-xl font-bold text-primary">
                ${product.normalPrice} CAD
              </span>
            )}
          </div>

          {/* Spec pills */}
          <div className="mb-3 flex flex-wrap gap-1.5">
            {topSpecs.map(([key, value]) => (
              <span
                key={key}
                className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600"
              >
                {key}: {value}
              </span>
            ))}
          </div>

          {/* Choose this if */}
          <p className="mb-3 text-sm italic text-slate-500">
            {product.chooseIf}
          </p>

          {/* Expandable pros/cons */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mb-3 text-sm font-medium text-primary hover:underline"
          >
            {expanded ? "Hide details" : "Show pros & cons"}
          </button>

          {expanded && (
            <div className="mb-4 grid gap-3 md:grid-cols-2">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase text-emerald-600">
                  Pros
                </p>
                <ul className="space-y-1">
                  {product.pros.map((pro, i) => (
                    <li key={i} className="flex gap-1.5 text-sm text-slate-600">
                      <span className="text-emerald-500">&#10003;</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase text-red-500">
                  Cons
                </p>
                <ul className="space-y-1">
                  {product.cons.map((con, i) => (
                    <li key={i} className="flex gap-1.5 text-sm text-slate-600">
                      <span className="text-red-400">&#10007;</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* CTA */}
          <OutboundLink
            href={product.affiliateLink}
            merchantName={product.merchantId}
            productId={product.id}
            merchantId={product.merchantId}
            campaignId={campaignId}
            pageSlug={pageSlug}
          />
        </div>
      </div>
    </article>
  );
}
