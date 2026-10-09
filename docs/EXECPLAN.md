# Expand Browser App Builder with approved JavaScript libraries

This living ExecPlan follows `~/.codex/PLANS.md`. Maintain Progress, Surprises & Discoveries, Decision Log, and Outcomes & Retrospective. The completed trial plan is archived at `docs/plans/2026-10-08-browser-app-builder-trials.md`.

## Purpose / Big Picture


Students describe an application in ordinary language; the agent selects suitable approved libraries, builds it with Campus Designer styling, evaluates calculations and interactions, and prepares GitHub Pages output. Add thirteen focused library skills and an optional agent-managed Node/npm/Vite build path. Published applications remain self-contained. Approval covers tested versions/configurations, not every library feature or combination.

## Progress


- [x] User confirmed thirteen core libraries, managed tooling, and no external runtime services or telemetry.
- [x] Inspected workflow, freshness, designer tokens, maintainer checks, and official Vite guidance.
- [x] Archived completed trial plan without overwriting an archive; saved replacement.
- [x] (2026-10-09) Verified thirteen exact configurations, peers, notices, audits and isolated browser operations.
- [x] (2026-10-09) Implemented managed starter, dependency checks and locally verified publication packaging.
- [x] (2026-10-09) Added selection guidance and thirteen focused skills; isolated CLI installation exposes nineteen total skills.
- [x] (2026-10-09) Added canonical-token adapters and corrected observed narrow-layout issues.
- [x] (2026-10-09) Passed 31 isolated/combination browser cases after review corrections and recorded selection/non-selection walkthroughs; automatic Work routing remains a separate gate.
- [x] (2026-10-09) Updated version 0.2.0 listing/docs and generated catalogs; repository, dependency, freshness and plugin checks passed.
- [x] (2026-10-09) Recorded a locally verified pilot candidate with explicit external evidence gaps.

- [ ] Verify an authorized live managed Pages deployment and returning-browser update. No destination authorized for this expansion.
- [ ] Verify actual ChatGPT Work routing/handoffs, clean-machine macOS/Windows installation and novice usability.

- [x] (2026-10-09) Corrected dependency placement, chart emphasis colors and Gantt lifecycle; 31 browser checks, locked production rebuilds and targeted boundary checks passed. Previous reports preserved in review-fixes/before/.

- [x] (2026-10-09) Completed three independent builds from empty folders: pricing 25/25, inventory 13/13 and sales 28/28 browser checks. Verified actual library use, source/plan freshness and local production behavior; no push or publication.

## Surprises & Discoveries


The current 0.1.2 workflow forbids Node installation/build systems and copies app/ directly to dist/. Both rules need a managed-build alternative. Campus Designer already has canonical CSS tokens and is generated into this plugin by scripts/build.py. Previous plain-app trials caught stale entry scripts; managed applications need versioned build assets and returning-browser checks.

Existing unrelated edits affect site/config.json, both generated marketplace catalogs, and untracked .claude/. Preserve them. This configured machine has Node 22.19.0 and npm 10.9.3. Registry inspection, installation and browser trials established compatible configurations. An initial low-severity KaTeX advisory required a pinned override. reveal.js 6 exports reveal.js/reveal.css; the older dist subpath failed. Narrow reveal slides required fixed scaling and disabling automatic scroll activation; a native file input needed explicit sizing. Two runtime packages required supplemental license notices. Final audits reported zero known advisories. The sandbox blocked the default npm cache; a temporary writable cache completed reproduction without global changes. Evidence and failure details are in evidence/browser-app-builder/libraries/.

Fresh trials found a native form-reset timing bug, narrow currency/text overflow and an incorrect chart paint-order assertion; all were corrected with failed rounds retained. Managed previews occasionally required restarting after source changes. Bundle-size warnings remain approximately 536 kB for inventory and 979 kB for sales. Evidence: evidence/browser-app-builder/trials/2026-10-09/.

## Decision Log


Decision: ship the thirteen core libraries first, with specialist mapping/WASM/video/spreadsheet tools deferred. The user chose staged support rather than approving the entire attachment.

Decision: retain plain apps without required Node; new library apps use managed Vite builds, with React only when needed. Use JavaScript/JSX rather than adding TypeScript. This limits duplicate distribution recipes and unnecessary tooling.

