# ICRA Architecture

This document is the technical handoff for a developer or AI encountering the ICRA website for the first time.

## 1. What this project is

ICRA is the International Centre for Recovery and Adaptation. The site is conceived as a digital residence: a coherent place containing the organisation, its people, practice, library, social work, Women's Space and living chronicle.

It is not a generic clinic template and should not drift back toward generic healthcare-site conventions.

## 2. Canonical branch

`icra-home-a` is the canonical working and production branch. Do not synchronize structural changes to experimental or historical branches unless explicitly requested.

## 3. Architecture principles

1. Structure must explain itself through names.
2. One concept has one canonical implementation.
3. Global rules belong in the design system, not repeated page CSS.
4. A page composes semantic sections. It should not become a 40 KB monolith when a section has a clear independent responsibility.
5. Content belongs in Content Collections when editors should add entries without editing route code.
6. Images have one canonical home.
7. No legacy compatibility layer is allowed to become permanent architecture.
8. Preserve approved public copy unless copy editing is explicitly requested.
9. Prefer boring, predictable engineering underneath expressive visual composition.

## 4. Canonical routes

```text
/                  home
/about             about ICRA
/services          services and formats
/library           library index
/library/[slug]    library material
/life              Життя ICRA
/life/[slug]       journal entry
/social            social activity
/women-space       Women's Space
/contact           contacts
```

Old semantic mismatches such as `careers = library`, `info = social`, or `blog = life` are historical only and must not appear in new links or component names.

## 5. Content Collections

Schemas are centralized in `src/content.config.ts`.

### library
Helper logic: `src/lib/library.ts`.
Presentation: `src/components/library/`.
Routes: `src/pages/library/`.
Content: `src/content/library/`.

### journal
Helper logic: `src/lib/journal.ts`.
Presentation: `src/components/journal/`.
Routes: `src/pages/life/`.
Content: `src/content/journal/`.

Do not duplicate type labels or slug logic in pages.

## 6. Design system

The design system is semantic. Pages should use tokens rather than inventing nearby colors and sizes.

Heading scale:
- display-xl 72px
- display/H1 52px
- H2 38px
- H3 26px

Surface rule: the surface class defines background and contrast variables together. Descendants consume semantic `--surface-*` variables.

Special palettes such as Library wood/paper and Women's Space wine/gold are allowed because they are intentional sub-identities. Their values still live in global tokens.

## 7. CSS ownership

`tokens.css` has values, not layout.
`core.css` has reusable structural primitives.
`shell.css` owns header/footer.
`interactive.css` owns shared interactive treatment.
`site-concept.css` owns rare site-wide ICRA compositions.
Page styles own only that page's composition.

If the same CSS rule is copied to several pages, it probably belongs in the design system or a component.

## 8. Components

Use three levels:

- core: generic ICRA primitives such as Heading, Surface, Card, ActionLink.
- feature components: Library and Journal components that understand their domain.
- sections: large page-specific semantic blocks.

Do not create components merely to wrap a div. The goal is navigability, not maximum file count.

## 9. Asset ownership

```text
src/assets/brand/       logo and identity
src/assets/shared/      truly shared site visuals
src/assets/pages/...    page-owned visuals
src/content/...         content-owned visuals
```

Do not keep unused originals, starter-theme demo imagery, duplicated optimized/original pairs, or screenshots in production source.

## 10. Editorial conventions

Public copy is primarily Ukrainian. Avoid long em dashes in public text. Content entries use Markdown with YAML frontmatter. Dialogue and paragraphs are separated by blank lines.

## 11. Safe change procedure

Before a structural edit:
1. inspect the current canonical branch;
2. identify all references to the old path/name;
3. make one coherent change;
4. run Astro check and build;
5. inspect affected routes on desktop and mobile;
6. commit with a message that describes the architectural intent.

## 12. Definition of done

The codebase is considered understandable when a new developer can answer these questions from filenames and these docs without reconstructing project history:
- where does a page live?
- where does its imagery live?
- where does repeatable content live?
- where is a color/type/spacing rule defined?
- where is shared behavior defined?
- how is a new Library or Життя ICRA entry added?
- which branch is canonical?
- which routes are public?
