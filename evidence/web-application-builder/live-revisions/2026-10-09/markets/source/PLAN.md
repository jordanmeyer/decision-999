# Replenish · Market screen

Agreed through a simulated student exchange on2026-10-09. This is a classroom example, not an actual student interview or commercial recommendation.

## Purpose and scope

Shortlist three states for a fictional subscription refill-supply service serving independent offices. The12-state classroom footprint is Alabama, Arkansas, Florida, Georgia, Kentucky, Louisiana, Mississippi, North Carolina, South Carolina, Tennessee, Virginia and West Virginia. This is an initial screen, not address selection, demographic targeting or an estimate of actual market attractiveness. Public boundaries and fictional commercial data must remain visibly distinct.

Use locally bundled US Census2024 generalized state boundaries in a real Leaflet map, with neighboring states for context, labels, selection, zoom/reset, score/raw metric coloring and a legend. No remote tiles, geocoding, visitor location, analytics, runtime services or imported files. Provide a keyboard/table alternative for all map analysis. Linked detail shows raw measures, normalized metric scores and weighted contributions. An automatic top3 and a separate user-pinned shortlist of up to3 support comparison. Pins persist when assumptions change and display exclusion reasons. Copy current screen settings, ranked top3, pinned evidence and synthetic-data caveat. Reset restores default weights/ceilings, selected NC, the starting GA/TN/NC comparison pins and full footprint.

## Dataset and fixed scoring anchors

All commercial attributes are authored synthetic values. Currency is integer USD cents; growth is percentage points and competition is an assumed index0–100. Score transforms are capped to[0,100]: revenue$2m→$12m maps0→100; growth0→12% maps0→100; delivery$12→$4/order maps0→100; competition100→0 maps0→100. These are classroom assumptions, fixed across filters and controls, not observed minima/maxima. Raw values outside anchors remain visible. Revenue is total addressable annual revenue under a hypothetical full-market definition, not expected service revenue or revenue earned by this company. Growth is an assumed annual rate. Competition is an invented comparative index, not a sourced count.

|State|Annual revenue USD m|Growth %|Delivery USD/order|Competition|Setup USD k|
|---|---:|---:|---:|---:|---:|
|AL|4.5|6.0|9.60|35|140|
|AR|3.5|5.4|10.40|30|115|
|FL|18|14|9.00|80|300|
|GA|10|8.4|7.20|60|220|
|KY|5|4.8|10.00|35|155|
|LA|6.5|Missing|11.20|50|190|
|MS|2.5|3.6|12.00|25|90|
|NC|8|9.0|8.00|40|180|
|SC|6|9.6|7.60|25|145|
|TN|7|10.8|6.40|30|165|
|VA|9.5|7.2|8.80|45|250|
|WV|2.8|−1|13.50|25|100|

Default weights40 revenue,25 growth,20 delivery efficiency,15 lower competition. Each weight is finite0–100; normalize by total (they need not sum100). All-zero weights yield no score/ranking/recommendation. Score=the sum of normalized metric×weight share. Rank unrounded scores descending, exact ties alphabetically by state name. Display score/contributions to two decimals; rounding may make distinct ranks appear equal. Explain this. Missing any commercial measure prevents scoring/ranking, even if its weight is0; never fill Louisiana growth with0. Component detail still shows known raw values.

## Editable eligibility gates

Defaults: delivery ceiling$12/order, setup ceiling$250,000. Values exactly at either ceiling qualify. Above either ceiling excludes before ranking. Delivery ceiling accepts USD0–20 to cents; setup ceiling USD0–500,000 to cents. Gates are separate from fixed scoring anchors. All-zero weights or no eligible complete markets yield explicit no-ranking states. Fewer than3 qualified markets shows only those available. Pinned markets are a user's comparison, not the automatic recommendation; excluded/incomplete pins remain visible with reasons. They are never silently counted as qualifying markets. Valid input recalculates immediately. Invalid/blank/nonfinite inputs display labeled errors without stealing focus, label results as the last valid screen and disable copied rationale until corrected.

## Independent expected cases

