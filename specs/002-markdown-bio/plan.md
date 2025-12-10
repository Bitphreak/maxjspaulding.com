# Implementation Plan: Markdown Bio Rendering

**Branch**: `002-markdown-bio` | **Date**: 2025-12-09 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-markdown-bio/spec.md`

## Summary

Add markdown rendering support to the About page extended bio and Experience page descriptions/highlights. This enables content authors to use standard markdown syntax (bold, italic, links) in JSON content files, which will render as formatted HTML while preserving existing styling and ensuring security through HTML sanitization.

## Technical Context

**Language/Version**: TypeScript 5.x
**Primary Dependencies**: Next.js 14.x, React 18.x, react-markdown (lightweight markdown renderer)
**Storage**: JSON files (content/profile.json, content/experience.json) - no changes needed
**Testing**: Manual verification per acceptance scenarios (no automated test framework in project)
**Target Platform**: Static web (Next.js static export)
**Project Type**: Web application (Next.js App Router)
**Performance Goals**: Page load under 3 seconds (existing requirement)
**Constraints**: Must preserve existing dark theme styling, must sanitize HTML for XSS prevention
**Scale/Scope**: 2 pages affected (About, Experience), 3 content fields (bio.extended, experience.description, experience.highlights)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Simplicity First | PASS | Single lightweight dependency (react-markdown), no backend/database/auth |
| II. Fit-for-Purpose | PASS | Minimal technology for specific purpose (formatting text content) |
| III. Predictable AI Development | PASS | Follows existing file structure, explains changes |
| IV. No Shared Infrastructure | PASS | No shared services, standalone feature |
| V. No Overengineering | PASS | No microservices, queues, or enterprise patterns |

**Allowed Features Check**:
- [x] Reusable React components (Markdown renderer component)
- [x] Markdown-based content loaders (extending existing JSON loaders)

**Prohibited Features Check**:
- [x] No API routes
- [x] No backend servers
- [x] No databases
- [x] No CMS systems
- [x] No auth flows
- [x] Static rendering preserved

**Gate Result**: PASS - Proceed to Phase 0

## Project Structure

### Documentation (this feature)

```text
specs/002-markdown-bio/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── tasks.md             # Phase 2 output (created by /speckit.tasks)
```

### Source Code (repository root)

```text
app/
├── about/
│   └── page.tsx         # UPDATE: Use Markdown component for bio.extended
├── experience/
│   └── page.tsx         # UPDATE: Use Markdown component for descriptions/highlights
└── ...

components/
├── Markdown.tsx         # NEW: Reusable markdown renderer with dark theme styling
└── ...

content/
├── profile.json         # No schema changes (bio.extended already supports text)
└── experience.json      # No schema changes (description/highlights already support text)
```

**Structure Decision**: Follows existing Next.js App Router structure. Single new component added to components/ directory. No structural changes required.

## Complexity Tracking

> No constitution violations requiring justification.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