Decision: allow development-time dependency downloads, but no visitor-side remote scripts, fonts, data services, telemetry, backend, login or secrets. Pin direct packages and commit the resolved lockfile.

Decision: canonical Campus Designer remains authoritative. Adapters translate its existing CSS tokens, not a separate palette. Keep system fonts, unchanged Duke blues and no marks or endorsement claims.

Decision: skill descriptions support implicit discovery; Plan/Build also explicitly consult a selection guide. Record selected libraries and build mode in PLAN.md. Prepare 0.2.0 only after local validation, retaining external gates.

Decision (2026-10-09): keep lifecycle scripts disabled, retain reviewed supplemental runtime notices, and pin the Mermaid KaTeX override. Actual builds and audits established these requirements. Record selection walkthroughs separately from automatic host routing; no independent Work routing trial was available.

Decision (2026-10-09): repeat the original three applications with ordinary briefs and no prescribed libraries. Freeze plugin3966d48 and let each agent select the smallest useful set. Retain production previews for user review, stop test servers, and perform no push or deployment before review.

## Outcomes & Retrospective


Version 0.2.0 is implemented as a locally verified pilot candidate: thirteen approved library recipes, managed Vite tooling, Campus Designer adapters and nineteen discoverable skills. Presentation passed 10/10 browser cases after review corrections, dashboard 13/13 and operations 8/8. Three production builds at a repository-prefix URL and a second fresh reproduction passed; notices and publication boundaries were checked. Repository generation/checks and isolated Codex/Claude installation passed. Earlier live examples still demonstrate only version 0.1.1. No new live deployment was attempted. Work routing, clean-machine setup, novice usability, comprehensive network interception and full accessibility remain unverified. Browser viewport limitations required fixed-width review frames; nested-frame actions were unreliable, so keyboard interactions were tested in top-level previews.

Fresh independent trials completed 66 browser checks: pricing chose no library, inventory chose seedrandom/ECharts, and sales chose Papa Parse/Tabulator/ECharts. Imports, production behavior, exact dependency checks and source/plan freshness confirm those choices. Sanitized snapshots and simulated planning transcripts are saved under evidence/browser-app-builder/trials/2026-10-09/. Local previews remain available on ports9312/9322/9332 and comparison9300; test servers are stopped. Existing public examples and plugin files are unchanged. These results support explicit plugin-guided selection on this Mac, not automatic Work routing or live publication.

## Context and Orientation


Work in /Users/jordan/Projects/decision-999. plugins/browser-app-builder/plugin.json owns the listing; skills/ holds five workflow skills and generated Campus Designer. references/workflow.md owns shared rules and references/evaluation-freshness.md binds reports to Git source. scripts/build.py discovers skills, copies the designer from plugins/campus-designer/skills/campus-designer/, and generates catalogs; scripts/check.py validates repository boundaries. Python remains maintainer tooling only.

The allowlist records supported direct packages; package-lock.json freezes their indirect dependencies too. Vite turns source modules into static production files. Node/npm run only during development/build, not on the visitor's machine.

## Plan of Work


### Milestone 1: Approved inventory


Create references/libraries.json inside the plugin, owning exact packages/versions, peers, skill paths, documentation/license evidence and limitations. Candidate skills/packages are echarts-browser-app/echarts; react-flow-browser-app/@xyflow/react; vis-timeline-browser-app/vis-timeline; frappe-gantt-browser-app/frappe-gantt; tabulator-browser-app/tabulator-tables; motion-browser-app/motion; mantine-browser-app/@mantine/core plus @mantine/hooks; reveal-browser-app/reveal.js; mermaid-browser-app/mermaid; papa-parse-browser-app/papaparse; arquero-browser-app/arquero; jstat-browser-app/jstat; seedrandom-browser-app/seedrandom. React, React DOM, Vite and its React plugin are infrastructure, not extra skills.

Verify stable compatible versions against official registry metadata/distributions. Inspect licenses, peer packages, install scripts and advisories. Freeze exact versions before trials; use no floating latest recipes. Retain redistribution notices in output. Each approved candidate must build and perform its operation locally without external runtime requests. Failed candidates remain unapproved with specific evidence; do not silently substitute. Remotion and all specialist candidates remain deferred.

