# Build an interactive unit-economics pitch

This living ExecPlan follows ~/.codex/PLANS.md. It is self-contained for the isolated presentation example.

## Purpose / Big Picture

A student can present a six-part argument for a fictional desk-kit pop-up, change four assumptions, inspect exact operating results and sensitivity, and copy a conditional decision record. It demonstrates local interactivity, not live external business data. At the agreed baseline the user sees$300 operating result and63 whole units to cover costs.

## Progress

- [x] (2026-10-09) Actual simulated questions, proposal and confirmation recorded.
- [x] (2026-10-09) Managed starter and approved Reveal theme selected in a new isolated folder.
- [x] Independent cents model implemented;41/41 Node and actual browser checks pass.
- [x] Six original slides, native controls, SVG/table and decision copy implemented.
- [x] Coordinator production interactions/rechecks pass at f21d9f2; source/render failures preserved.
- [ ] Receive independent reviewer final verdict.
- [ ] Coordinator publishes only after reviewer PASS and source freshness.

## Surprises & Discoveries

None yet. Browser availability is currently limited in the developer's CUA session after an interrupted prior task; coordinator has an active surface for independent observations. Source review is not counted as rendered verification.

## Decision Log

The student confirmed bounded inputs, exact cents and no demand response. The zero-fixed-cost cases use minimum non-loss quantity wording, with explicit distinctions for zero and negative contribution. The six slides retain fixed reference cases while current inputs drive sensitivity and the copied decision. Reveal.js is the only runtime library; an eight-point local SVG plot needs no chart dependency. Pending edits retain but label last applied results and disable copying. Decisions agreed2026-10-09.

## Outcomes & Retrospective

Planning complete. Implementation and review remain.

## Context and Orientation

The root is /private/tmp/bab-recipe-examples-2026-10-09/presentation. app/model.js will validate string inputs, calculate integer-cent results, and build bounded sensitivity points and record text. app/app.js will own Reveal lifecycle, native forms and render updates. app/index.html will contain .reveal>.slides>section markup for six slides. app/style.css and app/theme/reveal.css will provide readable unscaled slide layouts. Tests import the actual model without the DOM. Reviewer owns REVIEW.md; the developer owns other docs/source. No course or sibling app implementation is copied.

## Plan of Work

First implement parseInputs and calculate with explicit integer bounds and no Number parsing of money fractions. Test the agreed baseline, downside, reduced price, cent precision, invalid input and all nonpositive-contribution cases. Then create the six slides and distinct desktop/mobile layouts. The lab applies all fields together; presets are explicit. Sensitivity uses zero and ratios of current volume, rounded to whole units and deduplicated, with small-volume fallback and supported upper bound. The record states current assumptions and conditional next tests. Configure Reveal embedded, no hash/history, disabled auto narrow scroll activation, no text scaling, scoped keyboard and no transition. Use a scrollable current slide for taller content; content must not disappear below a fixed viewport. Create browser tests and fixed-width production frames; root/reviewer inspect actual output and correct real failures.

## Concrete Steps

In the root, install exact reveal.js6.0.2 with npm using /private/tmp/bab-npm-cache. Run npm ci with lifecycle scripts disabled, the canonical dependency checker, npm run build, and the test/production servers at the coordinator-confirmed ports. Open /tests/ in the browser and the production prefix. Run Node tests only for the pure numerical model; browser interaction claims require actual CUA observations. Keep local source in Git on main with the authorized course identity. Never push before coordinator handoff.

## Validation and Acceptance

Baseline gives contribution800c, revenue200000c, variable120000c, fixed50000c, profit30000c and break-even63. At62 units profit−400c and63 units+400c. Downside50 gives−10000c. Price1800c gives10000c and84 units. Fixed0 and negative margin:0 is the only non-loss volume; zero margin/fixed0:all volumes break even; fixed positive/nonpositive margin:no finite threshold. At supported maxima arithmetic remains exact/safe. Sensitivity includes0/current, bounded unique whole units and above-current cases when possible. Invalid input never changes applied assumptions.

Actual UI checks must cover six-slide navigation/progress, numeric arrows without changing slide, Enter applying the form, Escape/overview behavior, hidden-to-visible chart reentry, readable320/390/1440 layouts, exact table alternatives, clipboard content, pending/invalid state, restored history and one deck lifecycle. Check source/notices/base and render every slide. Do not claim browser or keyboard passes from source alone.

## Idempotence and Recovery

The app has no persistent user data or network writes. Build replaces only dist. Presets/restore recover native form edits. A reload restores baseline. Normal disposal destroys the Reveal instance; persisted history leaves it intact. Only the coordinator creates/publishes the repository.

## Artifacts and Notes

PLANNING-CONVERSATION.md preserves the exchanged role-play text, including original spacing. EVALUATION.md will separate developer evidence, independent coordinator observations and reviewer findings. Root owns publication.

## Interfaces and Dependencies

model.js exports baseline, presets, parseInputs(raw), calculate(inputs), sensitivity(inputs), money(cents) and decisionRecord(inputs). Inputs are {price,cost,quantity,fixed}, with cents for money and integer units. calculate returns revenue, variable, contribution, profit and a named threshold case. reveal.js6.0.2 and Vite8.3.4 are the only dependencies. The SVG plot and native table render one shared model result.

Revision2026-10-09: initial confirmed design and acceptance plan before implementation.

## Implementation checkpoint

On2026-10-09 the pure model, six original slides, navigation/forms, SVG/table sensitivity, comparison and record copy were implemented.41/41 Node tests pass; clean npm ci, canonical dependency checker and production build pass. Tests9517 and production9518 are running for independent UI review. Browser/render gates remain open; no alternate browser acquisition was used when developer CUA reported no enabled surfaces.

Final verification2026-10-09: coordinator actual CUA witness at f21d9f2 closes source tick/keyboard issues and rendered stale-announcement/maximum-money failures.41/41 browser tests, desktop1440 and all narrow320 slides, actual clipboard content, keyboard input/table behavior, scenario cases and native Back passed. No source or PLAN changes followed. Publication and reviewer final acceptance remain coordinator/reviewer responsibilities.
