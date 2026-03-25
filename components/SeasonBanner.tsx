import Link from "next/link";
import { ACTIVE_CAMPAIGN, campaigns } from "@/config/campaigns";

export default function SeasonBanner() {
  const campaign = campaigns[ACTIVE_CAMPAIGN];

  return (
    <section
      className="rounded-xl px-6 py-12 text-center text-white md:py-16"
      style={{ backgroundColor: campaign.color }}
    >
      <p className="mb-2 text-sm font-medium uppercase tracking-widest opacity-80">
        {campaign.label}
      </p>
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">
        {campaign.heroHeadline}
      </h1>
      <p className="mx-auto mb-6 max-w-xl text-lg opacity-90">
        Curated picks for Canadians. No choice overload — just the 3–7 best
        products for your setup, with honest pros and cons.
      </p>
      <Link
        href={`/${campaign.slug}`}
        className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-transform hover:scale-105"
      >
        See {campaign.label} Picks &rarr;
      </Link>
    </section>
  );
}
