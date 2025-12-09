# Data Model: Portfolio Site Rebuild

**Branch**: `001-portfolio-site-rebuild` | **Date**: 2025-12-08

## Overview

This document defines the data structures for the maxjspaulding.com portfolio site. All data is stored as JSON files in the `/content` directory and loaded at build time for static generation.

---

## Entity: Profile

**File**: `content/profile.json`
**Purpose**: Owner identity information displayed on home page and throughout site

```typescript
interface Profile {
  name: string;           // "Max Spaulding"
  title: string;          // "Architect and Engineering Lead"
  company: string;        // "Life360"
  location: string;       // "San Francisco, CA"
  email: string;          // "maxjspaulding@gmail.com"
  links: {
    linkedin: string;     // "https://www.linkedin.com/in/maxjspaulding"
    github: string;       // "https://github.com/bitphreak"
    blog?: string;        // "https://bitphreak.dev" (optional)
  };
  bio: {
    short: string;        // One-line tagline for home page
    extended: string;     // Multi-paragraph bio for About page (can include markdown)
  };
}
```

**Validation Rules**:
- `name`: Required, non-empty string
- `email`: Required, valid email format
- `links.linkedin`: Required, valid URL
- `links.github`: Required, valid URL

---

## Entity: Experience Entry

**File**: `content/experience.json`
**Purpose**: Work history displayed on Experience page

```typescript
interface ExperienceEntry {
  id: string;             // Unique identifier (e.g., "life360-2023")
  company: string;        // "Life360"
  role: string;           // "Staff Engineer / Architect"
  location: string;       // "San Francisco, CA"
  startDate: string;      // ISO date "2023-01" (year-month)
  endDate: string | null; // ISO date or null for current role
  isCurrent: boolean;     // true if this is the active position
  description: string;    // Role description (can include markdown)
  highlights: string[];   // Array of key achievements/responsibilities
  technologies?: string[]; // Optional tech stack tags
}

type ExperienceData = ExperienceEntry[];
```

**Validation Rules**:
- `id`: Required, unique across all entries
- `company`: Required, non-empty string
- `role`: Required, non-empty string
- `startDate`: Required, ISO year-month format
- `endDate`: Required if `isCurrent` is false
- `highlights`: At least one item required

**Ordering**: Entries sorted by `startDate` descending (most recent first)

---

## Entity: Project

**File**: `content/projects.json`
**Purpose**: Portfolio items displayed on Projects page

```typescript
interface Project {
  id: string;             // Unique identifier (e.g., "appempire")
  title: string;          // "App Empire"
  description: string;    // Short description (1-2 sentences)
  longDescription?: string; // Extended description for detail view (optional)
  technologies: string[]; // ["Next.js", "TypeScript", "Railway"]
  links: {
    github?: string;      // Repository URL (optional)
    live?: string;        // Live site URL (optional)
    demo?: string;        // Demo/video URL (optional)
  };
  featured: boolean;      // true to highlight on home page
  order: number;          // Display order (lower = first)
  image?: string;         // Path to screenshot/thumbnail (optional)
}

type ProjectData = Project[];
```

**Validation Rules**:
- `id`: Required, unique across all projects
- `title`: Required, non-empty string
- `description`: Required, non-empty string
- `technologies`: At least one item required
- `links`: At least one link (github, live, or demo) required

**Ordering**: Entries sorted by `order` ascending, then by `title` alphabetically

---

## Entity: Navigation Link

**File**: Hardcoded in `components/Header.tsx`
**Purpose**: Site navigation structure

```typescript
interface NavLink {
  label: string;          // "About"
  href: string;           // "/about"
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
```

**Note**: Navigation is static and unlikely to change, so hardcoding is acceptable per simplicity principle.

---

## Entity: Social Link

**File**: Derived from `content/profile.json`
**Purpose**: Contact icons on home page and contact page

```typescript
interface SocialLink {
  platform: "email" | "linkedin" | "github" | "blog";
  url: string;            // Full URL or mailto: link
  icon: string;           // Icon component name
  label: string;          // Accessibility label
}
```

**Derived at runtime** from profile.json links object.

---

## Type Definitions Location

All TypeScript interfaces should be defined in:

```
types/
└── content.ts           # Profile, ExperienceEntry, Project interfaces
```

This keeps type definitions centralized and importable by both content loaders and components.

---

## Content Loading Pattern

```typescript
// lib/content.ts
import profileData from '@/content/profile.json';
import experienceData from '@/content/experience.json';
import projectsData from '@/content/projects.json';

import type { Profile, ExperienceEntry, Project } from '@/types/content';

export const profile: Profile = profileData;
export const experience: ExperienceEntry[] = experienceData;
export const projects: Project[] = projectsData;
```

JSON imports are resolved at build time, ensuring static generation with no runtime fetching.

---

## Relationships

```
Profile (1)
    │
    └── links ──────► SocialLink (derived, many)

ExperienceEntry (many) ── standalone, no relationships

Project (many) ── standalone, no relationships

NavLink (many) ── hardcoded, no relationships
```

No complex relationships exist. All entities are independent, supporting the simplicity principle.
