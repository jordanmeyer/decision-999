import React from 'react';import {createRoot} from 'react-dom/client';import {flushSync} from 'react-dom';import {MantineProvider,Button} from '@mantine/core';
import {run,equal,rejects} from './harness.js';import {parse,sample,totals} from '../app/model.js';import {TabulatorFull} from 'tabulator-tables';import Papa from 'papaparse';import * as aq from 'arquero';
await run([
 ['Mantine isolated labeled control',()=>{const el=document.createElement('div');document.querySelector('#fixture').append(el);const root=createRoot(el);flushSync(()=>root.render(React.createElement(MantineProvider,{},React.createElement(Button,{},'Apply scenario'))));equal(el.querySelector('button').textContent,'Apply scenario');flushSync(()=>root.unmount());el.remove();}],
 ['Independent full totals',()=>equal(totals(parse(sample)),{revenue:390,cost:234,profit:156})],
 ['Independent North totals',()=>equal(totals(parse(sample),'North'),{revenue:240,cost:144,profit:96})],
 ['Empty filter',()=>equal(totals(parse(sample),'Empty'),{revenue:0,cost:0,profit:0})],
 ['Papa quoted comma and escaped quote',()=>equal(Papa.parse('a,b\n"North, US","A""B"',{header:true}).data,[{a:'North, US',b:'A"B'}])],
 ['BOM and CRLF',()=>equal(totals(parse('\uFEFF'+sample.replaceAll('\n','\r\n'))),totals(parse(sample)))],
 ['Malformed row',()=>rejects(()=>parse(sample+'\nNorth,Extra'))],
 ['Missing columns',()=>rejects(()=>parse('region,product\nN,P'))],
 ['Missing numeric value',()=>rejects(()=>parse(sample.replace('10,20,12',',20,12')))],
 ['Unsupported currency precision',()=>rejects(()=>parse(sample.replace('10,20,12','10,20.001,12')))],
 ['Arquero standalone sum',()=>equal(aq.from([{x:2},{x:3}]).rollup({s:aq.op.sum('x')}).object(),{s:5})],
 ['HTML-like data preserved as text',()=>equal(parse(sample.replace('Notebook','<img src=x onerror=alert(1)>'))[0].product,'<img src=x onerror=alert(1)>')],
 ['Tabulator isolated safe formatter and filter',async()=>{const el=document.createElement('div');document.querySelector('#fixture').append(el);const t=new TabulatorFull(el,{data:[{region:'<b>North</b>'},{region:'South'}],columns:[{title:'Region',field:'region',formatter:'plaintext'}]});await new Promise(resolve=>t.on('tableBuilt',resolve));equal(el.querySelector('b'),null);t.setFilter('region','=','South');equal(t.getData('active').length,1);t.destroy();el.remove();}]
]);
