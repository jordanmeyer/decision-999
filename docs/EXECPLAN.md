# Correct the Tournament Atlas fidelity checklist

This living ExecPlan follows `~/.codex/PLANS.md`. The completed earlier work is preserved in `docs/plans/2026-10-09-madness-geometry.md`. The user’s new acceptance checklist is `docs/MADNESS-REVIEW.md`.

## Purpose / Big Picture


Make the published Tournament Atlas behave like the requested original across all ten played tournaments, not merely the previously inspected 2023 screen. Visitors should see a clean bracket, explore the nearest slot with the pointer or keyboard, understand dates and results accurately, and read every team label. All 21 review findings must receive an explicit verified outcome or an honest remaining limitation.

## Progress


- [x] (2026-10-09) Read the complete user review, current source, prior evidence, canonical design references and plan requirements.
- [x] Archived the completed geometry plan without overwriting an archive; preserved unrelated configuration/catalog edits.
- [x] Assigned separate UI and data/model work, plus an independent reviewer responsible for the expanded browser matrix.
- [x] Implemented canonical labels for 680 team records, evidence-derived snapshot status and pure model regressions; 80/80 Node checks passed.
- [x] Corrected geometry, pointer/rest/pin behavior, route rendering, results, timeline and responsive controls.
- [x] Independent review passes all 21 findings: 112 states, all years/four desktop widths, 11,168 label measurements with zero clips, plus phone and actual interactions.
- [x] Clean source `7ffc82d` passes 80/80 Node/browser checks and production build; all existing data facts compare identical.
- [x] Published app `0ed4442`; exact Actions run 38019734396 succeeded and returning-browser assets, known odds, clean rest and Results were verified.
- [ ] Refreshed gallery evidence and completed build/check/Claude validation plus desktop/narrow keyboard/copy checks; gallery publication remains.
- [x] Recorded bounded review outcomes and stopped all four owned preview/test processes.

## Surprises & Discoveries


The previous numerical tests and bounded visual passes missed clipping in nine of ten years, completed-round probability bands, inconsistent results identity and distorted SVG scaling. The reviewer measured the reference’s fixed 1004px drawing and 12px names. The new acceptance therefore checks every year and several viewports, with late forecasts and Results in addition to initial snapshots.

The current working tree includes unrelated featured-order changes in `site/config.json` and generated catalogs, an untracked `.claude/` folder and another review document. Preserve these. The application lives outside the course workspace and requires the host’s filesystem permission for edits and Git operations.

## Decision Log


2026-10-09: Use the user’s 21-item review as the correction scope. Preserve existing data/model boundaries and deliberate differences: men only, no logos, navy routes, separate Results, keyboard access, sticky table names and clearly labeled later-year reconstructions.

2026-10-09: Use one fixed 1004px coordinate system, canonical generated short labels and a single accessible date control. These remove inconsistent layouts and duplicate control ownership. A continuous white-to-navy numerical table scale implements the user’s explicit direction; branding colors remain unchanged.

2026-10-09: Separate implementation ownership from independent review. Do not call a source-only or one-season pass a full rendered pass. Human screen-reader, physical touch and novice usability remain unverified; the user previously reserved screen-reader checks for a person.

## Outcomes & Retrospective


Data/model support is implemented with 80/80 Node checks. Independent whole-file comparison confirms all existing facts and probabilities are unchanged after removing only new label metadata and explanatory prose. The UI and all 21 requested corrections have an independent bounded pass. Final app publication `0ed4442` passed its exact Actions run and live checks. Source `8f9147c` adds only a separately reviewed removal of a duplicate Winner label; the broader matrix remains attributed to `7ffc82d`. Gallery publication remains. Prior reports remain historical evidence, including their insufficient acceptance scope.

## Context and Orientation


