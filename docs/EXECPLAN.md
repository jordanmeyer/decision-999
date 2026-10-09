# Run three parallel Browser App Builder trials

This living ExecPlan follows ~/.codex/PLANS.md. The plugin implementation plan is preserved in docs/plans/2026-10-08-browser-app-builder.md. Maintain progress, discoveries, decisions, and outcomes as execution proceeds.

## Purpose / Big Picture


Run three original applications through the published Browser App Builder's Setup, Plan, Build, Evaluate, and Deploy stages. Each starts in a blank independent folder, captures an actual simulated planning exchange, produces browser-tested code, and publishes to a new public GitHub repository with a verified Pages URL. Exercise a second ordinary deployment per app. Three subagents build independently in parallel; the coordinator supplies simulated student answers and serializes shared browser operations.

## Progress


- [x] (2026-10-08) User authorized three public repositories, independent trial folders, existing public Git attribution, and second deployments.
- [x] (2026-10-08) Created empty pricing, inventory, and sales folders and froze plugin 0.1.1 from c8bb0e5.
- [x] (2026-10-08) Started three subagents and captured planning questions and simulated student replies.
- [x] (2026-10-08) Observed all three starter modules load and buttons change status in the browser.
- [x] (2026-10-08) Built and browser-evaluated all three applications; repaired inventory and sales reset defects before publication.
- [x] (2026-10-08) Created all three public repositories, enabled Pages, and verified first deployments.
- [x] (2026-10-08) Added and evaluated one improvement per app; second deployments exposed cached scripts; third corrective deployments passed returning-browser checks.
- [x] (2026-10-08) Saved sanitized transcripts/reports/API results/screenshots, compared findings, stopped all previews, and prepared six verified public links.

## Surprises & Discoveries


The configured Mac already has Git, authenticated SSH pushing, an authenticated GitHub browser session, browser automation, and Python for loopback previews. GitHub CLI is absent and unnecessary. The requested sibling project folder required the normal filesystem approval route, which succeeded. No runtime was installed. These conditions do not demonstrate clean-machine setup or new-account onboarding.

Browser interaction testing found defects that pure calculation tests missed: inventory named its reset button `reset`, shadowing `form.reset`; sales scheduled redraw in a microtask before the native reset default action. Both failed rounds are preserved and corrected. Pages source could be set to GitHub Actions while repositories were still empty. The coordinator used a no-store loopback preview on port 9100 after earlier IAB module caching concerns.

Second-deployment browser acceptance found stale entry scripts in all apps. Adding `?v=2` to changed entry URLs and using ordinary corrective commits resolved it. This is a recorded application-level workaround; the frozen plugin was not altered.

## Decision Log


Decision (2026-10-08): Freeze the exact published package at c8bb0e5 and do not modify it during trials. Rationale: failures and workarounds must be attributable to the version tested.

Decision (2026-10-08): Three subagents own separate apps; the coordinator owns browser interactions and GitHub repository creation/settings. Rationale: retain parallel construction without browser UI collisions. Record this assistance rather than implying each agent operated an independent desktop.

Decision (2026-10-08): Reuse Jordan Meyer's existing public Git identity locally, as authorized in the plan. Rationale: simulated student personas must not become invented commit authors.

Decision (2026-10-08): Use only synthetic data, actual recorded Q&A, and independently justified expected results. Rationale: simulation is an agent trial, not evidence of novice-student usability.

## Outcomes & Retrospective


All three applications are live and verified, with three successful Actions runs each. Browser suites passed25/25 pricing cases,10/10 inventory groups and42/42 sales cases. Two interaction defects were found and corrected before initial publication. The second live updates failed returning-browser acceptance despite successful workflows because the entry JavaScript remained cached. Versioned entry URLs fixed all three; ordinary reload verified the final updates. Exact live files match source and publication excludes reports/tests/Git metadata.

Sanitized evidence is in evidence/browser-app-builder/trials/2026-10-08/, including per-app transcripts and handoffs, independent browser observations, workflow records, exact final checks and a live overview screenshot. All previews are stopped. Each local app has one final report-only commit ahead of public main; no fourth publication was needed. The frozen plugin's31files remained byte-identical. Existing course edits were preserved. The trials support a configured-Mac pilot and expose a concrete Deploy improvement; clean-machine, Windows, actual Work handoff and real-student gates remain unverified.

## Context and Orientation


The course repository is /Users/jordan/Projects/decision-999. Preserve its existing site/config.json, generated-catalog ordering edits, and untracked .claude directory. The independent root is /Users/jordan/Projects/browser-app-builder-trials/2026-10-08, containing pricing/, inventory/, sales/, and _plugin/plugins/browser-app-builder/. The frozen package is extracted from git archive, not copied from an editable working version. Never copy the existing course evidence applications as trial implementations.

Each subagent reads all five skills and shared references, applies bundled Campus Designer, and writes SETUP.md, PLAN.md, DECISIONS.md, README.md, EVALUATION.md, DEPLOYMENT.md, and SIMULATED-CONVERSATION.md when substantive. app/ is publishable source; tests/ contains plain browser tests. The source repositories retain readable handoffs and only public/synthetic evidence.

## Plan of Work


### Setup and simulated planning


