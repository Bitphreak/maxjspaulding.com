---
Status: draft
Version: 1.0.0
Purpose: Provide unified, minimal technical governance for all personal-site repositories authored by Max J. Spaulding.
Scope: Applies to the following projects:
  * maxjspaulding.com (Next.js)
  * bitphreak.dev (Next.js)
  * bitphreak.github.io (static HTML)
  * GitHub Profile README (markdown)  
---
# Shared Technical Manifest for Personal Sites

## 1. Core Development Principles**

### 1.1 Simplicity First

All personal-site projects MUST prioritize simplicity over architecture.
AI assistants MUST avoid:

* unnecessary dependencies
* backend services
* databases
* identity/authentication systems
* enterprise-scale abstractions

### 1.2 Fit-for-Purpose Implementations

Each project SHOULD use the minimal amount of technology needed to achieve its specific purpose (portfolio, blog, static placeholder, markdown profile).

### 1.3 Predictable AI Development

Claude Code MUST:

* follow the file structures defined below
* avoid introducing patterns not explicitly allowed
* prefer clarity, maintainability, and minimalism
* explain architectural changes within PR descriptions

### 1.4 No Shared Infrastructure

Projects DO NOT share backend services, databases, or runtime infrastructure.
Each project stands alone.

### 1.5 No Overengineering

AI assistants MUST NOT introduce:

* microservices
* queues
* agents
* Ory/Kratos auth
* billing integrations
* observability stacks
* Docker multi-service builds
* monorepo structures

---

## 2. Project Architecture Rules

### 2.1 Next.js Projects (maxjspaulding.com, bitphreak.dev)

#### 2.1.1 Required Stack

These repos MUST use:

* Next.js App Router
* TypeScript
* Tailwind CSS
* MDX (only for blog content in bitphreak.dev)

#### 2.1.2 Allowed Features

AI assistants MAY:

* create reusable React components
* implement SEO metadata
* create markdown-based content loaders
* add RSS feeds (bitphreak.dev only)
* generate simple project or blog metadata files

#### 2.1.3 Prohibited Features

AI assistants MUST NOT create:

* API routes unless explicitly requested
* backend servers
* databases (SQLite, Postgres, Prisma, etc.)
* CMS systems
* auth flows
* non-static rendering without explicit justification

#### 2.1.4 Static Rendering Requirement

Both Next.js sites MUST be statically rendered if feasible.
SSR MAY be used sparingly if required for metadata or dynamic routing.

---

### 2.2 Static HTML Project (bitphreak.github.io)

#### 2.2.1 Stack

This repo MUST remain:

* plain HTML
* optional lightweight CSS
* optional lightweight inline JS

#### 2.2.2 Prohibited Features

AI assistants MUST NOT introduce:

* build systems
* npm or node toolchains
* frameworks (React, Vue, Svelte, Astro, etc.)

#### 2.2.3 Purpose

This repo exists only as:

* a placeholder page
* OR a redirect to another personal site
* OR a simple standalone static page

No expansion is allowed unless requested directly.

---

### 2.3 GitHub Profile README

#### 2.3.1 Format

This MUST remain:

* Markdown only
* No HTML/CSS frameworks
* No dynamic content generation unless GitHub-native

#### 2.3.2 Prohibited

AI assistants MUST NOT introduce:

* tooling
* assets hosted outside the repo
* automation pipelines for the README

---

## 3. Repository Structure Requirements

### 3.1 Next.js Repos

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

Claude Code MUST adhere to this structure unless adjusting with explicit reasoning.

---

### 3.2 Static HTML Repo

```
index.html
styles.css (optional)
script.js (optional)
assets/ (optional)
```

No build pipeline allowed.

---

### 3.3 GitHub Profile README Repo

```
README.md
```

---

## 4. Content Workflow

### 4.1 Markdown-First

All blog posts, articles, and structured long-form writing MUST be authored in Markdown/MDX.

### 4.2 File-Based Content Storage

bitphreak.dev uses:

```
content/blog/<slug>.mdx
```

### 4.3 No External CMS

All content lives in the repo.
AI assistants MUST NOT integrate headless CMS systems.

---

## 5. CI/CD & Deployment Rules

#### 5.1 Next.js Sites

* Deployment target: **Railway**
* CI Tasks:

    * install
    * lint
    * build
    * deploy

#### 5.2 Static HTML

* Must remain GitHub Pages compatible.
* No build steps.

#### 5.3 Zero Staging Environments

No staging/production multi-env unless manually requested.

---

## 6. AI Assistant Behavior Rules

#### 6.1 Allowed

AI assistants may:

* generate UI components
* refactor for clarity
* optimize static Next.js usage
* suggest improvements aligned with simplicity

#### 6.2 Forbidden

AI assistants MUST NOT:

* add new languages/runtimes
* introduce infrastructure complexity
* create reusable libraries unless requested
* assume enterprise architecture needs
* apply App Empire constitutional requirements

#### 6.3 Required

AI assistants MUST explain:

* structural changes
* new dependencies
* any deviation from static rendering

---

## 7. Amendment Process

This constitution may be updated by:

1. Creating a SpecKit `/speckit.specify` spec with proposed changes
2. Running `/speckit.clarify` if needed
3. Approval by Max
4. Updating version number using semantic versioning

---

## 8. Versioning Policy

* **MAJOR:** Architectural changes (e.g., choosing a new framework)
* **MINOR:** New allowed patterns, new repo types, new workflow rules
* **PATCH:** Clarifications or non-semantic cleanups
