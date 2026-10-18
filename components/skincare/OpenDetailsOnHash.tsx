'use client';

import { useEffect } from 'react';
import { findDisclosureForFragment, fragmentToId } from '@/lib/fragment';

/**
 * Progressive enhancement for same-page evidence links (#details-<id>).
 *
 * - On load and on hashchange: opens the targeted <details> panel.
 * - On click of any same-page fragment link (href starting with "#"),
 *   including repeat clicks when the hash is unchanged (no hashchange fires):
 *   opens the targeted panel before the browser's native jump. The click is
 *   never prevented, so native anchor navigation, keyboard activation
 *   (Enter fires click) and history behave as usual. Links to other pages or
 *   sites are ignored.
 * - Malformed or unknown fragments are ignored and never throw.
 *
 * Without JavaScript the link still scrolls to the panel's visible summary,
 * and all panel text is already in the server HTML.
 */
export function OpenDetailsOnHash() {
  useEffect(() => {
    function openFor(hashOrHref: string | null): boolean {
      try {
        const details = findDisclosureForFragment(hashOrHref, document);
        if (details && !details.open) {
          details.open = true;
          return true;
        }
      } catch {
        // Never let fragment handling break the page.
      }
      return false;
    }

    function onInitialOrHashChange() {
      if (openFor(window.location.hash)) {
        try {
          const id = fragmentToId(window.location.hash);
          if (id) document.getElementById(id)?.scrollIntoView({ block: 'start' });
        } catch {
          // Ignore scroll failures.
        }
      }
    }

    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest('a[href^="#"]');
      if (!anchor) return;
      openFor(anchor.getAttribute('href'));
    }

    onInitialOrHashChange();
    window.addEventListener('hashchange', onInitialOrHashChange);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('hashchange', onInitialOrHashChange);
      document.removeEventListener('click', onClick);
    };
  }, []);
  return null;
}
