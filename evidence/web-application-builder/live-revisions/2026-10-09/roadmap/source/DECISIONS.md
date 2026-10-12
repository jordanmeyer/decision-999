# Decisions

Simulated student confirmed whole calendar days, automatic dependency dates, separate promised-date buffer, and fixed baseline comparison. Strict DAG means no cycles; no lags or parallel resource constraints. Task release is a lower bound, project start is another; actual start is max of those and predecessor ends. Backward latest-start calculation uses earliest overall completion, not the promise. Release gaps may control readiness and give predecessors float.

Only Frappe Gantt1.2.2 is required; plain native forms avoid framework state and unnecessary dependencies. One instance stays mounted and refreshes data for baseline/revised views. No unsupported destroy or recreate loop. The readonly option and popupfalse are verified against installed source and https://docs.frappe.io/gantt/config. Local vendor CSS precedes canonical theme and app refinements.

Installed Frappe date-only ends gain a full day. Adapter supplies end-exclusive minus one calendar day, so a2day Jan5 task gets vendorendJan6 and occupies exactlyJan5/6. Model arithmetic is integer UTC days; Frappe handles local display and timezone offsets. Tests cover DST and leap/year boundaries.

Frappe labels use innerHTML and its dependency map is an object. Never send imported labels or IDs into that surface: adapter assigns task1/task2… and authored ordinal/duration names; table/forms use textContent. This avoids HTML injection and inherited object-key collisions while preserving original IDs in the model/JSON. Native table mirrors selected chart schedule to keep row numbers meaningful after importing a different task set.

Inputs supported: 1–30tasks, names1–80characters, dates2020–2035, durations1–365, horizon≤730days/completionby2036,128KiBJSON. Bounds keep local chart responsive. Strict exact schema rejects extra fields so data is never silently dropped. Atomic imports preserve current/baseline on failure and reject late file reads after subsequent changes. Baseline saves are explicit; imports/export concern current plan only.

Visual design follows bundled Campus Designer public guidance: navy, teal, copper, restrained system fonts and Georgia headings. No institutional logos or endorsement claims. Public repository identity is user-authorized Jordan Meyer <jordanmeyer@protonmail.com>. Root alone publishes after independent reviewerPASS.

## Owner-authorized live revision — 2026-10-09

Restore resource feasibility and milestones from the original brief. Strict version2 adds resources, explicit task/milestone kinds and constant people/day allocation. Old files cannot establish missing capacity assumptions and reject clearly. The dependency model stays unchanged; capacity warnings never silently level dates. Six overload days coexist with Nov29 readiness. A milestone is a zero-duration event, with same-day successors and zero resource use; the vendor’s one-day drawing placeholder is replaced with a zero-width point and diamond at the actual boundary. Imported labels stay empty through the vendor HTML surface and are then set by textContent. A promise marker and full names make the chart self-explanatory.

Use Apply all edits consistently for complete date/dependency/resource scenarios. Show pending state immediately; disable task/chart selection until apply/reset to avoid dropping edits silently. Disclose secondary tables/forms; retain readable exact dates and actual baseline semantics. Bundle licensed local fonts and public BUILD-STORY without inventing a new student conversation.
