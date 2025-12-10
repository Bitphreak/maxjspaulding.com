# Quickstart: Markdown Bio Rendering

**Feature**: 002-markdown-bio
**Date**: 2025-12-09

## Prerequisites

- Node.js 18+ installed
- Repository cloned and on `002-markdown-bio` branch
- Dependencies installed (`npm install`)

## Quick Implementation Steps

### 1. Install Dependency

```bash
npm install react-markdown
```

### 2. Create Markdown Component

Create `components/Markdown.tsx`:

```tsx
import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
  content: string;
  className?: string;
}

export default function Markdown({ content, className }: MarkdownProps) {
  return (
    <ReactMarkdown
      className={className}
      components={{
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition-colors"
          >
            {children}
          </a>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold">{children}</strong>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
        p: ({ children }) => (
          <p className="mb-4 leading-relaxed last:mb-0">{children}</p>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
```

### 3. Update About Page

In `app/about/page.tsx`, replace the bio paragraph mapping:

```tsx
// Before
{profile.bio.extended.split("\n\n").map((paragraph, index) => (
  <p key={index} className="...">{paragraph}</p>
))}

// After
import Markdown from "@/components/Markdown";
// ...
<Markdown content={profile.bio.extended} className="text-text-primary" />
```

### 4. Update ExperienceCard Component

In `components/ExperienceCard.tsx`, use Markdown for description and highlights:

```tsx
import Markdown from "@/components/Markdown";

// For description
<Markdown content={entry.description} className="text-text-primary mb-4" />

// For highlights (each item)
{entry.highlights.map((highlight, index) => (
  <li key={index}>
    <Markdown content={highlight} className="text-text-muted" />
  </li>
))}
```

### 5. Test

```bash
npm run dev
```

1. Open http://localhost:3000/about
2. Verify markdown in bio renders (bold, italic, links)
3. Open http://localhost:3000/experience
4. Verify markdown in descriptions/highlights renders

### 6. Build Verification

```bash
npm run build
```

Confirm static export succeeds and pages render correctly.

## Content Authoring

After implementation, content authors can use:

```json
{
  "bio": {
    "extended": "I specialize in **AI-driven solutions** and *scalable systems*. Learn more at [Bespoke Agent](https://bespokeagent.ai)."
  }
}
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Raw markdown shows | Verify Markdown component imported correctly |
| Links not clickable | Check component override for `a` element |
| Styling wrong | Verify Tailwind classes in component overrides |
| Build fails | Check react-markdown installed in dependencies |
