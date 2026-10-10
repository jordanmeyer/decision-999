# Correct the re-reviewed example-app checklist

This living ExecPlan follows `~/.codex/PLANS.md`. Maintain Progress, Surprises & Discoveries, Decision Log and Outcomes & Retrospective. The completed prior revision is archived in `docs/plans/2026-10-09-browser-app-builder-live-revisions.md`.

## Purpose / Big Picture


Students should be able to follow each of the twelve listed applications from a prediction through an observable result and a justified limitation. Correct every remaining requirement in `evidence/browser-app-builder/reviews/2026-10-09-example-app-checklist.md`, including confirmed defects, bounded teaching exercises, actual interaction checks and explicit optional-extension assignments. Preserve useful current behavior and the distinction between automatic checks and learning evidence from a real novice.

## Progress


- [x] (2026-10-09) Read the revised checklist and captured all 126 unique requirements in `evidence/browser-app-builder/checklist-corrections/2026-10-09/coverage.json` without altering the user-authored review.
- [x] Assigned three developers to nine library apps; coordinator owns three original trials and cross-app verification.
- [x] Asked the user to arrange real novice participation; the user agreed. Prepared and independently reviewed twelve answer-free participant sheets, facilitator answers and a blank observation form. No participant sessions have occurred.
- [x] Implemented the twelve apps' bounded corrections and obtained independent source reviews. Current production-browser follow-up continues below.
- [x] Ran current browser model suites: executive14, uploads35, SQL47, simulator24, optimizer27, presentation45, process39, roadmap52, markets27, pricing27, inventory13 and sales46 checks. Later UI-only fixes have separate targeted observations; these counts are not blanket acceptance.
- [ ] Correct and evaluate executive, uploads and SQL items.
- [ ] Correct and evaluate simulator, optimizer and presentation items.
- [ ] Correct and evaluate process, roadmap and markets items.
- [ ] Correct and evaluate pricing, inventory and original sales items.
- [x] Independently reviewed all twelve revised apps and resolved source-review findings; later browser discoveries have their own repair records.
- [x] Completed representative 319px/1439px and 200% text observations for the specified layout risks, including independent screenshot review and targeted repairs.
- [ ] Complete actual screen-reader and physical-device tasks; retain unavailable capabilities as incomplete. The user assigned screen-reader checks to a person; VoiceOver remains unchanged.
- [ ] Run real novice walkthroughs, record confusion and make needed corrections.
- [x] Published all twelve reviewed correction builds to their existing repositories; verified successful Pages runs for each exact pushed commit, live known-answer interactions and static artifact integrity. Presentation received one ordinary note-only follow-up, also verified live after normal reload. Roadmap and Sales later received CSS-only readability corrections; their exact-commit Pages deployments and normal-URL reload checks passed and are tracked in the evidence index.
- [ ] Update gallery, source snapshots and requirement evidence; complete repository checks and closure audit.

## Surprises & Discoveries


The current review is newer than the completed nine-app revision: it contains 126 open items across twelve apps (15 P1, 101 P2 and 10 P3). Prior 285 passing checks do not establish these requirements. Roadmap sign-off does not gate subsequent work, a returns matrix loses keyboard focus, and original sales shows valid-looking zero totals during an invalid date range.

The course has unrelated edits in `site/config.json`, generated catalogs and local review drafts. Preserve them and publish only intended changes. Applications are separate Git repositories, not source files inside the plugin.

Actual browser follow-up exposed additional defects: Executive's detail Escape reached two modal handlers; Presentation's slide engine intercepted local result links; Simulator's flat loss curve produced excessive axis ticks; and enlarged Market controls clipped inside a fixed sidebar. All four passed targeted repair checks. Inventory also needed an actual-width chart so narrow labels stayed legible; its narrow and enlarged retests passed. Keep failed rounds in the per-app evidence.

Authored same-origin browser harnesses exercised real imports, exports and database/solver workers. Uploads passed six paired-import/export cases. SQL passed five export/recovery cases and its real eight-second timeout (8002.4ms), followed by reset and a successful query. Optimizer's actual busy-edit path invalidated its old allocation and solved the edited assumptions. These checks do not establish native save-dialog behavior or novice performance.

