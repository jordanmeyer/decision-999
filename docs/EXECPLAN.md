# Bring all nine live examples up to the revised plugin guidance

This living ExecPlan follows `~/.codex/PLANS.md`. The completed core correction is archived in `docs/plans/2026-10-09-browser-app-builder-core-review.md`. Maintain Progress, Surprises & Discoveries, Decision Log, and Outcomes & Retrospective.

## Purpose / Big Picture


The user now authorizes modifying the nine existing live example applications to reflect the new guidance. Visitors should see the requested business lessons, usable controls and consistent locally bundled typography, rather than only improved instructions for future builds. Review each implementation, publish ordinary commits to its existing GitHub Pages repository, and verify the deployed behavior. Retain historical trials and new revision evidence separately.

## Progress


- [x] (2026-10-09) Archived the core plan and inspected nine clean local app repositories, existing remotes and dependencies.
- [x] Assigned three parallel developers, each owning three apps; coordinator owns package removal and publication.
- [x] Executive: evaluated f98a158, independent PASS, published dd1897d with successful Actions 37964428332, actual live Meadow/company/reload verified.
- [ ] Uploads: implement, evaluate, independent review, deploy and verify live.
- [x] Simulator: evaluated 455b426, independent PASS, published af31a95 with successful Actions 37964135811, actual live risk reversal/reload verified.
- [x] Process: evaluated 442fcc5, independent PASS, published 8db5017 with successful Actions 37963974786, actual live routing/reload verified.
- [ ] Roadmap: implement, evaluate, independent review, deploy and verify live.
- [ ] Markets: implement, evaluate, independent review, deploy and verify live.
- [ ] SQL: implement, evaluate, independent review, deploy and verify live.
- [ ] Optimizer: implement, evaluate, independent review, deploy and verify live.
- [ ] Presentation: implement, evaluate, independent review, deploy and verify live.
- [ ] Retain sanitized final source/evidence and update gallery descriptions/previews to match revised apps.
- [ ] Finish course checks, stop owned previews and record final outcomes/limits.

## Surprises & Discoveries


All nine repositories exist under `/private/tmp/bab-recipe-examples-2026-10-09/`, are on main with clean working trees and retain node_modules. The course tree contains the completed but uncommitted core changes plus unrelated user configuration/catalog ordering and `.claude/`; preserve them. The current prepared plugin is0.2.3, with canonical designer0.3.2. No new library/runtime or repository is needed.


## Decision Log

Decision (2026-10-09): removed Remotion, its telemetry exception, video example and gallery entry at the user’s request because its license is unsuitable for this use. Unpublished the Pages site and removed its source/workflow from main at c638292; Git history is retained. Other nine app revisions continue. The old Pages URL returns HTTP 404. Package/catalog checks pass and the dependency checker rejects the former direct package. Historical user-authored review content is preserved with source links pinned to its reviewed commit.


Decision (2026-10-09): scope is the nine reviewed bab-example apps, not the three older plain-JavaScript trials. Rationale: the new guidance and74-item checklist address these nine.

Decision: revise existing repositories and preserve source history, filenames and useful behavior; this is not a rebuild from blank folders. The user authorizes substantive corrections from the guidance. Record new decisions as this revision, not invented student agreements.

Decision: developers prepare clean evaluated commits, then independent reviewers inspect before root authorizes pushing. Existing Pages destinations remain unchanged.

## Outcomes & Retrospective


Implementation is underway. No revised app is yet claimed deployed. The prior gallery and trial passes remain historical and do not validate this revision.

## Context and Orientation


Course root: `/Users/jordan/Projects/decision-999`. Read `docs/EXAMPLE-APPS-REVIEW.md`, the original briefs under `evidence/browser-app-builder/recipe-examples/2026-10-09/BRIEFS.md`, and current plugin stage/model/design guidance. App directories are `/private/tmp/bab-recipe-examples-2026-10-09/<slug>`; slugs are executive, uploads, simulator, process, roadmap, markets, sql, optimizer, presentation. Each remote is `git@github.com:jordanmeyer/bab-example-<slug>.git`, published at `https://jordanmeyer.github.io/bab-example-<slug>/`.

New sanitized evidence goes under `evidence/browser-app-builder/live-revisions/2026-10-09/<slug>/`. Do not overwrite original campaign source snapshots or failed reviews. Workers follow `/private/tmp/bab-recipe-examples-2026-10-09/REVISION-CONTRACT.md`. They own only assigned app/evidence paths. The coordinator owns this plan, cross-app records, gallery integration and pushes after review.

