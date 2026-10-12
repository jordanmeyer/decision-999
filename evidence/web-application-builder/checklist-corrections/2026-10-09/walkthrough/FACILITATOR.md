# Facilitator protocol and answer reference

**Keep this file separate from participant sheets.** These are source-derived expectations for checking observations, not participant results. No human session has been run for this packet. If the reviewed build changes, reconcile the key before the session and record the actual version used.

## Before the attempt

1. Arrange a consenting participant who reports being unfamiliar with the assigned app. Record relevant business, spreadsheet, SQL or modeling experience; do not infer novice status. Use an anonymous alias. One or two apps per person avoids the 120-minute aggregate becoming a fatigue test.
2. Open the verified public app from the index. Record URL, published commit from publication.json, date, browser/device and text/viewport settings. If the build has changed since verification, check it before the session. Use the same recorded version for any follow-up comparison.
3. Reload/reset the assigned app to its default. Supply only its participant sheet, an empty notes area and, for Sales/Uploads, a plain-text or CSV editor. Check that downloads can be saved and reselected. Do not pre-edit or pre-import their files; actual file operations are part of the task. Keep data synthetic.
4. Explain: “Think aloud. This is a review of the app, not a test of you. Predict before changing the requested input or opening an answer. You may use the app's guidance. Tell me when something is unclear.” For Process explain the requested keyboard-form mode, without teaching the control sequence. Familiarity with the input device is not assumed.

## During and after

Start the timer when the participant begins the sheet. Use only neutral prompts such as “What are you thinking?” or “What would you try next?” Do not point to a control, supply an expected value, correct a prediction or perform a file operation. Record built-in guidance use and whether a worked answer was opened before the prediction. If help is requested and given, record the exact help and mark the affected step assisted. Incorrect predictions can be valuable if the participant independently reconciles the result.

Stop at the sheet's stated 7–12 minute budget. Record elapsed time and the actual stopping point; do not silently drop unfinished steps. Arrange a separately timed continuation if needed. Do not relabel completion after coaching as unassisted. Timings were editorially bounded for this packet and have not been validated with novices.

After the attempt, ask which wording/control was confusing. Record the participant's words, the resulting proposed revision, the actual revision checkpoint and a targeted follow-up result. If no revision is needed, give the observation-based reason. Do not close ALL-16 merely because the participant clicked the controls or repeated a revealed answer. Look for their own account of default meaning, predicted change, reconciliation, error recovery and a model limitation. Avoid numerical recall as the sole measure of understanding.

PROC-12 additionally needs a complete graph-edit cycle and evidence of equivalent keyboard forms and pointer controls. The participant sheet requests keyboard forms. If they switch to pointer or cannot complete, record that boundary and keep the keyboard portion open. A developer's separate equivalent-pointer check may supplement the actual novice record; label it as developer evidence, never a second novice session. SALES-13 needs the novice's actual template/edit/import/rejection/correction/reset cycle. Prebuilt fixtures cannot replace it.

These observations establish no automatic screen-reader, 320 px or 200% text pass. A participant who uses a screen reader can contribute separate evidence only when actual speech, focus, assistive-technology version and complete task behavior are recorded under that protocol.

## Pricing — 7 minutes

- Default: $20 price − $12 variable cost = $8 contribution/unit. At 100 units, $800 contribution − $500 fixed = $300 result for the entered period. Theoretical threshold 62.5 units; minimum whole-unit cost coverage 63. At 62 the result is −$4; at 63 it is $4. The reference should remain the saved 100-unit case.
- At price $22, contribution becomes $10/unit: 100 units gives $500; 70 units gives $200, below the original $300. The quantities are assumptions, not demand predictions. A lower threshold alone does not prove the new price preferable.
- Blank price must be treated as invalid/pending, not zero. A displayed reference is a saved comparison, not a result for incomplete inputs. Observe whether the participant can identify and calculate a matching valid scenario; do not coach the recovery path.
- The copied record should preserve inputs, formula, USD/period units, result and limits. Temporary reference/state does not survive reload. Accept limitations about unknown demand response, omitted costs or capacity; reject an unsupported claim that this model finds an optimal price.

Preparation source: current `pricing/app/learn.html`, `model.js` and controls. The ten-cent boundary and demand-response extension remain optional later lessons, outside this bounded session.

## Inventory — 9 minutes

