# Personal Website — Homepage Build Brief

## Project overview

Build the **homepage first** for Micheal Tijani's personal website.

This is not a conventional developer portfolio. It should feel like a blend of:
- An independent maker's corner
- A personal publication
- A digital garden / evolving collection of notes and experiments

The site should help people discover Micheal, understand how he thinks and what he can build, and create a natural path toward working with him.

### Primary audience

**SaaS founders and potential clients** who may need help with:
- Building a product from an idea
- Product and frontend engineering
- AI engineering and practical AI integrations
- Improving an existing product
- Engineering-led growth systems and distribution

The site should also accommodate engineering peers, recruiters, collaborators, and people who simply enjoy Micheal's writing.

### Core positioning

Working direction (copy can be refined during implementation):

> I build products, explore ideas, and share what I learn along the way.

Supporting description:

> I work with founders to turn ideas into software, make existing products better, and put AI to practical use.

Possible capability labels:
- Product engineering
- AI engineering
- Growth systems

Do not present Micheal as only a frontend developer. His work spans product engineering, AI-enabled products, and distribution. Avoid inflated claims or generic agency language.

---

## Design inspiration

### Primary reference: Timonwa's personal website

**URL:** https://tech.timonwa.com/

Study the live site before implementation. Borrow selected structural and interaction ideas, but do not clone it or reproduce its exact visual identity, copy, or content.

Elements worth exploring:
- A clear personal introduction at the top, with a concise positioning statement.
- A visible "currently" / current-focus section that makes the site feel alive.
- Selected work presented as curated projects rather than a wall of generic portfolio cards.
- Numbered or clearly separated sections that make a long homepage easy to scan.
- Compact project descriptions with relevant tags and links.
- A clear contact / work-with-me call to action.
- A footer that links to other parts of the person's online presence and offers a newsletter or update subscription.
- The balance between professional credibility and a personal voice.

The reference combines an introduction, current roles, experience, selected work, speaking, contact, newsletter, and links to other parts of the creator's ecosystem. For Micheal's first version, simplify this: the homepage is the priority, and deeper pages can come later.

### Secondary inspiration: editorial / digital garden direction

Use these as visual direction references, not templates:
- https://nownownow.com/ — the broader idea of a "Now" page: a small, regularly updated snapshot of what someone is doing.
- https://maggieappleton.com/ — digital garden thinking: notes, ideas, and work can evolve over time rather than being treated only as polished articles.

If either reference is unavailable, use the descriptions above as guidance rather than blocking implementation.

---

## Visual direction

### Dark mode first

Dark mode is the default and primary design. The first impression should be intentionally designed for dark mode, not a light theme with its colors inverted.

Suggested direction:
- Deep charcoal / near-black background, not necessarily pure black.
- High-contrast but comfortable text.
- Muted secondary text.
- One restrained accent color for links, highlights, and interactive states.
- Subtle borders and surface differences to create hierarchy.
- Generous whitespace and strong typography.
- A distinctive serif or expressive display face for selected headings, paired with a highly readable sans-serif for body text.
- Small editorial details: section numbers, timestamps, category labels, understated dividers, footnotes, and occasional handwritten-style annotations where appropriate.

Provide a light-mode toggle as a secondary option if straightforward, but do not compromise the dark-first experience.

### Avoid
- The usual developer portfolio template.
- Giant gradient hero sections.
- Floating technology logos and skill meters.
- Generic laptop mockups.
- Excessive glassmorphism.
- Overdone animations, scroll-jacking, or cursor effects.
- Making every section look like a SaaS feature card.
- Overly corporate copy or generic claims such as "passionate developer building innovative solutions."

The site should feel personal, thoughtful, modern, and a little unconventional while remaining easy to navigate and credible to a founder.

### Responsive behavior

Design mobile-first and make the desktop layout feel intentional too. Pay particular attention to typography, spacing, navigation, and the reading experience on narrow screens.

---

## Homepage structure

Build the homepage as a curated, editorial landing page. It should introduce Micheal, show evidence of his work, surface recent thinking, and make it easy to contact him.

### 1. Navigation

Keep navigation compact.

Suggested links:
- Home
- Writing
- Projects
- Lab
- About

A clear **Work with me** link or button should be visible without dominating the navigation.

For this first milestone, links to pages that do not exist yet can be non-functional placeholders only if clearly marked in code for later wiring. Do not create all the secondary pages now.

### 2. Hero / introduction

The hero should quickly answer:
- Who is Micheal?
- What does he do?
- Why might a founder want to keep exploring?

Working copy:

**Micheal Tijani**

> I build products, explore ideas, and share what I learn along the way.

Supporting text:

> I work with founders to turn ideas into software, make existing products better, and put AI to practical use.

Potential links:
- Explore my work
- Read my notes
- Work with me

Use a personal, editorial layout. Do not make the hero look like a generic agency landing page. A portrait is optional; do not invent or generate one. If no suitable portrait asset exists, the design should work beautifully without one.

### 3. Currently / what I'm up to

A compact section that can be updated easily.

Possible content themes:
- Building and experimenting with AI-powered products.
- Working on product engineering and growth systems.
- Learning / exploring a technical topic.
- A current personal interest or non-work pursuit.

Use editable placeholder content where details are not confirmed. Do not invent current employers, clients, projects, or personal activities.

