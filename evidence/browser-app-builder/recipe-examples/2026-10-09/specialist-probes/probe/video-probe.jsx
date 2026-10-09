import React from 'react';
import {useCurrentFrame} from 'remotion';
import {renderMediaOnWeb,canRenderMediaOnWeb} from '@remotion/web-renderer';
function Scene(){const frame=useCurrentFrame();return <div style={{width:320,height:180,backgroundColor:'#012169',color:'white',fontFamily:'Arial',fontSize:24,display:'flex',alignItems:'center',justifyContent:'center'}}>{`Frame ${frame}`}</div>;}
export async function runVideo(log){
 const composition={component:Scene,width:320,height:180,durationInFrames:30,fps:30,id:'isolated-probe'};
 const options={composition,container:'mp4',videoCodec:'h264',muted:true,outputTarget:'arraybuffer',licenseKey:'free-license',isProduction:false};
 const support=await canRenderMediaOnWeb({...options,muted:true,width:composition.width,height:composition.height});
 log('video capability',support); if(!support.canRender) throw Error(support.issues.map(x=>x.message).join('; '));
 log('video','render starting');
 const result=await renderMediaOnWeb({...options,muted:true,onProgress:p=>log('video progress',p)});
 const blob=await result.getBlob();log('video blob',{bytes:blob.size,type:blob.type});
 const url=URL.createObjectURL(blob),video=document.createElement('video');video.controls=true;video.src=url;document.querySelector('#video-result').append(video);
 await new Promise((resolve,reject)=>{video.onloadedmetadata=resolve;video.onerror=()=>reject(Error('playback metadata failed'));});
 log('video metadata',{width:video.videoWidth,height:video.videoHeight,duration:video.duration});
 const a=document.createElement('a');a.href=url;a.download='isolated-probe.mp4';a.textContent='Download playable MP4';document.querySelector('#video-result').append(a);
}
