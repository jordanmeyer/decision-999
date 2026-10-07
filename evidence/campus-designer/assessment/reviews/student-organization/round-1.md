# Student organization — independent review, round 1

**Verdict: FAIL.** Two blocking implementation defects: event-save accessible names omit visible labels; narrow screens with enlarged text overflow. No public files were edited by the reviewer.

Reviewed 2026-10-02 in independently launched Chrome 154.0.8037.97 through Playwright, headless, device scale 1. Desktop: 1440 × 1000; mobile: 390 × 1000; assigned-page reflow: 320 × 1000; enlarged text: 1440 × 1000 with root font size changed from 16px to 32px. Actual rendered screenshots were captured and visually inspected, including viewport-sized close-ups to avoid relying on scaled full-page images. Read the skill plus identity, color, typography, marks, web, review, and sources references. Read the font's retained OFL notice. For the label finding, read W3C's primary explanation of WCAG 2.1 SC 2.5.3.

## Current version

Full SHA-256 manifests for all three pages and their HTML/CSS/JS/font files are in `checks.json` → `versions`. Assigned page:

| File | SHA-256 |
| --- | --- |
| index.html | 134d88c8edea96b717e9649b6909fb866e3a74b81858a7144bb1d77bee8f1ab3 |
| styles.css | 5a673cc28f3e261ed1c5adfedf7d01b3782682f7b8ee2ae187c76dceecfad808 |
| script.js | a369d40e6273bb654f7b4422ab344e407cdb4ced2db77c68c9b59f196eb40877 |
| assets/open-sans.ttf | 36643644f318a812aab2d2ed3bb98f8cf0872527f835fe9398d95fe6b9adb878 |

## Blocking finding S1

**Implementation defect · Medium · All `.save` buttons in index.html; their state update in script.js.**

The initial rendered label is “Save event,” while its accessible name is “Save Prototype an AI assistant worth using” (equivalently, the other event title). “Save event” is absent. After keyboard activation, the visible label changes to “Saved” but the accessible name stays “Save Prototype an AI assistant worth using.” Chrome's accessibility snapshot confirms `button "Save Prototype an AI assistant worth using" [pressed]: Saved`. This can prevent speech-input users from invoking controls by their visible text. The pressed state correctly updates, but does not fix label/name mismatch.

Evidence: `checks.json` save/remove results for all three buttons; `details.json` accessibility snapshot; `student-organization-mobile-middle.png` for default labels; `save-focus-mobile.png` for the saved label and visible focus.

Existing guidance: `references/web.md` sets WCAG 2.1 AA as the implementation default and requires meaningful control names and interaction-state checks. [WCAG 2.1 SC 2.5.3 Label in Name](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html) requires the accessible name to contain the visible text label. This is an implementation defect under that existing default, not an invented Duke brand requirement.

Correction: ensure both visible states are contained in the computed accessible name. A small, coherent approach is to keep the visible toggle label “Save event” in both states, retain `aria-pressed` and the checkmark as the state cues, and name it “Save event: [event title]”. Alternatively synchronize the accessible name with each changing visible label. Recheck all three controls in both states by keyboard and with Chrome's accessibility snapshot.

## Blocking finding S2 — bounded follow-up from cross-example evidence

**Implementation defect · Medium · Narrow `.hero`, `.membership`, and `.event` layouts at 200% text.**

After another reviewer exposed a combined narrow-screen/enlarged-text defect, the coordinator requested the same bounded check here. At 390px with a 32px root, the document becomes 401px wide: calendar detail and save controls extend to x=400.56. At 320px with that root, the hero grows to x=374.36, membership to x=358.78, and calendar to x=400.56 (401px document). Independently doubling every element's captured computed font size, while preserving initial layout dimensions, produces a 331px document at 320px because the hero grows to x=330.97; 390px computed-font enlargement passes. Viewport screenshots show visibly clipped calendar text/save controls and the enlarged hero running off the right edge. The Navy purpose panel retains its text here; the research page's white-on-white failure did not reproduce.

Evidence: `enlargement.json`; visually inspected `top-320-computed-200.png`, `top-320-root-200.png`, `events-390-root-200.png`, `events-320-root-200.png`, all four `purpose-*-200.png`, and full-page combined-size captures. The hidden one-pixel filter live region's intentional clipped content is excluded from the defect.

Existing guidance: `references/web.md` explicitly calls for 200% text enlargement and narrow reflow without lost content or two-dimensional scrolling, flexible columns, naturally wrapping headings, and readable actions. Correction: allow narrow grid/flex children to shrink and wrap, avoid intrinsic minimum widths from long headings/CTA labels, and let calendar date/detail/actions stack or otherwise fit the enlarged content. Do not hide overflow or shrink text to mask the issue. Recheck 390 and 320 at both normal and enlarged text, including text remaining inside its intended surface.

## Observations and completed checks

