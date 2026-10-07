# Research review — round 1 — FAIL

Independent review on 2026-10-02. Assigned verdict: **FAIL** for `examples/research/`. One blocking implementation defect; the public files were not edited. Reviewers must recheck a corrected version before PASS.

## Version and scope

Public research SHA-256:

| File | Digest |
| --- | --- |
| index.html | a732b44d1e9ce5f39949a212cb6080aa0787698446ed51a5bb6dfbc76e917bbb |
| styles.css | fa20b2d2d49daa54e02df2aa7d84af6fcbc9e9bbc0a6f2b68de552dfc6488301 |
| script.js | 7464d554bc2c3922413f9167591f7755c938ad3d54e92c7f43b0a2c6a4f3c2b0 |
| assets/open-sans.ttf | 36643644f318a812aab2d2ed3bb98f8cf0872527f835fe9398d95fe6b9adb878 |

`round-1/manifest.json` also records the inspected cross-example HTML/CSS/JS/fonts/license versions. All three pages were recaptured after the parent confirmed their public files were frozen.

Read SKILL.md and identity, color, typography, marks, web, review, and sources references. No source conflict or unverified mark was found requiring further official-source resolution. No production imagery or university/unit mark is used. This is a bounded independent review, not accessibility certification.

Actual browser: headless Google Chrome 154.0.8037.97 through Playwright. Full-page screenshots at 1440×1000 and 390×844 for all three examples; research also at 320×1000. Visually inspected full-page captures plus legible viewport crops on mobile, focused controls, disclosures, longest heading, and enlarged-text states. Desktop and mobile comparisons concern visual/brand consistency; this reviewer does not issue the event or student page's behavioral verdict.

## Blocking finding

**R1 — Implementation defect — medium severity, blocks PASS.**

- Element: `.hero-note > p:first-of-type`, the white “Who decides. Who benefits. Who can challenge.” text.
- Reproduction: open research at 390 CSS px, enlarge text to 200%, scroll to the navy central-question panel. Reproduced using both `html { font-size: 200% }` and a text-only diagnostic that doubles every element's computed font size without changing container dimensions.
- Observed: “challenge.” is wider than the panel's content box, extends beyond the navy surface, and becomes invisible white-on-white. The text-only diagnostic reports 80px text, 286px paragraph width and 340px text scroll width; page scroll width is 392px. Root-size enlargement reports 182px paragraph width, 340px text scroll width, and 444px page scroll width. Screenshot inspection confirms the lost letters; this is not merely a geometry warning. The 320px + 200% diagnostic also has smaller body-word overflow, documented in `supplement.json`.
- Existing guidance: `references/web.md`, Build accessible behavior, requires testing 200% text sizing and narrow reflow without lost content; Content and responsive layout calls for natural wrapping and flexible layouts. `references/review.md` requires inspecting actual enlargement and clipping. Existing guidance is sufficient: **not a skill gap**.
- Correction: make the central-question paragraph and long prose words wrap within their available width at enlarged sizes; adjust panel spacing responsively if needed. Keep readable text rather than clipping or hiding overflow. Recheck desktop, 390px and 320px, including enlargement and open disclosures.
- Evidence: `round-1/research-text200-mobile-note-computed.png`, `round-1/research-text200-mobile-note-root.png`, `round-1/zoom-check.json`.

## Other results

