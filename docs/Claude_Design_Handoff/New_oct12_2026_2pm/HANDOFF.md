# SmartShopCA UX revision, round 2: fixes for the independent review (October 15, 2026)

Baseline: `SMARTSHOPCA_UX_BASELINE_2026-10-15.zip`. This ZIP replaces the first `smartshopca-ux-revision.zip`. It contains the **complete set** of changed and new files relative to that baseline (19 files), so overlay it onto the baseline, not onto the round-1 output.

Nothing was deployed. `package.json` and `package-lock.json` are unchanged.

## 1. Response to the review findings

| # | Finding | Fix | Verified by |
|---|---|---|---|
| 1 | **HIGH:** a malformed fragment (`#%`) crashes the comparison page | Fragment parsing moved to `lib/fragment.ts`: `fragmentToId` and `findDisclosureForFragment`. A decode failure falls back to the raw text, which matches no element, so it never throws. `OpenDetailsOnHash` also wraps every handler in try/catch, covering initial load, `hashchange` and clicks. Legitimately encoded ids still resolve. | **Before:** reproduced on the round-1 build at `#%` and `#%E0%A4%A`, on both pages. **After:** both pages render normally (browser check), and 5 malformed inputs pass the unit tests. |
| 2 | **MEDIUM:** click → close → same evidence link again doesn't reopen the panel | `OpenDetailsOnHash` now also listens for clicks on same-page fragment links (`a[href^="#"]`). It opens the targeted `<details>` before the browser's native jump. The click is never prevented. Modified clicks (Ctrl, Cmd, Shift, Alt), non-primary buttons and links to other pages or sites are ignored. Keyboard Enter also fires `click`. Without JS, the anchor still scrolls to the visible summary. | **Before:** reproduced on both pages. **After:** click → close → click reopens, keyboard Enter reopens, and a direct encoded deep link opens the panel, on both pages. |
| 3 | **MEDIUM:** the mobile decision path is still long | See §2. | Measured at 375 px (table in §2). |
| 4a | The homepage status used `status` only and ignored `holdReasons` | New shared rule in `lib/readiness.ts`: `isEditoriallyReviewed` is true only when status is `published` AND there are no hold reasons. It is used by the homepage label, the short answer, the summary cards and the evidence panels. It is deliberately separate from `isPurchaseEligible`, which is unchanged. | Unit tests cover published-with-reason, ready-for-review and mixed sets. |
| 4b | `SourceLinks` printed one date for a whole group | Each source now shows its own `accessed` date. | The face page HTML contains 10 per-source "(checked …)" labels. |
| 4c | The description list's hidden labels used the brand only | Each value now carries a screen-reader label with the **exact product name**. The short brand label is visual only, on phones (`aria-hidden`). The summary card's evidence link is likewise "Evidence and sources for <exact product name>". | axe passes. No manual screen-reader pass. |
| 4d | The email flag alone could show a form without an action | The homepage now renders `EmailSignup` only when `integrations.email.configured` is true **and** a typed `subscribe` server action is assigned in `app/page.tsx`. Today it is `undefined`, so the form-free notice shows. | Code review. Still unfinished integration, as before. |

## 2. Mobile compaction (375 px, production build, evidence panels collapsed)

| Landmark | Reviewer (round 1) | Now |
|---|--:|--:|
| Homepage: care heading | 992 | 881 |
| Homepage: direct face-comparison link | 1346 | 1184 |
| Homepage: total height | 2936 | 2787 |
| Face: short answer | 707 | 592 |
| Face: product section | 1341 | 1157 |
| Face: key differences | 2636 | 2052 |
| Body: key differences | 2764 | 2153 |

These are measurements, not attention-span thresholds or a comprehension result.

**What changed**
- **Comparison header:**
  - On phones the breadcrumb becomes one "‹ Skincare comparisons" link (the full breadcrumb shows from 640 px up).
  - The title and purpose text are smaller.
- **Short answer box:**
  - It now holds only the status, each product's hold reasons and the commission line.
  - "Main difference" moved to the top of Key differences, where it introduces the comparison.
- **Jump links:** a short "On this page" link row (Products · Key differences · Full evidence · Sources) sits under the answer. Each link has a 44 px touch target.
- **Product summaries:**
  - Format, pack, price and unit price are on one line.
  - The evidence gap is a single inline "Still checking, not a recommendation: …" line.
  - The per-card price date became one shared "Regular CAD prices on October 14, 2026, before tax and shipping" note.
- **Key differences:**
  - Pack and unit price merged into one "Price" row.
  - "Format" was dropped because it already appears in each summary.
- **Homepage:** tighter intro and pillar-panel spacing on phones. Content unchanged.

**Order kept as the brief specifies:** answer → product summaries → key differences → evidence. The jump link reaches Key differences in one tap from just below the answer.

**Option not taken:** putting Key differences ahead of the summaries would move it to about 1,150 px (where the summaries start now). That is a one-line reorder in `ComparisonView` if you prefer it.

## 3. Files

