import type { Metadata } from 'next';
import { bodyMoisturizers } from '@/content/skincare';
import { ComparisonView } from '@/components/skincare/ComparisonView';

export const metadata: Metadata = {
  title: bodyMoisturizers.metaTitle,
  description: bodyMoisturizers.metaDescription,
  alternates: { canonical: bodyMoisturizers.path },
  robots: { index: bodyMoisturizers.readiness === 'published', follow: true },
};

export default function BodyMoisturizersPage() {
  return <ComparisonView comparison={bodyMoisturizers} />;
}
