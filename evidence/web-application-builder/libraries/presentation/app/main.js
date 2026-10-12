import Reveal from 'reveal.js';
import * as echarts from 'echarts';
import 'reveal.js/reveal.css';
import './theme/duke-tokens.css';import './theme/base.css';import './theme/reveal.css';import './style.css';
import {echartsTheme} from './theme/echarts.js';import {profit,draws,summary} from './model.js';
document.querySelector('#app').innerHTML=`<div class="reveal deck"><div class="slides"><section><h2>Explore contribution</h2><label>Price (USD) <input id="price" type="number" value="20" min="0" step="0.01"></label><p>Unit cost $12 · Quantity 100 · Fixed cost $500</p><p id="profit" class="summary"></p><p>Next slide shows the chart.</p></section><section><h2>Scenario outcomes</h2><div id="chart" class="chart"></div><p id="stats"></p><table><caption>Known scenario, USD</caption><tr><th>Revenue</th><th>Cost</th><th>Profit</th></tr><tr><td>2000</td><td>1700</td><td>300</td></tr></table></section></div></div>`;
const deck=new Reveal(document.querySelector('.reveal'),{embedded:true,hash:false,scrollActivationWidth:null,width:'100%',height:'100%',minScale:1,maxScale:1,center:false,transition:'none',keyboardCondition:'focused'});
await deck.initialize();
const chart=echarts.init(document.querySelector('#chart'),echartsTheme());
function update(){try{const value=profit(Number(document.querySelector('#price').value),12,100,500);document.querySelector('#profit').textContent=`Profit: $${value.toFixed(2)}`;chart.setOption({aria:{enabled:true},tooltip:{renderMode:'richText'},xAxis:{type:'category',data:['Profit']},yAxis:{type:'value'},series:[{type:'bar',data:[value]}]});}catch(error){document.querySelector('#profit').textContent=error.message;}}
document.querySelector('#price').addEventListener('input',update);update();
const values=draws('hello.');document.querySelector('#stats').textContent=`Reference draw: ${values[0].toFixed(6)}; example mean: ${summary([2,4,6]).mean}`;
deck.on('slidechanged',()=>chart.resize());const observer=new ResizeObserver(()=>chart.resize());observer.observe(document.querySelector('#chart'));
window.addEventListener('pagehide',()=>{observer.disconnect();chart.dispose();deck.destroy();},{once:true});
document.querySelector('#status').textContent='Ready · reveal.js + ECharts + jStat + seedrandom';
