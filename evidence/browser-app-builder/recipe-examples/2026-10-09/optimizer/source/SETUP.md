# Reproducible setup

Actual toolchain: Nodev22.19.0, npm10.9.3 from `/Users/jordan/.nvm/versions/node/v22.19.0/bin`. Compatible host installation reused; no installer or global package change. `.npmrc` retains exact saves and disabled lifecycle scripts. Node version is pinned in `.node-version` and managed Pages workflow.

From this repository:

    PATH=/Users/jordan/.nvm/versions/node/v22.19.0/bin:$PATH npm ci --ignore-scripts --cache /private/tmp/bab-optimizer-npm-cache
    PATH=/Users/jordan/.nvm/versions/node/v22.19.0/bin:$PATH npm run build
    PATH=/Users/jordan/.nvm/versions/node/v22.19.0/bin:$PATH npm run test:browser -- --port 9515
    PATH=/Users/jordan/.nvm/versions/node/v22.19.0/bin:$PATH npm run preview -- --port 9516

Initial exact-package install used the same temporary cache;17packages installed,0vulnerabilities. Runtimehighs1.15.3; devVite8.3.4. Every locked resolved dependency is an npm registry distribution. No new framework/peer/chart library. HiGHS's MIT notice is collected from the installed package; Vite's own dependency notices remain development distributions. Production serves local workerJS, WASM and stylesheet under `/bab-example-optimizer/`. The browser build externalizes HiGHS's Node-only `node:module` branch; the actual browser worker suite confirms this browser path works. That warning is retained, not suppressed.

Servers bind loopback with strict ports. Current test session11944, preview94283. Test URL `http://127.0.0.1:9515/tests/`; production `http://127.0.0.1:9516/bab-example-optimizer/`. The320/1440CSSpixel frame pages are under `/tests/narrow.html` and `/tests/desktop.html`; neither is shipped. No global viewport setting is changed.

Canonical dependency check:

    node /Users/jordan/Projects/decision-999/plugins/browser-app-builder/scripts/check-dependencies.mjs /private/tmp/bab-recipe-examples-2026-10-09/optimizer

Actual initial result: `Unapproved dependency: highs@1.15.3`. The coordinator explicitly authorized this exact candidate worker/WASM trial. This rejection is an inventory/promotion gate, not bypassed or relabeled as a passed check. Root must reconcile it after independent application review before publication.
