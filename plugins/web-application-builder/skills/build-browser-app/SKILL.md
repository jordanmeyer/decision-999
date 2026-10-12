---
name: build-browser-app
description: Build or revise a self-contained browser app from a student's agreed PLAN.md, using the bundled Campus Designer for Duke styling. Use for implementation, preview, and fixes before evaluation.
---

# Build the planned app

Read [library selection](../../references/library-selection.md), load the chosen library skills, and read the [shared workflow](../../references/workflow.md), `PLAN.md`, `SETUP.md`, and existing source. Use [Plan](../plan-browser-app/SKILL.md) if consequential choices are missing; use [Setup](../setup-browser-app/SKILL.md) if tools or the project are not ready. Do not replace existing work with a starter.

## Design with the bundled skill

Read and apply [Campus Designer](../campus-designer/SKILL.md), formerly Duke Designer. Read its [identity](../campus-designer/references/identity.md), [color](../campus-designer/references/color.md), [typography](../campus-designer/references/typography.md), [web](../campus-designer/references/web.md), and [review](../campus-designer/references/review.md) references before designing or revising the interface. Use the packaged resources even when the separate designer plugin is not installed.

Give applications a shared Duke look through unchanged Duke blues, recommended typography, and clear layout. Keep the content's purpose primary. Use the canonical bundled EB Garamond/Open Sans CSS and font files with their published fallback stacks and license notices; no CDN fonts. Verify loaded faces, not just computed family names. Do not add Duke logos, seals, unit identities, or endorsement claims without authorization. Record font substitutions in the README.

## Implement and verify

Compare the implementation with the opening-brief coverage in PLAN.md, not only its smallest-example calculation. Implement the planned initial state and representative tasks, including lesson and counterfactual cases where applicable; keep material constraints beside the result they qualify. Use [decision-model guidance](../../references/decision-models.md) when relevant to the chosen task. A control or chart that does not help the user's task is a candidate for removal, not proof of feature coverage.

When recreating or adapting a reference interface, inspect its relevant interactions and transitions as well as its static appearance before implementation. Record which behavior and visual relationships the user wants preserved, then compare equivalent states in the reference and implementation. If the reference cannot be inspected, identify that limit rather than claiming fidelity.

Use the intended audience's language for primary labels. Names, subtitles and explanatory copy should describe the app's purpose or help its use; omit decorative slogans and redundant instructions unless requested. Put technical methods/types and detailed contracts behind clearly named disclosure. Show cents where reconciliation or the decision requires them; use readable rounded totals otherwise, preserving underlying precision. Use consistent human-readable dates, left-aligned text and aligned numeric columns. Render truncation notes only when truncation occurred. Consolidate synthetic-data and affiliation notices without hiding material model or telemetry limitations.

Follow the planned edit pattern consistently: update cheap results live; for Run/Apply, mark changed inputs and stale results as pending until the whole scenario is applied. Make reset/import messages describe the state actually loaded.

For an educational example, add a compact “How this was built” link or disclosure: the sanitized opening request, material planning decisions/deferrals, selected skills and libraries, and actual evaluation results. Label simulated conversations. Link public source records once a destination exists; do not copy entire reports into app output or invent a transcript. Use the same app name in its title, README and gallery; state a learning objective only when teaching is part of the agreed purpose.

1. Build HTML/CSS/JavaScript in `app/`, adding JSX only for selected React libraries. Keep calculations in modules that UI and tests share. Use native features first; approved libraries follow the managed workflow below. No backend or external runtime service.
2. Keep asset/module paths relative and use ordinary or hash navigation rather than server routes. Use bundled public/synthetic data or transient local imports. Validate inputs, label units, handle empty/error states, and provide keyboard-operable controls. Never send imported data elsewhere or preserve it as project evidence.
3. Open the app using the verified preview. Run the plan's initial known-answer cases, check console errors and actual browser interactions, and inspect desktop and narrow layouts. Check focus, labels, contrast, overflow, reset, and import/export when present. Observe network behavior with available browser tools; report the scope observed rather than claiming universal isolation.
4. Fix defects and discuss changes to the student's model or scope before altering those decisions. Update the plan and `DECISIONS.md` when they change. Write README usage, assumptions, data/library/font provenance, actual preview instructions, and limitations.
5. Inspect staged public/synthetic files and make meaningful local commits. Report what works, which initial checks ran, and what remains unverified. Hand off to [Evaluate](../evaluate-browser-app/SKILL.md); a polished interface or successful preview does not establish calculation accuracy.

For plain applications, `app/` is already publishable; do not add a build script. Managed applications use the provided Vite commands below. Reserve `dist/` for deployment output. Preserve the shared design while simplifying unnecessary controls, abstractions, and dependencies.

## Managed applications

When the plan selects approved libraries, follow [managed build](../../references/managed-build.md). Confirm package versions and required peers against the inventory, run the packaged dependency check, and preserve the lockfile. Copy canonical designer tokens, local font bundle and only selected theme adapters. Do not duplicate palette definitions or import a stock theme over them. Build production output and inspect it separately from development. Record the commands, dependency reasons and license notices in README.md; include config, lockfile and generated notices before the evaluated checkpoint.
