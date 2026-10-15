# SmartShopCA hosting review

Reviewed October 15, 2026. Research only; no accounts, paid plans, DNS, repository visibility or deployments changed.

## Decision status

The earlier recommendation of Netlify Free was preliminary, based on commercial-use eligibility and price, without Canadian community research or a deployment trial. Netlify is a candidate, not a selected migration destination. Neither Reddit anecdotes nor free-tier prices establish the best host for this application.

Keep domain registration, repository access and website hosting as separate decisions. Existing project records identify GoDaddy, GitHub and Vercel respectively. No account billing was inspected.

## Community findings

| Discussion | Finding | Evidence limit |
|:--|:--|:--|
| [r/webdev: Netlify credit-limit experience, May 21 2026](https://www.reddit.com/r/webdev/comments/1tjv4ae/dont_host_your_projects_on_netlify_unless_youre/) | User reports live sites unavailable after credits exhausted, plus account/support issues | Opened discussion; firsthand allegation, not independently verified incident history. Only credit-limit pause mechanism independently supported |
| [r/nextjs: moving away from Netlify, May 19 2026](https://www.reddit.com/r/nextjs/comments/1ti4rsi/hosting_provider_options_moving_away_from_netlify/) | Agency reports outages; commenters describe easier Vercel use and positive Workers experiences | Opened; mixed anecdotes, includes provider promotion; no measured reliability ranking |
| [r/nextjs: OpenNext experiences, February 21 2026](https://www.reddit.com/r/nextjs/comments/1rawl4x/is_opennext_worth_using_or_should_i_migrate_away/) | Both positive adapter experiences and production/local-runtime difficulties reported | Opened; projects and adapter versions differ; not proof our app will fail or succeed |
| [r/BuyCanadian: Canadian Node.js hosting, September 15 2026](https://www.reddit.com/r/BuyCanadian/comments/1wh3ry3/any_canadian_web_hosting_nodejs_suggestions/) | Leads include FullHost, WHC, ServaRica and StormWeb; distinguishes Canadian company from Canadian server location | Search-exposed post/comments only; direct open failed. StormWeb comment is provider promotion; some other users explicitly lack Node.js experience |
| [r/BuyCanadian: Canadian Web Hosting](https://www.reddit.com/r/BuyCanadian/comments/1r9g8f4/canadian_web_hosting/) | Mixed provider experiences; some positive support recommendations | Search-exposed excerpts, not full opened thread; at least one recommendation includes an affiliate link |

These searches are not a representative survey of Canadians or a consensus. Duplicate cross-posts were not counted as independent migration successes. Community feedback supplies failure modes to investigate, not uptime statistics.

## Primary-source checks

- [Netlify pricing](https://www.netlify.com/pricing/): Free 300 credits/month; Personal USD 9/month with 1,000 credits; production deployments 15 credits each, bandwidth 20 credits/GB, requests 2 credits/10,000. Credits are shared across activities. Illustratively, 20 production deploys alone consume 300 credits, leaving none for traffic/compute; this is arithmetic, not a measured SmartShopCA forecast. Preview/branch deploys are listed separately as unlimited; their traffic still matters.
- [Netlify pause documentation](https://docs.netlify.com/manage/accounts-and-billing/billing/resume-paused-projects/): credit exhaustion can pause online projects. Free does not imply uninterrupted availability at arbitrary usage.
- [Netlify commercial eligibility](https://www.netlify.com/blog/introducing-netlify-free-plan/): commercial projects allowed on ordinary Free; distinct from the restricted Open Source plan.
- [Netlify badge update](https://www.netlify.com/changelog/2026-08-19-pre-launch-toolbar-and-powered-by-netlify-badge/): new Free projects default to a visible badge; the page describes project-level controls. Verify actual account controls rather than assuming mandatory or absent branding.
- [Vercel commercial policy](https://vercel.com/docs/limits/fair-use-guidelines): Hobby is non-commercial; affiliate-primary sites explicitly commercial. [Pricing](https://vercel.com/pricing) lists Pro starting at USD 20/month, with usage terms. Actual current account plan is unknown.
- [Cloudflare pricing](https://developers.cloudflare.com/workers/platform/pricing/): free allowance and Workers Paid minimum USD 5/month; paid usage and other services may add charges. [Static asset billing](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/) differs from Worker execution.
- [OpenNext compatibility](https://opennext.js.org/cloudflare): adapter supports many Next.js features, but the retrieved version-support paragraph contains stale timing (Next.js 14 support “will be dropped Q1 2026”). Our repo is on Next.js 14.2.35; exact current adapter support/security maintenance must be resolved before recommending migration. No adapter installation or compatibility build performed.
- [StormWeb managed VPS](https://stormweb.ca/vps.php): lists Vancouver location, Node.js via CloudPanel and Nano CAD 19/month (before any applicable taxes/options). Provider statements establish advertised features, not independently measured uptime or full operational management scope. Ownership/control, deployment/rollback workflow, backup restore and renewal/add-on costs still need verification.
- FullHost homepage returned 403; no price or exact-plan compatibility verified. WHC and other Canadian leads not shortlisted as validated Next.js providers on the strength of generic shared-host reviews.

## App fit and next decision gate

Current app has nine mostly static editorial routes, static legacy archives, one click-log POST endpoint and planned Kit server-side signup. No ecommerce checkout, application database, remote image optimizer or complex ISR requirement is implemented. Hosting still must handle server endpoints; a static-only export would need those moved elsewhere.

Assess total monthly/annual cost including currency, taxes, renewal terms, real deployment frequency, bandwidth/bot traffic, runtime usage, logging and migration/maintenance time. Verify private personal GitHub repository access, custom domain/TLS, secrets, forms/API, preview isolation, rollback and cost limits. Canadian company ownership, Canadian data residency and good delivery performance to Canadian visitors are separate attributes.

Recommended sequence: keep current deployment unchanged while testing a disposable local/preview compatibility build for Cloudflare and checking Vercel's actual plan/usage. Compare a Canadian Node.js option if Canadian ownership/location matters to the founder. Netlify remains eligible but is not the default pick until credit budgeting and runtime behavior are assessed. No migration or paid subscription is authorized by this research request.

## Returned outside research — reviewed October 15

Founder supplied a report recommending a supported Next.js upgrade and Vercel Pro rather than migration. This is a reasonable low-maintenance recommendation, not proof of the cheapest host or founder approval to pay. It supersedes the earlier tentative Netlify preference as the recommendation for minimum operational change; no host/account changes were made.

Primary-source audit:

- [Next.js support policy](https://nextjs.org/support-policy) lists 14.x unsupported, 16.x Active LTS and 15.x Maintenance LTS. Upgrade to a supported patched version before launch. The absolute claim that unsupported versions never receive fixes is too strong: the policy permits rare out-of-policy patches. [Version 16 upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-16) requires Node 20.9+ and async request APIs, with React/types and lint changes also relevant. No upgrade has been implemented.
- [Vercel Pro](https://vercel.com/docs/plans/pro-plan) currently specifies USD 20/month platform fee, one deploying seat and USD 20 usage credit; additional deploying seats are USD 20 each. Verify actual team plan and other hosted projects before accepting a cost forecast.
- [Spend Management](https://vercel.com/docs/spend-management): the On-Demand Budget is not an all-in subscription invoice cap. Setting an amount alone does not stop usage. Optional Pause Production Deployments stops serving all production projects on the team; checks occur every few minutes, so spend can overshoot. AI Gateway/v0 usage is not stopped by this control. Notifications at 50/75/100% are supported. Do not configure a USD 40 on-demand amount under the assumption that the total invoice cannot exceed USD 40.
- The report's USD 40–50 reconsideration point, three-month period and 7–14-day upgrade window are proposed operating rules, not independently derived findings or approved founder budget.
- “Cloudflare Pages + Workers” is imprecise for this app: it needs a server runtime. [Current Cloudflare Next.js documentation](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/) recommends a Workers deployment path; Pages is for static export. The retrieved documentation now recommends vinext, with OpenNext documented separately. Recheck the current path and test compatibility if this alternative is reopened.

Practical next step: prepare and validate the framework upgrade locally, independently of a hosting migration. Purchase, production deployment and budget/pause settings still need founder authorization. Do not describe the report's “even if you don't accept” wording as permission.
