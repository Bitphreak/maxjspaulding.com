# maxjspaulding.com — Project Bootstrap

**Purpose**: Professional portfolio site for Max Spaulding (Entrepreneur, CTO/Architect, Founder).

**Status**: Rebuilding from legacy Jekyll site to Next.js.

---

## Quick Context

This is a personal portfolio/CV site being rebuilt with modern tooling. The previous Jekyll implementation is being replaced with Next.js + MDX + Tailwind CSS. All legacy Jekyll files should be ignored for styling/layout—only used for content reference.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Content | MDX (if blog content added) |
| Rendering | Static Site Generation (SSG) |
| Deployment | Railway |

**Key Constraints**:
- No databases, CMS, or backend services
- No API routes unless explicitly requested
- No authentication
- Static generation only
- Minimal dependencies

---

## Site Structure (Target)

```
/                   → Home / Landing (business card + highlights)
/about              → Extended bio, career timeline, optional CV download
/experience         → Detailed work history, roles, achievements
/projects           → Portfolio showcase with project cards
/contact            → Contact info, social links
/blog               → Optional, may redirect to bitphreak.dev
/resume.pdf         → Downloadable CV
```

---

## Design System

**Theme**: Dark-first, modern, technical, minimalist

**Colors**:
| Purpose | Hex |
|---------|-----|
| Background | `#0D1117` |
| Surface/Cards | `#161B22` |
| Primary Accent | `#33AFFF` (cyan-blue) |
| Secondary Accent | `#1DD6A5` (teal) |
| Text Primary | `#E6E8EB` |
| Text Muted | `#8B95A1` |
| Border | `#303842` |
| Code BG | `#0B0F13` |

**Typography**:
- Sans-serif: Inter, Poppins, or similar
- Monospace: Fira Code, Source Code Pro
- Body: 16px, line-height 1.6
- H1: 2.5rem, H2: 2rem, H3: 1.5rem

**Layout**:
- Max-width: 960px–1200px
- Spacing units: 8px, 16px, 24px, 32px
- Dark surface cards with subtle borders
- Minimal navigation, dark header/footer

---

## File Structure (Next.js)

```
app/
  layout.tsx
  page.tsx              → Home
  about/page.tsx
  experience/page.tsx
  projects/page.tsx
  contact/page.tsx
  blog/page.tsx         → Optional
components/
  Header.tsx
  Footer.tsx
  ProjectCard.tsx
  ...
content/                → MDX content if needed
public/
  resume.pdf
  favicon.ico
  ...
styles/
  globals.css
```

---

## Content Reference (from legacy Jekyll)

**Owner Info**:
- Name: Max Spaulding
- Title: Architect and Engineering Lead
- Location: San Francisco, CA
- Email: maxjspaulding@gmail.com
- GitHub: bitphreak
- LinkedIn: linkedin.com/in/maxjspaulding

**Legacy Pages** (for content extraction only):
- `index.html` — Business card layout with icons
- `portfolio.html` — Project listing template
- `about.markdown` — Placeholder (needs real content)

---

## Governance

This project follows the constitution at `.specify/memory/constitution.md`.

**Key Rules**:
1. Simplicity First — No unnecessary complexity
2. Fit-for-Purpose — Minimal technology for a portfolio site
3. Predictable AI Development — Follow defined file structures
4. No Shared Infrastructure — Standalone project
5. No Overengineering — No enterprise patterns

---

## Working with This Project

1. **Reference Docs**: See `docs/` for detailed guidance
   - `docs/tech_stack.md` — Technical decisions
   - `docs/styleguide.md` — Design system details
   - `docs/sitemap.md` — Page structure
   - `docs/manifest.md` — Governance manifest

2. **SpecKit Workflow**: All features go through SpecKit
   - `/speckit.specify` → Create feature spec
   - `/speckit.plan` → Design implementation
   - `/speckit.tasks` → Generate task list
   - `/speckit.implement` → Execute tasks

3. **Constitution**: Always check `.specify/memory/constitution.md` for constraints

---

## Session Checklist

When starting a new session:
- [ ] Read this bootstrap file
- [ ] Check constitution for constraints
- [ ] Review any active specs in `specs/` directory
- [ ] Check `docs/` for detailed guidance on specific areas
