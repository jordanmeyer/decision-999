# Make browser applications the primary site

This living ExecPlan follows `~/.codex/PLANS.md`. The preceding local plan is preserved without modification at `docs/plans/2026-10-10-madness-source-blends.md`.

## Purpose / Big Picture

Visitors to decision-999 will browse working browser applications, search by purpose or library, filter by category, and open either the live app or its GitHub source. The course focuses on creating apps with Web Application Builder. Preserve the existing plugin platform at `/plugin-platform/` and its existing listing, install and about routes; it becomes a dormant alternative rather than the site's primary message.

## Progress

- [x] (2026-10-11) Applied the user’s final layout and copy revisions: screenshot-only NCAA hero, simplified cards, renamed navigation, four-step process on the white home section, removed course and getting-started pages/section.
- [ ] Publish the reviewed app platform to main and verify GitHub Pages.

- [x] (2026-10-11) Renamed the plugin and evidence directories to `web-application-builder` and updated authored references to Web Application Builder.
- [x] (2026-10-11) Regenerated catalogs; repository, Git/publication boundary and Claude package checks passed. Verified the renamed install page and copy status in the browser. The optional skill validator could not run because both available Python runtimes lack PyYAML; repository skill validation passed.
- [x] (2026-10-10) Compared the published home, directory and About/course page after the user's design correction.
- [x] (2026-10-10) Restored the original multi-page design, full footer and home sections. Verified search navigation, filters, course navigation, keyboard copy, and 390/320 frame widths.
- [x] (2026-10-10) Inspected templates, generator, filters, published example records and canonical design guidance.
- [x] (2026-10-10) Preserved the prior local execution plan and selected the route/data design.
- [x] (2026-10-10) Implemented the curated app registry, primary home and preserved plugin home.
- [x] (2026-10-10) Verified all twenty external destinations, search/filter/reload behavior, escaping and preserved routes.
- [x] (2026-10-10) Inspected desktop and 390/320 frames, keyboard navigation, empty search and install copy controls; updated documentation.

## Surprises & Discoveries

The first local implementation collapsed the directory and course into the home page, removed the original footer structure, and omitted several home sections. Comparing the actual published pages confirmed this did not meet the requested clone. Preserve their page roles and section layouts while adapting the copy to browser apps.

The existing home and directory are generated from plugin manifests; examples have live URLs and screenshots but no explicit repository URLs. The old tournament example name and description are stale. The new app registry must contain current descriptions and explicit verified source links without rewriting the dormant plugin listings. Existing local config/catalog and evidence edits belong to earlier work and must be preserved. Browser viewport overrides were affected by inherited zoom, so desktop CSS width was measured and narrow layouts were inspected in fixed-width frames. See the validation record for exact measurements and the isolated legacy-page console observation.

## Decision Log

2026-10-11: Rename the product and install identifier across the project at the user's request. Keep per-stage skill identifiers (such as `setup-browser-app`) because they describe their browser-app operation, not the plugin's name. Update authored documentation and paths; retain captured application source, trial artifacts, deployment records and screenshots as historical evidence. External `bab-example-*` repositories are existing destinations, not local package names, and retain their URLs.

2026-10-10: Restore the published design's separate pages. Use `/apps/` for the searchable collection, `/build/` for builder installation, `/course/` for the full course page, and `/` for a landing page with featured examples. Clone the original home, directory, install and About templates and reuse their CSS. Keep original plugin routes preserved and unlinked from the app platform.

2026-10-10: Removed the app footer's plugin-directory link after the user's correction. Dormant means preserved and unlinked from the app platform.

2026-10-10: Make `/` the new app platform and preserve the former home at `/plugin-platform/`. Retain all plugin paths and installation packaging. Use a separate app page shell so the preserved platform retains its navigation and content. Its brand links return to its preserved home.

2026-10-10: Author app listings in `site/apps.json`, separate from installable plugin manifests. Start with ten fuller examples; earlier minimal trials remain on the existing plugin listing. Identify examples as maintainer-built, not student outcomes. Reuse local screenshot evidence, fonts, colors and the existing client-side search behavior. No new framework, backend, external runtime requests or public submission flow.

## Outcomes & Retrospective

Implemented the new primary app platform and ten curated records, retaining the previous home and all plugin routes. Build, boundary checks, marketplace validation and whitespace checks pass. Browser review verified search intersections, reload, empty/reset, keyboard card actions and responsive layouts. All live/repository destinations returned HTTP 200. The initial single-page design failed the user’s requested fidelity. The corrected version restores the original home sections, separate directory, full course and installation pages, and footer. Unneeded app-specific layout CSS was removed so both platforms share the original layout rules. Source and maintenance notes are complete; publication remains a separate action.

