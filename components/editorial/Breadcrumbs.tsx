import Link from 'next/link';

export interface Crumb {
  href?: string;
  label: string;
}

export function Breadcrumbs({ items, className = '' }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
      <ol className="flex flex-wrap items-center gap-x-1.5">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
              {c.href && !last ? (
                <Link href={c.href} className="text-current">
                  {c.label}
                </Link>
              ) : (
                <span aria-current={last ? 'page' : undefined}>{c.label}</span>
              )}
              {!last ? <span aria-hidden="true">›</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
