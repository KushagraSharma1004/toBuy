if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=e=>n(e,r),d={module:{uri:r},exports:o,require:c};i[r]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-C2AzvS-9.js",revision:null},{url:"index.html",revision:"30f9c47838a1022b7b40c2a4245015a2"},{url:"registerSW.js",revision:"f17539162edc4d741ccf477272d29c14"},{url:"manifest.webmanifest",revision:"e4bbd10540a353ef258db16d23d999cc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
