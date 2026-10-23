# Product-design guidance review — October 23, 2026

Scope: Web Application Builder 0.2.4 and Campus Designer 0.3.3. Guidance and package metadata only. The separate uniform-framework and portable-runtime proposals remain deferred. Historical example counts are unchanged.

## Checks performed

`python3 scripts/build.py` passed after granting the command access to regenerate the protected `.agents/plugins/marketplace.json` file. `python3 scripts/check.py` passed its catalog, generated designer, clean-build, invalid-input and gallery boundary checks. `claude plugin validate .` passed. A one-off source check resolved all 302 relative Markdown destinations across both plugin packages. `git diff --check` passed.

The optional skill-creator quick validator could not start because the available Python lacks PyYAML (`ModuleNotFoundError: No module named 'yaml'`). No dependency was installed to repair this optional checker. Repository package/skill validation completed through the standard checks.

## Instruction-path review

These are source-level walkthroughs by the implementing agent, not independent generated-app trials or rendered observations.

For a default Duke operating dashboard, Plan loads product design and records the business question, main action and nearby evidence. Shared workflow selects Duke by default. Build loads canonical identity/color/type/web/review references; library recipes preserve Duke-specific theme mapping. Evaluate checks task, model, state and applicable brand requirements. No second component system is introduced.

For an explicitly independent scenario calculator, Plan preserves the stated identity. Shared workflow instructs adaptation of copied app themes and all component/chart consumers, without relabeling canonical Duke tokens. Build does not impose Duke palette/type; general accessibility, licensed local fonts and rendered checks still apply. Existing plain/managed build choices are preserved because the framework migration is not part of this task.

For a revision retaining a useful authored SVG analytical diagram, product design permits exact graphics with accessible equivalents and no new dependency merely for drawing. Equivalent reference states remain the comparison basis. No blanket SVG prohibition, accent-color ban, mandatory dark mode, radius formula or button scale is imported.

State patterns distinguish malformed imports from valid-empty results, edited inputs from applied scenarios, and actual completion from unearned success. Review criteria name the affected task and correction rather than rejecting fonts or shapes by taste alone.

## Simplification and limits

One reference owns product patterns; existing stage skills route to it. Shared workflow owns identity selection, and repeated library paragraphs now point there. Campus Designer retains its useful standalone accessibility and composition instructions, with a short scope clarification; the builder copy is generated. Duke adapters remain explicitly brand-specific rather than being advertised as a new generic theme API.

No application UI, runtime dependency or theme asset changed. No new browser, novice, platform-onboarding or independent behavioral trial was run, and this review does not claim those outcomes. Reusable component specimens and executable semantic tokens from the broader recommendation report remain proposed. No remote publication was performed.
