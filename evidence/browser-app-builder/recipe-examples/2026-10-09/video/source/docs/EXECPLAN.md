# Build Foldline Studio

This living ExecPlan follows host ~/.codex/PLANS.md. Keep Progress, Surprises & Discoveries, Decision Log and Outcomes & Retrospective current. PLAN.md is the agreed acceptance contract, and PLANNING-CONVERSATION.md contains the exact simulated exchange.

## Purpose / Big Picture

A student can turn a fictional desk-organizer concept into a short, readable silent video, preview exactly the authored composition, adjust bounded copy, and download a real playable MP4. Two checked templates and two orientations make a useful small tool without becoming a generic video editor. The result must actually export and play; a Player-only shell does not fulfill the request.

## Progress

- [x] (2026-10-09) Ask actual planning questions; receive product, copy, scope, license basis and sizing/template confirmation.
- [x] (2026-10-09) Read candidate Remotion skill, exact package API/source, official renderer/telemetry docs and latest silent codec research.
- [x] (2026-10-09) Scaffold exact dependencies, safe local paths, notices and managed workflow.
- [x] (2026-10-09) Implement controlled composition, validated model and complete composer/export lifecycle.
- [x] (2026-10-09) Verify five actual MP4 files, full decoding/scene images, maximum-copy four combinations, real cancellation/retry, edit cancellation, Back and desktop/narrow UI.
- [x] (2026-10-09) Freeze source/PLAN at287fed96c6f2afc3608170ce6cbefe618b992aeb; clean before/after; build and14/14 tests pass.
- [ ] Independent application PASS and coordinator candidate/publication gate.

## Surprises & Discoveries

The prior isolated probe found a one-frame-short MP4 duration, so acceptance allows one frame difference while verifying actual frame count. Omitting explicit width/height from the capability API stalled the old probe; always provide finite dimensions. Remotion's optional audio encoders are excluded by Vite aliases and a module-graph assertion, not by pretending muted:true alone removes the packages. Source inspection confirms render events go to Remotion; the user accepted this specific exception.

The independent reviewer found Unicode C1 controls accepted by initial validation; Unicode Cc now matches the agreed contract. Actual narrow maximum-copy testing found a transcript grid/H3 overflow, corrected at that owner. CUA download event waiting proved unreliable and stalled despite timeouts; actual observed anchor downloadMedia saved the later named files quickly. These are retained failures, not rewritten as first-pass successes.

## Decision Log

Decision: use one React composition and validated props for both Player and export; exact Remotion4.0.534 profile. Rationale: preview/export agreement and tested browser API. Date/author:2026-10-09developer, coordinator-authorized trial.

Decision: use only authored vector tray/pens/cards, local system fonts and two fixed palettes. Rationale: no imported media rights or remote-render dependency; a complete understandable concept video is possible with these controls. Date/author:2026-10-09developer and simulated student confirmation.

Decision: copy is concept claims, never validated evidence; each clip says Product concept. Rationale: the student explicitly corrected the proposal's loose “evidence” wording. Date/author:2026-10-09student.

Decision: preserve Remotion telemetry with visible pre-export disclosure; licenseKey free-license for the actual individual noncommercial prototype, with production/development mode accurately reported. Rationale: user-authorized exception and confirmed operator basis; no universal eligibility claim. Date/author:2026-10-09student/coordinator.

## Outcomes & Retrospective

The complete composer exports real playable MP4 files. Five exports cover default and maximum copy across both templates/orientations; independent decoding confirms them. Developer lifecycle/layout verification is complete. Final checkpoint, independent PASS and coordinator publication remain. See EVALUATION.md for the actual control-character correction, narrow transcript fix and host download limitations.

## Context and Orientation

This is a new standalone app, separate from the course repo and prior examples. app/model.js owns limits, presets, dimensions, scene boundaries and validation. app/Composition.jsx renders controlled HTML/SVG at fixed video dimensions using current frame. app/export.js will pass the same validated snapshot to the actual renderer, with capability checks, progress and AbortSignal. app/App.jsx owns editor/player/output state; app/style.css owns interface only. tests/ imports actual modules; render fixtures are local testing pages and never publish. scripts/notices.mjs collects notices plus exact Mediabunny source links. vite.config.js aliases only optional audio encoder imports and verifies their exclusion. Reviewer alone owns REVIEW.md.

