import type { Metadata } from 'next';
import Link from 'next/link';
import { pillars, siteDescription, siteName, siteUrl } from '@/config/site';
import { skincareComparisons } from '@/content/skincare';
import { ArrowIcon } from '@/components/editorial/ArrowIcon';
import { StructuredData } from '@/components/editorial/StructuredData';

export const metadata: Metadata = { alternates: { canonical: '/' } };

const questions = [
  { number: '01', title: 'Where does it come from?', body: 'Canadian ownership and Canadian manufacturing are different. We look for evidence for the exact product.' },
  { number: '02', title: 'What should I know?', body: 'Ingredients, practical differences and important gaps, explained in everyday language.' },
  { number: '03', title: 'What am I paying for?', body: 'Dated CAD prices and available purchase terms, with trade-offs that help put the cost in context.' },
];

export default function HomePage() {
  return (
    <>
      <StructuredData data={{
        '@context': 'https://schema.org', '@type': 'WebSite',
        name: siteName, url: siteUrl, description: siteDescription,
        publisher: { '@type': 'Organization', name: siteName, url: `${siteUrl}/about` },
      }} />
      <section aria-labelledby="promise" className="relative isolate overflow-hidden bg-sage-dark text-ivory">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-48 h-[620px] w-[620px] rounded-full border border-white/10" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-16 h-[360px] w-[360px] rounded-full border border-white/10" />
        <div className="container-page relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-24">
          <div>
            <p className="kicker mb-5 text-[#D2DFD4]">A Canadian perspective on everyday choices</p>
            <h1 id="promise" className="heading-display max-w-[44rem] text-[43px] sm:text-[64px] lg:text-[76px]">
              Canadian products.<br /><span className="text-rust-light">Clearer choices.</span>
            </h1>
            <p className="mt-6 max-w-[34rem] text-[18px] leading-relaxed text-[#E0E8DD] sm:text-[20px]">
              Discover products worth a closer look. Understand their origin, explore the details and see what still needs checking.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#explore" className="btn bg-ivory text-sage-dark hover:bg-sand">Find your starting point <ArrowIcon /></a>
              <Link href="/methodology" className="btn border border-[#9EB7A5] text-ivory hover:bg-white/10">Our research approach</Link>
            </div>
            <p className="mt-6 max-w-[33rem] text-sm text-[#D2DFD4]">
              Early research previews are open. Shopping is not available yet.
            </p>
          </div>
          <aside aria-label="The questions behind our research" className="relative rounded-[24px] border border-[#D9DECD] bg-paper p-6 text-ink shadow-[0_24px_64px_rgba(0,0,0,0.18)] sm:p-8 lg:rotate-2">
            <div className="mb-6 flex items-center justify-between gap-3 border-b border-line pb-4">
              <p className="kicker text-sage-dark">A closer look</p>
              <span aria-hidden="true" className="h-3 w-3 rounded-full bg-rust" />
            </div>
            <p className="heading-display mb-7 text-[29px] sm:text-[34px]">Good questions.<br />More useful answers.</p>
            <ol className="space-y-5">
              {questions.map((q) => (
                <li key={q.number} className="flex gap-4">
                  <span aria-hidden="true" className="pt-1 font-serif text-xl text-rust">{q.number}</span>
                  <div><h2 className="font-semibold">{q.title}</h2><p className="mt-1 text-[15px] leading-relaxed text-ink-body">{q.body}</p></div>
                </li>
              ))}
            </ol>
            <p className="mt-7 border-t border-line pt-4 text-sm text-ink-muted">Our approach, rather than a certification or a promise of product testing.</p>
          </aside>
        </div>
      </section>

      <section id="explore" aria-labelledby="explore-heading" className="container-page py-14 sm:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div><p className="kicker mb-3 text-rust">Explore SmartShopCA</p><h2 id="explore-heading" className="heading-display text-[33px] sm:text-[44px]">Two ways to discover.</h2></div>
          <p className="max-w-[24rem] text-ink-body">Seasonal inspiration and everyday care, each with its own research approach.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex flex-col overflow-hidden rounded-[22px] border border-rust-line bg-rust-tint">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rust-line px-6 py-4 sm:px-8"><p className="kicker text-rust-dark">01 / Seasonal discovery</p><span className="text-sm text-rust-dark">Collections in preparation</span></div>
            <div className="flex flex-1 flex-col items-start p-6 sm:p-8">
              <h3 className="heading-display text-[32px] sm:text-[38px]">{pillars.seasonal.label}</h3>
              <p className="mb-6 mt-4 text-ink-body">Useful finds for the season ahead. Small collections built around a specific need, with practical differences and trade-offs explained.</p>
              <p className="mb-8 text-[15px] text-rust-dark">Canadian-made, Canadian-owned and available in Canada will be labelled separately.</p>
              <Link href="/seasonal" className="btn mt-auto bg-rust text-white hover:bg-rust-dark">Explore seasonal favourites <ArrowIcon /></Link>
            </div>
          </article>
          <article className="flex flex-col overflow-hidden rounded-[22px] border border-sage-line bg-sage-tint">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sage-line px-6 py-4 sm:px-8"><p className="kicker text-sage-dark">02 / Everyday care</p><span className="text-sm text-sage-dark">Research previews</span></div>
            <div className="flex flex-1 flex-col items-start p-6 sm:p-8">
              <h3 className="heading-display text-[32px] sm:text-[38px]">{pillars.care.label}</h3>
              <p className="mb-5 mt-4 text-ink-body">A closer look at origin and published ingredients. Starting with skincare; household products will have their own criteria.</p>
              <p className="mb-6 text-[15px] text-sage-dark">Current candidates still have evidence gaps. These are research previews, with no buying links.</p>
              <Link href="/care" className="btn mt-auto bg-sage-dark text-white hover:bg-sage">Explore personal care &amp; household <ArrowIcon /></Link>
              <nav aria-label="Skincare research previews" className="mt-5 w-full border-t border-sage-line pt-3">
                <ul className="flex flex-wrap gap-x-5">
                  {skincareComparisons.map((c) => <li key={c.slug}><Link href={c.path} className="flex min-h-[44px] items-center text-[15px] font-semibold text-sage-dark">{c.navLabel} <span className="sr-only">research preview</span></Link></li>)}
                </ul>
              </nav>
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="standards" className="border-y border-line bg-sand">
        <div className="container-page grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div><p className="kicker mb-3 text-rust">Clarity is the point</p><h2 id="standards" className="heading-display text-[33px] sm:text-[43px]">Less guesswork.<br />More context.</h2><p className="mb-6 mt-5 text-ink-body">A useful comparison should help you understand the choice, including its limitations.</p><Link href="/methodology" className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-sage-dark">See how we research <ArrowIcon /></Link></div>
          <dl className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {[
              ['Origin, precisely', 'Ownership, manufacturing and Canadian availability are distinct facts. Our maple logo does not certify a product’s origin.'],
              ['Sources you can follow', 'Product research links to its sources and shows when information was checked.'],
              ['Unknowns stay visible', 'Missing essential evidence keeps a candidate on hold, rather than turning it into a recommendation.'],
              ['Commercial links disclosed', 'Affiliate links are not enabled yet. Future compensated content will carry a clear disclosure where it appears.'],
            ].map(([title, body]) => <div key={title} className="border-t border-line pt-4"><dt className="mb-2 font-semibold">{title}</dt><dd className="text-[15px] text-ink-body">{body}</dd></div>)}
          </dl>
        </div>
      </section>

      <section aria-labelledby="behind" className="container-page py-14 sm:py-20">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[24px] border border-line bg-paper p-6 sm:p-10">
          <div className="max-w-[39rem]"><p className="kicker mb-3 text-rust">Built with care, in Canada</p><h2 id="behind" className="heading-display text-[29px] sm:text-[36px]">A small team. A thoughtful approach.</h2><p className="mt-4 text-ink-body">We&rsquo;re developing SmartShopCA around clearer product information, with affiliate recommendations and a supplier-fulfilled shop planned.</p></div>
          <div className="flex flex-col items-start gap-2"><Link href="/about" className="btn bg-sage-dark text-white hover:bg-sage">Get to know SmartShopCA <ArrowIcon /></Link><Link href="/partnerships" className="flex min-h-[44px] items-center text-[15px] font-semibold text-sage-dark">For brands and retailers</Link></div>
        </div>
      </section>
    </>
  );
}
