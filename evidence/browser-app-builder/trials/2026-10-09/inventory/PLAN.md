# Inventory policy lab

Agreed through simulated student replies in TRIAL.md. Intended for classmates comparing service/stock tradeoffs, with synthetic local scenarios. No forecast, optimization claim, cost model, login, live data, or storage.

Inputs: seed string1–80 characters; horizon1–90 days(default30); starting stock0–10000(default35); integer uniform independent daily demand min/max0–1000(default0/12); lead1–30 whole days(default2); daily reorder point0–10000(default15), quantity1–10000(default30); weekly order-up-to target0–10000(default60). Reject blanks, nonintegers, out-of-range values and min>max; retain previous result with explicit stale indication until a valid run. Seed + all inputs reproduce results in this model version.

Generate the entire demand sequence first using a fresh local seedrandom instance and floor(U*(max−min+1))+min. Both policies receive this exact sequence. Each day: receive scheduled orders, satisfy min(stock,demand), lose unmet sales (no backorders), then place orders. Inventory position is remaining stock plus outstanding orders. Daily policy orders exactly Q once when position<=R. Weekly policy reviews at end of days divisible by7, ordering max(0,target−position). Orders at end of d arrive at start of d+L. No outstanding orders initially. Orders beyond horizon remain pending and are reported, not received early.

Outputs: same daily demand, policy stock trajectories, daily table selectable by policy with start stock, arrivals, demand, fulfilled, unmet, end stock, ordered and pending; summary fulfilled/total demand percentage, mean end-of-day stock, lost units and pending units; CSV for both policies, seed and inputs. Integers throughout; display percentage and average to1 decimal without rounding intermediate calculations. Zero demand means100% fill rate, labeled no demand.

Independent expected cases, specified before implementation: start10/demand3/no arrival => end7, unmet0; start10/demand12 => end0/unmet2. Start0/demand0/R0/Q5/L2: day1 order5, day2 stock0, day3 receive5/end5, no duplicate order while position5. With constant demand3/start10/R0/Q5/L2 over4 days: end stocks7,4,1,0; unmet0,0,0,2; day4 orders5. Weekly start0/demand0/target10/L2: day7 order10, day8 no receipt, day9 receipt10. Uniform0..12 has mean6 and variance14;100000 generated observations should mean within0.06 (over5 standard errors) and each of13 bins within500 of100000/13 (over5 binomial standard deviations). Published seedrandom hello. first draws0.9282578795792454 and0.3752569768646784 yield demands12,4 for0..12.

Acceptance: rerun/reset, different seed, fixed demand and invalid inputs; CSV contains actual daily rows/parameters, two policies never get different demand. Chart and table values agree. Keyboard form/button/select/table access, visible focus, narrow320px no page overflow except contained table, resizing/hidden chart restoration, reduced motion (disabled animation), same-origin production assets at /fresh-inventory/. Evaluate numerical model separately from model realism.

Libraries: seedrandom3.0.5 and ECharts6.1.0; managed Vite8.3.4. Other libraries declined for no current purpose (TRIAL.md). Georgia/Arial system fallbacks, unmodified navy palette, no marks or institutional endorsement.

Deployment destination/public source URL remain unapproved. Local workflow preparation and non-root packaging checks only; final destination changes require refreshed evaluation before publication.

Coordinator supplied an additional independent evaluation case after agreement:4 days, constant demand3, start10,R4,Q5,L2: daily stock7,4,1,3; orders0,5,0,5; fill100%, mean3.75. Weekly stock7,4,1,0; unmet0,0,0,2; fill10/12. This adds evidence without changing model or scope.
