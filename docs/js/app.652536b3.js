(function(){var e={3429:function(e,n,t){"use strict";var r=t(957),o=t.n(r),i=t(8423),u=t.n(i),a=t(6722),c=t.n(a),l=t(7677),f=t.n(l),d=t(5950),s=t.n(d),p=t(9014),h=t.n(p),m=t(736),b=t.n(m),v=t(7694),g=t.n(v),y=t(8012),w=t.n(y),P=t(8538),k=t.n(P),E=t(8935),O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},j=[],C=t(1001),T={},S=(0,C.Z)(T,O,j,!1,null,null,null),A=S.exports,_=t(2809);E["default"].use(_.Z);const x=new _.Z({mode:"history",scrollBehavior:()=>({y:0}),routes:[{path:"/",alias:"",component:()=>Promise.all([t.e(10),t.e(476)]).then(t.bind(t,3476)),redirect:"/home",children:[{path:"/home",component:()=>Promise.all([t.e(10),t.e(794),t.e(732)]).then(t.bind(t,9732))},{path:"/news",component:()=>Promise.all([t.e(10),t.e(9)]).then(t.bind(t,3009))},{path:"/news/:id",component:()=>Promise.all([t.e(10),t.e(212)]).then(t.bind(t,2212))},{path:"/aboutus",component:()=>Promise.all([t.e(10),t.e(794),t.e(333)]).then(t.bind(t,2333))},{path:"/joinus",component:()=>Promise.all([t.e(10),t.e(794),t.e(830)]).then(t.bind(t,8830))},{path:"/productions/visualRadar",component:()=>Promise.all([t.e(10),t.e(340)]).then(t.bind(t,3340))},{path:"/productions/autoDriving",component:()=>Promise.all([t.e(10),t.e(892)]).then(t.bind(t,2892))},{path:"/coreTechnology",component:()=>Promise.all([t.e(10),t.e(434)]).then(t.bind(t,2434))},{path:"/err",component:()=>Promise.all([t.e(10),t.e(445)]).then(t.bind(t,2445))}]},{path:"*",redirect:"/err"}]});x.beforeEach(((e,n,t)=>{["/home"].includes(e.path)?e.meta.transparentHeader=!0:e.meta.transparentHeader=!1,t()}));var N=x;t(9578);E["default"].config.productionTip=!1,E["default"].use(k()),E["default"].use(w()),E["default"].use(g()),E["default"].use(b()),E["default"].use(h()),E["default"].use(s()),E["default"].use(f()),E["default"].use(c()),E["default"].use(u()),E["default"].use(o()),new E["default"]({router:N,render:e=>e(A)}).$mount("#app")},9578:function(){const e=16;function n(){let n=document.documentElement.clientWidth||document.body.clientWidth;n>1440&&(n=1440);const t=n>=750?1440:750,r=n/t;document.documentElement.style.fontSize=e*Math.min(r,2)+"px"}n(),window.onresize=function(){n()}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(f--,1);var l=o();void 0!==l&&(n=l)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{9:"ae50b5b3",10:"8f146c47",212:"48206915",333:"026b4b3f",340:"da46443d",434:"39343fbe",445:"1bd215c2",476:"e8340114",732:"0dd25744",794:"3f12de26",830:"296977b1",892:"2caaaf5e"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{9:"637e2b5c",212:"f70df18c",333:"51c07512",340:"ca7e46aa",434:"0bad0730",445:"20329224",476:"4ae7fcba",732:"4d00e474",830:"06fbe7c8",892:"03cdb4a8"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="official:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var s=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={9:1,212:1,333:1,340:1,434:1,445:1,476:1,732:1,830:1,892:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],l=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var f=c(t)}for(n&&n(r);l<u.length;l++)i=u[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(f)},r=self["webpackChunkofficial"]=self["webpackChunkofficial"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(3429)}));r=t.O(r)})();