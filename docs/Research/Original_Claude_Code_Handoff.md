<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# good, lets do it with claude code i feel its way better :) , give me all start up instructions, vision, roadmap, design sepcs alll of those , let me feed all those in to Claude code and for steps what i have to do add fillers

No problem — here is the complete Claude Code handoff document. Copy everything below and paste it directly into Claude Code as your first prompt.

***

# 📋 CLAUDE CODE MASTER PROMPT — SmartShopCA.ca

> Paste this entire document into Claude Code to begin scaffolding.

***

## 🎯 Project Vision

You are building **SmartShopCA.ca** — a Canada-specific, quarterly seasonal deals and buying-guide website for Canadian consumers. The core philosophy is **decision helper, not deal spam**: show 3–7 deeply curated picks per scenario, reduce choice overload, and help Canadians make confident purchases using opinionated, structured, AI-search-friendly content.

This is NOT a coupon aggregator. It is a seasonal product recommendation engine monetized via affiliate links.

**Primary goal:** \$2,000 CAD/month in affiliate revenue within 9–12 months.

***

## 🏗️ Tech Stack

- **Framework:** Next.js 14+ (App Router, TypeScript, SSG/ISR)
- **Styling:** Tailwind CSS
- **Content:** MDX files in `/content` folder (products, guides, FAQs as markdown with frontmatter)
- **Deployment:** Vercel (free tier)
- **Email:** ConvertKit (via API for form submissions)
- **Analytics:** Vercel Analytics + custom outbound click logger
- **Schema markup:** JSON-LD components (Product, ItemList, FAQPage)
- **Phase 2 addition (NOT NOW):** Supabase pgvector + Claude API for RAG chat agent

***

## 📁 Folder Structure

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


***

## 🗃️ Data Models (TypeScript Interfaces)

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


***

## ⚙️ Campaign Config

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


***

## 🧩 Components — Exact Specs

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

```
- Renders `<script type="application/ld+json">` in page `<head>`
```

- Used for: Product, ItemList, FAQPage, Article schemas


### `<SeasonBanner />`

- Reads `ACTIVE_CAMPAIGN` from config
- Full-width hero with headline, sub-copy, and CTA to season landing page
- Color-coded per campaign (from campaigns config)

***

## 📄 Pages — Exact Requirements

### Homepage `/`

- `<SeasonBanner />` with active campaign
- 3 "scenario cards": "Student Setup", "Remote Worker", "Upgrade My Desk"
- Each scenario links to filtered collection view
- `<EmailCapture />` mid-page
- Footer: About, Affiliate Disclosure (MANDATORY for legal compliance), Privacy Policy


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

