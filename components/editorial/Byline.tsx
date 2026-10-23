import Link from 'next/link';

/** Publication attribution; contributor profiles live on About. */
export function Byline({ className = '' }: { className?: string }) {
  return (
    <p className={`text-[15px] text-ink-muted ${className}`}>
      Research by the{' '}
      <Link href="/about#team" className="font-semibold text-ink">
        SmartShopCA team
      </Link>
    </p>
  );
}
