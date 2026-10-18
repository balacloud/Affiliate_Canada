# Codex Transition Handoff

> Date: 2026-05-09
> Purpose: Capture the transition from Claude Code-led scaffolding to Codex-led ownership, so future sessions can recover the project state quickly.

## Why This Document Exists

The project was originally scaffolded and documented through Claude Code sessions. Codex has now read the repo, traced the implementation, and established a current-state view of:

- what the project is trying to become
- what is actually implemented today
- where the documentation and code no longer fully match
- what the next execution priorities should be

This document is the bridge between the original Claude context and future Codex work.

## Canonical Sources Going Forward

When recovering project context, use these in order:

1. `CLAUDE_CONTEXT.md`
2. `docs/stable/GOLDEN_RULES.md`
3. `docs/stable/ROADMAP.md`
4. `docs/stable/TECH_SPEC.md`
5. `docs/status/PROJECT_STATUS_DAY3_SHORT.md`
6. `docs/versioned/KNOWN_ISSUES_DAY3.md`
7. This file: `docs/Research/Codex_Transition_Handoff.md`

Notes:

- `CLAUDE_CONTEXT.md` remains the best high-level state summary.
- This handoff document is specifically for the Claude → Codex transition.
- Where documents disagree, prefer the latest status-oriented docs over older memory notes.

## Product Summary

SmartShopCA.ca is a Canada-specific affiliate content site for the remote-work / home-office niche.

The operating model is:

- seasonal buying-guide campaigns
- curated picks instead of large catalogs
- email-first lead capture
- diversified affiliate monetization
- AI-search-friendly structure through JSON-LD and visible HTML structure

This is not intended to become a coupon site, price-comparison engine, or Amazon-first storefront.

## What Is Implemented Today

### Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- `gray-matter` for frontmatter parsing
- static content sourced from MDX files, but mostly used as data rather than rendered MDX

### Existing Routes

- `/` homepage
- `/[season]` seasonal landing pages
- `/guides/[slug]` guide page route
- `/about`
- `/api/track-click`

### Existing Components

- `SeasonBanner`
- `CollectionGrid`
- `DealCard`
- `ComparisonTable`
- `FAQBlock`
- `EmailCapture`
- `OutboundLink`
- `JsonLd`

### Existing Data Flow

- product data lives in `content/products/*.mdx`
- collection data lives in `content/collections/*.mdx`
- `lib/getProducts.ts` and `lib/getCollections.ts` parse frontmatter with `gray-matter`
- campaign definitions live in `config/campaigns.ts`

### Verified Runtime State

As of 2026-05-09:

- `npm run build` passes
- static pages generate successfully
- the app is a valid scaffold and deployable

## What Is Still Placeholder Or Missing

These are the main gaps between the intended product and the current code:

- Email capture is not wired to Kit yet. `EmailCapture` simulates success.
- Affiliate links are placeholders.
- Product images are empty.
- Guide pages are hardcoded in the route instead of MDX-driven.
- Individual product pages do not exist yet.
- `/privacy` does not exist yet.
- Product JSON-LD is basic and missing richer fields.
- Author attribution / E-E-A-T signals are incomplete.
- Visible HTML structure is only partially optimized for AI parsing.

## Documentation vs Code Drift

Codex found several places where the docs describe more than the code currently delivers:

1. `docs/stable/TECH_SPEC.md` references `app/deals/[slug]/page.tsx`, but that route does not exist.
2. Guides are described as MDX content, but `app/guides/[slug]/page.tsx` currently uses hardcoded route data.
3. Email platform notes drifted historically:
   - older memory notes still mention MailerLite
   - latest status documents and `CLAUDE_CONTEXT.md` point to Kit/ConvertKit
4. The spec mentions Privacy Policy in the footer/site structure, but there is no `/privacy` page yet.

This drift is normal for an early scaffold, but future sessions should distinguish between:

- architecture intention
- implemented behavior

## Codex Assessment

The repo is in a good state for a Phase 0 scaffold.

Strengths:

- clean, understandable structure
- strong documentation habit
- simple content model
- working build
- clear product positioning

Current limitation:

The codebase is still at scaffold maturity, not production-content maturity. The next work is mostly execution and refinement, not redesign.

## Recommended Next Steps

Codex recommends this execution order:

1. Add `/privacy`
2. Add author attribution and methodology blocks to content pages
3. Move guide pages from hardcoded route data to MDX-backed loading
4. Add individual product pages at `deals/[slug]`
5. Enrich Product JSON-LD and visible HTML structure
6. Wire Kit once API key and Form ID are available
7. Replace placeholder affiliate links and add real images

This sequence preserves the current architecture and closes the highest-value product gaps first.

## Naming Convention Guidance

No file-renaming project is urgent right now.

Current naming is somewhat inconsistent, but not dangerously so:

- `docs/Research` uses capitalized directory naming
- `docs/stable`, `docs/status`, and `docs/versioned` are lowercase
- some files use `DAYN` naming
- others use descriptive title-style names

Codex recommendation:

- do not rename existing folders/files during Phase 1 unless a rename directly unlocks delivery
- keep compatibility with the current structure for now
- prefer consistency for new files instead of churn for old files

Suggested forward convention:

- keep using the existing top-level buckets: `Research`, `stable`, `status`, `versioned`
- for new research/handoff docs, use descriptive Title_Case filenames
- for new dated status snapshots, include an explicit date in the filename if it is not part of the Day-series

If a cleanup pass is ever needed later, do it as a dedicated documentation refactor with no product work mixed into it.

## Working Rule For Future Codex Sessions

Before making product changes:

1. read the canonical docs listed above
2. verify whether the code matches the docs
3. update docs only when the implementation meaningfully changes

The main rule is simple:

Do not assume the docs are wrong, and do not assume the code is complete. Check both.
