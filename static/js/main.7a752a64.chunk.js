(this.webpackJsonpexamples_react_app=this.webpackJsonpexamples_react_app||[]).push([[0],{11:function(e,t,r){"use strict";r.r(t);var l=r(1),a=r.n(l),c=r(4),s=r.n(c),n=(r(9),r(2)),i={NUMBERS:/\D/gim,LETTERS:/[^a-z]/gim,CHARACTERS:/\W/gim,NONE:null},o="auto",h="normal",m="reverse",d={ONLY_NUMBERS:{mask:"*",filter:i.NUMBERS,mode:h,placeholder:null},DATE_STAMP:{mask:"????-??-??",filter:i.NUMBERS,mode:o,placeholder:"_"},DATE_PTBR:{mask:"??/??/????",filter:i.NUMBERS,mode:o,placeholder:"_"},DATETIME_STAMP:{mask:"????-??-?? ??:??:??",filter:i.NUMBERS,mode:o,placeholder:null},DATETIME_PTBR:{mask:"??/??/???? ??:??",filter:i.NUMBERS,mode:o,placeholder:null},PHONE_USA:{mask:"(???) ???-????",filter:i.NUMBERS,mode:h,placeholder:null},PHONE_BR:{mask:["(??) ?????-????","(??) ????-????"],filter:i.NUMBERS,mode:h,placeholder:null},CURRENCY_POINT:{mask:"{3|,}.??",filter:i.NUMBERS,mode:m,placeholder:"0"},CURRENCY_COMMA:{mask:"{3|.},??",filter:i.NUMBERS,mode:m,placeholder:"0"},CURRENCY_PTBR:{mask:"R$ {3|.},??",filter:i.NUMBERS,mode:m,placeholder:"0"},DOCUMENT_CPF:{mask:"???.???.???-??",filter:i.NUMBERS,mode:m,placeholder:"_"},DOCUMENT_CNPJ:{mask:"??.???.???/????-??",filter:i.NUMBERS,mode:m,placeholder:"_"},DOCUMENT_CPF_CNPJ:{mask:["???.???.???-??","??.???.???/????-??"],filter:i.NUMBERS,mode:h,placeholder:null},IP_V4:{mask:"???.???.???.???",filter:i.NUMBERS,mode:h,placeholder:null}};function p(e,t){return function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.NUMBERS,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,c="",s=0,n=null,h="auto"===l?/^[^?]*\*.*\?.*$/.test(t.replace(/\{\d+\|.+\}/i,"*"))||a:"reverse"===l;if(h&&(e=e.split("").reverse().join("")),r&&(e=e.replace(r,"")),a&&(e=e.replace(new RegExp("["+a+"]+$","gim"),"")),""==e)return"";if(Array.isArray(t)){t.sort((function(e,t){return e.replace(/\{\d+\|.+\}/i,"*").replace(/[^\?\*]/gim,"").length-t.replace(/\{\d+\|.+\}/i,"*").replace(/[^\?\*]/gim,"").length}));for(var m=0;m<t.length;m++)if(t[m].replace(/\{\d+\|.+\}/i,"*").replace(/[^\?\*]/gim,"").length>=e.length||m===t.length-1){t=t[m];break}}/\{\d+\|.+\}/i.test(t)&&(n=t.match(/\{(\d+)\|(.+)\}/i),t=t.replace(/\{\d+\|.+\}/i,"*")),h&&/^[^\*]*$/gim.test(t)&&e.length>t.replace(/[^\?]/gim,"").length&&(e=e.substring(1));e:for(var d=h?t.length-1:0;h?d>=0:d<t.length;h?d--:d++)switch(t.charAt(d)){case"?":if(e.charAt(s))h?c=e.charAt(s)+c:c+=e.charAt(s),s++;else{if(!a)break e;h?c=a+c:c+=a}break;case"*":var p=n?(e.substring(s).match(new RegExp(".{1,"+n[1]+"}","g"))||[]).join(n[2]):e.substring(s);if(!p&&!a)break e;return h?t.substring(0,d).replace(/[\?\*]/gim,"")+(p?p.split("").reverse().join(""):a||"")+c:c+(p||a||"")+t.substring(d+1).replace(/[\?\*]/gim,"");default:h?c=t.charAt(d)+c:c+=t.charAt(d)}var u=h?c.charAt(0):c.charAt(c.length-1);return h&&u!==e.charAt(s-1)&&u!==t.charAt(0)&&u!==a?c=c.substring(1):h||u===e.charAt(s-1)||u===t.charAt(t.length-1)||u===a||(c=c.slice(0,-1)),c}(e,t.mask,t.filter,t.mode,t.placeholder)}var u=function(e,t){var r=Object(l.useState)(e),a=Object(n.a)(r,2),c=a[0],s=a[1];return[c,function(e){return s(p(e,t))}]},j=r(0),g=function(){var e=[],t=[],r=Object(l.useState)("R$ *,??"),a=Object(n.a)(r,2),c=a[0],s=a[1],i=Object(l.useState)(""),o=Object(n.a)(i,2),h=o[0],m=o[1],p=u("",{mask:c,placeholder:h}),g=Object(n.a)(p,2),b=g[0],N=g[1];return Object.keys(d).map((function(r){var l=u("",d[r]),a=Object(n.a)(l,2);e[r]=a[0],t[r]=a[1]})),RegExp.prototype.toJSON=RegExp.prototype.toString,Object(j.jsx)("div",{className:"bg-dark text-light py-5 px-3",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"text-right mb-5 d-flex flex-row-reverse",children:[Object(j.jsx)("a",{href:"https://github.com/guilhermeasn/mask-hooks",target:"_blank",rel:"noreferrer",className:"mx-3 mt-1",children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#fff",width:"48",height:"48",viewBox:"0 0 24 24",children:Object(j.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{className:"m-0 p-0",children:"mask-hooks"}),Object(j.jsx)("span",{className:"small m-0 p-0",children:"By Neves, Guilherme"})]})]}),Object.keys(d).map((function(r,l){return Object(j.jsxs)("div",{className:"row my-5",children:[Object(j.jsxs)("label",{className:"col-12 col-md-6 text-light",children:[r,Object(j.jsx)("pre",{className:"text-light",children:JSON.stringify(d[r],null,"\t")})]}),Object(j.jsx)("input",{className:"col-12 col-md-6 form-control rounded",type:"text",value:e[r],onChange:function(e){return t[r](e.currentTarget.value)}})]},l)})),Object(j.jsx)("hr",{className:"bg-light"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h4",{className:"col-12",children:"Exemplo Personalizavel"}),Object(j.jsxs)("p",{className:"col-6",children:["Mask:",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"form-control rounded",type:"text",value:c,onChange:function(e){s(e.currentTarget.value),N("")}})]}),Object(j.jsxs)("p",{className:"col-6",children:["Placeholder:",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"form-control rounded",type:"text",value:h,onChange:function(e){m(e.currentTarget.value),N("")}})]}),Object(j.jsxs)("p",{className:"col-12",children:["Target: ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"form-control rounded",type:"text",value:b,onChange:function(e){return N(e.currentTarget.value)}})]})]})]})})};var b=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(g,{})})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.7a752a64.chunk.js.map