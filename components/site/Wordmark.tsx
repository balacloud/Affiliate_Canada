import Link from 'next/link';

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-serif text-[26px] font-bold tracking-[-0.01em] text-ink no-underline ${className}`}
    >
      SmartShop<span className="text-rust">CA</span>
      <span className="sr-only"> home</span>
    </Link>
  );
}
