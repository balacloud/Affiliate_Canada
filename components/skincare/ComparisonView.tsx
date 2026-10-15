import Link from 'next/link';
import type { SkincareComparison, SourceRef } from '@/types/editorial';
import { founder, pillars, siteUrl } from '@/config/site';
import { Byline } from '@/components/editorial/Byline';
import { formatDate, isPurchaseEligible } from '@/lib/format';
import { skincareComparisons } from '@/content/skincare';
import { skincareSources } from '@/content/skincare/sources';
import { Breadcrumbs } from '@/components/editorial/Breadcrumbs';
import { FaqList } from '@/components/editorial/FaqList';
import { StructuredData, breadcrumbLd } from '@/components/editorial/StructuredData';
import { EvidenceLink } from '@/components/EvidenceLink';
import { CandidateCard } from './CandidateCard';
import { ComparisonTable } from './ComparisonTable';

/**
 * Shared template for every skincare comparison (face, body, later
 * categories). Readiness and hold states come from data, so there is one
 * template and no duplicated page markup.
 */
export function ComparisonView({ comparison }: { comparison: SkincareComparison }) {
  const sourceMap: Record<string, SourceRef> = skincareSources;
  const isDraft = comparison.readiness !== 'published';
  const hasActiveAffiliate = comparison.candidates.some(
    (c) => isPurchaseEligible(c) && c.merchantLink.kind === 'affiliate',
  );
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: pillars.care.label, path: pillars.care.href },
    { name: 'Skincare', path: '/care/skincare' },
    { name: comparison.navLabel, path: comparison.path },
  ];

  const ld = [
    breadcrumbLd(crumbs, siteUrl),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: comparison.h1,
      description: comparison.metaDescription,
      url: `${siteUrl}${comparison.path}`,
      dateModified: comparison.reviewed,
      inLanguage: 'en-CA',
      author: { '@type': 'Person', name: founder.name, url: `${siteUrl}/about` },
      publisher: { '@type': 'Organization', name: 'SmartShopCA' },
    },
  ];

  return (
    <div className="container-page flex flex-col gap-12 pb-20 pt-10">
      {ld.map((d, i) => (
        <StructuredData key={i} data={d} />
      ))}

      <div className="flex flex-col gap-4">
        <Breadcrumbs
          className="text-ink-muted"
          items={crumbs.map((c, i) => ({ label: c.name, href: i < crumbs.length - 1 ? c.path : undefined }))}
        />
        <nav aria-label="Skincare comparisons">
          <ul className="flex flex-wrap gap-2">
            {skincareComparisons.map((c) => {
              const current = c.slug === comparison.slug;
              return (
                <li key={c.slug}>
                  <Link
                    href={c.path}
                    aria-current={current ? 'page' : undefined}
                    className={`inline-flex min-h-[44px] items-center rounded-full px-[18px] text-[15px] no-underline ${
                      current ? 'bg-ink font-semibold text-ivory' : 'border border-ink text-ink hover:bg-sand'
                    }`}
                  >
                    {c.navLabel}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <h1 className="heading-display mt-2 max-w-[56rem] text-[32px] sm:text-[42px] lg:text-[48px]">{comparison.h1}</h1>
        <Byline />
        <p className="flex flex-wrap gap-x-4 gap-y-1 text-[15px] text-ink-muted">
          {isDraft ? <span>Draft comparison — not a reviewed recommendation</span> : null}
          <span>Pages and prices checked {formatDate(comparison.reviewed)}</span>
          <a href="#sources" className="text-sage-dark">
            Sources
          </a>
          <a href="#limits" className="text-sage-dark">
            Limits &amp; disclosure
          </a>
        </p>
      </div>

      <section aria-labelledby="tldr" className="flex flex-col gap-3.5 rounded-2xl bg-sage-tint p-6 sm:p-8">
        <h2 id="tldr" className="kicker text-sage-dark">
          In short
        </h2>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li>
            <strong>For:</strong> {comparison.tldr.audience}
          </li>
          <li>
            <strong>The real difference:</strong> {comparison.tldr.distinction}
          </li>
          <li>
            <strong>Price:</strong> {comparison.tldr.price}
          </li>
          <li>
            <strong>Limits:</strong> {comparison.tldr.limits}
          </li>
        </ul>
      </section>

      <section aria-labelledby="candidates" className="flex flex-col gap-6">
        <h2 id="candidates" className="heading-display text-[30px]">
          {comparison.candidates.length === 2 ? 'The two candidates' : 'The candidates'}
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {comparison.candidates.map((c) => (
            <CandidateCard key={c.id} candidate={c} sources={sourceMap} pageSlug={comparison.slug} />
          ))}
        </div>
      </section>

      <ComparisonTable comparison={comparison} />

      <section aria-labelledby="claims" className="flex flex-col gap-3">
        <h2 id="claims" className="heading-display text-[26px]">
          Brand claims versus what we observed
        </h2>
        <p className="max-w-prose text-ink-body">
          Words like &ldquo;fragrance-free&rdquo;, &ldquo;unscented&rdquo; or &ldquo;made in Canada&rdquo; are reported
          as the brand&rsquo;s own statements and labelled by where they appear. Our observations are limited to what the
          published ingredient lists and policy pages say. We don&rsquo;t test products, and a short or fragrance-free
          list is not a safety verdict.
        </p>
      </section>

      {comparison.excludedExamples.length ? (
        <section aria-labelledby="excluded" className="flex flex-col gap-3">
          <h2 id="excluded" className="heading-display text-[26px]">
            Researched but not shortlisted
          </h2>
          <ul className="flex flex-col gap-3">
            {comparison.excludedExamples.map((e) => (
              <li key={e.name} className="rounded-xl border border-line bg-paper p-5">
                <p className="font-semibold">{e.name}</p>
                <p className="mt-1 text-ink-body">{e.reason}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <FaqList id="faq" title="Questions readers ask" items={comparison.faqs} />

      <section className="flex flex-wrap gap-10 border-t border-line pt-8">
        <div id="sources" className="flex-[1_1_26rem]">
          <h2 className="mb-3 text-xl font-bold">Sources (accessed {formatDate(comparison.reviewed)})</h2>
          <ul className="flex list-disc flex-col gap-1.5 pl-5 text-[15px]">
            {comparison.sources.map((s) => (
              <li key={s.id}>
                <EvidenceLink href={s.url} className="text-sage-dark">
                  {s.label}
                </EvidenceLink>
              </li>
            ))}
          </ul>
        </div>
        <div id="limits" className="flex flex-[1_1_22rem] flex-col gap-2.5 text-[15px] text-ink-body">
          <h2 className="text-xl font-bold text-ink">Limits and disclosure</h2>
          <ul className="flex list-disc flex-col gap-1.5 pl-5">
            {comparison.limitations.map((l) => (
              <li key={l}>{l}</li>
            ))}
            <li>Informational only, not medical advice. For allergies, pregnancy or a skin condition, ask a pharmacist or doctor.</li>
            <li>
              {hasActiveAffiliate
                ? 'Links marked "Affiliate link" may earn SmartShopCA a commission. Commissions do not decide which products are included or how they are described.'
                : 'SmartShopCA has no active affiliate relationship with any brand on this page and earns nothing from these links.'}
            </li>
          </ul>
          <p>
            <Link href="/methodology#skincare" className="text-sage-dark">
              How we evaluate skincare
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
