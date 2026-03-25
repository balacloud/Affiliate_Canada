# Pre-Publish Checklist — SmartShopCA.ca

> Run before every page goes live. Score at the bottom.

---

## AI-Era Visibility (LLMs + Google SGE)

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

## Affiliate & Monetization

- [ ] 15. **DealCard data complete** — every card has: name, merchant, CAD price, 3 pros, 2 cons, 3 key specs, editorial badge
- [ ] 16. **All affiliate links use `<OutboundLink />`** — zero raw affiliate URLs in JSX
- [ ] 17. **OutboundLink labels transparent** — button text: "View at [Merchant] (affiliate link)"
- [ ] 18. **Amazon.ca is NOT the primary CTA** — Best Buy / Newegg / Canadian Tire CTA appears first
- [ ] 19. **Max 7 DealCards per page** — never a catalog dump
- [ ] 20. **At least 1 high-CPA product present** — financial product or MaxBounty offer somewhere on page

## Email & Growth

- [ ] 21. **EmailCapture component present** — bottom of page, ideally also mid-page on long guides
- [ ] 22. **Lead magnet copy matches season** — headline matches active campaign
- [ ] 23. **ConvertKit tag applied** — form submission tags subscriber with correct campaign tag

## Legal & Trust

- [ ] 24. **Affiliate disclosure visible or linked** — inline near top or clearly linked in footer
- [ ] 25. **No fabricated prices** — every price manually verified at merchant site
- [ ] 26. **No fabricated availability** — product confirmed in stock in Canada
- [ ] 27. **"Informational only" note** — if any financial product is mentioned, add disclaimer

## Final QA

- [ ] 28. **Mobile tested** — Chrome DevTools iPhone 12 Pro frame, all cards readable, CTAs tappable
- [ ] 29. **All links open correctly** — click every `<OutboundLink />`, confirm correct Canadian merchant page
- [ ] 30. **Click tracker fires** — devtools Network tab confirms `/api/track-click` POST fires on each CTA click

---

## Scoring

| Score | Action |
|:--|:--|
| 28–30 | Ship it |
| 22–27 | Fix critical items (16, 6, 24) before shipping |
| Under 22 | Do not publish — page needs significant work |
