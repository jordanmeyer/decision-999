# Build a local SQL fulfillment lab

This livingExecPlan follows~/.codex/PLANS.md. Maintainprogress, discoveries, decisionsandoutcomes.

## Purpose / Big Picture

Students can inspect orders/shipment joins and identifyunshippedorder value byregion/product. Tinyknowncase showsmistaken$750grossjoin versuscorrect$550,$275shipped,$275outstanding. Switch to2,400syntheticorders/7,200lines and editrealSQL locally.

## Progress

- [x] (2026-10-09) Actualsimulatedplanningandtinycaseconfirmed.
- [x] (2026-10-09) Newisolatedroot withmanagedstarter/theming prepared.
- [ ] VerifyEHworker, exacttypesandactualreadonlyenforcement beforeclaimingit.
- [ ] Implementdataset/model/queries, localenginecancellation and originalUI.
- [ ] Testactualbrowserknownanswers/errors/cancel/import-freeworkflow/precision/layout.
- [ ] Independentreview/fixloop and freshness; rootpublication.

## Surprises & Discoveries

Pendingreadonlyproof. PriorisolatedEHprobe supports localworker/WASM, permissionrejectionofremote/extension/config anderrorrecovery. ItdoesnotproveimmutableSQLexploration.

## Decision Log

Onlybundledgenerateddata, noarbitraryimports (studentconfirmed). Fourtables orders,lineitems,products,shipmentlines. Currencyintegercents, exactaggregates. EChartsforboundedtwo-columncategoricalnumericresults, exacttablecanonical. UsecandidateDuckDBEHonlyundercoordinatortrialauthorization; retainexpectedcheckerrejection.2026-10-09.

## Outcomes & Retrospective

Planningcomplete; technicalproof/implementationpending. Donotclaimreadonlybeforeactualevidence.

## Context and Orientation

Root/private/tmp/bab-recipe-examples-2026-10-09/sql. app/data.js owns deterministicrowsand handcase; app/queries.js authorsexampleSQL; app/engine.js owns localEHworker/database/settings/cancel/reset/resultserialization; app/app.js ownsDOMandcharts; testsimportsactualmodulesandqueries. ReviewerownsREVIEW.md. Nootherapp/coursefilesedited.

## Plan of Work

Installpinned@duckdb/duckdb-wasm1.32.0 andecharts6.1.0. Inspectinstalleddeclarations/source forfileaccess/read-only/parser APIs; writebrowserproof intests withvisiblepass/fail. Obtainstudentdecisionifreadonlyisnotpractical. Implementlargeandtinydata; meaningfulSQLaggregations and explicitduplicateinflationexample. UIretainsSQL onfailures, boundsresultsandquerytime, cancelterminatesworkerandresetfreshusableengine. Showsettings/firstloadandlocal-onlylimits honestly. Useexactintegerstrings forlargevaluesanddocumentchartcoercionbound.

## Concrete Steps

Fromthisroot:npm install --save-exact @duckdb/duckdb-wasm@1.32.0 echarts@6.1.0 --cache /private/tmp/bab-npm-cache. Then npmci withsamecache; npmrunbuild; dependencycheckerexpectedcandidaterejectionrecorded. Run npm run test:browser -- --port 9513 and npm run preview -- --port 9514. Testhttp://127.0.0.1:9513/tests/ andproductionhttp://127.0.0.1:9514/bab-example-sql/. BrowseronlyCUA,noalternateautomation. Keepownserversforreviewer.

## Validation and Acceptance

Tinyfourlinesgross55000cents,ship27500,out27500. Naive75000demonstratesduplicatedA. East10000out,West17500out; Notebook17500,Lamp10000. Threeorders,fourlineitems,twoproducts,fourshipmentevents. Testsindependentarithmetic,notduplicatingSQLalgorithm. TestremoteCSV/LOAD/INSTALL/re-enableaccess plusmutableDDL/DML andmulti-statementrequests withactualenginebehavior. ErrorsretainSQL. Aheavyquerymustreallycancel, thenSELECT42work. Displaycapdoesnotpretendtolimitcomputation. ExactBigInt/DECIMALdisplay andempty/textsafevalues. Narrow320/390/desktop1440; keyboardactions andsource/notices/prefix. Reviewactualcheckpointandcleanrelevantsource/PLANafterchecks.

## Idempotence and Recovery

Repeatnpmci/buildsafely; onlydistgenerated. Datasetreplacementresetsexpendableworker; noexternaldataorsideeffects. Cancelmustterminaterunningworker, thenrebuildchosenbundle. Retainqueryinputforcorrection. NoSQLuserfilespublished. RootownsGitHubcreation/Pages afterPASS.

## Artifacts and Notes

RoleplayexactrepliesstoredPLANNING-CONVERSATION.md. Candidateauthorizationfromroot2026-10-09; checkerstatus remainsliteral.

## Interfaces and Dependencies

@duckdb/duckdb-wasm1.32.0EH, ECharts6.1.0, Vite8.3.4; localassets withVite?url. Oneenginegenerationtracksasyncrequests; close/terminateondisposal/reset. ModeldataindependentofUI/worker. ExactmoneyinBigIntintegercents; JSON-safe stringsreturnedtoUI. Chartonlyfinite/safevalues withunitcaption. Noauth/backend/remoteextensions.

Revisionnote2026-10-09: originalconfirmedplanandspecifictechnicalproofmilestone beforeimplementation.

## Current progress — supersedes pending implementation notes above

- [x] Dataset, authored SQL, local engine, UI and exact result serialization implemented.
- [x] Native prepared SELECT and READ ONLY transaction verified; rejected remote JSON-extension approach preserved.
- [x] Real browser integration suite36/36; production build and clean npm ci pass.
- [x] Independent coordinator production precision, cancel/recovery, large oracle, history and narrow keyboard/chart/table observations received.
- [x] Final timeout/export witness reported PASS by the coordinator.
- [ ] Independent reviewer verdict and coordinator candidate promotion/publication.

The early read-only and implementation-pending prose is historical planning state. Current source uses no JSON parser extension. The engine's own tokenizer and prepared-statement parser preserve exact literals and reject multiple statements, with an independent native read-only transaction. Developer browser availability was lost after an interrupted download wait; remaining narrow and lifecycle observations are attributed to the coordinator. No alternate browser automation was used.
