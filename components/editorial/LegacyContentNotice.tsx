import Link from 'next/link';

/** Preserve old URLs without presenting unverified seed commerce as current. */
export function LegacyContentNotice({ title }: { title: string }) {
  return (
    <div className="container-page max-w-3xl pb-20 pt-12">
      <p className="kicker mb-4 text-ink-muted">Archived home-office scaffold</p>
      <h1 className="heading-display mb-6 text-3xl sm:text-4xl">{title}</h1>
      <p className="mb-4 text-ink-body">
        This URL belongs to SmartShopCA&rsquo;s earlier home-office prototype. Its product records,
        prices and merchant links have not been verified for current use, so buying recommendations
        are unavailable here.
      </p>
      <p className="mb-8 text-ink-body">
        Seasonal Canadian favourites remains a separate editorial pillar. Its new collections are
        being prepared alongside Canadian-made personal care and household content.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link href="/seasonal" className="btn border border-rust text-rust-dark">Seasonal favourites</Link>
        <Link href="/care" className="btn bg-sage text-white">Personal care &amp; household</Link>
      </div>
    </div>
  );
}
