# Isolated browser probes — 2026-10-09

These maintainer probes supplement, not replace, the independent app reviews. Node22.19.0/npm10.9.3; pinned lockfile; Vite production base `/recipe-probe/`, loopback9519, Codex in-app browser. All source is included; `npm ci --ignore-scripts`, `./node_modules/.bin/vite build`, `./node_modules/.bin/vite preview --port 9519`. The earlier combined source/failure remains in RESEARCH.md and probe/combined-main.jsx.

- HiGHS dedicated browser worker: Optimal, chairs20, tables10, objective1100. Independent LP-corner derivation is in RESEARCH.md. No browser warnings/errors were observed.
- DuckDB **EH** single-thread worker: local CSV gives East40, West20. Remote read, LOAD httpfs and re-enabling external access are rejected with proper permission/configuration errors. Invalid SQL reports missing table. A subsequent SELECT6*7 returns42; worker terminated. The MVP build's `_setThrew` error is not an approved configuration.
- Remotion first isolated probe stalled because canRenderMediaOnWeb was incorrectly passed composition without top-level width/height. Exact package implementation's dimension loop never terminates for undefined input. The corrected recipe passes finite width/height explicitly, as official API requires. This is a failed integration round, not a successful export.
- Corrected Remotion probe: canRender true; H264/MP4, arraybuffer, muted. Render30frames completed in256ms. Downloaded MP4 has13098bytes,320×180,H264,30frames,30fps; browser and ffprobe report0.966667s (one frame shorter than nominal1s). Browser playback reached ended=true, readyState4, no media error. Actual decoded frames0/15/29 inspected in video-frames.png, showing changing frame labels. React text-node whitespace renders as Frame0 rather than Frame 0; full compositions must inspect text fidelity. The full app must verify its own templates, cancellation, duration tolerance and downloads. No claim of arbitrary CSS/render support.

Video telemetry exception was explicitly accepted by the user for this campaign: Remotion receives render events including IP/origin/type/status, not video content. Other examples retain no external runtime-service boundary. No telemetry interception/patching was performed. Exact source endpoint is recorded in RESEARCH.md. Complete browser request capture is unavailable; source/assets inspection and observed console are limited evidence.

Leaflet local geometry/player initial appearance remains recorded in research; complete product interactions are a later app-review gate. Live GitHub Pages and unsupported-browser handling are not established by these probes.

Final Leaflet isolated probe: local polygon bounds−79,35.8,−78.8,36, safe popup score42, working zoom9→10/11 and rendered geographic geometry; screenshot map.png. No remote tile layer. This is a capability probe, not useful market-analysis product evidence.

Imported license text has whitespace/newlines normalized for repository checks; terms and attribution are retained. Original upstream URLs and package versions identify original distributions.
