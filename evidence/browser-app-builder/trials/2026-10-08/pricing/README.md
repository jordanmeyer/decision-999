# Notebook pricing lab

A self-contained calculator for one product and one sales period. Enter a selling price, variable unit cost, units sold and fixed costs; calculate profit and the minimum whole units needed to cover costs. Reset example restores the synthetic $20/$12/100/$500 scenario, which earns $300 and breaks even at 63 whole units. Load decimal example sets $19.90/$19.80/1,000/$100: ten cents contribution per sale, zero profit, and 1,000 whole units to break even.

[Source repository](https://github.com/jordanmeyer/bab-trial-pricing-2026-10-08). [Live app](https://jordanmeyer.github.io/bab-trial-pricing-2026-10-08/). First publication is verified in DEPLOYMENT.md.

## Use locally

From this project root, use the already available Python runtime:

    /usr/bin/python3 -m http.server 9101 --bind 127.0.0.1

Open http://127.0.0.1:9101/app/ and http://127.0.0.1:9101/tests/ . The browser test page imports the real calculation module and shows expected/observed values with a visible loading/error state. Supplementary check with existing Node: `node --experimental-default-type=module -e "import('./tests/cases.js').then(({runCases}) => { const r=runCases(); console.log(r); process.exitCode = r.some(x => !x.pass) ? 1 : 0; })"`. Browser execution remains required for evaluation.

## Assumptions and provenance

All example data and original code are created for this synthetic trial. No external libraries, imagery, scripts, fonts or datasets. Values are transient and not stored or transmitted. Public source navigation is the only external link. Money uses integer cents, with two-decimal USD output; unit quantities are whole numbers. Each input is bounded at 1,000,000. Decimal notation is required. Positive contribution divides fixed cost to give theoretical break-even; round up for whole units. With positive fixed cost and nonpositive contribution there is no break-even. With zero fixed cost, zero units already breaks even; selling at negative contribution then loses money.

Entered quantity is a scenario, not forecast demand. Constant price/cost and sale of every entered unit are assumed. Taxes, inventory, capacity, demand response and optimal pricing are outside scope. See PLAN.md for independent expected calculations and EVALUATION.md for actual results and limitations. This is not a validated business forecast.

Visual guidance is from the frozen Browser App Builder plugin's bundled Campus Designer. Unchanged navy #012169 and royal #00539B anchor the design. Georgia is a system-font heading option and substitutes for EB Garamond; Arial is the local fallback for Open Sans. No fonts are bundled or fetched. No institutional logos or affiliation/endorsement claims.

## Publication

The copied Pages workflow publishes app/ only using generated dist/. Tests and records remain in the public repository but are excluded from the website. Workflow and real source link are included before the final evaluation checkpoint. Updates require agreeing on model changes, checking affected behavior, committing, refreshing evaluation against the source commit, checking freshness, pushing main, and verifying the completed deployment. See DEPLOYMENT.md after publication.
