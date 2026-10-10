# Actual downloaded-file workflow fixtures

The current public Common Goods app generated the two downloaded CSVs through its **Download sales.csv** and **Download returns.csv** buttons. These files contain only the app’s synthetic sample. Headers and row counts were inspected before editing. The manifest records exact fixture hashes and arithmetic computed independently with Python Decimal; Python was a maintainer verification tool, not an application dependency.

To reproduce, download both current samples, inspect their headers, then choose them through **Import your two CSVs** and **Validate & replace**. Record the active filenames, counts and totals. Use the documented first-return edits in manifest.json, selecting each edited Returns file through the actual chooser and validating again. Both rejections must retain the prior active identity and totals. Finally choose the corrected pair and verify its filenames replace the active identity together.

The recorded run used the downloaded Sales filename and a renamed copy of the downloaded Returns file for its initial pair. Corrected files contain the original downloaded bytes under new names. See ../browser-native-files.json for exact outcomes and timestamps. This was agent-operated verification; no novice or screen-reader session is claimed.

The browser download listener and one early file-selection call took far longer than their requested timeouts. Later chooser operations used completion handles and were checked before submission. An attempted role=alert selector did not match because validation uses the existing status region; the visible status text was then read and recorded. These are automation observations, not application calculation failures.
