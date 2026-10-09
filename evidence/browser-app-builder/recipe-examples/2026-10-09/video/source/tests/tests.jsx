import React from 'react';
import { createRoot } from 'react-dom/client';
import { Player } from '@remotion/player';
import { defaults, limits, count, validate, frames, dimensions, sceneStarts, sceneIndex, filename } from '../app/model.js';
import { fitText } from '../app/text-layout.js';
import { FoldlineComposition } from '../app/Composition.jsx';
const tests=[];
const test=(name,run)=>tests.push({name,run});
const assert=(v,message='Assertion failed')=>{if(!v)throw Error(message);};
const equal=(a,b)=>assert(JSON.stringify(a)===JSON.stringify(b),`${JSON.stringify(a)} != ${JSON.stringify(b)}`);
const clone=x=>structuredClone(x);
test('Default concept copy and fixed choices are valid',()=>equal(validate(defaults),[]));
test('Independent timing:12s360frames;18s540; exact25/75% andthird boundaries',()=>{
 equal(frames(defaults),360);equal(sceneStarts(defaults),[0,90,270]);equal(sceneStarts({...defaults,seconds:18}),[0,135,405]);equal(sceneStarts({...defaults,template:'cards'}),[0,120,240]);equal(sceneStarts({...defaults,template:'cards',seconds:18}),[0,180,360]);
});
test('Scene changes happen at boundary, not a frame earlier',()=>{
 for(const [boundary,before,at]of[[90,0,1],[270,1,2]]){equal(sceneIndex(defaults,boundary-1),before);equal(sceneIndex(defaults,boundary),at);}equal(sceneIndex({...defaults,template:'cards'},119),0);equal(sceneIndex({...defaults,template:'cards'},120),1);
});
test('Landscape960×540 andportrait540×960 have correct pixel orientation',()=>{equal(dimensions(defaults),{width:960,height:540});equal(dimensions({...defaults,format:'portrait'}),{width:540,height:960});});
test('Exact copy limits accept boundary and reject one extra code point for all6fields',()=>{
 for(const[key,max]of Object.entries(limits)){const c=clone(defaults);const put=v=>key.startsWith('benefit')?c.benefits[Number(key.slice(-1))]=v:c[key]=v;put('W'.repeat(max));assert(!validate(c).some(e=>e.key===key));put('W'.repeat(max+1));assert(validate(c).some(e=>e.key===key));}
});
test('Unicode counts code points rather than UTF16units; markup remains literal text',()=>{equal(count('é😀'),2);equal(validate({...defaults,product:'<b>Foldline</b>'}),[]);equal(validate({...defaults,product:'😀'.repeat(24)}),[]);assert(validate({...defaults,product:'😀'.repeat(25)}).length>0);});
test('Blank, whitespace andC0/C1Unicodecontrols includingU+0085are rejected',()=>{
 for(const value of['','   ','a\nb','a\u0000b','a\u007fb','Fold\u0085line','a\u009bb'])assert(validate({...defaults,product:value}).some(e=>e.key==='product'),JSON.stringify(value));
});
test('Invalid template,format,duration,palette cannot enter render configuration',()=>{
 for(const[key,value]of[['template','html'],['format','4k'],['seconds',0],['seconds',13],['palette','red']])assert(validate({...defaults,[key]:value}).some(e=>e.key===key));
});
test('Safe filenames include actual template,orientation,pacing and strip path markup',()=>{equal(filename(defaults),'foldline-story-landscape-12s.mp4');equal(filename({...defaults,product:'../<Concept> 😃',format:'portrait',seconds:18}),'concept-story-portrait-18s.mp4');equal(filename({...defaults,product:'😀'}),'product-concept-story-landscape-12s.mp4');});
test('Text wrapping retains characters and fits independently measured wide glyphs',()=>{
 const ctx=document.createElement('canvas').getContext('2d');
 for(const text of['W'.repeat(56),'A long concept line with short and longer words','😀'.repeat(24),'é'.repeat(54)]){
  const result=fitText(text,424,77,{size:30,min:18});ctx.font=`400 ${result.fontSize}px Arial`;
  assert(result.lines.length*result.lineHeight<=77);assert(result.lines.every(line=>ctx.measureText(line).width<=424+0.001));equal(result.lines.join('').replace(/\s/g,''),text.replace(/\s/g,''));
 }
});
const maximum={...defaults,product:'W'.repeat(24),headline:'W'.repeat(54),benefits:['W'.repeat(56),'W'.repeat(56),'W'.repeat(56)],cta:'W'.repeat(48)};
const root=createRoot(document.getElementById('fixture'));
for(const template of['story','cards'])for(const format of['landscape','portrait']){
 test(`Actual ${template}/${format} composition: maxcopy fits every scene, bothpalettes/lengths`,async()=>{
  for(const palette of['navy','ivory'])for(const seconds of[12,18]){
   const config={...maximum,template,format,palette,seconds};const d=dimensions(config);
   for(const frame of sceneStarts(config)){
    const fixture=document.getElementById('fixture');fixture.style.width=`${d.width}px`;fixture.style.height=`${d.height}px`;
    root.render(<Player key={`${template}-${format}-${palette}-${seconds}-${frame}`} component={FoldlineComposition} inputProps={{config}} acknowledgeRemotionLicense initialFrame={frame} durationInFrames={frames(config)} fps={30} compositionWidth={d.width} compositionHeight={d.height} style={{width:d.width,height:d.height}} autoPlay={false} controls={false}/>);
    await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
    const copies=[...fixture.querySelectorAll('[data-copy]')];assert(copies.length>1,'Composition did not render');
    for(const copy of copies){const box=copy.getBoundingClientRect();for(const line of copy.children){const range=document.createRange();range.selectNodeContents(line);const rect=range.getBoundingClientRect();assert(rect.right<=box.right+1,`Right overflow ${copy.dataset.copy}`);assert(rect.bottom<=box.bottom+2,`Bottom overflow ${copy.dataset.copy}`);}assert(box.left>=-1&&box.right<=d.width+1,'Composition edge overflow');}
   }
  }
 });
}
let passed=0;
for(const t of tests){const li=document.createElement('li');try{await t.run();passed++;li.className='pass';li.textContent=`PASS — ${t.name}`;}catch(error){li.className='fail';li.textContent=`FAIL — ${t.name}: ${error.message}`;}document.getElementById('results').append(li);document.getElementById('status').textContent=`${passed}/${tests.length} passed; ${document.querySelectorAll('.fail').length} failed. ${document.querySelectorAll('li').length<tests.length?'Still running…':'Complete.'}`;}
root.unmount();
