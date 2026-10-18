/**
 * Safe helpers for same-page fragment navigation (#details-<id> etc.).
 * Pure functions with no DOM globals, so they can be unit-tested in Node.
 */

/** Minimal element shape used here — satisfied by real DOM elements and test fakes. */
export interface FragmentElementLike {
  tagName: string;
  open?: boolean;
  closest?: (selector: string) => FragmentElementLike | null;
}

export interface FragmentDocumentLike {
  getElementById: (id: string) => FragmentElementLike | null;
}

/**
 * Returns the element id a fragment refers to, or null.
 * Accepts "#id", "id" or a same-page href such as "#details-x".
 * Malformed percent-encoding (e.g. "#%" or "#%E0%A4%A") never throws: the
 * raw text is used instead, which simply matches no element.
 */
export function fragmentToId(hashOrHref: string | null | undefined): string | null {
  if (!hashOrHref) return null;
  const hashIndex = hashOrHref.indexOf('#');
  const raw = hashIndex >= 0 ? hashOrHref.slice(hashIndex + 1) : hashOrHref;
  if (!raw) return null;
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

/**
 * Finds the <details> element a fragment targets: the element itself when it
 * is a <details>, otherwise its closest <details> ancestor. Unknown or
 * malformed fragments return null.
 */
export function findDisclosureForFragment(
  hashOrHref: string | null | undefined,
  doc: FragmentDocumentLike,
): FragmentElementLike | null {
  const id = fragmentToId(hashOrHref);
  if (!id) return null;
  let el: FragmentElementLike | null = null;
  try {
    el = doc.getElementById(id);
  } catch {
    return null;
  }
  if (!el) return null;
  if (el.tagName.toUpperCase() === 'DETAILS') return el;
  return el.closest ? el.closest('details') : null;
}
