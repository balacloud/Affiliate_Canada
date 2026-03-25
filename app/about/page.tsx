import JsonLd from "@/components/JsonLd";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About SmartShopCA",
  description:
    "SmartShopCA.ca is a Canadian seasonal deals and buying guide site run by a small Canadian team.",
};

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={aboutSchema} />

      <h1 className="mb-6 text-3xl font-bold text-primary">
        About SmartShopCA
      </h1>

      <div className="space-y-6 text-slate-600">
        <section>
          <h2 className="mb-2 text-xl font-bold text-primary">Who We Are</h2>
          <p>
            SmartShopCA is run by a small Canadian team passionate about helping
            fellow Canadians make confident purchase decisions. We focus on the
            home office and remote work niche because we live it ourselves.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-primary">
            How We Pick Products
          </h2>
          <p>
            We research dozens of options and narrow them down to 3–7 picks per
            category. Our selection criteria:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Value for money in Canadian dollars</li>
            <li>Available from Canadian retailers (not US-only listings)</li>
            <li>Real user reviews and testing data</li>
            <li>Solves a specific problem for Canadian remote workers</li>
          </ul>
          <p className="mt-2">
            We never accept paid placements. Products are selected on editorial
            merit only.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-primary">
            Affiliate Disclosure
          </h2>
          <p>
            SmartShopCA.ca participates in affiliate programs with Canadian
            retailers including Best Buy Canada, Newegg Canada, Amazon.ca, and
            others. When you click on an affiliate link and make a purchase, we
            may earn a commission at no extra cost to you.
          </p>
          <p className="mt-2">
            This commission helps us keep the site running and continue
            providing honest, curated recommendations. We clearly label all
            affiliate links on every page. Our recommendations are never
            influenced by commission rates — we recommend what we genuinely
            believe is the best option for Canadians.
          </p>
        </section>

        <p className="text-xs text-slate-400">Last updated: March 2026</p>
      </div>
    </>
  );
}
