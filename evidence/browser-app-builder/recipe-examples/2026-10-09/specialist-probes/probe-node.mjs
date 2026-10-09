import loadHighs from 'highs';
const highs=await loadHighs();
const result=highs.solve(`Maximize
profit: 30 chairs + 50 tables
Subject To
carpentry: chairs + 2 tables <= 40
finishing: 2 chairs + tables <= 50
Bounds
chairs >= 0
tables >= 0
Generals
chairs tables
End`,{output_flag:false,time_limit:5,mip_rel_gap:0});
console.log(JSON.stringify({status:result.Status,objective:result.ObjectiveValue,chairs:result.Columns.chairs.Primal,tables:result.Columns.tables.Primal}));
if(result.Status!=='Optimal'||result.ObjectiveValue!==1100||result.Columns.chairs.Primal!==20||result.Columns.tables.Primal!==10) throw Error('HiGHS known answer failed');
