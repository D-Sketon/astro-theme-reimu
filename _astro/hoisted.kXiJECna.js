import{c as vt,g as ht}from"./_commonjsHelpers.5-cIlDoe.js";import"./hoisted.HZfkOsGM.js";var ut={exports:{}};/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.11.1
 * @url https://github.com/feimosi/baguetteBox.js
 */(function(X,ct){(function(e,r){X.exports=r()})(vt,function(){var e,r,u,h,y,dt='<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',ft='<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',pt='<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',o={},W={captions:!0,buttons:"auto",fullScreen:!1,noScrollbars:!1,bodyClass:"baguetteBox-open",titleTag:!1,async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},p={},k=[],d=0,M=!1,f={},q=!1,_=/.+\.(gif|jpe?g|png|webp)/i,T={},N=[],O=null,J=function(t){t.target.id.indexOf("baguette-img")!==-1&&S()},K=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,Y()},Q=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,I()},Z=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,S()},$=function(t){f.count++,1<f.count&&(f.multitouch=!0),f.startX=t.changedTouches[0].pageX,f.startY=t.changedTouches[0].pageY},tt=function(t){if(!q&&!f.multitouch){t.preventDefault?t.preventDefault():t.returnValue=!1;var a=t.touches[0]||t.changedTouches[0];40<a.pageX-f.startX?(q=!0,Y()):a.pageX-f.startX<-40?(q=!0,I()):100<f.startY-a.pageY&&S()}},R=function(){f.count--,f.count<=0&&(f.multitouch=!1),q=!1},et=function(){R()},nt=function(t){e.style.display==="block"&&e.contains&&!e.contains(t.target)&&(t.stopPropagation(),rt())};function ot(t){if(T.hasOwnProperty(t)){var a=T[t].galleries;[].forEach.call(a,function(n){[].forEach.call(n,function(s){g(s.imageElement,"click",s.eventHandler)}),k===n&&(k=[])}),delete T[t]}}function z(t){switch(t.keyCode){case 37:Y();break;case 39:I();break;case 27:S();break;case 36:(function(n){return n&&n.preventDefault(),P(0)})(t);break;case 35:(function(n){return n&&n.preventDefault(),P(k.length-1)})(t)}}function at(t,a){if(k!==t){for(k=t,function(w){w=w||{};for(var c in W)o[c]=W[c],typeof w[c]<"u"&&(o[c]=w[c]);r.style.transition=r.style.webkitTransition=o.animation==="fadeIn"?"opacity .4s ease":o.animation==="slideIn"?"":"none",o.buttons==="auto"&&("ontouchstart"in window||k.length===1)&&(o.buttons=!1),u.style.display=h.style.display=o.buttons?"":"none";try{e.style.backgroundColor=o.overlayBackgroundColor}catch{}}(a);r.firstChild;)r.removeChild(r.firstChild);for(var n,s=[],i=[],l=N.length=0;l<t.length;l++)(n=b("div")).className="full-image",n.id="baguette-img-"+l,N.push(n),s.push("baguetteBox-figure-"+l),i.push("baguetteBox-figcaption-"+l),r.appendChild(N[l]);e.setAttribute("aria-labelledby",s.join(" ")),e.setAttribute("aria-describedby",i.join(" "))}}function it(t){o.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),e.style.display!=="block"&&(m(document,"keydown",z),f={count:0,startX:null,startY:null},j(d=t,function(){V(d),G(d)}),lt(),e.style.display="block",o.fullScreen&&function(){e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen&&e.mozRequestFullScreen()}(),setTimeout(function(){e.className="visible",o.bodyClass&&document.body.classList&&document.body.classList.add(o.bodyClass),o.afterShow&&o.afterShow()},50),o.onChange&&o.onChange(d,N.length),O=document.activeElement,rt(),M=!0)}function rt(){o.buttons?u.focus():y.focus()}function S(){o.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),e.style.display!=="none"&&(g(document,"keydown",z),e.className="",setTimeout(function(){e.style.display="none",document.fullscreen&&function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}(),o.bodyClass&&document.body.classList&&document.body.classList.remove(o.bodyClass),o.afterHide&&o.afterHide(),O&&O.focus(),M=!1},500))}function j(t,a){var n=N[t],s=k[t];if(n!==void 0&&s!==void 0)if(n.getElementsByTagName("img")[0])a&&a();else{var i=s.imageElement,l=i.getElementsByTagName("img")[0],v=typeof o.captions=="function"?o.captions.call(k,i):i.getAttribute("data-caption")||i.title,w=function(A){var L=A.href;if(A.dataset){var H=[];for(var B in A.dataset)B.substring(0,3)!=="at-"||isNaN(B.substring(3))||(H[B.replace("at-","")]=A.dataset[B]);for(var U=Object.keys(H).sort(function(mt,bt){return parseInt(mt,10)<parseInt(bt,10)?-1:1}),gt=window.innerWidth*window.devicePixelRatio,D=0;D<U.length-1&&U[D]<gt;)D++;L=H[U[D]]||L}return L}(i),c=b("figure");if(c.id="baguetteBox-figure-"+t,c.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',o.captions&&v){var E=b("figcaption");E.id="baguetteBox-figcaption-"+t,E.innerHTML=v,c.appendChild(E)}n.appendChild(c);var x=b("img");x.onload=function(){var C=document.querySelector("#baguette-img-"+t+" .baguetteBox-spinner");c.removeChild(C),!o.async&&a&&a()},x.setAttribute("src",w),x.alt=l&&l.alt||"",o.titleTag&&v&&(x.title=v),c.appendChild(x),o.async&&a&&a()}}function I(){return P(d+1)}function Y(){return P(d-1)}function P(t,a){return!M&&0<=t&&t<a.length?(at(a,o),it(t),!0):t<0?(o.animation&&st("left"),!1):t>=N.length?(o.animation&&st("right"),!1):(j(d=t,function(){V(d),G(d)}),lt(),o.onChange&&o.onChange(d,N.length),!0)}function st(t){r.className="bounce-from-"+t,setTimeout(function(){r.className=""},400)}function lt(){var t=100*-d+"%";o.animation==="fadeIn"?(r.style.opacity=0,setTimeout(function(){p.transforms?r.style.transform=r.style.webkitTransform="translate3d("+t+",0,0)":r.style.left=t,r.style.opacity=1},400)):p.transforms?r.style.transform=r.style.webkitTransform="translate3d("+t+",0,0)":r.style.left=t}function V(t){t-d>=o.preload||j(t+1,function(){V(t+1)})}function G(t){d-t>=o.preload||j(t-1,function(){G(t-1)})}function m(t,a,n,s){t.addEventListener?t.addEventListener(a,n,s):t.attachEvent("on"+a,function(i){(i=i||window.event).target=i.target||i.srcElement,n(i)})}function g(t,a,n,s){t.removeEventListener?t.removeEventListener(a,n,s):t.detachEvent("on"+a,n)}function F(t){return document.getElementById(t)}function b(t){return document.createElement(t)}return[].forEach||(Array.prototype.forEach=function(t,a){for(var n=0;n<this.length;n++)t.call(a,this[n],n,this)}),[].filter||(Array.prototype.filter=function(t,a,n,s,i){for(n=this,s=[],i=0;i<n.length;i++)t.call(a,n[i],i,n)&&s.push(n[i]);return s}),{run:function(a,n){return p.transforms=function(){var i=b("div");return typeof i.style.perspective<"u"||typeof i.style.webkitPerspective<"u"}(),p.svg=function(){var i=b("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),p.passiveEvents=function(){var i=!1;try{var l=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("test",null,l)}catch{}return i}(),function(){if(e=F("baguetteBox-overlay"))return r=F("baguetteBox-slider"),u=F("previous-button"),h=F("next-button"),void(y=F("close-button"));(e=b("div")).setAttribute("role","dialog"),e.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(e),(r=b("div")).id="baguetteBox-slider",e.appendChild(r),(u=b("button")).setAttribute("type","button"),u.id="previous-button",u.setAttribute("aria-label","Previous"),u.innerHTML=p.svg?dt:"&lt;",e.appendChild(u),(h=b("button")).setAttribute("type","button"),h.id="next-button",h.setAttribute("aria-label","Next"),h.innerHTML=p.svg?ft:"&gt;",e.appendChild(h),(y=b("button")).setAttribute("type","button"),y.id="close-button",y.setAttribute("aria-label","Close"),y.innerHTML=p.svg?pt:"&times;",e.appendChild(y),u.className=h.className=y.className="baguetteBox-button",function(){var l=p.passiveEvents?{passive:!1}:null,v=p.passiveEvents?{passive:!0}:null;m(e,"click",J),m(u,"click",K),m(h,"click",Q),m(y,"click",Z),m(r,"contextmenu",et),m(e,"touchstart",$,v),m(e,"touchmove",tt,l),m(e,"touchend",R),m(document,"focus",nt,!0)}()}(),ot(a),function(i,l){var v=document.querySelectorAll(i),w={galleries:[],nodeList:v};return T[i]=w,[].forEach.call(v,function(c){l&&l.filter&&(_=l.filter);var E=[];if(E=c.tagName==="A"?[c]:c.getElementsByTagName("a"),(E=[].filter.call(E,function(C){if(C.className.indexOf(l&&l.ignoreClass)===-1)return _.test(C.href)})).length!==0){var x=[];[].forEach.call(E,function(C,A){var L=function(B){B.preventDefault?B.preventDefault():B.returnValue=!1,at(x,l),it(A)},H={eventHandler:L,imageElement:C};m(C,"click",L),x.push(H)}),w.galleries.push(x)}}),w.galleries}(a,n)},show:P,showNext:I,showPrevious:Y,hide:S,destroy:function(){(function(){var n=p.passiveEvents?{passive:!1}:null,s=p.passiveEvents?{passive:!0}:null;g(e,"click",J),g(u,"click",K),g(h,"click",Q),g(y,"click",Z),g(r,"contextmenu",et),g(e,"touchstart",$,s),g(e,"touchmove",tt,n),g(e,"touchend",R),g(document,"focus",nt,!0)})(),function(){for(var n in T)T.hasOwnProperty(n)&&ot(n)}(),g(document,"keydown",z),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),T={},k=[],d=0}}})})(ut);var yt=ut.exports;const wt=ht(yt);document.addEventListener("astro:page-load",()=>{document.querySelectorAll(".article-entry").forEach(function(X,ct){X.querySelectorAll("img").forEach(function(e){if(e.parentElement?.tagName.toLowerCase()==="a")return;const r=e.alt,u=document.createElement("a");u.href=e.src,u.setAttribute("data-caption",r||""),e.parentNode&&e.parentNode.replaceChild(u,e),u.appendChild(e)})}),wt.run(".article-entry")});
