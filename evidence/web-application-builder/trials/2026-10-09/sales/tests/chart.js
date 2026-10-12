import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent, AriaComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { echartsTheme } from '../app/theme/echarts.js';
import '../app/theme/duke-tokens.css';
echarts.use([BarChart, GridComponent, AriaComponent, SVGRenderer]);

export async function checkChart() {
  const holder = document.createElement('div');
  holder.style.cssText = 'width:320px;height:240px;display:none';
  document.body.append(holder);
  const chart = echarts.init(holder, echartsTheme(), { renderer:'svg', width:320, height:240 });
  const frame = () => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  try {
    chart.setOption({ animation:false, aria:{enabled:true}, xAxis:{type:'category',data:['Revenue','Cost','Contribution']}, yAxis:{type:'value'}, series:[{type:'bar',colorBy:'data',selectedMode:'single',emphasis:{focus:'self'},data:[390,234,156]}] });
    holder.style.display='block'; chart.resize(); await frame();
    const colors = () => [...holder.querySelectorAll('path')].filter(path=>['#012169','#c84e00','#1d6363'].includes(path.getAttribute('fill')?.toLowerCase())).map(path=>({fill:path.getAttribute('fill').toLowerCase(),opacity:path.getAttribute('fill-opacity')||'1'})).sort((a,b)=>a.fill.localeCompare(b.fill));
    const expected = JSON.stringify([{fill:'#012169',opacity:'1'},{fill:'#1d6363',opacity:'1'},{fill:'#c84e00',opacity:'1'}]);
    const assert = label => { if(JSON.stringify(colors())!==expected) throw Error(`${label}: ${JSON.stringify(colors())}`); };
    assert('normal');
    chart.dispatchAction({type:'highlight',seriesIndex:0,dataIndex:0}); await frame(); assert('highlight and blurred peers');
    chart.dispatchAction({type:'select',seriesIndex:0,dataIndex:0}); await frame(); assert('selected');
    chart.dispatchAction({type:'downplay',seriesIndex:0,dataIndex:0}); await frame(); assert('downplay');
    if (Number(holder.querySelector('svg').getAttribute('width'))!==320) throw Error('Hidden-to-visible resize failed');
  } finally { chart.dispose(); if(holder.querySelector('svg')) throw Error('Chart disposal retained SVG'); holder.remove(); }
}
