import type { Metadata } from 'next';
import { faceMoisturizers } from '@/content/skincare';
import { ComparisonView } from '@/components/skincare/ComparisonView';

export const metadata: Metadata = {
  title: faceMoisturizers.metaTitle,
  description: faceMoisturizers.metaDescription,
  alternates: { canonical: faceMoisturizers.path },
  robots: { index: faceMoisturizers.readiness === 'published', follow: true },
};

export default function FaceMoisturizersPage() {
  return <ComparisonView comparison={faceMoisturizers} />;
}