### Milestone 2: Managed workflow


Keep assets/starter and assets/pages.yml for plain apps. Add assets/managed-starter and assets/pages-managed.yml. Managed source stays app/, tests stay tests/, while package.json, package-lock.json and vite.config.js live at root. Ignore node_modules and dist. Starter carries only Vite, adding selected dependencies later. Provide npm run dev, test:browser, build and preview. Bind servers to loopback; production root is app/ and output ../dist; test mode serves project root so tests import real ../app modules. Add React/JSX support only when selected.

Setup reuses compatible tools or guides an official architecture-appropriate Node installation without replacing unrelated software, adding Homebrew/WSL/Python, or bypassing OS restrictions. Verify fresh invocations. Record tested Node/npm, use the same Node version in CI, exact direct versions and npm ci for repeatable builds. Planning can precede Setup; conversion inspects conflicts before replacing anything.

Managed Pages installs locked packages, builds, verifies dist/index.html, uploads only dist and deploys with minimal permissions. Set the repository base path before final evaluation. Blank-project production and test previews must work at a non-root URL; Setup reruns preserve work and blocked installation remains an explicit gap.

### Milestone 3: Selection and skills


Create references/library-selection.md. Plan/Build load selected skills and record reasons/build mode in PLAN.md. Each concise skill links shared policy/inventory and provides an actual usage pattern, theme configuration and meaningful checks. Use ECharts for charts, Tabulator for substantial tables, React Flow for editable diagrams, Mermaid for text diagrams, vis-timeline for events, Frappe Gantt for task schedules, reveal.js for slides, Mantine for React controls, Motion for purposeful animation, Papa Parse for CSV, Arquero for transformation, jStat for statistics and seedrandom for local reproducible streams.

Do not add overlapping libraries or React for a simple form. Clarify interactive-local versus remote-updating meanings of live. Direct invocation still honors scope, plan and setup. Unapproved packages require maintainer review or an approved alternative. Record real routing observations including non-selections; manifest discovery alone is not routing evidence.

### Milestone 4: Design adapters


Read canonical identity/color/typography/web/review references. Add assets/library-themes with only reusable needed adapters, copying selected ones into apps. CSS references canonical tokens; JS reads computed token values. Use Georgia/Arial, explicit chart/diagram/table/slide/control settings, scoped selectors, structural vendor CSS and no remote fonts. Preserve blue values in hover/disabled states, contrast, keyboard focus and non-color cues. Computational libraries need no visual adapters. Use strict Mermaid rendering and text-safe imported values; never replace global Math.random or tie simulations to frame timing.

### Milestone 5: Evaluation and trials


Extend relevant-source checks to manifests, lockfile, config, adapters and tooling; exclude generated dependencies/output. Preserve separate committed/staged/unstaged/untracked checks and semantic plan review. Rebuild from locked clean source; run browser calculation tests and separately inspect production output.

Create isolated synthetic presentation (reveal/ECharts/jStat/seedrandom), dashboard (Mantine/Papa/Arquero/Tabulator/ECharts), and operations (React Flow/Mermaid/vis-timeline/Gantt/Motion) applications. Preserve individual-library demonstrations for isolation. Pricing 20/12/100/500 must yield profit 300. Sales rows total revenue/cost/profit 390/234/156 and North subset 240/144/96. Independently specify seeded/deterministic expectations and schedule dates. Test malformed/quoted CSV, missing columns, empty filters and HTML-like text.

Inspect chart resizing after hidden slides, slide keys versus focused inputs, view cleanup, graph edits, schedule dates, reduced motion, keyboard controls, desktop/narrow rendering, console errors, same-origin assets and source links. Record failures and corrections; do not claim arbitrary combinations are certified.

### Milestone 6: Integration


Save sanitized source fixtures/prompts/results/licenses/version records/reproduction instructions under evidence/browser-app-builder/libraries; no node_modules, caches or generated bundles. Update README, listing, all workflow skills, MAINTAINING and VALIDATION. Keep earlier examples and their historical versions accurately labeled. Set 0.2.0 after local acceptance and regenerate catalogs without discarding unrelated ordering edits. Simplify repeated version/policy declarations and unused assets.