- **Brand and truthfulness: pass.** Exact Duke Navy #012169 anchors type, panel and controls; it is neither faded nor recolored. Magnolia and cream have restrained roles. Ordinary title text does not impersonate a wordmark. Explicit fictional labeling appears in banner, header, purpose copy and footer. Project copy consistently distinguishes proposed question/method/output/limitations from results. No faculty, partner, testimonial, approval or conducted-study claims are invented.
- **Typography and hierarchy at default size: pass.** Chrome platform-font inspection confirms Georgia for the hero heading and embedded Open Sans for prose. The local font loads successfully. Georgia headings, a 760px reading column, section numbering and a separate overview rail support sustained reading. Mobile places the rail before the article without changing reading order. 17px primary prose and 16px theme/project prose are legible in viewport screenshots; small metadata remains secondary.
- **Ordinary reflow: pass.** Document scroll width exactly equals 1440, 390 and 320px at default text size; no offscreen boxes. The actual longest project title, “Learning from near misses without losing the context,” wraps cleanly at 320px. 200% text at 1440px retains content without page overflow, although the hero's emergency word break is visually less graceful. This does not mitigate R1 on mobile.
- **Keyboard and navigation: pass.** Traversed all 20 focusable controls in order using Tab. The skip link becomes visible, navigation reaches existing section targets, all controls show a 3px navy outline with a white separation halo, and no keyboard trap occurs. Focus is visible on selected/unselected filter buttons and disclosures. All internal destinations resolve.
- **Demonstration interactions: pass.** Keyboard-activated every filter: All=4, Accountability=2, Human judgment=1, Participation=1, then All restores 4. Exactly one button has aria-pressed=true; selected state adds a checkmark. Polite status text updates correctly. All four study outlines open on Enter and close on Space; visible mobile Participation outline also tested. The research page contains no form, modal, submission, validation or completion flow: these are not applicable.
- **Labels and structure: pass.** Meaningful main/section navigation labels, one H1, coherent H2/H3/H4 progression, fieldset legend, native button and details/summary controls. Repeated “Read study outline” controls sit within their titled article context. No image/media alternatives needed.
- **Contrast at contained/default states: pass.** Actual computed pairs measured, including hover and selected filters; ratios recorded in `contrast.json`. Lowest text pair is Graphite/white 5.74:1. Navy/white 14.76, Navy/cream 13.76, Magnolia/cream 6.49, white/Navy 14.76, Dandelion/Navy 10.79 and hovered Navy/Hatteras 11.79. Navy boundaries and focus against white/cream exceed 3:1. R1 creates a new white/white pair outside the panel and therefore remains a blocking loss of content.
- **Motion and loading: pass with environment note.** Reduced-motion emulation shows no active animations and auto scrolling. HTML/CSS/JS/font requests return 200; no script exception. Browser automatically requests `/favicon.ico`, which the local server answers 404. That optional server-root icon is not referenced by these pages and does not impair the demonstration; it is not treated as a blocking implementation defect.

## Cross-example observations

The event uses a full-width navy hero and a date/program/registration sequence; the research uses quieter white space, serif display headings, a reading rail and expandable project outlines; the student page uses yellow session framing, activity columns and a calendar/membership progression. The same unchanged navy, local Open Sans, restrained palette and prominent fictional qualifications make them coherent without identical layouts. Mobile stacking preserves the differing editorial rhythms. The absence of photography is a reasonable design choice for unverified fictional identities, not a brand failure.

**Design preference, nonblocking:** the research rail leaves substantial open space beside the long article after its initial contents list. This supplies calm reading space and is permitted by identity.md/web.md; a persistent rail or fuller page could be an alternative, but no correction is required. No skill-gap finding is asserted in this round; proposals are deferred until all examples pass.

## Evidence

All paths below are relative to this report's directory.

- Actual complete pages: `round-1/{research,event,student-organization}-{desktop,mobile}.png`.
- Mobile legible viewport inspections: `round-1/{research,event,student-organization}-mobile-{top,middle,bottom}.png`.
- Research keyboard/interaction: `research-skip-focus.png`, `research-keyboard-focus.png`, `research-outline-open-focus.png`, `research-mobile-open.png` within `round-1/`.
- Narrow/enlargement: `research-320.png`, `research-longest-title-320.png`, `research-text200-{320,390,1440}.png`, `research-text200-desktop-{top,projects}.png`, `research-text200-mobile-note-{computed,root}.png` within `round-1/`.
- Machine evidence: `round-1/checks.json`, `supplement.json`, `zoom-check.json`, `contrast.json`, `manifest.json`.
- Independent reproducible scripts: `inspect.cjs`, `supplement.cjs`, `zoom-check.cjs` in this review folder.

**Required next action:** builder corrects R1; reviewer inspects corrected actual output and records a new versioned round. Current verdict: **FAIL**.
