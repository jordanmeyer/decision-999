# Evaluation — Desk / Day

Current status: **41/41 numerical checks pass in Node and the actual browser**. Coordinator production rechecks passed at executable checkpoint `f21d9f2b5eebd74ba33cfc34872629c73c1d9ad8`. Independent final reviewer verdict is pending in reviewer-owned REVIEW.md; no publication is claimed. Earlier pending statements below preserve the sequence and are superseded by the final witness section.

## Numerical evidence

Tests import the actual pure model. They cover baseline revenue200,000c/variable120,000c/contribution800c/profit30,000c/threshold63;62-unit−400c versus63-unit+400c;50-unit−10,000c;price1800c giving10,000c and84 units;one-cent contributions; zero/negative margin and zero/positive fixed costs; threshold outside supported range; maximum exact surplus990,000,000c and loss−1,010,000,000c; cent parsing and malformed/empty/negative/exponent/excess precision/out-of-range fields; adaptive quantities, exact formatting and current decision text.

The independent reviewer separately checked price19.99/cost12.34/fixed500.01: contribution765c, threshold66, quantity65 profit−276c and66 profit489c. Reviewer also exhaustively checked every supported current quantity0..10,000: sensitivity includes zero/current, unique bounded integer points and an above-current point whenever possible. This is reviewer source/model evidence, not a browser-render claim.

## Build evidence

Clean npm ci completed, canonical dependency checker passed, production build passed without warnings, and runtime license notices were generated. Source, expected prefix and notices links are present. These checks do not establish rendered behavior.

## Original UI acceptance checklist — superseded by final witness

Verify all six slides at desktop and320/390 frames, progress/nav, focused input arrows without slide changes, Enter submit, no hidden clipping, supported maximum/zero/negative cases, sensitivity hidden-to-visible reentry and table, fixed/current comparisons, pending/invalid/restore, actual clipboard contents/fallback, native history before interaction and disposal. The developer's current CUA inventory has zero browser surfaces after interruption of an earlier SQL download; coordinator has an independent browser. Attribution will distinguish its observations from developer checks.

## Preserved failures

Independent source review found a supported near-zero tick collision: price$10/cost$0/quantity10,000/fixed$99,999.99 produces a one-cent positive endpoint next to the zero label. Both tick positions differed by about0.00002px. The chart now always retains zero and omits another y-axis tick within22px. Exact values remain in the table. The left gutter increased to80px to accommodate the maximum-loss compact label; actual narrow rendering remains to be witnessed. No arithmetic changed. Current source reviewed; rendered output unverified.

Independent source review of pinned Reveal6.0.2 found that its 'focused' condition follows internal pointer focus, not DOM keyboard focus. This could leave keyboard-only deck arrows inactive and steal table-scrolling arrows after a click. The app now enables Reveal shortcuts only when the deck element itself is document.activeElement. Child inputs/buttons/tables keep native keys. Root must verify keyboard-only deck focus/arrows and table Right without a slide change. This is a source-identified defect, not an invented rendered failure.

## Independent production round: two required fixes

The coordinator observed stale Reveal live-region content after changing the applied scenario on slide3: its accessibility snapshot still contained the prior$0.01 result while the visible card correctly showed−$10,100,000.00. The app now calls the public slide(currentIndex) API at the end of its atomic render. Pinned source inspection confirms this refreshes the native current-slide announcement without a slidechanged event. Internal announceStatus/getStatusText are not on the returned public API and were deliberately not called. Root must recheck current result announcement, active slide, scroll and focus.

The coordinator also observed the maximum supported loss wrapping across three lines at320, splitting the number. The card now uses its own content width and the bounded amount length to choose a readable font size, preserves a16px minimum, and prevents money wrapping. The amount remains exact. Ordinary amounts can still use larger type. The failed screenshot narrow-maximum-card.png is preserved in campaign evidence; actual recheck remains pending.

## Final independent production witness — f21d9f2

The coordinator's actual CUA witness is recorded in the campaign file `presentation/UI-WITNESS.md`. It tested the production prefix with executable checkpoint `f21d9f2b5eebd74ba33cfc34872629c73c1d9ad8`, not a development-only build. The developer did not have an enabled browser surface for these observations and does not present them as its own render checks.

Keyboard-only deck focus and Right advanced slides1→2→3. Quantity Up changed100→101 without navigating, marked edits pending and disabled decision copy. Native Enter applied19.99/12.34/66/500.01: revenue$1,319.34, variable$814.44, contribution$7.65, result$4.89, threshold66. Invalid19.999 focused the price field with aria-invalid, retained$4.89 and disabled copy; Restore recovered the applied input values. The actual copied record included current inputs, arithmetic, assumptions and validation steps. Speaker/context notes were accessible. Clipboard-denial fallback was not independently exercised.

Sensitivity repeatedly entered from a hidden slide retained one SVG and its exact table. Fixed reference rows stayed$300/−$100/$100 while current$4.89 was separate. At320, native keyboard horizontal table scrolling moved121.212px without leaving slide5. All six320px slides measured319px document client/scroll widths and292px section widths; screenshots were visually inspected for readable controls/text, per-slide vertical scrolling and local table scrolling. A1440px production sensitivity view was also visually inspected and captured in `desktop-chart.png`. No390px-specific observation or cross-browser guarantee is inferred.

The near-zero boundary price$10/cost$0/quantity10,000/fixed$99,999.99 showed separate zero/−$100K ticks and exact$0.01 in its table. The maximum-loss chart's−$10.1M label fit. Negative contribution/zero fixed correctly said only zero quantity avoids loss; zero contribution/zero fixed said every volume; positive fixed/zero contribution said no finite quantity.

Both required rendered findings were independently closed. Applying the maximum-loss case on slide3 refreshed the native announcement to−$10,100,000.00 with matching cost and threshold content. At320 the exact amount was on one readable line, documented in `narrow-maximum-card-corrected.png`; the earlier failed capture remains preserved. On the main desktop app, applying price$18 preserved active slide3, focus in the fixed-cost input and section scroll0 while the visible result and native announcement both changed to$100/84units.

The actual browser test page reported41/41. Back from that page after a nondefault applied scenario, pending edit and slide5 restored slide1,20/12/100/500 inputs and baseline$300/63 before interaction. This verifies the observed native history path, not bfcache persistence. Console errors/warnings were empty. Host navigation to the local notice text was blocked; file presence and paths were checked separately, so no claim depends on that failed navigation. No model or source change was required after the corrected checkpoint. Independent reviewer decides final acceptance.
