self.webpackChunk([6],{11:function(t,n,e){"use strict";var r=e.w[t.i];t.exports=r,r.e()},38:function(t,n,e){"use strict";e.r(n);var r=e(11);let i=null;function u(){return null!==i&&i.buffer===r.c.buffer||(i=new Uint8Array(r.c.buffer)),i}let f=0;let a=null;function c(){return null!==a&&a.buffer===r.c.buffer||(a=new Int32Array(r.c.buffer)),a}function s(t,n,e,i,a,s,o,h){var l=function(t,n){const e=n(1*t.length);return u().set(t,e/1),f=t.length,e}(t,r.b),d=f;r.d(8,l,d,n,e,i,a,s,o,h);var w=c()[2],b=c()[3],y=function(t,n){return u().subarray(t/1,t/1+n)}(w,b).slice();return r.a(w,1*b),y}e.d(n,"resize",function(){return h});const o=["triangle","catrom","mitchell","lanczos3"];async function h(t,n){let e=t;if("contain"===n.fitMethod){const{sx:r,sy:i,sw:u,sh:f}=function(t,n,e,r){const i=e/r;if(i>t/n){const e=t/i;return{sw:t,sh:e,sx:0,sy:(n-e)/2}}const u=n*i;return{sh:n,sw:u,sx:(t-u)/2,sy:0}}(t.width,t.height,n.width,n.height);e=function(t,n,e,r,i){const u=new Uint32Array(t.data.buffer);for(let f=0;f<i;f+=1){const i=(f+e)*t.width+n;u.copyWithin(f*r,i,i+r)}return new ImageData(new Uint8ClampedArray(u.buffer.slice(0,r*i*4)),r,i)}(e,Math.round(r),Math.round(i),Math.round(u),Math.round(f))}const r=s(new Uint8Array(e.data.buffer),e.width,e.height,n.width,n.height,o.indexOf(n.method),n.premultiply,n.linearRGB);return new ImageData(new Uint8ClampedArray(r.buffer),n.width,n.height)}}});
//# sourceMappingURL=process-resize.1feac.worker.js.map