# Research reviewer — proposed skill improvements

These are proposals only. No shared skill or public page was edited. Basis: independent desktop/mobile render inspection of all three examples in round 1, followed by research correction and independent round-2 PASS. The parent reports the other pages now pass their respective reviews. I have not independently repeated their final behavioral reviews.

The research defect was an implementation miss under adequate existing accessibility guidance, not evidence that Duke needs another brand rule. The useful changes below make that guidance easier to execute consistently.

## Priority 1 — Make the responsive inspection matrix explicit

**Classification:** implementation clarification; not a new Duke rule or a claim that combined narrow/enlarged testing is the formal definition of WCAG conformance.

**Observed issue and evidence:** the research page passed ordinary 1440px, 390px and 320px rendering and 200% desktop text checks, but its central-question panel lost white text when enlarged on mobile. At 390px, doubling computed text sizes produced 392px page scroll width; more importantly, “challenge.” crossed from navy to white and disappeared. Root-size doubling also reproduced the loss. See `round-1.md`, `round-1/research-text200-mobile-note-computed.png`, `round-1/research-text200-mobile-note-root.png` and `round-1/zoom-check.json`. Round 2 checked all nine combinations of 1440/390/320 and default/computed-double/root-double, including an open outline; the corrected page preserved content and had no page overflow in any case. See `round-2/checks.json` and `round-2.md`.

**Does existing source guidance resolve it?** Yes. `references/web.md` already requires 200% text sizing, 320 CSS-pixel reflow, no lost content, and actual rendered inspection. `references/review.md` already requires enlargement and narrow checks. The defect is an implementation failure. The operational ambiguity is that separate desktop enlargement and default narrow checks can be mistaken for sufficient coverage of their interaction. The existing official/accessibility references do not establish this proposed nine-case matrix as a Duke policy.

**Proposed change and location:** add a short **Skill default — inspection method** paragraph to `references/web.md`, under “Inspect the output”:

> Record the viewport, enlargement method and visible interaction state for each inspection. Check normal desktop and narrow layouts, 200% text enlargement, and 320 CSS-pixel reflow. As an additional robustness check, combine narrow width with enlarged text and open any content-expanding controls. Inspect whether all text remains readable on its intended background, not merely whether the document has horizontal overflow. A root-font change, computed-size diagnostic and browser zoom are different techniques; name the one used and do not describe these checks as complete WCAG conformance testing.

Do not put a mandatory browser or exact desktop/mobile pair into the brand skill. Keep 390px as an example used by this project, and retain 320px only in the already-established reflow context. The full nine-case matrix can remain optional project evidence rather than an added burden for every artifact.

**Why generalizable:** responsive failures often emerge from combinations of font size, available width and expanded content. Explicitly recording the combination prevents an apparently complete checklist from masking an untested state. This applies to banners, callouts, accordions, navigation, forms and data labels across projects.

**How to check benefit:** on a future build, seed or retain a narrow callout containing a long word and reversed text. Before handoff, a reviewer should be able to identify the tested width/enlargement/open-state combinations and see whether the text stays on its intended surface. Compare whether the builder catches the failure before independent review. Do not count a zero-overflow metric alone as a successful outcome.

## Priority 2 — Include display copy and long prose in wrapping guidance

**Classification:** implementation clarification. The underlying readable-content requirement already exists; this is a targeted example, not a universal CSS prescription.

**Observed issue and evidence:** research headings had explicit resilient wrapping, while the visually prominent central question was a paragraph and lacked it. Smaller long-word overflow also appeared in prose during combined narrow/enlarged diagnostics. The builder resolved both with a single inherited wrapping rule; the round-2 render confirms that normal layout stayed intact while long text remained contained. See research `round-1/supplement.json` and `round-2/checks.json`, especially `390-root-note.png` and `320-root-outline.png`.

**Does existing source guidance resolve it?** Yes at the outcome level: web guidance requires flexible layout and text enlargement without lost content. Its specific “Let long headings wrap naturally” paragraph may focus implementers on heading elements while equally large callout paragraphs escape the same scrutiny. There is no evidence of an official Duke requirement for a particular CSS wrapping property.

**Proposed change and location:** extend the wrapping paragraph in `references/web.md`, under “Content and responsive layout”:

> Apply the same containment checks to prominent paragraphs, quotations, callouts, labels and long body words. A display-sized paragraph can need the same wrapping treatment as a heading. Use responsive spacing and appropriate wrapping when text outgrows its container; do not hide overflow or shrink away the user's enlargement. Check that any emergency word breaks preserve all characters and the intended contrasting background.

Do not require `overflow-wrap:anywhere` globally: code, tables and intentional no-wrap labels may have different needs. The research fix is a successful example, not a canonical implementation every project must copy.

**Why generalizable:** the same visual role can be implemented with different semantic elements. Testing by both role and element prevents display prose, quotes and non-heading labels from being omitted. It also addresses long organization names and variable user content without forcing a component library.

**How to check benefit:** inspect a fixture or future page with a long word in each of a heading, callout paragraph and expanded body panel. At enlargement, all remain readable and contained, while the normal-size design remains unchanged. Compare whether correction remains small and local, rather than introducing arbitrary font reduction or clipping.

## Preserve the existing design freedom

**Classification:** design preference; no skill change proposed.

All three actual rendered examples felt related through unchanged navy, Open Sans, restrained supporting colors and explicit fictional qualifications while using distinct compositions. Event emphasized date/program/registration; research used an editorial rail and serif hierarchy; student organization emphasized activity, calendar and membership. The research rail's unused vertical space and its enlarged emergency word breaks admit aesthetic alternatives, but neither warrants a mandatory template, fixed palette percentage or prescribed hero. Existing identity/web guidance already protects the useful flexibility shown by these examples.

## Recommendation

Adopt priority 1 first as a compact clarification in the web reference. Priority 2 is useful if kept to a few sentences. Avoid duplicating both passages in SKILL.md and review.md: the main skill already points to the web reference and review checklist. No new Duke policy, production asset rule or universal component standard is justified by this review.
