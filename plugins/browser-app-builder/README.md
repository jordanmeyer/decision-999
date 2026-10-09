# Browser App Builder

Version 0.2.1 · Instructor-built pilot candidate.

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

Five [workflow skills](references/workflow.md), thirteen approved [library skills](references/library-selection.md), plain and managed starters, GitHub Pages workflows, and the bundled [Campus Designer](skills/campus-designer/SKILL.md). Build applies its Duke colors, typography, and review guidance through library-specific themes.

Describe what you need: “an interactive analytical presentation,” “an editable process diagram,” or “a dashboard for a local CSV.” Plan and Build select the smallest useful set of approved libraries. Four specialist recipes—local mapping, SQL, optimization and video—are candidates undergoing validation; check their inventory status before selection. The video candidate requires an explicitly accepted Remotion render-telemetry exception and a suitable license basis.

Approved libraries cover charts, diagrams, timelines, schedules, tables, React controls, slides, animation, CSV, data transformation, statistics, and reproducible randomness.

Library apps use an agent-managed Node/npm/Vite build. Your agent prepares the tools and commands; visitors receive a self-contained static app. Simple apps can still use native browser features without Node. Approved versions are pinned, bundled locally, and shipped with their license notices.

## Live examples

New library examples, built through simulated planning and independent review:

- [Executive operating dashboard](https://jordanmeyer.github.io/bab-example-executive/) — Mantine, ECharts and Tabulator. [Source and review](https://github.com/jordanmeyer/bab-example-executive).
- [Sales and returns explorer](https://jordanmeyer.github.io/bab-example-uploads/) — Papa Parse, Arquero and ECharts. [Source and review](https://github.com/jordanmeyer/bab-example-uploads).

Earlier examples built with version 0.1.1 in automated trials with simulated student conversations and synthetic data; these demonstrate the original plain-JavaScript workflow:

- [Pricing calculator](https://jordanmeyer.github.io/bab-trial-pricing-2026-10-08/)
- [Inventory simulation](https://jordanmeyer.github.io/bab-trial-inventory-2026-10-08/)
- [Sales dashboard](https://jordanmeyer.github.io/bab-trial-sales-2026-10-08/)

## Boundaries

Apps run in the browser using public/synthetic datasets or locally selected files. No backends, logins, external APIs, remote AI, analytics, or secret keys. Local imports remain in the browser and never become committed fixtures. Published source and history must contain only public/synthetic material, apart from explicitly approved author attribution.

The host must provide usable file, Git, preview, and browser capabilities. Managed apps need a compatible Node/npm installation, which Setup reuses or helps prepare. Plain apps use available preview capabilities. Installation does not grant tools, OS permissions, or GitHub access.

This is a pilot candidate, not a verified no-touch onboarding promise. See the listing's evidence record for actual checks and outstanding Work, clean-machine, fresh-chat, and novice-student gates. The original plain-app publication and updates were verified on a configured Mac. The 0.2.0 library expansion has separate local browser and production-build evidence; the executive and uploads examples now also verify managed GitHub Pages publication. Evaluation supports specific claims about tested cases; it does not certify a business model.
