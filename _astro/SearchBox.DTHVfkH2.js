import{c as le,j as p}from"./createReactComponent.Bwgjtjcg.js";/* empty css                        */import{r as ue}from"./index.DhYZZe0J.js";import{I as de}from"./IconSearch.DxFUs4ih.js";/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var fe=le("filled","circle-x-filled","IconCircleXFilled",[["path",{d:"M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z",key:"svg-0"}]]);function S(s){return Array.isArray?Array.isArray(s):se(s)==="[object Array]"}const ge=1/0;function pe(s){if(typeof s=="string")return s;let e=s+"";return e=="0"&&1/s==-ge?"-0":e}function me(s){return s==null?"":pe(s)}function _(s){return typeof s=="string"}function ee(s){return typeof s=="number"}function xe(s){return s===!0||s===!1||Me(s)&&se(s)=="[object Boolean]"}function te(s){return typeof s=="object"}function Me(s){return te(s)&&s!==null}function x(s){return s!=null}function K(s){return!s.trim().length}function se(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(s)}const ye="Incorrect 'index' type",Ee=s=>`Invalid value for key ${s}`,_e=s=>`Pattern length exceeds max of ${s}.`,Ie=s=>`Missing ${s} property in key`,Se=s=>`Property 'weight' in key '${s}' must be a positive integer`,Q=Object.prototype.hasOwnProperty;class Ae{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(r=>{let n=re(r);this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight}),this._keys.forEach(r=>{r.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function re(s){let e=null,t=null,r=null,n=1,i=null;if(_(s)||S(s))r=s,e=U(s),t=z(s);else{if(!Q.call(s,"name"))throw new Error(Ie("name"));const c=s.name;if(r=c,Q.call(s,"weight")&&(n=s.weight,n<=0))throw new Error(Se(c));e=U(c),t=z(c),i=s.getFn}return{path:e,id:t,weight:n,src:r,getFn:i}}function U(s){return S(s)?s:s.split(".")}function z(s){return S(s)?s.join("."):s}function we(s,e){let t=[],r=!1;const n=(i,c,a)=>{if(x(i))if(!c[a])t.push(i);else{let o=c[a];const h=i[o];if(!x(h))return;if(a===c.length-1&&(_(h)||ee(h)||xe(h)))t.push(me(h));else if(S(h)){r=!0;for(let l=0,d=h.length;l<d;l+=1)n(h[l],c,a+1)}else c.length&&n(h,c,a+1)}};return n(s,_(e)?e.split("."):e,0),r?t:t[0]}const Le={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Ne={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(s,e)=>s.score===e.score?s.idx<e.idx?-1:1:s.score<e.score?-1:1},ve={location:0,threshold:.6,distance:100},Re={useExtendedSearch:!1,getFn:we,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u={...Ne,...Le,...ve,...Re};const be=/[^ ]+/g;function je(s=1,e=3){const t=new Map,r=Math.pow(10,e);return{get(n){const i=n.match(be).length;if(t.has(i))return t.get(i);const c=1/Math.pow(i,.5*s),a=parseFloat(Math.round(c*r)/r);return t.set(i,a),a},clear(){t.clear()}}}class Y{constructor({getFn:e=u.getFn,fieldNormWeight:t=u.fieldNormWeight}={}){this.norm=je(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,r)=>{this._keysMap[t.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,_(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){const t=this.size();_(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,r=this.size();t<r;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!x(e)||K(e))return;let r={v:e,i:t,n:this.norm.get(e)};this.records.push(r)}_addObject(e,t){let r={i:t,$:{}};this.keys.forEach((n,i)=>{let c=n.getFn?n.getFn(e):this.getFn(e,n.path);if(x(c)){if(S(c)){let a=[];const o=[{nestedArrIndex:-1,value:c}];for(;o.length;){const{nestedArrIndex:h,value:l}=o.pop();if(x(l))if(_(l)&&!K(l)){let d={v:l,i:h,n:this.norm.get(l)};a.push(d)}else S(l)&&l.forEach((d,f)=>{o.push({nestedArrIndex:f,value:d})})}r.$[i]=a}else if(_(c)&&!K(c)){let a={v:c,n:this.norm.get(c)};r.$[i]=a}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function ne(s,e,{getFn:t=u.getFn,fieldNormWeight:r=u.fieldNormWeight}={}){const n=new Y({getFn:t,fieldNormWeight:r});return n.setKeys(s.map(re)),n.setSources(e),n.create(),n}function ke(s,{getFn:e=u.getFn,fieldNormWeight:t=u.fieldNormWeight}={}){const{keys:r,records:n}=s,i=new Y({getFn:e,fieldNormWeight:t});return i.setKeys(r),i.setIndexRecords(n),i}function O(s,{errors:e=0,currentLocation:t=0,expectedLocation:r=0,distance:n=u.distance,ignoreLocation:i=u.ignoreLocation}={}){const c=e/s.length;if(i)return c;const a=Math.abs(r-t);return n?c+a/n:a?1:c}function Ce(s=[],e=u.minMatchCharLength){let t=[],r=-1,n=-1,i=0;for(let c=s.length;i<c;i+=1){let a=s[i];a&&r===-1?r=i:!a&&r!==-1&&(n=i-1,n-r+1>=e&&t.push([r,n]),r=-1)}return s[i-1]&&i-r>=e&&t.push([r,i-1]),t}const R=32;function $e(s,e,t,{location:r=u.location,distance:n=u.distance,threshold:i=u.threshold,findAllMatches:c=u.findAllMatches,minMatchCharLength:a=u.minMatchCharLength,includeMatches:o=u.includeMatches,ignoreLocation:h=u.ignoreLocation}={}){if(e.length>R)throw new Error(_e(R));const l=e.length,d=s.length,f=Math.max(0,Math.min(r,d));let g=i,m=f;const M=a>1||o,N=M?Array(d):[];let I;for(;(I=s.indexOf(e,m))>-1;){let y=O(e,{currentLocation:I,expectedLocation:f,distance:n,ignoreLocation:h});if(g=Math.min(y,g),m=I+l,M){let A=0;for(;A<l;)N[I+A]=1,A+=1}}m=-1;let b=[],v=1,C=l+d;const he=1<<l-1;for(let y=0;y<l;y+=1){let A=0,w=C;for(;A<w;)O(e,{errors:y,currentLocation:f+w,expectedLocation:f,distance:n,ignoreLocation:h})<=g?A=w:C=w,w=Math.floor((C-A)/2+A);C=w;let G=Math.max(1,f-w+1),P=c?d:Math.min(f+w,d)+l,j=Array(P+2);j[P+1]=(1<<y)-1;for(let E=P;E>=G;E-=1){let $=E-1,X=t[s.charAt($)];if(M&&(N[$]=+!!X),j[E]=(j[E+1]<<1|1)&X,y&&(j[E]|=(b[E+1]|b[E])<<1|1|b[E+1]),j[E]&he&&(v=O(e,{errors:y,currentLocation:$,expectedLocation:f,distance:n,ignoreLocation:h}),v<=g)){if(g=v,m=$,m<=f)break;G=Math.max(1,2*f-m)}}if(O(e,{errors:y+1,currentLocation:f,expectedLocation:f,distance:n,ignoreLocation:h})>g)break;b=j}const T={isMatch:m>=0,score:Math.max(.001,v)};if(M){const y=Ce(N,a);y.length?o&&(T.indices=y):T.isMatch=!1}return T}function Oe(s){let e={};for(let t=0,r=s.length;t<r;t+=1){const n=s.charAt(t);e[n]=(e[n]||0)|1<<r-t-1}return e}class ie{constructor(e,{location:t=u.location,threshold:r=u.threshold,distance:n=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:a=u.minMatchCharLength,isCaseSensitive:o=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){if(this.options={location:t,threshold:r,distance:n,includeMatches:i,findAllMatches:c,minMatchCharLength:a,isCaseSensitive:o,ignoreLocation:h},this.pattern=o?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(f,g)=>{this.chunks.push({pattern:f,alphabet:Oe(f),startIndex:g})},d=this.pattern.length;if(d>R){let f=0;const g=d%R,m=d-g;for(;f<m;)l(this.pattern.substr(f,R),f),f+=R;if(g){const M=d-R;l(this.pattern.substr(M),M)}}else l(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:r}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let m={isMatch:!0,score:0};return r&&(m.indices=[[0,e.length-1]]),m}const{location:n,distance:i,threshold:c,findAllMatches:a,minMatchCharLength:o,ignoreLocation:h}=this.options;let l=[],d=0,f=!1;this.chunks.forEach(({pattern:m,alphabet:M,startIndex:N})=>{const{isMatch:I,score:b,indices:v}=$e(e,m,M,{location:n+N,distance:i,threshold:c,findAllMatches:a,minMatchCharLength:o,includeMatches:r,ignoreLocation:h});I&&(f=!0),d+=b,I&&v&&(l=[...l,...v])});let g={isMatch:f,score:f?d/this.chunks.length:1};return f&&r&&(g.indices=l),g}}class L{constructor(e){this.pattern=e}static isMultiMatch(e){return J(e,this.multiRegex)}static isSingleMatch(e){return J(e,this.singleRegex)}search(){}}function J(s,e){const t=s.match(e);return t?t[1]:null}class Fe extends L{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class Te extends L{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Pe extends L{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class Ke extends L{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class ze extends L{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class De extends L{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class ce extends L{constructor(e,{location:t=u.location,threshold:r=u.threshold,distance:n=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:a=u.minMatchCharLength,isCaseSensitive:o=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){super(e),this._bitapSearch=new ie(e,{location:t,threshold:r,distance:n,includeMatches:i,findAllMatches:c,minMatchCharLength:a,isCaseSensitive:o,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class oe extends L{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t=0,r;const n=[],i=this.pattern.length;for(;(r=e.indexOf(this.pattern,t))>-1;)t=r+i,n.push([r,t-1]);const c=!!n.length;return{isMatch:c,score:c?0:1,indices:n}}}const D=[Fe,oe,Pe,Ke,De,ze,Te,ce],Z=D.length,We=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Be="|";function He(s,e={}){return s.split(Be).map(t=>{let r=t.trim().split(We).filter(i=>i&&!!i.trim()),n=[];for(let i=0,c=r.length;i<c;i+=1){const a=r[i];let o=!1,h=-1;for(;!o&&++h<Z;){const l=D[h];let d=l.isMultiMatch(a);d&&(n.push(new l(d,e)),o=!0)}if(!o)for(h=-1;++h<Z;){const l=D[h];let d=l.isSingleMatch(a);if(d){n.push(new l(d,e));break}}}return n})}const Ve=new Set([ce.type,oe.type]);class Ye{constructor(e,{isCaseSensitive:t=u.isCaseSensitive,includeMatches:r=u.includeMatches,minMatchCharLength:n=u.minMatchCharLength,ignoreLocation:i=u.ignoreLocation,findAllMatches:c=u.findAllMatches,location:a=u.location,threshold:o=u.threshold,distance:h=u.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:r,minMatchCharLength:n,findAllMatches:c,ignoreLocation:i,location:a,threshold:o,distance:h},this.pattern=t?e:e.toLowerCase(),this.query=He(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let i=0,c=[],a=0;for(let o=0,h=t.length;o<h;o+=1){const l=t[o];c.length=0,i=0;for(let d=0,f=l.length;d<f;d+=1){const g=l[d],{isMatch:m,indices:M,score:N}=g.search(e);if(m){if(i+=1,a+=N,r){const I=g.constructor.type;Ve.has(I)?c=[...c,...M]:c.push(M)}}else{a=0,i=0,c.length=0;break}}if(i){let d={isMatch:!0,score:a/i};return r&&(d.indices=c),d}}return{isMatch:!1,score:1}}}const W=[];function Ge(...s){W.push(...s)}function B(s,e){for(let t=0,r=W.length;t<r;t+=1){let n=W[t];if(n.condition(s,e))return new n(s,e)}return new ie(s,e)}const F={AND:"$and",OR:"$or"},H={PATH:"$path",PATTERN:"$val"},V=s=>!!(s[F.AND]||s[F.OR]),Xe=s=>!!s[H.PATH],Qe=s=>!S(s)&&te(s)&&!V(s),q=s=>({[F.AND]:Object.keys(s).map(e=>({[e]:s[e]}))});function ae(s,e,{auto:t=!0}={}){const r=n=>{let i=Object.keys(n);const c=Xe(n);if(!c&&i.length>1&&!V(n))return r(q(n));if(Qe(n)){const o=c?n[H.PATH]:i[0],h=c?n[H.PATTERN]:n[o];if(!_(h))throw new Error(Ee(o));const l={keyId:z(o),pattern:h};return t&&(l.searcher=B(h,e)),l}let a={children:[],operator:i[0]};return i.forEach(o=>{const h=n[o];S(h)&&h.forEach(l=>{a.children.push(r(l))})}),a};return V(s)||(s=q(s)),r(s)}function Ue(s,{ignoreFieldNorm:e=u.ignoreFieldNorm}){s.forEach(t=>{let r=1;t.matches.forEach(({key:n,norm:i,score:c})=>{const a=n?n.weight:null;r*=Math.pow(c===0&&a?Number.EPSILON:c,(a||1)*(e?1:i))}),t.score=r})}function Je(s,e){const t=s.matches;e.matches=[],x(t)&&t.forEach(r=>{if(!x(r.indices)||!r.indices.length)return;const{indices:n,value:i}=r;let c={indices:n,value:i};r.key&&(c.key=r.key.src),r.idx>-1&&(c.refIndex=r.idx),e.matches.push(c)})}function Ze(s,e){e.score=s.score}function qe(s,e,{includeMatches:t=u.includeMatches,includeScore:r=u.includeScore}={}){const n=[];return t&&n.push(Je),r&&n.push(Ze),s.map(i=>{const{idx:c}=i,a={item:e[c],refIndex:c};return n.length&&n.forEach(o=>{o(i,a)}),a})}class k{constructor(e,t={},r){this.options={...u,...t},this.options.useExtendedSearch,this._keyStore=new Ae(this.options.keys),this.setCollection(e,r)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof Y))throw new Error(ye);this._myIndex=t||ne(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){x(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const t=[];for(let r=0,n=this._docs.length;r<n;r+=1){const i=this._docs[r];e(i,r)&&(this.removeAt(r),r-=1,n-=1,t.push(i))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:r,includeScore:n,shouldSort:i,sortFn:c,ignoreFieldNorm:a}=this.options;let o=_(e)?_(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Ue(o,{ignoreFieldNorm:a}),i&&o.sort(c),ee(t)&&t>-1&&(o=o.slice(0,t)),qe(o,this._docs,{includeMatches:r,includeScore:n})}_searchStringList(e){const t=B(e,this.options),{records:r}=this._myIndex,n=[];return r.forEach(({v:i,i:c,n:a})=>{if(!x(i))return;const{isMatch:o,score:h,indices:l}=t.searchIn(i);o&&n.push({item:i,idx:c,matches:[{score:h,value:i,norm:a,indices:l}]})}),n}_searchLogical(e){const t=ae(e,this.options),r=(a,o,h)=>{if(!a.children){const{keyId:d,searcher:f}=a,g=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(o,d),searcher:f});return g&&g.length?[{idx:h,item:o,matches:g}]:[]}const l=[];for(let d=0,f=a.children.length;d<f;d+=1){const g=a.children[d],m=r(g,o,h);if(m.length)l.push(...m);else if(a.operator===F.AND)return[]}return l},n=this._myIndex.records,i={},c=[];return n.forEach(({$:a,i:o})=>{if(x(a)){let h=r(t,a,o);h.length&&(i[o]||(i[o]={idx:o,item:a,matches:[]},c.push(i[o])),h.forEach(({matches:l})=>{i[o].matches.push(...l)}))}}),c}_searchObjectList(e){const t=B(e,this.options),{keys:r,records:n}=this._myIndex,i=[];return n.forEach(({$:c,i:a})=>{if(!x(c))return;let o=[];r.forEach((h,l)=>{o.push(...this._findMatches({key:h,value:c[l],searcher:t}))}),o.length&&i.push({idx:a,item:c,matches:o})}),i}_findMatches({key:e,value:t,searcher:r}){if(!x(t))return[];let n=[];if(S(t))t.forEach(({v:i,i:c,n:a})=>{if(!x(i))return;const{isMatch:o,score:h,indices:l}=r.searchIn(i);o&&n.push({score:h,key:e,value:i,idx:c,norm:a,indices:l})});else{const{v:i,n:c}=t,{isMatch:a,score:o,indices:h}=r.searchIn(i);a&&n.push({score:o,key:e,value:i,norm:c,indices:h})}return n}}k.version="7.0.0";k.createIndex=ne;k.parseIndex=ke;k.config=u;k.parseQuery=ae;Ge(Ye);const et={keys:["data.title","data.description"],includeMatches:!0,minMatchCharLength:2,threshold:.5};function ct({searchList:s,url:e}){const[t,r]=ue.useState(""),i=new k(s,et).search(t).map(o=>o.item).slice(0,5);function c({target:o={value:""}}){const{value:h}=o;r(h)}function a(){const o=document.querySelector(".popup");o.style.display="none",document.querySelectorAll(".popoverlay").forEach(l=>{l.parentNode?.removeChild(l)}),document.body.style.overflow=""}return p.jsx(p.Fragment,{children:p.jsx("div",{className:"site-search",children:p.jsxs("div",{className:"reimu-popup popup",children:[p.jsx("div",{className:"reimu-search",children:p.jsxs("div",{className:"reimu-search-input",id:"reimu-search-input",children:[p.jsx(de,{size:20}),p.jsx("input",{type:"text",value:t,onChange:c,placeholder:"Search",className:""}),p.jsx(fe,{color:"red",onClick:a})]})}),p.jsxs("div",{className:"reimu-results",children:[p.jsx("div",{id:"reimu-stats",children:t.length>1&&p.jsxs(p.Fragment,{children:[p.jsxs("p",{children:["Found ",i.length," ",i.length===1?"result":"results"," for '",t,"'"]}),p.jsx("hr",{})]})}),p.jsx("div",{id:"reimu-hits",children:p.jsx("ul",{children:i&&i.map((o,h)=>p.jsxs("li",{className:"reimu-hit-item",children:[p.jsx("a",{className:"reimu-hit-item-link",href:`${e}/blog/${o.slug}`,children:o.data.title}),o.data.description]},h))})})]}),p.jsx("span",{className:"popup-btn-close"})]})})})}export{ct as default};