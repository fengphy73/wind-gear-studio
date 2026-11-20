import assert from 'node:assert/strict';
import Module from 'manifold-3d';
import {parse} from 'opentype.js';
import {readFile} from 'node:fs/promises';
import {DEFAULTS,QUICK_TEETH,gearPreset,setBoreType,acrossCorners,boreContour,dimensions,loadSettings,settingsFile,createGear} from '../src/geometry.mjs';
let p=setBoreType({...DEFAULTS},'hex');assert.equal(p.shaftSize,6.34);assert.equal(acrossCorners(p.shaftSize).toFixed(2),'7.32');
p={...p,shaftSize:6.5};p=setBoreType(p,'round');assert.equal(p.shaftSize,5);p=setBoreType(p,'hex');assert.equal(p.shaftSize,6.5);assert.deepEqual(loadSettings(settingsFile(p)),p);
const old=loadSettings({format:'wind-gear-studio',version:3,parameters:{boreType:'hex',shaftSize:5.5}});assert.equal(setBoreType(setBoreType(old,'round'),'hex').shaftSize,5.5);
const compensated={...DEFAULTS,boreType:'hex',shaftSize:6.34,compensation:.2};const pts=boreContour(compensated),actual=Math.max(...pts.flatMap(a=>pts.map(b=>Math.hypot(a[0]-b[0],a[1]-b[1]))));assert.ok(Math.abs(actual-acrossCorners(dimensions(compensated).bore))<1e-10);assert.equal(actual.toFixed(2),'7.55');
assert.deepEqual(QUICK_TEETH,[20,40,50,60,80,100]);assert.equal(DEFAULTS.labelDepth,3);assert.equal(DEFAULTS.stopThickness,.5);
const lib=await Module();lib.setup();const bytes=await readFile('assets/gear-label-tc.otf'),font=parse(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength));
for(const z of QUICK_TEETH){const q=gearPreset(z);assert.equal(q.teeth,z);assert.equal(q.labelDepth,3);assert.equal(q.boreType,'hex');assert.equal(q.shaftSize,6.34);if(z===20)assert.equal(q.body,'solid');const base=createGear(q,lib);const marked=createGear({...q,labelEnabled:true,labelPlacement:'auto',labelText:`${z}T`},lib,font);assert.equal(marked.components,1);assert.equal(marked.label.depth,3);assert.ok(marked.volume<base.volume);console.log('PASS quick start',z,'with 3 mm engraving');}
console.log('PASS hex switching, legacy settings, compensated corner distances and defaults.');
