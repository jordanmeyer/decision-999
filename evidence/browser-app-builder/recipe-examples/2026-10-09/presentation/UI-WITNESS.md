# Coordinator presentation witness

Production `http://127.0.0.1:9518/bab-example-presentation/`, initial reviewed implementation9f7d276, 2026-10-09. The following are actual CUA interactions, not inferred source tests.

Keyboard-only focus of the deck followed by Right advanced from slide1 to2 to3. A focused quantity Up changed100to101 without leaving slide3, marked edits pending and disabled decision copy. Applied19.99/12.34/66/500.01 with Enter: revenue1319.34, variable814.44, contribution7.65, profit4.89, threshold66. Invalid19.999 focused price with aria-invalid, preserved4.89 and disabled copy; Restore recovered the applied inputs.

Sensitivity entered after initial hidden render and reentered repeatedly retained one SVG and exact table. Fixed reference comparison showed300/−100/100 and current4.89 separately. Copied actual decision record contained current inputs, arithmetic, assumptions and validation steps; speaker/context notes were accessible. A focused comparison table's Right key preserved slide5. In the320frame, native Shift-Tab/Right reached that table and moved scrollLeft121.212px without slide navigation.

All six slides at320CSSpx measured document319/319 and section292/292. Six actual screenshots were visually inspected: controls and text readable; long content has per-slide vertical scrolling and wide tables scroll locally. The one-cent boundary price10/cost0/quantity10000/fixed99999.99 rendered separated zero/−100K ticks with the exact0.01 in the table. The maximum-loss chart displayed−$10.1M without label collision. Negative margin with zero fixed showed onlyzeroquantityavoidsloss; zero margin/zero fixed showedeveryvolume; positive fixed/zero margin showednofinitequantity.

## Required findings

1. Reveal's hidden current-slide announcement stayed at the prior0.01 after applying the−10,100,000scenario, while visible values correctly changed. Requested a supported current-slide announcement refresh without losing focus/scroll.
2. The valid largest currency card at320 wrapped as minus / $10,100,00 / 0.00. `narrow-maximum-card.png` preserves this readability failure. Requested a fitting, unbroken exact amount.

Both findings were sent to the developer and persistent reviewer. No final PASS is claimed here; corrected-source rechecks follow below. The initial frame locator keyboard action failed in the browser provider; native keyboard input subsequently succeeded and is the evidence described above.
