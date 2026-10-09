import React from 'react';
import {createRoot} from 'react-dom/client';
import {flushSync} from 'react-dom';
import {App} from '../app/App.jsx';
import {run,equal,rejects} from './harness.js';import {tasks,inclusiveDays} from '../app/model.js';import mermaid from 'mermaid';import {Timeline} from 'vis-timeline/standalone';import {animate} from 'motion';import {addEdge} from '@xyflow/react';
function target(){const e=document.createElement('div');e.style.cssText='width:600px;height:200px';document.querySelector('#fixture').append(e);return e;}
await run([
 ['Independent inclusive schedule dates',()=>{equal(inclusiveDays(tasks[0].start,tasks[0].end),3);equal(inclusiveDays(tasks[1].start,tasks[1].end),2);}],
 ['Reject reversed dates',()=>rejects(()=>inclusiveDays('2026-01-09','2026-01-08'))],
 ['React Flow isolated edge operation',()=>{const e=addEdge({source:'a',target:'b'},[]);equal([e.length,e[0].source,e[0].target],[1,'a','b']);}],
 ['Mermaid isolated strict diagram',async()=>{mermaid.initialize({startOnLoad:false,securityLevel:'strict',flowchart:{htmlLabels:false}});const {svg}=await mermaid.render('check-diagram','flowchart LR; A[Prepare] --> B[Launch]');equal(svg.includes('Prepare')&&svg.includes('Launch'),true);}],
 ['Mermaid malformed source rejected',async()=>{let failed=false;try{await mermaid.parse('not a diagram');}catch{failed=true;}equal(failed,true);}],
 ['vis-timeline isolated local date interval',()=>{const el=target();const t=new Timeline(el,[{id:1,content:'Launch',start:new Date(2026,0,8),end:new Date(2026,0,10)}],{showCurrentTime:false});t.setSelection([1]);equal(t.getSelection(),[1]);t.destroy();el.remove();}],
 ['Frappe Gantt rendering and repeated navigation retain one instance',()=>{
   const el=target();
   const root=createRoot(el);
   const add=document.addEventListener;
   let mouseups=0;
   document.addEventListener=function(type,...args){
     if(type==='mouseup')mouseups++;
     return add.call(this,type,...args);
   };
   try {
     flushSync(()=>root.render(React.createElement(App)));
     const visit=name=>flushSync(()=>[...el.querySelectorAll('nav button')].find(b=>b.textContent===name).click());
     visit('Schedule');
     const svg=el.querySelector('.bab-gantt svg');
     equal(!!svg,true);
     equal(el.querySelectorAll('.bar-wrapper').length,2);
     equal(el.textContent.includes('Prepare'),true);
     equal(mouseups,1);
     for(let i=0;i<5;i++){
       visit('Process');
       equal(el.querySelector('.bab-gantt').hidden,true);
       visit('Schedule');
       equal(el.querySelector('.bab-gantt').hidden,false);
       equal(el.querySelector('.bab-gantt svg')===svg,true);
     }
     equal(mouseups,1);
   } finally {
     document.addEventListener=add;
     // Keep this document-lifetime fixture mounted, as required by the recipe.
   }
 }],
 ['Motion isolated instant transition and stop',async()=>{const el=target();const a=animate(el,{transform:'translateX(0px)'},{duration:0});await a.finished;a.stop();equal(!!el.style.transform,true);el.remove();}]
]);
