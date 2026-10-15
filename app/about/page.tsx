import type { Metadata } from 'next';
import Link from 'next/link';
import { aboutReviewed, founder, integrations, pillars, siteUrl } from '@/config/site';
import { formatDate } from '@/lib/format';
import { Breadcrumbs } from '@/components/editorial/Breadcrumbs';
import { StructuredData } from '@/components/editorial/StructuredData';

export const metadata: Metadata = {
  title: 'About',
  description: `Who runs SmartShopCA, how its two sections work, how products earn a place, and its current commercial relationships. Founded by ${founder.name} in ${founder.location}.`,
  alternates: { canonical: '/about' },
};

const method = [
  {
    step: 'Ask a specific question',
    body: 'Each comparison starts from one buying question, such as which face cream to consider for drier winter months.',
  },
  {
    step: 'Compare sources',
    body: 'Product pages, published ingredient lists, brand policies and official references — each recorded with the date it was checked.',
  },
  {
    step: 'Trace claims to evidence',
    body: 'A brand-wide statement is labelled as brand-wide. A product-page claim is labelled as a claim. Neither is presented as our own testing.',
  },
  {
    step: 'Show what remains unknown',
    body: 'Gaps are written out in plain words. A product with an essential gap stays a research candidate, without a buying link.',
  },
];

const placementTypes = [
  'Clearly labelled affiliate links on comparison pages, for products that have already passed our evidence checks',
  'Clearly labelled sponsored placements kept separate from editorial shortlists',
];

