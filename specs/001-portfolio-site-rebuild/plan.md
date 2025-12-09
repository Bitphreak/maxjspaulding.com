# Implementation Plan: Portfolio Site Rebuild

**Branch**: `001-portfolio-site-rebuild` | **Date**: 2025-12-08 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-portfolio-site-rebuild/spec.md`

## Summary

Rebuild maxjspaulding.com from legacy Jekyll to a modern Next.js static site. The site serves as Max Spaulding's professional portfolio with 6 pages: Home (business card), About (bio + resume), Experience (work history), Projects (portfolio), Contact (links), and 404. Implements dark theme design per style guide, fully static generation, responsive layout, and WCAG AA accessibility.

## Technical Context

**Language/Version**: TypeScript 5.x with Next.js 14.x (App Router)
**Primary Dependencies**: Next.js, React 18, Tailwind CSS 3.x
**Storage**: N/A (static site, no database)
**Testing**: Playwright (E2E), Lighthouse (accessibility/SEO audits)
**Target Platform**: Web (all modern browsers, mobile responsive)
**Project Type**: Web (frontend-only, static generation)
**Performance Goals**: Page load <3s, Lighthouse 90+ (accessibility, SEO)
**Constraints**: Static generation only, no API routes, no backend, minimal dependencies
**Scale/Scope**: 6 pages, single user portfolio, ~1000 monthly visitors expected

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Evidence |
|-----------|--------|----------|
| I. Simplicity First | PASS | No databases, no auth, no backend services, minimal dependencies |
| II. Fit-for-Purpose | PASS | Portfolio site using Next.js stack per constitution "Next.js Projects" rules |
| III. Predictable AI Development | PASS | Following defined file structure from constitution |
| IV. No Shared Infrastructure | PASS | Standalone project, no cross-project dependencies |
| V. No Overengineering | PASS | No microservices, message queues, Docker, monorepo, observability stacks |

**Required Stack Compliance** (Next.js Projects):
- [x] Next.js App Router
- [x] TypeScript
- [x] Tailwind CSS
- [ ] MDX (not required for portfolio, optional for future)

**Prohibited Features Check**:
- [x] No API routes
- [x] No backend servers
- [x] No databases
- [x] No CMS systems
- [x] No auth flows
- [x] Static rendering only

**GATE RESULT**: PASS - All constitution principles satisfied.

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-site-rebuild/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (N/A for static site)
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
app/
├── layout.tsx           # Root layout with Header, Footer, metadata
├── page.tsx             # Home page (business card)
├── about/
│   └── page.tsx         # About page (bio, career highlights, resume link)
├── experience/
│   └── page.tsx         # Experience page (work history timeline)
├── projects/
│   └── page.tsx         # Projects page (portfolio cards)
├── contact/
│   └── page.tsx         # Contact page (email, social links)
└── not-found.tsx        # Custom 404 page

components/
├── Header.tsx           # Navigation header
├── Footer.tsx           # Site footer
├── SocialIcons.tsx      # Reusable social link icons
├── ExperienceCard.tsx   # Work history entry component
├── ProjectCard.tsx      # Project portfolio card component
└── Container.tsx        # Max-width content wrapper

content/
├── experience.json      # Work history data
├── projects.json        # Project portfolio data
└── profile.json         # Personal info (name, title, location, links)

public/
├── resume.pdf           # Downloadable resume
├── favicon.ico          # Site favicon
└── og-image.png         # Open Graph social image

styles/
└── globals.css          # Tailwind base + custom dark theme variables

package.json
tailwind.config.ts
tsconfig.json
next.config.js
```

**Structure Decision**: Using the Next.js App Router structure per constitution requirements. Content stored as JSON files for easy editing without code changes. No `/contracts` directory needed as there are no APIs.

## Complexity Tracking

> No violations to justify. All constitution gates passed.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | N/A | N/A |
