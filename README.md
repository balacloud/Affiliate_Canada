# SmartShopCA.ca

A Canada-specific, quarterly seasonal deals and buying-guide website for Canadian consumers.

## What It Is (and Isn't)

| It IS | It is NOT |
|:--|:--|
| A decision helper with 3–7 curated picks per scenario | A coupon aggregator or deal spam site |
| Opinionated recommendations with "Choose this if / Avoid this if" | A neutral product listing |
| AI-search-friendly with full JSON-LD schema markup | An SEO keyword-stuffing play |
| Monetized via diversified affiliate stack | An Amazon.ca storefront |
| Email-first growth strategy | Dependent on organic search alone |

## Tech Stack

- **Framework:** Next.js 14+ (App Router, TypeScript, SSG/ISR)
- **Styling:** Tailwind CSS
- **Content:** MDX files with frontmatter
- **Deployment:** Vercel
- **Email:** ConvertKit (Kit)
- **Analytics:** Vercel Analytics + custom outbound click logger

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
smartshopca/
├── app/                    # Next.js App Router pages
├── components/             # React components
├── content/                # MDX content (products, collections, guides)
├── config/                 # Campaign configuration
├── lib/                    # Utility functions
├── types/                  # TypeScript interfaces
└── docs/                   # Documentation
    ├── stable/             # Master references (rarely change)
    ├── Research/           # Decision docs & audit history
    ├── status/             # Session summaries
    └── versioned/          # Known issues by session
```

## Documentation

- [PLAN.md](PLAN.md) — Consolidated project vision, spec, and roadmap
- [CLAUDE_CONTEXT.md](CLAUDE_CONTEXT.md) — Session guide for Claude Code
- [docs/stable/ROADMAP.md](docs/stable/ROADMAP.md) — Phase progress tracking
- [docs/stable/GOLDEN_RULES.md](docs/stable/GOLDEN_RULES.md) — Project rules and constraints
- [docs/stable/TECH_SPEC.md](docs/stable/TECH_SPEC.md) — Technical specification
- [docs/stable/PRE_PUBLISH_CHECKLIST.md](docs/stable/PRE_PUBLISH_CHECKLIST.md) — 30-point publish checklist

## Revenue Target

$2,000 CAD/month within 9–12 months via diversified affiliate programs (Best Buy Canada, Newegg, MaxBounty, financial CPA products).

## License

Private — all rights reserved.