## Context and Orientation

Work in `/Users/jordan/Projects/decision-999`. `scripts/build.py` reads plugin manifests, generates install catalogs, and renders templates from `site/` into ignored `dist/`. `site/main.js` implements search and category filtering. `site/style.css` supplies shared local fonts and design styles. `scripts/check.py` builds isolated copies and exercises invalid inputs. Site name, canonical URL and repository remain in `site/config.json`; app-specific metadata will be nested there without replacing plugin catalog descriptions. `plugins/campus-designer/skills/campus-designer/` is the canonical design source. Browser apps live in separate repositories; this change links them rather than copying their code into the platform.

## Plan of Work

First add the app registry with names, descriptions, categories, libraries, data qualifications, HTTPS app/repository links and local screenshot paths. Validate identifiers, links and screenshot containment before copying only selected images to `dist/apps/`. Add an app-focused home template and layout using shared CSS and JS. Preserve the original templates and render the original home at its alternate route; existing plugin pages retain their URLs and navigation.

Then generalize the directory's count label and optional extra card so the same filtering implementation serves both galleries. App search uses URL query parameters and works with category filters, reload and keyboard access. Without JavaScript, all app links remain available. Keep new styles scoped to the app platform. Keep the landing page separate from the searchable gallery. Clone the original home layout into `site/app-home.html`, directory into `site/apps.html`, About/course into `site/app-course.html` and installation into `site/app-build.html`. Use the original multi-column footer and the same responsive styles. Home search submits to `/apps/`; the main navigation links to `/apps/`, `/build/` and `/course/`.

Finally extend checks for registry validation, safe rendering, source/live links and preserved routes. Run the repository checks and inspect actual desktop and narrow pages. Document gallery maintenance, the preserved route and actual validation results.

## Concrete Steps

From the repository root run `python3 scripts/build.py`, `python3 scripts/check.py`, `claude plugin validate .`, and `git diff --check`. Start `python3 scripts/serve.py` and open `http://localhost:8000/decision-999/`. Test the gallery, `/plugin-platform/`, `/plugins/` and builder installation copy controls. Stop only the preview process started for this task.

## Validation and Acceptance

The root has the original landing-page sections with two featured apps; the searchable gallery is at `/apps/` and the four-step process is on the home page at `/#process`. All app-platform navigation stays within the new platform. Each of ten gallery cards has working live and repository URLs and a real local preview. A text search and category filter intersect correctly, an unmatched query shows a clear reset action, and reload preserves search state. At desktop and 390/320 CSS pixels, headings and controls fit without horizontal overflow. Keyboard users can reach search, filters and both card actions. The prior home and plugin directory still render with their original content. Generated catalogs continue to pass validation. A malicious URL or escaping preview path is rejected; descriptions are escaped rather than interpreted as HTML. No unused evidence or app bundles enter dist.

## Idempotence and Recovery

The build is repeatable and regenerates only output and existing catalogs. Preserve authored templates for the previous platform and keep app metadata independent. Never overwrite an existing plan archive, reset unrelated files or copy dependency folders. If a remote link cannot be verified, record that limitation rather than inventing success.

## Artifacts and Notes

Use `docs/VALIDATION.md` to record browser sizes, inspected interactions and limitations. Store new platform screenshots under `evidence/browser-app-platform/`. The archive above contains the exact prior local plan, including its existing uncommitted work.

## Interfaces and Dependencies

Add `load_apps(root)` to validate `site/apps.json` and `app_card(app, base)` to render escaped app records. Extend the existing build page writer to select the app shell for the home, gallery, course and builder setup pages; keep all plugin generation intact. Use Python standard library, plain browser JavaScript and existing CSS. There are no new runtime packages.

Revision note: Initial plan records the user's shift from building plugins to building applications while preserving the prior platform.

Revision note: Completed implementation and local validation; kept the app gallery independent from dormant plugin listings and recorded measured browser sizes instead of nominal viewport settings.

Revision note: Compared the published original after user feedback and restored its multi-page structure and section layouts. The app platform links only to its own pages, live applications and source repositories.

Revision note: Renamed the product and install package to Web Application Builder throughout authored project content. Fixed a catalog check that assumed its synthetic fixture sorted last; it now verifies unique inclusion. Captured historical artifacts remain unchanged.
