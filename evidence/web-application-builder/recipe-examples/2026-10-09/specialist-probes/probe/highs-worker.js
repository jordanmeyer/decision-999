import loadHighs from 'highs';
import wasmUrl from 'highs/runtime?url';
self.onmessage=async()=>{
 try {
  const highs=await loadHighs({locateFile:()=>wasmUrl});
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
  self.postMessage({status:result.Status,objective:result.ObjectiveValue,chairs:result.Columns.chairs.Primal,tables:result.Columns.tables.Primal});
 } catch(e){self.postMessage({error:e.message});}
};
