# Technical Specification — SmartShopCA.ca

---

## Folder Structure

```
smartshopca/
├── app/
│   ├── page.tsx                    # Homepage → active campaign
│   ├── [season]/page.tsx           # e.g. /q2-spring-2026
│   ├── guides/[slug]/page.tsx      # Evergreen buying guides
│   ├── deals/[slug]/page.tsx       # Individual product pages
│   ├── about/page.tsx              # Trust/about page
│   └── api/
│       └── track-click/route.ts    # Outbound click logger
├── components/
│   ├── DealCard.tsx
│   ├── CollectionGrid.tsx
│   ├── SeasonBanner.tsx
│   ├── ComparisonTable.tsx
│   ├── FAQBlock.tsx
│   ├── EmailCapture.tsx
│   ├── OutboundLink.tsx            # Tracks + opens affiliate link
│   └── JsonLd.tsx                  # Renders JSON-LD schema
├── content/
│   ├── products/                   # One MDX file per product
│   ├── collections/                # One MDX per seasonal campaign
│   └── guides/                     # One MDX per evergreen guide
├── config/
│   └── campaigns.ts                # Active campaign config
├── lib/
│   ├── getProducts.ts
│   ├── getCollections.ts
│   └── trackClick.ts
└── types/
    └── index.ts                    # All TypeScript interfaces
```

---

## Data Models

```typescript
// types/index.ts

export interface Merchant {
  id: string
  name: string
  affiliateNetwork: string        // "impact" | "direct" | "maxbounty" | "amazon"
  affiliateBaseUrl: string
  commissionNote: string          // e.g. "~4% on electronics"
  tags: string[]
}

export interface Product {
  id: string
  merchantId: string
  name: string
  category: string                // "monitor" | "chair" | "webcam" | "desk" | "lighting" | "headset"
  normalPrice: number
  salePrice?: number
  currency: "CAD"
  affiliateLink: string
  images: string[]
  pros: string[]                  // exactly 3-5 items
  cons: string[]                  // exactly 2-3 items
  chooseIf: string                // "Choose this if you have a small desk and need..."
  avoidIf: string                 // "Avoid this if you need..."
  specs: Record<string, string>   // e.g. { "Screen Size": "27 inch", "Resolution": "1440p" }
  region: "canada"
  provinces?: string[]            // if availability is province-specific
  startDate?: string
  endDate?: string
  tags: string[]                  // "budget" | "premium" | "best-overall" | "student"
  slug: string
}

export interface Collection {
  id: string
  slug: string
  title: string
  season: "Q1_2026_WINTER" | "Q2_2026_SPRING" | "Q3_2026_BTS" | "Q4_2026_BOXING"
  startDate: string
  endDate: string
  description: string
  heroHeadline: string            // e.g. "Set up your WFH space this spring, Canada"
  productIds: string[]
  tags: string[]
}

export interface ContentPage {
  slug: string
  title: string
  description: string             // meta description
  collectionIds: string[]
  schemaType: "Article" | "ProductCollection" | "FAQPage"
  language: "en" | "fr"
  lastUpdated: string
}

export interface ClickEvent {
  timestamp: string
  sessionId: string
  pageSlug: string
  productId: string
  merchantId: string
  campaignId: string
  affiliateLink: string
}
```

---

## Campaign Config

```typescript
// config/campaigns.ts

export const ACTIVE_CAMPAIGN = "Q2_2026_SPRING"

export const campaigns = {
  Q1_2026_WINTER: {
    label: "New Year WFH Reset 2026",
    slug: "q1-winter-2026",
    startDate: "2026-01-01",
    endDate: "2026-03-31",
    heroHeadline: "Start 2026 with a better home office setup",
    color: "#3B82F6"
  },
  Q2_2026_SPRING: {
    label: "Spring Setup 2026",
    slug: "q2-spring-2026",
    startDate: "2026-04-01",
    endDate: "2026-06-30",
    heroHeadline: "Spring refresh your Canadian home office",
    color: "#10B981"
  },
  Q3_2026_BTS: {
    label: "Back to School / Work 2026",
    slug: "q3-back-to-school-2026",
    startDate: "2026-07-01",
    endDate: "2026-09-30",
    heroHeadline: "Best back-to-school setups in Canada 2026",
    color: "#F59E0B"
  },
  Q4_2026_BOXING: {
    label: "Boxing Day & Black Friday 2026",
    slug: "q4-boxing-day-2026",
    startDate: "2026-10-01",
    endDate: "2026-12-31",
    heroHeadline: "Best Boxing Day tech deals in Canada 2026",
    color: "#EF4444"
  }
}
```

