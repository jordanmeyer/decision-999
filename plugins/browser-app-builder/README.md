# Browser App Builder

Version 0.2.3 · Instructor-built pilot candidate.

Turn a problem you understand into a self-contained browser application, with a saved plan, local revision history, calculation evidence, and a GitHub Pages publishing workflow. Your agent handles the files and commands; you make the product and model decisions. No coding experience is required.

## Start

Install Browser App Builder from the course plugin directory in a host that supports local files, shell commands, and browser previews. Open a local project folder, then ask:

1. “Use setup-browser-app to prepare this folder.”
2. “Use plan-browser-app to help me plan a pricing scenario calculator.”
3. “Use build-browser-app to implement the agreed PLAN.md.”
4. “Use evaluate-browser-app to check the calculations with me and record the evidence.”
5. “Use deploy-browser-app to help me publish the evaluated app on GitHub Pages.”

You can resume in a fresh chat with the same project files. Setup preserves existing work and explains any missing capability; some OS prompts and sign-ins need your participation. GitHub is needed only for publishing.

## Included

Five [workflow skills](references/workflow.md), sixteen approved [library skills](references/library-selection.md), plain and managed starters, GitHub Pages workflows, and the bundled [Campus Designer](skills/campus-designer/SKILL.md). Build applies its Duke colors, typography, and review guidance through library-specific themes.

Describe what you need: “an interactive analytical presentation,” “an editable process diagram,” or “a dashboard for a local CSV.” Plan and Build select the smallest useful set of approved libraries. Local mapping, bounded SQL exploration and worker-based optimization are approved for the reviewed configurations.

Approved libraries cover charts, diagrams, timelines, schedules, tables, React controls, slides, animation, CSV, data transformation, statistics, and reproducible randomness.

Library apps use an agent-managed Node/npm/Vite build. Your agent prepares the tools and commands; visitors receive a self-contained static app. Simple apps can still use native browser features without Node. Approved versions are pinned, bundled locally, and shipped with their license notices.

Planning preserves your original brief and makes important scope choices explicit. Evaluation checks whether the opening scenario teaches the intended decision, as well as whether the calculations are correct.

## Live examples

Nine examples built through simulated planning and independent review, then revised against the 0.2.3 guidance. Their 285 browser checks and live deployments are recorded separately from the original 0.2.2 campaign. The gallery pairs current previews with business questions, lessons and “How this was built” records:

- [Stillwater Coffee · executive operating dashboard](https://jordanmeyer.github.io/bab-example-executive/) — Mantine and ECharts, with a keyboard-accessible operating ledger. [Source and review](https://github.com/jordanmeyer/bab-example-executive).
- [Common Goods · sales and returns explorer](https://jordanmeyer.github.io/bab-example-uploads/) — Papa Parse, Arquero and ECharts. [Source and review](https://github.com/jordanmeyer/bab-example-uploads).
- [Seasonal order lab · seasonal order simulator](https://jordanmeyer.github.io/bab-example-simulator/) — jStat, seedrandom and ECharts. [Source and review](https://github.com/jordanmeyer/bab-example-simulator).
- [Approval Studio · approval process model](https://jordanmeyer.github.io/bab-example-process/) — React Flow and separate capacity calculations. [Source and review](https://github.com/jordanmeyer/bab-example-process).
- [Launch Ledger · launch roadmap](https://jordanmeyer.github.io/bab-example-roadmap/) — Frappe Gantt with dependency dates, team capacity and milestones. [Source and review](https://github.com/jordanmeyer/bab-example-roadmap).
- [Replenish · geographic market screen](https://jordanmeyer.github.io/bab-example-markets/) — Leaflet with local public boundaries and synthetic scoring assumptions. [Source and review](https://github.com/jordanmeyer/bab-example-markets).
- [Batch & Balance · bakery resource allocation](https://jordanmeyer.github.io/bab-example-optimizer/) — HiGHS in a local worker, with whole-batch constraints, extra-capacity comparisons and a fractional bound. [Source and review](https://github.com/jordanmeyer/bab-example-optimizer).
- [Fulfillment Lab · fulfillment SQL explorer](https://jordanmeyer.github.io/bab-example-sql/) — DuckDB-Wasm and ECharts with exact values, related tables and a join-grain lesson. [Source and review](https://github.com/jordanmeyer/bab-example-sql).
- [Desk / Day · interactive analytical presentation](https://jordanmeyer.github.io/bab-example-presentation/) — reveal.js with a board-scale launch/pilot/defer decision, live assumptions, charts and a copyable decision record. [Source and review](https://github.com/jordanmeyer/bab-example-presentation).

[Tournament Atlas](https://jordanmeyer.github.io/bab-example-madness/) is a separate example from a real user request, using historical men’s tournament data from 2016–2026. Original FiveThirtyEight forecasts through 2023 are distinguished from T-Rank/log5 reconstructions for 2024–2026 and actual results; 2020 is an explicit cancellation. ECharts supports the forecast-history view. Its 72 data/model checks and independent review are separate from the nine-example totals. [How this was built](https://jordanmeyer.github.io/bab-example-madness/build-story.html) · [Source and review](https://github.com/jordanmeyer/bab-example-madness).

Earlier examples built with version 0.1.1 in automated trials with simulated student conversations and synthetic data; these demonstrate the original plain-JavaScript workflow:

- [Pricing calculator](https://jordanmeyer.github.io/bab-trial-pricing-2026-10-08/)
- [Inventory simulation](https://jordanmeyer.github.io/bab-trial-inventory-2026-10-08/)
- [Sales dashboard](https://jordanmeyer.github.io/bab-trial-sales-2026-10-08/)

## Boundaries

Apps run in the browser using public/synthetic datasets or locally selected files. No backends, logins, external APIs, remote AI, analytics, or secret keys. Local imports remain in the browser and never become committed fixtures. Published source and history must contain only public/synthetic material, apart from explicitly approved author attribution.

The host must provide usable file, Git, preview, and browser capabilities. Managed apps need a compatible Node/npm installation, which Setup reuses or helps prepare. Plain apps use available preview capabilities. Installation does not grant tools, OS permissions, or GitHub access.

This is a pilot candidate, not a verified no-touch onboarding promise. See the listing's evidence record for actual checks and outstanding Work, clean-machine, fresh-chat, and novice-student gates. The original plain-app publication and updates were verified on a configured Mac. The 0.2.0 library expansion has separate local browser and production-build evidence; the executive, uploads, simulator, process, roadmap, market, SQL, optimization and presentation examples now also verify managed GitHub Pages publication. Evaluation supports specific claims about tested cases; it does not certify a business model.
