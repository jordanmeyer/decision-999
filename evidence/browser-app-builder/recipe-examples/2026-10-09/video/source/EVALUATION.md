# Evaluation — Foldline Studio

Status: independent application review PASS at the frozen checkpoint. The coordinator promoted the exact silent profile and the normal canonical dependency checker passed on2026-10-09. This report distinguishes actual browser exports, downloaded files and decoded content from preview-only tests.

## Environment and scope

Node22.19.0/npm10.9.3, exact lockfile, npm ci --ignore-scripts with a temporary cache installed30packages and found0vulnerabilities. Vite production build passed including the no-AAC/MP3/FLAC-module assertion and14-package notice collector. The ~951KB JavaScript chunk warning remains visible; no unsupported split or warning suppression was added. Source tests9521 and production9522 are separate servers. Browser interactions used only CUA. Desktop/narrow evidence uses fixed1440/320 CSS-pixel frames on the shared host; no global viewport or actual-device claim.

The canonical checker actually rejects `Unapproved dependency: remotion@4.0.534` because this exact silent profile is a candidate. The coordinator authorized the maintainer trial; this is not a claimed checker PASS or publication permission.

## Actual media

All files below came from actual production Web Renderer output. Each has one H.264 stream, no audio stream, and ffmpeg decoded the entire file successfully. Frame timestamp cadence is30fps; container endpoint duration is one frame shorter than nominal. Do not confuse average-frame-rate metadata with an exact duration guarantee.

| File in sibling video-evidence/ | Dimensions | Frames | Duration seconds | Bytes | Copy/palette |
|---|---:|---:|---:|---:|---|
| story-landscape-12s.mp4 |960×540|360|11.966667|446711|Default/navy|
| max-story-landscape-12s.mp4 |960×540|360|11.966667|1088171|All fields maximum W/navy|
| max-story-portrait-18s.mp4 |540×960|540|17.966667|1164887|All fields maximum W/navy|
| max-cards-landscape-12s.mp4 |960×540|360|11.966667|806488|All fields maximum W/ivory|
| max-cards-portrait-18s.mp4 |540×960|540|17.966667|1261515|All fields maximum W/ivory|

Decoded exact frames0/180/359 for360-frame files and0/270/539 for540-frame files were visually inspected. Text fits; artwork, Product concept label, three benefits and final CTA are intact. The independent reviewer separately decoded and inspected these files and retained full hashes in REVIEW.md. The source composition, export adapter and text-layout function were unchanged across these five exports and final UI-only fixes.

The default actual native video played to ended=true/currentTime11.966667/readyState4/no error. Preview scene button Three benefits sought frame90 and agreed with the decoded middle scene. Actual Player DOM layout tests independently measure all text ranges in48 maximum-copy combinations (two templates, two sizes, two palettes, two durations, three scenes); these supplement the real files rather than replacing them.

## Interaction and lifecycle

Developer observed real render progress89%/478 of540frames, then Cancel stopped it, left no output, and allowed retry; retry produced the actual cards portrait file. Starting another render and editing Product name cancelled the frozen snapshot, cleared output and enabled retry only after settlement. A timing attempt to read progress after a fast render had already finished yielded a selector timeout; no cancellation was claimed from that attempt.

25-character product input shows an inline24-character limit, removes obsolete preview/output and disables rendering. Keyboard Enter on Reset recovers. Keyboard scene navigation reachesframe90; Play changes toPause and frames advance; Pause stops. Actual away/Back after editing template/cards, portrait and product name restored defaults consistently before interaction (Foldline/story/landscape/12/navy, initial preview and ready status). This host performed a fresh restoration; no persisted bfcache claim.

Independent coordinator witness, attributed: default pausedframe0/counter1of360; Three benefits→90; closing→270, keyboardRight→271/counter272; EnterPlay advances frames. Empty headline removes stale preview and disables render/seek/play; Reset recovers. Native Back from a nonzero scene resets toframe0/counter1/introduction/default controls before interaction. Independent coordinator final narrow witness also passed maximum-copy and invalid-state visual checks; its UI-WITNESS.md and narrow-max.png/narrow-invalid.png are retained in the course campaign video evidence.

