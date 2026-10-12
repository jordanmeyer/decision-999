import stats from 'jstat';
import seedrandom from 'seedrandom';
export function profit(price,cost,quantity,fixed) {
 if (![price,cost,quantity,fixed].every(Number.isFinite)||Math.min(price,cost,quantity,fixed)<0||!Number.isInteger(quantity)) throw Error('Use nonnegative amounts and whole quantity.');
 return (Math.round(price*100)-Math.round(cost*100))*quantity/100-Math.round(fixed*100)/100;
}
export function draws(seed,count=3) { const random=seedrandom(seed); return Array.from({length:count},()=>random()); }
export function summary(values) { return {mean:stats.jStat.mean(values),sampleVariance:stats.jStat.variance(values,true)}; }
