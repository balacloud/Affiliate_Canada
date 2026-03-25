import Link from "next/link";
import SeasonBanner from "@/components/SeasonBanner";
import EmailCapture from "@/components/EmailCapture";
import JsonLd from "@/components/JsonLd";

const scenarios = [
  {
    title: "Student Setup",
    description:
      "Budget-friendly monitor, webcam, and headset combos for Canadian students heading back to school.",
    href: "/q2-spring-2026",
    emoji: "📚",
  },
  {
    title: "Remote Worker",
    description:
      "Ergonomic chairs, quality monitors, and lighting that make 8-hour days comfortable from home in Canada.",
    href: "/q2-spring-2026",
    emoji: "💻",
  },
  {
    title: "Upgrade My Desk",
    description:
      "Premium picks for Canadians ready to invest in a serious home office upgrade this season.",
    href: "/q2-spring-2026",
    emoji: "🚀",
  },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SmartShopCA",
  url: "https://smartshopca.ca",
  description:
    "Curated seasonal deals and buying guides for Canadians. Honest pros and cons, no choice overload.",
};

export default function HomePage() {
  return (
    <>
      <JsonLd schema={websiteSchema} />

      {/* Season Banner */}
      <SeasonBanner />

      {/* Scenario Cards */}
      <section className="my-10">
        <h2 className="mb-6 text-center text-2xl font-bold text-primary">
          What are you shopping for in Canada?
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {scenarios.map((scenario) => (
            <Link
              key={scenario.title}
              href={scenario.href}
              className="group rounded-lg border border-slate-200 p-5 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="mb-2 text-3xl">{scenario.emoji}</div>
              <h3 className="mb-1 font-bold text-primary group-hover:underline">
                {scenario.title}
              </h3>
              <p className="text-sm text-slate-500">{scenario.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Email Capture — Golden Rule 13 */}
      <EmailCapture />
    </>
  );
}
