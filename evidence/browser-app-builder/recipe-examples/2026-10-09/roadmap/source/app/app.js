import Gantt from 'frappe-gantt';
import './theme/duke-tokens.css';
import './vendor/frappe-gantt.css';
import './theme/frappe-gantt.css';
import './style.css';
import {samplePlan,schedule,parsePlan,iso,chartTasks} from './model.js';

const $ = id => document.getElementById(id);
const dateText = n => new Intl.DateTimeFormat('en-US',{month:'short',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(n*86400000));
const changeText = n => n === 0 ? 'Unchanged' : `${Math.abs(n)} day${Math.abs(n) === 1 ? '' : 's'} ${n > 0 ? 'later' : 'earlier'}`;
let plan = samplePlan(), baseline = structuredClone(plan), lastValid = structuredClone(plan), revision = 0, gantt;
const node = (tag,text,className) => {const el=document.createElement(tag);el.textContent=text;if(className)el.className=className;return el;};
function announce(message) { $('notice').textContent=message; }
function commit(next,message) {
  plan=next; revision++;
  const valid=schedule(plan).valid;
  if(valid) lastValid=structuredClone(plan);
  render(); announce(valid?message:'Draft saved for correction. Calculated results are paused; restore the last valid schedule or fix the reported errors.');
}
function editTask() {
  const t=plan.tasks.find(t=>t.id===$('task-select').value) || plan.tasks[0];
  $('task-select').value=t.id; $('task-name').value=t.name; $('duration').value=t.duration; $('release').value=t.release || '';
  $('task-id').textContent=`Task ID: ${t.id}. IDs are preserved for imported dependencies.`;
  $('dependencies').replaceChildren(...plan.tasks.filter(d=>d.id!==t.id).map(d=>{
    const label=node('label','');const input=document.createElement('input');input.type='checkbox';input.name='dependency';input.value=d.id;input.checked=t.dependencies.includes(d.id);label.append(input,node('span',`${d.name} (${d.id})`));return label;
  }));
}
function drawChart(result) {
  const source=$('chart-view').value==='baseline'?schedule(baseline):result;
  const tasks=chartTasks(source.rows);
  if(gantt) gantt.refresh(tasks);
  else gantt=new Gantt($('gantt'),tasks,{readonly:true,popup:false,view_mode:'Day',view_modes:[{name:'Day',padding:'2d',step:'1d',lower_text:'D',upper_text:(date,previous)=>!previous||date.getMonth()!==previous.getMonth()?new Intl.DateTimeFormat('en-US',{month:'short',year:'numeric'}).format(date):'',upper_text_frequency:30}],column_width:32,infinite_padding:false,holidays:{},ignore:[],today_button:false,scroll_to:'start',bar_height:28,padding:18,container_height:'auto'});
  $('chart-caption').textContent=`${$('chart-view').value==='baseline'?'Baseline':'Revised'} schedule: ${dateText(source.finish)} ready. Bars show occupied calendar days; numbers match task order. Exact end boundaries appear in the table. Scroll horizontally for dates.`;
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
  if(!result.valid){for(const id of ['finish','span','buffer','target-note','delta','baseline-note'])$(id).textContent='Paused — invalid draft';return;}
  $('finish').textContent=dateText(result.finish);$('span').textContent=`${result.span} calendar days from project start`;
  $('buffer').textContent=`${Math.abs(result.buffer)} day${Math.abs(result.buffer)===1?'':'s'} ${result.buffer<0?'late':result.buffer===0?'to spare':'buffer'}`;
  $('buffer-card').classList.toggle('late',result.buffer<0);$('target-note').textContent=`Promised ${plan.promise}`;
  $('delta').textContent=changeText(result.finish-prior.finish);$('baseline-note').textContent=`Baseline ready ${iso(prior.finish)}`;
  const priorRows=new Map(prior.rows.map(t=>[t.id,t]));
  const tableResult=$('chart-view').value==='baseline'?prior:result;
  document.querySelector('caption').textContent=`${$('chart-view').value==='baseline'?'Baseline':'Revised'} dates versus baseline · end dates are the boundary after work finishes`;
  $('task-rows').replaceChildren(...tableResult.rows.map((t,i)=>{
    const tr=document.createElement('tr'),name=document.createElement('th');name.scope='row';name.append(node('span',String(i+1).padStart(2,'0'),'ordinal'),node('span',t.name));tr.append(name);
    const dates=document.createElement('td');dates.append(node('span',iso(t.start),'date-line'),node('span',`→ ${iso(t.end)}`,'date-line'));tr.append(dates,node('td',String(t.duration)),node('td',t.dependencies.map(id=>tableResult.rows.find(t=>t.id===id).name).join('; ')||'Project start'),node('td',t.float===0?'Critical · 0 days':`${t.float} days`,'float'),node('td',priorRows.has(t.id)?changeText(t.end-priorRows.get(t.id).end):'New task'));return tr;
  }));
  drawChart(result);
}
$('task-select').addEventListener('change',editTask);
$('chart-view').addEventListener('change',render);
$('project-form').addEventListener('submit',event=>{event.preventDefault();commit({...plan,name:$('plan-name').value,start:$('project-start').value,promise:$('promise').value},'Project settings applied. The promise does not reschedule work.');});
$('task-form').addEventListener('submit',event=>{
  event.preventDefault();const id=$('task-select').value;
  commit({...plan,tasks:plan.tasks.map(t=>t.id===id?{...t,name:$('task-name').value,duration:Number($('duration').value),release:$('release').value||null,dependencies:[...$('dependencies').querySelectorAll('input:checked')].map(input=>input.value)}:t)},'Task changes applied. Downstream dates were recalculated.');
});
for(const preset of ['packaging','safety'])$(preset).addEventListener('click',()=>{baseline=samplePlan();commit(samplePlan(preset),'Example delay loaded; baseline restored to the original example.');});
$('reset').addEventListener('click',()=>{baseline=samplePlan();commit(samplePlan(),'Original example restored. All data is synthetic.');});
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
render();announce('Synthetic launch loaded. Every change stays in this tab until you export it.');
