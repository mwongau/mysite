import{S as A,A as $,B as H,C as P,D as V,y as h,F as O,U as v,g as b,G as B,H as z,b as J,I as Q,u as F,J as D,K as G,M as W,N as X,P as Z,O as k,k as M,Q as ee,R as re,T as U,V as ne,l as ie,W as te,X as se,Y,Z as fe,_ as ue,$ as ae}from"./runtime.C6oNFqRY.js";function m(e,r=null,u){if(typeof e!="object"||e===null||A in e)return e;const a=J(e);if(a!==$&&a!==H)return e;var t=new Map,o=Q(e),w=P(0);o&&t.set("length",P(e.length));var g;return new Proxy(e,{defineProperty(l,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&V();var f=t.get(n);return f===void 0?(f=P(i.value),t.set(n,f)):h(f,m(i.value,g)),!0},deleteProperty(l,n){var i=t.get(n);if(i===void 0)n in l&&t.set(n,P(v));else{if(o&&typeof n=="string"){var f=t.get("length"),s=Number(n);Number.isInteger(s)&&s<f.v&&h(f,s)}h(i,v),j(w)}return!0},get(l,n,i){var c;if(n===A)return e;var f=t.get(n),s=n in l;if(f===void 0&&(!s||(c=O(l,n))!=null&&c.writable)&&(f=P(m(s?l[n]:v,g)),t.set(n,f)),f!==void 0){var d=b(f);return d===v?void 0:d}return Reflect.get(l,n,i)},getOwnPropertyDescriptor(l,n){var i=Reflect.getOwnPropertyDescriptor(l,n);if(i&&"value"in i){var f=t.get(n);f&&(i.value=b(f))}else if(i===void 0){var s=t.get(n),d=s==null?void 0:s.v;if(s!==void 0&&d!==v)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return i},has(l,n){var d;if(n===A)return!0;var i=t.get(n),f=i!==void 0&&i.v!==v||Reflect.has(l,n);if(i!==void 0||B!==null&&(!f||(d=O(l,n))!=null&&d.writable)){i===void 0&&(i=P(f?m(l[n],g):v),t.set(n,i));var s=b(i);if(s===v)return!1}return f},set(l,n,i,f){var I;var s=t.get(n),d=n in l;if(o&&n==="length")for(var c=i;c<s.v;c+=1){var y=t.get(c+"");y!==void 0?h(y,v):c in l&&(y=P(v),t.set(c+"",y))}s===void 0?(!d||(I=O(l,n))!=null&&I.writable)&&(s=P(void 0),h(s,m(i,g)),t.set(n,s)):(d=s.v!==v,h(s,m(i,g)));var p=Reflect.getOwnPropertyDescriptor(l,n);if(p!=null&&p.set&&p.set.call(f,i),!d){if(o&&typeof n=="string"){var x=t.get("length"),S=Number(n);Number.isInteger(S)&&S>=x.v&&h(x,S+1)}j(w)}return!0},ownKeys(l){b(w);var n=Reflect.ownKeys(l).filter(s=>{var d=t.get(s);return d===void 0||d.v!==v});for(var[i,f]of t)f.v!==v&&!(i in l)&&n.push(i);return n},setPrototypeOf(){z()}})}function j(e,r=1){h(e,e.v+r)}let N=!1;function le(e){var r=N;try{return N=!1,[e(),N]}finally{N=r}}const de={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,u){return r in e.special||(e.special[r]=oe({get[r](){return e.props[r]}},r,Z)),e.special[r](u),F(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),F(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function ce(e,r){return new Proxy({props:e,exclude:r,special:{},version:P(0)},de)}const _e={get(e,r){let u=e.props.length;for(;u--;){let a=e.props[u];if(D(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a)return a[r]}},set(e,r,u){let a=e.props.length;for(;a--;){let t=e.props[a];D(t)&&(t=t());const o=O(t,r);if(o&&o.set)return o.set(u),!0}return!1},getOwnPropertyDescriptor(e,r){let u=e.props.length;for(;u--;){let a=e.props[u];if(D(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a){const t=O(a,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){if(r===A||r===G)return!1;for(let u of e.props)if(D(u)&&(u=u()),u!=null&&r in u)return!0;return!1},ownKeys(e){const r=[];for(let u of e.props){D(u)&&(u=u());for(const a in u)r.includes(a)||r.push(a)}return r}};function pe(...e){return new Proxy({props:e},_e)}function q(e){for(var r=B,u=B;r!==null&&!(r.f&(ee|re));)r=r.parent;try{return U(r),e()}finally{U(u)}}function oe(e,r,u,a){var K;var t=(u&ne)!==0,o=!ie||(u&te)!==0,w=(u&se)!==0,g=(u&ae)!==0,l=!1,n;w?[n,l]=le(()=>e[r]):n=e[r];var i=A in e||G in e,f=w&&(((K=O(e,r))==null?void 0:K.set)??(i&&r in e&&(_=>e[r]=_)))||void 0,s=a,d=!0,c=!1,y=()=>(c=!0,d&&(d=!1,g?s=M(a):s=a),s);n===void 0&&a!==void 0&&(f&&o&&W(),n=y(),f&&f(n));var p;if(o)p=()=>{var _=e[r];return _===void 0?y():(d=!0,c=!1,_)};else{var x=q(()=>(t?Y:fe)(()=>e[r]));x.f|=X,p=()=>{var _=b(x);return _!==void 0&&(s=void 0),_===void 0?s:_}}if(!(u&Z))return p;if(f){var S=e.$$legacy;return function(_,R){return arguments.length>0?((!o||!R||S||l)&&f(R?p():_),_):p()}}var I=!1,C=!1,T=ue(n),E=q(()=>Y(()=>{var _=p(),R=b(T);return I?(I=!1,C=!0,R):(C=!1,T.v=_)}));return t||(E.equals=k),function(_,R){if(arguments.length>0){const L=R?b(E):o&&w?m(_):_;return E.equals(L)||(I=!0,h(T,L),c&&s!==void 0&&(s=L),M(()=>b(E))),_}return b(E)}}export{m as a,ce as l,oe as p,pe as s};
