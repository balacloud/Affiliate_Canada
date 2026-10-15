import type { Metadata } from 'next';
import Link from 'next/link';
import { pillars } from '@/config/site';
import { Breadcrumbs } from '@/components/editorial/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Methodology',
  description:
    'How SmartShopCA sources, dates and labels evidence — shared standards, plus separate methods for seasonal collections, skincare and household products.',
  alternates: { canonical: '/methodology' },
};

const sourceHierarchy = [
  'A physical label or packaging we have checked ourselves (when we say so).',
  "The manufacturer's page for the exact product and variant.",
  "The manufacturer's brand-wide statements, policies and FAQs — reported as brand-wide, never applied to a specific item.",
  'Regulators and official references, for definitions and rules.',
  'Retailer listings, for price and availability in Canada only.',
];

const notClaims = [
  'We don\'t call products "non-toxic", "endocrine-disruptor-free", "non-allergenic" or pregnancy-safe.',
  '"Hypoallergenic" is reported as a manufacturer claim, not a guarantee.',
  'Natural ingredients are not automatically safer, and a short ingredient list is not proof of safety.',
  'An ingredient-exclusion preference is a filter, not a health-risk assessment.',
  "Health Canada's Cosmetic Ingredient Hotlist is a reference for restricted and prohibited ingredients. It does not certify any product.",
];

export default function MethodologyPage() {
  return (
    <div className="container-page flex flex-col gap-14 pb-20 pt-10">
      <div className="flex max-w-[48rem] flex-col gap-4">
        <Breadcrumbs className="text-ink-muted" items={[{ label: 'Home', href: '/' }, { label: 'Methodology' }]} />
        <h1 className="heading-display text-[34px] sm:text-[46px]">How we choose, label and date evidence</h1>
        <p className="text-[19px] text-ink-body">
          These are the standards behind every SmartShopCA page. They describe our policy; each product still needs its
          own evidence before it is shown as anything more than a candidate.
        </p>
        <nav aria-label="On this page" className="text-[15px]">
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            <li><a href="#shared">Shared standards</a></li>
            <li><a href="#seasonal">Seasonal</a></li>
            <li><a href="#skincare">Skincare</a></li>
            <li><a href="#household">Household</a></li>
            <li><a href="#corrections">Corrections</a></li>
          </ul>
        </nav>
      </div>

      <section id="shared" aria-labelledby="shared-h" className="flex max-w-[48rem] flex-col gap-4">
        <h2 id="shared-h" className="heading-display text-[30px]">Shared standards</h2>
        <h3 className="text-lg font-bold">Source hierarchy</h3>
        <ol className="flex list-decimal flex-col gap-1.5 pl-5 text-ink-body">
          {sourceHierarchy.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <h3 className="mt-2 text-lg font-bold">Dates</h3>
        <p className="text-ink-body">
          Every price, policy and ingredient list shows the date we accessed it. Prices are regular one-time CAD prices
          unless labelled otherwise. Shipping totals are illustrative examples before tax, not checkout quotes.
        </p>
        <h3 className="mt-2 text-lg font-bold">Unknown or conflicting information</h3>
        <p className="text-ink-body">
          If we can&rsquo;t confirm something, the page says so in plain words — for example &ldquo;Manufacturing
          location not confirmed for this product.&rdquo; Missing evidence is never treated as a pass. A product with an
          essential gap is held: it can appear with its evidence, but without a buying link.
        </p>
        <h3 className="mt-2 text-lg font-bold">Origin</h3>
        <p className="text-ink-body">
          Origin is never inferred from a company&rsquo;s nationality, headquarters, retail availability or the
          existence of a Canadian factory. &ldquo;Canadian-made&rdquo; and the regulated phrase &ldquo;Product of
          Canada&rdquo; are not interchangeable, and we use each only as its evidence supports.
        </p>
        <h3 className="mt-2 text-lg font-bold">Criteria</h3>
        <p className="text-ink-body">
          Each collection states the use case it answers and the criteria it applies, with the date of that version.
          Shortlists hold two to seven products. We don&rsquo;t publish ratings, scores or awards we haven&rsquo;t
          earned the evidence to give.
        </p>
      </section>

      <section id="seasonal" aria-labelledby="seasonal-h" className="flex max-w-[48rem] flex-col gap-3 border-t-[6px] border-rust pt-6">
        <p className="kicker text-rust">{pillars.seasonal.label}</p>
        <h2 id="seasonal-h" className="heading-display text-[30px]">Seasonal collections</h2>
        <ul className="flex list-disc flex-col gap-1.5 pl-5 text-ink-body">
          <li><strong className="text-ink">Use case:</strong> one specific seasonal need per collection.</li>
          <li><strong className="text-ink">Canada availability:</strong> orderable in CAD from a named seller on the date shown.</li>
          <li><strong className="text-ink">Reviews and performance:</strong> summarised from identifiable sources, never invented or presented as our own testing.</li>
          <li><strong className="text-ink">Season fit:</strong> why it suits current Canadian conditions, and when it doesn&rsquo;t.</li>
          <li><strong className="text-ink">Origin labels:</strong> made in, owned in and available in Canada are separate labels.</li>
        </ul>
      </section>

      <section id="skincare" aria-labelledby="skincare-h" className="flex max-w-[48rem] flex-col gap-3 border-t-[6px] border-sage pt-6">
        <p className="kicker text-sage">{pillars.care.label}</p>
        <h2 id="skincare-h" className="heading-display text-[30px]">Skincare</h2>
        <ul className="flex list-disc flex-col gap-1.5 pl-5 text-ink-body">
          <li><strong className="text-ink">Exact product origin:</strong> evidence for the specific product and variant, labelled by where it comes from.</li>
          <li><strong className="text-ink">Ingredient disclosure:</strong> a current, complete published ingredient list is required for a product to leave hold.</li>
          <li><strong className="text-ink">Declared screening criteria:</strong> each comparison lists the preferences it screens for (for example, no aromatic essential oils) and the date of that version.</li>
          <li><strong className="text-ink">Scent:</strong> the brand&rsquo;s wording and our reading of the published list are reported separately.</li>
          <li><strong className="text-ink">Limitations:</strong> we read published information; we don&rsquo;t test products or give medical advice.</li>
        </ul>
        <h3 className="mt-3 text-lg font-bold">What we don&rsquo;t claim</h3>
        <ul className="flex list-disc flex-col gap-1.5 pl-5 text-ink-body">
          {notClaims.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <section id="household" aria-labelledby="household-h" className="flex max-w-[48rem] flex-col gap-3 border-t-[6px] border-dashed border-sage pt-6">
        <h2 id="household-h" className="heading-display text-[30px]">Household (planned)</h2>
        <p className="text-ink-body">
          Laundry detergent and dishwashing liquid will get their own method covering disclosure, how the product is
          used, and how people are exposed to it. Skincare verdicts will not be reused for household products.
        </p>
      </section>

      <section id="corrections" aria-labelledby="corrections-h" className="flex max-w-[48rem] flex-col gap-3">
        <h2 id="corrections-h" className="heading-display text-[30px]">Corrections</h2>
        <p className="text-ink-body">
          When we find an error, we fix the page and update its reviewed date. Material corrections are noted on the
          page they affect. See <Link href="/about">About</Link> for how SmartShopCA is run.
        </p>
      </section>
    </div>
  );
}
