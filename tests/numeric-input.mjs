import assert from 'node:assert/strict';
import Module from 'manifold-3d';
import {parseNumericDraft} from '../src/numeric-input.mjs';
import {DEFAULTS,validate,createGear,settingsFile,loadSettings} from '../src/geometry.mjs';
const valid=[['6.3',6.3],['6.',6],['.3',.3],['6.3 mm',6.3],['６．３ ｍｍ',6.3],['６．３㎜',6.3],['6.3毫米',6.3],['6.3公釐',6.3],['6,3',6.3],['1,000.5',1000.5],['-0.2',-.2],['−0.2',-.2],['+6.3',6.3],['6.3e0',6.3],[' 6.3 ',6.3]];
for(const [text,value] of valid){const p=parseNumericDraft(text);assert.equal(p.kind,'valid',text);assert.equal(p.value,value,text);}
for(const text of ['', '-', '+', '.', '-.', '6e', '6e-'])assert.equal(parseNumericDraft(text).kind,'pending',text);
for(const text of ['abc','6.3.4','6+3','6.3cm','Infinity','NaN','1e999','6 3','mm'])assert.equal(parseNumericDraft(text).kind,'invalid',text);
assert.equal(parseNumericDraft('20°','°').value,20);assert.equal(parseNumericDraft('20度','°').value,20);assert.equal(parseNumericDraft('100齒','齒').value,100);assert.equal(parseNumericDraft('6.3mm','').kind,'invalid');
// A sequence with invalid drafts keeps the last committed parameter and recovers.
let canonical=5;for(const text of ['','6','6.','6.3','6.3 mm','oops','6.3.4','６．３']){const n=parseNumericDraft(text);if(n.kind==='valid')canonical=n.value;assert.ok(Number.isFinite(canonical));}assert.equal(canonical,6.3);
const lib=await Module();lib.setup();const params={...DEFAULTS,teeth:100,boreType:'hex',shaftSize:canonical};assert.deepEqual(validate(params).errors,[]);const result=createGear(params,lib);assert.equal(result.dimensions.bore,6.3);assert.equal(result.components,1);
assert.ok(validate({...params,shaftSize:.1}).errors.length);assert.deepEqual(validate(params).errors,[]);assert.deepEqual(loadSettings(settingsFile(params)),params);
console.log('PASS: 35 input formats and draft states, units/fullwidth, invalid-to-valid recovery, 100-tooth hex 6.3 mm geometry and settings.');
