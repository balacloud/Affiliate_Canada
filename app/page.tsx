import Link from 'next/link';
import { founder, integrations, pillarOrder, pillars } from '@/config/site';
import { skincareComparisons } from '@/content/skincare';
import { formatCad, formatDate } from '@/lib/format';
import { PillarPanel } from '@/components/editorial/PillarPanel';
import { EmailSignup } from '@/components/EmailSignup';

const commitments = [
  {
    title: 'Small shortlists',
    body: "Two to seven options for one clear need. We don't pad a list to look complete.",
    tone: 'text-rust',
  },
  {
    title: 'Origin, stated precisely',
    body: 'Canadian-made, Canadian-owned and available in Canada are different labels. Unconfirmed stays unconfirmed.',
    tone: 'text-rust',
  },
  {
    title: 'Sources and dates',
    body: 'Every price, ingredient list and claim shows where it came from and when we checked it.',
    tone: 'text-sage',
  },
  {
    title: 'Money, disclosed',
    body: integrations.affiliate.anyActive
      ? 'Some links earn a commission. Each one is labelled, and commissions never decide what we include.'
      : 'We have no active affiliate relationships today. If that changes, each paid link will say so.',
    tone: 'text-sage',
  },
];

export default function HomePage() {
  return (
    <>
      <section aria-labelledby="promise" className="container-page pb-10 pt-12 sm:pt-16">
        <p className="mb-4 text-sm uppercase tracking-[0.08em] text-ink-muted">An independent Canadian buying guide</p>
        <h1 id="promise" className="heading-display max-w-[54rem] text-[36px] sm:text-[48px] lg:text-[60px] lg:leading-[1.08]">
          Fewer products, clearer reasons to choose.
        </h1>
        <p className="mt-6 max-w-[42rem] text-[19px] text-ink-body">
          SmartShopCA helps Canadians discover worthwhile products and see the evidence behind each option — where
          it&rsquo;s made, what&rsquo;s in it, and what it costs to get it to your door. Two sections, each with its own
          standards.
        </p>
        <p className="mt-5 text-[15px] text-ink-muted">
          Researched by {founder.name} in {founder.location}.{' '}
          <Link href="/about" className="font-semibold text-ink">
            How SmartShopCA works
          </Link>
        </p>
      </section>

      <section aria-label="Our two sections" className="container-page grid grid-cols-1 gap-6 pb-16 md:grid-cols-2">
        {pillarOrder.map((id) => (
          <PillarPanel key={id} pillar={pillars[id]} />
        ))}
      </section>

      <section aria-labelledby="how" className="border-y border-line bg-sand">
        <div className="container-page py-16">
          <h2 id="how" className="heading-display mb-2 text-[32px]">
            How every shortlist works
          </h2>
          <p className="mb-9 max-w-[40rem] text-ink-body">
            The same four commitments apply to both sections. Each section then adds its own evidence method.
          </p>
          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c, i) => (
              <li key={c.title} className="flex flex-col gap-2">
                <span aria-hidden="true" className={`font-serif text-[40px] leading-none ${c.tone}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-bold">{c.title}</h3>
                <p className="text-base text-ink-body">{c.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-9">
            <Link href="/methodology" className="font-semibold text-ink">
              Read the full methodology
            </Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="preview" className="container-page py-16 sm:py-[72px]">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="kicker mb-2 text-sage">Preview · {pillars.care.label} › Skincare</p>
            <h2 id="preview" className="heading-display text-[30px] sm:text-[32px]">
              Moisturizer comparisons in progress
            </h2>
          </div>
          <p className="max-w-[28rem] text-[15px] text-ink-muted">
            Draft research, prices checked {formatDate(skincareComparisons[0].reviewed)}. These are not yet reviewed
            recommendations, and nothing here is sold by us.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skincareComparisons.map((c) => {
            const prices = c.candidates.map((p) => p.price.amountCad);
            const held = c.candidates.filter((p) => p.status !== 'published').length;
            return (
              <li key={c.slug}>
                <Link
                  href={c.path}
                  className="flex h-full flex-col gap-1.5 rounded-[14px] border border-line bg-paper p-7 text-ink no-underline transition-colors hover:border-sage"
                >
                  <span className="text-[21px] font-bold">{c.navLabel}</span>
                  <span className="text-[15px] text-ink-body">
                    {c.candidates.length} candidates under research · pack prices {formatCad(Math.min(...prices))}–
                    {formatCad(Math.max(...prices))}
                  </span>
                  <span className="mt-1.5 text-sm text-ink-muted">
                    {held === c.candidates.length
                      ? 'All candidates on hold while evidence is confirmed.'
                      : `${held} of ${c.candidates.length} on hold.`}
                  </span>
                  <span className="mt-2.5 font-semibold text-sage">
                    See the {c.navLabel.toLowerCase()} comparison <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="container-page pb-20">
        <EmailSignup />
      </div>
    </>
  );
}
