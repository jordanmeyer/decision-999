# Isolated browser probes — 2026-10-09

These maintainer probes supplement, not replace, the independent app reviews. Node22.19.0/npm10.9.3; pinned lockfile; Vite production base `/recipe-probe/`, loopback9519, Codex in-app browser. All source is included; `npm ci --ignore-scripts`, `./node_modules/.bin/vite build`, `./node_modules/.bin/vite preview --port 9519`. The earlier combined source/failure remains in RESEARCH.md.

- HiGHS dedicated browser worker: Optimal, chairs20, tables10, objective1100. Independent LP-corner derivation is in RESEARCH.md. No browser warnings/errors were observed.
- DuckDB **EH** single-thread worker: local CSV gives East40, West20. Remote read, LOAD httpfs and re-enabling external access are rejected with proper permission/configuration errors. Invalid SQL reports missing table. A subsequent SELECT6*7 returns42; worker terminated. The MVP build's `_setThrew` error is not an approved configuration.


Leaflet local geometry/player initial appearance remains recorded in research; complete product interactions are a later app-review gate. Live GitHub Pages and unsupported-browser handling are not established by these probes.

Final Leaflet isolated probe: local polygon bounds−79,35.8,−78.8,36, safe popup score42, working zoom9→10/11 and rendered geographic geometry; screenshot map.png. No remote tile layer. This is a capability probe, not useful market-analysis product evidence.

Imported license text has whitespace/newlines normalized for repository checks; terms and attribution are retained. Original upstream URLs and package versions identify original distributions.
