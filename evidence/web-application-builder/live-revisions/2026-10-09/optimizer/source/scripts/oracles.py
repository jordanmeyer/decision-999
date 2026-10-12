"""Independent standard-library integer enumeration; never imports application code."""
from itertools import product


def enumerate_case(label, contributions, use, capacities, bounds):
    feasible = []
    for quantities in product(*(range(low, high + 1) for low, high in bounds)):
        used = [sum(a * b for a, b in zip(row, quantities)) for row in use]
        if all(a <= b for a, b in zip(used, capacities)):
            feasible.append((sum(a * b for a, b in zip(contributions, quantities)), quantities, used))
    best = max((x[0] for x in feasible), default=None)
    print(label, 'feasible', len(feasible), 'optimal', [x for x in feasible if x[0] == best])


enumerate_case('bakery', [25,22,40], [[12,10,20],[18,12,25],[8,10,15]], [480,590,360], [(4,24),(3,30),(2,18)])
enumerate_case('tiny', [5,4], [[2,1],[1,2],[1,1]], [8,8,6], [(0,8),(0,8)])
for machine in [18,19,20]:
    enumerate_case(f'workshop machine{machine}', [11,19,31], [[2,3,5],[1,3,4],[2,4,6]], [machine,18,24], [(0,6),(0,4),(0,3)])
# Tiny LP bound: objective = 2*(2x+y) + 1*(x+2y) <= 24.
# x=y=8/3 attains24, so rounding is not needed to prove the bound.
# Bakery LP certificate (in dollars): multiply oven by37/42, packing by8/7,
# and celebration upper-bound18 by5/6. The resulting objective coefficients
# are exactly25,22,40 and RHS955; the feasible mix5/5/18 attains it.

for caps in [[540,590,360],[480,650,360],[480,590,420]]:
    enumerate_case(str(caps),[25,22,40],[[12,10,20],[18,12,25],[8,10,15]],caps,[(4,24),(3,30),(2,18)])
# Revised LP certificate in dollars: oven + packing gives coefficients
# x26, y22, z40. Subtract x>=4: objective<=590+360-4=946.
# Feasible vertex x4,y43/7,z622/35 attains946.
