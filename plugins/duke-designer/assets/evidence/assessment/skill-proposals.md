# Duke designer: cross-example assessment and proposed changes

Completed 2026-10-02. All three current examples have independent PASS verdicts. These are proposals for the user's decision; **the skill has not been modified**. The coordinator read all three reviewers' recommendations and consolidated overlapping suggestions into three changes.

## What the examples demonstrate

| Local preview | Design approach | Independent verdict and evidence |
| --- | --- | --- |
| [Event](http://127.0.0.1:8080/examples/event/) | Navy conference opening, prominent date, chronological program, fictional speakers and registration demo. Open Sans headings with Georgia body. | [PASS, round 3](reviews/event/round-3.md), with current desktop/mobile screenshots and enlarged registration states. |
| [Research](http://127.0.0.1:8080/examples/research/) | Quiet editorial layout, Georgia display headings, Open Sans reading column, section rail, substantial explanation and filterable project outlines. | [PASS, round 2](reviews/research/round-2.md), including the corrected central-question panel and expanded studies. |
| [Student organization](http://127.0.0.1:8080/examples/student-organization/) | Warm workshop panel, Navy mission band, activity sections, event calendar and membership suggestions. Open Sans headings with Georgia body. | [PASS, round 2](reviews/student-organization/round-2.md), including save-label accessibility, radio choices and enlarged mobile states. |

Three builders independently chose their compositions. Three separate reviewers each read the skill and relevant references, captured and viewed all three pages at desktop/mobile, and owned one page's behavioral verdict. Required corrections went back to the original builders. Current HTML, CSS, JavaScript and font digests match the final PASS reports; all 16 skill files match the original manifest. See [final verification](final-verification.json) and [coordination record](checklist.md).

The skill successfully supported distinct compositions, unchanged Duke Navy, purposeful secondary colors, readable normal-size hierarchy, licensed local fonts and clear fictional framing. No additional Duke visual-brand rule is justified by this sample. The strongest opportunities concern executing and evidencing existing accessibility guidance.

## 1. Make combined reflow checks and readable wrapping explicit

**Priority: highest. Classification: implementation clarification.** All three pages initially passed normal narrow layouts and desktop text enlargement, yet failed when those conditions were combined. Research R1 lost white callout text against white outside its Navy panel. Event E1 expanded the page to 412px. Student S2 expanded to 401px with enlarged root text. Event's first correction removed overflow but left single-character radio-label columns (E2). [Research evidence](reviews/research/round-1.md), [event overflow](reviews/event/round-1-addendum.md), [event readability](reviews/event/round-2.md), [student evidence](reviews/student-organization/round-1.md).

**Existing guidance:** `references/web.md` already requires flexible layouts, text enlargement, narrow reflow and readable controls; `references/review.md` already calls for visual inspection. These were implementation defects, not missing Duke rules. The procedure leaves room to check enlargement and narrow width separately and to mistake containment for readability. W3C treats [text resizing](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html) and [reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) as distinct criteria; the combined condition below is an extra skill robustness default, not a claim about their formal test procedure.

**Proposed change:** keep the detailed procedure in `references/web.md` under “Inspect the output,” rather than duplicating it in SKILL.md:

> Record width, enlargement method and visible interaction state. In addition to normal desktop/narrow inspection and applicable accessibility checks, use a narrow layout with 200% text as a skill robustness check; 320 CSS px is a useful stress width. Check a nearby breakpoint when it changes the layout. Confirm that representative text actually enlarges: changing the root size also changes rem spacing and may not double pixel-, viewport- or clamp-sized text. Exercise expanded and generated content. This supplements formal accessibility testing; it does not certify conformance.

Extend the existing wrapping paragraph in the same reference:

> Inspect headings, display paragraphs, callouts, long prose, choice labels and controls on their intended backgrounds. Zero horizontal overflow does not prove readable reflow. Recover useful line width by adapting spacing or layout when emergency wrapping produces isolated-letter columns, especially in functional labels and qualifications. Preserve the user's enlarged text; do not conceal problems with clipping or text reduction.

**Why this helps:** the same failure appeared across all three compositions. The added procedure addresses width, spacing, type and interaction together, while the readability sentence prevents a fix from satisfying only a geometry measurement.

**How to check improvement:** repeat the known failing narrow/enlarged states before a future handoff. The procedure should reject the old event E2 screenshot despite zero overflow and catch reversed text escaping its surface. Record whether builders find these problems before independent review and whether fewer correction rounds are needed. Do not mandate a nine-case matrix, one browser, global `overflow-wrap:anywhere`, a particular breakpoint system or a universal character-count threshold.

## 2. Check visible labels against accessible names in changed states

**Priority: high. Classification: implementation clarification.** Student S1 displayed “Save event,” then “Saved,” while the accessible name remained “Save [event title].” Functional toggling and keyboard operation passed; the label mismatch remained. The final version keeps one visible “Save event” action label contained in the accessible name, with pressed state and feedback conveying selection. [Failure](reviews/student-organization/round-1.md), [independent resolution](reviews/student-organization/round-2.md).

**Existing guidance:** the skill targets WCAG 2.1 AA and requires meaningful names. [W3C Label in Name](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html) already requires the accessible name to include the visible text label. This is not a new Duke requirement; the concrete failure mode is currently unstated in the web reference.

**Proposed change:** add under `references/web.md` → “Build accessible behavior”:

> When a control has visible text, its accessible name must contain that label, preferably at the start. Avoid replacing useful visible text with a different aria-label. Inspect the computed accessible name in default and changed states. A stable action label plus a programmatic pressed state is often simpler for a toggle; otherwise synchronize visible and accessible labels.

Add the W3C Label in Name reference to the source index's accessibility entry. The review checklist needs only a short pointer to the state/name check; keep the explanation owned by web.md.

**Why this helps:** a more descriptive ARIA label can accidentally break speech-input discoverability. This check transfers to saving, subscribing, expanding and other stateful actions without requiring one implementation.

**How to check improvement:** compare the visible label and browser-computed name before activation, after activation and after a repeat activation. The old student controls should fail and the corrected controls should pass. Do not make a radio group, stable label or specific ARIA pattern mandatory when another accessible implementation fits.

## 3. Require legible, trustworthy review evidence

**Priority: medium. Classification: small procedural gap plus clarification of an existing obligation.** All three tall full-page mobile screenshots became too small to assess labels and focus when displayed as thumbnails. Several Chrome captures also omitted or repeated page regions until recaptured. The event's original PASS later had to be superseded when a material untested condition failed. [Event evidence qualifications](reviews/event/round-1.md), [student evidence proposal](reviews/student-organization/skill-proposals.md).

**Existing guidance:** actual rendered inspection and artifact/version reporting are already required. The skill does not explain unreadable screenshot scaling or capture artifacts. No Duke source needs to change; this belongs in review procedure.

**Proposed change:** add near the opening of `references/review.md`:

> View the captured output before relying on it. Use whole-page views for composition and readable viewport or element views for labels, focus and clipping. Confirm that the capture shows the intended region and state; recapture suspected paint artifacts before treating them as page defects. Record unchecked areas. Tie the result to the reviewed version and tested states; reassess it after relevant edits or new material findings, retaining superseded findings when another round is needed.

**Why this helps:** it reduces false confidence from tiny screenshots and false failures from bad captures. It also makes multi-round review evidence usable without forcing every task to adopt this project's full independent-review process.

**How to check improvement:** another reviewer should be able to inspect a cited defect at readable scale and identify the version/state it applies to. Give a reviewer a bad capture and a valid fresh capture; the conclusion should rely on the valid one. Do not mandate Chrome, screenshots for every medium, checksums for every small task, or exhaustive reruns after irrelevant changes.

## What I would preserve

Keep the current freedom in composition, type roles, supporting colors and native controls. The examples do not justify mandatory heroes, card grids, photography, fixed palette ratios or a single official font pairing. Empty research-rail space, occasional display-word breaks at extreme enlargement and optional favicons are design preferences, not skill defects. No new source crawl, logo policy or shared component framework is warranted by these findings.

The three reviewer proposals are retained separately: [event](reviews/event/skill-proposals.md), [research](reviews/research/skill-proposals.md), [student organization](reviews/student-organization/skill-proposals.md). Their overlapping suggestions were merged above; the coordinator prioritized repeated failures, preserved source authority distinctions and rejected unnecessary prescribed layouts or test machinery.

## Demonstration limits

These are fictional local examples, not approved Duke identities or active programs. People, dates, venues, projects and membership details are illustrative. Registration and membership do not create records or send personal information; saved student events reset on reload. Marks, unit identities, licensed photography and production authorization were not exercised.

Reviews used Chrome 154 with desktop/mobile viewports, keyboard checks and documented enlargement simulations. They are not screen-reader, physical-device, cross-browser or complete WCAG certification. Extreme enlarged display type can still make coarse word breaks. Georgia uses the system font stack; Open Sans is local with its license retained. Chrome may request an optional server-root favicon that returns 404 without affecting the pages.

The preview server must remain running. To restart, run `python3 -m http.server 8080 --bind 127.0.0.1` from `.`, then use the links above. Each page also has a standalone index.html entry and local assets. Design rationales and uncertainty notes live in each example's rationale.md, outside the rendered page content.
