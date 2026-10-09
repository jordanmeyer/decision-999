# Coordinator browser observations

These are automated trials, with the coordinator acting as a simulated student. They are not real student conversations. All browser interaction used the Codex in-app browser through CUA on the configured Mac. The three builders worked in parallel; browser and GitHub UI operations were serialized. Browser engine/version was not exposed in the recorded observations.

## Setup and preview

Each initially blank folder received independent Git history and approved repository-local author attribution. Each starter visibly loaded its JavaScript module and its Check interaction button changed the status. Original loopback ports were 9101 pricing, 9102 inventory, and 9103 sales. The coordinator used an additional Python standard-library server on 127.0.0.1:9100 with Cache-Control: no-store to avoid stale local modules. Python was already installed; no runtime, package manager, editor, or GitHub CLI was installed.

## Pricing

The browser suite passed 25/25. Independently specified price20/cost12/quantity100/fixed500 produced profit300, revenue2000, costs1700, continuous break-even62.5 and whole break-even63. Quantity62 produced loss4. Fractional quantity1.5 showed a useful error, hid stale results, and focused quantity. Price12 produced contribution0 and no attainable break-even with fixed500. Price10/fixed0 correctly warned about losses while showing zero break-even units. Keyboard Calculate and Reset worked.

Independent decimal regression19.90/19.80/1000/100 produced profit0, contribution0.10 and break-even1000. The second version adds that example as a preset. Enter on the preset cleared a prior validation error and produced the known answer; Reset restored300/63. The suite remained25/25 after entry-script cache correction.

## Inventory

The browser suite passed10/10 groups, including14 invalid cases, conservation across365days and20seeds, and a declared statistical mean interval3.92–4.08 (observed3.973479). Stock5/demand4/reorder3/order6/lead2/horizon5 produced closing stock1,0,2,0,2; sales15; unmet5; orders3; outstanding6; fill75%. Independently derived seed42 demand0–8 produced2,0,5,2,3 in the first five days, ending stock8 and one order. Zero demand showed N/A fill rate and preserved10units. Minimum above maximum showed an error, hid the old result, and focused maximum.

First interaction round failed: Reset defaults threw TypeError: form.reset is not a function. The button ID reset shadowed the form method. Renaming it reset-defaults fixed keyboard and mouse reset. The failed round remains in EVALUATION.md. The second version's delayed-delivery preset loaded the five-day known example, cleared invalid state, and worked with keyboard and mouse. The suite remained10/10 after the entry URL correction.

## Sales

The browser suite passed42/42. Demo totals were390 revenue,234 cost,156 contribution and17units; North was240/144/96/12; October2 alone150/90/60/5. North plus Pen produced zero totals and an empty-results message. Actual file selection of synthetic quoted-sales.csv accepted BOM/CRLF, quoted commas and escaped quotes, producing24.20/11.06/13.14/3. South produced4/5/-1/1. Actual invalid-quantity.csv import rejected record2 and retained the previous valid dataset and South filter. Reset to demo worked. Download synthetic template produced the actual three-row CSV; its contents were inspected.

First interaction round failed: after reversed dates, Clear filters emptied controls but retained the error and zero totals. A reset-event microtask redrew before the native reset completed. Deferring redraw to the next task fixed it; keyboard and mouse clearing restored demo totals and hid the error. The second version shows active filters. October2–3 + North + Notebook displayed the matching four-part summary and40/24/16/2. Clear returned No filters and390/234/156/17. The suite remained42/42 after the entry URL correction.

## Layout, source and publication

All apps were visually inspected at narrow and desktop iframe sizes. Measured document widths were319 and1439 CSS pixels with matching scrollWidth (no page-level horizontal overflow). Tables have intentional internal horizontal scrolling. Pricing's new buttons wrapped on narrow screens; the sales summary wrapped without page overflow. Keyboard activation of primary actions, reset and presets was exercised. This is not a complete accessibility audit;200% text zoom and screen readers were not tested.

All initial live sites loaded under repository subpaths with styling and working JavaScript. Pricing live quantity62 produced loss4; inventory live five-day seed42 matched its independent ledger; sales live North matched240/144/96/12. All source links pointed to the intended public repository. No new console errors were observed after the inventory reset repair; its earlier timestamped localhost error remained in the browser log.

All three second Actions runs succeeded, but returning-browser verification failed: new HTML paired with cached previous app.js. Pricing and inventory new buttons were inactive; sales filtered correctly but omitted the new filter summary. Ordinary reload refreshed HTML without updating the entry script. This was not treated as a successful live update. The builders added ?v=2 to the changed entry script URL, then checkpointed, reran affected checks, and made ordinary corrective deployments. The plugin itself remained frozen. Future changed assets also need new URLs; this manual convention is a workflow improvement to consider.

Source review found local modules/styles and GitHub source links, no remote application requests or persistent storage. No comprehensive network trace was available, so this is not proof that arbitrary JavaScript cannot transmit data. Synthetic imports remained transient; only purpose-created fixtures were in source. Public Git history contains the explicitly approved Jordan Meyer attribution.