The current browser rounds the requested 320px frames to 319 CSS pixels and 1440px frames to 1439. Evidence records actual dimensions. Separate 200% text checks enlarge computed fonts in authored QA frames; they are not physical-device or OS-zoom observations. Native file-picker tooling was slow, so automated File/DataTransfer cases are explicitly distinguished from the one observed native Sales import.

A returning browser initially reused the previous presentation HTML after the note-only follow-up. Ordinary reload retrieved the corrected note without a cache-busting query. Save this observation rather than claiming navigation alone always updates a running app. The note now explains that its Lower/Stronger presets restore the board-case costs; hidden Reveal announcement text remains suppressed, which is DOM evidence rather than a speech test.

The final layout pass found enlarged Roadmap dates colliding with the next column and narrow Sales dates breaking into fragments; enlarged Sales amounts also split their cents. Small CSS corrections passed narrow/enlarged retests and independent image review. A few mid-scroll screenshots showed transient repaint artifacts; settled captures resolved those separately from genuine defects. The local QA iframe needed an explicit revision marker to inspect rebuilt Roadmap assets; normal live reload was checked separately.

The later actual download/chooser follow-up completed UPLOAD-12: both current samples were downloaded and their headers inspected; unmatched and excessive returns retained source identity and totals, then the corrected pair was accepted. This requirement specifies a functional student workflow, not a novice participant. ALL-16 still requires a real novice.

## Decision Log


Decision (2026-10-09): implement original trial corrections using plain JavaScript while retaining original-trial provenance. The goal covers their named requirements; substituting separate newer trials would not satisfy it.

Decision (2026-10-09): optional P3 improvements become scoped extension assignments with assumptions and validation requirements. The checklist explicitly asks to keep shipped examples small.

Decision (2026-10-09): real novice and screen-reader requirements stay open until exact evidence exists. Agent roleplay, accessible DOM and keyboard checks cannot replace them. Continue independent implementation while arranging these checks.

Decision (2026-10-09 local / 2026-10-10 UTC): the user explicitly assigned actual screen-reader checks to a person. Leave VoiceOver unchanged; do not treat browser snapshots as spoken-output evidence.

## Outcomes & Retrospective


All twelve apps have source corrections and scoped local evidence. The coverage index tracks 126 requirements without modifying the original review: 118 verified locally, 4 implemented with verification pending and 4 open human requirements. It distinguishes specific verified facts from incomplete complete-task acceptance. Additional browser checks closed export, recovery, pricing orientation and named result-route gaps. The broader representative layout review also passed after correcting Roadmap date/type overlap and Sales fragmented dates and split metric amounts. The actual file-download/chooser rejection-and-correction workflow also passed, closing UPLOAD-12 without claiming novice learning. Human/device checks remain explicit in the evidence index. All twelve current correction builds are deployed and have bounded live verification; no real novice/screen-reader pass is claimed. The user has agreed to arrange novice observations; the independently reviewed packet now links to the verified live apps and is in `evidence/browser-app-builder/checklist-corrections/2026-10-09/walkthrough/`.

## Context and Orientation


Course root is `/Users/jordan/Projects/decision-999`. The authoritative review supplies every requirement and reproduction. `evidence/browser-app-builder/checklist-corrections/2026-10-09/coverage.json` preserves its exact requirement text, source digest, status and evidence. Add sanitized per-app records below that directory. Do not change review content to redefine success.

Nine library repositories are `/private/tmp/bab-recipe-examples-2026-10-09/<slug>`: executive, uploads, simulator, process, roadmap, markets, sql, optimizer and presentation. Remotes are `git@github.com:jordanmeyer/bab-example-<slug>.git`; live URLs are `https://jordanmeyer.github.io/bab-example-<slug>/`. Original trials are under `/Users/jordan/Projects/browser-app-builder-trials/2026-10-08/<slug>` for pricing, inventory and sales. Clone their existing remotes into `/private/tmp/bab-checklist-originals-2026-10-09/<slug>` to preserve original work folders. Trial remote/Pages names are `bab-trial-<slug>-2026-10-08`.

Each app has app source, browser tests, plan/evaluation records and a main-branch Pages workflow. Library apps use locked Node/npm/Vite. Originals remain HTML/CSS/JavaScript. A source checkpoint is a Git commit recording exact application, tests, configuration and model evaluated. Documentation-only follow-ups retain applicability only after relevant-path comparison.

