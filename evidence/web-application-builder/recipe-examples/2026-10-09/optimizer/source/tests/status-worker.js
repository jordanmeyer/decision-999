import loadHighs from 'highs';
import wasmUrl from 'highs/runtime?url';
self.onmessage = async ({ data }) => {
  const highs = await loadHighs({ locateFile: () => wasmUrl });
  self.postMessage(highs.solve(data, { output_flag: false }));
};
