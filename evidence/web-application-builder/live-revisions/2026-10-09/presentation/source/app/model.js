export const baseline=Object.freeze({price:18000,cost:10800,quantity:40000,fixed:240000000});
export const policy=Object.freeze({pilotVolume:.3,pilotFixed:.25,stressVolume:.6,lossLimit:20000000});
export const presets=[{name:'Board case',...baseline},{name:'Lower demand',...baseline,quantity:20000},{name:'Stronger demand',...baseline,quantity:60000}];
export function parseInputs(raw){
  const values={},errors={};
  for(const [key,label,max]of [['price','Price',100000],['cost','Unit variable cost',100000],['fixed','Full-launch fixed cost',10000000000]]){
    const text=String(raw[key]??'').trim();
    if(!/^\d+(\.\d{1,2})?$/.test(text)){errors[key]=`${label} needs a nonnegative dollar amount with at most two decimals.`;continue;}
    const [whole,fraction='']=text.split('.'),cents=Number(whole)*100+Number(fraction.padEnd(2,'0'));
    if(!Number.isSafeInteger(cents)||cents>max)errors[key]=`${label} must be between $0 and $${(max/100).toLocaleString('en-US')}.`;else values[key]=cents;
  }
  const units=String(raw.quantity??'').trim();
  if(!/^\d+$/.test(units)||Number(units)>1000000)errors.quantity='Quantity must be a whole number from 0 to 1,000,000.';else values.quantity=Number(units);
  return Object.keys(errors).length?{errors}:{values};
}
export function calculate({price,cost,quantity,fixed}){
  const contribution=price-cost,profit=quantity*contribution-fixed;
  const threshold=fixed===0?{kind:contribution<0?'zero-only':contribution===0?'all':'minimum',units:0}:contribution<=0?{kind:'none',units:null}:{kind:'volume',units:Math.ceil(fixed/contribution)};
  return {revenue:price*quantity,variable:cost*quantity,contribution,profit,threshold};
}
export function alternatives(input){
  return [{...input,name:'Full launch'},{...input,name:'Staged pilot',quantity:Math.floor(input.quantity*policy.pilotVolume),fixed:Math.round(input.fixed*policy.pilotFixed)}].map(s=>{
    const result=calculate(s),stressQuantity=Math.floor(s.quantity*policy.stressVolume),stress=calculate({...s,quantity:stressQuantity}),cash=s.quantity*s.cost+s.fixed;
    return {...s,...result,stressQuantity,stress:stress.profit,cash,passes:result.profit>0&&stress.profit>=-policy.lossLimit};
  });
}
export function recommendation(input){
  const [full,pilot]=alternatives(input);
  return full.passes?{choice:full,title:'Authorize a conditional full launch',reason:'The full launch has a positive base result and stays within the stress-loss limit.'}:pilot.passes?{choice:pilot,title:'Stage the launch through a pilot',reason:'The pilot passes both gates. The full launch exceeds the stress-loss limit or has no base surplus.'}:{choice:null,title:'Pause and revise the economics',reason:'Neither operating option passes both gates. Defer the commitment while demand or costs are reworked.'};
}
export function sensitivity(input){
  const q=input.quantity,quantities=q===0?[0,1,2,5,10]:[0,.25,.5,.75,1,1.25,1.5,2].map(r=>Math.min(1000000,Math.round(q*r)));
  if(q<1000000)quantities.push(q+1);
  if(q>=4&&quantities.some(n=>n>q+1))quantities.splice(quantities.indexOf(q+1),1);
  return [...new Set(quantities)].sort((a,b)=>a-b).map(quantity=>{const [full,pilot]=alternatives({...input,quantity});return {quantity,profit:full.profit,pilot:pilot.profit};});
}
export const money=cents=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',minimumFractionDigits:0,maximumFractionDigits:2}).format(cents/100).replace('-','−');
export const compact=cents=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',notation:'compact',maximumFractionDigits:2}).format(cents/100).replace('-','−');
export function thresholdText({threshold,contribution}){
  if(threshold.kind==='none')return {value:'No finite quantity',detail:'Positive fixed cost cannot be covered with zero or negative unit contribution.'};
  if(threshold.kind==='zero-only')return {value:'0 units only',detail:'Every positive volume loses money because variable cost exceeds price.'};
  if(threshold.kind==='all')return {value:'Every volume',detail:'Zero contribution and zero fixed cost mean every supported volume exactly breaks even.'};
  if(threshold.kind==='minimum')return {value:'0 units',detail:`No fixed costs to recover. Each additional kit contributes ${money(contribution)}.`};
  return {value:`${threshold.units.toLocaleString('en-US')} kits`,detail:threshold.units>1000000?'This threshold exceeds the supported 1,000,000-kit range.':'Smallest whole sales quantity that covers the entered fixed cost.'};
}
export function decisionRecord(input){
  const options=alternatives(input),rec=recommendation(input);
  return `DESK / DAY — CONDITIONAL PRODUCT-LAUNCH DECISION\nSynthetic classroom board case; no external demand evidence.\n\nRecommendation: ${rec.title}. ${rec.reason}\nProposed base-case funding: ${money(rec.choice?.cash??0)}; release only after the validation gates.\n\nFull-launch assumptions\nPrice ${money(input.price)}/kit; variable cost ${money(input.cost)}/kit; annual sales ${input.quantity.toLocaleString('en-US')} kits; fixed cost ${money(input.fixed)}.\n\n${options.map(s=>`${s.name}: ${s.quantity.toLocaleString('en-US')} base kits, fixed ${money(s.fixed)}, base operating result ${money(s.profit)}, stress ${s.stressQuantity.toLocaleString('en-US')} kits / ${money(s.stress)}, base funding ${money(s.cash)}, break-even ${thresholdText(s).value}, ${s.passes?'passes':'fails'} the policy gates.`).join('\n')}\nDefer: no launch, $0 launch result and $0 new funding; no launch learning or upside.\n\nIllustrative policy: positive base operating result AND stress operating loss no worse than $200,000; if both pass prefer full launch. Pilot volume is floor(30% of full sales), pilot fixed cost is 25% rounded to cents, stress sales are floor(60% of each option's base sales). Stress is a scenario, not a probability or worst-case bound.\n\nModel assumes made-to-order production matches sales and unit costs stay constant. Base funding assumes all base production and fixed costs are paid before customer receipts; it is not a cash-flow forecast. No inventory write-offs, taxes, financing, timing, cannibalization or demand response to price are modeled. Profit is not cash.\n\nBefore release: commercial lead validates signed orders and price; operations lead quotes unit cost and confirms staged fixed costs; finance lead replaces the simple funding estimate with a timed cash-flow plan and approves the stress-loss limit. After a pilot, re-estimate full-launch demand and costs before a separate scale decision. This model is not a guarantee.`;
}
