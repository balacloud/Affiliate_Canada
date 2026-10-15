'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

interface MobileNavProps {
  items: { href: string; label: string }[];
}

/**
 * Mobile menu built on <details>/<summary>, so it opens and closes without
 * JavaScript and exposes its expanded state natively to assistive tech.
 * JavaScript adds: close on route change, close on Escape (focus returns
 * to the toggle) and close when focus or a click leaves the menu.
 */
export function MobileNav({ items }: MobileNavProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (detailsRef.current) detailsRef.current.open = false;
  }, [pathname]);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      const el = detailsRef.current;
      if (el?.open && event.target instanceof Node && !el.contains(event.target)) {
        el.open = false;
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  function onKeyDown(event: React.KeyboardEvent<HTMLDetailsElement>) {
    if (event.key === 'Escape' && detailsRef.current?.open) {
      detailsRef.current.open = false;
      summaryRef.current?.focus();
    }
  }

  function onBlur(event: React.FocusEvent<HTMLDetailsElement>) {
    const next = event.relatedTarget;
    if (detailsRef.current?.open && next instanceof Node && !detailsRef.current.contains(next)) {
      detailsRef.current.open = false;
    }
  }

  return (
    <details ref={detailsRef} className="group lg:hidden" onKeyDown={onKeyDown} onBlur={onBlur}>
      <summary
        ref={summaryRef}
        className="flex min-h-[44px] list-none items-center gap-2 rounded-lg border border-ink px-3.5 text-[15px]"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path className="group-open:hidden" d="M4 7h16M4 12h16M4 17h16" />
          <path className="hidden group-open:block" d="M6 6l12 12M18 6L6 18" />
        </svg>
        <span className="group-open:hidden">Menu</span>
        <span className="hidden group-open:inline">Close</span>
      </summary>
      <nav
        aria-label="Mobile"
        className="absolute inset-x-0 top-full z-20 border-b border-line bg-ivory px-4 pb-4 pt-2 shadow-[0_8px_16px_rgba(30,42,36,0.08)] sm:px-6"
      >
        <ul className="flex flex-col">
          {items.map((item) => (
            <li key={item.href} className="border-b border-line-soft last:border-b-0">
              <Link
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className="flex min-h-[48px] items-center text-ink no-underline aria-[current=page]:font-semibold"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
