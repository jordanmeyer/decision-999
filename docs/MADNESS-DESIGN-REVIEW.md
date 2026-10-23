# Tournament Atlas (bab-example-madness): design review

This review covers https://jordanmeyer.github.io/bab-example-madness/ (asset `main-Dl6dz9Jv.js`, source `6766f11`) as of October 10, 2026. It was rendered at 1024, 1313 and 375px wide. Each of these states was checked: the opening bracket, hover, a pinned team, a late snapshot (Mar 25), Results, Table, 2020, 2025 and the build-story page. The checks combined measured computed styles and contrast with screenshots. The standard is `campus-designer` (identity, color, typography, web and review references), not fidelity to FiveThirtyEight. P1 items have the largest aesthetic payoff or break a brand rule, P2 items are visible defects, and P3 items are polish.

**Verdict.** The page speaks three visual languages at once. The shell is an editorial Duke page: EB Garamond headlines, Open Sans and navy rules. The bracket is a 2015 FiveThirtyEight graphic: Arial, near-black blocks and 10px labels. The table is a solid navy heat map. Each works on its own; together they look like three products. The highest-leverage fixes are:

1. One column width.
2. A lighter bracket with a distinct selection state.
3. One sans-serif with a 12px floor.
4. A timeline that reads as a calendar.
5. A table whose emphasis matches the question being asked.

## Layout and hierarchy

- [ ] **P1 · Put everything on one column.** `main` is 1,420px and left-aligned, while the bracket is a fixed 1,004px and centered (`style.css:26`, `:67`). At 1313px the masthead, toolbar, timeline and First Four start at x=10 but the bracket starts near x=155, so the page has two left edges and two right edges. Constrain the explorer (toolbar, timeline, help row, bracket, First Four, team detail) to the bracket's width plus gutters and center it. Keep prose sections at about 65ch inside the same column.
- [ ] **P2 · Merge the four stacked titles.** Before the first control the page shows the wordmark "Tournament Atlas", the eyebrow "Men's college basketball · 2016–2026", the H1 "The road to a title." and a dek. Make "Tournament Atlas" the H1 in the masthead row, keep "The road to a title" plus the dek as one subtitle line, and drop the eyebrow. That saves about 70px on desktop and more on phones.
- [ ] **P2 · Use the bracket's empty center.** At rest, the 145 × 300px center holds only "Hover over each slot to see the team most likely to get there." Show the five highest title chances as a small ranked list instead (Houston 22%, Alabama 16%, Texas 8% …). That states the lesson (even the favorite is a long shot) and invites hovering. In Results, show the champion and the title-game score there.
- [ ] **P2 · Move the team detail next to the bracket.** A pinned team's story starts about 1,350px below the top, after the First Four row. Put the detail directly under the bracket, ahead of the First Four, and scroll it into view on pin (instantly when the user prefers reduced motion).

## Bracket