Course repository: `/Users/jordan/Projects/decision-999`. Application repository: `/Users/jordan/Projects/bab-example-madness`, initially clean at `6f98ed0`. Authorized live application: `https://jordanmeyer.github.io/bab-example-madness/`. User authorization covers ordinary corrective commits to that repository and the gallery.

`app/main.js` owns rendering and interactions, `app/style.css` their presentation, and `app/index.html` the control structure. `app/model.js` contains calculation helpers shared with `tests/cases.js`; `tests/run.mjs` runs those cases in Node, and `tests/index.html` runs them in a browser. `data-preparation/` and `scripts/derive-forecasts.mjs` generate the bundled `app/public/data/` JSON files. Preserve every existing probability, game score and result. A probability vector records seven cumulative stages from reaching the Round of 64 through winning the title; 0 and 1 represent impossible and already secured stages.

Data covers 83 archived FiveThirtyEight snapshots for 2016–2019 and 2021–2023, cancellation in 2020, and one explicitly labeled T-Rank/log5 pre-tournament reconstruction in each of 2024–2026. A reconstruction computes advancement from frozen team-strength ratings and is not a publisher forecast. Dependencies remain locked Vite 8.3.4 and ECharts 6.1.0. Use existing Node 22.19.0/npm 10.9.3, local fonts and static same-origin assets.

## Plan of Work


### Milestone 1: Canonical data presentation


Generate per-team bracket and paired-slot abbreviations in data preparation rather than UI maps. Keep display fields deterministic and check every year’s labels at the narrowest actual bracket size. Derive snapshot status from certainty in recorded probability vectors and matching completed game records, keeping daily precision honest. Add meaningful model cases for completed stages, per-slot losses, result descriptions and metadata. Compare the delivered data against the starting revision after removing only new presentation metadata; probabilities and results must remain identical.

### Milestone 2: Correct the visualization


Use a fixed centered 1004px SVG and matching HTML coordinates. Start every year with no selected team; provide a central instruction. Whole-bracket pointer movement selects the nearest precomputed slot; click or Enter pins, Escape clears, and leaving an unpinned preview returns to the clean state. Use one roving keyboard tab stop with arrows navigating slots/rounds. Build accessible labels during render and skip redundant route updates.

Draw route bands and percentages only for unresolved probabilities strictly between zero and one. Grow/shrink stages with the requested staggered timing and respect reduced motion. Use light highlighted name strips, dark text and a larger bold probability for the pointed stage. Unresolved First Four strips are gray, replacing the pair with the previewed team’s name during preview. Results identity follows the previewed team and indicates its actual finish; dim only the slot where a team was eliminated.

Merge year/mode/view controls into a compact row. Put snapshot status inside the bracket and a visible pinned-team chip nearby. Replace redundant timeline widgets with one accessible track, available-date ticks, selected round text and a disabled final-date tick when no archived snapshot exists. Replay every 500ms with hover suspended. Respond to resizing unless the visitor explicitly chose a view. At 1024px the fixed bracket must fit; on phones the table puts title odds beside the short name, folds seed into name and removes unhelpful columns. Keep all text at least 10px and names 12px. Use a continuous monotonic probability heat scale with measured readable foreground contrast.

### Milestone 3: Verify and publish


The independent reviewer compares the reference and candidate, covers all 21 items, and reports remaining defects directly to the developers for correction. Inspect all years 2016–2026, desktop widths 1024, 1217, 1280 and 1680, and phone width 375. Include late snapshots, Results, First Four, playback, keyboard and pinned/rest states. Save actual measurements and screenshots under `evidence/browser-app-builder/madness/2026-10-09/checklist-review/`; retain failed rounds.

After meaningful source tests and browser tests pass, build production output and verify it under the repository URL path. Inspect all changes, create a clean source checkpoint, update application evaluation and publication records, and push ordinary commits to main. Verify the exact GitHub Actions commit and live known answers, labels, clean state and new assets in a returning browser. Refresh the gallery image and evidence wording, run course validation, and push only related course files. Preserve unrelated generated-catalog and configuration edits.

