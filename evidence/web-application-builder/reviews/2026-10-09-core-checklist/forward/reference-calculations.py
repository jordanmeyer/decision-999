"""Independent planning arithmetic; no app/library/runtime behavior is tested."""

import json
from math import ceil
from statistics import NormalDist


def process():
    arrivals = 480
    visits = [1, 1, 0.3, 1]
    touch = [8, 14, 25, 10]
    wait = [60, 240, 140, 90]
    capacity = [6000, 9000, 3150, 6000]
    work = [arrivals * v * t for v, t in zip(visits, touch)]
    baseline_time = sum(v * (t + w) for v, t, w in zip(visits, touch, wait))
    result = {
        "finance_visits": arrivals * visits[2],
        "workload": work,
        "utilization": [w / c for w, c in zip(work, capacity)],
        "finance_overload": work[2] - capacity[2],
        "baseline_max_arrivals": min(c / (v * t) for c, v, t in zip(capacity, visits, touch)),
        "scenario_time": baseline_time,
        "touch_time": sum(v * t for v, t in zip(visits, touch)),
        "wait_time": sum(v * w for v, w in zip(visits, wait)),
        "finance_20_work": arrivals * 0.3 * 20,
        "finance_20_utilization": arrivals * 0.3 * 20 / 3150,
        "finance_20_headroom": 3150 - arrivals * 0.3 * 20,
        "finance_20_max_arrivals": min(6000 / 8, 9000 / 14, 3150 / (0.3 * 20), 6000 / 10),
        "finance_20_time": baseline_time - 0.3 * 5,
        "finance_at_capacity_touch": 3150 / (arrivals * 0.3),
        "finance_wait_zero_time": baseline_time - 0.3 * 140,
        "shared_finance_work": arrivals * (0.3 * 25 + 5),
        "finance_bypass_time": baseline_time - 0.3 * (25 + 140),
    }
    assert result["scenario_time"] == 471.5
    assert result["finance_overload"] == 450
    assert result["finance_20_work"] == 2880
    assert result["shared_finance_work"] == 6000
    return result


def inventory():
    normal = NormalDist(500, 120)
    candidates = list(range(0, 1001, 10))

    def profit(q, d, fixed=8000):
        return 45 * min(q, d) + 10 * max(q - d, 0) - 21 * q - (fixed if q else 0)

    def model(q, fixed=8000):
        if q == 0:
            return {"expected_profit": 0, "loss_probability": 0}
        expected = 24 * q - 35 * sum(normal.cdf(k + 0.5) for k in range(q)) - fixed
        cutoff = ceil((11 * q + fixed) / 35) - 1
        loss = 1 if 24 * q - fixed < 0 else (normal.cdf(cutoff + 0.5) if cutoff >= 0 else 0)
        return {"expected_profit": expected, "loss_probability": loss}

    def recommendation(cap, fixed=8000):
        feasible = [q for q in candidates if model(q, fixed)["loss_probability"] <= cap]
        q = max(feasible, key=lambda q: (model(q, fixed)["expected_profit"], -q))
        return {"q": q, **model(q, fixed), "positive_feasible_count": sum(q > 0 for q in feasible)}

    ratio = 24 / 35
    hand_demands = [0, 300, 500, 800]
    hand_profits = [profit(460, d) for d in hand_demands]
    result = {
        "critical_ratio": ratio,
        "continuous_quantile": normal.inv_cdf(ratio),
        "whole_unit_optimum": next(q for q in range(1001) if normal.cdf(q + 0.5) >= ratio),
        "zero_demand_mass": normal.cdf(0.5),
        "batch_rows": {q: model(q) for q in [330, 340, 460, 470, 550, 560, 570]},
        "binding_15_percent": recommendation(0.15),
        "nonbinding_25_percent": recommendation(0.25),
        "no_positive_feasible_5_percent": recommendation(0.05),
        "no_fixed_cost": recommendation(0.15, fixed=0),
        "profit_sacrifice": model(560)["expected_profit"] - model(460)["expected_profit"],
        "minimum_positive_loss_q": min(candidates[1:], key=lambda q: model(q)["loss_probability"]),
        "deterministic_demand_500": {q: profit(q, 500) for q in [460, 500, 560]},
        "deterministic_zero_demand_q460": profit(460, 0),
        "hand_fixture": {
            "demands": hand_demands,
            "q": 460,
            "profits": hand_profits,
            "sum_profit": sum(hand_profits),
            "mean_profit": sum(hand_profits) / len(hand_profits),
            "loss_probability": sum(p < 0 for p in hand_profits) / len(hand_profits),
        },
        "strict_loss_boundary": {d: profit(350, d, fixed=0) for d in [109, 110]},
    }
    assert result["binding_15_percent"]["q"] == 460
    assert result["nonbinding_25_percent"]["q"] == 560
    assert result["no_positive_feasible_5_percent"]["positive_feasible_count"] == 0
    assert result["whole_unit_optimum"] == 558
    assert result["hand_fixture"]["mean_profit"] == -2385
    assert all(min(d, 460) + max(460 - d, 0) == 460 for d in hand_demands)
    assert result["strict_loss_boundary"] == {109: -35, 110: 0}
    return result


