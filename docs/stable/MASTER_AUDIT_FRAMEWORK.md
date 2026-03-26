# SmartShopCA — Master Audit Framework

> **Last Updated:** Day 2 (March 26, 2026)
> **Version:** v1.0
> **When to run:** Weekly (Sunday evening) OR triggered by: "run audit", "audit now", before any page goes live, after major feature work
> **Time estimate:** 20–30 mins per full audit. Run all 8 categories or specify one by name.

---

## What This Framework Is

A single, consolidated audit process for SmartShopCA.ca. Ensures content quality, legal compliance, AI search readiness, affiliate integrity, and technical correctness before and after every publish cycle.

Every finding gets severity: **CRITICAL / HIGH / MEDIUM / LOW**
Every finding gets verdict: **VERIFIED / PLAUSIBLE / MISLEADING / BROKEN / FALSE**

---

## Principles This Audit Is Grounded In

### From Golden Rules (hard constraints):

| # | Principle | What the audit checks |
|---|-----------|----------------------|
| R1 | Decision helper, not deal spam | Pages have 3–7 picks max, opinionated framing, not catalog dumps |
| R2 | Max 7 DealCards per page | CollectionGrid.tsx enforces this; no page exceeds it |
| R3 | chooseIf + avoidIf on every product | No product MDX missing either field |
| R4 | All prices in CAD with label | No ambiguous "$" without "CAD" |
| R7 | Affiliate disclosure on every page | layout.tsx footer renders on all routes |
| R8 | OutboundLink wraps every CTA | Zero raw affiliate URLs in JSX anywhere |
| R9 | OutboundLink labels transparent | Button text includes "(affiliate link)" |
| R10 | Amazon.ca is secondary only | Never the first/primary CTA on any page |
| R12 | JSON-LD on every page | Product, ItemList, FAQPage schemas present |
| R13 | EmailCapture on every page | Component renders on all content pages |
| R14 | Click tracking on every link | OutboundLink fires POST to /api/track-click |
| R20 | No fabricated data | Prices verified, products in stock in Canada |
| R21 | Pre-publish checklist enforced | 30-point checklist passed before going live |

### From Multi-LLM Research (external validation):

- **JSON-LD helps Google AI Overviews + Bing Copilot** but ChatGPT/Claude browsing reads visible HTML, not JSON-LD — both must be structured
- **Product schema needs enrichment** — brand, image, sku, url, aggregateRating, description fields (not just name + price)
- **3–7 curated picks verified** by GEO research — AI answer engines output 3–5 suggestions, not long lists
- **"Choose this if / Avoid this if" verified** — GEO rewards opinionated, conditional-authority content with 30–40% visibility lifts
- **Diversified affiliate stack verified** — single-network dependency is a documented risk
- **Email-first verified** — organic search traffic declining for niche sites; owned audience is the hedge
- **Province-level pages recommended** — "National Pillar → Province Hubs → City" for Canadian local relevance (Phase 2)
- **E-E-A-T signals required** — author attribution, trust indicators, transparent methodology on content pages

### From Business Rules (learned / documented):

- **Amazon.ca commissions are 1–2.5% on tech** — never primary, always supplementary
- **FB ads cannot link directly to affiliate URLs** — always to your own domain first
- **Canadian law requires affiliate disclosure** — Competition Act, not optional
- **CASL compliance for email** — explicit opt-in, unsubscribe link in every email
- **PIPEDA for privacy** — privacy policy required if collecting any personal data

---

## The 8 Audit Categories

---

### Category 1: Content Quality Audit

**Principle:** R1 (decision helper), R3 (chooseIf/avoidIf), R20 (no fabricated data)
**Purpose:** Every product and page meets the "decision helper" standard

```
[ ] Every product MDX has: chooseIf, avoidIf, 3–5 pros, 2–3 cons
    → grep content/products/ for missing fields

[ ] No page has more than 7 DealCards
    → check CollectionGrid enforces .slice(0, 7)

[ ] Every content page has a TL;DR block at the top
    → check season pages, guide pages for TL;DR section

[ ] Page H1s contain "Canada" + year + specific use case
    → review all page titles against Golden Rule 5

[ ] "Prices last checked [Month Year]" visible on every content page
    → grep for "Prices last checked" in page files

[ ] No fabricated prices — every price matches a real Canadian retailer listing
    → manual spot-check: pick 2 random products, verify price at merchant site

[ ] No fabricated availability — products are actually in stock in Canada
    → manual spot-check: pick 2 random products, verify they ship to Canada
```

---

### Category 2: Golden Rule Compliance

**Principle:** All 21 Golden Rules — check each has not been violated since last audit

