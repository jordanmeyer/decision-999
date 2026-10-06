# Event independent review — round 3

**Verdict: PASS** for the exact current public-file hashes below. E1 and E2 are resolved. No required corrections remain. This is a bounded independent review, not accessibility certification or institutional approval.

## Current version

| File | SHA-256 |
| --- | --- |
| index.html | 06ab2df653666fd0c46a3c2431a94f5a0b030fb7f9f914a900539f8d34c2e1d0 |
| style.css | c28c6040c4b4336039b004e92dcfe9656783ead22e405cf9b73dc9f950b0fdca |
| script.js | dae4cb7c98bb537cdc4eeb71a012db889c4b15c0c2e1c56f6c30b7b4b3d5dd0d |
| assets/open-sans.ttf | 36643644f318a812aab2d2ed3bb98f8cf0872527f835fe9398d95fe6b9adb878 |

Read the revision-3 rationale and actual CSS changes. Performed new independent real-Chrome rendering and keyboard checks using fresh contexts; did not rely on builder screenshots as evidence. No public files edited.

## Test matrix and concrete observations

Chrome 154.0.8037.97, 900px-high viewports. Baselines: 1440px desktop and 390px mobile. Stress cases: 320px and 390px, each with (a) every original computed element font size doubled, and (b) root font size set to 200%, including the effect on rem spacing. Script, hashes, results and screenshots are in `assessment/reviews/event/round-3/`.

- **Readable registration at root200:** At 320px, both “In person” and “Online” now fit as whole labels. “Sample,” “option ·,” “Durham, NC,” and “Eastern Time” remain complete readable words/phrases rather than letter columns. The submit action wraps as “Complete / sample / registration.” 390px gives additional room. The correction changes available spacing, not the text size.
- **Computed200:** Both widths also preserve readable choice descriptions, privacy/demo qualifiers, and submit text. No content is hidden or reduced. The only removed mobile elements are redundant decorative button arrows, which were already aria-hidden; functional labels remain intact.
- **Completion/retry:** The chosen format and “No reservation was made…” notice read naturally. The large confirmation heading can break “registration” at 320px, but has sufficient width for comprehension; it is not a single-letter functional label. The return button keeps complete words. Visible Navy focus rings remain inside the white panel and around the selected radio with their contrasting white gap.
- **No lost content or overflow:** Every case reports document width exactly equal to viewport width. No visible element box extends outside the viewport. All four enlarged cases retain this result during initial form, completion and retry. Body text before/after enlargement is unchanged. Prior hero content remains on Navy; no white text escapes onto the white page.
- **Keyboard behavior:** In all four enlarged cases, ArrowDown selects Online; Tab/Enter submits; the confirmation reports Online and focuses `confirmation-title`. Tab/Enter retries and restores focus to the selected radio. ArrowUp followed by a second submission reports In person. No trap, lost selection, or focus loss observed.
- **Baseline regression check:** Desktop composition is unchanged. Normal mobile gains useful form width while retaining the invitation, date details, agenda, speaker sequence, action hierarchy and qualifications. No new clipping, collision or awkward baseline wrap observed.
- **Text size, color and assets:** Actual enlarged text remains visibly doubled in the captures; the new CSS changes spacing only and does not override font sizes or colors. The previously verified opaque Navy/white, Navy/Whisper Gray and Cast Iron/light surface pairs remain unchanged. The local font loads in every case; no script/resource errors recorded.

## Categorized findings

- **Implementation defect E1 — resolved.** Shrinkable tracks and emergency wrapping continue to prevent the former 412px-wide mobile grid expansion. The combined narrow/enlarged matrix confirms the closure.
- **Implementation defect E2 — resolved.** Capped outer gutters and adaptive form/control padding recover enough usable label width at 320px root200. Native radio size, enlarged text, readable labels and visible focus coexist.
- **Skill gap — none blocking.** Existing web/review guidance already requires readable reflow. Proposals to make the test procedure more explicit are deferred to the cross-example assessment.
- **Design preference — low, optional.** Oversized display headings may split a long word in narrow enlarged-text states. A different starting scale or typography could make those states more elegant, but current words remain legible and complete. No further implementation change is required for that preference.

## Viewed evidence

All paths relative to `assessment/reviews/event/round-3/`:

- Baselines opened: `1440-normal.png`, `390-normal.png`.
- All four registration, completion and retry sets opened: `{320,390}-{root,computed}-{registration,completion,retry}.png`.
- Additional hero captures opened: `320-root-hero.png`, `390-computed-hero.png`.
- `checks.json` records exact measured dimensions, empty overflow lists, successful keyboard states, font loads, no errors and version hashes. `inspect.cjs` reproduces the independent checks. Full-page enlarged captures and remaining hero captures are retained.

The round-1 report supplies the broader brand/contrast/semantics and all-three-page comparison review; its findings unaffected by the spacing correction remain applicable. The round-1 addendum and round-2 failures remain preserved as the history of E1/E2. This round explicitly supersedes the current FAIL. Later public-file edits invalidate this PASS. No essential requested check remains unverified; screen-reader, physical-device and cross-browser certification remain outside the bounded review.
