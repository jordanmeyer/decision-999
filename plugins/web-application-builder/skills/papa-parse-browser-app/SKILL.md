---
name: papa-parse-browser-app
description: Parse a visitor-selected local CSV or bundled CSV with Papa Parse. Use for quoted fields and CSV import workflows; not remote data fetching.
---

# Papa Parse for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `papa-parse` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

For joined sales/returns imports, read [uploaded sales and returns](../../references/decision-models.md#uploaded-sales-and-returns). Parsing valid CSV does not establish the grain, join correctness or the meaning of net revenue.

## Usage pattern

Read [React and TypeScript integration](../../references/react-libraries.md). Copy this standalone example into `app/recipes/papa-parse.ts`. Install the inventory’s development type packages and copy any listed declarations before typechecking.

```ts
import Papa from 'papaparse';

type Sale = { region: string; revenue: number };
export function parseSales(csv: string): Sale[] {
  const parsed = Papa.parse<Record<string, string>>(csv.replace(/^\uFEFF/, ''), {
    header: true, skipEmptyLines: 'greedy', dynamicTyping: false });
  if (parsed.errors.length) throw Error(parsed.errors.map(error => error.message).join('; '));
  if (!['region', 'revenue'].every(name => parsed.meta.fields?.includes(name)))
    throw Error('CSV needs region and revenue columns.');
  return parsed.data.map((row, index) => {
    const amount = row.revenue?.trim() ?? '';
    const region = row.region?.trim() ?? '';
    const revenue = Number(amount);
    if (!region || !/^(?:0|[1-9]\d*)(?:\.\d{1,2})?$/.test(amount) ||
        !Number.isFinite(revenue) || revenue > 1_000_000)
      throw Error(`Invalid region or revenue in row ${index + 2}.`);
    return { region, revenue };
  });
}
```

Read File.text() only after checking size. Preserve the current valid dataset until all rows validate. Treat amounts as explicit currency units; do not blindly coerce empty strings to zero. Use text renderers for imported fields. Never set download:true or pass a remote URL. For CSV exports protect spreadsheet formula-prefixed fields.

Visual libraries follow [shared identity selection](../../references/workflow.md#shared-design); the supplied [theme assets](../../assets/library-themes/) implement the Duke default. Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Test quoted commas/escaped quotes, BOM/CRLF, malformed rows, missing headers, empty values, excessive inputs and transactional failure. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://www.papaparse.com/docs) for API detail, but do not replace pinned versions or add remote services.
