# Independent specialist recipe review — 2026-10-09

Reviewer: persistent recipe reviewer. Verdict: **candidate configurations only; corrections below required before approval**. This is an independent review of source, package contents, official documentation and retained probe images. It is not an independent full-app PASS or a publication approval. The maintainer owns package/skill changes; reviewer changed only this report.

## Scope and evidence

Read all four specialist skills, inventory, selection guidance, managed notice collector, RESEARCH.md, ISOLATED-RESULTS.md, actual isolated probe source/config/lockfile and exact installed package source under the research workspace. ISOLATED-RESULTS supersedes the earlier combined-probe failures. Inspected map.png and video-frames.png: they show local geometry/popup/zoom and decoded labels at frames 0, 15 and 29. Those images support the limited capability claims, not complete product quality.

An attempted independent browser rerun could not start: the retained reviewer browser and a fresh in-app tab both reported browser unavailable. No alternate browser automation or runtime execution bypass was used. HiGHS/DuckDB/Remotion browser outcomes in ISOLATED-RESULTS therefore remain maintainer observations in this review. No complete request recording was available. Full apps still require actual production interaction, narrow/keyboard review, failure/recovery checks and reviewer/developer loops.

## Required corrections

1. **HiGHS worker build instructions:** add the passing Vite `worker: { format: 'es' }` configuration to the skill. It exists in the actual passing probe and research instructions but is absent from the reusable recipe. A module worker alone does not specify Vite's output format. Keep cancellation/recreation as a full-app gate: this probe terminates a completed worker; it does not interrupt a running solve or demonstrate a fresh solve after cancellation.

2. **Remotion embedded codec distribution:** inspect and retain licensing/source terms for embedded codecs, not only npm package LICENSE files. The exact pinned `@mediabunny/mp3-encoder` README identifies embedded LAME 3.100 and its LGPL license; the AAC README identifies compiled FFmpeg/libavcodec. The current muted probe still emits `mediabunny-mp3-encoder-C-5kYIek.js`, `mediabunny-aac-encoder-Cv1zUgZ2.js` and `mediabunny-flac-encoder-D4z7Y982.js` in `dist/assets`. Muting does not remove these distributed chunks. The managed collector scans root LICENSE/COPYING/NOTICE files and misses this README-level information. Retain exact applicable notices and corresponding source/build information, or demonstrate that affected code is absent from the publication. Correct the incomplete blanket description of the encoders as MPL-only. See [Mediabunny MP3 implementation](https://mediabunny.dev/guide/extensions/mp3-encoder), [AAC implementation](https://mediabunny.dev/guide/extensions/aac-encoder) and [FFmpeg licensing](https://ffmpeg.org/legal.html).

3. **Remotion source availability and provenance:** carry the research's covered-source requirement into the skill, with a concrete source-availability notice for the shipped MPL components and any modifications. Merely collecting a license text is incomplete guidance for a compiled distribution. See [Mozilla's MPL FAQ](https://www.mozilla.org/en-US/MPL/2.0/FAQ/). Retain the exact `@remotion/licensing` supplement and explicitly preserve its provenance discrepancy. It accurately distinguishes the package's MIT declaration from the encompassing tagged Remotion license and contains the exact retained root license as a suffix; it does not establish an invented MIT copyright notice. Document the actual app operator's free-license basis; do not generalize the research evaluation basis to every employer.

## Configuration findings and bounded improvements

- **Remotion API correction is sound.** The corrected probe and skill pass width/height at the top level of `canRenderMediaOnWeb`; [the official API](https://www.remotion.dev/docs/web-renderer/can-render-media-on-web) requires those fields. Validate finite bounded dimensions before that call. The prior undefined-dimension stall remains a failed integration round. Prefer explicit `outputTarget: 'arraybuffer'` in the bounded recipe because that is the probed branch. This is a coverage improvement, not a claim that default `getBlob()` is broken: exact 4.0.534 code also returns a Blob from its default OPFS branch. Keep real template fidelity, cancellation/retry and duration tolerance as full-app gates.
- **Telemetry disclosure is accurate within its scope.** Official [telemetry documentation](https://www.remotion.dev/docs/telemetry) supports the stated IP/origin/render-kind/status boundary and absence of video content in that event. The recorded campaign-specific exception must not become blanket consent for future apps. A local-only content claim must remain distinct from a telemetry-free claim. No suppression was proposed or performed.
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
| skills/remotion-browser-app/SKILL.md | `67656975649df919b0726ad7f562916794e3d84755671c5af2c316eee82bc917` |
| references/libraries.json | `80211d5fe3fc2e1b02e00801154213d3d164dda3e53874d3d4f6eee03b522da3` |
| assets/license-notices/@remotion__licensing@4.0.534.txt | `9dbde659bc9c33e55d896a7046b984b2e2b4d2f467e00c159359e33f71c9c2c4` |
| evidence: ISOLATED-RESULTS.md | `c65a3f759c017ca9cdd787dbef985a7b00b9b67988aba422a5b6b08ae8ddc3a5` |
| evidence: probe/main.jsx | `0fdbc068f14ae7c2ed8bec882b5c1a1182853e8b9937ed7c6cf99871694c4838` |
| evidence: probe/highs-worker.js | `ec7b3ac77736f8bf49f6345d27ade02a6054d148a0d59228a998a82c60053fba` |
| evidence: probe/video-probe.jsx | `3af052d12339de012e0a41dc1bd2871d12956c7a7512f788ba019e96652e8033` |
| evidence: vite.config.js | `dc507fbf6eba2bd22944616651b0596b3d9dddaa8480f05241880bda1ad9e831` |
| evidence: package-lock.json | `0454c2fdd6f571a7fc1b0de3b1afe1641538e0a676e1636a8aafbef858638e54` |

Required findings were sent to the maintainer directly. No implementation or package files were edited by the reviewer. All four inventory statuses remain candidate at this checkpoint.

## Follow-up: exact codec source investigation

See [codec-provenance/FINDINGS.md](codec-provenance/FINDINGS.md) and its retained official sources. The maintainer corrected HiGHS worker format, the DuckDB settings snippet and Remotion arraybuffer/provenance/MPL instructions; these changes were re-read. The follow-up identifies LAME 3.100 and libFLAC's exact commit. AAC's libavcodec API version does not identify its exact FFmpeg revision, and no supported codec-exclusion switch was established. Remotion remains candidate pending a corresponding-source resolution and full app review.
