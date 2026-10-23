# Uniform new-app environment review — October 23, 2026

## Scope

Web Application Builder 0.3.0 introduces the common Vite/React/TypeScript starter and contained local provisioning for new applications only. Pre-change checkpoint: `1ef3863`. Existing app source, the gallery and the legacy plain starter are unchanged. This is a starter/tooling trial, not a completed business application or a student usability claim.

The implementation uses Node 24.22.1 with bundled npm 11.19.1; Vite 8.3.4, React/React DOM 19.3.0, React Vite plugin 6.1.2, TypeScript 5.9.3 and React type packages 19.3.0. Portable artifact hashes were checked against the official Node release SHASUMS. Only the macOS ARM64 runtime was executed here.

## Reproduce

From the repository root on macOS or Windows, run `python3 scripts/check-app-environment.py`. Python belongs to this maintainer test, not student setup. It copies the starter to a disposable directory with spaces, removes Node from PATH and calls the platform launcher. Network access to official Node archives and npm is required. A CI workflow runs the same check on Mac/Windows when pushed; no remote run has occurred yet.

For a new student app, copy the starter into its new project and let the agent run `bash app.sh setup` on macOS or `powershell.exe -NoProfile -File .\app.ps1 setup` on Windows. Use the same launcher for `build`, `dev`, `preview`, `typecheck`, `test:browser`, `add` and `clean`. Do not overwrite an existing app with the starter.

## Observed results

The final automated integration run passed on macOS ARM64:

- Invalid archive checksum rejected before extraction; no runtime or staging directory retained.
- Setup succeeded without Node on PATH and with spaces in the project path. Repeat setup reused the same runtime. npm cache was created inside `.toolchain/`.
- Approved dependency/lockfile check passed. Production build passed with React and font notices; development-only TypeScript was not attributed as shipped runtime code.
- An intentional TypeScript error failed production build with TS2322. A global-install flag was rejected. A mismatched `.node-version` was rejected.
- Production build and HTTP preview worked under `/course-app/`. An occupied port failed instead of switching silently or terminating another server.
- Setup and cleanup were refused while an owned preview was active. After stopping it, cleanup removed runtime, dependencies and output while preserving source, lockfile and runtime manifest. Setup/build succeeded again.

Browser inspection used a disposable development preview in the in-app browser. Desktop keyboard Tab/Return activated the readiness button, changed its status and showed visible focus. Same-origin iframe viewports at 390px and 320px also showed the working interaction, no horizontal overflow (scroll widths equaled viewport widths), and loaded EB Garamond/Open Sans 400. The unused Open Sans 600 face remained unloaded. No browser console errors were captured. Screenshots: [desktop](desktop.png), [narrow](narrow.png). The temporary viewport harness was not added to the starter.

Repository checks: `python3 scripts/build.py`, `python3 scripts/check.py`, `claude plugin validate .`, shell/Node syntax checks and `git diff --check` passed. The build's consistency checks now verify baseline dependency roles and runtime manifests.

## Review fixes and simplification

npm rejected a shared user/global config path; separate empty files now provide explicit project-local configuration. Regenerating the lockfile from the physical project directory removed invalid symlink-related prefix entries. Final review fixed the Windows archive name mapping (`win`, not Node's `win32`) and case-insensitive Windows PATH/SystemRoot handling in the test. Argument validation occurs before creating active-command markers.

Provisioning remains in two platform launchers; command behavior and environment ownership remain in one JavaScript runner. No runtime cache shared across projects, process daemon, automatic migration, router or extra component library was added. Node/npm versions are pinned in the runtime manifest and checked against the inventory and CI version file.

## Limits and remaining release gates

Native Windows/PowerShell and Intel Mac execution were not available. Windows PowerShell execution policy can block the script; neither launcher nor guidance bypasses it. Real clean-account, managed-device, interrupted-transfer, blocked-permission and student trials remain outstanding. The PATH-isolated Mac trial is not equivalent to a fresh student computer. The CI matrix is configured but unrun remotely.

The test inspected configured project-local paths and cleanup; it did not monitor every filesystem write. Containment is not an operating-system sandbox, and dependency/build code retains host-granted permissions. Browser automation, Git, account authentication and permitted network access remain separate capabilities. No existing application was migrated or deployed by this change.
