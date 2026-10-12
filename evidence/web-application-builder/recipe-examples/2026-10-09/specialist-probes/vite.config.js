import {defineConfig} from 'vite';
export default defineConfig({
 root:'probe',base:'/recipe-probe/',
 build:{outDir:'../dist',emptyOutDir:true},
 server:{host:'127.0.0.1',port:5194,strictPort:true},
 preview:{host:'127.0.0.1',port:4194,strictPort:true},worker:{format:'es'}
});
