var ProofOverlay=function(A){"use strict";var ke=Object.defineProperty;var Ce=(A,w,J)=>w in A?ke(A,w,{enumerable:!0,configurable:!0,writable:!0,value:J}):A[w]=J;var E=(A,w,J)=>(Ce(A,typeof w!="symbol"?w+"":w,J),J);function w(){}function J(e){return e()}function jt(){return Object.create(null)}function G(e){e.forEach(J)}function xt(e){return typeof e=="function"}function Yt(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let it;function Nt(e,t){return e===t?!0:(it||(it=document.createElement("a")),it.href=t,e===it.href)}function Gt(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function Ut(e,t,o){const s=Wt(e);if(!s.getElementById(t)){const i=v("style");i.id=t,i.textContent=o,Xt(s,i)}}function Wt(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Xt(e,t){return c(e.head||e,t),t.sheet}function B(e,t,o){e.insertBefore(t,o||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function v(e){return document.createElement(e)}function $(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function M(e){return document.createTextNode(e)}function _(){return M(" ")}function y(e,t,o,s){return e.addEventListener(t,o,s),()=>e.removeEventListener(t,o,s)}function n(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function te(e){return Array.from(e.childNodes)}function ee(e,t){t=""+t,e.data!==t&&(e.data=t)}function T(e,t,o,s){o==null?e.style.removeProperty(t):e.style.setProperty(t,o,s?"important":"")}function oe(e){const t={};return e.childNodes.forEach(o=>{t[o.slot||"default"]=!0}),t}let Ct;function ot(e){Ct=e}const U=[],At=[];let W=[];const Mt=[],ne=Promise.resolve();let Pt=!1;function se(){Pt||(Pt=!0,ne.then(Bt))}function Et(e){W.push(e)}const Lt=new Set;let X=0;function Bt(){if(X!==0)return;const e=Ct;do{try{for(;X<U.length;){const t=U[X];X++,ot(t),le(t.$$)}}catch(t){throw U.length=0,X=0,t}for(ot(null),U.length=0,X=0;At.length;)At.pop()();for(let t=0;t<W.length;t+=1){const o=W[t];Lt.has(o)||(Lt.add(o),o())}W.length=0}while(U.length);for(;Mt.length;)Mt.pop()();Pt=!1,Lt.clear(),ot(e)}function le(e){if(e.fragment!==null){e.update(),G(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Et)}}function ie(e){const t=[],o=[];W.forEach(s=>e.indexOf(s)===-1?t.push(s):o.push(s)),o.forEach(s=>s()),W=t}const re=new Set;function ce(e,t){e&&e.i&&(re.delete(e),e.i(t))}function ae(e,t,o){const{fragment:s,after_update:i}=e.$$;s&&s.m(t,o),Et(()=>{const l=e.$$.on_mount.map(J).filter(xt);e.$$.on_destroy?e.$$.on_destroy.push(...l):G(l),e.$$.on_mount=[]}),i.forEach(Et)}function fe(e,t){const o=e.$$;o.fragment!==null&&(ie(o.after_update),G(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function ue(e,t){e.$$.dirty[0]===-1&&(U.push(e),se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function de(e,t,o,s,i,l,u=null,r=[-1]){const d=Ct;ot(e);const a=e.$$={fragment:null,ctx:[],props:l,update:w,not_equal:i,bound:jt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:jt(),dirty:r,skip_bound:!1,root:t.target||d.$$.root};u&&u(a.root);let h=!1;if(a.ctx=o?o(e,t.props||{},(g,p,...b)=>{const z=b.length?b[0]:p;return a.ctx&&i(a.ctx[g],a.ctx[g]=z)&&(!a.skip_bound&&a.bound[g]&&a.bound[g](z),h&&ue(e,g)),p}):[],a.update(),h=!0,G(a.before_update),a.fragment=s?s(a.ctx):!1,t.target){if(t.hydrate){const g=te(t.target);a.fragment&&a.fragment.l(g),g.forEach(L)}else a.fragment&&a.fragment.c();t.intro&&ce(e.$$.fragment),ae(e,t.target,t.anchor),Bt()}ot(d)}let Ht;typeof HTMLElement=="function"&&(Ht=class extends HTMLElement{constructor(t,o,s){super();E(this,"$$ctor");E(this,"$$s");E(this,"$$c");E(this,"$$cn",!1);E(this,"$$d",{});E(this,"$$r",!1);E(this,"$$p_d",{});E(this,"$$l",{});E(this,"$$l_u",new Map);this.$$ctor=t,this.$$s=o,s&&this.attachShadow({mode:"open"})}addEventListener(t,o,s){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(o),this.$$c){const i=this.$$c.$on(t,o);this.$$l_u.set(o,i)}super.addEventListener(t,o,s)}removeEventListener(t,o,s){if(super.removeEventListener(t,o,s),this.$$c){const i=this.$$l_u.get(o);i&&(i(),this.$$l_u.delete(o))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(l){return()=>{let u;return{c:function(){u=v("slot"),l!=="default"&&n(u,"name",l)},m:function(a,h){B(a,u,h)},d:function(a){a&&L(u)}}}};if(await Promise.resolve(),!this.$$cn)return;const o={},s=oe(this);for(const l of this.$$s)l in s&&(o[l]=[t(l)]);for(const l of this.attributes){const u=this.$$g_p(l.name);u in this.$$d||(this.$$d[u]=rt(u,l.value,this.$$p_d,"toProp"))}for(const l in this.$$p_d)!(l in this.$$d)&&this[l]!==void 0&&(this.$$d[l]=this[l],delete this[l]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:o,$$scope:{ctx:[]}}});const i=()=>{this.$$r=!0;for(const l in this.$$p_d)if(this.$$d[l]=this.$$c.$$.ctx[this.$$c.$$.props[l]],this.$$p_d[l].reflect){const u=rt(l,this.$$d[l],this.$$p_d,"toAttribute");u==null?this.removeAttribute(this.$$p_d[l].attribute||l):this.setAttribute(this.$$p_d[l].attribute||l,u)}this.$$r=!1};this.$$c.$$.after_update.push(i),i();for(const l in this.$$l)for(const u of this.$$l[l]){const r=this.$$c.$on(l,u);this.$$l_u.set(u,r)}this.$$l={}}}attributeChangedCallback(t,o,s){var i;this.$$r||(t=this.$$g_p(t),this.$$d[t]=rt(t,s,this.$$p_d,"toProp"),(i=this.$$c)==null||i.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(o=>this.$$p_d[o].attribute===t||!this.$$p_d[o].attribute&&o.toLowerCase()===t)||t}});function rt(e,t,o,s){var l;const i=(l=o[e])==null?void 0:l.type;if(t=i==="Boolean"&&typeof t!="boolean"?t!=null:t,!s||!o[e])return t;if(s==="toAttribute")switch(i){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(i){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function pe(e,t,o,s,i,l){let u=class extends Ht{constructor(){super(e,o,i),this.$$p_d=t}static get observedAttributes(){return Object.keys(t).map(r=>(t[r].attribute||r).toLowerCase())}};return Object.keys(t).forEach(r=>{Object.defineProperty(u.prototype,r,{get(){return this.$$c&&r in this.$$c?this.$$c[r]:this.$$d[r]},set(d){var a;d=rt(r,d,t),this.$$d[r]=d,(a=this.$$c)==null||a.$set({[r]:d})}})}),s.forEach(r=>{Object.defineProperty(u.prototype,r,{get(){var d;return(d=this.$$c)==null?void 0:d[r]}})}),l&&(u=l(u)),e.element=u,u}class ve{constructor(){E(this,"$$");E(this,"$$set")}$destroy(){fe(this,1),this.$destroy=w}$on(t,o){if(!xt(o))return w;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(o),()=>{const i=s.indexOf(o);i!==-1&&s.splice(i,1)}}$set(t){this.$$set&&!Gt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const me="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(me);function he(e){Ut(e,"svelte-qw5vmn","@font-face{font-family:'Kode Mono';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/kodemono/v1/A2BLn5pb0QgtVEPFnlYkkaoBgw4qv9odq5my9Do.ttf) format('truetype')}@font-face{font-family:'Kode Mono';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/kodemono/v1/A2BLn5pb0QgtVEPFnlYkkaoBgw4qv9odq6uy9Do.ttf) format('truetype')}@font-face{font-family:'Kode Mono';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/kodemono/v1/A2BLn5pb0QgtVEPFnlYkkaoBgw4qv9odq0e19Do.ttf) format('truetype')}@font-face{font-family:'Kode Mono';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/kodemono/v1/A2BLn5pb0QgtVEPFnlYkkaoBgw4qv9odq3619Do.ttf) format('truetype')}#proof-img-parent.svelte-qw5vmn.svelte-qw5vmn.svelte-qw5vmn{position:relative;display:block}#proof-img-parent.svelte-qw5vmn img.svelte-qw5vmn.svelte-qw5vmn{position:absolute;top:0;left:50%;transform:translate3d(-50%, 0, 0);z-index:9998;pointer-events:none}#proof-controls.svelte-qw5vmn.svelte-qw5vmn.svelte-qw5vmn{display:flex;justify-content:center;align-items:center;position:fixed;gap:5px;padding:5px;z-index:9999;background-color:#222222cc;transition:all 0.33s ease}#proof-controls.fixed-bottom.svelte-qw5vmn.svelte-qw5vmn.svelte-qw5vmn{left:50%;transform:translate3d(-50%, 0, 0);bottom:20px}#proof-controls.fixed-right.svelte-qw5vmn.svelte-qw5vmn.svelte-qw5vmn{flex-direction:column;top:50%;transform:translate3d(0, -50%, 0);right:20px}#proof-controls.fixed-left.svelte-qw5vmn.svelte-qw5vmn.svelte-qw5vmn{flex-direction:column;top:50%;transform:translate3d(0, -50%, 0);left:20px}button.svelte-qw5vmn.svelte-qw5vmn.svelte-qw5vmn{display:inline-block;vertical-align:top;font-size:15px;border:0;padding:0;background:#3e3e3e;color:#d3d3d3;text-transform:capitalize;line-height:30px;border:1px solid #4e4e4e;transition:border-color 0.33s ease;font-family:'Kode Mono', monospace;font-optical-sizing:auto;font-weight:400;font-style:normal}button.svelte-qw5vmn.svelte-qw5vmn.svelte-qw5vmn:hover:not(:disabled){border-color:white}button.svelte-qw5vmn.svelte-qw5vmn.svelte-qw5vmn:disabled{background-color:#ccc;color:#3e3e3e}.toggles.svelte-qw5vmn.svelte-qw5vmn.svelte-qw5vmn{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:6px}.opacity-controls.svelte-qw5vmn.svelte-qw5vmn.svelte-qw5vmn{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;max-width:3.5em;gap:5px;background:#3e3e3e;border:1px solid #4e4e4e}.opacity-control.svelte-qw5vmn.svelte-qw5vmn.svelte-qw5vmn{border-radius:50%;width:32px}.position-control.svelte-qw5vmn.svelte-qw5vmn.svelte-qw5vmn{border-radius:50%;width:32px;height:32px;display:flex;justify-content:center;align-items:center}.position-control.svelte-qw5vmn svg.svelte-qw5vmn.svelte-qw5vmn{display:block;width:50%;height:auto}.position-options.svelte-qw5vmn.svelte-qw5vmn.svelte-qw5vmn{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:6px;background-color:#222222cc;position:absolute;left:50%;transform:translate3d(-50%, 0, 0);padding:0.25em;width:100%;max-width:4em;transition:opacity 0.33s ease, bottom 0.33s ease;pointer-events:none;bottom:-100%;opacity:0}.position-options.svelte-qw5vmn button.svelte-qw5vmn.svelte-qw5vmn{border-radius:50%;width:32px;height:32px;display:flex;justify-content:center;align-items:center}.position-options.svelte-qw5vmn button.svelte-qw5vmn svg.svelte-qw5vmn{display:block;width:50%;height:auto}.position-options.active.svelte-qw5vmn.svelte-qw5vmn.svelte-qw5vmn{bottom:calc(100% + 1em);opacity:1;pointer-events:all}.toggle.svelte-qw5vmn.svelte-qw5vmn.svelte-qw5vmn{width:9em}.eyedropper.svelte-qw5vmn.svelte-qw5vmn.svelte-qw5vmn{border-radius:50%;width:32px;height:32px;display:flex;justify-content:center;align-items:center}.eyedropper.svelte-qw5vmn svg.svelte-qw5vmn.svelte-qw5vmn{display:block;width:50%;height:auto}.eyedropper-container.svelte-qw5vmn.svelte-qw5vmn.svelte-qw5vmn{display:block;position:absolute;left:50%;transform:translateX(-50%);bottom:calc(100% + 0.5em);display:flex;justify-content:center;align-items:center;border:1px solid #fff;transition:border-color 0.33s ease;background-color:#3e3e3e;padding:5px}.eyedropper-container.svelte-qw5vmn button.svelte-qw5vmn.svelte-qw5vmn{padding:0 0.5em;text-transform:none;border:0}.eyedropper-container.svelte-qw5vmn .preview.svelte-qw5vmn.svelte-qw5vmn{width:32px;height:32px;display:block;border-radius:50%}.eyedropper-container.success.svelte-qw5vmn.svelte-qw5vmn.svelte-qw5vmn{border-color:#d7ff4f}")}function Dt(e){let t,o,s;return{c(){t=v("div"),o=v("img"),Nt(o.src,s=e[2].activePath)||n(o,"src",s),n(o,"alt","Proof Overlay"),T(o,"width",Vt+"px"),T(o,"min-width",Vt+"px"),T(o,"height",e[0]+"px"),T(o,"opacity",e[2].opacity/10),n(o,"class","svelte-qw5vmn"),n(t,"id","proof-img-parent"),n(t,"class","svelte-qw5vmn")},m(i,l){B(i,t,l),c(t,o)},p(i,l){l&4&&!Nt(o.src,s=i[2].activePath)&&n(o,"src",s),l&1&&T(o,"height",i[0]+"px"),l&4&&T(o,"opacity",i[2].opacity/10)},d(i){i&&L(t)}}}function we(e){let t,o,s;return{c(){t=v("button"),t.textContent="hide proof",n(t,"class","toggle svelte-qw5vmn")},m(i,l){B(i,t,l),o||(s=y(t,"click",e[8]),o=!0)},p:w,d(i){i&&L(t),o=!1,s()}}}function ge(e){let t,o,s;return{c(){t=v("button"),t.textContent="show proof",n(t,"class","toggle svelte-qw5vmn")},m(i,l){B(i,t,l),o||(s=y(t,"click",e[7]),o=!0)},p:w,d(i){i&&L(t),o=!1,s()}}}function be(e){let t;return{c(){t=$("path"),n(t,"d",e[15].right),n(t,"fill","currentcolor")},m(o,s){B(o,t,s)},p:w,d(o){o&&L(t)}}}function $e(e){let t;return{c(){t=$("path"),n(t,"d",e[15].left),n(t,"fill","currentcolor")},m(o,s){B(o,t,s)},p:w,d(o){o&&L(t)}}}function _e(e){let t;return{c(){t=$("path"),n(t,"d",e[15].bottom),n(t,"fill","currentcolor")},m(o,s){B(o,t,s)},p:w,d(o){o&&L(t)}}}function Rt(e){let t,o,s,i,l,u,r,d,a,h,g;return{c(){t=v("div"),o=$("svg"),s=$("path"),i=_(),l=v("button"),u=M(e[4]),r=_(),d=v("div"),n(s,"fill","#861D1F"),n(s,"d","M16 32a16 16 0 1 0 0-32 16 16 0 0 0 0 32Zm-5.063-21.063a1.494 1.494 0 0 1 2.12 0l2.937 2.938 2.937-2.938a1.494 1.494 0 0 1 2.119 0 1.5 1.5 0 0 1 0 2.12l-2.938 2.937 2.938 2.937a1.494 1.494 0 0 1 0 2.119 1.5 1.5 0 0 1-2.119 0l-2.937-2.938-2.938 2.938a1.494 1.494 0 0 1-2.118 0 1.5 1.5 0 0 1 0-2.119l2.937-2.937-2.938-2.938a1.494 1.494 0 0 1 0-2.118Z"),n(o,"xmlns","http://www.w3.org/2000/svg"),n(o,"width","32"),n(o,"height","32"),n(o,"fill","none"),n(o,"viewBox","0 0 32 32"),n(o,"aria-hidden","true"),n(o,"role","img"),n(l,"class","svelte-qw5vmn"),n(d,"class","preview svelte-qw5vmn"),T(d,"background-color",e[4]),n(t,"class",a="eyedropper-container "+(e[5]?"success":"")+" svelte-qw5vmn")},m(p,b){B(p,t,b),c(t,o),c(o,s),c(t,i),c(t,l),c(l,u),c(t,r),c(t,d),h||(g=[y(o,"click",e[18]),y(l,"click",e[17])],h=!0)},p(p,b){b&16&&ee(u,p[4]),b&16&&T(d,"background-color",p[4]),b&32&&a!==(a="eyedropper-container "+(p[5]?"success":"")+" svelte-qw5vmn")&&n(t,"class",a)},d(p){p&&L(t),h=!1,G(g)}}}function ye(e){let t,o,s,i,l,u,r,d,a,h,g,p,b,z,O,at,tt,H,ft,C,ut,S,dt,D,pt,et,vt,P,j,Zt,st,R,lt,Ft,Ot,V,K,I,mt,ht,Jt,Q,Z,wt,gt,Tt,Y,F,bt,$t,_t,yt,St,zt,q=e[1]&&Dt(e);function Kt(f,m){return f[1]?we:ge}let qt=Kt(e),x=qt(e);function Qt(f,m){return f[2].position=="B"?_e:f[2].position=="L"?$e:be}let kt=Qt(e),N=kt(e),k=e[4]!="#fff"&&Rt(e);return{c(){q&&q.c(),t=_(),o=v("div"),s=v("div"),x.c(),i=_(),l=v("button"),u=M("switch proofs"),d=_(),a=v("div"),h=v("button"),g=M("-"),p=M(ct),z=_(),O=v("button"),at=M("+"),tt=M(ct),ft=_(),C=v("button"),ut=M("L"),dt=_(),D=v("button"),pt=M("F"),vt=_(),P=v("button"),j=$("svg"),N.c(),Zt=_(),st=v("button"),R=$("svg"),lt=$("path"),Ft=_(),k&&k.c(),Ot=_(),V=v("div"),K=v("button"),I=$("svg"),mt=$("path"),Jt=_(),Q=v("button"),Z=$("svg"),wt=$("path"),Tt=_(),Y=v("button"),F=$("svg"),bt=$("path"),n(l,"class","toggle svelte-qw5vmn"),l.disabled=r=!e[1],n(s,"class","toggles svelte-qw5vmn"),n(h,"class","opacity-control svelte-qw5vmn"),h.disabled=b=!e[1]||e[2].opacity==2,n(O,"class","opacity-control svelte-qw5vmn"),O.disabled=H=!e[1]||e[2].opacity==10,n(C,"class","opacity-control svelte-qw5vmn"),C.disabled=S=!e[1]||e[2].opacity==2,n(D,"class","opacity-control svelte-qw5vmn"),D.disabled=et=!e[1]||e[2].opacity==10,n(a,"class","opacity-controls svelte-qw5vmn"),n(j,"width","25"),n(j,"height","25"),n(j,"viewBox","0 0 25 25"),n(j,"fill","none"),n(j,"xmlns","http://www.w3.org/2000/svg"),n(j,"class","svelte-qw5vmn"),n(P,"class","position-control svelte-qw5vmn"),n(lt,"fill",e[4]),n(lt,"d","M25 4.184A4.189 4.189 0 0 0 20.816 0a4.155 4.155 0 0 0-2.958 1.226L13.92 5.162l-.45-.45a.568.568 0 0 0-.804 0l-2.272 2.273a.568.568 0 0 0 0 .803l.734.735-8.023 8.023a2.82 2.82 0 0 0-.832 2.01 3.82 3.82 0 0 1-.643 2.123L.095 22.98a.568.568 0 0 0 .071.717l1.137 1.137a.567.567 0 0 0 .717.07l2.401-1.6a3.415 3.415 0 0 1 1.903-.577c.78 0 1.53-.323 2.062-.886 1.041-1.107 7.29-7.213 8.083-7.978l.743.743a.566.566 0 0 0 .803 0l2.273-2.272a.568.568 0 0 0 0-.804l-.45-.45 3.937-3.937A4.156 4.156 0 0 0 25 4.184ZM11.091 15.91H6.956l5.78-5.78 2.125 2.127c-.936.904-2.264 2.19-3.77 3.653Z"),n(R,"xmlns","http://www.w3.org/2000/svg"),n(R,"width","25"),n(R,"height","25"),n(R,"fill","none"),n(R,"viewBox","0 0 25 25"),n(R,"class","svelte-qw5vmn"),n(st,"class","eyedropper svelte-qw5vmn"),n(mt,"d",e[15].bottom),n(mt,"fill","#fff"),n(I,"width","25"),n(I,"height","25"),n(I,"viewBox","0 0 25 25"),n(I,"fill","none"),n(I,"xmlns","http://www.w3.org/2000/svg"),n(I,"class","svelte-qw5vmn"),K.disabled=ht=e[2].position=="B",n(K,"class","svelte-qw5vmn"),n(wt,"d",e[15].right),n(wt,"fill","#fff"),n(Z,"width","25"),n(Z,"height","25"),n(Z,"viewBox","0 0 25 25"),n(Z,"fill","none"),n(Z,"xmlns","http://www.w3.org/2000/svg"),n(Z,"class","svelte-qw5vmn"),Q.disabled=gt=e[2].position=="R",n(Q,"class","svelte-qw5vmn"),n(bt,"d",e[15].left),n(bt,"fill","#fff"),n(F,"width","25"),n(F,"height","25"),n(F,"viewBox","0 0 25 25"),n(F,"fill","none"),n(F,"xmlns","http://www.w3.org/2000/svg"),n(F,"class","svelte-qw5vmn"),Y.disabled=$t=e[2].position=="L",n(Y,"class","svelte-qw5vmn"),n(V,"class",_t="position-options "+(e[3]?"active":"")+" svelte-qw5vmn"),n(o,"id","proof-controls"),n(o,"class",yt=(e[2].position==="B"?"fixed-bottom":"")+(e[2].position==="L"?"fixed-left":"")+(e[2].position==="R"?"fixed-right":"")+" svelte-qw5vmn")},m(f,m){q&&q.m(f,m),B(f,t,m),B(f,o,m),c(o,s),x.m(s,null),c(s,i),c(s,l),c(l,u),c(o,d),c(o,a),c(a,h),c(h,g),c(h,p),c(a,z),c(a,O),c(O,at),c(O,tt),c(a,ft),c(a,C),c(C,ut),c(a,dt),c(a,D),c(D,pt),c(o,vt),c(o,P),c(P,j),N.m(j,null),c(o,Zt),c(o,st),c(st,R),c(R,lt),c(o,Ft),k&&k.m(o,null),c(o,Ot),c(o,V),c(V,K),c(K,I),c(I,mt),c(V,Jt),c(V,Q),c(Q,Z),c(Z,wt),c(V,Tt),c(V,Y),c(Y,F),c(F,bt),St||(zt=[y(l,"click",e[6]),y(h,"click",e[11]),y(O,"click",e[10]),y(C,"click",e[12]),y(D,"click",e[13]),y(P,"click",e[14]),y(st,"click",e[16]),y(K,"click",e[19]),y(Q,"click",e[20]),y(Y,"click",e[21])],St=!0)},p(f,[m]){f[1]?q?q.p(f,m):(q=Dt(f),q.c(),q.m(t.parentNode,t)):q&&(q.d(1),q=null),qt===(qt=Kt(f))&&x?x.p(f,m):(x.d(1),x=qt(f),x&&(x.c(),x.m(s,i))),m&2&&r!==(r=!f[1])&&(l.disabled=r),m&6&&b!==(b=!f[1]||f[2].opacity==2)&&(h.disabled=b),m&6&&H!==(H=!f[1]||f[2].opacity==10)&&(O.disabled=H),m&6&&S!==(S=!f[1]||f[2].opacity==2)&&(C.disabled=S),m&6&&et!==(et=!f[1]||f[2].opacity==10)&&(D.disabled=et),kt===(kt=Qt(f))&&N?N.p(f,m):(N.d(1),N=kt(f),N&&(N.c(),N.m(j,null))),m&16&&n(lt,"fill",f[4]),f[4]!="#fff"?k?k.p(f,m):(k=Rt(f),k.c(),k.m(o,Ot)):k&&(k.d(1),k=null),m&4&&ht!==(ht=f[2].position=="B")&&(K.disabled=ht),m&4&&gt!==(gt=f[2].position=="R")&&(Q.disabled=gt),m&4&&$t!==($t=f[2].position=="L")&&(Y.disabled=$t),m&8&&_t!==(_t="position-options "+(f[3]?"active":"")+" svelte-qw5vmn")&&n(V,"class",_t),m&4&&yt!==(yt=(f[2].position==="B"?"fixed-bottom":"")+(f[2].position==="L"?"fixed-left":"")+(f[2].position==="R"?"fixed-right":"")+" svelte-qw5vmn")&&n(o,"class",yt)},i:w,o:w,d(f){f&&(L(t),L(o)),q&&q.d(f),x.d(),N.d(),k&&k.d(),St=!1,G(zt)}}}const Vt="2000",ct=2,nt="savedState";function qe(e,t,o){let{proofHeight:s="4500"}=t,i;i="./assets/images/spotlight/proofs";const l={index:`${i}/index.jpg`,sub:`${i}/sub.jpg`};let u=!1,r={activePath:l.index,opacity:6,position:"B"};JSON.parse(localStorage.getItem(nt))?(r=JSON.parse(localStorage.getItem(nt)),u=!0):console.log("No currently stored data in local storage."),console.log("ProofOverlay.js initiated.");function a(){r.activePath===l.index?(o(2,r.activePath=l.sub,r),p()):(o(2,r.activePath=l.index,r),p())}function h(){o(1,u=!u),localStorage.setItem(nt,JSON.stringify(r))}function g(){o(1,u=!u),localStorage.removeItem(nt)}function p(){localStorage.setItem(nt,JSON.stringify(r))}function b(){r.opacity!==10&&(o(2,r.opacity=r.opacity+ct,r),p())}function z(){r.opacity<=2||(o(2,r.opacity=r.opacity-ct,r),p())}function O(){o(2,r.opacity=2,r),p()}function at(){o(2,r.opacity=10,r),p()}let tt=!1;function H(){o(3,tt=!tt)}const ft={left:"M4.73214 14.2661C3.75595 13.2899 3.75595 11.7046 4.73214 10.7284L14.7282 0.732353C15.4467 0.0138836 16.5166 -0.196972 17.4537 0.193501C18.3909 0.583973 19 1.48987 19 2.5051V22.4973C19 23.5047 18.3909 24.4184 17.4537 24.8089C16.5166 25.1994 15.4467 24.9807 14.7282 24.27L4.73214 14.2739V14.2661Z",bottom:"M14.2661 20.2684C13.2899 21.2445 11.7046 21.2445 10.7284 20.2684L0.732353 10.2723C0.0138837 9.55379 -0.196972 8.48389 0.193501 7.54676C0.583973 6.60963 1.48987 6.00049 2.5051 6.00049H22.4973C23.5047 6.00049 24.4184 6.60963 24.8089 7.54676C25.1994 8.48389 24.9807 9.55379 24.27 10.2723L14.2739 20.2684H14.2661Z",right:"M20.2679 10.7341C21.244 11.7103 21.244 13.2956 20.2679 14.2718L10.2718 24.2678C9.5533 24.9863 8.4834 25.1972 7.54627 24.8067C6.60914 24.4162 6 23.5103 6 22.4951V2.5029C6 1.4955 6.60914 0.581795 7.54627 0.191295C8.4834 -0.199205 9.5533 0.0194952 10.2718 0.730196L20.2679 10.7263V10.7341Z"};let C="#fff";async function ut(){try{const P=await new EyeDropper().open();console.log(P),o(4,C=P.sRGBHex)}catch{console.log("Eye Dropper cancelled.")}}let S=!1;function dt(){navigator.clipboard.writeText(C),o(5,S=!S),setTimeout(()=>{o(5,S=!S)},2e3)}const D=()=>{o(4,C="#fff")},pt=()=>{o(2,r.position="B",r),p(),H()},et=()=>{o(2,r.position="R",r),p(),H()},vt=()=>{o(2,r.position="L",r),p(),H()};return e.$$set=P=>{"proofHeight"in P&&o(0,s=P.proofHeight)},[s,u,r,tt,C,S,a,h,g,p,b,z,O,at,H,ft,ut,dt,D,pt,et,vt]}class It extends ve{constructor(t){super(),de(this,t,qe,ye,Yt,{proofHeight:0},he)}get proofHeight(){return this.$$.ctx[0]}set proofHeight(t){this.$$set({proofHeight:t}),Bt()}}return customElements.define("proof-overlay",pe(It,{proofHeight:{}},[],[],!0)),A.ProofOverlay=It,Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),A}({});