Use each selected folder as its own Git root, branch main, locally configured approved attribution. Reuse /usr/bin/python3 on loopback ports 9101, 9102, and 9103 to serve app/ and tests/. The parent observes module loading and interaction before the starter is replaced. Every agent asks focused questions and records the actual coordinator replies; do not fabricate a transcript afterward.

Pricing serves an MBA notebook-venture exercise for one period. Four inputs are USD price, USD unit cost, whole quantity sold, and USD fixed cost; each ranges from zero to one million and amounts have at most two decimals. Show contribution, revenue, costs, profit and break-even. No demand forecasts, taxes, capacity, or optimal-price claim. With 20/12/100/500, profit is 300 and break-even is 62.5 or 63 whole units. Explicitly handle nonpositive margins and zero fixed cost.

Inventory serves an MBA retail-policy exercise. Single SKU, lost sales, uniform integer demand min..max and a seed. Each day processes arrivals, then demand/sales, then one fixed-quantity order if inventory position (on-hand plus outstanding) is at or below the reorder point. An end-of-day d order with lead time L arrives start of d+L; L is at least one. Defaults: stock 10, demand 0..8, reorder point 5, order quantity 10, lead time two, 30 days, seed 42. Horizon at most 365; stock/demand/order values at most 10,000; seed nonnegative 32-bit integer. No-demand fill rate is N/A. Show lost demand, fill rate and orders, with uniform-demand limitations.

Sales serves an MBA synthetic pop-up exercise. CSV schema: date,region,product,quantity,unit_price,unit_cost; USD cents, nonnegative integer quantity. Reject invalid imports transactionally with row-specific errors. Filter by dates, region and product. Support quoted commas/escaped quotes, CRLF and UTF-8 BOM. Cap at 1 MB/10,000 rows, each amount/quantity at one million, and reject aggregate cents beyond exact integer range. Negative contribution margins remain valid. Empty filtered results show zeros. Include a downloadable synthetic template and reset-to-demo. Three sample rows (North Notebook 10 at 20/12; South Pen 5 at 30/18; North Notebook 2 at 20/12) independently total revenue 390, cost 234, contribution 156, quantity 17; North totals 240/144/96 and 12.

### Build and evaluate


Build original plain HTML/CSS/JS with local assets only, applying the frozen designer. Use independent hand calculations, stock transitions/seeded expectations, and CSV totals/error fixtures. All actual browser automation runs through the coordinator's CUA tools. Record source review and pure-function checks separately from browser observations. Include workflow and source links before final source checkpoints. Require clean relevant paths and apply the frozen source/plan freshness procedure. Preserve failed rounds and justified fixes.

### Publish and update


Check proposed names jordanmeyer/bab-trial-pricing-2026-10-08, bab-trial-inventory-2026-10-08, and bab-trial-sales-2026-10-08. If unrelated work occupies a name, append the next available numeric suffix; never overwrite. Use the authenticated GitHub browser to create public empty repositories, enable Pages source GitHub Actions, and then push ordinary main commits over existing SSH. Publishing only app/ through the supplied workflow is mandatory. Observe each run for the exact pushed commit and verify live assets, main interaction, a known answer, and source link. If an empty-repository settings limitation requires sequencing adjustment, record the workaround without pretending the frozen skill prescribed it.

After first success, agree one small improvement per app through another simulated exchange. Update plan/model when affected, reevaluate, push, and verify a second successful deployment. Record evaluated and published commits separately. Do not force-push or rewrite history. For ambiguous outcomes, inspect existing state before retrying creation.

## Concrete Steps and Validation


Use git status, git diff, and git ls-files per the frozen freshness reference before/after evaluation and before pushes. Open the three loopback app/ and tests/ URLs. Browser checks cover known calculations, invalid input, keyboard interaction, desktop/narrow layouts, console errors, source links and repository-path assets. Test the actual CSV file chooser with synthetic data. Observe available network evidence and state its limits. Deployments must finish successfully and then pass live checks; a push alone is insufficient.

Store sanitized consolidated records in evidence/browser-app-builder/trials/2026-10-08/. Copy only useful public handoffs/transcripts/results; exclude credentials, caches, imported private files, generated dist/, and raw environment dumps. Final comparison must identify first/final outcomes, corrections, coordinator interventions and limitations. Do not update the frozen package mid-run or claim actual Work, Windows, clean-machine, or novice-student acceptance.

## Idempotence and Recovery


Preserve independent repositories and prior rounds. Never reset unrelated repos/remotes or delete existing app folders. Stop only preview processes started for this trial after verification. The GitHub applications remain live and local source folders remain available. Authentication challenges or system prompts may require user participation; do not bypass them.

## Artifacts and Notes


All three starter pages displayed JavaScript module loaded. Preview is ready. Activating Check interaction changed each to Interaction works. Ready to plan your app. Parent observations were sent to the respective agents. Git author attribution is explicitly approved public source metadata; simulated personas are not real students.

## Interfaces and Dependencies


No new product API or plugin schema is introduced. Student app boundaries remain browser-only HTML/CSS/JavaScript with no required runtime installation. The configured machine's existing Python is a preview convenience. GitHub browser access handles repository/Pages settings; Git over SSH handles pushes. All three apps expose their own app/index.html and browser test page, source repository and Pages URL.
