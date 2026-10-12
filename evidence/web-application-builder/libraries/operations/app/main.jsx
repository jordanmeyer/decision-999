import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';

createRoot(document.querySelector('#app')).render(<App />);
document.querySelector('#status').textContent = 'Ready · React Flow + Mermaid + vis-timeline + Frappe Gantt + Motion';
