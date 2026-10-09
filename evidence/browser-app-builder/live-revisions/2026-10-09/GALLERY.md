# Gallery verification

The course gallery now describes the nine revised live applications and uses fresh production screenshots. An independent review checked the descriptions, library combinations, evidence links and the total of 285 browser cases.

The coordinator inspected the built page in the in-app browser at loopback port 8000, under `/decision-999/`. A temporary iframe provided desktop and narrow widths without changing the user's browser settings.

| Requested frame width | Observed client width | Scroll width | Result |
| ---: | ---: | ---: | --- |
| 1440 | 1439 | 1439 | No horizontal overflow; nine expected application links and nine loaded previews. |
| 390 | 389 | 389 | Readable stacked cards; titles, descriptions and build-story links fit. |
| 320 | 319 | 319 | No horizontal overflow. |

Keyboard Tab moved from an application title to its build-story link. Enter on the ChatGPT & Codex copy control produced “Copied to the clipboard.” The clipboard read API returned no text, so this establishes the observed UI response, not an independent clipboard-content check. No installation command was executed.

See [desktop capture](gallery-desktop.jpg) and [narrow capture](gallery-narrow.jpg). Review caught a torn map preview and two links pointing to earlier review rounds; the corrected image was visually inspected and links now point to the current independent reviews. Source snapshots were checked against their recorded Git commits; generated bundles and dependency directories are excluded.

Repository build, boundary validation, Claude plugin validation and whitespace checks pass. The publication index preserves the repository's committed configuration so unrelated local featured-order edits are not published with this work.
