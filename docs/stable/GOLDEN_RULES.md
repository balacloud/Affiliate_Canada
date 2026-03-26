# Golden Rules — SmartShopCA.ca

> These rules are non-negotiable. Every session, every PR, every page must comply.

---

## Content & UX Rules

1. **Decision helper, not deal spam** — Every page helps Canadians make a confident purchase decision. No catalog dumps.
2. **Max 7 DealCards per collection page** — Behavioral design rule based on choice overload research. 3–5 is ideal.
3. **`chooseIf` and `avoidIf` required on every product** — Core to the decision-helper UX. No product without both.
4. **All prices in CAD with explicit "CAD" label** — No ambiguity. Canadian audience, Canadian currency.
5. **Page titles are specific questions** — H1 must contain "Canada" + year + specific use case.
6. **TL;DR block at top of every content page** — 2–4 bullets: who it's for, top picks, price range.

## Affiliate & Monetization Rules

7. **Affiliate disclosure on every page** — Canadian law requires this. Non-negotiable.
8. **OutboundLink wraps EVERY affiliate CTA** — No raw affiliate URLs anywhere in JSX.
9. **OutboundLink labels are transparent** — Button text: "View at [Merchant] (affiliate link)". No hiding.
10. **Amazon.ca links are secondary only** — Never the primary CTA. Best Buy / Newegg / Canadian Tire first.
11. **Never link FB ads directly to affiliate/merchant URLs** — Always to your own domain first.

## Technical Rules

12. **JSON-LD schema on every page** — Product, ItemList, FAQPage as applicable. Non-negotiable for AI search visibility. **AND visible HTML must be equally structured** — AI chatbots parse visible HTML, not JSON-LD. Pros/cons in `<ul>/<li>`, specs in tables, "Choose this if" in distinct elements.
13. **EmailCapture on every page** — The email list is the real business. The site is the acquisition tool.
14. **Click tracking on every affiliate link** — Every OutboundLink fires POST to `/api/track-click`.
15. **Mobile first** — Every component designed for phone first, enhanced for desktop.
16. **No dark mode in Phase 0** — Keep it simple. Ship first.

## Process Rules

17. **Session startup checklist** — Always read CLAUDE_CONTEXT.md first. No exceptions.
18. **Session close checklist** — Always update: CLAUDE_CONTEXT.md, status file, known issues file, ROADMAP.md.
19. **Research decisions are documented** — Any non-obvious decision gets a doc in `docs/Research/` with: Question → Decision → Why → Why not alternatives.
20. **No fabricated data** — Prices must be real and verified. Products must be in stock in Canada. No fake availability.
21. **Pre-publish checklist before every page goes live** — All 30 points in `docs/stable/PRE_PUBLISH_CHECKLIST.md` must be checked.

---

## Research-Validated Additions (Day 2 — Multi-LLM Research)

22. **E-E-A-T signals on every content page** — Author attribution, transparent methodology ("How We Picked"), trust indicators. Required by Google and AI answer engines for citation eligibility.
23. **Product schema must be enriched** — Every Product JSON-LD needs: brand, image, sku, url, description, and full Offer object. Basic name+price is insufficient for rich results.
24. **Visible HTML is as important as JSON-LD** — AI chatbots (ChatGPT, Claude, Perplexity) read visible page content, not schema markup. Structure content for both machines and humans.

---

## Common Mistakes to Avoid

- Adding more than 7 products to a page ("just one more" — NO)
- Forgetting affiliate disclosure on a new page
- Using raw affiliate URLs instead of OutboundLink
- Making Amazon.ca the primary CTA because it's easiest
- Skipping JSON-LD because "we'll add it later"
- Skipping EmailCapture because "the page is short"
- Publishing without running the pre-publish checklist
- Relying on JSON-LD alone for "AI-friendly" — visible HTML must also be structured
- Missing author attribution or "How We Picked" methodology (E-E-A-T)
- Using basic Product schema (name+price only) when brand/image/sku/description are available
