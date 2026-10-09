# Domain and teaching corrections in plugin recipes

Date: 2026-10-09. Source: `docs/EXAMPLE-APPS-REVIEW.md`, compared with the original `evidence/browser-app-builder/recipe-examples/2026-10-09/BRIEFS.md`. This record describes upstream instructions, not repaired live apps. No example source, repository or deployment was changed in this pass.

## Ownership and routing

The new `plugins/browser-app-builder/references/decision-models.md` owns conditional domain guidance. Fourteen specialized skills link the relevant sections; they retain their existing usage patterns and API/lifecycle safeguards. Motion is unchanged because the checklist does not identify a distinct animation-model defect. General workflow, presentation styling, font assets, gallery layout and release checks have separate owners in this task.

| Checklist issue | Canonical section and entry points | Correction |
| --- | --- | --- |
| Across all: default scenario teaches the decision | Single-period inventory; Process capacity; Resource allocation; Analytical presentations | Binding risk, honest overload, visible integrality and intended board stakes; no forced model on unrelated apps. General first-load/brief acceptance remains workflow-owned. |
| Across all: less engineered synthetic data | Uploaded sales and returns; Papa Parse, Arquero, ECharts | Noisy overlapping records and exceptions; separate hand-check fixture and enough periods. |
| Across all: live versus Apply | Analytical presentations; Reveal | Live valid-input calculations for cheap meeting scenarios; atomic application needs a substantive reason. General consistency remains workflow-owned. |
| Executive: board evidence, trend headline, annual margin | Executive dashboards; Mantine, ECharts | Evidence beside each proposed decision; percentage-point or honestly labeled line-axis change; prior-year margin when annual comparison is intended. |
| Executive: target collision, hidden filter affordance | Executive dashboards; ECharts | Rendered point/reference-label checks and recognizable selected filter controls without duplicated values. |
| Executive: ledger clipping/redundancy/accessibility | Executive dashboards; Tabulator | Main ledger is accessible; complete headers, remove filter-fixed columns and redundant sort, aligned numbers. Design-system owner covers disabled-button appearance. |
| Sales: short cohort trend, missing joint view, revenue versus profit | Uploaded sales and returns; Papa Parse, Arquero, ECharts | Sufficient periods, joint product/channel analysis, exact gross-to-return-to-net bridge; only call profit when costs exist. |
| Sales: irrelevant top-N copy, table alignment | Uploaded sales and returns; Arquero, Tabulator | Limits described only when rows are actually hidden; align labels and comparable numeric cells. Sidebar height/number typography are shared design concerns. |
| Simulator: three options hide newsvendor lesson | Single-period inventory; jStat, seedrandom, ECharts | Quantile benchmark under explicit assumptions, quantity sweep, analytical versus simulated expectations, common random draws. |
| Simulator: nonbinding risk, CDF difficulty, Wilson-first language | Single-period inventory; jStat, seedrandom | Meaningful initial risk constraint, nonbinding/no-feasible cases, direct loss summary/histogram, statistical method in details without hiding a conservative selection rule. |
| Simulator: triplicated cards/chart/table | Single-period inventory; ECharts | One primary comparison; on-demand details. Round numeric tick styling remains shared design guidance. |
| Process: finite elapsed time under overload | Process capacity and elapsed time; React Flow | Overload names the team and prevents a sustainable-time headline. Nominal arithmetic remains correctly labeled; no invented queue formula or false infinite arithmetic. |
| Process: weighted versus per-visit values | Process capacity and elapsed time; React Flow | Explicit visit share/count and both units, including repeat visits/concurrency assumptions. |
| Process: clipped panel, tiny graph/mobile, unnamed overload | Process capacity and elapsed time; React Flow | Fully reachable edit panel and readable ordinary step list on narrow screens; name overloaded teams. |
| Roadmap: requested resources and milestones omitted | Roadmaps, resources and milestones; Frappe Gantt, vis-timeline | Workload/availability conflict checks alongside precedence; named zero-duration milestone semantics; do not imply automatic leveling. |
| Roadmap: unlabeled bars, missing promised date, empty range | Roadmaps, resources and milestones; Frappe Gantt, vis-timeline | Meaningful task names, visible commitment marker, range covering schedule and commitment. |
| Roadmap: raw import, confusing confirmation, date inconsistency | Roadmaps, resources and milestones; Frappe Gantt, vis-timeline | Legible paired import/export, distinguish scenario loading/restoring, one authored date style with explicit native locale exception. |
| Markets: ranking causes and sensitivity absent | Market ranking and sensitivity; Leaflet, ECharts | Compare old/new ranks through actual normalized contributions/gates; stated one-variable sensitivity sweep with ties and approximation limits. |
| Markets: invented data on real states, flat legend, filler/empty comparison | Market ranking and sensitivity; Leaflet | Prefer fictional geography when appropriate; contextual provenance otherwise. Sequential meaningful bins, no-data states, compact selection or labeled starting shortlist. |
| SQL: advanced first query, tiny default | SQL learning explorers; DuckDB | SELECT → filtering → aggregation → joins progression; substantial representative dataset or obvious scale choice; tiny case remains available. |
| SQL: money/type jargon, schema insertion | SQL learning explorers; DuckDB | Explicit units with schema-known dollar formatting, preserve precision/export semantics, types in method/schema detail, controlled identifier insertion. Heading alignment remains shared design. |
| Optimizer: value of extra capacity absent | Resource allocation and capacity value; HiGHS | One-action capacity re-solves; objective/mix/constraint comparison; gross versus net value; integer finite increments are not shadow prices. |
| Optimizer: missing 2D geometry and zero-gap default | Resource allocation and capacity value; HiGHS | Visible integrality teaching case; correct feasible-region/objective/relaxation/integer chart for true two-variable lesson; honest zero-gap alternate, no inactive-product clutter. |
| Optimizer: trivia hero, jargon | Resource allocation and capacity value; HiGHS | Lead with decision/objective/constraints and business labels, retain formal detail on demand. |
| Presentation: wrong stakes, missing charts/appendix | Analytical presentations; Reveal, ECharts | Preserve board recommendation scope; distinct evidence views and model appendix rather than shrinking to classroom sale. |
| Presentation: live edits, missing presentation mode | Analytical presentations; Reveal | Live valid updates for inexpensive calculations, explicit fullscreen/presentation and exit/fallback, resize/focus checks. |

## Verification actually performed

- Read the full checklist and opening briefs before editing. Inspected all owned recipe files and shared workflow/selection for conflicting responsibilities.
- Verified the newsvendor critical-ratio formulation in MIT's primary lecture notes and retained its domain conditions. Added primary service-operations lecture context for queue assumptions; did not add an unsupported queue equation.
- Ran skill-creator's actual `quick_validate.py` for the modified skills: all passed. Both host Python and bundled Python initially lacked PyYAML. A disposable `/private/tmp/bab-core-skill-validation` virtual environment with PyYAML 6.0.3 supplied the validator dependency; no plugin or student-runtime dependency changed.
- Resolved package-relative Markdown targets and every `decision-models.md` section anchor: passed.
- `git diff --check`: passed at the time of this validation.
- Separate simplification: conditional guidance has one owner; recipe entrypoints add only a short relevant pointer, not copies of the ten sections. Motion and unrelated library APIs were left alone. Existing working local-only and cancellation boundaries remain intact.

These structural checks do not prove a future generated app will satisfy the checklist. Independent forward-testing and the overall repository check are coordinated by the parent task and must be reported separately. The ten deployed apps remain historical output until explicitly rebuilt; this pass makes no claim that their visible defects disappeared.
