import type { ReactNode } from 'react';

/**
 * Non-commercial link to a source we used as evidence (product page,
 * policy, regulator). Never an affiliate link and never tracked as a click.
 */
export function EvidenceLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (source, opens in a new tab)</span>
    </a>
  );
}

export default EvidenceLink;
