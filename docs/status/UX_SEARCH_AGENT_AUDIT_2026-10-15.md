# SmartShopCA: attention, search and AI retrieval audit

October 15, 2026. Read-only application review using the SmartShopCA session skill and audit framework. Report saved; no application, deployment, crawler policy or account changes. This is a targeted audit, not a full medical-content, security, accessibility or performance certification.

## Evidence collected

Reviewed homepage, shared navigation, comparison cards/table/template, face content, methodology/About, metadata and source models. Retrieved local production homepage and face comparison using plain HTTP; content is present in initial HTML without JavaScript execution. Reused prior screenshot observations as layout evidence; no new device/usability study conducted. Prior axe checks do not measure cognitive accessibility or user comprehension.

Live HTTP observations:

| URL | Result |
|:--|:--|
| `https://www.smartshopca.ca/` | 200; H1 “Spring refresh your Canadian home office” |
| `https://www.smartshopca.ca/care/skincare/face-moisturizers` | 404 |
| `https://www.smartshopca.ca/robots.txt` | 404 |
| `https://www.smartshopca.ca/sitemap.xml` | 404 |
| `https://smartshopca.ca/` | 307 redirect to www, followed by 200 |
| Local homepage / face comparison | 200; redesigned content |
| Local robots.txt | 404 |

The local face comparison has `noindex, follow`, canonical pointing to the non-www domain, WebPage/BreadcrumbList JSON-LD and a semantic table. Homepage inherits title/description but has no explicit canonical link or JSON-LD. No sitemap/robots implementation exists in app/public. Absence of robots.txt is not equivalent to a crawl block; lack of sitemap does not prevent all discovery.

Lightweight HTMLParser count: approximately 454 main-content words on local homepage and 998 on face comparison, excluding script/style/header/footer. Counts are descriptive, not validated cognitive-load thresholds. Content order and relevance matter more than word count alone.

## Findings and verdicts

| Area | Verdict | Finding |
|:--|:--|:--|
| Low-attention usability | Needs revision | Calm typography/spacing and few candidates help, but long introduction/pillar panels and serial mobile cards delay useful decisions |
| Two-pillar identity | Good local foundation | Both top-level links remain visible; preserve this while shortening copy |
| Comparison hierarchy | High-priority improvement | Full candidate cards precede side-by-side table; 120px missing-photo placeholders add scrolling without information; significant repeated details |
| Attention support | Not established | No evidence of testing with people with attention/access needs. Do not market the design as ADHD-tested or infer diagnosis from attention span |
| Server readability | Verified locally | Main text, headings, lists, links, FAQs and comparison table are in HTTP response; no login/chat interface required |
| Public availability | High launch blocker | Redesigned comparison currently absent from public site |
| Index eligibility | Intentionally restricted | Both comparison route files emit noindex until readiness is published; keep this until evidence review completes |
| Discovery | Incomplete | Add sitemap with approved indexable pages and explicit crawler policy; check actual CDN/bot controls and search-engine URL inspection |
| Canonical consistency | Needs correction | Local metadata defaults to apex while live apex redirects to www; align final domain, redirects and per-page canonicals |
| Structured identity | Partial | Comparison author/date and breadcrumb markup present; stable organization/person/site identity could be improved. Extra markup is not a citation guarantee |
| Trust | Credible intent, incomplete operation | Founder-approved identity/background, disclosure, methodology and uncertainty are strengths; contact/corrections channel remains unconfirmed, products held, no completed expert/physical testing asserted |
| Claim traceability | Needs improvement | Source IDs exist in data but origin/ingredient/exclusion statements do not consistently render adjacent source links; source list alone makes claim verification harder |
| Original citation value | Unproven | Research synthesis may help, but no measured usage/citation evidence or systematic product-change history yet |
| Performance | Unknown | No current throttled-mobile/Core Web Vitals test conducted; build and automated accessibility passes are not speed evidence |

The current comparison headline is long and tentative (“Which face moisturizer should you compare…”). Prefer a concise descriptive title and a direct opening answer reflecting the actual state, e.g. “We cannot recommend either candidate yet: one lacks exact-product origin evidence; the other lacks a full ingredient list.” Never turn held research into a best-buy claim for brevity.

## Recommended information hierarchy

Homepage: short promise; two concise pillar entry points; direct face/body routes within care; brief trust summary; deeper explanation below. Keep seasonal preparing status honest. Do not create a mixed product feed.

Comparison: direct answer/status; two compact product summaries with fit, dated price basis, main trade-off and critical gap; essential side-by-side differences; expandable detailed evidence, policies and full source notes. Important uncertainty and affiliate disclosures remain visible. Native details can keep the supporting text in server HTML; avoid fetching important evidence only after a click. Choose expansion defaults through usability checks, not a universal reading-time rule.

At phone widths, provide an immediate compact differences summary; retain the full semantic table for detailed inspection instead of requiring sideways table scrolling as the sole quick decision path. Remove empty-photo blocks until useful licensed images are available.

## Search and agent distinctions

Crawlable means a system can retrieve a page. Extractable means relevant facts and relationships are understandable. Index eligible means search-engine controls permit inclusion. Citable means the page supports a useful answer and is selected by a system. These are separate; no schema, founder biography or robots entry guarantees selection.

Current local HTML is a good retrieval foundation. Shopping/action automation is not implemented or required for this editorial pilot. Typed records are internal content models, not a public API or agent tool. No need to expose private research/accounts or build an API solely for citations.

- [Google AI features guidance](https://developers.google.com/search/docs/appearance/ai-features), accessed October 15: standard technical/content requirements apply; Google supporting links require index/snippet eligibility. No special AI file or schema required, and indexing/serving is not guaranteed.
- [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots), accessed October 15: OAI-SearchBot search discovery and GPTBot training controls are independent; user-initiated ChatGPT-User retrieval is a separate mechanism. Recommend deciding search access separately from training policy. No crawler-specific production IP/CDN access tests performed.
- [Bing AI Performance announcement](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/), accessed October 15: citation reporting is available through Webmaster Tools; actual SmartShopCA reports not accessed.

## Ordered next work

1. Make local homepage/comparisons quicker to scan while preserving the evidence and both pillars. Test whether a reader can identify purpose, choose a section and explain a candidate's key limitation without reading the full page.
2. Upgrade to a supported Next.js release and rerun build, relevant tests and rendered checks. Current 14.2.35 remains unsupported; no upgrade was performed in this audit.
3. Complete exact-product evidence and editorial review for separate face/body pages; add adjacent source links, explicit criteria/version and useful original comparison conclusions. Keep unresolved content held/noindex.
4. Confirm contact/corrections and Kit integration; establish exportable attribution and privacy-consistent analytics.
5. Add reviewed sitemap/robots policy, consistent canonicals and appropriate identity markup. Do not add unsupported Product/Offer/ratings or llms.txt as a claimed requirement. Review preview exposure separately; noindex is not access control.
6. Confirm hosting plan/spend controls, obtain deployment authorization, deploy and verify public HTML/routes/redirects/bot access. Then submit/inspect in Google Search Console and Bing Webmaster Tools and measure referrals/citations where available.

## Framework drift

Existing pre-publish/audit docs contain old tech/finance campaign requirements, fixed best-overall/budget rankings and unvalidated AI visibility-lift claims. These are not applied as evidence of current skincare readiness. A later focused documentation repair should replace mechanical schema/page-count scoring with source-supported, pillar-specific checks. This audit does not mark the historical live deployment issues resolved.
