import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartShopCA — Canadian Deals & Buying Guides",
  description:
    "Curated seasonal deals and buying guides for Canadians. Honest pros and cons, no choice overload. All prices in CAD.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-primary antialiased">
        {/* Header */}
        <header className="border-b border-slate-200">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-xl font-bold text-primary">
              SmartShop<span className="text-emerald-500">CA</span>
            </Link>
            <nav className="flex gap-5 text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>

        {/* Footer — Golden Rule 7: Affiliate disclosure on every page */}
        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-8">
            <p className="mb-4 text-xs text-slate-500">
              <strong>Affiliate Disclosure:</strong> SmartShopCA.ca contains
              affiliate links. When you click and make a purchase, we may earn a
              commission at no extra cost to you. This helps us keep the site
              running and continue providing honest recommendations for
              Canadians. All prices are in CAD unless otherwise noted.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400">
              <Link href="/about" className="hover:text-slate-600">
                About
              </Link>
              <span>&copy; {new Date().getFullYear()} SmartShopCA.ca</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
