# Round 2 — independent verification

October 15, 2026. **Technical verdict: pass.** The two reproduced round-1 bugs are fixed. One requested UX ordering change remains outstanding; apply it during integration rather than requiring another design round.

This is verification of `smartshopca-ux-revision-r2.zip`, not the older ZIP. Its complete 19-file change set was overlaid onto a temporary copy of the current application, not round 1. Main application files and the existing preview remain unchanged. No commit, push, paid action or deployment.

## Verified results

- Archive integrity, relative paths and absence of symlink entries: pass.
- `npm run build`: pass, 18 static pages; TypeScript checks included.
- `node --test tests/editorial-eligibility.test.cjs tests/fragment-readiness.test.cjs`: **26 pass**, zero failures/skips. The normal `test:editorial` script still names only the original file; include both when integrating.
- Headless Chrome/CDP checks: **11 routes × 4 widths** (320, 375, 768, 1440), plus **8 expanded comparison states**: 52 states. No page overflow or axe WCAG 2 A/AA + best-practice violations in checked states.
- **12 browser fragment/navigation checks pass:** first evidence link, repeated same-hash reopening, keyboard Enter reopening, two malformed fragments and encoded direct deep link, on both comparison pages.
- Mobile menu opens with Enter, closes with Escape and restores toggle focus.
- All four parsed candidate records equal the working application's records: prices, variants, source IDs, review dates, holds and merchant states unchanged. All candidate source references resolve.
- Both pillars remain visible; comparisons remain preview/noindex with no sponsored purchase links or unsupported Offer/Review/AggregateRating schema. Known archive routes work/noindex, unknown route 404, nine distinct linked editorial destinations return 200.
- Tracker API accepts the existing valid payload and rejects an empty payload.

Temporary verification artifacts: `/private/tmp/smartshopca-ux-r2-verification/`. The supplied Playwright script was reviewed but not counted as executed: independent browser verification used existing Chrome/CDP instead. Its optional dependency-skip behavior must not be reported as a successful browser run.

## Code review conclusions

`lib/fragment.ts` safely handles malformed percent-encoding; `OpenDetailsOnHash` handles same-page clicks as well as initial load and hash changes, preserving native navigation and modified-click behavior in its handler. The previously crashing `#%` and `#%E0%A4%A` cases leave both pages usable.

`lib/readiness.ts` now centralizes status plus holdReasons for editorial labels, separately from merchant purchase eligibility. `SourceLinks` prints each source's own date. Difference values now include exact-product screen-reader labels. The homepage requires both email configuration and an actual subscription action before showing a form. These resolve the round-1 follow-up concerns for current data.

## Remaining UX adjustment

The founder's follow-up requested moving **Key differences before product cards**. Claude retained answer → product summaries → differences and supplied jump links instead. This is improved access but not the requested order.

At integration, move `<ComparisonTable comparison={comparison} />` ahead of the `#products` section in `ComparisonView.tsx`, reorder the on-page navigation to match, and update its comments. Preserve the answer/hold information first and all source/evidence content. Rerun relevant rendered/keyboard/layout checks after the adjustment. Do not treat the unmodified R2 screenshot measurements as measurements of that future reorder.

## Limits and next work

No source-page/price refresh, real-user comprehension test, Safari/Firefox/real-device or screen-reader test, true zoom assessment, field performance/CWV, public assistant/voice retrieval, indexing or citation verification. Automated accessibility success is not full conformance. No current lint configuration; Next.js remains 14.2.35 and needs the separately planned upgrade. Existing email/contact/affiliate/evidence launch blockers remain.

Next: integrate R2 with the small ordering correction and include new unit tests in the default test command. Preserve originals and unrelated working-tree changes. Verify the merged application before any separately authorized deployment.