## Layout

Desktop production frame measured1439client/1439scroll; narrow default319/319. Maximum product name24W initially produced319client/354scroll in the plain-text transcript. DOM rectangles identified the transcript H3 and intrinsic grid width. Fix: min-width0 on transcript grid children, overflow-wrap:anywhere on H3. Rebuilt production with all six maximum W fields:319client/319scroll. Final screenshots studio-1440.png, studio-320-top.png and studio-320-max-preview.png were personally inspected. The narrow preview, buttons and disclosure remain visible; the native orientation select may shorten its visible option, with the exact dimensions repeated in the preview badge and accessible option.

## Preserved failures and limitations

The initial validator rejected only C0/DEL. The independent reviewer reproduced accepted U+0085/U+009B contrary to PLAN. It now rejects Unicode Cc; the meaningful cases remain in the14-case test suite. Reviewer rechecked the correction.

Initial Player console license warning was observed. After the operator basis was confirmed, the documented acknowledgment prop was set. It changes no composition/render output. No license restriction or telemetry was removed.

CUA waitForEvent(download) stalled for hours despite declared timeouts, eventually returning the default file. It is not used again. Later ordinary Download-link clicks did not create additional files in the inspected Downloads directory; one coincided with a following edit but a later isolated click also failed to produce a file. No unproven cause is asserted. The portrait story was saved from the observed video via documented downloadMedia (127s despite timeout). Subsequent actual Download MP4 anchors used downloadMedia({timeoutMs:15000}) and saved named files in0.09–0.16s. Correct blob href/download filenames were inspected; this proves actual downloadable media through documented tooling, while ordinary uninstrumented link delivery on this host was inconsistent. No browser security settings were changed.

The host blocks direct navigation to the notices text URL (ERR_BLOCKED_BY_CLIENT); the file is present in dist and verified through HTTP. Actual Back testing instead used the known local test page. Frame cross-origin contentDocument reads are unavailable; documented frame locators measure DOM directly. No full browser network capture was available, so network claims rely on authored source, installed renderer source, emitted local assets and visible telemetry disclosure. Unsupported-hardware and forced encoder-error UI paths were source-reviewed, not physically reproduced.

## Final checkpoint

Tested executable/PLAN commit: `287fed96c6f2afc3608170ce6cbefe618b992aeb`. Immediately before the final build/run and after14/14 completed tests, committed/staged/unstaged relevant diffs each exited0, relevant untracked listing was empty, PLAN baseline existed and was reviewed, PLAN diff/status were empty. Rebuilt from the checkpoint with unchanged notices; production prefix assets returned200 with correct MIME types and notices200 include exact source offering. Final production capability supports H.264 and render button is enabled; no error logs. The two retained license warnings reference the earlier index-Dnv5Yetu.js bundle, not the final index-B7q-aH61.js. Final source/layout checks did not change composition/export/text layout; the independent reviewer verified their hashes against media-generation source.

An additional reviewer concern about the narrow invalid landscape panel was measured and visually checked: stage140px high, text bounds entirely inside. Screenshot studio-320-invalid.png confirms complete heading/explanation and disabled controls. No speculative source change was made.

Evaluation-relevant paths: app/, tests/, .github/workflows/, package.json, package-lock.json, .npmrc, .node-version, vite.config.js, scripts/, licenses/ and PLAN.md. There is no other executable project tooling. EVALUATION/REVIEW/DEPLOYMENT and other prose reports may follow as report-only commits.

Final approval: after independent PASS, the maintainer promoted only this exact silent profile. The ordinary plugin check-dependencies.mjs command passed against this project, superseding the earlier expected candidate rejection above. Executable and agreed PLAN remain unchanged. Live publication still requires separate evidence.
