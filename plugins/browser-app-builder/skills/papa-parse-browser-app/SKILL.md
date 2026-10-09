---
name: papa-parse-browser-app
description: Parse a visitor-selected local CSV or bundled CSV with Papa Parse. Use for quoted fields and CSV import workflows; not remote data fetching.
---

# Papa Parse for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `papa-parse` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

## Usage pattern

```js
import Papa from 'papaparse';
const parsed = Papa.parse(csvText.replace(/^\uFEFF/, ''), {
  header: true, skipEmptyLines: 'greedy', dynamicTyping: false });
if (parsed.errors.length) throw Error(parsed.errors.map(error => error.message).join('; '));
// Check required columns, numeric syntax, ranges and row limits before committing new state.
```

Read File.text() only after checking size. Preserve the current valid dataset until all rows validate. Treat amounts as explicit currency units; do not blindly coerce empty strings to zero. Use text renderers for imported fields. Never set download:true or pass a remote URL. For CSV exports protect spreadsheet formula-prefixed fields.

Visual libraries use the relevant [theme assets](../../assets/library-themes/) with the bundled [Campus Designer](../campus-designer/SKILL.md). Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Test quoted commas/escaped quotes, BOM/CRLF, malformed rows, missing headers, empty values, excessive inputs and transactional failure. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://www.papaparse.com/docs) for API detail, but do not replace pinned versions or add remote services.
