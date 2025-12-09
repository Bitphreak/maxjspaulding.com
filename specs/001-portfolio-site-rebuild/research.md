# Research: Portfolio Site Rebuild

**Branch**: `001-portfolio-site-rebuild` | **Date**: 2025-12-08

## Overview

This document captures technical decisions and research for the maxjspaulding.com portfolio site rebuild. No NEEDS CLARIFICATION items existed in the technical context—all decisions are driven by the constitution and project requirements.

---

## Decision 1: Next.js Version

**Decision**: Next.js 14.x with App Router

**Rationale**:
- Constitution mandates Next.js App Router for portfolio sites
- Next.js 14 is the current stable version with mature App Router support
- Built-in static generation (`output: 'export'`) meets SSG requirements
- Image optimization and metadata APIs simplify SEO implementation

**Alternatives Considered**:
- Next.js 13: Older, App Router was still stabilizing
- Astro: Not allowed per constitution (must use Next.js for portfolio)
- Plain React + Vite: No static generation tooling, more setup required

---

## Decision 2: Styling Approach

**Decision**: Tailwind CSS 3.x with custom color palette

**Rationale**:
- Constitution requires Tailwind CSS
- Utility-first approach aligns with "simplicity first" principle
- Easy to implement dark theme with CSS custom properties
- No runtime CSS-in-JS overhead (better performance)

**Implementation Notes**:
- Define color palette in `tailwind.config.ts` using style guide values
- Use `globals.css` for CSS custom properties fallback
- Mobile-first responsive design with Tailwind breakpoints

**Alternatives Considered**:
- CSS Modules: More verbose, less design system consistency
- Styled Components: Runtime overhead, violates simplicity principle
- Plain CSS: Harder to maintain design system tokens

---

## Decision 3: Content Management

**Decision**: JSON files in `/content` directory

**Rationale**:
- No CMS allowed per constitution
- JSON is simple, type-safe with TypeScript, easy to edit
- Supports static generation at build time
- Content changes don't require code changes

**Content Files**:
- `profile.json`: Name, title, location, email, social links
- `experience.json`: Array of work history entries
- `projects.json`: Array of project portfolio items

**Alternatives Considered**:
- MDX: Overkill for structured data (better for blog posts)
- YAML: Less native TypeScript support
- Hardcoded in components: Harder to maintain, mixes concerns

---

## Decision 4: Testing Strategy

**Decision**: Playwright E2E + Lighthouse CI

**Rationale**:
- Static site needs integration/E2E testing over unit tests
- Playwright verifies navigation, links, responsive behavior
- Lighthouse CI validates accessibility (90+), SEO (90+), performance
- Minimal test infrastructure aligns with simplicity principle

**Test Coverage**:
- Navigation between all pages works
- External links (email, LinkedIn, GitHub) have correct hrefs
- Resume PDF download link works
- Mobile responsive layout renders correctly
- 404 page displays for invalid routes

**Alternatives Considered**:
- Jest + React Testing Library: Better for component logic, but site has minimal logic
- Cypress: Heavier than Playwright, similar capabilities
- Manual testing only: Doesn't scale, can't automate CI checks

---

## Decision 5: Deployment Platform

**Decision**: Railway (static hosting)

**Rationale**:
- Per bootstrap.md, deployment target is Railway
- Railway supports Next.js static export
- Zero backend infrastructure needed
- Simple deploy pipeline from git push

**Configuration**:
- `next.config.js`: Set `output: 'export'` for static generation
- Railway: Auto-detect Next.js, build command `npm run build`
- No environment variables required (static site)

**Alternatives Considered**:
- Vercel: Better Next.js integration, but not the specified platform
- Netlify: Good static hosting, but not specified
- GitHub Pages: Works but Railway already set up

---

## Decision 6: SEO & Metadata

**Decision**: Next.js Metadata API

**Rationale**:
- Built into Next.js App Router
- No additional dependencies
- Type-safe metadata definitions
- Automatic Open Graph and Twitter card support

**Implementation**:
- Root `layout.tsx`: Default site metadata
- Per-page `metadata` exports: Page-specific titles/descriptions
- `public/og-image.png`: Social sharing image
- Semantic HTML: Proper heading hierarchy, landmarks

**Alternatives Considered**:
- next-seo package: Unnecessary, built-in API is sufficient
- Manual meta tags: Error-prone, harder to maintain

---

## Decision 7: Icon Implementation

**Decision**: Inline SVG components

**Rationale**:
- No icon library dependency (simplicity principle)
- SVGs are small, cacheable, accessible
- Easy to style with Tailwind classes
- Legacy site already has SVG icons to reference

**Icons Needed**:
- Email (envelope)
- LinkedIn logo
- GitHub logo
- ID card / resume
- External link indicator

**Alternatives Considered**:
- Heroicons/Lucide: Additional dependency
- Font Awesome: Heavy, requires font loading
- PNG/image icons: Not scalable, can't style with CSS

---

## Open Items (Content Dependencies)

These items are noted as dependencies in the spec. They don't block implementation but will need to be provided:

1. **Resume PDF**: Final version needed for `/public/resume.pdf`
2. **Extended biography**: Content for About page
3. **Work experience details**: Full history for Experience page (LinkedIn partially obscured)
4. **Project descriptions**: Portfolio items for Projects page
5. **Profile photo** (optional): If hero image desired on home page

**Recommendation**: Create placeholder content during implementation, replace with real content before deployment.
