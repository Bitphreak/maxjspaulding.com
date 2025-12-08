---
Status: draft
Version: 1.0.0
Purpose: Provide guidance on the technical stack and frameworks in use in this project.
---
# maxjspaulding.com Tech Stack — One Pager

**Next.js + MDX Static Blog Architecture**

## **Purpose**

A fast, maintainable, zero-backend personal blog optimized for long-form technical writing, code snippets, and AI workflow automation.
Built for simplicity, portability, and frictionless Claude Code development.

---

## **Core Stack**

### **Next.js (App Router)**

The framework provides:

* **File-based routing** with `app/` directory
* **Static Site Generation (SSG)** for all blog content
* **Built-in SEO/metadata management**
* **Image optimization** for hero images and thumbnails
* **React Server Components** for clean separation of client-side needs
* **Zero-runtime** pages wherever possible

**Why Next.js?**
Consistency across your sites, smooth Railway deploys, rich ecosystem, and predictable agent behavior.

---

### **MDX for Blog Content**

MDX allows Markdown enriched with JSX components.

#### Benefits:

* Write posts in pure Markdown
* Embed components (code blocks, diagrams, widgets) directly in posts
* Total control over rendering
* Static compilation → no runtime cost
* Easy for Claude to create, edit, and refactor articles

**Content Layout:**

```
content/
  blog/
    YYYY-MM-DD-title.mdx
  tags.json (optional)
```

---

## **Supporting Libraries**

### 🟦 **Markdown Processing**

* `next-mdx-remote` or `@next/mdx` (depending on complexity)
* `remark` / `rehype` plugins:

    * `remark-gfm` (tables, autolinks)
    * `rehype-pretty-code` or Shiki (syntax highlighting)
    * `rehype-slug` + `rehype-autolink-headings` (headers + TOC anchor links)

### 🟩 **Styling**

* **Tailwind CSS**
  Consistent with the rest of App Empire design and easy for Claude to manipulate predictably.

---

## **Site Structure (Recommended)**

```
app/
  layout.tsx
  page.tsx
  blog/
    page.tsx
    [slug]/
      page.tsx

components/
  BlogPost.tsx
  MarkdownRenderer.tsx
  CodeBlock.tsx
  TagList.tsx

content/
  blog/
    2025-01-01-example-post.mdx
```

---

## **Build & Deployment**

### **Railway Deployment**

* Build: `next build`
* Output: static pages + client bundles
* Deployment type: **static Next.js hosting** (no server runtime)
* No environment variables required unless added later
* Zero backend infrastructure

### **CI/CD (optional but minimal)**

* On push to `main` → build + deploy
* No staging environment unless intentionally added later

---

## **Governance Constraints**

* **No databases or CMS**
* **No API routes unless explicitly required**
* **No authentication**
* **All blog content lives in Git as MDX files**
* **Static generation only**
* **Minimal dependencies**
* **Claude Code should default to simplicity and static-first patterns**

---

## **Why This Stack**

* Instantly productive
* Claude-friendly
* Cheap to run
* Zero operational burden
* Years-long maintainability
* Easy to migrate later (Astro, CMS, etc.)
* Perfect for high-quality technical writing
