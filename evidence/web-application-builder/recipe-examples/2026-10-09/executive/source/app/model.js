export const money = cents => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(cents/100);
export const exactMoney = cents => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(cents/100);
export const percent = value => value === null ? '—' : `${(value*100).toFixed(1)}%`;
export const signedPercent = value => value === null ? '—' : `${value>=0?'+':''}${(value*100).toFixed(1)}%`;
export const points = value => `${value>=0?'+':''}${(value*100).toFixed(1)} pp`;
export function summarize(rows) {
 const totals=Object.fromEntries(['sales','product','labor','other','priorSales','transactions','hours'].map(key=>[key,rows.reduce((sum,row)=>sum+row[key],0)]));
 const contribution=totals.sales-totals.product-totals.labor-totals.other;
 return {...totals,contribution,margin:totals.sales?contribution/totals.sales:null,growth:totals.priorSales?totals.sales/totals.priorSales-1:null,ticket:totals.transactions?totals.sales/totals.transactions:null,salesPerHour:totals.hours?totals.sales/totals.hours:null};
}
export function selectRows(rows,{region='All regions',storeId='All stores',month='All months'}={}) {
 return rows.filter(row=>(region==='All regions'||row.region===region)&&(storeId==='All stores'||row.storeId===storeId)&&(month==='All months'||row.month===month));
}
export function status(row,target) {
 const value=summarize([row]);
 return value.margin===null ? 'No sales' : value.margin<target ? 'Below target' : 'At / above target';
}
export function costBridge(current,previous) {
 return ['sales','product','labor','other'].map(key=>({key,current:current[key],previous:previous[key],change:current[key]-previous[key],ratioChange:current.sales&&previous.sales?current[key]/current.sales-previous[key]/previous.sales:null}));
}