| File | Status vs baseline | Notes |
|---|---|---|
| `lib/fragment.ts` | **New (round 2)** | Pure, DOM-free fragment helpers. |
| `lib/readiness.ts` | **New (round 2)** | `isEditoriallyReviewed`, `isStillChecking`, `comparisonStatusLabel`. |
| `tests/fragment-readiness.test.cjs` | **New (round 2)** | 12 `node:test` cases. Uses the same compile approach as the existing test. |
| `tests/browser/fragment-navigation.check.cjs` | **New (round 2)** | Playwright regression check: malformed fragments, click → close → reopen, keyboard Enter, deep link. Needs a running server and Playwright. If Playwright is missing it exits 0 with a skip message. Not wired into npm scripts. |
| `components/skincare/OpenDetailsOnHash.tsx` | New | Rewritten in round 2 (findings 1 and 2). |
| `components/skincare/CandidateSummary.tsx` | New | Compacted in round 2. |
| `components/skincare/SourceLinks.tsx` | New | Per-source dates in round 2. |
| `components/EmailUpdatesNotice.tsx` | New | Unchanged since round 1. |
| `components/skincare/ComparisonView.tsx` | Changed | Round 2: shared readiness rule, compact header, jump links, shared price note, "Main difference" moved. |
| `components/skincare/ComparisonTable.tsx` | Changed | Round 2: exact-name screen-reader labels, merged price row, "Main difference" intro. |
| `components/skincare/CandidateCard.tsx` | Changed | Round 2: shared readiness rule. The purchase gate and `OutboundLink` usage are unchanged. |
| `app/page.tsx` | Changed | Round 2: shared readiness label, explicit `subscribe` gate, phone spacing. |
| `components/editorial/PillarPanel.tsx` | Changed | Round 2: phone spacing only. |
| `components/site/SiteHeader.tsx`, `app/privacy/page.tsx`, `config/site.ts`, `types/editorial.ts`, `content/skincare/face-moisturizers.ts`, `content/skincare/body-moisturizers.ts` | Changed | Unchanged since round 1. Content edits are still presentation-only: `h1` and `purpose`. No price, variant, unit, source, date, hold reason or evidence status changed. |

**Untouched:**
- `lib/format.ts` (`isPurchaseEligible`, unit maths)
- `components/OutboundLink.tsx`, `components/EvidenceLink.tsx`, `components/EmailSignup.tsx`
- metadata (comparisons remain noindex), legacy archives, About and Methodology

**Suggested script change for Codex (not made, because the manifest is to stay unchanged):**

```json
"test:editorial": "node --test tests/editorial-eligibility.test.cjs tests/fragment-readiness.test.cjs"
```

## 4. Verification actually performed

Run on the supplied baseline after `npm ci`, with these files overlaid. Next 14.2.35 from the lockfile, Node 22, Playwright 1.56 with the preinstalled Chromium (headless).

**Build and tests**

| Check | Result |
|---|---|
| `npm run build` | Passed; 18 static pages (includes the type check) |
| `npm run test:editorial` | 14/14 passed |
| `node --test tests/fragment-readiness.test.cjs` | 12/12 passed |
| `node tests/browser/fragment-navigation.check.cjs http://localhost:3300` | 12/12 passed (6 per comparison page) |

**Before/after on the browser check.** The same assertions failed on the round-1 build: malformed fragments crashed, and click → close → reopen did not reopen. I ran them with an equivalent ad-hoc script before writing the fix.

**Layout and accessibility**

| Check | Result |
|---|---|
| Page-level horizontal overflow at 320, 375, 768 and 1440 px | None, on 11 routes |
| Overflow at 640 px (a stand-in for 200% zoom of 1280) | None, on `/` and the face page |
| axe-core 4.10 (WCAG 2.0/2.1 A/AA + best-practice) at 320, 375 and 1440 px | 0 violations on 11 routes, re-run with all panels open: 0 |

**Behaviour**

| Check | Result |
|---|---|
| Holds | All four visible in the compact and expanded views |
| Purchase links | No `rel="sponsored"` links and no `<img>` on either comparison page |
| Indexing | Both comparison pages `noindex, follow` |
| Legacy and unknown routes | Archives 200 + noindex; unknown route 404 |
| Mobile menu | Enter opens it, Escape closes it |
| Evidence panels | Enter on a `<summary>` opens it |

**Not performed:**
- **Browsers and devices:** no Safari, Firefox or real devices.
- **Assistive technology:** no screen-reader pass.
- **Zoom:** no true browser-zoom testing.
- **Other:** no Core Web Vitals, no user-comprehension study, and no external AI or assistant retrieval test.
- **Lint and evidence:** no lint run (it is interactive), and no product-source re-verification.

**Headless caveat:** headless runtime-error capture isn't proof that there are no errors. The malformed-fragment check therefore asserts that the rendered page has no "Application error" text and that its `h1` is visible.

## 5. Known issues

**Design**
- **Seasonal panel:** on desktop it still has empty space under its CTA.
- **Pillar bar:** still has no current-page state, because `SiteHeader` is a server component.
- **More than two products:** the phone single-column fallback for the key-differences list hasn't been reviewed with real data.

**Evidence**
- **Unused fields:** `tldr.audience` and `tldr.limits` are not shown on comparison pages. They remain in the data.
- **"Partly reviewed" state:** untested with real mixed data.

**Integration**
- **Email:** the subscription action does not exist yet.
- **Test wiring:** the new unit tests aren't in `test:editorial` until the script line above is added. The browser check needs Playwright and a running server.

**Deployment:** nothing deployed. Robots, sitemap and canonical settings unchanged. The framework upgrade is still pending (Codex).

## 6. Screenshots

These are delivered separately, all full-page from the production build:
- `home-desktop.png` (1440 px)
- `home-mobile.png` (375 px)
- `face-desktop.png` (1440 px)
- `face-mobile.png` (375 px)
- `body-mobile.png` (375 px)