No new live repository is authorized by this expansion. Prepare local publication completely; leave live deployment/update checks incomplete absent an authorized destination. Work routing, clean-machine macOS/Windows and novice usability are independent gates.

## Concrete Steps


From each managed trial root, run npm ci, npm run build, npm run test:browser -- --port 9201, and npm run preview -- --port 9202 (use distinct ports for concurrent trials). Open actual test/production URLs and record results. Stop only trial processes.

From the course root run python3 scripts/build.py, python3 scripts/check.py, claude plugin validate ., git diff --check, and python3 scripts/serve.py. Expect valid generated catalogs/manifests, passing boundaries and no whitespace errors. Inspect desktop/narrow listing, keyboard/copy controls, example/evidence links. Add meaningful inventory/dependency/publication checks rather than wording tests.

## Validation and Acceptance


Require thirteen approved/discoverable recipes with evidence, managed starter, themes and reproducible individual/combined behavior. Reject unapproved direct dependencies; dependency/config/source changes make evaluation stale, report-only changes do not. Opposing staged/working edits and untracked source must not evade checks. Production contains app assets/notices only, no test/report/dependency tree. Observe network behavior and disclose its limits. If publication is later authorized, verify exact commit and returning-browser update; build/push alone is insufficient.

## Idempotence and Recovery


Preserve files, archives, repositories and unrelated configuration. Never force push or rewrite history. Retain failed rounds and rerun affected checks after ordinary corrections. Dependency upgrades require inventory review/revalidation; do not upgrade during unrelated builds. Keep blocked candidates out of approval and continue independent work.

## Artifacts and Notes


Deliver updated plugin, thirteen skills, exact inventory, selection guide, managed starter/workflow, theme adapters, sanitized evidence and documentation. Exact versions and results come from implementation evidence, never invented passes.

Revision note: saved the user-approved expansion for implementation, retaining all six milestones and explicit release gates; condensed repeated explanations while preserving implementation and acceptance requirements.

## Interfaces and Dependencies


Five workflow skills and Campus Designer remain; thirteen library skills are added without marketplace schema changes. PLAN adds libraries/build mode; SETUP tools; EVALUATION dependency/production evidence; DEPLOYMENT exact results. Plain apps require no Node; managed apps use pinned Node/npm/Vite and optional React. Both deploy static files with no external runtime service or secrets.

Revision note (2026-10-09): completed the simplification pass (removed unused fixture-generator state and duplicated manifest generation, clarified plain-only build instructions), verified gallery desktop/narrow output, and stopped all trial preview processes. Catalog regeneration retained only the pre-existing ordering differences, so those unrelated edits remain uncommitted. Recorded implementation, 30 observed browser passes, reproduction and dependency findings; retained external release gates instead of claiming unavailable environments passed.

Review follow-up (2026-10-09): Independent review reproduced skipped notices for bundled devDependencies, ECharts emphasis color lifting and accumulating Frappe document listeners. Require runtime dependency placement, retain solid chart states, and use a document-lifetime schedule container. The pinned Gantt version has no destroy API, so repeated component unmount is outside this recipe.

Review outcome (2026-10-09): all three findings corrected. Runtime notices are protected by dependency-field validation, chart states use solid colors, and the schedule instance survives repeated navigation. Tests import the real operations component; no generic lifecycle abstraction was added. External release gates remain open.

Correction validation: repository generation/checks, manifest validation and whitespace checks passed; gallery reports 31 cases. The optional skill-creator validator lacks PyYAML, so repository skill validation is the available evidence. Temporary browser tabs and preview servers were closed.

Fresh-trial request (2026-10-09): user requested three subagents to restart the original examples from empty folders before pushing. Freeze corrected plugin3966d48, avoid earlier fixtures, record ordinary-language selection and simulated Q&A, and stop publication at local preparation. Pricing may correctly select no library.

Fresh-trial outcome (2026-10-09): three requested subagents finished original applications from empty folders, with independent coordinator checks and preserved failures. Saved reproducible source snapshots and compared final source against evaluated commits. No push; publication and external host/usability gates remain open.
