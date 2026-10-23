import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import { siteSupportingMessage, siteTagline } from '@/config/site';

export const alt = 'SmartShopCA — Canadian products. Clearer choices.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), 'public/brand/smartshopca-logo-v2.png'));
  const src = `data:image/png;base64,${logo.toString('base64')}`;
  return new ImageResponse(
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', background: '#FAF7F0', color: '#203C32', padding: '60px 80px', borderTop: '12px solid #A24620' }}>
      <div style={{ display: 'flex', position: 'relative', width: 900, height: 160, overflow: 'hidden' }}>
        {/* The existing bitmap is framed, not regenerated or presented as vector artwork. */}
        <img src={src} alt="SmartShopCA" width={1009} height={336} style={{ position: 'absolute', left: -52, top: -92 }} />
      </div>
      <div style={{ display: 'flex', marginTop: 32, fontSize: 50, fontWeight: 700, letterSpacing: '-1px' }}>{siteTagline}</div>
      <div style={{ display: 'flex', marginTop: 22, maxWidth: 940, fontSize: 28, lineHeight: 1.4 }}>{siteSupportingMessage}</div>
      <div style={{ display: 'flex', marginTop: 'auto', paddingTop: 24, borderTop: '1px solid #D8D3C9', fontSize: 21 }}>Seasonal favourites · Personal care &amp; household</div>
    </div>,
    size,
  );
}
