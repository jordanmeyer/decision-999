# Managed application builds

Use this path for new apps selecting an approved library. Plain apps with native browser features retain the existing starter. Read [selection](library-selection.md), [inventory](libraries.json) and [workflow](workflow.md). Do not migrate existing apps merely because this path exists.

## Setup

Inspect first, then add missing files from [managed starter](../assets/managed-starter/). Preserve conflicts and ask only about consequential replacements. Reuse compatible Node/npm from host tools or PATH. The inventory records the tested pair; record the actual pair in SETUP.md and `.node-version`. Check current [official Node downloads](https://nodejs.org/en/download): use an architecture-appropriate official macOS package or Windows MSI only when needed, with student-handled OS prompts. Do not replace an unrelated installation or add Homebrew, WSL or Python. If the host blocks npm’s default cache, use an explicitly writable temporary cache (`npm ci --cache /verified/writable/path`); do not change global cache ownership or bypass a device restriction. Record the actual invocation. Verify `node --version` and `npm --version` in fresh commands; blocked setup leaves planning available.

Use the tested Node version for evaluation and CI; a different compatible version needs a new recorded toolchain check. Do not blindly upgrade an existing project. The starter disables dependency lifecycle scripts in `.npmrc`; the approved recipes do not need them. Do not disable this setting to cure an unexplained install failure.

The starter contains Vite only. Add exactly the selected library packages and required peers from the inventory using `npm install --save-exact package@version`. Application libraries and runtime peers (including React/React DOM) belong in `dependencies`; only Vite and its React plugin belong in `devDependencies`. The dependency check rejects other placements because the notice collector excludes development-only packages. Keep npm-generated package-lock.json; use `npm ci` thereafter. When selecting Mermaid, first add the inventory's KaTeX override. Read the lockfile diff and `npm audit` results; do not run `npm audit fix --force` automatically. Approval of direct packages does not approve arbitrary lockfile changes or imported remote code.

Run `node /absolute/installed/plugin/scripts/check-dependencies.mjs /absolute/project` after dependency changes and before evaluation. Review transitive changes/installation scripts and retain licenses. It rejects unknown direct packages, version ranges, stale direct lockfile entries and non-registry sources; it does not certify package behavior.

## React when needed

For React Flow, Mantine or an approved Remotion recipe add inventory-pinned React/React DOM and required peers, plus `@vitejs/plugin-react` as a development dependency. In vite.config.js import `react from '@vitejs/plugin-react'` and add `plugins: [react()]` to the returned object. Use `.jsx` for JSX files. Do not add TypeScript or a UI framework to a plain form.

## Commands and assets

`npm run dev` serves app source; `npm run test:browser` serves project-root `/tests/`; `npm run build` writes only production app output to dist; `npm run preview` serves that output. Both servers bind loopback. Record actual URLs, ports and restart commands. After edits confirm the served module reflects current source; if a host misses filesystem change events, restart that preview before evaluating. A test HTML page imports the application's real modules and shows loading, pass and failure states.

Copy canonical designer tokens into `app/theme/duke-tokens.css`, then selected [theme adapters](../assets/library-themes/). Import vendor base CSS before adapters. Copy required public assets under app/public, using `import.meta.env.BASE_URL` when constructing their URLs. No remote assets or server routes. Frappe Gantt's CSS is copied from its installed dist/frappe-gantt.css because its package export map does not expose that subpath; retain its notice.

Copy only needed [supplemental notices](../assets/license-notices/) into project-root licenses/ (seedrandom, Mantine's react-remove-scroll-bar, DuckDB and Remotion's licensing helper need supplemental records; copy only the selected recipe's notices). Preserve filenames and review any other missing notice rather than inventing text. The build generates app/public/THIRD-PARTY-NOTICES.txt from installed distributions, failing when a notice is missing. Generate it before checkpointing and commit it; a repeat build from identical dependencies must not change tracked source. Include this file in publication and link it from the app. Do not publish source tests or node_modules. Never put imported private files in app/public.

Before Pages publication set `base` in vite.config.js to `/repository-name/` (or `/` for an account root site), then use [managed Pages workflow](../assets/pages-managed.yml). Include config/workflow in evaluation. Test production under the actual prefix, then verify live deployment and a returning-browser update when authorized. Vite fingerprints imported assets; files copied verbatim from public/ need explicit versioning when changed.
