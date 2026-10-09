import './theme/duke-fonts.css';
import './theme/duke-tokens.css';
import './style.css';
import * as echarts from 'echarts';
import {echartsTheme} from './theme/echarts.js';
import {Engine} from './engine.js';
import {schemas,descriptions,dataset} from './data.js';
import {queries} from './queries.js';
import {isMoney,isNumeric,fieldLabel,resultValue} from './presentation.js';
const $=id=>document.getElementById(id);
const el=(tag,text)=>{const node=document.createElement(tag);node.textContent=text;return node;};
let engine,version=0,ready=false,busy=false,result=null,page=0,chart,activeDataset;
const resize=new ResizeObserver(()=>chart?.resize());resize.observe($('chart'));
function buttons(){ $('run').disabled=!ready||busy;$('cancel').disabled=!busy;$('export').disabled=!result||busy; }
function insertIdentifier(name) {
  const editor=$('sql');editor.setRangeText(`"${name}"`,editor.selectionStart,editor.selectionEnd,'end');editor.focus();resultOrigin();
}
function schema(){
  const data=dataset($('dataset').value);$('counts').textContent=`${data.orders.length.toLocaleString()} orders · ${data.line_items.length.toLocaleString()} lines · ${data.shipment_lines.length.toLocaleString()} shipment events`;
  $('schema').replaceChildren(...Object.entries(schemas).map(([name,fields])=>{
    const section=document.createElement('details');section.append(el('summary',`${name} · ${data[name].length.toLocaleString()} rows`),el('p',descriptions[name]));
    const table=el('button',`Insert ${name}`);table.className='schema-insert';table.onclick=()=>insertIdentifier(name);section.append(table);
    for(const column of Object.keys(fields)){const button=el('button',column);button.className='schema-insert column';button.setAttribute('aria-label',`Insert ${column} from ${name}`);button.onclick=()=>insertIdentifier(column);section.append(button);}
    const types=document.createElement('details');types.className='storage-types';types.append(el('summary','Storage types'),el('p',Object.entries(fields).map(([column,type])=>`${column}: ${type}`).join(' · ')));section.append(types);return section;
  }));
}
async function reset(run=true){
  activeDataset=$('dataset').value;const current=++version;engine?.stop('Database reset.');engine=new Engine();const active=engine;ready=false;busy=false;result=null;$('chart-panel').hidden=true;$('executed').hidden=true;$('result-origin').textContent='';$('result-head').replaceChildren();$('result-body').replaceChildren();$('result-types').textContent='';$('caption').textContent='Exact query values';$('page-note').textContent='';$('previous').disabled=true;$('next').disabled=true;buttons();schema();
  $('engine-status').textContent='Loading the local engine and building the selected tables…';$('result-status').textContent='Waiting for the database.';
  try{await active.open($('dataset').value);if(current!==version)return;ready=true;buttons();$('engine-status').textContent='Ready · local engine · read-only queries · no external SQL access';if(run)await runQuery();}
  catch(error){if(current===version){$('engine-status').textContent=`Database could not start: ${error.message||'unknown engine error'}. Use Reset database to retry.`;buttons();}}
}
function showPage(){
  $('result-head').replaceChildren();const header=document.createElement('tr');for(const field of result.fields){const th=el('th',fieldLabel(field));th.scope='col';if(isNumeric(field))th.className='numeric';header.append(th);}$('result-head').append(header);
  $('result-body').replaceChildren(...result.rows.slice(page*50,(page+1)*50).map(values=>{const tr=document.createElement('tr');for(const [index,value] of values.entries()){const field=result.fields[index],td=el('td',resultValue(field,value));if(isNumeric(field))td.classList.add('numeric');if(value===null)td.classList.add('null');tr.append(td);}return tr;}));
  $('caption').textContent=result.fields.some(isMoney)?'Known money columns display exact USD. Downloaded CSV retains raw integer cents and original column names.':'Exact query values. Numeric units come from your query; aliases do not imply currency.';
  $('result-types').textContent=result.fields.map(field=>`${field.name}: ${field.type}`).join(' · ');
  $('page-note').textContent=result.rows.length?`Rows ${page*50+1}–${Math.min((page+1)*50,result.rows.length)} of ${result.rows.length}${result.capped?' shown':''}`:'No rows';
  $('previous').disabled=page===0;$('next').disabled=(page+1)*50>=result.rows.length;
}
function showChart(){
  const [category,measure]=result.fields;
  const values=result.rows.map(row=>Number(row[1]));
  const numeric=measure&&isNumeric(measure);
  const eligible=result.fields.length===2&&category.typeId===5&&numeric&&!result.capped&&result.rows.length>0&&result.rows.length<=20&&result.rows.every(row=>row[0]&&row[1]!==null)&&new Set(result.rows.map(row=>row[0])).size===result.rows.length&&values.every(value=>Number.isFinite(value)&&Math.abs(value)<=Number.MAX_SAFE_INTEGER);
  $('chart-panel').hidden=!eligible;if(!eligible){chart?.clear();return;}
  chart??=echarts.init($('chart'),echartsTheme());
  const cents=isMoney(measure),series=values.map(n=>cents?n/100:n);
  chart.resize();chart.setOption({animation:false,aria:{enabled:true,label:{description:`${fieldLabel(measure)} by ${category.name}. Exact values follow in the result table.`}},grid:{left:10,right:25,top:20,bottom:25,containLabel:true},tooltip:{trigger:'axis',renderMode:'richText',confine:true,valueFormatter:value=>cents?new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',minimumFractionDigits:0,maximumFractionDigits:2}).format(value):String(value)},xAxis:{type:'value',splitNumber:3,axisLabel:{hideOverlap:true,formatter:value=>cents?new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',notation:'compact',maximumFractionDigits:1}).format(value):value}},yAxis:{type:'category',inverse:true,data:result.rows.map(row=>row[0]),axisLabel:{width:130,overflow:'truncate',margin:12}},series:[{type:'bar',data:series,barMaxWidth:28,itemStyle:{color:'#00539B'},emphasis:{itemStyle:{color:'#00539B'}},blur:{itemStyle:{color:'#00539B',opacity:1}}}]},true);
  $('chart-note').textContent=`${fieldLabel(measure)} by ${category.name}. ${cents?'Chart in approximate USD; exact dollar values in the table, raw cents in CSV.':'Chart uses the numeric column’s units; exact values in the table.'} Long category names are fully readable in the table.`;
}
async function runQuery(){
  if(!ready||busy)return;const current=version,sql=$('sql').value;busy=true;buttons();$('result-status').textContent='Running query… Cancel stops the worker.';
  try{const next=await engine.query(sql);if(current!==version)return;result={...next,sql};$('executed-sql').textContent=sql;$('executed').hidden=false;resultOrigin();page=0;showPage();showChart();$('result-status').textContent=`${result.rows.length} row${result.rows.length===1?'':'s'}${result.capped?' shown; more rows exist (500-row cap)':''} · ${Math.round(result.ms)} ms. ${result.rows.length?'':'The query succeeded with an empty result.'}`;}
  catch(error){if(current!==version)return;$('result-status').textContent=`Query failed: ${error.message||'unknown engine error'}. Your SQL is unchanged.${result?' Previous result remains below.':''}`;if(engine.disposed){ready=false;$('engine-status').textContent='Worker stopped. Reset the database to continue with the same SQL.';}}
  finally{if(current===version){busy=false;buttons();}}
}
$('starter').replaceChildren(...[...queries,{id:'custom',title:'Custom query'}].map(q=>{const option=el('option',q.title);option.value=q.id;return option;}));
function resultOrigin(){const selected=queries.find(q=>q.sql===$('sql').value);$('starter').value=selected?.id||'custom';$('query-note').textContent=selected?.note||'Custom SQL. Run when ready; previous results stay visible until a query succeeds.';$('result-origin').textContent=result?($('sql').value===result.sql?'Results match the editor.':'Editor changed. Results below belong to the last completed SQL shown here.'):'No completed result yet.';}
$('sql').addEventListener('input',resultOrigin);
function chooseQuery(){const q=queries.find(q=>q.id===$('starter').value);if(!q)return;$('sql').value=q.sql;resultOrigin();}
$('starter').addEventListener('change',chooseQuery);chooseQuery();
$('query-form').addEventListener('submit',event=>{event.preventDefault();void runQuery();});
$('sql').addEventListener('keydown',event=>{if(event.key==='Enter'&&(event.ctrlKey||event.metaKey)){event.preventDefault();void runQuery();}});
$('cancel').addEventListener('click',()=>engine.stop());
$('reset').addEventListener('click',()=>void reset(false));
$('dataset').addEventListener('change',()=>void reset());
$('lesson').addEventListener('click',()=>{$('starter').value='mistake';chooseQuery();$('sql').focus();if($('dataset').value!=='tiny'){$('dataset').value='tiny';void reset();}else void runQuery();});
$('previous').addEventListener('click',()=>{page--;showPage();});$('next').addEventListener('click',()=>{page++;showPage();});
function download(text,name,type){const url=URL.createObjectURL(new Blob([text],{type}));const link=document.createElement('a');link.href=url;link.download=name;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
$('download-sql').addEventListener('click',()=>download($('sql').value,'fulfillment-query.sql','text/plain'));
$('export').addEventListener('click',()=>{
  const quote=value=>'"'+String(value??'').replaceAll('"','""')+'"';
  const safe=value=>typeof value==='string'&&/^[=+\-@\t\r]/.test(value)?"'"+value:value;
  const rows=[result.fields.map(f=>safe(f.name)),...result.rows.map(row=>row.map((value,index)=>result.fields[index].typeId===5?safe(value):value))];
  download(rows.map(row=>row.map(quote).join(',')).join('\r\n')+'\r\n','fulfillment-results.csv','text/csv');
});
$('notices').href=import.meta.env.BASE_URL+'THIRD-PARTY-NOTICES.txt';
window.addEventListener('pagehide',event=>{if(!event.persisted){resize.disconnect();chart?.dispose();void engine?.close();}});
await Promise.all([document.fonts.load('400 16px "EB Garamond"'),document.fonts.load('400 16px "Open Sans"'),document.fonts.load('600 16px "Open Sans"')]);
void reset();
window.addEventListener('pageshow',()=>requestAnimationFrame(()=>{if($('dataset').value!==activeDataset)void reset();else resultOrigin();}));
