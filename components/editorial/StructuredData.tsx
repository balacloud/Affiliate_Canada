/**
 * Minimal JSON-LD renderer for the redesigned routes. Callers must pass only
 * supported facts: no Offer, AggregateRating, Review, author identity or
 * safety claims for research-held records.
 *
 * Kept separate from the legacy components/JsonLd.tsx so its existing
 * contract is untouched.
 */
export function StructuredData({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function breadcrumbLd(items: { name: string; path: string }[], origin: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${origin}${it.path}`,
    })),
  };
}
