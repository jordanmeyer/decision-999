import React, { useEffect, useRef, useState } from 'react';
import { ReactFlow, useNodesState, useEdgesState, addEdge } from '@xyflow/react';
import mermaid from 'mermaid';
import { Timeline } from 'vis-timeline/standalone';
import Gantt from 'frappe-gantt';
import { animate } from 'motion';
import '@xyflow/react/dist/style.css';
import 'vis-timeline/styles/vis-timeline-graph2d.css';
import './vendor/frappe-gantt.css';
import './theme/duke-tokens.css';
import './theme/base.css';
import './theme/react-flow.css';
import './theme/vis-timeline.css';
import './theme/frappe-gantt.css';
import './style.css';
import { mermaidTheme } from './theme/mermaid.js';
import { tasks, inclusiveDays } from './model.js';

export function App() {
  const [view, setView] = useState('Process');
  const [nodes, , onNodesChange] = useNodesState([
    { id: 'a', position: { x: 0, y: 0 }, data: { label: 'Prepare' } },
    { id: 'b', position: { x: 220, y: 0 }, data: { label: 'Launch' } }
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const panel = useRef();
  const schedule = useRef();
  const gantt = useRef();

  useEffect(() => {
    if (view === 'Process') return;
    let disposed = false;
    let cleanup = () => {};
    const element = view === 'Schedule' ? schedule.current : panel.current;
    if (view === 'Explanation') {
      mermaid.initialize(mermaidTheme());
      mermaid.render('ops-diagram', 'flowchart LR; A[Prepare] --> B[Launch]')
        .then(({ svg }) => { if (!disposed) element.innerHTML = svg; });
    }
    if (view === 'Timeline') {
      const label = document.createElement('span');
      label.textContent = 'Launch';
      const timeline = new Timeline(element, [{
        id: 1, content: label, start: new Date(2026, 0, 8), end: new Date(2026, 0, 10)
      }], { start: new Date(2026, 0, 1), end: new Date(2026, 0, 15), showCurrentTime: false });
      cleanup = () => timeline.destroy();
    }
    // Frappe has no destroy method. This container/instance lives until document unload.
    if (view === 'Schedule' && !gantt.current) {
      gantt.current = new Gantt(element, tasks, { view_mode: 'Day', readonly: true, popup: false });
    }
    const animation = animate(element, { transform: ['translateY(6px)', 'translateY(0px)'] }, {
      duration: matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : .15
    });
    return () => {
      disposed = true;
      animation.stop();
      cleanup();
      if (view !== 'Schedule') element.replaceChildren();
    };
  }, [view]);

  return <>
    <nav aria-label="Planning view">
      {['Process', 'Explanation', 'Timeline', 'Schedule'].map(name =>
        <button key={name} onClick={() => setView(name)} aria-pressed={name === view}>{name}</button>)}
    </nav>
    <p>Prepare: January 5–7 ({inclusiveDays('2026-01-05', '2026-01-07')} days). Launch: January 8–9 (2 days).</p>
    {view === 'Process' && <>
      <button onClick={() => setEdges([{ id: 'a-b', source: 'a', target: 'b' }])}>Connect Prepare to Launch</button>
      <button onClick={() => setEdges([])}>Clear connections</button>
      <p role="status">Connections: {edges.length}</p>
      <div style={{ height: 320 }}><ReactFlow nodes={nodes} edges={edges}
        onNodesChange={onNodesChange} onEdgesChange={onEdgesChange}
        onConnect={edge => setEdges(current => addEdge(edge, current))} fitView /></div>
    </>}
    {['Explanation', 'Timeline'].includes(view) &&
      <div ref={panel} key={view} className={`panel wide ${view === 'Timeline' ? 'bab-timeline' : ''}`} />}
    <div ref={schedule} hidden={view !== 'Schedule'} className="panel wide bab-gantt" />
  </>;
}
