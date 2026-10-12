# Notebook pricing plan

## User and smallest useful app

An MBA student considering a notebook venture can compare a single product's profit and whole-unit break-even for one sales period. Synthetic inputs only, created for this trial; no third-party dataset or imagery. All calculations run in the browser. No accounts, APIs, imports, exports, persistence, taxes, capacity constraints, demand forecast, or multi-product allocation.

## Agreed model

Inputs: price per unit (USD), variable cost per unit (USD), units sold (whole count), and fixed cost (USD for the same sales period). Each value is nonnegative and at most 1,000,000. Money admits up to two decimal places. Empty, malformed, negative, too-precise, fractional-quantity, non-finite and over-limit values produce an associated field error and no stale result. Decimal notation only; no exponent, currency symbols or commas in inputs.

Price and cost are constant and every entered unit sells. Contribution per unit is price minus variable cost: the amount from each sale available to pay fixed costs, then profit. Revenue is price times units. Variable cost is unit cost times units; total cost adds fixed cost. Profit is revenue minus total cost. Monetary arithmetic uses integer cents to avoid binary fractional-cent errors. Under the bounds all integer operations are safely below JavaScript's exact integer limit.

For positive contribution, theoretical break-even is fixed cost divided by contribution. Whole-unit break-even rounds that count up; the whole-unit result is authoritative and theoretical display rounds to two decimals. For positive fixed cost with zero or negative contribution, no quantity breaks even. For zero fixed cost, zero units already breaks even; negative contribution loses money on every additional sale. Currency always displays two decimals including negative and zero values. Break-even may exceed the allowed scenario quantity; explain that explicitly.

## Independently derived examples

The student's baseline is price 20, unit cost 12, units 100, fixed 500: revenue 2000, variable cost 1200, total cost 1700, contribution 8, profit 300, theoretical count 500/8 = 62.5, whole count 63. At 62 units profit is 496-500 = -4; at 63 it is 504-500 = 4.

Equal price/cost 12/12, 100 units, fixed 500: contribution 0 and profit -500; no break-even. Price 10, cost 12, 100 units, fixed 0: contribution -2 and profit -200; zero units breaks even, additional sales lose money. Price .30, cost .20, 3 units, fixed .30: 10 cents × 3 - 30 cents = zero profit; 3 units breaks even exactly. All-zero inputs: zero costs, profit and break-even. Price 1,000,000, cost 0, quantity 1,000,000, fixed 1,000,000: revenue 1,000,000,000,000 and profit 999,999,000,000; break-even 1 unit. Price .01, cost 0, quantity 1, fixed 1,000,000 requires 100,000,000 units, beyond the scenario input limit.

## Interaction and acceptance

A single form opens with the synthetic baseline. Calculate validates every input and focuses the first error. Editing any input removes old results until recalculation. Reset example restores the initial values/results. The requested second-version Load decimal example button sets price 19.90, cost 19.80, quantity 1000 and fixed cost 100, then calculates immediately. Its independent expected contribution is 10 cents; 1000 × 10 cents − 10000 cents = zero profit and exactly 1000 break-even units. Both presets clear prior validation errors and work by keyboard. Outputs display revenue, variable cost, total cost, unit contribution, profit, whole-unit break-even and explanatory theoretical break-even. Labels explicitly identify USD, units and one period. Error messages must be associated with fields, announced, and understandable without color. Main controls work by keyboard with visible focus. Results remain legible at desktop and 320 CSS pixels without horizontal overflow. Explain the contribution and assumptions adjacent to results.

Use unchanged navy #012169 and royal #00539B, Georgia headings and Arial body fallback. No institutional identity, affiliation or endorsement claims. No external assets or requests. Public source link and official bundled Pages workflow are included before final evaluation. Only app/ is published.

## Agreement and remaining questions

The simulated student agreed to the core model, scope, input limits and default example in the initial interview. The simulated student confirmed the detailed plan before implementation. Their concern: a lower break-even volume does not make a price good if demand falls, and unsold inventory/capacity matter. The app must distinguish entered quantity from forecast sales and state it cannot determine an optimal price. The simulated student subsequently requested the decimal-example preset described above after the verified first publication. This is a new interaction requirement; the calculation model is unchanged. No remaining material model questions.
