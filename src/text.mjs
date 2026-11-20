/** Turn font outlines into CAD contours in mm, readable from the selected face. */
export function textContours(p,font){
 const text=p.labelText.trim();
 if(!font)throw Error('文字字型尚未載入，請稍後再試。');
 const missing=[...new Set([...text].filter(c=>!font.charToGlyphIndex(c)))];
 if(missing.length)throw Error('目前字型不支援這些字元：'+missing.join(' ')+'。請改用常用中文、英文或數字。');
 const path=font.getPath(text,0,0,1,{kerning:true}),box=path.getBoundingBox(),height=box.y2-box.y1;
 if(!(height>0))throw Error('文字沒有可製作的輪廓，請輸入中文、英文或數字。');
 const scale=p.labelSize/height,cx=(box.x1+box.x2)/2,cy=(box.y1+box.y2)/2,angle=p.labelRotation*Math.PI/180,cos=Math.cos(angle),sin=Math.sin(angle),back=p.labelTarget.startsWith('back');
 const point=(x,y)=>[(x-cx)*scale,-(y-cy)*scale];
 const transform=([u,v])=>{const x=u*cos-v*sin,y=u*sin+v*cos;return [(back?-1:1)*(x+p.labelX),y+p.labelY];};
 const contours=[];let contour=[],last=[0,0];
 const push=v=>{if(!contour.length||Math.hypot(v[0]-contour.at(-1)[0],v[1]-contour.at(-1)[1])>1e-7)contour.push(v);};
 const close=()=>{if(contour.length>2){if(Math.hypot(contour[0][0]-contour.at(-1)[0],contour[0][1]-contour.at(-1)[1])<1e-7)contour.pop();contours.push(contour.map(transform));}contour=[];};
 const mid=(a,b)=>[(a[0]+b[0])/2,(a[1]+b[1])/2];
 const dist=(v,a,b)=>{const dx=b[0]-a[0],dy=b[1]-a[1],length=Math.hypot(dx,dy);return length?Math.abs(dx*(a[1]-v[1])-(a[0]-v[0])*dy)/length:Math.hypot(v[0]-a[0],v[1]-a[1]);};
 const quad=(a,b,c,depth=0)=>{if(depth>=9||dist(b,a,c)<.008){push(c);return;}const ab=mid(a,b),bc=mid(b,c),m=mid(ab,bc);quad(a,ab,m,depth+1);quad(m,bc,c,depth+1);};
 const cubic=(a,b,c,d,depth=0)=>{if(depth>=9||Math.max(dist(b,a,d),dist(c,a,d))<.008){push(d);return;}const ab=mid(a,b),bc=mid(b,c),cd=mid(c,d),abc=mid(ab,bc),bcd=mid(bc,cd),m=mid(abc,bcd);cubic(a,ab,abc,m,depth+1);cubic(m,bcd,cd,d,depth+1);};
 for(const cmd of path.commands){if(cmd.type==='M'){close();last=point(cmd.x,cmd.y);push(last);}else if(cmd.type==='L'){last=point(cmd.x,cmd.y);push(last);}else if(cmd.type==='Q'){const end=point(cmd.x,cmd.y);quad(last,point(cmd.x1,cmd.y1),end);last=end;}else if(cmd.type==='C'){const end=point(cmd.x,cmd.y);cubic(last,point(cmd.x1,cmd.y1),point(cmd.x2,cmd.y2),end);last=end;}else if(cmd.type==='Z')close();}close();
 return contours;
}
export function labelPlane(p,d){const isBack=p.labelTarget.startsWith('back'),isHub=p.labelTarget.endsWith('Hub');return {sign:isBack?-1:1,z:isBack?(isHub?0:d.back):(isHub?d.total:d.back+p.thickness)};}
export function suggestedLabel(p,d){
 const onHub=p.hub!=='none',outer=onHub||p.body==='spokes'?p.hubDiameter/2:d.root,bore=p.boreType==='hex'?d.bore/Math.sqrt(3):d.bore/2;
 return {labelTarget:onHub?'frontHub':'frontBody',labelSize:Math.max(.8,Math.min(2.5,(outer-bore)*.42)),labelX:0,labelY:(outer+bore)/2,labelRotation:0};
}
