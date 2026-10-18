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
import { CandidateSummary } from './CandidateSummary';
import { ComparisonTable } from './ComparisonTable';
import { OpenDetailsOnHash } from './OpenDetailsOnHash';
import { isStillChecking } from '@/lib/readiness';

/**
 * Shared template for every skincare comparison (face, body, later
 * categories). Order is built for skimming:
 *   1. title, purpose, status, byline, review date
 *   2. short answer: recommendation status + each product's actual hold reasons
 *   3. key differences (#differences)
 *   4. compact product summaries (#p-<id>)
 *   5. full evidence per product in <details> (#details-<id>), then the
 *      not-shortlisted example, FAQs, sources (#sources) and limits (#limits)
 * Readiness and hold states come from data; no state is hard-coded here.
 */
export function ComparisonView({ comparison }: { comparison: SkincareComparison }) {
  const sourceMap: Record<string, SourceRef> = skincareSources;
  const isDraft = comparison.readiness !== 'published';
  const { candidates } = comparison;
  const held = candidates.filter(isStillChecking);
  const allHeld = held.length === candidates.length;
  const hasActiveAffiliate = candidates.some((c) => isPurchaseEligible(c) && c.merchantLink.kind === 'affiliate');
  const commissionLine = hasActiveAffiliate
    ? 'Links marked "Affiliate link" may earn SmartShopCA a commission. Commissions do not decide which products are included or how they are described.'
    : 'No affiliate links: SmartShopCA earns nothing from any brand on this page.';

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

  const answerHeadline = allHeld
    ? 'Short answer: no recommendation yet'
    : held.length > 0
      ? 'Short answer: partly reviewed'
      : 'Short answer';
  const answerLead = allHeld
    ? `${candidates.length === 2 ? 'Neither product has' : `None of the ${candidates.length} products has`} passed our evidence checks, so this page doesn't pick a winner.`
    : held.length > 0
      ? `${held.length} of ${candidates.length} products are still being checked and are not recommendations.`
      : null;

  return (
    <div className="container-page flex flex-col gap-7 pb-16 pt-5 sm:gap-11 sm:pt-8">
      {ld.map((d, i) => (
        <StructuredData key={i} data={d} />
      ))}
      <OpenDetailsOnHash />

      {/* 1. Title, purpose and status */}
      <div className="flex flex-col gap-2.5 sm:gap-3">
        <Link href="/care/skincare" className="text-sm text-ink-muted sm:hidden">
          <span aria-hidden="true">‹ </span>Skincare comparisons
        </Link>
        <Breadcrumbs
          className="hidden text-ink-muted sm:block"
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
        <h1 className="heading-display max-w-[48rem] text-[27px] sm:mt-1 sm:text-[40px] lg:text-[44px]">{comparison.h1}</h1>
        <p className="max-w-[44rem] text-[16px] text-ink-body sm:text-[18px]">{comparison.purpose}</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          {isDraft ? (
            <span className="inline-flex items-center rounded-full border border-dashed border-rust-dark px-3 py-0.5 text-sm font-semibold text-rust-dark">
              Research preview
            </span>
          ) : null}
          <Byline />
          <span className="text-[15px] text-ink-muted">Checked {formatDate(comparison.reviewed)}</span>
        </div>
      </div>

      {/* 2. Direct answer and status */}
      <section aria-labelledby="answer" className="flex flex-col gap-2.5 rounded-2xl border-2 border-rust-line bg-rust-tint/60 p-4 sm:gap-3 sm:p-7">
        <h2 id="answer" className="heading-display text-[22px] sm:text-[26px]">
          {answerHeadline}
        </h2>
        {answerLead ? <p className="font-semibold">{answerLead}</p> : null}
        {held.length ? (
          <ul className="flex list-disc flex-col gap-1 pl-5">
            {held.map((c) => (
              <li key={c.id}>
                <a href={`#p-${c.id}`} className="font-semibold text-ink">
                  {c.productName}
                </a>{' '}
                — still checking: {c.holdReasons.length ? c.holdReasons.join('; ').toLowerCase() : 'review not complete'}.
              </li>
            ))}
          </ul>
        ) : null}
        <p className="text-sm text-ink-muted">
          {commissionLine}{' '}
          <a href="#limits" className="text-ink-muted">
            Limits and disclosure
          </a>
        </p>
      </section>

      <nav aria-label="On this page" className="-mt-4 sm:-mt-6">
        <ul className="flex flex-wrap gap-x-1 gap-y-0 text-[15px]">
          {[
            ['#differences', 'Key differences'],
            ['#products', 'Products'],
            ['#evidence', 'Full evidence'],
            ['#sources', 'Sources'],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="inline-flex min-h-[44px] items-center px-2 font-semibold text-sage-dark">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 3. Essential side-by-side differences */}
      <ComparisonTable comparison={comparison} />

      {/* 4. Compact product summaries */}
      <section id="products" aria-labelledby="products-h" className="flex scroll-mt-6 flex-col gap-3">
        <div>
          <h2 id="products-h" className="heading-display text-[26px] sm:text-[28px]">
            The products
          </h2>
          <p className="text-sm text-ink-muted">
            Regular CAD prices on {formatDate(comparison.reviewed)}, before tax and shipping.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
          {candidates.map((c) => (
            <CandidateSummary key={c.id} candidate={c} />
          ))}
        </div>
      </section>

      {/* 5. Full evidence, then supporting material */}
      <section id="evidence" aria-labelledby="evidence-h" className="flex scroll-mt-6 flex-col gap-3">
        <h2 id="evidence-h" className="heading-display text-[26px] sm:text-[28px]">
          Full evidence by product
        </h2>
        <p className="text-[15px] text-ink-body">
          Origin, ingredients, shipping and returns, each with its source. Brand wording is labelled as the
          brand&rsquo;s claim; &ldquo;Our observation&rdquo; is what we read in the published lists. We don&rsquo;t test
          products.
        </p>
        {candidates.map((c) => (
          <CandidateCard key={c.id} candidate={c} sources={sourceMap} pageSlug={comparison.slug} />
        ))}
      </section>

      {comparison.excludedExamples.length ? (
        <section aria-labelledby="excluded" className="flex flex-col gap-3">
          <h2 id="excluded" className="heading-display text-[22px] sm:text-[24px]">
            Researched but not shortlisted
          </h2>
          <ul className="flex flex-col gap-3">
            {comparison.excludedExamples.map((e) => {
              const refs = e.sourceIds.map((id) => sourceMap[id]).filter((s): s is SourceRef => Boolean(s));
              return (
                <li key={e.name} className="rounded-xl border border-line bg-paper p-5">
                  <p className="font-semibold">{e.name}</p>
                  <p className="mt-1 text-ink-body">{e.reason}</p>
                  {refs.length ? (
                    <p className="mt-1 text-sm text-ink-muted">
                      Source:{' '}
                      {refs.map((s) => (
                        <EvidenceLink key={s.id} href={s.url} className="text-sage-dark">
                          {s.label}
                        </EvidenceLink>
                      ))}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      <FaqList id="faq" title="Questions readers ask" items={comparison.faqs} />

      <section className="flex flex-wrap gap-x-10 gap-y-8 border-t border-line pt-8">
        <div id="sources" className="flex-[1_1_26rem] scroll-mt-6">
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
        <div id="limits" className="flex flex-[1_1_22rem] scroll-mt-6 flex-col gap-2.5 text-[15px] text-ink-body">
          <h2 className="text-xl font-bold text-ink">Limits and disclosure</h2>
          <ul className="flex list-disc flex-col gap-1.5 pl-5">
            {comparison.limitations.map((l) => (
              <li key={l}>{l}</li>
            ))}
            <li>
              A short or fragrance-free ingredient list is not a safety verdict, and ingredient preferences are not a
              medical risk assessment.
            </li>
            <li>
              Informational only, not medical advice. For allergies, pregnancy or a skin condition, ask a pharmacist or
              doctor.
            </li>
            <li>{commissionLine}</li>
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
