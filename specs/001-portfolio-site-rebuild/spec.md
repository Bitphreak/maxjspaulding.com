# Feature Specification: Portfolio Site Rebuild

**Feature Branch**: `001-portfolio-site-rebuild`
**Created**: 2025-12-08
**Status**: Draft
**Input**: User description: "Create the new maxjspaulding.com website that conforms to docs/styleguide.md, docs/tech_stack.md, and docs/sitemap.md. Rebuild from legacy Jekyll to Next.js with static generation."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Professional Identity (Priority: P1)

A visitor lands on the home page and immediately sees Max Spaulding's professional identity: name, current title (Lead Engineer and Architect at Life360), location (San Francisco, CA), and quick access to contact/social links. This creates a "digital business card" experience.

**Why this priority**: First impressions matter. The home page is the primary entry point and must instantly communicate who Max is and what he does. This is the minimum viable product—a functioning business card site.

**Independent Test**: Can be fully tested by loading the home page and verifying all identity information displays correctly. Delivers immediate value as a professional landing page.

**Acceptance Scenarios**:

1. **Given** a visitor arrives at maxjspaulding.com, **When** the page loads, **Then** they see Max's name, title, location, and social/contact icons within the first viewport
2. **Given** a visitor views the home page, **When** they click an email icon, **Then** their email client opens with maxjspaulding@gmail.com pre-filled
3. **Given** a visitor views the home page, **When** they click the LinkedIn icon, **Then** they are directed to linkedin.com/in/maxjspaulding
4. **Given** a visitor views the home page, **When** they click the GitHub icon, **Then** they are directed to github.com/bitphreak

---

### User Story 2 - Navigate Site Sections (Priority: P1)

A visitor can navigate between all major site sections (Home, About, Experience, Projects, Contact) using a consistent navigation bar that appears on every page.

**Why this priority**: Navigation is core infrastructure. Without it, other pages are unreachable. Co-priority with P1 as it enables access to all content.

**Independent Test**: Can be tested by clicking each navigation link and verifying the correct page loads. Delivers value by making the site explorable.

**Acceptance Scenarios**:

1. **Given** a visitor is on any page, **When** they view the header, **Then** they see navigation links to Home, About, Experience, Projects, and Contact
2. **Given** a visitor clicks a navigation link, **When** the page loads, **Then** the URL reflects the selected section and content is displayed
3. **Given** a visitor is on a specific page, **When** they view the navigation, **Then** the current page link is visually distinguished from others

---

### User Story 3 - Learn About Max (Priority: P2)

A visitor navigates to the About page to learn more about Max's background, philosophy, career journey, and professional values.

**Why this priority**: Provides depth beyond the business card. Important for recruiters, potential collaborators, and professional connections who want to understand Max's story.

**Independent Test**: Can be tested by navigating to /about and verifying biographical content displays. Delivers value as a standalone professional biography.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to /about, **When** the page loads, **Then** they see an extended bio with background information
2. **Given** a visitor reads the About page, **When** they scroll, **Then** they see career highlights and professional milestones
3. **Given** a visitor wants Max's resume, **When** they click a download link, **Then** a PDF resume downloads to their device

---

### User Story 4 - Review Work Experience (Priority: P2)

A visitor navigates to the Experience page to see Max's detailed work history including roles, companies, tenure, and accomplishments.

**Why this priority**: Critical for recruiters and hiring managers evaluating Max's professional background. Second tier because it builds on the About page context.

**Independent Test**: Can be tested by navigating to /experience and verifying work history displays. Delivers value as a standalone professional resume view.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to /experience, **When** the page loads, **Then** they see a chronological list of work positions
2. **Given** a visitor views a position, **When** they read the entry, **Then** they see company name, role title, dates, and description of responsibilities/achievements
3. **Given** a visitor is viewing experience, **When** they scan the page, **Then** the current role (Life360) is prominently featured

---

### User Story 5 - Browse Projects Portfolio (Priority: P2)

A visitor navigates to the Projects page to see examples of Max's work, including project descriptions, technologies used, and outcomes.

**Why this priority**: Demonstrates tangible work product. Important for technical evaluation but secondary to establishing professional identity.

**Independent Test**: Can be tested by navigating to /projects and verifying project cards display. Delivers value as a standalone portfolio showcase.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to /projects, **When** the page loads, **Then** they see project cards with titles and descriptions
2. **Given** a visitor views a project card, **When** they examine it, **Then** they see project name, description, and relevant links (GitHub, live site, etc.)
3. **Given** a visitor wants more detail, **When** they click a project card or link, **Then** they are directed to more information (external link or project detail)

---

### User Story 6 - Contact Max (Priority: P2)

A visitor navigates to the Contact page to find ways to reach Max for professional opportunities, collaboration, or inquiries.

**Why this priority**: Enables conversion—turning interest into connection. Essential for the site's purpose but requires other content to generate interest first.

