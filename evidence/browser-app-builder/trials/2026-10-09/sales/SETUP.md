# Setup — local simulation

Intended root: `/private/tmp/browser-app-builder-fresh-2026-10-09/sales`, initially empty and outside any Git repository. macOS, shell/file access and Codex in-app browser available. Git 2.50.1 (Apple Git-155), Node v22.19.0, npm 10.9.3 reused from PATH. No installation of runtimes needed.

The coordinator authorized reuse of the course attribution: Jordan Meyer, jordanmeyer@protonmail.com. This name/email would become public if history were pushed. Set only project-local with `git config --local`; no global settings changed. Local history initialized on main.

Copied only the frozen plugin managed starter. `npm ci --cache /private/tmp/bab-fresh-npm-cache` passed. Default npm cache is not writable in this sandbox, so every install uses that temporary cache. Lifecycle scripts remain disabled by .npmrc. Actual runtime matches inventory and .node-version.

Restart from this directory: `npm run test:browser -- --port 9331` serves tests at http://127.0.0.1:9331/tests/ and app at http://127.0.0.1:9331/app/. Test sessions87135,90357,38991 were stopped during source-refresh verification; final test session5196 is stopped at handoff. Starter module and Check interaction button verified in own background browser tab. Production session44698 remains running at handoff without monitoring. After `npm run build`, `npm run preview -- --port 9332` serves http://127.0.0.1:9332/fresh-sales/. For app-only development use `npm run dev -- --port 9331` after stopping test server.

No remote, public repository or deployment is authorized. Work routing is simulated, not a real Work invocation.
