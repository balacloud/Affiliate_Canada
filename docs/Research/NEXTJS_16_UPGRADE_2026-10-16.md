# Next.js 16 upgrade decision — October 16, 2026

## Question

How should SmartShopCA leave unsupported Next.js 14 while preserving the locally integrated R2 UX, evidence holds, archive URLs and tracker behavior?

## Decision

Upgrade directly to exact Next.js 16.4.2, React/React DOM 19.3.1, matching React types and eslint-config-next 16.4.2. Use ESLint 10.12.0 and Node 22 (`.nvmrc` and package engines); verification used Node 22.17.0. Use a maintained Node 22 patch when provisioning a new environment. The ESLint toolchain requires Node 22.13+ on this major. Retain Tailwind 3 and existing rendering/content policy. No new cache components, React Compiler, hosting change or deployment.

## Why

[Next.js support policy](https://nextjs.org/support-policy) lists 16 as Active LTS, 15 as Maintenance LTS and 14 as unsupported. The [October 14 security update](https://nextjs.org/blog/nextjs-security-update-october-14-2026) identifies 16.4.1/15.5.28 as patched releases. The npm registry reported latest stable 16.4.2, with a Node >=20.9 requirement and React 19 compatibility. Exact versions and the updated lockfile make this implementation reproducible; they still require future patch monitoring.

The [official upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-16) and bundled version-matched guide were reviewed. Only two routes used synchronous request parameters; both now await them. Next.js updated TypeScript to the automatic JSX runtime, ES2017 target and development type includes. Turbopack is the default; it builds successfully with permission for its local CSS-worker port. Sandbox EPERM is an environment restriction, not a reason to disable Turbopack.

[Next.js ESLint setup](https://nextjs.org/docs/app/api-reference/config/eslint) documents ESLint 10 support with config 16.4+. `next lint` is removed and builds no longer lint. The project now runs a separate flat-config ESLint CLI command, with Core Web Vitals and TypeScript rules and zero tolerated warnings. CommonJS test files permit require; intentionally ignored compatibility parameters may start with underscore. Documentation/prototype artifacts are outside the application lint target. Missing keys in comparison cell arrays were corrected without changing visible copy/data.

## Alternatives

- Maintenance-LTS 15 would require another major migration sooner; this small app has only two request-API call sites and no middleware, custom loaders, remote fonts or cache APIs to migrate.
- Canary/prerelease packages were not needed.
- ESLint 9 resolves older peer declarations but is now deprecated; ESLint 10 is supported by the selected Next config and passes the project's lint run. Some bundled plugins still declare peers only through 9. npm emits warnings; clean `npm ci --ignore-scripts` nevertheless succeeds without force or legacy-peer-deps. Strict-peer package managers may require revisiting this when plugin metadata catches up.
- Forced audit fixes would introduce a Tailwind 4 migration or downgrade the legacy frontmatter parser. Those are separate changes, rather than framework upgrade requirements.

## Remaining dependency audit

Compatible `npm audit fix --ignore-scripts` updates were applied. Final audit: 13 package findings (7 high, 6 moderate); production-only: 4 moderate, zero high/critical, in gray-matter → js-yaml → argparse → sprintf-js. Development findings include Tailwind 3 glob/selector dependencies and Next lint plugin glob dependencies. Counts include propagated affected packages, not 13 independent vulnerabilities. Next.js and React have no findings in the returned report; this is not a guarantee that the application is vulnerability-free.

The retained parser is used by legacy `lib/getProducts.ts`/`getCollections.ts`; no new upload/parser endpoint was added. Review/remove unused legacy parsing and plan tooling fixes separately; do not claim clean audit or infer reachability solely from a package count. Existing product evidence, inbox, Kit, affiliates, durable attribution and crawler/canonical blockers remain.

## Verification

See `docs/status/PROJECT_STATUS_DAY10_SHORT.md` for actual build, lint, test, install and browser results. No commit, push, deployment, spending, external messages or account changes.
