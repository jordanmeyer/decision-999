# Setup record

Project root: `/private/tmp/bab-recipe-examples-2026-10-09/executive`. It was empty before creation. Node `/Users/jordan/.nvm/versions/node/v22.19.0/bin/node` is v22.19.0, npm is 10.9.3, Git is 2.50.1 (Apple Git-155). Existing installations were reused. The managed starter, selected theme adapters, canonical tokens, supplemental notice and Pages workflow were copied from Browser App Builder. Exact dependencies and lockfile are preserved. Lifecycle scripts are disabled by `.npmrc`.

Install: `npm ci --cache /private/tmp/bab-npm-cache-executive`. Dependency checker: `node /Users/jordan/Projects/decision-999/plugins/browser-app-builder/scripts/check-dependencies.mjs /private/tmp/bab-recipe-examples-2026-10-09/executive`. Initial installation reported zero vulnerabilities.

Production build: `npm run build`. Production preview: `npm run preview -- --port 9502`, session 69986. URL http://127.0.0.1:9502/bab-example-executive/. Test server: `npm run test:browser -- --port 9501`, session 58742. Test URL http://127.0.0.1:9501/tests/. Narrow production frame: http://127.0.0.1:9501/tests/narrow.html. Start commands run from this project root. Stop only the relevant server session; restart it if source updates do not appear. Production changes require a rebuild before reload.

Browser automation uses a dedicated Codex in-app browser tab via cua_repl. The subagent interface rejects the optional visibility setting; creating a tab without that option succeeded. No user tab or browser-wide viewport is changed. Fixed-width test frames are used for responsive review. Initial wrong-order preview navigation failed because the server was not started; the correctly started preview loaded and rendered the module.

Git is initialized locally on main with the authorized identity Jordan Meyer <jordanmeyer@protonmail.com>; public attribution was disclosed to the coordinator before committing. Publication remains the coordinator's responsibility.
