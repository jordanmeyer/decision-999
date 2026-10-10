# Browser App Builder evidence

Instructor-built pilot candidate, checked October 8, 2026. Results below cover local packaging, maintainer-authored fixtures, and an independent instruction review. They are not student workflow outcomes, ChatGPT Work installation results, or claims of statistical/business-model accuracy.

## Environment and initial probe

Local Codex session on macOS; Git 2.50.1 (Apple Git-155), Codex CLI 0.145.0, Claude Code 2.1.86, and the Codex in-app browser. The system's existing Python preview server was reused for these maintainer checks; nothing was installed. Generated apps and plugin instructions do not require Python or Node. The optional skill-author validator could not run because PyYAML was absent from both the system and bundled Python environments. Repository and Claude validation ran separately as recorded below.

A disposable module probe computed `(20 - 12) * 100 - 500` and visibly reported `PASS: browser module and calculation` for the expected value 300. This established local module preview before package implementation; it does not prove student Work access.

## Installation: 2 of 2

Installed the local marketplace in empty, disposable Codex and Claude configuration directories. The initial round installed `browser-app-builder@decision-999` version 0.1.0; the follow-up repeated both installations in fresh configurations with version 0.1.1. Both caches contained setup-browser-app, plan-browser-app, build-browser-app, evaluate-browser-app, deploy-browser-app, and campus-designer. Canonical and bundled designer resources match byte-for-byte across 16 files. The course check also verifies that regeneration repairs stale content and removes obsolete generated resources.

Reproduce from the repository root, replacing the temporary directories with fresh empty ones:

    mkdir -p /tmp/browser-builder-codex /tmp/browser-builder-claude
    CODEX_HOME=/tmp/browser-builder-codex codex plugin marketplace add "$PWD" --json
    CODEX_HOME=/tmp/browser-builder-codex codex plugin add browser-app-builder@decision-999 --json
    CLAUDE_CONFIG_DIR=/tmp/browser-builder-claude claude plugin marketplace add "$PWD"
    CLAUDE_CONFIG_DIR=/tmp/browser-builder-claude claude plugin install browser-app-builder@decision-999

Use the marketplace name from site/config.json if it changes. These installation checks made no model calls and changed neither normal host profile. They do not establish the quality of generated applications or actual Work skill discovery.

## Browser fixtures: 25 of 25

The [fixtures](fixtures/README.md) were authored by the implementing agent for mechanical verification, not generated in independent student chats. The test pages import the same model functions as their application interfaces. Expected values and model limitations are recorded with the fixtures.

Initial 0.1.0 browser output was pricing 11/11 and inventory 7/7. Follow-up review exposed a decimal-input gap despite those passes. The corrected 0.1.1 fixtures now report:

    Pricing: 17/17 passed; 0 failed.
    Inventory: 8/8 passed; 0 failed.

Pricing checks include independently computed profit 300, continuous break-even 62.5, whole-unit 63, profit −4 at 62 units, profit 4 at 63 units, nonpositive margins, zero quantity/fixed cost, and invalid inputs. Inventory checks cover the stock/demand examples, zero stock, seed reproducibility, zero-demand limit, conservation, and fractional-unit rejection.

In the initial 0.1.0 round, changing the profit formula to add 1 produced `7/11 passed; 4 failed`: hand-calculated profit, below-break-even profit, whole-unit profit, and zero-quantity profit failed. Restoring the source and reloading produced `11/11 passed; 0 failed`. This remains a historical failed-round account, not a claim that the original suite covered decimal arithmetic.

The pricing interface, activated with Enter, displayed `Profit: 300.00. Break-even: 62.50 units; 63 whole units.` Inventory with stock 10, maximum demand 0, five days, and seed 42 displayed `5 days: 0 unmet units; 50 remaining units. Seed: 42.` Neither page reported console warnings/errors in the inspected log. The starter module loaded and its button visibly changed the status.