---

## Components

### `<DealCard />`
- Product image (left on desktop, top on mobile)
- Name + merchant badge
- CAD price: strikethrough normal price if sale price exists
- Top 3 specs as small pills
- "Choose this if…" sentence in italic
- Pros (green checkmarks) / Cons (red x) — collapsed by default, expand on click
- CTA button: "View at [Merchant] →" — uses `<OutboundLink />`
- Editorial badge: "Best Overall" | "Best Budget" | "Best Premium" | "Staff Pick"

### `<OutboundLink />`
- Wraps every affiliate CTA
- On click: fires POST to `/api/track-click` with `{ productId, merchantId, campaignId, pageSlug }`
- Then opens affiliate URL in new tab
- Label: "View at Best Buy Canada (affiliate link)" — transparency is non-negotiable

### `<EmailCapture />`
- Single email input field
- Headline: "Get our [season] Canadian deals guide free"
- Sub-copy: "Join [X] Canadians. No spam. Unsubscribe anytime."
- On submit: POST to ConvertKit API with tag for current campaign
- Appears: bottom of every page, and as exit-intent on product pages (Phase 2)

### `<FAQBlock />`
- Renders array of `{question: string, answer: string}`
- Accordion UI (one open at a time)
- Outputs `FAQPage` JSON-LD automatically

### `<JsonLd />`
- Generic component: `<JsonLd schema={object} />`
- Renders `<script type="application/ld+json">` in page `<head>`
- Used for: Product, ItemList, FAQPage, Article schemas

### `<SeasonBanner />`
- Reads `ACTIVE_CAMPAIGN` from config
- Full-width hero with headline, sub-copy, and CTA to season landing page
- Color-coded per campaign (from campaigns config)

### `<ComparisonTable />`
- Side-by-side comparison of top 3 picks
- Key specs, prices, pros/cons summary

### `<CollectionGrid />`
- Renders array of DealCards in responsive grid
- Max 7 cards per grid

---

## Pages

### Homepage `/`
- `<SeasonBanner />` with active campaign
- 3 scenario cards: "Student Setup", "Remote Worker", "Upgrade My Desk"
- Each scenario links to filtered collection view
- `<EmailCapture />` mid-page
- Footer: About, Affiliate Disclosure (MANDATORY), Privacy Policy

### Season Page `/[season]`
- H1: exact campaign heroHeadline
- TL;DR block: 3–4 bullets (who it's for, price range, top picks)
- `<CollectionGrid />` with 5–7 DealCards
- `<ComparisonTable />` for top 3 picks side-by-side
- `<FAQBlock />` with 4–5 seasonal questions
- `<EmailCapture />`
- JSON-LD: ItemList + Article

### Guide Page `/guides/[slug]`
- Evergreen, not dated
- H1 must contain "Canada" and year
- Same structure as season page but not tied to a campaign
- JSON-LD: Article + ItemList

### About Page `/about`
- Who runs this site ("a small Canadian team")
- How products are selected (editorial criteria, not paid placement)
- Affiliate disclosure statement (legally required in Canada)
- Last updated date

---

## API Routes

### POST `/api/track-click`

```typescript
// Request body
{ productId: string, merchantId: string, campaignId: string, pageSlug: string, affiliateLink: string }

// Response
{ success: true }

// Storage: Vercel Edge Logs (free) OR JSON append to /data/clicks.json
// NEVER redirect here — client handles window.open
```

---

## Design Rules (Tailwind)

- **Font:** Inter (Google Fonts)
- **Primary colour:** `#0F172A` (slate-900)
- **Accent:** Campaign colour from config (green for spring, amber for BTS, red for Boxing Day)
- **Max content width:** `max-w-4xl mx-auto`
- **Card style:** White background, subtle shadow, rounded-lg, clear hover state
- **Mobile first:** Every component designed for phone first
- **No dark mode** for Phase 0
