export function cameraAngles(kind){return {yaw:kind==='iso'?.65:kind==='back'?Math.PI:0,pitch:kind==='front'?Math.PI/2:kind==='back'?-Math.PI/2:.65};}
export function viewBasis(yaw,pitch){const cy=Math.cos(yaw),sy=Math.sin(yaw),cp=Math.cos(pitch),sp=Math.sin(pitch);return {right:[cy,sy,0],up:[-sy*sp,cy*sp,cp],normal:[sy*cp,-cy*cp,sp]};}
