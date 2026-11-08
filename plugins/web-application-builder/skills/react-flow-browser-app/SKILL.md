---
name: react-flow-browser-app
description: Build editable process or decision diagrams with nodes and connections using React Flow. Use for direct manipulation; choose Mermaid for text-authored explanatory diagrams.
---

# React Flow for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `react-flow` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

For capacity or turnaround models, read [process capacity and elapsed time](../../references/decision-models.md#process-capacity-and-elapsed-time) before defining outputs. A drawing library does not establish queue stability or resource feasibility.

## Usage pattern

Read [React and TypeScript integration](../../references/react-libraries.md). Copy this standalone example into `app/recipes/react-flow.tsx`. Install the inventory’s development type packages and copy any listed declarations before typechecking.

```tsx
import { ReactFlow, useNodesState, useEdgesState, addEdge, type Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export function Example() {
  const [nodes, , onNodesChange] = useNodesState([
    { id: 'a', position: { x: 0, y: 0 }, data: { label: 'Order' } },
    { id: 'b', position: { x: 240, y: 0 }, data: { label: 'Ship' } }]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const labels = new Map(nodes.map(node => [node.id, node.data.label]));
  const connect = () => setEdges(current => addEdge({ source: 'a', target: 'b', sourceHandle: null, targetHandle: null }, current));
  return <section><button onClick={connect} disabled={!labels.has('a') || !labels.has('b')}>Connect Order to Ship</button>
    <p>{edges.length ? edges.map(edge =>
      `${labels.get(edge.source) ?? edge.source} leads to ${labels.get(edge.target) ?? edge.target}.`).join(' ') : 'No connection.'}</p>
    <div style={{ height: 280 }}><ReactFlow nodes={nodes} edges={edges}
      onNodesChange={onNodesChange} onEdgesChange={onEdgesChange}
      onConnect={edge => setEdges(current => addEdge(edge, current))} fitView /></div></section>;
}
```

Apply the project copy of react-flow.css. Keep structural vendor CSS. Maintain model rules outside diagram rendering; drawing a connection does not validate a business process. Provide ordinary buttons or forms for essential edits as a keyboard alternative.

Visual libraries follow [shared identity selection](../../references/workflow.md#shared-design); the supplied [theme assets](../../assets/library-themes/) implement the Duke default. Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Check node/edge edits, tab/focus behavior, deletion, accessible alternative controls, container resize and cleanup. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://reactflow.dev/learn) for API detail, but do not replace pinned versions or add remote services.
