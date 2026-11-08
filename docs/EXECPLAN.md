# Verify library recipes against the React/TypeScript starter

This living plan follows `~/.codex/PLANS.md`. The completed environment plan is preserved in `docs/plans/2026-10-23-uniform-environment.md`. Starting source revision: `7b3b795`.

## Purpose / Big Picture

An agent following an approved library recipe should produce an app that passes the current strict TypeScript build and initializes correctly inside React. Maintainers must also reproduce historical library evidence without mixing it with a newer starter. The user requested fixes for missing library declarations and broken historical reproduction, updated recipes, and validation for the current starter. This work does not publish the site, migrate student apps, or claim novice/platform outcomes.

## Progress

- [x] (2026-11-08) Read project rules, prior plan and current starter; split typing, historical reproduction and recipe work among independent agents.
- [x] (2026-11-08) Added approved type dependencies and narrow declarations; focused compiler/policy checks pass and existing JavaScript fixtures remain accepted.
- [x] (2026-11-08) Froze historical reproduction inputs from 1ef3863; fresh preparation, three locked builds and historical boundary checks pass.
- [x] (2026-11-08) Updated all sixteen recipes with standalone typed examples, shared React ownership guidance, and bounded worker lifetimes.
- [x] (2026-11-08) Added a current-starter check compiling documented examples, executing twelve model assertions, and testing dependency policy and publication assets; added it to Mac/Windows CI.
- [x] (2026-11-08) Inspected all twelve visual integrations, selected repeated mounts/hide-show, worker results/cancellation, keyboard behavior and production output at desktop/320px.
- [x] (2026-11-08) Final repository/package and production-build checks pass; patch version, generated catalogs, simplification and bounded evidence are finalized for the ordinary commit.

## Surprises & Discoveries

The review reproduced TS7016 (missing declarations) for approved Papa Parse, Leaflet, seedrandom and jStat imports. Installing a type package then failed the approved dependency checker. Frappe Gantt and Tabulator also need declarations. Historical preparation copied the current starter and deleted a file removed by the React migration; later configuration changes also assumed the old starter. React StrictMode repeats initialization/cleanup in development, exposing resource lifecycle problems in imperative library examples.

Compilation also exposed changed React Flow connection types, Reveal's scroll-threshold declaration and the timeline's content declaration. Source review found pending Reveal initialization cleanup and missing-node/direction handling in the Flow summary. Browser review found Gantt opened on empty dates before the task; selecting its start and reusing the existing theme adapter fixed the view. Development file-watching retained stale modules on this host; restarting the owned preview established current source. A temporary 1.5-second worker-start delay made HiGHS cancellation observable, then was removed before the final production build.

## Decision Log

2026-11-08: Keep package versions in `references/libraries.json`. Optional per-library `devPackages` records type-only development packages; `declarations` names bundled narrow declaration files. Require companion types only for TypeScript projects. A declaration describes an external JavaScript API; it must not replace checking with unrestricted `any`.

2026-11-08: Freeze historical preparation resources from pre-migration revision `1ef3863` inside the evidence directory. Preserve original fixture sources, lockfiles and reported outcomes. Current-release checks remain separate.

2026-11-08: Compile examples extracted from actual library skills rather than maintain a second recipe implementation. Validation is maintainer tooling. Pure model operations stay outside React; visual examples demonstrate resource creation/update/cleanup. The common starter and optional-library boundary remain intact.

2026-11-08: Put Frappe Gantt in a same-origin iframe so its document owns listeners that the pinned library cannot destroy. Keep one frame during ordinary view switches; unmount disposes the document. Reuse the canonical theme adapter inside the frame. Compile and run the same twelve pure-model assertions in Node and the browser using existing Vite; no new testing dependency is needed.

## Outcomes & Retrospective

Implemented Web Application Builder 0.3.1. All sixteen documented examples compile and bundle with the private current runtime; twelve known-answer checks pass in Node and browser. Type-only dependencies and narrow declarations preserve strict checking and existing JavaScript apps. Historical preparation and all three frozen builds pass independently of the mutable starter. Current production worker/WASM paths, ordinary visual lifetimes and selected cancellation/recovery behavior were observed. Native Windows, Intel Mac, clean-device, full listener instrumentation and student validation remain explicitly unverified; no publication or existing-app migration occurred.

