import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './theme/duke-tokens.css';
import './theme/duke-fonts.css';
import './theme/base.css';
import './style.css';
import geography from './data/states.json';
import {duke} from './theme/tokens.js';
import {markets,metrics,defaults,validate,rank,raw,money,cost,compact,rationale,rankChanges,sensitivity} from './model.js';

const d=duke(),el=id=>document.getElementById(id),form=el('settings');
let settings={...defaults},result=rank(markets,settings),selected='NC',pins=['GA','TN','NC'];
const stateLayers=new Map(),fills=['hatteras','shale-blue','royal-blue','prussian-blue','navy-blue'].map(name=>getComputedStyle(document.documentElement).getPropertyValue(`--duke-${name}`).trim());
el('weight-fields').innerHTML=metrics.map(metric=>`<label class="weight-field">${metric.short}<span class="weight-input"><input name="${metric.id}" aria-label="${metric.short} weight" type="number" min="0" max="100" step="1" value="${defaults[metric.id]}" aria-describedby="${metric.id}-error"><span id="${metric.id}-share"></span></span><span class="anchor">${metric.anchor} · ${metric.direction}</span><span id="${metric.id}-error" class="error"></span></label>`).join('');
el('market-select').innerHTML=markets.map(row=>`<option value="${row.id}">${row.name}</option>`).join('');
const map=L.map('map',{scrollWheelZoom:false,zoomControl:true,minZoom:4,maxZoom:8,attributionControl:true});
map.attributionControl.setPrefix('<a href="https://leafletjs.com">Leaflet</a>');
map.attributionControl.addAttribution('Boundaries: <a href="https://tigerweb.geo.census.gov/arcgis/rest/services/Generalized_ACS2024/State_County/MapServer/9">U.S. Census Bureau</a>');
L.geoJSON(geography,{filter:feature=>!markets.some(row=>row.id===feature.properties.id),interactive:false,style:{fillColor:d.panel,fillOpacity:1,color:d.paper,weight:1}}).addTo(map);
const candidateLayer=L.geoJSON(geography,{filter:feature=>markets.some(row=>row.id===feature.properties.id),onEachFeature:(feature,layer)=>{stateLayers.set(feature.properties.id,layer);layer.on('click',()=>selectMarket(feature.properties.id));}}).addTo(map);
for(const feature of geography.features.filter(feature=>stateLayers.has(feature.properties.id))){
 const label=document.createElement('span');label.textContent=feature.properties.id;
 stateLayers.get(feature.properties.id).bindTooltip(label,{permanent:true,direction:'center',className:'state-label',opacity:1});
 stateLayers.get(feature.properties.id).getTooltip().setLatLng(feature.properties.label);
}
const fit=()=>map.fitBounds(candidateLayer.getBounds(),{padding:[20,20],animate:false});fit();
const resize=new ResizeObserver(()=>map.invalidateSize({pan:false}));resize.observe(el('map'));
window.addEventListener('pagehide',event=>{if(!event.persisted){resize.disconnect();map.remove();}});
const status=row=>row.reasons.length?row.reasons.join(' · '):row.score===null?'Eligible · no score':'Qualifies';
const scoreText=row=>row.score===null?'Unscored':row.score.toFixed(2);
function showView(view){
 el('ranking-view').hidden=view!=='ranking';el('map-view').hidden=view!=='map';
 document.querySelectorAll('[data-view]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.view===view)));
 if(view==='map'){map.invalidateSize({pan:false});fit();}
}
function selectMarket(id,focus=false){selected=id;renderDetail();renderMap();renderLedger();if(focus){showView('map');el('market-select').focus();}}
function renderMap(){
 const metric=el('map-metric').value;
 const valueOf=row=>metric==='score'?(row.eligible?row.score:null):row.components.find(item=>item.id===metric).score;
 const cuts=[...new Set(result.rows.map(valueOf).filter(value=>value!==null))].sort((a,b)=>b-a).slice(0,4).reverse();
 for(const row of result.rows){
  const value=valueOf(row),fill=value===null?'#F3F2F1':fills[cuts.filter(cut=>value>=cut).length];
  const layer=stateLayers.get(row.id);layer.setStyle({fillColor:fill,fillOpacity:1,color:row.id===selected?d.copper:row.eligible?d.paper:d.copper,weight:row.id===selected?4:1.5,dashArray:row.eligible?null:'4 3'});
  const label=document.createElement('span');label.textContent=`${row.id} ${row.eligible?(row.rank??'—'):'×'}${pins.includes(row.id)?' ★':''}`;
  layer.setTooltipContent(label);if(row.id===selected)layer.bringToFront();
 }
 const metricName=metric==='score'?'Priority score / 100':`${metrics.find(item=>item.id===metric).short} score / 100`;
 const labels=cuts.length?[`< ${cuts[0].toFixed(2)}`,...cuts.map((cut,i)=>i===cuts.length-1?`≥ ${cut.toFixed(2)}`:`${cut.toFixed(2)} – < ${cuts[i+1].toFixed(2)}`)]:[];
 el('legend').innerHTML=`<strong>${metricName}</strong>${labels.map((label,i)=>`<span><i style="background:${fills[i]}"></i>${label}</span>`).join('')}<span><i style="background:#F3F2F1"></i>${metric==='score'?'Excluded / unscored':'Missing'}</span><small>Bands separate the four highest distinct values in this view. Thresholds shown rounded. Darker means a higher score; score anchors stay fixed.</small>`;
}
function renderDetail(){
 const row=result.rows.find(row=>row.id===selected);el('detail-title').textContent=row.name;el('market-select').value=selected;
 el('detail').innerHTML=`<div class="detail-summary"><div class="detail-score"><strong>${scoreText(row)}</strong><span>${row.score===null?'No priority score':row.eligible?'priority score / 100':'illustrative score · excluded'}</span></div><div><p class="status ${row.eligible?'':'excluded'}">${status(row)}</p><p class="hint">Setup: <strong>${money(row.setup)}</strong> · current ceiling ${cost(settings.setupLimit)}</p></div><button id="detail-pin" data-pin="${row.id}" class="secondary" type="button">${pins.includes(row.id)?'Unpin':'Pin'} ${row.name}</button></div><details class="component-detail"><summary>Score contributions and next investigation</summary><div class="components">${row.components.map((part,i)=>`<article><h3>${metrics[i].short}</h3><p class="raw-value">${raw(row,part.id)}<small>${metrics[i].unit}</small></p><p class="anchor">${metrics[i].anchor}${part.capped?' · capped':''}</p><div class="contribution-bar"><span style="width:${part.contribution??0}%"></span></div><p><strong>${part.contribution===null?'—':part.contribution.toFixed(2)}</strong> points <span>(${part.score===null?'missing':part.score.toFixed(1)} × ${part.share===null?'no weight':(part.share*100).toFixed(1)+'%'})</span></p></article>`).join('')}</div><p class="investigate"><strong>Investigate next</strong> ${row.note}</p></details>`;
}
function renderLedger(){
 const filter=el('table-filter').value;
 const rows=[...result.ranked,...result.rows.filter(row=>!result.ranked.includes(row)).sort((a,b)=>a.name.localeCompare(b.name,'en'))].filter(row=>filter==='all'||(filter==='eligible'?row.eligible:!row.eligible));
 el('ledger-caption').textContent=`${rows.length} markets · applied delivery ceiling ${cost(settings.deliveryLimit)}/order · setup ceiling ${cost(settings.setupLimit)} · all commercial data synthetic`;
 el('table-empty').hidden=rows.length>0;
 el('ledger-rows').innerHTML=rows.map(row=>`<tr class="${row.id===selected?'selected':''}"><td>${row.rank??'—'}</td><th><button type="button" class="text-button" data-select="${row.id}" aria-pressed="${row.id===selected}">${row.name}</button></th><td>${scoreText(row)}${!row.eligible&&row.score!==null?'†':''}</td><td>${compact(row.revenue)}</td><td>${raw(row,'growth')}</td><td>${cost(row.delivery)}</td><td>${row.competition} / 100</td><td>${money(row.setup)}</td><td class="reason ${row.eligible?'':'excluded'}">${status(row)}</td><td><button id="pin-${row.id}" type="button" class="text-button" data-pin="${row.id}">${pins.includes(row.id)?'Unpin':'Pin'}<span class="sr-only"> ${row.name}</span></button></td></tr>`).join('');
}
function renderPins(){
 el('pin-count').textContent=`${pins.length} / 3 pinned`;
 el('pinned').innerHTML=pins.length?`<div class="pinned-grid">${pins.map(id=>{const row=result.rows.find(row=>row.id===id);return `<article class="pinned-card"><div><span class="pin-tag">★ PINNED COMPARISON</span><button id="remove-${id}" type="button" data-pin="${id}" class="text-button">Remove<span class="sr-only"> ${row.name}</span></button></div><h3>${row.name}</h3><p class="pinned-score">${scoreText(row)}<small>${row.rank?'rank '+row.rank:'unranked'}</small></p><p class="status ${row.eligible?'':'excluded'}">${status(row)}</p><dl>${metrics.map(metric=>`<div><dt>${metric.short}</dt><dd>${raw(row,metric.id)}</dd></div>`).join('')}<div><dt>Setup</dt><dd>${money(row.setup)}</dd></div></dl><p class="hint">${row.note}</p></article>`;}).join('')}</div>`:'<div class="empty-pins"><strong>No markets pinned yet.</strong><p>Use Pin on a market to compare up to three candidates. Your choices are separate from the automatic ranking.</p></div>';
}
function render(){
 for(const {id} of metrics)el(`${id}-share`).textContent=result.weightTotal?`${(settings[id]/result.weightTotal*100).toFixed(1)}% applied`:'No weight';
 el('eligible-count').textContent=`${result.rows.filter(row=>row.eligible).length} / 12 eligible`;
 el('ranking-note').textContent=!result.weightTotal?'All weights are zero. No priority score or ranking is assigned.':!result.top.length?'No market qualifies under these ceilings. Review the exclusions below.':`${result.ranked.length} complete, eligible markets ranked. ${result.top.length<3?'Fewer than three qualify.':'The top three are a starting point for investigation.'}`;
 el('top-three').innerHTML=result.top.map(row=>`<article><span class="rank-number">${String(row.rank).padStart(2,'0')}</span><div><h3><button type="button" data-select="${row.id}">${row.name}</button></h3><p>${compact(row.revenue)} revenue · ${raw(row,'growth')} growth</p></div><strong>${row.score.toFixed(2)}<small>priority / 100</small></strong></article>`).join('');
 renderMap();renderDetail();renderLedger();renderPins();renderSensitivity();
 const changes=rankChanges(markets,defaults,settings);
 el('rank-changes').parentElement.open=changes.length>0;
 el('rank-changes').innerHTML=changes.length?changes.map(row=>`<li><strong>${row.name}: ${row.from?'#'+row.from:'unranked'} → ${row.to?'#'+row.to:'unranked'}</strong><p>${row.cause}</p></li>`).join(''):'<li>Starting ranks unchanged. Try raising the growth weight from 25 to 70.</li>';
}
function renderSensitivity(){
 const metric=el('sensitivity-metric').value,bands=sensitivity(markets,settings,metric);
 el('sensitivity-ranges').innerHTML=bands.map(band=>`<li><strong>${band.from}–${band.to}</strong><span>${band.name}${band.id?' leads':''}${band.id&&band.id===result.top[0]?.id?' · current leader':''}</span></li>`).join('');
 el('sensitivity-current').textContent=`Current ${metrics.find(item=>item.id===metric).short.toLowerCase()} weight: ${settings[metric]}. Other weights and both ceilings stay at their current values. This checks whole-number weights from 0 to 100, not exact fractional crossover points. Ties use alphabetical order.`;
}
function update(){
 el('copy-status').textContent='';el('copy-fallback').hidden=true;
 const next=Object.fromEntries([...form.elements].filter(input=>input.name).map(input=>[input.name,input.value.trim()===''?NaN:Number(input.value)]));
 for(const id of ['deliveryLimit','setupLimit'])next[id]=Number.isFinite(next[id])&&Math.abs(next[id]*100-Math.round(next[id]*100))<1e-7?Math.round(next[id]*100):NaN;
 const errors=validate(next);form.querySelectorAll('.error').forEach(node=>node.textContent='');form.querySelectorAll('[aria-invalid]').forEach(node=>node.removeAttribute('aria-invalid'));
 for(const [id,message] of Object.entries(errors)){el(`${id}-error`).textContent=message;form.elements[id].setAttribute('aria-invalid','true');}
 const invalid=Object.keys(errors).length>0;el('form-status').classList.toggle('pending',invalid);el('copy').disabled=invalid;
 if(invalid){el('form-status').textContent='Correct the highlighted inputs. Results show the last valid screen.';return;}
 settings=next;result=rank(markets,settings);render();el('form-status').textContent=`Results update as you edit. ${result.top[0]?result.top[0].name+' leads.':'No market is ranked.'} See rank changes against the starting screen.`;
}
form.addEventListener('input',update);
form.addEventListener('submit',event=>{event.preventDefault();update();});
document.addEventListener('click',event=>{
 const view=event.target.closest('[data-view]');if(view)showView(view.dataset.view);
 const select=event.target.closest('[data-select]');if(select)selectMarket(select.dataset.select,true);
 const button=event.target.closest('[data-pin]');if(!button)return;
 const id=button.dataset.pin,wasPinned=pins.includes(id),focusId=button.id;
 if(!wasPinned&&pins.length===3){el('pin-status').textContent='Three markets are already pinned. Remove one before adding another.';el('pin-status').scrollIntoView({block:'nearest'});return;}
 el('copy-status').textContent='';el('copy-fallback').hidden=true;
 pins=wasPinned?pins.filter(pin=>pin!==id):[...pins,id];renderMap();renderDetail();renderLedger();renderPins();
 el('pin-status').textContent=`${markets.find(row=>row.id===id).name} ${wasPinned?'removed from':'added to'} your comparison.`;
 (el(focusId)??el('pin-'+id)??el('copy')).focus();
});
el('market-select').addEventListener('change',event=>selectMarket(event.target.value));
el('sensitivity-metric').addEventListener('change',renderSensitivity);
el('map-metric').addEventListener('change',renderMap);el('table-filter').addEventListener('change',renderLedger);el('fit').addEventListener('click',fit);
el('toggle-map').addEventListener('click',()=>{const hidden=!el('map-content').hidden;el('map-content').hidden=hidden;el('toggle-map').textContent=hidden?'Show map':'Hide map';el('toggle-map').setAttribute('aria-expanded',String(!hidden));if(!hidden){map.invalidateSize({pan:false});fit();}});
el('reset').addEventListener('click',()=>{
 settings={...defaults};result=rank(markets,settings);selected='NC';pins=['GA','TN','NC'];form.reset();form.querySelectorAll('.error').forEach(node=>node.textContent='');form.querySelectorAll('[aria-invalid]').forEach(node=>node.removeAttribute('aria-invalid'));el('map-metric').value='score';el('sensitivity-metric').value='growth';el('copy').disabled=false;el('table-filter').value='all';el('copy-fallback').hidden=true;el('copy-status').textContent='';el('pin-status').textContent='';el('map-content').hidden=false;el('toggle-map').textContent='Hide map';el('toggle-map').setAttribute('aria-expanded','true');render();showView('ranking');el('form-status').textContent='Starting screen and its three pinned candidates restored.';el('form-status').classList.remove('pending');
});
el('copy').addEventListener('click',async()=>{
 const text=rationale(result,settings,pins);
 try{await navigator.clipboard.writeText(text);el('copy-status').textContent='Applied screen rationale copied.';}
 catch{el('copy-fallback').hidden=false;el('copy-fallback').querySelector('textarea').value=text;el('copy-fallback').querySelector('textarea').focus();el('copy-status').textContent='Select and copy the rationale below.';}
});
render();el('form-status').textContent='Results update as you edit. Try growth weight 70 to see the leader change.';
