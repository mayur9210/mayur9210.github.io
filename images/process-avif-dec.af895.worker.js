self.webpackChunk([0],{20:function(n,r,e){(function(r,t){var i=function(){var n="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0;return n=n||r,function(r){var i,o,a;r=r||{},i||(i=void 0!==r?r:{}),i.ready=new Promise(function(n,r){o=n,a=r});var u,f={};for(u in i)i.hasOwnProperty(u)&&(f[u]=i[u]);var l,c,s=!1,p=!1;s="object"==typeof window,p="function"==typeof importScripts,l="object"==typeof{}&&"object"==typeof{}.versions&&"string"==typeof{}.versions.node,c=!s&&!l&&!p;var d,y,v,h,m="";l?(m=p?e(!function(){var n=new Error("Cannot find module 'path'");throw n.code="MODULE_NOT_FOUND",n}()).dirname(m)+"/":t+"/",d=function(n,r){return v||(v=e(!function(){var n=new Error("Cannot find module 'fs'");throw n.code="MODULE_NOT_FOUND",n}())),h||(h=e(!function(){var n=new Error("Cannot find module 'path'");throw n.code="MODULE_NOT_FOUND",n}())),n=h.normalize(n),v.readFileSync(n,r?null:"utf8")},y=function(n){return(n=d(n,!0)).buffer||(n=new Uint8Array(n)),n.buffer||nn("Assertion failed: undefined"),n},1<{}.argv.length&&{}.argv[1].replace(/\\/g,"/"),{}.argv.slice(2),{}.on("uncaughtException",function(n){throw n}),{}.on("unhandledRejection",nn),i.inspect=function(){return"[Emscripten Module object]"}):c?("undefined"!=typeof read&&(d=function(n){return read(n)}),y=function(n){return"function"==typeof readbuffer?new Uint8Array(readbuffer(n)):("object"==typeof(n=read(n,"binary"))||nn("Assertion failed: undefined"),n)},"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(s||p)&&(p?m=self.location.href:document.currentScript&&(m=document.currentScript.src),n&&(m=n),m=0!==m.indexOf("blob:")?m.substr(0,m.lastIndexOf("/")+1):"",d=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.send(null),r.responseText},p&&(y=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var g=i.print||console.log.bind(console),w=i.printErr||console.warn.bind(console);for(u in f)f.hasOwnProperty(u)&&(i[u]=f[u]);f=null;var _,C=0;i.wasmBinary&&(_=i.wasmBinary),i.noExitRuntime&&i.noExitRuntime,"object"!=typeof WebAssembly&&nn("no native wasm support detected");var b,A=new WebAssembly.Table({initial:419,maximum:419,element:"anyfunc"}),T=!1,E="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function P(n,r,e){var t=r+e;for(e=r;n[e]&&!(e>=t);)++e;if(16<e-r&&n.subarray&&E)return E.decode(n.subarray(r,e));for(t="";r<e;){var i=n[r++];if(128&i){var o=63&n[r++];if(192==(224&i))t+=String.fromCharCode((31&i)<<6|o);else{var a=63&n[r++];65536>(i=224==(240&i)?(15&i)<<12|o<<6|a:(7&i)<<18|o<<12|a<<6|63&n[r++])?t+=String.fromCharCode(i):(i-=65536,t+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else t+=String.fromCharCode(i)}return t}var k,W,j,R,S,F,U,O,I,x="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function M(n,r){for(var e=n>>1,t=e+r/2;!(e>=t)&&S[e];)++e;if(32<(e<<=1)-n&&x)return x.decode(j.subarray(n,e));for(e=0,t="";;){var i=R[n+2*e>>1];if(0==i||e==r/2)return t;++e,t+=String.fromCharCode(i)}}function D(n,r,e){if(void 0===e&&(e=2147483647),2>e)return 0;var t=r;e=(e-=2)<2*n.length?e/2:n.length;for(var i=0;i<e;++i)R[r>>1]=n.charCodeAt(i),r+=2;return R[r>>1]=0,r-t}function H(n){return 2*n.length}function N(n,r){for(var e=0,t="";!(e>=r/4);){var i=F[n+4*e>>2];if(0==i)break;++e,65536<=i?(i-=65536,t+=String.fromCharCode(55296|i>>10,56320|1023&i)):t+=String.fromCharCode(i)}return t}function B(n,r,e){if(void 0===e&&(e=2147483647),4>e)return 0;var t=r;e=t+e-4;for(var i=0;i<n.length;++i){var o=n.charCodeAt(i);if(55296<=o&&57343>=o)o=65536+((1023&o)<<10)|1023&n.charCodeAt(++i);if(F[r>>2]=o,(r+=4)+4>e)break}return F[r>>2]=0,r-t}function L(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);55296<=t&&57343>=t&&++e,r+=4}return r}function V(n){k=n,i.HEAP8=W=new Int8Array(n),i.HEAP16=R=new Int16Array(n),i.HEAP32=F=new Int32Array(n),i.HEAPU8=j=new Uint8Array(n),i.HEAPU16=S=new Uint16Array(n),i.HEAPU32=U=new Uint32Array(n),i.HEAPF32=O=new Float32Array(n),i.HEAPF64=I=new Float64Array(n)}var z=i.INITIAL_MEMORY||16777216;function q(n){for(;0<n.length;){var r=n.shift();if("function"==typeof r)r(i);else{var e=r.la;"number"==typeof e?void 0===r.ha?i.dynCall_v(e):i.dynCall_vi(e,r.ha):e(void 0===r.ha?null:r.ha)}}}(b=i.wasmMemory?i.wasmMemory:new WebAssembly.Memory({initial:z/65536,maximum:32768}))&&(k=b.buffer),z=k.byteLength,V(k),F[153596]=5857424;var G=[],X=[],J=[],Y=[];function Z(){var n=i.preRun.shift();G.unshift(n)}var $=0,K=null,Q=null;function nn(n){throw i.onAbort&&i.onAbort(n),w(n),T=!0,n=new WebAssembly.RuntimeError("abort("+n+"). Build with -s ASSERTIONS=1 for more info."),a(n),n}function rn(n){var r=tn;return String.prototype.startsWith?r.startsWith(n):0===r.indexOf(n)}function en(){return rn("data:application/octet-stream;base64,")}i.preloadedImages={},i.preloadedAudios={};var tn="avif_dec.wasm";if(!en()){var on=tn;tn=i.locateFile?i.locateFile(on,m):m+on}function an(){try{if(_)return new Uint8Array(_);if(y)return y(tn);throw"both async and sync fetching of the wasm failed"}catch(n){nn(n)}}function un(){return 0<un.ja}function fn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}X.push({la:function(){Bn()}});var ln=void 0;function cn(n){for(var r="";j[n];)r+=ln[j[n++]];return r}var sn={},pn={},dn={};function yn(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=r&&57>=r?"_"+n:n}function vn(n,r){return n=yn(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function hn(n){var r=Error,e=vn(n,function(r){this.name=n,this.message=r,void 0!==(r=Error(r).stack)&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))});return e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var mn=void 0;function gn(n){throw new mn(n)}var wn=void 0;function _n(n,r,e){if(e=e||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=r.name;if(n||gn('type "'+t+'" must have a positive integer typeid pointer'),pn.hasOwnProperty(n)){if(e.ma)return;gn("Cannot register type '"+t+"' twice")}pn[n]=r,delete dn[n],sn.hasOwnProperty(n)&&(r=sn[n],delete sn[n],r.forEach(function(n){n()}))}var Cn=[],bn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function An(n){4<n&&0==--bn[n].ia&&(bn[n]=void 0,Cn.push(n))}function Tn(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=Cn.length?Cn.pop():bn.length;return bn[r]={ia:1,value:n},r}}function En(n){return this.fromWireType(U[n>>2])}function Pn(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function kn(n,r){switch(r){case 2:return function(n){return this.fromWireType(O[n>>2])};case 3:return function(n){return this.fromWireType(I[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function Wn(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function jn(n,r,e){i.hasOwnProperty(n)?((void 0===e||void 0!==i[n].fa&&void 0!==i[n].fa[e])&&gn("Cannot register public name '"+n+"' twice"),function(n,r){var e=i;if(void 0===e[n].fa){var t=e[n];e[n]=function(){return e[n].fa.hasOwnProperty(arguments.length)||gn("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[n].fa+")!"),e[n].fa[arguments.length].apply(this,arguments)},e[n].fa=[],e[n].fa[t.ka]=t}}(n,n),i.hasOwnProperty(e)&&gn("Cannot register multiple overloads of a function with the same number of arguments ("+e+")!"),i[n].fa[e]=r):(i[n]=r,void 0!==e&&(i[n].oa=e))}var Rn=void 0;function Sn(n){var r=cn(n=zn(n));return Vn(n),r}function Fn(n,r,e){switch(r){case 0:return e?function(n){return W[n]}:function(n){return j[n]};case 1:return e?function(n){return R[n>>1]}:function(n){return S[n>>1]};case 2:return e?function(n){return F[n>>2]}:function(n){return U[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var Un={};function On(){return"object"==typeof globalThis?globalThis:Function("return this")()}function In(n,r){var e=pn[n];return void 0===e&&gn(r+" has unknown type "+Sn(n)),e}for(var xn={},Mn=[null,[],[]],Dn=Array(256),Hn=0;256>Hn;++Hn)Dn[Hn]=String.fromCharCode(Hn);ln=Dn,mn=i.BindingError=hn("BindingError"),wn=i.InternalError=hn("InternalError"),i.count_emval_handles=function(){for(var n=0,r=5;r<bn.length;++r)void 0!==bn[r]&&++n;return n},i.get_first_emval=function(){for(var n=5;n<bn.length;++n)if(void 0!==bn[n])return bn[n];return null},Rn=i.UnboundTypeError=hn("UnboundTypeError");var Nn={u:function(n){return Ln(n)},r:function(){},t:function(n){throw"uncaught_exception"in un?un.ja++:un.ja=1,n},D:function(n,r,e,t,i){var o=fn(e);_n(n,{name:r=cn(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?t:i},argPackAdvance:8,readValueFromPointer:function(n){if(1===e)var t=W;else if(2===e)t=R;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+r);t=F}return this.fromWireType(t[n>>o])},ga:null})},C:function(n,r){_n(n,{name:r=cn(r),fromWireType:function(n){var r=bn[n].value;return An(n),r},toWireType:function(n,r){return Tn(r)},argPackAdvance:8,readValueFromPointer:En,ga:null})},p:function(n,r,e){e=fn(e),_n(n,{name:r=cn(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+Pn(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:kn(r,e),ga:null})},v:function(n,r,e,t,o,a){var u=function(n,r){for(var e=[],t=0;t<n;t++)e.push(F[(r>>2)+t]);return e}(r,e);n=cn(n),o=function(n,r){n=cn(n);for(var e=i["dynCall_"+n],t=[],o=1;o<n.length;++o)t.push("a"+o);return o="return function dynCall_"+n+"_"+r+"("+t.join(", ")+") {\n",o+="    return dynCall(rawFunction"+(t.length?", ":"")+t.join(", ")+");\n","function"!=typeof(e=new Function("dynCall","rawFunction",o+"};\n")(e,r))&&gn("unknown function pointer with signature "+n+": "+r),e}(t,o),jn(n,function(){!function(n,r){var e=[],t={};throw r.forEach(function n(r){t[r]||pn[r]||(dn[r]?dn[r].forEach(n):(e.push(r),t[r]=!0))}),new Rn(n+": "+e.map(Sn).join([", "]))}("Cannot call "+n+" due to unbound types",u)},r-1),function(n,r){function e(n){if((n=r(n)).length!==t.length)throw new wn("Mismatched type converter count");for(var e=0;e<t.length;++e)_n(t[e],n[e])}var t=[];t.forEach(function(r){dn[r]=n});var i=Array(n.length),o=[],a=0;n.forEach(function(n,r){pn.hasOwnProperty(n)?i[r]=pn[n]:(o.push(n),sn.hasOwnProperty(n)||(sn[n]=[]),sn[n].push(function(){i[r]=pn[n],++a===o.length&&e(i)}))}),0===o.length&&e(i)}(u,function(e){var t=[e[0],null].concat(e.slice(1)),u=e=n,f=o,l=t.length;2>l&&gn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var c=null!==t[1]&&!1,s=!1,p=1;p<t.length;++p)if(null!==t[p]&&void 0===t[p].ga){s=!0;break}var d="void"!==t[0].name,y="",v="";for(p=0;p<l-2;++p)y+=(0!==p?", ":"")+"arg"+p,v+=(0!==p?", ":"")+"arg"+p+"Wired";u="return function "+yn(u)+"("+y+") {\nif (arguments.length !== "+(l-2)+") {\nthrowBindingError('function "+u+" called with ' + arguments.length + ' arguments, expected "+(l-2)+" args!');\n}\n",s&&(u+="var destructors = [];\n");var h=s?"destructors":"null";for(y="throwBindingError invoker fn runDestructors retType classParam".split(" "),f=[gn,f,a,Wn,t[0],t[1]],c&&(u+="var thisWired = classParam.toWireType("+h+", this);\n"),p=0;p<l-2;++p)u+="var arg"+p+"Wired = argType"+p+".toWireType("+h+", arg"+p+"); // "+t[p+2].name+"\n",y.push("argType"+p),f.push(t[p+2]);if(c&&(v="thisWired"+(0<v.length?", ":"")+v),u+=(d?"var rv = ":"")+"invoker(fn"+(0<v.length?", ":"")+v+");\n",s)u+="runDestructors(destructors);\n";else for(p=c?1:2;p<t.length;++p)l=1===p?"thisWired":"arg"+(p-2)+"Wired",null!==t[p].ga&&(u+=l+"_dtor("+l+"); // "+t[p].name+"\n",y.push(l+"_dtor"),f.push(t[p].ga));if(d&&(u+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),y.push(u+"}\n"),t=function(n){var r=Function;if(!(r instanceof Function))throw new TypeError("new_ called with constructor type "+typeof r+" which is not a function");var e=vn(r.name||"unknownFunctionName",function(){});return e.prototype=r.prototype,e=new e,(n=r.apply(e,n))instanceof Object?n:e}(y).apply(null,f),p=r-1,!i.hasOwnProperty(e))throw new wn("Replacing nonexistant public symbol");return void 0!==i[e].fa&&void 0!==p?i[e].fa[p]=t:(i[e]=t,i[e].ka=p),[]})},d:function(n,r,e,t,i){function o(n){return n}r=cn(r),-1===i&&(i=4294967295);var a=fn(e);if(0===t){var u=32-8*e;o=function(n){return n<<u>>>u}}var f=-1!=r.indexOf("unsigned");_n(n,{name:r,fromWireType:o,toWireType:function(n,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+Pn(e)+'" to '+this.name);if(e<t||e>i)throw new TypeError('Passing a number "'+Pn(e)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+t+", "+i+"]!");return f?e>>>0:0|e},argPackAdvance:8,readValueFromPointer:Fn(r,a,0!==t),ga:null})},c:function(n,r,e){function t(n){var r=U;return new i(k,r[(n>>=2)+1],r[n])}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];_n(n,{name:e=cn(e),fromWireType:t,argPackAdvance:8,readValueFromPointer:t},{ma:!0})},q:function(n,r){var e="std::string"===(r=cn(r));_n(n,{name:r,fromWireType:function(n){var r=U[n>>2];if(e)for(var t=n+4,i=0;i<=r;++i){var o=n+4+i;if(i==r||0==j[o]){if(t=t?P(j,t,o-t):"",void 0===a)var a=t;else a+=String.fromCharCode(0),a+=t;t=o+1}}else{for(a=Array(r),i=0;i<r;++i)a[i]=String.fromCharCode(j[n+4+i]);a=a.join("")}return Vn(n),a},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var t="string"==typeof r;t||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||gn("Cannot pass non-string to std::string");var i=(e&&t?function(){for(var n=0,e=0;e<r.length;++e){var t=r.charCodeAt(e);55296<=t&&57343>=t&&(t=65536+((1023&t)<<10)|1023&r.charCodeAt(++e)),127>=t?++n:n=2047>=t?n+2:65535>=t?n+3:n+4}return n}:function(){return r.length})(),o=Ln(4+i+1);if(U[o>>2]=i,e&&t)!function(n,r,e){var t=j;if(0<e){e=r+e-1;for(var i=0;i<n.length;++i){var o=n.charCodeAt(i);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&n.charCodeAt(++i)),127>=o){if(r>=e)break;t[r++]=o}else{if(2047>=o){if(r+1>=e)break;t[r++]=192|o>>6}else{if(65535>=o){if(r+2>=e)break;t[r++]=224|o>>12}else{if(r+3>=e)break;t[r++]=240|o>>18,t[r++]=128|o>>12&63}t[r++]=128|o>>6&63}t[r++]=128|63&o}}t[r]=0}}(r,o+4,i+1);else if(t)for(t=0;t<i;++t){var a=r.charCodeAt(t);255<a&&(Vn(o),gn("String has UTF-16 code units that do not fit in 8 bits")),j[o+4+t]=a}else for(t=0;t<i;++t)j[o+4+t]=r[t];return null!==n&&n.push(Vn,o),o},argPackAdvance:8,readValueFromPointer:En,ga:function(n){Vn(n)}})},j:function(n,r,e){if(e=cn(e),2===r)var t=M,i=D,o=H,a=function(){return S},u=1;else 4===r&&(t=N,i=B,o=L,a=function(){return U},u=2);_n(n,{name:e,fromWireType:function(n){for(var e,i=U[n>>2],o=a(),f=n+4,l=0;l<=i;++l){var c=n+4+l*r;l!=i&&0!=o[c>>u]||(f=t(f,c-f),void 0===e?e=f:(e+=String.fromCharCode(0),e+=f),f=c+r)}return Vn(n),e},toWireType:function(n,t){"string"!=typeof t&&gn("Cannot pass non-string to C++ string type "+e);var a=o(t),f=Ln(4+a+r);return U[f>>2]=a>>u,i(t,f+4,a+r),null!==n&&n.push(Vn,f),f},argPackAdvance:8,readValueFromPointer:En,ga:function(n){Vn(n)}})},E:function(n,r){_n(n,{na:!0,name:r=cn(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},n:An,F:function(n){if(0===n)return Tn(On());var r=Un[n];return n=void 0===r?cn(n):r,Tn(On()[n])},w:function(n){4<n&&(bn[n].ia+=1)},l:function(n,r,e,t){n||gn("Cannot use deleted val. handle = "+n),n=bn[n].value;var o=xn[r];if(!o){o="";for(var a=0;a<r;++a)o+=(0!==a?", ":"")+"arg"+a;var u="return function emval_allocator_"+r+"(constructor, argTypes, args) {\n";for(a=0;a<r;++a)u+="var argType"+a+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+a+'], "parameter '+a+'");\nvar arg'+a+" = argType"+a+".readValueFromPointer(args);\nargs += argType"+a+"['argPackAdvance'];\n";o=new Function("requireRegisteredType","Module","__emval_register",u+"var obj = new constructor("+o+");\nreturn __emval_register(obj);\n}\n")(In,i,Tn),xn[r]=o}return o(n,e,t)},k:function(){nn()},s:function(){w("missing function: aom_codec_av1_cx"),nn(-1)},e:function(n,r){throw qn(n,r||1),"longjmp"},A:function(n,r,e){j.copyWithin(n,r,r+e)},f:function(n){n>>>=0;var r=j.length;if(2147483648<n)return!1;for(var e=1;4>=e;e*=2){var t=r*(1+.2/e);t=Math.min(t,n+100663296),0<(t=Math.max(16777216,n,t))%65536&&(t+=65536-t%65536);n:{try{b.grow(Math.min(2147483648,t)-k.byteLength+65535>>>16),V(b.buffer);var i=1;break n}catch(o){}i=void 0}if(i)return!0}return!1},B:function(){return 0},x:function(){},o:function(n,r,e,t){for(var i=0,o=0;o<e;o++){for(var a=F[r+8*o>>2],u=F[r+(8*o+4)>>2],f=0;f<u;f++){var l=j[a+f],c=Mn[n];0===l||10===l?((1===n?g:w)(P(c,0)),c.length=0):c.push(l)}i+=u}return F[t>>2]=i,0},a:function(){return 0|C},h:function(n,r,e){var t=Gn();try{return Kn(n,r,e)}catch(i){if(Xn(t),i!==i+0&&"longjmp"!==i)throw i;qn(1,0)}},y:function(n,r,e,t,i){var o=Gn();try{return nr(n,r,e,t,i)}catch(a){if(Xn(o),a!==a+0&&"longjmp"!==a)throw a;qn(1,0)}},z:function(n){var r=Gn();try{Jn(n)}catch(e){if(Xn(r),e!==e+0&&"longjmp"!==e)throw e;qn(1,0)}},g:function(n,r){var e=Gn();try{Yn(n,r)}catch(t){if(Xn(e),t!==t+0&&"longjmp"!==t)throw t;qn(1,0)}},m:function(n,r,e){var t=Gn();try{Zn(n,r,e)}catch(i){if(Xn(t),i!==i+0&&"longjmp"!==i)throw i;qn(1,0)}},i:function(n,r,e,t,i){var o=Gn();try{$n(n,r,e,t,i)}catch(a){if(Xn(o),a!==a+0&&"longjmp"!==a)throw a;qn(1,0)}},memory:b,b:function(n){C=0|n},table:A};!function(){function n(n){i.asm=n.exports,$--,i.monitorRunDependencies&&i.monitorRunDependencies($),0==$&&(null!==K&&(clearInterval(K),K=null),Q&&(n=Q,Q=null,n()))}function r(r){n(r.instance)}function e(n){return(_||!s&&!p||"function"!=typeof fetch||rn("file://")?new Promise(function(n){n(an())}):fetch(tn,{credentials:"same-origin"}).then(function(n){if(!n.ok)throw"failed to load wasm binary file at '"+tn+"'";return n.arrayBuffer()}).catch(function(){return an()})).then(function(n){return WebAssembly.instantiate(n,t)}).then(n,function(n){w("failed to asynchronously prepare wasm: "+n),nn(n)})}var t={a:Nn};if($++,i.monitorRunDependencies&&i.monitorRunDependencies($),i.instantiateWasm)try{return i.instantiateWasm(t,n)}catch(o){return w("Module.instantiateWasm callback failed with error: "+o),!1}(function(){if(_||"function"!=typeof WebAssembly.instantiateStreaming||en()||rn("file://")||"function"!=typeof fetch)return e(r);fetch(tn,{credentials:"same-origin"}).then(function(n){return WebAssembly.instantiateStreaming(n,t).then(r,function(n){return w("wasm streaming compile failed: "+n),w("falling back to ArrayBuffer instantiation"),e(r)})})})()}();var Bn=i.___wasm_call_ctors=function(){return(Bn=i.___wasm_call_ctors=i.asm.G).apply(null,arguments)},Ln=i._malloc=function(){return(Ln=i._malloc=i.asm.H).apply(null,arguments)},Vn=i._free=function(){return(Vn=i._free=i.asm.I).apply(null,arguments)},zn=i.___getTypeName=function(){return(zn=i.___getTypeName=i.asm.J).apply(null,arguments)};i.___embind_register_native_and_builtin_types=function(){return(i.___embind_register_native_and_builtin_types=i.asm.K).apply(null,arguments)};var qn=i._setThrew=function(){return(qn=i._setThrew=i.asm.L).apply(null,arguments)},Gn=i.stackSave=function(){return(Gn=i.stackSave=i.asm.M).apply(null,arguments)},Xn=i.stackRestore=function(){return(Xn=i.stackRestore=i.asm.N).apply(null,arguments)},Jn=i.dynCall_v=function(){return(Jn=i.dynCall_v=i.asm.O).apply(null,arguments)},Yn=i.dynCall_vi=function(){return(Yn=i.dynCall_vi=i.asm.P).apply(null,arguments)},Zn=i.dynCall_vii=function(){return(Zn=i.dynCall_vii=i.asm.Q).apply(null,arguments)},$n=i.dynCall_viiii=function(){return($n=i.dynCall_viiii=i.asm.R).apply(null,arguments)};i.dynCall_ii=function(){return(i.dynCall_ii=i.asm.S).apply(null,arguments)};var Kn=i.dynCall_iii=function(){return(Kn=i.dynCall_iii=i.asm.T).apply(null,arguments)};i.dynCall_iiii=function(){return(i.dynCall_iiii=i.asm.U).apply(null,arguments)};var Qn,nr=i.dynCall_iiiii=function(){return(nr=i.dynCall_iiiii=i.asm.V).apply(null,arguments)};function rr(){function n(){if(!Qn&&(Qn=!0,i.calledRun=!0,!T)){if(q(X),q(J),o(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;){var n=i.postRun.shift();Y.unshift(n)}q(Y)}}if(!(0<$)){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)Z();q(G),0<$||(i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),n()},1)):n())}}if(i.dynCall_viiiiii=function(){return(i.dynCall_viiiiii=i.asm.W).apply(null,arguments)},i.dynCall_viiiiiiii=function(){return(i.dynCall_viiiiiiii=i.asm.X).apply(null,arguments)},i.dynCall_viiiiiiiiiii=function(){return(i.dynCall_viiiiiiiiiii=i.asm.Y).apply(null,arguments)},i.dynCall_viii=function(){return(i.dynCall_viii=i.asm.Z).apply(null,arguments)},i.dynCall_viiiiiii=function(){return(i.dynCall_viiiiiii=i.asm._).apply(null,arguments)},i.dynCall_iiiiiii=function(){return(i.dynCall_iiiiiii=i.asm.$).apply(null,arguments)},i.dynCall_iidiiii=function(){return(i.dynCall_iidiiii=i.asm.aa).apply(null,arguments)},i.dynCall_i=function(){return(i.dynCall_i=i.asm.ba).apply(null,arguments)},i.dynCall_viiiiiiiiii=function(){return(i.dynCall_viiiiiiiiii=i.asm.ca).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.da).apply(null,arguments)},i.dynCall_viiiii=function(){return(i.dynCall_viiiii=i.asm.ea).apply(null,arguments)},Q=function n(){Qn||rr(),Qn||(Q=n)},i.run=rr,i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);0<i.preInit.length;)i.preInit.pop()();return!0,rr(),r.ready}}();n.exports=i}).call(this,"/index.js","/")},21:function(n,r,e){n.exports=e.p+"avif_dec.5f23d.wasm"},35:function(n,r,e){"use strict";e.r(r),e.d(r,"decode",function(){return l});var t=e(20),i=e.n(t),o=e(21),a=e.n(o),u=e(0);let f;async function l(n){f||(f=Object(u.b)(i.a,a.a));const r=(await f).decode(n);if(!r)throw new Error("Decoding error");return r}}});
//# sourceMappingURL=process-avif-dec.af895.worker.js.map