if(!self.define){let e,i={};const t=(t,n)=>(t=new URL(t+".js",n).href,i[t]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=i,document.head.appendChild(e)}else e=t,importScripts(t),i()})).then((()=>{let e=i[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const d=e=>t(e,r),l={module:{uri:r},exports:o,require:d};i[r]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(s(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-D1tx--fw.js",revision:null},{url:"index.html",revision:"833b621492797537457b81246bd48841"},{url:"registerSW.js",revision:"f17539162edc4d741ccf477272d29c14"},{url:"manifest.webmanifest",revision:"e4bbd10540a353ef258db16d23d999cc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
