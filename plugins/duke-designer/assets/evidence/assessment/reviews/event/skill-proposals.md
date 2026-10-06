# Skill-improvement proposals — event reviewer

All three examples have current independent passes: event round 3, research round 2, student organization round 2. These proposals are for user review only. Neither the skill nor public pages were modified.

The rendered examples show the skill can support distinct compositions: a reversed event invitation and program, an editorial research overview, and an activity-focused student page. Shared Navy, compatible typography, qualifications and clear hierarchy supply continuity without requiring identical heroes, cards, or spacing. The strongest improvements concern how implementations are verified, not additional Duke identity rules.

## Priority 1 — Make the combined narrow/enlarged stress check explicit

**Observed issue and evidence:** Event initially passed 320px at normal text and 200% text at desktop width. Combining 320px/390px with doubled text exposed 412px page width, white hero letters escaping Navy, and offscreen registration qualifiers. See `round-1.md`, `round-1-addendum.md`, `narrow-text-checks.json`, and `narrow-text-390-hero.png`. A cross-page concern from the research reviewer triggered this omitted combination. This reviewer independently reproduced the event failure; the research reviewer owns its detailed diagnosis.

**Does existing guidance resolve it?** Yes. `references/web.md` already asks for text enlargement, 320px reflow, natural long-heading wrapping and readable controls. The implementation and initial review did not adequately exercise those instructions together. Duke sources do not specify this particular test harness.

**Classification:** Implementation clarification, not a new brand rule or claim that this exact combined case is a formal WCAG test procedure.

**Proposed location/change:** In `references/web.md`, replace the final “Keep navigation and targets usable by touch…” bullet with:

> Keep navigation and targets usable by touch. Check text resizing and reflow using the applicable accessibility standard's procedures. As an additional skill stress default, inspect at least one narrow layout at 320 CSS px with 200% text enlargement, including headings, qualifications and interaction states; add a nearby width if it exercises a different layout. Record how enlargement was applied. Root-font enlargement also changes rem spacing and may not double viewport-based type; when those units are present, separately verify actual text enlargement. This combined stress case supplements formal WCAG checks and is not a statement that WCAG prescribes this exact combination or testing method.

Avoid prescribing browser automation, Chrome, or a particular injection script as the only valid method. A browser setting or other reliable procedure can provide equivalent evidence if documented.

**General benefit:** Makes the missing interaction between font size and available width harder to overlook. Explains why “root200 passed” and “every text size doubled” are different observations without requiring a universal testing framework.

**How to measure whether it helped:** Re-run a future event/research/student-like example review with the matrix explicitly recorded. A fixture with the original event `1fr` intrinsic-width behavior should be caught before handoff, rather than after a nominal pass. Confirm that reported text sizes actually increased and that root-spacing effects are represented where relevant. Track whether responsive defects require fewer independent correction rounds.

## Priority 2 — Require readable words after an overflow fix

**Observed issue and evidence:** Event round 2 eliminated all measured overflow, yet 320px root200 produced single-character attendance labels. Nested rem gutters, panel/label padding, radio size and gap consumed almost all available text width. Geometry and unchanged text-content checks passed while `round-2/320-root-registration.png` and `round-2/320-root-retry.png` showed unreadable columns. The final spacing correction in round 3 restored “In person,” “Online,” and complete description words without reducing text size.

**Does existing guidance resolve it?** Yes. Readable typography, usable controls, content-driven layouts and review for awkward wrapping already cover this. The failure was implementation judgment; emergency wrapping was treated as sufficient evidence of success.

**Classification:** Implementation clarification. The exact spacing correction is an example, not a mandatory component recipe.

**Proposed location/change:** After the long-heading paragraph in `references/web.md`, add:

> Prevent intrinsic grid/flex widths and overlong words from pushing content beyond its surface. Emergency word wrapping can preserve content, but containment alone is not readable reflow. At enlarged narrow sizes, inspect whether nested padding, gutters, controls and gaps leave useful line width: ordinary labels and explanations should not become columns of isolated letters. Recover space or rearrange the layout before shrinking text or hiding content. Occasional breaks in oversized display words are a design judgment; apply stricter readability judgment to functional labels and qualifications.

