import Link from 'next/link';
import { founder, integrations, pillars } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-sand">
      <div className="container-page flex flex-wrap justify-between gap-10 py-12">
        <div className="flex max-w-md flex-[1_1_20rem] flex-col gap-2.5">
          <p className="font-serif text-[22px] font-bold">
            SmartShop<span className="text-rust">CA</span>
          </p>
          <p className="text-[15px] text-ink-body">
            An independent publication by {founder.name}, {founder.location}.
          </p>
          <p id="disclosure" className="text-[15px] text-ink-body">
            Editorial guidance only — we don&rsquo;t sell products, and nothing here is medical advice.{' '}
            {integrations.affiliate.anyActive
              ? 'Some links earn us a commission; each one is labelled where it appears.'
              : 'We have no active affiliate relationships. If that changes, paid links will be labelled where they appear.'}
          </p>
          {integrations.contact.confirmed ? (
            <p className="text-[15px]">
              Contact:{' '}
              <a href={`mailto:${integrations.contact.address}`} className="text-ink">
                {integrations.contact.address}
              </a>
            </p>
          ) : null}
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-1 gap-x-8 text-[15px] sm:grid-cols-2">
            {[
              { href: pillars.seasonal.href, label: pillars.seasonal.label },
              { href: pillars.care.href, label: pillars.care.label },
              { href: '/methodology', label: 'Methodology' },
              { href: '/about', label: 'About' },
              { href: '/privacy', label: 'Privacy' },
              { href: '/about#relationships', label: 'Disclosure' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="flex min-h-[44px] items-center text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
