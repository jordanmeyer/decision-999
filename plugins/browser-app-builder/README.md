# Browser App Builder

Version 0.1.2 · Instructor-built pilot candidate.

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

Five [workflow skills](references/workflow.md), a minimal [starter](assets/starter/), a [Pages workflow](assets/pages.yml), and the bundled [Campus Designer](skills/campus-designer/SKILL.md) branding skill. Build explicitly uses Campus Designer's Duke colors, typography, web, and review guidance.

## Live examples

Built in automated trials with simulated student conversations and synthetic data:

- [Pricing calculator](https://jordanmeyer.github.io/bab-trial-pricing-2026-10-08/)
- [Inventory simulation](https://jordanmeyer.github.io/bab-trial-inventory-2026-10-08/)
- [Sales dashboard](https://jordanmeyer.github.io/bab-trial-sales-2026-10-08/)

## Boundaries

Apps run in the browser using public/synthetic datasets or locally selected files. No backends, logins, external APIs, remote AI, analytics, or secret keys. Local imports remain in the browser and never become committed fixtures. Published source and history must contain only public/synthetic material, apart from explicitly approved author attribution.

The host must provide usable file, Git, preview, and browser capabilities. Existing runtimes can support preview, but the plugin does not require or automatically install one. Installation does not grant tools, OS permissions, or GitHub access.

This is a pilot candidate, not a verified no-touch onboarding promise. See the listing's evidence record for actual checks and outstanding Work, clean-machine, fresh-chat, and novice-student gates. Live publication and updates were verified on a configured Mac. Evaluation supports specific claims about tested cases; it does not certify a business model.
