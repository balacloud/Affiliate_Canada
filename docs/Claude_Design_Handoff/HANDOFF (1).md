# SmartShopCA UX revision handoff (October 15, 2026)

Baseline: `SMARTSHOPCA_UX_BASELINE_2026-10-15.zip`. This ZIP contains only the files I changed or added, at their repository-relative paths, plus this note. Nothing was deployed, no accounts were touched, and `package.json` and `package-lock.json` are unchanged.

## 1. Design rationale

The goal is that someone who skims a few lines can still choose a section and see each product's main limitation. The full evidence stays on the page for careful readers and for assistants reading the server HTML.

**Homepage**
- **Intro:** a kicker, the headline and one sentence: 36 words, measured on the rendered page.
- **Founder/method link:** one short line under the intro.
- **Section panels:** both appear immediately after the intro. Each shows its label, a one-sentence benefit, its truthful readiness state and one CTA. The bullet lists are gone from the panels.
- **Skincare shortcuts:** the care panel carries direct links to the face and body comparisons. They are visually subordinate to the panel and show "Research preview · 2 products, both still being checked". That status is derived from the records, not hard-coded.
- **Removed duplication:** the separate "Moisturizer comparisons in progress" section, which repeated the comparison cards.
- **Trust strip:** the four commitments shrank to one compact band below the panels, linking to Methodology.
- **Email:** the large disabled form is replaced by a one-line "Email updates: coming later" notice with no form.

**Comparison pages.** One shared template, now ordered:
1. **Title block:** a shorter title, a one-sentence purpose, a "Research preview" badge, the byline and the date checked.
2. **Short answer:** "no recommendation yet" while every product is held, followed by each product's *actual* `holdReasons`, the main difference and the commission status.
3. **The products:** compact summaries, each showing:
   - exact name, format and pack size
   - CAD price with its unit basis, dated and marked "before tax and shipping"
   - one "Fits if" line and one trade-off
   - a dashed "Evidence gap" box
   - a same-page link to that product's evidence (never a purchase link)
4. **Key differences:** a description list that never scrolls sideways. On phones with two products, the values sit in two brand-labelled columns; at 768 px and up it becomes a grid with a column per product. The body page's mL vs g note is shown in bold above it.
5. **Full evidence by product:** native `<details>` panels. Each claim (origin, ingredients, shipping, returns, price) now has its own source links beside it, built from the record's existing source IDs. Empty source IDs render no link, so "not confirmed" stays unsourced. The always-visible `<summary>` line repeats "Still checking: …" with the hold reasons.
6. **Supporting material:** "Researched but not shortlisted" (Green Beaver, now with its source link), FAQs, the full source list, and limits and disclosure.

The 120 px "Product photo not available" blocks are gone, and no image region renders anywhere.

**Header:** the same two-row structure, only tighter. The top row is 64 px on phones (was 80). The pillar bar is 64 px on phones (was 76), and its type steps down slightly so "Canadian-made personal care & household" fits in three lines at 375 px. Both section links stay visible on phones.

**Stable anchors**

| Anchor | Points to |
|---|---|
| `#p-<candidate id>` | Product summary |
| `#differences` | Key differences |
| `#evidence` | Full evidence section |
| `#details-<candidate id>` | One product's evidence panel |
| `#faq` | FAQs |
| `#sources` | Source list |
| `#limits` | Limits and disclosure |

## 2. File manifest

