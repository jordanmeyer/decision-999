# Event round 1 addendum — combined narrow width and enlarged text

**Current verdict: FAIL. This supersedes the round-1 PASS.** The public files are unchanged; broader testing revealed an implementation defect not exposed by checking narrow width and enlarged text separately.

Requested bounded follow-up: independently render 390px and 320px with all computed text sizes doubled, inspect headings/qualifiers/registration, and retain evidence. Completed in Chrome 154 through Playwright with fresh contexts, 844px viewport height, reduced motion. Each element's original computed font size was captured first, then set to exactly twice that value. Spacing and containers remain unchanged. No public files edited.

## Finding E1

**Implementation defect — high severity, correction required.** Mobile grid tracks and their children expand to a long heading's intrinsic minimum width at 200% text. The hero heading's “Leadership” and the speaker/registration heading's “conversation.” do not fit their intended columns. The 390px and 320px pages both report a 412px document scroll width. The hero grid children end at x=412.20; speaker and registration sections end at x=409.70. At 320px, the introduction also reaches x=323.23.

Actual pixels show the right ends of the enlarged hero heading outside the viewport; white lettering extends beyond the Navy background onto the white page in the full-page capture. Registration explanatory text and form/control content require horizontal scrolling; at 320px the right ends of the field legend, labels and completion content are outside the visible viewport. No-personal-information and illustrative-event qualifiers are affected by the expanded containers as well as the decorative headings.

Source: `references/web.md`, “Let long headings wrap naturally,” “Stack columns as space runs out,” and “Test text enlargement and reflow: 200% text sizing and a 320 CSS-pixel-wide viewport ... without lost content or two-dimensional page scrolling.” `references/review.md` also requires inspection for clipping/overflow and actual backgrounds. These existing requirements adequately resolve the issue; it is not a new Duke-specific rule or a design preference.

Concrete correction: allow mobile grid tracks/children to shrink to the available width, and provide a readable emergency wrap for genuinely overlong words. Ensure registration labels/buttons/confirmation content share that behavior. Do not mask overflow or shrink the text back down. Then recheck both widths with doubled text, all headings and qualification copy, and both registration completion/return states. Broad generic selectors are not mandated; the builder should use the simplest consistent rule appropriate to the page.

Registration submission still completes and moves focus to `confirmation-title` at both widths. This does not rescue the layout defect: completion content also extends beyond the visible viewport.

## Evidence

Files under `assessment/reviews/event/`:

- `narrow-text-checks.json`: widths, overflow element coordinates, completion result, exact hashes.
- `narrow-text.cjs`: independent reproduction.
- Captured and opened: `narrow-text-390.png`, `narrow-text-320.png`, `narrow-text-390-hero.png`, `narrow-text-390-registration.png`, `narrow-text-320-registration.png`, `narrow-text-320-completion.png`.
- Additional captured states: `narrow-text-320-hero.png`, `narrow-text-390-completion.png`.

SHA-256, unchanged from round 1:

| File | Hash |
| --- | --- |
| index.html | 06ab2df653666fd0c46a3c2431a94f5a0b030fb7f9f914a900539f8d34c2e1d0 |
| style.css | 0398450debeb52b374aaff45801e8670fe686d75e8071bf9c47c8278f57fe6f8 |
| script.js | dae4cb7c98bb537cdc4eeb71a012db889c4b15c0c2e1c56f6c30b7b4b3d5dd0d |
| assets/open-sans.ttf | 36643644f318a812aab2d2ed3bb98f8cf0872527f835fe9398d95fe6b9adb878 |

The prior normal-width and desktop-enlargement observations remain valid within their stated scope. The current page cannot retain PASS until E1 is corrected and independently rechecked.
