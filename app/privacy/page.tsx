import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy | SmartShopCA",
  description:
    "Privacy Policy for SmartShopCA.ca, including how we collect, use, and protect personal information for Canadian visitors.",
};

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  description:
    "Privacy Policy for SmartShopCA.ca, including email signup, analytics, and affiliate-link tracking disclosures.",
  url: "https://smartshopca.ca/privacy",
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd schema={privacySchema} />

      <h1 className="mb-6 text-3xl font-bold text-primary">Privacy Policy</h1>

      <div className="space-y-8 text-slate-600">
        <section className="rounded-lg border-l-4 border-primary bg-slate-50 p-5">
          <h2 className="mb-2 text-lg font-bold text-primary">Summary</h2>
          <ul className="list-inside list-disc space-y-1 text-sm">
            <li>
              We collect limited information needed to run a content and email
              signup website for Canadians.
            </li>
            <li>
              We may collect analytics data, affiliate click data, and email
              signup details you choose to submit.
            </li>
            <li>
              We do not sell your personal information to third parties.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-primary">
            Who We Are
          </h2>
          <p>
            SmartShopCA.ca is a Canadian seasonal deals and buying guide site
            focused on helping Canadians make better purchase decisions for home
            office and remote work products.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-primary">
            Information We Collect
          </h2>
          <p>We may collect the following categories of information:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              Contact information you submit voluntarily, such as your email
              address when signing up for updates or a newsletter
            </li>
            <li>
              Basic usage and analytics information, such as page visits,
              device/browser type, and referral sources
            </li>
            <li>
              Affiliate click-tracking information, such as which outbound link
              was clicked and from which page
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-primary">
            How We Use Information
          </h2>
          <p>We use collected information to:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Operate and improve the website</li>
            <li>Measure which guides, products, and campaigns perform best</li>
            <li>
              Send email updates or promotions if you choose to subscribe
            </li>
            <li>Maintain basic site security and prevent abuse</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-primary">
            Email Signup
          </h2>
          <p>
            If you subscribe to our email list, your information may be stored
            and processed by our email service provider, Kit (formerly
            ConvertKit), once that integration is live. You can unsubscribe at
            any time using the unsubscribe link included in marketing emails.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-primary">
            Analytics and Tracking
          </h2>
          <p>
            We may use analytics tools and internal click tracking to understand
            how visitors use SmartShopCA.ca. This includes measuring visits,
            popular pages, and clicks on affiliate links so we can improve the
            usefulness of the site.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-primary">
            Affiliate Links
          </h2>
          <p>
            SmartShopCA.ca contains affiliate links. When you click an outbound
            merchant link, we may log that click for performance tracking. If
            you make a purchase through an affiliate link, we may earn a
            commission at no extra cost to you.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-primary">
            Data Sharing
          </h2>
          <p>
            We do not sell your personal information. We may share limited data
            with service providers that help us operate the site, such as
            hosting, analytics, email delivery, or affiliate-network reporting.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-primary">
            Your Choices
          </h2>
          <ul className="list-inside list-disc space-y-1">
            <li>You can choose not to submit your email address.</li>
            <li>You can unsubscribe from marketing emails at any time.</li>
            <li>
              You can contact us to request updates or deletion of information
              you previously submitted, subject to legal or operational
              requirements.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-primary">Contact</h2>
          <p>
            For privacy questions, contact{" "}
            <a
              href="mailto:hello@smartshopca.ca"
              className="font-medium text-primary underline underline-offset-2"
            >
              hello@smartshopca.ca
            </a>
            .
          </p>
        </section>

        <p className="text-xs text-slate-400">Last updated: May 11, 2026</p>
      </div>
    </>
  );
}
