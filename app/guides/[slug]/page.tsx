import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LegacyContentNotice } from '@/components/editorial/LegacyContentNotice';

const archivedGuides: Record<string, string> = {
  'best-wfh-monitors-canada-2026': 'Home-office monitor guide — archived prototype',
};

export const metadata: Metadata = {
  title: 'Archived home-office guide',
  robots: { index: false, follow: true },
};

export function generateStaticParams() {
  return Object.keys(archivedGuides).map((slug) => ({ slug }));
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = archivedGuides[slug];
  if (!title) notFound();
  return <LegacyContentNotice title={title} />;
}
