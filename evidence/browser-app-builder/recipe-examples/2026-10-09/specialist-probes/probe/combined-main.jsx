import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import * as duckdb from '@duckdb/duckdb-wasm';
import wasm from '@duckdb/duckdb-wasm/dist/duckdb-mvp.wasm?url';
import workerUrl from '@duckdb/duckdb-wasm/dist/duckdb-browser-mvp.worker.js?url';
import {createRoot} from 'react-dom/client';
import {Player} from '@remotion/player';
import {useCurrentFrame} from 'remotion';
import {canRenderMediaOnWeb,renderMediaOnWeb} from '@remotion/web-renderer';

const result=document.querySelector('#results');
const write=(label,value)=>{result.textContent+='\n'+label+': '+JSON.stringify(value,(_,v)=>typeof v==='bigint'?String(v):v);};
function Scene(){const frame=useCurrentFrame();return <div style={{background:'#012169',color:'white',width:320,height:180,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24}}>Local frame {frame}</div>;}
createRoot(document.querySelector('#player')).render(<Player component={Scene} durationInFrames={30} fps={30} compositionWidth={320} compositionHeight={180} controls/>);
const map=L.map('map',{attributionControl:false}).setView([35.9,-78.9],10);
L.geoJSON({type:'Feature',properties:{name:'Synthetic market'},geometry:{type:'Polygon',coordinates:[[[-79,35.8],[-78.8,35.8],[-78.8,36],[-79,36],[-79,35.8]]]}},{style:{color:'#012169',fillColor:'#FFD960',fillOpacity:1}}).addTo(map);
L.circleMarker([35.9,-78.9],{radius:8,color:'#012169',fillColor:'#fff',fillOpacity:1}).addTo(map);
document.querySelector('#run').onclick=async()=>{
 result.textContent='Running';
 write('environment',{secureContext:isSecureContext,crossOriginIsolated,sharedArrayBuffer:typeof SharedArrayBuffer,videoEncoder:typeof VideoEncoder});
 write('Leaflet',{version:L.version,layers:Object.keys(map._layers).length});
 const solver=new Worker(new URL('./highs-worker.js',import.meta.url),{type:'module'});
 const solved=new Promise(resolve=>{solver.onmessage=e=>resolve(e.data);solver.onerror=e=>resolve({error:e.message});});
 solver.postMessage(null);
 try{
  const db=new duckdb.AsyncDuckDB(new duckdb.VoidLogger(),new Worker(workerUrl));
  await db.instantiate(wasm);
  await db.open({maximumThreads:1});
  const conn=await db.connect();
  await db.registerFileText('local.csv','region,revenue\nEast,10\nWest,20\nEast,30\n');
  await conn.query("SET autoinstall_known_extensions=false; SET autoload_known_extensions=false; SET allowed_paths=['local.csv']; SET enable_external_access=false; SET lock_configuration=true;");
  await conn.query("CREATE TABLE sales AS SELECT * FROM read_csv('local.csv',header=true);");
  write('DuckDB result',(await conn.query('SELECT region, sum(revenue) AS revenue FROM sales GROUP BY region ORDER BY region')).toArray());
  write('DuckDB version',(await conn.query('SELECT version() AS version')).toArray());
  for(const sql of ["SELECT * FROM read_csv('https://example.com/no.csv')","INSTALL httpfs","SET enable_external_access=true"]){
   try{await conn.query(sql);write('UNEXPECTED SQL accepted',sql);}catch(e){write('expected rejection',{sql,error:e.message});}
  }
  await db.registerFileText('local.csv','region,revenue\nEast,99\n');
  write('local import after lock',(await conn.query("SELECT * FROM read_csv('local.csv',header=true)")).toArray());
  await conn.close(); await db.terminate();
 } catch(e){write('DuckDB error',e.message);}
 write('HiGHS worker',await solved);solver.terminate();
 try{write('Remotion encode capability only',await canRenderMediaOnWeb({composition:{component:Scene,width:320,height:180,durationInFrames:30,fps:30,id:'probe'},container:'mp4',videoCodec:'h264',muted:true}));}catch(e){write('Remotion capability error',e.message);}
 try {
  const media=await renderMediaOnWeb({composition:{component:Scene,width:320,height:180,durationInFrames:30,fps:30,id:'probe'},container:'mp4',videoCodec:'h264',muted:true,outputTarget:'arraybuffer',licenseKey:'free-license',isProduction:false});
  const blob=await media.getBlob(); const url=URL.createObjectURL(blob);
  const video=document.createElement('video');video.controls=true;video.src=url;document.querySelector('main').append(video);
  await new Promise((resolve,reject)=>{video.onloadedmetadata=resolve;video.onerror=()=>reject(Error('Export playback metadata failed'));});
  write('Remotion export',{size:blob.size,type:blob.type,duration:video.duration,width:video.videoWidth,height:video.videoHeight});
  const a=document.createElement('a');a.href=url;a.download='recipe-probe.mp4';a.textContent='Download probe MP4';document.querySelector('main').append(a);
 }catch(e){write('Remotion export error',e.message);}
 write('main-thread resource URLs',performance.getEntriesByType('resource').map(x=>x.name));
 write('complete',true);
};
