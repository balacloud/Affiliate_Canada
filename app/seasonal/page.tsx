import type { Metadata } from 'next';
import Link from 'next/link';
import { pillars } from '@/config/site';
import { Breadcrumbs } from '@/components/editorial/Breadcrumbs';
import { ReadinessBadge } from '@/components/editorial/ReadinessBadge';

export const metadata: Metadata = {
  title: 'Seasonal Canadian favourites',
  description:
    'Small, well-reviewed selections of distinctive products for one seasonal need, with origin labelled precisely. The first collections are being prepared.',
  alternates: { canonical: '/seasonal' },
};

const promises = [
  {
    title: 'One use case, a few options',
    body: 'Two to seven picks that solve the same problem in different ways, so you can choose on what matters to you.',
  },
  {
    title: 'Season fit, explained',
    body: "Why a pick suits Canadian conditions right now — and when it won't — based on reviews and published specifications.",
  },
  {
    title: 'Trade-offs up front',
    body: '"Choose this if" and "skip this if" for every option, plus price, shipping and returns as of the date we checked.',
  },
];

const labels = [
  { term: 'Made in Canada', def: "The specific product's manufacturing location is documented for this item.", dashed: false },
  { term: 'Canadian-owned', def: 'The company is Canadian. On its own, that says nothing about where the item is made.', dashed: false },
  { term: 'Available in Canada', def: 'A Canadian buyer can order it in CAD from a named seller, as of the date shown.', dashed: false },
  { term: 'Not confirmed', def: "We couldn't verify it, so we say so rather than guess from a brand's headquarters.", dashed: true },
];

export default function SeasonalPage() {
  const p = pillars.seasonal;
  return (
    <>
      <section className="border-b border-rust-line bg-rust-tint">
        <div className="container-page flex flex-wrap items-center gap-12 pb-16 pt-12">
          <div className="flex flex-[1_1_32rem] flex-col gap-[18px]">
            <Breadcrumbs className="text-[#5B3A26]" items={[{ label: 'Home', href: '/' }, { label: p.label }]} />
            <p className="kicker text-rust-dark">{p.label}</p>
            <h1 className="heading-display text-[34px] sm:text-[46px] lg:text-[54px]">
              Useful picks for the way Canadians shop this season.
            </h1>
            <p className="max-w-[38rem] text-[19px] text-[#3E3128]">
              Each collection takes one seasonal need and narrows it to a few distinctive, well-reviewed options with
              honest trade-offs. It&rsquo;s broader than gifting: practical buys count too.
            </p>
            <div>
              <ReadinessBadge tone="seasonal" marker="ring">
                The first collections are being prepared. No launch date is set yet.
              </ReadinessBadge>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="grid aspect-square w-full max-w-[22rem] flex-[0_1_22rem] grid-cols-2 gap-3 rounded-[20px] border border-rust-line bg-paper p-5"
          >
            <div className="rounded-xl bg-rust-light" />
            <div className="rounded-full border-2 border-rust bg-rust-tint" />
            <div className="rounded-xl border-2 border-dashed border-rust bg-rust-tint" />
            <div className="rounded-[12px_12px_60px_12px] bg-rust" />
          </div>
        </div>
      </section>

      <section aria-labelledby="what" className="container-page py-16">
        <h2 id="what" className="heading-display mb-8 text-[32px]">
          What each collection will give you
        </h2>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {promises.map((x) => (
            <li key={x.title} className="flex flex-col gap-2.5 rounded-[14px] border border-line bg-paper p-7">
              <h3 className="text-xl font-bold">{x.title}</h3>
              <p className="text-base text-ink-body">{x.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="labels" className="border-y border-line bg-sand">
        <div className="container-page py-16">
          <h2 id="labels" className="heading-display mb-3 text-[32px]">
            How origin labels work here
          </h2>
          <p className="mb-8 max-w-[42rem] text-ink-body">
            Seasonal picks aren&rsquo;t all Canadian-made. Each one carries the labels its evidence supports — and only
            those.
          </p>
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {labels.map((l) => (
              <div
                key={l.term}
                className={`border-t-[3px] pt-3.5 ${l.dashed ? 'border-dashed border-ink-muted' : 'border-ink'}`}
              >
                <dt className="font-bold">{l.term}</dt>
                <dd className="mt-1.5 text-base text-ink-body">{l.def}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8">
            <Link href="/methodology#seasonal" className="font-semibold text-ink">
              How seasonal collections are evaluated
            </Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="notify" className="container-page pb-20 pt-16">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-line bg-paper p-8">
          <div className="flex-[1_1_26rem]">
            <h2 id="notify" className="heading-display mb-1.5 text-[26px]">
              Hear when the first collection is ready
            </h2>
            <p className="text-base text-ink-body">
              Email updates aren&rsquo;t switched on yet, so there&rsquo;s no sign-up today. In the meantime, the skincare
              comparisons are open as a preview.
            </p>
          </div>
          <Link href="/care/skincare" className="btn border-2 border-ink text-ink hover:bg-sand">
            See the skincare preview
          </Link>
        </div>
      </section>
    </>
  );
}
