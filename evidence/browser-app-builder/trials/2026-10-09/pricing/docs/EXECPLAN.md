# Build an exact-cent pricing calculator

This living plan follows the requirements read from /Users/jordan/.codex/PLANS.md.

## Purpose / Big Picture


An MBA user changes a product's assumed price, unit cost, fixed period costs and quantity to compare profit and minimum whole-unit break-even. Open http://127.0.0.1:9311/app/ and observe the initial synthetic example profit $4.00 and break-even80 units. The calculator explicitly warns that price changes may affect demand.

## Progress


- [x] (2026-10-09) Read frozen skills, inspect empty root/tools, verify starter module and button, initialize local main history.
- [x] (2026-10-09) Ask focused model questions and preserve exact simulated agreement in TRIAL.md and PLAN.md.
- [x] (2026-10-09) Author original plain calculator, independent tests and local workflow.
- [x] (2026-10-09) Final source model tests25/25, production scenarios, keyboard/reset, frame reflow and freshness checks completed; simulated limitations accepted.

## Surprises & Discoveries


Browser evaluation found queueMicrotask reset refresh could precede native reset, leaving stale errors. requestAnimationFrame fixes it. Narrow200% text revealed a grid minimum-width overflow; minmax(0,1fr) and heading wrapping fixed measured354px overflow to319px within the319px frame.

A no-fixed-cost scenario can have minimum break-even0 while each positive sale loses money. Displaying0 without explanation would be misleading. Break-even can exceed the editable quantity cap; compute and display it rather than treating this as mathematical impossibility.

## Decision Log


2026-10-09: Use no libraries. Four scalar inputs and deterministic arithmetic need native controls and BigInt, the browser integer type that preserves exact cents at every product and ceiling division. The simulated student agreed to USD precision/caps and nonnegative values. No package or compile tooling is required. Copy the plain workflow locally; no remote or publication authorization exists.

## Outcomes & Retrospective


Setup, implementation and final local evaluation are complete. Two genuine UI defects—reset timing and enlarged narrow overflow—were caught and corrected after numerical tests had already passed. EVALUATION.md retains the failed rounds and final checkpoint fba817d8e56a5eff79198cddeef960d4187844e2. The local-only scope preserves a reviewable app while leaving public destination, link and live deployment unresolved.

## Context and Orientation


The project root is /private/tmp/browser-app-builder-fresh-2026-10-09/pricing. app/model.js parses exact input and computes results; app/app.js handles field validation and presentation; app/index.html and app/style.css provide responsive form/results. tests/tests.js imports the real model and records visible independently derived assertions. app/ is directly publishable. dist/ is ignored output. .github/workflows/pages.yml packages only app/ on main. No secrets or user data belong in this repository.

## Plan of Work


Establish agreed model rules in PLAN.md, implement app/model.js with parseMoney, parseQuantity, calculate and dollars, then bind native fields to the model in app/app.js. Render initial and invalid states in app/index.html and a navy/white two-column layout that stacks on narrow widths in app/style.css. Add browser tests with independent known answers and small brute-force break-even enumeration. Copy only the plain Pages workflow, then checkpoint before final testing.

## Concrete Steps


From the project root run `python3 -m http.server 9311 --bind 127.0.0.1`. Open /tests/ and expect25 passed,0 failed, then /app/ for initial $4.00 and80 units. Copy app/ contents under ignored dist/fresh-pricing/ and run `python3 -m http.server 9312 --bind 127.0.0.1 --directory dist`; open http://127.0.0.1:9312/fresh-pricing/. Commit app, tests, workflow and agreed plan before final testing. Compare source paths and plan to the tested commit before and after the run. Record the actual hash and results in EVALUATION.md.

## Validation and Acceptance


Known examples:19.95−7.40=12.55;×80−1000=4;79 units lose8.55. .30−.20=.10 and100 fixed needs1000 units, not1001. Positive fixed costs with zero/negative contribution cannot break even. Zero fixed costs and negative contribution must explain why positive sales lose money. Invalid input must hide old outputs. Check native keyboard editing/reset, visible focus,320px reflow,200% text enlargement, large values, relative assets at the production prefix and observed console/network state.

## Idempotence and Recovery


Servers are loopback-only and must not replace another process on the port. Stop only owned sessions when asked. Preserve failures in EVALUATION.md, fix code, commit a new checkpoint and rerun affected tests. Do not edit the frozen plugin, push, create remotes or publish. Regenerating ignored production copies is safe after inspecting their path; do not store authored files only in output.

## Artifacts and Notes


Starter module and button were verified in the actual browser before replacement. Local attribution was disclosed before the first commit and stored only via git config --local. TRIAL.md contains exact simulated questions/replies and actual skill files read.

## Interfaces and Dependencies


parseMoney(string) returns BigInt cents within0..100000000; parseQuantity(string) returns whole BigInt units within0..1000000. Both throw useful input errors. calculate({price,cost,fixed,quantity}) takes those parsed integers and returns margin,revenue,variable,profit and breakEven, with null for impossibility. dollars(BigInt) returns grouped USD text with exactly two decimal digits. Native browser modules/BigInt are the only runtime dependencies.

Plan revision note: initial implementation plan includes model edge cases agreed by the simulated student and the pending local deployment boundary.

Completion revision note: recorded final local acceptance, retained failed rounds, and left only production alive for coordinator inspection; stopped the owned development server and closed the owned browser tab on request; public destination and licensing remain pending.
