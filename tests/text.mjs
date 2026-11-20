import Module from 'manifold-3d';
import {parse} from 'opentype.js';
import assert from 'node:assert/strict';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
import {DEFAULTS,createGear,validate,settingsFile,loadSettings,binarySTL,dimensions} from '../src/geometry.mjs';
import {suggestedLabel,textContours} from '../src/text.mjs';
const lib=await Module();lib.setup();const bytes=await readFile('assets/gear-label-tc.otf'),font=parse(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength));
const label={labelEnabled:true,labelText:'20T',labelMode:'engrave',labelSize:2.5,labelY:5.5};
const cases=[
 ['english-engrave',{}],['english-emboss',{labelMode:'emboss'}],
 ['back-engrave',{labelTarget:'backBody'}],['back-emboss',{labelTarget:'backBody',labelMode:'emboss'}],
 ['chinese',{teeth:60,labelText:'風力',labelSize:4,labelY:15}],
 ['chinese-back',{teeth:60,labelText:'北聯',labelSize:4,labelY:15,labelTarget:'backBody'}],
 ['hub-front',{hub:'single',labelTarget:'frontHub',labelText:'A1',labelSize:1.3,labelY:4.4}],
 ['hub-back',{hub:'double',labelTarget:'backHub',labelText:'B8',labelSize:1.3,labelY:4.4,labelMode:'emboss'}],
 ['spoke',{teeth:60,body:'spokes',hubDiameter:15,labelText:'60T',labelSize:2.5,labelX:17,labelY:0}],
 ['spoke-rotated',{teeth:60,body:'spokes',hubDiameter:15,labelText:'G1',labelSize:2.5,labelX:0,labelY:17,labelRotation:90}],
 ['cap',{stop:true,stopThickness:1.5,stopSide:'front',labelText:'I',labelSize:2,labelY:0,labelDepth:.5}],
 ['punctuation',{teeth:60,labelText:'M1.0-A',labelSize:3,labelY:15}],
];
await mkdir('tests/output',{recursive:true});
function checkSTL(r,name){const b=binarySTL(r),dv=new DataView(b),n=dv.getUint32(80,true),edges=new Map();let signedVolume=0;const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];assert.equal(b.byteLength,84+50*n);
 for(let i=0;i<n;i++){const pts=Array.from({length:3},(_,k)=>Array.from({length:3},(_,j)=>dv.getFloat32(84+50*i+12+12*k+4*j,true)));for(const p of pts)for(let j=0;j<3;j++){min[j]=Math.min(min[j],p[j]);max[j]=Math.max(max[j],p[j]);}for(let j=0;j<3;j++){const a=pts[j].join(','),c=pts[(j+1)%3].join(',');assert.notEqual(a,c);const k=[a,c].sort().join('|');const e=edges.get(k)||{n:0,d:0};e.n++;e.d+=a<c?1:-1;edges.set(k,e);}const[a,c,d]=pts;signedVolume+=(a[0]*(c[1]*d[2]-c[2]*d[1])+a[1]*(c[2]*d[0]-c[0]*d[2])+a[2]*(c[0]*d[1]-c[1]*d[0]))/6;}
 assert.ok([...edges.values()].every(e=>e.n===2&&e.d===0),name+' STL closed and oriented');assert.ok(Math.abs(signedVolume-r.volume)<Math.max(.002,r.volume*1e-6),name+' STL volume');assert.ok(Math.abs(min[2]-r.dimensions.minZ)<1e-4);assert.ok(Math.abs(max[2]-r.dimensions.maxZ)<1e-4);return b;
}
for(const[name,over]of cases){const p={...DEFAULTS,...label,...over};assert.deepEqual(validate(p).errors,[],name);const base=createGear({...p,labelEnabled:false},lib),r=createGear(p,lib,font);assert.equal(r.components,1);assert.ok(r.label.contours.length);const cs=new lib.CrossSection(r.label.contours,'NonZero'),expected=cs.area()*p.labelDepth;cs.delete();const volumeDelta=p.labelMode==='engrave'?base.volume-r.volume:r.volume-base.volume;assert.ok(Math.abs(expected-volumeDelta)<.002,name+' physical text volume');assert.deepEqual(loadSettings(settingsFile(p)),p);const stl=checkSTL(r,name);await writeFile('tests/output/text-'+name+'.stl',new Uint8Array(stl));console.log('PASS',name,'volume delta',volumeDelta.toFixed(3));}
const invalid=[['window',{teeth:60,body:'spokes',hubDiameter:15,labelX:15,labelY:15}],['bore',{labelText:'I',labelY:0}],['tooth-edge',{labelY:8}],['floor',{thickness:1,labelDepth:.5}],['cap-floor',{stop:true,stopSide:'front',labelText:'I',labelSize:2,labelY:0,labelDepth:1}],['screw',{hub:'single',screws:true,labelTarget:'frontHub',labelText:'I',labelSize:1.5,labelX:4.5,labelY:0,labelDepth:1}],['unsupported',{labelText:'🙂'}]];
for(const[name,over]of invalid){assert.throws(()=>createGear({...DEFAULTS,...label,...over},lib,font),undefined,name+' rejected');console.log('PASS rejection',name);}
const old=loadSettings({format:'wind-gear-studio',version:1,units:'mm',parameters:{teeth:60}});assert.equal(old.teeth,60);assert.equal(old.labelEnabled,false);
const original=textContours({...DEFAULTS,...label,labelRotation:25},font),back=textContours({...DEFAULTS,...label,labelRotation:25,labelTarget:'backBody'},font);for(let c=0;c<original.length;c++)for(let i=0;i<original[c].length;i++){assert.equal(original[c][i][0],-back[c][i][0]);assert.equal(original[c][i][1],back[c][i][1]);}
for(const cfg of [{},{teeth:60,body:'spokes',hubDiameter:15},{hub:'single'}]){const p={...DEFAULTS,...cfg},s=suggestedLabel(p,dimensions(p));createGear({...p,...s,labelEnabled:true,labelText:`${p.teeth}T`},lib,font);}
console.log('PASS: 12 text solids, 7 collision/character rejections, backside readability, suggested positions and old settings compatibility.');

const {viewBasis,cameraAngles}=await import('../src/view-math.mjs');
for(const kind of ['front','back','iso']){const angles=cameraAngles(kind),b=viewBasis(angles.yaw,angles.pitch),cross=[b.right[1]*b.up[2]-b.right[2]*b.up[1],b.right[2]*b.up[0]-b.right[0]*b.up[2],b.right[0]*b.up[1]-b.right[1]*b.up[0]];assert.ok(cross.every((v,i)=>Math.abs(v-b.normal[i])<1e-10));if(kind!=='iso'){assert.ok(b.up[1]>.999);assert.ok(b.right[0]*(kind==='front'?1:-1)>.999);}}
console.log('PASS: front/back projection preserves upward text and outward surface orientation.');
