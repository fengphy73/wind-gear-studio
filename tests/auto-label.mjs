import Module from 'manifold-3d';
import {parse} from 'opentype.js';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {DEFAULTS,createGear,binarySTL,loadSettings,settingsFile} from '../src/geometry.mjs';
import {createPreview} from '../src/preview.mjs';
const lib=await Module();lib.setup();const b=await readFile('assets/gear-label-tc.otf'),font=parse(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength));
const shown={...DEFAULTS,teeth:100,boreType:'hex',shaftSize:5,body:'spokes',spokes:4,spokeWidth:5,rim:3,hubDiameter:12,labelEnabled:true,labelText:'100T',labelSize:2.5,labelY:5.625,labelPlacement:'manual'};
assert.throws(()=>createGear(shown,lib,font),/實心區域/);
const preview=createPreview(shown,lib,font);assert.equal(preview.exportable,false);assert.ok(preview.labelIssue.contours.length);assert.equal(preview.components,1);assert.equal(preview.label,null);assert.throws(()=>binarySTL(preview),/文字尚未完成/);
const base=createGear({...shown,labelEnabled:false},lib);assert.equal(base.volume,preview.volume);
const fixtures=[['screenshot-100',{...shown,labelPlacement:'auto'}],['solid-100',{...shown,body:'solid',labelPlacement:'auto'}],['chinese-spokes',{...shown,labelText:'風力發電',labelPlacement:'auto'}],['back-spokes',{...shown,labelTarget:'backBody',labelPlacement:'auto'}],['rotated-six-spokes',{...shown,spokes:6,labelText:'第六組',labelPlacement:'auto'}],['hub-auto',{...shown,hub:'single',hubDiameter:15,labelTarget:'frontHub',labelPlacement:'auto'}],['requested-small',{...shown,labelSize:1,labelPlacement:'auto'}]];
function closedSTL(r){const stl=binarySTL(r),dv=new DataView(stl),edges=new Map(),n=dv.getUint32(80,true);for(let i=0;i<n;i++){const pts=Array.from({length:3},(_,k)=>Array.from({length:3},(_,j)=>dv.getFloat32(84+50*i+12+k*12+j*4,true)).join(','));for(let j=0;j<3;j++){assert.notEqual(pts[j],pts[(j+1)%3]);const edge=[pts[j],pts[(j+1)%3]].sort().join('|');edges.set(edge,(edges.get(edge)||0)+1);}}assert.ok([...edges.values()].every(v=>v===2));}
for(const[name,p]of fixtures){const start=performance.now(),r=createPreview(p,lib,font);assert.ok(!r.labelIssue,name+': '+r.labelIssue?.message);assert.ok(r.label.layout);assert.ok(r.label.layout.labelSize<=p.labelSize);assert.ok(r.label.layout.labelSize>=Math.min(1.2,p.labelSize));const normal=createGear({...p,labelPlacement:'manual',...r.label.layout},lib,font);assert.ok(Math.abs(r.volume-normal.volume)<.002);assert.notEqual(r.volume,createGear({...p,labelEnabled:false},lib).volume);closedSTL(r);assert.deepEqual(loadSettings(settingsFile(p)),p);console.log('PASS',name,r.label.layout,'ms',Math.round(performance.now()-start));}
const fixed=createGear({...shown,labelPlacement:'auto'},lib,font);assert.equal(fixed.label.layout.labelSize,shown.labelSize);assert.equal(fixed.label.layout.region,'肋條');
const noSpace=createPreview({...DEFAULTS,labelEnabled:true,labelPlacement:'auto',labelText:'風'.repeat(20)},lib,font);assert.equal(noSpace.exportable,false);assert.ok(noSpace.labelIssue.message.includes('找不到可用位置'));assert.equal(noSpace.volume,createGear({...DEFAULTS},lib).volume);
const noFont=createPreview(shown,lib,null);assert.equal(noFont.exportable,false);assert.ok(noFont.positions.length);
const coreBad={...shown,teeth:4};assert.throws(()=>createPreview(coreBad,lib,font),/齒數/);
const old=loadSettings({format:'wind-gear-studio',version:2,parameters:{labelEnabled:true,labelText:'100T',labelY:9}});assert.equal(old.labelPlacement,'manual');assert.equal(old.labelY,9);
console.log('PASS: screenshot reproduced and repaired; size preservation, body changes, Chinese, reverse face, hub, STL, blocked export, missing font and old settings.');
