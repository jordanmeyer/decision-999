# Design

Every app uses the starter's Duke styling. `app/theme/base.css` styles headings, text, links, buttons, form fields and tables, plus the classes `lead`, `card`, `answer`, `grid`, `scroll` and `number`. `app/theme/theme.ts` gives charting libraries the colour order (`series`), the named colours and the fonts.

## Layout

- Put the question, its inputs and the answer close together; on a phone the answer comes right after the inputs.
- Lead with the answer in plain words, then the detail behind it.
- Label every number with its unit and align numbers on the right in tables.
- Give every chart a table or a sentence that states what it shows.
- Let colour carry information only, always with a second cue such as a label or position.
- Use navy for headings and main actions; take further colours from `series` in order.
- Put wide tables inside a `scroll` container so the page never scrolls sideways.
- Leave out decoration that carries no information: stock photos, gradients, ornamental icons.
- Give every control a visible label; every control works with the keyboard and shows its focus.
- Bundle every font, library and data file; the page loads nothing from another website.
- Show no Duke logo or seal and make no claim of affiliation with Duke.

## The project README

Write it like a good open-source README, for anyone who finds the project, never mentioning recruiters or the course:

1. What the project is and the problem it solves.
2. The live link and `process/screenshots/desktop.png`.
3. How to use it, with one worked example.
4. How it works, in plain language.
5. Limitations.
6. How it was built, linking to `process/plan.md`, `process/journal/` and `process/backlog/`.
7. Credits and licence.
