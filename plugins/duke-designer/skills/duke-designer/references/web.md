# Web implementation

Use this reference for webpages and interfaces, after the shared brand references. These defaults adapt to the project; they are not an official Duke component system.

## Duke accessibility scope

The brand Colors page names WCAG 2.0 AA. The linked [Duke Guidelines](https://web.accessibility.duke.edu/duke-guidelines/) specify that new/substantially modified unit sites must incorporate WCAG 2.0 AA **to the extent feasible** (effective November 2017). They **encourage**, to the extent feasible, WCAG 2.1 AA for new sites/digital content from September 2023. Do not relabel that encouragement as a 2.2 mandate. The guidelines also require accurate captions for multimedia on Tier 1/2 homepages. See [S11–S12](sources.md).

**Skill default:** implement to WCAG 2.1 AA, with reduced-motion support as additional general accessibility practice. Apply any stronger project requirement. Neither this checklist nor an automated scan certifies full conformance.

## Content and responsive layout

**Skill defaults:** Start with readable body text around 1–1.125rem and line-height around 1.5–1.65; keep long prose near 60–75 characters per line where practical. Use relative units and a consistent spacing rhythm (for example 0.5, 1, 1.5, 2, 3rem). These are starting points, not required Duke measurements.

Choose hierarchy for the task: concise event details plus registration; an editorial reading column and section navigation for research; or activities and membership for a student group. Use content-driven breakpoints, sensible gutters and flexible layouts. Stack columns as space runs out. Do not turn every section into cards or rely on a full-screen photo hero.

Let long headings wrap naturally; avoid fixed heights, truncation, forced desktop line breaks and shrinking text until it fits. Test the actual longest title, including unbreakable words/URLs where relevant. Keep actions readable and distinct when wrapping. Allow header navigation and approved marks to fit without crowding their clear space.

## Build accessible behavior

**General accessibility practice:**

- Use meaningful landmarks and a coherent heading order. Keep DOM reading order aligned with visual order, provide a skip link for repeated navigation, and use real links for navigation and buttons for actions.
- Make menus, forms, dialogs and registration flows keyboard-operable. Give every control a name/label; preserve visible focus, logical order and an escape/close route without keyboard traps. Check the registration destination or clearly report an unresolved link.
- Use [checked color pairings](color.md), plus non-color cues. Verify default, hover, focus, selected and error states. Use a focus treatment that contrasts with its adjacent surfaces; a two-color ring is a practical option, not a Duke requirement.
- Label form fields and give clear error messages associated with their fields; do not rely on placeholder text as a label. Show validation and completion states without losing focus or information.
- Provide meaningful image alternatives, captions for relevant media and accessible equivalents for data graphics. Avoid baking ordinary copy into images.
- Honor `prefers-reduced-motion` for nonessential animation and give appropriate controls for moving media. A static presentation is valid; animation is not a Duke identity requirement.
- Keep navigation and targets usable by touch. Test text enlargement and reflow: 200% text sizing and a 320 CSS-pixel-wide viewport (or equivalent 400% zoom) without lost content or two-dimensional page scrolling, except genuinely two-dimensional content such as data tables.

## Inspect the output

Render at representative desktop and narrow widths and at the project's intended sizes; do not merely inspect source code. Check longest headlines, font loading/fallback, crop changes, logo buffers, reading order, navigation, registration behavior and all interaction states. Keyboard-test without a mouse. Measure actual foreground/background pairs; a passing token table does not validate overlays or custom states. Use the project's existing checks where useful and report the exact scope tested.

The optional [tokens](../assets/duke-tokens.css) provide named values and default type stacks only. They introduce no reset, component classes, network requests, or implicit permission to use marks. Copy needed declarations into the existing design system instead of installing another framework.
