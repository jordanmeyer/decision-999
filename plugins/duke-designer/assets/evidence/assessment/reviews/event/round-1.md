# Event page — independent review, round 1

**Verdict: PASS** on 2026-10-02 for the exact public-file hashes below. No required implementation corrections. This is an independent review of the current example, not an accessibility certification or institutional approval.

## Version and scope

Assigned preview: http://127.0.0.1:8080/examples/event/

SHA-256 (verified again after testing):

| File in examples/event | SHA-256 |
| --- | --- |
| index.html | 06ab2df653666fd0c46a3c2431a94f5a0b030fb7f9f914a900539f8d34c2e1d0 |
| style.css | 0398450debeb52b374aaff45801e8670fe686d75e8071bf9c47c8278f57fe6f8 |
| script.js | dae4cb7c98bb537cdc4eeb71a012db889c4b15c0c2e1c56f6c30b7b4b3d5dd0d |
| assets/open-sans.ttf | 36643644f318a812aab2d2ed3bb98f8cf0872527f835fe9398d95fe6b9adb878 |

Read the complete skill and identity, color, typography, marks, web, review, sources, and imagery references. Read event HTML/CSS/JS and font license as supplements to the independent rendered inspection. No restricted resources or new interpretation of institutional policy was needed. `checks.json` contains the versions of all three comparison pages.

Browser: real Chrome 154.0.8037.97 through the bundled Playwright. Independent browser/context and independent screenshots. All three pages inspected at 1440×1000 and 390×844. Event also inspected at 320×800 and 1280×900 with enlarged text. Reduced-motion preference enabled for captures and verified to compute `scroll-behavior:auto`.

## Rendered observations

- Desktop: Navy hero has a clear headline/action hierarchy and a separate date/details column. The chronological agenda aligns times with sessions. Speaker personas are clearly separated without fabricated portraits. The warm registration section gives the action a distinct destination. Long introduction and agenda headings wrap without collision or clipping.
- Mobile: header navigation stays readable; hero details move below the invitation; the agenda and speaker columns stack in DOM order. All event details, labels, qualifiers, and footer remain visible. 390px and 320px document width equals viewport width, with no offscreen content detected. Actual longest headings, including “What does good leadership look like when the tools keep changing?” and “Beyond the technology: the leadership question,” are present and readable.
- Text enlargement: both doubling root font size (which also enlarges rem spacing) and independently doubling every computed element font size were inspected. Neither introduced horizontal overflow, clipping, overlap, or inaccessible controls at 1280px. Narrower columns become denser, but all content remains available. The second method specifically covers the viewport-based heading sizes that root enlargement alone does not necessarily double.
- Fonts: Chrome platform-font inspection confirms the headline uses the local Open Sans Roman Semibold font and the hero body uses Georgia. Open Sans loads with its declared 300–800 range. SIL OFL notice is retained. Blocking the local font deliberately at 320px invokes the fallback stack and still produces readable, nonoverflowing output.
- Fictional status: the top banner, concept-page subtitle, sample details, fictional speaker labels, registration wording, and footer consistently disclaim actual event/affiliation/endorsement. No faculty, findings, testimonials, real venue reservation, or real speaker affiliation is claimed. “Duke symposium” is ordinary sans-serif descriptive text, not a typeset imitation of the wordmark. No marks, unit identity, athletics identity, Health identity, photos, or logo buffer obligations are introduced.

## Behavior and accessibility checks

| Check | Independent result |
| --- | --- |
| Skip link | First Tab reveals a high-contrast link; Enter transfers focus to `main`. |
| Navigation | Agenda, Speakers, Registration, hero CTA, program link, and footer link all resolve to the correct actual section. |
| Keyboard order | Skip, site title, three nav links, hero action, program link, native radio group, submit, footer. No trap observed. |
| Radio group | Fieldset/legend and enclosing labels provide names. ArrowDown changes In person to Online; ArrowUp returns it. Selected dot and border provide more than color alone. |
| Completion | Enter on submit displays the correct chosen format, hides the form, and focuses the confirmation heading. Both formats exercised. No network submission occurs. |
| Return/reset | Enter on “Try another option” restores the form, preserves selected choice, and returns focus to that radio. Subsequent submission works. |
| Validation/error | Not applicable: one native radio is preselected and the user has no invalid/unselected state or editable personal-data field. No invented error path is required. |
| Close route | Not applicable: there is no modal. Completion has a working return action and normal navigation remains available. |
| Focus | Inspected skip, hero CTA, selected radio, and confirmation heading pixels. White ring against Navy and Navy ring against white/light backgrounds are distinct. |
| Labels/structure | One h1; section h2s and appropriate h3 descendants; main/nav/footer landmarks; real anchors and buttons. Arrow glyphs accompanying text actions are hidden from accessibility names where appropriate. |
| Errors/assets | No normal-run script, console, or local asset errors. Only recorded resource error was the intentionally blocked font during fallback testing; it is not a page defect. All ordinary observed requests are local GETs for page/CSS/JS/font. |