export default function AboutPage() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${siteUrl}/about`,
    name: 'About SmartShopCA',
    dateModified: aboutReviewed,
    publisher: { '@type': 'Organization', name: 'SmartShopCA', founder: { '@type': 'Person', name: founder.name } },
  };

  return (
    <div className="container-page pb-20 pt-10">
      <StructuredData data={ld} />
      <div className="flex flex-wrap gap-x-16 gap-y-12">
        <div className="flex min-w-0 max-w-[46rem] flex-[999_1_32rem] flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Breadcrumbs className="text-ink-muted" items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
            <h1 className="heading-display text-[34px] sm:text-[46px]">About SmartShopCA</h1>
            <p className="font-serif text-[22px] leading-snug text-ink sm:text-[24px]">
              Worthwhile products. Clearer information. A Canadian perspective.
            </p>
            <p className="text-[19px] text-ink-body">
              I&rsquo;m <strong className="text-ink">{founder.name}</strong>, a Canadian father of two based in{' '}
              <strong className="text-ink">{founder.location}</strong>. SmartShopCA grew from a personal search for
              worthwhile products and clearer labels — information that helps me understand what I&rsquo;m considering
              for everyday life.
            </p>
          </div>

          <section aria-labelledby="approach" className="flex flex-col gap-4">
            <h2 id="approach" className="heading-display text-[28px]">
              A personal question, a research-led approach
            </h2>
            <p className="text-ink-body">
              I bring more than 18 years of experience in software engineering and technical delivery, including work
              with complex insurance and financial-data systems. That work has involved checking data integrity,
              reconciling conflicting information, translating requirements into clear decision rules, and building
              review and quality controls.
            </p>
            <p className="text-ink-body">
              I also design and guide AI-assisted research and decision systems. The same discipline shapes SmartShopCA.
              AI can help organize research; it does not replace checking the sources or taking responsibility for
              what&rsquo;s published.
            </p>
            <ol className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {method.map((m, i) => (
                <li key={m.step} className="flex flex-col gap-1.5 rounded-xl border border-line bg-paper p-5">
                  <span aria-hidden="true" className="font-serif text-[28px] leading-none text-sage">
                    {i + 1}
                  </span>
                  <span className="font-bold">{m.step}</span>
                  <span className="text-[15px] text-ink-body">{m.body}</span>
                </li>
              ))}
            </ol>
            <p className="text-[15px] text-ink-muted">
              See the method applied: <Link href="/care/skincare/face-moisturizers">face moisturizer comparison</Link> ·{' '}
              <Link href="/care/skincare/body-moisturizers">body moisturizer comparison</Link>
            </p>
          </section>

          <section aria-labelledby="sections" className="flex flex-col gap-4">
            <h2 id="sections" className="heading-display text-[28px]">
              One publication, two distinct areas
            </h2>
            <div className="flex flex-col gap-1.5 border-l-0 border-t-[3px] border-rust pt-3">
              <h3 className="text-lg font-bold">
                <Link href={pillars.seasonal.href} className="text-ink">
                  {pillars.seasonal.label}
                </Link>
              </h3>
              <p className="text-ink-body">
                Small selections of useful or distinctive products for the current season. Each shortlist is intended to
                answer a particular buying question, with reasons an option may — or may not — fit. The first
                collections are being prepared.
              </p>
            </div>
            <div className="flex flex-col gap-1.5 border-t-[3px] border-sage pt-3">
              <h3 className="text-lg font-bold">
                <Link href={pillars.care.href} className="text-ink">
                  {pillars.care.label}
                </Link>
              </h3>
              <p className="text-ink-body">
                Product origin and transparent ingredient information. We&rsquo;re starting with separate face and body
                moisturizer comparisons. Laundry detergent and dishwashing liquid are planned for later, with their own
                review criteria.
              </p>
            </div>
          </section>

          <section aria-labelledby="labels" className="flex flex-col gap-3">
            <h2 id="labels" className="heading-display text-[28px]">
              What clearer labels mean to us
            </h2>
            <p className="text-ink-body">
              A label should help you understand what you&rsquo;re considering. Our standard is to show the disclosed
              ingredients, explain the criteria behind a comparison, identify sources and review dates, and make missing
              information visible.
            </p>
            <p className="text-ink-body">
              We don&rsquo;t use &ldquo;clean&rdquo; as a universal safety certificate. Natural ingredients, short
              ingredient lists and &ldquo;hypoallergenic&rdquo; claims do not establish that a product suits everyone.
              Our content is informational: it isn&rsquo;t medical advice, and it doesn&rsquo;t guarantee that a product
              will avoid allergies or other health effects — for adults or for children.
            </p>
          </section>

          <section aria-labelledby="canadian" className="flex flex-col gap-3">
            <h2 id="canadian" className="heading-display text-[28px]">
              What we mean by Canadian
            </h2>
            <p className="text-ink-body">
              Canadian-owned, manufactured in Canada, and available from a Canadian retailer describe different things.
              We label those distinctions separately and assess manufacturing claims for the specific product being
              discussed. A brand&rsquo;s nationality alone does not establish where every product is made.
            </p>
          </section>

          <section aria-labelledby="earns" className="flex flex-col gap-3">
            <h2 id="earns" className="heading-display text-[28px]">
              How a product earns a place
            </h2>
            <p className="text-ink-body">
              Our criteria include fit for the buying question, the quality of available evidence, ingredient
              preferences where relevant, price in CAD, and practical details such as format, shipping and returns. A
              recommendation should explain its trade-offs, including who should consider another option.
            </p>
            <p className="text-ink-body">
              Manufacturer statements and published ingredient lists are different from independent tests or hands-on
              experience. We identify the evidence used and don&rsquo;t present research as testing we haven&rsquo;t
              performed. When evidence is insufficient, a product remains a research candidate instead of a
              recommendation. <Link href="/methodology">Read the full methodology</Link>.
            </p>
          </section>

          <section id="relationships" aria-labelledby="relationships-h" className="flex flex-col gap-3">
            <h2 id="relationships-h" className="heading-display text-[28px]">
              Commercial relationships
            </h2>
            {integrations.affiliate.anyActive ? (
              <p className="text-ink-body">
                Some links on SmartShopCA are affiliate links: if you buy through one, we may earn a commission at no
                extra cost to you. Each affiliate link is labelled where it appears.
              </p>
            ) : (
              <p className="text-ink-body">
                SmartShopCA is being prepared for affiliate partnerships, but{' '}
                <strong className="text-ink">none is confirmed today</strong>. No brand or retailer has paid for
                coverage. If we later use affiliate links, we may receive a commission when you buy through them, and we
                will label those links where they appear.
              </p>
            )}
            <p className="text-ink-body">
              Our editorial standard is that commissions do not buy inclusion or favourable placement. Suitable products
              may be included even when they offer no affiliate program, and research and evidence links are never
              affiliate links.
            </p>
          </section>

          <section
            id="partnerships"
            aria-labelledby="partnerships-h"
            className="flex flex-col gap-3 rounded-2xl bg-sand p-6 sm:p-8"
          >
            <h2 id="partnerships-h" className="heading-display text-[24px]">
              For brands and affiliate programs
            </h2>
            <p className="text-ink-body">
              SmartShopCA publishes original comparisons for Canadian readers deciding between a small number of
              products. Pages add source-dated origin, ingredient and delivered-cost detail that a single merchant page
              doesn&rsquo;t show side by side.
            </p>
            <p className="text-ink-body">Placements we may offer in future:</p>
            <ul className="flex list-disc flex-col gap-1.5 pl-5 text-ink-body">
              {placementTypes.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="text-ink-body">
              Neither changes which products are shortlisted, how they&rsquo;re described, or whether an unresolved
              evidence gap is shown.
            </p>
            {integrations.contact.confirmed ? (
              <p>
                Partnership enquiries:{' '}
                <a href={`mailto:${integrations.contact.address}`}>{integrations.contact.address}</a>
              </p>
            ) : (
              <p className="text-[15px] text-ink-muted">
                A partnership contact will be listed here once it is monitored.
              </p>
            )}
          </section>

          <section id="contact" aria-labelledby="accountable" className="flex flex-col gap-3">
            <h2 id="accountable" className="heading-display text-[28px]">
              Keep us accountable
            </h2>
            <p className="text-ink-body">
              Product information changes. Every comparison shows its review dates and makes uncertainty visible.
            </p>
            {integrations.contact.confirmed ? (
              <p className="text-ink-body">
                To report outdated information or request a correction, email{' '}
                <a href={`mailto:${integrations.contact.address}`}>{integrations.contact.address}</a>.
              </p>
            ) : (
              <p className="text-ink-body">
                A way to report outdated information or request a correction will be listed here once it is set up and
                monitored.
              </p>
            )}
            <p className="text-sm text-ink-muted">About page reviewed {formatDate(aboutReviewed)}.</p>
          </section>
        </div>

        <aside aria-labelledby="founder-h" className="flex-[1_1_18rem] lg:max-w-[22rem]">
          <div className="flex flex-col gap-3 rounded-2xl border border-line bg-paper p-6 lg:sticky lg:top-6">
            <p className="kicker text-ink-muted">Founder</p>
            <h2 id="founder-h" className="heading-display text-[24px]">
              {founder.name}
            </h2>
            <dl className="flex flex-col gap-2.5 text-[15px]">
              <div>
                <dt className="text-ink-muted">Based in</dt>
                <dd className="font-semibold">{founder.location}, Canada</dd>
              </div>
              <div>
                <dt className="text-ink-muted">Role</dt>
                <dd className="font-semibold">{founder.role}</dd>
              </div>
              <div>
                <dt className="text-ink-muted">Background</dt>
                <dd>
                  18+ years in software engineering and technical delivery; data integrity, reconciliation and review
                </dd>
              </div>
              <div>
                <dt className="text-ink-muted">Research focus</dt>
                <dd>Product origin, disclosed ingredients and practical buying trade-offs</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  );
}
