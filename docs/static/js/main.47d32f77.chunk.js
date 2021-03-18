(this.webpackJsonpexamples_react_app=this.webpackJsonpexamples_react_app||[]).push([[0],{11:function(e,t,r){"use strict";r.r(t);var l=r(1),a=r(4),c=r.n(a),s=(r(9),r(2)),n={NUMBERS:/\D/gim,LETTERS:/[^a-z]/gim,CHARACTERS:/\W/gim,NONE:null},i="auto",o="normal",h="reverse",m={ONLY_NUMBERS:{mask:"*",filter:n.NUMBERS,mode:o,placeholder:null},DATE_STAMP:{mask:"????-??-??",filter:n.NUMBERS,mode:i,placeholder:"_"},DATE_PTBR:{mask:"??/??/????",filter:n.NUMBERS,mode:i,placeholder:"_"},DATETIME_STAMP:{mask:"????-??-?? ??:??:??",filter:n.NUMBERS,mode:i,placeholder:null},DATETIME_PTBR:{mask:"??/??/???? ??:??",filter:n.NUMBERS,mode:i,placeholder:null},PHONE_USA:{mask:"(???) ???-????",filter:n.NUMBERS,mode:o,placeholder:null},PHONE_BR:{mask:["(??) ?????-????","(??) ????-????"],filter:n.NUMBERS,mode:o,placeholder:null},CURRENCY_POINT:{mask:"{3|,}.??",filter:n.NUMBERS,mode:h,placeholder:"0"},CURRENCY_COMMA:{mask:"{3|.},??",filter:n.NUMBERS,mode:h,placeholder:"0"},CURRENCY_PTBR:{mask:"R$ {3|.},??",filter:n.NUMBERS,mode:h,placeholder:"0"},DOCUMENT_CPF:{mask:"???.???.???-??",filter:n.NUMBERS,mode:h,placeholder:"_"},DOCUMENT_CNPJ:{mask:"??.???.???/????-??",filter:n.NUMBERS,mode:h,placeholder:"_"},DOCUMENT_CPF_CNPJ:{mask:["???.???.???-??","??.???.???/????-??"],filter:n.NUMBERS,mode:o,placeholder:null},IP_V4:{mask:"???.???.???.???",filter:n.NUMBERS,mode:o,placeholder:null}};function d(e,t){return function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.NUMBERS,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:i,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,c="",s=0,o=null,h="auto"===l?/^[^?]*\*.*\?.*$/.test(t.replace(/\{\d+\|.+\}/i,"*"))||a:"reverse"===l;if(h&&(e=e.split("").reverse().join("")),r&&(e=e.replace(r,"")),a&&(e=e.replace(new RegExp("["+a+"]+$","gim"),"")),""===e||!e)return"";if(Array.isArray(t)){t.sort((function(e,t){return e.replace(/\{\d+\|.+\}/i,"*").replace(/[^?*]/gim,"").length-t.replace(/\{\d+\|.+\}/i,"*").replace(/[^?*]/gim,"").length}));for(var m=0;m<t.length;m++)if(t[m].replace(/\{\d+\|.+\}/i,"*").replace(/[^?*]/gim,"").length>=e.length||m===t.length-1){t=t[m];break}}/\{\d+\|.+\}/i.test(t)&&(o=t.match(/\{(\d+)\|(.+)\}/i),t=t.replace(/\{\d+\|.+\}/i,"*")),h&&/^[^*]*$/gim.test(t)&&e.length>t.replace(/[^?]/gim,"").length&&(e=e.substring(1));e:for(var d=h?t.length-1:0;h?d>=0:d<t.length;h?d--:d++)switch(t.charAt(d)){case"?":if(e.charAt(s))h?c=e.charAt(s)+c:c+=e.charAt(s),s++;else{if(!a)break e;h?c=a+c:c+=a}break;case"*":var u=o?(e.substring(s).match(new RegExp(".{1,"+o[1]+"}","g"))||[]).join(o[2]):e.substring(s);if(!u&&!a)break e;return h?t.substring(0,d).replace(/[?*]/gim,"")+(u?u.split("").reverse().join(""):a||"")+c:c+(u||a||"")+t.substring(d+1).replace(/[?*]/gim,"");default:h?c=t.charAt(d)+c:c+=t.charAt(d)}var p=h?c.charAt(0):c.charAt(c.length-1);return h&&p!==e.charAt(s-1)&&p!==t.charAt(0)&&p!==a?c=c.substring(1):h||p===e.charAt(s-1)||p===t.charAt(t.length-1)||p===a||(c=c.slice(0,-1)),c}(e,t.mask,t.filter,t.mode,t.placeholder)}var u=function(e,t){var r=Object(l.useState)(e),a=Object(s.a)(r,2),c=a[0],n=a[1];return[c,function(e){return n((function(){return d(e,t)}))}]},p=r(0),j=function(){var e=[],t=[],r=Object(l.useState)("R$ *,??"),a=Object(s.a)(r,2),c=a[0],n=a[1],i=Object(l.useState)(""),o=Object(s.a)(i,2),h=o[0],d=o[1],j=u("",{mask:c,placeholder:h}),g=Object(s.a)(j,2),b=g[0],N=g[1];return Object.keys(m).map((function(r){var l=u("",m[r]),a=Object(s.a)(l,2);e[r]=a[0],t[r]=a[1]})),RegExp.prototype.toJSON=RegExp.prototype.toString,Object(p.jsx)("div",{className:"bg-dark text-light py-5 px-3",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"text-right mb-5 d-flex flex-row-reverse",children:[Object(p.jsx)("a",{href:"https://github.com/guilhermeasn/mask-hooks",target:"_blank",rel:"noreferrer",className:"mx-3 mt-1",children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#fff",width:"48",height:"48",viewBox:"0 0 24 24",children:Object(p.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"m-0 p-0",children:"mask-hooks"}),Object(p.jsx)("span",{className:"small m-0 p-0",children:"By Neves, Guilherme"})]})]}),Object.keys(m).map((function(r,l){return Object(p.jsxs)("div",{className:"row my-5",children:[Object(p.jsxs)("label",{className:"col-12 col-md-6 text-light",children:[r,Object(p.jsx)("pre",{className:"text-light",children:JSON.stringify(m[r],null,"\t")})]}),Object(p.jsx)("input",{className:"col-12 col-md-6 form-control rounded",type:"text",value:e[r],onChange:function(e){return t[r](e.currentTarget.value)}})]},l)})),Object(p.jsx)("hr",{className:"bg-light"}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("h4",{className:"col-12",children:"Exemplo Personalizavel"}),Object(p.jsxs)("p",{className:"col-6",children:["Mask:",Object(p.jsx)("br",{}),Object(p.jsx)("input",{className:"form-control rounded",type:"text",value:c,onChange:function(e){n(e.currentTarget.value),N("")}})]}),Object(p.jsxs)("p",{className:"col-6",children:["Placeholder:",Object(p.jsx)("br",{}),Object(p.jsx)("input",{className:"form-control rounded",type:"text",value:h,onChange:function(e){d(e.currentTarget.value),N("")}})]}),Object(p.jsxs)("p",{className:"col-12",children:["Target: ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{className:"form-control rounded",type:"text",value:b,onChange:function(e){N(e.currentTarget.value)}})]})]})]})})};var g=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(j,{})})};c.a.render(Object(p.jsx)(g,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.47d32f77.chunk.js.map