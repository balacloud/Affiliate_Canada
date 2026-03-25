# SmartShopCA.ca — Master Plan Document

> **Domain:** smartshopca.ca (registered)
> **Stack:** Next.js 14+ / TypeScript / Tailwind CSS / MDX / Vercel
> **Revenue target:** $2,000 CAD/month within 9–12 months

---

## 1. Project Vision

SmartShopCA.ca is a Canada-specific, quarterly seasonal buying-guide and deals website for the **Canadian remote worker / home-office niche**. The core philosophy is **decision helper, not deal spam**: show 3–7 deeply curated picks per scenario, reduce choice overload, and help Canadians make confident purchases using opinionated, structured, AI-search-friendly content.

This is NOT a coupon aggregator. It is a seasonal product recommendation engine monetized via affiliate links.

---

## 2. Architecture & Funnel

```
[FB Ad]
   ↓
[Landing Page — your domain — seasonal hook]
   ↓
[Email Capture — lead magnet: "Canadian WFH Setup Guide PDF"]
   ↓
[Email Sequence — ConvertKit (3–5 emails, opinionated picks, affiliate links)]
   ↓
[Site — Decision Helper Pages — 3–7 picks per scenario, pros/cons, schema markup]
   ↓
[Affiliate Programs — Best Buy CA, Newegg, Canadian Tire, MaxBounty, 1 financial product]
   ↓
[Email List grows → seasonal campaigns each quarter → repeat revenue]
```

SEO and AI search citations build slowly on top of this. **Email is the spine.**

---

## 3. Tech Stack

- **Framework:** Next.js 14+ (App Router, TypeScript, SSG/ISR)
- **Styling:** Tailwind CSS
- **Content:** MDX files in `/content` folder (products, guides, FAQs as markdown with frontmatter)
- **Deployment:** Vercel (free tier)
- **Email:** ConvertKit (via API for form submissions)
- **Analytics:** Vercel Analytics + custom outbound click logger
- **Schema markup:** JSON-LD components (Product, ItemList, FAQPage)
- **Phase 2 addition (NOT NOW):** Supabase pgvector + Claude API for RAG chat agent

---

## 4. Folder Structure

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

## 5. Data Models (TypeScript Interfaces)

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

## 6. Campaign Config

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

## 7. Components — Specs

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

---

## 8. Pages — Requirements

### Homepage `/`
- `<SeasonBanner />` with active campaign
- 3 "scenario cards": "Student Setup", "Remote Worker", "Upgrade My Desk"
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

## 9. API Route: Click Tracker

```typescript
// app/api/track-click/route.ts
// POST body: { productId, merchantId, campaignId, pageSlug, affiliateLink }
// Log to: Vercel Edge Logs (free) OR a simple JSON append to /data/clicks.json
// Return: { success: true }
// NEVER redirect here — client handles the window.open
```

---

## 10. Design Rules (Tailwind)

- **Font:** Inter (Google Fonts)
- **Primary colour:** `#0F172A` (slate-900) — Canadian trust, not flashy
- **Accent:** Campaign colour from config (green for spring, amber for BTS, red for Boxing Day)
- **Max content width:** `max-w-4xl mx-auto` — not wide, focused
- **Card style:** White background, subtle shadow, rounded-lg, clear hover state
- **Mobile first:** Every component designed for phone first
- **No dark mode** for Phase 0

---

## 11. Monetization Stack

| Program | Type | Rate | Notes |
|:--|:--|:--|:--|
| **Best Buy Canada** | % of sale | 3–5% est. | Direct affiliate, stable |
| **Newegg Canada** | % of sale | Varies | Direct, good for tech |
| **Canadian Tire** | % of sale | 3–5% est. | Good for Q2/Q3 outdoor |
| **MaxBounty** | CPA per lead/action | $5–$100+ | Canadian HQ, 1,265+ offers |
| **1 Financial product** (Questrade, Scotiabank, credit card) | CPA per approval | $50–$200+ | High value, low volume needed |
| **Amazon.ca** | % of sale | 1–2.5% on tech | Supplementary ONLY — never primary |
| **Your own PDF guide** | 100% margin | $19–$29 | Fully owned, zero commission risk |

---

## 12. Audit — What's Real vs Risky

