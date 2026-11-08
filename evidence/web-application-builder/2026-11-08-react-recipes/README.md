# React/TypeScript recipe verification — November 8, 2026

Web Application Builder 0.3.1 fixes missing type companions and historical reproduction after the 0.3.0 starter migration. These are maintainer integration checks on macOS ARM64, not complete business applications, student usability results, or new live deployments. Existing gallery counts and historical fixture sources/lockfiles are unchanged.

## Reproduce the current checks

From the repository root:

    python3 scripts/check-library-recipes.py

The standard-library Python script copies the current starter to a disposable project, extracts the actual TypeScript/TSX blocks from all sixteen library skills, and installs exact approved direct packages using the shipped private runtime. It copies selected declarations, theme adapters, notices and Gantt structural CSS. It rejects a missing type companion, a type package in the runtime role, an unapproved package and a stale lockfile; a recorded JavaScript-style manifest without TypeScript/type companions remains accepted. It typechecks the documented recipes and theme consumers, bundles the recipes at `/recipe-check/`, and checks local WASM, entry assets and notices. It also bundles the same pure-model checks used by the browser harness into ignored `.toolchain/` output and executes them in Node. A failed assertion or compiler/build error fails the command.

To retain the generated app for interaction review, choose a destination that does not exist:

    python3 scripts/check-library-recipes.py --project /private/tmp/builder-recipe-review
    cd /private/tmp/builder-recipe-review
    bash app.sh dev --port 9367

Open `http://127.0.0.1:9367/recipe-check/`. Use the library selector, Unmount/Mount and Hide/Show controls. Stop the owned foreground server, then run `bash app.sh preview --port 9368` and inspect `http://127.0.0.1:9368/recipe-check/`. On Windows use `powershell.exe -NoProfile -File .\app.ps1` in place of `bash app.sh`. The check is included in the Mac/Windows environment CI workflow; this record does not claim a native Windows or remote CI run.

## Observed automated results

The final clean recipe check passed with Node 24.22.1, npm 11.19.1, TypeScript 5.9.3, Vite 8.3.4 and React 19.3.0. All sixteen documented recipes compile and bundle; the optional JavaScript theme adapters have checked typed consumers. Development-only type notices are excluded from the shipped runtime notices. The combined dependency install reported zero known vulnerabilities at this run.

The same twelve model assertions pass in Node and in development/production browser previews. They cover quoted/BOM/CRLF CSV and explicit amounts, missing headers and empty-amount rejection, filtered totals of revenue 20 and cost 7, zero totals for an empty filter, mean 4 and sample variance 4 for 2/4/6, singleton variance rejection, the documented seedrandom first draw, replay, distinct seeds, preservation of Math.random and negative-count rejection. These are bounded integration cases, not general statistical accuracy claims.

Repository/catalog clean-copy checks, exact type-pin/declaration validation, independent historical preparation with the current starter removed, overwrite refusal, the existing Git/publication boundary suite, the private-runtime setup/build/recovery suite, Claude marketplace validation and whitespace checks pass.

## Observed browser behavior

The Codex in-app browser inspected the exact extracted examples in development with StrictMode and in a production preview under `/recipe-check/`. All twelve visual recipes loaded; the four pure-data recipes are represented by the known-answer checks. Initial desktop inspection used the browser's 881px viewport; narrow inspection used a verified 320px viewport. Relevant narrow views had document scroll width 320px. This is not physical-device or full accessibility certification.

ECharts displayed 390/234, survived hide/show and remount, and retained its text equivalent. React Flow's keyboard-accessible connect button created Order to Ship; remount reset it. Motion changed profit from 300 to 380 after ten added units and reset on remount. Mantine applied and reset its scenario state. The timeline showed Launch preparation in January; Tabulator rendered `<b>South</b>` literally and reconciled total revenue 390. Mermaid rendered Order then Ship after asynchronous initialization and remount. Leaflet rendered a local synthetic polygon, accepted zoom and survived hide/show/remount. Reveal preserved numeric-input ArrowUp behavior (20 to 21) and navigated to the Decision slide; remount and narrow layout were checked.

Gantt loaded its local standalone module in a separate iframe document, survived hide/show and remount, and displayed January 5–7 with a 135px three-day task bar. A narrow review initially showed the empty pre-task date range; `scroll_to: 'start'` fixed the initial view. Its existing theme adapter now styles the child document, avoiding duplicated theme rules. Parent document width remained 320px.

DuckDB queried local authored rows and returned revenue 390 in development and production. Cancellation, retry, and unmount during a run followed by a successful remount/run were observed. HiGHS returned the independently enumerable integer optimum: x=4, y=1, objective 14, including production worker/WASM loading and remount. The tiny normal solve finished too quickly for a reliable cancellation click. In the disposable development copy only, inserting `await new Promise(resolve => setTimeout(resolve, 1500));` at the start of the worker handler made startup cancellation observable; Cancelled followed by a successful retry was verified. That injected delay was removed, exact documented source restored, and the production app rebuilt before final checks.

Inspected browser warning/error logs were empty. The Vite development server initially kept old transformed source after file writes; restarting it established the corrected modules. First HiGHS use also triggered Vite dependency optimization and a development reload; retry and production use succeeded. Build output warns about the large chunks in this intentionally all-library fixture and externalizes HiGHS's Node-only `node:module` branch; actual browser worker solving passed. DuckDB development source-map warnings concern upstream source paths, not failed queries.

## Corrections found during validation

Missing declarations were reproduced for Papa Parse, seedrandom, Leaflet, jStat, Tabulator and Frappe Gantt. The inventory now owns exact development type companions or narrow bundled declarations, and the checker enforces the development role in TypeScript projects. No strict-mode relaxation or blanket module declarations were added. Theme JavaScript exports have matching declaration files for typed consumers.

Compilation caught React Flow's required connection handles, Reveal's typed scroll threshold and the timeline's declared content type. Source review corrected Reveal cleanup during pending initialization and made React Flow summaries reflect actual edge direction. The fixed-endpoint connection button is disabled after deleting either endpoint, and summaries no longer dereference missing nodes. Gantt import errors now enter its loading/error handling. Worker completion clears cancellation callbacks and disables Cancel so a completed result cannot be relabeled cancelled. Browser checks cover ordinary lifecycle behavior; exact listener counts during every asynchronous interleaving were not instrumented. The final deleted-node control guard received source review and strict compilation; reverse-edge dragging and deleted-node recovery were not separately exercised in the browser.

## Historical reproduction

The [historical library reproduction](../libraries/README.md) now uses frozen build/configuration/theme/notice/policy inputs from revision `1ef386355c34514f1c81bb56a28ddf39e27d55b9`, with provenance in its reproduction directory. All three original fixtures prepared and built with their frozen locks, and their dependency/publication/Git checks passed. No original source fixture, lockfile, browser result or reported historical count was rewritten. The historical operations lock's newly reported DOMPurify advisory is recorded there separately; it does not describe the freshly installed current fixture.

## Remaining limits

Native Windows, Intel Mac, real managed-device restrictions, actual Work routing, fresh novice-student journeys and complete business-app evaluations remain open. The combined fixture tests integration rather than arbitrary library combinations or optimal download size. TypeScript checks and the twelve small model assertions do not certify business models, model calibration, accessibility or every cancellation/deadline path. No repository was published and no existing app was migrated.
