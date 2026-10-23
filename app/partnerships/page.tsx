import type { Metadata } from 'next';
import Link from 'next/link';
import { integrations, siteUrl } from '@/config/site';
import { InfoPageIntro } from '@/components/editorial/InfoPageIntro';
import { StructuredData } from '@/components/editorial/StructuredData';

export const metadata: Metadata = {
  title: 'For brands and retailers',
  description: 'SmartShopCA’s Canadian audience focus, planned affiliate partnerships, supplier interests and editorial standards.',
  alternates: { canonical: '/partnerships' },
};

export default function PartnershipsPage() {
  return (
    <>
      <StructuredData data={{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'SmartShopCA partnership information', url: `${siteUrl}/partnerships` }} />
      <InfoPageIntro label="For brands and retailers" title="Useful products. Clear information. Thoughtful partnerships." description="SmartShopCA is a Canadian product-discovery and shopping business in development. We are preparing applications for affiliate programs and exploring supplier-fulfilled retail partnerships." />
      <div className="container-page py-12 sm:py-16">
        <section aria-labelledby="focus" className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div><p className="kicker mb-3 text-rust">Our focus</p><h2 id="focus" className="heading-display text-[32px]">Help Canadian readers understand their options.</h2></div>
          <div className="text-ink-body"><p>Our two distinct sections cover seasonal Canadian favourites and Canadian-made personal care &amp; household products. Initial skincare research compares face and body moisturizers separately.</p><p className="mt-4">Current product pages are research previews with unresolved evidence gaps, rather than completed recommendations. We do not claim an established audience, sales history or product-testing programme.</p></div>
        </section>
        <div className="grid gap-6 md:grid-cols-2">
          <section aria-labelledby="affiliate" className="rounded-[22px] border border-sage-line bg-sage-tint p-6 sm:p-8"><p className="kicker mb-3 text-sage-dark">Affiliate relationships</p><h2 id="affiliate" className="heading-display mb-4 text-[29px]">Relevant links within useful research.</h2><p className="text-ink-body">Our intended model is clearly disclosed merchant links within relevant product comparisons and editorial content. Program acceptance and permitted promotional methods must be confirmed before links are enabled.</p><p className="mt-4 text-ink-body">Email and social promotion are not active channels on this site. Future channels will be considered separately under each program&rsquo;s terms.</p></section>
          <section aria-labelledby="suppliers" className="rounded-[22px] border border-rust-line bg-rust-tint p-6 sm:p-8"><p className="kicker mb-3 text-rust-dark">Supplier-fulfilled retail</p><h2 id="suppliers" className="heading-display mb-4 text-[29px]">A curated shop, in development.</h2><p className="text-ink-body">We are interested in suppliers with clear product information and Canadian delivery, returns and support arrangements. We will need to establish inventory updates, costs, responsibilities and permission to use product assets.</p><p className="mt-4 text-ink-body">No supplier arrangement is confirmed. There is no checkout and we do not currently accept orders.</p></section>
        </div>
        <section aria-labelledby="information" className="my-12 rounded-[22px] border border-line bg-paper p-6 sm:p-8">
          <h2 id="information" className="heading-display mb-5 text-[30px]">What helps us assess a product</h2>
          <ul className="grid list-disc gap-x-12 gap-y-3 pl-5 text-ink-body sm:grid-cols-2">
            <li>Exact product name, variant, pack size and current specifications.</li>
            <li>Product-level manufacturing evidence, separate from company ownership.</li>
            <li>Full published ingredients for personal-care and household categories.</li>
            <li>Canadian prices, availability, shipping and returns information.</li>
            <li>Approved product images and written usage permissions.</li>
            <li>Relevant affiliate or supplier terms, including exclusions and responsibilities.</li>
          </ul>
        </section>
        <section aria-labelledby="independence" className="grid gap-7 lg:grid-cols-2 lg:gap-16">
          <div><h2 id="independence" className="heading-display mb-3 text-[28px]">Evidence comes before a recommendation.</h2><p className="text-ink-body">Providing information, samples or a commercial opportunity does not guarantee coverage or a favourable conclusion. Our policy requires material relationships to be disclosed and essential evidence gaps to remain visible.</p><Link href="/disclosure" className="mt-3 flex min-h-[44px] items-center font-semibold text-sage-dark">Read our disclosure policy</Link></div>
          <div className="rounded-2xl bg-sand p-6"><h2 className="heading-display mb-3 text-[28px]">Partnership enquiries</h2>{integrations.contact.confirmed ? <p>Email <a className="break-words" href={`mailto:${integrations.contact.address}`}>{integrations.contact.address}</a> with the relevant product and program information.</p> : <p className="text-ink-body">Our enquiry channel is being prepared. A business email address will appear after it has been verified. No application or enquiry can be submitted through this page.</p>}<Link href="/contact" className="mt-3 flex min-h-[44px] items-center font-semibold text-sage-dark">Contact availability</Link></div>
        </section>
      </div>
    </>
  );
}
