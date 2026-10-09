import * as duckdb from '@duckdb/duckdb-wasm';
import wasmUrl from '@duckdb/duckdb-wasm/dist/duckdb-eh.wasm?url';
import workerUrl from '@duckdb/duckdb-wasm/dist/duckdb-browser-eh.worker.js?url';
import {dataset,schemas,csv} from './data.js';

export const ROW_LIMIT=500, QUERY_LIMIT_MS=8000;
export function displayCell(value,type) {
  if(value===null||value===undefined)return null;
  if(type.typeId===7){
    const unscaled=String(value),negative=unscaled.startsWith('-'),digits=(negative?unscaled.slice(1):unscaled).padStart(type.scale+1,'0');
    return (negative?'-':'')+(type.scale?digits.slice(0,-type.scale)+'.'+digits.slice(-type.scale):digits);
  }
  if(type.typeId===8)return new Date(Number(value)).toISOString().slice(0,10);
  return String(value);
}
export class Engine {
  constructor(){this.db=null;this.connection=null;this.disposed=false;this.rejectRun=null;}
  async open(size){
    this.data=dataset(size);
    this.db=new duckdb.AsyncDuckDB(new duckdb.VoidLogger(),new Worker(workerUrl));
    await this.db.instantiate(wasmUrl);
    if(this.disposed)throw Error('Database reset.');
    await this.db.open({maximumThreads:1,query:{castBigIntToDouble:false,castDecimalToDouble:false}});
    this.connection=await this.db.connect();
    const paths=Object.keys(schemas).map(name=>`${name}.csv`);
    for(const [name,columns] of Object.entries(schemas)){
      await this.db.registerFileText(`${name}.csv`,csv(this.data[name],Object.keys(columns)));
      const types=Object.entries(columns).map(([column,type])=>`'${column}':'${type}'`).join(',');
      await this.connection.query(`CREATE TABLE ${name} AS SELECT * FROM read_csv('${name}.csv', header=true, auto_detect=false, columns={${types}})`);
    }
    // All names and settings here are authored, never taken from the editor.
    await this.connection.query(`SET autoinstall_known_extensions=false; SET autoload_known_extensions=false; SET allowed_paths=[${paths.map(path=>`'${path}'`).join(',')}]; SET enable_external_access=false; SET memory_limit='128MB'; SET lock_configuration=true;`);
    if(this.disposed)throw Error('Database reset.');
  }
  async query(sql,timeoutMs=QUERY_LIMIT_MS){
    if(this.disposed)throw Error('Database was stopped. Reset it to run again.');
    if(this.rejectRun)throw Error('A query is already running.');
    if(!sql.trim())throw Error('Enter a SELECT query.');
    if(new TextEncoder().encode(sql).length>16384)throw Error('Keep SQL within 16 KiB.');
    const start=performance.now();let timer;
    const aborted=new Promise((_,reject)=>{this.rejectRun=reject;timer=setTimeout(()=>this.stop('Query exceeded 8 seconds. Worker stopped; reset to continue.'),timeoutMs);});
    const execute=async()=>{
      let transaction=false;
      try{
        await this.connection.query('BEGIN TRANSACTION READ ONLY');transaction=true;
        // DuckDB's native lexer finds a final delimiter without confusing it
        // with a semicolon inside a string or comment. Offsets are UTF-8 bytes.
        const bytes=new TextEncoder().encode(sql),tokens=await this.db.tokenize(sql);
        const last=tokens.types.findLastIndex(type=>type!==duckdb.TokenType.COMMENT);
        const end=tokens.offsets[last];
        const text=last>=0&&tokens.types[last]===duckdb.TokenType.OPERATOR&&bytes[end]===59
          ?new TextDecoder().decode(bytes.slice(0,end))+'\n'+new TextDecoder().decode(bytes.slice(end+1)):sql;
        // Native prepare rejects multiple statements. The subquery grammar
        // accepts SELECT/CTE expressions; the transaction independently forbids writes.
        const statement=await this.connection.prepare(`SELECT * FROM (\n${text}\n) AS result LIMIT ${ROW_LIMIT+1}`);
        let table;
        try{table=await statement.query();}finally{if(!this.disposed)await statement.close();}
        if(table.schema.fields.length>30)throw Error('Select at most 30 result columns.');
        const fields=table.schema.fields.map(f=>({name:f.name,type:String(f.type),typeId:f.type.typeId,scale:f.type.scale}));
        const rows=[];
        for(let row=0;row<Math.min(table.numRows,ROW_LIMIT);row++)rows.push(fields.map((field,column)=>displayCell(table.getChildAt(column).get(row),field)));
        return {fields,rows,capped:table.numRows>ROW_LIMIT,ms:performance.now()-start};
      }finally{if(transaction&&!this.disposed)await this.connection.query('ROLLBACK');}
    };
    try{return await Promise.race([execute(),aborted]);}
    finally{clearTimeout(timer);this.rejectRun=null;}
  }
  stop(reason='Query cancelled. Worker stopped; reset to continue.'){
    this.disposed=true;
    this.rejectRun?.(Error(reason));
    // terminate kills the actual worker, including a running computation.
    void this.db?.terminate();
  }
  async close(){
    if(this.rejectRun){this.stop();return;}
    if(this.connection&&!this.disposed)await this.connection.close();
    this.stop('Database closed.');
  }
}
