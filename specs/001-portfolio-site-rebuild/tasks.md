# Tasks: Portfolio Site Rebuild

**Input**: Design documents from `/specs/001-portfolio-site-rebuild/`
**Prerequisites**: plan.md (required), spec.md (required), data-model.md, research.md, quickstart.md

**Tests**: No automated test tasks included (not explicitly requested in spec). Manual verification via Lighthouse audits.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

Based on plan.md, this project uses Next.js App Router:
- **Pages**: `app/`
- **Components**: `components/`
- **Content**: `content/`
- **Types**: `types/`
- **Lib**: `lib/`
- **Styles**: `styles/`
- **Public**: `public/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization with Next.js, TypeScript, and Tailwind CSS

- [ ] T001 Initialize Next.js 14 project with TypeScript in repository root using `npx create-next-app@latest . --typescript --tailwind --app --src-dir=false`
- [ ] T002 [P] Configure tailwind.config.ts with dark theme color palette from style guide (#0D1117, #161B22, #33AFFF, #1DD6A5, #E6E8EB, #8B95A1, #303842)
- [ ] T003 [P] Configure next.config.js with `output: 'export'` for static generation
- [ ] T004 [P] Create styles/globals.css with Tailwind directives and dark theme CSS custom properties
- [ ] T005 [P] Create types/content.ts with Profile, ExperienceEntry, Project, NavLink, SocialLink interfaces from data-model.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T007 Create content/profile.json with placeholder data matching Profile interface (name, title, company, location, email, links, bio)
- [ ] T008 [P] Create content/experience.json with placeholder ExperienceEntry array (at least 2 entries)
- [ ] T009 [P] Create content/projects.json with placeholder Project array (at least 2 entries)
- [ ] T010 Create lib/content.ts with typed exports for profile, experience, and projects data
- [ ] T011 [P] Create placeholder public/resume.pdf (empty or placeholder PDF)
- [ ] T012 [P] Create public/favicon.ico with simple favicon
- [ ] T013 [P] Create public/og-image.png placeholder for Open Graph social sharing
- [ ] T014 Create components/Container.tsx with max-width wrapper (960px-1200px per style guide)

**Checkpoint**: Foundation ready - all content files exist, types defined, base styling configured

---

## Phase 3: User Story 1 - View Professional Identity (Priority: P1) 🎯 MVP

**Goal**: Visitor sees Max's name, title, location, and social links on home page (digital business card)

**Independent Test**: Load home page at localhost:3000, verify name/title/location display, click social icons to verify links

### Implementation for User Story 1

- [ ] T015 [P] [US1] Create components/SocialIcons.tsx with email, LinkedIn, GitHub icon components (inline SVG, styled with Tailwind)
- [ ] T016 [US1] Create app/page.tsx with business card layout displaying profile name, title, company, location from content/profile.json
- [ ] T017 [US1] Add SocialIcons component to app/page.tsx with mailto: link for email, external links for LinkedIn/GitHub
- [ ] T018 [US1] Add SEO metadata export to app/page.tsx (title: "Max Spaulding - Architect and Engineering Lead", description, Open Graph tags)
- [ ] T019 [US1] Style app/page.tsx with dark theme, centered card layout, responsive design

**Checkpoint**: Home page displays identity and working social links - MVP complete

---

## Phase 4: User Story 2 - Navigate Site Sections (Priority: P1)

**Goal**: Visitor can navigate between all site sections via consistent header navigation

**Independent Test**: Click each nav link, verify URL changes and page renders

### Implementation for User Story 2

- [ ] T020 [P] [US2] Create components/Header.tsx with navigation links (Home, About, Experience, Projects, Contact) and active state styling
- [ ] T021 [P] [US2] Create components/Footer.tsx with copyright text and optional social links
- [ ] T022 [US2] Create app/layout.tsx root layout with Header, Footer, metadata defaults, and Inter/Fira Code font configuration per style guide
- [ ] T023 [P] [US2] Create app/about/page.tsx placeholder with page title and SEO metadata
- [ ] T024 [P] [US2] Create app/experience/page.tsx placeholder with page title and SEO metadata
- [ ] T025 [P] [US2] Create app/projects/page.tsx placeholder with page title and SEO metadata
- [ ] T026 [P] [US2] Create app/contact/page.tsx placeholder with page title and SEO metadata
- [ ] T027 [US2] Add active link highlighting to Header.tsx using usePathname hook
- [ ] T028 [US2] Create app/not-found.tsx custom 404 page with navigation back to home

**Checkpoint**: All navigation works, placeholder pages exist, 404 handled

---

## Phase 5: User Story 3 - Learn About Max (Priority: P2)

**Goal**: Visitor sees extended bio, career highlights, and resume download on About page

**Independent Test**: Navigate to /about, verify bio content displays, click resume link to download PDF

### Implementation for User Story 3

- [ ] T029 [US3] Implement app/about/page.tsx with extended bio section from profile.bio.extended
- [ ] T030 [US3] Add career highlights/milestones section to app/about/page.tsx (can use hardcoded content or add to profile.json)
- [ ] T031 [US3] Add resume download button/link to app/about/page.tsx pointing to /resume.pdf
- [ ] T032 [US3] Style app/about/page.tsx with proper typography, spacing, and dark theme

**Checkpoint**: About page complete with bio and resume download

---

## Phase 6: User Story 4 - Review Work Experience (Priority: P2)

**Goal**: Visitor sees chronological work history with company, role, dates, and descriptions

**Independent Test**: Navigate to /experience, verify all positions display with correct formatting

### Implementation for User Story 4

- [ ] T033 [P] [US4] Create components/ExperienceCard.tsx displaying company, role, location, dates, description, highlights, optional tech tags
- [ ] T034 [US4] Implement app/experience/page.tsx loading experience.json and rendering ExperienceCard for each entry
- [ ] T035 [US4] Add "Current" badge styling for isCurrent=true entries in ExperienceCard.tsx
- [ ] T036 [US4] Style experience page with timeline or card layout, responsive design

**Checkpoint**: Experience page complete with all work history entries

---

## Phase 7: User Story 5 - Browse Projects Portfolio (Priority: P2)

**Goal**: Visitor sees project cards with titles, descriptions, technologies, and links

**Independent Test**: Navigate to /projects, verify project cards display, click links to verify external URLs

### Implementation for User Story 5

- [ ] T037 [P] [US5] Create components/ProjectCard.tsx displaying title, description, technologies array, and links (GitHub, live, demo)
- [ ] T038 [US5] Implement app/projects/page.tsx loading projects.json and rendering ProjectCard grid
- [ ] T039 [US5] Add external link icons to ProjectCard.tsx for GitHub/live/demo links
- [ ] T040 [US5] Style projects page with responsive grid layout (1 column mobile, 2-3 columns desktop)

**Checkpoint**: Projects page complete with portfolio cards

---

## Phase 8: User Story 6 - Contact Max (Priority: P2)

**Goal**: Visitor sees email and social profile links for contacting Max

**Independent Test**: Navigate to /contact, verify email and social links work

### Implementation for User Story 6

- [ ] T041 [US6] Implement app/contact/page.tsx with email display and mailto: link
- [ ] T042 [US6] Add LinkedIn and GitHub profile links to app/contact/page.tsx
- [ ] T043 [US6] Add optional call-to-action text (e.g., "Open to collaboration" or "Available for consulting")
- [ ] T044 [US6] Style contact page with centered layout and large clickable links

**Checkpoint**: Contact page complete with all contact methods

---

## Phase 9: User Story 7 - Experience Dark Theme Design (Priority: P3)

**Goal**: Cohesive dark theme across all pages with proper contrast and hover states

**Independent Test**: View all pages, verify colors match style guide, test hover states, check mobile responsiveness

### Implementation for User Story 7

- [ ] T045 [US7] Audit all components for consistent color usage (bg-background, text-primary, accent colors)
- [ ] T046 [US7] Add hover states to all interactive elements (links, buttons, cards) with accent color transitions
- [ ] T047 [US7] Verify and fix responsive breakpoints across all pages (mobile 320px+, tablet, desktop)
- [ ] T048 [US7] Add focus states for keyboard accessibility on all interactive elements

**Checkpoint**: Theme consistent across all pages, responsive design verified

---

## Phase 10: Polish & Cross-Cutting Concerns

**Purpose**: Final quality improvements and validation

- [ ] T049 [P] Replace placeholder content in content/profile.json with real data
- [ ] T050 [P] Replace placeholder content in content/experience.json with real work history
- [ ] T051 [P] Replace placeholder content in content/projects.json with real projects
- [ ] T052 [P] Replace public/resume.pdf with actual resume document
- [ ] T053 Run Lighthouse accessibility audit, fix any issues to achieve 90+ score
- [ ] T054 Run Lighthouse SEO audit, fix any issues to achieve 90+ score
- [ ] T055a Run Lighthouse performance audit, verify page load <3s (SC-002) and fix any blocking issues
- [ ] T055 Verify all external links work (email mailto:, LinkedIn, GitHub)
- [ ] T056 Test site on Chrome, Firefox, Safari, Edge
- [ ] T057 Test mobile responsiveness on real device or device emulator
- [ ] T058 Verify static export works (`npm run build` produces /out directory)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational completion - MVP
- **User Story 2 (Phase 4)**: Depends on Foundational completion - Can run parallel with US1
- **User Stories 3-6 (Phases 5-8)**: Depend on US2 (navigation must exist for page access)
- **User Story 7 (Phase 9)**: Depends on all other stories (polish pass)
- **Polish (Phase 10)**: Depends on all user stories complete

### User Story Dependencies

| Story | Can Start After | Dependencies |
|-------|----------------|--------------|
| US1 (Home) | Foundational | None |
| US2 (Navigation) | Foundational | None (parallel with US1) |
| US3 (About) | US2 | Navigation must exist |
| US4 (Experience) | US2 | Navigation must exist |
| US5 (Projects) | US2 | Navigation must exist |
| US6 (Contact) | US2 | Navigation must exist |
| US7 (Theme) | US1-US6 | All pages must exist |

### Parallel Opportunities

**Phase 1 Parallel (T002-T005)**: tailwind.config.ts, next.config.js, globals.css, types/content.ts
**Phase 2 Parallel (T008-T009, T011-T013)**: experience.json, projects.json, resume.pdf, favicon, og-image
**Phase 4 Parallel (T020-T021, T023-T026)**: Header.tsx, Footer.tsx, all placeholder pages
**Phase 10 Parallel (T049-T052)**: All content replacement tasks

---

## Parallel Execution Examples

### Example: Phase 1 Setup (4 parallel tasks)

```bash
# Launch all parallel setup tasks:
Task: "Configure tailwind.config.ts with dark theme colors"
Task: "Configure next.config.js with static export"
Task: "Create styles/globals.css with Tailwind directives"
Task: "Create types/content.ts with interfaces"
```

### Example: Phase 4 Navigation (6 parallel page creations)

```bash
# Launch all placeholder pages in parallel:
Task: "Create components/Header.tsx with navigation"
Task: "Create components/Footer.tsx"
Task: "Create app/about/page.tsx placeholder"
Task: "Create app/experience/page.tsx placeholder"
Task: "Create app/projects/page.tsx placeholder"
Task: "Create app/contact/page.tsx placeholder"
```

---

## Implementation Strategy

### MVP First (User Stories 1 + 2 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1 (Home page)
4. Complete Phase 4: User Story 2 (Navigation)
5. **STOP and VALIDATE**: Site has working home page with navigation
6. Can deploy as MVP - functional business card site

### Incremental Delivery

1. MVP (US1 + US2) → Deploy: Working home page with navigation
2. Add US3 (About) → Deploy: Bio and resume
3. Add US4 (Experience) → Deploy: Work history
4. Add US5 (Projects) → Deploy: Portfolio
5. Add US6 (Contact) → Deploy: Contact page
6. Add US7 (Theme polish) → Deploy: Final polished site
7. Complete Phase 10 → Production-ready with real content

### Single Developer Strategy

Follow phases sequentially in priority order:
1. Setup → Foundational → US1 → US2 (MVP)
2. US3 → US4 → US5 → US6 (P2 features)
3. US7 → Polish (Final quality pass)

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- No automated tests included (use manual Lighthouse audits per spec)
- Content files use placeholders initially - real content in Phase 10
- Static export verified as final task before deployment
- All pages independently testable once navigation (US2) is complete