| File | Status | What changed |
|---|---|---|
| `app/page.tsx` | Changed | Homepage restructure (above). |
| `app/privacy/page.tsx` | Changed (one sentence) | The email paragraph used to say "the sign-up form is shown in a disabled state". No page renders that form any more, so it now reads "There is no sign-up form, and no email addresses are collected." Nothing else on the page changed. |
| `components/EmailUpdatesNotice.tsx` | New | Compact, form-free "coming later" notice. |
| `components/editorial/PillarPanel.tsx` | Changed | Compact layout. Renders `pillar.summary` instead of `description` + `points`. New optional `children` slot for subordinate shortcuts. Same export and same `pillar` / `headingLevel` props. |
| `components/site/SiteHeader.tsx` | Changed (spacing only) | Smaller min-heights and font steps. Structure, labels and `aria-label`s unchanged. |
| `components/skincare/ComparisonView.tsx` | Changed | New section order, short-answer box, and the `OpenDetailsOnHash` island. JSON-LD unchanged (BreadcrumbList + WebPage with author and publisher; no Product, Offer, Review or Rating). |
| `components/skincare/CandidateSummary.tsx` | New | Compact product summary. Never renders a purchase link. |
| `components/skincare/CandidateCard.tsx` | Changed | Now a `<details id="details-<id>">` evidence panel with inline source links. The photo block is removed. The `isPurchaseEligible` gate and the `OutboundLink` usage (including `campaignId="SKINCARE_MOISTURIZERS_2026"`) are unchanged. Same props. |
| `components/skincare/ComparisonTable.tsx` | Changed | Same export name and props; now renders the responsive "Key differences" description list instead of a 640 px scrolling table. |
| `components/skincare/SourceLinks.tsx` | New | Inline evidence links from source IDs, using `EvidenceLink` (untracked, works without JS). |
| `components/skincare/OpenDetailsOnHash.tsx` | New, client | Opens a `<details>` panel when the URL hash targets it. Pure enhancement: without JS, the link scrolls to the visible summary, and all panel text is already in the HTML. |
| `types/editorial.ts` | Changed | Adds `PillarDefinition.summary: string` and `SkincareComparison.purpose: string`. Both are required, so any new pillar or comparison record must supply them. |
| `config/site.ts` | Changed | Adds a `summary` to each pillar. Labels, readiness, founder and integration flags are unchanged. |
| `content/skincare/face-moisturizers.ts`, `body-moisturizers.ts` | Changed | **Presentation fields only.** The `h1` is shortened (it still names the use case, Canada and 2026) and a `purpose` sentence is added. The face purpose attributes "fragrance-free" to the brands. No price, variant, unit, source, date, hold reason or evidence status was touched. |

**Intentional removals**
- Homepage: the duplicate skincare preview section, the large disabled email form, and the bullet lists inside the panels. `pillar.points` stays in config and types but is no longer rendered.
- Comparison pages: the photo placeholder blocks, the 640 px horizontally scrolling table, the separate "Brand claims versus what we observed" section (its point now sits in the evidence intro and in Limits), and the separate "In short" box (replaced by the short answer).
- **No files were deleted.** `EmailSignup` and `EmailCapture` are untouched, and the future subscription contract is intact. The homepage renders `EmailSignup` only when `integrations.email.configured` is true; Codex must then also pass the real `subscribe` server action.

**Preserved and not modified:** `lib/format.ts` (`isPurchaseEligible`, unit maths), `components/OutboundLink.tsx`, `components/EvidenceLink.tsx`, the comparison page metadata (noindex while in preview), the legacy archive routes, the 404 behaviour, About, Methodology, `/seasonal`, `/care` and `/care/skincare`.

## 3. Verification actually performed

Run on the real supplied project: baseline ZIP, then `npm ci`, then my changes. Node 22, Next 14.2.35 as resolved by the lockfile.

**Build and tests**

| Check | Result |
|---|---|
| Baseline before any change: `npm run build`, `npm run test:editorial` | Build passed; 14/14 tests passed |
| After the changes: `npm run build` | Passed; 18 static pages |
| After the changes: `npm run test:editorial` | 14/14 passed |
| After the changes: `tsc --noEmit` (strict) | Passed |

**Layout and accessibility (Playwright 1.56 with the preinstalled Chromium)**

| Check | Result |
|---|---|
| Page-level horizontal overflow at 320, 375, 768 and 1440 px | None, on 11 routes: 9 editorial pages plus the `/q2-spring-2026` and `/guides/…` archives |
| Overflow at 640 px (a stand-in for 200% zoom of 1280) | None, on `/` and the face page |
| axe-core 4.10 (WCAG 2.0/2.1 A and AA, plus best-practice) at 320, 375 and 1440 px | 0 violations on those 11 routes, including colour contrast. Re-run on both comparison pages with every `<details>` opened: 0. |

