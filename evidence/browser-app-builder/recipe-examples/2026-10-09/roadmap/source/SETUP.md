# Setup

New isolated directory /private/tmp/bab-recipe-examples-2026-10-09/roadmap. Only canonical managed starter, Pages workflow, designer tokens and Frappe theme copied; no sibling app implementation copied. Existing tools Node22.19.0/npm10.9.3; no host install or credential changes. .npmrc disables lifecycle scripts and saves exact versions.

An initial npm install was accidentally run from the parent temporary directory after creating this folder. It created only parent package.json, package-lock.json and node_modules forFrappe1.2.2. Inspected them and removed those three newly generated artifacts immediately; no sibling app changed. Re-ran in correct app root. npm install --save-exact frappe-gantt@1.2.2 --cache /private/tmp/bab-npm-cache; npm ci --cache /private/tmp/bab-npm-cache passed, audit0. Dependency checker accepts exact direct dependencies and registry lockfile. One runtime license retained by notices script.

Commands from this root:

    npm run test:browser -- --port 9509
    npm run build
    npm run preview -- --port 9510

Test server session37644, http://127.0.0.1:9509/tests/. Production session53793, http://127.0.0.1:9510/bab-example-roadmap/. Browser own tab3. Fixed frames at /tests/layout.html?width=320 or390 or1440, no shared viewport override. If served modules lag filesystem changes restart only own test server. Use actual prefix. No root/publication operations by developer.

Own testserver restarted to session62850 after fixedframeharnesschange because of observed missedchanges; production9510 unchanged. Tests now40cases includingreviewerfixtures; final browserrun recorded separately.
