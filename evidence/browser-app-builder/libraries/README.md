# Browser App Builder 0.2.0 library verification

Executed October 8–9, 2026, on the configured Mac, with Node 22.19.0, npm 10.9.3, Vite 8.3.4 and the Codex in-app browser. These are maintainer-authored synthetic fixtures, not independent student conversations or automatic Work-routing trials. Exact packages and supported configurations are in the plugin's `references/libraries.json`; each fixture retains its lockfile.

Dependency provenance and notice exceptions are recorded in [DEPENDENCIES.md](DEPENDENCIES.md). Gallery desktop/narrow screenshots are retained alongside these records. The fixed-width review page is retained as [responsive-review.html](responsive-review.html); serve it locally while the three previews run.

Review findings and their verified corrections are recorded in [review-fixes/README.md](review-fixes/README.md); previous reports remain preserved there.

## Results

Presentation: **10/10** browser checks. Dashboard: **13/13**. Operations: **8/8**. The saved `browser-results.txt` files are actual browser DOM snapshots. Each library has an isolated operation check as well as its use in a combined production fixture. All three production builds passed, served under `/library-trial/`, and retained runtime license notices. A clean `npm ci` followed by a rebuild passed for each, with zero known audit vulnerabilities in the recorded responses. This does not certify security or general correctness.

Known answers were established independently: `(20 − 12) × 100 − 500 = 300`; integer-cent decimal example has zero profit; mean of 2,4,6 is 4 and sample variance is 4. Sales revenue/cost/profit are 390/234/156, with North 240/144/96. January 5–7 inclusive is three days; January 8–9 is two. Seedrandom's README supplies the first two `hello.` draws and a third reduced-precision quick draw; the test allows one 32-bit interval for comparison of that third draw with the full-precision generator. The uniform sample mean uses 10,000 draws and a predeclared ±0.02 bound around 0.5; under independent bounded uniform draws Hoeffding's bound gives at most `2 exp(-8)` for exceeding this tolerance. This is a smoke check of the selected stream, not validation of a business simulation.

The final trial checkpoints are recorded in each `checkpoint.txt`. They identify disposable local Git repositories, not publicly reachable commits. Source, dependencies, configuration, notices and publication workflow were committed before the final browser checks; subsequent production rebuilds left relevant paths clean. Existing course Git attribution was reused locally, not invented student identities. Reproduction from saved fixtures creates a new equivalent project and need not recreate the same commit hash.

## Reproduce

From the course repository, choose a destination that does not exist:

    python3 evidence/browser-app-builder/libraries/prepare.py /private/tmp/bab-library-reproduction

The Python command is maintainer tooling, not a student prerequisite. It copies the shipped starter, selected theme assets, canonical tokens, fixtures and frozen lockfiles. For each generated project run:

    npm ci
    npm run build
    npm run test:browser -- --port 9201
    npm run preview -- --port 9202

For operations, before building, copy its pinned installed stylesheet:

    mkdir -p app/vendor
    cp node_modules/frappe-gantt/dist/frappe-gantt.css app/vendor/frappe-gantt.css

Use ports 9203/9204 for dashboard and 9205/9206 for operations if concurrent. Open `/tests/` on each test server and `/library-trial/` on its production server. Wait for the completed count, not merely the page title or loading message. Stop the servers afterward.

Run the boundary checks from the course repository:

    python3 evidence/browser-app-builder/check.py
    python3 evidence/browser-app-builder/libraries/check.py /private/tmp/bab-library-reproduction

The managed checks execute the shipped dependency checker, reject an unapproved direct package, inspect actual production output and repository-prefix assets, and exercise report-only commits, six managed source/configuration changes, opposing staged/working changes and untracked license source. The earlier plain-path checks also pass. The fixture generator refuses an existing destination instead of overwriting it. A second fresh generation and all three locked builds passed. This sandbox blocks writes to the default npm cache: the reproduction used `npm ci --cache /private/tmp/bab-npm-cache`. The initial default-cache attempt failed with EPERM; no cache ownership or global configuration was changed.