**Independent Test**: Can be tested by navigating to /contact and verifying contact methods display. Delivers value as a standalone contact directory.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to /contact, **When** the page loads, **Then** they see email address and social profile links
2. **Given** a visitor wants to email Max, **When** they click the email link, **Then** their email client opens with maxjspaulding@gmail.com
3. **Given** a visitor views the Contact page, **When** they look for professional profiles, **Then** they see links to LinkedIn and GitHub

---

### User Story 7 - Experience Dark Theme Design (Priority: P3)

A visitor experiences a cohesive dark-theme design across all pages with the defined color palette (dark navy background, cyan-blue and teal accents).

**Why this priority**: Important for brand identity and user experience, but is a cross-cutting concern that enhances rather than enables functionality.

**Independent Test**: Can be tested by viewing any page and verifying the color scheme matches the style guide. Delivers consistent visual brand experience.

**Acceptance Scenarios**:

1. **Given** a visitor loads any page, **When** they view it, **Then** the background is dark (#0D1117) with light text (#E6E8EB)
2. **Given** a visitor interacts with links or buttons, **When** they hover, **Then** they see accent color feedback (cyan-blue #33AFFF or teal #1DD6A5)
3. **Given** a visitor views the site on different screen sizes, **When** they resize or use mobile, **Then** the design remains consistent and readable

---

### Edge Cases

- What happens when a visitor accesses a non-existent URL? Display a custom 404 page with navigation back to home
- What happens when social links are clicked on mobile? Open in appropriate app if installed, otherwise browser
- What happens when resume PDF is requested but unavailable? Display the download link normally; if the PDF file is missing at build time, the link should be omitted from the About page and replaced with text: "Resume available upon request" with a mailto: link to maxjspaulding@gmail.com
- What happens when the site is viewed on very old browsers? Degrade gracefully with core content still visible

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST display Max Spaulding's name, professional title, and location on the home page
- **FR-002**: System MUST provide clickable icons/links for email, LinkedIn, and GitHub on the home page
- **FR-003**: System MUST include a navigation header with links to Home, About, Experience, Projects, and Contact pages
- **FR-004**: System MUST display consistent navigation and footer on all pages
- **FR-005**: System MUST render the About page with extended biography and career highlights
- **FR-006**: System MUST provide a downloadable PDF resume from the About page
- **FR-007**: System MUST display work experience entries with company, role, dates, and descriptions on the Experience page
- **FR-008**: System MUST display project cards with titles, descriptions, and relevant links on the Projects page
- **FR-009**: System MUST display contact methods (email, LinkedIn, GitHub) on the Contact page
- **FR-010**: System MUST implement the dark theme color palette as defined in the style guide
- **FR-011**: System MUST be responsive and function correctly on mobile, tablet, and desktop viewports
- **FR-012**: System MUST display a custom 404 page for non-existent routes
- **FR-013**: System MUST generate static pages (no server-side rendering at request time)
- **FR-014**: System MUST include proper SEO metadata (title, description, Open Graph tags) on all pages

### Key Entities

- **Page**: A distinct section of the site (Home, About, Experience, Projects, Contact) with its own URL and content
- **Navigation Link**: An element in the header that routes to a specific page, with visual indication of current page
- **Contact Link**: A clickable element (icon or text) that opens external service (email client, LinkedIn, GitHub)
- **Experience Entry**: A work history item containing company name, role title, date range, and description
- **Project Card**: A visual element showcasing a project with title, description, and optional external links
- **Resume Document**: A downloadable PDF file containing Max's professional resume/CV

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All six main pages (Home, About, Experience, Projects, Contact, 404) are accessible and render correctly
- **SC-002**: Page load time under 3 seconds on standard broadband connection
- **SC-003**: Site scores 90+ on Lighthouse accessibility audit
- **SC-004**: Site scores 90+ on Lighthouse SEO audit
- **SC-005**: All navigation links correctly route to their target pages
- **SC-006**: All external links (email, LinkedIn, GitHub) open correct destinations
- **SC-007**: Resume PDF downloads successfully when requested
- **SC-008**: Site displays correctly on Chrome, Firefox, Safari, and Edge (latest versions)
- **SC-009**: Site is fully functional and readable on mobile devices (320px viewport and up)
- **SC-010**: Color contrast ratios meet WCAG AA standards (4.5:1 for normal text)

## Assumptions

- Current role at Life360 as Lead Engineer/Architect based on LinkedIn data (titles partially obscured)
- Work experience content will be provided or extracted from LinkedIn during implementation
- Project portfolio content will be provided or derived from GitHub and professional history
- Resume PDF will be provided by Max or created during implementation
- Blog section will redirect to bitphreak.dev rather than being built into this site initially
- No light theme toggle required for initial release (dark theme only per style guide)
- Contact form not required—direct email link is sufficient
- No analytics or tracking required for initial release

## Dependencies

- Access to resume PDF file or content to create one
- Detailed work experience content (beyond what LinkedIn publicly shows)
- Project portfolio content and descriptions
- Extended biography content for About page

## Out of Scope

- Blog functionality (redirects to bitphreak.dev)
- Contact form submission
- Light theme option
- Analytics integration
- CMS or admin interface
- User authentication
- Database or backend services
- Comments or interactive features
