self.webpackChunk([2],{10:function(n,r,t){"use strict";var e=t.w[n.i];n.exports=e,e.e()},39:function(n,r,t){"use strict";t.r(r);var e=t(10);let u=null;function f(){return null!==u&&u.buffer===e.c.buffer||(u=new Uint32Array(e.c.buffer)),u}let c=0;let a=null;function i(){return null!==a&&a.buffer===e.c.buffer||(a=new Int32Array(e.c.buffer)),a}function l(n,r,t,u){var a=function(n,r){const t=r(4*n.length);return f().set(n,t/4),c=n.length,t}(n,e.b),l=c;e.d(8,a,l,r,t,u);var o=i()[2],s=i()[3],b=function(n,r){return f().subarray(n/4,n/4+r)}(o,s).slice();return e.a(o,4*s),b}async function o(n,r){const t=n,e=l(new Uint32Array(t.data.buffer),t.width,t.height,r.factor);return new ImageData(new Uint8ClampedArray(e.buffer),n.width*r.factor,n.height*r.factor)}t.d(r,"hqx",function(){return o})}});
//# sourceMappingURL=process-hqx.09586.worker.js.map