To reproduce, use an available preview tool to serve this evidence directory. A maintainer with Python already available may run:

    python3 -m http.server 8765 --bind 127.0.0.1 --directory evidence/browser-app-builder

Open `/fixtures/pricing/tests/`, `/fixtures/inventory/tests/`, and the corresponding `/app/` paths. This is a reproduction option, not a student dependency. Use a scratch copy for intentional defects. No runtime installation is needed by the JavaScript fixtures.

## Git and publishing boundaries: 12 of 12

Run from the course repository:

    python3 evidence/browser-app-builder/check.py

Observed success covers a clean checkpoint, report-only commit, editorial plan comparison, substantive plan comparison, pending plan changes, unstaged change, opposing staged/unstaged edits, untracked test, ignored test, committed source change, app-only publication, and symlink refusal. The script uses a synthetic identity in a disposable Git repository. It runs the actual shell packaging body extracted from the supplied Actions template, checking that reports and tests stay out of dist and symlinks are rejected before copying. It does not execute GitHub Actions or publish a repository.

Plan cases preserve the original committed plan, expose a title-only change and a dollars-to-cents requirement change while source comparisons still pass, and detect an uncommitted plan. They verify Git visibility, not automated judgment of semantic meaning. Evaluate and Deploy must review that meaning and record applicability.

An independent [instruction review](reviews/instruction-review.md) found the opposing-index-edits bug and two stage-ordering issues. All three were corrected. Its four scenarios reviewed existing plans without tools, confidential/API requests, stale evaluation, and bundled-design use; these were read-only reasoning exercises, not observed novice behavior.

## Directory and design checks

`python3 scripts/build.py`, `python3 scripts/check.py`, `claude plugin validate .`, plugin-specific Claude validation, and whitespace checks passed. Existing site configuration and featured ordering were preserved. All generated designer resources come from the canonical skill; there is no separately authored copy.

The local listing displayed all five stage prompts, the bundled designer explanation, and explicit pilot limits. Keyboard activation of its copy button displayed `Copied to the clipboard.` The clipboard content itself was not read. Local evidence/source URLs were inspected for their intended targets; remote feature URLs are not claimed live before publication.

Responsive inspection used a disposable review page with 390px and 1440px iframe viewports after the browser's viewport override failed to change the actual document width. Pricing and listing rendered without horizontal document overflow in those frames; the narrow documents measured approximately 389 CSS pixels due to host scaling. This is rendered desktop/narrow review, not mobile-device testing. Fixture assets and code were reviewed as local-only; a complete network trace was not available, so no universal data-isolation claim is made.

The Git installer paths were verified against the official Git macOS and Windows installation pages. The template's four exact Action tags were verified with git ls-remote against the official actions repositories: checkout v7.0.1, configure-pages v6.0.0, upload-pages-artifact v5.0.0, and deploy-pages v5.0.1. These checks establish tag existence, not a successful live workflow.


## Follow-up review corrections — version 0.1.1

The second independent review found a real decimal break-even defect and recommended plan-semantic review and a stronger stochastic expectation. All three were addressed; see the [review record](reviews/instruction-review.md).

The expanded pricing tests ran against the old model first: 13/17 passed, with failures for exact decimal break-even, fractional cents, fractional quantity, and the new upper bound. Integer-cent arithmetic and an explicit two-decimal, whole-unit, 0–1,000,000 input policy produced 17/17 passes. The decimal case now returns zero profit and exactly 1,000 break-even units; increasing fixed cost from 100 to 100.01 still requires 1,001 units. No blanket epsilon is used.

The simulation's separate integer-arithmetic derivation is recorded in fixtures/README.md. Its five demands are 5, 1, 12, 4, 7. All eight cases passed. In a disposable copy, replacing generated demand with zero produced 7/8 passes: the new seeded-expectation case failed while reproducibility, zero-demand, and conservation checks still passed. The preserved fixture was not mutated.