- Who runs this site (you don't need to be personal — "a small Canadian team")
- How products are selected (editorial criteria, not paid placement)
- Affiliate disclosure statement (legally required in Canada)
- Last updated date

***

## 🔌 API Route: Click Tracker

```typescript
// app/api/track-click/route.ts
// POST body: { productId, merchantId, campaignId, pageSlug, affiliateLink }
// Log to: Vercel Edge Logs (free) OR a simple JSON append to /data/clicks.json
// Return: { success: true }
// NEVER redirect here — client handles the window.open
```


***

## 🎨 Design Rules (Tailwind)

- **Font:** Inter (Google Fonts)
- **Primary colour:** `#0F172A` (slate-900) — Canadian trust, not flashy
- **Accent:** Campaign colour from config (green for spring, amber for BTS, red for Boxing Day)
- **Max content width:** `max-w-4xl mx-auto` — not wide, focused
- **Card style:** White background, subtle shadow, rounded-lg, clear hover state
- **Mobile first:** Every component designed for phone first
- **No dark mode** for Phase 0 — keep it simple

***

## 🛡️ Hard Rules (Never Break These)

1. **Affiliate disclosure on every page** — Canadian law requires this
2. **OutboundLink wraps EVERY affiliate CTA** — no raw affiliate URLs in JSX
3. **Max 7 DealCards per collection page** — behavioral design rule
4. **JSON-LD on every page** — non-negotiable for AI search visibility
5. **EmailCapture on every page** — the list is the real business
6. **Amazon.ca links are secondary only** — never the primary CTA
7. **All prices in CAD with explicit "CAD" label**
8. **`chooseIf` and `avoidIf` fields required on every product** — core to decision-helper UX

***

## 📦 Seed Data (Build These First)

Create these 5 products in `/content/products/` as MDX files to test the system:

1. `lg-27gp850b-monitor.mdx` — 27" gaming/WFH monitor, ~\$350 CAD, Best Buy Canada
2. `secretlab-titan-chair.mdx` — ergonomic chair, ~\$500 CAD, Secretlab Canada
3. `logitech-brio-4k-webcam.mdx` — 4K webcam, ~\$200 CAD, Newegg Canada
4. `elgato-key-light-mini.mdx` — desk lamp/ring light, ~\$120 CAD, Amazon.ca
5. `jabra-evolve2-55-headset.mdx` — wireless headset, ~\$400 CAD, Best Buy Canada

Create one collection `/content/collections/q2-spring-2026.mdx` using all 5 products.

***

## ✅ Phase 0 Build Checklist (Week 1–2)

### Your tasks (filler steps — what YOU do, not Claude Code):

- [x] **Register domain** — `smartshopca.ca` done ✅ (C\$15.99/year)
- [ ] **Create Vercel account** → connect to GitHub repo → deploy empty Next.js app to `smartshopca.ca`
- [ ] **Apply for affiliate programs:**
    - Best Buy Canada: bestbuy.ca/affiliate
    - Newegg Canada: newegg.ca/affiliate
    - Amazon.ca Associates: associates.amazon.ca
    - MaxBounty: maxbounty.com (requires short phone interview — apply TODAY, takes 3–5 days)
- [ ] **Sign up for Kit (ConvertKit):** kit.com — free up to 10,000 subscribers
    - Create one form: "SmartShopCA Spring 2026 Deals"
    - Get your API key and Form ID
    - Create a 3-email welcome sequence (Claude Code can write the copy)
- [ ] **Give Claude Code your Kit API key and Form ID** to wire up `<EmailCapture />`
- [ ] **Set up Google Search Console** for smartshopca.ca (verify via Vercel DNS)
- [ ] **Set up a simple spreadsheet** to track: affiliate program applied, approved date, affiliate link format


### Claude Code tasks (what you prompt it to build):

- [ ] Scaffold full Next.js project with folder structure above
- [ ] Build all TypeScript interfaces
- [ ] Build all components (DealCard, CollectionGrid, SeasonBanner, EmailCapture, FAQBlock, OutboundLink, JsonLd, ComparisonTable)
- [ ] Wire up campaign config
- [ ] Build all page templates (home, season, guide, about)
- [ ] Build click tracker API route
- [ ] Create 5 seed products + 1 seed collection
- [ ] Deploy to Vercel

***

## 📅 Roadmap Summary

| Phase | Timeline | Goal | Your KPI |
| :-- | :-- | :-- | :-- |
| **Phase 0** | Now → Week 2 | Site live, affiliate accounts applied | Domain + deploy live |
| **Phase 1** | Weeks 3–6 | Q2 Spring campaign + FB ads + email | 200 email subscribers |
| **Phase 2** | Weeks 7–14 | Q3 BTS + RAG chat agent + financial affiliate | First \$\$ earned |
| **Phase 3** | Weeks 15–22 | Q4 Boxing Day super season | \$500–\$1,000/month |
| **Phase 4** | Q1 2027 | Optimize, French layer, display ads | \$2,000/month |


***

## 🗒️ Notion Pre-Publish Checklist (Paste as Notion Template)

**Page name:** `[Page Title] — Pre-Publish Check`

- [ ] Title contains "Canada" + year + specific use case
- [ ] TL;DR block at top (2–4 bullets: who it's for, top pick, price range)
- [ ] Maximum 7 products on page
- [ ] Every product: name, CAD price, 3 pros, 2 cons, `chooseIf`, `avoidIf`
- [ ] JSON-LD schema added (Product + ItemList + FAQPage)
- [ ] "In Canada" / CAD explicit in intro paragraph
- [ ] Seasonal tag visible (e.g., "Q2 2026 Spring Picks")
- [ ] FAQ block: minimum 3 questions with schema
- [ ] Internal link to ≥1 related page
- [ ] "Last updated [Month Year]" visible on page
- [ ] EmailCapture component present
- [ ] All affiliate links use `<OutboundLink />` — zero raw URLs in JSX
- [ ] Affiliate disclosure visible or linked in footer
- [ ] Mobile tested (Chrome DevTools, iPhone frame)

***

## 🚀 First Prompt to Give Claude Code

Once you have the above document ready, open Claude Code and start with this:

> *"I am building SmartShopCA.ca — a Canadian seasonal affiliate deals site. Here is the complete spec. Please scaffold the full Next.js 14 project with App Router, TypeScript, and Tailwind CSS, following every detail in this spec. Start with: folder structure, TypeScript interfaces, campaign config, then build all components one by one. After components are done, build the page templates. Finally create the 5 seed products and 1 seed collection. Ask me before making any architectural decisions not covered in the spec."*

***

**Your immediate next actions today:**

1. Apply to MaxBounty now (takes longest to approve)
2. Sign up for Kit at kit.com
3. Create Vercel account, connect GitHub
4. Share Kit API key + Form ID with Claude Code when ready
<span style="display:none">[^1]</span>

<div align="center">⁂</div>

[^1]: image.jpg

