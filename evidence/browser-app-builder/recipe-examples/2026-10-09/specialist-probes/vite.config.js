import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {fileURLToPath} from 'node:url';
const silentEncoder = fileURLToPath(new URL('./probe/silent-encoder.js', import.meta.url));
export default defineConfig({
 root:'probe',base:'/recipe-probe/',plugins:[react(),{
  name:'assert-silent-package',
  generateBundle(){
   const encoders=[...this.getModuleIds()].filter(id=>/node_modules\/@mediabunny\/(aac|mp3|flac)-encoder/.test(id));
   if(encoders.length) this.error(`Unexpected audio encoders: ${encoders.join(', ')}`);
   console.log('Silent package check: no AAC, MP3 or FLAC encoder modules.');
  }
 }],
 resolve:{alias:Object.fromEntries(['aac','mp3','flac'].map(codec=>[`@mediabunny/${codec}-encoder`,silentEncoder]))},
 build:{outDir:'../dist',emptyOutDir:true},server:{host:'127.0.0.1',port:5194,strictPort:true},preview:{host:'127.0.0.1',port:4194,strictPort:true},worker:{format:'es'}
});