**Behaviour**

| Check | Result |
|---|---|
| Holds survive both views | Each comparison page's server HTML contains "Still checking" 8 times: the summary badge and the evidence-panel summary line for each product, in both the compact and expanded views. |
| No purchase buttons | Zero `rel="sponsored"` links and zero `<img>` on either comparison page |
| Preview status | `<meta name="robots" content="noindex, follow">` on both comparison pages |
| Legacy and unknown routes | Archives return 200 with noindex; an unknown route returns 404 |
| Keyboard: Enter on a `<summary>` | Opens the panel |
| "Evidence and sources for …" link | Opens and scrolls to the matching panel |
| Mobile menu | Opens with Enter, closes with Escape |
| Homepage tab order at 375 px | Skip link → logo → menu → both section links → founder/method links → both section CTAs → Face → Body → methodology |
| Distance to choices at 375 px (page top) | Seasonal CTA at about 804 px, care CTA at about 1218 px, Face link at about 1328 px. Before the revision the homepage was 5631 px tall; now it is 2943 px. |

**Supplied-text extraction (not a crawl).** I stripped the server HTML of each comparison page's `<main>` to plain text. The first 150 words state, in order:
1. the title and purpose
2. "Research preview", the editor and "Checked October 14, 2026"
3. "Short answer: no recommendation yet. Neither product has passed our evidence checks"
4. each product with its exact hold reasons
5. the main difference
6. "no affiliate relationship"

All source URLs are present in the HTML.

**Not performed:**
- **Assistants and indexing:** I did not test ChatGPT, Perplexity, Muse or any assistant, and did no public crawl. Localhost can't establish indexing or citation.
- **Lint:** `next lint` was not run, because it starts interactive setup.
- **Browsers and devices:** no Safari/WebKit, Firefox or real-device testing. In particular I haven't checked the `<details>` styling or the mobile two-column definition list on iOS Safari.
- **Assistive technology:** no manual screen-reader pass (VoiceOver or NVDA). Automated axe results don't prove usability.
- **Real browser zoom:** checked only through viewport-width equivalents.
- **User research:** no comprehension or usability study.
- **Evidence:** no re-check of product facts. All dates still refer to the October 14, 2026 snapshot.

## 4. Known issues and notes for Codex

**Design**
- **Seasonal panel:** on desktop it has empty space under its CTA, because the care panel is taller with its shortcuts. I left it rather than invent seasonal content.
- **Pillar bar has no current-page state:** `SiteHeader` is a server component and doesn't know the pathname. Adding `aria-current` needs a small client wrapper.
- **More than two products:** on phones the key-differences list falls back to one column per attribute. That path renders but hasn't been reviewed with real data.

**Evidence**
- **Draft-wide copy:** the short-answer headline and lead are derived from hold status. If one product is published while another is held, the copy switches to "partly reviewed". That state is untested with real data.
- **Unused summary fields:** `tldr.audience` and `tldr.limits` are no longer shown on the comparison pages. `audience` still appears on `/care`; `limits` is covered by the Limits list. They remain in the data.

**Integration**
- **Email:** when `integrations.email.configured` flips to true, pass the real server action as `<EmailSignup subscribe={…} />` in `app/page.tsx`, and update `/privacy` in the same change.
- **Legacy styling:** `tailwind.config.ts` still contains the legacy `primary` and `campaign-*` colours used by archived pages. I didn't touch them.
- **Next.js version:** the lockfile resolved Next 14.2.35. The framework upgrade is left to Codex, as instructed.

**Deployment:** nothing here was deployed or checked on a public host. Robots, sitemap and canonical settings were not changed.

## 5. Screenshots

These are delivered separately: `after-home-desktop.png`, `after-home-mobile.png`, `after-face-desktop.png`, `after-face-mobile.png`. All are full-page captures at 1440 px and 375 px from the production build (`next start`).