```
[ ] R1: Pages are decision helpers (3–7 picks, opinionated)
[ ] R2: Max 7 DealCards — CollectionGrid.tsx slice(0, 7) intact?
[ ] R3: Every product has chooseIf + avoidIf in MDX frontmatter
[ ] R4: All prices show "CAD" label — grep components for price rendering
[ ] R5: Page titles are specific questions with "Canada" + year
[ ] R6: TL;DR block on every content page
[ ] R7: Affiliate disclosure in layout.tsx footer — renders on all routes
[ ] R8: OutboundLink wraps every CTA — grep JSX for raw <a> to affiliate domains
[ ] R9: OutboundLink labels include "(affiliate link)" text
[ ] R10: Amazon.ca is never the primary CTA — check DealCard render order
[ ] R11: FB ad links (when added) go to own domain, not affiliate URLs
[ ] R12: JSON-LD schema on every page — check homepage, season, guide, about
[ ] R13: EmailCapture component on every content page
[ ] R14: OutboundLink fires POST to /api/track-click on every click
[ ] R15: Mobile-first design — components use Tailwind responsive classes
[ ] R16: No dark mode in Phase 0
[ ] R17: Session startup checklist followed
[ ] R18: Session close checklist followed
[ ] R19: Non-obvious decisions documented in docs/Research/
[ ] R20: No fabricated data (prices, availability, specs)
[ ] R21: Pre-publish checklist run before every page goes live
```

---

### Category 3: Schema & AI Visibility Audit

**Principle:** R12 (JSON-LD on every page), Multi-LLM Research findings
**Purpose:** Ensure the site is optimally structured for AI search engines

```
[ ] Homepage has WebSite schema with name, url, description
    → read app/page.tsx JsonLd block

[ ] Season pages have ItemList schema wrapping all products
    → read app/[season]/page.tsx — ItemList with ListItem + Product objects

[ ] Each product in ItemList has: name, price, priceCurrency (CAD), availability
    → verify the itemListElement structure

[ ] Product schema enrichment (from Multi-LLM Research):
    → Does each Product include: brand, image, sku, url, description?
    → Does aggregateRating exist (if reviews are available)?

[ ] FAQPage schema auto-generated by FAQBlock component
    → read components/FAQBlock.tsx — faqSchema object correct?

[ ] Guide pages have Article schema with headline, dateModified, author
    → read app/guides/[slug]/page.tsx JsonLd block

[ ] About page has AboutPage schema
    → read app/about/page.tsx JsonLd block

[ ] Visible HTML is equally structured (not just JSON-LD):
    → H2/H3 hierarchy follows: Best Overall → Best Budget → Best Premium → FAQ
    → Pros/cons are in <ul>/<li> elements (machine-readable)
    → "Choose this if" is in a distinct element, not buried in paragraphs

[ ] Schema validates without errors
    → run Google Rich Results Test on live URL (manual check)
```

---

### Category 4: Affiliate Link Integrity Audit

**Principle:** R8 (OutboundLink wraps all), R9 (transparent labels), R14 (click tracking)
**Purpose:** Every affiliate link is tracked, transparent, and functional

```
[ ] Zero raw affiliate URLs in JSX:
    → grep all .tsx files for href patterns matching affiliate domains
    → every affiliate URL must go through <OutboundLink />

[ ] OutboundLink button text follows format: "View at [Merchant] (affiliate link)"
    → read components/OutboundLink.tsx — verify label structure

[ ] Click tracker fires on every OutboundLink click:
    → read OutboundLink.tsx — trackClick() called before window.open()
    → /api/track-click returns { success: true }

[ ] Amazon.ca is never the first CTA on any page:
    → check seed products — Best Buy/Newegg should appear before Amazon

[ ] All affiliate links in seed products are clearly marked as placeholders:
    → grep content/products/ for "placeholder" in affiliateLink field

[ ] When real affiliate links are added, verify each opens the correct
    Canadian merchant product page (not US, not generic homepage)
```

---

### Category 5: Legal & Trust Compliance Audit

**Principle:** R7 (affiliate disclosure), Canadian law, E-E-A-T
**Purpose:** Site meets Canadian legal requirements and trust standards

```
[ ] Affiliate disclosure in footer on every page:
    → read app/layout.tsx — footer text present and accurate

[ ] About page has:
    → Who runs the site
    → How products are selected (editorial criteria, not paid placement)
    → Full affiliate disclosure statement
    → Last updated date

[ ] Privacy Policy exists (required under PIPEDA if collecting emails):
    → check if /privacy page exists — if not, flag as needed before Phase 1

[ ] Email capture complies with CASL:
    → Explicit opt-in (no pre-checked boxes)
    → Clear description of what they're signing up for
    → Unsubscribe mechanism (handled by ConvertKit when wired)

[ ] "Informational only" disclaimer if any financial products are mentioned:
    → grep pages for credit card / Questrade / financial product mentions

[ ] No fabricated reviews or testimonials:
    → no aggregateRating in schema unless real reviews exist

[ ] Author attribution on content pages (E-E-A-T signal):
    → does Article schema include author? Is there visible attribution?
```

---

### Category 6: Email Capture Audit

**Principle:** R13 (EmailCapture on every page), email-first strategy
**Purpose:** Email funnel is functional and compliant

