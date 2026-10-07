# Event independent review — round 2

**Verdict: FAIL.** E1's offscreen overflow is corrected, but a narrow enlarged-text readability defect remains (E2). No public files edited.

Read the builder revision-2 rationale and source changes and inspected the builder's narrow-text measurements for context. Verdict relies on new independent Chrome renders, measurements, screenshots, and keyboard tests under `assessment/reviews/event/round-2/`, not the builder's checks.

## Version

| File | SHA-256 |
| --- | --- |
| index.html | 06ab2df653666fd0c46a3c2431a94f5a0b030fb7f9f914a900539f8d34c2e1d0 |
| style.css | cc54f3546a7ecb4be93b1f461a2abd0003115f9f0d306865de32f6b642f7e5e9 |
| script.js | dae4cb7c98bb537cdc4eeb71a012db889c4b15c0c2e1c56f6c30b7b4b3d5dd0d |
| assets/open-sans.ttf | 36643644f318a812aab2d2ed3bb98f8cf0872527f835fe9398d95fe6b9adb878 |

Browser: Chrome 154.0.8037.97, independent fresh contexts, 900px high. Cases: 1440px normal; 390px normal; 390px and 320px with each element's original computed font size doubled; 390px and 320px with root font size set to 200% (also exercising rem spacing).

## Results

- All six cases have document width equal to viewport width and no element boxes outside the viewport. In all four enlarged narrow cases, this remains true through completion and retry. The prior 412px-wide layout is gone.
- Normal desktop/mobile preserve the original hierarchy, palette, long-heading wrapping, registration presentation, fictional labeling, and complete content. No visual regression observed.
- Computed-font doubling at both widths: long hero words now break within the Navy panel, and white text stays on Navy. Registration qualifications, choices, button, and confirmation stay within their intended panels. Word breaks are unattractive but substantially readable. Text content is unchanged before/after enlargement.
- Root enlargement: the hero also fits. However, expanding rem gutters, panel padding, label padding, radio size, and gap consumes most of the form's width. At 320px the label text is effectively a single-character column. At 390px “In person” becomes “In / per / son,” and the small descriptive text breaks into short fragments. This is more than a preference about headline wrapping.
- Keyboard: at both widths with both enlargement methods, ArrowDown selects Online, Tab/Enter submits, completion reports Online and focuses `confirmation-title`, Tab/Enter retries and focuses the selected radio. ArrowUp then permits a second submission reporting In person. Focus ring is visibly present in viewed completion and retry screenshots. Functionality survives despite E2's unreadable control labels.
- Font loads normally; no browser script or resource errors recorded. No new external dependencies. Colors/markup/JS are unchanged, so round-1 source/contrast/semantics findings remain applicable. Cross-example comparison evidence remains in round 1; this bounded round concerns the event correction.

## Categorized findings

### E1 — Implementation defect, resolved

Shrinkable mobile tracks plus emergency wrapping prevent the measured offscreen grid expansion. All tested content now remains on the intended backgrounds; no words are deleted or hidden. Closure is supported by `checks.json` and the new enlarged hero, registration, completion, and retry pixels.

### E2 — Implementation defect, medium severity, correction required

Element: `.registration-panel .attendance-option` and its label text at 320px with `html { font-size: 200% }`. The form's nested rem padding, 40px radio, and 32px gap leave only approximately one character of usable text width. “Sample option · Durham, NC” appears down the page as individual letters; “Online” is also split to one letter per line. Screenshot `320-root-registration.png` shows the vertical character column; `320-root-retry.png` shows the Online label and selected radio in the same state. At 390px the fragmentation is less severe but still conspicuous (`390-root-registration.png`).

Source/rule: `references/web.md` requires readable typography, content-driven breakpoints, usable controls, text enlargement and reflow; `references/review.md` requires readable composition at intended sizes and inspection for awkward wrapping. The general emergency wrap rule satisfies containment, but does not by itself satisfy readability. This is already covered by current skill guidance, not a new Duke-specific policy.

Concrete correction: recover meaningful line width for narrow enlarged-text form labels by adapting nested padding/gutters/gap or stacking the radio/control layout when space is constrained. Apply the same readable-width principle to confirmation and action text. Keep the text enlarged; do not hide content or merely suppress scrolling. Recheck 320/390 root200 and computed200, including registration/confirmation/retry. The builder should choose the simplest correction without adding a separate component system.

### Design preference — low, no required correction

Emergency word breaks in very large narrow hero headings remain visually awkward, e.g. “Leadershi / p.” This preserves the entire heading and its intended surface. A smaller original mobile display scale or alternative line composition might look better, but is not required solely by personal preference. E2 concerns dense functional labels fragmented to single characters, which is materially different.

### Skill gap — none blocking

Existing guidance requires readable reflow; its execution needs correction. A future skill proposal may make the combined test matrix more explicit without relabeling this implementation failure as a missing brand rule.

## Evidence viewed

All files below are in `assessment/reviews/event/round-2/`:

- `1440-normal.png`, `390-normal.png` (full actual page captures opened).
- `390-computed-hero.png`, `320-computed-hero.png`, `390-root-hero.png`, `320-root-hero.png`.
- `390-computed-registration.png`, `320-computed-registration.png`, `390-root-registration.png`, `320-root-registration.png`.
- `390-computed-completion.png`, `320-root-completion.png`, `320-root-retry.png`, `320-computed-retry.png`.
- `checks.json` records all measured states and hashes. `inspect.cjs` reproduces the independent review. Full-page and additional state captures are retained for every enlarged case.

Earlier evidence is preserved. This FAIL applies to the listed current hashes. E2 must be corrected and independently rechecked before PASS; no essential tool or access blocker prevented this review.
