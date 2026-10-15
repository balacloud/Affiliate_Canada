# SmartShopCA two-pillar redesign: code handoff for Codex

Prepared October 14, 2026. This is a design and code handoff. It is not approval to publish or deploy, and it is not a statement that any product claim is ready for publication.

**Important:** I didn't have access to the repository. I built every file below from the brief's description of the existing app, then compiled them in a separate Next.js 14.2 / React 18 / strict TypeScript / Tailwind 3 harness (see §8). Codex has to merge them against the real files. The places where that matters are marked **MERGE** below.

---

## Revision 2 (Oct 14, 2026): founder context and affiliate readiness

This revision applies the founder-confirmed About copy and the affiliate-readiness addendum. The two-pillar architecture is unchanged.

| Path | Change |
|---|---|
| `config/site.ts` | Adds a `founder` object (name, location, short bio, role) and `aboutReviewed`. No profile URL, because none was supplied. |
| `app/about/page.tsx` | Rewritten from the founder's draft copy. Adds:<br>• a founder sidebar card, including a "Not: a dermatologist, pharmacist or product tester" line<br>• a four-step research method, with links to the real face and body comparisons as worked examples<br>• "What we mean by Canadian" and "How a product earns a place"<br>• commercial relationships stated as "being prepared, none confirmed"<br>• a small "For brands and affiliate programs" section: future placement types and editorial independence, with no logos, metrics or dashboard. Its contact line appears only once `integrations.contact.confirmed` is true.<br>• an AboutPage JSON-LD block naming the founder<br>• a review date |
| `components/editorial/Byline.tsx` (new) | "Researched and written by Balaji Kothandaraman, Kitchener, Ontario", linking to /about. |
| `components/skincare/ComparisonView.tsx` | Adds the byline under the H1. The WebPage JSON-LD now includes `author` (Person, the real founder). Still no Offer, Review or Rating. |
| `components/site/SiteFooter.tsx` | Publisher line: "An independent publication by Balaji Kothandaraman, Kitchener, Ontario." |
| `app/page.tsx` | One founder line under the promise, linking to /about. |
| `app/globals.css` | Links in running text are now underlined. Preflight had removed underlines, so inline links were hard to spot. Nav and button links still opt out with `no-underline`. |

**Left out on purpose:**
- **Personal details:** age, employer names, certifications, network or follower counts, and a LinkedIn URL.
- **Images:** no family or portrait image, and no placeholder pretending to be one.
- **Claims:** no "expert" badge, no audience statistics, and no claim that a father's perspective makes products safe for children. The About page states the opposite.

**Verification for revision 2:** the same harness and checks were re-run on the updated files.
- `tsc --noEmit` strict: passed.
- `next build`: passed.
- All 9 routes at 375, 768 and 1440 px: no horizontal overflow.
- axe-core at 375 and 1440 px: 0 violations.
- All 12 internal links return 200.
- The mobile menu keyboard check, the disabled email state, the JSON-LD (no Offer, Review or Rating) and the zero sponsored CTAs were all unchanged.

**Still open for affiliate applications:** the reviewers need "a genuine contact route", and this is the one blocker the code can't solve. Confirm the `hello@smartshopca.ca` inbox works, then set `integrations.contact.confirmed = true`. That one flag turns on the contact lines on About (corrections and partnerships), in the footer and on Privacy.

---

## 1. Design rationale and page map

**Look:** a warm Canadian editorial publication.
- Ivory ground `#FBF8F1` with deep green-charcoal ink `#1E2A24`.
- Headings use a local serif stack (Iowan Old Style, Palatino, Georgia). Body text uses the system UI stack. No font is loaded over the network.
- Each pillar has its own accent, always paired with a text label. Seasonal uses rust `#9A4318` and a **circle** marker. Personal care & household uses sage `#2E5A44` and a **square** marker.
- Evidence states are told apart three ways: by their words, and by a filled, solid-outline or dashed-outline tag. Colour alone never carries the meaning. There are no shields, check marks or certification seals.
- Where there are no licensed photos, the page shows a labelled "Product photo not available" panel.

**Architecture:** the umbrella homepage shows two balanced pillar panels directly under a short promise. Each panel has its own description, readiness state and CTA. A separate skincare preview section follows; it is clearly labelled and never mixed with seasonal content.

