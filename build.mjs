import {build} from 'esbuild';
import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
await Promise.all([build({entryPoints:['src/app.jsx'],bundle:true,format:'esm',outfile:'dist/app.js',minify:true,define:{'process.env.NODE_ENV':'"production"'}}),build({entryPoints:['src/worker.mjs'],bundle:true,format:'esm',outfile:'dist/worker.js',minify:true,platform:'browser',external:['node:*','fs','path','module']})]);
for(const name of ['index.html','style.css'])await copyFile(name,'dist/'+name);
for(const name of ['gear-label-tc.otf','FONT-LICENSE.txt'])await copyFile('assets/'+name,'dist/'+name);
await copyFile('node_modules/manifold-3d/manifold.wasm','dist/manifold.wasm');
console.log('Built self-contained static Site.');
