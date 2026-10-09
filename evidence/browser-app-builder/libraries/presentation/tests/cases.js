import '../app/theme/duke-tokens.css';
import {echartsTheme} from '../app/theme/echarts.js';
import {run,equal,near,rejects} from './harness.js';import {profit,draws,summary} from '../app/model.js';
import * as echarts from 'echarts';import Reveal from 'reveal.js';import 'reveal.js/reveal.css';
await run([
 ['Pricing known answer',()=>equal(profit(20,12,100,500),300)],
 ['Currency decimal calculation',()=>equal(profit(.3,.2,100,10),0)],
 ['Invalid quantity rejected',()=>rejects(()=>profit(20,12,1.5,500))],
 ['jStat independent sample statistics',()=>equal(summary([2,4,6]),{mean:4,sampleVariance:4})],
 ['seedrandom published reference sequence',()=>{const d=draws('hello.');near(d[0],.9282578795792454);near(d[1],.3752569768646784);near(d[2],.7316977467853576,2**-32);}],
 ['Seeded uniform mean, tolerance fixed before run',()=>near(summary(draws('42',10000)).mean,.5,.02)],
 ['Local reproducibility and global RNG preserved',()=>{const original=Math.random;equal(draws('42'),draws('42'));equal(Math.random===original,true);equal(draws('42')[0]===draws('43')[0],false);}],
 ['ECharts isolated SVG series',()=>{const el=document.createElement('div');el.style.cssText='width:400px;height:200px';document.querySelector('#fixture').append(el);const c=echarts.init(el,null,{renderer:'svg'});c.setOption({xAxis:{data:['A']},yAxis:{},series:[{type:'bar',data:[300]}]});equal(c.getOption().series[0].data,[300]);equal(!!el.querySelector('svg'),true);c.dispose();el.remove();}],
 ['ECharts solid normal, highlighted and selected colors',async()=>{
   for(const type of ['bar','pie','scatter','line']){
     const el=document.createElement('div');
     el.style.cssText='width:400px;height:200px';
     document.querySelector('#fixture').append(el);
     const chart=echarts.init(el,echartsTheme(),{renderer:'svg'});
     const navy=getComputedStyle(document.documentElement).getPropertyValue('--duke-navy-blue').trim();
     chart.setOption({animation:false,xAxis:{data:['A','B']},yAxis:{},
       series:[{type,selectedMode:'single',data:[100,200]}]});
     const frame=()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
     const fills=()=>[...el.querySelectorAll('path')].flatMap(p=>[p.getAttribute('fill'),p.getAttribute('stroke')]);
     await frame();
     if(!fills().includes(navy)) throw Error(`${type} missing navy: ${JSON.stringify(fills())}`);
     const normalColors=new Set([...fills(),getComputedStyle(document.documentElement).getPropertyValue('--duke-royal-blue').trim()]);
     for(const action of ['highlight','downplay','select','highlight','downplay','unselect']){
       chart.dispatchAction({type:action,seriesIndex:0,dataIndex:0});
       await frame();
       if(!fills().includes(navy)) throw Error(`${type} missing navy: ${JSON.stringify(fills())}`);
       if(!fills().every(fill=>normalColors.has(fill))) throw Error(`${type} ${action}: ${JSON.stringify(fills())}; normal ${JSON.stringify([...normalColors])}`);
     }
     chart.dispose();el.remove();
   }
 }],
 ['reveal isolated navigation and teardown',async()=>{const el=document.createElement('div');el.className='reveal';el.innerHTML='<div class="slides"><section>One</section><section>Two</section></div>';document.querySelector('#fixture').append(el);const d=new Reveal(el,{embedded:true,transition:'none',hash:false});await d.initialize();d.slide(1);equal(d.getIndices().h,1);d.destroy();el.remove();}]
]);
