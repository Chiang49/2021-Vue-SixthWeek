(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],s=0,d=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-06ed50ac":"ecc6e97a","chunk-2d21e30b":"b9eb8110","chunk-61721ddc":"f7067eaf","chunk-f2096f36":"90109681"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-61721ddc":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-06ed50ac":"31d6cfe0","chunk-2d21e30b":"31d6cfe0","chunk-61721ddc":"f19e59d0","chunk-f2096f36":"31d6cfe0"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===c))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],s=l.getAttribute("data-href");if(s===r||s===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=n("bc3a"),c=n.n(a),o=n("2106"),u=n.n(o),i=n("7bb1"),l=n("3aa8"),s=n("cbdf"),d=n("9457");n("7b17"),n("f9e3");function f(e,t){var n=Object(r["w"])("router-view");return Object(r["r"])(),Object(r["d"])(n)}const b={};b.render=f;var p=b,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),v={class:"container"},m={class:"navbar navbar-expand-lg navbar-light bg-light mb-5"},O={class:"container-fluid"},g=Object(r["f"])("h1",null,[Object(r["f"])("a",{class:"navbar-brand",href:"#"},"Navbar")],-1),j=Object(r["f"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["f"])("span",{class:"navbar-toggler-icon"})],-1),y={class:"collapse navbar-collapse",id:"navbarNav"},k={class:"navbar-nav"},w={class:"nav-item"},_=Object(r["e"])("首頁"),E={class:"nav-item"},P=Object(r["e"])("產品"),T={class:"nav-item"},x=Object(r["e"])("購物車");function N(e,t){var n=Object(r["w"])("router-link"),a=Object(r["w"])("router-view");return Object(r["r"])(),Object(r["d"])(r["a"],null,[Object(r["f"])("div",v,[Object(r["f"])("nav",m,[Object(r["f"])("div",O,[g,j,Object(r["f"])("div",y,[Object(r["f"])("ul",k,[Object(r["f"])("li",w,[Object(r["f"])(n,{class:"nav-link active","aria-current":"page",to:"/"},{default:Object(r["F"])((function(){return[_]})),_:1})]),Object(r["f"])("li",E,[Object(r["f"])(n,{class:"nav-link",to:"/products"},{default:Object(r["F"])((function(){return[P]})),_:1})]),Object(r["f"])("li",T,[Object(r["f"])(n,{class:"nav-link",to:"/cart"},{default:Object(r["F"])((function(){return[x]})),_:1})])])])])])]),Object(r["f"])(a)],64)}const S={};S.render=N;var C=S,A=[{path:"/",name:"Home",component:C,children:[{path:"",component:function(){return n.e("chunk-2d21e30b").then(n.bind(null,"d504"))}},{path:"/products",name:"商品列表",component:function(){return n.e("chunk-61721ddc").then(n.bind(null,"e6dc"))}},{path:"/product/:id",name:"單一商品",component:function(){return n.e("chunk-f2096f36").then(n.bind(null,"146f"))}},{path:"/cart",name:"購物車",component:function(){return n.e("chunk-06ed50ac").then(n.bind(null,"b789"))}}]}],F=Object(h["a"])({history:Object(h["b"])(),routes:A}),M=F;Object(i["e"])("required",l["c"]),Object(i["e"])("email",l["a"]),Object(i["e"])("min",l["b"]),Object(i["d"])({generateMessage:Object(s["a"])({zh_TW:d}),validateOnInput:!0}),Object(s["b"])("zh_TW");var L=Object(r["c"])(p);L.use(M),L.use(u.a,c.a),L.component("Form",i["c"]),L.component("Field",i["b"]),L.component("ErrorMessage",i["a"]),L.mount("#app")}});
//# sourceMappingURL=app.9341a656.js.map