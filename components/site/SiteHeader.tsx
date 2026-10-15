import Link from 'next/link';
import { pillars, pillarOrder, primaryNav } from '@/config/site';
import { Wordmark } from './Wordmark';
import { MobileNav } from './MobileNav';
import { PillarDot } from '@/components/editorial/PillarDot';

/** Shared header. Server component; only the mobile menu is a client island. */
export function SiteHeader() {
  return (
    <header className="relative border-b border-line bg-ivory">
      <div className="container-page flex min-h-[80px] items-center justify-between gap-6 lg:min-h-[104px]">
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
                className="flex min-h-[76px] items-center justify-center gap-2 px-3 py-4 text-center font-serif text-[16px] leading-snug no-underline hover:bg-sand sm:min-h-[64px] sm:text-[20px] lg:min-h-[72px] lg:gap-3 lg:text-[23px]"
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
