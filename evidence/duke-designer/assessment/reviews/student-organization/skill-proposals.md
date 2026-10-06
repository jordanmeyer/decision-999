# Proposed skill improvements — student reviewer

All three current pages have independent passes according to the coordinator: event round 3, research and student round 2. These are proposals only; neither the shared skill nor public examples were edited. Priority reflects repeatability and observed impact, not a new Duke requirement.

## 1. Make the text-enlargement procedure explicit

**Classification:** Implementation clarification. Existing `references/web.md` already requires 200% text enlargement and 320px reflow. The weakness was a test procedure that allowed these to be checked separately without exposing their combined failure.

**Observed issue and evidence:** The student page initially passed normal 320px and desktop 200% text checks, but failed at narrow widths plus enlargement. Root 200% produced a 401px document at both 390px and 320px; independently doubled computed sizes produced 331px at 320px. Calendar controls/text, hero and membership extended past the viewport. See `round-1.md` S2, `enlargement.json`, `events-320-root-200.png`, and `top-320-computed-200.png`. Round 2 resolves this with shrinkable layouts, wrapping and bounded spacing; `round2/checks.json` records equal viewport/document widths in all seven configurations. The research review independently found enlarged text leaving its contrasting panel, as reported by the coordinator; that finding also shows why document-width checks alone are insufficient.

**Do existing sources resolve it?** Yes. Flexible layout, natural wrapping, text enlargement, and no lost content already appear in the skill and its accessibility references. Neither a special Duke mobile breakpoint nor a new Duke accessibility mandate is needed.

**Proposed exact addition to `references/web.md`, “Inspect the output”:**

> Check enlargement on a narrow layout as well as on desktop. For a small responsive page, a useful bounded set is normal desktop, normal 320px, and approximately 390px with text enlarged to 200%; also check 320px enlarged when a narrow-layout defect or project requirement warrants it. Record the enlargement method. Doubling the root font size does not necessarily double text sized with pixels, viewport units or clamps; inspect representative computed sizes, or use a true text-size override. Check long words, full choice labels, control states and generated content. Verify that text stays on its intended contrasting surface, not only that the document has no horizontal scrollbar. Fix layout constraints; do not hide overflow or shrink the enlarged text to conceal a failure.

**Benefit:** A short, reproducible check catches intrinsic grid/flex minimum widths, rem-grown padding, clipped controls and text escaping colored panels earlier. The examples retain their different compositions.

**Measurable check:** Record viewport/document width, representative computed sizes and readable screenshots before and after interactions. Student's known failing round-1 version must fail the procedure, while its round-2 version must pass. Track whether future first drafts require an enlargement correction round.

## 2. Check visible labels against accessible names through state changes

**Classification:** Implementation clarification. Meaningful control names and WCAG 2.1 AA are existing guidance; label-in-name deserves a concrete check because an apparently more descriptive ARIA label introduced the defect.

**Observed issue and evidence:** Student's event buttons displayed “Save event” and then “Saved,” while their static accessible names were “Save [event title].” Neither visible phrase was contained correctly. Chrome's snapshot in `details.json` showed `button "Save Prototype an AI assistant worth using" [pressed]: Saved`. See `round-1.md` S1 and `save-focus-mobile.png`. Round 2 uses one stable visible “Save event” label with a matching accessible name, pressed state, checkmark and live feedback; 42 toggle-state checks confirmed the fix.

**Do existing sources resolve it?** Yes. This is [WCAG 2.1 SC 2.5.3 Label in Name](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html), already within the skill's stated implementation target. It is not a missing Duke brand rule. The skill currently says to give controls names but does not spell out the common ARIA-overrides-visible-text failure.

**Proposed exact addition to `references/web.md`, “Build accessible behavior”:**

> When a control has a visible text label, its accessible name must contain that text, preferably at the start. Avoid overriding a useful visible label with a different `aria-label`. Check the computed accessible name in every state that changes the label. For a toggle, a stable action label with a programmatic pressed state is often simpler than renaming it; otherwise keep the visible and accessible labels synchronized.

**Proposed addition to the accessibility bullets in `references/review.md`:**

> Compare visible control labels with computed accessible names in default and changed states; a descriptive name alone is not enough.

**Benefit:** Prevents well-intended disambiguation from breaking speech-input discoverability and reduces redundant state-update code.

**Measurable check:** Inspect browser accessibility snapshots for each changed control state. The visible label, ignoring decorative glyphs and insignificant punctuation, must be contained in the computed name. Include at least one repeat activation of toggle controls.

## 3. Require readable visual evidence, not just captured images

**Classification:** Implementation clarification. Actual rendering is already required; evidence at readable scale needs a practical reminder.

**Observed issue and evidence:** All-three full-page mobile screenshots were tall: initial event 390×5707, research 390×6546, student 390×5468. Displaying them at 2048px maximum height compressed their widths to roughly 120–146px. They showed overall composition but could not substantiate fine label, focus or clipping judgments. Viewport crops such as `student-organization-mobile-middle.png`, `membership-mobile.png`, and `save-focus-mobile.png` provided readable evidence. Round 2's element crops made enlarged calendar/radio wrapping directly inspectable.

**Do existing sources resolve it?** The skill's instruction to inspect actual output already establishes the obligation. No additional Duke source is needed; this is a workflow clarification, not a visual-brand standard.

**Proposed exact addition to `references/review.md`, near the opening evidence instruction:**

> A captured screenshot is evidence only after it has been viewed. Use full-page images to assess composition, and viewport or element close-ups when scaling makes labels, focus rings or clipping unreadable. If a screenshot shows a suspected paint artifact, confirm with a settled fresh render before treating it as a page defect. Record any area that remains visually unchecked.

**Benefit:** Keeps reviews honest and useful without prescribing a screenshot tool or a large fixed capture matrix.

**Measurable check:** Each layout/state finding must point to a viewed image in which the affected element is readable, plus any relevant measured bounds or behavior. A reviewer should be able to verify the finding from the saved evidence without rerunning the page.

## What should stay flexible

The three examples already demonstrate worthwhile variety: event uses an action/date-led Navy hero; research uses a serif editorial hierarchy and reading rail; student uses a warm workshop preview and participation flow. No common hero, mandatory card system, fixed color percentage or mandatory photograph should be introduced.

Replacing the student's select with three radios was a sound solution to its full-label and enlargement needs. Do not prescribe radios globally: require readable choices and keyboard operation, then let the builder choose the appropriate native control. Likewise, isolated punctuation at an extreme enlarged size and an optional favicon are minor design preferences, not reasons to grow the skill's mandatory checklist.

No true missing Duke-policy guidance was established by this review. These three additions improve implementation and verification of rules already present.