H.264 is the video encoding in the MP4 container. WebCodecs is the browser's local encoding API; capability must be checked on this browser. Frames are still images at30persecond. Landscape is960×540 and portrait540×960.12seconds gives360frames;18gives540. Story scene starts are0,25%,75%; card starts0,1/3,2/3. The three benefits and finalCTA are bounded editable text; input strings are React text, never HTML.

## Plan of Work

First create validation and exact scene timing tests, then the two authored layouts at both dimensions. Build a full composer with native form controls, Player, scene buttons and visible transcript so copy remains accessible. Preview never autoplays. Add capability checks and a real silent render: explicit width/height for capability, composition dimensions for export, outputTarget arraybuffer, videoCodec h264, container mp4, forced muted true, license and accurate production flag. Snapshot all valid props, expose progress and AbortController, clear obsolete download on edits, revoke old object URLs and abort on navigation/unmount. Do not enable a second render until the first has settled.

Then render and download actual files, verify ffprobe metadata and decoded beginning/middle/end frames, and compare with preview. Exercise maximum copy/unbroken strings in both orientations/templates, both colors, 12/18pacing, real cancel/retry and edit invalidation. Verify narrow/desktop via local fixed frames and native keyboard, plus actual Back before interaction. Freeze all executable paths and PLAN, fresh build/run, compare before/after, then send reviewer hash/URLs/files. Preserve failures and repair only actual issues.

## Concrete Steps

Use Node22.19.0/npm10.9.3, available at /Users/jordan/.nvm/versions/node/v22.19.0/bin. From this directory run npm ci --ignore-scripts --cache /private/tmp/bab-video-npm-cache, npm run build, npm run test:browser -- --port9521, and npm run preview -- --port9522. Test URL http://127.0.0.1:9521/tests/; production http://127.0.0.1:9522/bab-example-video/. Run the canonical dependency checker in /Users/jordan/Projects/decision-999/plugins/browser-app-builder/scripts/check-dependencies.mjs. Candidate rejection is recorded honestly until root promotion; never modify the checker to pass.

Use only CUA for browser work. Actual downloaded files may be examined with ffprobe/ffmpeg and standard image tools. Keep downloads/evidence outside app/public; only licensed/source-provenance static notices publish.

## Validation and Acceptance

Expect exact frame counts360/540 at30fps and dimensions960×540/540×960, no audio stream, real playback toended and duration within1/30second of12/18seconds. Inspect text/art in actual decoded frames and compare corresponding preview scenes. Validate empty/overlong/Unicode/control input; unsupported capability/error branches need honest adapter tests if an actual unsupported browser is unavailable. Observe actual nonzero render progress then cancel; a new export must succeed and no cancelled/stale file may appear. Changes must clear prior downloads and keep preview/export state coherent. UI controls, transcript, disclosure, notices/source links and local assets must work at320/desktop widths.

## Idempotence and Recovery

npm ci/build recreate only ignored dependencies/dist. React state is in memory; reset returns defaults. Abort cancels active rendering, finalization releases state, and URL.revokeObjectURL removes obsolete output. Do not patch renderer telemetry or covered dependency code. Do not change shared viewport or other agents' servers. Root owns repositories, promotion and publication after PASS.

## Artifacts and Notes

Official API: https://www.remotion.dev/docs/web-renderer/render-media-on-web and https://www.remotion.dev/docs/web-renderer/can-render-media-on-web. Telemetry: https://www.remotion.dev/docs/telemetry. Read exact installed4.0.534 declarations because live docs now include4.0.535options. License source: https://github.com/remotion-dev/remotion/blob/v4.0.534/LICENSE.md. The renderer's source telemetry endpoint is https://www.remotion.pro/api/track/register-usage-point; the app does not intercept it.

## Interfaces and Dependencies

Config includes product,headline,benefits[3],cta,template(story/cards),format(landscape/portrait),seconds(12/18),palette(navy/ivory). model exports defaults,limits,validate,dimensions,sceneStarts. Composition receives config. Export receives a frozen config,AbortSignal and onProgress; returns actual Blob and support information. Exact runtime packages are remotion/@remotion/player/@remotion/web-renderer4.0.534 and React/ReactDOM19.3.0; devVite8.3.4/@vitejs/plugin-react6.1.2. Retain exact transitives and source notices.

Initial plan written2026-10-09after confirmed template/dimensions and license basis.
