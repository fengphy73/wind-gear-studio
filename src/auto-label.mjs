import {textContours} from './text.mjs';
/** Search actual exposed material, preserving requested size before shrinking. */
export function arrangeLabel(p,d,font,CrossSection,safeFace,acceptDepth){
 const seed=textContours({...p,labelX:0,labelY:0,labelRotation:0,labelTarget:'frontBody'},font),back=p.labelTarget.startsWith('back'),candidates=[];
 const upright=a=>{while(a>90)a-=180;while(a< -90)a+=180;return a;};
 const add=(x,y,a=0,region='實心區')=>{if([x,y,a].every(Number.isFinite))candidates.push({labelX:x,labelY:y,labelRotation:a,region});};
 add(p.labelX,p.labelY,p.labelRotation,'原位置');
 const bore=p.boreType==='hex'?d.bore/Math.sqrt(3):d.bore/2,hub=p.labelTarget.endsWith('Hub'),core=hub||p.body==='spokes'?p.hubDiameter/2:d.root;
 add(0,0,0,'中央');
 for(const a of [90,270,0,180,45,135,225,315]){const t=a*Math.PI/180,r=(bore+core)/2;add(r*Math.cos(t),r*Math.sin(t),0,'中央實心區');}
 if(!hub&&p.body==='spokes'){
  const start=p.hubDiameter/2,end=d.root-p.rim;
  for(let i=0;i<p.spokes;i++)for(const fraction of [.5,.3,.7]){const t=i*2*Math.PI/p.spokes,r=start+(end-start)*fraction,x=r*Math.cos(t)*(back?-1:1),y=r*Math.sin(t);add(x,y,upright(Math.atan2(y,x)*180/Math.PI),'肋條');}
  for(let i=0;i<8;i++){const t=i*Math.PI/4,r=d.root-p.rim/2,x=r*Math.cos(t)*(back?-1:1),y=r*Math.sin(t);add(x,y,upright(Math.atan2(y,x)*180/Math.PI+90),'外圈');}
 }else if(!hub){for(const r of [.45*d.root,.7*d.root])for(let i=0;i<8;i++){const t=i*Math.PI/4;add(r*Math.cos(t),r*Math.sin(t),0,'本體');}}
 const minimum=Math.min(1.2,p.labelSize),sizes=[...new Set([1,.85,.7,.55,.4,.3].map(k=>Math.max(minimum,Math.round(p.labelSize*k*100)/100)).concat(minimum))];
 let attempts=0;
 for(const size of sizes)for(const pose of candidates){
  const a=pose.labelRotation*Math.PI/180,cos=Math.cos(a),sin=Math.sin(a),scale=size/p.labelSize;
  const contours=seed.map(loop=>loop.map(([u,v])=>{const x=(u*cos-v*sin)*scale+pose.labelX,y=(u*sin+v*cos)*scale+pose.labelY;return [back?-x:x,y];}));
  if(contours.some(loop=>loop.some(([x,y])=>Math.hypot(x,y)>d.root-.19)))continue;
  let cs,remainder;try{cs=new CrossSection(contours,'NonZero');remainder=cs.subtract(safeFace);attempts++;
   if(remainder.area()>Math.max(.00001,cs.area()*1e-6))continue;
   if(!acceptDepth(cs))continue;
   const selected=cs;cs=null;return {section:selected,contours,layout:{...pose,labelSize:size},attempts};
  }finally{remainder?.delete();cs?.delete();}
 }
 throw Error('自動安排仍找不到可用位置。請縮短文字、增加肋條寬度或中央實心區外徑，或先關閉文字。');
}
