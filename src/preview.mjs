import {createGear,validate} from './geometry.mjs';
import {textContours,labelPlane} from './text.mjs';
/** A label error must not hide a valid gear or silently omit text on export. */
export function createPreview(p,lib,font){
 try{return createGear(p,lib,font);}catch(error){
  if(!p.labelEnabled||validate({...p,labelEnabled:false}).errors.length)throw error;
  const result=createGear({...p,labelEnabled:false},lib);let contours=[];try{if([p.labelSize,p.labelX,p.labelY,p.labelRotation].every(Number.isFinite))contours=textContours(p,font);}catch{}
  result.exportable=false;result.labelIssue={message:error.message,contours,target:p.labelTarget,...labelPlane(p,result.dimensions)};
  return result;
 }
}
