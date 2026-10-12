# Launch Ledger

An original fictional launch-planning tool. Edit durations, finish-to-start dependencies and earliest permitted starts; compare calculated completion, critical tasks and total float against a baseline. Promised-date buffer is separate from scheduling float. Packaging+5 and safety+3 presets turn Nov29 readiness intoDec2, one day after theDec1 promise.

Use Node22.19.0/npm10.9.3. Run npm ci --cache /private/tmp/bab-npm-cache, npm run build, npm run preview -- --port9510 (with a space between --port and9510). Test server: npm run test:browser -- --port9509. Production /bab-example-roadmap/; tests /tests/. See SETUP.md for exact commands.

Current test page contains 47 independent checks using actual model exports. Pure model in app/model.js; native UI and persistent Frappe instance in app/app.js. JSON files are local and transient. No remote fonts, data or telemetry. Export current plan to preserve work; the baseline is not included in the file. Reload restores synthetic example.

Date convention: start inclusive, end exclusive; whole calendar days including weekends/holidays. No resource optimization, probability forecast or safety assessment. See PLAN/DECISIONS, exact simulated PLANNING-CONVERSATION, current EVALUATION and independent REVIEW for scope/evidence.

Source: https://github.com/jordanmeyer/bab-example-roadmap. Independent classroom example with no institutional affiliation or endorsement. Public Git attribution uses the user-authorized course identity Jordan Meyer <jordanmeyer@protonmail.com>.

## Revised teaching example

[How this was built](BUILD-STORY.md) connects the opening brief, simulated planning, current plan, recipe choices and actual evaluation. Version2 JSON adds explicit teams/capacity, task allocations and zero-duration milestones; version1 imports reject rather than guess absent resource assumptions. Defaults show6 days of Launch team overload despite2 days of date buffer. Licensed local EB Garamond/Open Sans fonts are in app/theme/fonts and notices. Apply all edits commits the full scenario; pending results remain labeled.
