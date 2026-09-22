# ICRA CSS contract

The CSS architecture has one job: make global decisions once and leave page files responsible only for composition.

## Files

- `tokens.css`: values only. Colors, spacing, typography, containers, radii and shadows.
- `core.css`: reusable ICRA primitives and semantic surfaces.
- `shell.css`: header, navigation and footer.
- `interactive.css`: shared interactive states and action styles.
- `site-concept.css`: deliberate site-wide compositions that are too specific for core primitives.
- `tailwind.css`: Tailwind integration and utilities still used by Astro templates. Do not create a second design token system here.

## Surface contract

Use `.icra-surface` with a modifier such as `.icra-surface--sand` or `.icra-surface--dark`. A surface modifier sets both background and semantic contrast variables.

Children read:
`--surface-heading`, `--surface-text`, `--surface-muted`, `--surface-link`, `--surface-accent`, `--surface-border`.

Do not add separate `.surface-light` / `.surface-dark` systems.

## Typography

Use the ICRA scale from `tokens.css`: 72 / 52 / 38 / 26 px for display-xl / display-H1 / H2 / H3.

## Page-local CSS

Allowed: unique grid composition, deliberate offsets, page-specific visual storytelling.
Not allowed: redefining global heading sizes, brand colors, button primitives, containers, or generic surface contrast.
