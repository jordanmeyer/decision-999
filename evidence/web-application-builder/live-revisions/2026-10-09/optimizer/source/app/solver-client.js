import { interpret, validate } from './model.js';

export function createSolver(onPhase = () => {}) {
  let active;
  function cancel() {
    if (!active) return;
    const { worker, timer, reject } = active;
    active = null;
    clearTimeout(timer);
    worker.terminate();
    reject(new DOMException('Solve cancelled.', 'AbortError'));
  }
  function solve(scenario) {
    cancel();
    if (validate(scenario).length) return Promise.reject(Error('Invalid scenario.'));
    return new Promise((resolve, reject) => {
      const worker = new Worker(new URL('./solver-worker.js', import.meta.url), { type: 'module' });
      const finish = (error, result) => {
        if (active?.worker !== worker) return;
        clearTimeout(active.timer);
        active = null;
        worker.terminate();
        if (error) reject(error); else resolve(result);
      };
      const timer = setTimeout(() => finish(Error('The solver did not respond within 35 seconds. No allocation is being recommended; try again.')), 35000);
      active = { worker, timer, reject };
      worker.onmessage = ({ data }) => {
        if (active?.worker !== worker) return;
        if (data.kind === 'phase') onPhase(data.text);
        else if (data.kind === 'error') finish(Error(data.message));
        else finish(null, { integer: interpret(scenario, data.integer), relaxation: interpret(scenario, data.relaxation, false), expansions: data.expansions.map((raw,r)=>{if(!raw)return null;const s=structuredClone(scenario);s.capacities[r]+=60;return interpret(s,raw);}) });
      };
      worker.onerror = () => finish(Error('The local worker could not load or run. Check browser support, then retry.'));
      worker.postMessage(scenario);
    });
  }
  return { solve, cancel };
}
