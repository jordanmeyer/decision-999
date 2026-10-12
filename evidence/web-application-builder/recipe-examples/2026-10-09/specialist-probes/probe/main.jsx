document.querySelector('main').innerHTML = '<h1>Isolated specialist probes</h1><p>Each button runs one capability.</p><button id="map-probe">Show local map</button> <button id="highs">Run HiGHS worker</button> <button id="duckdb">Run DuckDB EH worker</button><pre id="local-output"></pre><div id="map" style="height:240px;width:500px;max-width:100%"></div>';
const log = (name,value) => { document.querySelector('#local-output').textContent += `\n${name}: ${JSON.stringify(value,(_,v)=>typeof v==='bigint'?String(v):v)}`; };
document.querySelector('#highs').onclick=async()=>{
 log('highs','starting');
 const worker=new Worker(new URL('./highs-worker.js',import.meta.url),{type:'module'});
 worker.onmessage=e=>{log('highs result',e.data);worker.terminate();};
 worker.onerror=e=>{log('highs error',e.message);worker.terminate();}; worker.postMessage(null);
};
document.querySelector('#duckdb').onclick=async()=>{
 log('duckdb','loading EH');
 let db;
 try {
  const duckdb=await import('@duckdb/duckdb-wasm');
  const {default:wasm}=await import('@duckdb/duckdb-wasm/dist/duckdb-eh.wasm?url');
  const {default:workerUrl}=await import('@duckdb/duckdb-wasm/dist/duckdb-browser-eh.worker.js?url');
  db=new duckdb.AsyncDuckDB(new duckdb.VoidLogger(),new Worker(workerUrl));
  log('duckdb','instantiating'); await db.instantiate(wasm); log('duckdb','instantiated');
  await db.open({maximumThreads:1}); const c=await db.connect();
  await db.registerFileText('local.csv','region,revenue\nEast,10\nWest,20\nEast,30\n');
  await c.query("SET autoinstall_known_extensions=false; SET autoload_known_extensions=false; SET allowed_paths=['local.csv']; SET enable_external_access=false; SET lock_configuration=true;");
  log('duckdb totals',(await c.query("SELECT region,sum(revenue)::INTEGER revenue FROM read_csv('local.csv',header=true) GROUP BY region ORDER BY region")).toArray());
  for (const sql of ["SELECT * FROM read_csv('https://example.com/no.csv')","LOAD httpfs","SET enable_external_access=true","SELECT nonexistent FROM missing"]){
   try {await c.query(sql);log('unexpected SQL success',sql);}catch(e){log('expected SQL rejection',{sql,error:e.message});}
  }
  log('duckdb recovery',(await c.query('SELECT 6*7 AS answer')).toArray());
  await c.close();
 }catch(e){log('duckdb error',e.message);}finally{if(db)await db.terminate();log('duckdb','done');}
};

document.querySelector('#map-probe').onclick=async()=>{
 const {default:L}=await import('leaflet'); await import('leaflet/dist/leaflet.css');
 const map=L.map('map',{scrollWheelZoom:false}).setView([35.9,-78.9],9);
 const feature={type:'Feature',properties:{name:'Synthetic market'},geometry:{type:'Polygon',coordinates:[[[-79,35.8],[-78.8,35.8],[-78.8,36],[-79,36],[-79,35.8]]]}};
 const layer=L.geoJSON(feature,{style:{color:'#012169',fillColor:'#e2e6ed',fillOpacity:1}}).addTo(map); map.fitBounds(layer.getBounds());
 const label=document.createElement('span');label.textContent='Synthetic market — score42';
 L.circleMarker([35.9,-78.9],{color:'#012169',fillColor:'#012169',fillOpacity:1}).addTo(map).bindPopup(label).openPopup();
 map.on('zoomend',()=>log('map zoom',map.getZoom()));log('map ready',{version:L.version,bounds:layer.getBounds().toBBoxString()});document.querySelector('#map-probe').disabled=true;
};
