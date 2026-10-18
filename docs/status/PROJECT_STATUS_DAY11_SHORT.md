# Day 11 — persona/agent map and monitor definition, October 16–17, 2026

## Delivered

- Standalone interactive HTML: `docs/status/SMARTSHOPCA_PERSONA_AGENT_MAP_2026-10-16.html`. Shows six professional lenses, two customer hypothesis cards, existing project skills, the main assistant, new custom monitor and manual Claude Design handoffs. Explains Kit and the planned email flow, current holds and proposed recurring research workflow. This document is not an application route or published website.
- Operating profile: `docs/stable/PRODUCT_EVIDENCE_MONITOR.md`, a specialization within Product-Evidence/Editorial, not a seventh persona. Watches the four exact face/body candidates, records source-backed changes/coverage and preserves unknowns/holds. Contains the report contract, recurring-task prompt, activation steps and twelve planned behavioral evaluation cases.
- Custom agent definition: `.codex/agents/product-evidence-monitor.toml`, agent name `product_evidence_monitor`. Reuses the existing research skill; inherits the parent's model and permissions. Intended report-only writes, no public-content/status updates, outreach, spending, commits or publication. A prompt boundary does not enforce a narrower sandbox.
- Persona router, canonical context and roadmap updated. Existing skills were not replaced; no extra generic roles or background services installed.

## Verification and limits

TOML parsed with Python's bundled TOML parser; all three required fields present, no model/permission overrides. HTML parser checked unique IDs and fragment/relative-source links; inline JavaScript syntax check passed. Chrome/CDP at 360/768/1440: no horizontal overflow in checked states, no runtime exceptions or automated axe WCAG 2 A/AA + best-practice violations. All six routing scenarios and six role detail interactions checked at each width, plus keyboard role activation, expanded details and copy feedback. Screenshots visually reviewed. Automated checks are not full accessibility conformance.

Temporary browser runner/report/screenshots: `/private/tmp/smartshopca-evidence-agent/`. These are document interaction/configuration checks, not research-agent evaluation. No live product-source refresh, research baseline report, model accuracy test or recurring run executed. Agent discovery/invocation in a future session remains to verify. Website product records and all existing holds are unchanged. No app build rerun needed for this docs/config-only change.

Official OpenAI documentation, Kit, Health Canada Hotlist overview and Competition Bureau origin guidance were opened to ground the design. Account plan/features were not inspected. The report distinguishes source-supported method constraints from proposed operating choices.

## Recurrence status

**Not activated.** No scheduling tool is exposed here and no local task registration was created. The desktop app can run project-scoped scheduled tasks, subject to actual access and execution conditions. Suggested cadence is daily 09:00 America/Toronto, with a deeper weekly pass; not a user-confirmed schedule or freshness guarantee. First review a real baseline and the failure cases, then create/verify the scheduled task and its result visibility. Local machine/app/project availability matters. Worktree execution can omit current uncommitted files; checkpoint deliberately or choose a report-only local task with appropriate parent permissions.

Some gaps need supplied label/batch evidence or qualified judgment; daily browsing cannot guarantee their resolution. No exact-origin, ingredient safety, review completion, publishing readiness or commercial outcome asserted.

Kit is the intended subscriber/newsletter service, currently unconnected. It is separate from the business inbox and product-research agent.

## Next action

Run a bounded baseline research pilot on the existing four candidates using the profile, then review its citations/coverage/holds and exercise the listed failure cases. Dependency/canonical/crawl/contact/Kit/affiliate/attribution and product-evidence blockers remain; latest issue state remains `docs/versioned/KNOWN_ISSUES_DAY10.md` (no issue resolution in this task).

No commit, push, deployment, emails, external messages, purchases or account changes. Protected `.codex` write was specifically approved. Temporary headless browser stopped; local app on its assigned port was not changed. Original handoff artifacts and unrelated working-tree changes preserved.