A fresh loopback preview origin was used after a reload retained a cached pricing module. The final tests ran on copies verified against the repository fixtures. Keyboard submission of 19.90, 19.80, 1,000, and 100 showed `Profit: 0.00. Break-even: 1000.00 units; 1000 whole units.` Rendered 390px and 1440px iframe reviews showed no horizontal document overflow, and inspected console logs contained no warnings/errors. This is local fixture verification, not a student workflow trial.

## Three automated application trials

Three parallel agents completed Setup, Plan, Build, Evaluate and Deploy using the frozen 0.1.1 package on a configured Mac. The [trial report](trials/2026-10-08/README.md) links all three live applications and public source repositories, with actual simulated conversations, independent expected results, browser observations, failed rounds and exact evaluated/deployed commits.

Pricing passed 25 cases, inventory passed 10 test groups, and sales passed 42 cases. Actual CSV import and invalid-import preservation were exercised. Browser interaction checks found two reset bugs; update checks found stale entry scripts despite successful Actions runs. The corrected third deployments passed live verification in all three repositories. These are automated trials with coordinator assistance, not real student or ChatGPT Work outcomes.

Version 0.1.2 adds these links and updates the listing evidence; workflow skills and starter behavior are unchanged from the tested 0.1.1 package.

## Outstanding release gates

Actual ChatGPT Work installation/discovery and fresh-chat student trials; clean-machine macOS and Windows Git installation; real managed-device onboarding and interrupted installer recovery; novice-student usability. Setup file preservation has instruction-review coverage, not an automated or novice-user execution claim. Live GitHub Pages publication, updates and synthetic local CSV imports were verified in the automated trials above.

No student adoption, time savings, cross-host model quality, full accessibility, or universal numerical accuracy is claimed. These gaps remain release gates; the completed automated trials support configured-Mac pilot use.

## Library expansion, version 0.2.0

See [library verification](libraries/README.md) for 30 passing browser cases across three synthetic managed-build fixtures, exact dependency locks, production observations, failed rounds, source checkpoints and reproduction. Thirteen library skills plus the existing six skills installed into isolated Codex/Claude configurations. [Selection walkthroughs](libraries/ROUTING.md) are author-executed instruction checks, not independent routing benchmarks. Live managed deployment and Work/clean-machine/student gates remain outstanding; earlier live examples above retain their historical version.

## Nine-recipe campaign — 2026-10-09, in progress

