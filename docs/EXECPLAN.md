# Separate application design from brand identity

This living plan follows `~/.codex/PLANS.md`. The preceding plan is preserved at `docs/plans/2026-10-23-app-platform-before-product-design.md`.

## Purpose / Big Picture

An agent using Web Application Builder should choose an interface around the user's task, then apply the selected identity. Duke remains the default. An explicitly chosen independent identity retains accessible controls, honest analytical displays and rendered review. Preserve Campus Designer as the canonical Duke authority. This task changes design instructions, not application output or the separately deferred environment migration.

## Progress

- [x] (2026-10-23) Read workflow, design references, library callers and skill-creator guidance; preserve prior plan.
- [x] (2026-10-23) Added product-design reference and connected planning, building, evaluation and library themes.
- [x] (2026-10-23) Clarified canonical designer scope and regenerated package metadata/resources.
- [x] (2026-10-23) Validated packaging, 302 relative links and source-level instruction paths; recorded optional validator limitation.

## Surprises & Discoveries

Campus Designer already supplies useful task-driven composition and general accessibility checks. Retain those standalone instructions. Library recipes repeat Duke-theme requirements, so changing Build alone would leave conflicting instructions. Existing theme adapters are Duke-specific; independent projects must adapt copies without changing canonical Duke tokens.

## Decision Log

2026-10-23: Apply the immediately discussed design changes. Local runtime provisioning and the uniform framework migration remain deferred. Preserve existing build behavior and dependencies.

2026-10-23: Use one product-design reference, not another skill or component framework. Shared workflow owns identity selection. Campus Designer owns Duke rules. Library recipes retain integration-specific behavior.

## Outcomes & Retrospective

Implemented the guidance in Web Application Builder 0.2.4 and Campus Designer 0.3.3. Repository checks and Claude marketplace validation pass; all 302 relative package links resolve. Source walkthroughs cover default Duke, independent identity and authored SVG scenarios. The optional skill validator lacks PyYAML; no rendered app or independent behavioral trial was performed. The environment migration remains deferred.

## Context and Orientation

Work in `/Users/jordan/Projects/decision-999`. Builder stages and library skills read `plugins/web-application-builder/references/workflow.md`. Plan, Build and Evaluate own their respective stages. Theme assets are under `plugins/web-application-builder/assets/library-themes/`. The authored designer is `plugins/campus-designer/skills/campus-designer/`; `scripts/build.py` generates its builder copy and catalog manifests. Never edit generated designer files directly.

## Plan of Work

Add `plugins/web-application-builder/references/product-design.md` for task-to-layout choices, semantic roles (meaning-based color/type names), component states and observable quality review. Link existing accessibility guidance rather than duplicating it. Connect Plan, Build, Evaluate and library recipes to shared identity selection. Keep Duke default and allow explicitly chosen independent identities through adapted project themes. Clarify canonical designer scope without deleting its rules. Update versions and descriptions without claiming fresh example results.

## Milestones

First establish the reference and stage routing. Source walkthroughs must show that a Duke dashboard uses the brand guidance, an independent calculator preserves its chosen identity, and a useful authored SVG diagram is permitted. Then reconcile library guidance and metadata so those paths remain consistent in an installed package. Finally regenerate, validate and record exact results.

## Concrete Steps

From the repository root run `python3 scripts/build.py`, `python3 scripts/check.py`, `claude plugin validate .` and `git diff --check`. Run the skill-creator `scripts/quick_validate.py` for edited skills if local dependencies are available. Inspect relative Markdown links and generated designer equality. Do not install unrelated tools to cure an optional validator dependency.

## Validation and Acceptance

Verify all three instruction paths above, including error versus empty and pending versus applied state. Preserve default Duke palette/fonts, brand authority labels, licenses, decorative-arrow preference and accessibility review. No alternative framework or universal aesthetic prohibition is introduced. Packaging checks must show the new reference is included and generated copies match. Record walkthroughs as source review, not rendered trials; no application UI changes require browser screenshots.

## Idempotence and Recovery

Build regenerates catalogs and bundles deterministically. Preserve untracked research/evidence and revert only named task edits if necessary. Do not reset the workspace. No publication is authorized by this task.

## Artifacts and Notes

Store the concise validation record under `evidence/web-application-builder/2026-10-23-product-design/`. Update `docs/GROK-BUILD-COMPARISON.md` to distinguish the implemented guidance subset from proposed runtime, token and component implementations.

## Interfaces and Dependencies

No new runtime dependency, skill identifier or component API. Existing stages consume the new reference. Duke adapters remain brand-specific. Author plugin manifests and generate Claude manifests/marketplaces with the build script.

Revision note: Initial plan scopes design approval and preserves the deferred environment decision.

Revision note: Completed guidance and metadata changes, regenerated canonical resources, recorded source-level validation and retained the distinction from rendered app evidence.