## Observed failures and corrections

The initial combined dependency audit reported a low-severity KaTeX prototype-pollution/trust advisory, GHSA-238p-pmpm-9mq7. The approved Mermaid recipe pins KaTeX 0.19.0 via npm overrides; all three final audit responses report zero known vulnerabilities. Do not automatically run audit fix --force.

The first presentation build failed because reveal.js 6 exposes `reveal.js/reveal.css`, not the previously familiar `reveal.js/dist/reveal.css`. Both fixture and skill were corrected.

Initial narrow slides shrank their content to unreadable sizes. Percentage slide dimensions with fixed scale corrected the text size; disabling reveal.js's automatic narrow scroll activation also prevented embedded content clipping and disappearing navigation. The recipe now records these settings. The first 320px dashboard inspection found a native file input extending the document to 339px. Shared file-input sizing corrected it: measured document width and scroll width both became 319px in the nominal 320px frame.

The license collector initially rejected a build-only native binding without a standalone notice. It now collects installed runtime packages, excluding build-only dependencies. Seedrandom embeds its MIT notice in source, and react-remove-scroll-bar omits a standalone notice from its package; reviewed supplemental notices ship with the plugin. Missing unrecognized notices still fail the build. License line endings/trailing whitespace are normalized without changing the text.

One test server continued serving cached transformed source after a file edit. Restarting that server exposed the new Mantine case and produced the final 13/13 result. Managed instructions now require checking served source and restarting a host preview when file-change notifications are missed.

## Production and visual observations

Presentation displayed profit $300.00. Keyboard ArrowUp on price 21 produced 21.01 and profit $401.00 without advancing slides. The next-slide control revealed a sized chart, correct value and the text alternative. Dashboard North filtering produced $240/$144/$96; keyboard Reset restored $390/$234/$156. The actual file chooser imported `quoted.csv`, producing $200/$120/$80 and displaying `<b>Notebook</b>` literally. Operations keyboard connection control changed the graph from zero to one edge; explanatory diagram, timeline and Gantt views loaded. Inspected production console logs contained no warnings/errors at those steps.

DOM measurements and screenshots used a temporary review page containing fixed-width frames because the browser viewport override did not change the measured document size. Nominal 320/390/1440 frames measured 319/389/1439 CSS pixels. Corrected initial app layouts fit the inspected narrow frames. The browser automation backend could read nested frames but sometimes could not activate their controls; keyboard interactions were therefore verified in top-level previews. This is not a claim of full narrow-device interaction testing, native zoom, screen-reader coverage or full accessibility.

All fixtures use the shared Campus Designer colors/system fonts with library adapters. Core graphics, controls and text were visually inspected. The Motion zero-duration branch ran in the browser; an actual operating-system reduced-motion preference change was not exercised. General script/source and loaded asset inspection does not prove the absence of every possible network request. No comprehensive request interception trace was available for this run.

Production output contains only index.html, built assets and THIRD-PARTY-NOTICES.txt. The fixtures use full library imports and trigger Vite's large-chunk warning; they are compatibility fixtures, not bundle-size benchmarks. Optimize imports for actual student needs. The operations fixture intentionally combines several views to exercise integration; it is not a recommendation to load every library into a small app.

## Installation and release gates

The local 0.2.0 package installed successfully in isolated Codex and Claude configurations, with all **19** skills present: five workflow skills, Campus Designer and thirteen library skills. This demonstrates CLI installation/discovery, not automatic Work invocation. Both Claude validators, directory generation and repository boundary checks pass. The initial gallery review displayed version 0.2.0 and 30 results at desktop and narrow widths (updated to 31 after review corrections); keyboard activation of the copy control reported success. Trial preview servers were stopped afterward.

No new repository or live managed deployment was created. GitHub Actions execution, returning-browser updates on Pages, actual ChatGPT Work routing/handoffs, clean-machine macOS/Windows setup, and novice usability remain unverified. Existing version 0.1.1 live examples retain their own historical evidence.
