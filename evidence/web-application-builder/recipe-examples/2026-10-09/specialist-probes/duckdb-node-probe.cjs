const duckdb = require('@duckdb/duckdb-wasm/dist/duckdb-node-blocking.cjs');
(async()=>{
 const db=await duckdb.createDuckDB({mvp:{mainModule:require.resolve('@duckdb/duckdb-wasm/dist/duckdb-mvp.wasm')}},new duckdb.VoidLogger(),duckdb.NODE_RUNTIME);
 await db.instantiate();db.open({maximumThreads:1});const c=db.connect();
 db.registerFileText('local.csv','region,revenue\nEast,10\nWest,20\nEast,30\n');
 c.query("SET autoinstall_known_extensions=false; SET autoload_known_extensions=false; SET allowed_paths=['local.csv']; SET enable_external_access=false; SET lock_configuration=true;");
 c.query("CREATE TABLE sales AS SELECT * FROM read_csv('local.csv',header=true);");
 const stringify=v=>JSON.stringify(v,(_,x)=>typeof x==='bigint'?String(x):x);
 console.log('aggregate',stringify(c.query('SELECT region,sum(revenue) AS revenue FROM sales GROUP BY region ORDER BY region').toArray()));
 console.log('version',stringify(c.query('SELECT version() AS version').toArray()));
 for(const sql of ["SELECT * FROM read_csv('https://example.com/no.csv')","INSTALL httpfs","SET enable_external_access=true"]){try{c.query(sql);console.log('UNEXPECTED accepted',sql)}catch(e){console.log('expected rejection',sql,e.message)}}
 db.registerFileText('local.csv','region,revenue\nEast,99\n');
 console.log('import after lock',stringify(c.query("SELECT * FROM read_csv('local.csv',header=true)").toArray()));c.close();db.reset();
})().catch(e=>{console.error(e);process.exitCode=1});
