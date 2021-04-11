(this.webpackJsonpexamples_react_app=this.webpackJsonpexamples_react_app||[]).push([[0],{12:function(e,t,r){"use strict";r.r(t);var a=r(1),c=r.n(a),s=r(5),l=r.n(s),n=(r(10),r(2)),i={NUMBERS:/\D/gim,LETTERS:/[^a-z]/gim,CHARACTERS:/\W/gim,NONE:null},o="auto",m="normal",h="reverse",u={ONLY_NUMBERS:{mask:"*",mode:m},DATE_STAMP:{mask:"????-??-??"},DATE_PTBR:{mask:"??/??/????"},DATETIME_STAMP:{mask:"????-??-?? ??:??:??"},DATETIME_PTBR:{mask:"??/??/???? ??:??"},PHONE_USA:{mask:"(???) ???-????",mode:m},PHONE_BR:{mask:["(??) ?????-????","(??) ????-????"],mode:m},CURRENCY_POINT:{mask:"{3|,}.??",mode:h,placeholder:"0"},CURRENCY_COMMA:{mask:"{3|.},??",mode:h,placeholder:"0"},CURRENCY_PTBR:{mask:"R$ {3|.},??",mode:h,placeholder:"0"},DOCUMENT_CPF:{mask:"???.???.???-??",mode:h},DOCUMENT_CNPJ:{mask:"??.???.???/????-??",mode:h},DOCUMENT_CPF_CNPJ:{mask:["???.???.???-??","??.???.???/????-??"]},IP_V4:{mask:"???.???.???.???",mode:m}};function j(e,t){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"*",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.NUMBERS,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s="",l=0,n=null;try{e=e.toString(),c=c.toString()}catch(p){}var m="auto"===a?/^[^?]*?\*.*$/.test((Array.isArray(t)?t[0]:t).replace(/\{\d+\|.+\}/i,"*"))||c:"reverse"===a;if(e&&e.length&&(m&&(e=e.split("").reverse().join("")),r&&(e=e.replace(r,"")),c&&(e=e.replace(new RegExp("["+c+"]+$","gim"),""))),""===e||!e)return"";if(Array.isArray(t)){t.sort((function(e,t){return e.replace(/\{\d+\|.+\}/i,"*").replace(/[^?*]/gim,"").length-t.replace(/\{\d+\|.+\}/i,"*").replace(/[^?*]/gim,"").length}));for(var h=0;h<t.length;h++)if(t[h].replace(/\{\d+\|.+\}/i,"*").replace(/[^?*]/gim,"").length>=e.length||h===t.length-1){t=t[h];break}}/\{\d+\|.+\}/i.test(t)&&(n=t.match(/\{(\d+)\|(.+)\}/i),t=t.replace(/\{\d+\|.+\}/i,"*")),m&&/^[^*]*$/gim.test(t)&&e.length>t.replace(/[^?]/gim,"").length&&(e=e.substring(1));e:for(var u=m?t.length-1:0;m?u>=0:u<t.length;m?u--:u++)switch(t.charAt(u)){case"?":if(e.charAt(l))m?s=e.charAt(l)+s:s+=e.charAt(l),l++;else{if(!c)break e;m?s=c+s:s+=c}break;case"*":var j=n?(e.substring(l).match(new RegExp(".{1,"+n[1]+"}","g"))||[]).join(n[2]):e.substring(l);if(!j&&!c)break e;return m?t.substring(0,u).replace(/[?*]/gim,"")+(j?j.split("").reverse().join(""):c||"")+s:s+(j||c||"")+t.substring(u+1).replace(/[?*]/gim,"");default:m?s=t.charAt(u)+s:s+=t.charAt(u)}var d=m?s.charAt(0):s.charAt(s.length-1);return m&&d!==e.charAt(l-1)&&d!==t.charAt(0)&&d!==c?s=s.substring(1):m||d===e.charAt(l-1)||d===t.charAt(t.length-1)||d===c||(s=s.slice(0,-1)),s}(e,t.mask,t.filter,t.mode,t.placeholder)}function d(e){return function(t){return j(t,e)}}var p=function(e,t){var r=Object(a.useState)(e),c=Object(n.a)(r,2),s=c[0],l=c[1],i=d(t);return[s,function(e){return l(i(e))}]},g=r(4),b=function(e){var t=d(e.config||e.preset||{mask:e.mask||"*",filter:e.filter||i.NUMBERS,mode:e.mode||m,placeholder:e.placeholder||null}||{});return c.a.createElement("input",Object(g.a)(Object(g.a)({},e),{},{value:t(e.value||"")}))},O=function(e){var t=d(e.config||e.preset||{mask:e.mask||"*",filter:e.filter||i.NUMBERS,mode:e.mode||m,placeholder:e.placeholder||null}||{});return c.a.createElement(c.a.Fragment,null,t(e.children||""))},x=r(0),v=function(){var e=[],t=[],r=Object(a.useState)(""),c=Object(n.a)(r,2),s=c[0],l=c[1],i=Object(a.useState)("$ *,??"),o=Object(n.a)(i,2),m=o[0],h=o[1],j=Object(a.useState)(""),d=Object(n.a)(j,2),g=d[0],v=d[1],f=p("",{mask:m,placeholder:g}),N=Object(n.a)(f,2),k=N[0],E=N[1];return Object.keys(u).map((function(r){var a=p("",u[r]),c=Object(n.a)(a,2);e[r]=c[0],t[r]=c[1]})),RegExp.prototype.toJSON=RegExp.prototype.toString,Object(x.jsx)("div",{className:"bg-dark text-light py-5 px-3",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"text-right mb-5 d-flex flex-row-reverse",children:[Object(x.jsx)("a",{href:"https://github.com/guilhermeasn/mask-hooks",target:"_blank",rel:"noreferrer",className:"mx-3 mt-1",children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#fff",width:"48",height:"48",viewBox:"0 0 24 24",children:Object(x.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{className:"m-0 p-0",children:"mask-hooks"}),Object(x.jsx)("span",{className:"small m-0 p-0",children:"By Neves, Guilherme"})]})]}),Object.keys(u).map((function(r,a){return Object(x.jsxs)("div",{className:"row my-5",children:[Object(x.jsxs)("label",{className:"col-12 col-md-6 text-light",children:[r,Object(x.jsx)("pre",{className:"text-light",children:JSON.stringify(u[r],null,"\t")})]}),Object(x.jsx)("input",{className:"col-12 col-md-6 form-control rounded",type:"text",value:e[r],onChange:function(e){return t[r](e.currentTarget.value)}})]},a)})),Object(x.jsx)("hr",{className:"bg-light"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"Component MaskInput"}),Object(x.jsx)("p",{className:"small",children:"<MaskInput value={vl} onChange={input => setVl(input.currentTarget.value)} mask='???.???.???-??' mode='reverse'  />"}),Object(x.jsx)(b,{className:"form-control",value:s,onChange:function(e){return l(e.currentTarget.value)},mask:"???.???.???-??",mode:"reverse"})]}),Object(x.jsx)("hr",{className:"bg-light"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"Component MaskOutput"}),Object(x.jsx)("p",{className:"small",children:"<MaskOutput filter='letters' mask='{1|, }'>abcdefghijklmnopqrstuvwxyz</MaskOutput>"}),Object(x.jsx)(O,{filter:"letters",mask:"{1|, }",children:"abcdefghijklmnopqrstuvwxyz"})]}),Object(x.jsx)("hr",{className:"bg-light"}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("h4",{className:"col-12",children:"Exemplo Personalizavel"}),Object(x.jsxs)("p",{className:"col-6",children:["Mask:",Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"form-control rounded",type:"text",value:m,onChange:function(e){h(e.currentTarget.value),E("")}})]}),Object(x.jsxs)("p",{className:"col-6",children:["Placeholder:",Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"form-control rounded",type:"text",value:g,onChange:function(e){v(e.currentTarget.value),E("")}})]}),Object(x.jsxs)("p",{className:"col-12",children:["Target: ",Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"form-control rounded",type:"text",value:k,onChange:function(e){E(e.currentTarget.value)}})]})]})]})})};var f=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(v,{})})};l.a.render(Object(x.jsx)(f,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.d19766bf.chunk.js.map