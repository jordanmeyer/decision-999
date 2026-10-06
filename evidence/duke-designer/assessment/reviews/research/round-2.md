# Research review — round 2 — PASS

Independent recheck on 2026-10-02. **PASS** for the research public version identified below. Round-1 defect R1 is resolved. No remaining blocking finding in the tested scope. No public page or shared skill was edited by this reviewer.

## Exact version

| File | SHA-256 |
| --- | --- |
| index.html | a732b44d1e9ce5f39949a212cb6080aa0787698446ed51a5bb6dfbc76e917bbb |
| styles.css | aa56e61cb7ed0398674ff62e61c77226aeccac1a060a2026b42195d5901cb0c0 |
| script.js | 7464d554bc2c3922413f9167591f7755c938ad3d54e92c7f43b0a2c6a4f3c2b0 |
| assets/open-sans.ttf | 36643644f318a812aab2d2ed3bb98f8cf0872527f835fe9398d95fe6b9adb878 |

The only public change is inherited `overflow-wrap:anywhere` on body. HTML, script and font hashes match round 1. This pass applies only to this version; later public changes require recheck.

## Independent evidence and findings

Google Chrome 154.0.8037.97 via Playwright, actual local rendering. Repeated all combinations of 1440, 390 and 320 CSS-pixel widths with default text, computed-font-size doubling, and root `font-size:200%` (nine layout cases). Each case includes an open study outline. Captured full pages and viewport images of the navy central question and open prose panel. Visually inspected desktop/mobile default pages, both enlarged mobile methods at both narrow widths, and the corresponding open-outline images.

- **R1, implementation defect: resolved.** The previously disappearing “challenge.” now wraps within the navy panel, retaining every letter in white on navy. The panel's scroll width equals its client width in every case, and document width exactly equals 1440, 390 or 320px respectively. The enlarged long prose words also wrap without escaping the cream study panel or creating horizontal page scrolling.
- **Interaction regression: pass.** Keyboard-operated Accountability, Human judgment, Participation, then All: visible proposal counts are 2, 1, 1, 4, matching the updated live status. Exactly one pressed filter remains selected. Every disclosure independently opens on Enter and closes on Space. Visible 3px navy keyboard focus remains on the active summary. No script exception.
- **Default composition: pass.** The new wrapping fallback does not change normal desktop/mobile layout: the research reading rail, restrained palette, Georgia display hierarchy and Open Sans prose remain intact. The longest actual project heading remains readable in the mobile interaction screenshot.
- **Geometry flag assessed, not a defect:** the rotated decorative plus on an open summary contributes 8–17px beyond that summary's content width in some cases; screenshot inspection shows it is visible within the surrounding page/focus region, does not obscure copy, and does not add page scrolling. No required correction.
- **Design preference, nonblocking:** at the combined smallest width and largest text setting, emergency word breaks are visually coarse, and some punctuation takes its own line. Content is preserved, navigation remains operable and the page scrolls only vertically. Reducing panel padding in that condition could improve rhythm, but is not necessary for this pass. Existing skill guidance permits responsive choices; this is not a new Duke rule or skill gap.

The unchanged brand, factual-labeling, font-loading, normal and state contrast, navigation, semantics and reduced-motion checks from round 1 remain applicable. This round specifically retests the effects of the changed inherited wrapping behavior and interactions it could affect. All three actual pages were independently inspected at desktop/mobile in round 1; this recheck only changes the research verdict, not the other reviewers' verdicts. No current skill-gap finding is claimed; improvement proposals remain deferred until all pages pass.

## Evidence locations

Within `assessment/reviews/research/round-2/`:

- `checks.json`: version hashes, all nine width/enlargement metrics, interaction results, browser and script-error results.
- `{1440,390,320}-{default,computed,root}-full.png`: complete pages with first disclosure open.
- `{1440,390,320}-{default,computed,root}-note.png`: central-question viewport evidence.
- `{1440,390,320}-{default,computed,root}-outline.png`: long prose/open-outline viewport evidence.
- `interaction-focus-mobile.png`: longest actual project heading and focused disclosure.

Independent reproduction script: `assessment/reviews/research/recheck-2.cjs`.

This is a scoped independent design/accessibility review, not certification. The previously documented optional `/favicon.ico` server-root limitation is unrelated to the corrected page content. **Final research verdict for this version: PASS.**
