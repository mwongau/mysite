var Pn=Array.isArray,$t=Array.prototype.indexOf,bn=Array.from,Cn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Zt=Object.getOwnPropertyDescriptors,Fn=Object.prototype,qn=Array.prototype,Wt=Object.getPrototypeOf;function Ln(t){return typeof t=="function"}const Yn=()=>{};function Mn(t){return t()}function zt(t){for(var r=0;r<t.length;r++)t[r]()}const w=2,yt=4,Z=8,ut=16,T=32,W=64,nt=128,O=256,B=512,y=1024,D=2048,z=4096,b=8192,C=16384,Jt=32768,wt=65536,jn=1<<17,Qt=1<<19,Et=1<<20,vt=Symbol("$state"),Un=Symbol("legacy props");function mt(t){return t===this.v}function Xt(t,r){return t!=t?r==r:t!==r||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!Xt(t,this.v)}function tn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function nn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function rn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function en(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Hn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Bn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Vn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Gn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ln(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let J=!1;function Kn(){J=!0}const $n=1,Zn=2,Wn=4,zn=8,Jn=16,Qn=1,Xn=2,un="[",an="[!",on="]",gt={},tr=Symbol();function at(t,r){var n={f:0,v:t,reactions:null,equals:mt,rv:0,wv:0};return n}function nr(t){return fn(at(t))}function rr(t,r=!1){var e;const n=at(t);return r||(n.equals=Tt),J&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(n),n}function fn(t){return o!==null&&o.f&w&&(m===null?An([t]):m.push(t)),t}function _n(t,r){return o!==null&&ft()&&o.f&(w|ut)&&(m===null||!m.includes(t))&&sn(),cn(t,r)}function cn(t,r){return t.equals(r)||(t.v,t.v=r,t.wv=Ut(),At(t,D),ft()&&a!==null&&a.f&y&&!(a.f&T)&&(h!==null&&h.includes(t)?(g(a,D),tt(a)):A===null?xn([t]):A.push(t))),r}function At(t,r){var n=t.reactions;if(n!==null)for(var e=ft(),l=n.length,s=0;s<l;s++){var u=n[s],i=u.f;i&D||!e&&u===a||(g(u,r),i&(y|O)&&(i&w?At(u,z):tt(u)))}}function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let S=!1;function er(t){S=t}let E;function F(t){if(t===null)throw xt(),gt;return E=t}function lr(){return F(I(E))}function sr(t){if(S){if(I(E)!==null)throw xt(),gt;E=t}}function ur(t=1){if(S){for(var r=t,n=E;r--;)n=I(n);E=n}}function ar(){for(var t=0,r=E;;){if(r.nodeType===8){var n=r.data;if(n===on){if(t===0)return r;t-=1}else(n===un||n===an)&&(t+=1)}var e=I(r);r.remove(),r=e}}var pt,Rt,Dt;function or(){if(pt===void 0){pt=window;var t=Element.prototype,r=Node.prototype;Rt=ct(r,"firstChild").get,Dt=ct(r,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Rt.call(t)}function I(t){return Dt.call(t)}function ir(t,r){if(!S)return et(t);var n=et(E);if(n===null)n=E.appendChild(rt());else if(r&&n.nodeType!==3){var e=rt();return n==null||n.before(e),F(e),e}return F(n),n}function fr(t,r){if(!S){var n=et(t);return n instanceof Comment&&n.data===""?I(n):n}return E}function _r(t,r=1,n=!1){let e=S?E:t;for(var l;r--;)l=e,e=I(e);if(!S)return e;var s=e==null?void 0:e.nodeType;if(n&&s!==3){var u=rt();return e===null?l==null||l.after(u):e.before(u),F(u),u}return F(e),e}function cr(t){t.textContent=""}function vn(t){var r=w|D;a===null?r|=O:a.f|=Et;var n=o!==null&&o.f&w?o:null;const e={children:null,ctx:f,deps:null,equals:mt,f:r,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??a};return n!==null&&(n.children??(n.children=[])).push(e),e}function vr(t){const r=vn(t);return r.equals=Tt,r}function St(t){var r=t.children;if(r!==null){t.children=null;for(var n=0;n<r.length;n+=1){var e=r[n];e.f&w?ot(e):k(e)}}}function pn(t){for(var r=t.parent;r!==null;){if(!(r.f&w))return r;r=r.parent}return null}function kt(t){var r,n=a;K(pn(t));try{St(t),r=Ht(t)}finally{K(n)}return r}function Ot(t){var r=kt(t),n=(R||t.f&O)&&t.deps!==null?z:y;g(t,n),t.equals(r)||(t.v=r,t.wv=Ut())}function ot(t){St(t),Y(t,0),g(t,C),t.v=t.children=t.deps=t.ctx=t.reactions=null}function It(t){a===null&&o===null&&rn(),o!==null&&o.f&O&&nn(),it&&tn()}function hn(t,r){var n=r.last;n===null?r.last=r.first=t:(n.next=t,t.prev=n,r.last=t)}function M(t,r,n,e=!0){var l=(t&W)!==0,s=a,u={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:r,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(n){var i=N;try{ht(!0),X(u),u.f|=Jt}catch(c){throw k(u),c}finally{ht(i)}}else r!==null&&tt(u);var _=n&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&Et)===0;if(!_&&!l&&e&&(s!==null&&hn(u,s),o!==null&&o.f&w)){var p=o;(p.children??(p.children=[])).push(u)}return u}function pr(t){It();var r=a!==null&&(a.f&T)!==0&&f!==null&&!f.m;if(r){var n=f;(n.e??(n.e=[])).push({fn:t,effect:a,reaction:o})}else{var e=Nt(t);return e}}function hr(t){return It(),dn(t)}function dr(t){const r=M(W,t,!0);return(n={})=>new Promise(e=>{n.outro?En(r,()=>{k(r),e(void 0)}):(k(r),e(void 0))})}function Nt(t){return M(yt,t,!1)}function dn(t){return M(Z,t,!0)}function yr(t){return yn(t)}function yn(t,r=0){return M(Z|ut|r,t,!0)}function wr(t,r=!0){return M(Z|T,t,!0,r)}function Pt(t){var r=t.teardown;if(r!==null){const n=it,e=o;dt(!0),G(null);try{r.call(null)}finally{dt(n),G(e)}}}function bt(t){var r=t.deriveds;if(r!==null){t.deriveds=null;for(var n=0;n<r.length;n+=1)ot(r[n])}}function Ct(t,r=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var e=n.next;k(n,r),n=e}}function wn(t){for(var r=t.first;r!==null;){var n=r.next;r.f&T||k(r),r=n}}function k(t,r=!0){var n=!1;if((r||t.f&Qt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:I(e);e.remove(),e=s}n=!0}Ct(t,r&&!n),bt(t),Y(t,0),g(t,C);var u=t.transitions;if(u!==null)for(const _ of u)_.stop();Pt(t);var i=t.parent;i!==null&&i.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var r=t.parent,n=t.prev,e=t.next;n!==null&&(n.next=e),e!==null&&(e.prev=n),r!==null&&(r.first===t&&(r.first=e),r.last===t&&(r.last=n))}function En(t,r){var n=[];qt(t,n,!0),mn(n,()=>{k(t),r&&r()})}function mn(t,r){var n=t.length;if(n>0){var e=()=>--n||r();for(var l of t)l.out(e)}else r()}function qt(t,r,n){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const u of t.transitions)(u.is_global||n)&&r.push(u);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&wt)!==0||(e.f&T)!==0;qt(e,r,s?n:!1),e=l}}}function Er(t){Lt(t,!0)}function Lt(t,r){if(t.f&b){j(t)&&X(t),t.f^=b;for(var n=t.first;n!==null;){var e=n.next,l=(n.f&wt)!==0||(n.f&T)!==0;Lt(n,l?r:!1),n=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&s.in()}}let V=!1,lt=[];function Yt(){V=!1;const t=lt.slice();lt=[],zt(t)}function mr(t){V||(V=!0,queueMicrotask(Yt)),lt.push(t)}function Tn(){V&&Yt()}const Mt=0,gn=1;let U=!1,H=Mt,q=!1,L=null,N=!1,it=!1;function ht(t){N=t}function dt(t){it=t}let x=[],P=0;let o=null;function G(t){o=t}let a=null;function K(t){a=t}let m=null;function An(t){m=t}let h=null,d=0,A=null;function xn(t){A=t}let jt=1,$=0,R=!1,f=null;function Ut(){return++jt}function ft(){return!J||f!==null&&f.l===null}function j(t){var p;var r=t.f;if(r&D)return!0;if(r&z){var n=t.deps,e=(r&O)!==0;if(n!==null){var l,s,u=(r&B)!==0,i=e&&a!==null&&!R,_=n.length;if(u||i){for(l=0;l<_;l++)s=n[l],(u||!((p=s==null?void 0:s.reactions)!=null&&p.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);u&&(t.f^=B)}for(l=0;l<_;l++)if(s=n[l],j(s)&&Ot(s),s.wv>t.wv)return!0}(!e||a!==null&&!R)&&g(t,y)}return!1}function Rn(t,r){for(var n=r;n!==null;){if(n.f&nt)try{n.fn(t);return}catch{n.f^=nt}n=n.parent}throw U=!1,t}function Dn(t){return(t.f&C)===0&&(t.parent===null||(t.parent.f&nt)===0)}function Q(t,r,n,e){if(U){if(n===null&&(U=!1),Dn(r))throw t;return}n!==null&&(U=!0);{Rn(t,r);return}}function Ht(t){var _t;var r=h,n=d,e=A,l=o,s=R,u=m,i=f,_=t.f;h=null,d=0,A=null,o=_&(T|W)?null:t,R=!N&&(_&O)!==0,m=null,f=t.ctx,$++;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(Y(t,d),c!==null&&d>0)for(c.length=d+h.length,v=0;v<h.length;v++)c[d+v]=h[v];else t.deps=c=h;if(!R)for(v=d;v<c.length;v++)((_t=c[v]).reactions??(_t.reactions=[])).push(t)}else c!==null&&d<c.length&&(Y(t,d),c.length=d);return l!==null&&$++,p}finally{h=r,d=n,A=e,o=l,R=s,m=u,f=i}}function Sn(t,r){let n=r.reactions;if(n!==null){var e=$t.call(n,t);if(e!==-1){var l=n.length-1;l===0?n=r.reactions=null:(n[e]=n[l],n.pop())}}n===null&&r.f&w&&(h===null||!h.includes(r))&&(g(r,z),r.f&(O|B)||(r.f^=B),Y(r,0))}function Y(t,r){var n=t.deps;if(n!==null)for(var e=r;e<n.length;e++)Sn(t,n[e])}function X(t){var r=t.f;if(!(r&C)){g(t,y);var n=a,e=f;a=t;try{r&ut?wn(t):Ct(t),bt(t),Pt(t);var l=Ht(t);t.teardown=typeof l=="function"?l:null,t.wv=jt;var s=t.deps,u}catch(i){Q(i,t,n,e||t.ctx)}finally{a=n}}}function Bt(){if(P>1e3){P=0;try{en()}catch(t){if(L!==null)Q(t,L,null);else throw t}}P++}function Vt(t){var r=t.length;if(r!==0){Bt();var n=N;N=!0;try{for(var e=0;e<r;e++){var l=t[e];l.f&y||(l.f^=y);var s=[];Gt(l,s),kn(s)}}finally{N=n}}}function kn(t){var r=t.length;if(r!==0)for(var n=0;n<r;n++){var e=t[n];if(!(e.f&(C|b)))try{j(e)&&(X(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}catch(l){Q(l,e,null,e.ctx)}}}function On(){if(q=!1,P>1001)return;const t=x;x=[],Vt(t),q||(P=0,L=null)}function tt(t){H===Mt&&(q||(q=!0,queueMicrotask(On))),L=t;for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(n&(W|T)){if(!(n&y))return;r.f^=y}}x.push(r)}function Gt(t,r){var n=t.first,e=[];t:for(;n!==null;){var l=n.f,s=(l&T)!==0,u=s&&(l&y)!==0,i=n.next;if(!u&&!(l&b))if(l&Z){if(s)n.f^=y;else try{j(n)&&X(n)}catch(v){Q(v,n,null,n.ctx)}var _=n.first;if(_!==null){n=_;continue}}else l&yt&&e.push(n);if(i===null){let v=n.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){n=p;continue t}v=v.parent}}n=i}for(var c=0;c<e.length;c++)_=e[c],r.push(_),Gt(_,r)}function Kt(t){var r=H,n=x;try{Bt();const l=[];H=gn,x=l,q=!1,Vt(n);var e=t==null?void 0:t();return Tn(),(x.length>0||l.length>0)&&Kt(),P=0,L=null,e}finally{H=r,x=n}}async function Tr(){await Promise.resolve(),Kt()}function In(t){var c;var r=t.f,n=(r&w)!==0;if(n&&r&C){var e=kt(t);return ot(t),e}if(o!==null){m!==null&&m.includes(t)&&ln();var l=o.deps;t.rv<$&&(t.rv=$,h===null&&l!==null&&l[d]===t?d++:h===null?h=[t]:h.push(t),A!==null&&a!==null&&a.f&y&&!(a.f&T)&&A.includes(t)&&(g(a,D),tt(a)))}else if(n&&t.deps===null)for(var s=t,u=s.parent,i=s;u!==null;)if(u.f&w){var _=u;i=_,u=_.parent}else{var p=u;(c=p.deriveds)!=null&&c.includes(i)||(p.deriveds??(p.deriveds=[])).push(i);break}return n&&(s=t,j(s)&&Ot(s)),t.v}function gr(t){const r=o;try{return o=null,t()}finally{o=r}}const Nn=-7169;function g(t,r){t.f=t.f&Nn|r}function Ar(t,r=1){var n=In(t),e=r===1?n++:n--;return _n(t,n),e}function xr(t,r=!1,n){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!r&&(f.l={s:null,u:null,r1:[],r2:at(!1)})}function Rr(t){const r=f;if(r!==null){const u=r.e;if(u!==null){var n=a,e=o;r.e=null;try{for(var l=0;l<u.length;l++){var s=u[l];K(s.effect),G(s.reaction),Nt(s.fn)}}finally{K(n),G(e)}}f=r.p,r.m=!0}return{}}function Dr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)st(t);else if(!Array.isArray(t))for(let r in t){const n=t[r];typeof n=="object"&&n&&vt in n&&st(n)}}}function st(t,r=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!r.has(t)){r.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],r)}catch{}const n=Wt(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const e=Zt(n);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{on as $,K as A,T as B,Bn as C,vn as D,vr as E,Wn as F,Tt as G,$n as H,zn as I,rr as J,Jn as K,jn as L,Cn as M,G as N,o as O,Zn as P,or as Q,W as R,vt as S,et as T,tr as U,un as V,I as W,gt as X,er as Y,F as Z,E as _,lr as a,xt as a0,Hn as a1,cr as a2,bn as a3,dr as a4,rt as a5,wr as a6,xr as a7,Rr as a8,hr as a9,zt as aa,Mn as ab,Dr as ac,fr as ad,Qn as ae,Xn as af,Zt as ag,yn as ah,wt as ai,an as aj,ar as ak,Er as al,En as am,Nt as an,dn as ao,mr as ap,Kt as aq,Tr as ar,nr as as,Yn as at,Xt as au,f as b,ir as c,gr as d,Kn as e,qn as f,at as g,S as h,Vn as i,_n as j,ct as k,J as l,In as m,ur as n,Fn as o,a as p,Gn as q,sr as r,_r as s,yr as t,pr as u,Wt as v,Pn as w,Ar as x,Ln as y,Un as z};
