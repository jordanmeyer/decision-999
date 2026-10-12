# Stillwater Coffee operating review

Agreed through a simulated student conversation on 2026-10-09. This is a synthetic classroom example, not an actual student's product or a real business.

## Purpose and smallest useful version

A fictional coffee-chain COO prepares a board discussion about labor productivity and product purchasing/waste. The app compares 12 mature stores in Coast, Piedmont and Highlands over April–September 2026. The user can filter reporting month, region and store, inspect cost changes, examine all 72 store-month records, and walk through three September board questions. Expansion decisions, forecasts, imports, live accounting, accounts and storage are excluded.

## Model and inputs

All authored accounting amounts are integer USD cents. `app/data.js` describes the synthetic stores, sales, expense ratios, occupancy/other costs, transactions and hours; this file deterministically constructs the 72 records. No records represent an actual customer or business. Store contribution equals sales minus product cost, labor and occupancy/other store costs. Product cost includes waste; headquarters, taxes and financing are excluded. Net sales exclude sales tax. This metric is not company profit.

Margin is contribution divided by sales. Comparable growth is current sales divided by same-month 2025 sales, minus one. All stores are mature and present in every month, so this is a consistent comparable base. Prior-year sales are synthetic rounded cents derived from authored growth assumptions except the independent reference case. Ticket is sales divided by transactions. Sales per labor hour is sales divided by hours. Aggregate rates always use sums of numerators and denominators. No simple average of store rates is used. The cost bridge compares dollar changes and changes in each cost's share of that month's sales; it is an accounting decomposition, not causal attribution.

Displayed KPI currency rounds to whole USD; tables show exact cents. Rates round to one decimal and changes to one percentage point decimal. Decisions use unrounded values. Zero denominators return unavailable ratios; an empty ledger shows zero dollars and unavailable margin. The margin target starts at 20%, is explicitly a classroom assumption, and accepts 0–100 inclusive; blank/out-of-range values show an error and suppress the comparison. A store at the target meets it. Margin and comparable growth remain distinct; no composite health score.

## Libraries and design

Managed Vite build with approved Mantine 9.7.1 and React 19.3.0 for controlled filters/modal focus, Apache ECharts 6.1.0 for margin comparisons and trends, and Tabulator 6.6.1 for the 72-record sortable operational ledger. No additional library is needed. The bundled Campus Designer supplies unchanged navy/royal, purposeful copper/neutral accents, Georgia headings and Arial body fallback. No institutional marks, affiliations or remote fonts.

## Independently expected results

Student-supplied reference: sales $100,000 less product $32,000, labor $28,000 and occupancy/other $15,000 equals $25,000 and 25%. Same-month prior sales $90,000 yields $10,000/$90,000 = 11.111…% growth. 5,000 transactions yields $20 ticket. September Meadow House must match this. An independently constructed unequal-size pair ($100k sales/$25k contribution and $300k sales/$0 contribution) has margin $25k/$400k = 6.25%, not the simple average 12.5%.

September company totals were independently added from the authored store inputs before browser results: sales $1,441,000 and contribution $341,800; margin 341800/1441000; four stores below 20%. Harbor August labor is $153,000 ×32.5% = $49,725 and September is $156,000 ×37% = $57,720: +$7,995 and +4.5 percentage points. Harbor contributions are $32,621 and $26,360, so the fall is $6,261. Cases also cover empty selection, negative contribution, exact-target equality, cent arithmetic, 72-record uniqueness and literal HTML-like table data.

## Acceptance

Desktop and 320 CSS-pixel production frames must show readable hierarchy, wrapped controls and no whole-page horizontal overflow; genuinely wide tables may scroll. Keyboard users can select filters, choose ledger sort, open store/board modals, navigate steps and dismiss with Escape. Modal focus returns to its trigger. Charts have textual/table alternatives. Region and store filters apply to indicators, trend, regional comparison and ledger; reporting month changes the snapshot while the trend retains six months. The fixed September watchlist is explicitly labeled independently of filters. Search changes ledger rows/totals only. The full-period switch exposes 72 records in the company scope. Reset restores initial values. The independent browser suite must pass and the production repository prefix, source link and notices must load. Reduced motion is honored; no external runtime calls are authored.

No material planning questions remain. Limitations are disclosed in the product and README, including lack of causal, staffing adequacy or expansion evidence.
