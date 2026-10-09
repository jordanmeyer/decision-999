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
