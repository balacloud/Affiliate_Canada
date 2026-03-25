"use client";

import { trackClick } from "@/lib/trackClick";

interface OutboundLinkProps {
  href: string;
  merchantName: string;
  productId: string;
  merchantId: string;
  campaignId: string;
  pageSlug: string;
  className?: string;
}

export default function OutboundLink({
  href,
  merchantName,
  productId,
  merchantId,
  campaignId,
  pageSlug,
  className = "",
}: OutboundLinkProps) {
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    await trackClick({
      productId,
      merchantId,
      campaignId,
      pageSlug,
      affiliateLink: href,
    });

    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 ${className}`}
    >
      View at {merchantName}
      <span className="text-xs font-normal text-slate-300">(affiliate link)</span>
      <span aria-hidden="true">&rarr;</span>
    </button>
  );
}
