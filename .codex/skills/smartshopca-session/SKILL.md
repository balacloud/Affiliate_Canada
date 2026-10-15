---
name: smartshopca-session
description: Start, resume, audit, checkpoint, or close a SmartShopCA project session using the repository's canonical state, issue, roadmap, and verification records.
---

# SmartShopCA Session

Use this skill for project lifecycle work. Do not start or stop the development server unless the user separately asks.

## Source precedence

Resolve conflicts in this order:

1. actual code and observable runtime behavior
2. latest dated status or decision document
3. `CLAUDE_CONTEXT.md`
4. stable roadmap and technical specification
5. older plans, research, and memory notes

Report meaningful drift instead of silently choosing a convenient source.

## Start, resume, or status

Read:

1. `AGENTS.md`
2. `CLAUDE_CONTEXT.md`
3. `docs/stable/GOLDEN_RULES.md`
4. `docs/stable/ROADMAP.md`
5. the latest `docs/status/PROJECT_STATUS_*.md`
6. the matching latest `docs/versioned/KNOWN_ISSUES_*.md`

Then inspect `git status --short --branch`.

Read additional documents only when relevant:

- product identity or information architecture: `docs/stable/BRAND_ARCHITECTURE.md`
- routes, components, types, or APIs: `docs/stable/TECH_SPEC.md`
- publishing or traffic readiness: `docs/stable/PRE_PUBLISH_CHECKLIST.md` and `docs/stable/MASTER_AUDIT_FRAMEWORK.md`
- transition history: `docs/Research/Codex_Transition_Handoff.md`
- original full plan: `PLAN.md`

Return the current version, implemented state, live/deployment state if known, blockers, and the single highest-leverage next task. Distinguish manual dependencies from work the agent can complete.

## Audit

Use the repository audit framework. Verify claims against code and, when current or live behavior matters, the deployed site. Do not treat unchecked boxes or old status prose as evidence. Health-adjacent skincare claims require primary-source verification and cautious wording.

## Checkpoint or close

Inspect the diff and verification results before writing the close record. Update only documents affected by the session:

- `CLAUDE_CONTEXT.md` for current state, session log, issues, and next priorities
- a new dated/day status snapshot when work was material
- the matching known-issues snapshot when issue state changed
- `docs/stable/ROADMAP.md` when completion or priorities changed
- `docs/stable/TECH_SPEC.md` when architecture or interfaces changed
- `docs/stable/GOLDEN_RULES.md` only for a durable new rule
- `memory/MEMORY.md` or its linked notes only for durable decisions

Run relevant verification and record unknown or failing checks honestly. A close request may include a local commit when the user asked to save, checkpoint, commit, or close the session. Do not push or deploy without explicit authorization.

## Product invariant

SmartShopCA is an umbrella Canadian discovery platform with distinct seasonal-favourites and clean-skincare pillars. Shared infrastructure is encouraged; mixed, contextless product recommendations are not. Use `docs/stable/BRAND_ARCHITECTURE.md` for the maintained boundary.
