# Decisions

Simulated student confirmed whole calendar days, automatic dependency dates, separate promised-date buffer, and fixed baseline comparison. Strict DAG means no cycles; no lags or parallel resource constraints. Task release is a lower bound, project start is another; actual start is max of those and predecessor ends. Backward latest-start calculation uses earliest overall completion, not the promise. Release gaps may control readiness and give predecessors float.

Only Frappe Gantt1.2.2 is required; plain native forms avoid framework state and unnecessary dependencies. One instance stays mounted and refreshes data for baseline/revised views. No unsupported destroy or recreate loop. The readonly option and popupfalse are verified against installed source and https://docs.frappe.io/gantt/config. Local vendor CSS precedes canonical theme and app refinements.

Installed Frappe date-only ends gain a full day. Adapter supplies end-exclusive minus one calendar day, so a2day Jan5 task gets vendorendJan6 and occupies exactlyJan5/6. Model arithmetic is integer UTC days; Frappe handles local display and timezone offsets. Tests cover DST and leap/year boundaries.

Frappe labels use innerHTML and its dependency map is an object. Never send imported labels or IDs into that surface: adapter assigns task1/task2… and authored ordinal/duration names; table/forms use textContent. This avoids HTML injection and inherited object-key collisions while preserving original IDs in the model/JSON. Native table mirrors selected chart schedule to keep row numbers meaningful after importing a different task set.

Inputs supported: 1–30tasks, names1–80characters, dates2020–2035, durations1–365, horizon≤730days/completionby2036,128KiBJSON. Bounds keep local chart responsive. Strict exact schema rejects extra fields so data is never silently dropped. Atomic imports preserve current/baseline on failure and reject late file reads after subsequent changes. Baseline saves are explicit; imports/export concern current plan only.

Visual design follows bundled Campus Designer public guidance: navy, teal, copper, restrained system fonts and Georgia headings. No institutional logos or endorsement claims. Public repository identity is user-authorized Jordan Meyer <jordanmeyer@protonmail.com>. Root alone publishes after independent reviewerPASS.
