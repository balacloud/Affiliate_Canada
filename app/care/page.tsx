import type { Metadata } from 'next';
import Link from 'next/link';
import { pillars } from '@/config/site';
import { skincareComparisons } from '@/content/skincare';
import { formatCad } from '@/lib/format';
import { Breadcrumbs } from '@/components/editorial/Breadcrumbs';
import { ReadinessBadge } from '@/components/editorial/ReadinessBadge';

export const metadata: Metadata = {
  title: 'Canadian-made personal care & household',
  description:
    'Canadian-made personal care and household products compared on published ingredients and product-level origin evidence. Skincare first: face and body moisturizers.',
  alternates: { canonical: '/care' },
};

const checks = [
  {
    title: 'Origin per product.',
    body: "A Canadian brand, head office or factory doesn't prove where this exact item was made.",
  },
  { title: 'Current full ingredient list.', body: "If we couldn't get one, the product stays on hold." },
  {
    title: 'Brand claims are attributed.',
    body: '"Fragrance-free" or "hypoallergenic" is reported as the brand\'s statement, not our guarantee.',
  },
  { title: 'Not medical advice.', body: 'For allergies, pregnancy or skin conditions, ask a pharmacist or doctor.' },
];

export default function CarePage() {
  const p = pillars.care;
  return (
    <>
      <section className="border-b border-sage-line bg-sage-tint">
        <div className="container-page flex flex-col gap-[18px] pb-16 pt-12">
          <Breadcrumbs className="text-[#2B3F34]" items={[{ label: 'Home', href: '/' }, { label: p.label }]} />
          <p className="kicker text-sage-dark">{p.label}</p>
          <h1 className="heading-display max-w-[55rem] text-[34px] sm:text-[46px] lg:text-[54px]">
            Understand what&rsquo;s in it, and where it was actually made.
          </h1>
          <p className="max-w-[42rem] text-[19px] text-[#2B3A31]">
            We compare Canadian-made everyday products using their published ingredient lists and product-level origin
            evidence. Personal care and household products are judged by different criteria, so they&rsquo;re never
            ranked together.
          </p>
        </div>
      </section>

      <section aria-labelledby="skincare" className="container-page py-16">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-1.5 text-sm text-ink-muted">Personal care · launching first</p>
            <h2 id="skincare" className="heading-display text-[34px]">
              <Link href="/care/skincare" className="text-ink no-underline hover:underline">
                Skincare
              </Link>
            </h2>
          </div>
          <ReadinessBadge tone="care" marker="square">
            Preview — research in progress
          </ReadinessBadge>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skincareComparisons.map((c) => {
            const prices = c.candidates.map((x) => x.price.amountCad);
            const allHeld = c.candidates.every((x) => x.status !== 'published');
            return (
              <li key={c.slug} className="flex flex-col gap-3.5 rounded-[14px] border border-line bg-paper p-8">
                <h3 className="heading-display text-[26px]">{c.navLabel}</h3>
                <p className="text-ink-body">{c.tldr.audience}</p>
                <dl className="grid grid-cols-2 gap-3 text-[15px]">
                  <div>
                    <dt className="text-ink-muted">Candidates</dt>
                    <dd className="font-semibold">
                      {c.candidates.length}
                      {allHeld ? ', all on hold' : ''}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-ink-muted">Pack prices</dt>
                    <dd className="font-semibold">
                      {formatCad(Math.min(...prices))}–{formatCad(Math.max(...prices))}
                    </dd>
                  </div>
                </dl>
                <Link href={c.path} className="btn mt-2 self-start bg-sage text-white hover:bg-sage-dark">
                  Compare {c.navLabel.toLowerCase()}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section aria-labelledby="transparency" className="border-y border-line bg-sand">
        <div className="container-page flex flex-wrap gap-12 py-16">
          <div className="flex-[1_1_22rem]">
            <h2 id="transparency" className="heading-display mb-3 text-[30px]">
              What we check, and what we don&rsquo;t claim
            </h2>
            <p className="text-ink-body">
              We read published ingredient lists and origin statements. We don&rsquo;t test products, and a short
              ingredient list or a missing ingredient is not a safety verdict.
            </p>
          </div>
          <ul className="flex flex-[1_1_30rem] flex-col gap-3.5 text-base">
            {checks.map((c) => (
              <li key={c.title} className="flex items-start gap-3.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F4232" strokeWidth="2" aria-hidden="true" className="mt-1 shrink-0">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                </svg>
                <span>
                  <strong>{c.title}</strong> {c.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="household" className="container-page pb-20 pt-16">
        <p className="mb-1.5 text-sm text-ink-muted">Household · planned</p>
        <h2 id="household" className="heading-display mb-3 text-[30px]">
          Laundry detergent and dishwashing liquid, later
        </h2>
        <p className="max-w-[45rem] text-ink-body">
          Household products will get their own method — how they&rsquo;re used, how much you touch or breathe them, and
          what manufacturers disclose. Skincare conclusions won&rsquo;t be carried over. There&rsquo;s nothing to compare
          here yet.
        </p>
      </section>
    </>
  );
}