- Default inputs: initial 10, uniformly sampled integer demand 0–8, point 5, quantity 10, lead 2, horizon 30, seed 42. It is one deterministic-from-seed sample path, not an expected service estimate. Unit fill is sold units/demand; ending on-hand differs from pipeline. No costs establish an economic optimum.
- Delayed example: initial 5, demand exactly 4/day, point 3, order 6, lead 2, horizon 5. Day 1 closes at 1 and places 6 due day 3. Day 2 sells 1, closes at 0, already has 6 on order, and places no new order because position 6 exceeds point 3. Day 3 receives 6, sells 4, closes at 2 and orders 6 due day 5.
- Base five-day totals: demand 20, sales 15, unmet 5, fill 75%, two stockout days, three orders, average closing stock 1.0, ending stock 2, outstanding 6 due day 7. Unit fill 75% differs from the 60% of days without a stockout.
- At comparison point 6/order 6, the same demand path sells 17/20 = 85%; average closing stock 1.4, ending 0, outstanding 12. Earlier replenishment improves this run's service while changing pipeline/inventory exposure; no modeled holding-cost penalty proves it preferable.
- Blank lead must not run as zero. A saved run includes all inputs, seed, timing convention and ledger; restore recalculates the inputs. Accept a limitation about uncertain demand, supplier delay, costs or horizon effects. Repeated-seed estimation is a later assignment.

Preparation source: current `inventory/app/learn.html`, `model.js` and controls.

## Sales — 12 minutes

- Current default and downloaded template have **12 rows**, August–October: revenue $2,950, product cost $2,350, contribution $600, 220 units. Weighted rate is 600/2,950 ≈ 20.34% (display may round to 20.3%). North Notebook leads revenue at $1,200 but contributes $140; North Pen and South Pen each contribute $180. These are descriptive synthetic comparisons, not causal regional effects or net business profit.
- The specified added row contributes 2 units, $20 revenue, $12 cost and $8 contribution. The imported 13-row file should total $2,970 revenue, $2,362 cost, $608 contribution and 222 units. Record `sales-novice-valid.csv` as active only after successful import.
- `2026-02-30` is impossible. Rejection must name the date/record problem and preserve the previous valid dataset identity and results. Corrected import should activate `sales-novice-corrected.csv`, still 13 rows with the same totals. The invalid filename must not silently become the active source. Uploaded filename alone does not verify provenance.
- From October 3 through October 1 is invalid, not a valid empty subset. With a region/product filter and that error present, Reset varied sample should restore the 12-row sample, clear the relevant filters and errors, and restore default totals. Observe this action rather than inferring it from source.
- Saving analytical-view context beside matching-row CSV preserves source, filters, units and scope. Product cost excludes overhead, tax, shipping and returns. No automatic persistence is promised.

SALES-13 is unfinished unless the novice actually downloads, edits, imports, causes rejection, identifies the retained dataset, corrects/reimports and resets. The three-row hand check is separate from the current default; do not substitute its answers here.

Preparation source: current `sales/app/learn.html`, `model.js`, `index.html` and `template.csv`.

## Executive — 8 minutes

- Default September company sales $1,441,000; contribution $341,800; weighted contribution margin about 23.7%. Check that the participant distinguishes prior-year sales/margin comparisons from the prior-month contribution comparison and reads the app's cost boundary rather than calling contribution full company profit.
- Raising target 20%→25% changes below-target stores from 4 to 6; Tidewater and Summit Park join the flagged group. Meadow House at exactly 25% meets the target. Financial facts do not change. A target of 101% is invalid; known financial values remain facts, while target-based interpretation is unavailable until recovery.
- Harbor Wharf: sales $153,000→$156,000; labor hours 2,210→2,600; sales/hour about $69.23→$60.00. The contribution bridge is +$3,000 sales −$1,266 product cost −$7,995 labor +$0 occupancy = −$6,261. Indexed lines show relative change; the exact table supplies levels. A sensible next investigation concerns dayparts, overtime, service or staffing coverage, not an automatic staff-cut conclusion.
- Observe whether the participant returns from full cost detail to the briefing question and can continue. Copy should preserve their evidence, next check and limitation; notes are temporary unless copied. No answer requires asserting a causal explanation from this synthetic comparison.

## Uploads — 12 minutes

- Default: 384 sales lines, 326 return events; $291,788 gross − $51,827 refunds = $239,961 net revenue. Paid social leads gross at $110,356 but falls to $76,752 net, behind Organic search at $94,765. Net revenue after refunds is not profit; costs are absent.
- Everyday tee × Email totals 33 returned/380 sold ≈ 8.7%; May is 10/30 ≈ 33.3%, with $560 net. Aggregates can conceal a product/month interaction. Do not accept a percentage without its denominator or a causal attribution to the channel.
- Maturity example: a June 1 sale of 10 units at $20 has $200 original gross. June 10 snapshot: 2 returned, $40 refunds, $160 net, 20% return rate. July 5 snapshot adds 3 returns: 5 total, $100 refunds, $100 net, 50%. Aggregate events to the sale before joining; directly repeating the sale for two return events falsely gives $400 gross. Older cohorts have had more opportunity to return.
- A `MISSING` return line ID rejects the pair and preserves the last valid active pair. Correcting the ID permits the chosen filenames to become active together. Record actual filenames and retained identity; do not perform the correction for the participant. The earlier per-app script's extra over-return case is a later follow-up, not required in this 12-minute module.
- Summary context should identify grouping, original-sale-month cohort basis, observation date, active filters and source counts/filenames. Inspect the exported scope rather than assuming the visible page equals all rows. Closing the tab does not save an imported analysis automatically.

