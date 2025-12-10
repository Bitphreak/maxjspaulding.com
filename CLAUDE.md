# CLAUDE.md — Project Instructions for Claude Code

## Project Overview

This is **maxjspaulding.com**, a personal portfolio site for Max Spaulding. It is being rebuilt from a legacy Jekyll site to Next.js with static generation.

## Quick Start

Read `bootstrap.md` for full project context including tech stack, design system, and site structure.

## Critical Constraints

**DO**:
- Use Next.js App Router with TypeScript
- Use Tailwind CSS for styling
- Generate static pages (SSG)
- Follow the file structure in `bootstrap.md`
- Keep dependencies minimal
- Explain any structural changes

**DO NOT**:
- Create API routes (unless explicitly requested)
- Add databases or CMS systems
- Implement authentication
- Use SSR without explicit justification
- Add unnecessary dependencies
- Apply patterns from other projects (e.g., App Empire)

## Key Files

| File | Purpose |
|------|---------|
| `bootstrap.md` | Full project context — read first |
| `.specify/memory/constitution.md` | Governance rules |
| `docs/tech_stack.md` | Technical decisions |
| `docs/styleguide.md` | Design system |
| `docs/sitemap.md` | Page structure |

## Design Tokens

```
Background:       #0D1117
Surface:          #161B22
Primary Accent:   #33AFFF
Secondary Accent: #1DD6A5
Text Primary:     #E6E8EB
Text Muted:       #8B95A1
Border:           #303842
```

## Workflow

All features use SpecKit commands:
1. `/speckit.specify` — Create specification
2. `/speckit.plan` — Design implementation
3. `/speckit.tasks` — Generate tasks
4. `/speckit.implement` — Execute

## Legacy Files (Reference Only)

The `_site/` directory and Jekyll files (`_config.yml`, `*.html`, `*.markdown`) contain the old site. Use for **content reference only** — do not copy styles or layouts.

## Owner Info

- Name: Max Spaulding
- Title: Architect and Engineering Lead
- Location: San Francisco, CA
- Email: maxjspaulding@gmail.com
- GitHub: bitphreak
- LinkedIn: maxjspaulding

## Active Technologies
- TypeScript 5.x with Next.js 14.x (App Router) + Next.js, React 18, Tailwind CSS 3.x (001-portfolio-site-rebuild)
- N/A (static site, no database) (001-portfolio-site-rebuild)
- TypeScript 5.x + Next.js 14.x, React 18.x, react-markdown (lightweight markdown renderer) (002-markdown-bio)
- JSON files (content/profile.json, content/experience.json) - no changes needed (002-markdown-bio)

## Recent Changes
- 001-portfolio-site-rebuild: Added TypeScript 5.x with Next.js 14.x (App Router) + Next.js, React 18, Tailwind CSS 3.x
