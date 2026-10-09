# Browser App Builder

Version 0.2.2 · Instructor-built pilot candidate.

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

Five [workflow skills](references/workflow.md), seventeen approved [library skills](references/library-selection.md), plain and managed starters, GitHub Pages workflows, and the bundled [Campus Designer](skills/campus-designer/SKILL.md). Build applies its Duke colors, typography, and review guidance through library-specific themes.

Describe what you need: “an interactive analytical presentation,” “an editable process diagram,” or “a dashboard for a local CSV.” Plan and Build select the smallest useful set of approved libraries. Local mapping, bounded SQL exploration and worker-based optimization are approved for the reviewed configurations. The reviewed video recipe supports controlled silent MP4 templates. It requires an established license basis, explicit app-owner acceptance and visitor disclosure of Remotion’s render-event telemetry. Video content remains local.

Approved libraries cover charts, diagrams, timelines, schedules, tables, React controls, slides, animation, CSV, data transformation, statistics, and reproducible randomness.

Library apps use an agent-managed Node/npm/Vite build. Your agent prepares the tools and commands; visitors receive a self-contained static app. Simple apps can still use native browser features without Node. Approved versions are pinned, bundled locally, and shipped with their license notices.

## Live examples

New library examples, built through simulated planning and independent review:

- [Executive operating dashboard](https://jordanmeyer.github.io/bab-example-executive/) — Mantine, ECharts and Tabulator. [Source and review](https://github.com/jordanmeyer/bab-example-executive).
- [Sales and returns explorer](https://jordanmeyer.github.io/bab-example-uploads/) — Papa Parse, Arquero and ECharts. [Source and review](https://github.com/jordanmeyer/bab-example-uploads).
- [Seasonal order simulator](https://jordanmeyer.github.io/bab-example-simulator/) — jStat, seedrandom and ECharts. [Source and review](https://github.com/jordanmeyer/bab-example-simulator).
- [Approval process model](https://jordanmeyer.github.io/bab-example-process/) — React Flow and separate capacity calculations. [Source and review](https://github.com/jordanmeyer/bab-example-process).
- [Launch roadmap](https://jordanmeyer.github.io/bab-example-roadmap/) — Frappe Gantt with dependency-based calendar calculations. [Source and review](https://github.com/jordanmeyer/bab-example-roadmap).
- [Geographic market screen](https://jordanmeyer.github.io/bab-example-markets/) — Leaflet with local public boundaries and synthetic scoring assumptions. [Source and review](https://github.com/jordanmeyer/bab-example-markets).
- [Bakery resource allocation](https://jordanmeyer.github.io/bab-example-optimizer/) — HiGHS in a local worker, with whole-batch constraints and an independently checked fractional bound. [Source and review](https://github.com/jordanmeyer/bab-example-optimizer).
- [Fulfillment SQL explorer](https://jordanmeyer.github.io/bab-example-sql/) — DuckDB-Wasm and ECharts with exact values, related tables and a join-grain lesson. [Source and review](https://github.com/jordanmeyer/bab-example-sql).
- [Interactive analytical presentation](https://jordanmeyer.github.io/bab-example-presentation/) — reveal.js with editable pricing assumptions, sensitivity analysis and an exportable decision record. [Source and review](https://github.com/jordanmeyer/bab-example-presentation).
- [Product-concept video studio](https://jordanmeyer.github.io/bab-example-video/) — Remotion Player and browser rendering with two bounded templates and downloadable silent MP4. Includes the disclosed video-only telemetry exception. [Source and review](https://github.com/jordanmeyer/bab-example-video).

Earlier examples built with version 0.1.1 in automated trials with simulated student conversations and synthetic data; these demonstrate the original plain-JavaScript workflow:

- [Pricing calculator](https://jordanmeyer.github.io/bab-trial-pricing-2026-10-08/)
- [Inventory simulation](https://jordanmeyer.github.io/bab-trial-inventory-2026-10-08/)
- [Sales dashboard](https://jordanmeyer.github.io/bab-trial-sales-2026-10-08/)

## Boundaries

Apps run in the browser using public/synthetic datasets or locally selected files. No backends, logins, external APIs, remote AI, analytics, or secret keys, except the explicitly accepted and disclosed Remotion render-event telemetry for the video recipe. That exception sends IP address, page origin, render type/status to Remotion, never video content, and requires a suitable operator license basis. Local imports remain in the browser and never become committed fixtures. Published source and history must contain only public/synthetic material, apart from explicitly approved author attribution.

The host must provide usable file, Git, preview, and browser capabilities. Managed apps need a compatible Node/npm installation, which Setup reuses or helps prepare. Plain apps use available preview capabilities. Installation does not grant tools, OS permissions, or GitHub access.

This is a pilot candidate, not a verified no-touch onboarding promise. See the listing's evidence record for actual checks and outstanding Work, clean-machine, fresh-chat, and novice-student gates. The original plain-app publication and updates were verified on a configured Mac. The 0.2.0 library expansion has separate local browser and production-build evidence; the executive, uploads, simulator, process, roadmap, market, SQL, optimization, presentation and video examples now also verify managed GitHub Pages publication. Evaluation supports specific claims about tested cases; it does not certify a business model.
