import type { Metadata } from 'next';
import Link from 'next/link';
import { integrations, siteUrl } from '@/config/site';
import { InfoPageIntro } from '@/components/editorial/InfoPageIntro';
import { StructuredData } from '@/components/editorial/StructuredData';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact availability, product corrections and partnership information for SmartShopCA.',
  alternates: { canonical: '/contact' },
};

const topics = [
  { title: 'Product information or corrections', body: 'Include the page URL, exact product and variant, the detail that needs checking, and a supporting source. Please avoid sending personal health information.' },
  { title: 'Brands, retailers and suppliers', body: 'Our partnership page explains the product information and Canadian purchase terms we will need to assess a potential collaboration.' },
  { title: 'Privacy questions', body: 'Our privacy page describes the information this website currently handles. You can use the same email address for privacy questions.' },
];

export default function ContactPage() {
  return (
    <>
      <StructuredData data={{ '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact SmartShopCA', url: `${siteUrl}/contact` }} />
      <InfoPageIntro label="Contact" title="Good information starts with a conversation." description={integrations.contact.confirmed ? 'For product corrections, privacy questions and potential partnerships. Contact our team using the email below.' : 'For product corrections, privacy questions and potential partnerships. Our public contact channel is still being prepared.'} />
      <div className="container-page py-12 sm:py-16">
        <section aria-labelledby="availability" className="mb-10 max-w-[48rem] rounded-2xl border border-sage-line bg-sage-tint p-6 sm:p-8">
          <h2 id="availability" className="heading-display mb-3 text-[28px]">{integrations.contact.confirmed ? 'Email SmartShopCA' : 'Contact is not available yet'}</h2>
          {integrations.contact.confirmed ? <p><a className="break-words font-semibold text-sage-dark" href={`mailto:${integrations.contact.address}`}>{integrations.contact.address}</a></p> : <p className="text-ink-body">We will publish our business email address after confirming that it can receive messages and replies. There is no contact form or message submission on this page.</p>}
        </section>
        <div className="grid gap-6 md:grid-cols-3">{topics.map((topic) => <section key={topic.title} className="rounded-2xl border border-line bg-paper p-6"><h2 className="heading-display mb-3 text-[25px]">{topic.title}</h2><p className="text-[16px] text-ink-body">{topic.body}</p></section>)}</div>
        <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2">{[{ href: '/partnerships', label: 'Partnership information' }, { href: '/privacy', label: 'Privacy' }, { href: '/about#team', label: 'Meet the team' }].map((link) => <Link key={link.href} href={link.href} className="flex min-h-[44px] items-center font-semibold text-sage-dark">{link.label}</Link>)}</div>
      </div>
    </>
  );
}
