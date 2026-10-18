# SmartShopCA live-versus-local audit — October 18, 2026

Read-only audit following the approved safe-file commits. No deployment, production form submission, buying-link click, tracker POST, account mutation or push. Browser-fetch service could not access the domain; direct public HTTPS retrieval with curl succeeded. Responses and public JavaScript saved temporarily under `/private/tmp/smartshopca-live-audit-2026-10-18/`.

## Deployment identity

The live response identifies Vercel. The apex responds 307 to www, followed by 200. `git ls-remote` verified remote main as `a194fedcba1bd4c4c1e61e01263a8f1668ec54fa` (commit dated March 27). The live content is consistent with the older scaffold, but neither remote HEAD nor asset hashes establish the deployed Git SHA. **Deployed commit UNKNOWN.** No Vercel CLI, GitHub CLI, Vercel connector or local `.vercel/project.json` is available. No account dashboard was accessed. Vercel's push/deployment trigger and production-branch settings remain UNKNOWN; do not infer that a future git push would avoid deployment.

## Live route results

| URL | Result | Observed behavior |
|:--|:--|:--|
| `https://smartshopca.ca/` | 307 → www → 200 | Redirect to canonical public host |
| `https://www.smartshopca.ca/` | 200 | Spring Setup 2026; spring home-office headline; email form; affiliate disclosure |
| `https://www.smartshopca.ca/about` | 200 | Legacy About page reachable |
| `https://www.smartshopca.ca/q2-spring-2026` | 200 | Five legacy products and merchant buttons; prices checked March 2026 |
| `https://www.smartshopca.ca/guides/best-wfh-monitors-canada-2026` | 200 | Legacy monitor guide; email form and affiliate disclosure |
| `https://www.smartshopca.ca/privacy` | 404 | No privacy policy at the intended route |
| `https://www.smartshopca.ca/care/skincare/face-moisturizers` | 404 | Local redesign not available at this live URL |
| `https://www.smartshopca.ca/robots.txt` | 404 | No served robots file at this path |
| `https://www.smartshopca.ca/sitemap.xml` | 404 | No served sitemap at this path |

No robots meta was found in inspected homepage HTML. This is not a measurement of actual search-engine indexing. `config/campaigns.ts` retains `ACTIVE_CAMPAIGN = Q2_2026_SPRING` with June 30 end date; the redesigned local homepage no longer consumes it.

## Every product's destination

Live spring collection buttons are labelled "View at [merchant] (affiliate link)". They are client buttons rather than ordinary merchant anchors. Serialized live page data exposes the following five explicit placeholder destinations; no buttons were clicked.

| Product | Merchant | Live destination classification |
|:--|:--|:--|
| LG 27GP850-B UltraGear 27-inch Monitor | Best Buy Canada | Placeholder: `/placeholder-affiliate-link/lg-27gp850b` |
| Jabra Evolve2 55 Wireless Headset | Best Buy Canada | Placeholder: `/placeholder-affiliate-link/jabra-evolve2-55` |
| Logitech Brio 4K Ultra HD Webcam | Newegg Canada | Placeholder: `/placeholder-affiliate-link/logitech-brio` |
| Elgato Key Light Mini | Amazon.ca | Placeholder: `/placeholder-affiliate-link/elgato-key-light-mini` |
| Secretlab Titan Evo 2026 Ergonomic Chair | Secretlab Canada | Placeholder: `/placeholder-affiliate-link/titan-evo` |

These are not approved-program tracked destinations. Application/approval account status remains UNKNOWN; labels alone do not prove a relationship. No current merchant price, stock or performance claim was independently verified during this audit.

Local records retain the same five legacy MDX placeholders for history, but their served seasonal/guide URLs are archived without commerce. Current skincare records are different:

| Exact local candidate | Merchant link state | Publication state |
|:--|:--|:--|
| Marcelle Moisture Cream, 50 mL jar | `kind: none`, affiliate status `none`, no purchase URL | Research hold |
| Riversol Daily Moisturizing Cream, 50 mL | `kind: none`, status `researched`, no purchase URL | Research hold |
| ATTITUDE Sensitive Skin Body Lotion Unscented, 473 mL | `kind: none`, status `none`, no purchase URL | Research hold |
| Rocky Mountain Soap Co. Scent Free Dry Skin Body Butter, 55 g | `kind: none`, status `none`, no purchase URL | Research hold |

