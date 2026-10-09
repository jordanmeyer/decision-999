---
name: build-browser-app
description: Build or revise a self-contained browser app from a student's agreed PLAN.md, using the bundled Campus Designer for Duke styling. Use for implementation, preview, and fixes before evaluation.
---

# Build the planned app

Read [library selection](../../references/library-selection.md), load the chosen library skills, and read the [shared workflow](../../references/workflow.md), `PLAN.md`, `SETUP.md`, and existing source. Use [Plan](../plan-browser-app/SKILL.md) if consequential choices are missing; use [Setup](../setup-browser-app/SKILL.md) if tools or the project are not ready. Do not replace existing work with a starter.

## Design with the bundled skill

Read and apply [Campus Designer](../campus-designer/SKILL.md), formerly Duke Designer. Read its [identity](../campus-designer/references/identity.md), [color](../campus-designer/references/color.md), [typography](../campus-designer/references/typography.md), [web](../campus-designer/references/web.md), and [review](../campus-designer/references/review.md) references before designing or revising the interface. Use the packaged resources even when the separate designer plugin is not installed.

Give applications a shared Duke look through unchanged Duke blues, recommended typography, and clear layout. Keep the content's purpose primary. Use system fallbacks or licensed local font files; no CDN fonts. Do not add Duke logos, seals, unit identities, or endorsement claims without authorization. Record font substitutions in the README.

## Implement and verify

1. Build HTML/CSS/JavaScript in `app/`, adding JSX only for selected React libraries. Keep calculations in modules that UI and tests share. Use native features first; approved libraries follow the managed workflow below. No backend or external runtime service except the specifically accepted Remotion licensing telemetry described in shared workflow.
2. Keep asset/module paths relative and use ordinary or hash navigation rather than server routes. Use bundled public/synthetic data or transient local imports. Validate inputs, label units, handle empty/error states, and provide keyboard-operable controls. Never send imported data elsewhere or preserve it as project evidence.
3. Open the app using the verified preview. Run the plan's initial known-answer cases, check console errors and actual browser interactions, and inspect desktop and narrow layouts. Check focus, labels, contrast, overflow, reset, and import/export when present. Observe network behavior with available browser tools; report the scope observed rather than claiming universal isolation.
4. Fix defects and discuss changes to the student's model or scope before altering those decisions. Update the plan and `DECISIONS.md` when they change. Write README usage, assumptions, data/library/font provenance, actual preview instructions, and limitations.
5. Inspect staged public/synthetic files and make meaningful local commits. Report what works, which initial checks ran, and what remains unverified. Hand off to [Evaluate](../evaluate-browser-app/SKILL.md); a polished interface or successful preview does not establish calculation accuracy.

For plain applications, `app/` is already publishable; do not add a build script. Managed applications use the provided Vite commands below. Reserve `dist/` for deployment output. Preserve the shared design while simplifying unnecessary controls, abstractions, and dependencies.

## Managed applications

When the plan selects approved libraries, follow [managed build](../../references/managed-build.md). Confirm package versions and required peers against the inventory, run the packaged dependency check, and preserve the lockfile. Copy canonical designer tokens plus only selected theme adapters. Do not duplicate palette definitions or import a stock theme over them. Build production output and inspect it separately from development. Record the commands, dependency reasons and license notices in README.md; include config, lockfile and generated notices before the evaluated checkpoint.