## Plan of Work


First correct concrete model/state failures and high-priority lessons. Roadmap sign-off and completion must follow one dependency rule. Invalid sales filters must hide or mark results invalid. Upload selection must preserve focus; export grouping must match its label. Market size cannot be called company revenue. Presentation must explain its full-first policy beside the outcome. Preserve reproductions and add regressions for real boundaries.

Next finish teaching paths. Put prediction, specified control changes, answer derivation and a limitation in each public BUILD-STORY or walkthrough, linked concisely from the app. Add the requested small comparison, context-preserving export and nearby save/result actions. Originals gain bounded lessons, varied samples and state fixes without frameworks. P3 tasks are assignments, not claimed implemented features.

Then inspect complete browser tasks using independent expected values and production output. Developers own ports 9701–9706, 9711–9716 and 9721–9726; coordinator uses 9731–9733. Avoid global viewport changes during parallel work. Same-origin authored layout harnesses may prove 320px and 200% text reflow, with the mechanism recorded; they do not prove physical keyboard or screen-reader behavior. Reserve exclusive browser/OS access for actual VoiceOver tasks if available. Prepare novice tasks without answers visible and collect uncoached observations from a real participant.

Finally independently review, correct, checkpoint and push each app to its existing authorized destination. Wait for successful Actions tied to exact commits and observe live known results. Retain failures. Update gallery descriptions/previews where needed; preserve historical campaign records and save current snapshots tied to commits. Audit all 126 items against direct evidence before closing the goal. Missing human evidence keeps those items open.

## Concrete Steps


Inspect Git status, remotes and applicable AGENTS files before edits. Preserve local identity/remotes; never force-push. Library apps use recorded Node/npm, the plugin dependency checker, `npm run build` and existing browser tests, then production at the repository base path. Originals run `tests/index.html` through a loopback static server with an existing host runtime; maintainer preview does not become a student dependency.

Pricing acceptance includes $8 × 100 − $500 = $300; 62 units gives −$4 and 63 gives $4. Ten-cent contribution covers $100 at 1000 units. Zero/nonpositive contribution needs distinct explanations. Inventory follows the delayed-delivery ledger and exact on-order position before orders; compared policies see the same demand. Sales distinguishes invalid dates from valid empty filters, retains the tiny $390/$234/$156 fixture and adds independently summed varied data with a loss-making row. Maximum-size data needs bounded visible rows and complete export access.

Course checks are `python3 scripts/build.py`, `python3 scripts/check.py`, `claude plugin validate .` and `git diff --check`. Validate a staged publication snapshot with committed site configuration so unrelated featured ordering stays local. Inspect desktop/narrow gallery and keyboard/copy behavior if its UI changes. Stop only owned servers.

## Validation and Acceptance


Every coverage requirement needs source location, reproduction or exercise, observed outcome, evaluated commit and live verification where applicable. Tests establish only covered behavior. Screen-reader announcements require an actual reader; novice learning requires a real person. If solver limit states cannot be induced, retain the checklist qualification and distinguish simulated adapter evidence. Do not claim physical-device testing from desktop emulation.

Final audit inspects current files and remote state rather than relying on assertions. Checks cover known answers, invalid recovery, export context, source/configuration freshness, desktop/narrow/enlarged rendering and named keyboard tasks. Keep local-only runtime and supported libraries.

## Idempotence and Recovery


Use ordinary revisions; preserve failures, user drafts and history. Never reset existing folders. Deployment retries reuse repositories. Failed imports preserve prior datasets; edited drafts use the bounded recovery requested by the checklist. Never retain personal imports, secrets, dependency trees or generated bundles in course evidence.

## Artifacts and Notes


Deliver corrected live applications, public teaching walkthroughs, extension assignments, per-ID coverage, reproduced failures/corrections, reviewed checkpoints and deployment evidence. Identify pending participant/accessibility evidence instead of replacing it with simulations.

## Interfaces and Dependencies


Keep existing model functions and architecture unless a correction needs change. UI and browser tests call the same models. Maintain local synthetic data, repository paths, licenses and canonical Campus Designer guidance. No Remotion or telemetry exception is reintroduced.

Revision note (2026-10-09): replaced the completed live-revision plan because the goal references a newer 126-item review including three original apps and human verification gates.
