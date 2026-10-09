# Exact encoder provenance and minimal publication fix

Independent reviewer, 2026-10-09. Scope: unmodified Remotion web-renderer 4.0.534 and its pinned Mediabunny encoder packages 1.56.1. No plugin or application source was changed. This source audit does not certify license compliance or replace the outstanding app review.

## What is established

All three exact npm registry records identify Mediabunny commit `cee57d1cdfd1776d515c081057b50eb337291e32`. Retained `*-metadata.json` files contain registry URLs, package integrity and gitHead. The exact commit's READMEs, MPL licenses, C bridge files and project build scripts are retained here. Their content agrees with the installed package sources.

| Component | Identified source | Notice/source treatment |
| --- | --- | --- |
| Mediabunny JS, worker code and C bridges | Mediabunny commit above; wrappers are MPL-2.0 | Retain MPL and copyright notices; make the matching covered source and any modifications available with clear directions. |
| MP3 embedded library | LAME **3.100**, stated in exact pinned README | Official archive `COPYING` is GNU Library GPL v2; source headers permit v2 or later. Retain the exact `COPYING`, `LICENSE`, attribution and source/build material. Do not mislabel it MPL-only or LGPL-2.1-only. |
| FLAC embedded library | Binary string identifies `git-3f1ecff8 20260304`; GitHub resolves to `3f1ecff843dd1b8c07fbb5f59425a4ec71fe4f6c` | libFLAC is BSD-3-Clause; preserve the exact `COPYING.Xiph` with its copyright, conditions and disclaimer. The supplied build disables CLI programs and C++ library, so the repository's GPL/LGPL texts do not automatically describe the linked libFLAC component. They are retained here for provenance, not as a claim that this binary is GPL. |
| AAC embedded library | Static binary string `Lavc62.23.103`; pinned README compiles FFmpeg libavcodec + libavutil | **Exact FFmpeg revision remains unknown.** The generic API version is not a source commit. The README supplies flags and bridge command but no FFmpeg commit, compiler version or patch record. Standard FFmpeg is LGPL-2.1-or-later unless GPL components are enabled; the recorded flags do not enable GPL/nonfree, but this does not independently certify the shipped binary's source/configuration. |

Static extraction did not execute any WASM. `binary-strings.json` records package-file SHA-256, extracted WASM SHA-256/size and matching identification strings. Binary history from the official repository is retained: AAC build last changed `0f6c374750d0f2d95f4a435c96ba8da75312a93f` (2026-04-27); MP3 `3be94cc788098ee25a263666970400674aff84e7`; FLAC `f3dec587fdfb63bc518d781fe762acbebb1b66ce`. These identify the distributed build files, not automatically their upstream C dependencies.

The exact official LAME archive was fetched and its checksum retained in `lame-source-archive.json`; the source headers explicitly permit Library GPL v2 or later. Full source archives were not added to this evidence directory. No broad latest-version substitute was used to claim correspondence.

## Concrete source URLs

