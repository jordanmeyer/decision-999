# Managed application builds

Every new app uses the [Vite + React + TypeScript starter](../assets/managed-starter/), from simple pages to complex tools. Optional libraries vary; the baseline does not. Existing apps retain their recorded architecture, dependencies, runtime and commands unless migration is explicitly requested. The plain starter is retained for existing-app reference, not new projects. Read [selection](library-selection.md), [inventory](libraries.json) and [workflow](workflow.md).

## New-project setup

Inspect the destination first. Copy the managed starter only into a new app directory, preserving planning/host files and resolving collisions. Its two platform entrypoints share `scripts/project.mjs`; `scripts/toolchain.json` pins official archive names and SHA-256 hashes. `.node-version` records the same Node version for CI. Do not select latest versions or replace these files in an existing project.

Use `bash app.sh setup` on macOS or `powershell.exe -NoProfile -File .\app.ps1 setup` on Windows. Subsequent commands replace `setup` with the operation below. Windows targets the built-in PowerShell 5.1; do not install PowerShell 7 or alter execution policy to bypass a block. The macOS bootstrap uses built-in shell/download/archive utilities. Archives are selected for macOS ARM64/x64 or Windows ARM64/x64; platform support claims require actual trials, not the existence of an archive. Native Windows execution remains an unverified release gate until recorded evidence says otherwise.

Setup verifies the archive before extracting it, stages downloads under `.toolchain/`, and reuses the pinned private runtime on later runs. Retry `setup` after a network interruption; failed staging is removed on ordinary exit. After a hard termination, inspect and remove only abandoned `.toolchain/download.*` staging before retrying. If an incomplete final runtime directory exists, inspect/remove that owned directory before setup; never fall back to a system installer. The project runner verifies Node/npm versions and scopes npm configuration, caches, logs, temporary files and optional Playwright browser downloads to `.toolchain/`. It does not edit user npm files, shell profiles or global PATH. Corporate network/certificate restrictions must be resolved through permitted configuration, never by disabling TLS verification.

Run servers in agent-owned foreground sessions and stop those sessions before setup, dependency changes or cleanup. Use another explicit port for a conflict. `clean` refuses while a recorded project command is alive, removes only `node_modules/`, `dist/` and `.toolchain/`, and preserves source, lockfiles and generated license notices. The Windows launcher removes the private runtime after Node exits. The agent must not kill unknown processes to free a port. Git, account access and browser automation are separate capabilities; missing ones remain recorded gaps.

This is project-local provisioning, not a security sandbox: installed/build code runs with host-granted permissions. Do not promise that arbitrary code cannot write elsewhere. Exclude `.toolchain/`, `node_modules/` and `dist/` from source and submission archives. Student visitors need no Node installation.

## Commands and dependency changes

| Operation | Purpose |
| --- | --- |
| `setup` | Provision the pinned runtime if absent, then `npm ci` from the lockfile |
| `add package@version` | Add exact approved packages; use `--save-dev` only for approved development tools |
| `dev` | Foreground localhost development preview; accepts Vite flags such as `--port` |
| `test:browser` | Serve project-root browser tests; starting the server is not a passing test |
| `typecheck` | Check application and test TypeScript without emitting files |
| `build` | Typecheck, retain notices, then build static `dist/` |
| `preview` | Foreground localhost preview of the production build |
| `clean` | Remove generated tooling/output after stopping owned sessions |

The baseline includes React/React DOM, Vite, its React plugin, TypeScript and React types. Add only optional packages and required peers from the inventory through `add`; use locked `setup` thereafter. The inventory's `devTools` identifies authoring packages; runtime libraries and peers belong in `dependencies` so their notices are retained. Keep npm-generated package-lock.json. For Mermaid set the approved KaTeX override before adding it. Review lockfile and audit output; never run forced audit fixes or enable lifecycle scripts to cure an unexplained failure. Approved direct packages do not approve arbitrary transitive changes.

For each selected library in a TypeScript app, install its inventory `devPackages` using `add --save-dev package@version`. Copy any inventory `declarations` from the plugin's `assets/types/` into `app/types/`. These narrow declarations describe reviewed APIs only; extend them from verified package behavior when needed. Do not add blanket `declare module` or `any` escapes. Existing JavaScript apps do not need these type companions.

Run the installed plugin's `scripts/check-dependencies.mjs /absolute/project` with the project's private Node after dependency changes and before evaluation. It checks roles, exact approved pins, companion packages (including TypeScript development packages) and registry lockfile entries, not package behavior. Compilation checks local declarations. Record exact runtime/commands in SETUP.md. For existing managed apps use their verified runtime and package commands without replacing their toolchain; `.npmrc` continues to disable dependency lifecycle scripts.

## React and TypeScript

Use `.tsx` for components and `.ts` for application logic. Keep business calculations independent of React so tests import the same model. The starter already configures React and strict no-emit typechecking; Vite transpilation alone is not the typecheck. Read [React library integration](react-libraries.md) for effect ownership, async cleanup and the documented examples. Do not introduce a router, global store, Mantine or charts unless the task needs them. Copy the matching `.d.ts` alongside each selected JavaScript theme adapter so typed consumers can use it without weakening the project.

## Commands and assets

The launcher uses the corresponding package/Vite commands: development serves `app/`, test mode serves project-root `/tests/`, build writes production output to `dist/`, and preview serves that output. CI uses the same `npm run build`, including typecheck. Both servers bind loopback. Record actual URLs, ports and restart commands. After edits confirm the served module reflects current source; if a host misses filesystem change events, restart that preview before evaluating. A test HTML page imports the application's real modules and shows loading, pass and failure states.

For the Duke default, copy canonical designer `duke-tokens.css`, `duke-fonts.css` and its adjacent `fonts/` directory into `app/theme/` (already present in the starter), then selected [theme adapters](../assets/library-themes/). For an explicitly chosen independent identity, adapt project theme copies and consumers under [shared design](workflow.md#shared-design), retaining required font licenses and notice inputs. Import vendor base CSS before adapters. Copy required public assets under app/public, using `import.meta.env.BASE_URL` when constructing their URLs. No remote assets or server routes. Frappe Gantt's CSS is copied from its installed dist/frappe-gantt.css because its package export map does not expose that subpath; retain its notice.

Copy only needed [supplemental notices](../assets/license-notices/) into project-root licenses/ (seedrandom, Mantine's react-remove-scroll-bar, and DuckDB need supplemental records; copy only the selected recipe's notices). Preserve filenames and review any other missing notice rather than inventing text. The build generates app/public/THIRD-PARTY-NOTICES.txt from installed distributions and both bundled font licenses, failing when a notice is missing. Preserve the starter font paths or update the notice inputs when deliberately changing licensed fonts. Generate it before checkpointing and commit it; a repeat build from identical dependencies must not change tracked source. Include this file in publication and link it from the app. Do not publish source tests or node_modules. Never put imported private files in app/public.

Before Pages publication set `base` in vite.config.js to `/repository-name/` (or `/` for an account root site), then use [managed Pages workflow](../assets/pages-managed.yml). Include config/workflow in evaluation. Test production under the actual prefix, then verify live deployment and a returning-browser update when authorized. Vite fingerprints imported assets; files copied verbatim from public/ need explicit versioning when changed.
