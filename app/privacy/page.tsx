import type { Metadata } from 'next';
import { integrations } from '@/config/site';
import { Breadcrumbs } from '@/components/editorial/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'What information SmartShopCA collects today, and what it does not.',
  alternates: { canonical: '/privacy' },
};

/**
 * Describes only the data flows that exist in this codebase. Update this page
 * in the same change that adds any new collection (email provider, analytics,
 * contact form).
 */
export default function PrivacyPage() {
  return (
    <div className="container-page pb-20 pt-10">
      <div className="flex max-w-[48rem] flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Breadcrumbs className="text-ink-muted" items={[{ label: 'Home', href: '/' }, { label: 'Privacy' }]} />
          <h1 className="heading-display text-[34px] sm:text-[46px]">Privacy</h1>
          <p className="text-[19px] text-ink-body">
            SmartShopCA is an editorial buying guide for Canadian readers. This page explains what information the site
            handles today.
          </p>
        </div>

        <section aria-labelledby="email" className="flex flex-col gap-3">
          <h2 id="email" className="heading-display text-[26px]">
            Email sign-up
          </h2>
          {integrations.email.configured ? (
            <p className="text-ink-body">
              If you subscribe, we keep your email address and the topic you chose so we can send the updates you asked
              for. You can unsubscribe from any email.
            </p>
          ) : (
            <p className="text-ink-body">
              Email updates are not switched on yet. The sign-up form is shown in a disabled state, and nothing typed
              into it is sent or stored.
            </p>
          )}
        </section>

        <section aria-labelledby="links" className="flex flex-col gap-3">
          <h2 id="links" className="heading-display text-[26px]">
            Links to merchants
          </h2>
          <p className="text-ink-body">
            When you select a merchant link, the site may record which product and merchant link was selected and when.
            This record does not include your name or email address. Evidence and source links are not recorded. Once
            you leave SmartShopCA, the merchant&rsquo;s own privacy policy applies.
          </p>
        </section>

        <section aria-labelledby="other" className="flex flex-col gap-3">
          <h2 id="other" className="heading-display text-[26px]">
            Other information
          </h2>
          <p className="text-ink-body">
            SmartShopCA does not use advertising trackers, does not sell personal information, and does not run a
            contact form. Like most websites, the service that hosts the site may keep standard technical logs, such as
            IP addresses and request times, for security and reliability.
          </p>
        </section>

        <section aria-labelledby="contact" className="flex flex-col gap-3">
          <h2 id="contact" className="heading-display text-[26px]">
            Questions
          </h2>
          {integrations.contact.confirmed ? (
            <p className="text-ink-body">
              Privacy questions: <a href={`mailto:${integrations.contact.address}`}>{integrations.contact.address}</a>
            </p>
          ) : (
            <p className="text-ink-body">
              A privacy contact address will be listed here once it is set up and monitored.
            </p>
          )}
          <p className="text-sm text-ink-muted">Last updated October 14, 2026.</p>
        </section>
      </div>
    </div>
  );
}
