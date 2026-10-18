# Day 10 — framework upgrade, October 15–16, 2026

## Result

Upgraded the local R2 app from Next.js 14.2.35 / React 18 to exact Next.js 16.4.2 / React 19.3.1. Node 22 selected in package engines and `.nvmrc`; React/Node types aligned. ESLint 10.12.0 with matching Next config now provides a non-interactive lint check. No production release.

The two archive pages await Promise-based route params. Next updated TypeScript to automatic JSX, ES2017 target and development type includes. Missing React array keys in comparison cells fixed without changing visible data. All research holds, pillar boundaries, preview/noindex policy, section ordering and tracking contract retained. Original handoff archives and unrelated working-tree changes preserved.

## Verification

| Check | Actual result |
|:--|:--|
| `npm run build` | Pass with Turbopack and TypeScript; 17 reported static entries; all editorial/archive routes retained |
| `npm run lint` | Pass, zero warnings; separate ESLint CLI check, because Next.js 16 builds no longer lint |
| `npm run test:editorial` | 26 pass, zero failures/skips |
| Clean lockfile installation | `npm ci --ignore-scripts` succeeds in temporary directory without force/legacy-peer-deps; old plugin peer declarations emit warnings |
| Browser, merged upgraded app | Chrome/CDP: 14 routes × 4 widths (320/375/768/1440) plus 8 expanded comparison states = 64; zero runtime exceptions/automated axe violations; standard states have no horizontal overflow |
| Fragment regression | All 12 checks pass on face/body pages: first click, repeat same-hash click, keyboard Enter, two malformed fragments and encoded direct link |
| Navigation/content boundaries | Both pillars retained; differences before cards and matching on-page link order at all widths; keyboard menu and nine linked internal destinations pass |
| Archive/crawl/schema | All five archive URLs load; representative archive noindex checks pass; unknown season and guide slugs 404; comparisons retain noindex and no unsupported Offer/Review/AggregateRating schema |
| Tracker API | Valid existing payload returns 200; empty payload 400 |
| Whitespace | `git diff --check` passes |

Temporary runner/report/screenshots: `/private/tmp/smartshopca-next16-verification/`; clean-install directory: `/private/tmp/smartshopca-next16-install-check/`. Browser checks executed independently through Chrome/CDP; optional supplied Playwright script not executed/counting as a pass. Initial browser attempt had no available tab; runner created a fresh tab and completed successfully. Initial sandbox build failed because Turbopack's CSS worker could not bind a port; permitted build succeeded. No permanent bundler workaround added.

Automated accessibility results do not establish complete conformance. No real-device/manual screen-reader, source/price refresh, field performance, public indexing/citation or live deployment verification in this upgrade. Prior 18-page build reports used the old framework's accounting; all 14 editorial/archive URLs were checked after upgrading.

## Dependency findings and limits

Compatible `npm audit fix --ignore-scripts` updates applied. Full audit still returns 13 affected package findings: 7 high/6 moderate, including propagated dependents. Production-only audit: 4 moderate, zero high/critical, in retained gray-matter/js-yaml/argparse/sprintf-js chain. High findings are in development glob tooling used by Tailwind/Next lint. No findings returned for Next.js or React; do not claim a clean audit or universal security guarantee. No forced Tailwind 4 migration or parser downgrade.

Next config officially supports ESLint 10, but bundled import/React/accessibility plugins retain older peer declarations. Installation warns, clean npm install and lint succeed; stricter package-manager modes may need follow-up. Decision, sources and tradeoffs: `docs/Research/NEXTJS_16_UPGRADE_2026-10-16.md`.

## Next work

Review remaining parser/toolchain advisories in a separate scoped change. Product origin/formula holds, monitored inbox, real Kit integration, affiliates, durable attribution and crawler/canonical release policy remain pending. Last production evidence is the October 15 old homepage/new-care-route 404 audit; no claim that local fixes are public.

No commit, push, deployment, purchases, outreach or account changes. Temporary production server/headless Chrome stopped after checks; existing preview processes left untouched. Canonical context, roadmap, technical specification, repository verification instructions and Day 10 issues updated. Day 9 remains the historical UX integration record.

## Local launcher and fixed-port correction — October 16

Added executable start/stop scripts and ignored PID/log state, with process-identity checks and a detached server. Founder clarified that the port must be selected from a cross-project plus Notion inventory, rather than assigned randomly on each start. Scan completed; **3300** selected for SmartShopCA, leaving **3200** to Resume Builder. Start/dev/production commands now agree. Busy 3300 is refused without switching ports or stopping another listener. Shell syntax and occupied-port/fixed-port/repeated-start/stop smoke checks pass. See `docs/Research/LOCAL_PORT_ASSIGNMENT_2026-10-16.md`. The app was restored on 3300 after checks; subsequent stop/start is under the founder's control.
