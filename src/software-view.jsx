import React,{useEffect,useRef} from 'react';
import {viewBasis,cameraAngles} from './view-math.mjs';
export function SoftwareView({result,view,cut}){
 const canvas=useRef(),state=useRef({yaw:.65,pitch:.65,zoom:1,pointers:new Map()}),drawRef=useRef(()=>{});
 useEffect(()=>{const c=canvas.current,s=state.current;s.result=result;s.cut=cut;const render=()=>{
  const ctx=c.getContext('2d'),w=c.clientWidth,h=c.clientHeight,dpr=Math.min(devicePixelRatio,2);if(!w||!h)return;if(c.width!==Math.round(w*dpr)||c.height!==Math.round(h*dpr)){c.width=Math.round(w*dpr);c.height=Math.round(h*dpr);}ctx.setTransform(dpr,0,0,dpr,0,0);ctx.fillStyle='#edf2f2';ctx.fillRect(0,0,w,h);if(!s.result)return;
  const r=s.result,{positions:v,indices:ind,stride,dimensions:d}=r,{right,up,normal}=viewBasis(s.yaw,s.pitch),scale=Math.min(w/(d.tip*3.2),h/(d.tip*2.9+d.total))*s.zoom,project=(x,y,z)=>{return [w/2+(x*right[0]+y*right[1])*scale,h/2-(x*up[0]+y*up[1]+z*up[2])*scale,x*normal[0]+y*normal[1]+z*normal[2]];};
  // Ground grid in the same projection as the model.
  ctx.lineWidth=.65;ctx.strokeStyle='#dbe4e3';const step=Math.max(.5,10**Math.floor(Math.log10(d.tip/3))),range=Math.ceil(d.tip*2/step)*step,z=(d.minZ||0)-d.total/2-.2;for(let q=-range;q<=range;q+=step){const a=project(-range,q,z),b=project(range,q,z),e=project(q,-range,z),f=project(q,range,z);ctx.beginPath();ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);ctx.moveTo(e[0],e[1]);ctx.lineTo(f[0],f[1]);ctx.stroke();}
  const verts=Array.from({length:v.length/stride},(_,i)=>[v[i*stride],v[i*stride+1],v[i*stride+2]-d.total/2]),faces=[];
  for(let i=0;i<ind.length;i+=3){let pts=[verts[ind[i]],verts[ind[i+1]],verts[ind[i+2]]];if(s.cut){const out=[];for(let j=0;j<pts.length;j++){const a=pts[j],b=pts[(j+1)%pts.length],insideA=a[1]<=0,insideB=b[1]<=0;if(insideA)out.push(a);if(insideA!==insideB){const t=-a[1]/(b[1]-a[1]);out.push(a.map((x,k)=>x+(b[k]-x)*t));}}pts=out;if(pts.length<3)continue;}
   const a=pts[0],b=pts[1],c=pts[2],u=b.map((x,k)=>x-a[k]),t=c.map((x,k)=>x-a[k]),nx=u[1]*t[2]-u[2]*t[1],ny=u[2]*t[0]-u[0]*t[2],nz=u[0]*t[1]-u[1]*t[0],nl=Math.hypot(nx,ny,nz)||1;
   if(!s.cut&&nx*normal[0]+ny*normal[1]+nz*normal[2]<=0)continue;
   const light=.5+.45*Math.max(0,(-.35*nx-.45*ny+.82*nz)/nl),screen=pts.map(x=>project(...x));faces.push({pts:screen,depth:screen.reduce((n,v)=>n+v[2],0)/screen.length,shade:`rgb(${Math.round(99*light)},${Math.round(144*light)},${Math.round(160*light)})`});
  }
  faces.sort((a,b)=>a.depth-b.depth);for(const face of faces){ctx.beginPath();ctx.moveTo(face.pts[0][0],face.pts[0][1]);for(let i=1;i<face.pts.length;i++)ctx.lineTo(face.pts[i][0],face.pts[i][1]);ctx.closePath();ctx.fillStyle=face.shade;ctx.fill();ctx.strokeStyle=face.shade;ctx.lineWidth=.4;ctx.stroke();}
 };drawRef.current=render;render();const ro=new ResizeObserver(render);ro.observe(c);return()=>ro.disconnect();},[result,cut]);
 useEffect(()=>{const s=state.current;Object.assign(s,cameraAngles(view.kind));s.zoom=1;drawRef.current();},[view]);
 const pinch=()=>{const pts=[...state.current.pointers.values()];return pts.length===2?Math.hypot(pts[0].x-pts[1].x,pts[0].y-pts[1].y):0;};
 const pointerDown=e=>{e.currentTarget.setPointerCapture(e.pointerId);state.current.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});state.current.pinch=pinch();};
 const pointerMove=e=>{const s=state.current,prev=s.pointers.get(e.pointerId);if(!prev)return;const dx=e.clientX-prev.x,dy=e.clientY-prev.y;s.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(s.pointers.size===2){const now=pinch();if(s.pinch>0)s.zoom=Math.max(.25,Math.min(5,s.zoom*now/s.pinch));s.pinch=now;}else{s.yaw-=dx*.009;s.pitch=Math.max(-Math.PI/2,Math.min(Math.PI/2,s.pitch+dy*.009));}drawRef.current();};
 useEffect(()=>{const c=canvas.current,onWheel=e=>{e.preventDefault();state.current.zoom=Math.max(.25,Math.min(5,state.current.zoom*Math.exp(-e.deltaY*.001)));drawRef.current();};c.addEventListener('wheel',onWheel,{passive:false});return()=>c.removeEventListener('wheel',onWheel);},[]);
 return <canvas ref={canvas} className="software-canvas" aria-label="齒輪 3D 模型，相容顯示，可拖曳旋轉及縮放" onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={e=>state.current.pointers.delete(e.pointerId)} onPointerCancel={e=>state.current.pointers.delete(e.pointerId)}/>;
}
