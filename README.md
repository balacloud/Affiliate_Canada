# SmartShopCA.ca

A Canada-first, multi-affiliate product-discovery platform with distinct editorial pillars for seasonal Canadian favourites and clean, sustainable Canadian-made skincare.

## What It Is (and Isn't)

| It IS | It is NOT |
|:--|:--|
| A decision helper with 3–7 curated picks per scenario | A coupon aggregator or deal spam site |
| Opinionated recommendations with "Choose this if / Avoid this if" | A neutral product listing |
| AI-search-friendly with full JSON-LD schema markup | An SEO keyword-stuffing play |
| Monetized via diversified affiliate stack | An Amazon.ca storefront |
| Email-first growth strategy | Dependent on organic search alone |
| One umbrella brand with focused editorial pillars | One mixed feed of unrelated products |

## Tech Stack

- **Framework:** Next.js 16.4.2 (App Router, TypeScript, static editorial pages) with React 19.3.1; Node 22
- **Styling:** Tailwind CSS
- **Content:** MDX files with frontmatter
- **Deployment:** Vercel
- **Email:** ConvertKit (Kit)
- **Analytics:** Vercel Analytics + custom outbound click logger

## Getting Started

```bash
# Install dependencies
npm install

# Start development server in the background
./start.sh

# Stop the server started by start.sh
./stop.sh
```

Use Node.js 22 (`nvm use` if available). SmartShopCA uses the fixed local port **3300**:
open [http://localhost:3300](http://localhost:3300). This assignment was checked
against other projects under `/Users/balajik/projects`, the Notion port inventory
and active listeners. Port 3200 belongs to Resume Builder. If 3300 is occupied,
the launcher reports the conflict without stopping another server or switching ports.
The scripts work from any directory and save the server log in `.local-run/dev.log`.
For a foreground server on the same port, use `npm run dev` and stop it with Ctrl+C.

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
- [AGENTS.md](AGENTS.md) — Repository-wide instructions and context routing for Codex and compatible agents
- [CLAUDE_CONTEXT.md](CLAUDE_CONTEXT.md) — Primary session-state guide used by both Claude Code and Codex
- [.codex/skills/smartshopca-session/SKILL.md](.codex/skills/smartshopca-session/SKILL.md) — Repository-local start, audit, checkpoint, and close workflow
- [docs/stable/SESSION_START_CHECKLIST.md](docs/stable/SESSION_START_CHECKLIST.md) — Neutral startup checklist for future sessions
- [docs/stable/BRAND_ARCHITECTURE.md](docs/stable/BRAND_ARCHITECTURE.md) — Canonical umbrella-brand and editorial-pillar boundaries
- [docs/stable/ROADMAP.md](docs/stable/ROADMAP.md) — Phase progress tracking
- [docs/stable/GOLDEN_RULES.md](docs/stable/GOLDEN_RULES.md) — Project rules and constraints
- [docs/stable/TECH_SPEC.md](docs/stable/TECH_SPEC.md) — Technical specification
- [docs/stable/PRE_PUBLISH_CHECKLIST.md](docs/stable/PRE_PUBLISH_CHECKLIST.md) — 30-point publish checklist
- [docs/Research/Codex_Transition_Handoff.md](docs/Research/Codex_Transition_Handoff.md) — Claude Code to Codex transition summary and current-state assessment
- [docs/Research/Niche_Thesis_And_Evidence.md](docs/Research/Niche_Thesis_And_Evidence.md) — Why this niche was chosen, what the docs support, and what remains a hypothesis

## Revenue Target

$2,000 CAD/month within 9–12 months via diversified affiliate programs (Best Buy Canada, Newegg, MaxBounty, financial CPA products).

## License

Private — all rights reserved.
