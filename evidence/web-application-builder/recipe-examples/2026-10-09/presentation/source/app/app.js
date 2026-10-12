import Reveal from 'reveal.js';
import 'reveal.js/reveal.css';
import './theme/duke-tokens.css';
import './theme/reveal.css';
import './style.css';
import {baseline,presets,parseInputs,calculate,sensitivity,money,thresholdText,decisionRecord} from './model.js';
const $=id=>document.getElementById(id),keys=['price','cost','quantity','fixed'];
const el=(tag,text)=>{const node=document.createElement(tag);node.textContent=text;return node;};
let input={...baseline},pending=false,chartWidth=0;
const deck=new Reveal($('deck'),{embedded:true,hash:false,respondToHashChanges:false,scrollActivationWidth:null,width:'100%',height:'100%',margin:0,minScale:1,maxScale:1,center:false,keyboardCondition:()=>document.activeElement===$('deck'),transition:'none',backgroundTransition:'none',controls:false,progress:true,overview:false,help:false,pause:false,touch:false});
function fillForm(){for(const key of keys)$(key).value=key==='quantity'?String(input[key]):(input[key]/100).toFixed(2);clearErrors();}
function clearErrors(){for(const key of keys){$(key).removeAttribute('aria-invalid');$(`${key}-error`).textContent='';}}
function setPending(value){pending=value;$('applied-state').textContent=value?'Unapplied edits. Slides show the last applied assumptions.':'Current assumptions applied. All figures are synthetic.';$('applied-state').classList.toggle('pending',value);$('copy-record').disabled=value;}
function render(){
  const result=calculate(input),threshold=thresholdText(result);
  $('profit').textContent=money(result.profit);$('profit').style.setProperty('--amount-length',$('profit').textContent.length);
  $('result-condition').textContent=result.profit>0?'Surplus after the entered costs.':result.profit===0?'Exactly covers the entered costs.':'Shortfall against the entered costs.';
  for(const [id,value]of [['revenue',result.revenue],['variable',result.variable],['fixed-result',input.fixed],['contribution',result.contribution]])$(id).textContent=money(value);
  $('threshold-label').textContent=threshold.label;$('threshold-value').textContent=threshold.value;$('threshold-detail').textContent=threshold.detail;
  $('sensitivity-assumptions').textContent=`Price ${money(input.price)} · unit variable cost ${money(input.cost)} · fixed cost ${money(input.fixed)}. Current quantity: ${input.quantity.toLocaleString('en-US')} kits.`;
  $('sensitivity-body').replaceChildren(...sensitivity(input).map(row=>{const tr=document.createElement('tr');if(row.quantity===input.quantity)tr.className='current';tr.append(el('td',`${row.quantity.toLocaleString('en-US')}${row.quantity===input.quantity?' · current':''}`),el('td',money(row.profit)));return tr;}));
  $('comparison-body').replaceChildren(...[...presets,{name:'Current applied',...input}].map((scenario,index)=>{const r=calculate(scenario),t=thresholdText(r),tr=document.createElement('tr');if(index===3)tr.className='current';const thresholdCell=el('td',t.value);thresholdCell.append(el('small',t.label));tr.append(el('td',scenario.name),el('td',`${money(scenario.price)} / ${money(scenario.cost)}`),el('td',`${scenario.quantity.toLocaleString('en-US')} / ${money(scenario.fixed)}`),el('td',money(r.profit)),thresholdCell);return tr;}));
  $('decision-status').textContent=result.profit>0?`Current case: ${money(result.profit)} surplus. Validate demand and complete the cost picture before committing.`:result.profit===0?'Current case: exactly cost-covered. There is no buffer for lower volume or omitted costs.':`Current case: ${money(-result.profit)} shortfall. Revise the assumptions or accept an explicit loss limit before committing.`;
  $('decision-record').value=decisionRecord(input);$('copy-status').textContent='Copy includes current assumptions, arithmetic and the next validation steps.';
  renderChart();
  // Re-activate the current index so Reveal refreshes its native live announcement.
  deck.slide(deck.getIndices().h);
}
function renderChart(){
  if(deck.getIndices().h!==3)return;
  const width=Math.max(240,$('chart').clientWidth),height=310,left=80,right=18,top=24,bottom=45,rows=sensitivity(input),maxQ=rows.at(-1).quantity;
  chartWidth=width;const min=Math.min(0,...rows.map(r=>r.profit)),max=Math.max(0,...rows.map(r=>r.profit)),span=max-min||100;
  const low=min-span*.12,high=max+span*.12,x=q=>left+q/maxQ*(width-left-right),y=c=>top+(high-c)/(high-low)*(height-top-bottom);
  const svgNode=(tag,attrs,text)=>{const n=document.createElementNS('http://www.w3.org/2000/svg',tag);for(const[k,v]of Object.entries(attrs))n.setAttribute(k,String(v));if(text!==undefined)n.textContent=text;return n;};
  const svg=svgNode('svg',{viewBox:`0 0 ${width} ${height}`,role:'img','aria-labelledby':'chart-title chart-desc'});
  svg.append(svgNode('title',{id:'chart-title'},'Operating result as quantity changes'),svgNode('desc',{id:'chart-desc'},'A line joins synthetic quantity scenarios holding price, unit variable cost and fixed cost constant. Exact quantities and dollar results are listed in the adjacent table.'));
  const compact=c=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',notation:'compact',maximumFractionDigits:1}).format(c/100);
  const ticks=[0];for(const tick of [min,max])if(ticks.every(existing=>Math.abs(y(existing)-y(tick))>=22))ticks.push(tick);
  for(const tick of ticks){svg.append(svgNode('line',{x1:left,x2:width-right,y1:y(tick),y2:y(tick),stroke:tick===0?'#666666':'#d6d7d7','stroke-width':tick===0?1.5:1}),svgNode('text',{x:left-8,y:y(tick)+4,'text-anchor':'end'},compact(tick)));}
  for(const tick of [...new Set([0,Math.round(maxQ/2),maxQ])])svg.append(svgNode('text',{x:x(tick),y:height-22,'text-anchor':tick===0?'start':tick===maxQ?'end':'middle'},tick.toLocaleString('en-US')));
  svg.append(svgNode('text',{x:left,y:13,class:'axis-title'},'Operating result · USD'),svgNode('text',{x:width-right,y:height-3,'text-anchor':'end',class:'axis-title'},'Whole kits sold'));
  svg.append(svgNode('polyline',{points:rows.map(r=>`${x(r.quantity)},${y(r.profit)}`).join(' '),fill:'none',stroke:'#012169','stroke-width':3}));
  for(const row of rows){const point=svgNode('circle',{cx:x(row.quantity),cy:y(row.profit),r:row.quantity===input.quantity?6:4,fill:row.quantity===input.quantity?'#c84e00':'#ffffff',stroke:row.quantity===input.quantity?'#c84e00':'#012169','stroke-width':2});point.append(svgNode('title',{},`${row.quantity} kits: ${money(row.profit)}${row.quantity===input.quantity?' (current)':''}`));svg.append(point);}
  $('chart').replaceChildren(svg);
}
function navigate(index){deck.slide(index);$('deck').focus();}
function updateSlide(){const index=deck.getIndices().h,slide=deck.getCurrentSlide();$('slide-select').value=String(index);$('slide-status').textContent=`${index+1} / 6 · ${slide.dataset.title}`;$('previous').disabled=index===0;$('next').disabled=index===5;$('context-note').textContent=slide.querySelector('.notes').textContent;renderChart();}
$('assumptions').addEventListener('input',()=>{setPending(true);$('form-status').textContent='Edits pending. Apply all four values or restore the last applied values.';});
$('assumptions').addEventListener('submit',event=>{event.preventDefault();clearErrors();const parsed=parseInputs(Object.fromEntries(keys.map(key=>[key,$(key).value])));if(parsed.errors){for(const [key,message]of Object.entries(parsed.errors)){$(key).setAttribute('aria-invalid','true');$(`${key}-error`).textContent=message;}setPending(true);$('form-status').textContent='Correct the marked fields. The previous applied scenario remains visible.';$(Object.keys(parsed.errors)[0]).focus();return;}input=parsed.values;setPending(false);render();$('form-status').textContent='All four assumptions applied. Current calculations and the decision record are updated.';});
$('restore').addEventListener('click',()=>{fillForm();setPending(false);$('form-status').textContent='Restored the last applied values.';});
for(const button of document.querySelectorAll('[data-preset]'))button.addEventListener('click',()=>{const {name,...values}=presets[Number(button.dataset.preset)];input={...values};fillForm();setPending(false);render();$('form-status').textContent=`${name} applied to all four fields.`;});
for(const button of document.querySelectorAll('[data-slide]'))button.addEventListener('click',()=>navigate(Number(button.dataset.slide)));
$('slide-select').addEventListener('change',()=>navigate(Number($('slide-select').value)));
$('previous').addEventListener('click',()=>deck.prev());$('next').addEventListener('click',()=>deck.next());
$('copy-record').addEventListener('click',async()=>{if(pending)return;const text=$('decision-record').value;try{await navigator.clipboard.writeText(text);$('copy-status').textContent='Decision record copied, including current assumptions and validation steps.';}catch{$('decision-record').focus();$('decision-record').select();$('copy-status').textContent='Clipboard access was unavailable. The full record is selected; use Ctrl/⌘+C.';}});
$('notices').href=import.meta.env.BASE_URL+'THIRD-PARTY-NOTICES.txt';
await deck.initialize();deck.on('slidechanged',updateSlide);fillForm();render();updateSlide();
const resize=new ResizeObserver(()=>{if($('chart').clientWidth!==chartWidth)renderChart();});resize.observe($('chart'));
window.addEventListener('pagehide',event=>{if(!event.persisted){resize.disconnect();deck.destroy();}});