def board():
    scenarios = [("downside", 0.25, 24000, 0), ("base", 0.5, 40000, 0.1), ("upside", 0.25, 60000, 0.15)]
    alternatives = [("full", 1800000, 750000, [70000] * 3), ("limited", 900000, 450000, [20000, 30000, 30000]), ("defer", 0, 0, [0] * 3)]

    def calculate(multiplier=1, discount=0.1, margin=50, floor=-1000000):
        rows = {}
        for name, upfront, fixed, caps in alternatives:
            cases = {}
            for scenario, weight, demand1, growth in scenarios:
                demand = [int(demand1 * (1 + growth) ** t * multiplier + 0.5) for t in range(3)]
                sold = [min(d, c) for d, c in zip(demand, caps)]
                cash = [margin * u - fixed for u in sold]
                npv = -upfront + sum(c / (1 + discount) ** (t + 1) for t, c in enumerate(cash))
                cases[scenario] = {"weight": weight, "demand": demand, "sold": sold, "unserved": [d - s for d, s in zip(demand, sold)], "cash_flow": cash, "npv": npv}
            rows[name] = {
                "scenarios": cases,
                "weighted_npv": sum(c["weight"] * c["npv"] for c in cases.values()),
                "worst_npv": min(c["npv"] for c in cases.values()),
                "negative_npv_weight": sum(c["weight"] for c in cases.values() if c["npv"] < 0),
                "upfront": upfront,
            }
        feasible = [name for name, r in rows.items() if r["worst_npv"] >= floor]
        chosen = max(feasible, key=lambda name: (rows[name]["weighted_npv"], -rows[name]["upfront"])) if feasible else None
        return {"recommendation": chosen, "alternatives": rows}

    baseline = calculate()
    counterfactual = calculate(multiplier=0.7)
    result = {
        "baseline": baseline,
        "demand_70_percent": counterfactual,
        "baseline_expected_full_advantage": baseline["alternatives"]["full"]["weighted_npv"] - baseline["alternatives"]["limited"]["weighted_npv"],
        "zero_floor_recommendation": calculate(floor=0)["recommendation"],
        "zero_demand_recommendation": calculate(multiplier=0)["recommendation"],
        "zero_discount_full_base_npv": calculate(discount=0)["alternatives"]["full"]["scenarios"]["base"]["npv"],
        "zero_margin_full_base_npv": calculate(margin=0)["alternatives"]["full"]["scenarios"]["base"]["npv"],
        "no_feasible_high_floor": calculate(floor=5000000)["recommendation"],
        "base_full_year1_bridge": {"revenue": 40000 * 120, "variable_cost": 40000 * 70, "fixed_cost": 750000, "operating_cash": 40000 * 50 - 750000, "cumulative_including_time0": 40000 * 50 - 750000 - 1800000},
    }
    assert baseline["recommendation"] == "full"
    assert counterfactual["recommendation"] == "limited"
    assert result["zero_demand_recommendation"] == "defer"
    assert result["zero_discount_full_base_npv"] == 2570000
    assert baseline["alternatives"]["full"]["scenarios"]["upside"]["unserved"][2] == 9350
    assert result["no_feasible_high_floor"] is None
    return result


print(json.dumps({"scope": "Executed independent planning arithmetic only; no application or browser tested.", "process": process(), "inventory": inventory(), "board": board()}, indent=2))
