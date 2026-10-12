export const tasks=[{id:'a',name:'Prepare',start:'2026-01-05',end:'2026-01-07',progress:0},{id:'b',name:'Launch',start:'2026-01-08',end:'2026-01-09',progress:0,dependencies:'a'}];
export function inclusiveDays(start,end){const days=(Date.parse(end+'T00:00:00Z')-Date.parse(start+'T00:00:00Z'))/86400000+1;if(!Number.isInteger(days)||days<1)throw Error('Invalid range');return days;}
