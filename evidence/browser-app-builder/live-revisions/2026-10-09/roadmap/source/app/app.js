import Gantt from 'frappe-gantt';
import './theme/duke-tokens.css';
import './theme/duke-fonts.css';
import './vendor/frappe-gantt.css';
import './theme/frappe-gantt.css';
import './style.css';
import {samplePlan,schedule,parsePlan,iso,day,chartTasks} from './model.js';

const $ = id => document.getElementById(id);
const dateText = n => new Intl.DateTimeFormat('en-US',{month:'short',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(n*86400000));
const changeText = n => n === 0 ? 'Unchanged' : `${Math.abs(n)} day${Math.abs(n) === 1 ? '' : 's'} ${n > 0 ? 'later' : 'earlier'}`;
let plan = samplePlan(), baseline = structuredClone(plan), lastValid = structuredClone(plan), revision = 0, gantt;
const node = (tag,text,className) => {const el=document.createElement(tag);el.textContent=text;if(className)el.className=className;return el;};
function announce(message) { $('notice').textContent=message; }
function commit(next,message) {
  plan=next; revision++; $('pending').hidden=true; $('chart-view').disabled=false; $('task-select').disabled=false;
  const valid=schedule(plan).valid;
  if(valid) lastValid=structuredClone(plan);
  render(); announce(valid?message:'Draft saved for correction. Calculated results are paused; restore the last valid schedule or fix the reported errors.');
}
function editTask() {
  const t=plan.tasks.find(t=>t.id===$('task-select').value) || plan.tasks[0];
  $('task-select').value=t.id; $('task-name').value=t.name; $('duration').value=t.duration; $('release').value=t.release || '';
  $('kind').value=t.kind; $('duration').min=t.kind==='milestone'?0:1; $('duration').disabled=t.kind==='milestone'; $('resource').disabled=t.kind==='milestone'; $('allocation').disabled=t.kind==='milestone';
  $('resource').replaceChildren(...plan.resources.map(r=>{const o=node('option',r.name);o.value=r.id;return o;})); $('resource').value=t.resource||plan.resources[0].id; $('allocation').value=t.allocation;
  $('task-id').textContent=`Task ID: ${t.id}. IDs are preserved for imported dependencies.`;
  $('dependencies').replaceChildren(...plan.tasks.filter(d=>d.id!==t.id).map(d=>{
    const label=node('label','');const input=document.createElement('input');input.type='checkbox';input.name='dependency';input.value=d.id;input.checked=t.dependencies.includes(d.id);label.append(input,node('span',`${d.name} (${d.id})`));return label;
  }));
}
function drawChart(result) {
  const displayed=$('chart-view').value==='baseline'?baseline:plan;
  const source=$('chart-view').value==='baseline'?schedule(baseline):result;
  const before=Math.max(2,day(displayed.start)-day(displayed.promise)+2),after=Math.max(7,day(displayed.promise)-source.finish+3);
  const options={readonly:true,popup:false,view_mode:'Day',view_modes:[{name:'Day',padding:[`${before}d`,`${after}d`],step:'1d',lower_text:'D',upper_text:(date,previous)=>!previous||date.getMonth()!==previous.getMonth()?new Intl.DateTimeFormat('en-US',{month:'short',year:'numeric'}).format(date):'',upper_text_frequency:30}],column_width:Math.max(28,Math.min(48,($('chart-region').clientWidth-12)/(source.span+before+after))),infinite_padding:false,holidays:{},ignore:[],today_button:false,scroll_to:'start',bar_height:28,padding:18,container_height:'auto'};
  const tasks=chartTasks(source.rows);
  if(gantt){gantt.update_options(options);gantt.refresh(tasks);}else gantt=new Gantt($('gantt'),tasks,options);
  for(const [i,row] of source.rows.entries()) {
    const bar=gantt.bars[i],label=bar.group.querySelector('.bar-label');
    label.textContent=row.name;
    const title=document.createElementNS('http://www.w3.org/2000/svg','title');title.textContent=`${row.name}: ${dateText(row.start)}${row.duration?` to ${dateText(row.end)}`:' · milestone'}`;bar.group.append(title);
    if(row.kind==='milestone') {
      bar.$bar.setAttribute('width','0');
      const x=Number(bar.$bar.getAttribute('x')),y=Number(bar.$bar.getAttribute('y'))+14;
      const diamond=document.createElementNS('http://www.w3.org/2000/svg','path');diamond.setAttribute('d',`M${x} ${y-8}l8 8 -8 8 -8 -8Z`);diamond.setAttribute('class','milestone-mark');bar.bar_group.append(diamond);
    }
    bar.update_label_position();
  }
  for(const arrow of gantt.arrows)arrow.update();
  const first=gantt.bars[0],anchor=source.rows[0].start,x=Number(first.$bar.getAttribute('x'))+(day(displayed.promise)-anchor)*gantt.config.column_width;
  const marker=document.createElementNS('http://www.w3.org/2000/svg','g');marker.setAttribute('class','promise-marker');
  const line=document.createElementNS(marker.namespaceURI,'line');for(const [key,value] of Object.entries({x1:x,x2:x,y1:55,y2:gantt.$svg.getAttribute('height')}))line.setAttribute(key,value);
  const text=document.createElementNS(marker.namespaceURI,'text');text.setAttribute('x',x+5);text.setAttribute('y',Number(first.$bar.getAttribute('y'))+18);text.textContent=`Promise · ${dateText(day(displayed.promise))}`;marker.append(line,text);gantt.$svg.append(marker);
  $('chart-caption').textContent=`${$('chart-view').value==='baseline'?'Baseline':'Revised'} dependency dates: ${dateText(source.finish)} ready. Diamonds are zero-duration milestones. The copper line marks the promise. Bars show occupied calendar days; scroll for longer plans.`;
}
function render() {
  const result=schedule(plan), prior=schedule(baseline), selected=$('task-select').value;
  $('plan-name').value=plan.name;$('project-start').value=plan.start;$('promise').value=plan.promise;
  $('task-select').replaceChildren(...plan.tasks.map((t,i)=>{const option=node('option',`${String(i+1).padStart(2,'0')} · ${t.name} (${t.id})`);option.value=t.id;return option;}));
  if(plan.tasks.some(t=>t.id===selected))$('task-select').value=selected;
  editTask();$('errors').hidden=result.valid;
  $('error-list').replaceChildren(...result.errors.map(e=>node('li',e)));
  $('results').hidden=!result.valid;$('export').disabled=!result.valid;$('baseline-save').disabled=!result.valid;
  $('baseline-label').textContent=`Baseline: ${baseline.name} · ${dateText(prior.finish)} ready`;
  $('resource-check').hidden=!result.valid;
  $('capacity-inputs').replaceChildren(...plan.resources.map(r=>{const label=node('label',`${r.name} capacity · people/day`),input=document.createElement('input');input.type='number';input.min='0.01';input.max='100';input.step='any';input.value=r.capacity;input.name=r.id;label.append(input);return label;}));
  if(!result.valid){for(const id of ['finish','span','buffer','target-note','delta','baseline-note'])$(id).textContent='Paused — invalid draft';return;}
  $('finish').textContent=dateText(result.finish);$('span').textContent=`${result.span} calendar days from project start`;
  $('buffer').textContent=`${Math.abs(result.buffer)} day${Math.abs(result.buffer)===1?'':'s'} ${result.buffer<0?'late':result.buffer===0?'to spare':'buffer'}`;
  $('buffer-card').classList.toggle('late',result.buffer<0);$('target-note').textContent=`Promised ${dateText(day(plan.promise))}`;
  $('delta').textContent=changeText(result.finish-prior.finish);$('baseline-note').textContent=`Baseline ready ${dateText(prior.finish)}`;
  const priorRows=new Map(prior.rows.map(t=>[t.id,t]));
  const tableResult=$('chart-view').value==='baseline'?prior:result;
  document.querySelector('caption').textContent=`${$('chart-view').value==='baseline'?'Baseline':'Revised'} dates versus baseline · end dates are the boundary after work finishes`;
  $('task-rows').replaceChildren(...tableResult.rows.map((t,i)=>{
    const tr=document.createElement('tr'),name=document.createElement('th');name.scope='row';name.append(node('span',String(i+1).padStart(2,'0'),'ordinal'),node('span',t.name));tr.append(name);
    const dates=document.createElement('td');dates.append(node('span',dateText(t.start),'date-line'),node('span',t.duration?`→ ${dateText(t.end)}`:'Milestone','date-line'));tr.append(dates,node('td',t.duration?String(t.duration):'0 · milestone'),node('td',t.resource?`${($('chart-view').value==='baseline'?baseline:plan).resources.find(r=>r.id===t.resource)?.name || t.resource} · ${t.allocation}`:'No capacity used'),node('td',t.dependencies.map(id=>tableResult.rows.find(t=>t.id===id).name).join('; ')||'Project start'),node('td',t.float===0?'Critical · 0 days':`${t.float} days`,'float'),node('td',priorRows.has(t.id)?changeText(t.end-priorRows.get(t.id).end):'New task'));return tr;
  }));
  const conflicts=result.loads.filter(r=>r.days.length);
  $('resource-headline').textContent=conflicts.length?`${conflicts.map(r=>r.name).join(', ')} ${conflicts.length===1?'is':'are'} over capacity`:'Workload fits the entered team capacity';
  $('resource-summary').textContent=conflicts.length?conflicts.map(r=>`${r.name}: ${r.days.length} overloaded days; peak ${Number(r.peak.toFixed(2))} people needed / ${r.capacity} available.`).join(' ')+' Dependency dates are not a resource-feasible commitment.':'This capacity check does not add contingency or automatically reschedule tasks.';
  $('overloads').replaceChildren(...conflicts.map(r=>{const section=node('section',''),list=node('ul','');section.append(node('h3',r.name));for(const d of r.days)list.append(node('li',`${dateText(d.date)}: ${Number(d.work.toFixed(2))} people needed — ${d.tasks.map(id=>plan.tasks.find(t=>t.id===id).name).join(' + ')}`));section.append(list);return section;}));
  drawChart(result);
}
$('task-select').addEventListener('change',editTask);
$('chart-view').addEventListener('change',render);
function applyEdits(event) {
  event.preventDefault();const id=$('task-select').value,kind=$('kind').value;
  commit({...plan,name:$('plan-name').value,start:$('project-start').value,promise:$('promise').value,resources:plan.resources.map(r=>({...r,capacity:Number([...$('capacity-inputs').querySelectorAll('input')].find(input=>input.name===r.id).value)})),tasks:plan.tasks.map(t=>t.id===id?{...t,name:$('task-name').value,kind,duration:kind==='milestone'?0:Number($('duration').value),resource:kind==='milestone'?null:$('resource').value,allocation:kind==='milestone'?0:Number($('allocation').value),release:$('release').value||null,dependencies:[...$('dependencies').querySelectorAll('input:checked')].map(input=>input.value)}:t)},'All edits applied. Dates and daily capacity were recalculated separately.');
}
for(const id of ['project-form','task-form','capacity-form']) {
  $(id).addEventListener('submit',applyEdits);
  $(id).addEventListener('input',event=>{if(event.target.id==='task-select')return;$('pending').hidden=false;$('chart-view').disabled=true;$('task-select').disabled=true;$('baseline-save').disabled=true;$('export').disabled=true;});
}
$('kind').addEventListener('change',()=>{const milestone=$('kind').value==='milestone';$('duration').disabled=milestone;$('duration').min=milestone?0:1;$('resource').disabled=milestone;$('allocation').disabled=milestone;if(milestone){$('duration').value=0;$('allocation').value=0;}else{$('duration').value=Math.max(1,Number($('duration').value));$('allocation').value=Math.max(1,Number($('allocation').value));}});
for(const preset of ['packaging','safety'])$(preset).addEventListener('click',()=>{baseline=samplePlan();commit(samplePlan(preset),'Delay scenario loaded. Comparison baseline: original launch plan.');});
$('reset').addEventListener('click',()=>{baseline=samplePlan();commit(samplePlan(),'Original dates, teams and baseline restored.');});
$('recover').addEventListener('click',()=>commit(structuredClone(lastValid),'Last valid schedule restored.'));
$('baseline-save').addEventListener('click',()=>{baseline=structuredClone(plan);revision++;render();announce('Current valid schedule saved as the comparison baseline in this tab.');});
function download(value,name) {
  const url=URL.createObjectURL(new Blob([JSON.stringify(value,null,2)+'\n'],{type:'application/json'}));const link=document.createElement('a');link.href=url;link.download=name;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
$('export').addEventListener('click',()=>download(plan,'launch-plan.json'));
$('example-download').addEventListener('click',()=>download(samplePlan(),'launch-example.json'));
$('import').addEventListener('change',async event=>{
  const file=event.target.files[0],version=revision;if(!file)return;
  try{if(file.size>131072)throw Error('Use a JSON file no larger than 128 KiB.');const candidate=parsePlan(await file.text());if(version!==revision)throw Error('The plan changed while this file was being read. Select the file again.');commit(candidate,'Imported valid current plan. Your baseline is unchanged.');}
  catch(error){announce(`Import rejected: ${error.message} Previous plan preserved.`);}
  finally{event.target.value='';}
});
$('notices').href=import.meta.env.BASE_URL+'THIRD-PARTY-NOTICES.txt';
await document.fonts.ready;
render();announce('Synthetic launch loaded. Edits apply together; export to keep your work.');
