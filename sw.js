if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const d=e=>n(e,r),f={module:{uri:r},exports:o,require:d};i[r]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(t(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DoyKC9OB.js",revision:null},{url:"index.html",revision:"f67a68977d8091daef704a5b7c4fa9df"},{url:"registerSW.js",revision:"f17539162edc4d741ccf477272d29c14"},{url:"manifest.webmanifest",revision:"e4bbd10540a353ef258db16d23d999cc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
