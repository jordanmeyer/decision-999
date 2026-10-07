# Typography reference

Source: [S6 Typography](sources.md). These are Duke's listed families and weight inventories as checked 2026-10-02, not a guarantee that every installed/downloaded version supplies them. Each listed weight is described by Duke as having an italic companion. Verify actual font files before selecting a weight; do not synthesize missing styles without acknowledging the substitution.

| Family | Duke-recommended role | Weights listed by Duke |
| --- | --- | --- |
| EB Garamond | Headings, subheads, body; use care at small sizes | 400, 500, 600, 700, 800 |
| Open Sans | Body through bold headlines | 300, 400, 600, 700, 800 |
| Roboto | Web/digital headings and body; compact character width | 100, 400, 500, 600, 700, 900 |
| Georgia | Readable web serif; email/system-font situations | 400, 700 |
| Montserrat | Headlines and display | 100 through 900 in increments of 100 |
| Merriweather | Screen reading, including smaller body and headings | 300, 400, 700, 900 |
| Cormorant Garamond | Large headings and pull quotes; avoid small/dense settings | 300, 400, 500, 600, 700 |
| Playfair Display | Headlines, subheads, large quotes; not recommended for body/small text | 400, 700, 900 |
| Roboto Mono | Code, statistics, tabular data | 100, 300, 400, 500, 700 |

**Duke recommendation — sample heading/body pairings:** EB Garamond / Open Sans; Playfair Display / Roboto; Merriweather / Open Sans; Open Sans / Georgia. The specimens and pairings show alternatives, not a requirement to use every family. Garamond LT 3 and Interstate are legacy faces being phased out; Duke offers a request process for maintaining existing projects. The official wordmark remains official artwork and must not be replaced with ordinary text in any font.

## Fallbacks

Duke publishes these CSS stacks; retain the final generic family for systems without the preceding fonts:

| Family | Published stack |
| --- | --- |
| EB Garamond | `'EB Garamond', Garamond, Georgia, 'Times New Roman', Times, serif` |
| Open Sans | `'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif` |
| Roboto | `'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif` |
| Georgia | `Georgia, 'Times New Roman', Times, serif` |
| Montserrat | `'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif` |
| Merriweather | `'Merriweather', Georgia, 'Times New Roman', Times, serif` |
| Cormorant Garamond | `'Cormorant Garamond', Garamond, Georgia, 'Times New Roman', Times, serif` |
| Playfair Display | `'Playfair Display', Garamond, Georgia, 'Times New Roman', Times, serif` |

**Skill default for Roboto Mono:** `'Roboto Mono', ui-monospace, 'SFMono-Regular', Consolas, 'Liberation Mono', monospace`. Duke's code example lists serif fallbacks, which contradict the stated monospace role. This explicitly labeled implementation choice preserves columns if the font fails. It is not a revised official stack.

## Choosing and obtaining fonts

**Skill default:** Start with one official heading/body pairing; default to EB Garamond with Open Sans when context gives no stronger reason. For long reading, Merriweather or Open Sans body text may be more suitable. Avoid loading multiple display families merely for variety. Spacing and hierarchy depend on the medium; consult its reference.

Duke links to each family's Google Fonts page and the [Google Fonts implementation guide](https://developers.google.com/fonts/docs/getting_started). The Duke bulk ZIP requires sign-in. Use the linked provider's current family listing to obtain the actual styles required; legacy instructions about Google's collection drawer may no longer match its interface.

**Skill implementation practice:** Use the project's existing font-loading method, request only needed weights/styles, and provide fallbacks. A hosted font service is optional; self-host only files whose license permits it, retaining license notices. Check the downloaded font's license for redistribution/embedding; a brand recommendation does not grant a license. Do not redistribute Georgia or legacy font files merely because they are present on a system. No fonts are bundled here.

If an official font cannot load, use the published fallback stack for ordinary text, disclose the substitution and recheck wrapping and pagination. Georgia is an official system-font option. A fallback is not a replacement logo or authorization to change a unit lockup; use the approved mark file or defer its construction.

**Evidence caution:** Weight inventories/specimen images date from older font releases and may differ from current variable fonts. The sample paragraphs discuss historical “Prussian Blue”; use the dedicated [color reference](color.md) for current brand values, not specimen filler copy.