## Concrete Steps


Run application commands from `/Users/jordan/Projects/bab-example-madness` with the existing Node directory on PATH:

    PATH=/Users/jordan/.nvm/versions/node/v22.19.0/bin:$PATH node tests/run.mjs
    PATH=/Users/jordan/.nvm/versions/node/v22.19.0/bin:$PATH npm run build
    PATH=/Users/jordan/.nvm/versions/node/v22.19.0/bin:$PATH npm run test:browser -- --port 9741
    PATH=/Users/jordan/.nvm/versions/node/v22.19.0/bin:$PATH npm run preview -- --port 9742

Open `http://localhost:9741/tests/` and `http://localhost:9742/bab-example-madness/`. The existing suite starts at 74 passing checks; record the actual new count rather than assuming it. Stop only the processes started for this task.

Run from the course root after evidence/listing changes:

    python3 scripts/build.py
    python3 scripts/check.py
    claude plugin validate .
    git diff --check

Preview the generated gallery at desktop and narrow widths, including its links and copy control. Use ordinary staged-file inspection and commits, never broad staging of unrelated edits.

## Validation and Acceptance


The initial bracket has no route or automatic favorite. Pointer movement over blank space previews the nearest slot. A pin is visible and Escape clears it. Late Houston snapshots contain no completed-round bands or 100% labels; Results center identity follows the same team as the strips. Check full measured text bounds in all played years and selected/bold states. A 1004px tree stays undistorted at every desktop width, with the bracket initially visible at 1024px. The phone table presents title odds without an initial horizontal scroll, and its first team appears well before the bottom of an 812px viewport.

Keyboard Tab enters and exits the bracket in one stop; arrows traverse slots and stages. The single timeline moves through available dates, marks an unavailable title date, plays at 500ms and reports actual completed games from the data. Heat intensity is monotonic and text contrast remains readable. Pure tests and browser results agree. Preserve Houston’s initial 2023 title chance 0.22085016963, known champions, all 39,508 original probabilities and all 1,428 reconstructed probabilities. Exact deployment success and live behavior must be observed before calling publication complete.

## Idempotence and Recovery


Preserve existing history, archives, user edits and trial repositories. Keep failed review rounds. Correct with ordinary edits and commits; do not rewrite history. If a deployment fails, inspect its exact run before retrying. The app remains entirely static, with no dependency or external-service expansion. Keep generated bundles and dependency directories out of course evidence. Do not claim human or device tests that were not performed.

## Artifacts and Notes


Primary review: `docs/MADNESS-REVIEW.md`. Reference: `https://web.archive.org/web/20240411121651/https://projects.fivethirtyeight.com/madness-2015/index.html#mens`. Prior geometry evidence is preserved under `evidence/browser-app-builder/madness/2026-10-09/geometry-review/`. New independent reviewer scratch report: `/private/tmp/madness-checklist-review.md`.

## Interfaces and Dependencies


No new runtime dependencies. Canonical generated team labels and snapshot metadata are consumed by UI and tests. Native HTML/SVG handles the bracket and table; ECharts remains responsible only for selected-team forecast history. Production Vite output is the only Pages artifact. Application handoffs remain readable Markdown and identify evaluated and published revisions separately.

Revision note (2026-10-09): Reopened the correction against the user’s broader fidelity checklist because previous one-season visual acceptance missed systemic behavior and layout defects.

Revision note (checklist candidate): Expanded rendered acceptance found and corrected control-stack height, inaccurate Results model badges, no-pin browser restoration and First Four pressed-state cleanup. Final source is `7ffc82d`, with 80/80 Node/browser checks and a 112-state independent review.

Revision note (publication): Final app source follow-up `8f9147c` and report commit `0ed4442` are live, with returning-browser `main-DKaVtwEg.js` and the corrected champion label verified. The course build initially caught an evidence link escaping its publication boundary; its explicit source URL passes checks. All owned servers are stopped.
