import type { Metadata } from 'next';
import Link from 'next/link';
import { integrations, siteUrl } from '@/config/site';
import { InfoPageIntro } from '@/components/editorial/InfoPageIntro';
import { StructuredData } from '@/components/editorial/StructuredData';

export const metadata: Metadata = {
  title: 'Affiliate disclosure',
  description: 'How SmartShopCA plans to earn commissions, label commercial relationships and keep research decisions separate from payment.',
  alternates: { canonical: '/disclosure' },
};

export default function DisclosurePage() {
  return (
    <>
      <StructuredData data={{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'SmartShopCA affiliate disclosure', url: `${siteUrl}/disclosure` }} />
      <InfoPageIntro label="Affiliate disclosure" title="Understand the relationship behind a link." description="Clear product information includes knowing when SmartShopCA may earn money. This page describes our current status and the standards we will apply to commercial content." />
      <div className="container-page grid items-start gap-10 py-12 sm:py-16 lg:grid-cols-[1.5fr_0.7fr] lg:gap-16">
        <div className="flex max-w-[46rem] flex-col gap-9">
          <section aria-labelledby="current" className="rounded-2xl border border-sage-line bg-sage-tint p-6">
            <h2 id="current" className="heading-display mb-3 text-[26px]">Current status</h2>
            <p>{integrations.affiliate.anyActive
              ? 'Some links may earn SmartShopCA a commission on qualifying purchases. Check the disclosure on the relevant page and the label beside the merchant link.'
              : 'Affiliate links are not currently enabled on this website. We are preparing affiliate-program applications. This page does not indicate acceptance by any network or brand.'}</p>
          </section>
          <section aria-labelledby="commissions"><h2 id="commissions" className="heading-display mb-3 text-[28px]">How affiliate commissions work</h2><p className="text-ink-body">After approval by a relevant program, a clearly identified affiliate link may earn SmartShopCA a commission when a visitor makes a qualifying purchase with another seller. The seller sets its prices, delivery arrangements, returns and purchase terms. Check those terms before ordering.</p></section>
          <section aria-labelledby="recognise"><h2 id="recognise" className="heading-display mb-3 text-[28px]">How you will recognise paid relationships</h2><p className="text-ink-body">Our policy is to show a clear disclosure at the beginning of compensated product content and identify affiliate buying links. Gifts, sponsored placements and other material relationships must be disclosed with the relevant content. This general policy page does not replace those notices.</p></section>
          <section aria-labelledby="editorial"><h2 id="editorial" className="heading-display mb-3 text-[28px]">What payment cannot buy</h2><p className="text-ink-body">Our editorial policy does not allow payment to buy a favourable research conclusion, a ranking or the removal of an evidence gap. Products without affiliate programs may still be considered. A research hold remains until the essential evidence is available. See our <Link href="/methodology">research methodology</Link>.</p></section>
          <section aria-labelledby="shop"><h2 id="shop" className="heading-display mb-3 text-[28px]">A future supplier-fulfilled shop</h2><p className="text-ink-body">We also plan a curated shop with orders fulfilled by partner suppliers, often called dropshipping. Supplier arrangements are not confirmed and SmartShopCA does not currently accept orders. Before shopping becomes available, we will explain who sells and fulfils each order, along with applicable delivery, returns and customer-support information.</p></section>
          <p className="text-sm text-ink-muted">Last reviewed October 19, 2026.</p>
        </div>
        <aside aria-label="Related information" className="rounded-2xl border border-line bg-paper p-6">
          <h2 className="heading-display mb-4 text-[25px]">Keep exploring</h2>
          <ul className="divide-y divide-line">{[{ href: '/about', label: 'About our team' }, { href: '/methodology', label: 'Research standards' }, { href: '/privacy', label: 'Privacy' }, { href: '/contact', label: 'Contact and corrections' }].map((link) => <li key={link.href}><Link href={link.href} className="flex min-h-[48px] items-center text-sage-dark">{link.label}</Link></li>)}</ul>
        </aside>
      </div>
    </>
  );
}
