# Data Model: Markdown Bio Rendering

**Feature**: 002-markdown-bio
**Date**: 2025-12-09

## Overview

This feature does not introduce new data entities. It enhances existing text fields to support markdown syntax. The data model remains unchanged; only the rendering behavior changes.

## Existing Entities (No Changes)

### Profile (content/profile.json)

```typescript
interface Profile {
  name: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  email: string;
  links: {
    linkedin: string;
    github: string;
    blog?: string;
  };
  bio: {
    short: string;
    extended: string;  // ← NOW SUPPORTS MARKDOWN SYNTAX
  };
}
```

**Markdown-enabled field**: `bio.extended`
- Supports: bold (`**text**`), italic (`*text*`), links (`[text](url)`), paragraphs
- Maximum recommended length: 2000 characters (practical limit, not enforced)

### ExperienceEntry (content/experience.json)

```typescript
interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  description: string;      // ← NOW SUPPORTS MARKDOWN SYNTAX
  highlights: string[];     // ← EACH ITEM SUPPORTS MARKDOWN SYNTAX
  technologies?: string[];
}
```

**Markdown-enabled fields**:
- `description`: Supports bold, italic, links, paragraphs
- `highlights[]`: Each highlight string supports bold, italic, links

## Component Model

### New Component: Markdown

```typescript
interface MarkdownProps {
  content: string;
  className?: string;
}
```

**Purpose**: Render markdown string as formatted React elements
**Location**: `components/Markdown.tsx`
**Usage**: Import and use in About page and ExperienceCard component

## Rendering Flow

```
JSON Content (string with markdown)
        ↓
    Markdown Component
        ↓
    react-markdown parser
        ↓
    Custom styled React elements
        ↓
    HTML output (statically generated)
```

## Validation Rules

| Field | Validation | Behavior if Invalid |
|-------|------------|---------------------|
| bio.extended | Any string | Malformed markdown renders as-is |
| description | Any string | Malformed markdown renders as-is |
| highlights[] | Array of strings | Each item parsed independently |

## No Schema Migration Required

- Existing JSON files work without changes
- Markdown syntax is additive (plain text still works)
- No database, no migrations
- Backward compatible with existing content
