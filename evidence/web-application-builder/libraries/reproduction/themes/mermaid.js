import { duke } from './tokens.js';
export function mermaidTheme() {
  const d = duke();
  return { startOnLoad: false, securityLevel: 'strict', theme: 'base',
    flowchart: { htmlLabels: false },
    themeVariables: { fontFamily: d.body, primaryColor: d.panel, primaryTextColor: d.ink,
      primaryBorderColor: d.navy, lineColor: d.navy, secondaryColor: d.paper,
      tertiaryColor: d.panel, edgeLabelBackground: d.paper } };
}
