# Setup

New isolated root: /private/tmp/bab-recipe-examples-2026-10-09/process. Initial command attempted to use the directory as cwd before it existed and was rejected without executing; created it from the existing workspace and continued. No existing project was replaced. Only managed starter, canonical designer tokens/React Flow adapter and managed Pages workflow were copied from Browser App Builder; no prior app implementation/evidence was copied.

Existing macOS tools: Node22.19.0 at /Users/jordan/.nvm/versions/node/v22.19.0/bin/node; npm10.9.3; Git2.50.1 (Apple Git-155). No software installation needed beyond approved npm dependencies. .npmrc keeps exact versions and disables lifecycle scripts. npm install used --save-exact and writable /private/tmp/bab-npm-cache. Package audit:0 vulnerabilities. Dependency checker accepts direct packages and registry lockfile. Build retains23 runtime notices.

Tests: npm run test:browser -- --port 9507, session52384. http://127.0.0.1:9507/tests/ imports actual model; /app/ is development. Production: npm run build then npm run preview -- --port 9508, session95515, http://127.0.0.1:9508/bab-example-process/. Both bind loopback. Restart only these servers if filesystem changes are missed. tests/layout.html uses production1440/390/320 frames; run both servers. No shared browser viewport override.

In-app browser tab2 used for initial test34/34 and production interactions. Passing visible node rendering, 90/10 example and invalid route recovery establish current readiness rather than a starter button claim. Creating a tab with visibility option was unsupported in this subagent; omitting the option worked. Git main uses the authorized local identity; public attribution is disclosed in DECISIONS. No remote creation/push by developer.

Final test server9507 was restarted because it served stale34case code after the37case source update. New session91385; actual37/37 then observed. Production9508 session95515 stays running for live handoff. Final source checkpointaca04afaa1046785df0f46b7f95dbc14fc5f556e; independentPASS inREVIEW.
