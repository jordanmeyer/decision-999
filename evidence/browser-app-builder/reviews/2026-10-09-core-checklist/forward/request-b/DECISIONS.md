# Request B — simulated decisions

These are simulated agreements, not real student approvals.

- Interpret Normal(500,120) as mean and standard deviation in demand units; round to nearest whole unit, then clip at zero. Do not replace clipping with a truncated/renormalized normal.
- Preserve price 45, cost 21, salvage 10 and batch size 10. Add labeled synthetic assumptions: avoidable $8,000 fixed seasonal cost, 1,000-unit supplier ceiling and 15% maximum probability of negative profit.
- No order avoids all cost and yields zero profit. Compare it explicitly against profitable feasible positive batches.
- Use the exact discrete model to recommend; seeded Monte Carlo explains and checks uncertainty. The seed must not change the analytical recommendation.
- Show one meaningful quantity curve and selected-quantity profit histogram. Include binding, nonbinding and no-feasible-positive-order cases.
- Cheap exact results update immediately. Run simulation is an explicit atomic step with pending/stale labeling; every quantity reuses the same demand sample.
