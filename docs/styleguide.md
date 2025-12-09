# Style Guide — Personal / Portfolio / Blog Sites

## 1. Brand Tone & Feel
- **Mood:** Modern, technical, professional, clean — but personal.
- **Theme:** Dark-theme by default, with accent colors in shades of **blue** and **green**.
- **Vibe:** Minimalistic, craftsmanship, engineering-oriented, subtle sophistication — not flashy.
- **Voice / Typography Tone:** Clear, readable, confident, slightly understated.

## 2. Color Palette

| Purpose                | Color (example)          | Notes / Use Case                     |
|------------------------|--------------------------|--------------------------------------|
| Background (dark)      | `#0D1117` (very dark navy / charcoal) | Primary background for dark theme |
| Surface / Cards BG     | `#161B22` / `#1E242B`     | Cards, containers, sections          |
| Primary Accent         | `#33AFFF` (cyan-blue)     | Links, buttons, highlights           |
| Secondary Accent       | `#1DD6A5` (teal / sea-green) | Subtle highlights, secondary buttons |
| Text — Primary         | `#E6E8EB` (light gray)    | Default body text                    |
| Text — Muted / Secondary | `#8B95A1` (gray-blue)   | Subheadings, meta, captions          |
| Border / Divider       | `#303842`                 | Separators, subtle outlines          |
| Code / Inline Code BG  | `#0B0F13`                 | Code blocks or inline code styling   |

> Feel free to tweak saturation / contrast slightly to optimize readability and accessibility (contrast ratio, dark mode legibility, etc.)

---

## 3. Typography

- **Font Family (Sans-Serif):** e.g. `Inter`, `Poppins`, or similar modern UI font — clean, readable, technical.
- **Font Sizes (desktop baseline):**
    - Body: `16px`
    - H1: `2.5rem`
    - H2: `2rem`
    - H3: `1.5rem`
    - Code / inline code: `0.95rem`, monospace (e.g. `Fira Code`, `Source Code Pro`)
- **Line-height / spacing:** comfortable, airy — e.g. `1.6` for body, tighter for headings

- **Code block styles:**
    - Light-on-dark theme (matching dark background)
    - Syntax highlighting consistent with accents (e.g. blue for keywords, green for strings, muted gray for comments)
    - Rounded corners or subtle border-radius for readability

---

## 4. Layout & Spacing

- **Grid & container width:** max-width ~ `960px`–`1200px` for large displays; full-width sections sparingly.
- **Spacing / padding:** define baseline spacing units (e.g. `8px`, `16px`, `24px`, `32px`) to maintain consistency.
- **Cards / Sections:** use dark “surface” background, subtle shadows or borders to separate, with accent-colored headings / links.
- **Navigation bar / header:** dark background, accent-colored link hover / active states, minimalistic — no heavy visuals.
- **Footer:** simple, dark, small text; social icons or links, copyright, minimal metadata.

---

## 5. UI Components / Patterns

- **Buttons / Links:**
    - Primary button: background = primary accent (`#33AFFF`), text = dark (or light, depending), hover effect slightly brighter / subtle.
    - Secondary button or link: border or text in secondary accent (`#1DD6A5`), hover subtle background highlight.
- **Cards / Tiles:** for portfolio / project previews — dark surface background, accent border or subtle highlight on hover.
- **Code blocks & inline code:** as above — dark background, readable syntax highlighting, good padding, horizontal scroll if needed.
- **Blog post layout:** comfortable margins, readable line length, images / diagrams with subtle border or soft shadow, dark-mode friendly.
- **Tag / category badges:** small pill-style, background = secondary accent or muted surface, text = light.

---

## 6. Imagery & Visuals

- Use minimal hero images or none — leverage subtle patterns or solid background.
- If using images (for projects, blog posts), apply mild desaturation / overlay to match dark theme, ensure alt-text for accessibility.
- Prefer SVG icons (social, logos, UI elements) — monochrome or accent-colored.

---

## 7. Accessibility & UX

- Ensure sufficient contrast between background / text / UI elements — aim for WCAG AA compliance.
- Responsive design — mobile-first scaling, navigation / layout collapse gracefully, code blocks / images scroll or scale.
- Light and dark theme handling: default to dark, but optionally allow a light-theme toggle (if you think you'll need it).
- Keyboard accessible navigation (links, buttons).
- Semantic HTML / proper tags (headers, article, nav, footer) for SEO & readability.

---

## 8. Branding & Tone

- Brand name: likely “Max Spaulding” (maxjspaulding.com) or “bitphreak” (for blog).
- Logo / wordmark: optional — maybe stylized “MS” or “bitphreak” in modern minimal sans-serif, for header or favicon.
- Tone: confident, clean, technical — not flashy, not overly decorative.
- Consistency across portfolio and blog: same color palette, same typography, similar header/footer.

---

## 9. Metadata & SEO Conventions

- Page titles: `“Name — Page title”` (e.g. `Max Spaulding — Projects`)
- Social sharing (OG tags): use consistent accent-colored placeholder image or minimal design.
- Meta description: concise summary (~150-160 chars) with keywords (engineering, AI, software architecture, etc.)
- Favicon: simple, minimal (monogram or icon) consistent with dark theme.
- robots.txt, sitemap.xml (or dynamic generation) if blog grows.

---

## 10. Developer / Maintenance Guidelines

- Use **Tailwind CSS** (or similar utility CSS) for rapid style consistency.
- Keep dependency footprint minimal — avoid bulky UI frameworks unless justified.
- Maintain site versioning: content and code live together.
- Use **MDX + static generation** for content — no runtime CMS or backend.
- Ensure code readability and modularity: isolate UI components, layout components, blog components, etc.
- Use proper commit discipline / documentation so that future changes remain maintainable.  

