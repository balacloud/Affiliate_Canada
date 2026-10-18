# SmartShopCA Agent Instructions

## Product boundary

SmartShopCA is one Canada-first discovery and affiliate platform with separate editorial pillars. The current intended pillars are:

- **Seasonal Canadian favourites** — a small, well-reviewed selection of useful or distinctive products Canadians prefer for the current season.
- **Canadian-made personal care and household products** — skincare and household categories such as laundry detergent and dishwashing liquid, evaluated through transparent, category-specific ingredient screening. Scope expanded and selected for launch with founder approval on 2026-10-14; initial skincare covers both face and body moisturizers in separate comparisons. Buyer context and launch readiness remain pending.

Keep the pillars visibly distinct in navigation, routes, content models, recommendations, evidence standards, and email preferences. They may share the SmartShopCA brand, design system, trust standards, analytics, affiliate infrastructure, and subscriber platform. Do not collapse them into one mixed product feed.

Use `docs/stable/BRAND_ARCHITECTURE.md` when changing positioning, navigation, taxonomy, routes, or pillar boundaries.

## Context routing

- Put new Claude Design handoff briefs, baseline bundles and returned outputs in dated task subfolders under `docs/Claude_Design_Handoff/`; use its README for the current handoff. Preserve original returned artifacts before integration.
- For task/persona selection, use `docs/stable/PERSONA_ROUTER.md`. Select one lead lens plus the reviews triggered by the task's actual changes; multiple lenses may apply sequentially within one assistant. This does not authorize spawning agents or external actions.
- For session start, resume, status, audit, checkpoint, or close requests, use `.codex/skills/smartshopca-session/SKILL.md`.
- Treat `CLAUDE_CONTEXT.md` as the canonical project-state file despite its legacy filename.
- Use `docs/stable/GOLDEN_RULES.md` for product and publishing constraints.
- Use `docs/stable/ROADMAP.md` for priorities; verify dated campaign assumptions against today's date and the code.
- Use `docs/stable/TECH_SPEC.md` when changing routes, components, data models, or APIs.
- Use `docs/stable/BUSINESS_PLAN_REVIEW_PERSONA.md` when reviewing the business plan, monetization strategy, validation gates, major expansion bets, or whether SmartShopCA should proceed, narrow, pivot, pause, or stop.
- For a fresh-agent critical review of the current business-plan draft, begin with `docs/Research/ASTRA_BUSINESS_PLAN_REVIEW_HANDOFF.md` and preserve its read-only first-pass boundary.
- Use `docs/stable/PRE_PUBLISH_CHECKLIST.md` and `docs/stable/MASTER_AUDIT_FRAMEWORK.md` before publishing or driving traffic.
- Read `PLAN.md` only when the full original product plan is relevant. It contains older single-pillar assumptions.

When documents disagree, prefer actual implemented behavior, then the latest dated status or decision document, then `CLAUDE_CONTEXT.md`, then older plans and memory notes. Surface material drift and repair the canonical documents when the task authorizes it.

## Domain guardrails

- Never fabricate price, availability, origin, review quality, certification, ingredient safety, or merchant claims.
- Treat personal-care and household ingredient or health claims as health-adjacent content. Prefer primary Canadian regulatory or scientific sources, preserve uncertainty, show the methodology and review date, and do not present SmartShopCA as providing medical advice. Keep category-specific evidence methods distinct; incomplete disclosure cannot establish a screening pass.
- Prefer language such as "ingredient-conscious" or a precisely defined screening result over absolute claims such as "safe", "non-toxic", or "hormone-safe" unless the claim is specifically supported and appropriately qualified.
- Keep affiliate relationships transparent and route affiliate CTAs through the shared tracking component.
- Do not place secrets, API keys, form IDs, or credentials in tracked documentation or source files.

## Verification and change control

- For framework work, read version-matched Next.js documentation in `node_modules/next/dist/docs/`; the upgrade guide is `01-app/02-guides/upgrading/version-16.md`. Installed packages and the lockfile determine the actual version.

- Preserve unrelated user changes in the working tree.
- Run the smallest relevant verification for a change. For application changes, run `npm run build` and the established non-interactive `npm run lint`; run `npm run test:editorial` for editorial gates, navigation helpers, or dependency/runtime changes. Next.js 16 builds do not run ESLint automatically.
- Do not claim a feature is live merely because it exists locally. Check git, the deployment source, and the live route when deployment status matters.
- A request to close or checkpoint a session authorizes updating the session/status documents. Commit only when the user explicitly requests a commit, save, checkpoint, or session close. Never push or deploy without explicit authorization.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