## SQL — 12 minutes

- Large default: 2,400 orders, 7,200 lines, 9,900 shipment events; initial query returns 12 products. Two text columns do not supply a numeric chart measure. Chart eligibility depends on the returned shape, not whether the SQL successfully ran.
- Orders by region are 600 each. Outstanding cents reduced to dollars: West $831,513.25; Central $491,602.25; East $399,288.75; South $301,453.00; total $2,023,857.25. Equal order counts do not imply equal quantities, prices or remaining fulfillment. Filtering to West before grouping retains the same West value.
- Save/restore concerns SQL text; a result note must identify the **executed** SQL, even if the editor has later edits. A nonexistent column should produce actionable guidance and preserve or identify the earlier successful result without presenting it as output of the failed query.
- Tiny case: four order lines total $550. One line has two shipment events; a direct line→event join repeats its original value and produces $750. Aggregate shipments to each order-line key first. Tiny shipped and outstanding values are each $275.
- Monetary SQL/export values use integer cents; the formatted table can show USD. Distinguish 50 visible rows/page from up to 500 retained/exported result rows, with cap disclosure; a 4-row result need not exhibit the cap to explain the policy. Notes must match dataset and executed result. No promised date, payment status or cost establishes that outstanding value is late, unpaid or profit.

The full six-step sheet is a 12-minute attempt, not a claim novices can finish it in that time. Record the stopping point and separately time any continuation.

## Simulator — 8 minutes

- Default risk-screened order: 469 units, about $6,068 expected contribution. Unscreened expected-contribution maximum: 558 units, about $6,510; roughly $442 separates them. At 469, sampled loss share is 2.66%, with 95% Wilson upper endpoint about 2.994%; it passes the 3% limit. The endpoint addresses simulation sampling, not model realism.
- At a 20% maximum, 558 qualifies (sampled loss 4.49%, upper endpoint about 4.914%). The risk limit changes selection; it does not change the underlying demand/cost worlds. Blank selling price is an invalid draft; retained figures belong to the last completed run, and copied assumptions must match that completed run.
- Shared scenario 1 has demand 424 and unit cost $19.64. Contributions: order 400 gives $6,144; 500 gives $6,020; 558 gives $5,460.88. Participants need not memorize these figures; they should explain why common draws isolate the quantity comparison. One scenario can rank quantities differently from the average.
- A fifth percentile is not a guaranteed worst case. Demand/cost distributions and independence are assumptions; no-launch is excluded. A best conditional quantity does not itself authorize launching. The packet omits the 0% and exact cutoff boundary exercises to keep the session bounded.

## Optimizer — 10 minutes

- Default whole allocation in breakfast/tea/celebration order is 5/8/16, contribution $941; fractional relaxation about $946. Resource use is 460 prep/586 oven/360 packing versus 480/590/360 capacity. Whole batches constrain the feasible set; fractional output is a bound only when solved optimally.
- A participant-chosen manual mix can have many valid outcomes. Check their stated feasibility against commitments and all resources. For reference: 18 celebration batches alone ignores minimum commitments. Feasible greedy 5/4/18 earns $933; changing to 5/8/16 adds $8, leaves prep unchanged, frees 2 oven minutes and uses 10 more packing minutes. A high per-product contribution alone misses resource tradeoffs.
- Minimum commitments require 4×18 + 3×12 + 2×25 = 158 oven minutes. Capacity 157 misses by one minute; the solver cannot silently relax commitments. Blank capacity must remain invalid. Recovering the original case restores oven 590 and the $941 allocation.
- Do not describe a time-limited incumbent as a proven optimum. The app allocates aggregate resources; it does not sequence jobs, resolve concurrent equipment use or price overtime/capacity purchases. A copied rationale is conditional on the entered costs and demand ceilings.

## Process — 12 minutes

