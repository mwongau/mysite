import{a as d,t as f}from"../chunks/disclose-version.BGUbwQya.js";import"../chunks/legacy.BiyLhFJj.js";import{t as b,j as h,k as s,m as y,s as l,i as m,r as v}from"../chunks/runtime.DoANUbWt.js";import"../chunks/paths.9YTEemOc.js";import{d as _,s as S}from"../chunks/render.Dn8XIaQ_.js";import{s as u}from"../chunks/attributes.D8RXHXib.js";function j(i,t,a){h(t,s(t)+1),s(t)>a.length-1&&h(t,0)}var x=f('<div><h1 class="svelte-1v5fv8z">Photos</h1> <button><b>Next photo</b></button> <br> <h4> </h4> <img class="svelte-1v5fv8z"></div>');function k(i){const t=["Australian Catholic University, Strathfield Campus, NSW, Australia","University of Technology Sydney, Building 5","Homebush Public School, Homebush, NSW, Australia"],a=["acu","uts","hps"],n=["/mysite/acupy.jpg","/mysite/uts-bldg5.jpg","/mysite/hps.jpg"];let e=y(0);var o=x(),c=l(m(o),2);c.__click=[j,e,n];var r=l(c,4),g=m(r);v(r);var p=l(r,2);v(o),b(()=>{S(g,`${s(e)+1}: ${t[s(e)]??""}`),u(p,"src",n[s(e)]),u(p,"alt",a[s(e)])}),d(i,o)}_(["click"]);var A=f("<div><!></div>");function U(i){var t=A(),a=m(t);k(a),v(t),d(i,t)}export{U as component};