[Campaign checklist and records](recipe-examples/2026-10-09/README.md) tracks nine apps, simulated student planning, independent reviewer/developer revisions and exact publication evidence. [Executive source/review](https://github.com/jordanmeyer/bab-example-executive) passed independent review atbc19eb40;13 browser checks and live Meadow House known answer passed. The first managed publication is verified at81f41a0, Actions run37888360279. Review retained two failed keyboard-focus rounds and their fixes. [Uploads source/review](https://github.com/jordanmeyer/bab-example-uploads) passed atb64d85f after a production-only Arquero closure failure and narrow-screen corrections;31 checks and actual live CSV import350/90/260 with January net140 passed. Exact publicationd50e590 succeeded in run37888660919. Other campaign rows remain individually incomplete until their status records show evidence.

Three specialist probes establish working local Leaflet, DuckDB EH and HiGHS worker capabilities. [Probe evidence and retained failures](recipe-examples/2026-10-09/specialist-probes/ISOLATED-RESULTS.md).

Campaign continuation: [simulator](https://github.com/jordanmeyer/bab-example-simulator) passed review at 8dbb6ab and 17 checks; exact deployment c769e3f and deterministic live references passed. [Process](https://github.com/jordanmeyer/bab-example-process) passed at aca04af with 37 checks and independent graph/import/narrow-layout verification; exact deployment 8e86893 and live routing references passed. These four apps establish managed publication on this configured Mac; they do not close Work or clean-machine gates.

Roadmap review51a9c4c passed40 checks and independent calendar/DST/import/history review; exact publication7bce04a in run37892493308 and live Nov29→Dec2 delay passed. Leaflet local-GeoJSON configuration passed full market app review5871ab6 and the ordinary dependency checker after promotion; publication follows separately.

Markets reviewed5871ab6 and publishedf822e18 through Actions37892896353. Live defaultGA67.50/TN67/NC61.75 and delivery$7→TN-only passed with22localgeometrypaths and clearlogs. The six campaign apps are configured-Mac evidence. Native-history follow-up updates for uploads81cbd711 and simulator6b25b8a were reviewed and verified live before any rerun interaction.

The seventh campaign app, [Batch & Balance](https://jordanmeyer.github.io/bab-example-optimizer/), passed independent review of source2e4eef4,22browser checks and live Pages known answers after deploymente23c930. See campaign/optimizer records for independent enumeration, exact LP bounds, cancellation and observation limits.

The eighth campaign app, [Fulfillment Lab](https://jordanmeyer.github.io/bab-example-sql/), passed36 checks, independent review at7a957523 and livea2f6aa2 known joins. The retained JSON-extension failure, exact export, real timeout and host download-wait failure are documented separately in campaign/sql evidence.

## Completed nine-recipe campaign —2026-10-09

[Campaign evidence](recipe-examples/2026-10-09/README.md) contains nine apps with actual simulated planning exchanges, independent persistent review/revision, 254 passing browser checks, exact source applicability and nine verified Pages deployments. Three specialist configurations join the original thirteen: local Leaflet, bounded DuckDB-Wasm and worker HiGHS. Clean-machine, actual Work and student-usability gaps remain.

## Core checklist response — 0.2.3

The [October 9 core correction record](reviews/2026-10-09-core-checklist/README.md) maps the applicable review items to shared workflow, domain recipe, canonical design or gallery changes. It includes fresh planning exercises, actual starter/font rendering, gallery browser evidence and independent review corrections. At that checkpoint these strengthened future builds; the original campaign results remain historical. The subsequent live revision below applies the guidance to all nine deployed examples.

## Revised live examples — 0.2.3

The [live revision record](live-revisions/2026-10-09/README.md) documents all nine updated applications: 285 passing browser cases, independent review, exact-commit GitHub Actions success, live known-answer interactions and returning-browser reload checks. Current gallery previews and build-story links describe these revisions. Source snapshots and final report commits are retained separately from the original campaign.

The revisions restore meaningful opening decisions, model-specific teaching features, canonical local fonts and usable controls. Failed rounds include a presentation initialization race, rank explanation failures and narrow chart/table defects. Configured-Mac, browser and model limits are explicit; Work, clean-machine and novice-user release gates remain open.

## Tournament Atlas — October 9, 2026

[Tournament Atlas's gallery record](gallery/madness.md) links the real user request, source repository, compact build story, and independent data, model, application, and reproduction reviews. It is separate from the simulated nine-app campaign: historical tournament facts and 83 archived FiveThirtyEight snapshots cover the seven played years from 2016–2023; frozen T-Rank ratings support one explicitly labeled log5 reconstruction in each of 2024–2026. The cancelled 2020 tournament has no invented field.

The current local data/model/replay suite passed 74 of 74 checks in Node and the browser, including original source values, independently derived mathematical cases and calendar-gap regressions. The user rejected the subsequent card layout; the latest [original geometry review](madness/2026-10-09/geometry-review/review.md) passes the corrected continuous bracket, probability-scaled routes and compact branch labels. Both review rounds and intermediate failures are preserved. Review found and corrected interface defects and misleading tiny-probability rounding. Exact reproduction was verified for all delivered year JSON files and frozen rating inputs. [The review and browser records](madness/2026-10-09/) retain observed results and limits. The application's deployment record identifies the successful GitHub Actions run, exact published commit, and live known-answer checks; the gallery screenshot is from the local production preview. No model-calibration, full-accessibility, phone-device, clean-machine, or novice-usability certification is claimed.
