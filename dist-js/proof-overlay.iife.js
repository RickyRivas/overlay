var ProofOverlay=function(w){"use strict";var Lt=Object.defineProperty;var Bt=(w,u,P)=>u in w?Lt(w,u,{enumerable:!0,configurable:!0,writable:!0,value:P}):w[u]=P;var m=(w,u,P)=>(Bt(w,typeof u!="symbol"?u+"":u,P),P);function u(){}function P(e){return e()}function W(){return Object.create(null)}function B(e){e.forEach(P)}function G(e){return typeof e=="function"}function ct(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let I;function X(e,t){return e===t?!0:(I||(I=document.createElement("a")),I.href=t,e===I.href)}function lt(e){return Object.keys(e).length===0}function p(e,t){e.appendChild(t)}function ft(e,t,o){const s=at(e);if(!s.getElementById(t)){const i=g("style");i.id=t,i.textContent=o,ut(s,i)}}function at(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function ut(e,t){return p(e.head||e,t),t.sheet}function S(e,t,o){e.insertBefore(t,o||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function D(){return x(" ")}function C(e,t,o,s){return e.addEventListener(t,o,s),()=>e.removeEventListener(t,o,s)}function $(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function dt(e){return Array.from(e.childNodes)}function N(e,t,o,s){o==null?e.style.removeProperty(t):e.style.setProperty(t,o,s?"important":"")}function $t(e){const t={};return e.childNodes.forEach(o=>{t[o.slot||"default"]=!0}),t}let F;function q(e){F=e}const j=[],Z=[];let A=[];const tt=[],ht=Promise.resolve();let Q=!1;function pt(){Q||(Q=!0,ht.then(Y))}function R(e){A.push(e)}const T=new Set;let L=0;function Y(){if(L!==0)return;const e=F;do{try{for(;L<j.length;){const t=j[L];L++,q(t),bt(t.$$)}}catch(t){throw j.length=0,L=0,t}for(q(null),j.length=0,L=0;Z.length;)Z.pop()();for(let t=0;t<A.length;t+=1){const o=A[t];T.has(o)||(T.add(o),o())}A.length=0}while(j.length);for(;tt.length;)tt.pop()();Q=!1,T.clear(),q(e)}function bt(e){if(e.fragment!==null){e.update(),B(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(R)}}function mt(e){const t=[],o=[];A.forEach(s=>e.indexOf(s)===-1?t.push(s):o.push(s)),o.forEach(s=>s()),A=t}const gt=new Set;function _t(e,t){e&&e.i&&(gt.delete(e),e.i(t))}function yt(e,t,o){const{fragment:s,after_update:i}=e.$$;s&&s.m(t,o),R(()=>{const n=e.$$.on_mount.map(P).filter(G);e.$$.on_destroy?e.$$.on_destroy.push(...n):B(n),e.$$.on_mount=[]}),i.forEach(R)}function vt(e,t){const o=e.$$;o.fragment!==null&&(mt(o.after_update),B(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function wt(e,t){e.$$.dirty[0]===-1&&(j.push(e),pt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function kt(e,t,o,s,i,n,c=null,r=[-1]){const f=F;q(e);const l=e.$$={fragment:null,ctx:[],props:n,update:u,not_equal:i,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:W(),dirty:r,skip_bound:!1,root:t.target||f.$$.root};c&&c(l.root);let k=!1;if(l.ctx=o?o(e,t.props||{},(d,_,...b)=>{const O=b.length?b[0]:_;return l.ctx&&i(l.ctx[d],l.ctx[d]=O)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](O),k&&wt(e,d)),_}):[],l.update(),k=!0,B(l.before_update),l.fragment=s?s(l.ctx):!1,t.target){if(t.hydrate){const d=dt(t.target);l.fragment&&l.fragment.l(d),d.forEach(E)}else l.fragment&&l.fragment.c();t.intro&&_t(e.$$.fragment),yt(e,t.target,t.anchor),Y()}q(f)}let et;typeof HTMLElement=="function"&&(et=class extends HTMLElement{constructor(t,o,s){super();m(this,"$$ctor");m(this,"$$s");m(this,"$$c");m(this,"$$cn",!1);m(this,"$$d",{});m(this,"$$r",!1);m(this,"$$p_d",{});m(this,"$$l",{});m(this,"$$l_u",new Map);this.$$ctor=t,this.$$s=o,s&&this.attachShadow({mode:"open"})}addEventListener(t,o,s){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(o),this.$$c){const i=this.$$c.$on(t,o);this.$$l_u.set(o,i)}super.addEventListener(t,o,s)}removeEventListener(t,o,s){if(super.removeEventListener(t,o,s),this.$$c){const i=this.$$l_u.get(o);i&&(i(),this.$$l_u.delete(o))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(n){return()=>{let c;return{c:function(){c=g("slot"),n!=="default"&&$(c,"name",n)},m:function(l,k){S(l,c,k)},d:function(l){l&&E(c)}}}};if(await Promise.resolve(),!this.$$cn)return;const o={},s=$t(this);for(const n of this.$$s)n in s&&(o[n]=[t(n)]);for(const n of this.attributes){const c=this.$$g_p(n.name);c in this.$$d||(this.$$d[c]=J(c,n.value,this.$$p_d,"toProp"))}for(const n in this.$$p_d)!(n in this.$$d)&&this[n]!==void 0&&(this.$$d[n]=this[n],delete this[n]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:o,$$scope:{ctx:[]}}});const i=()=>{this.$$r=!0;for(const n in this.$$p_d)if(this.$$d[n]=this.$$c.$$.ctx[this.$$c.$$.props[n]],this.$$p_d[n].reflect){const c=J(n,this.$$d[n],this.$$p_d,"toAttribute");c==null?this.removeAttribute(this.$$p_d[n].attribute||n):this.setAttribute(this.$$p_d[n].attribute||n,c)}this.$$r=!1};this.$$c.$$.after_update.push(i),i();for(const n in this.$$l)for(const c of this.$$l[n]){const r=this.$$c.$on(n,c);this.$$l_u.set(c,r)}this.$$l={}}}attributeChangedCallback(t,o,s){var i;this.$$r||(t=this.$$g_p(t),this.$$d[t]=J(t,s,this.$$p_d,"toProp"),(i=this.$$c)==null||i.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(o=>this.$$p_d[o].attribute===t||!this.$$p_d[o].attribute&&o.toLowerCase()===t)||t}});function J(e,t,o,s){var n;const i=(n=o[e])==null?void 0:n.type;if(t=i==="Boolean"&&typeof t!="boolean"?t!=null:t,!s||!o[e])return t;if(s==="toAttribute")switch(i){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(i){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function Pt(e,t,o,s,i,n){let c=class extends et{constructor(){super(e,o,i),this.$$p_d=t}static get observedAttributes(){return Object.keys(t).map(r=>(t[r].attribute||r).toLowerCase())}};return Object.keys(t).forEach(r=>{Object.defineProperty(c.prototype,r,{get(){return this.$$c&&r in this.$$c?this.$$c[r]:this.$$d[r]},set(f){var l;f=J(r,f,t),this.$$d[r]=f,(l=this.$$c)==null||l.$set({[r]:f})}})}),s.forEach(r=>{Object.defineProperty(c.prototype,r,{get(){var f;return(f=this.$$c)==null?void 0:f[r]}})}),n&&(c=n(c)),e.element=c,c}class Et{constructor(){m(this,"$$");m(this,"$$set")}$destroy(){vt(this,1),this.$destroy=u}$on(t,o){if(!G(o))return u;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(o),()=>{const i=s.indexOf(o);i!==-1&&s.splice(i,1)}}$set(t){this.$$set&&!lt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ot="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ot);function St(e){ft(e,"svelte-b27oc2","@font-face{font-family:'Kode Mono';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/kodemono/v1/A2BLn5pb0QgtVEPFnlYkkaoBgw4qv9odq5my9Do.ttf) format('truetype')}@font-face{font-family:'Kode Mono';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/kodemono/v1/A2BLn5pb0QgtVEPFnlYkkaoBgw4qv9odq6uy9Do.ttf) format('truetype')}@font-face{font-family:'Kode Mono';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/kodemono/v1/A2BLn5pb0QgtVEPFnlYkkaoBgw4qv9odq0e19Do.ttf) format('truetype')}@font-face{font-family:'Kode Mono';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/kodemono/v1/A2BLn5pb0QgtVEPFnlYkkaoBgw4qv9odq3619Do.ttf) format('truetype')}#proof-img-parent.svelte-b27oc2.svelte-b27oc2{position:relative;display:block}#proof-img-parent.svelte-b27oc2 img.svelte-b27oc2{position:absolute;top:0;left:50%;transform:translate3d(-50%, 0, 0);z-index:9998;pointer-events:none}#proof-controls.svelte-b27oc2.svelte-b27oc2{display:flex;justify-content:center;align-items:center;position:fixed;padding:0;gap:5px;padding:5px;z-index:9999;left:50%;transform:translate3d(-50%, 0, 0);bottom:20px;background-color:#222222cc}button.svelte-b27oc2.svelte-b27oc2{display:inline-block;vertical-align:top;font-size:15px;border:0;padding:0;background:#3e3e3e;color:#d3d3d3;text-transform:capitalize;line-height:30px;border:1px solid #4e4e4e;transition:border-color 0.33s ease;font-family:'Kode Mono', monospace;font-optical-sizing:auto;font-weight:400;font-style:normal}button.svelte-b27oc2.svelte-b27oc2:hover:not(:disabled){border-color:white}button.svelte-b27oc2.svelte-b27oc2:disabled{background-color:#ccc;color:#3e3e3e}.opacity-control.svelte-b27oc2.svelte-b27oc2{border-radius:50%;width:32px}.toggle.svelte-b27oc2.svelte-b27oc2{width:9em}")}function ot(e){let t,o,s;return{c(){t=g("div"),o=g("img"),X(o.src,s=e[2].activePath)||$(o,"src",s),$(o,"alt","Proof Overlay"),N(o,"width",nt+"px"),N(o,"min-width",nt+"px"),N(o,"height",e[0]+"px"),N(o,"opacity",e[2].opacity/10),$(o,"class","svelte-b27oc2"),$(t,"id","proof-img-parent"),$(t,"class","svelte-b27oc2")},m(i,n){S(i,t,n),p(t,o)},p(i,n){n&4&&!X(o.src,s=i[2].activePath)&&$(o,"src",s),n&1&&N(o,"height",i[0]+"px"),n&4&&N(o,"opacity",i[2].opacity/10)},d(i){i&&E(t)}}}function xt(e){let t,o,s;return{c(){t=g("button"),t.textContent="hide proof",$(t,"class","toggle svelte-b27oc2")},m(i,n){S(i,t,n),o||(s=C(t,"click",e[5]),o=!0)},p:u,d(i){i&&E(t),o=!1,s()}}}function Nt(e){let t,o,s;return{c(){t=g("button"),t.textContent="show proof",$(t,"class","toggle svelte-b27oc2")},m(i,n){S(i,t,n),o||(s=C(t,"click",e[4]),o=!0)},p:u,d(i){i&&E(t),o=!1,s()}}}function jt(e){let t,o,s,i,n,c,r,f,l,k,d,_,b,O,H,z,U,it,h=e[1]&&ot(e);function rt(a,v){return a[1]?xt:Nt}let K=rt(e),y=K(e);return{c(){h&&h.c(),t=D(),o=g("div"),y.c(),s=D(),i=g("button"),n=x("switch proofs"),r=D(),f=g("button"),l=x("-"),k=x(V),_=D(),b=g("button"),O=x("+"),H=x(V),$(i,"class","toggle svelte-b27oc2"),i.disabled=c=!e[1],$(f,"class","opacity-control svelte-b27oc2"),f.disabled=d=!e[1]||e[2].opacity==2,$(b,"class","opacity-control svelte-b27oc2"),b.disabled=z=!e[1]||e[2].opacity==10,$(o,"id","proof-controls"),$(o,"class","svelte-b27oc2")},m(a,v){h&&h.m(a,v),S(a,t,v),S(a,o,v),y.m(o,null),p(o,s),p(o,i),p(i,n),p(o,r),p(o,f),p(f,l),p(f,k),p(o,_),p(o,b),p(b,O),p(b,H),U||(it=[C(i,"click",e[3]),C(f,"click",e[7]),C(b,"click",e[6])],U=!0)},p(a,[v]){a[1]?h?h.p(a,v):(h=ot(a),h.c(),h.m(t.parentNode,t)):h&&(h.d(1),h=null),K===(K=rt(a))&&y?y.p(a,v):(y.d(1),y=K(a),y&&(y.c(),y.m(o,s))),v&2&&c!==(c=!a[1])&&(i.disabled=c),v&6&&d!==(d=!a[1]||a[2].opacity==2)&&(f.disabled=d),v&6&&z!==(z=!a[1]||a[2].opacity==10)&&(b.disabled=z)},i:u,o:u,d(a){a&&(E(t),E(o)),h&&h.d(a),y.d(),U=!1,B(it)}}}let nt="2000";const V=2,M="savedState";function At(e,t,o){let{proofHeight:s="4545"}=t,i;i="/proofs";const n={index:`${i}/index.jpg`,sub:`${i}/sub.jpg`};let c=!1,r={activePath:n.index,opacity:6};JSON.parse(localStorage.getItem(M))?(r=JSON.parse(localStorage.getItem(M)),c=!0):console.log("No currently stored data in local storage."),console.log("ProofOverlay.js initiated.");function l(){r.activePath===n.index?(o(2,r.activePath=n.sub,r),_()):(o(2,r.activePath=n.index,r),_())}function k(){o(1,c=!c),localStorage.setItem(M,JSON.stringify(r))}function d(){o(1,c=!c),localStorage.removeItem(M)}function _(){localStorage.setItem(M,JSON.stringify(r))}function b(){r.opacity!==10&&(o(2,r.opacity=r.opacity+V,r),_())}function O(){r.opacity<=2||(o(2,r.opacity=r.opacity-V,r),_())}return e.$$set=H=>{"proofHeight"in H&&o(0,s=H.proofHeight)},[s,c,r,l,k,d,b,O]}class st extends Et{constructor(t){super(),kt(this,t,At,jt,ct,{proofHeight:0},St)}get proofHeight(){return this.$$.ctx[0]}set proofHeight(t){this.$$set({proofHeight:t}),Y()}}return customElements.define("proof-overlay",Pt(st,{proofHeight:{}},[],[],!0)),w.ProofOverlay=st,Object.defineProperty(w,Symbol.toStringTag,{value:"Module"}),w}({});
