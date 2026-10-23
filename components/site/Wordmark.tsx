import Link from 'next/link';

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex min-h-[44px] shrink-0 items-center no-underline ${className}`}
    >
      {/* Frame the approved raster artwork without its large transparent margins.
          The original PNG is preserved; this is not a vector recreation. */}
      <svg
        viewBox="112 198 1938 338"
        width="236"
        height="42"
        className="block h-[33px] w-[184px] sm:h-[42px] sm:w-[236px]"
        aria-hidden="true"
        focusable="false"
      >
        <image href="/brand/smartshopca-logo-v2.png" width="2172" height="724" />
      </svg>
      <span className="sr-only">SmartShopCA home</span>
    </Link>
  );
}
