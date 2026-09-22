# ICRA Website

Official website of the **International Centre for Recovery and Adaptation (ICRA)** / **Міжнародний центр відновлення і адаптації**.

This repository is the ICRA website itself. It began from an Astro healthcare starter, but the current architecture, content model, visual language and components are ICRA-specific. Do not treat this repository as a reusable healthcare theme.

## Production

- Framework: Astro 7
- Language: Ukrainian
- Styling: ICRA semantic CSS tokens + Tailwind CSS utilities
- Content: Astro Content Collections
- Deployment: Vercel
- Canonical working/production branch: `icra-home-a`
- Node.js: 22.12.0+

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Main ICRA page |
| `/about` | About ICRA and its people |
| `/services` | Consultations, formats and methods |
| `/library` | ICRA Library |
| `/library/[slug]` | Individual library material |
| `/life` | Життя ICRA, journal/chronicle |
| `/life/[slug]` | Individual journal entry |
| `/social` | Social activity |
| `/women-space` | Women's Space |
| `/contact` | Contacts |

Historical route names such as `/careers`, `/info` and `/blog` must not be used in new code. If compatibility redirects exist, they are redirects only.

## Repository map

```text
src/
├── assets/
│   ├── brand/          # logo and brand assets
│   ├── shared/         # assets genuinely shared by several pages
│   └── pages/          # page-owned visual assets
├── components/
│   ├── core/           # reusable ICRA primitives
│   ├── journal/        # journal presentation
│   ├── library/        # library presentation
│   └── sections/       # large semantic page sections
├── content/
│   ├── journal/        # one folder per Життя ICRA entry
│   └── library/        # one folder per library item
├── data/               # small site-wide static data, primarily navigation
├── layouts/            # global page shell
├── lib/                # content helpers and shared logic
├── pages/              # Astro routes
├── styles/             # global ICRA design system
└── content.config.ts   # Content Collection schemas
```

## Content model

### Library

Each material is self-contained:

```text
src/content/library/<slug>/
├── index.md
├── cover.jpg
└── optional files
```

The frontmatter schema is defined in `src/content.config.ts`. Start new entries from `src/content/library/_template/`. Publishing instructions live in `src/content/library/README.md`.

### Життя ICRA

Each journal entry is self-contained:

```text
src/content/journal/YYYY-MM-DD-slug/
├── index.md
├── cover.jpg
├── 01.jpg
├── 02.jpg
└── ...
```

Start from `src/content/journal/_template/`. Publishing instructions live in `src/content/journal/README.md`.

Content images stay with their Markdown entry. They do not belong in `src/assets/pages/`.

## Design system

Global design rules live in `src/styles/`.

- `tokens.css`: design tokens only: color, spacing, typography, radii, shadows.
- `core.css`: containers, semantic surfaces, typography and reusable primitives.
- `shell.css`: header, navigation and footer.
- `interactive.css`: interactive behavior and reusable action styles.
- `site-concept.css`: intentional ICRA-wide visual compositions that are not generic primitives.
- page-local `<style>`: only composition unique to that page.

See `src/styles/README.md` for the contract.

### Typography

The canonical heading scale is:

- 72px: rare poster/display accent
- 52px: display / H1
- 38px: H2
- 26px: H3

Do not invent page-specific heading sizes when a design token already exists.

### Surfaces

A semantic surface owns both its background and its text contrast. Components should read `--surface-heading`, `--surface-text`, `--surface-muted`, `--surface-link`, `--surface-accent` and `--surface-border`.

Do not create parallel light/dark contrast systems.

## Assets

Page images belong under `src/assets/pages/<page>/`. Brand assets belong under `src/assets/brand/`. Use `src/assets/shared/` only when an asset is genuinely shared.

Journal and Library images live beside their Markdown.

Do not add demo assets, template screenshots, stock starter images or an `originals/` archive to production source. Source/original files that are not used by the site should live outside the production repository.

## Components and pages

Pages should read as compositions, not as giant component implementations. Large semantic sections belong in `src/components/sections/<area>/`; reusable primitives belong in `src/components/core/`.

Avoid atomizing ordinary markup. Extract a component when it represents a reusable primitive or a meaningful section with its own responsibility.

## Naming

- Components: PascalCase, e.g. `JournalEntry.astro`
- Routes and content slugs: lowercase kebab-case
- CSS design-system classes: `icra-*`
- CSS variables: `--icra-*` for global tokens and `--surface-*` for semantic surface values
- Content entry folder: descriptive slug; journal entries start with ISO date

Names must describe current ICRA meaning, not the page/component's origin in the old starter.

## Public copy

The public site is Ukrainian unless a deliberate bilingual element is part of the design.

Do not use the long em dash character in public copy. Preserve existing approved wording unless the task explicitly includes copy editing.

## Development

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

Before deployment, `npm run check` and `npm run build` should pass.

## Architecture decisions

Read `ARCHITECTURE.md` before making structural changes. It is the handoff document for a developer or AI entering the project without prior conversation context.

## License and provenance

The repository retains the license required by its original open-source base where applicable. Current ICRA-specific code, structure, content and design are maintained as the ICRA website.