| Route | Purpose | State |
|---|---|---|
| `/` | Umbrella homepage: promise, both pillars, shared commitments, labelled skincare preview, email block | Live |
| `/seasonal` | Seasonal pillar identity, what collections will provide, how origin labels work | Honest "being prepared" state, no products |
| `/care` | Personal care & household pillar: skincare first, separate face and body cards, household explained as planned | Preview |
| `/care/skincare` | Skincare overview with separate face and body entry points | Preview |
| `/care/skincare/face-moisturizers` | Face comparison (Marcelle, Riversol) | Draft, both candidates held |
| `/care/skincare/body-moisturizers` | Body comparison (ATTITUDE, Rocky Mountain Soap Co.) plus the Green Beaver excluded example | Draft, both candidates held |
| `/methodology` | Shared standards, plus separate Seasonal, Skincare and Household sections | Live |
| `/about` | Both pillars, independence, actual relationship status (none active), operator description without invented details | Live |
| `/privacy` | Existing route, rewritten to cover only the data flows that actually exist | Live |

A visual prototype of `/`, `/seasonal`, `/care` and the face comparison is on the Design canvas. It is an intermediate visual reference; the code here is the deliverable.

## 2. File manifest

**New**

| Path | Why |
|---|---|
| `types/editorial.ts` | Content model: pillar, category, readiness, origin evidence level and scope, ingredient completeness, dated price, shipping, returns, merchant-link kind and affiliate status, choose/skip/trade-offs, sources, FAQs, subscribe result. Kept separate from the legacy `types/index.ts`. |
| `config/site.ts` | Pillar definitions, nav, `siteUrl`, and integration flags (email, contact, affiliate) that drive truthful states. |
| `lib/format.ts` | CAD and date formatting, unit price within a pack's own unit (never mixing mL and g), and the `isPurchaseEligible` gate. |
| `content/skincare/sources.ts` | Dated source registry for the research snapshot (accessed 2026-10-14). |
| `content/skincare/face-moisturizers.ts` | Face comparison data (2 held candidates). |
| `content/skincare/body-moisturizers.ts` | Body comparison data (2 held candidates, plus the Green Beaver excluded example). |
| `content/skincare/index.ts` | Comparison list and lookup. |
| `components/site/SiteHeader.tsx`, `Wordmark.tsx`, `MobileNav.tsx`, `SiteFooter.tsx` | Shared header and footer. The mobile menu is a `<details>` client island. |
| `components/editorial/PillarPanel.tsx`, `ReadinessBadge.tsx`, `EvidenceTag.tsx`, `PillarDot.tsx`, `Breadcrumbs.tsx`, `FaqList.tsx`, `ArrowIcon.tsx`, `StructuredData.tsx` | Editorial building blocks. |
| `components/skincare/ComparisonView.tsx`, `CandidateCard.tsx`, `ComparisonTable.tsx` | One data-driven template shared by face and body (no duplicated pages). |
| `components/EmailSignup.tsx` | New email block with all six states. |
| `components/EvidenceLink.tsx` | Non-commercial source links, kept distinct from merchant links. |
| `app/seasonal/page.tsx`, `app/care/page.tsx`, `app/care/skincare/page.tsx`, `app/care/skincare/face-moisturizers/page.tsx`, `app/care/skincare/body-moisturizers/page.tsx`, `app/methodology/page.tsx` | New routes. |

**Modified (full replacements: MERGE against the current files)**

| Path | Change |
|---|---|
| `app/layout.tsx` | Skip link, shared header and footer, `<main id="main">`, `lang="en-CA"`, metadata template, light-only viewport. **MERGE:** keep any existing scripts or providers the current layout includes. |
| `app/page.tsx` | Umbrella homepage. No longer imports the expired Q2 spring campaign. |
| `app/globals.css` | Tailwind layers, focus ring, reduced motion, small component classes. |
| `tailwind.config.ts` | New tokens under `extend`. **MERGE:** copy in any custom theme keys that legacy components still use. |
| `app/about/page.tsx` | Rewritten for both pillars. Removes the unconfirmed named affiliate participation. |
| `app/privacy/page.tsx` | Rewritten to describe actual data flows only. |
| `components/OutboundLink.tsx` | Contract change (see §7). |
| `components/EmailCapture.tsx` | Fake success removed. It is now a wrapper that renders `EmailSignup` in its truthful unavailable state. |