## Context and Orientation

Repository root: `/Users/jordan/Projects/decision-999`. `plugins/web-application-builder/references/libraries.json` owns supported versions and dependency roles. Its `scripts/check-dependencies.mjs` rejects unsupported manifests and lockfiles. `assets/managed-starter/` supplies React, Vite, TypeScript and private Node/npm launchers for new apps. Each `skills/<library>-browser-app/SKILL.md` is an installed recipe. `scripts/build.py` validates inventory and generates catalogs; `scripts/check.py` checks repository boundaries in temporary copies. `evidence/web-application-builder/libraries/` holds historical JavaScript fixtures.

## Plan of Work

Extend inventory and checker with type-only companions and narrow declarations. Update build validation to understand those fields without putting every optional type in the starter. Explain selected-recipe typing in managed-build guidance.

Freeze historical build configuration, theme assets, notices and dependency policy. Preparation must use only frozen resources and recorded fixture source/lockfiles, independent of the current starter.

Replace incomplete JavaScript snippets with self-contained typed examples. A shared React reference explains effects, cleanup and asynchronous work. Workers retain local assets and cancellation. The new maintainer script extracts examples into a disposable current starter, installs exact selected dependencies, copies declarations/notices, then runs policy checks, strict compilation and production build. CI invokes the same check. Browser inspection establishes rendering/interaction separately.

Update the patch release and evidence index, regenerate manifests, review surrounding code and callers, and delete redundant policy or scaffolding. Never commit downloaded runtimes, dependencies or generated site output.

## Milestones

First, all previously failing imports and other untyped recipes compile while missing, misplaced or unapproved type dependencies still fail. Second, all three historical fixtures prepare and build independently of current plugin files. Third, all sixteen documented examples compile in the current baseline and lifecycle-sensitive examples work in the browser. Finally, bounded evidence and repository checks support the release.

## Concrete Steps

From the repository root run:

    python3 scripts/check.py
    python3 scripts/check-app-environment.py
    python3 scripts/check-library-recipes.py
    python3 evidence/web-application-builder/check.py
    python3 evidence/web-application-builder/libraries/prepare.py /private/tmp/builder-historical-reproduction
    claude plugin validate .
    git diff --check

The recipe script supports a new named destination for retaining an app for browser inspection. Build the three historical fixtures using their documented locked-install commands, then run their checker. Generate catalogs with `python3 scripts/build.py`; narrowly scoped filesystem permission may be required for protected catalog metadata.

## Validation and Acceptance

Compile the actual sixteen recipes with strict TypeScript enabled. Removing a required type companion or placing it in the wrong role must fail. Unsupported dependencies and stale locks must still fail. Production assets include local workers/WASM and notices where selected. Verify independent known answers, visible useful output, mount/unmount recovery and asynchronous cleanup. Historical preparation produces all three directories and their locked builds pass. These checks do not certify business models, accessibility or novice usability.

## Idempotence and Recovery

Use temporary or explicitly new fixture directories; refuse existing output destinations. Keep runtime/cache/dependencies in disposable projects. Never install into shipped starter assets. Stop owned previews before cleanup. Preserve existing apps and historical fixture sources. Use ordinary commits, never reset or rewrite unrelated history.

## Artifacts and Notes

Record commands, versions, results and limits in `evidence/web-application-builder/2026-11-08-react-recipes/`. Skill snippets are the source for current compilation checks. Historical reproduction inputs retain provenance. No generated apps, runtime caches, node_modules or dist are committed.

## Interfaces and Dependencies

Existing inventory `packages`, `peers`, `tooling` and `devTools` keep their meanings. Optional `devPackages` adds exact type dependencies; optional `declarations` names `.d.ts` files under `assets/types/`. The checker owns role policy. Each recipe exports a component or useful operation; multi-file worker examples name their companion file. The Python maintainer check uses the standard library for orchestration and the shipped private runtime for TypeScript/Vite work.

Revision note: Replaced the completed environment plan with this requested work, preserving the earlier plan. Updated after compilation, independent review and browser checks to record implementation choices, corrected failures and actual remaining limits.
