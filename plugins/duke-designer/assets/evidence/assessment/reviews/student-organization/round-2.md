# Student organization — independent review, round 2

**Verdict: PASS for the exact version below.** Both round-1 implementation defects are resolved. The reviewer made no public-page or shared-skill edits. This is an independent rendered/behavioral review, not an accessibility certification or institutional approval.

## Version and evidence

Reviewed 2026-10-02 using an independent Chrome 154.0.8037.97 session through Playwright. Read the builder's revision account and evidence as a handoff, then generated new reviewer screenshots and measurements rather than relying on the builder's results.

| Public file | SHA-256 |
| --- | --- |
| index.html | 919097077a2193ec34b7607ae98ae03a2893b765d7c7f441586b6c83b477cd43 |
| styles.css | 79fb926ff7cdd8d262be5a89ce0a57a9135b810bbae68c01ddc213d1592eb31d |
| script.js | 60ec1d148e2bcdd96f62fa08438c89e491a3742a3a70deb79b1e0f8bdac24bf6 |
| assets/open-sans.ttf | 36643644f318a812aab2d2ed3bb98f8cf0872527f835fe9398d95fe6b9adb878 |

Reproducer: `round2.cjs`. Independent recorded results: `round2/checks.json`. Prior-round evidence and verdict remain preserved.

Seven configurations, each 1000px high and device scale 1: normal 1440px, 390px and 320px; root font size doubled from 16px to 32px at 390px and 320px; all pre-captured computed font sizes independently doubled at 390px and 320px. Root enlargement also exercises the dynamically generated membership text. These simulations do not constitute a separate native-browser-zoom test.

## Resolution checks

**S1 — Implementation defect, resolved.** Every save button now visibly retains “Save event”; its accessible name begins “Save event: ” followed by its own event title. All three were activated twice using Space in all seven configurations: 42 state checks. Chrome accessibility snapshots show the visible phrase contained in the name for both pressed and unpressed states. The selected checkmark, contrasting Navy fill, `aria-pressed`, and event-specific status text distinguish the state without renaming the control. `round2/save-focus.png` shows the selected state and clear keyboard ring at 390px. This satisfies the previously cited label-in-name requirement within the skill's WCAG 2.1 implementation default.

**S2 — Implementation defect, resolved.** Each tested document width now equals its viewport width before and after interactions. No visible element exceeded the horizontal viewport; inspected headings, paragraphs, labels, actions and summaries had no internal overflow. Calendar date/detail/action now stack on narrow screens, keeping long titles, venue text and save controls inside their Ginger Beer surface. Hero and membership children shrink; large heading words wrap instead of widening the grid. The purpose panel's white text stays entirely on Navy. Full membership option labels wrap inside native radio choices, including “Responsible product decisions” at 320px enlarged. No clipped-overflow workaround or reduced font size was introduced.

Visually inspected all four `round2/{390,320}-{root,computed}-event.png` crops, enlarged membership crops and `radio-focus-320.png`, `320-root-top.png`, `320-computed-top.png`, purpose crops, and the generated enlarged result `320-root-completion.png`. These supplement normal full-page screenshots and measured bounds; the verdict does not depend on a scaled full-page image alone.

## Regression and design checks

- **Desktop/mobile render — pass.** Viewed `1440-normal-full.png`, `390-normal-full.png`, `320-normal-full.png`, plus readable element crops. The desktop invitation/workshop composition, three activities, calendar and membership hierarchy remain coherent. Mobile calendar rows are now taller but easier to follow. Normal-sized text is not forced into awkward character breaks.
- **Filters — pass.** Keyboard Enter produces the expected 2 workshops, 1 conversation, and 3 all-events rows in each configuration, with correct live count text.
- **Membership — pass.** Native fieldset has the accessible group name “I’m most interested in”; all three radios have their full visible names. ArrowRight changes from building to responsible decisions. Focus + Space selects each of the three options; Tab then Enter submits. All 21 option/configuration combinations return their correct distinct suggestion and explicit no-membership-created completion. Repeated submissions replace the output; reload hides it. No validation, close, or reset controls are present, so those states are not applicable.
- **FAQ/keyboard — pass.** Every disclosure opens and closes with Enter in all configurations (42 checks). Full baseline Tab traversal has a logical order and visible Navy outlines; footer focus remains Dandelion on Navy. New radio focus remains discernible on the white choice background at enlarged 320px, shown in `radio-focus-320.png`.
- **Reload — pass.** Saved choices clear and membership result hides in every configuration as the UI promises.
- **Brand/content — pass.** The unchanged Navy/Royal palette, Open Sans/Georgia pairing, plain-text identity and explicit fictional labels remain. No institutional mark, unsupported affiliation, research claim, faculty participation or testimonial was introduced. Prior all-three desktop/mobile comparison observations in round 1 still provide the comparison baseline; the student revision changes control/reflow behavior, not its overall design approach.
- **Color/font — pass in reviewed scope.** The original measured text/hover/focus pairings are unchanged. New radio labels use Cast Iron on white (15.13:1), Graphite borders on white (5.74:1), Navy selected accent and Navy/white focus treatment. Open Sans reports loaded in every independent configuration. The local licensed font file is unchanged.
- **Runtime/assets — pass with optional-resource note.** No page exceptions. HTML, CSS, JS and font returned 200 in a separate diagnostic load. Chrome emitted a single 404 console warning for its automatic request to `http://127.0.0.1:8080/favicon.ico`; this is outside the page's declared assets and has no effect on page content or interactions.

## Nonblocking observations, classified

**Design preference · Low.** At 320px with independently doubled text, the final period of the purpose heading wraps onto its own line. The complete heading remains visible against Navy, with no overlap or overflow. More editorial control could improve this extreme presentation, but it is not a missing-content or brand failure and does not require another correction round.

**Design preference · Low.** A favicon could remove Chrome's optional 404 and provide a tab identifier. No invented Duke mark should be used. It is not required for these local examples and is not a blocker.

No unresolved implementation defect remains. Skill-improvement proposals will follow the coordinator's request after all three current versions have passed.
