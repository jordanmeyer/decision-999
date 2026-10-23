# Design the application around its task

Plan, Build and Evaluate use this reference for interface work. [Shared design](workflow.md#shared-design) owns identity selection; Campus Designer owns Duke brand guidance. These product defaults work with either the default or an explicitly selected independent identity. Preserve an existing app's conventions unless the requested change calls for revising them.

## Plan the first useful screen

In the existing PLAN.md, briefly name the user's main question, first useful result, primary action, evidence needed beside it, and device/density constraints. Choose the composition from those relationships; no separate design document or pixel-mockup approval is required for routine work.

| Task | Useful starting composition | Avoid unless the task needs it |
| --- | --- | --- |
| Scenario calculator | Labeled assumptions beside result and comparison; method nearby | KPI strips repeating the same answer, navigation for a single view |
| Operating dashboard | Business comparison, scoped filters, chart and reconciling ledger | Unrelated headline metrics, evidence hidden behind decorative cards |
| Data explorer | Import/filter controls, result count and primary table; detail on selection | Empty sidebar, a chart replacing the usable evidence table |
| Planner or editor | Main workspace with contextual properties and clear save/apply state | Permanent inspectors with no selected object, competing primary actions |
| Information site | Reading hierarchy, useful navigation and an appropriate next action | Dashboard chrome or a mandatory full-screen hero |

These are starting points, not templates. When adapting a reference, preserve the requested visual and interaction relationships; compare equivalent states rather than copying a screenshot alone.

## Map identity into reusable roles

Define only roles the app uses: page/surface, text/muted text, border, action, focus, selection and error, plus heading/body/numeric type roles and a small spacing rhythm. Reuse existing CSS variables and the selected library's theme interface. One role should have one owner; avoid scattering raw values across components or adding a second token framework.

For Duke, map roles to canonical tokens and published solid colors; never redefine a Duke-named token to mean another brand color. For an independent identity, adapt the copied app theme and its chart/component consumers with clearly named project roles. The supplied Duke adapters are examples of that specific mapping, not an identity-neutral API. Keep library structural CSS and behavior intact.

Check actual foreground/background and focus pairs in every used state. Preserve local licensed fonts, fallback stacks and numerical alignment; verify loaded faces. Apply the bundled [web accessibility and rendered-review guidance](../skills/campus-designer/references/web.md#build-accessible-behavior) for every identity, honoring stronger project requirements. Duke-specific palette and mark requirements apply when using that identity; a brand change cannot weaken accessibility or data truth.

## Compose controls and states

Use the project's existing component system. When the approved plan uses Mantine, use its tested controls; native HTML controls are appropriate when simpler. Do not add another component library for a visual recipe.

| Pattern | Behavior to preserve |
| --- | --- |
| Field with help/error | Persistent label, explicit units, associated error and retained user input |
| Filter bar | Visible scope; chart, totals and table use the same applied values |
| Apply/Run | Cheap calculations may update immediately; otherwise distinguish edited inputs from the last applied result |
| Tabs or disclosure | Clear selected/expanded state and keyboard behavior; primary evidence and material qualifications remain discoverable |
| Dialog | Focus enters and returns predictably; cancellation preserves unrelated work |
| Import | Explain accepted input; malformed input is a failure, not a successful empty dataset |
| Data table | Aligned values and units, keyboard access, useful narrow-screen handling; no false precision or silent truncation |
| Status feedback | Describe what actually happened without shifting unrelated controls or repeatedly interrupting reading |

Implement applicable initial, empty, invalid, pending, failed and completed states. Add cancelled, stale or saved states only when the app can actually enter them. Preserve valid work during recovery where appropriate. No simulated loading for instantaneous work and no success messages before completion.

## Use visual choices for a reason

Keep the question, assumptions and supporting evidence close enough to compare. Density follows the task: a ledger may need compact rows; an explanatory page may need generous reading space. Match headings to their content rather than decorating every section with identical panels.

Choose typography, color, surface shape and motion within the selected identity. There is no universal dark theme, accent-color ban, radius formula, button press scale or animation duration. Closely nested rounded surfaces should look coherent; square surfaces are valid too. Motion should explain orientation, disclosure or feedback and respect reduced-motion preferences. Do not animate business values merely to suggest activity.

Authored SVG diagrams, exact analytical graphics and scientific plots are legitimate when they serve the task and have accessible equivalents. Choose an approved library when it helps; a diagram alone does not justify a new dependency. Icons should clarify meaning and have accessible labels where needed. Preserve the developer's preference against decorative action arrows; functional previous/next or disclosure indicators remain appropriate.

## Review observable failures

Run the representative task and relevant non-happy states, then inspect desktop, narrow and keyboard behavior using the existing evaluation workflow. Use Campus Designer's [review checklist](../skills/campus-designer/references/review.md) for applicable factual, accessibility and production checks; apply its brand-compliance checks only to the selected Duke identity. Record unperformed checks honestly.

Flag a visual issue with the task it harms and a concrete correction. Examples: remove a KPI that contributes no decision information; bring the denominator next to a misleading percentage; shorten whitespace separating an input from its result; remove a badge that implies unverified status; replace filler with actual instructions or omit it. A gradient, font or rounded corner is not a defect solely because it resembles another app. Evaluate legibility, meaning, hierarchy and consistency in context.

Keep numerical correctness, task fulfillment and interface quality as separate findings. A pretty screenshot does not establish interaction quality; a passing model test does not establish a usable interface. Finish with a simplification pass for redundant controls, repeated values, empty panels and technical copy that obscures the task. Preserve useful behavior and the student's agreed scope.
