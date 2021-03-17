/*! For license information please see main.4bc9682e.chunk.js.LICENSE.txt */
(this.webpackJsonpexamples_react_app=this.webpackJsonpexamples_react_app||[]).push([[0],[function(e,r,t){"use strict";e.exports=t(1)},function(e,r,t){"use strict";var n=t(2),o=60103,u=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var a=60109,i=60110,l=60112;r.Suspense=60113;var c=60115,f=60116;if("function"===typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),u=s("react.portal"),r.Fragment=s("react.fragment"),r.StrictMode=s("react.strict_mode"),r.Profiler=s("react.profiler"),a=s("react.provider"),i=s("react.context"),l=s("react.forward_ref"),r.Suspense=s("react.suspense"),c=s("react.memo"),f=s("react.lazy")}var p="function"===typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}function v(){}function E(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var g=E.prototype=new v;g.constructor=E,n(g,m.prototype),g.isPureReactComponent=!0;var R={current:null},_=Object.prototype.hasOwnProperty,b={key:!0,ref:!0,__self:!0,__source:!0};function S(e,r,t){var n,u={},a=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(a=""+r.key),r)_.call(r,n)&&!b.hasOwnProperty(n)&&(u[n]=r[n]);var l=arguments.length-2;if(1===l)u.children=t;else if(1<l){for(var c=Array(l),f=0;f<l;f++)c[f]=arguments[f+2];u.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===u[n]&&(u[n]=l[n]);return{$$typeof:o,type:e,key:a,ref:i,props:u,_owner:R.current}}function O(e){return"object"===typeof e&&null!==e&&e.$$typeof===o}var A=/\/+/g;function k(e,r){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function M(e,r,t,n,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case u:l=!0}}if(l)return a=a(l=e),e=""===n?"."+k(l,0):n,Array.isArray(a)?(t="",null!=e&&(t=e.replace(A,"$&/")+"/"),M(a,r,t,"",(function(e){return e}))):null!=a&&(O(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(A,"$&/")+"/")+e)),r.push(a)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var f=n+k(i=e[c],c);l+=M(i,r,t,f,a)}else if("function"===typeof(f=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=f.call(e),c=0;!(i=e.next()).done;)l+=M(i=i.value,r,t,f=n+k(i,c++),a);else if("object"===i)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return l}function N(e,r,t){if(null==e)return e;var n=[],o=0;return M(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function w(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function j(){var e=C.current;if(null===e)throw Error(d(321));return e}var U={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:R,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:N,forEach:function(e,r,t){N(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return N(e,(function(){r++})),r},toArray:function(e){return N(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},r.Component=m,r.PureComponent=E,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,r.cloneElement=function(e,r,t){if(null===e||void 0===e)throw Error(d(267,e));var u=n({},e.props),a=e.key,i=e.ref,l=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,l=R.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(f in r)_.call(r,f)&&!b.hasOwnProperty(f)&&(u[f]=void 0===r[f]&&void 0!==c?c[f]:r[f])}var f=arguments.length-2;if(1===f)u.children=t;else if(1<f){c=Array(f);for(var s=0;s<f;s++)c[s]=arguments[s+2];u.children=c}return{$$typeof:o,type:e.type,key:a,ref:i,props:u,_owner:l}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:i,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=S,r.createFactory=function(e){var r=S.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:w}},r.memo=function(e,r){return{$$typeof:c,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return j().useCallback(e,r)},r.useContext=function(e,r){return j().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return j().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return j().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return j().useLayoutEffect(e,r)},r.useMemo=function(e,r){return j().useMemo(e,r)},r.useReducer=function(e,r,t){return j().useReducer(e,r,t)},r.useRef=function(e){return j().useRef(e)},r.useState=function(e){return j().useState(e)},r.version="17.0.1"},function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,i,l=a(e),c=1;c<arguments.length;c++){for(var f in t=Object(arguments[c]))o.call(t,f)&&(l[f]=t[f]);if(n){i=n(t);for(var s=0;s<i.length;s++)u.call(t,i[s])&&(l[i[s]]=t[i[s]])}}return l}},function(e,r,t){"use strict";t.r(r),t.d(r,"filters",(function(){return n})),t.d(r,"modes",(function(){return o})),t.d(r,"presets",(function(){return u})),t.d(r,"mask",(function(){return c})),t.d(r,"applyMask",(function(){return f})),t.d(r,"useMask",(function(){return s})),t.d(r,"useMaskState",(function(){return p}));var n={NUMBERS:/\D/gim,LETTERS:/[^a-z]/gim,CHARACTERS:/\W/gim,NONE:null},o={AUTO:"auto",NORMAL:"normal",REVERSE:"reverse"},u={ONLY_NUMBERS:{mask:"*",filter:n.NUMBERS,mode:o.NORMAL,placeholder:null},DATE_STAMP:{mask:"????-??-??",filter:n.NUMBERS,mode:o.NORMAL,placeholder:"_"},DATE_PTBR:{mask:"??/??/????",filter:n.NUMBERS,mode:o.NORMAL,placeholder:"_"},DATETIME_STAMP:{mask:"????-??-?? ??:??:??",filter:n.NUMBERS,mode:o.NORMAL,placeholder:null},DATETIME_PTBR:{mask:"??/??/???? ??:??",filter:n.NUMBERS,mode:o.NORMAL,placeholder:null},PHONE_USA:{mask:"(???) ???-????",filter:n.NUMBERS,mode:o.NORMAL,placeholder:null},PHONE_BR:{mask:["(??) ?????-????","(??) ????-????"],filter:n.NUMBERS,mode:o.NORMAL,placeholder:null},CURRENCY_POINT:{mask:"{3|,}.??",filter:n.NUMBERS,mode:o.REVERSE,placeholder:"0"},CURRENCY_COMMA:{mask:"{3|.},??",filter:n.NUMBERS,mode:o.REVERSE,placeholder:"0"},CURRENCY_PTBR:{mask:"R$ {3|.},??",filter:n.NUMBERS,mode:o.REVERSE,placeholder:"0"},DOCUMENT_CPF:{mask:"???.???.???-??",filter:n.NUMBERS,mode:o.REVERSE,placeholder:"_"},DOCUMENT_CNPJ:{mask:"??.???.???/????-??",filter:n.NUMBERS,mode:o.REVERSE,placeholder:"_"},DOCUMENT_CPF_CNPJ:{mask:["???.???.???-??","??.???.???/????-??"],filter:n.NUMBERS,mode:o.NORMAL,placeholder:null},IP_V4:{mask:"???.???.???.???",filter:n.NUMBERS,mode:o.NORMAL,placeholder:null}};function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,u=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(l){o=!0,u=l}finally{try{n||null==i.return||i.return()}finally{if(o)throw u}}return t}}(e,r)||function(e,r){if(e){if("string"===typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=t(0);function c(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.NUMBERS,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o.AUTO,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,i="",l=0,c=null,f="auto"===u?/^[^?]*\*.*\?.*$/.test(r.replace(/\{\d+\|.+\}/i,"*"))||a:"reverse"===u;if(f&&(e=e.split("").reverse().join("")),t&&(e=e.replace(t,"")),a&&(e=e.replace(new RegExp("["+a+"]+$","gim"),"")),""==e)return"";if(Array.isArray(r)){r.sort((function(e,r){return e.replace(/\{\d+\|.+\}/i,"*").replace(/[^\?\*]/gim,"").length-r.replace(/\{\d+\|.+\}/i,"*").replace(/[^\?\*]/gim,"").length}));for(var s=0;s<r.length;s++)if(r[s].replace(/\{\d+\|.+\}/i,"*").replace(/[^\?\*]/gim,"").length>=e.length||s===r.length-1){r=r[s];break}}/\{\d+\|.+\}/i.test(r)&&(c=r.match(/\{(\d+)\|(.+)\}/i),r=r.replace(/\{\d+\|.+\}/i,"*")),f&&/^[^\*]*$/gim.test(r)&&e.length>r.replace(/[^\?]/gim,"").length&&(e=e.substring(1));e:for(var p=f?r.length-1:0;f?p>=0:p<r.length;f?p--:p++)switch(r.charAt(p)){case"?":if(e.charAt(l))f?i=e.charAt(l)+i:i+=e.charAt(l),l++;else{if(!a)break e;f?i=a+i:i+=a}break;case"*":var d=c?(e.substring(l).match(new RegExp(".{1,"+c[1]+"}","g"))||[]).join(c[2]):e.substring(l);if(!d&&!a)break e;if(f){var h=r.substring(0,p).replace(/[\?\*]/gim,"");return h+(d?d.split("").reverse().join(""):a||"")+i}var y=r.substring(p+1).replace(/[\?\*]/gim,"");return i+(d||(a||""))+y;default:f?i=r.charAt(p)+i:i+=r.charAt(p)}var m=f?i.charAt(0):i.charAt(i.length-1);return f&&m!==e.charAt(l-1)&&m!==r.charAt(0)&&m!==a?i=i.substring(1):f||m===e.charAt(l-1)||m===r.charAt(r.length-1)||m===a||(i=i.slice(0,-1)),i}function f(e,r){return c(e,r.mask,r.filter,r.mode,r.placeholder)}function s(e){return function(r){return f(r,e)}}var p=function(e,r){var t=i(Object(l.useState)(e),2),n=t[0],o=t[1];return[n,function(e){return o(f(e,r))}]}}],[[3,1]]]);
//# sourceMappingURL=main.4bc9682e.chunk.js.map