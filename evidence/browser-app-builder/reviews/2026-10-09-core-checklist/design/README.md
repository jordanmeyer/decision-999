# Shared design-core verification — 2026-10-09

This is a fresh starter/theme check on the configured Mac. It does not modify or revalidate the ten historical example applications.

## Changes under test

The canonical Campus Designer now bundles the existing directory site's unmodified EB Garamond 400 and Open Sans 400/600 normal TTF files, their OFL notices, and a local CSS loader. The tokens remain the only owner of heading/body stacks and palette values. Both Browser App Builder starters copy those canonical assets; adapters read the same stacks. Managed production notices include both font licenses.

The canonical design references address natural headline wrapping, lining/tabular figures, action icon semantics, compact decision views and dense-control hit areas. They preserve task-dependent layout choices rather than requiring every application to use a dashboard template.

## Reproduction

Use a new temporary folder. From the course repository, copy `plugins/browser-app-builder/assets/starter/` to `plain/` and `plugins/browser-app-builder/assets/managed-starter/` to `managed/` there. Copy `assets/library-themes/` into the managed app's `theme/adapters/`, and this record's [specimen.html](specimen.html) to `managed/app/numbers.html`. Change the temporary managed Vite base to `/design-check/`.

In the managed folder, run `npm ci` using a writable cache, then `npm run build`, `npm run dev -- --port 9612`, and `npm run preview -- --port 9613`. The exact executed install used `--cache /private/tmp/bab-core-design-npm-cache`; the default user cache was not writable, and no global cache ownership was changed. Node 22.19.0, npm 10.9.3, Vite 8.3.4 were used.

Open the development specimen at `http://127.0.0.1:9612/design-check/numbers.html` and the built starter at `http://127.0.0.1:9613/design-check/`. The plain app was served on loopback port 9611 with this machine's existing Python server for maintainer verification; this is not a student runtime requirement. The temporary projects were at `/private/tmp/bab-core-design-check-2026-10-09/`.

For explicit font-state reporting, the isolated starter's app.js appended the same `document.fonts.ready` / FontFace enumeration block shown in the specimen. That instrumentation is not shipped in the starter. For responsive checks, each specimen was embedded in an authored same-origin iframe of 320 or 1440 CSS pixels; the browser reported inner client widths of 319 and 1439 under its scaling. No global browser viewport setting was changed.

## Observed results

- Plain starter: EB Garamond 400 and Open Sans 400 FontFace states were `loaded`; the unused Open Sans 600 remained `unloaded`, as expected with lazy font loading. Enter on “Check interaction” produced the expected working-interaction status.
- Managed production starter: the same actual loaded fonts, canonical computed family stacks, and `lining-nums tabular-nums` were observed. Vite emitted versioned local font filenames under `/design-check/assets/`; the page asset inventory showed two loaded local fonts, a local stylesheet and a local script, with no remote assets. This inventory is an observation of these interactions, not proof that arbitrary JavaScript cannot transmit data.
- The numeric/adapters specimen loaded all three faces, including Open Sans 600 for the table heading. Its JavaScript token adapter printed the canonical published stacks. Heading, KPI, table and reveal-style numeric text had lining/tabular figures. The figure setting was checked after a real defect was found: the starter's `font:` shorthand initially reset the h1 variant to `normal`; the starter and heading adapter now set the variant explicitly.
- At narrow width, clientWidth and scrollWidth were both 319; at desktop they were both 1439. No horizontal page overflow. Actual heading wraps, numerals, control labels and disclosure content were visually inspected in [narrow.png](narrow.png) and [desktop.png](desktop.png).
- The primary action measured about 56.6 CSS pixels tall, and the summary about 24 pixels under browser scaling. Keyboard Enter opened the calculation notes without losing the disclosure focus. This checks the supplied minimal specimen, not every library control.
- Production and specimen console warning/error arrays were empty.
- `npm ci` and `npm run build` passed. The initial command aimed at the course repository found no package.json; rerunning in the isolated managed project passed. Production output contains both complete font copyright/license notices and all three local font files. [fonts.json](fonts.json) records sizes and hashes; all font bytes match the existing licensed site files. License text copies only normalize trailing whitespace.
- The standalone skill-creator validator could not run because the machine's Python lacks PyYAML. This is a validator environment limitation; the repository's normal skill/manifest validation is handled by the coordinating agent.

## Limits

This verifies the shared starter and representative CSS/JavaScript adapter font wiring. It is not a new integration run of every library, all font weights, full accessibility conformance, clean-machine setup, Windows, or Work skill routing. Only the supplied normal styles are bundled; the instructions require obtaining a licensed file when another style is needed. The font bundle is approximately 634 KB uncompressed, with browser loading limited to faces actually used.

The temporary servers were stopped after verification. Historical application evidence remains intact and must not be relabeled as passing this newer design review.