| Claim | Status | Evidence |
|:--|:--|:--|
| SEO alone will drive traffic | MISLEADING | Niche sites lost 65%+ traffic in 2024–2025 Google updates |
| Amazon.ca is a safe primary affiliate | VERIFIED RISK | Amazon slashed commissions overnight in 2020; computers/monitors pay only 1–2.5% |
| FB ads → affiliate links directly | MISLEADING | Violates FB ad policy; correct funnel is Ad → your page → email → affiliate |
| Email list is the real asset | VERIFIED | Email affiliate marketing drives 66%+ more conversions |
| MaxBounty is a legit Canadian CPA network | VERIFIED | Ottawa-based, 1,265+ offers, weekly payments |
| AI-structured content = Day 1 traffic | PLAUSIBLE | Medium-term moat only; new domains need 6–12 months of authority-building |
| Behavioral "less choice" design converts better | VERIFIED | Psychological research on choice overload + decision fatigue |

---

## 13. Roadmap: 12 Months, 4 Phases

### Phase 0 — Now → Week 2 (Build Core)

**Goal:** Working scaffold, site deployed, affiliate accounts applied.

**Your tasks (manual):**
- [x] Register domain — `smartshopca.ca` done
- [ ] Create Vercel account → connect to GitHub repo → deploy empty Next.js app
- [ ] Apply for affiliate programs: Best Buy Canada, Newegg Canada, Amazon.ca Associates, MaxBounty
- [ ] Sign up for Kit (ConvertKit) — free up to 10,000 subscribers
  - Create one form: "SmartShopCA Spring 2026 Deals"
  - Get API key and Form ID
  - Create a 3-email welcome sequence
- [ ] Give Claude Code your Kit API key and Form ID to wire up `<EmailCapture />`
- [ ] Set up Google Search Console for smartshopca.ca (verify via Vercel DNS)
- [ ] Set up a spreadsheet to track: affiliate program applied, approved date, affiliate link format

**Claude Code tasks:**
- [ ] Scaffold full Next.js project with folder structure
- [ ] Build all TypeScript interfaces
- [ ] Build all components (DealCard, CollectionGrid, SeasonBanner, EmailCapture, FAQBlock, OutboundLink, JsonLd, ComparisonTable)
- [ ] Wire up campaign config
- [ ] Build all page templates (home, season, guide, about)
- [ ] Build click tracker API route
- [ ] Create 5 seed products + 1 seed collection
- [ ] Deploy to Vercel

### Phase 1 — Weeks 3–6 (Q2 Campaign Live)

**Goal:** First real campaign live, first emails collected, first affiliate clicks tracked.

- [ ] Q2_2026_SPRING_WFH collection published: 5–7 home office picks
- [ ] Lead magnet PDF created: "Canadian WFH Setup Guide — Spring 2026"
- [ ] FB ad campaign: $5–$10/day CAD, targeting "work from home Canada"
- [ ] Ad → landing page → email capture → 3-email ConvertKit sequence with affiliate links
- [ ] Weekly: check OutboundTracker logs — which products get clicks? Kill what doesn't work.

**KPI:** 200 email subscribers

### Phase 2 — Weeks 7–14 (Q3 Back-to-School / Back-to-Work)

**Goal:** Rotate campaign, deepen content, add financial product layer.

- [ ] Q3_2026_BTS collection: back-to-school monitors, laptops, chairs for students
- [ ] Add 1 financial product page: "Best credit card for buying back-to-school tech in Canada"
- [ ] Publish 3–5 evergreen guides
- [ ] Pre-publish checklist applied to every page
- [ ] Email list: run re-engagement campaign to Phase 1 subscribers for Q3

**KPI:** First affiliate commissions earned

### Phase 3 — Weeks 15–22 (Q4 Boxing Day Super Season)

**Goal:** Go hard on the best season. Use everything learned.

- [ ] Q4_2026_BOXING collection: electronics/monitors/home office deep coverage
- [ ] Dedicated pages: "Best Boxing Day Monitor Deals Canada 2026"
- [ ] Email burst campaign: early Boxing Week picks 3 days before Dec 26
- [ ] Increase FB ad budget temporarily around Black Friday + Boxing Day
- [ ] Push financial product CPA hard: credit card offer timed to "holiday spending"

**KPI:** $500–$1,000/month revenue in December

### Phase 4 — Q1 2027 (System Refinement)

**Goal:** Stop building, start optimizing. The system runs quarterly with content swaps.

- [ ] Analyze: which merchants gave best EPC (earnings per click)?
- [ ] Kill low performers, replace with better affiliate programs
- [ ] Add bilingual layer: translate top 3 pages to French (Quebec audience)
- [ ] Apply for Mediavine/Raptive display ads once traffic thresholds are hit
- [ ] Review email list health: unsubscribes, open rates, click rates

**KPI:** Consistent monthly revenue trending toward $2K

---

## 14. Hard Rules (Never Break These)

