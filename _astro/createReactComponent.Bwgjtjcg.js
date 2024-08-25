import{r as i}from"./index.DhYZZe0J.js";var m={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=i,y=Symbol.for("react.element"),k=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,g=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,l){var r,o={},n=null,s=null;l!==void 0&&(n=""+l),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)E.call(e,r)&&!R.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:y,type:t,key:n,ref:s,props:o,_owner:g.current}}a.Fragment=k;a.jsx=u;a.jsxs=u;m.exports=a;var b=m.exports;/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var j={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(t,e,l,r)=>{const o=i.forwardRef(({color:n="currentColor",size:s=24,stroke:c=2,title:p,className:d,children:f,...w},_)=>i.createElement("svg",{ref:_,...j[t],width:s,height:s,className:["tabler-icon",`tabler-icon-${e}`,d].join(" "),...t==="filled"?{fill:n}:{strokeWidth:c,stroke:n},...w},[p&&i.createElement("title",{key:"svg-title"},p),...r.map(([v,x])=>i.createElement(v,x)),...Array.isArray(f)?f:[f]]));return o.displayName=`${l}`,o};export{C as c,b as j};
