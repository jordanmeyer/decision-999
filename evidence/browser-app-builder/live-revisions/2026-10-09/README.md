# Nine live example revisions

The user requested applying the revised Browser App Builder guidance to the existing examples. Three developers each owned three applications; the coordinator independently reviewed their code, calculations and browser behavior before authorizing ordinary main-branch publication. This is a revision of the original simulated-planning campaign, not a new student study.

All nine applications passed independent review and are verified live. Final evaluated and deployed commits, Actions run IDs and report-only follow-ups are in [status.json](status.json). Each application retains failed rounds, an updated plan, a public build story and its own evaluation/review/deployment records.

| Example | Browser checks | Decision demonstrated |
| --- | ---: | --- |
| [Executive dashboard](https://jordanmeyer.github.io/bab-example-executive/) | 14 | $1,441,000 sales and $341,800 contribution; investigate store costs through a keyboard-accessible ledger and evidence-bearing board briefing. |
| [Sales and returns](https://jordanmeyer.github.io/bab-example-uploads/) | 32 | $291,788 gross less $51,827 returns gives $239,961 net. Paid social falls from first to second; product/channel cells explain the interaction. |
| [Order simulator](https://jordanmeyer.github.io/bab-example-simulator/) | 20 | A full expected-profit curve prefers 558 units; the default 3% downside screen selects 469. The model separates an exact expectation from sampled risk evidence. |
| [Approval process](https://jordanmeyer.github.io/bab-example-process/) | 37 | Changing routing from 70/30 to 90/10 cuts nominal time from 471.5 to 370.5 minutes while Finance remains overloaded. |
| [Launch roadmap](https://jordanmeyer.github.io/bab-example-roadmap/) | 47 | November 29 readiness gives two days of date buffer, but six days exceed team capacity. Added capacity clears the conflict without changing dependency dates. |
| [Market screen](https://jordanmeyer.github.io/bab-example-markets/) | 25 | Growth weight 70 reverses Georgia/Tennessee. Integer sensitivity shows Georgia leading at 0–27 and Tennessee at 28–100. |
| [SQL explorer](https://jordanmeyer.github.io/bab-example-sql/) | 41 | Begin with 2,400 orders, then inspect a four-line fixture where a direct shipment join reports $750 instead of $550. Exact money columns show USD. |
| [Bakery optimizer](https://jordanmeyer.github.io/bab-example-optimizer/) | 25 | The $941 whole-batch optimum trails a $946 fractional bound; adding 60 oven minutes re-solves to $987, a $46 gain. |
| [Board presentation](https://jordanmeyer.github.io/bab-example-presentation/) | 44 | Default pilot passes a downside gate that the full launch fails. Demand of 20,000 defers; 60,000 permits a full launch. |

The nine browser suites total **285 passing checks**. Counts describe individual cases in these suites, not coverage percentages or certified model accuracy. Browser observations additionally cover desktop and narrow output, keyboard paths, invalid input, source links, loaded local fonts, repository-path assets and returning-browser state. The public apps retain their own exact versions and limitations.

## Reproduce and inspect

For each slug in status.json, `source/` is a Git archive of the report commit identified in its `SNAPSHOT.json`. Executable paths and the plan were compared against the evaluated commit, including staged, unstaged and untracked source checks. Dependencies, generated bundles, caches and private imports are excluded. Clone the linked application repository at that snapshot commit, or copy its source snapshot into a new folder. Use its recorded Node/npm versions and run:

    npm ci
    npm run build
    npm run test:browser -- --port 9801
    npm run preview -- --port 9802

Open `http://127.0.0.1:9801/tests/` and the production preview at `http://127.0.0.1:9802/bab-example-<slug>/`. Stop those servers after inspection. Developer layout pages document their capture setup; the model tests and production app do not require a screenshot harness. A clean build does not establish the calculation claims by itself.

The corresponding `REVISION.md` summarizes the substantive changes and observations. `source/EVALUATION.md`, `source/REVIEW.md` and `source/DEPLOYMENT.md` retain detailed rounds and exact source applicability. Screenshots in each folder are observed output; files beginning `round1` retain earlier defects. The gallery previews are new captures of the revised live applications in a 1,440 CSS-pixel frame.

## Failures, corrections and limits

Revisions corrected browser-restored control/result mismatches, overly dense interfaces, clipped chart/table labels, explanation failures when eligibility changed and a real presentation startup race. In the latter case, navigation is inactive until fonts and Reveal initialize; rapid reload/navigation was retested. Calculation expectations came from hand derivations, independent integer enumeration or separately justified reference calculations, not copied application output.

Some reused review tabs recorded a source-less `MutationObserver.observe` diagnostic. Fresh live tabs and actual interactions were clear where compared; its origin remains unattributed. This is retained as an observation limit rather than labeled an application defect or silently discarded. OS file-chooser calls sometimes exceeded tool timeout settings by minutes, so valid/import rejection evidence is separated from unreliable unattended automation. Export flows were not all repeated during this revision; earlier retained evidence and specific current checks identify what was observed.

These are configured-Mac, in-app-browser trials with public/synthetic data. They do not establish Windows or clean-machine setup, actual ChatGPT Work routing/handoffs, novice usability, universal accessibility, every library combination or the empirical validity of fictional business assumptions. Observed same-origin assets and interactions do not prove arbitrary JavaScript cannot transmit information.