This section should eventually be easy to update from a small data file or content source.

### 4. Selected work

Show a small curated selection, not every project Micheal has ever touched.

Potential projects to consider:
- **Detecting AI** — built and owned much of the product frontend during early growth; the product reached 100k+ users and a $2M+ valuation. As the team grew, Micheal became frontend team lead for three engineers.
- **KadrHR** — HR/payroll/attendance product; work spans product engineering and organic growth / SEO experiments.
- **AudioNarrator** — a product that turns documents into audio and supports AI-assisted learning.
- **Animx** — an AI image and video creation product.
- **Review Miner** — a tool for mining competitor reviews to uncover recurring customer pain points and product opportunities.
- **AllSEO.ai** — a multi-agent content workflow for planning, writing, reviewing, and validating articles.

These are candidate entries, not a requirement to show all of them. Select 3–4 for the homepage and leave room for a future Projects page.

Each project item should have:
- Project name
- Short, specific description
- Micheal's role / contribution
- A few relevant tags
- Link to the product or a future case study, where available

Do not fabricate metrics, testimonials, client names, screenshots, or links. Do not imply that Micheal alone caused a product's valuation or user growth. Keep the distinction between his contribution and the product's overall outcomes clear.

### 5. Recent writing / notes

This is important: the site should feel like an evolving publication, not just a static résumé.

Show a handful of recent posts with:
- Title
- Short excerpt
- Date
- Topic/category
- Reading time if available

Possible categories:
- Engineering
- AI
- Building products
- Startups & distribution
- Learning notes
- Life & other things

The writing should allow technical and non-technical topics to coexist. Do not make every post look like a formal technical tutorial.

Use placeholder entries only where necessary and label them clearly. Do not invent published articles or dates.

### 6. Lab / useful things

Introduce a section for free tools, experiments, templates, and small utilities.

The first planned flagship tool is a **SaaS Opportunity Scanner**:

A founder provides a competitor product or public review source. The tool analyses available customer feedback and surfaces recurring complaints, feature requests, unmet needs, and possible positioning opportunities.

For the homepage, this can be a teaser / coming-soon feature. Do not build the tool as part of this milestone.

The section should communicate that Micheal makes useful things, not just writes about them.

### 7. Work with me / contact CTA

Close the main content with a clear, low-friction invitation.

Working direction:

**Have something you're trying to build?**

> Whether you need help turning an idea into a product, improving an existing product, or putting AI to practical use, let's talk.

Include a direct email/contact link only when the correct address is available in the project or supplied by Micheal. Do not invent an email address.

The CTA should feel like a natural invitation, not an aggressive sales pitch.

### 8. Footer

Keep it personal and useful.

Potential links:
- LinkedIn
- X
- GitHub
- Email
- Writing
- Projects
- Newsletter (can be marked as coming soon)

Only use verified profile URLs and contact details from the existing project or user-provided information. Do not guess social URLs.

---

## Content and tone

The voice should be:
- Direct
- Curious
- Thoughtful
- Human
- Confident without exaggeration
- Comfortable mixing technical and personal interests

Avoid generic AI-generated marketing language, exaggerated claims, and forced motivational statements.

The site should make room for unfinished thoughts and experiments, but the professional story must remain clear enough that a founder understands what Micheal can help with.

---

## Functional requirements for this milestone

This milestone is **homepage only**.

Implement:
- Responsive homepage layout.
- Dark mode as the default.
- Optional light-mode toggle if it can be implemented cleanly.
- Compact navigation.
- Clear section hierarchy and working in-page navigation where appropriate.
- Reusable components for project entries, writing entries, tags, and section headings.
- Content stored in simple typed data objects or local content files so it can be edited without rewriting layout components.
- Accessible semantic HTML, keyboard navigation, visible focus states, and good color contrast.
- Good loading performance and basic SEO metadata / Open Graph defaults.
- Subtle hover and entrance states only where they improve the experience. Respect reduced-motion preferences.

Do not implement authentication, a CMS, newsletter infrastructure, a database, the SaaS Opportunity Scanner, or the secondary pages in this phase.

### Suggested technical approach

Use the existing project stack and conventions if a codebase already exists. Do not replace working infrastructure unnecessarily.

If starting from scratch, a reasonable baseline is:
- Next.js App Router
- TypeScript
- Tailwind CSS
- MDX or local content files for future writing
- Small reusable components

Avoid introducing dependencies without a clear need.

---

## Definition of done

The homepage milestone is complete when:
1. The page feels like a distinctive personal website, not a generic developer portfolio.
2. Dark mode is polished and is the initial experience.
3. The first screen clearly communicates who Micheal is and the kind of work he does.
4. Visitors can quickly discover selected work, writing, current interests, and the future Lab.
5. There is a clear path for a founder to contact Micheal.
6. The layout works well on mobile, tablet, and desktop.
7. Content is easy to edit and extend when we add the other pages.
8. No invented claims, links, project details, or contact information have been introduced.

## Implementation instruction

Before coding, inspect the existing repository and identify its framework, styling system, current components, and conventions. Then implement the homepage within the existing architecture.

Prioritize a strong visual result and coherent content hierarchy over adding features. Do not build the other pages or tools yet. Once the homepage is approved, we will use its design system and components to expand the site.
