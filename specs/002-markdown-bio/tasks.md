# Tasks: Markdown Bio Rendering

**Input**: Design documents from `/specs/002-markdown-bio/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, quickstart.md

**Tests**: No automated test tasks included (not explicitly requested in spec). Manual verification via acceptance scenarios.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

Based on plan.md, this project uses Next.js App Router:
- **Components**: `components/`
- **Pages**: `app/`
- **Content**: `content/`

---

## Phase 1: Setup

**Purpose**: Install dependency and create shared component

- [ ] T001 Install react-markdown package via `npm install react-markdown`
- [ ] T002 Create components/Markdown.tsx with styled component overrides for a, strong, em, p elements

**Checkpoint**: Markdown component ready for use in pages

---

## Phase 2: User Story 1 - View Formatted Bio Content (Priority: P1) 🎯 MVP

**Goal**: Visitor sees extended bio with rich text formatting on About page

**Independent Test**: Navigate to /about, verify markdown syntax in bio (bold, italic, links) renders as formatted text

### Implementation for User Story 1

- [ ] T003 [US1] Update app/about/page.tsx to import Markdown component
- [ ] T004 [US1] Replace bio.extended paragraph split/map with Markdown component in app/about/page.tsx
- [ ] T005 [US1] Verify About page renders markdown formatting correctly (manual test)

**Checkpoint**: About page displays formatted bio - MVP complete

---

## Phase 3: User Story 2 - View Formatted Experience Descriptions (Priority: P2)

**Goal**: Visitor sees job descriptions with rich text formatting on Experience page

**Independent Test**: Navigate to /experience, verify markdown in descriptions and highlights renders as formatted text

### Implementation for User Story 2

- [ ] T006 [US2] Update components/ExperienceCard.tsx to import Markdown component
- [ ] T007 [US2] Replace description text with Markdown component in components/ExperienceCard.tsx
- [ ] T008 [US2] Replace highlight text items with Markdown component in components/ExperienceCard.tsx
- [ ] T009 [US2] Verify Experience page renders markdown formatting correctly (manual test)

**Checkpoint**: Experience page displays formatted descriptions and highlights

---

## Phase 4: User Story 3 - Author Formatted Content (Priority: P3)

**Goal**: Content author can use markdown syntax in JSON files and see formatted output

**Independent Test**: Edit profile.json with markdown syntax, refresh page to verify formatting renders

### Implementation for User Story 3

- [ ] T010 [US3] Update content/profile.json bio.extended field to use markdown syntax (bold, italic, links)
- [ ] T011 [US3] Verify content updates render correctly on About page (manual test)

**Checkpoint**: Content authoring with markdown confirmed working

---

## Phase 5: Polish & Validation

**Purpose**: Final verification and build confirmation

- [ ] T012 Verify all external links from markdown open in new tab with security attributes
- [ ] T013 Test HTML injection attempt in content fields is blocked (add `<script>` tag, verify it doesn't execute)
- [ ] T014 Run `npm run build` to verify static export succeeds
- [ ] T015 Verify page load time remains under 3 seconds

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **User Story 1 (Phase 2)**: Depends on Setup completion (Markdown component must exist)
- **User Story 2 (Phase 3)**: Depends on Setup completion (can run parallel with US1)
- **User Story 3 (Phase 4)**: Depends on US1 completion (need About page rendering markdown)
- **Polish (Phase 5)**: Depends on all user stories complete

### User Story Dependencies

| Story | Can Start After | Dependencies |
|-------|----------------|--------------|
| US1 (About page) | Setup | Markdown component |
| US2 (Experience page) | Setup | Markdown component (parallel with US1) |
| US3 (Content authoring) | US1 | About page must render markdown |

### Parallel Opportunities

**Phase 1**: T001 and T002 are sequential (T002 needs package installed)
**Phase 2-3**: US1 and US2 can run in parallel after Setup completes

---

## Parallel Example: After Setup

```bash
# Once Phase 1 completes, launch both user stories in parallel:
Task: "Update About page to use Markdown component"
Task: "Update ExperienceCard to use Markdown component"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (install package, create component)
2. Complete Phase 2: User Story 1 (About page)
3. **STOP and VALIDATE**: About page shows formatted markdown
4. Can deploy as MVP - formatted bio working

### Incremental Delivery

1. Setup → US1 → Deploy: About page with markdown bio
2. Add US2 → Deploy: Experience page with markdown descriptions
3. Add US3 → Confirm content authoring workflow works
4. Complete Phase 5 → Validate security and performance

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- No automated tests included (use manual verification per acceptance scenarios)
- Total: 15 tasks across 5 phases
- Estimated scope: Small feature (~1 hour implementation)
