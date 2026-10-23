# Uniform new-app starter and contained local setup

This living plan follows `~/.codex/PLANS.md`. The design plan is preserved at `docs/plans/2026-10-23-product-design.md`. Rollback checkpoint before implementation: `1ef3863`.

## Purpose / Big Picture

Every new app uses Vite, React and TypeScript, with a private pinned Node/npm runtime and caches inside its project. Agents perform setup, build and preview without global installations or permanent environment changes. Existing apps keep their recorded source, dependencies and commands. Visitors continue receiving static browser assets.

## Progress

- [x] (2026-10-23) Committed all current work before implementation as 1ef3863; preserved original reference bytes.
- [x] (2026-10-23) Inspected starter, dependency checker, setup/evaluation/deployment instructions and official runtime artifacts.
- [x] (2026-10-23) Implemented one new-app starter and macOS/Windows bootstraps with a shared command runner.
- [x] (2026-10-23) Updated workflow routing, inventory, version and release metadata without changing existing apps.
- [x] (2026-10-23) Passed macOS ARM64 provisioning/build/lifecycle integration checks and desktop/390px/320px browser checks; recorded native Windows and clean-account limits.
- [x] (2026-10-23) Reviewed and simplified ownership, regenerated catalogs, validated repository/plugin; implementation is committed separately from the rollback checkpoint.

## Surprises & Discoveries

Current managed setup uses system installers and the starter has Vite only. The existing dependency checker treats all non-Vite dependencies as runtime libraries, so TypeScript/type-package placement must be explicit. Existing managed apps and CI already rely on their own package scripts; do not overwrite them. This host is macOS ARM64 and has no Windows PowerShell available. npm rejects using the same path for user and global config; the runner now uses two empty project-local files. Node reports Windows as win32 while its archive directories use win; review corrected the mapping. Lock generation must run from the real project directory rather than a symlinked --prefix path.

## Decision Log

2026-10-23: Use the existing managed-starter directory for new projects, retaining the plain starter for existing-app maintenance only. Keep React/Vite pins already approved and add pinned TypeScript/types. Use official portable Node 24.22.1 archives with checked-in SHA-256 hashes. npm ships with that archive. No shared cache, version manager, Docker, new component library or general migration engine.

2026-10-23: Use two small platform entrypoints (`app.sh`, `app.ps1`) for provisioning, then one Node command runner for project-local environment and commands. Servers remain foreground processes managed by the agent's terminal session; no daemon or global process-killing command. Cleanup checks active owned commands and deletes only generated paths.

## Outcomes & Retrospective

Implemented Web Application Builder 0.3.0 with one typed starter, project-local portable runtime, two small bootstraps and one shared runner. Existing apps, legacy plain starter and gallery source are unchanged from 1ef3863. macOS ARM64 integration checks pass with system Node removed from PATH; repository checks and plugin validation pass. The browser readiness interaction works at desktop and 390px/320px widths with no horizontal overflow and local fonts loaded. Native Windows, Intel Mac, clean-account/device-policy, interrupted-transfer and student trials remain release gates. The new Mac/Windows CI workflow has not run remotely. See the review record for exact checks and limits; implementing a platform script does not establish its validation.

## Context and Orientation

Repository root is `/Users/jordan/Projects/decision-999`. `plugins/web-application-builder/assets/managed-starter/` is copied into new app roots. The plugin's `references/libraries.json` owns approved dependency pins; the generated project owns its package manifest/lockfile and runtime manifest. `scripts/check-dependencies.mjs` checks dependency roles and lockfile provenance. `assets/pages-managed.yml` builds new apps in CI. Skill instructions route existing projects to their recorded workflow. Canonical designer files are generated into starters by `scripts/build.py`.

## Plan of Work

Add a typed React entry and App component, strict no-emit typecheck, and React Vite configuration. Keep the small existing readiness screen and meaningful interaction. Add portable-runtime launchers and one shared command script; keep caches, logs and temporary files under ignored `.toolchain/`. Pin archive names/checksums in one JSON manifest and reuse its runtime version for `.node-version`. Provision only on explicit setup, download via HTTPS, verify before extraction, stage before renaming and recover interrupted downloads by replacing only setup staging. Do not change user npm settings, global PATH or execution policy.

Update setup to choose the common starter only for new projects, preserve existing apps, and avoid automatic Git/system installs. Update planning/library guidance so optional packages vary but the new-app framework does not. Add typecheck to build so publication cannot skip it. Maintain runtime notices and extend approved tooling roles. Record actual verification without claiming cross-platform certification.

## Milestones

First prove portable setup and a clean typed production build in a temporary project with spaces in its name. Next update all instruction paths and packaging so agents consistently use the launcher while existing apps stay untouched. Finally exercise failure boundaries and foreground lifecycle, inspect desktop/narrow/keyboard rendering, and run repository checks.

## Concrete Steps

Run setup in a temporary copy with `bash app.sh setup`, then `bash app.sh build` and `bash app.sh dev`. On Windows the corresponding entry is `powershell.exe -NoProfile -File .\app.ps1 setup`; obey device script policy. Commands use the runtime inside that project. Run `python3 scripts/build.py`, `python3 scripts/check.py`, relevant new boundary tests, `claude plugin validate .` and `git diff --check` in the repository. Run all runtime installs in temporary app copies, never inside installable starter assets.

## Validation and Acceptance

Test a new project without Node on PATH, with spaces, a restarted setup, corrupt download checksum, wrong runtime version, failed typecheck and an occupied preview port. Verify generated output uses a repository prefix and includes React and font notices. Confirm runtime/cache/temp locations stay local, active command cleanup is refused, stopped cleanup preserves app source and lockfile, and setup works again. Use browser tools for the actual interaction at desktop/narrow widths and keyboard focus. Existing app source and example evidence remain unchanged. Test Windows execution only if a real Windows host is available; otherwise record it as an outstanding release gate and add automated Windows CI coverage without claiming a run.

## Idempotence and Recovery

Do not overwrite existing apps or merge starter files blindly. Setup retries replace only owned staging; runtime reuse checks pinned versions. No system changes or external publication. The checkpoint commit remains available; use a new corrective commit rather than destructive history rewriting if rollback is requested.

## Artifacts and Notes

Record outputs and checks in `evidence/web-application-builder/2026-10-23-uniform-environment/`. Do not commit downloaded runtime, npm cache, node_modules or generated site output. The previous 1ef3863 checkpoint includes pre-existing research and evidence intentionally requested by the user.

## Interfaces and Dependencies

New projects expose setup, add, dev, test:browser, typecheck, build, preview and clean through the platform launcher. Vite/React/TypeScript are pinned; other libraries remain optional. Git and browser capabilities are independent host prerequisites. No sandbox claim: dependency/build code retains the host-granted permissions.

Revision note: Updated after implementation and local verification to record completed work, discovered defects, fixes and outstanding platform release gates.