- [ ] **P1 · Lighten the name strips.** At rest there are 64 near-black (#262626) blocks, and late snapshots add about 60 more. The heaviest ink on the page goes to names, the least informative element, and it competes with the navy route, which is the actual insight. Use the printed-bracket convention instead: no fill, names in Cast Iron 600 sitting on the bracket hairline, and losers in Graphite 400. The navy route then becomes the only heavy element, and hover reads as figure on ground.
- [ ] **P1 · Make "selected" look different from "lost".** Both use a Whisper Gray fill (`style.css:87–88`); only the weight and text color differ. At Mar 25, the pinned "1 Alabama" and the lost "16 Texas A&M-CC" look alike. Give selection its own treatment, such as Navy text on Dandelion (10.79:1) or a 3px navy edge, and keep "lost" as plain Graphite.
- [ ] **P1 · Replace the invented codes.** Internal strips use `superShortName`: CREI, PRIN, FUR, MIZ, SMC, NU, KSU, MSU, UK, CONN. First Four pairs read SEMO / AMCC, ALST / SFPA and MSM / AMER. Several of these aren't standard. "MSU" is ambiguous: the 2023 field had both Michigan St. and Montana St. The internal strips are 64px wide, so most short names fit at 12px (Creighton, Princeton, Furman, Missouri, Gonzaga). Use `bracketName`, abbreviate only names that fail the existing width check, and use a reviewed abbreviation list.
- [ ] **P2 · Use the page's sans-serif in the bracket.** Strips and route labels are set in Arial 12/16px (319 elements; `style.css:75`, `:80`). Everything else is Open Sans or EB Garamond, so the bracket looks pasted in from another site. Use Open Sans 600 for names and tabular lining figures for percentages, then rerun the clipping check, because Open Sans is wider. If it doesn't fit, Roboto is Duke-listed for its compact width (it would need to be bundled with its license).
- [ ] **P2 · Make the probability labels smaller than the names.** Route labels are 16px (18px bold on the hovered stage) next to 12px names, so the numbers shout. Use 13px Open Sans 600, and keep the larger, bolder treatment for the hovered stage only.
- [ ] **P2 · Use one strip height.** Round-of-64 strips are 18px and every later round is 22px (`style.css:80–81`). Pairs sit 18px apart, so the two teams in a game read as one two-line box. Use one height, with a 2–3px gap within a pair and a clearer gap between pairs.
- [ ] **P3 · Describe a dead team instead of showing a giant "0%".** A pinned team that's been eliminated still gets the 53px title number. Say "Out · lost to San Diego St. in the Sweet 16" in the center instead.
- [ ] **P3 · Fix the status line wrap.** "Predictions through March 25 / games" leaves one word on its own line in the 174px box. Use "Through Mar 25 games" or widen the box.
- [ ] **P3 · Raise the round headings.** They're 10px uppercase Graphite between two full-width rules. Use 11–12px and drop the lower rule; the region names already separate the rows.

## Timeline

- [ ] **P1 · Make the timeline read as a calendar.** Ticks are bare day numbers with no months ("12 14 … 26 01 03"); "01" and "03" read like codes. The snapshot title is 11px (`style.css:45`). "Play tournament" is an 11px, 25px-tall ghost button (`:46`), so the most engaging interaction on the page is the hardest to see. Fixes:
  - Label the first tick of each month ("Mar 12", "Apr 1") and drop the zero padding.
  - Put a ▶ control at the start of the track; a functional play icon is allowed by the skill's action rule.
  - Set the current date at 14–15px.
  - Shade round bands under the track (First Four, first and second rounds, regionals, Final Four, final) so the tournament's rhythm shows at a glance.
- [ ] **P2 · Collapse the timeline when a year has one snapshot.** For 2024–2026, the gray band holds one dot, an unavailable final tick and a disabled Play button. Replace it with one line: "One pre-tournament forecast · Mar 17, 2025 · reconstructed model".

## Team detail

- [ ] **P2 · Round numbers the same way everywhere.** The bracket says 16%. The detail headline says 16.176%, and its sentence reads "A 16.176% championship chance still leaves 83.824% for someone else." Three decimals is false precision, and it looks clumsy at 56px. Show whole percentages (with <1% and >99%) everywhere on screen, and put exact values in tooltips and the data download.
- [ ] **P2 · Don't draw a full chart around one point.** At the initial snapshot, "The forecast, in motion." is a 250px chart with a single dot in the middle. Fix the x-axis to the whole tournament (first snapshot to title game) so the dot sits at the start and the remaining dates are visibly ahead. Otherwise, replace the chart with one line until there are two points.

## Table

- [ ] **P1 · Stop tinting Duke Navy.** The heat ramp blends navy with white; for example, rgb(93,114,160) is navy at about 60% strength. The skill's color reference says not to change either Duke blue's opacity or saturation and to avoid faded blue overlays. Use four or five bins of published solid colors instead: White, Hatteras (Navy text, 11.79:1), Shale Blue and Prussian Blue (white text, about 4.9:1 and 7.9:1), and Navy. Bins also read more reliably than the current 165 distinct shades.
- [ ] **P1 · Put the emphasis on the column people came for.** The Round of 64 ✓ column and the 90%+ Round of 32 column are solid navy blocks, while Win title, the actual question, is the palest column. Show ✓ unfilled in Graphite, start the fills at the Sweet 16, and set Win title in 600 weight with a heavier rule on its left.
- [ ] **P2 · Tighten the rows.** Rows are 48.7px tall, so a 1024 × 760 window shows seven of the 68 teams (`style.css:111`). About 32px rows would show 15 or more, which suits a comparison table.
- [ ] **P2 · Left-align the text columns.** Region is right-aligned, so "Midwest" crowds the Seed column. Right-align numbers only.
- [ ] **P2 · Remove the nested scroll on phones.** The table scrolls inside an 850px-tall box within the scrolling page (`style.css:108`), which traps the thumb. On narrow screens, drop `max-height` and keep only horizontal scrolling.
- [ ] **P3 · Show the sort arrow only where it matters.** Every header carries "↕" ("Team ↕ Region ↕ Seed ↕ …"). Show the arrow on the active column, and on others only on hover and focus.

## Results and special states

- [ ] **P2 · Add scores to Results.** Results is a bracket without scores, so it looks almost identical to the last forecast. Put the winner's score on each advanced strip (for example "SDSU 71–64", or on hover if space is tight), and show the champion and title-game score in the center at rest.
- [ ] **P2 · Make disabled toggles look disabled.** In 2020, Forecasts and Bracket stay navy while disabled, because `.button-group button[aria-pressed="true"]` (`style.css:41`) outranks `button:disabled` (`:9`). Give disabled-and-pressed a neutral style, or hide the toggles when there's no tournament.
- [ ] **P3 · Remove the doubled rule in 2020.** The cancelled panel's 3px navy top border (`style.css:154`) sits directly under the toolbar's 1px rule, so two rules of different widths touch. Drop the panel border.

## Type and color system

- [ ] **P2 · Set a 12px minimum for text.** Current sizes:
  - 10px: round headings, seeds, First Four region labels, stage-strip labels.
  - 11px: snapshot title, date ticks, Play button.
  - 11.5px: explore help.
  - 11.7px: coverage note.

  Use 12px Open Sans as the minimum for labels and 13px for explanatory lines. Open Sans gets hard to read below 12px on non-retina screens.
- [ ] **P3 · Give each neutral one job.** Ginger Beer currently marks the pinned chip, the Results banner, button hover and the selected table row. Whisper Gray marks the timeline panel, lost strips, selected strips and hover. Suggested roles: Ginger Beer for "pinned or selected", Whisper Gray for panels, and Graphite text for "lost". Hover should use an outline, not a fill.

## Phone (375px)

- [ ] **P2 · Get to the data sooner.** The first table row starts after the wordmark, eyebrow, a two-line H1, a two-line dek, the toolbar, the timeline, the help line and the team picker. The title merge above fixes most of this; also hide the help line on touch devices, where "move over the bracket" doesn't apply.
- [ ] **P3 · Thin out the phone timeline labels.** Thirteen tick labels are crammed into 340px. Label only the first date, the last date and the current one; keep the other ticks as marks.

## Page chrome

- [ ] **P3 · Rebalance the About section.** Its right column holds two closed disclosures next to a long prose column, which leaves a lopsided half-empty grid. Stack them in one 65ch column, or move "Sources" and "How this was built" into the footer.
- [ ] **P3 · Make the footer do something.** It repeats the wordmark and "Archived forecasts · recorded results". Put the data credit and the "not affiliated" line there instead, so the About prose doesn't have to carry the disclaimer.

## Keep these

- The editorial voice: "Chances are not results.", "A March without a bracket." and the build-story page's "A bracket, with its uncertainty intact."
- The animated, tapered route with rounded joins, and the emphasis on the hovered stage.
- Graying each slot's loser, so every game's winner is readable at a glance.
- The pinned chip with Escape to clear, and the single tab stop with arrow keys in the bracket.
- The 2020 page, which treats a missing season as history rather than a gap to fill.
