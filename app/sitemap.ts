import type { MetadataRoute } from 'next';
import { siteUrl } from '@/config/site';

/** Draft comparisons and archived campaigns remain noindex and are excluded. */
export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/about', '/methodology', '/privacy', '/disclosure', '/contact', '/partnerships', '/seasonal', '/care', '/care/skincare']
    .map((path) => ({ url: `${siteUrl}${path === '/' ? '' : path}` }));
}
