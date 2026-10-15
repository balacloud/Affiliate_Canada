import type { Metadata } from 'next';
import Link from 'next/link';
import { pillars } from '@/config/site';
import { skincareComparisons } from '@/content/skincare';
import { formatDate, unitPrice } from '@/lib/format';
import { Breadcrumbs } from '@/components/editorial/Breadcrumbs';
import { ReadinessBadge } from '@/components/editorial/ReadinessBadge';

export const metadata: Metadata = {
  title: 'Canadian-made skincare comparisons',
  description:
    'Separate draft comparisons of face and body moisturizers from Canadian brands, with origin evidence, ingredient disclosure and dated CAD prices.',
  alternates: { canonical: '/care/skincare' },
};

export default function SkincarePage() {
  return (
    <div className="container-page flex flex-col gap-10 pb-20 pt-10">
      <div className="flex flex-col gap-4">
        <Breadcrumbs
          className="text-ink-muted"
          items={[{ label: 'Home', href: '/' }, { label: pillars.care.label, href: '/care' }, { label: 'Skincare' }]}
        />
        <p className="kicker text-sage-dark">{pillars.care.label}</p>
        <h1 className="heading-display text-[34px] sm:text-[46px]">Skincare</h1>
        <p className="max-w-[42rem] text-[19px] text-ink-body">
          Face and body moisturizers are used differently, so they&rsquo;re compared separately — never ranked against
          each other.
        </p>
        <div>
          <ReadinessBadge tone="care" marker="square">
            Preview — draft comparisons, checked {formatDate(skincareComparisons[0].reviewed)}
          </ReadinessBadge>
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skincareComparisons.map((c) => (
          <li key={c.slug} className="flex flex-col gap-4 rounded-[14px] border border-line bg-paper p-8">
            <h2 className="heading-display text-[28px]">{c.navLabel}</h2>
            <p className="text-ink-body">{c.tldr.distinction}</p>
            <ul className="flex flex-col gap-1.5 text-[15px]">
              {c.candidates.map((p) => (
                <li key={p.id} className="flex flex-wrap justify-between gap-x-4 border-t border-line-soft pt-1.5">
                  <span>{p.productName}</span>
                  <span className="text-ink-muted">{unitPrice(p.price, p.amount).label}</span>
                </li>
              ))}
            </ul>
            <Link href={c.path} className="btn mt-auto self-start bg-sage text-white hover:bg-sage-dark">
              Open the {c.navLabel.toLowerCase()} comparison
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
