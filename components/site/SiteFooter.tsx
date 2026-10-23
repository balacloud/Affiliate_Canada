import Link from 'next/link';
import { integrations, pillars, siteTagline } from '@/config/site';
import { Wordmark } from './Wordmark';

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-sand">
      <div className="container-page flex flex-wrap justify-between gap-10 py-12">
        <div className="flex max-w-md flex-[1_1_20rem] flex-col gap-2.5">
          <Wordmark className="self-start" />
          <p className="text-[15px] font-semibold text-ink">
            {siteTagline}
          </p>
          <p className="text-[15px] text-ink-body">
            Canadian product discovery and comparisons.
          </p>
          <p id="disclosure" className="text-[15px] text-ink-body">
            Shopping is not available yet. Our product information is not medical advice.{' '}
            {integrations.affiliate.anyActive
              ? 'Some links earn us a commission; each one is labelled where it appears.'
              : 'Affiliate links are not enabled on this website. Future paid links will be labelled where they appear.'}
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
              { href: '/about#team', label: 'About our team' },
              { href: '/privacy', label: 'Privacy' },
              { href: '/disclosure', label: 'Affiliate disclosure' },
              { href: '/contact', label: 'Contact' },
              { href: '/partnerships', label: 'For brands and retailers' },
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