NC: revenue8m→60, growth9→75, delivery8→50, competition40→60. Contributions24+18.75+10+9=61.75. GA:80×.4+70×.25+60×.2+40×.15=67.50. TN:50×.4+90×.25+70×.2+70×.15=67.00. Default ranking begins GA,TN,NC;9 of12 qualify. FL is excluded for setup300k, WV for delivery13.50, LA for missing growth. MS at12 and VA at250k qualify. A50/50 revenue/growth model gives NC67.5. Scaling all weights by a common factor preserves scores/ranking. All-zero weights gives null scores; missing is never0. Equal synthetic metric sets must tie alphabetically. Zero ceilings exclude every market. Independent expected values are specified before browser observations. Numeric comparison tolerance1e−9 score points; currency gates compare integer cents exactly.

Geometry tests check22 unique official features,12 joins, valid closed rings, longitude/latitude bounds and independently known NC extent roughly longitude−85…−75/latitude33…37. Dataset and join errors should fail visibly in browser tests. GeoJSON coordinates are longitude,latitude; Leaflet label points are latitude,longitude. Geographic area must not enter commercial scores.

## Selected libraries and acceptance

Managed Vite8.3.4, Leaflet1.9.4 only; no framework/chart/table library is needed for12 markets. Leaflet is now promoted in the current approved inventory. Keep exact packages, registry lock and BSD notice. Real polygons, geographic context, interaction and responsive map are required; a mock map is not completion. Bundled Campus Designer uses unchanged navy/royal and published solid colors, locally bundled OFL EB Garamond/Open Sans fonts and no institutional marks.

Verify browser model tests plus actual production `/bab-example-markets/` desktop/narrow UI, controls, map/table/keyboard selection, map zoom/home, map hide/show resize, weight/threshold updates, invalid/all-zero/no-market/missing states, pin persistence/max3/removal, comparison/copy/reset, source/notices and local-only assets. Use solid fills with textual/raw alternatives. Source and PLAN freshness clean before/after final run. Review source simplification and preserve failed rounds. Persistent reviewer owns REVIEW.md; coordinator publishes only after actual PASS and live verification. Never modify course source or push from developer task.


## Authorized live revision — October 9, 2026

The owner's request restores the opening brief's missing ranking explanation and adds sensitivity. Compare each current rank against the starting screen, with concrete raw-value differences and the largest change in relative weighted contribution against the displaced peer. This is a decomposition, not proof that one measure alone caused every move. Gate entry/exit has an explicit gate reason. No movement is reported honestly. A whole-number sweep of one selected weight from0 through100 holds every other priority and ceiling fixed; contiguous leading ranges are shown. It does not claim exact fractional stability bounds.

Independent expected sensitivity: GA's unnormalized score is5000+70g and TN's4450+90g, divided by75+g. They tie atg27.5. Alphabetical order puts GA first at equality. Whole-number growth weights0–27 selectGA;28–100 selectTN. Atg70, TN10750/145=74.137931 and GA9900/145=68.275862. TN's growth contribution advantage changes from5 to9.655172 points, with10.8% versus8.4% growth. SC also overtakesVA. All-zero/gate-excluded sensitivity states remain explicit.

Map display bands use the four highest distinct observed metric scores as cuts, with five ordered solid blues. The default four leading scores67.50,67.00,61.75,61.25 therefore have distinct colors. Only display cuts adapt: score anchors, values and ranks do not. Legend gives numeric cut values (rounded), and labels/table expose exact displayed values and rank. All metric-color views use normalized scores with higher always better. Excluded priority scores use neutral gray. Local real geography is retained to fulfill the original Leaflet/geographic-context lesson; invented commercial inputs are called out beside the map. Renaming real polygons to fictional regions would add ambiguity rather than improve geography teaching.

First-load learning line, natural headline, local fonts/lining figures, larger targets, pre-pinned starting leaders and disclosures shorten supporting detail. Public BUILD-STORY links the real opening brief, simulated planning, current assumptions and evidence. No invented student approval or extra business data. Business assumptions are deliberately varied across twelve markets (including missing and capped values); adding random noise would undermine the reproducible weight-sensitivity lesson.

Layout evaluation found that even with supporting disclosures, showing the ranking, sensitivity, map and detail together still made the opening phone page too long. Two explicit view buttons now select Ranking and sensitivity or Map and market detail; priorities remain accessible in both. Top-three/table selection opens the map/detail view and focuses its native selector. Reset returns to ranking. This keeps the model lesson visible while making the actual map one action away.
