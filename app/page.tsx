import Link from 'next/link';
import { founder, integrations, pillarOrder, pillars } from '@/config/site';
import { skincareComparisons } from '@/content/skincare';
import { PillarPanel } from '@/components/editorial/PillarPanel';
import { EmailSignup, type EmailSignupProps } from '@/components/EmailSignup';
import { comparisonStatusLabel } from '@/lib/readiness';
import { EmailUpdatesNotice } from '@/components/EmailUpdatesNotice';

const commitments = [
  { title: 'Small shortlists', body: 'Two to seven options for one clear need. No padding.' },
  { title: 'Precise origin', body: 'Made in, owned in and sold in Canada are separate labels.' },
  { title: 'Sources and dates', body: 'Each price, ingredient list and claim links to where it came from.' },
  {
    title: 'Money disclosed',
    body: integrations.affiliate.anyActive
      ? 'Paid links are labelled and never decide what we include.'
      : 'No affiliate relationships today. Paid links will be labelled if that changes.',
  },
];

/**
 * Real subscription server action. None exists yet, so the homepage shows the
 * form-free notice even if integrations.email.configured is flipped on.
 * When the provider is wired, import the action and assign it here.
 */
const subscribe: EmailSignupProps['subscribe'] = undefined;

export default function HomePage() {
  return (
    <>
      <section aria-labelledby="promise" className="container-page pb-6 pt-6 sm:pb-9 sm:pt-12">
        <p className="mb-2 text-[13px] uppercase tracking-[0.08em] text-ink-muted sm:mb-3 sm:text-sm">An independent Canadian buying guide</p>
        <h1 id="promise" className="heading-display max-w-[48rem] text-[30px] sm:text-[46px] lg:text-[54px]">
          Fewer products, clearer reasons to choose.
        </h1>
        <p className="mt-3 max-w-[40rem] text-[17px] text-ink-body sm:mt-4 sm:text-[19px]">
          Small shortlists that show where each product is made, what&rsquo;s in it and what it costs to your door
          &mdash; with gaps marked, not hidden.
        </p>
        <p className="mt-3 text-[15px] text-ink-muted">
          Researched by{' '}
          <Link href="/about" className="text-ink">
            {founder.name}
          </Link>
          , {founder.location} ·{' '}
          <Link href="/methodology" className="text-ink">
            How we check evidence
          </Link>
        </p>
      </section>

      <section aria-label="Choose a section" className="container-page grid grid-cols-1 gap-4 pb-10 md:grid-cols-2 md:gap-6 md:pb-12">
        {pillarOrder.map((id) =>
          id === 'care' ? (
            <PillarPanel key={id} pillar={pillars[id]}>
              <nav aria-label="Skincare comparisons" className="border-t border-line-soft pt-3.5">
                <p className="mb-1 text-sm text-ink-muted">Or go straight to a skincare comparison:</p>
                <ul className="flex flex-col">
                  {skincareComparisons.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={c.path}
                        className="group flex min-h-[44px] flex-wrap items-baseline gap-x-2 py-1.5 text-ink no-underline"
                      >
                        <span className="font-semibold text-sage-dark underline decoration-1 underline-offset-4 group-hover:decoration-2">
                          {c.navLabel}
                        </span>
                        <span className="text-sm text-ink-muted">
                          Research preview · {comparisonStatusLabel(c.candidates)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </PillarPanel>
          ) : (
            <PillarPanel key={id} pillar={pillars[id]} />
          ),
        )}
      </section>

      <section aria-labelledby="how" className="border-y border-line bg-sand">
        <div className="container-page py-10 sm:py-12">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h2 id="how" className="heading-display text-[26px] sm:text-[28px]">
              How every shortlist works
            </h2>
            <Link href="/methodology" className="text-[15px] font-semibold text-ink">
              Read the full methodology
            </Link>
          </div>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c) => (
              <li key={c.title} className="border-t-2 border-ink pt-2.5">
                <h3 className="font-bold">{c.title}</h3>
                <p className="text-[15px] text-ink-body">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container-page py-10">
        {integrations.email.configured && subscribe ? <EmailSignup subscribe={subscribe} /> : <EmailUpdatesNotice />}
      </div>
    </>
  );
}
