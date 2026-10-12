export const metrics=[
 {id:'revenue',name:'Annual addressable revenue',short:'Revenue',anchor:'$2m → $12m',direction:'Higher is better',unit:'USD/year'},
 {id:'growth',name:'Expected annual growth',short:'Growth',anchor:'0% → 12%',direction:'Higher is better',unit:'%/year'},
 {id:'delivery',name:'Delivery cost per order',short:'Delivery efficiency',anchor:'$12 → $4',direction:'Lower is better',unit:'USD/order'},
 {id:'competition',name:'Competition intensity',short:'Lower competition',anchor:'100 → 0',direction:'Lower is better',unit:'index / 100'},
];
export const defaults={revenue:40,growth:25,delivery:20,competition:15,deliveryLimit:1200,setupLimit:25000000};
// Fictional commercial inputs. All currency uses integer USD cents.
export const markets=[
 ['AL','Alabama',450000000,6,960,35,14000000,'Validate route density before promising weekly replenishment.'],
 ['AR','Arkansas',350000000,5.4,1040,30,11500000,'Test whether a smaller customer base can support delivery frequency.'],
 ['FL','Florida',1800000000,14,900,80,30000000,'The large assumed market comes with a setup cost above the starting ceiling.'],
 ['GA','Georgia',1000000000,8.4,720,60,22000000,'Validate acquisition costs in a market with substantial assumed competition.'],
 ['KY','Kentucky',500000000,4.8,1000,35,15500000,'Confirm route economics before accepting the modest growth assumption.'],
 ['LA','Louisiana',650000000,null,1120,50,19000000,'Obtain a defensible growth estimate before assigning a priority score.'],
 ['MS','Mississippi',250000000,3.6,1200,25,9000000,'The low setup requirement trades off against a smaller assumed opportunity.'],
 ['NC','North Carolina',800000000,9,800,40,18000000,'Test the growth assumption and delivery quote with actual customer discovery.'],
 ['SC','South Carolina',600000000,9.6,760,25,14500000,'Investigate whether low assumed competition reflects an unmet need or weak demand.'],
 ['TN','Tennessee',700000000,10.8,640,30,16500000,'Validate the optimistic growth and delivery assumptions before prioritizing.'],
 ['VA','Virginia',950000000,7.2,880,45,25000000,'Setup is exactly at the default ceiling; investigate contingency requirements.'],
 ['WV','West Virginia',280000000,-1,1350,25,10000000,'Delivery exceeds the starting ceiling; investigate service economics first.'],
].map(([id,name,revenue,growth,delivery,competition,setup,note])=>({id,name,revenue,growth,delivery,competition,setup,note}));
export const money=value=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(value/100);
export const cost=value=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(value/100);
export const compact=value=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',notation:'compact',maximumFractionDigits:2}).format(value/100);
export function raw(market,key){return market[key]===null?'Missing':key==='revenue'?compact(market[key]):key==='delivery'?cost(market[key]):key==='growth'?`${market[key].toFixed(1)}%`:`${market[key]} / 100`;}
export function validate(settings){
 const errors={};
 for(const {id} of metrics)if(!Number.isFinite(settings[id])||settings[id]<0||settings[id]>100)errors[id]='Use a weight from 0 to 100.';
 if(!Number.isInteger(settings.deliveryLimit)||settings.deliveryLimit<0||settings.deliveryLimit>2000)errors.deliveryLimit='Use $0–$20, with at most two decimals.';
 if(!Number.isInteger(settings.setupLimit)||settings.setupLimit<0||settings.setupLimit>50000000)errors.setupLimit='Use $0–$500,000, with at most two decimals.';
 return errors;
}
export function assess(market,settings){
 const weightTotal=metrics.reduce((sum,{id})=>sum+settings[id],0),reasons=[];
 const missing=metrics.filter(({id})=>market[id]===null).map(metric=>metric.short);
 if(missing.length)reasons.push(`Missing ${missing.join(', ').toLowerCase()}`);
 if(market.delivery>settings.deliveryLimit)reasons.push(`Delivery ${cost(market.delivery)} exceeds ${cost(settings.deliveryLimit)}`);
 if(market.setup>settings.setupLimit)reasons.push(`Setup ${money(market.setup)} exceeds ${cost(settings.setupLimit)}`);
 const uncapped={revenue:(market.revenue-200000000)/10000000,growth:market.growth/12*100,delivery:(1200-market.delivery)/8,competition:100-market.competition};
 const components=metrics.map(({id})=>{const score=market[id]===null?null:Math.min(100,Math.max(0,uncapped[id]));return {id,score,share:weightTotal?settings[id]/weightTotal:null,contribution:weightTotal&&score!==null?score*settings[id]/weightTotal:null,capped:score!==null&&score!==uncapped[id]};});
 const score=missing.length||!weightTotal?null:components.reduce((sum,row)=>sum+row.contribution,0);
 return {...market,components,score,reasons,eligible:reasons.length===0,rank:null};
}
export function rank(data,settings){
 const rows=data.map(market=>assess(market,settings));
 const ranked=rows.filter(row=>row.eligible&&row.score!==null).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name,'en'));
 ranked.forEach((row,index)=>row.rank=index+1);
 return {rows,ranked,top:ranked.slice(0,3),weightTotal:metrics.reduce((sum,{id})=>sum+settings[id],0)};
}
export function rationale(result,settings,pins){
 const weights=metrics.map(({id,short})=>`${short}: ${settings[id]} weight (${result.weightTotal?(settings[id]/result.weightTotal*100).toFixed(1):'0.0'}%)`).join('; ');
 const describe=row=>`${row.name}: ${row.score===null?'Unscored':row.score.toFixed(2)+' / 100'}; revenue ${money(row.revenue)}/year; growth ${raw(row,'growth')}; delivery ${cost(row.delivery)}/order; competition ${row.competition}/100; setup ${money(row.setup)}. ${row.reasons.length?'Excluded: '+row.reasons.join('; '):row.score===null?'No ranking: all weights zero.':'Qualifies.'}`;
 return `REPLENISH — SYNTHETIC CLASSROOM MARKET SCREEN\nFictional refill-supply service. These inputs are invented; scores are not forecasts or real market assessments.\n\nEligibility ceilings: delivery ${cost(settings.deliveryLimit)}/order; setup ${cost(settings.setupLimit)}. Equality qualifies.\n${weights}\nFixed anchors (0→100): revenue $2m→$12m; growth 0%→12%; delivery $12→$4; competition 100→0. Scores capped at 0/100. Missing metrics prevent ranking. Exact ties: alphabetical.\n\nAUTOMATIC TOP THREE\n${result.top.length?result.top.map(describe).join('\n'):'No markets can be ranked under these settings.'}\n\nMY PINNED COMPARISON (not the automatic ranking)\n${pins.length?pins.map(id=>describe(result.rows.find(row=>row.id===id))).join('\n'):'No markets pinned.'}\n\nPublic geometry: U.S. Census Bureau, Generalized ACS2024 States20M, January1,2024 vintage. Commercial attributes are unrelated synthetic data.\nSource: https://github.com/jordanmeyer/bab-example-markets`;
}
