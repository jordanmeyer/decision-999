# Library selection walkthrough

These are author-executed decisions using the shipped selection guide, not independent agent runs or claims of automatic host invocation. The requests below are synthetic probes. The implementer read the corresponding skills and built the recorded fixtures; a fresh host-selection benchmark remains outstanding.

| Synthetic request | Decision using the guide |
| --- | --- |
| “Create an interactive analytical presentation where we change price locally.” | reveal.js; ECharts for the chart. No remote data feed. Presentation fixture exercises the combination. |
| “Import a local sales CSV, filter regions and compare totals.” | Papa Parse + Arquero + ECharts; Tabulator for the substantive table. Mantine only because this fixture deliberately exercises a React interface. |
| “Let me edit steps and connect them in a process.” | React Flow; no Mermaid needed for the editing task. |
| “Explain an order-to-shipment process from a short text definition.” | Mermaid; no React Flow or React required. |
| “Show events over a period.” | vis-timeline. Task dependencies would instead select Frappe Gantt. |
| “Show scheduled tasks and their dependencies.” | Frappe Gantt; no optimization claim or external service. |
| “Repeat a random experiment from a seed.” | seedrandom local instance; jStat only if a defined statistical calculation is needed. |
| “Animate a changed result so I can see what moved.” | Motion, with reduced motion and model calculations independent of frames. |
| “Make a simple four-input profit calculator.” | Native HTML/CSS/JavaScript; no library, React or managed build required. |
| “Make a live dashboard from our private company API.” | Clarify scope; propose local synthetic data/import. Do not add authentication or a remote API. |
| “Use an unlisted charting package.” | Explain current approval boundary and use ECharts if it fits; otherwise request maintainer review. No opportunistic installation. |

The operations fixture deliberately includes both diagram types and both time views for compatibility testing. A normal student plan should choose only those its task needs. These walkthroughs establish instruction coverage, not model-routing reliability.