Their manufacturer/evidence links are source citations, not affiliate purchase CTAs. No held product has been cleared by this audit.

## Email, privacy and disclosure

Live homepage contains an enabled required email input and "Get the Guide" form, without a privacy link in its footer. `/privacy` returns 404. The publicly served homepage JavaScript contains a submit handler that prevents default submission, logs `Email capture`, sets a loading state, then switches to success after a 500 ms timeout. The success copy promises an inbox message. The inspected handler contains no MailerLite or Kit provider request. No email address was submitted to exercise it.

The local compatibility wrapper no longer simulates success; homepage displays an unavailable notice until a real subscription action/configuration exists. Kit, formerly ConvertKit, replaced the historical MailerLite plan in the March 30 session record; account access/current plan and subscriber totals are not verified here.

Affiliate disclosure is present in the live global footer and explicitly visible on inspected homepage/campaign/guide responses. Disclosure does not make placeholder destinations genuine or stale prices current.

## Metrics and costs: verified limits

- Google Search Console: **UNKNOWN**. Repository records setup pending; no verification meta observed. DNS or account-based verification could exist without a meta tag, so absence is not proof of no account.
- Vercel Analytics configuration/traffic totals: **UNKNOWN**. No analytics package in the current app dependencies/layout and no standard Vercel/Google analytics marker in inspected homepage HTML; no dashboard queried. This does not establish zero visits.
- Click totals: **UNKNOWN**. Current API validates payload and logs to console; no durable reporting store is implemented. Production logs were not accessed and no synthetic production click was generated.
- Subscriber/revenue totals: **UNKNOWN**. No provider, network or payment dashboards accessed. Do not convert missing data into zero.
- Domain: roadmap records C$15.99/year. Renewal date, invoice/current renewal price and registrar/account details **UNKNOWN**.
- Kit free-tier signup and Vercel hosting are recorded historically. Actual current plan, invoices, paid tools, ad spend and combined costs **UNKNOWN**.

## Safety finding and proposed minimum intervention

**Confirmed:** live signup shown while `/privacy` is missing; five placeholder buying destinations presented through affiliate-labelled buttons; March prices and spring campaign still served. The current local app already mitigates several issues, but its existence is not a production fix.

Propose a separately approved paused-state deployment: hide the email form and fake success path; suppress placeholder buying buttons; add a prominent paused/content-under-review banner and noindex while retaining disclosure and basic informational pages. Noindex alone does not hide the form or disable misleading commerce. This is narrower than launching the full redesign or refreshing Q4 products. Exact deployment source and trigger settings must be confirmed before any release; the precise verified candidate should be reviewed and built before publishing.

**No safety code or deployment performed.** This is the original request's step-5 approval gate. Do not push the current branch as a substitute: it includes flagged older history and may trigger Vercel automatically.

## Approved commit checkpoint and checks

Only the 56 changed paths classified commit in the reviewed inventory were included in these five new commits:

- `1706d2d` — comparison UX and evidence navigation.
- `526b7fe` — supported framework/runtime/lint.
- `7676dd5` — local lifecycle and fixed port 3300.
- `67ffca4` — research-only monitor/persona map.
- `4269f92` — governance and dated implementation records.

Fresh October 18 commands: lint exit 0; build exit 0 (17 generated static entries, TypeScript included); editorial tests exit 0 (26 passed, no failures/skips). No application fixes were needed to achieve those passes. The audit/snapshot documents do not change application behavior.

The original four unpushed commits still contain 25 ask-classified paths. They were not rewritten or removed. Current remaining uncommitted work is the ask/ignore group: seven strategy/visual drafts, three loose superseded artifacts and one newline-only edit. No blanket add, destructive cleanup, account changes or global Git configuration edits. Git used its existing automatically inferred local author identity; that metadata was not changed.
