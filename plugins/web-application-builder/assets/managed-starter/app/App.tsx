import { useState } from 'react';

export function App() {
  const [checked, setChecked] = useState(false);
  return <main>
    <p className="eyebrow">Local project · Starter preview</p>
    <h1>Your browser app starts here.</h1>
    <p>Define a useful problem, make the assumptions explicit, and check the result.</p>
    <button type="button" onClick={() => setChecked(true)}>Check interaction</button>
    <p role="status">{checked ? 'Interaction works. Ready to plan your app.' : 'React module loaded. Preview is ready.'}</p>
    <aside>This is a starter, not an evaluated application. Plan the behavior before building it.</aside>
  </main>;
}
