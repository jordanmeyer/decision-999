# Toolbar grouping — 2026-10-10

User request: place Forecasts/Results on the right beside Bracket/Table.

App commit: `f55cfe2ecbe6388be6afccb1b3ce5fa71230e925`.

The two existing groups now share a right-aligned flex container. They wrap together on narrow screens. No application logic changed.

Verification: production build and whitespace checks passed. Desktop inspection showed both groups aligned at the same height with a 16px gap. At 375px, they remained together on a second row with a 6px gap and no document overflow. Results activated normally; Tab moved focus from Results to Bracket; Enter activated Table. No browser console errors were observed. The existing bundle-size warning remains.

Screenshots: `phone.jpg` records the narrow preview; `live.jpg` records the published desktop toolbar.