**Untouched:**
- `app/[season]/page.tsx`, `app/guides/[slug]/page.tsx`, `app/api/track-click/route.ts`
- `components/DealCard.tsx`, `ComparisonTable.tsx` (legacy root-level), `CollectionGrid.tsx`, `FAQBlock.tsx`, `JsonLd.tsx`, `SeasonBanner.tsx`
- `types/index.ts`, `lib/getProducts.ts`, `lib/getCollections.ts`, `lib/trackClick.ts`, `config/campaigns.ts`, all MDX content

No dependency or `package.json` changes.

## 3. Complete file contents

Every file listed above is included in full in this folder at its exact repository-relative path. There are no ellipses, TODO stubs or unresolved imports, and every import resolves within these files or Next.js and React.

## 4. Types, data and styles

See `types/editorial.ts`, `content/skincare/*`, `config/site.ts`, `tailwind.config.ts` and `app/globals.css`.

- Skincare data is stored as typed TypeScript modules, not MDX frontmatter. The evidence is nested (multiple origin statements, source IDs, hold reasons), and TypeScript checks it at build time.
- The existing MDX loaders keep their server-only `fs` boundary and are unchanged.
- No client component imports `fs`.

## 5. Asset manifest

- **No images are used.** Product cards show a labelled neutral panel: "Product photo not available".
- The decorative graphic on `/seasonal` is pure CSS (abstract shapes, `aria-hidden`).
- All icons are inline SVG: arrow, menu/close, chevron, pause bars, square bullet.
- There are no external image, font or icon dependencies.

## 6. Behaviour table

| Feature | Status | What the reader sees |
|---|---|---|
| Two-pillar navigation (desktop and mobile) | Implemented | Real routes. The mobile menu works without JS; JS adds Escape-to-close with focus returned to the toggle, outside-click close and close on route change. |
| Face and body comparisons | Implemented (draft data) | Held badges with plain-language reasons. Unknown values are written out. No buy CTA. |
| Readiness and hold gating | Implemented | Driven by `status`, `merchantLink` and evidence fields through `isPurchaseEligible`. A CTA appears only when the record is `published` with complete ingredients, origin not "not confirmed", and (for affiliate links) `affiliateStatus: 'active'`. |
| Merchant/affiliate CTA | Implemented but **inactive** | All four records are held, so no CTA renders. When one becomes eligible it must go through `OutboundLink`, labelled "Affiliate link" or "Merchant link". |
| Evidence/source links | Implemented | `EvidenceLink`: no tracking, no `sponsored`. |
| Email signup (Kit) | **Intentionally unavailable** | Disabled form with "Email updates aren't switched on yet… nothing you type here is sent or stored." The idle, invalid, submitting, success and failure states are built and activate when a real `subscribe` server action is passed in. |
| Contact delivery | **Unavailable** | No contact form. The address only appears when `integrations.contact.confirmed` is `true`. |
| Affiliate acceptance | **None active** | About and the footer say so. The disclosure copy switches automatically through `integrations.affiliate.anyActive`. |
| Click analytics | Best-effort only | Beacon/keepalive POST to the existing `/api/track-click`, which logs to the console. No persistence, dashboard or attribution. |
| JSON-LD | Implemented (minimal) | BreadcrumbList and WebPage (`dateModified`, publisher name) on comparison pages. No Product, Offer, Review, Rating or author. |
| Filters/sorts | Not added | Two records per page don't support real filtering. |

## 7. Integration notes