- Default Finance workload 480/420 = 114.3%. Nominal weighted time 471.5 minutes excludes congestion; it is not sustainable turnaround. Routing 90% direct/10% Procurement gives 370.5 minutes (101 less) while Finance remains overloaded. Invalid outgoing total 90% should name Manager approval and pause the affected result until corrected/restored.
- Added Extra review receives 36 requests/day, adds 9 weighted touch minutes and makes nominal time 379.5. Managers workload is (8+9)×40 = 680 at 100% of entered capacity. Finance is still 480/420. Record whether the participant can create/connect the node, set the outgoing shares and assign the role/capacity with keyboard forms.
- Reconnecting Extra review to Manager approval creates a loop involving those steps. Observe the error's actual named path and the participant's recovery; structural undo is an available recovery, but do not tell them which control to use. Restoring the original example is not the requested loop recovery.
- Export/reimport should retain the valid draft and positions. The separate comparison baseline and undo history do not travel with it. Record actual export and reimport, not just a successful download. Risk classification/control effectiveness and real queue waiting are outside the model.
- **PROC-12 remains open if any part of the cycle is incomplete or the required input-mode evidence is absent.** Keep the 12-minute stopping point; schedule a separate continuation without converting assisted steps into independent success.

## Roadmap — 10 minutes

- Default finish November 29, 2026; promise December 1; buffer 2 days; six overloaded days. Packaging has 2 days float. Adding 5 days consumes float and delays completion 3 days to December 2, one day late. The controlling chain switches from the Supplier branch to Packaging→Design sign-off before Pilot/Safety/Launch/Ready.
- Blank duration is an unapplied invalid edit; the last applied plan remains visible with its pending status. Observe whether the participant recovers and opens the same task from the dates table.
- Design sign-off unavailable until December 4 gates Pilot and Sales. Pilot runs December 4–8; Safety December 8–15; Launch/Ready is December 16. The headline finish and Ready milestone should agree.
- Dates use calendar days with exclusive end boundaries. A promise is a target, not a scheduling dependency. Capacity reports overload; it does not automatically level work. Preserved context should distinguish draft/applied plan and comparison assumptions. The resource-repair preset is an optional later lesson.

## Markets — 10 minutes

- Assumed addressable market is annual opportunity, not the company's revenue. Default Georgia 67.50 narrowly leads Tennessee 67.00. Growth weight 70 gives Tennessee about 74.14 versus Georgia 68.28 and North Carolina 65.86. Tennessee's 10.8% growth versus Georgia's 8.4% supplies a larger weighted advantage. Integer sweep: Georgia leads at 0–27; Tennessee at 28–100; exact crossover 27.5. Scores are priorities under assumptions, not certainty.
- Blank growth leaves the last valid screen with an error and disables copying. After reset, Florida is excluded at setup ceiling $299,999.99 but admitted at exactly $300,000; its score remains 75.50. This is an eligibility gate, not a score jump or contingency guarantee.
- Louisiana remains unscored because required growth is missing even at zero growth weight. Mississippi is low-ranked but eligible; West Virginia fails the delivery gate. Missing is not zero. A participant may disagree with the completeness policy if they can describe it accurately.
- Map/table/selector should expose the same state evidence. Adaptive map bands mean equal shades across edits need not mean equal scores. Accept limitations about synthetic inputs, opportunity double counting, acquisition cost, competition, route-density proxies or real validation. Do not coach using this list.

## Presentation — 10 minutes

- Default full launch: base operating result $480,000; 60%-volume stress −$672,000, failing the $200,000 loss limit. Pilot: base $264,000; stress −$81,600; funding $1,896,000. Funding is the cash commitment proxy, not profit. At Lower 20,000 demand, both operating options fail the policy and the model defers.
- Specified counterexample: full base $4,400, stress −$37,360, funding $256,600. Pilot base $6,320, stress −$6,208, funding $71,980. Both pass; explicit full-first governance still chooses full. That policy is not financial maximization. A well-reasoned pilot preference is valid; no strategic benefit of full scale is quantified.
- Blank price retains the last valid scenario with invalid status and copying disabled. Recovery and reading-mode transitions should preserve the valid scenario. Observe the participant's account, not just a slide rendering.
- A copied policy recommendation is not their decision or an approval. A pilot might test demand, delivery quality or unit economics and alter later scale/stop choices; the model does not value that information or optimize a second-stage decision. Stress volume is assumed, not a probability or worst-case guarantee. Other omitted factors include timing, financing, taxes and inventory losses.

## Source trace

The nine keys reconcile their current BUILD-STORY explanations with the existing per-app NOVICE-TASK/NOVICE-TASKS files. This packet separates mixed keys from participant text, normalizes spacing, trims the earlier 15–20 minute plans, and makes default resets explicit. The original keys derive from the current lesson/model files described above. No prior per-app record, failed review round or source file was edited to prepare this packet.