Actual computed flat text pairs were collected from visible text and calculated using WCAG sRGB relative luminance (`detail-checks.json`). Default ratios range from 10.79:1 (Dandelion/Navy) to 15.13:1 (Cast Iron/white). Navy/Whisper Gray is 13.20:1; Navy/Ginger Beer is 13.76:1. Primary hover is white/Royal, 7.75:1; warm CTA hover is Navy/white, 14.76:1. Selected label text remains Navy/light gray. Graphite unselected option boundary against white is 5.74:1; selected Navy boundary is clear against both its light interior and white exterior. Focus uses separate opaque Navy/white colors. No blue opacity change is used. Decoration-only thin agenda rules are not relied on as the sole control boundary or information cue.

## Findings by category

1. **Implementation defect — none.** Existing skill guidance is adequately implemented in the reviewed event version. No blocking or required correction is identified.
2. **Skill gap — none blocking.** The review did not require inventing a Duke-specific rule. Potential general improvements to the review process will be proposed only in the later cross-example assessment.
3. **Design preference — low, optional.** At 200% text the fixed desktop agenda/sidebar proportions create a tall, narrow section heading and more scrolling. Source: web.md’s content-driven breakpoint and readable-layout defaults, not a Duke rule. A container/content-aware stacked layout could make enlarged-text reading less vertical. It is not required for PASS because the rendered text and controls remain complete, readable, and free of two-dimensional scrolling. Do not implement this merely to force visual uniformity with the other examples.

## Cross-example comparison

All three current pages were actually rendered and their full desktop/mobile captures opened for visual inspection. Additional native-size mobile top captures confirm typography and small labels that become difficult to assess in scaled full-page images.

- Research uses a serif editorial headline, a restrained question panel, left overview navigation, a narrow long-form reading column, and project outlines. It gives explanatory content more reading space than the event page. Mobile stacks its overview and question panel without clipping.
- Student organization uses a bold invitation, yellow sample-session panel, broad Navy purpose band, activity columns, a dated event list, and membership prompt. Its desktop is more energetic and activity-focused. Mobile preserves that sequence and wraps navigation and event rows.
- Event uses the most prominent reversed Navy opening and clear date/program structure. Across all three, unchanged Navy, compatible typography, restrained warm accents, fictional labeling, and recognizable hierarchy establish consistency. Different headline families, panel proportions, and interaction arrangements are reasonable variations. No identical-layout requirement is warranted. This comparison is not an independent interaction verdict for the other two pages; their assigned reviewers own those verdicts.

## Evidence

All paths below are relative to `assessment/reviews/event/` and were generated by this reviewer:

- All-page captures, opened and inspected: `event-desktop.png`, `event-mobile.png`, `research-desktop.png`, `research-mobile.png`, `student-organization-desktop.png`, `student-organization-mobile.png`.
- Native-size mobile details, opened and inspected: `event-mobile-top.png`, `event-mobile-action.png`, `research-mobile-top.png`, `student-organization-mobile-top.png`.
- Event layout captures, opened and inspected: `narrow.png`, `text-200.png`, `text-200-registration.png`, `text-all-200.png`, `text-all-200-registration.png`, `fallback.png`.
- Focus/behavior captures, opened and inspected: `skip-focus.png`, `hero-focus-final.png`, `radio-focus.png`, `completion.png`.
- Measurements and reproductions: `checks.json`, `detail-checks.json`, `text-all-200.json`, `inspect.cjs`, `detail.cjs`, `final-detail.cjs`.

Capture qualification: the first `hero-focus.png` suffered a compositor capture defect that omitted text; `hero-focus-stable.png` was at the wrong scroll position after a hash-preserving reload. Neither supports the verdict. A fresh context produced `hero-focus-final.png`, which was opened and shows the complete hero and contrasting focus ring. Full-page captures show the complete sequential page, not repeated viewport tiles.

No essential requested check is outstanding. Screen-reader use, physical touch devices, and cross-browser conformance were not part of this bounded review. Later public-file changes invalidate this PASS and require a new round.
