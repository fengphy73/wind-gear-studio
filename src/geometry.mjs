import {arrangeLabel} from './auto-label.mjs';
import {textContours,labelPlane} from './text.mjs';
export const DEFAULTS = Object.freeze({teeth:20,module:1,pressure:20,thickness:7.5,boreType:'round',shaftSize:5,roundSize:5,hexSize:6.34,compensation:0,body:'solid',spokes:4,spokeWidth:5,rim:3,hub:'none',hubDiameter:12,hubFront:5,hubBack:5,stop:false,stopSide:'back',stopThickness:0.5,ejectHole:0,screws:false,screwCount:1,screwDiameter:2.5,screwPosition:2.5,screwAngle:0,backlash:0,shift:0,clearance:0.25,quality:16,labelPlacement:'manual',labelEnabled:false,labelText:'',labelMode:'engrave',labelTarget:'frontBody',labelSize:2.5,labelX:0,labelY:5.5,labelRotation:0,labelDepth:3});
export const SCHEMA_KEYS=Object.keys(DEFAULTS);
export const QUICK_TEETH=Object.freeze([20,40,50,60,80,100]);
export function setBoreType(p,type){if(type===p.boreType)return p;return {...p,[p.boreType==='hex'?'hexSize':'roundSize']:p.shaftSize,boreType:type,shaftSize:p[type==='hex'?'hexSize':'roundSize']};}
export function gearPreset(teeth){return {...DEFAULTS,teeth,boreType:'hex',shaftSize:DEFAULTS.hexSize,...(teeth===20?{}:{body:'spokes',hubDiameter:15})};}
export const acrossCorners=acrossFlats=>acrossFlats*2/Math.sqrt(3);
export function loadSettings(data){
 if(!data || data.format!=='wind-gear-studio' || ![1,2,3].includes(data.version) || !data.parameters || typeof data.parameters!=='object')throw Error('這不是支援的齒輪設計設定檔。');
 const p={...DEFAULTS};for(const k of SCHEMA_KEYS)if(k in data.parameters){if(typeof data.parameters[k]!==typeof DEFAULTS[k])throw Error('設定檔欄位型態不正確：'+k);p[k]=data.parameters[k];}const sizeKey=p.boreType==='hex'?'hexSize':'roundSize';if(!(sizeKey in data.parameters))p[sizeKey]=p.shaftSize;return p;
}
export function settingsFile(p){return {format:'wind-gear-studio',version:3,units:'mm',parameters:Object.fromEntries(SCHEMA_KEYS.map(k=>[k,p[k]]))};}
const rad=d=>d*Math.PI/180;
const polar=(r,a)=>[r*Math.cos(a),r*Math.sin(a)];
export function dimensions(p){
 const a=rad(p.pressure),pitch=p.module*p.teeth/2,base=pitch*Math.cos(a),tip=pitch+p.module*(1+p.shift),root=pitch-p.module*(1+p.clearance-p.shift);
 const front=p.hub==='none'?0:p.hubFront,back=p.hub==='double'?p.hubBack:0,total=p.thickness+front+back;
 let minZ=0,maxZ=total;if(p.labelEnabled&&p.labelMode==='emboss'){if(p.labelTarget.startsWith('front'))maxZ=Math.max(total,(p.labelTarget.endsWith('Hub')?total:back+p.thickness)+p.labelDepth);else minZ=Math.min(0,(p.labelTarget.endsWith('Hub')?0:back)-p.labelDepth);}
 return {pitch,base,tip,root,front,back,total,minZ,maxZ,printHeight:maxZ-minZ,bore:p.shaftSize+p.compensation,insertion:total-(p.stop?p.stopThickness:0),halfPitch:Math.PI/(2*p.teeth)+2*p.shift*Math.tan(a)/p.teeth-p.backlash/(2*pitch)};
}
export function validate(p){
 const errors=[],warnings=[];const check=(x,ok,msg)=>{if(!Number.isFinite(x)||!ok)errors.push(msg);};
 check(p.teeth,Number.isInteger(p.teeth)&&p.teeth>=12&&p.teeth<=160,'齒數須為 12–160 的整數。');check(p.module,p.module>=0.3&&p.module<=5,'模數須介於 0.3–5 mm。');check(p.pressure,p.pressure>=14.5&&p.pressure<=30,'壓力角須介於 14.5–30°。');check(p.thickness,p.thickness>=1&&p.thickness<=40,'齒輪厚度須介於 1–40 mm。');
 for(const k of SCHEMA_KEYS)if(typeof DEFAULTS[k]==='number'&&(!k.startsWith('label')||p.labelEnabled)&&!Number.isFinite(p[k]))errors.push('參數必須是有效數字：'+k);
 for(const [key,values] of Object.entries({boreType:['round','hex'],body:['solid','spokes'],hub:['none','single','double'],stopSide:['front','back']}))if(!values.includes(p[key]))errors.push('設定選項不正確：'+key);
 check(p.shift,p.shift>=-0.4&&p.shift<=0.6,'變位係數須介於 −0.4 至 0.6。');check(p.backlash,p.backlash>=0&&p.backlash<=p.module*0.6,'齒厚減量須介於 0 至 0.6 倍模數。');check(p.clearance,p.clearance>=0.15&&p.clearance<=0.5,'齒頂隙係數須介於 0.15–0.5。');
 check(p.quality,Number.isInteger(p.quality)&&p.quality>=8&&p.quality<=32,'曲線精度須為 8–32。');
 const d=dimensions(p),boreOuter=p.boreType==='hex'?d.bore/Math.sqrt(3):d.bore/2;
 check(p.shaftSize,p.shaftSize>=0.5,'實際軸尺寸須至少為 0.5 mm。');
 check(d.bore,d.bore>=0.5,'補償後孔尺寸須至少為 0.5 mm。');
 if(boreOuter+0.6>=d.root)errors.push('中心孔太大，齒根周圍需保留至少 0.6 mm 材料。');
 if(d.tip<=d.base || d.root<=0 || d.halfPitch<=0)errors.push('齒形無法生成，請調整模數、壓力角、變位或齒厚減量。');
 const inv=t=>Math.tan(t)-t,halfTip=d.halfPitch+inv(rad(p.pressure))-inv(Math.acos(Math.min(1,d.base/d.tip)));
 if(halfTip<0.002)errors.push('齒頂過尖，請減少齒厚減量或變位量。');
 const halfRoot=d.halfPitch+inv(rad(p.pressure))-(d.root>d.base?inv(Math.acos(d.base/d.root)):0);
 if(halfRoot>=Math.PI/p.teeth)errors.push('齒根過寬，請調整變位或壓力角。');
 if(p.hub!=='none'||p.body==='spokes'){
  check(p.hubDiameter,p.hubDiameter>0&&p.hubDiameter<d.root*2,'輪轂／中央實心區外徑須小於齒根圓直徑。');
  if(p.hubDiameter/2-boreOuter<0.8)errors.push('輪轂／中央實心區在六角孔角落或圓孔周圍，需保留至少 0.8 mm 材料。');
 }
 if(p.hub!=='none'){check(p.hubFront,p.hubFront>=1&&p.hubFront<=40,'A 面輪轂凸出高度須介於 1–40 mm。');if(p.hub==='double')check(p.hubBack,p.hubBack>=1&&p.hubBack<=40,'B 面輪轂凸出高度須介於 1–40 mm。');}
 if(p.body==='spokes'){
  check(p.spokes,Number.isInteger(p.spokes)&&p.spokes>=3&&p.spokes<=12,'肋條數須為 3–12 的整數。');check(p.spokeWidth,p.spokeWidth>=1,'肋條寬度須至少為 1 mm。');check(p.rim,p.rim>=1,'齒根內側外圈厚度須至少為 1 mm。');
  if(d.root-p.rim<=p.hubDiameter/2+1)errors.push('減重區空間不足：請減小中央實心區或外圈厚度，或增加齒數。');
  if(p.spokeWidth>=2*(p.hubDiameter/2)*Math.sin(Math.PI/p.spokes))errors.push('肋條過寬，減重開口會消失。');
 }
 if(p.stop){
  check(p.stopThickness,p.stopThickness>=0.5&&p.stopThickness<d.total-0.5,'擋板厚度至少 0.5 mm，並須留下超過 0.5 mm 插入深度。');
  const localEnd=p.hub==='double'&&p.stopSide==='back'?d.back:p.hub!=='none'&&p.stopSide==='front'?d.front:p.thickness;
  if(p.stopThickness>localEnd)errors.push('擋板厚度不可跨過末端輪轂或齒輪本體，請減薄擋板或增加該端厚度。');
  check(p.ejectHole,p.ejectHole>=0,'背面小孔直徑不可為負值。');
  if(p.ejectHole>0&&p.ejectHole>Math.min(d.bore,p.shaftSize)-1)errors.push('背面小孔過大，需比軸尺寸及中心孔尺寸至少小 1 mm，保留周圍擋板。');
 }
 if(p.screws){
  if(p.hub==='none')errors.push('請先開啟輪轂，再加入止付螺絲孔。');
  check(p.screwCount,Number.isInteger(p.screwCount)&&p.screwCount>=1&&p.screwCount<=6,'止付孔數須為 1–6 的整數。');check(p.screwDiameter,p.screwDiameter>=1&&p.screwDiameter<=6,'攻牙底孔直徑須介於 1–6 mm。');
  const lo=d.total-p.screwPosition,edge=p.screwDiameter/2+0.6;
  const inFront=lo>=d.back+p.thickness+edge&&lo<=d.total-edge,inBack=lo>=edge&&lo<=d.back-edge;
  if(!(inFront||inBack))errors.push('止付孔中心須位於凸出輪轂內，且孔邊離輪轂端面至少 0.6 mm；位置由 A 面外端量起。');
  if(p.stop){const min=p.stopSide==='back'?p.stopThickness:0,max=p.stopSide==='front'?d.total-p.stopThickness:d.total;if(lo-p.screwDiameter/2<=min||lo+p.screwDiameter/2>=max)errors.push('止付孔落在擋板或孔底，請調整位置。');}
  if(p.hubDiameter/2-boreOuter<1.2)errors.push('止付螺絲攻牙區徑向材料不足 1.2 mm，請增加輪轂外徑。');
 }

 if(p.labelEnabled){
  if(!['manual','auto'].includes(p.labelPlacement))errors.push('文字位置模式不正確。');
  if(typeof p.labelText!=='string'||!p.labelText.trim()||[...p.labelText].length>20||/[\r\n\t]/.test(p.labelText))errors.push('請輸入 1–20 個字元的單行文字。');
  if(!['engrave','emboss'].includes(p.labelMode))errors.push('文字形式須為凹字或凸字。');
  if(!['frontBody','backBody','frontHub','backHub'].includes(p.labelTarget))errors.push('文字標記面設定不正確。');
  if(p.labelTarget==='frontHub'&&p.hub==='none'||p.labelTarget==='backHub'&&p.hub!=='double')errors.push('選取的輪轂端面不存在，請先啟用對應輪轂。');
  check(p.labelSize,p.labelSize>=.8&&p.labelSize<=30,'文字字高須介於 0.8–30 mm。');
  check(p.labelDepth,p.labelDepth>=.1&&p.labelDepth<=3,'文字刻深／凸高須介於 0.1–3 mm。');
  if(p.labelPlacement==='manual'&&(Math.abs(p.labelX)>d.tip||Math.abs(p.labelY)>d.tip))errors.push('文字位置超出齒輪範圍。');
  if(Math.abs(p.labelRotation)>360)errors.push('文字旋轉角度須介於 −360° 至 360°。');
  if(p.labelSize<2)warnings.push('文字偏小，請在切片預覽確認細筆畫與字內空隙是否保留。');
 }
 if(p.teeth<2*(1-p.shift)/(Math.sin(rad(p.pressure))**2))warnings.push('此齒數／變位可能有根切或干涉；第一版齒根採簡化過渡，請先試印並檢查嚙合。');
 if(p.module<0.7)warnings.push('模數偏小，請確認噴嘴、線寬與齒形細節能否列印。');
 if(p.stop&&p.stopThickness<1)warnings.push('擋板偏薄，請依實際軸向受力增加厚度。');
 return {errors:[...new Set(errors)],warnings,d};
}
export function gearOutline(p){
 const d=dimensions(p),a=rad(p.pressure),inv=t=>Math.tan(t)-t,half=r=>d.halfPitch+inv(a)-(r<=d.base?0:inv(Math.acos(d.base/r)));
 const pts=[],n=p.quality,rStart=Math.max(d.root,d.base),startHalf=half(rStart),tipHalf=half(d.tip),pitchAngle=2*Math.PI/p.teeth;
 const add=(r,t)=>{const v=polar(r,t),last=pts.at(-1);if(!last||Math.hypot(v[0]-last[0],v[1]-last[1])>1e-8)pts.push(v);};
 for(let tooth=0;tooth<p.teeth;tooth++){
  const c=tooth*pitchAngle;add(d.root,c-startHalf);if(rStart>d.root)add(rStart,c-startHalf);
  for(let j=1;j<=n;j++){const r=rStart+(d.tip-rStart)*j/n;add(r,c-half(r));}
  for(let j=1;j<=4;j++)add(d.tip,c-tipHalf+2*tipHalf*j/4);
  for(let j=n-1;j>=0;j--){const r=rStart+(d.tip-rStart)*j/n;add(r,c+half(r));}
  add(d.root,c+startHalf);
  const gap=pitchAngle-2*startHalf;for(let j=1;j<5;j++)add(d.root,c+startHalf+gap*j/5);
 }
 return pts;
}
export function boreContour(p){const d=dimensions(p);if(p.boreType==='hex')return Array.from({length:6},(_,i)=>polar(d.bore/Math.sqrt(3),rad(30+60*i)));return Array.from({length:96},(_,i)=>polar(d.bore/2,i*Math.PI/48));}
export function windowContours(p){
 if(p.body!=='spokes')return[];const d=dimensions(p),r1=p.hubDiameter/2,r2=d.root-p.rim,out=[];
 for(let i=0;i<p.spokes;i++){
  const a=i*2*Math.PI/p.spokes,b=(i+1)*2*Math.PI/p.spokes,off1=Math.asin(p.spokeWidth/(2*r1)),off2=Math.asin(p.spokeWidth/(2*r2)),q=[];
  q.push(polar(r1,a+off1),polar(r2,a+off2));for(let j=1;j<=20;j++)q.push(polar(r2,a+off2+(b-a-2*off2)*j/20));
  q.push(polar(r1,b-off1));for(let j=1;j<20;j++)q.push(polar(r1,b-off1-(b-a-2*off1)*j/20));out.push(q);
 }return out;
}
export function createGear(p,lib,font){
 const info=validate(p);if(info.errors.length)throw Error(info.errors.join('\n'));const d=info.d,{Manifold,CrossSection}=lib,owned=[];const keep=x=>(owned.push(x),x),cyl=(h,r)=>keep(Manifold.cylinder(h,r,r,96));
 try{
  const outline=gearOutline(p),windows=windowContours(p),section=keep(new CrossSection([outline,...windows],'EvenOdd'));
  let solid=keep(keep(section.extrude(p.thickness)).translate([0,0,d.back]));
  if(d.front>0)solid=keep(solid.add(keep(cyl(d.front,p.hubDiameter/2).translate([0,0,d.back+p.thickness]))));
  if(d.back>0)solid=keep(solid.add(cyl(d.back,p.hubDiameter/2)));
  const start=p.stop&&p.stopSide==='back'?p.stopThickness:0,end=p.stop&&p.stopSide==='front'?d.total-p.stopThickness:d.total;
  const cs=keep(new CrossSection([boreContour(p)])),shaft=keep(keep(cs.extrude(end-start+(!p.stop?0.2:0.1))).translate([0,0,start-(p.stop&&p.stopSide==='back'?0:0.1)]));
  solid=keep(solid.subtract(shaft));
  if(p.stop&&p.ejectHole>0)solid=keep(solid.subtract(keep(cyl(d.total+0.2,p.ejectHole/2).translate([0,0,-0.1]))));
  if(p.screws){const z=d.total-p.screwPosition;for(let i=0;i<p.screwCount;i++){const angle=p.screwAngle+360*i/p.screwCount;const hole=keep(keep(keep(cyl(p.hubDiameter/2+1,p.screwDiameter/2).rotate([0,90,0])).rotate([0,0,angle])).translate([0,0,z]));solid=keep(solid.subtract(hole));}}
  let label=null;
  if(p.labelEnabled){
   const {z,sign}=labelPlane(p,d),probe=.005;
   const inner=keep(solid.slice(z-sign*probe)),outer=keep(solid.slice(z+sign*probe)),exposed=keep(inner.subtract(outer));
   const safeFace=keep(keep(exposed.intersect(keep(CrossSection.circle(d.root,128)))).offset(-.2,'Round',2,16));
   const hasDepth=section=>{if(p.labelMode!=='engrave')return true;let column,present;try{const depth=p.labelDepth+.6,raw=section.extrude(depth);try{column=raw.translate([0,0,sign>0?z-depth:z]);}finally{raw.delete();}present=solid.intersect(column);return column.volume()-present.volume()<=Math.max(.00001,column.volume()*1e-6);}finally{present?.delete();column?.delete();}};
   let contours,labelCS,layout=null;
   if(p.labelPlacement==='auto'){const found=arrangeLabel(p,d,font,CrossSection,safeFace,hasDepth);contours=found.contours;labelCS=keep(found.section);layout=found.layout;}
   else{contours=textContours(p,font);labelCS=keep(keep(new CrossSection(contours,'NonZero')).simplify(.00001));const unsupported=keep(labelCS.subtract(safeFace));if(unsupported.area()>Math.max(.00001,labelCS.area()*1e-6))throw Error('文字未完整落在所選面的實心區域，或距孔洞／邊緣不足 0.2 mm。請按「自動安排文字」，或手動移動、縮小文字。');}
   if(labelCS.area()<.0001)throw Error('文字輪廓過小或無法生成。');
   if(p.labelMode==='engrave'){
    const depth=p.labelDepth+.6,materialColumn=keep(keep(labelCS.extrude(depth)).translate([0,0,sign>0?z-depth:z])),present=keep(solid.intersect(materialColumn));
    if(materialColumn.volume()-present.volume()>Math.max(.00001,materialColumn.volume()*1e-6))throw Error('刻字深度會碰到孔洞或留下不足 0.6 mm 的材料。請減少刻深、移動文字或更換標記面。');
    const cut=keep(keep(labelCS.extrude(p.labelDepth+probe)).translate([0,0,sign>0?z-p.labelDepth:z-probe]));solid=keep(solid.subtract(cut));
   }else{
    const raised=keep(keep(labelCS.extrude(p.labelDepth+probe)).translate([0,0,sign>0?z-probe:z-p.labelDepth]));solid=keep(solid.add(raised));
   }
   label={contours,layout,mode:p.labelMode,target:p.labelTarget,depth:p.labelDepth,z,sign};
  }
  const status=solid.status();if(status!=='NoError')throw Error('實體模型生成失敗：'+status);const pieces=solid.decompose();const components=pieces.length;pieces.forEach(x=>x.delete());if(components!==1)throw Error('模型出現分離零件，請調整輪轂、肋條或孔尺寸。');
  const mesh=solid.getMesh(),volume=solid.volume(),area=solid.surfaceArea();
  return {positions:new Float32Array(mesh.vertProperties),indices:new Uint32Array(mesh.triVerts),stride:mesh.numProp,volume,area,outline,windows,bore:boreContour(p),dimensions:d,warnings:info.warnings,components,label};
 }finally{for(let i=owned.length-1;i>=0;i--)owned[i].delete();}
}
export function binarySTL(result){
 if(result.exportable===false)throw Error('文字尚未完成，請先自動安排或明確關閉文字，再下載 STL。');
 const {positions:v,indices:t,stride:s}=result,faces=[];
 // STL stores coordinates without topology. Float32 rounding can collapse
 // tiny Boolean triangles; omit only triangles with exactly zero area.
 for(let i=0;i<t.length;i+=3){const a=t[i]*s,b=t[i+1]*s,c=t[i+2]*s,u=[v[b]-v[a],v[b+1]-v[a+1],v[b+2]-v[a+2]],w=[v[c]-v[a],v[c+1]-v[a+1],v[c+2]-v[a+2]],normal=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],length=Math.hypot(...normal);if(length>0)faces.push({ids:[a,b,c],normal:normal.map(x=>x/length)});}
 const n=faces.length,buf=new ArrayBuffer(84+50*n),dv=new DataView(buf);new Uint8Array(buf,0,80).set(new TextEncoder().encode('Wind Gear Studio | millimeters | involute spur gear'));dv.setUint32(80,n,true);
 for(let f=0;f<n;f++){const o=84+50*f,{ids,normal}=faces[f];for(let j=0;j<3;j++)dv.setFloat32(o+j*4,normal[j],true);for(let k=0;k<3;k++)for(let j=0;j<3;j++)dv.setFloat32(o+12+k*12+j*4,v[ids[k]+j],true);}
 return buf;
}