In `references/review.md`, append to the clipping/overflow/awkward-wrap check:

> A zero-overflow measurement or unchanged DOM text is supporting evidence, not proof that words remain readable on their intended backgrounds.

**General benefit:** Prevents fixing only the symptom measured by a script. Transfers to navigation, cards, dialogs, filters, forms, charts with labels, and long reading columns. Gives a reason to adapt spacing rather than accumulating unrelated overrides.

**How to measure whether it helped:** Review the old round-2 screenshot and corrected round-3 screenshot without their geometry results; the reviewer should reject the former and accept the latter for functional readability. On future artifacts, require a concrete observation about actual labels/qualifiers at the stressed size, not only `scrollWidth === clientWidth`. Do not replace human judgment with a universal character-count threshold.

## Priority 3 — Make evidence valid, legible and version-specific

**Observed issue and evidence:** Long full-page images for all three examples were automatically scaled down when opened, making small type hard to assess. Event's first focus capture also had a compositor defect: the Navy field and focused button appeared but much of the text was missing. A subsequent capture was at the wrong scroll position after a hash-preserving reload. Fresh-context `hero-focus-final.png` provided valid evidence; native-size mobile details clarified typography and controls. The evidence history is documented in `round-1.md`. Separately, later responsive findings correctly superseded an earlier PASS, so a screenshot checklist without state/version scope would be misleading.

**Does existing guidance resolve it?** Largely yes: the skill already distinguishes actual visual inspection from source review and asks reviewers to record artifact/version/sizes. It does not explain the practical evidence failure mode of unreadable thumbnails, repeated/omitted screenshot content, or viewport-only evidence used as a whole-page review.

**Classification:** Small true skill gap in review-evidence procedure, alongside an implementation clarification about version scope. This is general tooling guidance, not Duke policy.

**Proposed location/change:** Under `references/web.md` → “Inspect the output,” add:

> Open the captured pixels and confirm the screenshot contains the intended page region and state. A successful capture can still omit, repeat or misrepresent content. If a full-page image becomes too small to judge text, also inspect representative viewport or section details at a readable size. Re-capture suspect output using a clean load or equivalent reliable rendering path; do not treat a capture artifact as a page defect without checking the actual state.

Under `references/review.md` → “Delivery note,” add:

> Tie the review result to the reviewed files or version and record tested widths, enlargement method, interaction states and any not-applicable cases. Preserve superseded findings when another round is needed. Changed files or newly discovered material evidence require reassessing the earlier verdict; a previous pass is not approval of a later version.

Keep the wording tool-neutral. Do not require screenshots as the sole form of visual evidence when a native artifact viewer is more suitable for another medium.

**General benefit:** Reduces false failures from capture glitches and false confidence from tiny full-page images. Makes an independent review auditable without demanding exhaustive or duplicate testing after every harmless action.

**How to measure whether it helped:** Hand a reviewer a long page thumbnail, one deliberately defective capture, and a valid native-size detail. The reviewer should request/use sufficient legible evidence, identify the defective capture, and state which current version their verdict covers. In a new multi-round exercise, verify that a later CSS edit or new material failure invalidates the prior pass rather than silently inheriting it.

## Changes not recommended

- Do not force identical compositions across the three purposes. Their distinct rendered hierarchy is a successful use of the current identity/composition guidance.
- Do not add a Duke-specific ban on all broken display words, a mandatory minimum pixel logo size, a fixed color percentage, or a universal form/card template. These observations do not establish such rules.
- Do not require every demo to invent validation, dialogs or personal-data fields. The event's preselected native radio form has no invalid user state and needs no artificial error path. Existing “applicable checks” guidance is adequate; record not-applicable cases plainly.
- Do not present this review matrix as WCAG certification. Actual text size, useful reading width, interaction states and accessible behavior require distinct evidence; the proposed stress default helps expose failures but does not replace the formal standard or a broader accessibility audit.
