import{c as Ft,g as Yt}from"./_commonjsHelpers.Cpj98o6Y.js";let vt=0;window.addEventListener("scroll",()=>{let t=document.documentElement.scrollTop||document.body.scrollTop,e=t-vt;vt=t,e<0?document.getElementById("header-nav").classList.remove("header-nav-hidden"):document.getElementById("header-nav").classList.add("header-nav-hidden")});const Ot=()=>{const t=JSON.parse(window.localStorage.getItem("theme")??'"auto"');let e;t==="auto"?e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e=t,e==="dark"?(document.documentElement.setAttribute("data-theme","dark"),document.documentElement.style.colorScheme="dark"):(document.documentElement.removeAttribute("data-theme"),document.documentElement.style.colorScheme="light")};Ot();document.addEventListener("astro:after-swap",Ot);/*! lozad.js - v1.16.0 - 2020-09-06
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */const Wt=typeof document<"u"&&document.documentMode,Xt={rootMargin:"0px",threshold:0,load(t){if(t.nodeName.toLowerCase()==="picture"){let n=t.querySelector("img"),o=!1;n===null&&(n=document.createElement("img"),o=!0),Wt&&t.getAttribute("data-iesrc")&&(n.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(n.alt=t.getAttribute("data-alt")),o&&t.append(n)}if(t.nodeName.toLowerCase()==="video"&&!t.getAttribute("data-src")&&t.children){const n=t.children;let o;for(let r=0;r<=n.length-1;r++)o=n[r].getAttribute("data-src"),o&&(n[r].src=o);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));let e=",";if(t.getAttribute("data-background-delimiter")&&(e=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage=`url('${t.getAttribute("data-background-image").split(e).join("'),url('")}')`;else if(t.getAttribute("data-background-image-set")){const n=t.getAttribute("data-background-image-set").split(e);let o=n[0].substr(0,n[0].indexOf(" "))||n[0];o=o.indexOf("url(")===-1?`url(${o})`:o,n.length===1?t.style.backgroundImage=o:t.setAttribute("style",(t.getAttribute("style")||"")+`background-image: ${o}; background-image: -webkit-image-set(${n}); background-image: image-set(${n})`)}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded(){}};function ut(t){t.setAttribute("data-loaded",!0)}function Bt(t){t.getAttribute("data-placeholder-background")&&(t.style.background=t.getAttribute("data-placeholder-background"))}const lt=t=>t.getAttribute("data-loaded")==="true",Ut=(t,e)=>(n,o)=>{n.forEach(r=>{(r.intersectionRatio>0||r.isIntersecting)&&(o.unobserve(r.target),lt(r.target)||(t(r.target),ut(r.target),e(r.target)))})},yt=(t,e=document)=>t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t);function Vt(t=".lozad",e={}){const{root:n,rootMargin:o,threshold:r,load:i,loaded:u}=Object.assign({},Xt,e);let l;typeof window<"u"&&window.IntersectionObserver&&(l=new IntersectionObserver(Ut(i,u),{root:n,rootMargin:o,threshold:r}));const h=yt(t,n);for(let a=0;a<h.length;a++)Bt(h[a]);return{observe(){const a=yt(t,n);for(let d=0;d<a.length;d++)if(!lt(a[d])){if(l){l.observe(a[d]);continue}i(a[d]),ut(a[d]),u(a[d])}},triggerLoad(a){lt(a)||(i(a),ut(a),u(a))},observer:l}}const Mt=()=>{Vt(".lazyload",{loaded:e=>{e.classList.add("lazyloaded")}}).observe()};Mt();document.addEventListener("astro:after-swap",Mt);var jt={exports:{}};(function(t,e){(function(n,o){t.exports=o()})(Ft,function(){return function(n){function o(i){if(r[i])return r[i].exports;var u=r[i]={exports:{},id:i,loaded:!1};return n[i].call(u.exports,u,u.exports,o),u.loaded=!0,u.exports}var r={};return o.m=n,o.c=r,o.p="dist/",o(0)}([function(n,o,r){function i(p){return p&&p.__esModule?p:{default:p}}var u=Object.assign||function(p){for(var x=1;x<arguments.length;x++){var I=arguments[x];for(var z in I)Object.prototype.hasOwnProperty.call(I,z)&&(p[z]=I[z])}return p},l=r(1),h=(i(l),r(6)),a=i(h),d=r(7),s=i(d),b=r(8),m=i(b),g=r(9),E=i(g),A=r(10),B=i(A),G=r(11),J=i(G),Q=r(14),U=i(Q),O=[],V=!1,w={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},D=function(){var p=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(p&&(V=!0),V)return O=(0,J.default)(O,w),(0,B.default)(O,w.once),O},q=function(){O=(0,U.default)(),D()},f=function(){O.forEach(function(p,x){p.node.removeAttribute("data-aos"),p.node.removeAttribute("data-aos-easing"),p.node.removeAttribute("data-aos-duration"),p.node.removeAttribute("data-aos-delay")})},c=function(p){return p===!0||p==="mobile"&&E.default.mobile()||p==="phone"&&E.default.phone()||p==="tablet"&&E.default.tablet()||typeof p=="function"&&p()===!0},v=function(p){w=u(w,p),O=(0,U.default)();var x=document.all&&!window.atob;return c(w.disable)||x?f():(w.disableMutationObserver||m.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),w.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",w.easing),document.querySelector("body").setAttribute("data-aos-duration",w.duration),document.querySelector("body").setAttribute("data-aos-delay",w.delay),w.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?D(!0):w.startEvent==="load"?window.addEventListener(w.startEvent,function(){D(!0)}):document.addEventListener(w.startEvent,function(){D(!0)}),window.addEventListener("resize",(0,s.default)(D,w.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(D,w.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,B.default)(O,w.once)},w.throttleDelay)),w.disableMutationObserver||m.default.ready("[data-aos]",q),O)};n.exports={init:v,refresh:D,refreshHard:q}},function(n,o){},,,,,function(n,o){(function(r){function i(c,v,p){function x(y){var L=j,F=R;return j=R=void 0,$=y,S=c.apply(F,L)}function I(y){return $=y,T=setTimeout(W,v),C?x(y):S}function z(y){var L=y-M,F=y-$,gt=v-L;return H?q(gt,_-F):gt}function Y(y){var L=y-M,F=y-$;return M===void 0||L>=v||L<0||H&&F>=_}function W(){var y=f();return Y(y)?nt(y):void(T=setTimeout(W,z(y)))}function nt(y){return T=void 0,k&&j?x(y):(j=R=void 0,S)}function st(){T!==void 0&&clearTimeout(T),$=0,j=M=R=T=void 0}function Z(){return T===void 0?S:nt(f())}function N(){var y=f(),L=Y(y);if(j=arguments,R=this,M=y,L){if(T===void 0)return I(M);if(H)return T=setTimeout(W,v),x(M)}return T===void 0&&(T=setTimeout(W,v)),S}var j,R,_,S,T,M,$=0,C=!1,H=!1,k=!0;if(typeof c!="function")throw new TypeError(b);return v=d(v)||0,l(p)&&(C=!!p.leading,H="maxWait"in p,_=H?D(d(p.maxWait)||0,v):_,k="trailing"in p?!!p.trailing:k),N.cancel=st,N.flush=Z,N}function u(c,v,p){var x=!0,I=!0;if(typeof c!="function")throw new TypeError(b);return l(p)&&(x="leading"in p?!!p.leading:x,I="trailing"in p?!!p.trailing:I),i(c,v,{leading:x,maxWait:v,trailing:I})}function l(c){var v=typeof c>"u"?"undefined":s(c);return!!c&&(v=="object"||v=="function")}function h(c){return!!c&&(typeof c>"u"?"undefined":s(c))=="object"}function a(c){return(typeof c>"u"?"undefined":s(c))=="symbol"||h(c)&&w.call(c)==g}function d(c){if(typeof c=="number")return c;if(a(c))return m;if(l(c)){var v=typeof c.valueOf=="function"?c.valueOf():c;c=l(v)?v+"":v}if(typeof c!="string")return c===0?c:+c;c=c.replace(E,"");var p=B.test(c);return p||G.test(c)?J(c.slice(2),p?2:8):A.test(c)?m:+c}var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},b="Expected a function",m=NaN,g="[object Symbol]",E=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,G=/^0o[0-7]+$/i,J=parseInt,Q=(typeof r>"u"?"undefined":s(r))=="object"&&r&&r.Object===Object&&r,U=(typeof self>"u"?"undefined":s(self))=="object"&&self&&self.Object===Object&&self,O=Q||U||Function("return this")(),V=Object.prototype,w=V.toString,D=Math.max,q=Math.min,f=function(){return O.Date.now()};n.exports=u}).call(o,function(){return this}())},function(n,o){(function(r){function i(f,c,v){function p(k){var y=N,L=j;return N=j=void 0,M=k,_=f.apply(L,y)}function x(k){return M=k,S=setTimeout(Y,c),$?p(k):_}function I(k){var y=k-T,L=k-M,F=c-y;return C?D(F,R-L):F}function z(k){var y=k-T,L=k-M;return T===void 0||y>=c||y<0||C&&L>=R}function Y(){var k=q();return z(k)?W(k):void(S=setTimeout(Y,I(k)))}function W(k){return S=void 0,H&&N?p(k):(N=j=void 0,_)}function nt(){S!==void 0&&clearTimeout(S),M=0,N=T=j=S=void 0}function st(){return S===void 0?_:W(q())}function Z(){var k=q(),y=z(k);if(N=arguments,j=this,T=k,y){if(S===void 0)return x(T);if(C)return S=setTimeout(Y,c),p(T)}return S===void 0&&(S=setTimeout(Y,c)),_}var N,j,R,_,S,T,M=0,$=!1,C=!1,H=!0;if(typeof f!="function")throw new TypeError(s);return c=a(c)||0,u(v)&&($=!!v.leading,C="maxWait"in v,R=C?w(a(v.maxWait)||0,c):R,H="trailing"in v?!!v.trailing:H),Z.cancel=nt,Z.flush=st,Z}function u(f){var c=typeof f>"u"?"undefined":d(f);return!!f&&(c=="object"||c=="function")}function l(f){return!!f&&(typeof f>"u"?"undefined":d(f))=="object"}function h(f){return(typeof f>"u"?"undefined":d(f))=="symbol"||l(f)&&V.call(f)==m}function a(f){if(typeof f=="number")return f;if(h(f))return b;if(u(f)){var c=typeof f.valueOf=="function"?f.valueOf():f;f=u(c)?c+"":c}if(typeof f!="string")return f===0?f:+f;f=f.replace(g,"");var v=A.test(f);return v||B.test(f)?G(f.slice(2),v?2:8):E.test(f)?b:+f}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},s="Expected a function",b=NaN,m="[object Symbol]",g=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,A=/^0b[01]+$/i,B=/^0o[0-7]+$/i,G=parseInt,J=(typeof r>"u"?"undefined":d(r))=="object"&&r&&r.Object===Object&&r,Q=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,U=J||Q||Function("return this")(),O=Object.prototype,V=O.toString,w=Math.max,D=Math.min,q=function(){return U.Date.now()};n.exports=i}).call(o,function(){return this}())},function(n,o){function r(d){var s=void 0,b=void 0;for(s=0;s<d.length;s+=1)if(b=d[s],b.dataset&&b.dataset.aos||b.children&&r(b.children))return!0;return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function u(){return!!i()}function l(d,s){var b=window.document,m=i(),g=new m(h);a=s,g.observe(b.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function h(d){d&&d.forEach(function(s){var b=Array.prototype.slice.call(s.addedNodes),m=Array.prototype.slice.call(s.removedNodes),g=b.concat(m);if(r(g))return a()})}Object.defineProperty(o,"__esModule",{value:!0});var a=function(){};o.default={isSupported:u,ready:l}},function(n,o){function r(b,m){if(!(b instanceof m))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(o,"__esModule",{value:!0});var u=function(){function b(m,g){for(var E=0;E<g.length;E++){var A=g[E];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(m,A.key,A)}}return function(m,g,E){return g&&b(m.prototype,g),E&&b(m,E),m}}(),l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,h=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,d=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function b(){r(this,b)}return u(b,[{key:"phone",value:function(){var m=i();return!(!l.test(m)&&!h.test(m.substr(0,4)))}},{key:"mobile",value:function(){var m=i();return!(!a.test(m)&&!d.test(m.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),b}();o.default=new s},function(n,o){Object.defineProperty(o,"__esModule",{value:!0});var r=function(u,l,h){var a=u.node.getAttribute("data-aos-once");l>u.position?u.node.classList.add("aos-animate"):typeof a<"u"&&(a==="false"||!h&&a!=="true")&&u.node.classList.remove("aos-animate")},i=function(u,l){var h=window.pageYOffset,a=window.innerHeight;u.forEach(function(d,s){r(d,a+h,l)})};o.default=i},function(n,o,r){function i(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(o,"__esModule",{value:!0});var u=r(12),l=i(u),h=function(a,d){return a.forEach(function(s,b){s.node.classList.add("aos-init"),s.position=(0,l.default)(s.node,d.offset)}),a};o.default=h},function(n,o,r){function i(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(o,"__esModule",{value:!0});var u=r(13),l=i(u),h=function(a,d){var s=0,b=0,m=window.innerHeight,g={offset:a.getAttribute("data-aos-offset"),anchor:a.getAttribute("data-aos-anchor"),anchorPlacement:a.getAttribute("data-aos-anchor-placement")};switch(g.offset&&!isNaN(g.offset)&&(b=parseInt(g.offset)),g.anchor&&document.querySelectorAll(g.anchor)&&(a=document.querySelectorAll(g.anchor)[0]),s=(0,l.default)(a).top,g.anchorPlacement){case"top-bottom":break;case"center-bottom":s+=a.offsetHeight/2;break;case"bottom-bottom":s+=a.offsetHeight;break;case"top-center":s+=m/2;break;case"bottom-center":s+=m/2+a.offsetHeight;break;case"center-center":s+=m/2+a.offsetHeight/2;break;case"top-top":s+=m;break;case"bottom-top":s+=a.offsetHeight+m;break;case"center-top":s+=a.offsetHeight/2+m}return g.anchorPlacement||g.offset||isNaN(d)||(b=d),s+b};o.default=h},function(n,o){Object.defineProperty(o,"__esModule",{value:!0});var r=function(i){for(var u=0,l=0;i&&!isNaN(i.offsetLeft)&&!isNaN(i.offsetTop);)u+=i.offsetLeft-(i.tagName!="BODY"?i.scrollLeft:0),l+=i.offsetTop-(i.tagName!="BODY"?i.scrollTop:0),i=i.offsetParent;return{top:l,left:u}};o.default=r},function(n,o){Object.defineProperty(o,"__esModule",{value:!0});var r=function(i){return i=i||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(i,function(u){return{node:u}})};o.default=r}])})})(jt);var Kt=jt.exports;const Gt=Yt(Kt),Pt=()=>{Gt.init({duration:1e3,easing:"ease",once:!0,offset:50})};Pt();document.addEventListener("astro:after-swap",Pt);const K="data-astro-transition-persist";function Jt(t){for(const e of document.scripts)for(const n of t.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!e.src&&e.textContent===n.textContent||e.src&&e.type===n.type&&e.src===n.src)){n.dataset.astroExec="";break}}function Qt(t){const e=document.documentElement,n=[...e.attributes].filter(({name:o})=>(e.removeAttribute(o),o.startsWith("data-astro-")));[...t.documentElement.attributes,...n].forEach(({name:o,value:r})=>e.setAttribute(o,r))}function Zt(t){for(const e of Array.from(document.head.children)){const n=ne(e,t);n?n.remove():e.remove()}document.head.append(...t.head.children)}function te(t,e){e.replaceWith(t);for(const n of e.querySelectorAll(`[${K}]`)){const o=n.getAttribute(K),r=t.querySelector(`[${K}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&oe(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const ee=()=>{const t=document.activeElement;if(t?.closest(`[${K}]`)){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){const e=t.selectionStart,n=t.selectionEnd;return()=>ct({activeElement:t,start:e,end:n})}return()=>ct({activeElement:t})}else return()=>ct({activeElement:null})},ct=({activeElement:t,start:e,end:n})=>{t&&(t.focus(),(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(typeof e=="number"&&(t.selectionStart=e),typeof n=="number"&&(t.selectionEnd=n)))},ne=(t,e)=>{const n=t.getAttribute(K),o=n&&e.head.querySelector(`[${K}="${n}"]`);if(o)return o;if(t.matches("link[rel=stylesheet]")){const r=t.getAttribute("href");return e.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},oe=t=>{const e=t.dataset.astroTransitionPersistProps;return e==null||e==="false"},re=t=>{Jt(t),Qt(t),Zt(t);const e=ee();te(t.body,document.body),e()},ie="astro:before-preparation",ae="astro:after-preparation",se="astro:before-swap",ce="astro:after-swap",ue=t=>document.dispatchEvent(new Event(t));class Dt extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(e,n,o,r,i,u,l,h,a,d){super(e,n),this.from=o,this.to=r,this.direction=i,this.navigationType=u,this.sourceElement=l,this.info=h,this.newDocument=a,this.signal=d,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class le extends Dt{formData;loader;constructor(e,n,o,r,i,u,l,h,a,d){super(ie,{cancelable:!0},e,n,o,r,i,u,l,h),this.formData=a,this.loader=d.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class de extends Dt{direction;viewTransition;swap;constructor(e,n){super(se,void 0,e.from,e.to,e.direction,e.navigationType,e.sourceElement,e.info,e.newDocument,e.signal),this.direction=e.direction,this.viewTransition=n,this.swap=()=>re(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function fe(t,e,n,o,r,i,u,l,h){const a=new le(t,e,n,o,r,i,window.document,u,l,h);return document.dispatchEvent(a)&&(await a.loader(),a.defaultPrevented||(ue(ae),a.navigationType!=="traverse"&&mt({scrollX,scrollY}))),a}function me(t,e){const n=new de(t,e);return document.dispatchEvent(n),n.swap(),n}const pe=history.pushState.bind(history),ot=history.replaceState.bind(history),mt=t=>{history.state&&(history.scrollRestoration="manual",ot({...history.state,...t},""))},pt=!!document.startViewTransition,bt=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),It=(t,e)=>t.pathname===e.pathname&&t.search===e.search;let P,X,it;const Nt=t=>document.dispatchEvent(new Event(t)),Rt=()=>Nt("astro:page-load"),be=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.className="astro-route-announcer",document.body.append(t),setTimeout(()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;t.textContent=e},60)},wt="data-astro-transition-persist",kt="data-astro-transition",dt="data-astro-transition-fallback";let At,tt=0;history.state?(tt=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):bt()&&(ot({index:tt,scrollX,scrollY},""),history.scrollRestoration="manual");async function he(t,e){try{const n=await fetch(t,e),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function _t(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function ge(){let t=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const n=e.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=e.innerHTML;for(const r of e.attributes){if(r.name==="src"){const i=new Promise(u=>{o.onload=o.onerror=u});t=t.then(()=>i)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",e.replaceWith(o)}return t}const Ht=(t,e,n,o,r)=>{const i=It(e,t),u=document.title;document.title=o;let l=!1;if(t.href!==location.href&&!r)if(n.history==="replace"){const h=history.state;ot({...n.state,index:h.index,scrollX:h.scrollX,scrollY:h.scrollY},"",t.href)}else pe({...n.state,index:++tt,scrollX:0,scrollY:0},"",t.href);if(document.title=u,it=t,i||(scrollTo({left:0,top:0,behavior:"instant"}),l=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(t.hash){history.scrollRestoration="auto";const h=history.state;location.href=t.href,history.state||(ot(h,""),i&&window.dispatchEvent(new PopStateEvent("popstate")))}else l||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function ve(t){const e=[];for(const n of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${wt}="${n.getAttribute(wt)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),e.push(new Promise(r=>{["load","error"].forEach(i=>o.addEventListener(i,r)),document.head.append(o)}))}return e}async function Tt(t,e,n,o,r){async function i(h){function a(m){const g=m.effect;return!g||!(g instanceof KeyframeEffect)||!g.target?!1:window.getComputedStyle(g.target,g.pseudoElement).animationIterationCount==="infinite"}const d=document.getAnimations();document.documentElement.setAttribute(dt,h);const b=document.getAnimations().filter(m=>!d.includes(m)&&!a(m));return Promise.allSettled(b.map(m=>m.finished))}if(r==="animate"&&!n.transitionSkipped&&!t.signal.aborted)try{await i("old")}catch{}const u=document.title,l=me(t,n.viewTransition);Ht(l.to,l.from,e,u,o),Nt(ce),r==="animate"&&(!n.transitionSkipped&&!l.signal.aborted?i("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function ye(){return P?.controller.abort(),P={controller:new AbortController}}async function qt(t,e,n,o,r){const i=ye();if(!bt()||location.origin!==n.origin){i===P&&(P=void 0),location.href=n.href;return}const u=r?"traverse":o.history==="replace"?"replace":"push";if(u!=="traverse"&&mt({scrollX,scrollY}),It(e,n)&&(t!=="back"&&n.hash||t==="back"&&e.hash)){Ht(n,e,o,document.title,r),i===P&&(P=void 0);return}const l=await fe(e,n,t,u,o.sourceElement,o.info,i.controller.signal,o.formData,h);if(l.defaultPrevented||l.signal.aborted){i===P&&(P=void 0),l.signal.aborted||(location.href=n.href);return}async function h(s){const b=s.to.href,m={signal:s.signal};if(s.formData){m.method="POST";const A=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:s.sourceElement?.closest("form");m.body=A?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const g=await he(b,m);if(g===null){s.preventDefault();return}if(g.redirected){const A=new URL(g.redirected);if(A.origin!==s.to.origin){s.preventDefault();return}s.to=A}if(At??=new DOMParser,s.newDocument=At.parseFromString(g.html,g.mediaType),s.newDocument.querySelectorAll("noscript").forEach(A=>A.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const E=ve(s.newDocument);E.length&&!s.signal.aborted&&await Promise.all(E)}async function a(){if(X&&X.viewTransition){try{X.viewTransition.skipTransition()}catch{}try{await X.viewTransition.updateCallbackDone}catch{}}return X={transitionSkipped:!1}}const d=await a();if(l.signal.aborted){i===P&&(P=void 0);return}if(document.documentElement.setAttribute(kt,l.direction),pt)d.viewTransition=document.startViewTransition(async()=>await Tt(l,o,d,r));else{const s=(async()=>{await Promise.resolve(),await Tt(l,o,d,r,_t())})();d.viewTransition={updateCallbackDone:s,ready:s,finished:new Promise(b=>d.viewTransitionFinished=b),skipTransition:()=>{d.transitionSkipped=!0,document.documentElement.removeAttribute(dt)}}}d.viewTransition.updateCallbackDone.finally(async()=>{await ge(),Rt(),be()}),d.viewTransition.finished.finally(()=>{d.viewTransition=void 0,d===X&&(X=void 0),i===P&&(P=void 0),document.documentElement.removeAttribute(kt),document.documentElement.removeAttribute(dt)});try{await d.viewTransition.updateCallbackDone}catch(s){const b=s;console.log("[astro]",b.name,b.message,b.stack)}}async function Et(t,e){await qt("forward",it,new URL(t,location.href),e??{})}function we(t){if(!bt()&&t.state){location.reload();return}if(t.state===null)return;const e=history.state,n=e.index,o=n>tt?"forward":"back";tt=n,qt(o,it,new URL(location.href),{},e)}const St=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&mt({scrollX,scrollY})};{if(pt||_t()!=="none")if(it=new URL(location.href),addEventListener("popstate",we),addEventListener("load",Rt),"onscrollend"in window)addEventListener("scrollend",St);else{let t,e,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(t),t=void 0;return}if(e===scrollY&&n===scrollX){clearInterval(t),t=void 0,St();return}else e=scrollY,n=scrollX};addEventListener("scroll",()=>{t===void 0&&(o=history.state.index,e=scrollY,n=scrollX,t=window.setInterval(r,50))},{passive:!0})}for(const t of document.scripts)t.dataset.astroExec=""}const zt=new Set,rt=new WeakSet;let ft,$t,xt=!1;function ke(t){xt||(xt=!0,ft??=t?.prefetchAll,$t??=t?.defaultStrategy??"hover",Ae(),Te(),Ee(),xe())}function Ae(){for(const t of["touchstart","mousedown"])document.body.addEventListener(t,e=>{et(e.target,"tap")&&at(e.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function Te(){let t;document.body.addEventListener("focusin",o=>{et(o.target,"hover")&&e(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),ht(()=>{for(const o of document.getElementsByTagName("a"))rt.has(o)||et(o,"hover")&&(rt.add(o),o.addEventListener("mouseenter",e,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function e(o){const r=o.target.href;t&&clearTimeout(t),t=setTimeout(()=>{at(r)},80)}function n(){t&&(clearTimeout(t),t=0)}}function Ee(){let t;ht(()=>{for(const e of document.getElementsByTagName("a"))rt.has(e)||et(e,"viewport")&&(rt.add(e),t??=Se(),t.observe(e))})}function Se(){const t=new WeakMap;return new IntersectionObserver((e,n)=>{for(const o of e){const r=o.target,i=t.get(r);o.isIntersecting?(i&&clearTimeout(i),t.set(r,setTimeout(()=>{n.unobserve(r),t.delete(r),at(r.href)},300))):i&&(clearTimeout(i),t.delete(r))}})}function xe(){ht(()=>{for(const t of document.getElementsByTagName("a"))et(t,"load")&&at(t.href)})}function at(t,e){const n=e?.ignoreSlowConnection??!1;if(Le(t,n))if(zt.add(t),document.createElement("link").relList?.supports?.("prefetch")&&e?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",t),document.head.append(o)}else fetch(t,{priority:"low"})}function Le(t,e){if(!navigator.onLine||!e&&Ct())return!1;try{const n=new URL(t,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!zt.has(t)}catch{}return!1}function et(t,e){if(t?.tagName!=="A")return!1;const n=t.dataset.astroPrefetch;return n==="false"?!1:e==="tap"&&(n!=null||ft)&&Ct()?!0:n==null&&ft||n===""?e===$t:n===e}function Ct(){if("connection"in navigator){const t=navigator.connection;return t.saveData||/2g/.test(t.effectiveType)}return!1}function ht(t){t();let e=!1;document.addEventListener("astro:page-load",()=>{if(!e){e=!0;return}t()})}function Oe(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function Lt(t){return t.dataset.astroReload!==void 0}(pt||Oe()!=="none")&&(document.addEventListener("click",t=>{let e=t.target;if(t.composed&&(e=t.composedPath()[0]),e instanceof Element&&(e=e.closest("a, area")),!(e instanceof HTMLAnchorElement)&&!(e instanceof SVGAElement)&&!(e instanceof HTMLAreaElement))return;const n=e instanceof HTMLElement?e.target:e.target.baseVal,o=e instanceof HTMLElement?e.href:e.href.baseVal,r=new URL(o,location.href).origin;Lt(e)||e.hasAttribute("download")||!e.href||n&&n!=="_self"||r!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented||(t.preventDefault(),Et(o,{history:e.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:e}))}),document.addEventListener("submit",t=>{let e=t.target;if(e.tagName!=="FORM"||t.defaultPrevented||Lt(e))return;const n=e,o=t.submitter,r=new FormData(n,o),i=typeof n.action=="string"?n.action:n.getAttribute("action"),u=typeof n.method=="string"?n.method:n.getAttribute("method");let l=o?.getAttribute("formaction")??i??location.pathname;const h=o?.getAttribute("formmethod")??u??"get";if(h==="dialog"||location.origin!==new URL(l,location.href).origin)return;const a={sourceElement:o??n};if(h==="get"){const d=new URLSearchParams(r),s=new URL(l);s.search=d.toString(),l=s.toString()}else a.formData=r;t.preventDefault(),Et(l,a)}),ke({prefetchAll:!0}));
