# Build a dependency-driven launch ledger

This living ExecPlan follows ~/.codex/PLANS.md. Maintain progress, discoveries, decisions and outcomes with actual evidence.

## Purpose / Big Picture

A fictional consumer-products team can see whether a promised launch survives packaging or safety delays. Open the app, observe Nov29 completion and2days buffer, choose either delay preset and observe Dec2 completion and1day late. Every dependency and date is inspectable without the chart.

## Progress

- [x] (2026-10-09) Simulated planning completed; assumptions and exact confirmation saved.
- [x] (2026-10-09) New isolated folder and managed starter prepared.
- [x] (2026-10-09) Implemented model, native forms, persistent readonlyGantt and40independentcases.
- [x] (2026-10-09) Original production, import/export and review completed; prior evidence retained.
- [x] (2026-10-09) Revised resources/milestones/promise/names/pending state and typography implemented; exploratory47/47, capacity/date/milestone and synthetic import checked.
- [ ] Checkpoint revision and finish final production/layout/keyboard/Back evaluation.
- [ ] Obtain independent review PASS, preserving failures and source freshness, then hand off publication.

## Surprises & Discoveries

Installed Frappe adds one day to date-only ends; adapter supplies lastoccupiedday. Its HTML-capablelabels/prototype-map IDs are isolated via fixedordinals. DefaultWeekmonthpadding displayed emptychart at320; changed to Day32px/2daypadding. Initial fixedmonthheaderstring repeated/overlapped daily; changed to monthtransitioncallback and visually rechecked. Harness hiddenattribute was overridden by iframe display:block; explicit hiddenCSS fixed it. Initial parentfolder npminstall cleaned up, describedSETUP.

## Decision Log

Use Frappe1.2.2 because the agreed product is a dependency schedule. Use plain JavaScript/Vite, with no React, because forms and one persistent chart need no framework. Keep model in app/model.js and all dates as integer UTC calendar days; translate for chart only. Single persistent chart container avoids undisposable document listeners. The baseline is a separate validated snapshot, not overwritten by ordinary task edits/imports.2026-10-09 developer/student agreement.

## Outcomes & Retrospective

Product complete and source review underway. Actual38casefirstsuitepassed;40casefinalsuitepending. Production presets/import/rejection/export/cycle/keyboardsubmit/DSTbarwidth/lifetime and320/390/1440 screenshots observed. Remaining independentreview and finalfreshness. No publication yet.

## Context and Orientation

Root is /private/tmp/bab-recipe-examples-2026-10-09/roadmap. app/model.js owns schema/date validation and forward/backward dependency calculations; app/app.js owns native forms, import transactions, baseline and chart adaptation; app/style.css owns presentation. tests/model.test.js imports the real model and compares independent known answers. PLAN.md is the agreed scope; PLANNING-CONVERSATION.md preserves simulation. Reviewer alone owns REVIEW.md. Do not modify the course repository or sibling apps.

## Plan of Work

Install exactapprovedFrappe1.2.2, copy its dist CSS, retain notices and inspect date/lifecycle behavior. Implement schema version1 with name,start,promise,tasks; task id,name,duration,release,dependencies. Forward order ensures predecessors complete before dependents start. Backward latest dates from overall earliest completion produce total float, the days a task can move before that completion changes. Release dates constrain earliest start; promise only measures buffer. Keep native invalid drafts visible with last-valid recovery, pause misleading results, and make JSON imports atomic. Present native selection/editing, baseline/revised views, exact table and purposeful preset comparison. Use fixed safe ordinal chart labels and textContent for imported text.

## Concrete Steps

In this root run npm install --save-exact frappe-gantt@1.2.2 --cache /private/tmp/bab-npm-cache. Verify node22.19.0/npm10.9.3. Run node /Users/jordan/Projects/decision-999/plugins/browser-app-builder/scripts/check-dependencies.mjs . then npm ci --cache /private/tmp/bab-npm-cache and npm run build. Start npm run test:browser -- --port9509 (space before port value) and npm run preview -- --port9510. Tests at http://127.0.0.1:9509/tests/; production at http://127.0.0.1:9510/bab-example-roadmap/. Use actual browser observations; test loading is never a pass.

## Validation and Acceptance

Validate baseline Nov29, promiseDec1, floatpackaging2/sales7 and bothdelaypresetsDec2. Promise changes must leave task dates untouched. Independent miniature Jan5+2days endsJan7, predecessor successor startsJan7; leapFeb28+2→Mar1in2024; yearcrossing. Test reordered DAG, releases, malformed dates, cycles, missingIDs, duplicates, extra fields, range/size bounds and safe text. Inspect readonly chart edges align text and no drag alters dates. Exercise actual JSON download/reimport and invalid prior preservation. At320 no document overflow, exact dates and names readable, local table/chart scroll works. Keyboard everyessentialedit. Check appassets at actualbase; source/PLAN diff empty after final evidence.

## Idempotence and Recovery

npmci and build repeat safely and only dist regenerated. No user files accepted into public. Inputs in memory; JSON exportexplicit. Invaliddraft restorelastvalid; importvalidates candidatebefore replacing. Root creates repo/pushes only after independentPASS. Keep servers running for reviewer then handoff root.

## Artifacts and Notes

Baseline manual path5+10+4+7+1=27days; Nov2+27=Nov29. Packaging13days replaces supplier10 as controlling branch,27+3=30days=Dec2. Safety10adds3days similarly. Promise buffer target minuscompletion, independent of float.

## Interfaces and Dependencies

model exports day(dateString), iso(integerDay), validate(plan), schedule(plan), parsePlan(text), samplePlan(preset). schedule returns valid/errors or taskdates,float,completion andbuffer. App uses FrappeGantt1.2.2 readonly,popupfalse,local CSS; Vite8.3.4 toolonly. Strict schema and bounded data, no network APIs. Synthetic dataonly.

Revision note2026-10-09: initial agreed design and runnable acceptance recorded before implementation.

Revision note2026-10-09: maintained actual discoveries, model/UI implementation and remaining evidence; retained failures instead of replacing them with passclaims.

Revisionnote2026-10-09: reviewer-directedactualBackfailurefixedwithnativeautocompleteoff onforms/chartselect, noextralifecyclehandler. Invaliddraftstatus nowtruthful. AppliedandpendingBackcases independentlyexercised bydeveloperandrecordedinEVALUATION.

## Live revision milestone — 2026-10-09

Owner requested new guidance. app/model.js now needs version2 resources (constant available people/day), task allocation and zero-duration events. A daily sweep sums active [start,end) demand without rescheduling. Baseline6 overloaded days/peak1.6 gives the requested capacity lesson while existing date answers remain. app/app.js safely inserts full chart labels, transforms milestone placeholders to zero-width points/diamonds, draws promise and marks unapplied edits. Update source/tests/fixtures/fonts/notices/current PLAN and public BUILD-STORY before checkpoint.

Run inventory check, npm ci --cache /private/tmp/bab-npm-cache and npm run build. Start npm run test:browser -- --port 9723 and npm run preview -- --port 9724. CUA opens /tests/ and production /bab-example-roadmap/, then same-origin layout frames. Verify47 tests, default Nov29 with6 overloaddays, capacity1.6 recovery unchanged dates, milestone0days, packagingDec2, pending edits/Back, names/promise position, keyboard and actual frame widths/fonts. Keep failed rounds and fresh source hashes. Independent review precedes publication; no push before root says so.

Revision note: resources and milestone semantics restore omitted brief requirements; no new simulated approval is claimed.