1. **Affiliate disclosure on every page** — Canadian law requires this
2. **OutboundLink wraps EVERY affiliate CTA** — no raw affiliate URLs in JSX
3. **Max 7 DealCards per collection page** — behavioral design rule
4. **JSON-LD on every page** — non-negotiable for AI search visibility
5. **EmailCapture on every page** — the list is the real business
6. **Amazon.ca links are secondary only** — never the primary CTA
7. **All prices in CAD with explicit "CAD" label**
8. **`chooseIf` and `avoidIf` fields required on every product** — core to decision-helper UX
9. **Never link FB ads directly to affiliate/merchant URLs** — always to your own domain

---

## 15. Pre-Publish Checklist (30-Point)

### AI-Era Visibility (LLMs + Google SGE)

- [ ] 1. **One clear question** — page H1 is a specific question containing "Canada" + year + use case
- [ ] 2. **TL;DR block at top** — 2–4 bullets: who it's for, top 1–3 picks, price range in CAD
- [ ] 3. **H2/H3 logical structure** — sections: "Best Overall → Best Budget → Best Premium → How We Picked → FAQ"
- [ ] 4. **JSON-LD: Product schema** — every product has `Product` JSON-LD
- [ ] 5. **JSON-LD: ItemList schema** — collection/list pages have `ItemList` wrapping all products
- [ ] 6. **JSON-LD: FAQPage schema** — FAQ section has `FAQPage` JSON-LD markup
- [ ] 7. **Pros/cons machine-readable** — every product has exactly 3–5 pros and 2–3 cons as list items
- [ ] 8. **"Choose this if / Avoid this if"** — one sentence each per product, plain language
- [ ] 9. **Canada/CAD explicit in intro** — first paragraph says "in Canada", uses CAD, names Canadian merchants
- [ ] 10. **Seasonal tag visible** — headline or subtitle mentions the quarter
- [ ] 11. **FAQ block** — minimum 3 questions, maximum 6, uses `<FAQBlock />` component
- [ ] 12. **Internal links** — links to ≥1 related guide or season page + link back to homepage
- [ ] 13. **Last-updated date visible** — exact text: "Prices last checked [Month Year]"
- [ ] 14. **Page speed check** — Vercel preview loads under 3 seconds on mobile (throttled 4G)

### Affiliate & Monetization

- [ ] 15. **DealCard data complete** — every card has: name, merchant, CAD price, 3 pros, 2 cons, 3 key specs, editorial badge
- [ ] 16. **All affiliate links use `<OutboundLink />`** — zero raw affiliate URLs in JSX
- [ ] 17. **OutboundLink labels transparent** — button text: "View at [Merchant] (affiliate link)"
- [ ] 18. **Amazon.ca is NOT the primary CTA** — Best Buy / Newegg / Canadian Tire CTA appears first
- [ ] 19. **Max 7 DealCards per page** — never a catalog dump
- [ ] 20. **At least 1 high-CPA product present** — financial product or MaxBounty offer somewhere on page

### Email & Growth

- [ ] 21. **EmailCapture component present** — bottom of page, ideally also mid-page on long guides
- [ ] 22. **Lead magnet copy matches season** — headline matches active campaign
- [ ] 23. **ConvertKit tag applied** — form submission tags subscriber with correct campaign tag

### Legal & Trust

- [ ] 24. **Affiliate disclosure visible or linked** — inline near top or clearly linked in footer
- [ ] 25. **No fabricated prices** — every price manually verified at merchant site
- [ ] 26. **No fabricated availability** — product confirmed in stock in Canada
- [ ] 27. **"Informational only" note** — if any financial product is mentioned, add disclaimer

### Final QA

- [ ] 28. **Mobile tested** — Chrome DevTools iPhone 12 Pro frame, all cards readable, CTAs tappable
- [ ] 29. **All links open correctly** — click every `<OutboundLink />`, confirm it lands on correct Canadian merchant page
- [ ] 30. **Click tracker fires** — devtools Network tab confirms `/api/track-click` POST fires on each CTA click

**Scoring:** 28–30 = Ship it | 22–27 = Fix critical items first | Under 22 = Do not publish

---

## 16. Seed Data (Build First)

Create these 5 products in `/content/products/` as MDX files:

1. `lg-27gp850b-monitor.mdx` — 27" gaming/WFH monitor, ~$350 CAD, Best Buy Canada
2. `secretlab-titan-chair.mdx` — ergonomic chair, ~$500 CAD, Secretlab Canada
3. `logitech-brio-4k-webcam.mdx` — 4K webcam, ~$200 CAD, Newegg Canada
4. `elgato-key-light-mini.mdx` — desk lamp/ring light, ~$120 CAD, Amazon.ca
5. `jabra-evolve2-55-headset.mdx` — wireless headset, ~$400 CAD, Best Buy Canada

Create one collection: `/content/collections/q2-spring-2026.mdx` using all 5 products.
