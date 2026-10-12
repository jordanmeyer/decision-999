# Color and contrast

Source: [S5 Colors](sources.md), checked 2026-10-02. Values below are transcribed, not converted between color systems.

**Duke recommendation:** Include at least one Duke blue in any project. Navy is the official academic blue; Royal also represents Duke and is described in connection with athletics, apparel and promotional material. Extended colors serve secondary/tertiary roles, including text, backgrounds, accents and actions. There is no published mandatory palette percentage.

**Duke rule:** Do not change the opacity or saturation of either Duke blue; meet applicable contrast standards. Avoid faded blue overlays, alpha-based hover states, and parent opacity that changes the blue. Choose another published solid color for a state when appropriate.

## Published palette

HEX and RGB are **screen** values. PMS (Pantone) and CMYK are **print** specifications; U means uncoated and C coated. Match the production process, not a screen screenshot.

| Color | HEX | RGB | PMS (print) | CMYK (print, %) |
| --- | --- | --- | --- | --- |
| Duke Navy Blue | #012169 | 1, 33, 105 | 280 U / C | 100, 85, 5, 22 |
| Duke Royal Blue | #00539B | 0, 83, 155 | 287 U / C | 100, 53, 2, 16 |
| Copper | #C84E00 | 200, 78, 0 | 166 U / C | 0, 76, 100, 0 |
| Persimmon | #E89923 | 232, 153, 35 | 1375 U / C | 0, 45, 95, 0 |
| Dandelion | #FFD960 | 255, 217, 96 | 114 U / 121 C | 0, 8, 70, 0 |
| Piedmont | #A1B70D | 161, 183, 13 | 382 U / 376 C | 54, 0, 100, 0 |
| Eno | #339898 | 51, 152, 152 | 3262 U / 326 C | 81, 0, 39, 0 |
| Magnolia | #1D6363 | 29, 99, 99 | 328 U / 323 C | 96, 16, 42, 57 |
| Prussian Blue | #005587 | 0, 85, 135 | 301 U / 7692 C | 100, 45, 0, 45 |
| Shale Blue | #0577B1 | 5, 119, 177 | Pantone Process Blue U / 7461 C | 100, 0, 1, 3 |
| Ironweed | #993399 | 153, 51, 153 | Pantone Purple U / 248 C | 35, 95, 0, 0 |
| Hatteras | #E2E6ED | 226, 230, 237 | 649 U / 656 C | 10, 2, 0, 0 |
| Whisper Gray | #F3F2F1 | 243, 242, 241 | Cool Gray 1 U / C | 4, 2, 4, 8 |
| Ginger Beer | #FCF7E5 | 252, 247, 229 | 9060 U / C | 0, 2, 15, 0 |
| Dogwood | #988675 | 152, 134, 117 | 7530 U / C | 10, 18, 25, 32 |
| Shackleford | #DAD0C6 | 218, 208, 198 | 7527 U / 2527 C* | 3, 4, 14, 8 |
| Cast Iron | #262626 | 38, 38, 38 | Black 3 U / C | 67, 44, 67, 95 |
| Graphite | #666666 | 102, 102, 102 | Cool Gray 10 U / C | 40, 30, 20, 66 |
| Granite | #B5B5B5 | 181, 181, 181 | 421 U / C | 13, 8, 11, 26 |
| Limestone | #E5E5E5 | 229, 229, 229 | Cool Gray 2 U / C | 5, 3, 5, 11 |

*Shackleford's coated value is **2527 C as published**. It appears anomalous; do not silently change it to 7527 C. Obtain Duke/print-provider confirmation before a Shackleford spot-color job; other media and colors can proceed. Screen values are unambiguous. White #FFFFFF appears in Duke's accessibility grid; no print-white formula is inferred.

## Checked screen pairings

**Skill defaults:** The following pairings were calculated from the exact HEX values, using WCAG sRGB relative luminance: linearize each channel, L = 0.2126R + 0.7152G + 0.0722B, ratio = (lighter L + 0.05)/(darker L + 0.05). Values display two decimals; pass/fail uses unrounded values. Opaque flat colors only; check actual computed colors and every state in the artifact.

| Foreground / background | Ratio | Suggested use |
| --- | --- | --- |
| White / Navy | 14.76:1 | Navigation, primary action, reversed text |
| White / Royal | 7.75:1 | Action or section field |
| Cast Iron / White | 15.13:1 | Body copy |
| Graphite / White | 5.74:1 | Secondary text |
| Navy / Hatteras | 11.79:1 | Information panels |
| Navy / Whisper Gray | 13.20:1 | Quiet sections |
| Navy / Dandelion | 10.79:1 | Highlight or action label |
| Navy / Persimmon | 6.33:1 | Warm accent/action label |
| White / Copper | 4.62:1 | Normal text, narrowly passes AA; keep fully opaque |
| White / Magnolia | 6.96:1 | Supporting section field |

All listed combinations pass AA for normal text. Text contrast does not prove a control boundary contrasts with its surroundings: for example, a Persimmon button on white needs a sufficiently contrasting outline or another boundary treatment if that boundary is needed to identify it.

**Failure examples:** White/Persimmon is 2.33:1 (fails even large text); White/Eno is 3.45:1 and Navy/Eno is 4.28:1 (fail normal text). Move the color to decoration, choose a passing text color/background, or revise hierarchy legitimately. Do not fade a Duke blue, round a near miss up, or enlarge every small label just to rescue a palette.

## Accessibility interpretation

**General accessibility practice — [S12 W3C](sources.md):** AA normal text requires 4.5:1; large text requires 3:1 (at least 18 pt regular or 14 pt bold, equivalent to 24 CSS px or about 18.67 CSS px). Essential non-text graphics and control-identifying visual features need 3:1 against adjacent colors under WCAG 2.1. Provide non-color cues for links, errors and chart series. Check focus against each adjacent surface, not just the page background.

**Source qualification:** Duke's [grid](https://brand.duke.edu/color-accessibility-grid/) uses AAA, AA, AA18 and DNP labels. AA18 is large text only. Some displayed values are rounded/truncated inconsistently (Navy/Dandelion says 10; calculation is 10.7857). Use exact-color calculations to evaluate actual output. The grid is not a blanket accessibility certification. [Web guidance](web.md) distinguishes Duke's dated 2.0 requirement and 2.1 recommendation from this skill's implementation checks.
