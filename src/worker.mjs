import Module from 'manifold-3d';
import {parse} from 'opentype.js';
import {createPreview} from './preview.mjs';
const ready=Module({locateFile:f=>new URL('/'+f,location.origin).href}).then(lib=>{lib.setup();return lib;});
let fontPromise;
const getFont=()=>fontPromise??=(fetch('/gear-label-tc.otf').then(r=>{if(!r.ok)throw Error('中文字型載入失敗，請檢查網路後重試。');return r.arrayBuffer();}).then(parse).catch(e=>{fontPromise=null;throw e;}));
self.onmessage=async({data})=>{try{const lib=await ready;let font=null,fontError;try{if(data.parameters.labelEnabled)font=await getFont();}catch(e){fontError=e;}const result=createPreview(data.parameters,lib,font);if(fontError&&result.labelIssue)result.labelIssue.message=fontError.message;self.postMessage({id:data.id,result},[result.positions.buffer,result.indices.buffer]);}catch(e){self.postMessage({id:data.id,error:e.message||String(e)});}};
