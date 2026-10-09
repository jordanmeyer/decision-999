# Select only what the application needs

Plan and Build read this guide even if the host has not implicitly loaded a library skill. Select from the approved entries in [libraries.json](libraries.json), then read those skills. Record purpose, selected library IDs, reasons and plain/managed build mode in PLAN.md. Skill descriptions aid discovery; they are not a deterministic invocation engine.

| Student need | Skill |
| --- | --- |
| Build analytical charts for dashboards or interactive presentations using bundled Apache ECharts | [Apache ECharts](../skills/echarts-browser-app/SKILL.md) |
| Build editable process or decision diagrams with nodes and connections using React Flow | [React Flow](../skills/react-flow-browser-app/SKILL.md) |
| Build interactive event timelines or interval roadmaps with local data using vis-timeline | [vis-timeline](../skills/vis-timeline-browser-app/SKILL.md) |
| Build a task schedule with start/end dates, progress and dependencies using Frappe Gantt | [Frappe Gantt](../skills/frappe-gantt-browser-app/SKILL.md) |
| Build substantial interactive data tables with Tabulator for local dashboards, including sorting and filtering | [Tabulator](../skills/tabulator-browser-app/SKILL.md) |
| Add purposeful interface animation with Motion to a browser app | [Motion](../skills/motion-browser-app/SKILL.md) |
| Build consistent React forms, controls and layouts with Mantine | [Mantine](../skills/mantine-browser-app/SKILL.md) |
| Create interactive analytical slide presentations with reveal | [reveal.js](../skills/reveal-browser-app/SKILL.md) |
| Render explanatory flowcharts or process diagrams from authored text with Mermaid | [Mermaid](../skills/mermaid-browser-app/SKILL.md) |
| Parse a visitor-selected local CSV or bundled CSV with Papa Parse | [Papa Parse](../skills/papa-parse-browser-app/SKILL.md) |
| Transform, group and summarize local tabular data with Arquero | [Arquero](../skills/arquero-browser-app/SKILL.md) |
| Use jStat for browser statistical calculations with explicit assumptions and independently checked expected results | [jStat](../skills/jstat-browser-app/SKILL.md) |
| Create reproducible local random streams for browser simulations using seedrandom | [seedrandom](../skills/seedrandom-browser-app/SKILL.md) |

A simple calculator needs none of these. Prefer one charting library and one table component. React Flow means editable nodes; Mermaid means text-authored explanations. vis-timeline displays events; Frappe Gantt displays scheduled tasks. Mantine follows a justified React choice, not every form request. Statistics and animation need a stated purpose.

“Live analytical presentation” suggests reveal.js and, when useful, ECharts. Ask whether “live” means local interactive scenarios or externally refreshed data. The latter exceeds this pilot; offer a bundled example or local file import. Do not infer remote APIs from the phrase.

New library apps use the [managed build](managed-build.md). Plain native apps retain the minimal starter. Direct skill invocation does not invent plan agreement, replace existing work, or authorize publication. If an entry is still candidate/blocked, explain the gap and use an approved alternative only if it fits the student's task. Libraries absent from the inventory require maintainer review; do not install them opportunistically.

The following specialist recipes are being validated. Check each inventory status before selecting; a discoverable skill is not itself approval.

| Student need | Skill |
| --- | --- |
| Compare geographic markets using local boundaries and attributes | [Leaflet](../skills/leaflet-browser-app/SKILL.md) |
| Explore substantial local datasets with real SQL joins and aggregations | [DuckDB-Wasm](../skills/duckdb-browser-app/SKILL.md) |
| Optimize a constrained production or resource-allocation model | [HiGHS](../skills/highs-browser-app/SKILL.md) |
| Preview and download a controlled product-video composition | [Remotion browser video](../skills/remotion-browser-app/SKILL.md) |

MapLibre/deck.gl, D3/Plotly/Vega/p5/Three and spreadsheet engines remain outside the approved set. Use ECharts or Leaflet when they satisfy the actual requirement; do not silently substitute when they do not. Approval is configuration-specific and does not promise arbitrary library combinations. The Remotion recipe needs explicit acceptance of its documented render-event telemetry and an established license basis; it must not inherit a telemetry-free claim.
