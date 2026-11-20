const escapeRegex=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
/** Never turn an unfinished edit or invalid string into a model parameter. */
export function parseNumericDraft(raw,unit='mm'){
 let text=String(raw??'').normalize('NFKC').trim().replace(/[−﹣]/g,'-');
 const original=text;
 const suffix=unit==='mm'?'(?:mm|毫米|公釐)':unit==='°'?'(?:°|度)':unit?escapeRegex(unit):'';
 if(suffix)text=text.replace(new RegExp('\\s*'+suffix+'$','i'),'').trim();
 if(text===''&&original!=='')return {kind:'invalid',message:'請輸入數字，不能只有單位。'};
 if(/^[-+]?(?:\d{1,3})(?:,\d{3})+(?:\.\d+)?$/.test(text))text=text.replaceAll(',','');
 else if(/^[-+]?\d+,\d+$/.test(text))text=text.replace(',','.');
 if(text===''||/^[+-]?\.?$/.test(text)||/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)[eE][+-]?$/.test(text))return {kind:'pending',message:'請完成數字輸入。'};
 if(!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(text))return {kind:'invalid',message:'請輸入數字，例如 6.3；也可貼上帶單位的數值。'};
 const value=Number(text);return Number.isFinite(value)?{kind:'valid',value,normalized:String(value)}:{kind:'invalid',message:'數字超出可處理範圍。'};
}
export function displayNumber(value,disabled=false){return Number.isFinite(value)?String(disabled?Number(value.toFixed(3)):value):'';}
