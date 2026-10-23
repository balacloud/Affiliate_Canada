import Link from 'next/link';
import { pillars, pillarOrder, primaryNav } from '@/config/site';
import { Wordmark } from './Wordmark';
import { MobileNav } from './MobileNav';
import { PillarDot } from '@/components/editorial/PillarDot';

/** Shared header. Server component; only the mobile menu is a client island. */
export function SiteHeader() {
  return (
    <header className="relative border-b border-line bg-ivory">
      <div className="container-page flex min-h-[64px] items-center justify-between gap-3 sm:min-h-[72px] sm:gap-6 lg:min-h-[84px]">
        <Wordmark />
        <nav aria-label="About SmartShopCA" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[15px]">
            {primaryNav.filter((item) => !item.pillar).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-[44px] items-center gap-2 text-ink no-underline hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileNav items={primaryNav.map(({ href, fullLabel }) => ({ href, label: fullLabel }))} />
      </div>
      <nav aria-label="Shopping pillars" className="border-t border-line bg-paper">
        <ul className="container-page grid grid-cols-2">
          {pillarOrder.map((id) => (
            <li key={id} className="first:border-r first:border-line">
              <Link
                href={pillars[id].href}
                className="flex min-h-[64px] items-center justify-center gap-2 px-2 py-2.5 text-center font-serif text-[15px] leading-snug no-underline hover:bg-sand min-[400px]:text-[16px] sm:min-h-[60px] sm:px-3 sm:text-[19px] lg:min-h-[64px] lg:gap-3 lg:text-[22px]"
              >
                <PillarDot pillar={id} />
                <span>{pillars[id].label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
