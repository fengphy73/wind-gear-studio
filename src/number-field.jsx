import React,{createContext,useContext,useEffect,useId,useRef,useState} from 'react';
import {parseNumericDraft,displayNumber} from './numeric-input.mjs';
export const NumericInputContext=createContext({report:()=>{},revision:0});
export function NumberField({label,name,p,set,unit='mm',step=.1,min,max,hint,disabled=false}){
 const {report,revision}=useContext(NumericInputContext),id=useId(),messageId=id+'-message',focused=useRef(false);
 const [draft,setDraft]=useState(()=>displayNumber(p[name],disabled)),[issue,setIssue]=useState('');
 const clear=()=>{setIssue('');report(id,null);};
 useEffect(()=>{if(!focused.current||disabled){setDraft(displayNumber(p[name],disabled));setIssue('');report(id,null);}},[p[name],disabled]);
 useEffect(()=>{focused.current=false;setDraft(displayNumber(p[name],disabled));setIssue('');report(id,null);},[revision]);
 useEffect(()=>()=>report(id,null),[id,report]);
 const update=raw=>{setDraft(raw);const parsed=parseNumericDraft(raw,unit);if(parsed.kind==='valid'){clear();set(name,parsed.value);}else{setIssue(parsed.message);report(id,{label,message:parsed.message});}};
 const restore=()=>{setDraft(displayNumber(p[name],disabled));clear();};
 const keyDown=e=>{if(e.key==='Escape'){e.preventDefault();restore();e.currentTarget.blur();}else if(e.key==='ArrowUp'||e.key==='ArrowDown'){
  e.preventDefault();const parsed=parseNumericDraft(draft,unit),current=parsed.kind==='valid'?parsed.value:p[name];if(!Number.isFinite(current))return;let next=Number((current+(e.key==='ArrowUp'?step:-step)).toFixed(10));if(Number.isFinite(min))next=Math.max(min,next);if(Number.isFinite(max))next=Math.min(max,next);update(String(next));
 }};
 return <label className={'field'+(issue?' field-error':'')}><span>{label}</span><div className="input-wrap"><input aria-label={label} type="text" role="spinbutton" inputMode={step===1?'numeric':'decimal'} autoComplete="off" autoCorrect="off" spellCheck={false} disabled={disabled} aria-valuenow={Number.isFinite(p[name])?p[name]:undefined} aria-valuemin={min} aria-valuemax={max} aria-invalid={issue?true:undefined} aria-describedby={issue?messageId:undefined} value={draft} onFocus={()=>{focused.current=true;}} onChange={e=>update(e.target.value)} onKeyDown={keyDown} onBlur={()=>{focused.current=false;const parsed=parseNumericDraft(draft,unit);if(parsed.kind==='valid')setDraft(parsed.normalized);}}/><span>{unit}</span></div>{issue&&<small id={messageId} className="number-error">{issue} <button type="button" onMouseDown={e=>e.preventDefault()} onClick={restore}>復原此欄</button></small>}{hint&&<small>{hint}</small>}</label>;
}
