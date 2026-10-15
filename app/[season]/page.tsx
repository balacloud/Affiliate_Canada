import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { campaigns, getCampaignKeyBySlug } from '@/config/campaigns';
import { LegacyContentNotice } from '@/components/editorial/LegacyContentNotice';

export const metadata: Metadata = {
  title: 'Archived home-office scaffold',
  robots: { index: false, follow: true },
};

export function generateStaticParams() {
  return Object.values(campaigns).map((campaign) => ({ season: campaign.slug }));
}

export default function SeasonPage({ params }: { params: { season: string } }) {
  const key = getCampaignKeyBySlug(params.season);
  if (!key) notFound();
  return <LegacyContentNotice title={campaigns[key].label} />;
}
