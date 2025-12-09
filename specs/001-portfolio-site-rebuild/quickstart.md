# Quickstart: Portfolio Site Rebuild

**Branch**: `001-portfolio-site-rebuild` | **Date**: 2025-12-08

## Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Git

## Setup

```bash
# Clone and enter project
cd /Users/maxjonathanspaulding/Documents/Projects/Personal/maxjspaulding.com
git checkout 001-portfolio-site-rebuild

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Header, Footer, metadata)
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── experience/page.tsx # Experience page
│   ├── projects/page.tsx   # Projects page
│   ├── contact/page.tsx    # Contact page
│   └── not-found.tsx       # 404 page
├── components/             # Reusable React components
├── content/                # JSON content files
├── lib/                    # Utilities and content loaders
├── public/                 # Static assets (resume.pdf, favicon)
├── styles/                 # Global CSS
└── types/                  # TypeScript type definitions
```

## Common Tasks

### Edit Content

All site content lives in JSON files:

| File | What it contains |
|------|------------------|
| `content/profile.json` | Name, title, bio, contact links |
| `content/experience.json` | Work history entries |
| `content/projects.json` | Portfolio project items |

Edit these files directly—changes appear on next build/dev refresh.

### Add a New Project

1. Open `content/projects.json`
2. Add a new entry:
```json
{
  "id": "new-project",
  "title": "Project Name",
  "description": "Short description",
  "technologies": ["Tech1", "Tech2"],
  "links": { "github": "https://github.com/..." },
  "featured": false,
  "order": 10
}
```
3. Save and refresh

### Add Work Experience

1. Open `content/experience.json`
2. Add a new entry at the beginning (most recent first):
```json
{
  "id": "company-2024",
  "company": "Company Name",
  "role": "Job Title",
  "location": "City, State",
  "startDate": "2024-01",
  "endDate": null,
  "isCurrent": true,
  "description": "Role description...",
  "highlights": ["Achievement 1", "Achievement 2"]
}
```

### Update Resume PDF

Replace `public/resume.pdf` with the new version. Same filename, no code changes needed.

### Modify Styling

- **Colors**: Edit `tailwind.config.ts` color palette
- **Typography**: Edit font imports in `app/layout.tsx`
- **Global styles**: Edit `styles/globals.css`

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (hot reload) |
| `npm run build` | Build for production (static export) |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Playwright E2E tests |
| `npm run lighthouse` | Run Lighthouse audit |

## Build & Deploy

```bash
# Build static site
npm run build

# Output is in /out directory (static HTML/CSS/JS)
```

Railway auto-deploys on push to main. Manual deploy:
1. Push changes to `main` branch
2. Railway detects changes and rebuilds
3. Site updates within ~2 minutes

## Design Tokens

Quick reference for the dark theme:

| Token | Value | Usage |
|-------|-------|-------|
| `bg-background` | `#0D1117` | Page background |
| `bg-surface` | `#161B22` | Cards, containers |
| `text-primary` | `#E6E8EB` | Body text |
| `text-muted` | `#8B95A1` | Secondary text |
| `accent-primary` | `#33AFFF` | Links, buttons |
| `accent-secondary` | `#1DD6A5` | Highlights |
| `border` | `#303842` | Dividers |

## Troubleshooting

**Page not updating after content change?**
- In dev: Hard refresh (Cmd+Shift+R)
- In prod: Rebuild required (`npm run build`)

**TypeScript errors after adding content?**
- Ensure JSON matches interface in `types/content.ts`
- Check for missing required fields

**Build fails on Railway?**
- Check build logs in Railway dashboard
- Ensure all dependencies in `package.json`
- Verify `next.config.js` has `output: 'export'`

## Links

- [Spec](./spec.md) — Feature requirements
- [Plan](./plan.md) — Implementation plan
- [Data Model](./data-model.md) — Content schemas
- [Style Guide](../../docs/styleguide.md) — Design system
- [Constitution](../../.specify/memory/constitution.md) — Project rules