- [Matching Mediabunny source archive](https://codeload.github.com/Vanilagy/mediabunny/tar.gz/cee57d1cdfd1776d515c081057b50eb337291e32) — HEAD 200, application/x-gzip. Includes the exact encoder wrappers/bridges and vendored built WASM, **not** the full LAME/FFmpeg/libFLAC source trees.
- [LAME 3.100 official source archive](https://downloads.sourceforge.net/project/lame/lame/3.100/lame-3.100.tar.gz) — downloaded successfully; checksum recorded separately. [Release page](https://sourceforge.net/projects/lame/files/lame/3.100/) identifies the fixed release.
- [Matching libFLAC source archive](https://codeload.github.com/xiph/flac/tar.gz/3f1ecff843dd1b8c07fbb5f59425a4ec71fe4f6c) — HEAD 200, application/x-gzip; [exact BSD notice](https://raw.githubusercontent.com/xiph/flac/3f1ecff843dd1b8c07fbb5f59425a4ec71fe4f6c/COPYING.Xiph).
- Pinned [MP3 build instructions](https://github.com/Vanilagy/mediabunny/blob/cee57d1cdfd1776d515c081057b50eb337291e32/packages/mp3-encoder/README.md), [AAC build instructions](https://github.com/Vanilagy/mediabunny/blob/cee57d1cdfd1776d515c081057b50eb337291e32/packages/aac-encoder/README.md), [FLAC build instructions](https://github.com/Vanilagy/mediabunny/blob/cee57d1cdfd1776d515c081057b50eb337291e32/packages/flac-encoder/README.md). Raw exact-commit files were fetched and retained here.
- [FFmpeg's licensing guidance](https://ffmpeg.org/legal.html) and [MPL source-availability FAQ](https://www.mozilla.org/en-US/MPL/2.0/FAQ/) explain why a wrapper's single root LICENSE does not discharge every binary component's requirements. There is **no established matching FFmpeg source URL** in the current record; linking current FFmpeg master would not fix that fact.

## Minimal fix proposal

1. Preserve existing exact Remotion notices and `@remotion/licensing` provenance supplement. Add an explicit third-party source/notice section for the shipped Mediabunny wrappers, LAME and libFLAC, including the exact texts retained here. Use a supplemental app notice file copied into publication and linked from the app; changing the generic notice collector is unnecessary for this one configuration.
2. Offer matching source archives beside the distributed app or from an accessible source-download location, with checksums, the exact bridge source and the recorded build commands. For LGPL components, preserve the means to rebuild/relink the bridge with a modified library; a link to a project home page or to compiled npm tarballs alone is insufficient evidence of corresponding source. The app repository's open source should preserve the imports and reproducible bundle command so replacements remain possible. Retain modified covered source if a later configuration changes it.
3. Resolve AAC **before approval**: obtain an upstream identification/source/configuration record for this particular binary, or intentionally rebuild the AAC bridge from a recorded FFmpeg revision with a pinned toolchain and retained source/configuration. A rebuild would be a new configuration requiring its own notice audit and browser verification. Do not call an arbitrary archive with the same libavcodec API version the matching source.
4. There is no demonstrated supported codec-exclusion switch in this exact Remotion version. Its public exports offer the root renderer; its implementation dynamically imports all three fallback encoders. `muted: true` prevents audio rendering but the actual Vite build still emits all three codec chunks. Do not delete chunks or alias them to empty modules and represent that as the supported pinned configuration. No codec substitution or telemetry suppression is proposed.

This makes the remaining block precise: wrapper/LAME/libFLAC provenance can be documented now; AAC's exact underlying source is unresolved. Keep Remotion candidate until that is resolved and the full video app passes review.

### Prospective narrowed configuration proposed by maintainer

After this record, the maintainer proposed a deliberately new **silent MP4-only** configuration: explicit Vite aliases replace each optional encoder import with an app-owned module whose registration function throws a clear unsupported-audio error. This is a reasonable alternative to distributing the unresolved codecs, subject to review; it is not an upstream codec-exclusion option or approval of the earlier build. No additional embedded-codec distribution block remains if the actual published assets demonstrably contain none of those implementations. Core Mediabunny MPL/source and Remotion notices still apply.

One functional boundary matters: throwing fallback stubs do not alone make rendering silent because a browser with native audio encoding may never invoke them. Force `muted: true` at the single capability/render call owner after any props/options spread, and constrain authored templates and Player preview to silent content. The exact 4.0.534 implementation skips audio-codec resolution when muted and creates its scaffold with audio disabled.

Review the resolved module/bundle graph and all distributed files for absence of embedded AAC/MP3/FLAC code, the clear error from each excluded fallback, production MP4 playback with no audio stream, cancellation/retry and intact disclosed telemetry. Only that tested configuration can replace the previous candidate. A silent render from the original bundle alone is insufficient evidence of excluded-code distribution.

## Other requested corrections rechecked

Re-read the root's updated skills. HiGHS now states ES module worker output and its construction. DuckDB now includes the exact ordered registered-local-file/SET sequence before editable SQL. Remotion now uses explicit arraybuffer output, retains its provenance ambiguity and requires actual operator basis plus MPL source links. These resolve the previously reported instruction omissions. They do not resolve embedded AAC source correspondence or demonstrate full-app cancellation/recovery.