**`OutboundLink` contract change**
- It now renders a real `<a href target="_blank">`. It no longer calls `window.open`.
- Tracking is sent with `navigator.sendBeacon`, falling back to `fetch(…, { keepalive: true })`, and all errors are swallowed. A failed tracker can't block navigation, popup blockers don't interfere, and the link works without JS.
- All existing props are unchanged. New optional props: `children`, `linkKind` (`'affiliate'` adds `rel="sponsored"`, `'merchant'` doesn't) and `ariaLabel`.
- The POST body keeps `productId`, `merchantId`, `merchantName`, `campaignId` and `pageSlug`, and adds `href`, `linkKind` and `timestamp`. **MERGE:** confirm that `/api/track-click`'s required-field validation accepts this body. If the route requires a field I didn't send, add it in `sendClick`.
- The component is exported both named and default. **MERGE:** check how `DealCard` imports it, and whether `lib/trackClick.ts` should be reused instead of the inline `sendClick`.

**`EmailCapture`:** it accepts and ignores any legacy props, so existing call sites still compile, and it is exported both named and default. Legacy pages now show the honest unavailable state instead of the timed fake success.

**Connecting email later:**
1. Create a server action (for example `app/actions/subscribe.ts` with `'use server'`) that reads Kit credentials from server environment variables only and returns `SubscribeResult`.
2. Pass it as `<EmailSignup subscribe={subscribe} />`.
3. Set `integrations.email.configured = true` and update `/privacy` in the same change.

Note that the available state submits through a client handler, so submitting requires JS. The unavailable state needs none.

**Legacy routes:**
- The static segments `/seasonal`, `/care` and `/methodology` take precedence over `app/[season]`. The harness confirmed this with a stub dynamic route alongside them.
- The expired spring tech page stays reachable at its old URL, but nothing in the new UI links to it.
- Recommended for review, not done here: add a "This guide is archived (spring 2026)" banner to `[season]` for expired campaigns, or `noindex` it. Don't redirect it to skincare.
- Guides are untouched.

**Other notes:**
- `siteUrl` falls back to `https://smartshopca.ca`. That fallback is inferred from the repository's contact address. Set `NEXT_PUBLIC_SITE_URL` and confirm the domain.
- The legacy `Product.category`, `Collection.season` and `Merchant.affiliateNetwork` unions are untouched, and skincare is not forced into them. If CJ or Rakuten are needed for other content, extend that union separately.
- The old publishing checklist still has tech-store and high-CPA financial requirements that don't fit this content. I didn't add financial offers or rankings to satisfy it; Codex should reconcile the checklist.

## 8. Verification report

These checks were run against these exact files, copied into a fresh harness: Next.js 14.2.15, React 18.3.1, TypeScript 5.4.5 strict, Tailwind 3.4.4. The harness also had a stub `app/[season]` and a stub `api/track-click`, which are not part of the handoff.

| Check | Result |
|---|---|
| `tsc --noEmit` (strict) | Passed |
| `next build` | Passed. 14 static pages generated, including all 9 handoff routes. |
| Horizontal overflow at 375, 768 and 1440 px on all 9 routes | None (`scrollWidth - innerWidth = 0`). The comparison table scrolls inside its own labelled, focusable region. |
| axe-core 4.10 (WCAG 2 A/AA plus best-practice) at 375 and 1440 px on all 9 routes | 0 violations after fixing one duplicate-landmark label on the table region. Colour contrast passes. |
| Internal links (12 unique) | All return 200 |
| External links (12 unique source URLs) | **Not fetched** from this environment. They are copied verbatim from the brief. |
| Mobile menu keyboard | Tab reaches the toggle, Enter opens it, Escape closes it and returns focus to the toggle. |
| Email block with no backend | All controls disabled; the truthful message is shown. |
| JSON-LD on comparison pages | Contains no Offer, Review or Rating. |
| `rel="sponsored"` CTAs on comparison pages | 0 (all candidates held) |
| `next lint` | **Not run.** It opens interactive setup in this repo. |
| Build against the real repository | **Not run.** I had no repository access, so the MERGE items above still need checking. |
| Screen-reader manual pass; real-device testing | **Not run.** |

## 9. Remaining founder and Codex inputs

1. **Product evidence before any candidate leaves hold:**
   - Marcelle: exact-item origin.
   - Riversol: current full INCI and stock.
   - ATTITUDE: variant origin and label.
   - Rocky: label and batch.
   - All four: physical label checks if you intend to claim them; re-check prices and policies near publication, and update `reviewed` dates.
   - Marcelle's return-policy contact text needs confirming.
2. **Operator identity:** resolved in revision 2 (Balaji Kothandaraman, Kitchener, Ontario). Add a profile URL only if the founder supplies one.
3. **Contact inbox:** confirm `hello@smartshopca.ca` works, then set `integrations.contact.confirmed = true`.
4. **Email provider:** secure Kit configuration and a server action, then flip `integrations.email.configured` and update `/privacy`.
5. **Affiliate programs:** keep `affiliateStatus` at `'none'`/`'researched'` until acceptance is real, and only then add `href` values and set `anyActive`.
6. **Hosting and log facts** for `/privacy`: confirm the hosting provider's logging, and make sure no other trackers exist in the current layout.
7. **Domain:** set `NEXT_PUBLIC_SITE_URL`.
8. **Seasonal collections:** define the first use case, criteria and evidence. No products, dates or reviews have been invented.
9. **Publication checks:** a legal/disclosure review and the reconciled publishing checklist. This handoff is not publication approval.
