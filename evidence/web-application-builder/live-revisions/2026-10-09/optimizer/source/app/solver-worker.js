import loadHighs from 'highs';
import wasmUrl from 'highs/runtime?url';
import { modelText, validate } from './model.js';

self.onmessage = async ({ data: scenario }) => {
  try {
    if (validate(scenario).length) throw Error('Invalid scenario.');
    self.postMessage({ kind: 'phase', text: 'Loading the local solver…' });
    const highs = await loadHighs({ locateFile: () => wasmUrl });
    const options = { output_flag: false, time_limit: 5, mip_rel_gap: 0 };
    self.postMessage({ kind: 'phase', text: 'Finding a whole-batch allocation…' });
    const integer = highs.solve(modelText(scenario), options);
    self.postMessage({ kind: 'phase', text: 'Checking the fractional upper bound…' });
    const relaxation = highs.solve(modelText(scenario, false), options);
    self.postMessage({ kind: 'phase', text: 'Testing 60 extra minutes of each resource…' });
    const expansions=scenario.capacities.map((capacity,r)=>{
      if(capacity>9940)return null;
      const changed=structuredClone(scenario);changed.capacities[r]+=60;
      return highs.solve(modelText(changed), options);
    });
    self.postMessage({ kind: 'result', integer, relaxation, expansions });
  } catch (error) { self.postMessage({ kind: 'error', message: error.message }); }
};
