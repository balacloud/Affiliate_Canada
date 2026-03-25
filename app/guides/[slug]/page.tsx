import { notFound } from "next/navigation";
import EmailCapture from "@/components/EmailCapture";
import FAQBlock from "@/components/FAQBlock";
import JsonLd from "@/components/JsonLd";
import type { FAQ } from "@/types";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

// Placeholder guides — will be replaced with MDX content in Phase 1
const guides: Record<
  string,
  { title: string; description: string; content: string; faqs: FAQ[] }
> = {
  "best-wfh-monitors-canada-2026": {
    title: "Best Monitors for Working From Home in Canada 2026",
    description:
      "Our top monitor picks for Canadian remote workers in 2026. All prices in CAD, all available from Canadian retailers.",
    content:
      "Finding the right monitor for your home office in Canada can be overwhelming. We've narrowed it down to the top options available from Canadian retailers, with honest pros and cons for each.",
    faqs: [
      {
        question:
          "What size monitor is best for working from home in Canada?",
        answer:
          "For most Canadian home offices, a 27-inch monitor hits the sweet spot — big enough for productivity without dominating a typical condo desk. If you have a larger dedicated office, consider 32 inches.",
      },
      {
        question: "Should I buy a monitor from Best Buy Canada or Amazon.ca?",
        answer:
          "Both are reliable options. Best Buy Canada often has better return policies for monitors and you can pick up in-store. Amazon.ca sometimes has lower prices but returns can be more complex for large items.",
      },
      {
        question: "How much should I spend on a WFH monitor in Canada?",
        answer:
          "For a solid 27-inch 1440p monitor in Canada, expect to pay $300–$450 CAD. Under $300 you'll sacrifice resolution or panel quality. Over $450 is premium territory (4K, USB-C hub).",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = guides[slug];

  if (!guide) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    dateModified: "2026-03-25",
    author: {
      "@type": "Organization",
      name: "SmartShopCA",
    },
  };

  return (
    <>
      <JsonLd schema={articleSchema} />

      <h1 className="mb-4 text-3xl font-bold text-primary">{guide.title}</h1>

      {/* TL;DR */}
      <section className="mb-8 rounded-lg border-l-4 border-primary bg-slate-50 p-5">
        <h2 className="mb-2 text-lg font-bold text-primary">TL;DR</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-slate-600">
          <li>For Canadian remote workers looking for monitors in 2026</li>
          <li>Budget range: $300–$450 CAD for a solid 27&quot; 1440p panel</li>
          <li>Best Buy Canada and Newegg are the most reliable retailers</li>
        </ul>
      </section>

      <p className="mb-2 text-xs text-slate-400">
        Prices last checked March 2026
      </p>

      <article className="prose prose-slate mb-8 max-w-none">
        <p>{guide.content}</p>
      </article>

      <FAQBlock faqs={guide.faqs} />
      <EmailCapture />
    </>
  );
}
