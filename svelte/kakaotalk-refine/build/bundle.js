var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function c(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function $(t,n){t.value=null==n?"":n}let h;function m(t){h=t}function g(t){(function(){if(!h)throw new Error("Function called outside component initialization");return h})().$$.on_mount.push(t)}const y=[],b=[],_=[],x=[],v=Promise.resolve();let k=!1;function w(t){_.push(t)}let E=!1;const A=new Set;function C(){if(!E){E=!0;do{for(let t=0;t<y.length;t+=1){const n=y[t];m(n),T(n.$$)}for(m(null),y.length=0;b.length;)b.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];A.has(n)||(A.add(n),n())}_.length=0}while(y.length);for(;x.length;)x.pop()();k=!1,E=!1,A.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(w)}}const j=new Set;const N="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function O(t,n){-1===t.$$.dirty[0]&&(y.push(t),k||(k=!0,v.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function B(r,i,u,l,a,f,d,p=[-1]){const $=h;m(r);const g=r.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map($?$.$$.context:i.context||[]),callbacks:e(),dirty:p,skip_bound:!1,root:i.target||$.$$.root};d&&d(g.root);let y=!1;if(g.ctx=u?u(r,i.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&a(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),y&&O(r,t)),n})):[],g.update(),y=!0,o(g.before_update),g.fragment=!!l&&l(g.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);g.fragment&&g.fragment.l(t),t.forEach(s)}else g.fragment&&g.fragment.c();i.intro&&((b=r.$$.fragment)&&b.i&&(j.delete(b),b.i(_))),function(t,e,r,i){const{fragment:u,on_mount:s,on_destroy:l,after_update:a}=t.$$;u&&u.m(e,r),i||w((()=>{const e=s.map(n).filter(c);l?l.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(w)}(r,i.target,i.anchor,i.customElement),C()}var b,_;m($)}class L{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function S(n){let e,o,c;return{c(){e=l("textarea")},m(t,r){u(t,e,r),$(e,n[0]),n[3](e),o||(c=d(e,"input",n[2]),o=!0)},p(t,[n]){1&n&&$(e,t[0])},i:t,o:t,d(t){t&&s(e),n[3](null),o=!1,c()}}}function q(t,n,e){let o,{talks_refined:c}=n;return g((()=>{o.select(),document.execCommand("copy")})),t.$$set=t=>{"talks_refined"in t&&e(0,c=t.talks_refined)},[c,o,function(){c=this.value,e(0,c)},function(t){b[t?"unshift":"push"]((()=>{o=t,e(1,o)}))}]}class z extends L{constructor(t){super(),B(this,t,q,S,r,{talks_refined:0})}}const{document:F}=N;function I(n){let e,c,r,h,m,g,y,b,_,x,v,k,w,E,A,C,T,j,N;return F.title=e=M,{c(){c=f(),r=l("div"),h=a("날짜 "),m=l("input"),g=f(),y=l("button"),y.textContent="copy",b=f(),_=a(n[3]),x=f(),v=l("div"),k=f(),w=l("div"),E=l("textarea"),A=f(),C=l("div"),T=l("textarea"),p(m,"type","text"),p(v,"id","clipboard"),p(E,"class","svelte-kcsscc"),p(w,"class","flex svelte-kcsscc"),p(T,"class","svelte-kcsscc"),p(C,"class","flex svelte-kcsscc")},m(t,e){u(t,c,e),u(t,r,e),i(r,h),i(r,m),$(m,n[2]),i(r,g),i(r,y),i(r,b),i(r,_),i(r,x),i(r,v),u(t,k,e),u(t,w,e),i(w,E),$(E,n[0]),u(t,A,e),u(t,C,e),i(C,T),$(T,n[1]),j||(N=[d(m,"input",n[5]),d(y,"click",n[4]),d(E,"input",n[6]),d(T,"input",n[7])],j=!0)},p(t,[n]){0&n&&e!==(e=M)&&(F.title=e),4&n&&m.value!==t[2]&&$(m,t[2]),8&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(_,t[3]),1&n&&$(E,t[0]),2&n&&$(T,t[1])},i:t,o:t,d(t){t&&s(c),t&&s(r),t&&s(k),t&&s(w),t&&s(A),t&&s(C),j=!1,o(N)}}}const M="카톡 대화내용 다듬기";function P(t,n,e){let o="";let c="",r="",i="";return t.$$.update=()=>{if(7&t.$$.dirty){const t=c.split("오후 9:");e(2,i=t[0]+"오후 "),e(1,r=c.replaceAll(i,"")),e(1,r=r.replaceAll("내담자 조미진님 (21.05.25)  :","조미진:")),e(1,r=r.replaceAll(" :",":"))}},[c,r,i,o,()=>{const t=new z({target:document.getElementById("clipboard"),props:{talks_refined:r}});e(3,o="클립보드에 복사되었습니다."),t.$destroy()},function(){i=this.value,e(2,i),e(0,c),e(1,r)},function(){c=this.value,e(0,c)},function(){r=this.value,e(1,r),e(0,c),e(2,i)}]}return new class extends L{constructor(t){super(),B(this,t,P,I,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
