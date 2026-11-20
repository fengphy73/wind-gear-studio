var sM=Object.create;var i0=Object.defineProperty;var aM=Object.getOwnPropertyDescriptor;var rM=Object.getOwnPropertyNames;var oM=Object.getPrototypeOf,lM=Object.prototype.hasOwnProperty;var xs=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var cM=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of rM(t))!lM.call(e,s)&&s!==n&&i0(e,s,{get:()=>t[s],enumerable:!(i=aM(t,s))||i.enumerable});return e};var pc=(e,t,n)=>(n=e!=null?sM(oM(e)):{},cM(t||!e||!e.__esModule?i0(n,"default",{value:e,enumerable:!0}):n,e));var p0=xs(Ft=>{"use strict";var Xf=Symbol.for("react.transitional.element"),uM=Symbol.for("react.portal"),hM=Symbol.for("react.fragment"),fM=Symbol.for("react.strict_mode"),dM=Symbol.for("react.profiler"),pM=Symbol.for("react.consumer"),mM=Symbol.for("react.context"),gM=Symbol.for("react.forward_ref"),_M=Symbol.for("react.suspense"),yM=Symbol.for("react.memo"),l0=Symbol.for("react.lazy"),vM=Symbol.for("react.activity"),s0=Symbol.iterator;function xM(e){return e===null||typeof e!="object"?null:(e=s0&&e[s0]||e["@@iterator"],typeof e=="function"?e:null)}var c0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},u0=Object.assign,h0={};function tr(e,t,n){this.props=e,this.context=t,this.refs=h0,this.updater=n||c0}tr.prototype.isReactComponent={};tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function f0(){}f0.prototype=tr.prototype;function Wf(e,t,n){this.props=e,this.context=t,this.refs=h0,this.updater=n||c0}var qf=Wf.prototype=new f0;qf.constructor=Wf;u0(qf,tr.prototype);qf.isPureReactComponent=!0;var a0=Array.isArray;function kf(){}var xe={H:null,A:null,T:null,S:null},d0=Object.prototype.hasOwnProperty;function Yf(e,t,n){var i=n.ref;return{$$typeof:Xf,type:e,key:t,ref:i!==void 0?i:null,props:n}}function bM(e,t){return Yf(e.type,t,e.props)}function Zf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xf}function SM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var r0=/\/+/g;function Gf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?SM(""+e.key):t.toString(36)}function MM(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(kf,kf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function $a(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Xf:case uM:r=!0;break;case l0:return r=e._init,$a(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Gf(e,0):i,a0(s)?(n="",r!=null&&(n=r.replace(r0,"$&/")+"/"),$a(s,t,n,"",function(c){return c})):s!=null&&(Zf(s)&&(s=bM(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(r0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(a0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Gf(i,l),r+=$a(i,t,n,a,s);else if(l=xM(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Gf(i,l++),r+=$a(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return $a(MM(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function mc(e,t,n){if(e==null)return e;var i=[],s=0;return $a(e,i,"","",function(a){return t.call(n,a,s++)}),i}function EM(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var o0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},TM={map:mc,forEach:function(e,t,n){mc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mc(e,function(){t++}),t},toArray:function(e){return mc(e,function(t){return t})||[]},only:function(e){if(!Zf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ft.Activity=vM;Ft.Children=TM;Ft.Component=tr;Ft.Fragment=hM;Ft.Profiler=dM;Ft.PureComponent=Wf;Ft.StrictMode=fM;Ft.Suspense=_M;Ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=xe;Ft.__COMPILER_RUNTIME={__proto__:null,c:function(e){return xe.H.useMemoCache(e)}};Ft.cache=function(e){return function(){return e.apply(null,arguments)}};Ft.cacheSignal=function(){return null};Ft.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=u0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!d0.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Yf(e.type,s,i)};Ft.createContext=function(e){return e={$$typeof:mM,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:pM,_context:e},e};Ft.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)d0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Yf(e,a,s)};Ft.createRef=function(){return{current:null}};Ft.forwardRef=function(e){return{$$typeof:gM,render:e}};Ft.isValidElement=Zf;Ft.lazy=function(e){return{$$typeof:l0,_payload:{_status:-1,_result:e},_init:EM}};Ft.memo=function(e,t){return{$$typeof:yM,type:e,compare:t===void 0?null:t}};Ft.startTransition=function(e){var t=xe.T,n={};xe.T=n;try{var i=e(),s=xe.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(kf,o0)}catch(a){o0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),xe.T=t}};Ft.unstable_useCacheRefresh=function(){return xe.H.useCacheRefresh()};Ft.use=function(e){return xe.H.use(e)};Ft.useActionState=function(e,t,n){return xe.H.useActionState(e,t,n)};Ft.useCallback=function(e,t){return xe.H.useCallback(e,t)};Ft.useContext=function(e){return xe.H.useContext(e)};Ft.useDebugValue=function(){};Ft.useDeferredValue=function(e,t){return xe.H.useDeferredValue(e,t)};Ft.useEffect=function(e,t){return xe.H.useEffect(e,t)};Ft.useEffectEvent=function(e){return xe.H.useEffectEvent(e)};Ft.useId=function(){return xe.H.useId()};Ft.useImperativeHandle=function(e,t,n){return xe.H.useImperativeHandle(e,t,n)};Ft.useInsertionEffect=function(e,t){return xe.H.useInsertionEffect(e,t)};Ft.useLayoutEffect=function(e,t){return xe.H.useLayoutEffect(e,t)};Ft.useMemo=function(e,t){return xe.H.useMemo(e,t)};Ft.useOptimistic=function(e,t){return xe.H.useOptimistic(e,t)};Ft.useReducer=function(e,t,n){return xe.H.useReducer(e,t,n)};Ft.useRef=function(e){return xe.H.useRef(e)};Ft.useState=function(e){return xe.H.useState(e)};Ft.useSyncExternalStore=function(e,t,n){return xe.H.useSyncExternalStore(e,t,n)};Ft.useTransition=function(){return xe.H.useTransition()};Ft.version="19.2.6"});var er=xs((XR,m0)=>{"use strict";m0.exports=p0()});var T0=xs(we=>{"use strict";function $f(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<_c(s,t))e[i]=t,e[n]=s,n=i;else break t}}function wi(e){return e.length===0?null:e[0]}function vc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>_c(o,n))l<s&&0>_c(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>_c(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function _c(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}we.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(g0=performance,we.unstable_now=function(){return g0.now()}):(Jf=Date,_0=Jf.now(),we.unstable_now=function(){return Jf.now()-_0});var g0,Jf,_0,Gi=[],bs=[],wM=1,jn=null,on=3,td=!1,Co=!1,Ro=!1,ed=!1,x0=typeof setTimeout=="function"?setTimeout:null,b0=typeof clearTimeout=="function"?clearTimeout:null,y0=typeof setImmediate<"u"?setImmediate:null;function yc(e){for(var t=wi(bs);t!==null;){if(t.callback===null)vc(bs);else if(t.startTime<=e)vc(bs),t.sortIndex=t.expirationTime,$f(Gi,t);else break;t=wi(bs)}}function nd(e){if(Ro=!1,yc(e),!Co)if(wi(Gi)!==null)Co=!0,ir||(ir=!0,nr());else{var t=wi(bs);t!==null&&id(nd,t.startTime-e)}}var ir=!1,Do=-1,S0=5,M0=-1;function E0(){return ed?!0:!(we.unstable_now()-M0<S0)}function jf(){if(ed=!1,ir){var e=we.unstable_now();M0=e;var t=!0;try{t:{Co=!1,Ro&&(Ro=!1,b0(Do),Do=-1),td=!0;var n=on;try{e:{for(yc(e),jn=wi(Gi);jn!==null&&!(jn.expirationTime>e&&E0());){var i=jn.callback;if(typeof i=="function"){jn.callback=null,on=jn.priorityLevel;var s=i(jn.expirationTime<=e);if(e=we.unstable_now(),typeof s=="function"){jn.callback=s,yc(e),t=!0;break e}jn===wi(Gi)&&vc(Gi),yc(e)}else vc(Gi);jn=wi(Gi)}if(jn!==null)t=!0;else{var a=wi(bs);a!==null&&id(nd,a.startTime-e),t=!1}}break t}finally{jn=null,on=n,td=!1}t=void 0}}finally{t?nr():ir=!1}}}var nr;typeof y0=="function"?nr=function(){y0(jf)}:typeof MessageChannel<"u"?(Qf=new MessageChannel,v0=Qf.port2,Qf.port1.onmessage=jf,nr=function(){v0.postMessage(null)}):nr=function(){x0(jf,0)};var Qf,v0;function id(e,t){Do=x0(function(){e(we.unstable_now())},t)}we.unstable_IdlePriority=5;we.unstable_ImmediatePriority=1;we.unstable_LowPriority=4;we.unstable_NormalPriority=3;we.unstable_Profiling=null;we.unstable_UserBlockingPriority=2;we.unstable_cancelCallback=function(e){e.callback=null};we.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S0=0<e?Math.floor(1e3/e):5};we.unstable_getCurrentPriorityLevel=function(){return on};we.unstable_next=function(e){switch(on){case 1:case 2:case 3:var t=3;break;default:t=on}var n=on;on=t;try{return e()}finally{on=n}};we.unstable_requestPaint=function(){ed=!0};we.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=on;on=e;try{return t()}finally{on=n}};we.unstable_scheduleCallback=function(e,t,n){var i=we.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:wM++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,$f(bs,e),wi(Gi)===null&&e===wi(bs)&&(Ro?(b0(Do),Do=-1):Ro=!0,id(nd,n-i))):(e.sortIndex=s,$f(Gi,e),Co||td||(Co=!0,ir||(ir=!0,nr()))),e};we.unstable_shouldYield=E0;we.unstable_wrapCallback=function(e){var t=on;return function(){var n=on;on=t;try{return e.apply(this,arguments)}finally{on=n}}}});var w0=xs((KR,A0)=>{"use strict";A0.exports=T0()});var R0=xs(mn=>{"use strict";var CM=er();function C0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ss(){}var pn={d:{f:Ss,r:function(){throw Error(C0(522))},D:Ss,C:Ss,L:Ss,m:Ss,X:Ss,S:Ss,M:Ss},p:0,findDOMNode:null},RM=Symbol.for("react.portal");function DM(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:RM,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Uo=CM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function xc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pn;mn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(C0(299));return DM(e,t,null,n)};mn.flushSync=function(e){var t=Uo.T,n=pn.p;try{if(Uo.T=null,pn.p=2,e)return e()}finally{Uo.T=t,pn.p=n,pn.d.f()}};mn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,pn.d.C(e,t))};mn.prefetchDNS=function(e){typeof e=="string"&&pn.d.D(e)};mn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=xc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?pn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&pn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};mn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=xc(t.as,t.crossOrigin);pn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&pn.d.M(e)};mn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=xc(n,t.crossOrigin);pn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};mn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=xc(t.as,t.crossOrigin);pn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else pn.d.m(e)};mn.requestFormReset=function(e){pn.d.r(e)};mn.unstable_batchedUpdates=function(e,t){return e(t)};mn.useFormState=function(e,t,n){return Uo.H.useFormState(e,t,n)};mn.useFormStatus=function(){return Uo.H.useHostTransitionStatus()};mn.version="19.2.6"});var N0=xs((jR,U0)=>{"use strict";function D0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D0)}catch(e){console.error(e)}}D0(),U0.exports=R0()});var Xx=xs(Wu=>{"use strict";var We=w0(),sy=er(),UM=N0();function J(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ay(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ry(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oy(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function L0(e){if(_l(e)!==e)throw Error(J(188))}function NM(e){var t=e.alternate;if(!t){if(t=_l(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return L0(s),e;if(a===i)return L0(s),t;a=a.sibling}throw Error(J(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function ly(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ly(e),t!==null)return t;e=e.sibling}return null}var Me=Object.assign,LM=Symbol.for("react.element"),bc=Symbol.for("react.transitional.element"),Fo=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),cy=Symbol.for("react.strict_mode"),zd=Symbol.for("react.profiler"),uy=Symbol.for("react.consumer"),Ji=Symbol.for("react.context"),Np=Symbol.for("react.forward_ref"),Bd=Symbol.for("react.suspense"),Fd=Symbol.for("react.suspense_list"),Lp=Symbol.for("react.memo"),Ms=Symbol.for("react.lazy");Symbol.for("react.scope");var Hd=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var OM=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var O0=Symbol.iterator;function No(e){return e===null||typeof e!="object"?null:(e=O0&&e[O0]||e["@@iterator"],typeof e=="function"?e:null)}var IM=Symbol.for("react.client.reference");function Vd(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===IM?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cr:return"Fragment";case zd:return"Profiler";case cy:return"StrictMode";case Bd:return"Suspense";case Fd:return"SuspenseList";case Hd:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Fo:return"Portal";case Ji:return e.displayName||"Context";case uy:return(e._context.displayName||"Context")+".Consumer";case Np:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lp:return t=e.displayName||null,t!==null?t:Vd(e.type)||"Memo";case Ms:t=e._payload,e=e._init;try{return Vd(e(t))}catch{}}return null}var Ho=Array.isArray,Ot=sy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=UM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,va={pending:!1,data:null,method:null,action:null},Gd=[],ur=-1;function Ni(e){return{current:e}}function Qe(e){0>ur||(e.current=Gd[ur],Gd[ur]=null,ur--)}function ye(e,t){ur++,Gd[ur]=e.current,e.current=t}var Ui=Ni(null),il=Ni(null),Os=Ni(null),tu=Ni(null);function eu(e,t){switch(ye(Os,t),ye(il,e),ye(Ui,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?V_(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=V_(t),e=Dx(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Qe(Ui),ye(Ui,e)}function Cr(){Qe(Ui),Qe(il),Qe(Os)}function kd(e){e.memoizedState!==null&&ye(tu,e);var t=Ui.current,n=Dx(t,e.type);t!==n&&(ye(il,e),ye(Ui,n))}function nu(e){il.current===e&&(Qe(Ui),Qe(il)),tu.current===e&&(Qe(tu),pl._currentValue=va)}var sd,I0;function ma(e){if(sd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);sd=t&&t[1]||"",I0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+sd+e+I0}var ad=!1;function rd(e,t){if(!e||ad)return"";ad=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var f=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){f=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){f=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{ad=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ma(n):""}function PM(e,t){switch(e.tag){case 26:case 27:case 5:return ma(e.type);case 16:return ma("Lazy");case 13:return e.child!==t&&t!==null?ma("Suspense Fallback"):ma("Suspense");case 19:return ma("SuspenseList");case 0:case 15:return rd(e.type,!1);case 11:return rd(e.type.render,!1);case 1:return rd(e.type,!0);case 31:return ma("Activity");default:return""}}function P0(e){try{var t="",n=null;do t+=PM(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Xd=Object.prototype.hasOwnProperty,Op=We.unstable_scheduleCallback,od=We.unstable_cancelCallback,zM=We.unstable_shouldYield,BM=We.unstable_requestPaint,Fn=We.unstable_now,FM=We.unstable_getCurrentPriorityLevel,hy=We.unstable_ImmediatePriority,fy=We.unstable_UserBlockingPriority,iu=We.unstable_NormalPriority,HM=We.unstable_LowPriority,dy=We.unstable_IdlePriority,VM=We.log,GM=We.unstable_setDisableYieldValue,yl=null,Hn=null;function Rs(e){if(typeof VM=="function"&&GM(e),Hn&&typeof Hn.setStrictMode=="function")try{Hn.setStrictMode(yl,e)}catch{}}var Vn=Math.clz32?Math.clz32:WM,kM=Math.log,XM=Math.LN2;function WM(e){return e>>>=0,e===0?32:31-(kM(e)/XM|0)|0}var Sc=256,Mc=262144,Ec=4194304;function ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ru(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=ga(i):(r&=o,r!==0?s=ga(r):n||(n=o&~e,n!==0&&(s=ga(n))))):(o=i&~a,o!==0?s=ga(o):r!==0?s=ga(r):n||(n=i&~e,n!==0&&(s=ga(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function vl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function qM(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function py(){var e=Ec;return Ec<<=1,(Ec&62914560)===0&&(Ec=4194304),e}function ld(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function YM(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var u=31-Vn(n),d=1<<u;o[u]=0,l[u]=-1;var f=c[u];if(f!==null)for(c[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&my(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function my(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Vn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function gy(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Vn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function _y(e,t){var n=t&-t;return n=(n&42)!==0?1:Ip(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ip(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pp(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function yy(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:Vx(e.type))}function z0(e,t){var n=ae.p;try{return ae.p=e,t()}finally{ae.p=n}}var Ys=Math.random().toString(36).slice(2),en="__reactFiber$"+Ys,An="__reactProps$"+Ys,Fr="__reactContainer$"+Ys,Wd="__reactEvents$"+Ys,ZM="__reactListeners$"+Ys,KM="__reactHandles$"+Ys,B0="__reactResources$"+Ys,bl="__reactMarker$"+Ys;function zp(e){delete e[en],delete e[An],delete e[Wd],delete e[ZM],delete e[KM]}function hr(e){var t=e[en];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fr]||n[en]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=q_(e);e!==null;){if(n=e[en])return n;e=q_(e)}return t}e=n,n=e.parentNode}return null}function Hr(e){if(e=e[en]||e[Fr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(J(33))}function br(e){var t=e[B0];return t||(t=e[B0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function je(e){e[bl]=!0}var vy=new Set,xy={};function Ra(e,t){Rr(e,t),Rr(e+"Capture",t)}function Rr(e,t){for(xy[e]=t,e=0;e<t.length;e++)vy.add(t[e])}var JM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),F0={},H0={};function jM(e){return Xd.call(H0,e)?!0:Xd.call(F0,e)?!1:JM.test(e)?H0[e]=!0:(F0[e]=!0,!1)}function Fc(e,t,n){if(jM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Tc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ki(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function $n(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function by(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function QM(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qd(e){if(!e._valueTracker){var t=by(e)?"checked":"value";e._valueTracker=QM(e,t,""+e[t])}}function Sy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=by(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function su(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $M=/[\n"\\]/g;function ni(e){return e.replace($M,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Yd(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$n(t)):e.value!==""+$n(t)&&(e.value=""+$n(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Zd(e,r,$n(t)):n!=null?Zd(e,r,$n(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+$n(o):e.removeAttribute("name")}function My(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){qd(e);return}n=n!=null?""+$n(n):"",t=t!=null?""+$n(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),qd(e)}function Zd(e,t,n){t==="number"&&su(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Sr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+$n(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Ey(e,t,n){if(t!=null&&(t=""+$n(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+$n(n):""}function Ty(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(J(92));if(Ho(i)){if(1<i.length)throw Error(J(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=$n(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),qd(e)}function Dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var t1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function V0(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||t1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ay(e,t,n){if(t!=null&&typeof t!="object")throw Error(J(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&V0(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&V0(e,a,t[a])}function Bp(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var e1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),n1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hc(e){return n1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var Kd=null;function Fp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fr=null,Mr=null;function G0(e){var t=Hr(e);if(t&&(e=t.stateNode)){var n=e[An]||null;t:switch(e=t.stateNode,t.type){case"input":if(Yd(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ni(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[An]||null;if(!s)throw Error(J(90));Yd(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Sy(i)}break t;case"textarea":Ey(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Sr(e,!!n.multiple,t,!1)}}}var cd=!1;function wy(e,t,n){if(cd)return e(t,n);cd=!0;try{var i=e(t);return i}finally{if(cd=!1,(fr!==null||Mr!==null)&&(Vu(),fr&&(t=fr,e=Mr,Mr=fr=null,G0(t),e)))for(t=0;t<e.length;t++)G0(e[t])}}function sl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[An]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var ns=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jd=!1;if(ns)try{sr={},Object.defineProperty(sr,"passive",{get:function(){Jd=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{Jd=!1}var sr,Ds=null,Hp=null,Vc=null;function Cy(){if(Vc)return Vc;var e,t=Hp,n=t.length,i,s="value"in Ds?Ds.value:Ds.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Vc=s.slice(e,1<i?1-i:void 0)}function Gc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ac(){return!0}function k0(){return!1}function wn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ac:k0,this.isPropagationStopped=k0,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ac)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ac)},persist:function(){},isPersistent:Ac}),t}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Du=wn(Da),Sl=Me({},Da,{view:0,detail:0}),i1=wn(Sl),ud,hd,Lo,Uu=Me({},Sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lo&&(Lo&&e.type==="mousemove"?(ud=e.screenX-Lo.screenX,hd=e.screenY-Lo.screenY):hd=ud=0,Lo=e),ud)},movementY:function(e){return"movementY"in e?e.movementY:hd}}),X0=wn(Uu),s1=Me({},Uu,{dataTransfer:0}),a1=wn(s1),r1=Me({},Sl,{relatedTarget:0}),fd=wn(r1),o1=Me({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),l1=wn(o1),c1=Me({},Da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),u1=wn(c1),h1=Me({},Da,{data:0}),W0=wn(h1),f1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=p1[e])?!!t[e]:!1}function Vp(){return m1}var g1=Me({},Sl,{key:function(e){if(e.key){var t=f1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?d1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vp,charCode:function(e){return e.type==="keypress"?Gc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_1=wn(g1),y1=Me({},Uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),q0=wn(y1),v1=Me({},Sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vp}),x1=wn(v1),b1=Me({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),S1=wn(b1),M1=Me({},Uu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),E1=wn(M1),T1=Me({},Da,{newState:0,oldState:0}),A1=wn(T1),w1=[9,13,27,32],Gp=ns&&"CompositionEvent"in window,Xo=null;ns&&"documentMode"in document&&(Xo=document.documentMode);var C1=ns&&"TextEvent"in window&&!Xo,Ry=ns&&(!Gp||Xo&&8<Xo&&11>=Xo),Y0=" ",Z0=!1;function Dy(e,t){switch(e){case"keyup":return w1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function R1(e,t){switch(e){case"compositionend":return Uy(t);case"keypress":return t.which!==32?null:(Z0=!0,Y0);case"textInput":return e=t.data,e===Y0&&Z0?null:e;default:return null}}function D1(e,t){if(dr)return e==="compositionend"||!Gp&&Dy(e,t)?(e=Cy(),Vc=Hp=Ds=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ry&&t.locale!=="ko"?null:t.data;default:return null}}var U1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function K0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!U1[e.type]:t==="textarea"}function Ny(e,t,n,i){fr?Mr?Mr.push(i):Mr=[i]:fr=i,t=Su(t,"onChange"),0<t.length&&(n=new Du("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Wo=null,al=null;function N1(e){wx(e,0)}function Nu(e){var t=Vo(e);if(Sy(t))return e}function J0(e,t){if(e==="change")return t}var Ly=!1;ns&&(ns?(Cc="oninput"in document,Cc||(dd=document.createElement("div"),dd.setAttribute("oninput","return;"),Cc=typeof dd.oninput=="function"),wc=Cc):wc=!1,Ly=wc&&(!document.documentMode||9<document.documentMode));var wc,Cc,dd;function j0(){Wo&&(Wo.detachEvent("onpropertychange",Oy),al=Wo=null)}function Oy(e){if(e.propertyName==="value"&&Nu(al)){var t=[];Ny(t,al,e,Fp(e)),wy(N1,t)}}function L1(e,t,n){e==="focusin"?(j0(),Wo=t,al=n,Wo.attachEvent("onpropertychange",Oy)):e==="focusout"&&j0()}function O1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nu(al)}function I1(e,t){if(e==="click")return Nu(t)}function P1(e,t){if(e==="input"||e==="change")return Nu(t)}function z1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kn=typeof Object.is=="function"?Object.is:z1;function rl(e,t){if(kn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Xd.call(t,s)||!kn(e[s],t[s]))return!1}return!0}function Q0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $0(e,t){var n=Q0(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Q0(n)}}function Iy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Iy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Py(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=su(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=su(e.document)}return t}function kp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var B1=ns&&"documentMode"in document&&11>=document.documentMode,pr=null,jd=null,qo=null,Qd=!1;function t_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qd||pr==null||pr!==su(i)||(i=pr,"selectionStart"in i&&kp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qo&&rl(qo,i)||(qo=i,i=Su(jd,"onSelect"),0<i.length&&(t=new Du("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=pr)))}function pa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mr={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionrun:pa("Transition","TransitionRun"),transitionstart:pa("Transition","TransitionStart"),transitioncancel:pa("Transition","TransitionCancel"),transitionend:pa("Transition","TransitionEnd")},pd={},zy={};ns&&(zy=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Ua(e){if(pd[e])return pd[e];if(!mr[e])return e;var t=mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zy)return pd[e]=t[n];return e}var By=Ua("animationend"),Fy=Ua("animationiteration"),Hy=Ua("animationstart"),F1=Ua("transitionrun"),H1=Ua("transitionstart"),V1=Ua("transitioncancel"),Vy=Ua("transitionend"),Gy=new Map,$d="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$d.push("scrollEnd");function _i(e,t){Gy.set(e,t),Ra(t,[e])}var au=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Qn=[],gr=0,Xp=0;function Lu(){for(var e=gr,t=Xp=gr=0;t<e;){var n=Qn[t];Qn[t++]=null;var i=Qn[t];Qn[t++]=null;var s=Qn[t];Qn[t++]=null;var a=Qn[t];if(Qn[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&ky(n,s,a)}}function Ou(e,t,n,i){Qn[gr++]=e,Qn[gr++]=t,Qn[gr++]=n,Qn[gr++]=i,Xp|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Wp(e,t,n,i){return Ou(e,t,n,i),ru(e)}function Na(e,t){return Ou(e,null,null,t),ru(e)}function ky(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Vn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function ru(e){if(50<el)throw el=0,xp=null,Error(J(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var _r={};function G1(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(e,t,n,i){return new G1(e,t,n,i)}function qp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $i(e,t){var n=e.alternate;return n===null?(n=zn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Xy(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function kc(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")qp(e)&&(r=1);else if(typeof e=="string")r=WE(e,n,Ui.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Hd:return e=zn(31,n,t,s),e.elementType=Hd,e.lanes=a,e;case cr:return xa(n.children,s,a,t);case cy:r=8,s|=24;break;case zd:return e=zn(12,n,t,s|2),e.elementType=zd,e.lanes=a,e;case Bd:return e=zn(13,n,t,s),e.elementType=Bd,e.lanes=a,e;case Fd:return e=zn(19,n,t,s),e.elementType=Fd,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ji:r=10;break t;case uy:r=9;break t;case Np:r=11;break t;case Lp:r=14;break t;case Ms:r=16,i=null;break t}r=29,n=Error(J(130,e===null?"null":typeof e,"")),i=null}return t=zn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function xa(e,t,n,i){return e=zn(7,e,i,t),e.lanes=n,e}function md(e,t,n){return e=zn(6,e,null,t),e.lanes=n,e}function Wy(e){var t=zn(18,null,null,0);return t.stateNode=e,t}function gd(e,t,n){return t=zn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var e_=new WeakMap;function ii(e,t){if(typeof e=="object"&&e!==null){var n=e_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:P0(t)},e_.set(e,t),t)}return{value:e,source:t,stack:P0(t)}}var yr=[],vr=0,ou=null,ol=0,ti=[],ei=0,ks=null,Ci=1,Ri="";function Zi(e,t){yr[vr++]=ol,yr[vr++]=ou,ou=e,ol=t}function qy(e,t,n){ti[ei++]=Ci,ti[ei++]=Ri,ti[ei++]=ks,ks=e;var i=Ci;e=Ri;var s=32-Vn(i)-1;i&=~(1<<s),n+=1;var a=32-Vn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Ci=1<<32-Vn(t)+s|n<<s|i,Ri=a+e}else Ci=1<<a|n<<s|i,Ri=e}function Yp(e){e.return!==null&&(Zi(e,1),qy(e,1,0))}function Zp(e){for(;e===ou;)ou=yr[--vr],yr[vr]=null,ol=yr[--vr],yr[vr]=null;for(;e===ks;)ks=ti[--ei],ti[ei]=null,Ri=ti[--ei],ti[ei]=null,Ci=ti[--ei],ti[ei]=null}function Yy(e,t){ti[ei++]=Ci,ti[ei++]=Ri,ti[ei++]=ks,Ci=t.id,Ri=t.overflow,ks=e}var nn=null,Se=null,$t=!1,Is=null,si=!1,tp=Error(J(519));function Xs(e){var t=Error(J(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ll(ii(t,e)),tp}function n_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[en]=e,t[An]=i,n){case"dialog":Yt("cancel",t),Yt("close",t);break;case"iframe":case"object":case"embed":Yt("load",t);break;case"video":case"audio":for(n=0;n<fl.length;n++)Yt(fl[n],t);break;case"source":Yt("error",t);break;case"img":case"image":case"link":Yt("error",t),Yt("load",t);break;case"details":Yt("toggle",t);break;case"input":Yt("invalid",t),My(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Yt("invalid",t);break;case"textarea":Yt("invalid",t),Ty(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Rx(t.textContent,n)?(i.popover!=null&&(Yt("beforetoggle",t),Yt("toggle",t)),i.onScroll!=null&&Yt("scroll",t),i.onScrollEnd!=null&&Yt("scrollend",t),i.onClick!=null&&(t.onclick=ji),t=!0):t=!1,t||Xs(e,!0)}function i_(e){for(nn=e.return;nn;)switch(nn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:nn=nn.return}}function ar(e){if(e!==nn)return!1;if(!$t)return i_(e),$t=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Tp(e.type,e.memoizedProps)),n=!n),n&&Se&&Xs(e),i_(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Se=W_(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Se=W_(e)}else t===27?(t=Se,Zs(e.type)?(e=Rp,Rp=null,Se=e):Se=t):Se=nn?ri(e.stateNode.nextSibling):null;return!0}function Ea(){Se=nn=null,$t=!1}function _d(){var e=Is;return e!==null&&(En===null?En=e:En.push.apply(En,e),Is=null),e}function ll(e){Is===null?Is=[e]:Is.push(e)}var ep=Ni(null),La=null,Qi=null;function Ts(e,t,n){ye(ep,t._currentValue),t._currentValue=n}function ts(e){e._currentValue=ep.current,Qe(ep)}function np(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ip(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),np(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(J(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),np(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Vr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(J(387));if(r=r.memoizedProps,r!==null){var o=s.type;kn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===tu.current){if(r=s.alternate,r===null)throw Error(J(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(pl):e=[pl])}s=s.return}e!==null&&ip(t,e,n,i),t.flags|=262144}function lu(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ta(e){La=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sn(e){return Zy(La,e)}function Rc(e,t){return La===null&&Ta(e),Zy(e,t)}function Zy(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qi===null){if(e===null)throw Error(J(308));Qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qi=Qi.next=t;return n}var k1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},X1=We.unstable_scheduleCallback,W1=We.unstable_NormalPriority,Ve={$$typeof:Ji,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kp(){return{controller:new k1,data:new Map,refCount:0}}function Ml(e){e.refCount--,e.refCount===0&&X1(W1,function(){e.controller.abort()})}var Yo=null,sp=0,Ur=0,Er=null;function q1(e,t){if(Yo===null){var n=Yo=[];sp=0,Ur=xm(),Er={status:"pending",value:void 0,then:function(i){n.push(i)}}}return sp++,t.then(s_,s_),t}function s_(){if(--sp===0&&Yo!==null){Er!==null&&(Er.status="fulfilled");var e=Yo;Yo=null,Ur=0,Er=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Y1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var a_=Ot.S;Ot.S=function(e,t){lx=Fn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&q1(e,t),a_!==null&&a_(e,t)};var ba=Ni(null);function Jp(){var e=ba.current;return e!==null?e:ge.pooledCache}function Xc(e,t){t===null?ye(ba,ba.current):ye(ba,t.pool)}function Ky(){var e=Jp();return e===null?null:{parent:Ve._currentValue,pool:e}}var Gr=Error(J(460)),jp=Error(J(474)),Iu=Error(J(542)),cu={then:function(){}};function r_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jy(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ji,ji),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,l_(e),e;default:if(typeof t.status=="string")t.then(ji,ji);else{if(e=ge,e!==null&&100<e.shellSuspendCounter)throw Error(J(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,l_(e),e}throw Sa=t,Gr}}function _a(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Sa=n,Gr):n}}var Sa=null;function o_(){if(Sa===null)throw Error(J(459));var e=Sa;return Sa=null,e}function l_(e){if(e===Gr||e===Iu)throw Error(J(483))}var Tr=null,cl=0;function Dc(e){var t=cl;return cl+=1,Tr===null&&(Tr=[]),Jy(Tr,e,t)}function Oo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Uc(e,t){throw t.$$typeof===LM?Error(J(525)):(e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function jy(e){function t(h,g){if(e){var y=h.deletions;y===null?(h.deletions=[g],h.flags|=16):y.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function i(h){for(var g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function s(h,g){return h=$i(h,g),h.index=0,h.sibling=null,h}function a(h,g,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<g?(h.flags|=67108866,g):y):(h.flags|=67108866,g)):(h.flags|=1048576,g)}function r(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function o(h,g,y,v){return g===null||g.tag!==6?(g=md(y,h.mode,v),g.return=h,g):(g=s(g,y),g.return=h,g)}function l(h,g,y,v){var w=y.type;return w===cr?u(h,g,y.props.children,v,y.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ms&&_a(w)===g.type)?(g=s(g,y.props),Oo(g,y),g.return=h,g):(g=kc(y.type,y.key,y.props,null,h.mode,v),Oo(g,y),g.return=h,g)}function c(h,g,y,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=gd(y,h.mode,v),g.return=h,g):(g=s(g,y.children||[]),g.return=h,g)}function u(h,g,y,v,w){return g===null||g.tag!==7?(g=xa(y,h.mode,v,w),g.return=h,g):(g=s(g,y),g.return=h,g)}function d(h,g,y){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=md(""+g,h.mode,y),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case bc:return y=kc(g.type,g.key,g.props,null,h.mode,y),Oo(y,g),y.return=h,y;case Fo:return g=gd(g,h.mode,y),g.return=h,g;case Ms:return g=_a(g),d(h,g,y)}if(Ho(g)||No(g))return g=xa(g,h.mode,y,null),g.return=h,g;if(typeof g.then=="function")return d(h,Dc(g),y);if(g.$$typeof===Ji)return d(h,Rc(h,g),y);Uc(h,g)}return null}function f(h,g,y,v){var w=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return w!==null?null:o(h,g,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case bc:return y.key===w?l(h,g,y,v):null;case Fo:return y.key===w?c(h,g,y,v):null;case Ms:return y=_a(y),f(h,g,y,v)}if(Ho(y)||No(y))return w!==null?null:u(h,g,y,v,null);if(typeof y.then=="function")return f(h,g,Dc(y),v);if(y.$$typeof===Ji)return f(h,g,Rc(h,y),v);Uc(h,y)}return null}function p(h,g,y,v,w){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return h=h.get(y)||null,o(g,h,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case bc:return h=h.get(v.key===null?y:v.key)||null,l(g,h,v,w);case Fo:return h=h.get(v.key===null?y:v.key)||null,c(g,h,v,w);case Ms:return v=_a(v),p(h,g,y,v,w)}if(Ho(v)||No(v))return h=h.get(y)||null,u(g,h,v,w,null);if(typeof v.then=="function")return p(h,g,y,Dc(v),w);if(v.$$typeof===Ji)return p(h,g,y,Rc(g,v),w);Uc(g,v)}return null}function _(h,g,y,v){for(var w=null,D=null,A=g,U=g=0,E=null;A!==null&&U<y.length;U++){A.index>U?(E=A,A=null):E=A.sibling;var M=f(h,A,y[U],v);if(M===null){A===null&&(A=E);break}e&&A&&M.alternate===null&&t(h,A),g=a(M,g,U),D===null?w=M:D.sibling=M,D=M,A=E}if(U===y.length)return n(h,A),$t&&Zi(h,U),w;if(A===null){for(;U<y.length;U++)A=d(h,y[U],v),A!==null&&(g=a(A,g,U),D===null?w=A:D.sibling=A,D=A);return $t&&Zi(h,U),w}for(A=i(A);U<y.length;U++)E=p(A,h,U,y[U],v),E!==null&&(e&&E.alternate!==null&&A.delete(E.key===null?U:E.key),g=a(E,g,U),D===null?w=E:D.sibling=E,D=E);return e&&A.forEach(function(N){return t(h,N)}),$t&&Zi(h,U),w}function x(h,g,y,v){if(y==null)throw Error(J(151));for(var w=null,D=null,A=g,U=g=0,E=null,M=y.next();A!==null&&!M.done;U++,M=y.next()){A.index>U?(E=A,A=null):E=A.sibling;var N=f(h,A,M.value,v);if(N===null){A===null&&(A=E);break}e&&A&&N.alternate===null&&t(h,A),g=a(N,g,U),D===null?w=N:D.sibling=N,D=N,A=E}if(M.done)return n(h,A),$t&&Zi(h,U),w;if(A===null){for(;!M.done;U++,M=y.next())M=d(h,M.value,v),M!==null&&(g=a(M,g,U),D===null?w=M:D.sibling=M,D=M);return $t&&Zi(h,U),w}for(A=i(A);!M.done;U++,M=y.next())M=p(A,h,U,M.value,v),M!==null&&(e&&M.alternate!==null&&A.delete(M.key===null?U:M.key),g=a(M,g,U),D===null?w=M:D.sibling=M,D=M);return e&&A.forEach(function(F){return t(h,F)}),$t&&Zi(h,U),w}function m(h,g,y,v){if(typeof y=="object"&&y!==null&&y.type===cr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case bc:t:{for(var w=y.key;g!==null;){if(g.key===w){if(w=y.type,w===cr){if(g.tag===7){n(h,g.sibling),v=s(g,y.props.children),v.return=h,h=v;break t}}else if(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ms&&_a(w)===g.type){n(h,g.sibling),v=s(g,y.props),Oo(v,y),v.return=h,h=v;break t}n(h,g);break}else t(h,g);g=g.sibling}y.type===cr?(v=xa(y.props.children,h.mode,v,y.key),v.return=h,h=v):(v=kc(y.type,y.key,y.props,null,h.mode,v),Oo(v,y),v.return=h,h=v)}return r(h);case Fo:t:{for(w=y.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(h,g.sibling),v=s(g,y.children||[]),v.return=h,h=v;break t}else{n(h,g);break}else t(h,g);g=g.sibling}v=gd(y,h.mode,v),v.return=h,h=v}return r(h);case Ms:return y=_a(y),m(h,g,y,v)}if(Ho(y))return _(h,g,y,v);if(No(y)){if(w=No(y),typeof w!="function")throw Error(J(150));return y=w.call(y),x(h,g,y,v)}if(typeof y.then=="function")return m(h,g,Dc(y),v);if(y.$$typeof===Ji)return m(h,g,Rc(h,y),v);Uc(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,g!==null&&g.tag===6?(n(h,g.sibling),v=s(g,y),v.return=h,h=v):(n(h,g),v=md(y,h.mode,v),v.return=h,h=v),r(h)):n(h,g)}return function(h,g,y,v){try{cl=0;var w=m(h,g,y,v);return Tr=null,w}catch(A){if(A===Gr||A===Iu)throw A;var D=zn(29,A,null,h.mode);return D.lanes=v,D.return=h,D}finally{}}}var Aa=jy(!0),Qy=jy(!1),Es=!1;function Qp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ap(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ps(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function zs(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(se&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=ru(e),ky(e,null,n),t}return Ou(e,i,t,n),ru(e)}function Zo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,gy(e,n)}}function yd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var rp=!1;function Ko(){if(rp){var e=Er;if(e!==null)throw e}}function Jo(e,t,n,i){rp=!1;var s=e.updateQueue;Es=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,u=c=l=null,o=a;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(jt&f)===f:(i&f)===f){f!==0&&f===Ur&&(rp=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,x=o;f=t;var m=n;switch(x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(m,d,f);break t}d=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,f=typeof _=="function"?_.call(m,d,f):_,f==null)break t;d=Me({},d,f);break t;case 2:Es=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,r|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);u===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,a===null&&(s.shared.lanes=0),qs|=r,e.lanes=r,e.memoizedState=d}}function $y(e,t){if(typeof e!="function")throw Error(J(191,e));e.call(t)}function tv(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$y(n[e],t)}var Nr=Ni(null),uu=Ni(0);function c_(e,t){e=rs,ye(uu,e),ye(Nr,t),rs=e|t.baseLanes}function op(){ye(uu,rs),ye(Nr,Nr.current)}function $p(){rs=uu.current,Qe(Nr),Qe(uu)}var Xn=Ni(null),ai=null;function As(e){var t=e.alternate;ye(ze,ze.current&1),ye(Xn,e),ai===null&&(t===null||Nr.current!==null||t.memoizedState!==null)&&(ai=e)}function lp(e){ye(ze,ze.current),ye(Xn,e),ai===null&&(ai=e)}function ev(e){e.tag===22?(ye(ze,ze.current),ye(Xn,e),ai===null&&(ai=e)):ws(e)}function ws(){ye(ze,ze.current),ye(Xn,Xn.current)}function Pn(e){Qe(Xn),ai===e&&(ai=null),Qe(ze)}var ze=Ni(0);function hu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||wp(n)||Cp(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var is=0,Ht=null,de=null,Fe=null,fu=!1,Ar=!1,wa=!1,du=0,ul=0,wr=null,Z1=0;function Le(){throw Error(J(321))}function tm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kn(e[n],t[n]))return!1;return!0}function em(e,t,n,i,s,a){return is=a,Ht=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ot.H=e===null||e.memoizedState===null?Nv:fm,wa=!1,a=n(i,s),wa=!1,Ar&&(a=iv(t,n,i,s)),nv(e),a}function nv(e){Ot.H=hl;var t=de!==null&&de.next!==null;if(is=0,Fe=de=Ht=null,fu=!1,ul=0,wr=null,t)throw Error(J(300));e===null||Ge||(e=e.dependencies,e!==null&&lu(e)&&(Ge=!0))}function iv(e,t,n,i){Ht=e;var s=0;do{if(Ar&&(wr=null),ul=0,Ar=!1,25<=s)throw Error(J(301));if(s+=1,Fe=de=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ot.H=Lv,a=t(n,i)}while(Ar);return a}function K1(){var e=Ot.H,t=e.useState()[0];return t=typeof t.then=="function"?El(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(Ht.flags|=1024),t}function nm(){var e=du!==0;return du=0,e}function im(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function sm(e){if(fu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fu=!1}is=0,Fe=de=Ht=null,Ar=!1,ul=du=0,wr=null}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ht.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Be(){if(de===null){var e=Ht.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=Fe===null?Ht.memoizedState:Fe.next;if(t!==null)Fe=t,de=e;else{if(e===null)throw Ht.alternate===null?Error(J(467)):Error(J(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Fe===null?Ht.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function El(e){var t=ul;return ul+=1,wr===null&&(wr=[]),e=Jy(wr,e,t),t=Ht,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,Ot.H=t===null||t.memoizedState===null?Nv:fm),e}function zu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return El(e);if(e.$$typeof===Ji)return sn(e)}throw Error(J(438,String(e)))}function am(e){var t=null,n=Ht.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Ht.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Pu(),Ht.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=OM;return t.index++,n}function ss(e,t){return typeof t=="function"?t(e):t}function Wc(e){var t=Be();return rm(t,de,e)}function rm(e,t,n){var i=e.queue;if(i===null)throw Error(J(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,u=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(jt&d)===d:(is&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Ur&&(u=!0);else if((is&f)===f){c=c.next,f===Ur&&(u=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Ht.lanes|=f,qs|=f;d=c.action,wa&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else f={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,Ht.lanes|=d,qs|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!kn(a,e.memoizedState)&&(Ge=!0,u&&(n=Er,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function vd(e){var t=Be(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);kn(a,t.memoizedState)||(Ge=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function sv(e,t,n){var i=Ht,s=Be(),a=$t;if(a){if(n===void 0)throw Error(J(407));n=n()}else n=t();var r=!kn((de||s).memoizedState,n);if(r&&(s.memoizedState=n,Ge=!0),s=s.queue,om(ov.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||Fe!==null&&Fe.memoizedState.tag&1){if(i.flags|=2048,Lr(9,{destroy:void 0},rv.bind(null,i,s,n,t),null),ge===null)throw Error(J(349));a||(is&127)!==0||av(i,t,n)}return n}function av(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ht.updateQueue,t===null?(t=Pu(),Ht.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rv(e,t,n,i){t.value=n,t.getSnapshot=i,lv(t)&&cv(e)}function ov(e,t,n){return n(function(){lv(t)&&cv(e)})}function lv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kn(e,n)}catch{return!0}}function cv(e){var t=Na(e,2);t!==null&&Tn(t,e,2)}function cp(e){var t=gn();if(typeof e=="function"){var n=e;if(e=n(),wa){Rs(!0);try{n()}finally{Rs(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:e},t}function uv(e,t,n,i){return e.baseState=n,rm(e,de,typeof i=="function"?i:ss)}function J1(e,t,n,i,s){if(Fu(e))throw Error(J(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Ot.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,hv(t,a)):(a.next=n.next,t.pending=n.next=a)}}function hv(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Ot.T,r={};Ot.T=r;try{var o=n(s,i),l=Ot.S;l!==null&&l(r,o),u_(e,t,o)}catch(c){up(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Ot.T=a}}else try{a=n(s,i),u_(e,t,a)}catch(c){up(e,t,c)}}function u_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){h_(e,t,i)},function(i){return up(e,t,i)}):h_(e,t,n)}function h_(e,t,n){t.status="fulfilled",t.value=n,fv(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,hv(e,n)))}function up(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,fv(t),t=t.next;while(t!==i)}e.action=null}function fv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dv(e,t){return t}function f_(e,t){if($t){var n=ge.formState;if(n!==null){t:{var i=Ht;if($t){if(Se){e:{for(var s=Se,a=si;s.nodeType!==8;){if(!a){s=null;break e}if(s=ri(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Se=ri(s.nextSibling),i=s.data==="F!";break t}}Xs(i)}i=!1}i&&(t=n[0])}}return n=gn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dv,lastRenderedState:t},n.queue=i,n=Rv.bind(null,Ht,i),i.dispatch=n,i=cp(!1),a=hm.bind(null,Ht,!1,i.queue),i=gn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=J1.bind(null,Ht,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function d_(e){var t=Be();return pv(t,de,e)}function pv(e,t,n){if(t=rm(e,t,dv)[0],e=Wc(ss)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=El(t)}catch(r){throw r===Gr?Iu:r}else i=t;t=Be();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Ht.flags|=2048,Lr(9,{destroy:void 0},j1.bind(null,s,n),null)),[i,a,e]}function j1(e,t){e.action=t}function p_(e){var t=Be(),n=de;if(n!==null)return pv(t,n,e);Be(),t=t.memoizedState,n=Be();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Lr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Ht.updateQueue,t===null&&(t=Pu(),Ht.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function mv(){return Be().memoizedState}function qc(e,t,n,i){var s=gn();Ht.flags|=e,s.memoizedState=Lr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Bu(e,t,n,i){var s=Be();i=i===void 0?null:i;var a=s.memoizedState.inst;de!==null&&i!==null&&tm(i,de.memoizedState.deps)?s.memoizedState=Lr(t,a,n,i):(Ht.flags|=e,s.memoizedState=Lr(1|t,a,n,i))}function m_(e,t){qc(8390656,8,e,t)}function om(e,t){Bu(2048,8,e,t)}function Q1(e){Ht.flags|=4;var t=Ht.updateQueue;if(t===null)t=Pu(),Ht.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gv(e){var t=Be().memoizedState;return Q1({ref:t,nextImpl:e}),function(){if((se&2)!==0)throw Error(J(440));return t.impl.apply(void 0,arguments)}}function _v(e,t){return Bu(4,2,e,t)}function yv(e,t){return Bu(4,4,e,t)}function vv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xv(e,t,n){n=n!=null?n.concat([e]):null,Bu(4,4,vv.bind(null,t,e),n)}function lm(){}function bv(e,t){var n=Be();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&tm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Sv(e,t){var n=Be();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&tm(t,i[1]))return i[0];if(i=e(),wa){Rs(!0);try{e()}finally{Rs(!1)}}return n.memoizedState=[i,t],i}function cm(e,t,n){return n===void 0||(is&1073741824)!==0&&(jt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=ux(),Ht.lanes|=e,qs|=e,n)}function Mv(e,t,n,i){return kn(n,t)?n:Nr.current!==null?(e=cm(e,n,i),kn(e,t)||(Ge=!0),e):(is&42)===0||(is&1073741824)!==0&&(jt&261930)===0?(Ge=!0,e.memoizedState=n):(e=ux(),Ht.lanes|=e,qs|=e,t)}function Ev(e,t,n,i,s){var a=ae.p;ae.p=a!==0&&8>a?a:8;var r=Ot.T,o={};Ot.T=o,hm(e,!1,t,n);try{var l=s(),c=Ot.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=Y1(l,i);jo(e,t,u,Gn(e))}else jo(e,t,i,Gn(e))}catch(d){jo(e,t,{then:function(){},status:"rejected",reason:d},Gn())}finally{ae.p=a,r!==null&&o.types!==null&&(r.types=o.types),Ot.T=r}}function $1(){}function hp(e,t,n,i){if(e.tag!==5)throw Error(J(476));var s=Tv(e).queue;Ev(e,s,t,va,n===null?$1:function(){return Av(e),n(i)})}function Tv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:va,baseState:va,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:va},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Av(e){var t=Tv(e);t.next===null&&(t=e.alternate.memoizedState),jo(e,t.next.queue,{},Gn())}function um(){return sn(pl)}function wv(){return Be().memoizedState}function Cv(){return Be().memoizedState}function tE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Gn();e=Ps(n);var i=zs(t,e,n);i!==null&&(Tn(i,t,n),Zo(i,t,n)),t={cache:Kp()},e.payload=t;return}t=t.return}}function eE(e,t,n){var i=Gn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fu(e)?Dv(t,n):(n=Wp(e,t,n,i),n!==null&&(Tn(n,e,i),Uv(n,t,i)))}function Rv(e,t,n){var i=Gn();jo(e,t,n,i)}function jo(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fu(e))Dv(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,kn(o,r))return Ou(e,t,s,0),ge===null&&Lu(),!1}catch{}finally{}if(n=Wp(e,t,s,i),n!==null)return Tn(n,e,i),Uv(n,t,i),!0}return!1}function hm(e,t,n,i){if(i={lane:2,revertLane:xm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Fu(e)){if(t)throw Error(J(479))}else t=Wp(e,n,i,2),t!==null&&Tn(t,e,2)}function Fu(e){var t=e.alternate;return e===Ht||t!==null&&t===Ht}function Dv(e,t){Ar=fu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uv(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,gy(e,n)}}var hl={readContext:sn,use:zu,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};hl.useEffectEvent=Le;var Nv={readContext:sn,use:zu,useCallback:function(e,t){return gn().memoizedState=[e,t===void 0?null:t],e},useContext:sn,useEffect:m_,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,qc(4194308,4,vv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qc(4194308,4,e,t)},useInsertionEffect:function(e,t){qc(4,2,e,t)},useMemo:function(e,t){var n=gn();t=t===void 0?null:t;var i=e();if(wa){Rs(!0);try{e()}finally{Rs(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=gn();if(n!==void 0){var s=n(t);if(wa){Rs(!0);try{n(t)}finally{Rs(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=eE.bind(null,Ht,e),[i.memoizedState,e]},useRef:function(e){var t=gn();return e={current:e},t.memoizedState=e},useState:function(e){e=cp(e);var t=e.queue,n=Rv.bind(null,Ht,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:lm,useDeferredValue:function(e,t){var n=gn();return cm(n,e,t)},useTransition:function(){var e=cp(!1);return e=Ev.bind(null,Ht,e.queue,!0,!1),gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Ht,s=gn();if($t){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),ge===null)throw Error(J(349));(jt&127)!==0||av(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,m_(ov.bind(null,i,a,e),[e]),i.flags|=2048,Lr(9,{destroy:void 0},rv.bind(null,i,a,n,t),null),n},useId:function(){var e=gn(),t=ge.identifierPrefix;if($t){var n=Ri,i=Ci;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=du++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Z1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:um,useFormState:f_,useActionState:f_,useOptimistic:function(e){var t=gn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=hm.bind(null,Ht,!0,n),n.dispatch=t,[e,t]},useMemoCache:am,useCacheRefresh:function(){return gn().memoizedState=tE.bind(null,Ht)},useEffectEvent:function(e){var t=gn(),n={impl:e};return t.memoizedState=n,function(){if((se&2)!==0)throw Error(J(440));return n.impl.apply(void 0,arguments)}}},fm={readContext:sn,use:zu,useCallback:bv,useContext:sn,useEffect:om,useImperativeHandle:xv,useInsertionEffect:_v,useLayoutEffect:yv,useMemo:Sv,useReducer:Wc,useRef:mv,useState:function(){return Wc(ss)},useDebugValue:lm,useDeferredValue:function(e,t){var n=Be();return Mv(n,de.memoizedState,e,t)},useTransition:function(){var e=Wc(ss)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:El(e),t]},useSyncExternalStore:sv,useId:wv,useHostTransitionStatus:um,useFormState:d_,useActionState:d_,useOptimistic:function(e,t){var n=Be();return uv(n,de,e,t)},useMemoCache:am,useCacheRefresh:Cv};fm.useEffectEvent=gv;var Lv={readContext:sn,use:zu,useCallback:bv,useContext:sn,useEffect:om,useImperativeHandle:xv,useInsertionEffect:_v,useLayoutEffect:yv,useMemo:Sv,useReducer:vd,useRef:mv,useState:function(){return vd(ss)},useDebugValue:lm,useDeferredValue:function(e,t){var n=Be();return de===null?cm(n,e,t):Mv(n,de.memoizedState,e,t)},useTransition:function(){var e=vd(ss)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:El(e),t]},useSyncExternalStore:sv,useId:wv,useHostTransitionStatus:um,useFormState:p_,useActionState:p_,useOptimistic:function(e,t){var n=Be();return de!==null?uv(n,de,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:am,useCacheRefresh:Cv};Lv.useEffectEvent=gv;function xd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Gn(),s=Ps(i);s.payload=t,n!=null&&(s.callback=n),t=zs(e,s,i),t!==null&&(Tn(t,e,i),Zo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Gn(),s=Ps(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=zs(e,s,i),t!==null&&(Tn(t,e,i),Zo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Gn(),i=Ps(n);i.tag=2,t!=null&&(i.callback=t),t=zs(e,i,n),t!==null&&(Tn(t,e,n),Zo(t,e,n))}};function g_(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!rl(n,i)||!rl(s,a):!0}function __(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&fp.enqueueReplaceState(t,t.state,null)}function Ca(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Me({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Ov(e){au(e)}function Iv(e){console.error(e)}function Pv(e){au(e)}function pu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function y_(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function dp(e,t,n){return n=Ps(n),n.tag=3,n.payload={element:null},n.callback=function(){pu(e,t)},n}function zv(e){return e=Ps(e),e.tag=3,e}function Bv(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){y_(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){y_(t,n,i),typeof s!="function"&&(Bs===null?Bs=new Set([this]):Bs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function nE(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Vr(t,n,s,!0),n=Xn.current,n!==null){switch(n.tag){case 31:case 13:return ai===null?vu():n.alternate===null&&Oe===0&&(Oe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===cu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Ud(e,i,s)),!1;case 22:return n.flags|=65536,i===cu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Ud(e,i,s)),!1}throw Error(J(435,n.tag))}return Ud(e,i,s),vu(),!1}if($t)return t=Xn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==tp&&(e=Error(J(422),{cause:i}),ll(ii(e,n)))):(i!==tp&&(t=Error(J(423),{cause:i}),ll(ii(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=ii(i,n),s=dp(e.stateNode,i,s),yd(e,s),Oe!==4&&(Oe=2)),!1;var a=Error(J(520),{cause:i});if(a=ii(a,n),tl===null?tl=[a]:tl.push(a),Oe!==4&&(Oe=2),t===null)return!0;i=ii(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=dp(n.stateNode,i,e),yd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Bs===null||!Bs.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=zv(s),Bv(s,e,n,i),yd(n,s),!1}n=n.return}while(n!==null);return!1}var dm=Error(J(461)),Ge=!1;function tn(e,t,n,i){t.child=e===null?Qy(t,null,n,i):Aa(t,e.child,n,i)}function v_(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ta(t),i=em(e,t,n,r,a,s),o=nm(),e!==null&&!Ge?(im(e,t,s),as(e,t,s)):($t&&o&&Yp(t),t.flags|=1,tn(e,t,i,s),t.child)}function x_(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!qp(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Fv(e,t,a,i,s)):(e=kc(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!pm(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:rl,n(r,i)&&e.ref===t.ref)return as(e,t,s)}return t.flags|=1,e=$i(a,i),e.ref=t.ref,e.return=t,t.child=e}function Fv(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(rl(a,i)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=i=a,pm(e,s))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,as(e,t,s)}return pp(e,t,n,i,s)}function Hv(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return b_(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xc(t,a!==null?a.cachePool:null),a!==null?c_(t,a):op(),ev(t);else return i=t.lanes=536870912,b_(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Xc(t,a.cachePool),c_(t,a),ws(t),t.memoizedState=null):(e!==null&&Xc(t,null),op(),ws(t));return tn(e,t,s,n),t.child}function Go(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function b_(e,t,n,i,s){var a=Jp();return a=a===null?null:{parent:Ve._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Xc(t,null),op(),ev(t),e!==null&&Vr(e,t,i,!0),t.childLanes=s,null}function Yc(e,t){return t=mu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function S_(e,t,n){return Aa(t,e.child,null,n),e=Yc(t,t.pendingProps),e.flags|=2,Pn(t),t.memoizedState=null,e}function iE(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if($t){if(i.mode==="hidden")return e=Yc(t,i),t.lanes=536870912,Go(null,e);if(lp(t),(e=Se)?(e=Nx(e,si),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ks!==null?{id:Ci,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},n=Wy(e),n.return=t,t.child=n,nn=t,Se=null)):e=null,e===null)throw Xs(t);return t.lanes=536870912,null}return Yc(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(lp(t),s)if(t.flags&256)t.flags&=-257,t=S_(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(J(558));else if(Ge||Vr(e,t,n,!1),s=(n&e.childLanes)!==0,Ge||s){if(i=ge,i!==null&&(r=_y(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Na(e,r),Tn(i,e,r),dm;vu(),t=S_(e,t,n)}else e=a.treeContext,Se=ri(r.nextSibling),nn=t,$t=!0,Is=null,si=!1,e!==null&&Yy(t,e),t=Yc(t,i),t.flags|=4096;return t}return e=$i(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Zc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(J(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function pp(e,t,n,i,s){return Ta(t),n=em(e,t,n,i,void 0,s),i=nm(),e!==null&&!Ge?(im(e,t,s),as(e,t,s)):($t&&i&&Yp(t),t.flags|=1,tn(e,t,n,s),t.child)}function M_(e,t,n,i,s,a){return Ta(t),t.updateQueue=null,n=iv(t,i,n,s),nv(e),i=nm(),e!==null&&!Ge?(im(e,t,a),as(e,t,a)):($t&&i&&Yp(t),t.flags|=1,tn(e,t,n,a),t.child)}function E_(e,t,n,i,s){if(Ta(t),t.stateNode===null){var a=_r,r=n.contextType;typeof r=="object"&&r!==null&&(a=sn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=fp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Qp(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?sn(r):_r,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(xd(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&fp.enqueueReplaceState(a,a.state,null),Jo(t,i,a,s),Ko(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Ca(n,o);a.props=l;var c=a.context,u=n.contextType;r=_r,typeof u=="object"&&u!==null&&(r=sn(u));var d=n.getDerivedStateFromProps;u=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&__(t,a,i,r),Es=!1;var f=t.memoizedState;a.state=f,Jo(t,i,a,s),Ko(),c=t.memoizedState,o||f!==c||Es?(typeof d=="function"&&(xd(t,n,d,i),c=t.memoizedState),(l=Es||g_(t,n,l,i,f,c,r))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,ap(e,t),r=t.memoizedProps,u=Ca(n,r),a.props=u,d=t.pendingProps,f=a.context,c=n.contextType,l=_r,typeof c=="object"&&c!==null&&(l=sn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||f!==l)&&__(t,a,i,l),Es=!1,f=t.memoizedState,a.state=f,Jo(t,i,a,s),Ko();var p=t.memoizedState;r!==d||f!==p||Es||e!==null&&e.dependencies!==null&&lu(e.dependencies)?(typeof o=="function"&&(xd(t,n,o,i),p=t.memoizedState),(u=Es||g_(t,n,u,i,f,p,l)||e!==null&&e.dependencies!==null&&lu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Zc(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=Aa(t,e.child,null,s),t.child=Aa(t,null,n,s)):tn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=as(e,t,s),e}function T_(e,t,n,i){return Ea(),t.flags|=256,tn(e,t,n,i),t.child}var bd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sd(e){return{baseLanes:e,cachePool:Ky()}}function Md(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Bn),e}function Vv(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if($t){if(s?As(t):ws(t),(e=Se)?(e=Nx(e,si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ks!==null?{id:Ci,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},n=Wy(e),n.return=t,t.child=n,nn=t,Se=null)):e=null,e===null)throw Xs(t);return Cp(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(ws(t),s=t.mode,o=mu({mode:"hidden",children:o},s),i=xa(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Sd(n),i.childLanes=Md(e,r,n),t.memoizedState=bd,Go(null,i)):(As(t),mp(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(As(t),t.flags&=-257,t=Ed(e,t,n)):t.memoizedState!==null?(ws(t),t.child=e.child,t.flags|=128,t=null):(ws(t),o=i.fallback,s=t.mode,i=mu({mode:"visible",children:i.children},s),o=xa(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,Aa(t,e.child,null,n),i=t.child,i.memoizedState=Sd(n),i.childLanes=Md(e,r,n),t.memoizedState=bd,t=Go(null,i));else if(As(t),Cp(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(J(419)),i.stack="",i.digest=r,ll({value:i,source:null,stack:null}),t=Ed(e,t,n)}else if(Ge||Vr(e,t,n,!1),r=(n&e.childLanes)!==0,Ge||r){if(r=ge,r!==null&&(i=_y(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Na(e,i),Tn(r,e,i),dm;wp(o)||vu(),t=Ed(e,t,n)}else wp(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Se=ri(o.nextSibling),nn=t,$t=!0,Is=null,si=!1,e!==null&&Yy(t,e),t=mp(t,i.children),t.flags|=4096);return t}return s?(ws(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=$i(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=$i(c,o):(o=xa(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Go(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Sd(n):(s=o.cachePool,s!==null?(l=Ve._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=Ky(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=Md(e,r,n),t.memoizedState=bd,Go(e.child,i)):(As(t),n=e.child,e=n.sibling,n=$i(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function mp(e,t){return t=mu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mu(e,t){return e=zn(22,e,null,t),e.lanes=0,e}function Ed(e,t,n){return Aa(t,e.child,null,n),e=mp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function A_(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),np(e.return,t,n)}function Td(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Gv(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=ze.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,ye(ze,r),tn(e,t,i,n),i=$t?ol:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&A_(e,n,t);else if(e.tag===19)A_(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&hu(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Td(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&hu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Td(t,!0,n,null,a,i);break;case"together":Td(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function as(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qs|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Vr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=$i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pm(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&lu(e)))}function sE(e,t,n){switch(t.tag){case 3:eu(t,t.stateNode.containerInfo),Ts(t,Ve,e.memoizedState.cache),Ea();break;case 27:case 5:kd(t);break;case 4:eu(t,t.stateNode.containerInfo);break;case 10:Ts(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lp(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(As(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Vv(e,t,n):(As(t),e=as(e,t,n),e!==null?e.sibling:null);As(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Vr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Gv(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ye(ze,ze.current),i)break;return null;case 22:return t.lanes=0,Hv(e,t,n,t.pendingProps);case 24:Ts(t,Ve,e.memoizedState.cache)}return as(e,t,n)}function kv(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!pm(e,n)&&(t.flags&128)===0)return Ge=!1,sE(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,$t&&(t.flags&1048576)!==0&&qy(t,ol,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=_a(t.elementType),t.type=e,typeof e=="function")qp(e)?(i=Ca(e,i),t.tag=1,t=E_(null,t,e,i,n)):(t.tag=0,t=pp(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Np){t.tag=11,t=v_(null,t,e,i,n);break t}else if(s===Lp){t.tag=14,t=x_(null,t,e,i,n);break t}}throw t=Vd(e)||e,Error(J(306,t,""))}}return t;case 0:return pp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Ca(i,t.pendingProps),E_(e,t,i,s,n);case 3:t:{if(eu(t,t.stateNode.containerInfo),e===null)throw Error(J(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,ap(e,t),Jo(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Ts(t,Ve,i),i!==a.cache&&ip(t,[Ve],n,!0),Ko(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=T_(e,t,i,n);break t}else if(i!==s){s=ii(Error(J(424)),t),ll(s),t=T_(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Se=ri(e.firstChild),nn=t,$t=!0,Is=null,si=!0,n=Qy(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ea(),i===s){t=as(e,t,n);break t}tn(e,t,i,n)}t=t.child}return t;case 26:return Zc(e,t),e===null?(n=Z_(t.type,null,t.pendingProps,null))?t.memoizedState=n:$t||(n=t.type,e=t.pendingProps,i=Mu(Os.current).createElement(n),i[en]=t,i[An]=e,an(i,n,e),je(i),t.stateNode=i):t.memoizedState=Z_(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return kd(t),e===null&&$t&&(i=t.stateNode=Lx(t.type,t.pendingProps,Os.current),nn=t,si=!0,s=Se,Zs(t.type)?(Rp=s,Se=ri(i.firstChild)):Se=s),tn(e,t,t.pendingProps.children,n),Zc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&$t&&((s=i=Se)&&(i=NE(i,t.type,t.pendingProps,si),i!==null?(t.stateNode=i,nn=t,Se=ri(i.firstChild),si=!1,s=!0):s=!1),s||Xs(t)),kd(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Tp(s,a)?i=null:r!==null&&Tp(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=em(e,t,K1,null,null,n),pl._currentValue=s),Zc(e,t),tn(e,t,i,n),t.child;case 6:return e===null&&$t&&((e=n=Se)&&(n=LE(n,t.pendingProps,si),n!==null?(t.stateNode=n,nn=t,Se=null,e=!0):e=!1),e||Xs(t)),null;case 13:return Vv(e,t,n);case 4:return eu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Aa(t,null,i,n):tn(e,t,i,n),t.child;case 11:return v_(e,t,t.type,t.pendingProps,n);case 7:return tn(e,t,t.pendingProps,n),t.child;case 8:return tn(e,t,t.pendingProps.children,n),t.child;case 12:return tn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Ts(t,t.type,i.value),tn(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Ta(t),s=sn(s),i=i(s),t.flags|=1,tn(e,t,i,n),t.child;case 14:return x_(e,t,t.type,t.pendingProps,n);case 15:return Fv(e,t,t.type,t.pendingProps,n);case 19:return Gv(e,t,n);case 31:return iE(e,t,n);case 22:return Hv(e,t,n,t.pendingProps);case 24:return Ta(t),i=sn(Ve),e===null?(s=Jp(),s===null&&(s=ge,a=Kp(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Qp(t),Ts(t,Ve,s)):((e.lanes&n)!==0&&(ap(e,t),Jo(t,null,null,n),Ko()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Ts(t,Ve,i)):(i=a.cache,Ts(t,Ve,i),i!==s.cache&&ip(t,[Ve],n,!0))),tn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(J(156,t.tag))}function Xi(e){e.flags|=4}function Ad(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(dx())e.flags|=8192;else throw Sa=cu,jp}else e.flags&=-16777217}function w_(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Px(t))if(dx())e.flags|=8192;else throw Sa=cu,jp}function Nc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?py():536870912,e.lanes|=t,Or|=t)}function Io(e,t){if(!$t)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function aE(e,t,n){var i=t.pendingProps;switch(Zp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ts(Ve),Cr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ar(t)?Xi(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_d())),be(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Xi(t),a!==null?(be(t),w_(t,a)):(be(t),Ad(t,s,null,i,n))):a?a!==e.memoizedState?(Xi(t),be(t),w_(t,a)):(be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Xi(t),be(t),Ad(t,s,e,i,n)),null;case 27:if(nu(t),n=Os.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Xi(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return be(t),null}e=Ui.current,ar(t)?n_(t,e):(e=Lx(s,i,n),t.stateNode=e,Xi(t))}return be(t),null;case 5:if(nu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Xi(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return be(t),null}if(a=Ui.current,ar(t))n_(t,a);else{var r=Mu(Os.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[en]=t,a[An]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(an(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Xi(t)}}return be(t),Ad(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Xi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(J(166));if(e=Os.current,ar(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=nn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[en]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Rx(e.nodeValue,n)),e||Xs(t,!0)}else e=Mu(e).createTextNode(i),e[en]=t,t.stateNode=e}return be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ar(t),n!==null){if(e===null){if(!i)throw Error(J(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(557));e[en]=t}else Ea(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),e=!1}else n=_d(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Pn(t),t):(Pn(t),null);if((t.flags&128)!==0)throw Error(J(558))}return be(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=ar(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(J(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[en]=t}else Ea(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),s=!1}else s=_d(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Pn(t),t):(Pn(t),null)}return Pn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Nc(t,t.updateQueue),be(t),null);case 4:return Cr(),e===null&&bm(t.stateNode.containerInfo),be(t),null;case 10:return ts(t.type),be(t),null;case 19:if(Qe(ze),i=t.memoizedState,i===null)return be(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Io(i,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=hu(e),a!==null){for(t.flags|=128,Io(i,!1),e=a.updateQueue,t.updateQueue=e,Nc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Xy(n,e),n=n.sibling;return ye(ze,ze.current&1|2),$t&&Zi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Fn()>_u&&(t.flags|=128,s=!0,Io(i,!1),t.lanes=4194304)}else{if(!s)if(e=hu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Nc(t,e),Io(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!$t)return be(t),null}else 2*Fn()-i.renderingStartTime>_u&&n!==536870912&&(t.flags|=128,s=!0,Io(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Fn(),e.sibling=null,n=ze.current,ye(ze,s?n&1|2:n&1),$t&&Zi(t,i.treeForkCount),e):(be(t),null);case 22:case 23:return Pn(t),$p(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),n=t.updateQueue,n!==null&&Nc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Qe(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ts(Ve),be(t),null;case 25:return null;case 30:return null}throw Error(J(156,t.tag))}function rE(e,t){switch(Zp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ts(Ve),Cr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return nu(t),null;case 31:if(t.memoizedState!==null){if(Pn(t),t.alternate===null)throw Error(J(340));Ea()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Pn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));Ea()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Qe(ze),null;case 4:return Cr(),null;case 10:return ts(t.type),null;case 22:case 23:return Pn(t),$p(),e!==null&&Qe(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ts(Ve),null;case 25:return null;default:return null}}function Xv(e,t){switch(Zp(t),t.tag){case 3:ts(Ve),Cr();break;case 26:case 27:case 5:nu(t);break;case 4:Cr();break;case 31:t.memoizedState!==null&&Pn(t);break;case 13:Pn(t);break;case 19:Qe(ze);break;case 10:ts(t.type);break;case 22:case 23:Pn(t),$p(),e!==null&&Qe(ba);break;case 24:ts(Ve)}}function Tl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){ce(t,t.return,o)}}function Ws(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(u){ce(s,l,u)}}}i=i.next}while(i!==a)}}catch(u){ce(t,t.return,u)}}function Wv(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{tv(t,n)}catch(i){ce(e,e.return,i)}}}function qv(e,t,n){n.props=Ca(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ce(e,t,i)}}function Qo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){ce(e,t,s)}}function Di(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ce(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ce(e,t,s)}else n.current=null}function Yv(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ce(e,e.return,s)}}function wd(e,t,n){try{var i=e.stateNode;AE(i,e.type,n,t),i[An]=t}catch(s){ce(e,e.return,s)}}function Zv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zs(e.type)||e.tag===4}function Cd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Zv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gp(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ji));else if(i!==4&&(i===27&&Zs(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(gp(e,t,n),e=e.sibling;e!==null;)gp(e,t,n),e=e.sibling}function gu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Zs(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(gu(e,t,n),e=e.sibling;e!==null;)gu(e,t,n),e=e.sibling}function Kv(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);an(t,i,n),t[en]=e,t[An]=n}catch(a){ce(e,e.return,a)}}var Ki=!1,He=!1,Rd=!1,C_=typeof WeakSet=="function"?WeakSet:Set,Je=null;function oE(e,t){if(e=e.containerInfo,Mp=wu,e=Py(e),kp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,u=0,d=e,f=null;e:for(;;){for(var p;d!==n||s!==0&&d.nodeType!==3||(o=r+s),d!==a||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break e;if(f===n&&++c===s&&(o=r),f===a&&++u===i&&(l=r),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ep={focusedElem:e,selectionRange:n},wu=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var _=Ca(n.type,s);e=i.getSnapshotBeforeUpdate(_,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(x){ce(n,n.return,x)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ap(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ap(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(J(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function Jv(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:qi(e,n),i&4&&Tl(5,n);break;case 1:if(qi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ce(n,n.return,r)}else{var s=Ca(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ce(n,n.return,r)}}i&64&&Wv(n),i&512&&Qo(n,n.return);break;case 3:if(qi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{tv(e,t)}catch(r){ce(n,n.return,r)}}break;case 27:t===null&&i&4&&Kv(n);case 26:case 5:qi(e,n),t===null&&i&4&&Yv(n),i&512&&Qo(n,n.return);break;case 12:qi(e,n);break;case 31:qi(e,n),i&4&&$v(e,n);break;case 13:qi(e,n),i&4&&tx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gE.bind(null,n),OE(e,n))));break;case 22:if(i=n.memoizedState!==null||Ki,!i){t=t!==null&&t.memoizedState!==null||He,s=Ki;var a=He;Ki=i,(He=t)&&!a?Yi(e,n,(n.subtreeFlags&8772)!==0):qi(e,n),Ki=s,He=a}break;case 30:break;default:qi(e,n)}}function jv(e){var t=e.alternate;t!==null&&(e.alternate=null,jv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,Mn=!1;function Wi(e,t,n){for(n=n.child;n!==null;)Qv(e,t,n),n=n.sibling}function Qv(e,t,n){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(yl,n)}catch{}switch(n.tag){case 26:He||Di(n,t),Wi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:He||Di(n,t);var i=Ce,s=Mn;Zs(n.type)&&(Ce=n.stateNode,Mn=!1),Wi(e,t,n),nl(n.stateNode),Ce=i,Mn=s;break;case 5:He||Di(n,t);case 6:if(i=Ce,s=Mn,Ce=null,Wi(e,t,n),Ce=i,Mn=s,Ce!==null)if(Mn)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(n.stateNode)}catch(a){ce(n,t,a)}else try{Ce.removeChild(n.stateNode)}catch(a){ce(n,t,a)}break;case 18:Ce!==null&&(Mn?(e=Ce,k_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Br(e)):k_(Ce,n.stateNode));break;case 4:i=Ce,s=Mn,Ce=n.stateNode.containerInfo,Mn=!0,Wi(e,t,n),Ce=i,Mn=s;break;case 0:case 11:case 14:case 15:Ws(2,n,t),He||Ws(4,n,t),Wi(e,t,n);break;case 1:He||(Di(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&qv(n,t,i)),Wi(e,t,n);break;case 21:Wi(e,t,n);break;case 22:He=(i=He)||n.memoizedState!==null,Wi(e,t,n),He=i;break;default:Wi(e,t,n)}}function $v(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Br(e)}catch(n){ce(t,t.return,n)}}}function tx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Br(e)}catch(n){ce(t,t.return,n)}}function lE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new C_),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new C_),t;default:throw Error(J(435,e.tag))}}function Lc(e,t){var n=lE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=_E.bind(null,e,i);i.then(s,s)}})}function bn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Zs(o.type)){Ce=o.stateNode,Mn=!1;break t}break;case 5:Ce=o.stateNode,Mn=!1;break t;case 3:case 4:Ce=o.stateNode.containerInfo,Mn=!0;break t}o=o.return}if(Ce===null)throw Error(J(160));Qv(a,r,s),Ce=null,Mn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ex(t,e),t=t.sibling}var gi=null;function ex(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bn(t,e),Sn(e),i&4&&(Ws(3,e,e.return),Tl(3,e),Ws(5,e,e.return));break;case 1:bn(t,e),Sn(e),i&512&&(He||n===null||Di(n,n.return)),i&64&&Ki&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=gi;if(bn(t,e),Sn(e),i&512&&(He||n===null||Di(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[bl]||a[en]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),an(a,i,n),a[en]=e,je(a),i=a;break t;case"link":var r=J_("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),an(a,i,n),s.head.appendChild(a);break;case"meta":if(r=J_("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),an(a,i,n),s.head.appendChild(a);break;default:throw Error(J(468,i))}a[en]=e,je(a),i=a}e.stateNode=i}else j_(s,e.type,e.stateNode);else e.stateNode=K_(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?j_(s,e.type,e.stateNode):K_(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&wd(e,e.memoizedProps,n.memoizedProps)}break;case 27:bn(t,e),Sn(e),i&512&&(He||n===null||Di(n,n.return)),n!==null&&i&4&&wd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bn(t,e),Sn(e),i&512&&(He||n===null||Di(n,n.return)),e.flags&32){s=e.stateNode;try{Dr(s,"")}catch(_){ce(e,e.return,_)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,wd(e,s,n!==null?n.memoizedProps:s)),i&1024&&(Rd=!0);break;case 6:if(bn(t,e),Sn(e),i&4){if(e.stateNode===null)throw Error(J(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){ce(e,e.return,_)}}break;case 3:if(jc=null,s=gi,gi=Eu(t.containerInfo),bn(t,e),gi=s,Sn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Br(t.containerInfo)}catch(_){ce(e,e.return,_)}Rd&&(Rd=!1,nx(e));break;case 4:i=gi,gi=Eu(e.stateNode.containerInfo),bn(t,e),Sn(e),gi=i;break;case 12:bn(t,e),Sn(e);break;case 31:bn(t,e),Sn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Lc(e,i)));break;case 13:bn(t,e),Sn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Hu=Fn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Lc(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Ki,u=He;if(Ki=c||s,He=u||l,bn(t,e),He=u,Ki=c,Sn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||Ki||He||ya(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(_){ce(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(_){ce(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;s?X_(p,!0):X_(l.stateNode,!1)}catch(_){ce(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Lc(e,n))));break;case 19:bn(t,e),Sn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Lc(e,i)));break;case 30:break;case 21:break;default:bn(t,e),Sn(e)}}function Sn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Zv(i)){n=i;break}i=i.return}if(n==null)throw Error(J(160));switch(n.tag){case 27:var s=n.stateNode,a=Cd(e);gu(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(Dr(r,""),n.flags&=-33);var o=Cd(e);gu(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Cd(e);gp(e,c,l);break;default:throw Error(J(161))}}catch(u){ce(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;nx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function qi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Jv(e,t.alternate,t),t=t.sibling}function ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ws(4,t,t.return),ya(t);break;case 1:Di(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&qv(t,t.return,n),ya(t);break;case 27:nl(t.stateNode);case 26:case 5:Di(t,t.return),ya(t);break;case 22:t.memoizedState===null&&ya(t);break;case 30:ya(t);break;default:ya(t)}e=e.sibling}}function Yi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(s,a,n),Tl(4,a);break;case 1:if(Yi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){ce(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)$y(l[s],o)}catch(c){ce(i,i.return,c)}}n&&r&64&&Wv(a),Qo(a,a.return);break;case 27:Kv(a);case 26:case 5:Yi(s,a,n),n&&i===null&&r&4&&Yv(a),Qo(a,a.return);break;case 12:Yi(s,a,n);break;case 31:Yi(s,a,n),n&&r&4&&$v(s,a);break;case 13:Yi(s,a,n),n&&r&4&&tx(s,a);break;case 22:a.memoizedState===null&&Yi(s,a,n),Qo(a,a.return);break;case 30:break;default:Yi(s,a,n)}t=t.sibling}}function mm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ml(n))}function gm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ml(e))}function mi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ix(e,t,n,i),t=t.sibling}function ix(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:mi(e,t,n,i),s&2048&&Tl(9,t);break;case 1:mi(e,t,n,i);break;case 3:mi(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ml(e)));break;case 12:if(s&2048){mi(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ce(t,t.return,l)}}else mi(e,t,n,i);break;case 31:mi(e,t,n,i);break;case 13:mi(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?mi(e,t,n,i):$o(e,t):a._visibility&2?mi(e,t,n,i):(a._visibility|=2,or(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&mm(r,t);break;case 24:mi(e,t,n,i),s&2048&&gm(t.alternate,t);break;default:mi(e,t,n,i)}}function or(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:or(a,r,o,l,s),Tl(8,r);break;case 23:break;case 22:var u=r.stateNode;r.memoizedState!==null?u._visibility&2?or(a,r,o,l,s):$o(a,r):(u._visibility|=2,or(a,r,o,l,s)),s&&c&2048&&mm(r.alternate,r);break;case 24:or(a,r,o,l,s),s&&c&2048&&gm(r.alternate,r);break;default:or(a,r,o,l,s)}t=t.sibling}}function $o(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:$o(n,i),s&2048&&mm(i.alternate,i);break;case 24:$o(n,i),s&2048&&gm(i.alternate,i);break;default:$o(n,i)}t=t.sibling}}var ko=8192;function rr(e,t,n){if(e.subtreeFlags&ko)for(e=e.child;e!==null;)sx(e,t,n),e=e.sibling}function sx(e,t,n){switch(e.tag){case 26:rr(e,t,n),e.flags&ko&&e.memoizedState!==null&&qE(n,gi,e.memoizedState,e.memoizedProps);break;case 5:rr(e,t,n);break;case 3:case 4:var i=gi;gi=Eu(e.stateNode.containerInfo),rr(e,t,n),gi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ko,ko=16777216,rr(e,t,n),ko=i):rr(e,t,n));break;default:rr(e,t,n)}}function ax(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Po(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Je=i,ox(i,e)}ax(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rx(e),e=e.sibling}function rx(e){switch(e.tag){case 0:case 11:case 15:Po(e),e.flags&2048&&Ws(9,e,e.return);break;case 3:Po(e);break;case 12:Po(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Kc(e)):Po(e);break;default:Po(e)}}function Kc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Je=i,ox(i,e)}ax(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ws(8,t,t.return),Kc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Kc(t));break;default:Kc(t)}e=e.sibling}}function ox(e,t){for(;Je!==null;){var n=Je;switch(n.tag){case 0:case 11:case 15:Ws(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ml(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Je=i;else t:for(n=e;Je!==null;){i=Je;var s=i.sibling,a=i.return;if(jv(i),i===n){Je=null;break t}if(s!==null){s.return=a,Je=s;break t}Je=a}}}var cE={getCacheForType:function(e){var t=sn(Ve),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sn(Ve).controller.signal}},uE=typeof WeakMap=="function"?WeakMap:Map,se=0,ge=null,Zt=null,jt=0,le=0,In=null,Us=!1,kr=!1,_m=!1,rs=0,Oe=0,qs=0,Ma=0,ym=0,Bn=0,Or=0,tl=null,En=null,_p=!1,Hu=0,lx=0,_u=1/0,yu=null,Bs=null,Xe=0,Fs=null,Ir=null,es=0,yp=0,vp=null,cx=null,el=0,xp=null;function Gn(){return(se&2)!==0&&jt!==0?jt&-jt:Ot.T!==null?xm():yy()}function ux(){if(Bn===0)if((jt&536870912)===0||$t){var e=Mc;Mc<<=1,(Mc&3932160)===0&&(Mc=262144),Bn=e}else Bn=536870912;return e=Xn.current,e!==null&&(e.flags|=32),Bn}function Tn(e,t,n){(e===ge&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(Pr(e,0),Ns(e,jt,Bn,!1)),xl(e,n),((se&2)===0||e!==ge)&&(e===ge&&((se&2)===0&&(Ma|=n),Oe===4&&Ns(e,jt,Bn,!1)),Li(e))}function hx(e,t,n){if((se&6)!==0)throw Error(J(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||vl(e,t),s=i?dE(e,t):Dd(e,t,!0),a=i;do{if(s===0){kr&&!i&&Ns(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!hE(n)){s=Dd(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=tl;var l=o.current.memoizedState.isDehydrated;if(l&&(Pr(o,r).flags|=256),r=Dd(o,r,!1),r!==2){if(_m&&!l){o.errorRecoveryDisabledLanes|=a,Ma|=a,s=4;break t}a=En,En=s,a!==null&&(En===null?En=a:En.push.apply(En,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Pr(e,0),Ns(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(J(345));case 4:if((t&4194048)!==t)break;case 6:Ns(i,t,Bn,!Us);break t;case 2:En=null;break;case 3:case 5:break;default:throw Error(J(329))}if((t&62914560)===t&&(s=Hu+300-Fn(),10<s)){if(Ns(i,t,Bn,!Us),Ru(i,0,!0)!==0)break t;es=t,i.timeoutHandle=Ux(R_.bind(null,i,n,En,yu,_p,t,Bn,Ma,Or,Us,a,"Throttled",-0,0),s);break t}R_(i,n,En,yu,_p,t,Bn,Ma,Or,Us,a,null,-0,0)}}break}while(!0);Li(e)}function R_(e,t,n,i,s,a,r,o,l,c,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},sx(t,a,d);var _=(a&62914560)===a?Hu-Fn():(a&4194048)===a?lx-Fn():0;if(_=YE(d,_),_!==null){es=a,e.cancelPendingCommit=_(U_.bind(null,e,t,a,n,i,s,r,o,l,u,d,null,f,p)),Ns(e,a,r,!c);return}}U_(e,t,a,n,i,s,r,o,l)}function hE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!kn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ns(e,t,n,i){t&=~ym,t&=~Ma,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Vn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&my(e,n,t)}function Vu(){return(se&6)===0?(Al(0,!1),!1):!0}function vm(){if(Zt!==null){if(le===0)var e=Zt.return;else e=Zt,Qi=La=null,sm(e),Tr=null,cl=0,e=Zt;for(;e!==null;)Xv(e.alternate,e),e=e.return;Zt=null}}function Pr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,RE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),es=0,vm(),ge=e,Zt=n=$i(e.current,null),jt=t,le=0,In=null,Us=!1,kr=vl(e,t),_m=!1,Or=Bn=ym=Ma=qs=Oe=0,En=tl=null,_p=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Vn(i),a=1<<s;t|=e[s],i&=~a}return rs=t,Lu(),n}function fx(e,t){Ht=null,Ot.H=hl,t===Gr||t===Iu?(t=o_(),le=3):t===jp?(t=o_(),le=4):le=t===dm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,In=t,Zt===null&&(Oe=1,pu(e,ii(t,e.current)))}function dx(){var e=Xn.current;return e===null?!0:(jt&4194048)===jt?ai===null:(jt&62914560)===jt||(jt&536870912)!==0?e===ai:!1}function px(){var e=Ot.H;return Ot.H=hl,e===null?hl:e}function mx(){var e=Ot.A;return Ot.A=cE,e}function vu(){Oe=4,Us||(jt&4194048)!==jt&&Xn.current!==null||(kr=!0),(qs&134217727)===0&&(Ma&134217727)===0||ge===null||Ns(ge,jt,Bn,!1)}function Dd(e,t,n){var i=se;se|=2;var s=px(),a=mx();(ge!==e||jt!==t)&&(yu=null,Pr(e,t)),t=!1;var r=Oe;t:do try{if(le!==0&&Zt!==null){var o=Zt,l=In;switch(le){case 8:vm(),r=6;break t;case 3:case 2:case 9:case 6:Xn.current===null&&(t=!0);var c=le;if(le=0,In=null,xr(e,o,l,c),n&&kr){r=0;break t}break;default:c=le,le=0,In=null,xr(e,o,l,c)}}fE(),r=Oe;break}catch(u){fx(e,u)}while(!0);return t&&e.shellSuspendCounter++,Qi=La=null,se=i,Ot.H=s,Ot.A=a,Zt===null&&(ge=null,jt=0,Lu()),r}function fE(){for(;Zt!==null;)gx(Zt)}function dE(e,t){var n=se;se|=2;var i=px(),s=mx();ge!==e||jt!==t?(yu=null,_u=Fn()+500,Pr(e,t)):kr=vl(e,t);t:do try{if(le!==0&&Zt!==null){t=Zt;var a=In;e:switch(le){case 1:le=0,In=null,xr(e,t,a,1);break;case 2:case 9:if(r_(a)){le=0,In=null,D_(t);break}t=function(){le!==2&&le!==9||ge!==e||(le=7),Li(e)},a.then(t,t);break t;case 3:le=7;break t;case 4:le=5;break t;case 7:r_(a)?(le=0,In=null,D_(t)):(le=0,In=null,xr(e,t,a,7));break;case 5:var r=null;switch(Zt.tag){case 26:r=Zt.memoizedState;case 5:case 27:var o=Zt;if(r?Px(r):o.stateNode.complete){le=0,In=null;var l=o.sibling;if(l!==null)Zt=l;else{var c=o.return;c!==null?(Zt=c,Gu(c)):Zt=null}break e}}le=0,In=null,xr(e,t,a,5);break;case 6:le=0,In=null,xr(e,t,a,6);break;case 8:vm(),Oe=6;break t;default:throw Error(J(462))}}pE();break}catch(u){fx(e,u)}while(!0);return Qi=La=null,Ot.H=i,Ot.A=s,se=n,Zt!==null?0:(ge=null,jt=0,Lu(),Oe)}function pE(){for(;Zt!==null&&!zM();)gx(Zt)}function gx(e){var t=kv(e.alternate,e,rs);e.memoizedProps=e.pendingProps,t===null?Gu(e):Zt=t}function D_(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=M_(n,t,t.pendingProps,t.type,void 0,jt);break;case 11:t=M_(n,t,t.pendingProps,t.type.render,t.ref,jt);break;case 5:sm(t);default:Xv(n,t),t=Zt=Xy(t,rs),t=kv(n,t,rs)}e.memoizedProps=e.pendingProps,t===null?Gu(e):Zt=t}function xr(e,t,n,i){Qi=La=null,sm(t),Tr=null,cl=0;var s=t.return;try{if(nE(e,s,t,n,jt)){Oe=1,pu(e,ii(n,e.current)),Zt=null;return}}catch(a){if(s!==null)throw Zt=s,a;Oe=1,pu(e,ii(n,e.current)),Zt=null;return}t.flags&32768?($t||i===1?e=!0:kr||(jt&536870912)!==0?e=!1:(Us=e=!0,(i===2||i===9||i===3||i===6)&&(i=Xn.current,i!==null&&i.tag===13&&(i.flags|=16384))),_x(t,e)):Gu(t)}function Gu(e){var t=e;do{if((t.flags&32768)!==0){_x(t,Us);return}e=t.return;var n=aE(t.alternate,t,rs);if(n!==null){Zt=n;return}if(t=t.sibling,t!==null){Zt=t;return}Zt=t=e}while(t!==null);Oe===0&&(Oe=5)}function _x(e,t){do{var n=rE(e.alternate,e);if(n!==null){n.flags&=32767,Zt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Zt=e;return}Zt=e=n}while(e!==null);Oe=6,Zt=null}function U_(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do ku();while(Xe!==0);if((se&6)!==0)throw Error(J(327));if(t!==null){if(t===e.current)throw Error(J(177));if(a=t.lanes|t.childLanes,a|=Xp,YM(e,n,a,r,o,l),e===ge&&(Zt=ge=null,jt=0),Ir=t,Fs=e,es=n,yp=a,vp=s,cx=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yE(iu,function(){return Sx(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ot.T,Ot.T=null,s=ae.p,ae.p=2,r=se,se|=4;try{oE(e,t,n)}finally{se=r,ae.p=s,Ot.T=i}}Xe=1,yx(),vx(),xx()}}function yx(){if(Xe===1){Xe=0;var e=Fs,t=Ir,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Ot.T,Ot.T=null;var i=ae.p;ae.p=2;var s=se;se|=4;try{ex(t,e);var a=Ep,r=Py(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&Iy(o.ownerDocument.documentElement,o)){if(l!==null&&kp(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),_=o.textContent.length,x=Math.min(l.start,_),m=l.end===void 0?x:Math.min(l.end,_);!p.extend&&x>m&&(r=m,m=x,x=r);var h=$0(o,x),g=$0(o,m);if(h&&g&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var y=d.createRange();y.setStart(h.node,h.offset),p.removeAllRanges(),x>m?(p.addRange(y),p.extend(g.node,g.offset)):(y.setEnd(g.node,g.offset),p.addRange(y))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var v=d[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}wu=!!Mp,Ep=Mp=null}finally{se=s,ae.p=i,Ot.T=n}}e.current=t,Xe=2}}function vx(){if(Xe===2){Xe=0;var e=Fs,t=Ir,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ot.T,Ot.T=null;var i=ae.p;ae.p=2;var s=se;se|=4;try{Jv(e,t.alternate,t)}finally{se=s,ae.p=i,Ot.T=n}}Xe=3}}function xx(){if(Xe===4||Xe===3){Xe=0,BM();var e=Fs,t=Ir,n=es,i=cx;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Xe=5:(Xe=0,Ir=Fs=null,bx(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Bs=null),Pp(n),t=t.stateNode,Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(yl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ot.T,s=ae.p,ae.p=2,Ot.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Ot.T=t,ae.p=s}}(es&3)!==0&&ku(),Li(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===xp?el++:(el=0,xp=e):el=0,Al(0,!1)}}function bx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ml(t)))}function ku(){return yx(),vx(),xx(),Sx()}function Sx(){if(Xe!==5)return!1;var e=Fs,t=yp;yp=0;var n=Pp(es),i=Ot.T,s=ae.p;try{ae.p=32>n?32:n,Ot.T=null,n=vp,vp=null;var a=Fs,r=es;if(Xe=0,Ir=Fs=null,es=0,(se&6)!==0)throw Error(J(331));var o=se;if(se|=4,rx(a.current),ix(a,a.current,r,n),se=o,Al(0,!1),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(yl,a)}catch{}return!0}finally{ae.p=s,Ot.T=i,bx(e,t)}}function N_(e,t,n){t=ii(n,t),t=dp(e.stateNode,t,2),e=zs(e,t,2),e!==null&&(xl(e,2),Li(e))}function ce(e,t,n){if(e.tag===3)N_(e,e,n);else for(;t!==null;){if(t.tag===3){N_(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Bs===null||!Bs.has(i))){e=ii(n,e),n=zv(2),i=zs(t,n,2),i!==null&&(Bv(n,i,t,e),xl(i,2),Li(i));break}}t=t.return}}function Ud(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new uE;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(_m=!0,s.add(n),e=mE.bind(null,e,t,n),t.then(e,e))}function mE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ge===e&&(jt&n)===n&&(Oe===4||Oe===3&&(jt&62914560)===jt&&300>Fn()-Hu?(se&2)===0&&Pr(e,0):ym|=n,Or===jt&&(Or=0)),Li(e)}function Mx(e,t){t===0&&(t=py()),e=Na(e,t),e!==null&&(xl(e,t),Li(e))}function gE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mx(e,n)}function _E(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(J(314))}i!==null&&i.delete(t),Mx(e,n)}function yE(e,t){return Op(e,t)}var xu=null,lr=null,bp=!1,bu=!1,Nd=!1,Ls=0;function Li(e){e!==lr&&e.next===null&&(lr===null?xu=lr=e:lr=lr.next=e),bu=!0,bp||(bp=!0,xE())}function Al(e,t){if(!Nd&&bu){Nd=!0;do for(var n=!1,i=xu;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Vn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,L_(i,a))}else a=jt,a=Ru(i,i===ge?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||vl(i,a)||(n=!0,L_(i,a));i=i.next}while(n);Nd=!1}}function vE(){Ex()}function Ex(){bu=bp=!1;var e=0;Ls!==0&&CE()&&(e=Ls);for(var t=Fn(),n=null,i=xu;i!==null;){var s=i.next,a=Tx(i,t);a===0?(i.next=null,n===null?xu=s:n.next=s,s===null&&(lr=n)):(n=i,(e!==0||(a&3)!==0)&&(bu=!0)),i=s}Xe!==0&&Xe!==5||Al(e,!1),Ls!==0&&(Ls=0)}function Tx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Vn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=qM(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=ge,n=jt,n=Ru(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(le===2||le===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&od(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||vl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&od(i),Pp(n)){case 2:case 8:n=fy;break;case 32:n=iu;break;case 268435456:n=dy;break;default:n=iu}return i=Ax.bind(null,e),n=Op(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&od(i),e.callbackPriority=2,e.callbackNode=null,2}function Ax(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ku()&&e.callbackNode!==n)return null;var i=jt;return i=Ru(e,e===ge?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(hx(e,i,t),Tx(e,Fn()),e.callbackNode!=null&&e.callbackNode===n?Ax.bind(null,e):null)}function L_(e,t){if(ku())return null;hx(e,t,!0)}function xE(){DE(function(){(se&6)!==0?Op(hy,vE):Ex()})}function xm(){if(Ls===0){var e=Ur;e===0&&(e=Sc,Sc<<=1,(Sc&261888)===0&&(Sc=256)),Ls=e}return Ls}function O_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Hc(""+e)}function I_(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function bE(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=O_((s[An]||null).action),r=i.submitter;r&&(t=(t=r[An]||null)?O_(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Du("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ls!==0){var l=r?I_(s,r):new FormData(s);hp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?I_(s,r):new FormData(s),hp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Oc=0;Oc<$d.length;Oc++)Ic=$d[Oc],P_=Ic.toLowerCase(),z_=Ic[0].toUpperCase()+Ic.slice(1),_i(P_,"on"+z_);var Ic,P_,z_,Oc;_i(By,"onAnimationEnd");_i(Fy,"onAnimationIteration");_i(Hy,"onAnimationStart");_i("dblclick","onDoubleClick");_i("focusin","onFocus");_i("focusout","onBlur");_i(F1,"onTransitionRun");_i(H1,"onTransitionStart");_i(V1,"onTransitionCancel");_i(Vy,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);Ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ra("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function wx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){au(u)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){au(u)}s.currentTarget=null,a=l}}}}function Yt(e,t){var n=t[Wd];n===void 0&&(n=t[Wd]=new Set);var i=e+"__bubble";n.has(i)||(Cx(t,e,2,!1),n.add(i))}function Ld(e,t,n){var i=0;t&&(i|=4),Cx(n,e,i,t)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function bm(e){if(!e[Pc]){e[Pc]=!0,vy.forEach(function(n){n!=="selectionchange"&&(SE.has(n)||Ld(n,!1,e),Ld(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pc]||(t[Pc]=!0,Ld("selectionchange",!1,t))}}function Cx(e,t,n,i){switch(Vx(t)){case 2:var s=JE;break;case 8:s=jE;break;default:s=Tm}n=s.bind(null,t,n,e),s=void 0,!Jd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Od(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=hr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}wy(function(){var c=a,u=Fp(n),d=[];t:{var f=Gy.get(e);if(f!==void 0){var p=Du,_=e;switch(e){case"keypress":if(Gc(n)===0)break t;case"keydown":case"keyup":p=_1;break;case"focusin":_="focus",p=fd;break;case"focusout":_="blur",p=fd;break;case"beforeblur":case"afterblur":p=fd;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=X0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=a1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=x1;break;case By:case Fy:case Hy:p=l1;break;case Vy:p=S1;break;case"scroll":case"scrollend":p=i1;break;case"wheel":p=E1;break;case"copy":case"cut":case"paste":p=u1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=q0;break;case"toggle":case"beforetoggle":p=A1}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),h=x?f!==null?f+"Capture":null:f;x=[];for(var g=c,y;g!==null;){var v=g;if(y=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||y===null||h===null||(v=sl(g,h),v!=null&&x.push(dl(g,v,y))),m)break;g=g.return}0<x.length&&(f=new p(f,_,null,n,u),d.push({event:f,listeners:x}))}}if((t&7)===0){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Kd&&(_=n.relatedTarget||n.fromElement)&&(hr(_)||_[Fr]))break t;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?hr(_):null,_!==null&&(m=_l(_),x=_.tag,_!==m||x!==5&&x!==27&&x!==6)&&(_=null)):(p=null,_=c),p!==_)){if(x=X0,v="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=q0,v="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?f:Vo(p),y=_==null?f:Vo(_),f=new x(v,g+"leave",p,n,u),f.target=m,f.relatedTarget=y,v=null,hr(u)===c&&(x=new x(h,g+"enter",_,n,u),x.target=y,x.relatedTarget=m,v=x),m=v,p&&_)e:{for(x=ME,h=p,g=_,y=0,v=h;v;v=x(v))y++;v=0;for(var w=g;w;w=x(w))v++;for(;0<y-v;)h=x(h),y--;for(;0<v-y;)g=x(g),v--;for(;y--;){if(h===g||g!==null&&h===g.alternate){x=h;break e}h=x(h),g=x(g)}x=null}else x=null;p!==null&&B_(d,f,p,x,!1),_!==null&&m!==null&&B_(d,m,_,x,!0)}}t:{if(f=c?Vo(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var D=J0;else if(K0(f))if(Ly)D=P1;else{D=O1;var A=L1}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&Bp(c.elementType)&&(D=J0):D=I1;if(D&&(D=D(e,c))){Ny(d,D,n,u);break t}A&&A(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&Zd(f,"number",f.value)}switch(A=c?Vo(c):window,e){case"focusin":(K0(A)||A.contentEditable==="true")&&(pr=A,jd=c,qo=null);break;case"focusout":qo=jd=pr=null;break;case"mousedown":Qd=!0;break;case"contextmenu":case"mouseup":case"dragend":Qd=!1,t_(d,n,u);break;case"selectionchange":if(B1)break;case"keydown":case"keyup":t_(d,n,u)}var U;if(Gp)t:{switch(e){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else dr?Dy(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Ry&&n.locale!=="ko"&&(dr||E!=="onCompositionStart"?E==="onCompositionEnd"&&dr&&(U=Cy()):(Ds=u,Hp="value"in Ds?Ds.value:Ds.textContent,dr=!0)),A=Su(c,E),0<A.length&&(E=new W0(E,e,null,n,u),d.push({event:E,listeners:A}),U?E.data=U:(U=Uy(n),U!==null&&(E.data=U)))),(U=C1?R1(e,n):D1(e,n))&&(E=Su(c,"onBeforeInput"),0<E.length&&(A=new W0("onBeforeInput","beforeinput",null,n,u),d.push({event:A,listeners:E}),A.data=U)),bE(d,e,c,n,u)}wx(d,t)})}function dl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Su(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=sl(e,n),s!=null&&i.unshift(dl(e,s,a)),s=sl(e,t),s!=null&&i.push(dl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function ME(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function B_(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=sl(n,a),c!=null&&r.unshift(dl(n,c,l))):s||(c=sl(n,a),c!=null&&r.push(dl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var EE=/\r\n?/g,TE=/\u0000|\uFFFD/g;function F_(e){return(typeof e=="string"?e:""+e).replace(EE,`
`).replace(TE,"")}function Rx(e,t){return t=F_(t),F_(e)===t}function fe(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Dr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Dr(e,""+i);break;case"className":Tc(e,"class",i);break;case"tabIndex":Tc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Tc(e,n,i);break;case"style":Ay(e,i,a);break;case"data":if(t!=="object"){Tc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Hc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&fe(e,t,"name",s.name,s,null),fe(e,t,"formEncType",s.formEncType,s,null),fe(e,t,"formMethod",s.formMethod,s,null),fe(e,t,"formTarget",s.formTarget,s,null)):(fe(e,t,"encType",s.encType,s,null),fe(e,t,"method",s.method,s,null),fe(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Hc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ji);break;case"onScroll":i!=null&&Yt("scroll",e);break;case"onScrollEnd":i!=null&&Yt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(J(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Hc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Yt("beforetoggle",e),Yt("toggle",e),Fc(e,"popover",i);break;case"xlinkActuate":ki(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ki(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ki(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ki(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ki(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ki(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ki(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ki(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ki(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Fc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=e1.get(n)||n,Fc(e,n,i))}}function Sp(e,t,n,i,s,a){switch(n){case"style":Ay(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(J(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Dr(e,i):(typeof i=="number"||typeof i=="bigint")&&Dr(e,""+i);break;case"onScroll":i!=null&&Yt("scroll",e);break;case"onScrollEnd":i!=null&&Yt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xy.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[An]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Fc(e,n,i)}}}function an(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Yt("error",e),Yt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:fe(e,t,a,r,n,null)}}s&&fe(e,t,"srcSet",n.srcSet,n,null),i&&fe(e,t,"src",n.src,n,null);return;case"input":Yt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":s=u;break;case"type":r=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":a=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(J(137,t));break;default:fe(e,t,i,u,n,null)}}My(e,a,o,l,c,r,s,!1);return;case"select":Yt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:fe(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Sr(e,!!i,t,!1):n!=null&&Sr(e,!!i,n,!0);return;case"textarea":Yt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(J(91));break;default:fe(e,t,r,o,n,null)}Ty(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:fe(e,t,l,i,n,null)}return;case"dialog":Yt("beforetoggle",e),Yt("toggle",e),Yt("cancel",e),Yt("close",e);break;case"iframe":case"object":Yt("load",e);break;case"video":case"audio":for(i=0;i<fl.length;i++)Yt(fl[i],e);break;case"image":Yt("error",e),Yt("load",e);break;case"details":Yt("toggle",e);break;case"embed":case"source":case"link":Yt("error",e),Yt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:fe(e,t,c,i,n,null)}return;default:if(Bp(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&Sp(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&fe(e,t,o,i,n,null))}function AE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,u=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||fe(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":a=p;break;case"name":s=p;break;case"checked":c=p;break;case"defaultChecked":u=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(J(137,t));break;default:p!==d&&fe(e,t,f,p,i,d)}}Yd(e,r,o,l,c,u,a,s);return;case"select":p=r=o=f=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||fe(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":f=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&fe(e,t,s,a,i,l)}t=o,n=r,i=p,f!=null?Sr(e,!!n,f,!1):!!i!=!!n&&(t!=null?Sr(e,!!n,t,!0):Sr(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:fe(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":f=s;break;case"defaultValue":p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(J(91));break;default:s!==a&&fe(e,t,r,s,i,a)}Ey(e,f,p);return;case"option":for(var _ in n)if(f=n[_],n.hasOwnProperty(_)&&f!=null&&!i.hasOwnProperty(_))switch(_){case"selected":e.selected=!1;break;default:fe(e,t,_,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:fe(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x)&&fe(e,t,x,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(J(137,t));break;default:fe(e,t,c,f,i,p)}return;default:if(Bp(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&Sp(e,t,m,void 0,i,f);for(u in i)f=i[u],p=n[u],!i.hasOwnProperty(u)||f===p||f===void 0&&p===void 0||Sp(e,t,u,f,i,p);return}}for(var h in n)f=n[h],n.hasOwnProperty(h)&&f!=null&&!i.hasOwnProperty(h)&&fe(e,t,h,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||fe(e,t,d,f,i,p)}function H_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&H_(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,d=l.initiatorType;u&&H_(d)&&(l=l.responseEnd,r+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Mp=null,Ep=null;function Mu(e){return e.nodeType===9?e:e.ownerDocument}function V_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dx(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Tp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Id=null;function CE(){var e=window.event;return e&&e.type==="popstate"?e===Id?!1:(Id=e,!0):(Id=null,!1)}var Ux=typeof setTimeout=="function"?setTimeout:void 0,RE=typeof clearTimeout=="function"?clearTimeout:void 0,G_=typeof Promise=="function"?Promise:void 0,DE=typeof queueMicrotask=="function"?queueMicrotask:typeof G_<"u"?function(e){return G_.resolve(null).then(e).catch(UE)}:Ux;function UE(e){setTimeout(function(){throw e})}function Zs(e){return e==="head"}function k_(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Br(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")nl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,nl(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[bl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&nl(e.ownerDocument.body);n=s}while(n);Br(t)}function X_(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Ap(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ap(n),zp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function NE(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[bl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=ri(e.nextSibling),e===null)break}return null}function LE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ri(e.nextSibling),e===null))return null;return e}function Nx(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ri(e.nextSibling),e===null))return null;return e}function wp(e){return e.data==="$?"||e.data==="$~"}function Cp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function OE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ri(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Rp=null;function W_(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ri(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function q_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Lx(e,t,n){switch(t=Mu(n),e){case"html":if(e=t.documentElement,!e)throw Error(J(452));return e;case"head":if(e=t.head,!e)throw Error(J(453));return e;case"body":if(e=t.body,!e)throw Error(J(454));return e;default:throw Error(J(451))}}function nl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zp(e)}var oi=new Map,Y_=new Set;function Eu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var os=ae.d;ae.d={f:IE,r:PE,D:zE,C:BE,L:FE,m:HE,X:GE,S:VE,M:kE};function IE(){var e=os.f(),t=Vu();return e||t}function PE(e){var t=Hr(e);t!==null&&t.tag===5&&t.type==="form"?Av(t):os.r(e)}var Xr=typeof document>"u"?null:document;function Ox(e,t,n){var i=Xr;if(i&&typeof t=="string"&&t){var s=ni(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Y_.has(s)||(Y_.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),an(t,"link",e),je(t),i.head.appendChild(t)))}}function zE(e){os.D(e),Ox("dns-prefetch",e,null)}function BE(e,t){os.C(e,t),Ox("preconnect",e,t)}function FE(e,t,n){os.L(e,t,n);var i=Xr;if(i&&e&&t){var s='link[rel="preload"][as="'+ni(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+ni(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+ni(n.imageSizes)+'"]')):s+='[href="'+ni(e)+'"]';var a=s;switch(t){case"style":a=zr(e);break;case"script":a=Wr(e)}oi.has(a)||(e=Me({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),oi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(wl(a))||t==="script"&&i.querySelector(Cl(a))||(t=i.createElement("link"),an(t,"link",e),je(t),i.head.appendChild(t)))}}function HE(e,t){os.m(e,t);var n=Xr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ni(i)+'"][href="'+ni(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Wr(e)}if(!oi.has(a)&&(e=Me({rel:"modulepreload",href:e},t),oi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Cl(a)))return}i=n.createElement("link"),an(i,"link",e),je(i),n.head.appendChild(i)}}}function VE(e,t,n){os.S(e,t,n);var i=Xr;if(i&&e){var s=br(i).hoistableStyles,a=zr(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(wl(a)))o.loading=5;else{e=Me({rel:"stylesheet",href:e,"data-precedence":t},n),(n=oi.get(a))&&Sm(e,n);var l=r=i.createElement("link");je(l),an(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Jc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function GE(e,t){os.X(e,t);var n=Xr;if(n&&e){var i=br(n).hoistableScripts,s=Wr(e),a=i.get(s);a||(a=n.querySelector(Cl(s)),a||(e=Me({src:e,async:!0},t),(t=oi.get(s))&&Mm(e,t),a=n.createElement("script"),je(a),an(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function kE(e,t){os.M(e,t);var n=Xr;if(n&&e){var i=br(n).hoistableScripts,s=Wr(e),a=i.get(s);a||(a=n.querySelector(Cl(s)),a||(e=Me({src:e,async:!0,type:"module"},t),(t=oi.get(s))&&Mm(e,t),a=n.createElement("script"),je(a),an(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Z_(e,t,n,i){var s=(s=Os.current)?Eu(s):null;if(!s)throw Error(J(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=zr(n.href),n=br(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=zr(n.href);var a=br(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(wl(e)))&&!a._p&&(r.instance=a,r.state.loading=5),oi.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},oi.set(e,n),a||XE(s,e,n,r.state))),t&&i===null)throw Error(J(528,""));return r}if(t&&i!==null)throw Error(J(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Wr(n),n=br(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(J(444,e))}}function zr(e){return'href="'+ni(e)+'"'}function wl(e){return'link[rel="stylesheet"]['+e+"]"}function Ix(e){return Me({},e,{"data-precedence":e.precedence,precedence:null})}function XE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),an(t,"link",n),je(t),e.head.appendChild(t))}function Wr(e){return'[src="'+ni(e)+'"]'}function Cl(e){return"script[async]"+e}function K_(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ni(n.href)+'"]');if(i)return t.instance=i,je(i),i;var s=Me({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),je(i),an(i,"style",s),Jc(i,n.precedence,e),t.instance=i;case"stylesheet":s=zr(n.href);var a=e.querySelector(wl(s));if(a)return t.state.loading|=4,t.instance=a,je(a),a;i=Ix(n),(s=oi.get(s))&&Sm(i,s),a=(e.ownerDocument||e).createElement("link"),je(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),an(a,"link",i),t.state.loading|=4,Jc(a,n.precedence,e),t.instance=a;case"script":return a=Wr(n.src),(s=e.querySelector(Cl(a)))?(t.instance=s,je(s),s):(i=n,(s=oi.get(a))&&(i=Me({},n),Mm(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),je(s),an(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(J(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Jc(i,n.precedence,e));return t.instance}function Jc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Sm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Mm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var jc=null;function J_(e,t,n){if(jc===null){var i=new Map,s=jc=new Map;s.set(n,i)}else s=jc,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[bl]||a[en]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function j_(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function WE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Px(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function qE(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=zr(i.href),a=t.querySelector(wl(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Tu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,je(a);return}a=t.ownerDocument||t,i=Ix(i),(s=oi.get(s))&&Sm(i,s),a=a.createElement("link"),je(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),an(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Tu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Pd=0;function YE(e,t){return e.stylesheets&&e.count===0&&Qc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Qc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Pd===0&&(Pd=62500*wE());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qc(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Pd?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Tu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Au=null;function Qc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Au=new Map,t.forEach(ZE,e),Au=null,Tu.call(e))}function ZE(e,t){if(!(t.state.loading&4)){var n=Au.get(e);if(n)var i=n.get(null);else{n=new Map,Au.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Tu.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var pl={$$typeof:Ji,Provider:null,Consumer:null,_currentValue:va,_currentValue2:va,_threadCount:0};function KE(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ld(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ld(0),this.hiddenUpdates=ld(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function zx(e,t,n,i,s,a,r,o,l,c,u,d){return e=new KE(e,t,n,r,l,c,u,d,o),t=1,a===!0&&(t|=24),a=zn(3,null,null,t),e.current=a,a.stateNode=e,t=Kp(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Qp(a),e}function Bx(e){return e?(e=_r,e):_r}function Fx(e,t,n,i,s,a){s=Bx(s),i.context===null?i.context=s:i.pendingContext=s,i=Ps(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=zs(e,i,t),n!==null&&(Tn(n,e,t),Zo(n,e,t))}function Q_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Em(e,t){Q_(e,t),(e=e.alternate)&&Q_(e,t)}function Hx(e){if(e.tag===13||e.tag===31){var t=Na(e,67108864);t!==null&&Tn(t,e,67108864),Em(e,67108864)}}function $_(e){if(e.tag===13||e.tag===31){var t=Gn();t=Ip(t);var n=Na(e,t);n!==null&&Tn(n,e,t),Em(e,t)}}var wu=!0;function JE(e,t,n,i){var s=Ot.T;Ot.T=null;var a=ae.p;try{ae.p=2,Tm(e,t,n,i)}finally{ae.p=a,Ot.T=s}}function jE(e,t,n,i){var s=Ot.T;Ot.T=null;var a=ae.p;try{ae.p=8,Tm(e,t,n,i)}finally{ae.p=a,Ot.T=s}}function Tm(e,t,n,i){if(wu){var s=Dp(i);if(s===null)Od(e,t,i,Cu,n),ty(e,i);else if($E(s,e,t,n,i))i.stopPropagation();else if(ty(e,i),t&4&&-1<QE.indexOf(e)){for(;s!==null;){var a=Hr(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=ga(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Vn(r);o.entanglements[1]|=l,r&=~l}Li(a),(se&6)===0&&(_u=Fn()+500,Al(0,!1))}}break;case 31:case 13:o=Na(a,2),o!==null&&Tn(o,a,2),Vu(),Em(a,2)}if(a=Dp(i),a===null&&Od(e,t,i,Cu,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Od(e,t,i,null,n)}}function Dp(e){return e=Fp(e),Am(e)}var Cu=null;function Am(e){if(Cu=null,e=hr(e),e!==null){var t=_l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=ry(t),e!==null)return e;e=null}else if(n===31){if(e=oy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Cu=e,null}function Vx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(FM()){case hy:return 2;case fy:return 8;case iu:case HM:return 32;case dy:return 268435456;default:return 32}default:return 32}}var Up=!1,Hs=null,Vs=null,Gs=null,ml=new Map,gl=new Map,Cs=[],QE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ty(e,t){switch(e){case"focusin":case"focusout":Hs=null;break;case"dragenter":case"dragleave":Vs=null;break;case"mouseover":case"mouseout":Gs=null;break;case"pointerover":case"pointerout":ml.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(t.pointerId)}}function zo(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Hr(t),t!==null&&Hx(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function $E(e,t,n,i,s){switch(t){case"focusin":return Hs=zo(Hs,e,t,n,i,s),!0;case"dragenter":return Vs=zo(Vs,e,t,n,i,s),!0;case"mouseover":return Gs=zo(Gs,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return ml.set(a,zo(ml.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,gl.set(a,zo(gl.get(a)||null,e,t,n,i,s)),!0}return!1}function Gx(e){var t=hr(e.target);if(t!==null){var n=_l(t);if(n!==null){if(t=n.tag,t===13){if(t=ry(n),t!==null){e.blockedOn=t,z0(e.priority,function(){$_(n)});return}}else if(t===31){if(t=oy(n),t!==null){e.blockedOn=t,z0(e.priority,function(){$_(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $c(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Kd=i,n.target.dispatchEvent(i),Kd=null}else return t=Hr(n),t!==null&&Hx(t),e.blockedOn=n,!1;t.shift()}return!0}function ey(e,t,n){$c(e)&&n.delete(t)}function tT(){Up=!1,Hs!==null&&$c(Hs)&&(Hs=null),Vs!==null&&$c(Vs)&&(Vs=null),Gs!==null&&$c(Gs)&&(Gs=null),ml.forEach(ey),gl.forEach(ey)}function zc(e,t){e.blockedOn===t&&(e.blockedOn=null,Up||(Up=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,tT)))}var Bc=null;function ny(e){Bc!==e&&(Bc=e,We.unstable_scheduleCallback(We.unstable_NormalPriority,function(){Bc===e&&(Bc=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Am(i||n)===null)continue;break}var a=Hr(n);a!==null&&(e.splice(t,3),t-=3,hp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Br(e){function t(l){return zc(l,e)}Hs!==null&&zc(Hs,e),Vs!==null&&zc(Vs,e),Gs!==null&&zc(Gs,e),ml.forEach(t),gl.forEach(t);for(var n=0;n<Cs.length;n++){var i=Cs[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Cs.length&&(n=Cs[0],n.blockedOn===null);)Gx(n),n.blockedOn===null&&Cs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[An]||null;if(typeof a=="function")r||ny(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[An]||null)o=r.formAction;else if(Am(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),ny(n)}}}function kx(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function wm(e){this._internalRoot=e}Xu.prototype.render=wm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));var n=t.current,i=Gn();Fx(n,i,e,t,null,null)};Xu.prototype.unmount=wm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fx(e.current,2,null,e,null,null),Vu(),t[Fr]=null}};function Xu(e){this._internalRoot=e}Xu.prototype.unstable_scheduleHydration=function(e){if(e){var t=yy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cs.length&&t!==0&&t<Cs[n].priority;n++);Cs.splice(n,0,e),n===0&&Gx(e)}};var iy=sy.version;if(iy!=="19.2.6")throw Error(J(527,iy,"19.2.6"));ae.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=NM(t),e=e!==null?ly(e):null,e=e===null?null:e.stateNode,e};var eT={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:Ot,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Bo.isDisabled&&Bo.supportsFiber))try{yl=Bo.inject(eT),Hn=Bo}catch{}var Bo;Wu.createRoot=function(e,t){if(!ay(e))throw Error(J(299));var n=!1,i="",s=Ov,a=Iv,r=Pv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=zx(e,1,!1,null,null,n,i,null,s,a,r,kx),e[Fr]=t.current,bm(e),new wm(t)};Wu.hydrateRoot=function(e,t,n){if(!ay(e))throw Error(J(299));var i=!1,s="",a=Ov,r=Iv,o=Pv,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=zx(e,1,!0,t,n??null,i,s,l,a,r,o,kx),t.context=Bx(null),n=t.current,i=Gn(),i=Ip(i),s=Ps(i),s.callback=null,zs(n,s,i),n=i,t.current.lanes=n,xl(t,n),Li(t),e[Fr]=t.current,bm(e),new Xu(t)};Wu.version="19.2.6"});var Yx=xs(($R,qx)=>{"use strict";function Wx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wx)}catch(e){console.error(e)}}Wx(),qx.exports=Xx()});var S=pc(er(),1);var Ae=pc(er(),1);var AM=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function gc(e,t="mm"){let n=String(e??"").normalize("NFKC").trim().replace(/[−﹣]/g,"-"),i=n,s=t==="mm"?"(?:mm|\u6BEB\u7C73|\u516C\u91D0)":t==="\xB0"?"(?:\xB0|\u5EA6)":t?AM(t):"";if(s&&(n=n.replace(new RegExp("\\s*"+s+"$","i"),"").trim()),n===""&&i!=="")return{kind:"invalid",message:"\u8ACB\u8F38\u5165\u6578\u5B57\uFF0C\u4E0D\u80FD\u53EA\u6709\u55AE\u4F4D\u3002"};if(/^[-+]?(?:\d{1,3})(?:,\d{3})+(?:\.\d+)?$/.test(n)?n=n.replaceAll(",",""):/^[-+]?\d+,\d+$/.test(n)&&(n=n.replace(",",".")),n===""||/^[+-]?\.?$/.test(n)||/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)[eE][+-]?$/.test(n))return{kind:"pending",message:"\u8ACB\u5B8C\u6210\u6578\u5B57\u8F38\u5165\u3002"};if(!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(n))return{kind:"invalid",message:"\u8ACB\u8F38\u5165\u6578\u5B57\uFF0C\u4F8B\u5982 6.3\uFF1B\u4E5F\u53EF\u8CBC\u4E0A\u5E36\u55AE\u4F4D\u7684\u6578\u503C\u3002"};let a=Number(n);return Number.isFinite(a)?{kind:"valid",value:a,normalized:String(a)}:{kind:"invalid",message:"\u6578\u5B57\u8D85\u51FA\u53EF\u8655\u7406\u7BC4\u570D\u3002"}}function wo(e,t=!1){return Number.isFinite(e)?String(t?Number(e.toFixed(3)):e):""}var Kf=(0,Ae.createContext)({report:()=>{},revision:0});function oe({label:e,name:t,p:n,set:i,unit:s="mm",step:a=.1,min:r,max:o,hint:l,disabled:c=!1}){let{report:u,revision:d}=(0,Ae.useContext)(Kf),f=(0,Ae.useId)(),p=f+"-message",_=(0,Ae.useRef)(!1),[x,m]=(0,Ae.useState)(()=>wo(n[t],c)),[h,g]=(0,Ae.useState)(""),y=()=>{g(""),u(f,null)};(0,Ae.useEffect)(()=>{(!_.current||c)&&(m(wo(n[t],c)),g(""),u(f,null))},[n[t],c]),(0,Ae.useEffect)(()=>{_.current=!1,m(wo(n[t],c)),g(""),u(f,null)},[d]),(0,Ae.useEffect)(()=>()=>u(f,null),[f,u]);let v=A=>{m(A);let U=gc(A,s);U.kind==="valid"?(y(),i(t,U.value)):(g(U.message),u(f,{label:e,message:U.message}))},w=()=>{m(wo(n[t],c)),y()},D=A=>{if(A.key==="Escape")A.preventDefault(),w(),A.currentTarget.blur();else if(A.key==="ArrowUp"||A.key==="ArrowDown"){A.preventDefault();let U=gc(x,s),E=U.kind==="valid"?U.value:n[t];if(!Number.isFinite(E))return;let M=Number((E+(A.key==="ArrowUp"?a:-a)).toFixed(10));Number.isFinite(r)&&(M=Math.max(r,M)),Number.isFinite(o)&&(M=Math.min(o,M)),v(String(M))}};return Ae.default.createElement("label",{className:"field"+(h?" field-error":"")},Ae.default.createElement("span",null,e),Ae.default.createElement("div",{className:"input-wrap"},Ae.default.createElement("input",{"aria-label":e,type:"text",role:"spinbutton",inputMode:a===1?"numeric":"decimal",autoComplete:"off",autoCorrect:"off",spellCheck:!1,disabled:c,"aria-valuenow":Number.isFinite(n[t])?n[t]:void 0,"aria-valuemin":r,"aria-valuemax":o,"aria-invalid":h?!0:void 0,"aria-describedby":h?p:void 0,value:x,onFocus:()=>{_.current=!0},onChange:A=>v(A.target.value),onKeyDown:D,onBlur:()=>{_.current=!1;let A=gc(x,s);A.kind==="valid"&&m(A.normalized)}}),Ae.default.createElement("span",null,s)),h&&Ae.default.createElement("small",{id:p,className:"number-error"},h," ",Ae.default.createElement("button",{type:"button",onMouseDown:A=>A.preventDefault(),onClick:w},"\u5FA9\u539F\u6B64\u6B04")),l&&Ae.default.createElement("small",null,l))}var jS=pc(Yx(),1);function Zx(e,t){let n=e.hub!=="none",i=n||e.body==="spokes"?e.hubDiameter/2:t.root,s=e.boreType==="hex"?t.bore/Math.sqrt(3):t.bore/2;return{labelTarget:n?"frontHub":"frontBody",labelSize:Math.max(.8,Math.min(2.5,(i-s)*.42)),labelX:0,labelY:(i+s)/2,labelRotation:0}}var Oi=pc(er(),1);function Kx(e){return{yaw:e==="iso"?.65:e==="back"?Math.PI:0,pitch:e==="front"?Math.PI/2:e==="back"?-Math.PI/2:.65}}function Jx(e,t){let n=Math.cos(e),i=Math.sin(e),s=Math.cos(t),a=Math.sin(t);return{right:[n,i,0],up:[-i*a,n*a,s],normal:[i*s,-n*s,a]}}function jx({result:e,view:t,cut:n}){let i=(0,Oi.useRef)(),s=(0,Oi.useRef)({yaw:.65,pitch:.65,zoom:1,pointers:new Map}),a=(0,Oi.useRef)(()=>{});(0,Oi.useEffect)(()=>{let c=i.current,u=s.current;u.result=e,u.cut=n;let d=()=>{let p=c.getContext("2d"),_=c.clientWidth,x=c.clientHeight,m=Math.min(devicePixelRatio,2);if(!_||!x||((c.width!==Math.round(_*m)||c.height!==Math.round(x*m))&&(c.width=Math.round(_*m),c.height=Math.round(x*m)),p.setTransform(m,0,0,m,0,0),p.fillStyle="#edf2f2",p.fillRect(0,0,_,x),!u.result))return;let h=u.result,{positions:g,indices:y,stride:v,dimensions:w}=h,{right:D,up:A,normal:U}=Jx(u.yaw,u.pitch),E=Math.min(_/(w.tip*3.2),x/(w.tip*2.9+w.total))*u.zoom,M=(B,W,H)=>[_/2+(B*D[0]+W*D[1])*E,x/2-(B*A[0]+W*A[1]+H*A[2])*E,B*U[0]+W*U[1]+H*U[2]];p.lineWidth=.65,p.strokeStyle="#dbe4e3";let N=Math.max(.5,10**Math.floor(Math.log10(w.tip/3))),F=Math.ceil(w.tip*2/N)*N,k=(w.minZ||0)-w.total/2-.2;for(let B=-F;B<=F;B+=N){let W=M(-F,B,k),H=M(F,B,k),rt=M(B,-F,k),ct=M(B,F,k);p.beginPath(),p.moveTo(W[0],W[1]),p.lineTo(H[0],H[1]),p.moveTo(rt[0],rt[1]),p.lineTo(ct[0],ct[1]),p.stroke()}let q=Array.from({length:g.length/v},(B,W)=>[g[W*v],g[W*v+1],g[W*v+2]-w.total/2]),Y=[];for(let B=0;B<y.length;B+=3){let W=[q[y[B]],q[y[B+1]],q[y[B+2]]];if(u.cut){let vt=[];for(let pt=0;pt<W.length;pt++){let et=W[pt],yt=W[(pt+1)%W.length],C=et[1]<=0,Qt=yt[1]<=0;if(C&&vt.push(et),C!==Qt){let Dt=-et[1]/(yt[1]-et[1]);vt.push(et.map((Ut,xt)=>Ut+(yt[xt]-Ut)*Dt))}}if(W=vt,W.length<3)continue}let H=W[0],rt=W[1],ct=W[2],Q=rt.map((vt,pt)=>vt-H[pt]),It=ct.map((vt,pt)=>vt-H[pt]),te=Q[1]*It[2]-Q[2]*It[1],ie=Q[2]*It[0]-Q[0]*It[2],Kt=Q[0]*It[1]-Q[1]*It[0],K=Math.hypot(te,ie,Kt)||1;if(!u.cut&&te*U[0]+ie*U[1]+Kt*U[2]<=0)continue;let $=.5+.45*Math.max(0,(-.35*te-.45*ie+.82*Kt)/K),mt=W.map(vt=>M(...vt));Y.push({pts:mt,depth:mt.reduce((vt,pt)=>vt+pt[2],0)/mt.length,shade:`rgb(${Math.round(99*$)},${Math.round(144*$)},${Math.round(160*$)})`})}Y.sort((B,W)=>B.depth-W.depth);for(let B of Y){p.beginPath(),p.moveTo(B.pts[0][0],B.pts[0][1]);for(let W=1;W<B.pts.length;W++)p.lineTo(B.pts[W][0],B.pts[W][1]);p.closePath(),p.fillStyle=B.shade,p.fill(),p.strokeStyle=B.shade,p.lineWidth=.4,p.stroke()}};a.current=d,d();let f=new ResizeObserver(d);return f.observe(c),()=>f.disconnect()},[e,n]),(0,Oi.useEffect)(()=>{let c=s.current;Object.assign(c,Kx(t.kind)),c.zoom=1,a.current()},[t]);let r=()=>{let c=[...s.current.pointers.values()];return c.length===2?Math.hypot(c[0].x-c[1].x,c[0].y-c[1].y):0},o=c=>{c.currentTarget.setPointerCapture(c.pointerId),s.current.pointers.set(c.pointerId,{x:c.clientX,y:c.clientY}),s.current.pinch=r()},l=c=>{let u=s.current,d=u.pointers.get(c.pointerId);if(!d)return;let f=c.clientX-d.x,p=c.clientY-d.y;if(u.pointers.set(c.pointerId,{x:c.clientX,y:c.clientY}),u.pointers.size===2){let _=r();u.pinch>0&&(u.zoom=Math.max(.25,Math.min(5,u.zoom*_/u.pinch))),u.pinch=_}else u.yaw-=f*.009,u.pitch=Math.max(-Math.PI/2,Math.min(Math.PI/2,u.pitch+p*.009));a.current()};return(0,Oi.useEffect)(()=>{let c=i.current,u=d=>{d.preventDefault(),s.current.zoom=Math.max(.25,Math.min(5,s.current.zoom*Math.exp(-d.deltaY*.001))),a.current()};return c.addEventListener("wheel",u,{passive:!1}),()=>c.removeEventListener("wheel",u)},[]),Oi.default.createElement("canvas",{ref:i,className:"software-canvas","aria-label":"\u9F52\u8F2A 3D \u6A21\u578B\uFF0C\u76F8\u5BB9\u986F\u793A\uFF0C\u53EF\u62D6\u66F3\u65CB\u8F49\u53CA\u7E2E\u653E",onPointerDown:o,onPointerMove:l,onPointerUp:c=>s.current.pointers.delete(c.pointerId),onPointerCancel:c=>s.current.pointers.delete(c.pointerId)})}var oa={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},la={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sb=0,ag=1,Mb=2;var rg=1,Eb=2,zi=3,ms=0,vn=1,fi=2,_s=0,Fa=1,og=2,lg=3,cg=4,Tb=5,ia=100,Ab=101,wb=102,Cb=103,Rb=104,Db=200,Ub=201,Nb=202,Lb=203,dh=204,ph=205,Ob=206,Ib=207,Pb=208,zb=209,Bb=210,Fb=211,Hb=212,Vb=213,Gb=214,Fh=0,Hh=1,Vh=2,Ha=3,Gh=4,kh=5,Xh=6,Wh=7,ug=0,kb=1,Xb=2,ys=0,Wb=1,qb=2,Yb=3,Zb=4,Kb=5,Jb=6,jb=7;var hg=300,Wa=301,qa=302,qh=303,Yh=304,ac=306,mh=1e3,na=1001,gh=1002,ci=1003,Qb=1004;var rc=1005;var Si=1006,Zh=1007;var ca=1008;var Ti=1009,fg=1010,dg=1011,go=1012,Kh=1013,ua=1014,Bi=1015,_o=1016,Jh=1017,jh=1018,yo=1020,pg=35902,mg=35899,gg=1021,_g=1022,di=1023,ro=1026,vo=1027,yg=1028,Qh=1029,vg=1030,$h=1031;var tf=1033,oc=33776,lc=33777,cc=33778,uc=33779,ef=35840,nf=35841,sf=35842,af=35843,rf=36196,of=37492,lf=37496,cf=37808,uf=37809,hf=37810,ff=37811,df=37812,pf=37813,mf=37814,gf=37815,_f=37816,yf=37817,vf=37818,xf=37819,bf=37820,Sf=37821,Mf=36492,Ef=36494,Tf=36495,Af=36283,wf=36284,Cf=36285,Rf=36286;var Pl=2300,_h=2301,fh=2302,jm=2400,Qm=2401,$m=2402;var $b=3200,tS=3201;var xg=0,eS=1,vs="",yn="srgb",Va="srgb-linear",zl="linear",ue="srgb";var Ba=7680;var tg=519,nS=512,iS=513,sS=514,bg=515,aS=516,rS=517,oS=518,lS=519,eg=35044;var Sg="300 es",bi=2e3,Bl=2001;var Ii=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qx=1234567,Ol=Math.PI/180,oo=180/Math.PI;function xo(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[e&255]+ln[e>>8&255]+ln[e>>16&255]+ln[e>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[n&63|128]+ln[n>>8&255]+"-"+ln[n>>16&255]+ln[n>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function qt(e,t,n){return Math.max(t,Math.min(n,e))}function Mg(e,t){return(e%t+t)%t}function nT(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function iT(e,t,n){return e!==t?(n-e)/(t-e):0}function Il(e,t,n){return(1-n)*e+n*t}function sT(e,t,n,i){return Il(e,t,1-Math.exp(-n*i))}function aT(e,t=1){return t-Math.abs(Mg(e,t*2)-t)}function rT(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function oT(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function lT(e,t){return e+Math.floor(Math.random()*(t-e+1))}function cT(e,t){return e+Math.random()*(t-e)}function uT(e){return e*(.5-Math.random())}function hT(e){e!==void 0&&(Qx=e);let t=Qx+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fT(e){return e*Ol}function dT(e){return e*oo}function pT(e){return(e&e-1)===0&&e!==0}function mT(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function gT(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function _T(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),u=r((t+i)/2),d=a((t-i)/2),f=r((t-i)/2),p=a((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":e.set(o*u,l*d,l*f,o*c);break;case"YZY":e.set(l*f,o*u,l*d,o*c);break;case"ZXZ":e.set(l*d,l*f,o*u,o*c);break;case"XZX":e.set(o*u,l*_,l*p,o*c);break;case"YXY":e.set(l*p,o*u,l*_,o*c);break;case"ZYZ":e.set(l*_,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function so(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function _n(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Eg={DEG2RAD:Ol,RAD2DEG:oo,generateUUID:xo,clamp:qt,euclideanModulo:Mg,mapLinear:nT,inverseLerp:iT,lerp:Il,damp:sT,pingpong:aT,smoothstep:rT,smootherstep:oT,randInt:lT,randFloat:cT,randFloatSpread:uT,seededRandom:hT,degToRad:fT,radToDeg:dT,isPowerOfTwo:pT,ceilPowerOfTwo:mT,floorPowerOfTwo:gT,setQuaternionFromProperEuler:_T,normalize:_n,denormalize:so},zt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=qt(this.x,t.x,n.x),this.y=qt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=qt(this.x,t,n),this.y=qt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ui=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=a[r+0],p=a[r+1],_=a[r+2],x=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=_,t[n+3]=x;return}if(d!==x||l!==f||c!==p||u!==_){let m=1-o,h=l*f+c*p+u*_+d*x,g=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){let w=Math.sqrt(y),D=Math.atan2(w,h*g);m=Math.sin(m*D)/w,o=Math.sin(o*D)/w}let v=o*g;if(l=l*m+f*v,c=c*m+p*v,u=u*m+_*v,d=d*m+x*v,m===1-o){let w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=a[r],f=a[r+1],p=a[r+2],_=a[r+3];return t[n]=o*_+u*d+l*p-c*f,t[n+1]=l*_+u*f+c*d-o*p,t[n+2]=c*_+u*p+o*f-l*d,t[n+3]=u*_-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(a/2),f=l(i/2),p=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-s*o,this._w=r*u-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion($x.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion($x.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),u=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*u,this.y=i+l*u+o*c-a*d,this.z=s+l*d+a*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=qt(this.x,t.x,n.x),this.y=qt(this.y,t.y,n.y),this.z=qt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=qt(this.x,t,n),this.y=qt(this.y,t,n),this.z=qt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Cm.copy(this).projectOnVector(t),this.sub(Cm)}reflect(t){return this.sub(Cm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cm=new P,$x=new ui,Vt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],x=s[0],m=s[3],h=s[6],g=s[1],y=s[4],v=s[7],w=s[2],D=s[5],A=s[8];return a[0]=r*x+o*g+l*w,a[3]=r*m+o*y+l*D,a[6]=r*h+o*v+l*A,a[1]=c*x+u*g+d*w,a[4]=c*m+u*y+d*D,a[7]=c*h+u*v+d*A,a[2]=f*x+p*g+_*w,a[5]=f*m+p*y+_*D,a[8]=f*h+p*v+_*A,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*r*u-n*o*c-i*a*u+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*r-o*c,f=o*l-u*a,p=c*a-r*l,_=n*d+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return t[0]=d*x,t[1]=(s*c-u*i)*x,t[2]=(o*i-s*r)*x,t[3]=f*x,t[4]=(u*n-s*l)*x,t[5]=(s*a-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*a)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Rm.makeScale(t,n)),this}rotate(t){return this.premultiply(Rm.makeRotation(-t)),this}translate(t,n){return this.premultiply(Rm.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Rm=new Vt;function Tg(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Fl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function cS(){let e=Fl("canvas");return e.style.display="block",e}var tb={};function lo(e){e in tb||(tb[e]=!0,console.warn(e))}function uS(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var eb=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nb=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yT(){let e={enabled:!0,workingColorSpace:Va,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ue&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ue&&(s.r=ao(s.r),s.g=ao(s.g),s.b=ao(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vs?zl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return lo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return lo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Va]:{primaries:t,whitePoint:i,transfer:zl,toXYZ:eb,fromXYZ:nb,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:t,whitePoint:i,transfer:ue,toXYZ:eb,fromXYZ:nb,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),e}var ee=yT();function ps(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ao(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var qr,yh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{qr===void 0&&(qr=Fl("canvas")),qr.width=t.width,qr.height=t.height;let s=qr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=qr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Fl("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ps(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ps(n[i]/255)*255):n[i]=ps(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vT=0,co=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vT++}),this.uuid=xo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Dm(s[r].image)):a.push(Dm(s[r]))}else a=Dm(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Dm(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?yh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xT=0,Um=new P,Yn=class e extends Ii{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=na,s=na,a=Si,r=ca,o=di,l=Ti,c=e.DEFAULT_ANISOTROPY,u=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=xo(),this.name="",this.source=new co(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Um).x}get height(){return this.source.getSize(Um).y}get depth(){return this.source.getSize(Um).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mh:t.x=t.x-Math.floor(t.x);break;case na:t.x=t.x<0?0:1;break;case gh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mh:t.y=t.y-Math.floor(t.y);break;case na:t.y=t.y<0?0:1;break;case gh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=hg;Yn.DEFAULT_ANISOTROPY=1;var Ue=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,v=(p+1)/2,w=(h+1)/2,D=(u+f)/4,A=(d+x)/4,U=(_+m)/4;return y>v&&y>w?y<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(y),s=D/i,a=A/i):v>w?v<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),i=D/s,a=U/s):w<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(w),i=A/a,s=U/a),this.set(i,s,a,n),this}let g=Math.sqrt((m-_)*(m-_)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(d-x)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=qt(this.x,t.x,n.x),this.y=qt(this.y,t.y,n.y),this.z=qt(this.z,t.z,n.z),this.w=qt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=qt(this.x,t,n),this.y=qt(this.y,t,n),this.z=qt(this.z,t,n),this.w=qt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vh=class extends Ii{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ue(0,0,t,n),this.scissorTest=!1,this.viewport=new Ue(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new Yn(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:Si,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new co(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pi=class extends vh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Hl=class extends Yn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=ci,this.minFilter=ci,this.wrapR=na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var xh=class extends Yn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=ci,this.minFilter=ci,this.wrapR=na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sa=class{constructor(t=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(yi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(yi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=yi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,yi):yi.fromBufferAttribute(a,r),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qu.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qu.copy(i.boundingBox)),qu.applyMatrix4(t.matrixWorld),this.union(qu)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rl),Yu.subVectors(this.max,Rl),Yr.subVectors(t.a,Rl),Zr.subVectors(t.b,Rl),Kr.subVectors(t.c,Rl),Ks.subVectors(Zr,Yr),Js.subVectors(Kr,Zr),Oa.subVectors(Yr,Kr);let n=[0,-Ks.z,Ks.y,0,-Js.z,Js.y,0,-Oa.z,Oa.y,Ks.z,0,-Ks.x,Js.z,0,-Js.x,Oa.z,0,-Oa.x,-Ks.y,Ks.x,0,-Js.y,Js.x,0,-Oa.y,Oa.x,0];return!Nm(n,Yr,Zr,Kr,Yu)||(n=[1,0,0,0,1,0,0,0,1],!Nm(n,Yr,Zr,Kr,Yu))?!1:(Zu.crossVectors(Ks,Js),n=[Zu.x,Zu.y,Zu.z],Nm(n,Yr,Zr,Kr,Yu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ls),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ls=[new P,new P,new P,new P,new P,new P,new P,new P],yi=new P,qu=new sa,Yr=new P,Zr=new P,Kr=new P,Ks=new P,Js=new P,Oa=new P,Rl=new P,Yu=new P,Zu=new P,Ia=new P;function Nm(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Ia.fromArray(e,a);let o=s.x*Math.abs(Ia.x)+s.y*Math.abs(Ia.y)+s.z*Math.abs(Ia.z),l=t.dot(Ia),c=n.dot(Ia),u=i.dot(Ia);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var bT=new sa,Dl=new P,Lm=new P,Ga=class{constructor(t=new P,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):bT.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dl.subVectors(t,this.center);let n=Dl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Dl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dl.copy(t.center).add(Lm)),this.expandByPoint(Dl.copy(t.center).sub(Lm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},cs=new P,Om=new P,Ku=new P,js=new P,Im=new P,Ju=new P,Pm=new P,ka=class{constructor(t=new P,n=new P(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=cs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(cs.copy(this.origin).addScaledVector(this.direction,n),cs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Om.copy(t).add(n).multiplyScalar(.5),Ku.copy(n).sub(t).normalize(),js.copy(this.origin).sub(Om);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Ku),o=js.dot(this.direction),l=-js.dot(Ku),c=js.lengthSq(),u=Math.abs(1-r*r),d,f,p,_;if(u>0)if(d=r*l-o,f=r*o-l,_=a*u,d>=0)if(f>=-_)if(f<=_){let x=1/u;d*=x,f*=x,p=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Om).addScaledVector(Ku,f),p}intersectSphere(t,n){cs.subVectors(t.center,this.origin);let i=cs.dot(this.direction),s=cs.dot(cs)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(a=(t.min.y-f.y)*u,r=(t.max.y-f.y)*u):(a=(t.max.y-f.y)*u,r=(t.min.y-f.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,cs)!==null}intersectTriangle(t,n,i,s,a){Im.subVectors(n,t),Ju.subVectors(i,t),Pm.crossVectors(Im,Ju);let r=this.direction.dot(Pm),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;js.subVectors(this.origin,t);let l=o*this.direction.dot(Ju.crossVectors(js,Ju));if(l<0)return null;let c=o*this.direction.dot(Im.cross(js));if(c<0||l+c>r)return null;let u=-o*js.dot(Pm);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class e{constructor(t,n,i,s,a,r,o,l,c,u,d,f,p,_,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,u,d,f,p,_,x,m)}set(t,n,i,s,a,r,o,l,c,u,d,f,p,_,x,m){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/Jr.setFromMatrixColumn(t,0).length(),a=1/Jr.setFromMatrixColumn(t,1).length(),r=1/Jr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let f=r*u,p=r*d,_=o*u,x=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=_+p*c,n[10]=r*l}else if(t.order==="YXZ"){let f=l*u,p=l*d,_=c*u,x=c*d;n[0]=f+x*o,n[4]=_*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*u,n[9]=-o,n[2]=p*o-_,n[6]=x+f*o,n[10]=r*l}else if(t.order==="ZXY"){let f=l*u,p=l*d,_=c*u,x=c*d;n[0]=f-x*o,n[4]=-r*d,n[8]=_+p*o,n[1]=p+_*o,n[5]=r*u,n[9]=x-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let f=r*u,p=r*d,_=o*u,x=o*d;n[0]=l*u,n[4]=_*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let f=r*l,p=r*c,_=o*l,x=o*c;n[0]=l*u,n[4]=x-f*d,n[8]=_*d+p,n[1]=d,n[5]=r*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+_,n[10]=f-x*d}else if(t.order==="XZY"){let f=r*l,p=r*c,_=o*l,x=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+x,n[5]=r*u,n[9]=p*d-_,n[2]=_*d-p,n[6]=o*u,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ST,t,MT)}lookAt(t,n,i){let s=this.elements;return Wn.subVectors(t,n),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Qs.crossVectors(i,Wn),Qs.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Qs.crossVectors(i,Wn)),Qs.normalize(),ju.crossVectors(Wn,Qs),s[0]=Qs.x,s[4]=ju.x,s[8]=Wn.x,s[1]=Qs.y,s[5]=ju.y,s[9]=Wn.y,s[2]=Qs.z,s[6]=ju.z,s[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],x=i[6],m=i[10],h=i[14],g=i[3],y=i[7],v=i[11],w=i[15],D=s[0],A=s[4],U=s[8],E=s[12],M=s[1],N=s[5],F=s[9],k=s[13],q=s[2],Y=s[6],B=s[10],W=s[14],H=s[3],rt=s[7],ct=s[11],Q=s[15];return a[0]=r*D+o*M+l*q+c*H,a[4]=r*A+o*N+l*Y+c*rt,a[8]=r*U+o*F+l*B+c*ct,a[12]=r*E+o*k+l*W+c*Q,a[1]=u*D+d*M+f*q+p*H,a[5]=u*A+d*N+f*Y+p*rt,a[9]=u*U+d*F+f*B+p*ct,a[13]=u*E+d*k+f*W+p*Q,a[2]=_*D+x*M+m*q+h*H,a[6]=_*A+x*N+m*Y+h*rt,a[10]=_*U+x*F+m*B+h*ct,a[14]=_*E+x*k+m*W+h*Q,a[3]=g*D+y*M+v*q+w*H,a[7]=g*A+y*N+v*Y+w*rt,a[11]=g*U+y*F+v*B+w*ct,a[15]=g*E+y*k+v*W+w*Q,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],p=t[14],_=t[3],x=t[7],m=t[11],h=t[15];return _*(+a*l*d-s*c*d-a*o*f+i*c*f+s*o*p-i*l*p)+x*(+n*l*p-n*c*f+a*r*f-s*r*p+s*c*u-a*l*u)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*u-i*c*u)+h*(-s*o*u-n*l*d+n*o*f+s*r*d-i*r*f+i*l*u)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],p=t[11],_=t[12],x=t[13],m=t[14],h=t[15],g=d*m*c-x*f*c+x*l*p-o*m*p-d*l*h+o*f*h,y=_*f*c-u*m*c-_*l*p+r*m*p+u*l*h-r*f*h,v=u*x*c-_*d*c+_*o*p-r*x*p-u*o*h+r*d*h,w=_*d*l-u*x*l-_*o*f+r*x*f+u*o*m-r*d*m,D=n*g+i*y+s*v+a*w;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/D;return t[0]=g*A,t[1]=(x*f*a-d*m*a-x*s*p+i*m*p+d*s*h-i*f*h)*A,t[2]=(o*m*a-x*l*a+x*s*c-i*m*c-o*s*h+i*l*h)*A,t[3]=(d*l*a-o*f*a-d*s*c+i*f*c+o*s*p-i*l*p)*A,t[4]=y*A,t[5]=(u*m*a-_*f*a+_*s*p-n*m*p-u*s*h+n*f*h)*A,t[6]=(_*l*a-r*m*a-_*s*c+n*m*c+r*s*h-n*l*h)*A,t[7]=(r*f*a-u*l*a+u*s*c-n*f*c-r*s*p+n*l*p)*A,t[8]=v*A,t[9]=(_*d*a-u*x*a-_*i*p+n*x*p+u*i*h-n*d*h)*A,t[10]=(r*x*a-_*o*a+_*i*c-n*x*c-r*i*h+n*o*h)*A,t[11]=(u*o*a-r*d*a-u*i*c+n*d*c+r*i*p-n*o*p)*A,t[12]=w*A,t[13]=(u*x*s-_*d*s+_*i*f-n*x*f-u*i*m+n*d*m)*A,t[14]=(_*o*s-r*x*s-_*i*l+n*x*l+r*i*m-n*o*m)*A,t[15]=(r*d*s-u*o*s+u*i*l-n*d*l-r*i*f+n*o*f)*A,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,u=r+r,d=o+o,f=a*c,p=a*u,_=a*d,x=r*u,m=r*d,h=o*d,g=l*c,y=l*u,v=l*d,w=i.x,D=i.y,A=i.z;return s[0]=(1-(x+h))*w,s[1]=(p+v)*w,s[2]=(_-y)*w,s[3]=0,s[4]=(p-v)*D,s[5]=(1-(f+h))*D,s[6]=(m+g)*D,s[7]=0,s[8]=(_+y)*A,s[9]=(m-g)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=Jr.set(s[0],s[1],s[2]).length(),r=Jr.set(s[4],s[5],s[6]).length(),o=Jr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],vi.copy(this);let c=1/a,u=1/r,d=1/o;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=u,vi.elements[5]*=u,vi.elements[6]*=u,vi.elements[8]*=d,vi.elements[9]*=d,vi.elements[10]*=d,n.setFromRotationMatrix(vi),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=bi,l=!1){let c=this.elements,u=2*a/(n-t),d=2*a/(i-s),f=(n+t)/(n-t),p=(i+s)/(i-s),_,x;if(l)_=a/(r-a),x=r*a/(r-a);else if(o===bi)_=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Bl)_=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=bi,l=!1){let c=this.elements,u=2/(n-t),d=2/(i-s),f=-(n+t)/(n-t),p=-(i+s)/(i-s),_,x;if(l)_=1/(r-a),x=r/(r-a);else if(o===bi)_=-2/(r-a),x=-(r+a)/(r-a);else if(o===Bl)_=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Jr=new P,vi=new Ie,ST=new P(0,0,0),MT=new P(1,1,1),Qs=new P,ju=new P,Wn=new P,ib=new Ie,sb=new ui,Mi=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return ib.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ib,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return sb.setFromEuler(this),this.setFromQuaternion(sb,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var Vl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ET=0,ab=new P,jr=new ui,us=new Ie,Qu=new P,Ul=new P,TT=new P,AT=new ui,rb=new P(1,0,0),ob=new P(0,1,0),lb=new P(0,0,1),cb={type:"added"},wT={type:"removed"},Qr={type:"childadded",child:null},zm={type:"childremoved",child:null},rn=class e extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new P,n=new Mi,i=new ui,s=new P(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Vt}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return jr.setFromAxisAngle(t,n),this.quaternion.multiply(jr),this}rotateOnWorldAxis(t,n){return jr.setFromAxisAngle(t,n),this.quaternion.premultiply(jr),this}rotateX(t){return this.rotateOnAxis(rb,t)}rotateY(t){return this.rotateOnAxis(ob,t)}rotateZ(t){return this.rotateOnAxis(lb,t)}translateOnAxis(t,n){return ab.copy(t).applyQuaternion(this.quaternion),this.position.add(ab.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(rb,t)}translateY(t){return this.translateOnAxis(ob,t)}translateZ(t){return this.translateOnAxis(lb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(us.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Qu.copy(t):Qu.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?us.lookAt(Ul,Qu,this.up):us.lookAt(Qu,Ul,this.up),this.quaternion.setFromRotationMatrix(us),s&&(us.extractRotation(s.matrixWorld),jr.setFromRotationMatrix(us),this.quaternion.premultiply(jr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cb),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(wT),zm.child=t,this.dispatchEvent(zm),zm.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),us.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),us.multiply(t.parent.matrixWorld)),t.applyMatrix4(us),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cb),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,t,TT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,AT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),d=r(t.shapes),f=r(t.skeletons),p=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};rn.DEFAULT_UP=new P(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=new P,hs=new P,Bm=new P,fs=new P,$r=new P,to=new P,ub=new P,Fm=new P,Hm=new P,Vm=new P,Gm=new Ue,km=new Ue,Xm=new Ue,ea=class e{constructor(t=new P,n=new P,i=new P){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),xi.subVectors(t,n),s.cross(xi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){xi.subVectors(s,n),hs.subVectors(i,n),Bm.subVectors(t,n);let r=xi.dot(xi),o=xi.dot(hs),l=xi.dot(Bm),c=hs.dot(hs),u=hs.dot(Bm),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let f=1/d,p=(c*l-o*u)*f,_=(r*u-o*l)*f;return a.set(1-p-_,_,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,fs)===null?!1:fs.x>=0&&fs.y>=0&&fs.x+fs.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,fs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,fs.x),l.addScaledVector(r,fs.y),l.addScaledVector(o,fs.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Gm.setScalar(0),km.setScalar(0),Xm.setScalar(0),Gm.fromBufferAttribute(t,n),km.fromBufferAttribute(t,i),Xm.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Gm,a.x),r.addScaledVector(km,a.y),r.addScaledVector(Xm,a.z),r}static isFrontFacing(t,n,i,s){return xi.subVectors(i,n),hs.subVectors(t,n),xi.cross(hs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),hs.subVectors(this.a,this.b),xi.cross(hs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;$r.subVectors(s,i),to.subVectors(a,i),Fm.subVectors(t,i);let l=$r.dot(Fm),c=to.dot(Fm);if(l<=0&&c<=0)return n.copy(i);Hm.subVectors(t,s);let u=$r.dot(Hm),d=to.dot(Hm);if(u>=0&&d<=u)return n.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return r=l/(l-u),n.copy(i).addScaledVector($r,r);Vm.subVectors(t,a);let p=$r.dot(Vm),_=to.dot(Vm);if(_>=0&&p<=_)return n.copy(a);let x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(to,o);let m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return ub.subVectors(a,s),o=(d-u)/(d-u+(p-_)),n.copy(s).addScaledVector(ub,o);let h=1/(m+x+f);return r=x*h,o=f*h,n.copy(i).addScaledVector($r,r).addScaledVector(to,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$s={h:0,s:0,l:0},$u={h:0,s:0,l:0};function Wm(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Xt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=ee.workingColorSpace){return this.r=t,this.g=n,this.b=i,ee.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=ee.workingColorSpace){if(t=Mg(t,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Wm(r,a,t+1/3),this.g=Wm(r,a,t),this.b=Wm(r,a,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,n=yn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=yn){let i=hS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}copyLinearToSRGB(t){return this.r=ao(t.r),this.g=ao(t.g),this.b=ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yn){return ee.workingToColorSpace(cn.copy(this),t),Math.round(qt(cn.r*255,0,255))*65536+Math.round(qt(cn.g*255,0,255))*256+Math.round(qt(cn.b*255,0,255))}getHexString(t=yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ee.workingColorSpace){ee.workingToColorSpace(cn.copy(this),n);let i=cn.r,s=cn.g,a=cn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=u<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=ee.workingColorSpace){return ee.workingToColorSpace(cn.copy(this),n),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=yn){ee.workingToColorSpace(cn.copy(this),t);let n=cn.r,i=cn.g,s=cn.b;return t!==yn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL($s),this.setHSL($s.h+t,$s.s+n,$s.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL($s),t.getHSL($u);let i=Il($s.h,$u.h,n),s=Il($s.s,$u.s,n),a=Il($s.l,$u.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Xt;Xt.NAMES=hS;var CT=0,gs=class extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=Fa,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=ph,this.blendEquation=ia,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ba,this.stencilZFail=Ba,this.stencilZPass=Ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fa&&(i.blending=this.blending),this.side!==ms&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dh&&(i.blendSrc=this.blendSrc),this.blendDst!==ph&&(i.blendDst=this.blendDst),this.blendEquation!==ia&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ha&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ba&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ba&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ba&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Gl=class extends gs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ke=new P,th=new zt,RT=0,hn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=eg,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)th.fromBufferAttribute(this,n),th.applyMatrix3(t),this.setXY(n,th.x,th.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyMatrix3(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyMatrix4(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyNormalMatrix(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.transformDirection(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=so(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=_n(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=so(n,this.array)),n}setX(t,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=so(n,this.array)),n}setY(t,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=so(n,this.array)),n}setZ(t,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=so(n,this.array)),n}setW(t,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),s=_n(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),s=_n(s,this.array),a=_n(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==eg&&(t.usage=this.usage),t}};var kl=class extends hn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Xl=class extends hn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Rn=class extends hn{constructor(t,n,i){super(new Float32Array(t),n,i)}},DT=0,li=new Ie,qm=new rn,eo=new P,qn=new sa,Nl=new sa,$e=new P,hi=class e extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tg(t)?Xl:kl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Vt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,n,i){return li.makeTranslation(t,n,i),this.applyMatrix4(li),this}scale(t,n,i){return li.makeScale(t,n,i),this.applyMatrix4(li),this}lookAt(t){return qm.lookAt(t),qm.updateMatrix(),this.applyMatrix4(qm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Rn(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];qn.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ga);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Nl.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(qn.min,Nl.min),qn.expandByPoint($e),$e.addVectors(qn.max,Nl.max),qn.expandByPoint($e)):(qn.expandByPoint(Nl.min),qn.expandByPoint(Nl.max))}qn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)$e.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared($e));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)$e.fromBufferAttribute(o,c),l&&(eo.fromBufferAttribute(t,c),$e.add(eo)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new P,l[U]=new P;let c=new P,u=new P,d=new P,f=new zt,p=new zt,_=new zt,x=new P,m=new P;function h(U,E,M){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),f.fromBufferAttribute(a,U),p.fromBufferAttribute(a,E),_.fromBufferAttribute(a,M),u.sub(c),d.sub(c),p.sub(f),_.sub(f);let N=1/(p.x*_.y-_.x*p.y);isFinite(N)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(N),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(N),o[U].add(x),o[E].add(x),o[M].add(x),l[U].add(m),l[E].add(m),l[M].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let U=0,E=g.length;U<E;++U){let M=g[U],N=M.start,F=M.count;for(let k=N,q=N+F;k<q;k+=3)h(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let y=new P,v=new P,w=new P,D=new P;function A(U){w.fromBufferAttribute(s,U),D.copy(w);let E=o[U];y.copy(E),y.sub(w.multiplyScalar(w.dot(E))).normalize(),v.crossVectors(D,E);let N=v.dot(l[U])<0?-1:1;r.setXYZW(U,y.x,y.y,y.z,N)}for(let U=0,E=g.length;U<E;++U){let M=g[U],N=M.start,F=M.count;for(let k=N,q=N+F;k<q;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new P,a=new P,r=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)s.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)$e.fromBufferAttribute(t,n),$e.normalize(),t.setXYZ(n,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new hn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let a=t.morphAttributes;for(let c in a){let u=[],d=a[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,u=r.length;c<u;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hb=new Ie,Pa=new ka,eh=new Ga,fb=new P,nh=new P,ih=new P,sh=new P,Ym=new P,ah=new P,db=new P,rh=new P,Dn=class extends rn{constructor(t=new hi,n=new Gl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){ah.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let u=o[l],d=a[l];u!==0&&(Ym.fromBufferAttribute(d,t),r?ah.addScaledVector(Ym,u):ah.addScaledVector(Ym.sub(n),u))}n.add(ah)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eh.copy(i.boundingSphere),eh.applyMatrix4(a),Pa.copy(t.ray).recast(t.near),!(eh.containsPoint(Pa.origin)===!1&&(Pa.intersectSphere(eh,fb)===null||Pa.origin.distanceToSquared(fb)>(t.far-t.near)**2))&&(hb.copy(a).invert(),Pa.copy(t.ray).applyMatrix4(hb),!(i.boundingBox!==null&&Pa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Pa)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,x=f.length;_<x;_++){let m=f[_],h=r[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,w=y;v<w;v+=3){let D=o.getX(v),A=o.getX(v+1),U=o.getX(v+2);s=oh(this,h,t,i,c,u,d,D,A,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){let g=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);s=oh(this,r,t,i,c,u,d,g,y,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,x=f.length;_<x;_++){let m=f[_],h=r[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,w=y;v<w;v+=3){let D=v,A=v+1,U=v+2;s=oh(this,h,t,i,c,u,d,D,A,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){let g=m,y=m+1,v=m+2;s=oh(this,r,t,i,c,u,d,g,y,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function UT(e,t,n,i,s,a,r,o){let l;if(t.side===vn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===ms,o),l===null)return null;rh.copy(o),rh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(rh);return c<n.near||c>n.far?null:{distance:c,point:rh.clone(),object:e}}function oh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,nh),e.getVertexPosition(l,ih),e.getVertexPosition(c,sh);let u=UT(e,t,n,i,nh,ih,sh,db);if(u){let d=new P;ea.getBarycoord(db,nh,ih,sh,d),s&&(u.uv=ea.getInterpolatedAttribute(s,o,l,c,d,new zt)),a&&(u.uv1=ea.getInterpolatedAttribute(a,o,l,c,d,new zt)),r&&(u.normal=ea.getInterpolatedAttribute(r,o,l,c,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new P,materialIndex:0};ea.getNormal(nh,ih,sh,f.normal),u.face=f,u.barycoord=d}return u}var uo=class e extends hi{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],u=[],d=[],f=0,p=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(u,3)),this.setAttribute("uv",new Rn(d,2));function _(x,m,h,g,y,v,w,D,A,U,E){let M=v/A,N=w/U,F=v/2,k=w/2,q=D/2,Y=A+1,B=U+1,W=0,H=0,rt=new P;for(let ct=0;ct<B;ct++){let Q=ct*N-k;for(let It=0;It<Y;It++){let te=It*M-F;rt[x]=te*g,rt[m]=Q*y,rt[h]=q,c.push(rt.x,rt.y,rt.z),rt[x]=0,rt[m]=0,rt[h]=D>0?1:-1,u.push(rt.x,rt.y,rt.z),d.push(It/A),d.push(1-ct/U),W+=1}}for(let ct=0;ct<U;ct++)for(let Q=0;Q<A;Q++){let It=f+Q+Y*ct,te=f+Q+Y*(ct+1),ie=f+(Q+1)+Y*(ct+1),Kt=f+(Q+1)+Y*ct;l.push(It,te,Kt),l.push(te,ie,Kt),H+=6}o.addGroup(p,H,E),p+=H,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ya(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function fn(e){let t={};for(let n=0;n<e.length;n++){let i=Ya(e[n]);for(let s in i)t[s]=i[s]}return t}function NT(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ag(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var fS={clone:Ya,merge:fn},LT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ei=class extends gs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LT,this.fragmentShader=OT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ya(t.uniforms),this.uniformsGroups=NT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Wl=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ta=new P,pb=new zt,mb=new zt,un=class extends Wl{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=oo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ta.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ta.x,ta.y).multiplyScalar(-t/ta.z),ta.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ta.x,ta.y).multiplyScalar(-t/ta.z)}getViewSize(t,n){return this.getViewBounds(t,pb,mb),n.subVectors(mb,pb)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Ol*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},no=-90,io=1,bh=class extends rn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(no,io,t,n);s.layers=this.layers,this.add(s);let a=new un(no,io,t,n);a.layers=this.layers,this.add(a);let r=new un(no,io,t,n);r.layers=this.layers,this.add(r);let o=new un(no,io,t,n);o.layers=this.layers,this.add(o);let l=new un(no,io,t,n);l.layers=this.layers,this.add(l);let c=new un(no,io,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(n,u),t.setRenderTarget(d,f,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},ql=class extends Yn{constructor(t=[],n=Wa,i,s,a,r,o,l,c,u){super(t,n,i,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sh=class extends Pi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ql(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new uo(5,5,5),a=new Ei({name:"CubemapFromEquirect",uniforms:Ya(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:_s});a.uniforms.tEquirect.value=n;let r=new Dn(s,a),o=n.minFilter;return n.minFilter===ca&&(n.minFilter=Si),new bh(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},ds=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},IT={type:"move"},ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(IT)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new ds;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var Yl=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var Zm=new P,PT=new P,zT=new Vt,Cn=class{constructor(t=new P(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Zm.subVectors(i,n).cross(PT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(Zm),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||zT.getNormalMatrix(t),s=this.coplanarPoint(Zm).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},za=new Ga,BT=new zt(.5,.5),lh=new P,fo=class{constructor(t=new Cn,n=new Cn,i=new Cn,s=new Cn,a=new Cn,r=new Cn){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=bi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],u=a[4],d=a[5],f=a[6],p=a[7],_=a[8],x=a[9],m=a[10],h=a[11],g=a[12],y=a[13],v=a[14],w=a[15];if(s[0].setComponents(c-r,p-u,h-_,w-g).normalize(),s[1].setComponents(c+r,p+u,h+_,w+g).normalize(),s[2].setComponents(c+o,p+d,h+x,w+y).normalize(),s[3].setComponents(c-o,p-d,h-x,w-y).normalize(),i)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,p-f,h-m,w-v).normalize();else if(s[4].setComponents(c-l,p-f,h-m,w-v).normalize(),n===bi)s[5].setComponents(c+l,p+f,h+m,w+v).normalize();else if(n===Bl)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),za.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(za)}intersectsSprite(t){za.center.set(0,0,0);let n=BT.distanceTo(t.center);return za.radius=.7071067811865476+n,za.applyMatrix4(t.matrixWorld),this.intersectsSphere(za)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(lh.x=s.normal.x>0?t.max.x:t.min.x,lh.y=s.normal.y>0?t.max.y:t.min.y,lh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Zl=class extends gs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Mh=new P,Eh=new P,gb=new Ie,Ll=new ka,ch=new Ga,Km=new P,_b=new P,Th=class extends rn{constructor(t=new hi,n=new Zl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[0];for(let s=1,a=n.count;s<a;s++)Mh.fromBufferAttribute(n,s-1),Eh.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Mh.distanceTo(Eh);t.setAttribute("lineDistance",new Rn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ch.copy(i.boundingSphere),ch.applyMatrix4(s),ch.radius+=a,t.ray.intersectsSphere(ch)===!1)return;gb.copy(s).invert(),Ll.copy(t.ray).applyMatrix4(gb);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let p=Math.max(0,r.start),_=Math.min(u.count,r.start+r.count);for(let x=p,m=_-1;x<m;x+=c){let h=u.getX(x),g=u.getX(x+1),y=uh(this,t,Ll,l,h,g,x);y&&n.push(y)}if(this.isLineLoop){let x=u.getX(_-1),m=u.getX(p),h=uh(this,t,Ll,l,x,m,_-1);h&&n.push(h)}}else{let p=Math.max(0,r.start),_=Math.min(f.count,r.start+r.count);for(let x=p,m=_-1;x<m;x+=c){let h=uh(this,t,Ll,l,x,x+1,x);h&&n.push(h)}if(this.isLineLoop){let x=uh(this,t,Ll,l,_-1,p,_-1);x&&n.push(x)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function uh(e,t,n,i,s,a,r){let o=e.geometry.attributes.position;if(Mh.fromBufferAttribute(o,s),Eh.fromBufferAttribute(o,a),n.distanceSqToSegment(Mh,Eh,Km,_b)>i)return;Km.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Km);if(!(c<t.near||c>t.far))return{distance:c,point:_b.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}var yb=new P,vb=new P,Ah=class extends Th{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[];for(let s=0,a=n.count;s<a;s+=2)yb.fromBufferAttribute(n,s),vb.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+yb.distanceTo(vb);t.setAttribute("lineDistance",new Rn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Kl=class extends Yn{constructor(t,n,i=ua,s,a,r,o=ci,l=ci,c,u=ro,d=1){if(u!==ro&&u!==vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:n,depth:d};super(f,s,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new co(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Jl=class extends Yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var jl=class e extends hi{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,f=n/l,p=[],_=[],x=[],m=[];for(let h=0;h<u;h++){let g=h*f-r;for(let y=0;y<c;y++){let v=y*d-a;_.push(v,-g,0),x.push(0,0,1),m.push(y/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<o;g++){let y=g+c*h,v=g+c*(h+1),w=g+1+c*(h+1),D=g+1+c*h;p.push(y,v,D),p.push(v,w,D)}this.setIndex(p),this.setAttribute("position",new Rn(_,3)),this.setAttribute("normal",new Rn(x,3)),this.setAttribute("uv",new Rn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ql=class extends gs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xg,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var wh=class extends gs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$b,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ch=class extends gs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function hh(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function FT(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Xa=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rh=class extends Xa{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jm,endingEnd:jm}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Qm:a=t,o=2*n-i;break;case $m:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Qm:r=t,l=2*i-n;break;case $m:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(i-n)/(s-n),x=_*_,m=x*_,h=-f*m+2*f*x-f*_,g=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*_+1,y=(-1-p)*m+(1.5+p)*x+.5*_,v=p*m-p*x;for(let w=0;w!==o;++w)a[w]=h*r[u+w]+g*r[c+w]+y*r[l+w]+v*r[d+w];return a}},Dh=class extends Xa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-n)/(s-n),d=1-u;for(let f=0;f!==o;++f)a[f]=r[c+f]*d+r[l+f]*u;return a}},Uh=class extends Xa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zn=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=hh(n,this.TimeBufferType),this.values=hh(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:hh(t.times,Array),values:hh(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Uh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Rh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Pl:n=this.InterpolantFactoryMethodDiscrete;break;case _h:n=this.InterpolantFactoryMethodLinear;break;case fh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pl;case this.InterpolantFactoryMethodLinear:return _h;case this.InterpolantFactoryMethodSmooth:return fh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&FT(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===fh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,f=d-i,p=d+i;for(let _=0;_!==i;++_){let x=n[d+_];if(x!==n[f+_]||x!==n[p+_]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,f=r*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=_h;var aa=class extends Zn{constructor(t,n,i){super(t,n,i)}};aa.prototype.ValueTypeName="bool";aa.prototype.ValueBufferType=Array;aa.prototype.DefaultInterpolation=Pl;aa.prototype.InterpolantFactoryMethodLinear=void 0;aa.prototype.InterpolantFactoryMethodSmooth=void 0;var Nh=class extends Zn{constructor(t,n,i,s){super(t,n,i,s)}};Nh.prototype.ValueTypeName="color";var Lh=class extends Zn{constructor(t,n,i,s){super(t,n,i,s)}};Lh.prototype.ValueTypeName="number";var Oh=class extends Xa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let u=c+o;c!==u;c+=4)ui.slerpFlat(a,0,r,c-o,r,c,l);return a}},$l=class extends Zn{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Oh(this.times,this.values,this.getValueSize(),t)}};$l.prototype.ValueTypeName="quaternion";$l.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends Zn{constructor(t,n,i){super(t,n,i)}};ra.prototype.ValueTypeName="string";ra.prototype.ValueBufferType=Array;ra.prototype.DefaultInterpolation=Pl;ra.prototype.InterpolantFactoryMethodLinear=void 0;ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Ih=class extends Zn{constructor(t,n,i,s){super(t,n,i,s)}};Ih.prototype.ValueTypeName="vector";var Ph=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},dS=new Ph,zh=class{constructor(t){this.manager=t!==void 0?t:dS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};zh.DEFAULT_MATERIAL_NAME="__DEFAULT";var tc=class extends rn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},ec=class extends tc{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},Jm=new Ie,xb=new P,bb=new P,ng=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=Ti,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;xb.setFromMatrixPosition(t.matrixWorld),n.position.copy(xb),bb.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(bb),n.updateMatrixWorld(),Jm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jm,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jm)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var nc=class extends Wl{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},ig=class extends ng{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},po=class extends tc{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new ig}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Bh=class extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var wg="\\[\\]\\.:\\/",HT=new RegExp("["+wg+"]","g"),Cg="[^"+wg+"]",VT="[^"+wg.replace("\\.","")+"]",GT=/((?:WC+[\/:])*)/.source.replace("WC",Cg),kT=/(WCOD+)?/.source.replace("WCOD",VT),XT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cg),WT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cg),qT=new RegExp("^"+GT+kT+XT+WT+"$"),YT=["material","materials","bones","map"],sg=class{constructor(t,n,i){let s=i||Ee.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ee=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(HT,"")}static parseTrackName(t){let n=qT.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);YT.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=sg;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var s3=new Float32Array(1);var mo=class{constructor(t=1,n=0,i=0){this.radius=t,this.phi=n,this.theta=i}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(qt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ic=class extends Ah{constructor(t=10,n=10,i=4473924,s=8947848){i=new Xt(i),s=new Xt(s);let a=n/2,r=t/n,o=t/2,l=[],c=[];for(let f=0,p=0,_=-o;f<=n;f++,_+=r){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);let x=f===a?i:s;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}let u=new hi;u.setAttribute("position",new Rn(l,3)),u.setAttribute("color",new Rn(c,3));let d=new Zl({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var sc=class extends Ii{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Rg(e,t,n,i){let s=ZT(i);switch(n){case gg:return e*t;case yg:return e*t/s.components*s.byteLength;case Qh:return e*t/s.components*s.byteLength;case vg:return e*t*2/s.components*s.byteLength;case $h:return e*t*2/s.components*s.byteLength;case _g:return e*t*3/s.components*s.byteLength;case di:return e*t*4/s.components*s.byteLength;case tf:return e*t*4/s.components*s.byteLength;case oc:case lc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case cc:case uc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case nf:case af:return Math.max(e,16)*Math.max(t,8)/4;case ef:case sf:return Math.max(e,8)*Math.max(t,8)/2;case rf:case of:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case lf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case cf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case uf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case hf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ff:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case df:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case pf:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case mf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case gf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case _f:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case yf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case vf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case xf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case bf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Sf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Mf:case Ef:case Tf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Af:case wf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Cf:case Rf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ZT(e){switch(e){case Ti:case fg:return{byteLength:1,components:1};case go:case dg:case _o:return{byteLength:2,components:1};case Jh:case jh:return{byteLength:2,components:4};case ua:case Kh:case Bi:return{byteLength:4,components:1};case pg:case mg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function zS(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function JT(e){let t=new WeakMap;function n(o,l){let c=o.array,u=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){let _=d[f],x=d[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){let x=d[p];e.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var jT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$T=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_A=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,SA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wA="gl_FragColor = linearToOutputTexel( gl_FragColor );",CA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,NA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,KA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$A=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ew=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ow=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ew=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Aw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ww=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Lw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ow=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Iw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ww=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$w=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_C=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:jT,alphahash_pars_fragment:QT,alphamap_fragment:$T,alphamap_pars_fragment:tA,alphatest_fragment:eA,alphatest_pars_fragment:nA,aomap_fragment:iA,aomap_pars_fragment:sA,batching_pars_vertex:aA,batching_vertex:rA,begin_vertex:oA,beginnormal_vertex:lA,bsdfs:cA,iridescence_fragment:uA,bumpmap_pars_fragment:hA,clipping_planes_fragment:fA,clipping_planes_pars_fragment:dA,clipping_planes_pars_vertex:pA,clipping_planes_vertex:mA,color_fragment:gA,color_pars_fragment:_A,color_pars_vertex:yA,color_vertex:vA,common:xA,cube_uv_reflection_fragment:bA,defaultnormal_vertex:SA,displacementmap_pars_vertex:MA,displacementmap_vertex:EA,emissivemap_fragment:TA,emissivemap_pars_fragment:AA,colorspace_fragment:wA,colorspace_pars_fragment:CA,envmap_fragment:RA,envmap_common_pars_fragment:DA,envmap_pars_fragment:UA,envmap_pars_vertex:NA,envmap_physical_pars_fragment:kA,envmap_vertex:LA,fog_vertex:OA,fog_pars_vertex:IA,fog_fragment:PA,fog_pars_fragment:zA,gradientmap_pars_fragment:BA,lightmap_pars_fragment:FA,lights_lambert_fragment:HA,lights_lambert_pars_fragment:VA,lights_pars_begin:GA,lights_toon_fragment:XA,lights_toon_pars_fragment:WA,lights_phong_fragment:qA,lights_phong_pars_fragment:YA,lights_physical_fragment:ZA,lights_physical_pars_fragment:KA,lights_fragment_begin:JA,lights_fragment_maps:jA,lights_fragment_end:QA,logdepthbuf_fragment:$A,logdepthbuf_pars_fragment:tw,logdepthbuf_pars_vertex:ew,logdepthbuf_vertex:nw,map_fragment:iw,map_pars_fragment:sw,map_particle_fragment:aw,map_particle_pars_fragment:rw,metalnessmap_fragment:ow,metalnessmap_pars_fragment:lw,morphinstance_vertex:cw,morphcolor_vertex:uw,morphnormal_vertex:hw,morphtarget_pars_vertex:fw,morphtarget_vertex:dw,normal_fragment_begin:pw,normal_fragment_maps:mw,normal_pars_fragment:gw,normal_pars_vertex:_w,normal_vertex:yw,normalmap_pars_fragment:vw,clearcoat_normal_fragment_begin:xw,clearcoat_normal_fragment_maps:bw,clearcoat_pars_fragment:Sw,iridescence_pars_fragment:Mw,opaque_fragment:Ew,packing:Tw,premultiplied_alpha_fragment:Aw,project_vertex:ww,dithering_fragment:Cw,dithering_pars_fragment:Rw,roughnessmap_fragment:Dw,roughnessmap_pars_fragment:Uw,shadowmap_pars_fragment:Nw,shadowmap_pars_vertex:Lw,shadowmap_vertex:Ow,shadowmask_pars_fragment:Iw,skinbase_vertex:Pw,skinning_pars_vertex:zw,skinning_vertex:Bw,skinnormal_vertex:Fw,specularmap_fragment:Hw,specularmap_pars_fragment:Vw,tonemapping_fragment:Gw,tonemapping_pars_fragment:kw,transmission_fragment:Xw,transmission_pars_fragment:Ww,uv_pars_fragment:qw,uv_pars_vertex:Yw,uv_vertex:Zw,worldpos_vertex:Kw,background_vert:Jw,background_frag:jw,backgroundCube_vert:Qw,backgroundCube_frag:$w,cube_vert:tC,cube_frag:eC,depth_vert:nC,depth_frag:iC,distanceRGBA_vert:sC,distanceRGBA_frag:aC,equirect_vert:rC,equirect_frag:oC,linedashed_vert:lC,linedashed_frag:cC,meshbasic_vert:uC,meshbasic_frag:hC,meshlambert_vert:fC,meshlambert_frag:dC,meshmatcap_vert:pC,meshmatcap_frag:mC,meshnormal_vert:gC,meshnormal_frag:_C,meshphong_vert:yC,meshphong_frag:vC,meshphysical_vert:xC,meshphysical_frag:bC,meshtoon_vert:SC,meshtoon_frag:MC,points_vert:EC,points_frag:TC,shadow_vert:AC,shadow_frag:wC,sprite_vert:CC,sprite_frag:RC},ut={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Fi={basic:{uniforms:fn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:fn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:fn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:fn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:fn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:fn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:fn([ut.points,ut.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:fn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:fn([ut.common,ut.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:fn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:fn([ut.sprite,ut.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:fn([ut.common,ut.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:fn([ut.lights,ut.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Fi.physical={uniforms:fn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var Df={r:0,b:0,g:0},Za=new Mi,DC=new Ie;function UC(e,t,n,i,s,a,r){let o=new Xt(0),l=a===!0?0:1,c,u,d=null,f=0,p=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?n:t).get(v)),v}function x(y){let v=!1,w=_(y);w===null?h(o,l):w&&w.isColor&&(h(w,1),v=!0);let D=e.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(y,v){let w=_(v);w&&(w.isCubeTexture||w.mapping===ac)?(u===void 0&&(u=new Dn(new uo(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Ya(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,A,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Za.copy(v.backgroundRotation),Za.x*=-1,Za.y*=-1,Za.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Za.y*=-1,Za.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(DC.makeRotationFromEuler(Za)),u.material.toneMapped=ee.getTransfer(w.colorSpace)!==ue,(d!==w||f!==w.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=w,f=w.version,p=e.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Dn(new jl(2,2),new Ei({name:"BackgroundMaterial",uniforms:Ya(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ee.getTransfer(w.colorSpace)!==ue,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,v){y.getRGB(Df,Ag(e)),i.buffers.color.setClear(Df.r,Df.g,Df.b,v,r)}function g(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(o,l)},render:x,addToRenderList:m,dispose:g}}function NC(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null),a=s,r=!1;function o(M,N,F,k,q){let Y=!1,B=d(k,F,N);a!==B&&(a=B,c(a.object)),Y=p(M,k,F,q),Y&&_(M,k,F,q),q!==null&&t.update(q,e.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,v(M,N,F,k),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return e.createVertexArray()}function c(M){return e.bindVertexArray(M)}function u(M){return e.deleteVertexArray(M)}function d(M,N,F){let k=F.wireframe===!0,q=i[M.id];q===void 0&&(q={},i[M.id]=q);let Y=q[N.id];Y===void 0&&(Y={},q[N.id]=Y);let B=Y[k];return B===void 0&&(B=f(l()),Y[k]=B),B}function f(M){let N=[],F=[],k=[];for(let q=0;q<n;q++)N[q]=0,F[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,N,F,k){let q=a.attributes,Y=N.attributes,B=0,W=F.getAttributes();for(let H in W)if(W[H].location>=0){let ct=q[H],Q=Y[H];if(Q===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),ct===void 0||ct.attribute!==Q||Q&&ct.data!==Q.data)return!0;B++}return a.attributesNum!==B||a.index!==k}function _(M,N,F,k){let q={},Y=N.attributes,B=0,W=F.getAttributes();for(let H in W)if(W[H].location>=0){let ct=Y[H];ct===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));let Q={};Q.attribute=ct,ct&&ct.data&&(Q.data=ct.data),q[H]=Q,B++}a.attributes=q,a.attributesNum=B,a.index=k}function x(){let M=a.newAttributes;for(let N=0,F=M.length;N<F;N++)M[N]=0}function m(M){h(M,0)}function h(M,N){let F=a.newAttributes,k=a.enabledAttributes,q=a.attributeDivisors;F[M]=1,k[M]===0&&(e.enableVertexAttribArray(M),k[M]=1),q[M]!==N&&(e.vertexAttribDivisor(M,N),q[M]=N)}function g(){let M=a.newAttributes,N=a.enabledAttributes;for(let F=0,k=N.length;F<k;F++)N[F]!==M[F]&&(e.disableVertexAttribArray(F),N[F]=0)}function y(M,N,F,k,q,Y,B){B===!0?e.vertexAttribIPointer(M,N,F,q,Y):e.vertexAttribPointer(M,N,F,k,q,Y)}function v(M,N,F,k){x();let q=k.attributes,Y=F.getAttributes(),B=N.defaultAttributeValues;for(let W in Y){let H=Y[W];if(H.location>=0){let rt=q[W];if(rt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){let ct=rt.normalized,Q=rt.itemSize,It=t.get(rt);if(It===void 0)continue;let te=It.buffer,ie=It.type,Kt=It.bytesPerElement,K=ie===e.INT||ie===e.UNSIGNED_INT||rt.gpuType===Kh;if(rt.isInterleavedBufferAttribute){let $=rt.data,mt=$.stride,vt=rt.offset;if($.isInstancedInterleavedBuffer){for(let pt=0;pt<H.locationSize;pt++)h(H.location+pt,$.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let pt=0;pt<H.locationSize;pt++)m(H.location+pt);e.bindBuffer(e.ARRAY_BUFFER,te);for(let pt=0;pt<H.locationSize;pt++)y(H.location+pt,Q/H.locationSize,ie,ct,mt*Kt,(vt+Q/H.locationSize*pt)*Kt,K)}else{if(rt.isInstancedBufferAttribute){for(let $=0;$<H.locationSize;$++)h(H.location+$,rt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let $=0;$<H.locationSize;$++)m(H.location+$);e.bindBuffer(e.ARRAY_BUFFER,te);for(let $=0;$<H.locationSize;$++)y(H.location+$,Q/H.locationSize,ie,ct,Q*Kt,Q/H.locationSize*$*Kt,K)}}else if(B!==void 0){let ct=B[W];if(ct!==void 0)switch(ct.length){case 2:e.vertexAttrib2fv(H.location,ct);break;case 3:e.vertexAttrib3fv(H.location,ct);break;case 4:e.vertexAttrib4fv(H.location,ct);break;default:e.vertexAttrib1fv(H.location,ct)}}}}g()}function w(){U();for(let M in i){let N=i[M];for(let F in N){let k=N[F];for(let q in k)u(k[q].object),delete k[q];delete N[F]}delete i[M]}}function D(M){if(i[M.id]===void 0)return;let N=i[M.id];for(let F in N){let k=N[F];for(let q in k)u(k[q].object),delete k[q];delete N[F]}delete i[M.id]}function A(M){for(let N in i){let F=i[N];if(F[M.id]===void 0)continue;let k=F[M.id];for(let q in k)u(k[q].object),delete k[q];delete F[M.id]}}function U(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:D,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function LC(e,t,n){let i;function s(c){i=c}function a(c,u){e.drawArrays(i,c,u),n.update(u,i,1)}function r(c,u,d){d!==0&&(e.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)r(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let _=0;for(let x=0;x<d;x++)_+=u[x]*f[x];n.update(_,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function OC(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==di&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let U=A===_o&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ti&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Bi&&!U)}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,D=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:w,maxSamples:D}}function IC(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Cn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){let _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=e.get(d);if(!s||_===null||_.length===0||a&&!m)a?u(null):c();else{let g=a?0:i,y=g*4,v=h.clippingState||null;l.value=v,v=u(_,f,y,p);for(let w=0;w!==y;++w)v[w]=n[w];h.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,p,_){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,_!==!0||m===null){let h=p+x*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,v=p;y!==x;++y,v+=4)r.copy(d[y]).applyMatrix4(g,o),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function PC(e){let t=new WeakMap;function n(r,o){return o===qh?r.mapping=Wa:o===Yh&&(r.mapping=qa),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===qh||o===Yh)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Sh(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var So=4,pS=[.125,.215,.35,.446,.526,.582],ja=20,Dg=new nc,mS=new Xt,Ug=null,Ng=0,Lg=0,Og=!1,Ja=(1+Math.sqrt(5))/2,bo=1/Ja,gS=[new P(-Ja,bo,0),new P(Ja,bo,0),new P(-bo,0,Ja),new P(bo,0,Ja),new P(0,Ja,-bo),new P(0,Ja,bo),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],zC=new P,Lf=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=zC}=a;Ug=this._renderer.getRenderTarget(),Ng=this._renderer.getActiveCubeFace(),Lg=this._renderer.getActiveMipmapLevel(),Og=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ug,Ng,Lg),this._renderer.xr.enabled=Og,t.scissorTest=!1,Uf(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Wa||t.mapping===qa?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ug=this._renderer.getRenderTarget(),Ng=this._renderer.getActiveCubeFace(),Lg=this._renderer.getActiveMipmapLevel(),Og=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:_o,format:di,colorSpace:Va,depthBuffer:!1},s=_S(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_S(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BC(a)),this._blurMaterial=FC(a,t,n)}return s}_compileMaterial(t){let n=new Dn(this._lodPlanes[0],t);this._renderer.compile(n,Dg)}_sceneToCubeUV(t,n,i,s,a){let l=new un(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(mS),d.toneMapping=ys,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new Gl({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),m=new Dn(new uo,x),h=!1,g=t.background;g?g.isColor&&(x.color.copy(g),t.background=null,h=!0):(x.color.copy(mS),h=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[y],a.y,a.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[y],a.z)):(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[y]));let w=this._cubeSize;Uf(s,v*w,y>2?w:0,w,w),d.setRenderTarget(s),h&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=g}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Wa||t.mapping===qa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yS());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new Dn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Uf(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Dg)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=gS[(s-a-1)%gS.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Dn(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*ja-1),x=a/_,m=isFinite(a)?1+Math.floor(u*x):ja;m>ja&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ja}`);let h=[],g=0;for(let A=0;A<ja;++A){let U=A/x,E=Math.exp(-U*U/2);h.push(E),A===0?g+=E:A<m&&(g+=2*E)}for(let A=0;A<h.length;A++)h[A]=h[A]/g;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;let v=this._sizeLods[s],w=3*v*(s>y-So?s-y+So:0),D=4*(this._cubeSize-v);Uf(n,w,D,3*v,2*v),l.setRenderTarget(n),l.render(d,Dg)}};function BC(e){let t=[],n=[],i=[],s=e,a=e-So+1+pS.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-So?l=pS[r-e+So-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,x=3,m=2,h=1,g=new Float32Array(x*_*p),y=new Float32Array(m*_*p),v=new Float32Array(h*_*p);for(let D=0;D<p;D++){let A=D%3*2/3-1,U=D>2?0:-1,E=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];g.set(E,x*_*D),y.set(f,m*_*D);let M=[D,D,D,D,D,D];v.set(M,h*_*D)}let w=new hi;w.setAttribute("position",new hn(g,x)),w.setAttribute("uv",new hn(y,m)),w.setAttribute("faceIndex",new hn(v,h)),t.push(w),s>So&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function _S(e,t,n){let i=new Pi(e,t,n);return i.texture.mapping=ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uf(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function FC(e,t,n){let i=new Float32Array(ja),s=new P(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:ja,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function yS(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function vS(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function Xg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function HC(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===qh||l===Yh,u=l===Wa||l===qa;if(c||u){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Lf(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(n===null&&(n=new Lf(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function VC(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&lo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function GC(e,t,n,i){let s={},a=new WeakMap;function r(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",r),delete s[f.id];let p=a.get(f);p&&(t.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,_=d.attributes.position,x=0;if(p!==null){let g=p.array;x=p.version;for(let y=0,v=g.length;y<v;y+=3){let w=g[y+0],D=g[y+1],A=g[y+2];f.push(w,D,D,A,A,w)}}else if(_!==void 0){let g=_.array;x=_.version;for(let y=0,v=g.length/3-1;y<v;y+=3){let w=y+0,D=y+1,A=y+2;f.push(w,D,D,A,A,w)}}else return;let m=new(Tg(f)?Xl:kl)(f,1);m.version=x;let h=a.get(d);h&&t.remove(h),a.set(d,m)}function u(d){let f=a.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function kC(e,t,n){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,p){e.drawElements(i,p,a,f*r),n.update(p,i,1)}function c(f,p,_){_!==0&&(e.drawElementsInstanced(i,p,a,f*r,_),n.update(p,i,_))}function u(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,f,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];n.update(m,i,1)}function d(f,p,_,x){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/r,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,f,0,x,0,_);let h=0;for(let g=0;g<_;g++)h+=p[g]*x[g];n.update(h,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function XC(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function WC(e,t,n){let i=new WeakMap,s=new Ue;function a(r,o,l){let c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(o);if(f===void 0||f.count!==d){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],y=0;p===!0&&(y=1),_===!0&&(y=2),x===!0&&(y=3);let v=o.attributes.position.count*y,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let D=new Float32Array(v*w*4*d),A=new Hl(D,v,w,d);A.type=Bi,A.needsUpdate=!0;let U=y*4;for(let M=0;M<d;M++){let N=m[M],F=h[M],k=g[M],q=v*w*4*M;for(let Y=0;Y<N.count;Y++){let B=Y*U;p===!0&&(s.fromBufferAttribute(N,Y),D[q+B+0]=s.x,D[q+B+1]=s.y,D[q+B+2]=s.z,D[q+B+3]=0),_===!0&&(s.fromBufferAttribute(F,Y),D[q+B+4]=s.x,D[q+B+5]=s.y,D[q+B+6]=s.z,D[q+B+7]=0),x===!0&&(s.fromBufferAttribute(k,Y),D[q+B+8]=s.x,D[q+B+9]=s.y,D[q+B+10]=s.z,D[q+B+11]=k.itemSize===4?s.w:1)}}f={count:d,texture:A,size:new zt(v,w)},i.set(o,f),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:a}}function qC(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var BS=new Yn,xS=new Kl(1,1),FS=new Hl,HS=new xh,VS=new ql,bS=[],SS=[],MS=new Float32Array(16),ES=new Float32Array(9),TS=new Float32Array(4);function Eo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=bS[s];if(a===void 0&&(a=new Float32Array(s),bS[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function qe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ye(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function If(e,t){let n=SS[t];n===void 0&&(n=new Int32Array(t),SS[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function YC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ZC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qe(n,t))return;e.uniform2fv(this.addr,t),Ye(n,t)}}function KC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(qe(n,t))return;e.uniform3fv(this.addr,t),Ye(n,t)}}function JC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qe(n,t))return;e.uniform4fv(this.addr,t),Ye(n,t)}}function jC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(qe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ye(n,t)}else{if(qe(n,i))return;TS.set(i),e.uniformMatrix2fv(this.addr,!1,TS),Ye(n,i)}}function QC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(qe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ye(n,t)}else{if(qe(n,i))return;ES.set(i),e.uniformMatrix3fv(this.addr,!1,ES),Ye(n,i)}}function $C(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(qe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ye(n,t)}else{if(qe(n,i))return;MS.set(i),e.uniformMatrix4fv(this.addr,!1,MS),Ye(n,i)}}function t2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function e2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qe(n,t))return;e.uniform2iv(this.addr,t),Ye(n,t)}}function n2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qe(n,t))return;e.uniform3iv(this.addr,t),Ye(n,t)}}function i2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qe(n,t))return;e.uniform4iv(this.addr,t),Ye(n,t)}}function s2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function a2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qe(n,t))return;e.uniform2uiv(this.addr,t),Ye(n,t)}}function r2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qe(n,t))return;e.uniform3uiv(this.addr,t),Ye(n,t)}}function o2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qe(n,t))return;e.uniform4uiv(this.addr,t),Ye(n,t)}}function l2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(xS.compareFunction=bg,a=xS):a=BS,n.setTexture2D(t||a,s)}function c2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||HS,s)}function u2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||VS,s)}function h2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||FS,s)}function f2(e){switch(e){case 5126:return YC;case 35664:return ZC;case 35665:return KC;case 35666:return JC;case 35674:return jC;case 35675:return QC;case 35676:return $C;case 5124:case 35670:return t2;case 35667:case 35671:return e2;case 35668:case 35672:return n2;case 35669:case 35673:return i2;case 5125:return s2;case 36294:return a2;case 36295:return r2;case 36296:return o2;case 35678:case 36198:case 36298:case 36306:case 35682:return l2;case 35679:case 36299:case 36307:return c2;case 35680:case 36300:case 36308:case 36293:return u2;case 36289:case 36303:case 36311:case 36292:return h2}}function d2(e,t){e.uniform1fv(this.addr,t)}function p2(e,t){let n=Eo(t,this.size,2);e.uniform2fv(this.addr,n)}function m2(e,t){let n=Eo(t,this.size,3);e.uniform3fv(this.addr,n)}function g2(e,t){let n=Eo(t,this.size,4);e.uniform4fv(this.addr,n)}function _2(e,t){let n=Eo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function y2(e,t){let n=Eo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function v2(e,t){let n=Eo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function x2(e,t){e.uniform1iv(this.addr,t)}function b2(e,t){e.uniform2iv(this.addr,t)}function S2(e,t){e.uniform3iv(this.addr,t)}function M2(e,t){e.uniform4iv(this.addr,t)}function E2(e,t){e.uniform1uiv(this.addr,t)}function T2(e,t){e.uniform2uiv(this.addr,t)}function A2(e,t){e.uniform3uiv(this.addr,t)}function w2(e,t){e.uniform4uiv(this.addr,t)}function C2(e,t,n){let i=this.cache,s=t.length,a=If(n,s);qe(i,a)||(e.uniform1iv(this.addr,a),Ye(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||BS,a[r])}function R2(e,t,n){let i=this.cache,s=t.length,a=If(n,s);qe(i,a)||(e.uniform1iv(this.addr,a),Ye(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||HS,a[r])}function D2(e,t,n){let i=this.cache,s=t.length,a=If(n,s);qe(i,a)||(e.uniform1iv(this.addr,a),Ye(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||VS,a[r])}function U2(e,t,n){let i=this.cache,s=t.length,a=If(n,s);qe(i,a)||(e.uniform1iv(this.addr,a),Ye(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||FS,a[r])}function N2(e){switch(e){case 5126:return d2;case 35664:return p2;case 35665:return m2;case 35666:return g2;case 35674:return _2;case 35675:return y2;case 35676:return v2;case 5124:case 35670:return x2;case 35667:case 35671:return b2;case 35668:case 35672:return S2;case 35669:case 35673:return M2;case 5125:return E2;case 36294:return T2;case 36295:return A2;case 36296:return w2;case 35678:case 36198:case 36298:case 36306:case 35682:return C2;case 35679:case 36299:case 36307:return R2;case 35680:case 36300:case 36308:case 36293:return D2;case 36289:case 36303:case 36311:case 36292:return U2}}var Pg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=f2(n.type)}},zg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=N2(n.type)}},Bg=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Ig=/(\w+)(\])?(\[|\.)?/g;function AS(e,t){e.seq.push(t),e.map[t.id]=t}function L2(e,t,n){let i=e.name,s=i.length;for(Ig.lastIndex=0;;){let a=Ig.exec(i),r=Ig.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){AS(n,c===void 0?new Pg(o,e,t):new zg(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new Bg(o),AS(n,d)),n=d}}}var Mo=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);L2(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function wS(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var O2=37297,I2=0;function P2(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var CS=new Vt;function z2(e){ee._getMatrix(CS,ee.workingColorSpace,e);let t=`mat3( ${CS.elements.map(n=>n.toFixed(4))} )`;switch(ee.getTransfer(e)){case zl:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function RS(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+P2(e.getShaderSource(t),o)}else return a}function B2(e,t){let n=z2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function F2(e,t){let n;switch(t){case Wb:n="Linear";break;case qb:n="Reinhard";break;case Yb:n="Cineon";break;case Zb:n="ACESFilmic";break;case Jb:n="AgX";break;case jb:n="Neutral";break;case Kb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Nf=new P;function H2(){ee.getLuminanceCoefficients(Nf);let e=Nf.x.toFixed(4),t=Nf.y.toFixed(4),n=Nf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hc).join(`
`)}function G2(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function k2(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function hc(e){return e!==""}function DS(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function US(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var X2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fg(e){return e.replace(X2,q2)}var W2=new Map;function q2(e,t){let n=Wt[t];if(n===void 0){let i=W2.get(t);if(i!==void 0)n=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Fg(n)}var Y2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function NS(e){return e.replace(Y2,Z2)}function Z2(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function LS(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function K2(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===rg?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Eb?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function J2(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Wa:case qa:t="ENVMAP_TYPE_CUBE";break;case ac:t="ENVMAP_TYPE_CUBE_UV";break}return t}function j2(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case qa:t="ENVMAP_MODE_REFRACTION";break}return t}function Q2(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case ug:t="ENVMAP_BLENDING_MULTIPLY";break;case kb:t="ENVMAP_BLENDING_MIX";break;case Xb:t="ENVMAP_BLENDING_ADD";break}return t}function $2(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function tR(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=K2(n),c=J2(n),u=j2(n),d=Q2(n),f=$2(n),p=V2(n),_=G2(a),x=s.createProgram(),m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(hc).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(hc).join(`
`),h.length>0&&(h+=`
`)):(m=[LS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hc).join(`
`),h=[LS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ys?"#define TONE_MAPPING":"",n.toneMapping!==ys?Wt.tonemapping_pars_fragment:"",n.toneMapping!==ys?F2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,B2("linearToOutputTexel",n.outputColorSpace),H2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hc).join(`
`)),r=Fg(r),r=DS(r,n),r=US(r,n),o=Fg(o),o=DS(o,n),o=US(o,n),r=NS(r),o=NS(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let y=g+m+r,v=g+h+o,w=wS(s,s.VERTEX_SHADER,y),D=wS(s,s.FRAGMENT_SHADER,v);s.attachShader(x,w),s.attachShader(x,D),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(N){if(e.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(w)||"",q=s.getShaderInfoLog(D)||"",Y=F.trim(),B=k.trim(),W=q.trim(),H=!0,rt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,w,D);else{let ct=RS(s,w,"vertex"),Q=RS(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+Y+`
`+ct+`
`+Q)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(B===""||W==="")&&(rt=!1);rt&&(N.diagnostics={runnable:H,programLog:Y,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:h}})}s.deleteShader(w),s.deleteShader(D),U=new Mo(s,x),E=k2(s,x)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,O2)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=I2++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=D,this}var eR=0,Hg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Vg(t),n.set(t,i)),i}},Vg=class{constructor(t){this.id=eR++,this.code=t,this.usedTimes=0}};function nR(e,t,n,i,s,a,r){let o=new Vl,l=new Hg,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,N,F,k){let q=F.fog,Y=k.geometry,B=E.isMeshStandardMaterial?F.environment:null,W=(E.isMeshStandardMaterial?n:t).get(E.envMap||B),H=W&&W.mapping===ac?W.image.height:null,rt=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let ct=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Q=ct!==void 0?ct.length:0,It=0;Y.morphAttributes.position!==void 0&&(It=1),Y.morphAttributes.normal!==void 0&&(It=2),Y.morphAttributes.color!==void 0&&(It=3);let te,ie,Kt,K;if(rt){let re=Fi[rt];te=re.vertexShader,ie=re.fragmentShader}else te=E.vertexShader,ie=E.fragmentShader,l.update(E),Kt=l.getVertexShaderID(E),K=l.getFragmentShaderID(E);let $=e.getRenderTarget(),mt=e.state.buffers.depth.getReversed(),vt=k.isInstancedMesh===!0,pt=k.isBatchedMesh===!0,et=!!E.map,yt=!!E.matcap,C=!!W,Qt=!!E.aoMap,Dt=!!E.lightMap,Ut=!!E.bumpMap,xt=!!E.normalMap,Te=!!E.displacementMap,Mt=!!E.emissiveMap,kt=!!E.metalnessMap,Ke=!!E.roughnessMap,Pe=E.anisotropy>0,R=E.clearcoat>0,b=E.dispersion>0,z=E.iridescence>0,Z=E.sheen>0,tt=E.transmission>0,X=Pe&&!!E.anisotropyMap,wt=R&&!!E.clearcoatMap,ot=R&&!!E.clearcoatNormalMap,Et=R&&!!E.clearcoatRoughnessMap,Tt=z&&!!E.iridescenceMap,st=z&&!!E.iridescenceThicknessMap,dt=Z&&!!E.sheenColorMap,Lt=Z&&!!E.sheenRoughnessMap,At=!!E.specularMap,ht=!!E.specularColorMap,Gt=!!E.specularIntensityMap,L=tt&&!!E.transmissionMap,at=tt&&!!E.thicknessMap,lt=!!E.gradientMap,_t=!!E.alphaMap,nt=E.alphaTest>0,j=!!E.alphaHash,St=!!E.extensions,Bt=ys;E.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Bt=e.toneMapping);let _e={shaderID:rt,shaderType:E.type,shaderName:E.name,vertexShader:te,fragmentShader:ie,defines:E.defines,customVertexShaderID:Kt,customFragmentShaderID:K,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:pt,batchingColor:pt&&k._colorsTexture!==null,instancing:vt,instancingColor:vt&&k.instanceColor!==null,instancingMorph:vt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?e.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Va,alphaToCoverage:!!E.alphaToCoverage,map:et,matcap:yt,envMap:C,envMapMode:C&&W.mapping,envMapCubeUVHeight:H,aoMap:Qt,lightMap:Dt,bumpMap:Ut,normalMap:xt,displacementMap:f&&Te,emissiveMap:Mt,normalMapObjectSpace:xt&&E.normalMapType===eS,normalMapTangentSpace:xt&&E.normalMapType===xg,metalnessMap:kt,roughnessMap:Ke,anisotropy:Pe,anisotropyMap:X,clearcoat:R,clearcoatMap:wt,clearcoatNormalMap:ot,clearcoatRoughnessMap:Et,dispersion:b,iridescence:z,iridescenceMap:Tt,iridescenceThicknessMap:st,sheen:Z,sheenColorMap:dt,sheenRoughnessMap:Lt,specularMap:At,specularColorMap:ht,specularIntensityMap:Gt,transmission:tt,transmissionMap:L,thicknessMap:at,gradientMap:lt,opaque:E.transparent===!1&&E.blending===Fa&&E.alphaToCoverage===!1,alphaMap:_t,alphaTest:nt,alphaHash:j,combine:E.combine,mapUv:et&&x(E.map.channel),aoMapUv:Qt&&x(E.aoMap.channel),lightMapUv:Dt&&x(E.lightMap.channel),bumpMapUv:Ut&&x(E.bumpMap.channel),normalMapUv:xt&&x(E.normalMap.channel),displacementMapUv:Te&&x(E.displacementMap.channel),emissiveMapUv:Mt&&x(E.emissiveMap.channel),metalnessMapUv:kt&&x(E.metalnessMap.channel),roughnessMapUv:Ke&&x(E.roughnessMap.channel),anisotropyMapUv:X&&x(E.anisotropyMap.channel),clearcoatMapUv:wt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ot&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:st&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&x(E.sheenRoughnessMap.channel),specularMapUv:At&&x(E.specularMap.channel),specularColorMapUv:ht&&x(E.specularColorMap.channel),specularIntensityMapUv:Gt&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:at&&x(E.thicknessMap.channel),alphaMapUv:_t&&x(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(xt||Pe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(et||_t),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:mt,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:It,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:Bt,decodeVideoTexture:et&&E.map.isVideoTexture===!0&&ee.getTransfer(E.map.colorSpace)===ue,decodeVideoTextureEmissive:Mt&&E.emissiveMap.isVideoTexture===!0&&ee.getTransfer(E.emissiveMap.colorSpace)===ue,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fi,flipSided:E.side===vn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:St&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&E.extensions.multiDraw===!0||pt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function h(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let N in E.defines)M.push(N),M.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(g(M,E),y(M,E),M.push(e.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function g(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){let M=_[E.type],N;if(M){let F=Fi[M];N=fS.clone(F.uniforms)}else N=E.uniforms;return N}function w(E,M){let N;for(let F=0,k=u.length;F<k;F++){let q=u[F];if(q.cacheKey===M){N=q,++N.usedTimes;break}}return N===void 0&&(N=new tR(e,M,E,a),u.push(N)),N}function D(E){if(--E.usedTimes===0){let M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:w,releaseProgram:D,releaseShaderCache:A,programs:u,dispose:U}}function iR(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function sR(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function OS(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function IS(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,f,p,_,x,m){let h=e[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:x,group:m},e[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=x,h.group=m),t++,h}function o(d,f,p,_,x,m){let h=r(d,f,p,_,x,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):n.push(h)}function l(d,f,p,_,x,m){let h=r(d,f,p,_,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||sR),i.length>1&&i.sort(f||OS),s.length>1&&s.sort(f||OS)}function u(){for(let d=t,f=e.length;d<f;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:u,sort:c}}function aR(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new IS,e.set(i,[r])):s>=a.length?(r=new IS,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function rR(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new P,color:new Xt};break;case"SpotLight":n={position:new P,direction:new P,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":n={color:new Xt,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=n,n}}}function oR(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var lR=0;function cR(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function uR(e){let t=new rR,n=oR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,a=new Ie,r=new Ie;function o(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,x=0,m=0,h=0,g=0,y=0,v=0,w=0,D=0,A=0;c.sort(cR);for(let E=0,M=c.length;E<M;E++){let N=c[E],F=N.color,k=N.intensity,q=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=F.r*k,d+=F.g*k,f+=F.b*k;else if(N.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(N.sh.coefficients[B],k);A++}else if(N.isDirectionalLight){let B=t.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let W=N.shadow,H=n.get(N);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=N.shadow.matrix,g++}i.directional[p]=B,p++}else if(N.isSpotLight){let B=t.get(N);B.position.setFromMatrixPosition(N.matrixWorld),B.color.copy(F).multiplyScalar(k),B.distance=q,B.coneCos=Math.cos(N.angle),B.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),B.decay=N.decay,i.spot[x]=B;let W=N.shadow;if(N.map&&(i.spotLightMap[w]=N.map,w++,W.updateMatrices(N),N.castShadow&&D++),i.spotLightMatrix[x]=W.matrix,N.castShadow){let H=n.get(N);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=Y,v++}x++}else if(N.isRectAreaLight){let B=t.get(N);B.color.copy(F).multiplyScalar(k),B.halfWidth.set(N.width*.5,0,0),B.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=B,m++}else if(N.isPointLight){let B=t.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),B.distance=N.distance,B.decay=N.decay,N.castShadow){let W=N.shadow,H=n.get(N);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=Y,i.pointShadowMatrix[_]=N.shadow.matrix,y++}i.point[_]=B,_++}else if(N.isHemisphereLight){let B=t.get(N);B.skyColor.copy(N.color).multiplyScalar(k),B.groundColor.copy(N.groundColor).multiplyScalar(k),i.hemi[h]=B,h++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let U=i.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==g||U.numPointShadows!==y||U.numSpotShadows!==v||U.numSpotMaps!==w||U.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+w-D,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=A,U.directionalLength=p,U.pointLength=_,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=g,U.numPointShadows=y,U.numSpotShadows=v,U.numSpotMaps=w,U.numLightProbes=A,i.version=lR++)}function l(c,u){let d=0,f=0,p=0,_=0,x=0,m=u.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){let y=c[h];if(y.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(y.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let v=i.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),r.identity(),a.copy(y.matrixWorld),a.premultiply(m),r.extractRotation(a),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),_++}else if(y.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function PS(e){let t=new uR(e),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function a(u){n.push(u)}function r(u){i.push(u)}function o(){t.setup(n)}function l(u){t.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function hR(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new PS(e),t.set(s,[o])):a>=r.length?(o=new PS(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var fR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pR(e,t,n){let i=new fo,s=new zt,a=new zt,r=new Ue,o=new wh({depthPacking:tS}),l=new Ch,c={},u=n.maxTextureSize,d={[ms]:vn,[vn]:ms,[fi]:fi},f=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:fR,fragmentShader:dR}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new hi;_.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Dn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rg;let h=this.type;this.render=function(D,A,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;let E=e.getRenderTarget(),M=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),F=e.state;F.setBlending(_s),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=h!==zi&&this.type===zi,q=h===zi&&this.type!==zi;for(let Y=0,B=D.length;Y<B;Y++){let W=D[Y],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let rt=H.getFrameExtents();if(s.multiply(rt),a.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/rt.x),s.x=a.x*rt.x,H.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/rt.y),s.y=a.y*rt.y,H.mapSize.y=a.y)),H.map===null||k===!0||q===!0){let Q=this.type!==zi?{minFilter:ci,magFilter:ci}:{};H.map!==null&&H.map.dispose(),H.map=new Pi(s.x,s.y,Q),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}e.setRenderTarget(H.map),e.clear();let ct=H.getViewportCount();for(let Q=0;Q<ct;Q++){let It=H.getViewport(Q);r.set(a.x*It.x,a.y*It.y,a.x*It.z,a.y*It.w),F.viewport(r),H.updateMatrices(W,Q),i=H.getFrustum(),v(A,U,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===zi&&g(H,U),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,e.setRenderTarget(E,M,N)};function g(D,A){let U=t.update(x);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Pi(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,e.setRenderTarget(D.mapPass),e.clear(),e.renderBufferDirect(A,null,U,f,x,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,e.setRenderTarget(D.map),e.clear(),e.renderBufferDirect(A,null,U,p,x,null)}function y(D,A,U,E){let M=null,N=U.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(N!==void 0)M=N;else if(M=U.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=M.uuid,k=A.uuid,q=c[F];q===void 0&&(q={},c[F]=q);let Y=q[k];Y===void 0&&(Y=M.clone(),q[k]=Y,A.addEventListener("dispose",w)),M=Y}if(M.visible=A.visible,M.wireframe=A.wireframe,E===zi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let F=e.properties.get(M);F.light=U}return M}function v(D,A,U,E,M){if(D.visible===!1)return;if(D.layers.test(A.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===zi)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,D.matrixWorld);let k=t.update(D),q=D.material;if(Array.isArray(q)){let Y=k.groups;for(let B=0,W=Y.length;B<W;B++){let H=Y[B],rt=q[H.materialIndex];if(rt&&rt.visible){let ct=y(D,rt,E,M);D.onBeforeShadow(e,D,A,U,k,ct,H),e.renderBufferDirect(U,null,k,ct,D,H),D.onAfterShadow(e,D,A,U,k,ct,H)}}}else if(q.visible){let Y=y(D,q,E,M);D.onBeforeShadow(e,D,A,U,k,Y,null),e.renderBufferDirect(U,null,k,Y,D,null),D.onAfterShadow(e,D,A,U,k,Y,null)}}let F=D.children;for(let k=0,q=F.length;k<q;k++)v(F[k],A,U,E,M)}function w(D){D.target.removeEventListener("dispose",w);for(let U in c){let E=c[U],M=D.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var mR={[Fh]:Hh,[Vh]:Xh,[Gh]:Wh,[Ha]:kh,[Hh]:Fh,[Xh]:Vh,[Wh]:Gh,[kh]:Ha};function gR(e,t){function n(){let L=!1,at=new Ue,lt=null,_t=new Ue(0,0,0,0);return{setMask:function(nt){lt!==nt&&!L&&(e.colorMask(nt,nt,nt,nt),lt=nt)},setLocked:function(nt){L=nt},setClear:function(nt,j,St,Bt,_e){_e===!0&&(nt*=Bt,j*=Bt,St*=Bt),at.set(nt,j,St,Bt),_t.equals(at)===!1&&(e.clearColor(nt,j,St,Bt),_t.copy(at))},reset:function(){L=!1,lt=null,_t.set(-1,0,0,0)}}}function i(){let L=!1,at=!1,lt=null,_t=null,nt=null;return{setReversed:function(j){if(at!==j){let St=t.get("EXT_clip_control");j?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),at=j;let Bt=nt;nt=null,this.setClear(Bt)}},getReversed:function(){return at},setTest:function(j){j?$(e.DEPTH_TEST):mt(e.DEPTH_TEST)},setMask:function(j){lt!==j&&!L&&(e.depthMask(j),lt=j)},setFunc:function(j){if(at&&(j=mR[j]),_t!==j){switch(j){case Fh:e.depthFunc(e.NEVER);break;case Hh:e.depthFunc(e.ALWAYS);break;case Vh:e.depthFunc(e.LESS);break;case Ha:e.depthFunc(e.LEQUAL);break;case Gh:e.depthFunc(e.EQUAL);break;case kh:e.depthFunc(e.GEQUAL);break;case Xh:e.depthFunc(e.GREATER);break;case Wh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}_t=j}},setLocked:function(j){L=j},setClear:function(j){nt!==j&&(at&&(j=1-j),e.clearDepth(j),nt=j)},reset:function(){L=!1,lt=null,_t=null,nt=null,at=!1}}}function s(){let L=!1,at=null,lt=null,_t=null,nt=null,j=null,St=null,Bt=null,_e=null;return{setTest:function(re){L||(re?$(e.STENCIL_TEST):mt(e.STENCIL_TEST))},setMask:function(re){at!==re&&!L&&(e.stencilMask(re),at=re)},setFunc:function(re,Vi,Ai){(lt!==re||_t!==Vi||nt!==Ai)&&(e.stencilFunc(re,Vi,Ai),lt=re,_t=Vi,nt=Ai)},setOp:function(re,Vi,Ai){(j!==re||St!==Vi||Bt!==Ai)&&(e.stencilOp(re,Vi,Ai),j=re,St=Vi,Bt=Ai)},setLocked:function(re){L=re},setClear:function(re){_e!==re&&(e.clearStencil(re),_e=re)},reset:function(){L=!1,at=null,lt=null,_t=null,nt=null,j=null,St=null,Bt=null,_e=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,p=[],_=null,x=!1,m=null,h=null,g=null,y=null,v=null,w=null,D=null,A=new Xt(0,0,0),U=0,E=!1,M=null,N=null,F=null,k=null,q=null,Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,W=0,H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=W>=1):H.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=W>=2);let rt=null,ct={},Q=e.getParameter(e.SCISSOR_BOX),It=e.getParameter(e.VIEWPORT),te=new Ue().fromArray(Q),ie=new Ue().fromArray(It);function Kt(L,at,lt,_t){let nt=new Uint8Array(4),j=e.createTexture();e.bindTexture(L,j),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let St=0;St<lt;St++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(at,0,e.RGBA,1,1,_t,0,e.RGBA,e.UNSIGNED_BYTE,nt):e.texImage2D(at+St,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,nt);return j}let K={};K[e.TEXTURE_2D]=Kt(e.TEXTURE_2D,e.TEXTURE_2D,1),K[e.TEXTURE_CUBE_MAP]=Kt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[e.TEXTURE_2D_ARRAY]=Kt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),K[e.TEXTURE_3D]=Kt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),$(e.DEPTH_TEST),r.setFunc(Ha),Ut(!1),xt(ag),$(e.CULL_FACE),Qt(_s);function $(L){u[L]!==!0&&(e.enable(L),u[L]=!0)}function mt(L){u[L]!==!1&&(e.disable(L),u[L]=!1)}function vt(L,at){return d[L]!==at?(e.bindFramebuffer(L,at),d[L]=at,L===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=at),L===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=at),!0):!1}function pt(L,at){let lt=p,_t=!1;if(L){lt=f.get(at),lt===void 0&&(lt=[],f.set(at,lt));let nt=L.textures;if(lt.length!==nt.length||lt[0]!==e.COLOR_ATTACHMENT0){for(let j=0,St=nt.length;j<St;j++)lt[j]=e.COLOR_ATTACHMENT0+j;lt.length=nt.length,_t=!0}}else lt[0]!==e.BACK&&(lt[0]=e.BACK,_t=!0);_t&&e.drawBuffers(lt)}function et(L){return _!==L?(e.useProgram(L),_=L,!0):!1}let yt={[ia]:e.FUNC_ADD,[Ab]:e.FUNC_SUBTRACT,[wb]:e.FUNC_REVERSE_SUBTRACT};yt[Cb]=e.MIN,yt[Rb]=e.MAX;let C={[Db]:e.ZERO,[Ub]:e.ONE,[Nb]:e.SRC_COLOR,[dh]:e.SRC_ALPHA,[Bb]:e.SRC_ALPHA_SATURATE,[Pb]:e.DST_COLOR,[Ob]:e.DST_ALPHA,[Lb]:e.ONE_MINUS_SRC_COLOR,[ph]:e.ONE_MINUS_SRC_ALPHA,[zb]:e.ONE_MINUS_DST_COLOR,[Ib]:e.ONE_MINUS_DST_ALPHA,[Fb]:e.CONSTANT_COLOR,[Hb]:e.ONE_MINUS_CONSTANT_COLOR,[Vb]:e.CONSTANT_ALPHA,[Gb]:e.ONE_MINUS_CONSTANT_ALPHA};function Qt(L,at,lt,_t,nt,j,St,Bt,_e,re){if(L===_s){x===!0&&(mt(e.BLEND),x=!1);return}if(x===!1&&($(e.BLEND),x=!0),L!==Tb){if(L!==m||re!==E){if((h!==ia||v!==ia)&&(e.blendEquation(e.FUNC_ADD),h=ia,v=ia),re)switch(L){case Fa:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case og:e.blendFunc(e.ONE,e.ONE);break;case lg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case cg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Fa:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case og:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case lg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}g=null,y=null,w=null,D=null,A.set(0,0,0),U=0,m=L,E=re}return}nt=nt||at,j=j||lt,St=St||_t,(at!==h||nt!==v)&&(e.blendEquationSeparate(yt[at],yt[nt]),h=at,v=nt),(lt!==g||_t!==y||j!==w||St!==D)&&(e.blendFuncSeparate(C[lt],C[_t],C[j],C[St]),g=lt,y=_t,w=j,D=St),(Bt.equals(A)===!1||_e!==U)&&(e.blendColor(Bt.r,Bt.g,Bt.b,_e),A.copy(Bt),U=_e),m=L,E=!1}function Dt(L,at){L.side===fi?mt(e.CULL_FACE):$(e.CULL_FACE);let lt=L.side===vn;at&&(lt=!lt),Ut(lt),L.blending===Fa&&L.transparent===!1?Qt(_s):Qt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);let _t=L.stencilWrite;o.setTest(_t),_t&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Mt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?$(e.SAMPLE_ALPHA_TO_COVERAGE):mt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(L){M!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),M=L)}function xt(L){L!==Sb?($(e.CULL_FACE),L!==N&&(L===ag?e.cullFace(e.BACK):L===Mb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):mt(e.CULL_FACE),N=L}function Te(L){L!==F&&(B&&e.lineWidth(L),F=L)}function Mt(L,at,lt){L?($(e.POLYGON_OFFSET_FILL),(k!==at||q!==lt)&&(e.polygonOffset(at,lt),k=at,q=lt)):mt(e.POLYGON_OFFSET_FILL)}function kt(L){L?$(e.SCISSOR_TEST):mt(e.SCISSOR_TEST)}function Ke(L){L===void 0&&(L=e.TEXTURE0+Y-1),rt!==L&&(e.activeTexture(L),rt=L)}function Pe(L,at,lt){lt===void 0&&(rt===null?lt=e.TEXTURE0+Y-1:lt=rt);let _t=ct[lt];_t===void 0&&(_t={type:void 0,texture:void 0},ct[lt]=_t),(_t.type!==L||_t.texture!==at)&&(rt!==lt&&(e.activeTexture(lt),rt=lt),e.bindTexture(L,at||K[L]),_t.type=L,_t.texture=at)}function R(){let L=ct[rt];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function b(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(L){te.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),te.copy(L))}function Lt(L){ie.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),ie.copy(L))}function At(L,at){let lt=c.get(at);lt===void 0&&(lt=new WeakMap,c.set(at,lt));let _t=lt.get(L);_t===void 0&&(_t=e.getUniformBlockIndex(at,L.name),lt.set(L,_t))}function ht(L,at){let _t=c.get(at).get(L);l.get(at)!==_t&&(e.uniformBlockBinding(at,_t,L.__bindingPointIndex),l.set(at,_t))}function Gt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},rt=null,ct={},d={},f=new WeakMap,p=[],_=null,x=!1,m=null,h=null,g=null,y=null,v=null,w=null,D=null,A=new Xt(0,0,0),U=0,E=!1,M=null,N=null,F=null,k=null,q=null,te.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:$,disable:mt,bindFramebuffer:vt,drawBuffers:pt,useProgram:et,setBlending:Qt,setMaterial:Dt,setFlipSided:Ut,setCullFace:xt,setLineWidth:Te,setPolygonOffset:Mt,setScissorTest:kt,activeTexture:Ke,bindTexture:Pe,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:z,texImage2D:Tt,texImage3D:st,updateUBOMapping:At,uniformBlockBinding:ht,texStorage2D:ot,texStorage3D:Et,texSubImage2D:Z,texSubImage3D:tt,compressedTexSubImage2D:X,compressedTexSubImage3D:wt,scissor:dt,viewport:Lt,reset:Gt}}function _R(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,b){return p?new OffscreenCanvas(R,b):Fl("canvas")}function x(R,b,z){let Z=1,tt=Pe(R);if((tt.width>z||tt.height>z)&&(Z=z/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let X=Math.floor(Z*tt.width),wt=Math.floor(Z*tt.height);d===void 0&&(d=_(X,wt));let ot=b?_(X,wt):d;return ot.width=X,ot.height=wt,ot.getContext("2d").drawImage(R,0,0,X,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+X+"x"+wt+")."),ot}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function m(R){return R.generateMipmaps}function h(R){e.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?e.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(R,b,z,Z,tt=!1){if(R!==null){if(e[R]!==void 0)return e[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=b;if(b===e.RED&&(z===e.FLOAT&&(X=e.R32F),z===e.HALF_FLOAT&&(X=e.R16F),z===e.UNSIGNED_BYTE&&(X=e.R8)),b===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.R8UI),z===e.UNSIGNED_SHORT&&(X=e.R16UI),z===e.UNSIGNED_INT&&(X=e.R32UI),z===e.BYTE&&(X=e.R8I),z===e.SHORT&&(X=e.R16I),z===e.INT&&(X=e.R32I)),b===e.RG&&(z===e.FLOAT&&(X=e.RG32F),z===e.HALF_FLOAT&&(X=e.RG16F),z===e.UNSIGNED_BYTE&&(X=e.RG8)),b===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.RG8UI),z===e.UNSIGNED_SHORT&&(X=e.RG16UI),z===e.UNSIGNED_INT&&(X=e.RG32UI),z===e.BYTE&&(X=e.RG8I),z===e.SHORT&&(X=e.RG16I),z===e.INT&&(X=e.RG32I)),b===e.RGB_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.RGB8UI),z===e.UNSIGNED_SHORT&&(X=e.RGB16UI),z===e.UNSIGNED_INT&&(X=e.RGB32UI),z===e.BYTE&&(X=e.RGB8I),z===e.SHORT&&(X=e.RGB16I),z===e.INT&&(X=e.RGB32I)),b===e.RGBA_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.RGBA8UI),z===e.UNSIGNED_SHORT&&(X=e.RGBA16UI),z===e.UNSIGNED_INT&&(X=e.RGBA32UI),z===e.BYTE&&(X=e.RGBA8I),z===e.SHORT&&(X=e.RGBA16I),z===e.INT&&(X=e.RGBA32I)),b===e.RGB&&(z===e.UNSIGNED_INT_5_9_9_9_REV&&(X=e.RGB9_E5),z===e.UNSIGNED_INT_10F_11F_11F_REV&&(X=e.R11F_G11F_B10F)),b===e.RGBA){let wt=tt?zl:ee.getTransfer(Z);z===e.FLOAT&&(X=e.RGBA32F),z===e.HALF_FLOAT&&(X=e.RGBA16F),z===e.UNSIGNED_BYTE&&(X=wt===ue?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(R,b){let z;return R?b===null||b===ua||b===yo?z=e.DEPTH24_STENCIL8:b===Bi?z=e.DEPTH32F_STENCIL8:b===go&&(z=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ua||b===yo?z=e.DEPTH_COMPONENT24:b===Bi?z=e.DEPTH_COMPONENT32F:b===go&&(z=e.DEPTH_COMPONENT16),z}function w(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ci&&R.minFilter!==Si?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function D(R){let b=R.target;b.removeEventListener("dispose",D),U(b),b.isVideoTexture&&u.delete(b)}function A(R){let b=R.target;b.removeEventListener("dispose",A),M(b)}function U(R){let b=i.get(R);if(b.__webglInit===void 0)return;let z=R.source,Z=f.get(z);if(Z){let tt=Z[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(R),Object.keys(Z).length===0&&f.delete(z)}i.remove(R)}function E(R){let b=i.get(R);e.deleteTexture(b.__webglTexture);let z=R.source,Z=f.get(z);delete Z[b.__cacheKey],r.memory.textures--}function M(R){let b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let tt=0;tt<b.__webglFramebuffer[Z].length;tt++)e.deleteFramebuffer(b.__webglFramebuffer[Z][tt]);else e.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)e.deleteFramebuffer(b.__webglFramebuffer[Z]);else e.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&e.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&e.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&e.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let z=R.textures;for(let Z=0,tt=z.length;Z<tt;Z++){let X=i.get(z[Z]);X.__webglTexture&&(e.deleteTexture(X.__webglTexture),r.memory.textures--),i.remove(z[Z])}i.remove(R)}let N=0;function F(){N=0}function k(){let R=N;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),N+=1,R}function q(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function Y(R,b){let z=i.get(R);if(R.isVideoTexture&&kt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){let Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,R,b);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+b)}function B(R,b){let z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){K(z,R,b);return}n.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+b)}function W(R,b){let z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){K(z,R,b);return}n.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+b)}function H(R,b){let z=i.get(R);if(R.version>0&&z.__version!==R.version){$(z,R,b);return}n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+b)}let rt={[mh]:e.REPEAT,[na]:e.CLAMP_TO_EDGE,[gh]:e.MIRRORED_REPEAT},ct={[ci]:e.NEAREST,[Qb]:e.NEAREST_MIPMAP_NEAREST,[rc]:e.NEAREST_MIPMAP_LINEAR,[Si]:e.LINEAR,[Zh]:e.LINEAR_MIPMAP_NEAREST,[ca]:e.LINEAR_MIPMAP_LINEAR},Q={[nS]:e.NEVER,[lS]:e.ALWAYS,[iS]:e.LESS,[bg]:e.LEQUAL,[sS]:e.EQUAL,[oS]:e.GEQUAL,[aS]:e.GREATER,[rS]:e.NOTEQUAL};function It(R,b){if(b.type===Bi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Si||b.magFilter===Zh||b.magFilter===rc||b.magFilter===ca||b.minFilter===Si||b.minFilter===Zh||b.minFilter===rc||b.minFilter===ca)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,rt[b.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,rt[b.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,rt[b.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,ct[b.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,ct[b.minFilter]),b.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,Q[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ci||b.minFilter!==rc&&b.minFilter!==ca||b.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function te(R,b){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",D));let Z=b.source,tt=f.get(Z);tt===void 0&&(tt={},f.set(Z,tt));let X=q(b);if(X!==R.__cacheKey){tt[X]===void 0&&(tt[X]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,z=!0),tt[X].usedTimes++;let wt=tt[R.__cacheKey];wt!==void 0&&(tt[R.__cacheKey].usedTimes--,wt.usedTimes===0&&E(b)),R.__cacheKey=X,R.__webglTexture=tt[X].texture}return z}function ie(R,b,z){return Math.floor(Math.floor(R/z)/b)}function Kt(R,b,z,Z){let X=R.updateRanges;if(X.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,b.width,b.height,z,Z,b.data);else{X.sort((st,dt)=>st.start-dt.start);let wt=0;for(let st=1;st<X.length;st++){let dt=X[wt],Lt=X[st],At=dt.start+dt.count,ht=ie(Lt.start,b.width,4),Gt=ie(dt.start,b.width,4);Lt.start<=At+1&&ht===Gt&&ie(Lt.start+Lt.count-1,b.width,4)===ht?dt.count=Math.max(dt.count,Lt.start+Lt.count-dt.start):(++wt,X[wt]=Lt)}X.length=wt+1;let ot=e.getParameter(e.UNPACK_ROW_LENGTH),Et=e.getParameter(e.UNPACK_SKIP_PIXELS),Tt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,b.width);for(let st=0,dt=X.length;st<dt;st++){let Lt=X[st],At=Math.floor(Lt.start/4),ht=Math.ceil(Lt.count/4),Gt=At%b.width,L=Math.floor(At/b.width),at=ht,lt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Gt),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,Gt,L,at,lt,z,Z,b.data)}R.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ot),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Et),e.pixelStorei(e.UNPACK_SKIP_ROWS,Tt)}}function K(R,b,z){let Z=e.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=e.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=e.TEXTURE_3D);let tt=te(R,b),X=b.source;n.bindTexture(Z,R.__webglTexture,e.TEXTURE0+z);let wt=i.get(X);if(X.version!==wt.__version||tt===!0){n.activeTexture(e.TEXTURE0+z);let ot=ee.getPrimaries(ee.workingColorSpace),Et=b.colorSpace===vs?null:ee.getPrimaries(b.colorSpace),Tt=b.colorSpace===vs||ot===Et?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let st=x(b.image,!1,s.maxTextureSize);st=Ke(b,st);let dt=a.convert(b.format,b.colorSpace),Lt=a.convert(b.type),At=y(b.internalFormat,dt,Lt,b.colorSpace,b.isVideoTexture);It(Z,b);let ht,Gt=b.mipmaps,L=b.isVideoTexture!==!0,at=wt.__version===void 0||tt===!0,lt=X.dataReady,_t=w(b,st);if(b.isDepthTexture)At=v(b.format===vo,b.type),at&&(L?n.texStorage2D(e.TEXTURE_2D,1,At,st.width,st.height):n.texImage2D(e.TEXTURE_2D,0,At,st.width,st.height,0,dt,Lt,null));else if(b.isDataTexture)if(Gt.length>0){L&&at&&n.texStorage2D(e.TEXTURE_2D,_t,At,Gt[0].width,Gt[0].height);for(let nt=0,j=Gt.length;nt<j;nt++)ht=Gt[nt],L?lt&&n.texSubImage2D(e.TEXTURE_2D,nt,0,0,ht.width,ht.height,dt,Lt,ht.data):n.texImage2D(e.TEXTURE_2D,nt,At,ht.width,ht.height,0,dt,Lt,ht.data);b.generateMipmaps=!1}else L?(at&&n.texStorage2D(e.TEXTURE_2D,_t,At,st.width,st.height),lt&&Kt(b,st,dt,Lt)):n.texImage2D(e.TEXTURE_2D,0,At,st.width,st.height,0,dt,Lt,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){L&&at&&n.texStorage3D(e.TEXTURE_2D_ARRAY,_t,At,Gt[0].width,Gt[0].height,st.depth);for(let nt=0,j=Gt.length;nt<j;nt++)if(ht=Gt[nt],b.format!==di)if(dt!==null)if(L){if(lt)if(b.layerUpdates.size>0){let St=Rg(ht.width,ht.height,b.format,b.type);for(let Bt of b.layerUpdates){let _e=ht.data.subarray(Bt*St/ht.data.BYTES_PER_ELEMENT,(Bt+1)*St/ht.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,nt,0,0,Bt,ht.width,ht.height,1,dt,_e)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,nt,0,0,0,ht.width,ht.height,st.depth,dt,ht.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,nt,At,ht.width,ht.height,st.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?lt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,nt,0,0,0,ht.width,ht.height,st.depth,dt,Lt,ht.data):n.texImage3D(e.TEXTURE_2D_ARRAY,nt,At,ht.width,ht.height,st.depth,0,dt,Lt,ht.data)}else{L&&at&&n.texStorage2D(e.TEXTURE_2D,_t,At,Gt[0].width,Gt[0].height);for(let nt=0,j=Gt.length;nt<j;nt++)ht=Gt[nt],b.format!==di?dt!==null?L?lt&&n.compressedTexSubImage2D(e.TEXTURE_2D,nt,0,0,ht.width,ht.height,dt,ht.data):n.compressedTexImage2D(e.TEXTURE_2D,nt,At,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?lt&&n.texSubImage2D(e.TEXTURE_2D,nt,0,0,ht.width,ht.height,dt,Lt,ht.data):n.texImage2D(e.TEXTURE_2D,nt,At,ht.width,ht.height,0,dt,Lt,ht.data)}else if(b.isDataArrayTexture)if(L){if(at&&n.texStorage3D(e.TEXTURE_2D_ARRAY,_t,At,st.width,st.height,st.depth),lt)if(b.layerUpdates.size>0){let nt=Rg(st.width,st.height,b.format,b.type);for(let j of b.layerUpdates){let St=st.data.subarray(j*nt/st.data.BYTES_PER_ELEMENT,(j+1)*nt/st.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,j,st.width,st.height,1,dt,Lt,St)}b.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,dt,Lt,st.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,At,st.width,st.height,st.depth,0,dt,Lt,st.data);else if(b.isData3DTexture)L?(at&&n.texStorage3D(e.TEXTURE_3D,_t,At,st.width,st.height,st.depth),lt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,dt,Lt,st.data)):n.texImage3D(e.TEXTURE_3D,0,At,st.width,st.height,st.depth,0,dt,Lt,st.data);else if(b.isFramebufferTexture){if(at)if(L)n.texStorage2D(e.TEXTURE_2D,_t,At,st.width,st.height);else{let nt=st.width,j=st.height;for(let St=0;St<_t;St++)n.texImage2D(e.TEXTURE_2D,St,At,nt,j,0,dt,Lt,null),nt>>=1,j>>=1}}else if(Gt.length>0){if(L&&at){let nt=Pe(Gt[0]);n.texStorage2D(e.TEXTURE_2D,_t,At,nt.width,nt.height)}for(let nt=0,j=Gt.length;nt<j;nt++)ht=Gt[nt],L?lt&&n.texSubImage2D(e.TEXTURE_2D,nt,0,0,dt,Lt,ht):n.texImage2D(e.TEXTURE_2D,nt,At,dt,Lt,ht);b.generateMipmaps=!1}else if(L){if(at){let nt=Pe(st);n.texStorage2D(e.TEXTURE_2D,_t,At,nt.width,nt.height)}lt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,dt,Lt,st)}else n.texImage2D(e.TEXTURE_2D,0,At,dt,Lt,st);m(b)&&h(Z),wt.__version=X.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function $(R,b,z){if(b.image.length!==6)return;let Z=te(R,b),tt=b.source;n.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+z);let X=i.get(tt);if(tt.version!==X.__version||Z===!0){n.activeTexture(e.TEXTURE0+z);let wt=ee.getPrimaries(ee.workingColorSpace),ot=b.colorSpace===vs?null:ee.getPrimaries(b.colorSpace),Et=b.colorSpace===vs||wt===ot?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let Tt=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,dt=[];for(let j=0;j<6;j++)!Tt&&!st?dt[j]=x(b.image[j],!0,s.maxCubemapSize):dt[j]=st?b.image[j].image:b.image[j],dt[j]=Ke(b,dt[j]);let Lt=dt[0],At=a.convert(b.format,b.colorSpace),ht=a.convert(b.type),Gt=y(b.internalFormat,At,ht,b.colorSpace),L=b.isVideoTexture!==!0,at=X.__version===void 0||Z===!0,lt=tt.dataReady,_t=w(b,Lt);It(e.TEXTURE_CUBE_MAP,b);let nt;if(Tt){L&&at&&n.texStorage2D(e.TEXTURE_CUBE_MAP,_t,Gt,Lt.width,Lt.height);for(let j=0;j<6;j++){nt=dt[j].mipmaps;for(let St=0;St<nt.length;St++){let Bt=nt[St];b.format!==di?At!==null?L?lt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,0,0,Bt.width,Bt.height,At,Bt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,Gt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?lt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,0,0,Bt.width,Bt.height,At,ht,Bt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,Gt,Bt.width,Bt.height,0,At,ht,Bt.data)}}}else{if(nt=b.mipmaps,L&&at){nt.length>0&&_t++;let j=Pe(dt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,_t,Gt,j.width,j.height)}for(let j=0;j<6;j++)if(st){L?lt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,dt[j].width,dt[j].height,At,ht,dt[j].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,dt[j].width,dt[j].height,0,At,ht,dt[j].data);for(let St=0;St<nt.length;St++){let _e=nt[St].image[j].image;L?lt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,0,0,_e.width,_e.height,At,ht,_e.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,Gt,_e.width,_e.height,0,At,ht,_e.data)}}else{L?lt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,At,ht,dt[j]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,At,ht,dt[j]);for(let St=0;St<nt.length;St++){let Bt=nt[St];L?lt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,0,0,At,ht,Bt.image[j]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,Gt,At,ht,Bt.image[j])}}}m(b)&&h(e.TEXTURE_CUBE_MAP),X.__version=tt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function mt(R,b,z,Z,tt,X){let wt=a.convert(z.format,z.colorSpace),ot=a.convert(z.type),Et=y(z.internalFormat,wt,ot,z.colorSpace),Tt=i.get(b),st=i.get(z);if(st.__renderTarget=b,!Tt.__hasExternalTextures){let dt=Math.max(1,b.width>>X),Lt=Math.max(1,b.height>>X);tt===e.TEXTURE_3D||tt===e.TEXTURE_2D_ARRAY?n.texImage3D(tt,X,Et,dt,Lt,b.depth,0,wt,ot,null):n.texImage2D(tt,X,Et,dt,Lt,0,wt,ot,null)}n.bindFramebuffer(e.FRAMEBUFFER,R),Mt(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,tt,st.__webglTexture,0,Te(b)):(tt===e.TEXTURE_2D||tt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Z,tt,st.__webglTexture,X),n.bindFramebuffer(e.FRAMEBUFFER,null)}function vt(R,b,z){if(e.bindRenderbuffer(e.RENDERBUFFER,R),b.depthBuffer){let Z=b.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,X=v(b.stencilBuffer,tt),wt=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=Te(b);Mt(b)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ot,X,b.width,b.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,ot,X,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,X,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,wt,e.RENDERBUFFER,R)}else{let Z=b.textures;for(let tt=0;tt<Z.length;tt++){let X=Z[tt],wt=a.convert(X.format,X.colorSpace),ot=a.convert(X.type),Et=y(X.internalFormat,wt,ot,X.colorSpace),Tt=Te(b);z&&Mt(b)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Tt,Et,b.width,b.height):Mt(b)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Tt,Et,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,Et,b.width,b.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function pt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);let tt=Z.__webglTexture,X=Te(b);if(b.depthTexture.format===ro)Mt(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,tt,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,tt,0);else if(b.depthTexture.format===vo)Mt(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,tt,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function et(R){let b=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let Z=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){let tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=Z}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let Z=R.texture.mipmaps;Z&&Z.length>0?pt(b.__webglFramebuffer[0],R):pt(b.__webglFramebuffer,R)}else if(z){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=e.createRenderbuffer(),vt(b.__webglDepthbuffer[Z],R,!1);else{let tt=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=b.__webglDepthbuffer[Z];e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,tt,e.RENDERBUFFER,X)}}else{let Z=R.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=e.createRenderbuffer(),vt(b.__webglDepthbuffer,R,!1);else{let tt=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=b.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,tt,e.RENDERBUFFER,X)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function yt(R,b,z){let Z=i.get(R);b!==void 0&&mt(Z.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&et(R)}function C(R){let b=R.texture,z=i.get(R),Z=i.get(b);R.addEventListener("dispose",A);let tt=R.textures,X=R.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(Z.__webglTexture===void 0&&(Z.__webglTexture=e.createTexture()),Z.__version=b.version,r.memory.textures++),X){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let Et=0;Et<b.mipmaps.length;Et++)z.__webglFramebuffer[ot][Et]=e.createFramebuffer()}else z.__webglFramebuffer[ot]=e.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<b.mipmaps.length;ot++)z.__webglFramebuffer[ot]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(wt)for(let ot=0,Et=tt.length;ot<Et;ot++){let Tt=i.get(tt[ot]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=e.createTexture(),r.memory.textures++)}if(R.samples>0&&Mt(R)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ot=0;ot<tt.length;ot++){let Et=tt[ot];z.__webglColorRenderbuffer[ot]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[ot]);let Tt=a.convert(Et.format,Et.colorSpace),st=a.convert(Et.type),dt=y(Et.internalFormat,Tt,st,Et.colorSpace,R.isXRRenderTarget===!0),Lt=Te(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,Lt,dt,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,z.__webglColorRenderbuffer[ot])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),vt(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(X){n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),It(e.TEXTURE_CUBE_MAP,b);for(let ot=0;ot<6;ot++)if(b.mipmaps&&b.mipmaps.length>0)for(let Et=0;Et<b.mipmaps.length;Et++)mt(z.__webglFramebuffer[ot][Et],R,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Et);else mt(z.__webglFramebuffer[ot],R,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(b)&&h(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(wt){for(let ot=0,Et=tt.length;ot<Et;ot++){let Tt=tt[ot],st=i.get(Tt),dt=e.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(dt,st.__webglTexture),It(dt,Tt),mt(z.__webglFramebuffer,R,Tt,e.COLOR_ATTACHMENT0+ot,dt,0),m(Tt)&&h(dt)}n.unbindTexture()}else{let ot=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ot,Z.__webglTexture),It(ot,b),b.mipmaps&&b.mipmaps.length>0)for(let Et=0;Et<b.mipmaps.length;Et++)mt(z.__webglFramebuffer[Et],R,b,e.COLOR_ATTACHMENT0,ot,Et);else mt(z.__webglFramebuffer,R,b,e.COLOR_ATTACHMENT0,ot,0);m(b)&&h(ot),n.unbindTexture()}R.depthBuffer&&et(R)}function Qt(R){let b=R.textures;for(let z=0,Z=b.length;z<Z;z++){let tt=b[z];if(m(tt)){let X=g(R),wt=i.get(tt).__webglTexture;n.bindTexture(X,wt),h(X),n.unbindTexture()}}}let Dt=[],Ut=[];function xt(R){if(R.samples>0){if(Mt(R)===!1){let b=R.textures,z=R.width,Z=R.height,tt=e.COLOR_BUFFER_BIT,X=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,wt=i.get(R),ot=b.length>1;if(ot)for(let Tt=0;Tt<b.length;Tt++)n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let Et=R.texture.mipmaps;Et&&Et.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Tt=0;Tt<b.length;Tt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=e.STENCIL_BUFFER_BIT)),ot){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,wt.__webglColorRenderbuffer[Tt]);let st=i.get(b[Tt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,st,0)}e.blitFramebuffer(0,0,z,Z,0,0,z,Z,tt,e.NEAREST),l===!0&&(Dt.length=0,Ut.length=0,Dt.push(e.COLOR_ATTACHMENT0+Tt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Dt.push(X),Ut.push(X),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ut)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Dt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ot)for(let Tt=0;Tt<b.length;Tt++){n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.RENDERBUFFER,wt.__webglColorRenderbuffer[Tt]);let st=i.get(b[Tt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.TEXTURE_2D,st,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[b])}}}function Te(R){return Math.min(s.maxSamples,R.samples)}function Mt(R){let b=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function kt(R){let b=r.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function Ke(R,b){let z=R.colorSpace,Z=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Va&&z!==vs&&(ee.getTransfer(z)===ue?(Z!==di||tt!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function Pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=H,this.rebindTextures=yt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Mt}function yR(e,t){function n(i,s=vs){let a,r=ee.getTransfer(s);if(i===Ti)return e.UNSIGNED_BYTE;if(i===Jh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===jh)return e.UNSIGNED_SHORT_5_5_5_1;if(i===pg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===mg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===fg)return e.BYTE;if(i===dg)return e.SHORT;if(i===go)return e.UNSIGNED_SHORT;if(i===Kh)return e.INT;if(i===ua)return e.UNSIGNED_INT;if(i===Bi)return e.FLOAT;if(i===_o)return e.HALF_FLOAT;if(i===gg)return e.ALPHA;if(i===_g)return e.RGB;if(i===di)return e.RGBA;if(i===ro)return e.DEPTH_COMPONENT;if(i===vo)return e.DEPTH_STENCIL;if(i===yg)return e.RED;if(i===Qh)return e.RED_INTEGER;if(i===vg)return e.RG;if(i===$h)return e.RG_INTEGER;if(i===tf)return e.RGBA_INTEGER;if(i===oc||i===lc||i===cc||i===uc)if(r===ue)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===oc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===oc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ef||i===nf||i===sf||i===af)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===ef)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===af)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rf||i===of||i===lf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===rf||i===of)return r===ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===lf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cf||i===uf||i===hf||i===ff||i===df||i===pf||i===mf||i===gf||i===_f||i===yf||i===vf||i===xf||i===bf||i===Sf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===cf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ff)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===df)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_f)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mf||i===Ef||i===Tf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Mf)return r===ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ef)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Af||i===wf||i===Cf||i===Rf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Af)return a.COMPRESSED_RED_RGTC1_EXT;if(i===wf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var vR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Jl(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Ei({vertexShader:vR,fragmentShader:xR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Dn(new jl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kg=class extends Ii{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null,x=typeof XRWebGLBinding<"u",m=new Gg,h={},g=n.getContextAttributes(),y=null,v=null,w=[],D=[],A=new zt,U=null,E=new un;E.viewport=new Ue;let M=new un;M.viewport=new Ue;let N=[E,M],F=new Bh,k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let $=w[K];return $===void 0&&($=new ho,w[K]=$),$.getTargetRaySpace()},this.getControllerGrip=function(K){let $=w[K];return $===void 0&&($=new ho,w[K]=$),$.getGripSpace()},this.getHand=function(K){let $=w[K];return $===void 0&&($=new ho,w[K]=$),$.getHandSpace()};function Y(K){let $=D.indexOf(K.inputSource);if($===-1)return;let mt=w[$];mt!==void 0&&(mt.update(K.inputSource,K.frame,c||r),mt.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",W);for(let K=0;K<w.length;K++){let $=D[K];$!==null&&(D[K]=null,w[K].disconnect($))}k=null,q=null,m.reset();for(let K in h)delete h[K];t.setRenderTarget(y),p=null,f=null,d=null,s=null,v=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(U),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",B),s.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await n.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,vt=null,pt=null;g.depth&&(pt=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,mt=g.stencil?vo:ro,vt=g.stencil?yo:ua);let et={colorFormat:n.RGBA8,depthFormat:pt,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(et),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Pi(f.textureWidth,f.textureHeight,{format:di,type:Ti,depthTexture:new Kl(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let mt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,mt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Pi(p.framebufferWidth,p.framebufferHeight,{format:di,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(K){for(let $=0;$<K.removed.length;$++){let mt=K.removed[$],vt=D.indexOf(mt);vt>=0&&(D[vt]=null,w[vt].disconnect(mt))}for(let $=0;$<K.added.length;$++){let mt=K.added[$],vt=D.indexOf(mt);if(vt===-1){for(let et=0;et<w.length;et++)if(et>=D.length){D.push(mt),vt=et;break}else if(D[et]===null){D[et]=mt,vt=et;break}if(vt===-1)break}let pt=w[vt];pt&&pt.connect(mt)}}let H=new P,rt=new P;function ct(K,$,mt){H.setFromMatrixPosition($.matrixWorld),rt.setFromMatrixPosition(mt.matrixWorld);let vt=H.distanceTo(rt),pt=$.projectionMatrix.elements,et=mt.projectionMatrix.elements,yt=pt[14]/(pt[10]-1),C=pt[14]/(pt[10]+1),Qt=(pt[9]+1)/pt[5],Dt=(pt[9]-1)/pt[5],Ut=(pt[8]-1)/pt[0],xt=(et[8]+1)/et[0],Te=yt*Ut,Mt=yt*xt,kt=vt/(-Ut+xt),Ke=kt*-Ut;if($.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ke),K.translateZ(kt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),pt[10]===-1)K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let Pe=yt+kt,R=C+kt,b=Te-Ke,z=Mt+(vt-Ke),Z=Qt*C/R*Pe,tt=Dt*C/R*Pe;K.projectionMatrix.makePerspective(b,z,Z,tt,Pe,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Q(K,$){$===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices($.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let $=K.near,mt=K.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),F.near=M.near=E.near=$,F.far=M.far=E.far=mt,(k!==F.near||q!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,q=F.far),F.layers.mask=K.layers.mask|6,E.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;let vt=K.parent,pt=F.cameras;Q(F,vt);for(let et=0;et<pt.length;et++)Q(pt[et],vt);pt.length===2?ct(F,E,M):F.projectionMatrix.copy(E.projectionMatrix),It(K,F,vt)};function It(K,$,mt){mt===null?K.matrix.copy($.matrixWorld):(K.matrix.copy(mt.matrixWorld),K.matrix.invert(),K.matrix.multiply($.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=oo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(K){return h[K]};let te=null;function ie(K,$){if(u=$.getViewerPose(c||r),_=$,u!==null){let mt=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let vt=!1;mt.length!==F.cameras.length&&(F.cameras.length=0,vt=!0);for(let C=0;C<mt.length;C++){let Qt=mt[C],Dt=null;if(p!==null)Dt=p.getViewport(Qt);else{let xt=d.getViewSubImage(f,Qt);Dt=xt.viewport,C===0&&(t.setRenderTargetTextures(v,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(v))}let Ut=N[C];Ut===void 0&&(Ut=new un,Ut.layers.enable(C),Ut.viewport=new Ue,N[C]=Ut),Ut.matrix.fromArray(Qt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Qt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),C===0&&(F.matrix.copy(Ut.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),vt===!0&&F.cameras.push(Ut)}let pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let C=d.getDepthInformation(mt[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(pt&&pt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let C=0;C<mt.length;C++){let Qt=mt[C].camera;if(Qt){let Dt=h[Qt];Dt||(Dt=new Jl,h[Qt]=Dt);let Ut=d.getCameraImage(Qt);Dt.sourceTexture=Ut}}}}for(let mt=0;mt<w.length;mt++){let vt=D[mt],pt=w[mt];vt!==null&&pt!==void 0&&pt.update(vt,$,c||r)}te&&te(K,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),_=null}let Kt=new zS;Kt.setAnimationLoop(ie),this.setAnimationLoop=function(K){te=K},this.dispose=function(){}}},Ka=new Mi,bR=new Ie;function SR(e,t){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Ag(e)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,g,y,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),d(m,h)):h.isMeshPhongMaterial?(a(m,h),u(m,h)):h.isMeshStandardMaterial?(a(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,v)):h.isMeshMatcapMaterial?(a(m,h),_(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),x(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(r(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,g,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===vn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===vn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let g=t.get(h),y=g.envMap,v=g.envMapRotation;y&&(m.envMap.value=y,Ka.copy(v),Ka.x*=-1,Ka.y*=-1,Ka.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ka.y*=-1,Ka.z*=-1),m.envMapRotation.value.setFromMatrix4(bR.makeRotationFromEuler(Ka)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function r(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=y*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===vn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){let g=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function MR(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){let v=y.program;i.uniformBlockBinding(g,v)}function c(g,y){let v=s[g.id];v===void 0&&(_(g),v=u(g),s[g.id]=v,g.addEventListener("dispose",m));let w=y.program;i.updateUBOMapping(g,w);let D=t.render.frame;a[g.id]!==D&&(f(g),a[g.id]=D)}function u(g){let y=d();g.__bindingPointIndex=y;let v=e.createBuffer(),w=g.__size,D=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,w,D),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,y,v),v}function d(){for(let g=0;g<o;g++)if(r.indexOf(g)===-1)return r.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){let y=s[g.id],v=g.uniforms,w=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let D=0,A=v.length;D<A;D++){let U=Array.isArray(v[D])?v[D]:[v[D]];for(let E=0,M=U.length;E<M;E++){let N=U[E];if(p(N,D,E,w)===!0){let F=N.__offset,k=Array.isArray(N.value)?N.value:[N.value],q=0;for(let Y=0;Y<k.length;Y++){let B=k[Y],W=x(B);typeof B=="number"||typeof B=="boolean"?(N.__data[0]=B,e.bufferSubData(e.UNIFORM_BUFFER,F+q,N.__data)):B.isMatrix3?(N.__data[0]=B.elements[0],N.__data[1]=B.elements[1],N.__data[2]=B.elements[2],N.__data[3]=0,N.__data[4]=B.elements[3],N.__data[5]=B.elements[4],N.__data[6]=B.elements[5],N.__data[7]=0,N.__data[8]=B.elements[6],N.__data[9]=B.elements[7],N.__data[10]=B.elements[8],N.__data[11]=0):(B.toArray(N.__data,q),q+=W.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,N.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,y,v,w){let D=g.value,A=y+"_"+v;if(w[A]===void 0)return typeof D=="number"||typeof D=="boolean"?w[A]=D:w[A]=D.clone(),!0;{let U=w[A];if(typeof D=="number"||typeof D=="boolean"){if(U!==D)return w[A]=D,!0}else if(U.equals(D)===!1)return U.copy(D),!0}return!1}function _(g){let y=g.uniforms,v=0,w=16;for(let A=0,U=y.length;A<U;A++){let E=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,N=E.length;M<N;M++){let F=E[M],k=Array.isArray(F.value)?F.value:[F.value];for(let q=0,Y=k.length;q<Y;q++){let B=k[q],W=x(B),H=v%w,rt=H%W.boundary,ct=H+rt;v+=rt,ct!==0&&w-ct<W.storage&&(v+=w-ct),F.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=W.storage}}}let D=v%w;return D>0&&(v+=w-D),g.__size=v,g.__cache={},this}function x(g){let y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),y}function m(g){let y=g.target;y.removeEventListener("dispose",m);let v=r.indexOf(y.__bindingPointIndex);r.splice(v,1),e.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function h(){for(let g in s)e.deleteBuffer(s[g]);r=[],s={},a={}}return{bind:l,update:c,dispose:h}}var Of=class{constructor(t={}){let{canvas:n=cS(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let _=new Uint32Array(4),x=new Int32Array(4),m=null,h=null,g=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ys,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,w=!1;this._outputColorSpace=yn;let D=0,A=0,U=null,E=-1,M=null,N=new Ue,F=new Ue,k=null,q=new Xt(0),Y=0,B=n.width,W=n.height,H=1,rt=null,ct=null,Q=new Ue(0,0,B,W),It=new Ue(0,0,B,W),te=!1,ie=new fo,Kt=!1,K=!1,$=new Ie,mt=new P,vt=new Ue,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function yt(){return U===null?H:1}let C=i;function Qt(T,O){return n.getContext(T,O)}try{let T={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",lt,!1),n.addEventListener("webglcontextrestored",_t,!1),n.addEventListener("webglcontextcreationerror",nt,!1),C===null){let O="webgl2";if(C=Qt(O,T),C===null)throw Qt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Dt,Ut,xt,Te,Mt,kt,Ke,Pe,R,b,z,Z,tt,X,wt,ot,Et,Tt,st,dt,Lt,At,ht,Gt;function L(){Dt=new VC(C),Dt.init(),At=new yR(C,Dt),Ut=new OC(C,Dt,t,At),xt=new gR(C,Dt),Ut.reversedDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),Te=new XC(C),Mt=new iR,kt=new _R(C,Dt,xt,Mt,Ut,At,Te),Ke=new PC(v),Pe=new HC(v),R=new JT(C),ht=new NC(C,R),b=new GC(C,R,Te,ht),z=new qC(C,b,R,Te),st=new WC(C,Ut,kt),ot=new IC(Mt),Z=new nR(v,Ke,Pe,Dt,Ut,ht,ot),tt=new SR(v,Mt),X=new aR,wt=new hR(Dt),Tt=new UC(v,Ke,Pe,xt,z,p,l),Et=new pR(v,z,Ut),Gt=new MR(C,Te,Ut,xt),dt=new LC(C,Dt,Te),Lt=new kC(C,Dt,Te),Te.programs=Z.programs,v.capabilities=Ut,v.extensions=Dt,v.properties=Mt,v.renderLists=X,v.shadowMap=Et,v.state=xt,v.info=Te}L();let at=new kg(v,C);this.xr=at,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let T=Dt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Dt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(B,W,!1))},this.getSize=function(T){return T.set(B,W)},this.setSize=function(T,O,V=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,W=O,n.width=Math.floor(T*H),n.height=Math.floor(O*H),V===!0&&(n.style.width=T+"px",n.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(B*H,W*H).floor()},this.setDrawingBufferSize=function(T,O,V){B=T,W=O,H=V,n.width=Math.floor(T*V),n.height=Math.floor(O*V),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,O,V,G){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,O,V,G),xt.viewport(N.copy(Q).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(It)},this.setScissor=function(T,O,V,G){T.isVector4?It.set(T.x,T.y,T.z,T.w):It.set(T,O,V,G),xt.scissor(F.copy(It).multiplyScalar(H).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(T){xt.setScissorTest(te=T)},this.setOpaqueSort=function(T){rt=T},this.setTransparentSort=function(T){ct=T},this.getClearColor=function(T){return T.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,V=!0){let G=0;if(T){let I=!1;if(U!==null){let it=U.texture.format;I=it===tf||it===$h||it===Qh}if(I){let it=U.texture.type,ft=it===Ti||it===ua||it===go||it===yo||it===Jh||it===jh,bt=Tt.getClearColor(),gt=Tt.getClearAlpha(),Nt=bt.r,Pt=bt.g,Ct=bt.b;ft?(_[0]=Nt,_[1]=Pt,_[2]=Ct,_[3]=gt,C.clearBufferuiv(C.COLOR,0,_)):(x[0]=Nt,x[1]=Pt,x[2]=Ct,x[3]=gt,C.clearBufferiv(C.COLOR,0,x))}else G|=C.COLOR_BUFFER_BIT}O&&(G|=C.DEPTH_BUFFER_BIT),V&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",lt,!1),n.removeEventListener("webglcontextrestored",_t,!1),n.removeEventListener("webglcontextcreationerror",nt,!1),Tt.dispose(),X.dispose(),wt.dispose(),Mt.dispose(),Ke.dispose(),Pe.dispose(),z.dispose(),ht.dispose(),Gt.dispose(),Z.dispose(),at.dispose(),at.removeEventListener("sessionstart",Ai),at.removeEventListener("sessionend",jg),fa.stop()};function lt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let T=Te.autoReset,O=Et.enabled,V=Et.autoUpdate,G=Et.needsUpdate,I=Et.type;L(),Te.autoReset=T,Et.enabled=O,Et.autoUpdate=V,Et.needsUpdate=G,Et.type=I}function nt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function j(T){let O=T.target;O.removeEventListener("dispose",j),St(O)}function St(T){Bt(T),Mt.remove(T)}function Bt(T){let O=Mt.get(T).programs;O!==void 0&&(O.forEach(function(V){Z.releaseProgram(V)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,V,G,I,it){O===null&&(O=pt);let ft=I.isMesh&&I.matrixWorld.determinant()<0,bt=QS(T,O,V,G,I);xt.setMaterial(G,ft);let gt=V.index,Nt=1;if(G.wireframe===!0){if(gt=b.getWireframeAttribute(V),gt===void 0)return;Nt=2}let Pt=V.drawRange,Ct=V.attributes.position,Jt=Pt.start*Nt,he=(Pt.start+Pt.count)*Nt;it!==null&&(Jt=Math.max(Jt,it.start*Nt),he=Math.min(he,(it.start+it.count)*Nt)),gt!==null?(Jt=Math.max(Jt,0),he=Math.min(he,gt.count)):Ct!=null&&(Jt=Math.max(Jt,0),he=Math.min(he,Ct.count));let Ne=he-Jt;if(Ne<0||Ne===1/0)return;ht.setup(I,G,bt,V,gt);let ve,me=dt;if(gt!==null&&(ve=R.get(gt),me=Lt,me.setIndex(ve)),I.isMesh)G.wireframe===!0?(xt.setLineWidth(G.wireframeLinewidth*yt()),me.setMode(C.LINES)):me.setMode(C.TRIANGLES);else if(I.isLine){let Rt=G.linewidth;Rt===void 0&&(Rt=1),xt.setLineWidth(Rt*yt()),I.isLineSegments?me.setMode(C.LINES):I.isLineLoop?me.setMode(C.LINE_LOOP):me.setMode(C.LINE_STRIP)}else I.isPoints?me.setMode(C.POINTS):I.isSprite&&me.setMode(C.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)lo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))me.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let Rt=I._multiDrawStarts,Re=I._multiDrawCounts,ne=I._multiDrawCount,Ln=gt?R.get(gt).bytesPerElement:1,Qa=Mt.get(G).currentProgram.getUniforms();for(let On=0;On<ne;On++)Qa.setValue(C,"_gl_DrawID",On),me.render(Rt[On]/Ln,Re[On])}else if(I.isInstancedMesh)me.renderInstances(Jt,Ne,I.count);else if(V.isInstancedBufferGeometry){let Rt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Re=Math.min(V.instanceCount,Rt);me.renderInstances(Jt,Ne,Re)}else me.render(Jt,Ne)};function _e(T,O,V){T.transparent===!0&&T.side===fi&&T.forceSinglePass===!1?(T.side=vn,T.needsUpdate=!0,dc(T,O,V),T.side=ms,T.needsUpdate=!0,dc(T,O,V),T.side=fi):dc(T,O,V)}this.compile=function(T,O,V=null){V===null&&(V=T),h=wt.get(V),h.init(O),y.push(h),V.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),T!==V&&T.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights();let G=new Set;return T.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let it=I.material;if(it)if(Array.isArray(it))for(let ft=0;ft<it.length;ft++){let bt=it[ft];_e(bt,V,I),G.add(bt)}else _e(it,V,I),G.add(it)}),h=y.pop(),G},this.compileAsync=function(T,O,V=null){let G=this.compile(T,O,V);return new Promise(I=>{function it(){if(G.forEach(function(ft){Mt.get(ft).currentProgram.isReady()&&G.delete(ft)}),G.size===0){I(T);return}setTimeout(it,10)}Dt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let re=null;function Vi(T){re&&re(T)}function Ai(){fa.stop()}function jg(){fa.start()}let fa=new zS;fa.setAnimationLoop(Vi),typeof self<"u"&&fa.setContext(self),this.setAnimationLoop=function(T){re=T,at.setAnimationLoop(T),T===null?fa.stop():fa.start()},at.addEventListener("sessionstart",Ai),at.addEventListener("sessionend",jg),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(O),O=at.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,U),h=wt.get(T,y.length),h.init(O),y.push(h),$.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ie.setFromProjectionMatrix($,bi,O.reversedDepth),K=this.localClippingEnabled,Kt=ot.init(this.clippingPlanes,K),m=X.get(T,g.length),m.init(),g.push(m),at.enabled===!0&&at.isPresenting===!0){let it=v.xr.getDepthSensingMesh();it!==null&&Hf(it,O,-1/0,v.sortObjects)}Hf(T,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(rt,ct),et=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,et&&Tt.addToRenderList(m,T),this.info.render.frame++,Kt===!0&&ot.beginShadows();let V=h.state.shadowsArray;Et.render(V,T,O),Kt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,I=m.transmissive;if(h.setupLights(),O.isArrayCamera){let it=O.cameras;if(I.length>0)for(let ft=0,bt=it.length;ft<bt;ft++){let gt=it[ft];$g(G,I,T,gt)}et&&Tt.render(T);for(let ft=0,bt=it.length;ft<bt;ft++){let gt=it[ft];Qg(m,T,gt,gt.viewport)}}else I.length>0&&$g(G,I,T,O),et&&Tt.render(T),Qg(m,T,O);U!==null&&A===0&&(kt.updateMultisampleRenderTarget(U),kt.updateRenderTargetMipmap(U)),T.isScene===!0&&T.onAfterRender(v,T,O),ht.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(h=y[y.length-1],Kt===!0&&ot.setGlobalState(v.clippingPlanes,h.state.camera)):h=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Hf(T,O,V,G){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ie.intersectsSprite(T)){G&&vt.setFromMatrixPosition(T.matrixWorld).applyMatrix4($);let ft=z.update(T),bt=T.material;bt.visible&&m.push(T,ft,bt,V,vt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ie.intersectsObject(T))){let ft=z.update(T),bt=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),vt.copy(T.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),vt.copy(ft.boundingSphere.center)),vt.applyMatrix4(T.matrixWorld).applyMatrix4($)),Array.isArray(bt)){let gt=ft.groups;for(let Nt=0,Pt=gt.length;Nt<Pt;Nt++){let Ct=gt[Nt],Jt=bt[Ct.materialIndex];Jt&&Jt.visible&&m.push(T,ft,Jt,V,vt.z,Ct)}}else bt.visible&&m.push(T,ft,bt,V,vt.z,null)}}let it=T.children;for(let ft=0,bt=it.length;ft<bt;ft++)Hf(it[ft],O,V,G)}function Qg(T,O,V,G){let I=T.opaque,it=T.transmissive,ft=T.transparent;h.setupLightsView(V),Kt===!0&&ot.setGlobalState(v.clippingPlanes,V),G&&xt.viewport(N.copy(G)),I.length>0&&fc(I,O,V),it.length>0&&fc(it,O,V),ft.length>0&&fc(ft,O,V),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function $g(T,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[G.id]===void 0&&(h.state.transmissionRenderTarget[G.id]=new Pi(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?_o:Ti,minFilter:ca,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let it=h.state.transmissionRenderTarget[G.id],ft=G.viewport||N;it.setSize(ft.z*v.transmissionResolutionScale,ft.w*v.transmissionResolutionScale);let bt=v.getRenderTarget(),gt=v.getActiveCubeFace(),Nt=v.getActiveMipmapLevel();v.setRenderTarget(it),v.getClearColor(q),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),et&&Tt.render(V);let Pt=v.toneMapping;v.toneMapping=ys;let Ct=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),h.setupLightsView(G),Kt===!0&&ot.setGlobalState(v.clippingPlanes,G),fc(T,V,G),kt.updateMultisampleRenderTarget(it),kt.updateRenderTargetMipmap(it),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let he=0,Ne=O.length;he<Ne;he++){let ve=O[he],me=ve.object,Rt=ve.geometry,Re=ve.material,ne=ve.group;if(Re.side===fi&&me.layers.test(G.layers)){let Ln=Re.side;Re.side=vn,Re.needsUpdate=!0,t0(me,V,G,Rt,Re,ne),Re.side=Ln,Re.needsUpdate=!0,Jt=!0}}Jt===!0&&(kt.updateMultisampleRenderTarget(it),kt.updateRenderTargetMipmap(it))}v.setRenderTarget(bt,gt,Nt),v.setClearColor(q,Y),Ct!==void 0&&(G.viewport=Ct),v.toneMapping=Pt}function fc(T,O,V){let G=O.isScene===!0?O.overrideMaterial:null;for(let I=0,it=T.length;I<it;I++){let ft=T[I],bt=ft.object,gt=ft.geometry,Nt=ft.group,Pt=ft.material;Pt.allowOverride===!0&&G!==null&&(Pt=G),bt.layers.test(V.layers)&&t0(bt,O,V,gt,Pt,Nt)}}function t0(T,O,V,G,I,it){T.onBeforeRender(v,O,V,G,I,it),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),I.onBeforeRender(v,O,V,G,T,it),I.transparent===!0&&I.side===fi&&I.forceSinglePass===!1?(I.side=vn,I.needsUpdate=!0,v.renderBufferDirect(V,O,G,I,T,it),I.side=ms,I.needsUpdate=!0,v.renderBufferDirect(V,O,G,I,T,it),I.side=fi):v.renderBufferDirect(V,O,G,I,T,it),T.onAfterRender(v,O,V,G,I,it)}function dc(T,O,V){O.isScene!==!0&&(O=pt);let G=Mt.get(T),I=h.state.lights,it=h.state.shadowsArray,ft=I.state.version,bt=Z.getParameters(T,I.state,it,O,V),gt=Z.getProgramCacheKey(bt),Nt=G.programs;G.environment=T.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(T.isMeshStandardMaterial?Pe:Ke).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Nt===void 0&&(T.addEventListener("dispose",j),Nt=new Map,G.programs=Nt);let Pt=Nt.get(gt);if(Pt!==void 0){if(G.currentProgram===Pt&&G.lightsStateVersion===ft)return n0(T,bt),Pt}else bt.uniforms=Z.getUniforms(T),T.onBeforeCompile(bt,v),Pt=Z.acquireProgram(bt,gt),Nt.set(gt,Pt),G.uniforms=bt.uniforms;let Ct=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ct.clippingPlanes=ot.uniform),n0(T,bt),G.needsLights=tM(T),G.lightsStateVersion=ft,G.needsLights&&(Ct.ambientLightColor.value=I.state.ambient,Ct.lightProbe.value=I.state.probe,Ct.directionalLights.value=I.state.directional,Ct.directionalLightShadows.value=I.state.directionalShadow,Ct.spotLights.value=I.state.spot,Ct.spotLightShadows.value=I.state.spotShadow,Ct.rectAreaLights.value=I.state.rectArea,Ct.ltc_1.value=I.state.rectAreaLTC1,Ct.ltc_2.value=I.state.rectAreaLTC2,Ct.pointLights.value=I.state.point,Ct.pointLightShadows.value=I.state.pointShadow,Ct.hemisphereLights.value=I.state.hemi,Ct.directionalShadowMap.value=I.state.directionalShadowMap,Ct.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ct.spotShadowMap.value=I.state.spotShadowMap,Ct.spotLightMatrix.value=I.state.spotLightMatrix,Ct.spotLightMap.value=I.state.spotLightMap,Ct.pointShadowMap.value=I.state.pointShadowMap,Ct.pointShadowMatrix.value=I.state.pointShadowMatrix),G.currentProgram=Pt,G.uniformsList=null,Pt}function e0(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=Mo.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function n0(T,O){let V=Mt.get(T);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function QS(T,O,V,G,I){O.isScene!==!0&&(O=pt),kt.resetTextureUnits();let it=O.fog,ft=G.isMeshStandardMaterial?O.environment:null,bt=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Va,gt=(G.isMeshStandardMaterial?Pe:Ke).get(G.envMap||ft),Nt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!V.morphAttributes.position,Jt=!!V.morphAttributes.normal,he=!!V.morphAttributes.color,Ne=ys;G.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ne=v.toneMapping);let ve=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,me=ve!==void 0?ve.length:0,Rt=Mt.get(G),Re=h.state.lights;if(Kt===!0&&(K===!0||T!==M)){let dn=T===M&&G.id===E;ot.setState(G,T,dn)}let ne=!1;G.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Re.state.version||Rt.outputColorSpace!==bt||I.isBatchedMesh&&Rt.batching===!1||!I.isBatchedMesh&&Rt.batching===!0||I.isBatchedMesh&&Rt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Rt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Rt.instancing===!1||!I.isInstancedMesh&&Rt.instancing===!0||I.isSkinnedMesh&&Rt.skinning===!1||!I.isSkinnedMesh&&Rt.skinning===!0||I.isInstancedMesh&&Rt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Rt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Rt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Rt.instancingMorph===!1&&I.morphTexture!==null||Rt.envMap!==gt||G.fog===!0&&Rt.fog!==it||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==ot.numPlanes||Rt.numIntersection!==ot.numIntersection)||Rt.vertexAlphas!==Nt||Rt.vertexTangents!==Pt||Rt.morphTargets!==Ct||Rt.morphNormals!==Jt||Rt.morphColors!==he||Rt.toneMapping!==Ne||Rt.morphTargetsCount!==me)&&(ne=!0):(ne=!0,Rt.__version=G.version);let Ln=Rt.currentProgram;ne===!0&&(Ln=dc(G,O,I));let Qa=!1,On=!1,Ao=!1,De=Ln.getUniforms(),Kn=Rt.uniforms;if(xt.useProgram(Ln.program)&&(Qa=!0,On=!0,Ao=!0),G.id!==E&&(E=G.id,On=!0),Qa||M!==T){xt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),De.setValue(C,"projectionMatrix",T.projectionMatrix),De.setValue(C,"viewMatrix",T.matrixWorldInverse);let xn=De.map.cameraPosition;xn!==void 0&&xn.setValue(C,mt.setFromMatrixPosition(T.matrixWorld)),Ut.logarithmicDepthBuffer&&De.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&De.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,On=!0,Ao=!0)}if(I.isSkinnedMesh){De.setOptional(C,I,"bindMatrix"),De.setOptional(C,I,"bindMatrixInverse");let dn=I.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),De.setValue(C,"boneTexture",dn.boneTexture,kt))}I.isBatchedMesh&&(De.setOptional(C,I,"batchingTexture"),De.setValue(C,"batchingTexture",I._matricesTexture,kt),De.setOptional(C,I,"batchingIdTexture"),De.setValue(C,"batchingIdTexture",I._indirectTexture,kt),De.setOptional(C,I,"batchingColorTexture"),I._colorsTexture!==null&&De.setValue(C,"batchingColorTexture",I._colorsTexture,kt));let Jn=V.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&st.update(I,V,Ln),(On||Rt.receiveShadow!==I.receiveShadow)&&(Rt.receiveShadow=I.receiveShadow,De.setValue(C,"receiveShadow",I.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Kn.envMap.value=gt,Kn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(Kn.envMapIntensity.value=O.environmentIntensity),On&&(De.setValue(C,"toneMappingExposure",v.toneMappingExposure),Rt.needsLights&&$S(Kn,Ao),it&&G.fog===!0&&tt.refreshFogUniforms(Kn,it),tt.refreshMaterialUniforms(Kn,G,H,W,h.state.transmissionRenderTarget[T.id]),Mo.upload(C,e0(Rt),Kn,kt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Mo.upload(C,e0(Rt),Kn,kt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&De.setValue(C,"center",I.center),De.setValue(C,"modelViewMatrix",I.modelViewMatrix),De.setValue(C,"normalMatrix",I.normalMatrix),De.setValue(C,"modelMatrix",I.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let dn=G.uniformsGroups;for(let xn=0,Vf=dn.length;xn<Vf;xn++){let da=dn[xn];Gt.update(da,Ln),Gt.bind(da,Ln)}}return Ln}function $S(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function tM(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(T,O,V){let G=Mt.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Mt.get(T.texture).__webglTexture=O,Mt.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let V=Mt.get(T);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0};let eM=C.createFramebuffer();this.setRenderTarget=function(T,O=0,V=0){U=T,D=O,A=V;let G=!0,I=null,it=!1,ft=!1;if(T){let gt=Mt.get(T);if(gt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(C.FRAMEBUFFER,null),G=!1;else if(gt.__webglFramebuffer===void 0)kt.setupRenderTarget(T);else if(gt.__hasExternalTextures)kt.rebindTextures(T,Mt.get(T.texture).__webglTexture,Mt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ct=T.depthTexture;if(gt.__boundDepthTexture!==Ct){if(Ct!==null&&Mt.has(Ct)&&(T.width!==Ct.image.width||T.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(T)}}let Nt=T.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ft=!0);let Pt=Mt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pt[O])?I=Pt[O][V]:I=Pt[O],it=!0):T.samples>0&&kt.useMultisampledRTT(T)===!1?I=Mt.get(T).__webglMultisampledFramebuffer:Array.isArray(Pt)?I=Pt[V]:I=Pt,N.copy(T.viewport),F.copy(T.scissor),k=T.scissorTest}else N.copy(Q).multiplyScalar(H).floor(),F.copy(It).multiplyScalar(H).floor(),k=te;if(V!==0&&(I=eM),xt.bindFramebuffer(C.FRAMEBUFFER,I)&&G&&xt.drawBuffers(T,I),xt.viewport(N),xt.scissor(F),xt.setScissorTest(k),it){let gt=Mt.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,gt.__webglTexture,V)}else if(ft){let gt=O;for(let Nt=0;Nt<T.textures.length;Nt++){let Pt=Mt.get(T.textures[Nt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Nt,Pt.__webglTexture,V,gt)}}else if(T!==null&&V!==0){let gt=Mt.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,gt.__webglTexture,V)}E=-1},this.readRenderTargetPixels=function(T,O,V,G,I,it,ft,bt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Mt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(gt=gt[ft]),gt){xt.bindFramebuffer(C.FRAMEBUFFER,gt);try{let Nt=T.textures[bt],Pt=Nt.format,Ct=Nt.type;if(!Ut.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-G&&V>=0&&V<=T.height-I&&(T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+bt),C.readPixels(O,V,G,I,At.convert(Pt),At.convert(Ct),it))}finally{let Nt=U!==null?Mt.get(U).__webglFramebuffer:null;xt.bindFramebuffer(C.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(T,O,V,G,I,it,ft,bt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Mt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(gt=gt[ft]),gt)if(O>=0&&O<=T.width-G&&V>=0&&V<=T.height-I){xt.bindFramebuffer(C.FRAMEBUFFER,gt);let Nt=T.textures[bt],Pt=Nt.format,Ct=Nt.type;if(!Ut.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Jt),C.bufferData(C.PIXEL_PACK_BUFFER,it.byteLength,C.STREAM_READ),T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+bt),C.readPixels(O,V,G,I,At.convert(Pt),At.convert(Ct),0);let he=U!==null?Mt.get(U).__webglFramebuffer:null;xt.bindFramebuffer(C.FRAMEBUFFER,he);let Ne=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await uS(C,Ne,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Jt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,it),C.deleteBuffer(Jt),C.deleteSync(Ne),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,V=0){let G=Math.pow(2,-V),I=Math.floor(T.image.width*G),it=Math.floor(T.image.height*G),ft=O!==null?O.x:0,bt=O!==null?O.y:0;kt.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,ft,bt,I,it),xt.unbindTexture()};let nM=C.createFramebuffer(),iM=C.createFramebuffer();this.copyTextureToTexture=function(T,O,V=null,G=null,I=0,it=null){it===null&&(I!==0?(lo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=I,I=0):it=0);let ft,bt,gt,Nt,Pt,Ct,Jt,he,Ne,ve=T.isCompressedTexture?T.mipmaps[it]:T.image;if(V!==null)ft=V.max.x-V.min.x,bt=V.max.y-V.min.y,gt=V.isBox3?V.max.z-V.min.z:1,Nt=V.min.x,Pt=V.min.y,Ct=V.isBox3?V.min.z:0;else{let Jn=Math.pow(2,-I);ft=Math.floor(ve.width*Jn),bt=Math.floor(ve.height*Jn),T.isDataArrayTexture?gt=ve.depth:T.isData3DTexture?gt=Math.floor(ve.depth*Jn):gt=1,Nt=0,Pt=0,Ct=0}G!==null?(Jt=G.x,he=G.y,Ne=G.z):(Jt=0,he=0,Ne=0);let me=At.convert(O.format),Rt=At.convert(O.type),Re;O.isData3DTexture?(kt.setTexture3D(O,0),Re=C.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(kt.setTexture2DArray(O,0),Re=C.TEXTURE_2D_ARRAY):(kt.setTexture2D(O,0),Re=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);let ne=C.getParameter(C.UNPACK_ROW_LENGTH),Ln=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Qa=C.getParameter(C.UNPACK_SKIP_PIXELS),On=C.getParameter(C.UNPACK_SKIP_ROWS),Ao=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ve.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ve.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Nt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Pt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ct);let De=T.isDataArrayTexture||T.isData3DTexture,Kn=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let Jn=Mt.get(T),dn=Mt.get(O),xn=Mt.get(Jn.__renderTarget),Vf=Mt.get(dn.__renderTarget);xt.bindFramebuffer(C.READ_FRAMEBUFFER,xn.__webglFramebuffer),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Vf.__webglFramebuffer);for(let da=0;da<gt;da++)De&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mt.get(T).__webglTexture,I,Ct+da),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mt.get(O).__webglTexture,it,Ne+da)),C.blitFramebuffer(Nt,Pt,ft,bt,Jt,he,ft,bt,C.DEPTH_BUFFER_BIT,C.NEAREST);xt.bindFramebuffer(C.READ_FRAMEBUFFER,null),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(I!==0||T.isRenderTargetTexture||Mt.has(T)){let Jn=Mt.get(T),dn=Mt.get(O);xt.bindFramebuffer(C.READ_FRAMEBUFFER,nM),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,iM);for(let xn=0;xn<gt;xn++)De?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Jn.__webglTexture,I,Ct+xn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Jn.__webglTexture,I),Kn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,dn.__webglTexture,it,Ne+xn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,dn.__webglTexture,it),I!==0?C.blitFramebuffer(Nt,Pt,ft,bt,Jt,he,ft,bt,C.COLOR_BUFFER_BIT,C.NEAREST):Kn?C.copyTexSubImage3D(Re,it,Jt,he,Ne+xn,Nt,Pt,ft,bt):C.copyTexSubImage2D(Re,it,Jt,he,Nt,Pt,ft,bt);xt.bindFramebuffer(C.READ_FRAMEBUFFER,null),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Kn?T.isDataTexture||T.isData3DTexture?C.texSubImage3D(Re,it,Jt,he,Ne,ft,bt,gt,me,Rt,ve.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(Re,it,Jt,he,Ne,ft,bt,gt,me,ve.data):C.texSubImage3D(Re,it,Jt,he,Ne,ft,bt,gt,me,Rt,ve):T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,it,Jt,he,ft,bt,me,Rt,ve.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,it,Jt,he,ve.width,ve.height,me,ve.data):C.texSubImage2D(C.TEXTURE_2D,it,Jt,he,ft,bt,me,Rt,ve);C.pixelStorei(C.UNPACK_ROW_LENGTH,ne),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ln),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Qa),C.pixelStorei(C.UNPACK_SKIP_ROWS,On),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ao),it===0&&O.generateMipmaps&&C.generateMipmap(Re),xt.unbindTexture()},this.initRenderTarget=function(T){Mt.get(T).__webglFramebuffer===void 0&&kt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?kt.setTextureCube(T,0):T.isData3DTexture?kt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?kt.setTexture2DArray(T,0):kt.setTexture2D(T,0),xt.unbindTexture()},this.resetState=function(){D=0,A=0,U=null,xt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),n.unpackColorSpace=ee._getUnpackColorSpace()}};var GS={type:"change"},qg={type:"start"},XS={type:"end"},Pf=new ka,kS=new Cn,TR=Math.cos(70*Eg.DEG2RAD),Ze=new P,Un=2*Math.PI,pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wg=1e-6,zf=class extends sc{constructor(t,n=null){super(t,n),this.state=pe.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oa.ROTATE,MIDDLE:oa.DOLLY,RIGHT:oa.PAN},this.touches={ONE:la.ROTATE,TWO:la.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new ui,this._lastTargetPosition=new P,this._quat=new ui().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mo,this._sphericalDelta=new mo,this._scale=1,this._panOffset=new P,this._rotateStart=new zt,this._rotateEnd=new zt,this._rotateDelta=new zt,this._panStart=new zt,this._panEnd=new zt,this._panDelta=new zt,this._dollyStart=new zt,this._dollyEnd=new zt,this._dollyDelta=new zt,this._dollyDirection=new P,this._mouse=new zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wR.bind(this),this._onPointerDown=AR.bind(this),this._onPointerUp=CR.bind(this),this._onContextMenu=IR.bind(this),this._onMouseWheel=UR.bind(this),this._onKeyDown=NR.bind(this),this._onTouchStart=LR.bind(this),this._onTouchMove=OR.bind(this),this._onMouseDown=RR.bind(this),this._onMouseMove=DR.bind(this),this._interceptControlDown=PR.bind(this),this._interceptControlUp=zR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(GS),this.update(),this.state=pe.NONE}update(t=null){let n=this.object.position;Ze.copy(n).sub(this.target),Ze.applyQuaternion(this._quat),this._spherical.setFromVector3(Ze),this.autoRotate&&this.state===pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Un:i>Math.PI&&(i-=Un),s<-Math.PI?s+=Un:s>Math.PI&&(s-=Un),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(Ze.setFromSpherical(this._spherical),Ze.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let o=Ze.length();r=this._clampDistance(o*this._scale);let l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=Ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Pf.origin.copy(this.object.position),Pf.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pf.direction))<TR?this.object.lookAt(this.target):(kS.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pf.intersectPlane(kS,this.target))))}else if(this.object.isOrthographicCamera){let r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Wg||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wg||this._lastTargetPosition.distanceToSquared(this.target)>Wg?(this.dispatchEvent(GS),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Un/60*this.autoRotateSpeed*t:Un/60/60*this.autoRotateSpeed}_getZoomScale(t){let n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){Ze.setFromMatrixColumn(n,0),Ze.multiplyScalar(-t),this._panOffset.add(Ze)}_panUp(t,n){this.screenSpacePanning===!0?Ze.setFromMatrixColumn(n,1):(Ze.setFromMatrixColumn(n,0),Ze.crossVectors(this.object.up,Ze)),Ze.multiplyScalar(t),this._panOffset.add(Ze)}_pan(t,n){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ze.copy(s).sub(this.target);let a=Ze.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*n*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,a=n-i.top,r=i.width,o=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/n.clientHeight),this._rotateUp(Un*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/n.clientHeight),this._rotateUp(Un*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(t.pageX+n.x)*.5,o=(t.pageY+n.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new zt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){let n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function AR(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function wR(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function CR(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(XS),this.state=pe.NONE;break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function RR(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case oa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=pe.DOLLY;break;case oa.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=pe.ROTATE}break;case oa.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=pe.PAN}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(qg)}function DR(e){switch(this.state){case pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function UR(e){this.enabled===!1||this.enableZoom===!1||this.state!==pe.NONE||(e.preventDefault(),this.dispatchEvent(qg),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(XS))}function NR(e){this.enabled!==!1&&this._handleKeyDown(e)}function LR(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case la.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=pe.TOUCH_ROTATE;break;case la.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=pe.TOUCH_PAN;break;default:this.state=pe.NONE}break;case 2:switch(this.touches.TWO){case la.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=pe.TOUCH_DOLLY_PAN;break;case la.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=pe.TOUCH_DOLLY_ROTATE;break;default:this.state=pe.NONE}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(qg)}function OR(e){switch(this._trackPointer(e),this.state){case pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=pe.NONE}}function IR(e){this.enabled!==!1&&e.preventDefault()}function PR(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zR(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Hi=Object.freeze({teeth:20,module:1,pressure:20,thickness:7.5,boreType:"round",shaftSize:5,roundSize:5,hexSize:6.34,compensation:0,body:"solid",spokes:4,spokeWidth:5,rim:3,hub:"none",hubDiameter:12,hubFront:5,hubBack:5,stop:!1,stopSide:"back",stopThickness:.5,ejectHole:0,screws:!1,screwCount:1,screwDiameter:2.5,screwPosition:2.5,screwAngle:0,backlash:0,shift:0,clearance:.25,quality:16,labelPlacement:"manual",labelEnabled:!1,labelText:"",labelMode:"engrave",labelTarget:"frontBody",labelSize:2.5,labelX:0,labelY:5.5,labelRotation:0,labelDepth:3}),Yg=Object.keys(Hi),WS=Object.freeze([20,40,50,60,80,100]);function qS(e,t){return t===e.boreType?e:{...e,[e.boreType==="hex"?"hexSize":"roundSize"]:e.shaftSize,boreType:t,shaftSize:e[t==="hex"?"hexSize":"roundSize"]}}function YS(e){return{...Hi,teeth:e,boreType:"hex",shaftSize:Hi.hexSize,...e===20?{}:{body:"spokes",hubDiameter:15}}}var Zg=e=>e*2/Math.sqrt(3);function ZS(e){if(!e||e.format!=="wind-gear-studio"||![1,2,3].includes(e.version)||!e.parameters||typeof e.parameters!="object")throw Error("\u9019\u4E0D\u662F\u652F\u63F4\u7684\u9F52\u8F2A\u8A2D\u8A08\u8A2D\u5B9A\u6A94\u3002");let t={...Hi};for(let i of Yg)if(i in e.parameters){if(typeof e.parameters[i]!=typeof Hi[i])throw Error("\u8A2D\u5B9A\u6A94\u6B04\u4F4D\u578B\u614B\u4E0D\u6B63\u78BA\uFF1A"+i);t[i]=e.parameters[i]}let n=t.boreType==="hex"?"hexSize":"roundSize";return n in e.parameters||(t[n]=t.shaftSize),t}function KS(e){return{format:"wind-gear-studio",version:3,units:"mm",parameters:Object.fromEntries(Yg.map(t=>[t,e[t]]))}}var Bf=e=>e*Math.PI/180;function Kg(e){let t=Bf(e.pressure),n=e.module*e.teeth/2,i=n*Math.cos(t),s=n+e.module*(1+e.shift),a=n-e.module*(1+e.clearance-e.shift),r=e.hub==="none"?0:e.hubFront,o=e.hub==="double"?e.hubBack:0,l=e.thickness+r+o,c=0,u=l;return e.labelEnabled&&e.labelMode==="emboss"&&(e.labelTarget.startsWith("front")?u=Math.max(l,(e.labelTarget.endsWith("Hub")?l:o+e.thickness)+e.labelDepth):c=Math.min(0,(e.labelTarget.endsWith("Hub")?0:o)-e.labelDepth)),{pitch:n,base:i,tip:s,root:a,front:r,back:o,total:l,minZ:c,maxZ:u,printHeight:u-c,bore:e.shaftSize+e.compensation,insertion:l-(e.stop?e.stopThickness:0),halfPitch:Math.PI/(2*e.teeth)+2*e.shift*Math.tan(t)/e.teeth-e.backlash/(2*n)}}function Ff(e){let t=[],n=[],i=(c,u,d)=>{(!Number.isFinite(c)||!u)&&t.push(d)};i(e.teeth,Number.isInteger(e.teeth)&&e.teeth>=12&&e.teeth<=160,"\u9F52\u6578\u9808\u70BA 12\u2013160 \u7684\u6574\u6578\u3002"),i(e.module,e.module>=.3&&e.module<=5,"\u6A21\u6578\u9808\u4ECB\u65BC 0.3\u20135 mm\u3002"),i(e.pressure,e.pressure>=14.5&&e.pressure<=30,"\u58D3\u529B\u89D2\u9808\u4ECB\u65BC 14.5\u201330\xB0\u3002"),i(e.thickness,e.thickness>=1&&e.thickness<=40,"\u9F52\u8F2A\u539A\u5EA6\u9808\u4ECB\u65BC 1\u201340 mm\u3002");for(let c of Yg)typeof Hi[c]=="number"&&(!c.startsWith("label")||e.labelEnabled)&&!Number.isFinite(e[c])&&t.push("\u53C3\u6578\u5FC5\u9808\u662F\u6709\u6548\u6578\u5B57\uFF1A"+c);for(let[c,u]of Object.entries({boreType:["round","hex"],body:["solid","spokes"],hub:["none","single","double"],stopSide:["front","back"]}))u.includes(e[c])||t.push("\u8A2D\u5B9A\u9078\u9805\u4E0D\u6B63\u78BA\uFF1A"+c);i(e.shift,e.shift>=-.4&&e.shift<=.6,"\u8B8A\u4F4D\u4FC2\u6578\u9808\u4ECB\u65BC \u22120.4 \u81F3 0.6\u3002"),i(e.backlash,e.backlash>=0&&e.backlash<=e.module*.6,"\u9F52\u539A\u6E1B\u91CF\u9808\u4ECB\u65BC 0 \u81F3 0.6 \u500D\u6A21\u6578\u3002"),i(e.clearance,e.clearance>=.15&&e.clearance<=.5,"\u9F52\u9802\u9699\u4FC2\u6578\u9808\u4ECB\u65BC 0.15\u20130.5\u3002"),i(e.quality,Number.isInteger(e.quality)&&e.quality>=8&&e.quality<=32,"\u66F2\u7DDA\u7CBE\u5EA6\u9808\u70BA 8\u201332\u3002");let s=Kg(e),a=e.boreType==="hex"?s.bore/Math.sqrt(3):s.bore/2;i(e.shaftSize,e.shaftSize>=.5,"\u5BE6\u969B\u8EF8\u5C3A\u5BF8\u9808\u81F3\u5C11\u70BA 0.5 mm\u3002"),i(s.bore,s.bore>=.5,"\u88DC\u511F\u5F8C\u5B54\u5C3A\u5BF8\u9808\u81F3\u5C11\u70BA 0.5 mm\u3002"),a+.6>=s.root&&t.push("\u4E2D\u5FC3\u5B54\u592A\u5927\uFF0C\u9F52\u6839\u5468\u570D\u9700\u4FDD\u7559\u81F3\u5C11 0.6 mm \u6750\u6599\u3002"),(s.tip<=s.base||s.root<=0||s.halfPitch<=0)&&t.push("\u9F52\u5F62\u7121\u6CD5\u751F\u6210\uFF0C\u8ACB\u8ABF\u6574\u6A21\u6578\u3001\u58D3\u529B\u89D2\u3001\u8B8A\u4F4D\u6216\u9F52\u539A\u6E1B\u91CF\u3002");let r=c=>Math.tan(c)-c;if(s.halfPitch+r(Bf(e.pressure))-r(Math.acos(Math.min(1,s.base/s.tip)))<.002&&t.push("\u9F52\u9802\u904E\u5C16\uFF0C\u8ACB\u6E1B\u5C11\u9F52\u539A\u6E1B\u91CF\u6216\u8B8A\u4F4D\u91CF\u3002"),s.halfPitch+r(Bf(e.pressure))-(s.root>s.base?r(Math.acos(s.base/s.root)):0)>=Math.PI/e.teeth&&t.push("\u9F52\u6839\u904E\u5BEC\uFF0C\u8ACB\u8ABF\u6574\u8B8A\u4F4D\u6216\u58D3\u529B\u89D2\u3002"),(e.hub!=="none"||e.body==="spokes")&&(i(e.hubDiameter,e.hubDiameter>0&&e.hubDiameter<s.root*2,"\u8F2A\u8F42\uFF0F\u4E2D\u592E\u5BE6\u5FC3\u5340\u5916\u5F91\u9808\u5C0F\u65BC\u9F52\u6839\u5713\u76F4\u5F91\u3002"),e.hubDiameter/2-a<.8&&t.push("\u8F2A\u8F42\uFF0F\u4E2D\u592E\u5BE6\u5FC3\u5340\u5728\u516D\u89D2\u5B54\u89D2\u843D\u6216\u5713\u5B54\u5468\u570D\uFF0C\u9700\u4FDD\u7559\u81F3\u5C11 0.8 mm \u6750\u6599\u3002")),e.hub!=="none"&&(i(e.hubFront,e.hubFront>=1&&e.hubFront<=40,"A \u9762\u8F2A\u8F42\u51F8\u51FA\u9AD8\u5EA6\u9808\u4ECB\u65BC 1\u201340 mm\u3002"),e.hub==="double"&&i(e.hubBack,e.hubBack>=1&&e.hubBack<=40,"B \u9762\u8F2A\u8F42\u51F8\u51FA\u9AD8\u5EA6\u9808\u4ECB\u65BC 1\u201340 mm\u3002")),e.body==="spokes"&&(i(e.spokes,Number.isInteger(e.spokes)&&e.spokes>=3&&e.spokes<=12,"\u808B\u689D\u6578\u9808\u70BA 3\u201312 \u7684\u6574\u6578\u3002"),i(e.spokeWidth,e.spokeWidth>=1,"\u808B\u689D\u5BEC\u5EA6\u9808\u81F3\u5C11\u70BA 1 mm\u3002"),i(e.rim,e.rim>=1,"\u9F52\u6839\u5167\u5074\u5916\u5708\u539A\u5EA6\u9808\u81F3\u5C11\u70BA 1 mm\u3002"),s.root-e.rim<=e.hubDiameter/2+1&&t.push("\u6E1B\u91CD\u5340\u7A7A\u9593\u4E0D\u8DB3\uFF1A\u8ACB\u6E1B\u5C0F\u4E2D\u592E\u5BE6\u5FC3\u5340\u6216\u5916\u5708\u539A\u5EA6\uFF0C\u6216\u589E\u52A0\u9F52\u6578\u3002"),e.spokeWidth>=2*(e.hubDiameter/2)*Math.sin(Math.PI/e.spokes)&&t.push("\u808B\u689D\u904E\u5BEC\uFF0C\u6E1B\u91CD\u958B\u53E3\u6703\u6D88\u5931\u3002")),e.stop){i(e.stopThickness,e.stopThickness>=.5&&e.stopThickness<s.total-.5,"\u64CB\u677F\u539A\u5EA6\u81F3\u5C11 0.5 mm\uFF0C\u4E26\u9808\u7559\u4E0B\u8D85\u904E 0.5 mm \u63D2\u5165\u6DF1\u5EA6\u3002");let c=e.hub==="double"&&e.stopSide==="back"?s.back:e.hub!=="none"&&e.stopSide==="front"?s.front:e.thickness;e.stopThickness>c&&t.push("\u64CB\u677F\u539A\u5EA6\u4E0D\u53EF\u8DE8\u904E\u672B\u7AEF\u8F2A\u8F42\u6216\u9F52\u8F2A\u672C\u9AD4\uFF0C\u8ACB\u6E1B\u8584\u64CB\u677F\u6216\u589E\u52A0\u8A72\u7AEF\u539A\u5EA6\u3002"),i(e.ejectHole,e.ejectHole>=0,"\u80CC\u9762\u5C0F\u5B54\u76F4\u5F91\u4E0D\u53EF\u70BA\u8CA0\u503C\u3002"),e.ejectHole>0&&e.ejectHole>Math.min(s.bore,e.shaftSize)-1&&t.push("\u80CC\u9762\u5C0F\u5B54\u904E\u5927\uFF0C\u9700\u6BD4\u8EF8\u5C3A\u5BF8\u53CA\u4E2D\u5FC3\u5B54\u5C3A\u5BF8\u81F3\u5C11\u5C0F 1 mm\uFF0C\u4FDD\u7559\u5468\u570D\u64CB\u677F\u3002")}if(e.screws){e.hub==="none"&&t.push("\u8ACB\u5148\u958B\u555F\u8F2A\u8F42\uFF0C\u518D\u52A0\u5165\u6B62\u4ED8\u87BA\u7D72\u5B54\u3002"),i(e.screwCount,Number.isInteger(e.screwCount)&&e.screwCount>=1&&e.screwCount<=6,"\u6B62\u4ED8\u5B54\u6578\u9808\u70BA 1\u20136 \u7684\u6574\u6578\u3002"),i(e.screwDiameter,e.screwDiameter>=1&&e.screwDiameter<=6,"\u653B\u7259\u5E95\u5B54\u76F4\u5F91\u9808\u4ECB\u65BC 1\u20136 mm\u3002");let c=s.total-e.screwPosition,u=e.screwDiameter/2+.6,d=c>=s.back+e.thickness+u&&c<=s.total-u,f=c>=u&&c<=s.back-u;if(d||f||t.push("\u6B62\u4ED8\u5B54\u4E2D\u5FC3\u9808\u4F4D\u65BC\u51F8\u51FA\u8F2A\u8F42\u5167\uFF0C\u4E14\u5B54\u908A\u96E2\u8F2A\u8F42\u7AEF\u9762\u81F3\u5C11 0.6 mm\uFF1B\u4F4D\u7F6E\u7531 A \u9762\u5916\u7AEF\u91CF\u8D77\u3002"),e.stop){let p=e.stopSide==="back"?e.stopThickness:0,_=e.stopSide==="front"?s.total-e.stopThickness:s.total;(c-e.screwDiameter/2<=p||c+e.screwDiameter/2>=_)&&t.push("\u6B62\u4ED8\u5B54\u843D\u5728\u64CB\u677F\u6216\u5B54\u5E95\uFF0C\u8ACB\u8ABF\u6574\u4F4D\u7F6E\u3002")}e.hubDiameter/2-a<1.2&&t.push("\u6B62\u4ED8\u87BA\u7D72\u653B\u7259\u5340\u5F91\u5411\u6750\u6599\u4E0D\u8DB3 1.2 mm\uFF0C\u8ACB\u589E\u52A0\u8F2A\u8F42\u5916\u5F91\u3002")}return e.labelEnabled&&(["manual","auto"].includes(e.labelPlacement)||t.push("\u6587\u5B57\u4F4D\u7F6E\u6A21\u5F0F\u4E0D\u6B63\u78BA\u3002"),(typeof e.labelText!="string"||!e.labelText.trim()||[...e.labelText].length>20||/[\r\n\t]/.test(e.labelText))&&t.push("\u8ACB\u8F38\u5165 1\u201320 \u500B\u5B57\u5143\u7684\u55AE\u884C\u6587\u5B57\u3002"),["engrave","emboss"].includes(e.labelMode)||t.push("\u6587\u5B57\u5F62\u5F0F\u9808\u70BA\u51F9\u5B57\u6216\u51F8\u5B57\u3002"),["frontBody","backBody","frontHub","backHub"].includes(e.labelTarget)||t.push("\u6587\u5B57\u6A19\u8A18\u9762\u8A2D\u5B9A\u4E0D\u6B63\u78BA\u3002"),(e.labelTarget==="frontHub"&&e.hub==="none"||e.labelTarget==="backHub"&&e.hub!=="double")&&t.push("\u9078\u53D6\u7684\u8F2A\u8F42\u7AEF\u9762\u4E0D\u5B58\u5728\uFF0C\u8ACB\u5148\u555F\u7528\u5C0D\u61C9\u8F2A\u8F42\u3002"),i(e.labelSize,e.labelSize>=.8&&e.labelSize<=30,"\u6587\u5B57\u5B57\u9AD8\u9808\u4ECB\u65BC 0.8\u201330 mm\u3002"),i(e.labelDepth,e.labelDepth>=.1&&e.labelDepth<=3,"\u6587\u5B57\u523B\u6DF1\uFF0F\u51F8\u9AD8\u9808\u4ECB\u65BC 0.1\u20133 mm\u3002"),e.labelPlacement==="manual"&&(Math.abs(e.labelX)>s.tip||Math.abs(e.labelY)>s.tip)&&t.push("\u6587\u5B57\u4F4D\u7F6E\u8D85\u51FA\u9F52\u8F2A\u7BC4\u570D\u3002"),Math.abs(e.labelRotation)>360&&t.push("\u6587\u5B57\u65CB\u8F49\u89D2\u5EA6\u9808\u4ECB\u65BC \u2212360\xB0 \u81F3 360\xB0\u3002"),e.labelSize<2&&n.push("\u6587\u5B57\u504F\u5C0F\uFF0C\u8ACB\u5728\u5207\u7247\u9810\u89BD\u78BA\u8A8D\u7D30\u7B46\u756B\u8207\u5B57\u5167\u7A7A\u9699\u662F\u5426\u4FDD\u7559\u3002")),e.teeth<2*(1-e.shift)/Math.sin(Bf(e.pressure))**2&&n.push("\u6B64\u9F52\u6578\uFF0F\u8B8A\u4F4D\u53EF\u80FD\u6709\u6839\u5207\u6216\u5E72\u6D89\uFF1B\u7B2C\u4E00\u7248\u9F52\u6839\u63A1\u7C21\u5316\u904E\u6E21\uFF0C\u8ACB\u5148\u8A66\u5370\u4E26\u6AA2\u67E5\u5699\u5408\u3002"),e.module<.7&&n.push("\u6A21\u6578\u504F\u5C0F\uFF0C\u8ACB\u78BA\u8A8D\u5674\u5634\u3001\u7DDA\u5BEC\u8207\u9F52\u5F62\u7D30\u7BC0\u80FD\u5426\u5217\u5370\u3002"),e.stop&&e.stopThickness<1&&n.push("\u64CB\u677F\u504F\u8584\uFF0C\u8ACB\u4F9D\u5BE6\u969B\u8EF8\u5411\u53D7\u529B\u589E\u52A0\u539A\u5EA6\u3002"),{errors:[...new Set(t)],warnings:n,d:s}}function JS(e){if(e.exportable===!1)throw Error("\u6587\u5B57\u5C1A\u672A\u5B8C\u6210\uFF0C\u8ACB\u5148\u81EA\u52D5\u5B89\u6392\u6216\u660E\u78BA\u95DC\u9589\u6587\u5B57\uFF0C\u518D\u4E0B\u8F09 STL\u3002");let{positions:t,indices:n,stride:i}=e,s=[];for(let l=0;l<n.length;l+=3){let c=n[l]*i,u=n[l+1]*i,d=n[l+2]*i,f=[t[u]-t[c],t[u+1]-t[c+1],t[u+2]-t[c+2]],p=[t[d]-t[c],t[d+1]-t[c+1],t[d+2]-t[c+2]],_=[f[1]*p[2]-f[2]*p[1],f[2]*p[0]-f[0]*p[2],f[0]*p[1]-f[1]*p[0]],x=Math.hypot(..._);x>0&&s.push({ids:[c,u,d],normal:_.map(m=>m/x)})}let a=s.length,r=new ArrayBuffer(84+50*a),o=new DataView(r);new Uint8Array(r,0,80).set(new TextEncoder().encode("Wind Gear Studio | millimeters | involute spur gear")),o.setUint32(80,a,!0);for(let l=0;l<a;l++){let c=84+50*l,{ids:u,normal:d}=s[l];for(let f=0;f<3;f++)o.setFloat32(c+f*4,d[f],!0);for(let f=0;f<3;f++)for(let p=0;p<3;p++)o.setFloat32(c+12+f*12+p*4,t[u[f]+p],!0)}return r}var pi=(e,t=2)=>Number.isFinite(e)?Number(e.toFixed(t)).toString():"\u2014",Nn=({name:e,size:t=18,...n})=>{let i={gear:S.default.createElement(S.default.Fragment,null,S.default.createElement("path",{d:"m9 3 1-2h4l1 2 3 1 2-1 2 3-1 2 1 3 2 1v4l-2 1-1 3 1 2-3 2-2-1-3 1-1 2h-4l-1-2-3-1-2 1-2-3 1-2-1-3-2-1v-4l2-1 1-3-1-2 3-2 2 1z",transform:"translate(1 1) scale(.85)"}),S.default.createElement("circle",{cx:"12",cy:"12",r:"3.2"})),download:S.default.createElement(S.default.Fragment,null,S.default.createElement("path",{d:"M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"})),save:S.default.createElement(S.default.Fragment,null,S.default.createElement("path",{d:"M4 3h13l4 4v14H3V3zM7 3v6h9V3M7 21v-8h10v8"})),upload:S.default.createElement(S.default.Fragment,null,S.default.createElement("path",{d:"M12 16V3m-5 5 5-5 5 5M4 16v5h16v-5"})),reset:S.default.createElement(S.default.Fragment,null,S.default.createElement("path",{d:"M4 10a8 8 0 1 1 0 5M4 4v6h6"})),cube:S.default.createElement(S.default.Fragment,null,S.default.createElement("path",{d:"m12 2 10 5v10l-10 5-10-5V7zM2 7l10 5 10-5M12 12v10"})),ruler:S.default.createElement(S.default.Fragment,null,S.default.createElement("path",{d:"m4 20 16-16-4-4L0 16z",transform:"translate(2 2) scale(.85)"}),S.default.createElement("path",{d:"m7 13 3 3m1-7 3 3m1-7 3 3"})),check:S.default.createElement("path",{d:"m4 12 5 5L20 6"}),chevron:S.default.createElement("path",{d:"m8 5 7 7-7 7"}),info:S.default.createElement(S.default.Fragment,null,S.default.createElement("circle",{cx:"12",cy:"12",r:"9"}),S.default.createElement("path",{d:"M12 11v6m0-11v2"}))};return S.default.createElement("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...n},i[e])};function To({label:e,name:t,p:n,set:i,options:s}){return S.default.createElement("label",{className:"field"},S.default.createElement("span",null,e),S.default.createElement("select",{"aria-label":e,value:n[t],onChange:a=>i(t,a.target.value)},s.map(([a,r])=>S.default.createElement("option",{key:a,value:a},r))))}function ha({num:e,title:t,badge:n,children:i,open:s=!1}){return S.default.createElement("details",{className:"section",open:s||void 0},S.default.createElement("summary",null,S.default.createElement("span",{className:"section-num"},e),S.default.createElement("strong",null,t),S.default.createElement("span",{className:"section-badge"},n),S.default.createElement(Nn,{name:"chevron",size:14})),S.default.createElement("div",{className:"section-content"},i))}function Jg({label:e,name:t,p:n,set:i}){return S.default.createElement("label",{className:"toggle-row"},S.default.createElement("span",null,e),S.default.createElement("input",{type:"checkbox",role:"switch",checked:n[t],onChange:s=>i(t,s.target.checked)}))}function FR({result:e,view:t,cut:n,onError:i}){let s=(0,S.useRef)(),a=(0,S.useRef)();return(0,S.useEffect)(()=>{let r,o,l;try{let c=s.current,u=new Yl;u.background=new Xt("#edf2f2");let d=new un(32,1,.1,1e4);d.up.set(0,0,1),d.position.set(30,-35,40),r=new Of({antialias:!0,alpha:!1}),r.setPixelRatio(Math.min(devicePixelRatio,2)),r.localClippingEnabled=!0,r.outputColorSpace=yn,c.appendChild(r.domElement);let f=new zf(d,r.domElement);f.enableDamping=!0,f.minDistance=3,f.maxDistance=4e3,u.add(new ec(16777215,8427418,2.7));let p=new po(16777215,3.5);p.position.set(-50,-30,90),u.add(p);let _=new po(16777215,1.6);_.position.set(40,60,30),u.add(_);let x=new ds;u.add(x);let m=new ic(1e3,100,12898513,14476516);m.rotation.x=Math.PI/2,u.add(m);let h=()=>{let y=c.clientWidth,v=c.clientHeight;y&&v&&(r.setSize(y,v),d.aspect=y/v,d.updateProjectionMatrix())};l=new ResizeObserver(h),l.observe(c),h();let g=()=>{o=requestAnimationFrame(g),f.update(),r.render(u,d)};g(),a.current={scene:u,camera:d,controls:f,model:x,grid:m,renderer:r}}catch{i("\u6B64\u88DD\u7F6E\u7121\u6CD5\u555F\u7528 3D\uFF0C\u8ACB\u5207\u63DB 2D \u5C3A\u5BF8\u5716\uFF1BSTL \u8F38\u51FA\u4ECD\u53EF\u4F7F\u7528\u3002")}return()=>{cancelAnimationFrame(o),l?.disconnect(),a.current&&(a.current.controls.dispose(),a.current.model.traverse(c=>{c.geometry?.dispose(),c.material?.dispose()})),r?.dispose(),r?.domElement.remove(),a.current=null}},[]),(0,S.useEffect)(()=>{let r=a.current;if(!r||!e)return;for(let g of[...r.model.children])g.geometry.dispose(),g.material.dispose(),r.model.remove(g);let{positions:o,indices:l,stride:c,dimensions:u}=e,d=new Float32Array(o.length/c*3);for(let g=0;g<o.length/c;g++)for(let y=0;y<3;y++)d[3*g+y]=o[c*g+y];let f=new hi;f.setAttribute("position",new hn(d,3)),f.setIndex(new hn(l,1));let p=f.toNonIndexed();p.computeVertexNormals(),f.dispose();let _=new Ql({color:5470858,metalness:.3,roughness:.38,side:fi,flatShading:!0}),x=new Dn(p,_);x.position.z=-u.total/2,r.model.add(x),r.grid.position.z=(u.minZ||0)-u.total/2-.3;let m=u.tip,h=Math.max(m*4,u.total*3);r.camera.near=.1,r.camera.far=Math.max(1e4,h*10),r.controls.minDistance=Math.max(2,m*.5),r.controls.maxDistance=h*8,(!r.lastRadius||Math.abs(r.lastRadius-m)>m*.5)&&(r.camera.position.set(h*.55,-h*.7,h*.65),r.controls.target.set(0,0,0),r.camera.updateProjectionMatrix()),r.lastRadius=m},[e]),(0,S.useEffect)(()=>{let r=a.current;if(!r||!e)return;let o=Math.max(e.dimensions.tip*4,e.dimensions.total*3);r.controls.target.set(0,0,0),r.camera.up.set(0,t.kind==="iso"?0:1,t.kind==="iso"?1:0),t.kind==="front"?r.camera.position.set(0,-.001,o):t.kind==="back"?r.camera.position.set(0,-.001,-o):r.camera.position.set(o*.55,-o*.7,o*.65),r.camera.updateProjectionMatrix(),r.controls.update()},[t,e?.dimensions.tip]),(0,S.useEffect)(()=>{let r=a.current;r&&r.model.children.forEach(o=>{o.material.clippingPlanes=n?[new Cn(new P(0,-1,0),0)]:[],o.material.needsUpdate=!0})},[n,e]),S.default.createElement("div",{ref:s,className:"canvas-host","aria-label":"\u9F52\u8F2A 3D \u6A21\u578B\uFF0C\u53EF\u62D6\u66F3\u65CB\u8F49\u53CA\u7E2E\u653E"})}function HR({result:e,p:t}){let[n,i]=(0,S.useState)(t.labelTarget.startsWith("back")?"back":"front");if(!e)return null;let s=e.dimensions,a=s.tip,r=a*.5,o=(2*a+2*r)/760,l=520*o,c=D=>"M"+D.map(([A,U])=>`${n==="back"?-A:A},${-U}`).join("L")+"Z",u=D=>Array.from({length:96},(A,U)=>[D*Math.cos(U*Math.PI/48),D*Math.sin(U*Math.PI/48)]),d=t.stop&&t.stopSide==="front",f=t.stop&&t.stopSide==="back",_=(n==="front"?d:f)?t.ejectHole>0?[u(t.ejectHole/2)]:[]:[e.bore],x=[e.outline,...e.windows,..._].map(c).join(" "),m=12*o,h=1.2*o,g=a+r*.6,y=-s.total/2*o*4,v=s.total/2*o*4,w=a*.78;return S.default.createElement("div",{className:"drawing"},S.default.createElement("div",{className:"drawing-toolbar"},S.default.createElement("span",null,e.labelIssue?"\u7D05\u8272\uFF1A\u5F85\u8ABF\u6574\u6587\u5B57\uFF0C\u5C1A\u672A\u52A0\u5165\u6A21\u578B":"\u6B63\u6295\u5F71\u30FB\u55AE\u4F4D mm\u30FB\u4E0D\u6309\u5BE6\u969B\u6BD4\u4F8B\u986F\u793A"),S.default.createElement("div",null,S.default.createElement("button",{className:n==="front"?"selected":"",onClick:()=>i("front")},"A \u9762"),S.default.createElement("button",{className:n==="back"?"selected":"",onClick:()=>i("back")},"B \u9762"))),S.default.createElement("svg",{viewBox:`${-a-r} ${-a-r*.7} ${2*a+2*r} ${2*a+r*2.1}`,role:"img","aria-label":"\u9F52\u8F2A\u6B63\u9762\u5C3A\u5BF8\u5716"},S.default.createElement("defs",null,S.default.createElement("marker",{id:"arrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse"},S.default.createElement("path",{d:"M 10 0 L 0 5 L 10 10",fill:"none",stroke:"#a46b3b",strokeWidth:"1.5"}))),S.default.createElement("path",{d:x,fill:"#dae5e8",fillRule:"evenodd",stroke:"#345a68",strokeWidth:h}),t.hub!=="none"&&S.default.createElement("circle",{r:t.hubDiameter/2,fill:"none",stroke:"#345a68",strokeWidth:h,strokeDasharray:n==="back"&&t.hub==="single"?`${o*5} ${o*4}`:void 0}),e.label&&e.label.target.startsWith(n==="front"?"front":"back")&&S.default.createElement("path",{d:e.label.contours.map(c).join(" "),fill:e.label.mode==="engrave"?"#fff":"#c39663",fillRule:"nonzero",stroke:"#a26d38",strokeWidth:h*.55}),e.labelIssue?.target.startsWith(n==="front"?"front":"back")&&S.default.createElement("path",{d:e.labelIssue.contours.map(c).join(" "),fill:"#d85c5844",fillRule:"nonzero",stroke:"#c33e35",strokeWidth:h,strokeDasharray:`${h*3} ${h*2}`}),S.default.createElement("circle",{r:s.pitch,fill:"none",stroke:"#c0844f",strokeDasharray:`${o*5} ${o*4}`,strokeWidth:h*.8}),S.default.createElement("path",{d:`M${-a-r*.2} 0H${a+r*.2}M0 ${-a-r*.2}V${a+r*.2}`,stroke:"#b1bec1",strokeWidth:h*.7,strokeDasharray:`${o*10} ${o*3} ${o*2} ${o*3}`}),S.default.createElement("g",{stroke:"#a46b3b",strokeWidth:h*.8},S.default.createElement("path",{d:`M${-a} ${a*.3}V${g+o*8}M${a} ${a*.3}V${g+o*8}`,fill:"none"}),S.default.createElement("path",{d:`M${-a} ${g}H${a}`,markerStart:"url(#arrow)",markerEnd:"url(#arrow)"})),S.default.createElement("text",{x:"0",y:g-o*7,textAnchor:"middle",fontSize:m,fill:"#8a542e"},"\u5916\u5F91 \xD8",pi(s.tip*2)),S.default.createElement("text",{x:"0",y:g+o*25,textAnchor:"middle",fontSize:m*.9,fill:"#667f85"},"\u7BC0\u5713 \xD8",pi(s.pitch*2),"\u3000\u30FB\u3000",t.boreType==="hex"?"\u516D\u89D2\u5C0D\u908A":"\u5713\u5B54\u76F4\u5F91"," ",pi(s.bore))),S.default.createElement("div",{className:"section-drawing"},S.default.createElement("strong",null,"\u4E2D\u5FC3\u5B54\u8EF8\u5411\u5256\u9762\u793A\u610F"),S.default.createElement("svg",{viewBox:"0 0 580 160","aria-label":"\u8F2A\u8F42\u8207\u64CB\u677F\u7684\u8EF8\u5411\u5256\u9762"},S.default.createElement("defs",null,S.default.createElement("pattern",{id:"hatch",width:"7",height:"7",patternUnits:"userSpaceOnUse"},S.default.createElement("path",{d:"M0 7 7 0",stroke:"#9aafb6",strokeWidth:"1"}))),(()=>{let D=320/s.total,A=130,U=75,E=60,M=Math.min(48,Math.max(30,t.hubDiameter/s.root*E)),N=Math.min(M-6,Math.max(12,s.bore/s.root*E)),F=A+s.back*D,k=t.stopSide==="back"?A:A+(s.total-t.stopThickness)*D,q=t.stopSide==="back"?"A":"B";return S.default.createElement(S.default.Fragment,null,S.default.createElement("g",{fill:"url(#hatch)",stroke:"#527581",strokeWidth:"1.4"},S.default.createElement("rect",{x:F,y:U-E/2,width:t.thickness*D,height:E}),s.back>0&&S.default.createElement("rect",{x:A,y:U-M/2,width:s.back*D,height:M})," ",s.front>0&&S.default.createElement("rect",{x:F+t.thickness*D,y:U-M/2,width:s.front*D,height:M})),S.default.createElement("rect",{x:A,y:U-N/2,width:320,height:N,fill:"#fff",stroke:"#527581"}),t.stop&&S.default.createElement(S.default.Fragment,null,S.default.createElement("rect",{x:k,y:U-N/2,width:t.stopThickness*D,height:N,fill:"#d5ac7f",stroke:"#936436"}),t.ejectHole>0&&S.default.createElement("rect",{x:k-.5,y:U-N/2+N*(1-t.ejectHole/s.bore)/2,width:t.stopThickness*D+1,height:N*t.ejectHole/s.bore,fill:"white",stroke:"#936436"})),S.default.createElement("path",{d:"M100 75H480",stroke:"#aab9bd",strokeDasharray:"8 4"}),S.default.createElement("text",{x:"108",y:"80",textAnchor:"end",fill:"#4e6871",fontSize:"13"},"B \u9762"),S.default.createElement("text",{x:"467",y:"80",fill:"#4e6871",fontSize:"13"},"A \u9762"),S.default.createElement("text",{x:"290",y:"132",textAnchor:"middle",fill:"#4e6871",fontSize:"13"},"\u672C\u9AD4\uFF0B\u8F2A\u8F42 ",pi(s.total)," mm\u3000\uFF5C\u3000",t.stop?`\u5F9E ${q} \u9762\u63D2\u5165 ${pi(s.insertion)} mm`:"\u4E2D\u5FC3\u5B54\u8CAB\u7A7F"))})()),S.default.createElement("p",null,"\u5256\u9762\u50C5\u793A\u610F\u4E2D\u5FC3\u5B54\u3001\u8F2A\u8F42\u8207\u64CB\u677F\uFF1B\u6587\u5B57\u8207\u6B62\u4ED8\u5B54\u8ACB\u914D\u5408 3D \u6AA2\u8996\u3002")))}function VR(){let[e,t]=(0,S.useState)({}),[n,i]=(0,S.useState)(0),s=Object.keys(e).length>0,a=(0,S.useCallback)((et,yt)=>t(C=>{if(!yt){if(!(et in C))return C;let Qt={...C};return delete Qt[et],Qt}return C[et]?.message===yt.message&&C[et]?.label===yt.label?C:{...C,[et]:yt}}),[]),r=(0,S.useRef)({...Hi}),o=()=>{t({}),i(et=>et+1)},[l,c]=(0,S.useState)({...Hi}),[u,d]=(0,S.useState)(null),[f,p]=(0,S.useState)(null),[_,x]=(0,S.useState)(!0),[m,h]=(0,S.useState)(""),[g,y]=(0,S.useState)("3d"),[v,w]=(0,S.useState)(!1),[D,A]=(0,S.useState)({kind:"iso",n:0}),[U,E]=(0,S.useState)(""),[M,N]=(0,S.useState)(""),F=(0,S.useRef)(),k=(0,S.useRef)(0),q=(0,S.useRef)(),Y=Ff(l),B=Y.d,W=u&&u.exportable!==!1&&f===l&&!_&&!m&&Y.errors.length===0&&!s,H=f===l?u?.labelIssue:null,rt=f===l?u?.label?.layout:null,ct=rt?{...l,...rt}:l,Q=(et,yt)=>c(C=>Object.is(C[et],yt)?C:et==="boreType"?qS(C,yt):et==="shaftSize"?{...C,shaftSize:yt,[C.boreType==="hex"?"hexSize":"roundSize"]:yt}:et==="labelEnabled"&&yt&&!C.labelText.trim()?{...C,labelEnabled:!0,labelPlacement:"auto",labelText:`${C.teeth}T`,...Zx(C,Kg(C)),labelSize:C.labelSize}:et==="labelPlacement"&&yt==="manual"&&u?.label?.layout?{...C,labelX:u.label.layout.labelX,labelY:u.label.layout.labelY,labelSize:u.label.layout.labelSize,labelRotation:u.label.layout.labelRotation,labelPlacement:"manual"}:{...C,[et]:yt}),It=()=>c(et=>({...et,labelPlacement:"auto"}));(0,S.useEffect)(()=>{let et=new Worker(new URL("worker.js",document.baseURI),{type:"module"});return F.current=et,et.onmessage=({data:yt})=>{yt.id===k.current&&(x(!1),yt.error?h(yt.error):(d(yt.result),h(yt.result.labelIssue?.message||""),p(te.current),yt.result.exportable!==!1&&(r.current={...te.current})))},et.onerror=()=>{x(!1),h("\u6A21\u578B\u5F15\u64CE\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u91CD\u65B0\u6574\u7406\u9801\u9762\u518D\u8A66\u3002")},()=>et.terminate()},[]);let te=(0,S.useRef)(l);(0,S.useEffect)(()=>{let et=++k.current;if(te.current=l,x(!0),h(""),Y.errors.length&&(!l.labelEnabled||Ff({...l,labelEnabled:!1}).errors.length)){x(!1);return}let yt=setTimeout(()=>F.current?.postMessage({id:et,parameters:l}),220);return()=>clearTimeout(yt)},[l]),(0,S.useEffect)(()=>{if(!U)return;let et=setTimeout(()=>E(""),4e3);return()=>clearTimeout(et)},[U]);let ie=(et,yt,C)=>{let Qt=URL.createObjectURL(new Blob([et],{type:C})),Dt=document.createElement("a");Dt.href=Qt,Dt.download=yt,document.body.append(Dt),Dt.click(),Dt.remove(),setTimeout(()=>URL.revokeObjectURL(Qt),1e4)},Kt=()=>{W&&(ie(JS(u),`gear_z${l.teeth}_m${l.module}_${l.boreType}${pi(B.bore)}mm.stl`,"model/stl"),E("STL \u5DF2\u4E0B\u8F09\uFF0C\u532F\u5165\u5207\u7247\u8EDF\u9AD4\u6642\u8ACB\u4F7F\u7528 mm\u3002"))},K=()=>{if(s||Y.errors.length||m){E("\u8ACB\u5148\u4FEE\u6B63\u53C3\u6578\uFF0C\u518D\u4FDD\u5B58\u8A2D\u5B9A\u3002");return}ie(JSON.stringify(KS(l),null,2),`gear_z${l.teeth}_settings.json`,"application/json"),E("\u8A2D\u5B9A\u6A94\u5DF2\u4FDD\u5B58\uFF0C\u4E0B\u6B21\u53EF\u76F4\u63A5\u532F\u5165\u3002")},$=async et=>{let yt=et.target.files?.[0];if(yt){try{if(yt.size>1e5)throw Error("\u8A2D\u5B9A\u6A94\u904E\u5927\uFF0C\u8ACB\u9078\u64C7\u672C\u5DE5\u5177\u532F\u51FA\u7684 JSON\u3002");let C=ZS(JSON.parse(await yt.text())),Qt=Ff(C);if(Qt.errors.length)throw Error(Qt.errors.join(" "));c(C),o(),E("\u8A2D\u5B9A\u5DF2\u532F\u5165\u3002")}catch(C){E("\u532F\u5165\u5931\u6557\uFF1A"+C.message)}et.target.value=""}},mt=()=>{confirm("\u8981\u5C07\u6240\u6709\u8A2D\u8A08\u53C3\u6578\u6062\u5FA9\u70BA\u9810\u8A2D\u503C\u55CE\uFF1F")&&(c({...Hi}),o(),w(!1),E("\u5DF2\u6062\u5FA9\u9810\u8A2D\u53C3\u6578\u3002"))},vt=()=>{c({...r.current}),o(),h(""),E("\u5DF2\u6062\u5FA9\u4E0A\u6B21\u53EF\u7528\u8A2D\u5B9A\u3002")},pt=et=>{let yt=YS(et);c(yt),o(),A(C=>({kind:"iso",n:C.n+1}))};return S.default.createElement(Kf.Provider,{value:{report:a,revision:n}},S.default.createElement("header",{className:"topbar"},S.default.createElement("div",{className:"brand"},S.default.createElement("span",{className:"brand-icon"},S.default.createElement(Nn,{name:"gear",size:29})),S.default.createElement("div",null,S.default.createElement("span",{className:"eyebrow"},"WIND ENERGY \xB7 FABRICATION"),S.default.createElement("h1",null,"\u98A8\u529B\u9F52\u8F2A\u8A2D\u8A08\u5BA4 ",S.default.createElement("span",{className:"version"},"v1.3.4")))),S.default.createElement("div",{className:"header-actions"},S.default.createElement("button",{onClick:()=>q.current.click()},S.default.createElement(Nn,{name:"upload"}),"\u532F\u5165\u8A2D\u5B9A"),S.default.createElement("button",{onClick:K},S.default.createElement(Nn,{name:"save"}),"\u4FDD\u5B58\u8A2D\u5B9A"),S.default.createElement("input",{ref:q,type:"file",accept:".json,application/json",hidden:!0,onChange:$}))),S.default.createElement("div",{className:"workspace"},S.default.createElement("aside",{className:"sidebar"},S.default.createElement("div",{className:"sidebar-top"},S.default.createElement("div",null,S.default.createElement("span",{className:"eyebrow"},"DESIGN PARAMETERS"),S.default.createElement("h2",null,"\u4F60\u7684\u9F52\u8F2A\uFF0C\u4F60\u4F86\u5B9A\u7FA9\u3002")),S.default.createElement("button",{className:"icon-button",title:"\u6062\u5FA9\u9810\u8A2D\u53C3\u6578","aria-label":"\u6062\u5FA9\u9810\u8A2D\u53C3\u6578",onClick:mt},S.default.createElement(Nn,{name:"reset"}))),S.default.createElement("div",{className:"presets"},S.default.createElement("span",null,"\u5FEB\u901F\u8D77\u9EDE"),WS.map(et=>S.default.createElement("button",{key:et,onClick:()=>pt(et)},et," \u9F52"))),S.default.createElement("div",{className:"controls"},S.default.createElement(ha,{num:"01",title:"\u9F52\u8F2A\u53C3\u6578",badge:"\u76F4\u9F52\u5916\u9F52\u8F2A",open:!0},S.default.createElement("div",{className:"fields"},S.default.createElement(oe,{label:"\u9F52\u6578",name:"teeth",p:l,set:Q,unit:"\u9F52",step:1,min:12,max:160}),S.default.createElement(oe,{label:"\u6A21\u6578",name:"module",p:l,set:Q,step:.1}),S.default.createElement(oe,{label:"\u58D3\u529B\u89D2",name:"pressure",p:l,set:Q,unit:"\xB0",step:.5}),S.default.createElement(oe,{label:"\u9F52\u8F2A\u539A\u5EA6",name:"thickness",p:l,set:Q}))),S.default.createElement(ha,{num:"02",title:"\u4E2D\u5FC3\u5B54",badge:l.boreType==="hex"?"\u516D\u89D2\u5B54":"\u5713\u5B54",open:!0},S.default.createElement("div",{className:"segment"},S.default.createElement("button",{className:l.boreType==="round"?"active":"",onClick:()=>Q("boreType","round")},"\u25CB \u5713\u5B54"),S.default.createElement("button",{className:l.boreType==="hex"?"active":"",onClick:()=>Q("boreType","hex")},"\u2B21 \u516D\u89D2\u5B54")),S.default.createElement(oe,{label:l.boreType==="hex"?"\u516D\u89D2\u68D2\u5C0D\u908A\u8DDD":"\u5713\u8EF8\u76F4\u5F91",name:"shaftSize",p:l,set:Q,step:.1}),S.default.createElement("details",{className:"minor"},S.default.createElement("summary",null,"\u5B54\u5C3A\u5BF8\u88DC\u511F"),S.default.createElement(oe,{label:"\u5C0D\u908A\u8DDD\uFF0F\u76F4\u5F91\u589E\u52A0\u91CF",name:"compensation",p:l,set:Q,step:.05,hint:"\u9019\u662F\u6574\u500B\u5C3A\u5BF8\u7684\u589E\u52A0\u91CF\uFF0C\u4E0D\u662F\u55AE\u5074\u9593\u9699\u3002"})),l.boreType==="hex"&&S.default.createElement(S.default.Fragment,null,S.default.createElement("div",{className:"readout"},S.default.createElement("span",null,"\u516D\u89D2\u68D2\u5C0D\u89D2\u8DDD\uFF08\u6700\u9577\u8DDD\u96E2\uFF09"),S.default.createElement("strong",null,pi(Zg(l.shaftSize))," ",S.default.createElement("small",null,"mm"))),S.default.createElement("p",{className:"hint"},"\u76F8\u5C0D\u5C16\u89D2\u9593\u7684\u8DDD\u96E2\uFF1D\u5C0D\u908A\u8DDD \xD7 2 \xF7 \u221A3\u3002")),S.default.createElement("div",{className:"readout"},S.default.createElement("span",null,"\u6A21\u578B",l.boreType==="hex"?"\u5B54\u5C0D\u908A\u8DDD":"\u5B54\u76F4\u5F91"),S.default.createElement("strong",null,pi(B.bore)," ",S.default.createElement("small",null,"mm"))),l.boreType==="hex"&&S.default.createElement("div",{className:"readout"},S.default.createElement("span",null,"\u6A21\u578B\u5B54\u5C0D\u89D2\u8DDD\uFF08\u542B\u88DC\u511F\uFF09"),S.default.createElement("strong",null,pi(Zg(B.bore))," ",S.default.createElement("small",null,"mm")))),S.default.createElement(ha,{num:"03",title:"\u672C\u9AD4\u8207\u6E1B\u91CD",badge:l.body==="solid"?"\u5BE6\u5FC3":"\u808B\u689D"},S.default.createElement(To,{label:"\u672C\u9AD4\u5F62\u5F0F",name:"body",p:l,set:Q,options:[["solid","\u5BE6\u5FC3\u5713\u76E4"],["spokes","\u808B\u689D\u6E1B\u91CD"]]}),l.body==="spokes"&&S.default.createElement(S.default.Fragment,null,S.default.createElement("div",{className:"fields"},S.default.createElement(oe,{label:"\u808B\u689D\u6578\u91CF",name:"spokes",p:l,set:Q,unit:"\u652F",step:1}),S.default.createElement(oe,{label:"\u808B\u689D\u5BEC\u5EA6",name:"spokeWidth",p:l,set:Q}),S.default.createElement(oe,{label:"\u5916\u5708\u539A\u5EA6",name:"rim",p:l,set:Q}),S.default.createElement(oe,{label:"\u4E2D\u592E\u5BE6\u5FC3\u5340\u5916\u5F91",name:"hubDiameter",p:l,set:Q})),S.default.createElement("p",{className:"hint"},"\u5916\u5708\u539A\u5EA6\u7531\u9F52\u6839\u5713\u5F80\u5167\u91CF\uFF1B\u4E2D\u592E\u5BE6\u5FC3\u5340\u8207\u8F2A\u8F42\u5171\u7528\u5916\u5F91\u3002"))),S.default.createElement(ha,{num:"04",title:"\u8F2A\u8F42",badge:{none:"\u95DC\u9589",single:"\u55AE\u5074",double:"\u96D9\u5074"}[l.hub]},S.default.createElement(To,{label:"\u8F2A\u8F42\u5F62\u5F0F",name:"hub",p:l,set:Q,options:[["none","\u4E0D\u51F8\u51FA\uFF08\u5E73\u9F52\u8F2A\uFF09"],["single","A \u9762\u55AE\u5074\u51F8\u51FA"],["double","A\uFF0FB \u9762\u96D9\u5074\u51F8\u51FA"]]}),l.hub!=="none"&&S.default.createElement(S.default.Fragment,null,S.default.createElement(oe,{label:"\u8F2A\u8F42\u5916\u5F91",name:"hubDiameter",p:l,set:Q}),S.default.createElement("div",{className:"fields"},S.default.createElement(oe,{label:"A \u9762\u51F8\u51FA\u9AD8\u5EA6",name:"hubFront",p:l,set:Q}),l.hub==="double"&&S.default.createElement(oe,{label:"B \u9762\u51F8\u51FA\u9AD8\u5EA6",name:"hubBack",p:l,set:Q})),S.default.createElement("p",{className:"hint"},"\u51F8\u51FA\u9AD8\u5EA6\u4E0D\u5305\u542B\u9F52\u8F2A\u672C\u9AD4\u539A\u5EA6\u3002"))),S.default.createElement(ha,{num:"05",title:"\u8EF8\u7AEF\u64CB\u677F",badge:l.stop?"\u5DF2\u958B\u555F":"\u8CAB\u7A7F"},S.default.createElement(Jg,{label:"\u52A0\u5165\u64CB\u677F",name:"stop",p:l,set:Q}),l.stop&&S.default.createElement(S.default.Fragment,null,S.default.createElement(To,{label:"\u64CB\u677F\u4F4D\u7F6E\uFF0F\u63D2\u5165\u65B9\u5411",name:"stopSide",p:l,set:Q,options:[["back","B \u9762\u5C01\u5E95\uFF0C\u5F9E A \u9762\u63D2\u5165"],["front","A \u9762\u5C01\u5E95\uFF0C\u5F9E B \u9762\u63D2\u5165"]]}),S.default.createElement("div",{className:"fields"},S.default.createElement(oe,{label:"\u64CB\u677F\u539A\u5EA6",name:"stopThickness",p:l,set:Q}),S.default.createElement(oe,{label:"\u80CC\u9762\u5C0F\u5B54\u76F4\u5F91",name:"ejectHole",p:l,set:Q})),S.default.createElement("p",{className:"hint"},"\u5C0F\u5B54\u70BA 0 \u6642\u5B8C\u5168\u5C01\u4F4F\u3002\u64CB\u677F\u5305\u542B\u5728\u7E3D\u539A\u5EA6\u5167\u3002"),S.default.createElement("div",{className:"readout"},S.default.createElement("span",null,"\u53EF\u63D2\u5165\u6DF1\u5EA6"),S.default.createElement("strong",null,pi(B.insertion)," ",S.default.createElement("small",null,"mm"))))),S.default.createElement(ha,{num:"06",title:"\u6B62\u4ED8\u87BA\u7D72\u5B54",badge:l.screws?"\u653B\u7259\u5E95\u5B54":"\u95DC\u9589"},S.default.createElement(Jg,{label:"\u52A0\u5165\u5074\u9762\u653B\u7259\u5E95\u5B54",name:"screws",p:l,set:Q}),l.screws&&S.default.createElement(S.default.Fragment,null,S.default.createElement("p",{className:"hint"},"\u8ACB\u5148\u555F\u7528\u8F2A\u8F42\u3002\u5217\u5370\u5F8C\u518D\u653B\u7259\uFF0C\u5B54\u5F91\u8ACB\u4F9D\u4F7F\u7528\u7684\u7D72\u653B\u8A2D\u5B9A\u3002"),S.default.createElement("div",{className:"fields"},S.default.createElement(oe,{label:"\u5E95\u5B54\u76F4\u5F91",name:"screwDiameter",p:l,set:Q}),S.default.createElement(oe,{label:"\u5B54\u6578",name:"screwCount",p:l,set:Q,unit:"\u5B54",step:1}),S.default.createElement(oe,{label:"\u8DDD A \u9762\u5916\u7AEF",name:"screwPosition",p:l,set:Q}),S.default.createElement(oe,{label:"\u8D77\u59CB\u89D2\u5EA6",name:"screwAngle",p:l,set:Q,unit:"\xB0",step:5})),S.default.createElement("p",{className:"hint"},"\u5B54\u6CBF\u5713\u5468\u5747\u5206\uFF1B\u516D\u89D2\u5B54\u9810\u8A2D\u89D2\u5EA6 0\xB0 \u5C0D\u6E96\u5E73\u9762\u3002"))),S.default.createElement(ha,{num:"07",title:"\u6587\u5B57\u6A19\u8A18",badge:l.labelEnabled?l.labelMode==="engrave"?"\u51F9\u5B57":"\u51F8\u5B57":"\u95DC\u9589"},S.default.createElement(Jg,{label:"\u52A0\u5165\u6587\u5B57\u6A19\u8A18",name:"labelEnabled",p:l,set:Q}),l.labelEnabled&&S.default.createElement(S.default.Fragment,null,S.default.createElement("label",{className:"field"},S.default.createElement("span",null,"\u6587\u5B57\u5167\u5BB9\uFF08\u6700\u591A 20 \u5B57\uFF09"),S.default.createElement("input",{className:"text-input","aria-label":"\u6587\u5B57\u5167\u5BB9",value:l.labelText,maxLength:40,placeholder:"\u4F8B\u5982\uFF1A60T\u3001\u98A8\u529B\u3001\u7B2C\u4E00\u7D44",onChange:et=>Q("labelText",et.target.value)})),S.default.createElement("div",{className:"label-quick"},S.default.createElement("button",{onClick:()=>Q("labelText",`${l.teeth}T`)},"\u586B\u5165\u76EE\u524D\u9F52\u6578"),S.default.createElement("button",{onClick:It},"\u81EA\u52D5\u5B89\u6392\u6587\u5B57")),S.default.createElement(To,{label:"\u4F4D\u7F6E\u6A21\u5F0F",name:"labelPlacement",p:l,set:Q,options:[["auto","\u81EA\u52D5\u5B89\u6392\uFF08\u96A8\u9F52\u8F2A\u66F4\u65B0\uFF09"],["manual","\u624B\u52D5\u8ABF\u6574"]]}),rt&&S.default.createElement("div",{className:"readout"},S.default.createElement("span",null,"\u5DF2\u5B89\u6392\u5728",rt.region),S.default.createElement("strong",null,"\u5B57\u9AD8 ",pi(rt.labelSize)," ",S.default.createElement("small",null,"mm"))),H&&S.default.createElement("div",{className:"label-problem"},S.default.createElement("p",null,H.message),S.default.createElement("button",{onClick:()=>Q("labelEnabled",!1)},"\u5148\u95DC\u9589\u6587\u5B57")),S.default.createElement("div",{className:"fields"},S.default.createElement(To,{label:"\u6587\u5B57\u5F62\u5F0F",name:"labelMode",p:l,set:Q,options:[["engrave","\u51F9\u5B57\uFF08\u523B\u5165\uFF09"],["emboss","\u51F8\u5B57\uFF08\u7A81\u51FA\uFF09"]]}),S.default.createElement(To,{label:"\u6A19\u8A18\u9762",name:"labelTarget",p:l,set:Q,options:[["frontBody","A \u9762\u9F52\u8F2A\u672C\u9AD4"],["backBody","B \u9762\u9F52\u8F2A\u672C\u9AD4"],...l.hub!=="none"?[["frontHub","A \u9762\u8F2A\u8F42\u7AEF\u9762"]]:[],...l.hub==="double"?[["backHub","B \u9762\u8F2A\u8F42\u7AEF\u9762"]]:[]]}),S.default.createElement(oe,{label:l.labelPlacement==="auto"?"\u76EE\u6A19\u5B57\u9AD8\u4E0A\u9650":"\u6587\u5B57\u5BE6\u969B\u5B57\u9AD8",name:"labelSize",p:l,set:Q,step:.1}),S.default.createElement(oe,{label:l.labelMode==="engrave"?"\u523B\u5165\u6DF1\u5EA6":"\u51F8\u51FA\u9AD8\u5EA6",name:"labelDepth",p:l,set:Q,step:.1}),S.default.createElement(oe,{disabled:l.labelPlacement==="auto",label:"\u5DE6\u53F3\u4F4D\u79FB X",name:"labelX",p:ct,set:Q,step:.5}),S.default.createElement(oe,{disabled:l.labelPlacement==="auto",label:"\u4E0A\u4E0B\u4F4D\u79FB Y",name:"labelY",p:ct,set:Q,step:.5}),S.default.createElement(oe,{disabled:l.labelPlacement==="auto",label:"\u6587\u5B57\u65CB\u8F49\u89D2\u5EA6",name:"labelRotation",p:ct,set:Q,unit:"\xB0",step:5})),S.default.createElement("p",{className:"hint"},"\u56FA\u5B9A\u7C97\u9ED1\u9AD4\uFF0C\u652F\u63F4\u5E38\u7528\u4E2D\u82F1\u6587\u53CA\u6578\u5B57\u3002\u5F9E\u6240\u9078\u9762\u6B63\u8996\uFF0C\u53F3\uFF0F\u4E0A\u70BA\u6B63\uFF1B\u5B57\u9AD8\u70BA\u6587\u5B57\u8F2A\u5ED3\u7684\u5BE6\u969B\u9AD8\u5EA6\u3002\u6587\u5B57\u6703\u4E00\u8D77\u5217\u5370\uFF0C\u51F8\u5B57\u53EF\u80FD\u589E\u52A0\u6A21\u578B\u7E3D\u539A\u3002"),S.default.createElement("p",{className:"hint"},"\u5B8C\u6574\u5B57\u5F62\u9808\u843D\u5728\u6240\u9078\u9762\u7684\u5BE6\u5FC3\u5340\u57DF\uFF0C\u8DDD\u908A\u754C\u81F3\u5C11 0.2 mm\uFF1B\u51F9\u5B57\u5E95\u4E0B\u9700\u4FDD\u7559\u81F3\u5C11 0.6 mm \u6750\u6599\u3002\u81EA\u52D5\u6A21\u5F0F\u6703\u5148\u4FDD\u7559\u76EE\u6A19\u5B57\u9AD8\uFF0C\u518D\u5617\u8A66\u7E2E\u5C0F\uFF0C\u901A\u5E38\u4E0D\u4F4E\u65BC 1.2 mm\uFF1B\u4E0D\u66F4\u6539\u9F52\u8F2A\u672C\u9AD4\u5C3A\u5BF8\u3002"))),S.default.createElement(ha,{num:"08",title:"\u9032\u968E\u9F52\u5F62\u8A2D\u5B9A",badge:"\u9078\u7528"},S.default.createElement("div",{className:"fields"},S.default.createElement(oe,{label:"\u7BC0\u5713\u9F52\u539A\u6E1B\u91CF",name:"backlash",p:l,set:Q,step:.01}),S.default.createElement(oe,{label:"\u8B8A\u4F4D\u4FC2\u6578",name:"shift",p:l,set:Q,unit:"",step:.05}),S.default.createElement(oe,{label:"\u9F52\u9802\u9699\u4FC2\u6578",name:"clearance",p:l,set:Q,unit:"",step:.05}),S.default.createElement(oe,{label:"\u6BCF\u5074\u9F52\u9762\u5206\u6BB5\u6578",name:"quality",p:l,set:Q,unit:"\u6BB5",step:1})),S.default.createElement("p",{className:"hint"},"\u9F52\u539A\u6E1B\u91CF\u5957\u7528\u5728\u9019\u9846\u9F52\u8F2A\uFF1B\u5169\u9846\u914D\u5C0D\u6642\uFF0C\u7E3D\u9F52\u9699\u4E5F\u53D7\u914D\u5C0D\u9F52\u8F2A\u8207\u4E2D\u5FC3\u8DDD\u5F71\u97FF\u3002\u7B2C\u4E00\u7248\u9F52\u6839\u63A1\u7C21\u5316\u904E\u6E21\u3002"))),S.default.createElement("div",{className:"sidebar-footer"},S.default.createElement("span",{className:"dot"}),"\u5728\u4F60\u7684\u88DD\u7F6E\u751F\u6210\u6A21\u578B\u30FB\u5C3A\u5BF8\u55AE\u4F4D mm")),S.default.createElement("main",{className:"main"},S.default.createElement("div",{className:"main-heading"},S.default.createElement("div",null,S.default.createElement("span",{className:"eyebrow"},"GEAR WORKSPACE"),S.default.createElement("h2",null,"\u8B93\u8A2D\u8A08\uFF0C\u8F49\u52D5\u8D77\u4F86\u3002")),S.default.createElement("button",{className:"primary",onClick:Kt,disabled:!W},S.default.createElement(Nn,{name:"download"}),"\u4E0B\u8F09 STL")),S.default.createElement(S.default.Fragment,null,s&&S.default.createElement("div",{className:"notice error numeric-notice",role:"alert"},S.default.createElement(Nn,{name:"info"}),S.default.createElement("div",null,S.default.createElement("strong",null,"\u6709\u6B04\u4F4D\u5C1A\u672A\u5B8C\u6210\uFF0C\u9810\u89BD\u4FDD\u7559\u5DF2\u78BA\u8A8D\u7684\u6578\u503C"),S.default.createElement("ul",null,Object.entries(e).map(([et,yt])=>S.default.createElement("li",{key:et},yt.label,"\uFF1A",yt.message))),S.default.createElement("button",{onClick:vt},"\u6062\u5FA9\u4E0A\u6B21\u53EF\u7528\u8A2D\u5B9A")))),S.default.createElement("div",{className:"viewer-card"},S.default.createElement("div",{className:"viewer-top"},S.default.createElement("div",{className:"tabs",role:"tablist","aria-label":"\u9810\u89BD\u6A21\u5F0F"},S.default.createElement("button",{role:"tab","aria-selected":g==="3d",className:g==="3d"?"active":"",onClick:()=>y("3d")},S.default.createElement(Nn,{name:"cube"}),"3D \u9810\u89BD"),S.default.createElement("button",{role:"tab","aria-selected":g==="2d",className:g==="2d"?"active":"",onClick:()=>y("2d")},S.default.createElement(Nn,{name:"ruler"}),"2D \u5C3A\u5BF8\u5716")),S.default.createElement("span",{className:"model-id"},"Z",l.teeth," / M",l.module)),S.default.createElement("div",{className:"viewer-stage"},g==="3d"?S.default.createElement(S.default.Fragment,null,M?S.default.createElement(jx,{result:u,view:D,cut:v}):S.default.createElement(FR,{result:u,view:D,cut:v,onError:N}),S.default.createElement("div",{className:"view-buttons"},[["iso","\u7ACB\u9AD4"],["front","A \u9762"],["back","B \u9762"]].map(([et,yt])=>S.default.createElement("button",{key:et,onClick:()=>A(C=>({kind:et,n:C.n+1}))},yt)),S.default.createElement("button",{className:v?"selected":"",onClick:()=>w(!v)},"\u534A\u5256\u6AA2\u8996")),S.default.createElement("span",{className:"canvas-help"},"\u62D6\u66F3\u65CB\u8F49 \xB7 \u6EFE\u8F2A\u6216\u96D9\u6307\u7E2E\u653E",v?" \xB7 \u5256\u5207\u50C5\u4F9B\u6AA2\u8996":""),S.default.createElement("div",{className:"axis-label"},S.default.createElement("span",null,"A")," \u5B54\u8EF8\u65B9\u5411")):u&&f?S.default.createElement(HR,{result:u,p:f}):S.default.createElement("div",{className:"empty-state"},"\u8ACB\u5148\u4FEE\u6B63\u53C3\u6578\u4EE5\u986F\u793A\u5C3A\u5BF8\u5716\u3002"),H&&g==="3d"&&S.default.createElement("div",{className:"text-issue-banner"},S.default.createElement("span",null,"\u9F52\u8F2A\u53EF\u7E7C\u7E8C\u6AA2\u8996\uFF0C\u6587\u5B57\u5F85\u8ABF\u6574"),S.default.createElement("button",{onClick:It},"\u81EA\u52D5\u5B89\u6392\u6587\u5B57"),S.default.createElement("button",{onClick:()=>y("2d")},"\u770B\u6587\u5B57\u4F4D\u7F6E")),_&&S.default.createElement("div",{className:"busy"},S.default.createElement("span",{className:"spinner"}),l.labelEnabled?"\u8F09\u5165\u5B57\u578B\uFF0F\u66F4\u65B0\u6A21\u578B\u4E2D":"\u66F4\u65B0\u6A21\u578B\u4E2D"),!_&&!H&&(Y.errors.length>0||m)&&S.default.createElement("div",{className:"parameter-issue-banner"},S.default.createElement("span",null,u?"\u76EE\u524D\u986F\u793A\u4E0A\u4E00\u6B21\u53EF\u7528\u6A21\u578B\uFF0C\u8ACB\u4FEE\u6B63\u53C3\u6578":"\u8ACB\u4FEE\u6B63\u53C3\u6578\u5F8C\u7522\u751F\u6A21\u578B"),S.default.createElement("button",{onClick:vt},"\u6062\u5FA9\u4E0A\u6B21\u53EF\u7528\u8A2D\u5B9A"))),S.default.createElement("div",{className:"viewer-footer"},S.default.createElement("span",{className:W?"ready-status":"pending-status"},W?S.default.createElement(Nn,{name:"check",size:15}):S.default.createElement(Nn,{name:"info",size:15})," ",W?"\u6A21\u578B\u5DF2\u66F4\u65B0":s?"\u6578\u5B57\u8F38\u5165\u5F85\u5B8C\u6210":_?"\u6B63\u5728\u8A08\u7B97":H?"\u9F52\u8F2A\u5DF2\u986F\u793A\uFF0C\u6587\u5B57\u5F85\u8ABF\u6574":"\u7B49\u5F85\u6709\u6548\u53C3\u6578"),S.default.createElement("span",null,W?`${(u.indices.length/3).toLocaleString()} \u500B\u4E09\u89D2\u9762`:"\u9810\u89BD\u8207 STL \u4F7F\u7528\u540C\u4E00\u4EFD\u6A21\u578B"))),S.default.createElement("div",{className:"metrics"},[["\u5916\u5F91",B.tip*2,"mm"],["\u7BC0\u5713\u76F4\u5F91",B.pitch*2,"mm"],["\u6A21\u578B\u7E3D\u539A",B.printHeight,"mm"],["\u6A21\u578B\u9AD4\u7A4D",W?u.volume/1e3:NaN,"cm\xB3"]].map(([et,yt,C])=>S.default.createElement("div",{key:et},S.default.createElement("span",null,et),S.default.createElement("strong",null,Number.isFinite(yt)?pi(yt):"\u2014",S.default.createElement("small",null,C))))),(Y.errors.length>0||m)&&S.default.createElement("div",{className:"notice error",role:"alert"},S.default.createElement(Nn,{name:"info"}),S.default.createElement("div",null,S.default.createElement("strong",null,H?"\u8ACB\u8ABF\u6574\u6587\u5B57\uFF0C\u9F52\u8F2A\u672C\u9AD4\u5DF2\u4FDD\u7559":"\u8ACB\u8ABF\u6574\u4EE5\u4E0B\u8A2D\u5B9A"),S.default.createElement("ul",null,[...new Set([...Y.errors,...m?[m]:[]])].map((et,yt)=>S.default.createElement("li",{key:yt},et))),S.default.createElement("button",{className:"recover-button",onClick:vt},"\u6062\u5FA9\u4E0A\u6B21\u53EF\u7528\u8A2D\u5B9A"))),Y.warnings.length>0&&S.default.createElement("div",{className:"notice warning"},S.default.createElement(Nn,{name:"info"}),S.default.createElement("div",null,Y.warnings.map((et,yt)=>S.default.createElement("p",{key:yt},et)))),S.default.createElement("div",{className:"design-note"},S.default.createElement(Nn,{name:"info"}),S.default.createElement("p",null,"STL \u4EE5 mm \u8F38\u51FA\u3002\u5B54\u5C3A\u5BF8\u88DC\u511F\u8ACB\u4F9D\u8A66\u5370\u7D50\u679C\u8ABF\u6574\uFF1B\u6A21\u578B\u9AD4\u7A4D\u4E0D\u7B49\u65BC\u5207\u7247\u8017\u6750\u91CF\u3002",S.default.createElement("br",null),"\u7B2C\u4E00\u7248\u9F52\u9762\u63A1\u6F38\u958B\u7DDA\u3001\u9F52\u6839\u63A1\u7C21\u5316\u904E\u6E21\uFF0C\u6B63\u5F0F\u4F7F\u7528\u524D\u8ACB\u78BA\u8A8D\u5BE6\u969B\u914D\u5408\u8207\u5699\u5408\u3002"),S.default.createElement("span",null,"DESIGN \u2192 PRINT \u2192 TEST")),S.default.createElement("footer",{className:"main-footer"},S.default.createElement("span",null,"\u98A8\u529B\u767C\u96FB\u5BE6\u4F5C\u5DE5\u5177"),S.default.createElement("span",null,"\u55AE\u9846\u76F4\u9F52\u8F2A / VERSION 1.3.4")))),U&&S.default.createElement("div",{className:"toast",role:"status"},U))}(0,jS.createRoot)(document.getElementById("app")).render(S.default.createElement(VR,null));
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
