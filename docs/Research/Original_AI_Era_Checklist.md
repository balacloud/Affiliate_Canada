<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# where is the AI era checklist for build AI‑Era Page Checklist — Run Before Every Publish

[ ] 1. One clear question — page title is a specific question ("Best monitors for small condos in Canada 2026")
[ ] 2. TL;DR at top — 2–4 bullets: who it's for, top picks, price range
[ ] 3. H2/H3 structure — logical sections ("Best overall", "Best budget", "How we picked", "FAQ")
[ ] 4. DealCard data complete — every product has: name, merchant, CAD price, 3 pros, 2 cons, 3 key specs
[ ] 5. JSON‑LD schema added — Product, ItemList, FAQPage as applicable [VERIFIED]
[ ] 6. Canada/CAD explicit — "in Canada", CAD prices, Canadian merchants mentioned in intro and H1
[ ] 7. Seasonal tag — headline or subtitle mentions the quarter ("Q2 2026 Spring Picks")
[ ] 8. FAQ block — minimum 3 questions, marked up with FAQPage schema [VERIFIED]
[ ] 9. Internal links — link to ≥1 related guide/season page + homepage
[ ] 10. Last‑updated date — visible on page ("Prices last checked March 2026")
[ ] 11. Email capture — CTA present at bottom of page
[ ] 12. Outbound links tracked — all affiliate links go through <OutboundTracker />

It's in the master prompt above under **"🗒️ Notion Pre-Publish Checklist"** — but you're right, I merged the two checklists and the AI-era specific items got diluted. Here is the **standalone, complete, copy-paste-ready Notion version** with both lists combined and nothing missing:

***

## 🗒️ Notion Template: SmartShopCA Pre-Publish Checklist

> Create this as a **Notion Database** with a checkbox property for each item. One entry per page published.

***

### 📝 Page Info (Fill These First)

- **Page title:**
- **Season/campaign:**
- **Date published:**
- **Last updated:**
- **Author:**

***

### 🤖 AI-Era Visibility (LLMs + Google SGE)

- [ ] **1. One clear question** — page H1 is a specific question containing "Canada" + year + use case (e.g., "Best monitors for small condos in Canada 2026")
- [ ] **2. TL;DR block at top** — 2–4 bullets: who it's for, top 1–3 picks, price range in CAD
- [ ] **3. H2/H3 logical structure** — sections follow this order: "Best Overall → Best Budget → Best Premium → How We Picked → FAQ"
- [ ] **4. JSON-LD: Product schema** — every recommended product has `Product` JSON-LD (name, price, currency: CAD, description)
- [ ] **5. JSON-LD: ItemList schema** — collection/list pages have `ItemList` wrapping all products
- [ ] **6. JSON-LD: FAQPage schema** — FAQ section has `FAQPage` JSON-LD markup
- [ ] **7. Pros/cons machine-readable** — every product has exactly 3–5 pros and 2–3 cons as list items (not buried in paragraphs)
- [ ] **8. "Choose this if / Avoid this if"** — one sentence each per product, plain language
- [ ] **9. Canada/CAD explicit in intro** — first paragraph says "in Canada", uses CAD, names Canadian merchants
- [ ] **10. Seasonal tag visible** — headline or subtitle mentions the quarter (e.g., "Q2 2026 Spring Picks" or "Boxing Day 2026")
- [ ] **11. FAQ block** — minimum 3 questions, maximum 6, uses `<FAQBlock />` component (auto-generates FAQPage schema)
- [ ] **12. Internal links** — links to ≥1 related guide or season page + link back to homepage
- [ ] **13. Last-updated date visible** — exact text: "Prices last checked [Month Year]" visible on page body, not just metadata
- [ ] **14. Page speed check** — Vercel preview loads under 3 seconds on mobile (Chrome DevTools, throttled 4G)

***

### 💰 Affiliate \& Monetization

- [ ] **15. DealCard data complete** — every product card has: name, merchant, CAD price, 3 pros, 2 cons, 3 key specs, editorial badge
- [ ] **16. All affiliate links use `<OutboundLink />`** — zero raw affiliate URLs in JSX anywhere on the page
- [ ] **17. OutboundLink labels transparent** — button text reads "View at [Merchant] (affiliate link)" — no hiding it
- [ ] **18. Amazon.ca is NOT the primary CTA** — if Amazon is present, Best Buy / Newegg / Canadian Tire CTA appears first
- [ ] **19. Max 7 DealCards per page** — behavioral rule, never a catalog dump
- [ ] **20. At least 1 high-CPA product present** — financial product (credit card, Questrade) or MaxBounty offer somewhere on the page or in related links section

***

### 📧 Email \& Growth

- [ ] **21. EmailCapture component present** — appears at bottom of page, ideally also mid-page on long guides
- [ ] **22. Lead magnet copy matches season** — EmailCapture headline matches active campaign (e.g., "Get our Spring 2026 Canadian WFH Guide free")
- [ ] **23. ConvertKit tag applied** — form submission tags the subscriber with the correct campaign tag in Kit

***

### ⚖️ Legal \& Trust

- [ ] **24. Affiliate disclosure visible or linked** — either inline near top ("This page contains affiliate links. We may earn a commission...") or clearly linked in footer
- [ ] **25. No fabricated prices** — every price manually verified at merchant site before publish
- [ ] **26. No fabricated availability** — product confirmed in stock in Canada (not US-only listing)
- [ ] **27. "Informational only" note** — if any financial product is mentioned, add "Not financial advice" disclaimer

***

### 📱 Final QA

- [ ] **28. Mobile tested** — Chrome DevTools iPhone 12 Pro frame, all cards readable, CTA buttons tappable
- [ ] **29. All links open correctly** — click every `<OutboundLink />` in preview, confirm it lands on correct Canadian merchant page
- [ ] **30. Click tracker fires** — open browser devtools Network tab, confirm `/api/track-click` POST fires on each affiliate CTA click

***

**Scoring guide:**

- 28–30 ✅ = Ship it
- 22–27 ✅ = Fix critical items (16, 6, 24) before shipping
- Under 22 ✅ = Do not publish, page needs significant work

