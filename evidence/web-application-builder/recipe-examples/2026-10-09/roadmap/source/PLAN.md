# Launch Ledger — agreed plan

Build an original browser planning tool for a fictional refillable desk cleaner launch. A team can edit task durations, dependencies and earliest permitted starts, see propagated dates and critical tasks, compare the revised schedule against a fixed baseline, and see the separate promised-date buffer. Local JSON import/export preserves work without a server. All examples are synthetic.

## Model and agreed example

Use whole calendar days with start-inclusive/end-exclusive intervals, no weekend/holiday adjustment. Project starts2026-11-02; promised ready date2026-12-01. Validation5d; packaging8d after validation; supplier10d after validation; pilot4d after packaging+supplier; safety7d after pilot; sales materials6d after packaging; launch preparation1d after safety+sales. Baseline earliest completion2026-11-29,2days promise buffer. Packaging+5d or safety+3d each produces2026-12-02,1day late. Changing promise never moves tasks. Critical tasks have zero total float against earliest project completion; promise buffer is separate. Packaging float2d; sales materials7d.

Directed dependencies must be acyclic and refer to existing task IDs. Earliest task start is maximum of project start, task release and predecessor completion. Backward calculation supplies latest starts and float. This is a precedence schedule, not staff/resource optimization or a probability forecast. Restrict accepted dates2020–2035,1–365day durations,1–30tasks and a730day maximum schedule horizon with completion through2036. Reject unsupported/malformed schemas and cycles transactionally. Keep last valid schedule recoverable if a native draft is invalid. Import atomicity includes guarding async reads against subsequent edits.

## Product and presentation

Launch Ledger uses a calm navy/ivory editorial workspace with copper lateness and teal critical paths. Native controls expose every required edit. A Frappe Gantt chart provides derived, non-draggable bars with a table of exact start/end boundaries, duration, dependencies, baseline deltas and float. Imported labels are text only; chart labels use fixed safe task numbers. Show revised or baseline chart in one persistent container/instance. Detailed task labels always appear in the table and form.

## Toolchain and selected library

Managed Vite8.3.4 build; Frappe Gantt1.2.2 only, no framework. Node22.19.0/npm10.9.3, exact lockfile and disabled install scripts. Read five workflow skills, shared workflow, library selection/managed build/evaluation freshness and Campus Designer with identity/color/type/web/review; selected Frappe skill uses readonly and one mounted instance. Copy vendor CSS from installed distribution and canonical adapter. Runtime only same-origin local assets; local files transient in memory. Source https://github.com/jordanmeyer/bab-example-roadmap, base /bab-example-roadmap/. Root publishes after independent reviewer PASS.

## Acceptance

Independent model tests cover baseline/presets, leap/DST/month/year transitions, fractional/invalid data, DAG ordering, releases, disconnected terminals, missing tasks/cycles and JSON roundtrip. Browser checks must establish production-prefix date alignment, safe imported text, actual export/import, invalid preservation, keyboard forms,320/390/1440 frames, readable exact table, chart lifecycle and no external runtime. Reviewer owns REVIEW.md and retained failed rounds. Evidence points to actual source checkpoint and confirms no source/PLAN change after final checks.
