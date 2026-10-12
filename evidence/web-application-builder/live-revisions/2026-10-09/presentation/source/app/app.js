import Reveal from 'reveal.js';
import 'reveal.js/reveal.css';
import './theme/duke-tokens.css';
import './theme/duke-fonts.css';
import './theme/reveal.css';
import './style.css';
import {baseline,presets,policy,parseInputs,alternatives,recommendation,sensitivity,money,compact,thresholdText,decisionRecord} from './model.js';
const $=id=>document.getElementById(id),keys=['price','cost','quantity','fixed'];
const el=(tag,text)=>{const n=document.createElement(tag);n.textContent=text;return n;};
const slides=[...document.querySelectorAll('.slides>section')];
$('slide-select').replaceChildren(...slides.map((slide,i)=>{const option=el('option',`${i===6?'A':String(i+1).padStart(2,'0')} · ${slide.dataset.title}`);option.value=i;return option;}));
let input={...baseline},pending=false;
const deck=new Reveal($('deck'),{embedded:true,hash:false,respondToHashChanges:false,scrollActivationWidth:null,width:'100%',height:'100%',margin:0,minScale:1,maxScale:1,center:false,keyboardCondition:()=>document.activeElement===$('deck'),transition:'none',backgroundTransition:'none',controls:false,progress:true,overview:false,help:false,pause:false,touch:false});
await Promise.all([document.fonts.load('400 32px "EB Garamond"'),document.fonts.load('400 16px "Open Sans"'),document.fonts.load('600 16px "Open Sans"')]);await document.fonts.ready;await deck.initialize();
function clearErrors(){for(const key of keys){$(key).removeAttribute('aria-invalid');$(`${key}-error`).textContent='';}}
function fillForm(){for(const key of keys)$(key).value=String(key==='quantity'?input[key]:input[key]/100);clearErrors();}
function setPending(value){pending=value;$('applied-state').textContent=value?'Invalid edit: all slides retain the last valid assumptions.':'Live assumptions · synthetic annual scenario';$('applied-state').classList.toggle('pending',value);$('live-state').textContent=value?'Last valid result · correct the marked field':'Current valid assumptions';$('copy-record').disabled=value;}
function render(){
  const [full,pilot]=alternatives(input),rec=recommendation(input),threshold=thresholdText(full);
  for(const [id,text]of Object.entries({recommendation:rec.title,'recommendation-reason':rec.reason,'chosen-label':rec.choice?.name??'Defer the commitment',funding:compact(rec.choice?.cash??0),'chosen-profit':money(rec.choice?.profit??0),'chosen-stress':money(rec.choice?.stress??0),'economics-title':`${money(full.contribution)} per kit must cover ${compact(input.fixed)}.`, 'economics-caption':`${input.quantity.toLocaleString('en-US')} base kits at ${money(input.price)} each, with ${money(input.cost)} variable cost per kit.`, 'threshold-value':`${threshold.value} · full-launch cost coverage`,'threshold-detail':threshold.detail,'live-choice':rec.title,'live-profit':money(rec.choice?.cash??0),'live-caption':'Proposed base funding · conditional on validation','full-profit':money(full.profit),'full-stress':money(full.stress),'pilot-profit':money(pilot.profit),'pilot-stress':money(pilot.stress),'sensitivity-assumptions':`Price ${money(input.price)} · unit cost ${money(input.cost)} · full fixed cost ${money(input.fixed)}. Current full-market demand: ${input.quantity.toLocaleString('en-US')} kits.`,'decision-status':`${rec.title}. Proposed base funding ${money(rec.choice?.cash??0)}. ${rec.reason}`,'appendix-economics':`Current full launch: ${money(full.revenue)} revenue − ${money(full.variable)} variable costs − ${money(input.fixed)} fixed = ${money(full.profit)} operating result.`,'appendix-threshold':`${threshold.value}. ${threshold.detail}`}))$(id).textContent=text;
  $('options-body').replaceChildren(...[full,pilot,{name:'Defer',profit:0,stress:0,cash:0}].map(s=>{const tr=el('tr','');if(rec.choice?.name===s.name||!rec.choice&&s.name==='Defer')tr.className='current';tr.append(...[s.name,money(s.profit),money(s.stress),money(s.cash),s.name==='Defer'?'No new launch':s.passes?'Pass':'Fail'].map(t=>el('td',t)));return tr;}));
  $('sensitivity-body').replaceChildren(...sensitivity(input).map(row=>{const tr=el('tr','');if(row.quantity===input.quantity)tr.className='current';tr.append(el('td',`${row.quantity.toLocaleString('en-US')}${row.quantity===input.quantity?' · current':''}`),el('td',money(row.profit)),el('td',money(row.pilot)));return tr;}));
  $('decision-record').value=decisionRecord(input);$('copy-status').textContent='Copies the current assumptions, alternatives, policy and release gates.';
  renderCharts();
  deck.slide(deck.getIndices().h);
}
const svgNode=(tag,attrs,text)=>{const n=document.createElementNS('http://www.w3.org/2000/svg',tag);for(const[k,v]of Object.entries(attrs))n.setAttribute(k,String(v));if(text!==undefined)n.textContent=text;return n;};
function chart(id,title,description,values,height=320){
  const width=Math.max(240,$(id).clientWidth),left=74,right=16,top=30,bottom=56,min=Math.min(0,...values),max=Math.max(0,...values),span=max-min||100,low=min-span*.16,high=max+span*.16;
  const y=c=>top+(high-c)/(high-low)*(height-top-bottom),svg=svgNode('svg',{viewBox:`0 0 ${width} ${height}`,role:'img','aria-labelledby':`${id}-title ${id}-desc`});
  svg.append(svgNode('title',{id:`${id}-title`},title),svgNode('desc',{id:`${id}-desc`},description));
  const ticks=[0];for(const tick of[min,max])if(ticks.every(t=>Math.abs(y(t)-y(tick))>25))ticks.push(tick);
  for(const tick of ticks)svg.append(svgNode('line',{x1:left,x2:width-right,y1:y(tick),y2:y(tick),stroke:tick===0?'#666666':'#D6D7D7'}),svgNode('text',{x:left-8,y:y(tick)+4,'text-anchor':'end'},compact(tick)));
  $(id).replaceChildren(svg);return {svg,width,left,right,y,height};
}
function renderCharts(){
  const index=deck.getIndices().h,[full,pilot]=alternatives(input);
  if(index===1){
    const rows=[{label:'Revenue',start:0,end:full.revenue,value:full.revenue},{label:'Variable',start:full.revenue,end:full.revenue-full.variable,value:-full.variable},{label:'Fixed',start:full.revenue-full.variable,end:full.profit,value:-input.fixed},{label:'Result',start:0,end:full.profit,value:full.profit}];
    const {svg,width,left,right,y,height}=chart('bridge-chart','Full-launch profit waterfall',`Revenue ${money(full.revenue)}, variable cost ${money(full.variable)}, fixed cost ${money(input.fixed)}, operating result ${money(full.profit)}.`,rows.flatMap(r=>[r.start,r.end]));
    const slot=(width-left-right)/4;
    rows.forEach((row,i)=>{const x=left+slot*(i+.12),w=slot*.76;svg.append(svgNode('rect',{x,y:Math.min(y(row.start),y(row.end)),width:w,height:Math.max(1,Math.abs(y(row.start)-y(row.end))),fill:i===3?'#1D6363':i===0?'#012169':'#988675'}),svgNode('text',{x:x+w/2,y:Math.min(y(row.start),y(row.end))-8,'text-anchor':'middle',class:'value'},width<400?new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',notation:'compact',maximumFractionDigits:1}).format(row.value/100).replace('-','−'):compact(row.value)),svgNode('text',{x:x+w/2,y:height-30,'text-anchor':'middle'},width<400?['Sales','Unit cost','Fixed','Result'][i]:row.label));});
  }
  if(index===2){
    const rows=[full,pilot,{name:'Defer',profit:0,stress:0}],{svg,width,left,right,y,height}=chart('risk-chart','Base and stress results by option',`Full launch ${money(full.profit)} base and ${money(full.stress)} stress; pilot ${money(pilot.profit)} base and ${money(pilot.stress)} stress; defer zero. Exact values follow in the table.`,[...rows.flatMap(r=>[r.profit,r.stress]),-policy.lossLimit]);
    svg.append(svgNode('line',{x1:left,x2:width-right,y1:y(-policy.lossLimit),y2:y(-policy.lossLimit),stroke:'#C84E00','stroke-dasharray':'6 4'}));
    const slot=(width-left-right)/3;
    rows.forEach((row,i)=>{for(const[key,j,color]of[['profit',0,'#012169'],['stress',1,'#988675']]){const value=row[key],x=left+slot*(i+.12+j*.38);svg.append(svgNode('rect',{x,y:Math.min(y(0),y(value)),width:slot*.33,height:Math.max(1,Math.abs(y(0)-y(value))),fill:color}));}svg.append(svgNode('text',{x:left+slot*(i+.5),y:height-30,'text-anchor':'middle'},i===0?'Full launch':i===1?'Pilot':'Defer'));});
    svg.append(svgNode('rect',{x:left,y:6,width:10,height:10,fill:'#012169'}),svgNode('text',{x:left+16,y:16},'Base'),svgNode('rect',{x:left+74,y:6,width:10,height:10,fill:'#988675'}),svgNode('text',{x:left+90,y:16},'Stress'));
  }
  if(index===4){
    const rows=sensitivity(input),{svg,width,left,right,y,height}=chart('volume-chart','Launch and pilot profit as full-market demand changes','Navy full-launch and teal pilot lines. Current demand is marked by circles; exact values are in the sensitivity table.',rows.flatMap(r=>[r.profit,r.pilot])),maxQ=rows.at(-1).quantity,x=q=>left+q/maxQ*(width-left-right);
    for(const[key,color]of[['profit','#012169'],['pilot','#1D6363']]){svg.append(svgNode('polyline',{points:rows.map(r=>`${x(r.quantity)},${y(r[key])}`).join(' '),fill:'none',stroke:color,'stroke-width':3}));const current=rows.find(r=>r.quantity===input.quantity);svg.append(svgNode('circle',{cx:x(current.quantity),cy:y(current[key]),r:5,fill:color}));}
    for(const tick of[0,Math.round(maxQ/2),maxQ])svg.append(svgNode('text',{x:x(tick),y:height-30,'text-anchor':tick===0?'start':tick===maxQ?'end':'middle'},tick.toLocaleString('en-US')));
    svg.append(svgNode('text',{x:width-right,y:height-6,'text-anchor':'end'},'Full-market kits sold'));
  }
}
function navigate(index){deck.slide(index);$('deck').focus();}
function updateSlide(){const index=deck.getIndices().h,slide=deck.getCurrentSlide();$('slide-select').value=String(index);$('slide-status').textContent=`${index+1} / ${slides.length} · ${slide.dataset.title}`;$('previous').disabled=index===0;$('next').disabled=index===slides.length-1;$('context-note').textContent=slide.querySelector('.notes').textContent;renderCharts();}
function updateInputs(){clearErrors();const parsed=parseInputs(Object.fromEntries(keys.map(key=>[key,$(key).value])));if(parsed.errors){for(const[key,message]of Object.entries(parsed.errors)){$(key).setAttribute('aria-invalid','true');$(`${key}-error`).textContent=message;}setPending(true);$('form-status').textContent='Correct the marked field or restore valid values. Slides retain the last valid scenario.';return;}input=parsed.values;setPending(false);render();$('form-status').textContent='All slides updated from these valid values.';}
$('assumptions').addEventListener('input',updateInputs);
$('assumptions').addEventListener('submit',event=>{event.preventDefault();updateInputs();});
$('restore').addEventListener('click',()=>{fillForm();setPending(false);$('form-status').textContent='Restored the last valid values.';});
for(const button of document.querySelectorAll('[data-preset]'))button.addEventListener('click',()=>{const {name,...values}=presets[Number(button.dataset.preset)];input={...values};fillForm();setPending(false);render();$('form-status').textContent=`${name} now drives all slides.`;});
for(const button of document.querySelectorAll('[data-slide]'))button.addEventListener('click',()=>navigate(Number(button.dataset.slide)));
$('slide-select').addEventListener('change',()=>navigate(Number($('slide-select').value)));
$('previous').addEventListener('click',()=>deck.prev());$('next').addEventListener('click',()=>deck.next());
$('copy-record').addEventListener('click',async()=>{if(pending)return;try{await navigator.clipboard.writeText($('decision-record').value);$('copy-status').textContent='Decision record copied with current assumptions and release gates.';}catch{$('decision-record').closest('details').open=true;$('decision-record').focus();$('decision-record').select();$('copy-status').textContent='Clipboard unavailable. The complete record is selected; use Ctrl/⌘+C.';}});
function presentState(active){document.body.classList.toggle('presenting',active);$('present').textContent=active?'Exit presentation':'Present full screen';requestAnimationFrame(()=>{deck.layout();renderCharts();});}
$('present').addEventListener('click',async()=>{if(document.body.classList.contains('presenting')){if(document.fullscreenElement)await document.exitFullscreen();presentState(false);}else{presentState(true);try{await document.documentElement.requestFullscreen();}catch{$('applied-state').textContent='Window presentation mode · full screen unavailable';}$('deck').focus();}});
document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement){presentState(false);$('present').focus();}});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.body.classList.contains('presenting')){presentState(false);$('present').focus();}});
$('notices').href=import.meta.env.BASE_URL+'THIRD-PARTY-NOTICES.txt';
deck.on('slidechanged',updateSlide);fillForm();setPending(false);render();updateSlide();$('form-status').textContent='Valid changes update every slide immediately.';document.querySelector('main').inert=false;$('loading').hidden=true;
const resize=new ResizeObserver(renderCharts);resize.observe($('deck'));
window.addEventListener('pageshow',()=>requestAnimationFrame(()=>{fillForm();setPending(false);updateSlide();}));
window.addEventListener('pagehide',event=>{if(!event.persisted){resize.disconnect();deck.destroy();}});
