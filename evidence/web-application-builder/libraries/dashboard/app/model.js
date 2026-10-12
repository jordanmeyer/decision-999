import Papa from 'papaparse';import * as aq from 'arquero';
export const sample='region,product,quantity,unit_price,unit_cost\nNorth,Notebook,10,20,12\nSouth,Pen,5,30,18\nNorth,Notebook,2,20,12';
export function parse(csv){
 if(csv.length>1000000)throw Error('CSV too large');
 const p=Papa.parse(csv.replace(/^\uFEFF/,''),{header:true,skipEmptyLines:'greedy',dynamicTyping:false});
 const required=['region','product','quantity','unit_price','unit_cost'];
 if(p.errors.length||!required.every(k=>p.meta.fields?.includes(k)))throw Error('Malformed CSV or missing columns');
 if(p.data.length>10000)throw Error('Too many rows');
 return p.data.map((r,i)=>{if(!/^\d+$/.test(r.quantity)||!/^\d+(\.\d{1,2})?$/.test(r.unit_price)||!/^\d+(\.\d{1,2})?$/.test(r.unit_cost))throw Error(`Invalid numeric value at row ${i+2}`);
 const q=Number(r.quantity),price=Math.round(Number(r.unit_price)*100),cost=Math.round(Number(r.unit_cost)*100);
 if(q>1000000||price>100000000||cost>100000000)throw Error('Value out of range');
 return {region:r.region,product:r.product,quantity:q,revenue:q*price,cost:q*cost};});
}
export function totals(rows,region='All'){const selected=region==='All'?rows:rows.filter(r=>r.region===region);if(!selected.length)return {revenue:0,cost:0,profit:0};const t=aq.from(selected).rollup({revenue:aq.op.sum('revenue'),cost:aq.op.sum('cost')}).object();if(!Number.isSafeInteger(t.revenue)||!Number.isSafeInteger(t.cost))throw Error('Total out of range');return {revenue:t.revenue/100,cost:t.cost/100,profit:(t.revenue-t.cost)/100};}
