import Link from 'next/link';
import { founder } from '@/config/site';

/** Research byline. Names the real founder; no credentials beyond those confirmed. */
export function Byline({ className = '' }: { className?: string }) {
  return (
    <p className={`text-[15px] text-ink-muted ${className}`}>
      Research editor:{' '}
      <Link href="/about" className="font-semibold text-ink">
        {founder.name}
      </Link>
      , {founder.location}
    </p>
  );
}
