import type { Metadata } from 'next';
import Link from 'next/link';
import { aboutReviewed, integrations, pillars, siteSupportingMessage, siteUrl, teamMembers } from '@/config/site';
import { formatDate } from '@/lib/format';
import { Breadcrumbs } from '@/components/editorial/Breadcrumbs';
import { StructuredData } from '@/components/editorial/StructuredData';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet the SmartShopCA team, learn how our two sections work, and understand our research approach and commercial relationships.',
  alternates: { canonical: '/about' },
};

const method = [
  {
    step: 'Ask a specific question',
    body: 'Start with a practical need: what is the product for, and which differences matter to the person considering it?',
  },
  {
    step: 'Compare sources',
    body: 'Read product information, published ingredient lists, merchant policies and relevant official or scientific references. Show sources and the dates checked.',
  },
  {
    step: 'Trace claims to evidence',
    body: 'Distinguish what a brand says from what the available evidence supports. Reading a product page is not the same as testing the product.',
  },
  {
    step: 'Show what remains unknown',
    body: 'Explain important gaps. When essential evidence is missing, keep the product as a research candidate rather than a recommendation.',
  },
];

export default function AboutPage() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${siteUrl}/about`,
    name: 'About SmartShopCA',
    dateModified: aboutReviewed,
    publisher: {
      '@type': 'Organization',
      name: 'SmartShopCA',
      founder: teamMembers.map((member) => ({
        '@type': 'Person', name: member.name, url: `${siteUrl}/about#${member.id}`,
      })),
      member: teamMembers.map((member) => ({
        '@type': 'Person', name: member.name, jobTitle: member.role, url: `${siteUrl}/about#${member.id}`,
      })),
    },
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
              {siteSupportingMessage}
            </p>
            <p className="text-[19px] text-ink-body">
              SmartShopCA is a family-led Canadian product discovery and shopping business in development.
              We&rsquo;re starting with product comparisons and source-based research, while preparing applications
              for affiliate programs and dropshipping supplier partnerships.
            </p>
            <p className="text-ink-body">
              Our aim is simple: worthwhile products, clearer information and more informed choices.
              We bring together backgrounds in technology and scientific research to explain what an option offers,
              how it differs and what still needs checking. Shopping through SmartShopCA is not available yet.
            </p>
          </div>

          <section id="team" aria-labelledby="team-h" className="flex flex-col gap-4">
            <h2 id="team-h" className="heading-display text-[28px]">Meet the SmartShopCA team</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {teamMembers.map((member) => (
                <article key={member.id} id={member.id} className="flex flex-col gap-2 rounded-xl border border-line bg-paper p-5">
                  <h3 className="font-serif text-[23px] font-semibold text-ink">{member.name}</h3>
                  <p className="text-[15px] font-semibold text-sage-dark">{member.role}</p>
                  <p className="text-[15px] text-ink-body">{member.bio}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="approach" className="flex flex-col gap-4">
            <h2 id="approach" className="heading-display text-[28px]">
              A research-led approach
            </h2>
            <p className="text-ink-body">
              A useful comparison should help you understand a choice, not simply repeat a product description.
              We look for differences that matter in everyday use and explain the evidence behind them.
            </p>
            <p className="text-ink-body">
              We use AI to help organise research and draft material. We remain responsible for checking sources
              and deciding what to publish. AI output alone is not evidence for a product claim.
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
              Explore the current research previews: <Link href="/care/skincare/face-moisturizers">face moisturizers</Link> ·{' '}
              <Link href="/care/skincare/body-moisturizers">body moisturizers</Link>. These are still being checked,
              not finished recommendations.
            </p>
          </section>

          <section aria-labelledby="sections" className="flex flex-col gap-4">
            <h2 id="sections" className="heading-display text-[28px]">
              Two areas, one clear purpose
            </h2>
            <div className="flex flex-col gap-1.5 border-l-0 border-t-[3px] border-rust pt-3">
              <h3 className="text-lg font-bold">
                <Link href={pillars.seasonal.href} className="text-ink">
                  {pillars.seasonal.label}
                </Link>
              </h3>
              <p className="text-ink-body">
                Useful or distinctive products for a particular seasonal need, explained through practical
                differences and trade-offs. The first collections are being prepared.
              </p>
            </div>
            <div className="flex flex-col gap-1.5 border-t-[3px] border-sage pt-3">
              <h3 className="text-lg font-bold">
                <Link href={pillars.care.href} className="text-ink">
                  {pillars.care.label}
                </Link>
              </h3>
              <p className="text-ink-body">
                Product origin and published ingredient information, starting with separate face and body moisturizer
                research previews. Candidates with missing origin or ingredient evidence remain clearly marked.
                Household categories may follow, with their own comparison criteria.
              </p>
            </div>
          </section>

          <section aria-labelledby="labels" className="flex flex-col gap-3">
            <h2 id="labels" className="heading-display text-[28px]">
              Ingredient information, with limits explained
            </h2>
            <p className="text-ink-body">
              We explain published ingredient information and the criteria used in a comparison. An ingredient list
              or a screening result alone cannot establish that a product is suitable for you.
            </p>
            <p className="text-ink-body">
              We don&rsquo;t treat &ldquo;natural&rdquo;, &ldquo;clean&rdquo; or &ldquo;hypoallergenic&rdquo; as a
              guarantee against irritation or allergies. Our content is general information, not medical advice
              or a product safety certification. For concerns about allergies, a skin condition or an individual
              ingredient, seek advice from a qualified healthcare professional.{' '}
              <a href="https://www.canada.ca/en/health-canada/services/cosmetics/cosmetic-advertising-labelling-ingredients.html">
                Read Health Canada&rsquo;s guidance on cosmetic claims
              </a>.
            </p>
          </section>

          <section aria-labelledby="canadian" className="flex flex-col gap-3">
            <h2 id="canadian" className="heading-display text-[28px]">
              A Canadian focus, with origin made clear
            </h2>
            <p className="text-ink-body">
              Canadian ownership, Canadian manufacturing and availability from a Canadian retailer mean different
              things. Where origin matters to a comparison, we describe the evidence for the specific product
              and identify what remains unconfirmed. A Canadian brand or our maple logo does not, by itself,
              establish where a product was made.
            </p>
          </section>

          <section aria-labelledby="earns" className="flex flex-col gap-3">
            <h2 id="earns" className="heading-display text-[28px]">
              How we compare products
            </h2>
            <p className="text-ink-body">
              We consider the buying question, available evidence, relevant product details and price in CAD.
              Shipping, returns and delivered-cost examples are included where information is available. Prices,
              stock and policies can change; confirm the current terms with the seller before buying.
            </p>
            <p className="text-ink-body">
              The current skincare previews are based on source research, not hands-on product testing. A research
              hold means that important information is missing; it is not a finding that a product is unsafe.{' '}
              <Link href="/methodology">Read our research approach and its limits</Link>.
            </p>
          </section>

          <section id="relationships" aria-labelledby="relationships-h" className="flex flex-col gap-3">
            <h2 id="relationships-h" className="heading-display text-[28px]">
              How we may earn money
            </h2>
            {integrations.affiliate.anyActive ? (
              <p className="text-ink-body">
                Links marked &ldquo;Affiliate link&rdquo; may earn SmartShopCA a commission when you buy through them.
                The seller sets the price and terms. Check the disclosure beside the relevant link.
              </p>
            ) : (
              <p className="text-ink-body">
                We&rsquo;re preparing to apply for affiliate programs. Affiliate links are not currently enabled on
                this website. Once approved, clearly disclosed links may earn us commissions on qualifying purchases
                made with another seller.
              </p>
            )}
            <p className="text-ink-body">
              We also plan a curated shop with orders fulfilled by partner suppliers, often called dropshipping.
              Supplier arrangements are not yet confirmed, and we do not currently accept orders. Delivery, returns
              and customer-support information will be provided before shopping becomes available.
            </p>
            <p className="text-ink-body">
              Our editorial policy is that payment must not buy a favourable research conclusion. Products without
              affiliate programs may still be considered. Paid placements and other material connections, including
              gifted products, must be disclosed alongside the relevant content; a general About-page notice alone
              is not enough.
            </p>
            <p className="text-[15px]"><Link href="/disclosure">Read our affiliate disclosure and commercial-content policy</Link>.</p>
          </section>

          <section
            id="partnerships"
            aria-labelledby="partnerships-h"
            className="flex flex-col gap-3 rounded-2xl bg-sand p-6 sm:p-8"
          >
            <h2 id="partnerships-h" className="heading-display text-[24px]">
              For brands and retailers
            </h2>
            <p className="text-ink-body">
              Clear, current product information helps us assess a candidate. Relevant details include the exact
              variant, manufacturing information, published ingredients where applicable, and Canadian purchase terms.
            </p>
            <p className="text-ink-body">
              Providing information or discussing a partnership does not guarantee coverage, a recommendation or
              the removal of an evidence gap.
            </p>
            <p className="text-[15px]"><Link href="/partnerships">Partnership information for brands, retailers and suppliers</Link>.</p>
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
              Dates, changes and corrections
            </h2>
            <p className="text-ink-body">
              Our comparison pages show review dates and source links. These describe when information was checked;
              they are not a promise of continuous monitoring.
            </p>
            {integrations.contact.confirmed ? (
              <p className="text-ink-body">
                To report outdated information or request a correction, email{' '}
                <a href={`mailto:${integrations.contact.address}`}>{integrations.contact.address}</a>.
              </p>
            ) : (
              <p className="text-ink-body">
                A public corrections contact is not available yet. Until it is set up, consult the linked original
                sources for current product information.
              </p>
            )}
            <p className="text-sm text-ink-muted">About page reviewed {formatDate(aboutReviewed)}.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
