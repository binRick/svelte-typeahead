var app=function(){"use strict";function n(){}function t(n,t){for(const a in t)n[a]=t[a];return n}function a(n){return n()}function s(){return Object.create(null)}function e(n){n.forEach(a)}function o(n){return"function"==typeof n}function p(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}function c(n,a,s,e){return n[1]&&e?t(s.ctx.slice(),n[1](e(a))):s.ctx}function l(n,t,a,s,e,o,p){const l=function(n,t,a,s){if(n[2]&&s){const e=n[2](s(a));if(void 0===t.dirty)return e;if("object"==typeof e){const n=[],a=Math.max(t.dirty.length,e.length);for(let s=0;s<a;s+=1)n[s]=t.dirty[s]|e[s];return n}return t.dirty|e}return t.dirty}(t,s,e,o);if(l){const e=c(t,a,s,p);n.p(e,l)}}function i(n){const t={};for(const a in n)"$"!==a[0]&&(t[a]=n[a]);return t}function u(n,t){const a={};t=new Set(t);for(const s in n)t.has(s)||"$"===s[0]||(a[s]=n[s]);return a}function r(n,t){n.appendChild(t)}function d(n,t,a){n.insertBefore(t,a||null)}function k(n){n.parentNode.removeChild(n)}function f(n,t){for(let a=0;a<n.length;a+=1)n[a]&&n[a].d(t)}function h(n){return document.createElement(n)}function g(n){return document.createTextNode(n)}function m(){return g(" ")}function y(n,t,a,s){return n.addEventListener(t,a,s),()=>n.removeEventListener(t,a,s)}function v(n){return function(t){return t.preventDefault(),n.call(this,t)}}function b(n,t,a){null==a?n.removeAttribute(t):n.getAttribute(t)!==a&&n.setAttribute(t,a)}function $(n,t){const a=Object.getOwnPropertyDescriptors(n.__proto__);for(const s in t)null==t[s]?n.removeAttribute(s):"style"===s?n.style.cssText=t[s]:"__value"===s?n.value=n[s]=t[s]:a[s]&&a[s].set?n[s]=t[s]:b(n,s,t[s])}function x(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}function w(n,t){n.value=null==t?"":t}function T(n,t,a,s){n.style.setProperty(t,a,s?"important":"")}function L(n,t,a){n.classList[a?"add":"remove"](t)}class j{constructor(n=null){this.a=n,this.e=this.n=null}m(n,t,a=null){this.e||(this.e=h(t.nodeName),this.t=t,this.h(n)),this.i(a)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let t=0;t<this.n.length;t+=1)d(this.t,this.n[t],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(k)}}let C;function M(n){C=n}function S(){if(!C)throw new Error("Function called outside component initialization");return C}function _(n){S().$$.after_update.push(n)}function E(){const n=S();return(t,a)=>{const s=n.$$.callbacks[t];if(s){const e=function(n,t){const a=document.createEvent("CustomEvent");return a.initCustomEvent(n,!1,!1,t),a}(t,a);s.slice().forEach((t=>{t.call(n,e)}))}}}function H(n,t){const a=n.$$.callbacks[t.type];a&&a.slice().forEach((n=>n(t)))}const A=[],N=[],D=[],z=[],I=Promise.resolve();let O=!1;function P(){O||(O=!0,I.then(U))}function q(n){D.push(n)}let B=!1;const V=new Set;function U(){if(!B){B=!0;do{for(let n=0;n<A.length;n+=1){const t=A[n];M(t),F(t.$$)}for(M(null),A.length=0;N.length;)N.pop()();for(let n=0;n<D.length;n+=1){const t=D[n];V.has(t)||(V.add(t),t())}D.length=0}while(A.length);for(;z.length;)z.pop()();O=!1,B=!1,V.clear()}}function F(n){if(null!==n.fragment){n.update(),e(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(q)}}const J=new Set;let R;function G(){R={r:0,c:[],p:R}}function W(){R.r||e(R.c),R=R.p}function K(n,t){n&&n.i&&(J.delete(n),n.i(t))}function Q(n,t,a,s){if(n&&n.o){if(J.has(n))return;J.add(n),R.c.push((()=>{J.delete(n),s&&(a&&n.d(1),s())})),n.o(t)}}function X(n,t){const a={},s={},e={$$scope:1};let o=n.length;for(;o--;){const p=n[o],c=t[o];if(c){for(const n in p)n in c||(s[n]=1);for(const n in c)e[n]||(a[n]=c[n],e[n]=1);n[o]=c}else for(const n in p)e[n]=1}for(const n in s)n in a||(a[n]=void 0);return a}function Y(n){n&&n.c()}function Z(n,t,s){const{fragment:p,on_mount:c,on_destroy:l,after_update:i}=n.$$;p&&p.m(t,s),q((()=>{const t=c.map(a).filter(o);l?l.push(...t):e(t),n.$$.on_mount=[]})),i.forEach(q)}function nn(n,t){const a=n.$$;null!==a.fragment&&(e(a.on_destroy),a.fragment&&a.fragment.d(t),a.on_destroy=a.fragment=null,a.ctx=[])}function tn(t,a,o,p,c,l,i=[-1]){const u=C;M(t);const r=a.props||{},d=t.$$={fragment:null,ctx:null,props:l,update:n,not_equal:c,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:i,skip_bound:!1};let f=!1;if(d.ctx=o?o(t,r,((n,a,...s)=>{const e=s.length?s[0]:a;return d.ctx&&c(d.ctx[n],d.ctx[n]=e)&&(!d.skip_bound&&d.bound[n]&&d.bound[n](e),f&&function(n,t){-1===n.$$.dirty[0]&&(A.push(n),P(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}(t,n)),a})):[],d.update(),f=!0,e(d.before_update),d.fragment=!!p&&p(d.ctx),a.target){if(a.hydrate){const n=function(n){return Array.from(n.childNodes)}(a.target);d.fragment&&d.fragment.l(n),n.forEach(k)}else d.fragment&&d.fragment.c();a.intro&&K(t.$$.fragment),Z(t,a.target,a.anchor),U()}M(u)}class an{$destroy(){nn(this,1),this.$destroy=n}$on(n,t){const a=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return a.push(t),()=>{const n=a.indexOf(t);-1!==n&&a.splice(n,1)}}$set(n){var t;this.$$set&&(t=n,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}var sn,en,on=(function(n,t){!function(){var t={};n.exports=t,t.simpleFilter=function(n,a){return a.filter((function(a){return t.test(n,a)}))},t.test=function(n,a){return null!==t.match(n,a)},t.match=function(n,t,a){a=a||{};var s,e=0,o=[],p=t.length,c=0,l=0,i=a.pre||"",u=a.post||"",r=a.caseSensitive&&t||t.toLowerCase();n=a.caseSensitive&&n||n.toLowerCase();for(var d=0;d<p;d++)s=t[d],r[d]===n[e]?(s=i+s+u,e+=1,l+=1+l):l=0,c+=l,o[o.length]=s;return e===n.length?(c=r===n?1/0:c,{rendered:o.join(""),score:c}):null},t.filter=function(n,a,s){return a&&0!==a.length?"string"!=typeof n?a:(s=s||{},a.reduce((function(a,e,o,p){var c=e;s.extract&&(c=s.extract(e));var l=t.match(n,c,s);return null!=l&&(a[a.length]={string:l.rendered,score:l.score,index:o,original:e}),a}),[]).sort((function(n,t){var a=t.score-n.score;return a||n.index-t.index}))):[]}}()}(en={path:sn,exports:{},require:function(n,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&en.path)}},en.exports),en.exports);function pn(a){let s,o,p,c,l,i,u,f,T=[a[6],{type:"search"},{id:a[1]},{name:a[4]}],j={};for(let n=0;n<T.length;n+=1)j=t(j,T[n]);return{c(){s=h("form"),o=h("label"),p=g(a[2]),l=m(),i=h("input"),b(o,"id",c=a[1]+"-label"),b(o,"for",a[1]),b(o,"class","svelte-5m0wg6"),L(o,"hide-label",a[3]),$(i,j),L(i,"svelte-5m0wg6",!0),b(s,"class","svelte-search"),b(s,"role","search"),b(s,"aria-labelledby",a[1])},m(n,t){d(n,s,t),r(s,o),r(o,p),r(s,l),r(s,i),a[17](i),w(i,a[0]),u||(f=[y(i,"input",a[18]),y(i,"input",a[12]),y(i,"change",a[13]),y(i,"focus",a[14]),y(i,"blur",a[15]),y(i,"keydown",a[16]),y(s,"submit",v(a[11]))],u=!0)},p(n,[t]){4&t&&x(p,n[2]),2&t&&c!==(c=n[1]+"-label")&&b(o,"id",c),2&t&&b(o,"for",n[1]),8&t&&L(o,"hide-label",n[3]),$(i,j=X(T,[64&t&&n[6],{type:"search"},2&t&&{id:n[1]},16&t&&{name:n[4]}])),1&t&&w(i,n[0]),L(i,"svelte-5m0wg6",!0),2&t&&b(s,"aria-labelledby",n[1])},i:n,o:n,d(n){n&&k(s),a[17](null),u=!1,e(f)}}}function cn(n,a,s){const e=["id","label","hideLabel","name","value","debounce","debounceValue","clear","focus"];let o=u(a,e),{id:p="search"+Math.random().toString(36)}=a,{label:c="Search"}=a,{hideLabel:l=!1}=a,{name:r="search"}=a,{value:d=""}=a,{debounce:k=!1}=a,{debounceValue:f=250}=a;const h=E();let g,m,y=d,v=!1;return function(n){S().$$.on_mount.push(n)}((()=>(a.autofocus&&window.requestAnimationFrame((()=>{g.focus()})),()=>{void 0!==m&&clearTimeout(m)}))),_((()=>{var n;d.length>0&&d!==y&&(k?(n=()=>h("type"),v||(v=!0,m=setTimeout((()=>{n(),v=!1}),f))):h("type")),0===d.length&&y.length>0&&h("clear"),y=d})),n.$$set=n=>{s(24,a=t(t({},a),i(n))),s(6,o=u(a,e)),"id"in n&&s(1,p=n.id),"label"in n&&s(2,c=n.label),"hideLabel"in n&&s(3,l=n.hideLabel),"name"in n&&s(4,r=n.name),"value"in n&&s(0,d=n.value),"debounce"in n&&s(7,k=n.debounce),"debounceValue"in n&&s(8,f=n.debounceValue)},a=i(a),[d,p,c,l,r,g,o,k,f,function(){s(0,d="")},function(){g.focus()},function(t){H(n,t)},function(t){H(n,t)},function(t){H(n,t)},function(t){H(n,t)},function(t){H(n,t)},function(t){H(n,t)},function(n){N[n?"unshift":"push"]((()=>{g=n,s(5,g)}))},function(){d=this.value,s(0,d)}]}class ln extends an{constructor(n){var t;super(),document.getElementById("svelte-5m0wg6-style")||((t=h("style")).id="svelte-5m0wg6-style",t.textContent=".hide-label.svelte-5m0wg6{position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);white-space:nowrap}",r(document.head,t)),tn(this,n,cn,pn,p,{id:1,label:2,hideLabel:3,name:4,value:0,debounce:7,debounceValue:8,clear:9,focus:10})}get clear(){return this.$$.ctx[9]}get focus(){return this.$$.ctx[10]}}function un(n,t,a){const s=n.slice();return s[33]=t[a],s[35]=a,s}const rn=n=>({result:2&n[0]}),dn=n=>({result:n[33],index:n[35]});function kn(n){let t,a,s,e=n[1],o=[];for(let t=0;t<e.length;t+=1)o[t]=hn(un(n,e,t));const p=n=>Q(o[n],1,1,(()=>{o[n]=null}));return{c(){t=h("ul");for(let n=0;n<o.length;n+=1)o[n].c();b(t,"role","listbox"),b(t,"aria-labelledby",""),b(t,"id",a=n[2]+"-listbox"),b(t,"class","svelte-179woyl"),L(t,"svelte-typeahead-list",!0)},m(n,a){d(n,t,a);for(let n=0;n<o.length;n+=1)o[n].m(t,null);s=!0},p(n,c){if(16582&c[0]){let a;for(e=n[1],a=0;a<e.length;a+=1){const s=un(n,e,a);o[a]?(o[a].p(s,c),K(o[a],1)):(o[a]=hn(s),o[a].c(),K(o[a],1),o[a].m(t,null))}for(G(),a=e.length;a<o.length;a+=1)p(a);W()}(!s||4&c[0]&&a!==(a=n[2]+"-listbox"))&&b(t,"id",a)},i(n){if(!s){for(let n=0;n<e.length;n+=1)K(o[n]);s=!0}},o(n){o=o.filter(Boolean);for(let n=0;n<o.length;n+=1)Q(o[n]);s=!1},d(n){n&&k(t),f(o,n)}}}function fn(n){let t,a,s=n[33].string+"";return{c(){a=g(""),t=new j(a)},m(n,e){t.m(s,n,e),d(n,a,e)},p(n,a){2&a[0]&&s!==(s=n[33].string+"")&&t.p(s)},d(n){n&&k(a),n&&t.d()}}}function hn(n){let t,a,s,e,o,p,i;const u=n[15].default,f=function(n,t,a,s){if(n){const e=c(n,t,a,s);return n[0](e)}}(u,n,n[14],dn),g=f||fn(n);function v(){return n[28](n[35])}return{c(){t=h("li"),g&&g.c(),a=m(),b(t,"role","option"),b(t,"id",s=n[2]+"-result"),b(t,"aria-selected",e=n[6]===n[35]),b(t,"class","svelte-179woyl"),L(t,"selected",n[6]===n[35])},m(n,s){d(n,t,s),g&&g.m(t,null),r(t,a),o=!0,p||(i=y(t,"click",v),p=!0)},p(a,p){n=a,f?f.p&&16386&p[0]&&l(f,u,n,n[14],p,rn,dn):g&&g.p&&2&p[0]&&g.p(n,p),(!o||4&p[0]&&s!==(s=n[2]+"-result"))&&b(t,"id",s),(!o||64&p[0]&&e!==(e=n[6]===n[35]))&&b(t,"aria-selected",e),64&p[0]&&L(t,"selected",n[6]===n[35])},i(n){o||(K(g,n),o=!0)},o(n){Q(g,n),o=!1},d(n){n&&k(t),g&&g.d(n),p=!1,i()}}}function gn(n){let a,s,e,o,p,c,l,i,u;const f=[{label:"Typeahead label"},{placeholder:"Search..."},n[8],{"aria-autocomplete":"list"},{"aria-controls":n[2]+"-listbox"},{"aria-labelledby":n[2]+"-label"},{"aria-activedescendant":""},{id:n[2]}];function g(t){n[18].call(null,t)}let v={};for(let n=0;n<f.length;n+=1)v=t(v,f[n]);void 0!==n[0]&&(v.value=n[0]),s=new ln({props:v}),n[17](s),N.push((()=>function(n,t,a){const s=n.$$.props[t];void 0!==s&&(n.$$.bound[s]=a,a(n.$$.ctx[s]))}(s,"value",g))),s.$on("input",n[19]),s.$on("change",n[20]),s.$on("focus",n[21]),s.$on("focus",n[22]),s.$on("clear",n[23]),s.$on("clear",n[24]),s.$on("blur",n[25]),s.$on("keydown",n[26]),s.$on("keydown",n[27]);let $=!n[5]&&n[1].length>0&&kn(n);return{c(){a=h("div"),Y(s.$$.fragment),o=m(),$&&$.c(),b(a,"role","combobox"),b(a,"aria-haspopup","listbox"),b(a,"aria-owns",p=n[2]+"-listbox"),b(a,"aria-expanded",c=!n[5]&&n[1].length>0),b(a,"id",n[2]),b(a,"class","svelte-179woyl"),L(a,"svelte-typeahead",!0),L(a,"dropdown",n[1].length>0)},m(t,e){d(t,a,e),Z(s,a,null),r(a,o),$&&$.m(a,null),n[29](a),l=!0,i||(u=y(window,"click",n[16]),i=!0)},p(n,t){const o=260&t[0]?X(f,[f[0],f[1],256&t[0]&&(i=n[8],"object"==typeof i&&null!==i?i:{}),f[3],4&t[0]&&{"aria-controls":n[2]+"-listbox"},4&t[0]&&{"aria-labelledby":n[2]+"-label"},f[6],4&t[0]&&{id:n[2]}]):{};var i;!e&&1&t[0]&&(e=!0,o.value=n[0],function(n){z.push(n)}((()=>e=!1))),s.$set(o),!n[5]&&n[1].length>0?$?($.p(n,t),34&t[0]&&K($,1)):($=kn(n),$.c(),K($,1),$.m(a,null)):$&&(G(),Q($,1,1,(()=>{$=null})),W()),(!l||4&t[0]&&p!==(p=n[2]+"-listbox"))&&b(a,"aria-owns",p),(!l||34&t[0]&&c!==(c=!n[5]&&n[1].length>0))&&b(a,"aria-expanded",c),(!l||4&t[0])&&b(a,"id",n[2]),2&t[0]&&L(a,"dropdown",n[1].length>0)},i(n){l||(K(s.$$.fragment,n),K($),l=!0)},o(n){Q(s.$$.fragment,n),Q($),l=!1},d(t){t&&k(a),n[17](null),nn(s),$&&$.d(),n[29](null),i=!1,u()}}}function mn(n,a,s){const e=["id","value","data","extract","autoselect","results","focusAfterSelect"];let o=u(a,e),{$$slots:p={},$$scope:c}=a,{id:l="typeahead-"+Math.random().toString(36)}=a,{value:r=""}=a,{data:d=[]}=a,{extract:k=(n=>n)}=a,{autoselect:f=!0}=a,{results:h=[]}=a,{focusAfterSelect:g=!1}=a;const m=E();let y=null,v=null,b=!1,$=-1,x="";async function w(){s(0,r=k(h[$].original)),m("select",{selectedIndex:$,selected:r}),await(P(),I),g&&v.focus(),s(5,b=!0)}_((()=>{x!==L&&f&&s(6,$=0),x!==L&&s(5,b=0===h.length),x=L}));let T,L;return n.$$set=n=>{a=t(t({},a),i(n)),s(8,o=u(a,e)),"id"in n&&s(2,l=n.id),"value"in n&&s(0,r=n.value),"data"in n&&s(9,d=n.data),"extract"in n&&s(10,k=n.extract),"autoselect"in n&&s(11,f=n.autoselect),"results"in n&&s(1,h=n.results),"focusAfterSelect"in n&&s(12,g=n.focusAfterSelect),"$$scope"in n&&s(14,c=n.$$scope)},n.$$.update=()=>{1024&n.$$.dirty[0]&&s(13,T={pre:"<mark>",post:"</mark>",extract:k}),8705&n.$$.dirty[0]&&s(1,h=on.filter(r,d,T).filter((({score:n})=>n>0))),1026&n.$$.dirty[0]&&(L=h.map((n=>k(n.original))).join(""))},[r,h,l,y,v,b,$,w,o,d,k,f,g,T,c,p,({target:n})=>{!b&&h.length>0&&y&&!y.contains(n)&&s(5,b=!0)},function(n){N[n?"unshift":"push"]((()=>{v=n,s(4,v)}))},function(n){r=n,s(0,r)},function(t){H(n,t)},function(t){H(n,t)},function(t){H(n,t)},()=>{s(5,b=!1)},function(t){H(n,t)},()=>{s(5,b=!1)},function(t){H(n,t)},function(t){H(n,t)},n=>{switch(n.key){case"Enter":w();break;case"ArrowDown":n.preventDefault(),s(6,$+=1),$===h.length&&s(6,$=0);break;case"ArrowUp":n.preventDefault(),s(6,$-=1),$<0&&s(6,$=h.length-1);break;case"Escape":n.preventDefault(),s(0,r=""),v.focus(),s(5,b=!0)}},n=>{s(6,$=n),w()},function(n){N[n?"unshift":"push"]((()=>{y=n,s(3,y)}))}]}class yn extends an{constructor(n){var t;super(),document.getElementById("svelte-179woyl-style")||((t=h("style")).id="svelte-179woyl-style",t.textContent=".svelte-typeahead.svelte-179woyl{position:relative;background-color:#fff}ul.svelte-179woyl{position:absolute;top:100%;left:0;width:100%;padding:0;list-style:none;background-color:inherit;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1)}li.svelte-179woyl{padding:0.25rem 1rem;cursor:pointer}li.svelte-179woyl:not(:last-of-type){border-bottom:1px solid #e0e0e0}li.svelte-179woyl:hover{background-color:#e5e5e5}.selected.svelte-179woyl{background-color:#e5e5e5}.selected.svelte-179woyl:hover{background-color:#cacaca}.svelte-search label{margin-bottom:0.25rem;display:inline-flex;font-size:0.875rem}.svelte-search input{border:0;background:none;width:100%;font-size:1rem;padding:0.25rem 1rem;border-radius:0;border:1px solid #e5e5e5}.svelte-search input:focus{outline-color:#0f62fe;outline-offset:2px;outline-width:1px}",r(document.head,t)),tn(this,n,mn,gn,p,{id:2,value:0,data:9,extract:10,autoselect:11,results:1,focusAfterSelect:12},[-1,-1])}}function vn(n,t,a){const s=n.slice();return s[6]=t[a],s}function bn(n){let t,a,s,e,o,p=n[9].string+"",c=n[10]+"";return{c(){t=h("div"),s=m(),e=g(c),o=m(),a=new j(s),T(t,"color","red"),T(t,"font-weight","bold")},m(n,c){d(n,t,c),a.m(p,t),r(t,s),r(t,e),d(n,o,c)},p(n,t){512&t&&p!==(p=n[9].string+"")&&a.p(p),1024&t&&c!==(c=n[10]+"")&&x(e,c)},d(n){n&&k(t),n&&k(o)}}}function $n(n){let t,a,s=n[6]+"";return{c(){t=h("li"),a=g(s)},m(n,s){d(n,t,s),r(t,a)},p(n,t){1&t&&s!==(s=n[6]+"")&&x(a,s)},d(n){n&&k(t)}}}function xn(n){let t,a,s,e,o,p,c,l,i,u,g,y,v,$,x,w,T,L,j,C,M,S,_,E,H,A,N,D,z,I,O,P,q,B,V,U,F,J,R,G,W,X,tn,an,sn,en,on,pn,cn,ln,un,rn,dn,kn,fn,hn,gn,mn,xn,wn,Tn,Ln,jn,Cn,Mn,Sn;M=new yn({props:{data:n[1],extract:n[2]}}),O=new yn({props:{data:n[1],extract:n[2],$$slots:{default:[bn,({result:n,index:t})=>({9:n,10:t}),({result:n,index:t})=>(n?512:0)|(t?1024:0)]},$$scope:{ctx:n}}}),W=new yn({props:{data:n[1],extract:n[2]}}),W.$on("select",n[4]),W.$on("clear",n[5]);let _n=n[0],En=[];for(let t=0;t<_n.length;t+=1)En[t]=$n(vn(n,_n,t));return{c(){t=h("main"),a=h("h1"),a.textContent="svelte-typeahead",s=m(),e=h("p"),e.innerHTML='<a href="https://npmjs.com/package/svelte-typeahead"><img src="https://img.shields.io/npm/v/svelte-typeahead.svg?color=%23ff3e00&amp;style=for-the-badge" alt="NPM"/></a> \n<a href="https://travis-ci.com/metonym/svelte-typeahead"><img src="https://img.shields.io/travis/com/metonym/svelte-typeahead?style=for-the-badge" alt="Build"/></a>',o=m(),p=h("blockquote"),p.innerHTML="<p>Accessible, fuzzy search typeahead component.</p>",c=m(),l=h("p"),l.innerHTML='This component uses the lightweight <a href="https://github.com/mattyork/fuzzy">fuzzy</a> library for typeahead and follows <a href="https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html">WAI-ARIA guidelines</a>.',i=m(),u=h("p"),u.innerHTML='Try it in the <a href="https://svelte.dev/repl/a1b828d80de24f7e995b2365782c8d04?version=3.24.1">Svelte REPL</a>.',g=m(),y=h("h2"),y.textContent="Install",v=m(),$=h("pre"),x=m(),w=h("h2"),w.textContent="Usage",T=m(),L=h("p"),L.innerHTML="Pass an array of objects to the <code>data</code> prop. Use the <code>extractor</code> to specify the key value to search on.",j=m(),C=h("div"),Y(M.$$.fragment),S=h("pre"),_=m(),E=h("h3"),E.textContent="Custom results",H=m(),A=h("p"),A.innerHTML="By default, this component uses the <code>fuzzy</code> library to highlight matching characters with the <code>mark</code> element.",N=m(),D=h("p"),D.textContent="Use a slot to render custom results.",z=m(),I=h("div"),Y(O.$$.fragment),P=h("pre"),q=m(),B=h("h2"),B.textContent="API",V=m(),U=h("table"),U.innerHTML='<thead><tr><th style="text-align:left">Prop name</th> \n<th style="text-align:left">Value</th></tr></thead> \n<tbody><tr><td style="text-align:left">value</td> \n<td style="text-align:left"><code>string</code> (default: <code>&quot;&quot;</code>)</td></tr> \n<tr><td style="text-align:left">data</td> \n<td style="text-align:left"><code>T[]</code> (default: <code>[]</code>)</td></tr> \n<tr><td style="text-align:left">extract</td> \n<td style="text-align:left"><code>(T) =&gt; T</code></td></tr> \n<tr><td style="text-align:left">autoselect</td> \n<td style="text-align:left"><code>boolean</code> (default: <code>true</code>)</td></tr> \n<tr><td style="text-align:left"><code>...$$restProps</code></td> \n<td style="text-align:left">(forwarded to <code>Search</code> component)</td></tr></tbody>',F=m(),J=h("h2"),J.textContent="Dispatched events",R=m(),G=h("div"),Y(W.$$.fragment),X=m(),tn=h("ul");for(let n=0;n<En.length;n+=1)En[n].c();an=m(),sn=h("pre"),en=m(),on=h("h2"),on.textContent="Forwarded events",pn=m(),cn=h("ul"),cn.innerHTML="<li>on:input</li> \n<li>on:change</li> \n<li>on:focus</li> \n<li>on:clear</li> \n<li>on:blur</li> \n<li>on:keydown</li>",ln=m(),un=h("h2"),un.innerHTML="Usage with <code>svite</code>",rn=m(),dn=h("p"),dn.innerHTML='To use the component with <a href="https://github.com/dominikg/svite">svite</a>, add the following to <code>vite.config.js</code>:',kn=m(),fn=h("pre"),hn=m(),gn=h("h2"),gn.textContent="TypeScript support",mn=m(),xn=h("p"),xn.textContent="Svelte version 3.30 or greater is required if using TypeScript.",wn=m(),Tn=h("h2"),Tn.innerHTML='<a href="https://github.com/metonym/svelte-typeahead/tree/master/CHANGELOG.md">Changelog</a>',Ln=m(),jn=h("h2"),jn.textContent="License",Cn=m(),Mn=h("p"),Mn.innerHTML='<a href="https://github.com/metonym/svelte-typeahead/tree/master/LICENSE">MIT</a>',b($,"class","language-bash"),b(C,"class","code-fence"),b(S,"class","language-svelte"),b(S,"data-svelte",""),b(I,"class","code-fence"),b(P,"class","language-svelte"),b(P,"data-svelte",""),b(G,"class","code-fence"),b(sn,"class","language-svelte"),b(sn,"data-svelte",""),b(fn,"class","language-js"),b(t,"class","markdown-body")},m(n,k){d(n,t,k),r(t,a),r(t,s),r(t,e),r(t,o),r(t,p),r(t,c),r(t,l),r(t,i),r(t,u),r(t,g),r(t,y),r(t,v),r(t,$),$.innerHTML='<span class="token function">yarn</span> <span class="token function">add</span> -D svelte-typeahead\n<span class="token comment"># OR</span>\n<span class="token function">npm</span> i -D svelte-typeahead\n',r(t,x),r(t,w),r(t,T),r(t,L),r(t,j),r(t,C),Z(M,C,null),r(t,S),S.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Typeahead <span class="token keyword">from</span> <span class="token string">"svelte-typeahead"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> state<span class="token operator">:</span> <span class="token string">"California"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> state<span class="token operator">:</span> <span class="token string">"North Carolina"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> state<span class="token operator">:</span> <span class="token string">"North Dakota"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> state<span class="token operator">:</span> <span class="token string">"South Carolina"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> state<span class="token operator">:</span> <span class="token string">"South Dakota"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> state<span class="token operator">:</span> <span class="token string">"Michigan"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> state<span class="token operator">:</span> <span class="token string">"Tennessee"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> state<span class="token operator">:</span> <span class="token string">"Nevada"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> state<span class="token operator">:</span> <span class="token string">"New Hampshire"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span> state<span class="token operator">:</span> <span class="token string">"New Jersey"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">extract</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Typeahead</span> <span class="token language-javascript"><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span> <span class="token language-javascript"><span class="token punctuation">{</span>extract<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n',r(t,_),r(t,E),r(t,H),r(t,A),r(t,N),r(t,D),r(t,z),r(t,I),Z(O,I,null),r(t,P),P.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Typeahead</span> <span class="token language-javascript"><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span> <span class="token language-javascript"><span class="token punctuation">{</span>extract<span class="token punctuation">}</span></span> <span class="token attr-name"><span class="token namespace">let:</span>result</span> <span class="token attr-name"><span class="token namespace">let:</span>index</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>color: red; font-weight: bold;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token language-javascript"><span class="token punctuation">{</span>@html result<span class="token punctuation">.</span>string<span class="token punctuation">}</span></span>\n    <span class="token language-javascript"><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Typeahead</span><span class="token punctuation">></span></span>\n',r(t,q),r(t,B),r(t,V),r(t,U),r(t,F),r(t,J),r(t,R),r(t,G),Z(W,G,null),r(G,X),r(G,tn);for(let n=0;n<En.length;n+=1)En[n].m(tn,null);r(tn,an),r(t,sn),sn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">let</span> events <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> detail</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    events <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>events<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> event<span class="token punctuation">,</span> detail <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Typeahead</span>\n  <span class="token language-javascript"><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>\n  <span class="token language-javascript"><span class="token punctuation">{</span>extract<span class="token punctuation">}</span></span>\n  <span class="token attr-name"><span class="token namespace">on:</span>select=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">update</span><span class="token punctuation">(</span><span class="token string">\'select\'</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name"><span class="token namespace">on:</span>clear=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">update</span><span class="token punctuation">(</span><span class="token string">\'clear\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n  <span class="token each"><span class="token punctuation">{</span><span class="token keyword">#each</span> <span class="token language-javascript">events </span><span class="token keyword">as</span> <span class="token language-javascript">event<span class="token punctuation">}</span></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">{</span>event<span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token each"><span class="token punctuation">{</span><span class="token keyword">/each</span><span class="token punctuation">}</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n',r(t,en),r(t,on),r(t,pn),r(t,cn),r(t,ln),r(t,un),r(t,rn),r(t,dn),r(t,kn),r(t,fn),fn.innerHTML='<span class="token comment">// vite.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  optimizeDeps<span class="token operator">:</span> <span class="token punctuation">{</span>\n    include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"fuzzy"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n',r(t,hn),r(t,gn),r(t,mn),r(t,xn),r(t,wn),r(t,Tn),r(t,Ln),r(t,jn),r(t,Cn),r(t,Mn),Sn=!0},p(n,[t]){const a={};if(3584&t&&(a.$$scope={dirty:t,ctx:n}),O.$set(a),1&t){let a;for(_n=n[0],a=0;a<_n.length;a+=1){const s=vn(n,_n,a);En[a]?En[a].p(s,t):(En[a]=$n(s),En[a].c(),En[a].m(tn,an))}for(;a<En.length;a+=1)En[a].d(1);En.length=_n.length}},i(n){Sn||(K(M.$$.fragment,n),K(O.$$.fragment,n),K(W.$$.fragment,n),Sn=!0)},o(n){Q(M.$$.fragment,n),Q(O.$$.fragment,n),Q(W.$$.fragment,n),Sn=!1},d(n){n&&k(t),nn(M),nn(O),nn(W),f(En,n)}}}function wn(n,t,a){let s=[];function e(n,t){a(0,s=[...s,JSON.stringify({event:n,detail:t},null,2)])}return[s,[{id:0,state:"California"},{id:1,state:"North Carolina"},{id:2,state:"North Dakota"},{id:3,state:"South Carolina"},{id:4,state:"South Dakota"},{id:5,state:"Michigan"},{id:6,state:"Tennessee"},{id:7,state:"Nevada"},{id:8,state:"New Hampshire"},{id:9,state:"New Jersey"}],n=>n.state,e,n=>{e("select",n.detail)},()=>{e("clear")}]}return new class extends an{constructor(n){super(),tn(this,n,wn,xn,p,{})}}({target:document.body})}();
