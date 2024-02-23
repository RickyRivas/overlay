var ProofOverlay=function(O){"use strict";var ae=Object.defineProperty;var fe=(O,b,N)=>b in O?ae(O,b,{enumerable:!0,configurable:!0,writable:!0,value:N}):O[b]=N;var v=(O,b,N)=>(fe(O,typeof b!="symbol"?b+"":b,N),N);function b(){}function N(e){return e()}function mt(){return Object.create(null)}function Q(e){e.forEach(N)}function gt(e){return typeof e=="function"}function Rt(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let U;function _t(e,t){return e===t?!0:(U||(U=document.createElement("a")),U.href=t,e===U.href)}function Ht(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function It(e,t,o){const n=Dt(e);if(!n.getElementById(t)){const i=d("style");i.id=t,i.textContent=o,Jt(n,i)}}function Dt(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Jt(e,t){return c(e.head||e,t),t.sheet}function D(e,t,o){e.insertBefore(t,o||null)}function A(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function y(e){return document.createTextNode(e)}function k(){return y(" ")}function w(e,t,o,n){return e.addEventListener(t,o,n),()=>e.removeEventListener(t,o,n)}function u(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function Vt(e){return Array.from(e.childNodes)}function zt(e,t){t=""+t,e.data!==t&&(e.data=t)}function J(e,t,o,n){o==null?e.style.removeProperty(t):e.style.setProperty(t,o,n?"important":"")}function Ft(e){const t={};return e.childNodes.forEach(o=>{t[o.slot||"default"]=!0}),t}let ft;function T(e){ft=e}const V=[],yt=[];let z=[];const vt=[],Kt=Promise.resolve();let ut=!1;function Qt(){ut||(ut=!0,Kt.then(ht))}function dt(e){z.push(e)}const pt=new Set;let F=0;function ht(){if(F!==0)return;const e=ft;do{try{for(;F<V.length;){const t=V[F];F++,T(t),Tt(t.$$)}}catch(t){throw V.length=0,F=0,t}for(T(null),V.length=0,F=0;yt.length;)yt.pop()();for(let t=0;t<z.length;t+=1){const o=z[t];pt.has(o)||(pt.add(o),o())}z.length=0}while(V.length);for(;vt.length;)vt.pop()();ut=!1,pt.clear(),T(e)}function Tt(e){if(e.fragment!==null){e.update(),Q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(dt)}}function Yt(e){const t=[],o=[];z.forEach(n=>e.indexOf(n)===-1?t.push(n):o.push(n)),o.forEach(n=>n()),z=t}const Ut=new Set;function Wt(e,t){e&&e.i&&(Ut.delete(e),e.i(t))}function Gt(e,t,o){const{fragment:n,after_update:i}=e.$$;n&&n.m(t,o),dt(()=>{const s=e.$$.on_mount.map(N).filter(gt);e.$$.on_destroy?e.$$.on_destroy.push(...s):Q(s),e.$$.on_mount=[]}),i.forEach(dt)}function Xt(e,t){const o=e.$$;o.fragment!==null&&(Yt(o.after_update),Q(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function Zt(e,t){e.$$.dirty[0]===-1&&(V.push(e),Qt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(e,t,o,n,i,s,a=null,l=[-1]){const p=ft;T(e);const r=e.$$={fragment:null,ctx:[],props:s,update:b,not_equal:i,bound:mt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:mt(),dirty:l,skip_bound:!1,root:t.target||p.$$.root};a&&a(r.root);let m=!1;if(r.ctx=o?o(e,t.props||{},(_,$,...S)=>{const C=S.length?S[0]:$;return r.ctx&&i(r.ctx[_],r.ctx[_]=C)&&(!r.skip_bound&&r.bound[_]&&r.bound[_](C),m&&Zt(e,_)),$}):[],r.update(),m=!0,Q(r.before_update),r.fragment=n?n(r.ctx):!1,t.target){if(t.hydrate){const _=Vt(t.target);r.fragment&&r.fragment.l(_),_.forEach(A)}else r.fragment&&r.fragment.c();t.intro&&Wt(e.$$.fragment),Gt(e,t.target,t.anchor),ht()}T(p)}let wt;typeof HTMLElement=="function"&&(wt=class extends HTMLElement{constructor(t,o,n){super();v(this,"$$ctor");v(this,"$$s");v(this,"$$c");v(this,"$$cn",!1);v(this,"$$d",{});v(this,"$$r",!1);v(this,"$$p_d",{});v(this,"$$l",{});v(this,"$$l_u",new Map);this.$$ctor=t,this.$$s=o,n&&this.attachShadow({mode:"open"})}addEventListener(t,o,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(o),this.$$c){const i=this.$$c.$on(t,o);this.$$l_u.set(o,i)}super.addEventListener(t,o,n)}removeEventListener(t,o,n){if(super.removeEventListener(t,o,n),this.$$c){const i=this.$$l_u.get(o);i&&(i(),this.$$l_u.delete(o))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(s){return()=>{let a;return{c:function(){a=d("slot"),s!=="default"&&u(a,"name",s)},m:function(r,m){D(r,a,m)},d:function(r){r&&A(a)}}}};if(await Promise.resolve(),!this.$$cn)return;const o={},n=Ft(this);for(const s of this.$$s)s in n&&(o[s]=[t(s)]);for(const s of this.attributes){const a=this.$$g_p(s.name);a in this.$$d||(this.$$d[a]=W(a,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:o,$$scope:{ctx:[]}}});const i=()=>{this.$$r=!0;for(const s in this.$$p_d)if(this.$$d[s]=this.$$c.$$.ctx[this.$$c.$$.props[s]],this.$$p_d[s].reflect){const a=W(s,this.$$d[s],this.$$p_d,"toAttribute");a==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,a)}this.$$r=!1};this.$$c.$$.after_update.push(i),i();for(const s in this.$$l)for(const a of this.$$l[s]){const l=this.$$c.$on(s,a);this.$$l_u.set(a,l)}this.$$l={}}}attributeChangedCallback(t,o,n){var i;this.$$r||(t=this.$$g_p(t),this.$$d[t]=W(t,n,this.$$p_d,"toProp"),(i=this.$$c)==null||i.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(o=>this.$$p_d[o].attribute===t||!this.$$p_d[o].attribute&&o.toLowerCase()===t)||t}});function W(e,t,o,n){var s;const i=(s=o[e])==null?void 0:s.type;if(t=i==="Boolean"&&typeof t!="boolean"?t!=null:t,!n||!o[e])return t;if(n==="toAttribute")switch(i){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(i){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function ee(e,t,o,n,i,s){let a=class extends wt{constructor(){super(e,o,i),this.$$p_d=t}static get observedAttributes(){return Object.keys(t).map(l=>(t[l].attribute||l).toLowerCase())}};return Object.keys(t).forEach(l=>{Object.defineProperty(a.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(p){var r;p=W(l,p,t),this.$$d[l]=p,(r=this.$$c)==null||r.$set({[l]:p})}})}),n.forEach(l=>{Object.defineProperty(a.prototype,l,{get(){var p;return(p=this.$$c)==null?void 0:p[l]}})}),s&&(a=s(a)),e.element=a,a}class oe{constructor(){v(this,"$$");v(this,"$$set")}$destroy(){Xt(this,1),this.$destroy=b}$on(t,o){if(!gt(o))return b;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(o),()=>{const i=n.indexOf(o);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!Ht(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const se="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(se);function ne(e){It(e,"svelte-hp7eor","@font-face{font-family:'Kode Mono';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/kodemono/v1/A2BLn5pb0QgtVEPFnlYkkaoBgw4qv9odq5my9Do.ttf) format('truetype')}@font-face{font-family:'Kode Mono';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/kodemono/v1/A2BLn5pb0QgtVEPFnlYkkaoBgw4qv9odq6uy9Do.ttf) format('truetype')}@font-face{font-family:'Kode Mono';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/kodemono/v1/A2BLn5pb0QgtVEPFnlYkkaoBgw4qv9odq0e19Do.ttf) format('truetype')}@font-face{font-family:'Kode Mono';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/kodemono/v1/A2BLn5pb0QgtVEPFnlYkkaoBgw4qv9odq3619Do.ttf) format('truetype')}#proof-img-parent.svelte-hp7eor.svelte-hp7eor{position:relative;display:block}#proof-img-parent.svelte-hp7eor img.svelte-hp7eor{position:absolute;top:0;left:50%;transform:translate3d(-50%, 0, 0);z-index:9998;pointer-events:none}#proof-controls.svelte-hp7eor.svelte-hp7eor{display:flex;justify-content:center;align-items:center;position:fixed;gap:5px;padding:5px;z-index:9999;background-color:#222222cc;transition:all 0.33s ease}#proof-controls.fixed-bottom.svelte-hp7eor.svelte-hp7eor{left:50%;transform:translate3d(-50%, 0, 0);bottom:20px}#proof-controls.fixed-right.svelte-hp7eor.svelte-hp7eor{flex-direction:column;top:50%;transform:translate3d(0, -50%, 0);right:20px}#proof-controls.fixed-left.svelte-hp7eor.svelte-hp7eor{flex-direction:column;top:50%;transform:translate3d(0, -50%, 0);left:20px}button.svelte-hp7eor.svelte-hp7eor{display:inline-block;vertical-align:top;font-size:15px;border:0;padding:0;background:#3e3e3e;color:#d3d3d3;text-transform:capitalize;line-height:30px;border:1px solid #4e4e4e;transition:border-color 0.33s ease;font-family:'Kode Mono', monospace;font-optical-sizing:auto;font-weight:400;font-style:normal}button.svelte-hp7eor.svelte-hp7eor:hover:not(:disabled){border-color:white}button.svelte-hp7eor.svelte-hp7eor:disabled{background-color:#ccc;color:#3e3e3e}.toggles.svelte-hp7eor.svelte-hp7eor{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:6px}.opacity-controls.svelte-hp7eor.svelte-hp7eor{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;max-width:3.5em;gap:5px;background:#3e3e3e;border:1px solid #4e4e4e}.opacity-control.svelte-hp7eor.svelte-hp7eor{border-radius:50%;width:32px}.position-control.svelte-hp7eor.svelte-hp7eor{border-radius:50%;width:32px}.position-options.svelte-hp7eor.svelte-hp7eor{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:6px;background-color:#222222cc;position:absolute;left:50%;transform:translate3d(-50%, 0, 0);padding:0.25em;width:100%;max-width:4em;transition:opacity 0.33s ease, bottom 0.33s ease;pointer-events:none;bottom:-100%;opacity:0}.position-options.svelte-hp7eor button.svelte-hp7eor{border-radius:50%;width:32px}.position-options.active.svelte-hp7eor.svelte-hp7eor{bottom:calc(100% + 1em);opacity:1;pointer-events:all}.toggle.svelte-hp7eor.svelte-hp7eor{width:9em}")}function kt(e){let t,o,n;return{c(){t=d("div"),o=d("img"),_t(o.src,n=e[2].activePath)||u(o,"src",n),u(o,"alt","Proof Overlay"),J(o,"width",Pt+"px"),J(o,"min-width",Pt+"px"),J(o,"height",e[0]+"px"),J(o,"opacity",e[2].opacity/10),u(o,"class","svelte-hp7eor"),u(t,"id","proof-img-parent"),u(t,"class","svelte-hp7eor")},m(i,s){D(i,t,s),c(t,o)},p(i,s){s&4&&!_t(o.src,n=i[2].activePath)&&u(o,"src",n),s&1&&J(o,"height",i[0]+"px"),s&4&&J(o,"opacity",i[2].opacity/10)},d(i){i&&A(t)}}}function ie(e){let t,o,n;return{c(){t=d("button"),t.textContent="hide proof",u(t,"class","toggle svelte-hp7eor")},m(i,s){D(i,t,s),o||(n=w(t,"click",e[6]),o=!0)},p:b,d(i){i&&A(t),o=!1,n()}}}function le(e){let t,o,n;return{c(){t=d("button"),t.textContent="show proof",u(t,"class","toggle svelte-hp7eor")},m(i,s){D(i,t,s),o||(n=w(t,"click",e[5]),o=!0)},p:b,d(i){i&&A(t),o=!1,n()}}}function re(e){let t,o,n,i,s,a,l,p,r,m,_,$,S,C,P,X,K,L,Z,j,tt,x,Ot,q,St,et,Lt,M,ot=e[2].position+"",$t,st,jt,B,R,Bt,nt,Nt,H,At,it,Ct,I,xt,lt,rt,ct,bt,qt,g=e[1]&&kt(e);function Mt(f,h){return f[1]?ie:le}let at=Mt(e),E=at(e);return{c(){g&&g.c(),t=k(),o=d("div"),n=d("div"),E.c(),i=k(),s=d("button"),a=y("switch proofs"),p=k(),r=d("div"),m=d("button"),_=y("-"),$=y(G),C=k(),P=d("button"),X=y("+"),K=y(G),Z=k(),j=d("button"),tt=y("L"),Ot=k(),q=d("button"),St=y("F"),Lt=k(),M=d("button"),$t=y(ot),jt=k(),B=d("div"),R=d("button"),Bt=y("B"),Nt=k(),H=d("button"),At=y("R"),Ct=k(),I=d("button"),xt=y("L"),u(s,"class","toggle svelte-hp7eor"),s.disabled=l=!e[1],u(n,"class","toggles svelte-hp7eor"),u(m,"class","opacity-control svelte-hp7eor"),m.disabled=S=!e[1]||e[2].opacity==2,u(P,"class","opacity-control svelte-hp7eor"),P.disabled=L=!e[1]||e[2].opacity==10,u(j,"class","opacity-control svelte-hp7eor"),j.disabled=x=!e[1]||e[2].opacity==2,u(q,"class","opacity-control svelte-hp7eor"),q.disabled=et=!e[1]||e[2].opacity==10,u(r,"class","opacity-controls svelte-hp7eor"),u(M,"class","position-control svelte-hp7eor"),M.disabled=st=!e[1],R.disabled=nt=e[2].position=="B",u(R,"class","svelte-hp7eor"),H.disabled=it=e[2].position=="R",u(H,"class","svelte-hp7eor"),I.disabled=lt=e[2].position=="L",u(I,"class","svelte-hp7eor"),u(B,"class",rt="position-options "+(e[3]?"active":"")+" svelte-hp7eor"),u(o,"id","proof-controls"),u(o,"class",ct=(e[2].position==="B"?"fixed-bottom":"")+(e[2].position==="L"?"fixed-left":"")+(e[2].position==="R"?"fixed-right":"")+" svelte-hp7eor")},m(f,h){g&&g.m(f,h),D(f,t,h),D(f,o,h),c(o,n),E.m(n,null),c(n,i),c(n,s),c(s,a),c(o,p),c(o,r),c(r,m),c(m,_),c(m,$),c(r,C),c(r,P),c(P,X),c(P,K),c(r,Z),c(r,j),c(j,tt),c(r,Ot),c(r,q),c(q,St),c(o,Lt),c(o,M),c(M,$t),c(o,jt),c(o,B),c(B,R),c(R,Bt),c(B,Nt),c(B,H),c(H,At),c(B,Ct),c(B,I),c(I,xt),bt||(qt=[w(s,"click",e[4]),w(m,"click",e[9]),w(P,"click",e[8]),w(j,"click",e[10]),w(q,"click",e[11]),w(M,"click",e[12]),w(R,"click",e[13]),w(H,"click",e[14]),w(I,"click",e[15])],bt=!0)},p(f,[h]){f[1]?g?g.p(f,h):(g=kt(f),g.c(),g.m(t.parentNode,t)):g&&(g.d(1),g=null),at===(at=Mt(f))&&E?E.p(f,h):(E.d(1),E=at(f),E&&(E.c(),E.m(n,i))),h&2&&l!==(l=!f[1])&&(s.disabled=l),h&6&&S!==(S=!f[1]||f[2].opacity==2)&&(m.disabled=S),h&6&&L!==(L=!f[1]||f[2].opacity==10)&&(P.disabled=L),h&6&&x!==(x=!f[1]||f[2].opacity==2)&&(j.disabled=x),h&6&&et!==(et=!f[1]||f[2].opacity==10)&&(q.disabled=et),h&4&&ot!==(ot=f[2].position+"")&&zt($t,ot),h&2&&st!==(st=!f[1])&&(M.disabled=st),h&4&&nt!==(nt=f[2].position=="B")&&(R.disabled=nt),h&4&&it!==(it=f[2].position=="R")&&(H.disabled=it),h&4&&lt!==(lt=f[2].position=="L")&&(I.disabled=lt),h&8&&rt!==(rt="position-options "+(f[3]?"active":"")+" svelte-hp7eor")&&u(B,"class",rt),h&4&&ct!==(ct=(f[2].position==="B"?"fixed-bottom":"")+(f[2].position==="L"?"fixed-left":"")+(f[2].position==="R"?"fixed-right":"")+" svelte-hp7eor")&&u(o,"class",ct)},i:b,o:b,d(f){f&&(A(t),A(o)),g&&g.d(f),E.d(),bt=!1,Q(qt)}}}let Pt="2000";const G=2,Y="savedState";function ce(e,t,o){let{proofHeight:n="4545"}=t,i;i="./assets/images/spotlight/proofs";const s={index:`${i}/index.jpg`,sub:`${i}/sub.jpg`};let a=!1,l={activePath:s.index,opacity:6,position:"B"};JSON.parse(localStorage.getItem(Y))?(l=JSON.parse(localStorage.getItem(Y)),a=!0):console.log("No currently stored data in local storage."),console.log("ProofOverlay.js initiated.");function r(){l.activePath===s.index?(o(2,l.activePath=s.sub,l),$()):(o(2,l.activePath=s.index,l),$())}function m(){o(1,a=!a),localStorage.setItem(Y,JSON.stringify(l))}function _(){o(1,a=!a),localStorage.removeItem(Y)}function $(){localStorage.setItem(Y,JSON.stringify(l))}function S(){l.opacity!==10&&(o(2,l.opacity=l.opacity+G,l),$())}function C(){l.opacity<=2||(o(2,l.opacity=l.opacity-G,l),$())}function P(){o(2,l.opacity=2,l),$()}function X(){o(2,l.opacity=10,l),$()}let K=!1;function L(){o(3,K=!K)}const Z=()=>{o(2,l.position="B",l),$(),L()},j=()=>{o(2,l.position="R",l),$(),L()},tt=()=>{o(2,l.position="L",l),$(),L()};return e.$$set=x=>{"proofHeight"in x&&o(0,n=x.proofHeight)},[n,a,l,K,r,m,_,$,S,C,P,X,L,Z,j,tt]}class Et extends oe{constructor(t){super(),te(this,t,ce,re,Rt,{proofHeight:0},ne)}get proofHeight(){return this.$$.ctx[0]}set proofHeight(t){this.$$set({proofHeight:t}),ht()}}return customElements.define("proof-overlay",ee(Et,{proofHeight:{}},[],[],!0)),O.ProofOverlay=Et,Object.defineProperty(O,Symbol.toStringTag,{value:"Module"}),O}({});
