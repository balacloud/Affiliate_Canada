import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteDescription, siteName, siteUrl } from '@/config/site';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Canadian buying guides with the evidence shown`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    siteName,
    locale: 'en_CA',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#FBF8F1',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-ink px-3.5 py-2 text-ivory focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
