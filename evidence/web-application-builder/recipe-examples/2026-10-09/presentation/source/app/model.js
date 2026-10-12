export const baseline=Object.freeze({price:2000,cost:1200,quantity:100,fixed:50000});
export const presets=[{name:'Baseline',...baseline},{name:'50-unit downside',...baseline,quantity:50},{name:'$18 price',...baseline,price:1800}];
export function parseInputs(raw){
  const values={},errors={};
  for(const [key,label,max]of [['price','Price',100000],['cost','Unit variable cost',100000],['fixed','Fixed cost',10000000]]){
    const text=String(raw[key]??'').trim();
    if(!/^\d+(\.\d{1,2})?$/.test(text)){errors[key]=`${label} needs a nonnegative dollar amount with at most two decimals.`;continue;}
    const [whole,fraction='']=text.split('.');const cents=Number(whole)*100+Number(fraction.padEnd(2,'0'));
    if(!Number.isSafeInteger(cents)||cents>max)errors[key]=`${label} must be between $0 and $${(max/100).toLocaleString('en-US')}.`;else values[key]=cents;
  }
  const units=String(raw.quantity??'').trim();
  if(!/^\d+$/.test(units)||Number(units)>10000)errors.quantity='Quantity must be a whole number from 0 to 10,000.';else values.quantity=Number(units);
  return Object.keys(errors).length?{errors}:{values};
}
export function calculate({price,cost,quantity,fixed}){
  const contribution=price-cost,profit=quantity*contribution-fixed;
  const threshold=fixed===0?{kind:contribution<0?'zero-only':contribution===0?'all':'minimum',units:0}:contribution<=0?{kind:'none',units:null}:{kind:'volume',units:Math.ceil(fixed/contribution)};
  return {revenue:price*quantity,variable:cost*quantity,contribution,profit,threshold};
}
export function sensitivity(input){
  const q=input.quantity;
  const quantities=q===0?[0,1,2,5,10]:[0,.25,.5,.75,1,1.25,1.5,2].map(r=>Math.min(10000,Math.round(q*r)));
  if(q<10000)quantities.push(q+1);if(q<9999&&q<4)quantities.push(q+2);
  // At ordinary volumes the ratio points already supply larger alternatives.
  if(q>=4&&quantities.some(n=>n>q+1))quantities.splice(quantities.indexOf(q+1),1);
  return [...new Set(quantities)].sort((a,b)=>a-b).map(quantity=>({quantity,profit:calculate({...input,quantity}).profit}));
}
export function money(cents){const sign=cents<0?'−':'';const absolute=Math.abs(cents);return `${sign}$${Math.floor(absolute/100).toLocaleString('en-US')}.${String(absolute%100).padStart(2,'0')}`;}
export function thresholdText({threshold,contribution}){
  if(threshold.kind==='none')return {value:'No finite quantity',label:'Volume break-even',detail:'Positive fixed cost cannot be covered when each additional unit contributes zero or loses money.'};
  if(threshold.kind==='zero-only')return {value:'0 units only',label:'Minimum non-loss quantity',detail:'Only zero quantity avoids loss. Every positive volume loses money because unit variable cost exceeds price.'};
  if(threshold.kind==='all')return {value:'Every volume',label:'Exactly breaks even',detail:'Zero contribution and zero fixed cost mean every supported sales volume has a $0.00 operating result.'};
  if(threshold.kind==='minimum')return {value:'0 units',label:'Minimum non-loss quantity',detail:`There are no fixed costs to recover. Each additional unit contributes ${money(contribution)}.`};
  return {value:`${threshold.units.toLocaleString('en-US')} units`,label:'Whole-unit break-even',detail:threshold.units>10000?'This finite threshold exceeds the supported 10,000-unit scenario range.':'The smallest whole quantity whose contribution covers fixed costs; it may produce a small surplus.'};
}
export function decisionRecord(input){
  const result=calculate(input),threshold=thresholdText(result);
  const status=result.profit>0?'Covers the modeled costs':result.profit===0?'Exactly covers the modeled costs':'Does not cover the modeled costs';
  return `DESK / DAY — CONDITIONAL POP-UP DECISION\nSynthetic classroom scenario; local calculations, not a demand forecast.\n\nCurrent assumptions\nPrice: ${money(input.price)} per kit\nUnit variable cost: ${money(input.cost)}\nSales quantity: ${input.quantity.toLocaleString('en-US')} whole kits\nEvent fixed cost: ${money(input.fixed)}\n\nRevenue: ${money(result.revenue)}\nVariable cost: ${money(result.variable)}\nContribution: ${money(result.contribution)} per kit\nOperating result: ${money(result.profit)}\nStatus: ${status}.\n${threshold.label}: ${threshold.value}. ${threshold.detail}\n\nDecision is conditional on these assumptions, not a guarantee. Price changes do not automatically change demand. Costs include only the entered unit variable and event fixed costs; tax and other omitted costs are not modeled.\n\nBefore committing: test willingness to pay and likely attendance; obtain supplier and venue quotes; check omitted fees, tax and fulfillment work; set a loss limit and validate it against downside volume.\n\nIndependent classroom pitch decision aid, not investment advice.`;
}
