# Canadian SaaS Opportunity Research — Reusable Prompt

> **Prepared:** 2026-10-13
> **Purpose:** Explore Canadian customer problems, existing software, unmet needs, pricing, and feasible experiments
> **Scope:** General opportunity discovery; not a decision to change SmartShopCA's direction

## Use

Copy the prompt below into any research-capable LLM in Deep Research mode. Adjust the founder profile and scope if needed. The defaults match a founder pursuing side income with approximately 14 hours per week and a preference for bootstrapping.

Ask for the complete Markdown report with direct source links. Evidence supports a shortlist for customer testing; it does not validate demand or authorize a build.

## Copy-ready prompt

```text
Research ten promising Canadian customer problems that a small SaaS
business could realistically address. Identify existing solutions,
remaining gaps, verified competitor pricing, and inexpensive ways to
test demand.

FOUNDER PROFILE — editable
- Goal: side income first, possible income replacement later.
- Time: approximately 14 hours per week.
- Funding: bootstrap; justify additional spending.
- Team: one technically capable founder, with limited specialist help.
- Geographic focus: Canada; identify province/language differences.
- Customer scope: individuals/households and Canadian small businesses.
  Clearly identify the segment and payer; compare consumer and business
  opportunities separately before explaining the final shortlist.
- Exclude businesses requiring inventory, a marketplace at scale, or
  large upfront investment from the recommended first experiments.

RESEARCH OBJECTIVE
Find specific recurring customer jobs with credible evidence of unmet
need and a plausible revenue path. Explore broadly rather than starting
from fashionable AI features or a preferred product idea.

“Top ten” means the ten strongest candidates supported by this research
for this founder profile, not a statistically proven ranking of Canada's
largest problems. If fewer than ten have credible support, say so.

Do not assume every major social problem can be solved by software.
Explain the particular workflow software could improve. If a service,
one-time tool, existing product, or public intervention fits better than
a subscription, state that and do not force it into the SaaS shortlist.

RESEARCH METHOD
1. Use primary Canadian statistics, relevant public/industry surveys,
   and direct customer evidence to identify candidate needs.
2. Investigate Reddit, RedFlagDeals, appropriate professional forums,
   software reviews, and customer questions for concrete experiences,
   workarounds, failed solutions, and buying behaviour.
3. Prefer recent customer evidence from the last 24 months. Label older
   studies, the actual survey year, population, and geographic scope.
4. Search for satisfied users and contrary evidence as well as complaints.
5. Verify current competitor features and prices through official pages
   or clearly described direct tests. Distinguish advertised capabilities
   from observed performance.
6. Deduplicate repeated stories and syndicated reporting. Separate
   representative statistics, self-selected anecdotes, and inference.
   Do not infer population prevalence from post counts or upvotes.
7. Report inaccessible sources, missing prices, and unknowns honestly.
   Do not invent interviews, source access, market sizes, conversion
   rates, willingness to pay, or financial forecasts.

FOR EACH OF THE TEN CANDIDATES, ANSWER
A. Customer and problem
- Who specifically experiences the problem? Who would pay?
- What event triggers it, and how frequently does it recur?
- What time, money, lost revenue, errors, stress, or missed opportunities
  does it cause? Separate measured costs from illustrative assumptions.
- What do customers actually do today? What evidence suggests they
  want a better outcome?

B. Existing solutions and gaps
- Identify the closest existing alternatives, including free tools,
  spreadsheets, service providers, and general AI assistants.
- Does the problem persist after customers use these alternatives?
- Identify a specific underserved segment or workflow, rather than
  assuming that competition means no opportunity.
- Distinguish missing features from gaps customers demonstrably value.
- Explain why Canadian context matters, if it does: actual workflows,
  provincial requirements, bilingual use, CAD billing, integrations,
  local access, or other sourced constraints. A Canadian label alone
  is not a competitive advantage.

C. Pricing and business model
- Provide verified competitor pricing with direct URL and access date.
- State currency, billing interval, per-seat/usage basis, annual-billing
  conditions, free tiers, and material limits. Mark quote-only pricing.
- Keep native-currency prices; add CAD conversions only with a sourced,
  dated exchange rate and clearly mark them as estimates.
- Suggest a possible pricing test, explicitly as an unvalidated
  hypothesis. Competitor prices do not prove willingness to pay for
  a new product.
- Explain who pays, what they pay for, and why payment would recur.
- Identify support, data, AI/API, acquisition, and maintenance costs
  that could undermine a low subscription price.

D. Product and execution
- Describe the smallest useful product in one sentence.
- Identify required integrations, data access/rights, specialist review,
  and operational dependencies. Assess material legal/privacy constraints
  through appropriate sources without claiming professional clearance.
- Assess what a solo founder can deliver and maintain within the profile.
- Explain why users would choose it over their current tools, including
  free AI assistants, and what would be difficult to copy if relevant.
- Identify one realistic first distribution route and switching barriers.
- Suggest the cheapest credible demand test: observation, manual service,
  prototype, paid pilot, or other appropriate method.
- State what evidence would make you narrow, reject, or defer the idea.

OUTPUT — Markdown
1. Executive finding: what evidence supports, contradicts, or leaves
   uncertain about the shortlist. Include research/access dates.
2. A compact ten-opportunity comparison table covering customer, job,
   frequency, evidence confidence, alternatives, pricing, gap, feasible
   product, distribution route, and founder feasibility.
3. Brief evidence-backed profiles of each candidate with direct citations.
4. Deeper analysis of the three strongest candidates: competitors,
   verified prices, proposed differentiation, payer, costs, dependencies,
   and testable assumptions. Explain why they were selected.
5. A comparison of consumer versus small-business opportunities for
   this founder, without assuming either category always wins.
6. An evidence ledger with source URL, date, geography/population,
   claim supported, source type, and limitations.
7. A two-week validation plan for the strongest candidate, capped at
   28 founder-hours. Include recruitment method, interview questions
   about actual behaviour, prototype/service if appropriate, and
   proposed continuation/rejection criteria. Label small-sample criteria
   as learning heuristics, not proof of market fit.
8. Remaining unknowns and the founder decisions needed before building.

RANKING
Compare severity/value, recurrence, reachable demand, payment evidence,
competition/gap, distribution, delivery cost, and founder feasibility.
Explain trade-offs in plain language and state evidence confidence.
Do not conceal uncertainty behind precise weighted scores. Missing
evidence is unknown, not automatically fatal. A large problem is not
automatically a good business, and a useful small business does not
require a large market or a proprietary dataset.

Do not recommend building a full application before the main customer,
payer, and delivery assumptions have been tested. Preserve conditional
conclusions rather than making the report sound like an investment pitch.
```
