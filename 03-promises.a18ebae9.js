parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"GyVV":[function(require,module,exports) {
const e=document.querySelector(".form");e.addEventListener("submit",o);let t,n=null;function o(e){for(let t=1;t<=e.currentTarget.amount.value;t++)setTimeout(()=>{n=e.currentTarget.delay.value+e.currentTarget.step.value,r(t,n)},n)}function r(e,o){return new Promise((e,o)=>{const r=Math.random()>.3;n,t,r&&e(t,n),o(t,n)})}r(2,1500).then((e,t)=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)}).catch((e,t)=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)});
},{}]},{},["GyVV"], null)
//# sourceMappingURL=/parcel-project-template/03-promises.a18ebae9.js.map