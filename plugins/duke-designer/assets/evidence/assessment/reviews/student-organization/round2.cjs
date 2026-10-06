const {chromium}=require('playwright');
const fs=require('fs'),crypto=require('crypto');const out=__dirname+'/round2';fs.mkdirSync(out,{recursive:true});
const result={versions:{},checks:[],errors:[]};for(const f of ['index.html','styles.css','script.js','assets/open-sans.ttf'])result.versions[f]=crypto.createHash('sha256').update(fs.readFileSync('examples/student-organization/'+f)).digest('hex');
(async()=>{const b=await chromium.launch({channel:'chrome',headless:true});result.browser=b.version();
for(const [width,mode] of [[1440,'normal'],[390,'normal'],[320,'normal'],[390,'root'],[320,'root'],[390,'computed'],[320,'computed']]){
const c=await b.newContext({viewport:{width,height:1000},reducedMotion:'reduce'}),p=await c.newPage();const name=`${width}-${mode}`;const checks=[];
p.on('pageerror',e=>result.errors.push(e.message));p.on('console',m=>{if(m.type()==='error')result.errors.push(m.text())});p.on('response',r=>{if(r.status()>=400)result.errors.push(r.url()+': '+r.status())});
await p.goto('http://127.0.0.1:8080/examples/student-organization/');await p.evaluate(()=>document.fonts.ready);
if(mode==='root')await p.addStyleTag({content:'html{font-size:200% !important}'});
if(mode==='computed')await p.evaluate(()=>{const sizes=[...document.querySelectorAll('body,body *')].map(e=>[e,parseFloat(getComputedStyle(e).fontSize)]);for(const [e,size] of sizes)e.style.fontSize=`${size*2}px`});
const metrics=()=>p.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,fonts:[...document.fonts].map(f=>({family:f.family,status:f.status})),overflow:[...document.querySelectorAll('body *')].filter(e=>!e.classList.contains('visually-hidden')&&e.getClientRects().length&&(e.getBoundingClientRect().right>innerWidth+1||e.getBoundingClientRect().left< -1)&&!e.classList.contains('skip')).map(e=>({tag:e.tagName,cls:e.className,text:e.textContent.slice(0,40)})),internal:[...document.querySelectorAll('h1,h2,h3,p,button,label,summary')].filter(e=>!e.classList.contains('visually-hidden')&&e.getClientRects().length&&e.scrollWidth>e.clientWidth+1).map(e=>e.textContent)}));
checks.push({initial:await metrics()});
if(mode==='normal')await p.screenshot({path:`${out}/${name}-full.png`,fullPage:true});
await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:`${out}/${name}-top.png`});
for(const sel of ['.purpose','.event:first-child','.join-panel'])await p.locator(sel).screenshot({path:`${out}/${name}-${sel.includes('purpose')?'purpose':sel.includes('event')?'event':'membership'}.png`});
for(const [filter,count] of [['workshop',2],['conversation',1],['all',3]]){await p.locator(`[data-filter="${filter}"]`).focus();await p.keyboard.press('Enter');checks.push({filter,visible:await p.locator('.event:visible').count(),expected:count,status:await p.locator('#filter-status').textContent()})}
for(let i=0;i<3;i++)for(const state of [true,false]){const e=p.locator('.save').nth(i);await e.focus();await p.keyboard.press('Space');checks.push({save:i,state,pressed:await e.getAttribute('aria-pressed'),snapshot:await e.ariaSnapshot(),status:await p.locator('#save-status').textContent()});if(i===0&&state&&width===390&&mode==='normal')await p.screenshot({path:`${out}/save-focus.png`})}
await p.locator('input[value="build"]').focus();await p.keyboard.press('ArrowRight');checks.push({arrowSelect:await p.locator('input:checked').inputValue()});
for(const value of ['build','decide','connect']){await p.locator(`input[value="${value}"]`).focus();await p.keyboard.press('Space');if(value==='decide'&&mode==='root'&&width===320)await p.screenshot({path:`${out}/radio-focus-320.png`});await p.keyboard.press('Tab');await p.keyboard.press('Enter');checks.push({interest:value,selected:await p.locator('input:checked').inputValue(),result:await p.locator('#next-step').innerText(),group:await p.locator('fieldset').ariaSnapshot()})}
await p.locator('#next-step').screenshot({path:`${out}/${name}-completion.png`});
for(let i=0;i<3;i++){const d=p.locator('details').nth(i);await d.locator('summary').focus();await p.keyboard.press('Enter');checks.push({faq:i,opened:await d.getAttribute('open')});await p.keyboard.press('Enter');checks.push({faq:i,closed:await d.getAttribute('open')})}
checks.push({after:await metrics()});
checks.push({radioStyle:await p.locator('input').first().evaluate(e=>{const s=getComputedStyle(e);return {accent:s.accentColor,outline:s.outline,width:s.width,height:s.height}}),legend:await p.locator('legend').textContent()});
await p.reload();checks.push({reload:{saved:await p.locator('.save[aria-pressed="true"]').count(),resultHidden:await p.locator('#next-step').isHidden()}});
if(width===1440){const tab=[];for(let i=0;i<19;i++){await p.keyboard.press('Tab');tab.push(await p.evaluate(()=>{const e=document.activeElement,s=getComputedStyle(e);return {tag:e.tagName,text:e.textContent.slice(0,55),value:e.value,outline:s.outline}}))}checks.push({tab});}
result.checks.push({name,checks});await c.close();}
await b.close();fs.writeFileSync(`${out}/checks.json`,JSON.stringify(result,null,2));})()