```
[ ] EmailCapture component renders on:
    → Homepage (mid-page)
    → Season pages (bottom)
    → Guide pages (bottom)
    → (NOT required on About page)

[ ] EmailCapture headline matches active campaign:
    → reads ACTIVE_CAMPAIGN from config — label is dynamic

[ ] Form validation works:
    → email field is required, type="email"
    → submit button shows loading state

[ ] ConvertKit integration status:
    → Is API key wired in? Or still placeholder? (Track in Known Issues)

[ ] Campaign tagging:
    → When ConvertKit is live, does form submit tag subscriber with campaign tag?

[ ] Lead magnet copy is compelling:
    → "Get our [Season] Canadian deals guide free" — matches current season?
```

---

### Category 7: Performance & Deploy Audit

**Principle:** R15 (mobile first), site speed, deploy health
**Purpose:** Site loads fast, deploys correctly, no broken builds

```
[ ] next build passes with 0 errors:
    → run `npm run build` — check output

[ ] Page count matches expected:
    → homepage + 4 season pages + about + guide(s) + API route

[ ] Vercel deployment is current:
    → latest git commit matches Vercel's deployed commit hash

[ ] Auto-deploy from main branch working:
    → push a commit, verify Vercel rebuilds

[ ] Page load under 3 seconds on throttled 4G:
    → Chrome DevTools → Performance → throttle to "Slow 4G"
    → test homepage + one season page

[ ] Mobile layout renders correctly:
    → Chrome DevTools → iPhone 12 Pro frame
    → DealCards stack vertically, CTAs are tappable

[ ] No console errors in browser:
    → open DevTools console on each page type
```

---

### Category 8: GEO/AEO Readiness Audit

**Principle:** Multi-LLM Research findings, AI-era visibility
**Purpose:** Content is optimized for citation by AI answer engines

```
[ ] Decision-driven headings (not generic):
    → H1 is a specific question: "Best [X] for [Y] in Canada 2026"
    → H2s follow: "Best Overall" → "Best Budget" → "Best Premium" → "How We Picked" → "FAQ"

[ ] Answer-first format:
    → TL;DR block appears before detailed content
    → First sentence under each H2 is a direct answer, not preamble

[ ] Comparison tables present for top picks:
    → ComparisonTable renders on season pages with ≥2 products

[ ] FAQ sections target real queries:
    → Questions match how people actually search ("What is the best X in Canada?")
    → Answers are direct, 1–3 sentences, not filler

[ ] Internal linking structure:
    → Every content page links to ≥1 related page + homepage
    → Scenario cards on homepage link to season pages

[ ] Seasonal freshness signals:
    → "Prices last checked [Month Year]" visible
    → Season/quarter mentioned in headline or subtitle

[ ] Structured visible HTML (not just JSON-LD):
    → Pros/cons in list elements
    → Specs in table or pill elements
    → "Choose this if" in italic/distinct element

[ ] Province-level pages (Phase 2 check):
    → Are province landing pages planned in roadmap?
    → National → Province → City architecture documented?
```

---

## Audit Scoring

After running all 8 categories, tally findings:

| Severity | Definition | Response |
|----------|-----------|----------|
| CRITICAL | Legal violation, fabricated data, or broken affiliate tracking | Fix immediately before any traffic is driven |
| HIGH | Missing schema, broken component, or misleading content | Fix within current session |
| MEDIUM | Incomplete feature, stale content, or missing trust signal | Schedule for next session |
| LOW | Docs stale, minor UI polish, or future enhancement | Track in KNOWN_ISSUES |

**Audit health score:**
- 0 CRITICAL + 0 HIGH = Healthy
- 0 CRITICAL + 1–3 HIGH = Monitor
- Any CRITICAL = Do not drive traffic until resolved

---

## How to Run

**Full audit:**
> "Run the full audit"
> Claude reads all 8 categories against the current codebase + live site, produces findings table.

**Targeted audit:**
> "Run Category 3 — schema audit"
> "Audit affiliate links"
> "Check legal compliance"

**Weekly trigger (Sunday evening):**
> "Weekly audit"
> Claude runs Category 1 (content), Category 3 (schema), Category 4 (affiliate links), Category 5 (legal) — the 4 highest-value categories for a live affiliate site.

**Pre-publish trigger (before any page goes live):**
> "Pre-publish audit for [page name]"
> Claude runs the 30-point Pre-Publish Checklist from `docs/stable/PRE_PUBLISH_CHECKLIST.md` against the specific page.

---

## Audit Log

| Audit | Date | Category | Findings | CRITICALs | HIGHs | Notes |
|-------|------|----------|----------|-----------|-------|-------|
| (none yet) | — | — | — | — | — | First audit to be run Day 2 |

---

## What's Not Yet Audited (Future Categories)

- **SEO Performance Audit** — Google Search Console data, keyword rankings, CTR (needs GSC setup)
- **Email Funnel Audit** — open rates, click rates, unsubscribe rates (needs ConvertKit live)
- **Affiliate Revenue Audit** — EPC by merchant, conversion rates (needs real affiliate links)
- **A/B Test Audit** — which product placements, CTAs, or page layouts convert better (Phase 2+)
- **Province-Level Coverage Audit** — geographic content gaps (Phase 2)

---

*Location: `docs/stable/MASTER_AUDIT_FRAMEWORK.md` — stable reference, updated when new principles are learned*
*Trigger with: "run audit", "weekly audit", or specific category name*
