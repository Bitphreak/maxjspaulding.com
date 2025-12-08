<!--
  Sync Impact Report
  ===================
  Version change: 0.0.0 → 1.0.0 (Initial ratification)

  Added Principles:
    - I. Simplicity First
    - II. Fit-for-Purpose Implementations
    - III. Predictable AI Development
    - IV. No Shared Infrastructure
    - V. No Overengineering

  Added Sections:
    - Project Architecture Rules (Next.js, Static HTML, GitHub Profile README)
    - Repository Structure Requirements
    - AI Assistant Behavior Rules
    - Governance

  Removed Sections: None (initial version)

  Templates Requiring Updates:
    - .specify/templates/plan-template.md: ✅ No changes required
      (Constitution Check section exists; principles align)
    - .specify/templates/spec-template.md: ✅ No changes required
      (requirements/success criteria structure compatible)
    - .specify/templates/tasks-template.md: ✅ No changes required
      (phase structure supports simplified workflows)

  Follow-up TODOs: None
-->

# maxjspaulding.com Constitution

## Core Principles

### I. Simplicity First

All personal-site projects MUST prioritize simplicity over architecture.

AI assistants MUST avoid:
- Unnecessary dependencies
- Backend services
- Databases
- Identity/authentication systems
- Enterprise-scale abstractions

**Rationale**: Personal sites serve specific, bounded purposes. Complexity adds maintenance burden without proportional value.

### II. Fit-for-Purpose Implementations

Each project MUST use the minimal amount of technology needed to achieve its specific purpose.

Project purposes:
- **maxjspaulding.com**: Portfolio site
- **bitphreak.dev**: Technical blog
- **bitphreak.github.io**: Static placeholder/redirect
- **GitHub Profile README**: Markdown profile

**Rationale**: Different site types have different needs. A portfolio does not need the same tooling as a blog.

### III. Predictable AI Development

AI assistants MUST:
- Follow the file structures defined in this constitution
- Avoid introducing patterns not explicitly allowed
- Prefer clarity, maintainability, and minimalism
- Explain architectural changes within PR descriptions

**Rationale**: Consistent AI behavior across sessions reduces cognitive load and prevents architectural drift.

### IV. No Shared Infrastructure

Projects DO NOT share:
- Backend services
- Databases
- Runtime infrastructure

Each project stands alone.

**Rationale**: Independence eliminates cross-project coupling and deployment complexity.

### V. No Overengineering

AI assistants MUST NOT introduce:
- Microservices
- Message queues
- Autonomous agents
- Ory/Kratos auth
- Billing integrations
- Observability stacks
- Docker multi-service builds
- Monorepo structures

**Rationale**: These patterns solve enterprise-scale problems that personal sites do not have.

## Project Architecture Rules

### Next.js Projects (maxjspaulding.com, bitphreak.dev)

**Required Stack**:
- Next.js App Router
- TypeScript
- Tailwind CSS
- MDX (only for blog content in bitphreak.dev)

**Allowed Features**:
- Reusable React components
- SEO metadata
- Markdown-based content loaders
- RSS feeds (bitphreak.dev only)
- Simple project or blog metadata files

**Prohibited Features**:
- API routes (unless explicitly requested)
- Backend servers
- Databases (SQLite, Postgres, Prisma, etc.)
- CMS systems
- Auth flows
- Non-static rendering (without explicit justification)

**Static Rendering Requirement**: Both Next.js sites MUST be statically rendered if feasible. SSR MAY be used sparingly if required for metadata or dynamic routing.

### Static HTML Project (bitphreak.github.io)

**Required Stack**:
- Plain HTML
- Optional lightweight CSS
- Optional lightweight inline JS

**Prohibited Features**:
- Build systems
- npm or Node toolchains
- Frameworks (React, Vue, Svelte, Astro, etc.)

**Purpose**: This repo exists only as a placeholder page, redirect, or simple standalone static page. No expansion allowed unless explicitly requested.

### GitHub Profile README

**Required Format**:
- Markdown only
- No HTML/CSS frameworks
- No dynamic content generation (unless GitHub-native)

**Prohibited Features**:
- External tooling
- Assets hosted outside the repo
- Automation pipelines for the README

## Repository Structure Requirements

### Next.js Repos

```
project-root/
  app/
    layout.tsx
    page.tsx
    (site-specific folders)
  components/
  content/        # bitphreak.dev only
  public/
  styles/
  package.json
  tailwind.config.js
```

AI assistants MUST adhere to this structure unless adjusting with explicit reasoning.

### Static HTML Repo

```
index.html
styles.css (optional)
script.js (optional)
assets/ (optional)
```

No build pipeline allowed.

### GitHub Profile README Repo

```
README.md
```

## AI Assistant Behavior Rules

### Allowed Actions

AI assistants MAY:
- Generate UI components
- Refactor for clarity
- Optimize static Next.js usage
- Suggest improvements aligned with simplicity

### Forbidden Actions

AI assistants MUST NOT:
- Add new languages/runtimes
- Introduce infrastructure complexity
- Create reusable libraries (unless requested)
- Assume enterprise architecture needs
- Apply App Empire constitutional requirements

### Required Actions

AI assistants MUST explain:
- Structural changes
- New dependencies
- Any deviation from static rendering

## Governance

This constitution supersedes all other practices for the covered repositories.

### Amendment Process

This constitution may be updated by:
1. Creating a SpecKit `/speckit.specify` spec with proposed changes
2. Running `/speckit.clarify` if needed
3. Approval by Max
4. Updating version number using semantic versioning

### Versioning Policy

- **MAJOR**: Architectural changes (e.g., choosing a new framework)
- **MINOR**: New allowed patterns, new repo types, new workflow rules
- **PATCH**: Clarifications or non-semantic cleanups

### Compliance Review

All PRs and reviews MUST verify compliance with this constitution. Complexity MUST be justified against Principle V (No Overengineering).

**Version**: 1.0.0 | **Ratified**: 2025-12-08 | **Last Amended**: 2025-12-08
