import { notFound } from "next/navigation";
import { campaigns, getCampaignKeyBySlug } from "@/config/campaigns";
import { getAllCollections } from "@/lib/getCollections";
import { getProductsByIds } from "@/lib/getProducts";
import CollectionGrid from "@/components/CollectionGrid";
import ComparisonTable from "@/components/ComparisonTable";
import FAQBlock from "@/components/FAQBlock";
import EmailCapture from "@/components/EmailCapture";
import JsonLd from "@/components/JsonLd";
import type { FAQ } from "@/types";

interface SeasonPageProps {
  params: Promise<{ season: string }>;
}

// Generate static paths for all campaigns
export function generateStaticParams() {
  return Object.values(campaigns).map((campaign) => ({
    season: campaign.slug,
  }));
}

export default async function SeasonPage({ params }: SeasonPageProps) {
  const { season } = await params;
  const campaignKey = getCampaignKeyBySlug(season);

  if (!campaignKey) {
    notFound();
  }

  const campaign = campaigns[campaignKey];

  // Get collections and products for this season
  const collections = getAllCollections().filter(
    (c) => c.season === campaignKey
  );
  const productIds = collections.flatMap((c) => c.productIds);
  const products = getProductsByIds(productIds);

  // Top 3 for comparison table
  const topProducts = products.slice(0, 3);

  const faqs: FAQ[] = [
    {
      question: `What are the best home office deals in Canada for ${campaign.label}?`,
      answer: `We've curated ${products.length} top picks for Canadian remote workers this season, ranging from budget-friendly monitors to premium ergonomic chairs. All prices are in CAD and products ship within Canada.`,
    },
    {
      question: "Are these prices in Canadian dollars?",
      answer:
        "Yes — every price on SmartShopCA is in CAD. We only feature products available from Canadian retailers like Best Buy Canada, Newegg Canada, and Amazon.ca.",
    },
    {
      question: "How do you pick which products to recommend?",
      answer:
        "We research dozens of options and narrow it down to 3–7 picks per category. Our criteria: value for money in CAD, availability in Canada, user reviews, and whether the product genuinely solves a specific problem for Canadian remote workers or students.",
    },
    {
      question: "Do you earn money from these recommendations?",
      answer:
        "Yes — we use affiliate links, which means we may earn a small commission if you purchase through our links. This costs you nothing extra. We clearly label all affiliate links and never let commissions influence our recommendations.",
    },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: campaign.heroHeadline,
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        offers: {
          "@type": "Offer",
          price: p.salePrice || p.normalPrice,
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <>
      <JsonLd schema={itemListSchema} />

      {/* Hero */}
      <section
        className="mb-8 rounded-xl px-6 py-10 text-center text-white"
        style={{ backgroundColor: campaign.color }}
      >
        <p className="mb-2 text-sm font-medium uppercase tracking-widest opacity-80">
          {campaign.label}
        </p>
        <h1 className="text-3xl font-bold md:text-4xl">
          {campaign.heroHeadline}
        </h1>
      </section>

      {/* TL;DR — Golden Rule 6 */}
      <section className="mb-8 rounded-lg border-l-4 border-primary bg-slate-50 p-5">
        <h2 className="mb-2 text-lg font-bold text-primary">TL;DR</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-slate-600">
          <li>For Canadian remote workers and students shopping this season</li>
          <li>
            {products.length} curated picks from $120–$500 CAD
          </li>
          <li>All from Canadian retailers — Best Buy, Newegg, Amazon.ca</li>
          {topProducts[0] && (
            <li>
              Top pick: {topProducts[0].name} at $
              {topProducts[0].salePrice || topProducts[0].normalPrice} CAD
            </li>
          )}
        </ul>
      </section>

      {/* Last updated — Checklist item 13 */}
      <p className="mb-6 text-xs text-slate-400">
        Prices last checked March 2026
      </p>

      {/* Product grid */}
      {products.length > 0 ? (
        <CollectionGrid
          products={products}
          campaignId={campaignKey}
          pageSlug={season}
        />
      ) : (
        <p className="my-10 text-center text-slate-400">
          Products coming soon for this season.
        </p>
      )}

      {/* Comparison table */}
      {topProducts.length >= 2 && <ComparisonTable products={topProducts} />}

      {/* FAQ — Golden Rule 12 */}
      <FAQBlock faqs={faqs} />

      {/* Email Capture — Golden Rule 13 */}
      <EmailCapture campaignOverride={campaign.label} />
    </>
  );
}
