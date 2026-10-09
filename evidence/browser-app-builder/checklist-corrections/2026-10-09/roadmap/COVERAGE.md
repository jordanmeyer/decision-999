# Launch Ledger checklist corrections

Source checkpoint `62f102897af2ecb47799dcbc03582cbe7b29446d`. Implemented; independent review, browser witness and publication pending. App source remains in its separate repository. Earlier evaluation/review failures are retained there.

| ID | Disposition and evidence |
|---|---|
| ROAD-01 | Controlling chains plus changed-task dates and a float explanation appear beside the finish change. WALKTHROUGH derives5extra−2float=3days later. |
| ROAD-02 | Presets live under “Load a teaching scenario”; pre-click notice says both current plan and baseline are replaced and applied work should be exported. Buttons explicitly say Load…example. |
| ROAD-06 | Supplier-release example starts SupplierNov12 after validationNov7; finishDec4/3late. WALKTHROUGH shows the5day idle gap and unchanged dates when promise moves. |
| ROAD-08 | Compact changed-task list shows baseline and revised start/end in one view; controlling chains appear together. |
| ROAD-10 | Exact-table task buttons open editor and focus task name. Dropdown retained. Pending edits disable task switching; a baseline-only task cannot select an unrelated current task. Root actual Packaging table action selected that task and focused #task-name. |
| ROAD-11 | Existing-task scenario-editor boundary explicit; no general add/delete workflow added. |
| ROAD-12 | New dependency-level regressions: sign-offDec4→ReadyDec16; terminalReadyDec4 withLaunchNov29. Existing capacity1.6 preservesdates test retained. Root actual capacity1→2 removed six overloads without movingNov29; terminal-only ReadyDec4 moved only completion five days while all eight predecessor dates stayed unchanged. Actual sign-offDec4 gave coherent ReadyDec16. |
| ROAD-13 | Optional working-calendar assignment in WALKTHROUGH asks weekend/holiday rules and boundary tests. Current calendar-day model intentionally retained. |
| ROAD-14 | Sign-off now gates Pilot and Sales; every supplied workstream feeds Ready. Regression confirmsDec4signoff→Dec16completion rather than divergentNov29/Dec4. |
| ROAD-15 | Resource-repair example uses Sales releaseNov28, constant capacity,0overload/Dec5finish/4late. IntermediateNov21 stayswithinfloat butstill6overloads at1.1. Manual comparison exercise explains the tradeoff; no leveling optimizer added. |
| ALL-02 | Public WALKTHROUGH has predict/change/reconcile/limitation exercises, linked near the app introduction and from BUILD-STORY. |
| ALL-05 | Visible View dates and capacity link precedes scenario controls; keyboard skip retained. |
| ALL-07 | Export-applied-plan action and explicit reload/baseline-loss guidance beside task editing. |
| ALL-08 | Not applicable: original Sales lens owned elsewhere. |
| ALL-11 | Actual screen-reader task protocol supplied. No actual reader session available or claimed; remains an evidence gap. |
| ALL-12 | Authored320 frame and separate200%computed-font test harness prepared. No shared viewport change. Root scoped1439px/body32px result view has no page overflow and visible result link; broader changed/expanded views remain pending. |
| ALL-14 | Existing JSON retains complete current-plan inputs. Explicit exclusion of comparison baseline retained beside export. Checklist's remaining CSV work belongs to other apps. |
| ALL-16 | Novice protocol supplied, but no actual novice session or instructional-readiness claim. Remains an evidence gap. |

Validation so far: npmci0vulnerabilities; approved dependency checker and production build pass; Node harness ran actual pure-model52/52 checks and JSON fixtures. This is not relabeled browser evidence. Developer CUA reported no enabled browsers on both initial and root-requested fresh inventory; root has a working browser and will supply independent observations. Test9723/preview9724 running at handoff. No push authorized yet.

## Root actual-browser witness — October 9, 2026

Root reports actual in-app-browser model suite 52/52 passed against this correction source. This is separately attributed browser evidence, not the developer Node harness. Layout, screen-reader and novice tasks are not closed by that result.

Root actual production interactions: Design sign-off earliest release2026-12-04 gave headline/ReadyDec16 (15dayslate), PilotDec4–8, SalesDec4–10. Packaging-delay example gaveDec2/1daylate and switched the controlling chain through Packaging→Designsign-off; five extra duration days less two float days gave three days of completion delay. Supplier-release example gaveDec4/3dayslate; resource repair gaveDec5/4dayslate. Exact-table Packaging design action selected the matching task and focused#task-name. No failures reported in these interactions. This supplies actual witnesses for ROAD01/06/08/10/12/14/15 as bounded above; terminal-only milestone, resource-capacity-only repair, layout and other outstanding paths are not inferred from these observations.


## Capacity-only and terminal-milestone witness

At source62f102897af2ecb47799dcbc03582cbe7b29446d, root increased only Launch team capacity from1 to2 and applied it. All six overloaded days disappeared while dependency readiness stayedNov29 with two days of buffer. Then changing only the terminal Ready to launch earliest release toDec4 produced ReadyDec4, three days late and five days later than baseline. The exact table kept all eight predecessor start/end dates unchanged, including Design sign-offNov15. See browser-capacity-milestone.json. This directly exercises ROAD-12's separation of dependency timing, terminal milestone and capacity.

Root also inspected actual1439 CSS-pixel output with authored200% text and computed body32px: no horizontal page overflow, with the keyboard result link visible at top0. See enlarged-results.png. This is a scoped result-view/route observation, not full expanded chart/table/error/editor coverage or native device zoom. Screen-reader and novice tasks remain open.
