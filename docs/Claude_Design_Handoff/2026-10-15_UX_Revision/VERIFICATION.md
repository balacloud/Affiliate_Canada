# Independent verification of Claude's UX revision

October 15, 2026. **Verdict: build and evidence checks pass, but fix two reproduced interaction bugs before integration.** The revision improves scanability; the compact mobile decision path still needs refinement.

Reviewed the original returned ZIP at `docs/Claude_Design_Handoff/smartshopca-ux-revision.zip` and its HANDOFF.md. Preserved originals. Extracted safely and overlaid the 15 returned source files onto a temporary copy of the current application under `/private/tmp/smartshopca-ux-verification/candidate`. Main application files, dependencies and working preview were not replaced. No commit, push or deployment.

## Findings

### 1. HIGH — malformed fragment crashes comparison page

File: `components/skincare/OpenDetailsOnHash.tsx:14`.

`decodeURIComponent(window.location.hash.slice(1))` is called without handling malformed encoding. In the isolated production build, navigating to `/care/skincare/face-moisturizers#%` produces “Application error: a client-side exception has occurred.” A fragment from an external link must not take down the page.

Required correction: safely parse/decode fragments; ignore malformed/unknown targets without throwing. Cover initial navigation and hash changes. Verify that the comparison remains usable for malformed input and that legitimate encoded IDs still work.

### 2. MEDIUM — evidence link fails to reopen a closed panel

File: `components/skincare/OpenDetailsOnHash.tsx:23–25`.

Reproduced on both comparison pages:

1. Click “Evidence and sources for …”; its panel opens.
2. Close that panel.
3. Click the same evidence link again.
4. Panel remains closed, because the fragment did not change and no hashchange event fires.

Required correction: support repeated same-document evidence-link activation even when the hash is unchanged. Preserve native anchor navigation, keyboard activation and no-JavaScript fallback. Avoid intercepting unrelated/external links. Add a browser regression check for click → close → same link → reopened.

### 3. MEDIUM — mobile decision path remains long

Measured at 375 CSS pixels wide on the isolated production build, default collapsed evidence state:

| Landmark | Vertical position from page top |
|:--|--:|
| Homepage care heading | 992px |
| Homepage direct face-comparison link | 1346px |
| Face short-answer heading | 707px |
| Face product section | 1341px |
| Face key differences | 2636px |
| Body key differences | 2764px |

Homepage total document height was 2936px. These are measurements, not attention-span thresholds or proof of comprehension. The layout is cleaner, but repeated holds, a substantial answer box and tall serial candidate cards still delay the compact differences. Consider placing the differences summary ahead of the larger cards or shortening those cards further. Preserve essential caveats and both pillars. The visible header links provide earlier access to pillar landings, so the care destination is not wholly inaccessible before its panel.

### 4. Follow-up hardening — future states, not failures in current four records

- `app/page.tsx:21–26` labels candidates reviewed using status only, ignoring holdReasons. Other summaries include holdReasons; use a consistent editorial-readiness rule before introducing mixed published/held data. Do not use purchase eligibility as the sole editorial-review rule: an otherwise reviewed record can lack an active commercial destination.
- `SourceLinks.tsx` prints the first source date for an entire group; date each source accurately if dates diverge.
- The semantic table was replaced with a description list. This is not an automatic accessibility violation; automated checks passed. Exact product names are in the visual header while hidden per-value labels use brand only. Preserve unambiguous exact-product relationships before adding multiple variants of one brand. No manual screen-reader evaluation performed.
- Turning the email configuration flag on still does not supply a subscription action. This is known unfinished integration, not a completed email feature.

## Independently performed verification

| Check | Result |
|:--|:--|
| ZIP integrity and path/symlink safety | Pass |
| Overlay onto current application | 15 source files; no package/dependency changes |
| `npm run build` | Pass, 18 static pages, TypeScript checks included |
| `npm run test:editorial` | All 14 pass |
| Candidate evidence preservation | All four parsed candidate records identical to current source; prices, variants, dates, holds, sources and merchant states preserved |
| Referenced source IDs | All candidate references resolve to existing source records |
| Browser route/viewport checks | 11 routes × 320/375/768/1440 pixels = 44 default-state checks |
| Expanded evidence checks | Both comparisons at all four widths = 8 additional states |
| Horizontal overflow / axe checks | No page overflow or WCAG 2 A/AA + best-practice violations in the 52 checked states |
| Mobile menu | Enter opens, Escape closes and restores toggle focus |
| Evidence anchors | First activation opens; repeated same-hash activation fails as above |
| Malformed hash | Reproduced client-side page crash as above |
| Current product state | No sponsored purchase links; both comparisons remain noindex; no unsupported Offer/Review/AggregateRating schema |
| Initial HTML | Comparison content, hold reasons and source URLs present without executing JavaScript |
| Internal destinations / archives | Nine distinct linked editorial destinations 200; known archives noindex; unknown route 404 |
| Tracker API contract | Valid payload 200; empty payload 400 |

Headless Chrome/CDP with installed axe-core ran against the temporary production server on port 3212. Screenshots supplied by Claude were visually inspected; independent homepage screenshots and detailed test output are under `/private/tmp/smartshopca-ux-verification/`. Headless runtime-exception event collection alone did not report the React-caught fragment crash; the explicit rendered-page assertion detected it. Do not interpret an empty exception-event list as absence of all errors.

The 14 existing tests cover purchase gates and outbound tracking; they do not cover the new hash-navigation component, so their passing result does not clear findings 1–2.

## Not established

No Safari/Firefox/real-device or screen-reader test, true browser zoom evaluation, user-comprehension study, Core Web Vitals assessment, external AI/voice retrieval test, search indexing/citation check or product-source re-verification. Existing lint remains interactive/unconfigured. Build emitted stale Browserslist-data warnings; no dependency updates made. Next.js remains 14.2.35 pending the separate supported-framework upgrade.

## Next action

Correct the hash handler and rerun the two regression cases before merging. Prefer one additional compactness adjustment if the target remains minimal-effort mobile reading. Keep holds/noindex and all integration boundaries. This report does not authorize deployment or a paid hosting change.