- **Brand and scope — pass.** Unmodified Navy #012169 anchors the page; Dandelion workshop panel and Ginger Beer calendar/form have distinct secondary functions. Hover uses solid Royal #00539B. No faded blue, official mark, constructed unit lockup, athletics, Health identity, or claimed recognition. The title “AI + Product Club” is ordinary text, with “A concept for Duke MBA students” subordinate. Prominent top notice, mission wording, sample calendar, membership completion, FAQ, and footer consistently label fiction. No invented actual faculty, partners, findings or testimonials.
- **Typography — pass.** Open Sans variable face reports loaded at 300–800; the used 400/600/700 styles fit. Georgia is the body system face, an official listed option. Open Sans/Georgia is an official sample pairing. Font license retained. Desktop body is 18px with 1.65 line height; headings and reading measure are comfortable. Small metadata is subordinate yet legible in viewport close-ups.
- **Composition — pass.** Large invitation and workshop preview form the desktop lead. Full-width Navy purpose band separates the invitation from activities; three activity columns, a compact calendar and a membership panel create an intentional progression. Mobile stacks in a sensible DOM order; workshop steps keep their labels aligned. No images are used, so photo rights/alternative text checks are not applicable.
- **Reflow/enlargement — partial pass, overall fail S2.** At normal text, scroll width equals viewport width at 1440, 390 and 320px. All 14 headings fit their containers at normal-text 320px and at desktop root-text 200%; no element crosses the right viewport edge in those initial cases. The long event question wraps without clipped words. At desktop 200% text, hero and membership naturally become single-column, activities use two columns, and controls remain readable. Initial evidence: `student-320.png`, `student-200percent.png`. Combined narrow and enlarged text fails as detailed in S2.
- **Contrast — pass for inspected combinations.** Actual computed foreground/background pairs, including feedback, include Navy/white 14.76:1, white/Navy 14.76:1, Cast Iron/white 15.13:1, Graphite/white 5.74:1, Navy/Dandelion 10.79:1, Cast Iron/Dandelion 11.06:1, Navy/Ginger Beer 13.76:1, Cast Iron/Ginger Beer 14.11:1, and Graphite/Ginger Beer 5.35:1. Hover white/Royal is 7.75:1. Save selected state is white/Navy; control boundaries are Navy or Graphite. White spacer plus Navy focus outline is visually clear on white/cream/yellow, and footer uses Dandelion against Navy. Decorative gray rules do not identify controls.
- **Keyboard/focus — pass except S1 names.** Tab traversal visits skip link, club link, three navigation links, hero CTA, workshop link, three filters, three save buttons, labeled select, submit, three FAQ summaries, and footer link in visual order. Focus is visible in captured default/selected states. Enter activates filters and FAQ; Space toggles saving. Membership submit works from keyboard. No modal/trap exists. Skip link reaches main content; section links scroll to their real section targets. Reduced-motion context computes `scroll-behavior:auto`.
- **Filters — pass.** Workshops gives 2 visible events, Conversations 1, All events 3. Only one filter has pressed=true; live region reports the count. Hidden rows disappear and do not retain visible controls.
- **Save behavior — functional pass, naming fail S1.** Each of three rows toggles pressed state, visible text/checkmark, and event-specific live feedback. Second activation removes selection. Reload clears saved choices as promised.
- **Membership — pass.** All three options produce the correct distinct suggestion, real local anchor, and explicit completion notice that no membership was created. Repeated submissions replace the result. There are no required free-text fields, invalid user-input states, reset button or dialog close state to test; these are not applicable. Reload hides result. No personal information is requested.
- **FAQ — pass.** All three summaries open and close the associated content; keyboard operation works. The final answer explicitly says the organization is not active.
- **Assets and errors — pass.** No page exceptions or HTTP responses ≥400 observed across six independent desktop/mobile loads. Local font loads successfully. The source contains only local CSS/JS/font references. This review is scoped evidence, not a full accessibility certification or institutional identity approval.

## All-three rendered comparison

Captured and viewed `event-1440.png`, `event-390.png`, `research-1440.png`, `research-390.png`, `student-organization-1440.png`, `student-organization-390.png`, plus each page's `*-mobile-top.png`, `*-mobile-middle.png`, `*-mobile-bottom.png` at unscaled 390px width.

Event gives date/registration prominence through a Navy hero, yellow action and agenda rows. Research gives sustained reading priority through a serif headline, narrower text column and overview rail; mobile moves the overview above the text. Student gives activity and participation priority through the warm workshop panel, calendar rows and membership suggestion form. All three share unchanged Navy, clear type hierarchy, restrained secondary colors, visible fictional framing and structured spacing; they do not force an identical composition. All six render widths equal their document scroll widths. The research page is visibly denser and longer, appropriate to its content brief. Event/research behavior is owned by their respective independent reviewers; these are comparison observations, not substitute passes.

## Evidence files

`checks.json` preserves versions, console/network results, font loading, interaction results, computed colors, focus styles, reflow metrics and heading measurements. `details.json` preserves the save accessibility snapshot, section anchors and reduced-motion result. `check.cjs` and `details.cjs` reproduce this evidence without changing public files. Focus/completion images include `keyboard-0.png`, `keyboard-7.png`, `keyboard-18.png`, `save-focus-mobile.png`, `faq-focus-mobile.png`, `membership-completion.png`, and `membership-mobile.png`.

No additional blocking findings or skill-gap findings were established in this round. No design-preference change is required. Skill-improvement proposals are deferred until all three pages pass, as requested.