## Plan of Work


First update the shared user experience in each app: canonical local fonts and notices, lining/tabular figures, readable amounts/dates, natural headlines, adequate targets, consistent live or clearly pending edits, compact method disclosures, one-line learning objective and a How this was built link to that app's own public BUILD-STORY.md. That record distinguishes the original brief, simulated planning and newly authorized revision.

Implement substantive teaching corrections. Executive needs evidence in its briefing and an accessible operating ledger. Uploads needs varied longer synthetic data and product-by-channel comparisons. Simulator needs an expected-profit curve/valid benchmark, downside view and binding risk default. Process distinguishes nominal entered time from overloaded capacity and provides readable ordinary editors. Roadmap models resource feasibility and real milestones alongside dependencies. Markets explains ranking changes and weight sensitivity. SQL opens substantial exploration with a simple-to-join learning path and clear money units. Optimizer actually re-solves added capacity and teaches integrality/2D feasibility. Presentation restores a board-scale decision, useful charts, appendix and live inputs.

Next evaluate each changed model using independently derived expectations and regressions, then inspect production in a browser. Reviewers test requested features, default/counterfactuals and presentation quality; developers fix findings and refresh checkpoints. A build or old test pass does not establish the new lesson. Keep actual observations distinct from source review.

Finally push ordinary main commits to the existing authorized destinations, wait for Actions tied to each commit, and inspect the live primary interaction/known result and returning-browser behavior. Save deployed and evaluated commits separately. Update local gallery metadata/previews/evidence to describe current output without changing historical records. Do not silently publish unrelated course edits.

## Concrete Steps


Assigned ports (test/production): simulator9701/9702, optimizer9703/9704, presentation9705/9706; executive9711/9712, uploads9713/9714, sql9715/9716; process9721/9722, roadmap9723/9724, markets9725/9726. All servers bind loopback.

At each app root inspect Git state and fetch origin. Run `npm ci` using an explicitly writable cache when needed, `node /Users/jordan/Projects/decision-999/plugins/browser-app-builder/scripts/check-dependencies.mjs <app-root>`, `npm run build`, `npm run test:browser -- --port <test-port>` and `npm run preview -- --port <production-port>`. Open test page and prefixed production URL. Commit source/PLAN/tests/notices/tooling before final evaluation, then apply the plugin's committed/staged/unstaged/untracked freshness checks. Preserve specialized worker build guards.

After independent PASS, push main without force, inspect GitHub Actions for that exact SHA and verify the actual Pages URL. Source and plan changes after testing require affected checks again; report-only commits may follow if relevant paths remain identical.

From the course root run `python3 scripts/build.py`, `python3 scripts/check.py`, `claude plugin validate .` and `git diff --check` after gallery/evidence integration. Protected catalog writes use normal host approval. Never overwrite unrelated configuration or publish it accidentally.

## Validation and Acceptance


All nine apps need updated checklist coverage, meaningful default/counterfactual observations, clean evaluated checkpoints, independent review PASS, successful exact-commit deployment and live verification. Shared acceptance includes actual font loading/license output,320/390/1440 layouts, keyboard controls, no stale control/result mismatch after Back, and source/provenance links. Browser requests remain local. State limits; this is not full accessibility/model certification or clean-machine/Work/student testing.


## Idempotence and Recovery


Preserve local and remote history; do not reset, force-push, change remotes or recreate repositories. Fetch before work, inspect unexpected divergence and integrate ordinary changes safely. Keep failures and correct with ordinary commits. Stop only preview processes owned by this campaign. Never copy dependency trees, generated bundles, credentials or imported user files into course evidence.

## Artifacts and Notes


Each app records BUILD-STORY.md, updated PLAN/DECISIONS, appended EVALUATION/REVIEW/DEPLOYMENT rounds and revision coverage. The course record captures exact commits, outputs, screenshots and sanitized source snapshots. Initial commits before this campaign are available in each existing Git history; the original campaign folder is preserved.

## Interfaces and Dependencies


Use the current approved package versions/configurations and existing Node/npm/Vite pair; visitors receive static assets. Canonical design assets are copied from the local revised plugin, retaining OFL notices. GitHub Actions continues deploying only dist. No new external runtime service or telemetry exception is authorized.

Revision note (2026-10-09): began live output revisions after completing core preventive corrections, because the user now explicitly requests applying that guidance to deployed apps.
