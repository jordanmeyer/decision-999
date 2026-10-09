# How Batch & Balance was built

The request was a constrained workshop: choose the best production mix, explain binding limits, explore new capacity and expose infeasible requirements. [Original planning](PLANNING-CONVERSATION.md) is explicitly simulated; it translated the workshop into three bakery products and resources. [PLAN](PLAN.md) now documents all equations, units and acceptance; [DECISIONS](DECISIONS.md) distinguishes user-authorized revision choices from that original exchange.

The first version solved mixes but left capacity value to manual edits and had no default whole-batch gap. The revision adds three+60-minute integer experiments, a590-minute oven default with a real$5 gap, and a geometric two-product lesson. It keeps actual HiGHS worker solving, bounded validation, infeasibility, cancellation, manual checks and copied rationale.

Browser App Builder Build/Evaluate and HiGHS guidance supplied the implementation workflow. HiGHS1.15.3 and its WASM run locally; plain SVG shows the feasible region. Campus Designer's public color/type guidance supplies the local EB Garamond/Open Sans pairing, with licenses included. There is no runtime service or remote data.

[Evaluation](EVALUATION.md) retains independently enumerated expected answers, browser observations and failed rounds. [Review](REVIEW.md) records independent review and [deployment](DEPLOYMENT.md) identifies what is live. No synthetic figure is evidence of real bakery performance.
