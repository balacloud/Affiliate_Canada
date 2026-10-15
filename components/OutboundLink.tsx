'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';

/**
 * Shared merchant / affiliate link.
 *
 * CONTRACT CHANGE (vs. the previous version that tracked then called
 * window.open):
 *  - Renders a real <a href target="_blank">, so navigation works without
 *    JavaScript, with middle-click / open-in-new-tab, and is never blocked
 *    by a slow or failing tracker or a popup blocker.
 *  - Tracking is best-effort: navigator.sendBeacon, falling back to
 *    fetch(..., { keepalive: true }). Errors are swallowed.
 *  - Existing props are unchanged (href, merchantName, productId, merchantId,
 *    campaignId, pageSlug, className). New optional props: children,
 *    linkKind ('affiliate' | 'merchant', default 'affiliate') which sets
 *    rel="sponsored" only for commission links, and ariaLabel.
 *  - The POST body sent to /api/track-click keeps the same field names.
 *
 * Use this ONLY for actual merchant destinations. Research/evidence links
 * use components/EvidenceLink.tsx instead.
 */
export interface OutboundLinkProps {
  href: string;
  merchantName: string;
  productId: string;
  merchantId: string;
  campaignId?: string;
  pageSlug?: string;
  className?: string;
  children?: ReactNode;
  linkKind?: 'affiliate' | 'merchant';
  ariaLabel?: string;
}

function sendClick(payload: Record<string, string | undefined>) {
  try {
    const body = JSON.stringify({ ...payload, timestamp: new Date().toISOString() });
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const ok = navigator.sendBeacon('/api/track-click', new Blob([body], { type: 'application/json' }));
      if (ok) return;
    }
    void fetch('/api/track-click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => undefined);
  } catch {
    // Tracking must never interfere with navigation.
  }
}

export function OutboundLink({
  href,
  merchantName,
  productId,
  merchantId,
  campaignId = 'EDITORIAL',
  pageSlug,
  className = 'inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-slate-700',
  children,
  linkKind = 'affiliate',
  ariaLabel,
}: OutboundLinkProps) {
  const rel = linkKind === 'affiliate' ? 'sponsored noopener noreferrer' : 'noopener noreferrer';

  const anchorProps: AnchorHTMLAttributes<HTMLAnchorElement> = {
    href,
    target: '_blank',
    rel,
    className,
    'aria-label': ariaLabel,
    onClick: () => sendClick({ productId, merchantId, merchantName, campaignId, pageSlug: pageSlug || window.location.pathname, affiliateLink: href, linkKind }),
    onAuxClick: (e) => {
      if (e.button === 1) sendClick({ productId, merchantId, merchantName, campaignId, pageSlug: pageSlug || window.location.pathname, affiliateLink: href, linkKind });
    },
  };

  return (
    <a {...anchorProps}>
      {children ?? `View at ${merchantName}`}
      {children ? null : <span className="text-xs font-normal"> ({linkKind === 'affiliate' ? 'affiliate link' : 'merchant link'})</span>}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default OutboundLink;
