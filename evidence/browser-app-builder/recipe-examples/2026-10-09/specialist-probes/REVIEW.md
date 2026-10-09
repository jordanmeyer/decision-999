# Independent specialist recipe review — 2026-10-09

Reviewer: persistent recipe reviewer. Verdict: **candidate configurations only; corrections below required before approval**. This is an independent review of source, package contents, official documentation and retained probe images. It is not an independent full-app PASS or a publication approval. The maintainer owns package/skill changes; reviewer changed only this report.

## Scope and evidence

Read all three specialist skills, inventory, selection guidance, managed notice collector, RESEARCH.md, ISOLATED-RESULTS.md, actual isolated probe source/config/lockfile and exact installed package source under the research workspace. ISOLATED-RESULTS supersedes the earlier combined-probe failures. Inspected map.png: it shows local geometry/popup/zoom. These observations support the limited capability claims, not complete product quality.


## Required corrections

1. **HiGHS worker build instructions:** add the passing Vite `worker: { format: 'es' }` configuration to the skill. It exists in the actual passing probe and research instructions but is absent from the reusable recipe. A module worker alone does not specify Vite's output format. Keep cancellation/recreation as a full-app gate: this probe terminates a completed worker; it does not interrupt a running solve or demonstrate a fresh solve after cancellation.



## Configuration findings and bounded improvements

- **DuckDB EH selection is consistent with the successful record.** The probe uses locally bundled EH WASM/worker and maximumThreads 1. It sets extension installation/loading off, fixed allowed paths, external access off and configuration lock before executing test SQL; results distinguish permission failures from the earlier MVP `_setThrew` defect. Copy this exact ordered SET block into the skill to make the working boundary reproducible. [DuckDB's security documentation](https://duckdb.org/docs/current/operations_manual/securing_duckdb/overview) supports these controls, while describing them as capability restrictions rather than a complete security guarantee. The fresh-query result 42 proves recovery after a query error, not cancellation. Full app must prove worker reset/reinitialization, bounds and exact-value display.
- **HiGHS model evidence is independently reasonable.** The model's continuous feasible corners have objective values 0, 750, 1000 and 1100. The intersection at chairs 20/tables 10 is also integral, so it establishes the integer optimum 1100 independently of the returned solver status. It does not cover infeasible/time-limited status rendering, stale-result handling or cancel/recovery.
- **Leaflet scope is appropriate.** Local GeoJSON, literal popup text, local markers, attribution and accessible parallel comparison fit the requested recipe without remote services. The screenshot is a synthetic rectangle, not market-analysis product evidence. Full app needs geographic context/provenance, independent ranking cases, map/table selection, narrow/keyboard behavior and meaningful decision support. No required scope expansion was found.
- **Evidence navigation:** RESEARCH is an archival record and refers to registry metadata/install logs not included in this copied evidence directory. Add an explicit superseded/archive note and either retain those files or describe their original workspace location. Do not imply the copied directory includes them. The lockfile, current source and .npmrc are present and sufficient to reproduce the stated installation/build commands.

## Exact reviewed snapshot

Root working tree contained concurrent maintainer edits; these SHA-256 values identify the reviewed files without claiming a clean repository checkpoint. Paths below are relative to `plugins/browser-app-builder` unless marked evidence.

| File | SHA-256 |
| --- | --- |
| skills/leaflet-browser-app/SKILL.md | `95d0f3dbaf873012afc0057ec78f4d78c0f3b13934c24d4175ceab3d50845728` |
| skills/duckdb-browser-app/SKILL.md | `bdf8bcccec8c0f502599e82465917db6ce0cc442891922370ae30a5b2985bb79` |
| skills/highs-browser-app/SKILL.md | `766bf15f75f6e5a18fb2deacf1fb02eb48043b2963f2439506dd80147cc82808` |
| references/libraries.json | `80211d5fe3fc2e1b02e00801154213d3d164dda3e53874d3d4f6eee03b522da3` |
| evidence: ISOLATED-RESULTS.md | `c65a3f759c017ca9cdd787dbef985a7b00b9b67988aba422a5b6b08ae8ddc3a5` |
| evidence: probe/main.jsx | `0fdbc068f14ae7c2ed8bec882b5c1a1182853e8b9937ed7c6cf99871694c4838` |
| evidence: probe/highs-worker.js | `ec7b3ac77736f8bf49f6345d27ade02a6054d148a0d59228a998a82c60053fba` |
| evidence: vite.config.js | `dc507fbf6eba2bd22944616651b0596b3d9dddaa8480f05241880bda1ad9e831` |
| evidence: package-lock.json | `0454c2fdd6f571a7fc1b0de3b1afe1641538e0a676e1636a8aafbef858638e54` |

Required findings were sent to the maintainer directly. No implementation or package files were edited by the reviewer. All three inventory statuses remain candidate at this checkpoint.
