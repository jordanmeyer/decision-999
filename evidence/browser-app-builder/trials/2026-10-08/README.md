# Three parallel Browser App Builder trials

Completed October 8, 2026 (America/New_York; GitHub timestamps cross into October 9 UTC). Three original apps were built in initially blank folders by three parallel subagents using the frozen Browser App Builder **0.1.1**, commit **c8bb0e5db94aaaa32b7838e42e4ac0ab330d59ad**. All 31 frozen package files remained byte-identical. No existing evidence application was copied.

The coordinator conducted the actual simulated planning exchanges, supplied independently calculated expected results, operated the shared browser, created the three authorized public repositories, enabled Pages, and verified deployments. Builders owned separate files, Git histories, tests and reports. These are automated simulations, not conversations with real students.

## Verified applications

| App | Destinations | Final published commit | Evaluated checkpoint |
|---|---|---|---|
| Pricing | [Live](https://jordanmeyer.github.io/bab-trial-pricing-2026-10-08/) · [Source](https://github.com/jordanmeyer/bab-trial-pricing-2026-10-08) | `cf1dc2a` | `cefef31` |
| Inventory | [Live](https://jordanmeyer.github.io/bab-trial-inventory-2026-10-08/) · [Source](https://github.com/jordanmeyer/bab-trial-inventory-2026-10-08) | `65d07eb` | `6976d8a` |
| Sales | [Live](https://jordanmeyer.github.io/bab-trial-sales-2026-10-08/) · [Source](https://github.com/jordanmeyer/bab-trial-sales-2026-10-08) | `610a9d9` | `774f00d` |

Each app passed live interaction checks at its repository-path URL. Every published app file was fetched and matched byte-for-byte with its final source. PLAN.md, EVALUATION.md, tests/index.html and .git/config URLs returned404; only app/ was published. All final source, staged, unstaged, untracked and PLAN freshness checks passed. [verification.json](verification.json) records exact commits and boundary results; the three `*-runs.json` files record observed public Actions API results.

Local projects:

- `/Users/jordan/Projects/browser-app-builder-trials/2026-10-08/pricing`
- `/Users/jordan/Projects/browser-app-builder-trials/2026-10-08/inventory`
- `/Users/jordan/Projects/browser-app-builder-trials/2026-10-08/sales`

Each local repository has one final documentation-only commit beyond public main, deliberately not pushed to avoid another unchanged-site deployment. Public main contains the complete application, tests, plan, evaluation and deployment history through the corrective candidate; final live observations are in the local DEPLOYMENT.md and the snapshots here.

## Comparison

| App | Browser suite | Independent checks | Failures corrected | Update |
|---|---|---|---|---|
| Pricing |25/25 cases|$300 profit;62.5/63 break-even; decimal$0 profit and1,000-unit break-even; zero margin; invalid and range limits|Second live update had cached old JavaScript|Decimal example preset|
| Inventory |10/10 groups|Five-day delayed arrivals; independently derived seeded sequence; conservation; declared statistical tolerance; invalid inputs|Reset ID shadowed form.reset; second live update had cached old JavaScript|Delayed-delivery example preset|
| Sales |42/42 cases|Hand totals and filters; actual quoted/BOM/CRLF CSV import; malformed import preservation; empty results; decimal/overflow limits|Clear filters redrew before native reset finished; second live update had cached old JavaScript|Active-filter summary|

There were **three successful Actions runs per repository**, but successful workflows did not establish live correctness. Initial versions passed. The second deployments exposed a returning-browser cache problem in all three apps: new HTML loaded with cached old app.js. Final corrective deployments versioned the changed script URL as `app.js?v=2`; ordinary reload then produced the correct new behavior. Both failed live rounds and successful corrections are retained. No force pushes, history rewrites, duplicate repositories, or plugin changes were needed.

Final live checks: pricing preset produced$0 profit/$0.10 contribution/1,000-unit break-even; inventory preset produced75%fill,5unmet,3orders,2ending units and6outstanding with the exact expected ledger; sales North displayed its new summary and$240/$144/$96/12. No new console errors followed the local reset repair.

## Evidence and reproduction

[BROWSER-OBSERVATIONS.md](BROWSER-OBSERVATIONS.md) separates browser observations from source review and numerical tests. Per-app folders snapshot the actual simulated conversation, agreed plan, setup, decisions, evaluation rounds and final deployment notes. These are evidence snapshots; clone the linked source repository to run an application rather than treating the snapshot folder as a complete project.

Use the recorded final evaluated checkpoint to reproduce the test state. Serve the repository root with a local static preview capable of JavaScript modules, then open app/ and tests/. SETUP.md records the actual existing executable and commands used on this machine. No new runtime was installed; Python supported preview only because it was already available. Existing Node provided supplementary model checks, distinct from the actual browser tests. Source repositories and PLAN.md contain all synthetic fixtures and derivations. Do not substitute runtime checks for the actual browser interactions described in the observation record.

[Live overview](live-overview.jpg) is an actual browser screenshot of the three published applications in scaled desktop iframes. The accompanying HTML can reproduce that comparison; it loads only the public application URLs. The source site applications themselves remain self-contained.

## Workflow findings

1. Keep independent expected answers and browser interactions in Evaluate. Pure numerical suites missed two real reset defects.
2. Add a small asset-versioning convention to a future Deploy revision. After changing a script, style or imported module, update its URL/reference; entry-script versioning alone is insufficient when an imported module changes. Verify updates in a returning browser. A general build system is unnecessary for these apps.
3. Record the actual host preview procedure. Existing-runtime preview worked here, and the coordinator used no-store responses during local iteration. This does not establish the same capability in ChatGPT Work.
4. Shared-browser serialization worked while file construction remained parallel. It required coordinator assistance, so the run does not demonstrate three autonomous desktop sessions.

## Remaining limits

This verifies the workflow on this configured Mac with existing Git, approved author identity, authenticated GitHub/SSH, browser control and existing runtimes. It does not verify clean-machine macOS setup, Windows, new-account onboarding, actual ChatGPT Work installation/discovery or fresh-chat handoffs, or novice-student usability. Agent Q&A was explicitly simulated. Browser engine/version,200%text zoom, screen-reader behavior and comprehensive runtime network capture remain unverified. Source review found no external data requests or persistent local imports; that is not proof of universal non-transmission.

All trial preview servers on ports9100–9103 were stopped. Apps and source repositories remain public and available. The frozen plugin and unrelated course configuration edits were preserved. Course `scripts/check.py` passed; whitespace verification passed. No course directory deployment was performed.
