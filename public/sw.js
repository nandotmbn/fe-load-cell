if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/LOGO_ITS.png",revision:"4b21c066a2e61bf96557f6fbbd9794c4"},{url:"/_next/static/chunks/148-23d0ba734d6b3eee.js",revision:"23d0ba734d6b3eee"},{url:"/_next/static/chunks/193-146d2894ff987077.js",revision:"146d2894ff987077"},{url:"/_next/static/chunks/1b8dab7b-2716683395afefb1.js",revision:"2716683395afefb1"},{url:"/_next/static/chunks/228771e0-f8dd426379b86d8c.js",revision:"f8dd426379b86d8c"},{url:"/_next/static/chunks/27-8832b49f7bfba1a4.js",revision:"8832b49f7bfba1a4"},{url:"/_next/static/chunks/367-3adb68078a6c9530.js",revision:"3adb68078a6c9530"},{url:"/_next/static/chunks/65291039-10a4df4aa224037e.js",revision:"10a4df4aa224037e"},{url:"/_next/static/chunks/710-e3d71fcf4ffdbbd3.js",revision:"e3d71fcf4ffdbbd3"},{url:"/_next/static/chunks/755-89585302e04ce001.js",revision:"89585302e04ce001"},{url:"/_next/static/chunks/757-c88b9177f000f3b3.js",revision:"c88b9177f000f3b3"},{url:"/_next/static/chunks/75fc9c18-36f994258e23e278.js",revision:"36f994258e23e278"},{url:"/_next/static/chunks/847-3639a54e35f61539.js",revision:"3639a54e35f61539"},{url:"/_next/static/chunks/917-64d1ca244c00bcc8.js",revision:"64d1ca244c00bcc8"},{url:"/_next/static/chunks/c9184924-f0fcb8cd5ef8f18a.js",revision:"f0fcb8cd5ef8f18a"},{url:"/_next/static/chunks/framework-2bb1844fb22814b3.js",revision:"2bb1844fb22814b3"},{url:"/_next/static/chunks/main-ff9f0b37f7654bf6.js",revision:"ff9f0b37f7654bf6"},{url:"/_next/static/chunks/pages/404-3c19814fdbd5ab77.js",revision:"3c19814fdbd5ab77"},{url:"/_next/static/chunks/pages/_app-62a8796ccb092693.js",revision:"62a8796ccb092693"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/auth-976ac5cc30bd2235.js",revision:"976ac5cc30bd2235"},{url:"/_next/static/chunks/pages/auth/signin-2f6493769e3fe7ef.js",revision:"2f6493769e3fe7ef"},{url:"/_next/static/chunks/pages/auth/signup-b3380de6162b1df2.js",revision:"b3380de6162b1df2"},{url:"/_next/static/chunks/pages/dashboard-00321e5b2ed23a79.js",revision:"00321e5b2ed23a79"},{url:"/_next/static/chunks/pages/dashboard/management-caf2bb69dd844d27.js",revision:"caf2bb69dd844d27"},{url:"/_next/static/chunks/pages/dashboard/management/history-dee1c31a1e99b88a.js",revision:"dee1c31a1e99b88a"},{url:"/_next/static/chunks/pages/dashboard/management/today-66d444391868a0b6.js",revision:"66d444391868a0b6"},{url:"/_next/static/chunks/pages/dashboard/users-6a305ed7b1a147b6.js",revision:"6a305ed7b1a147b6"},{url:"/_next/static/chunks/pages/dashboard/users/access-55673a2723b90f90.js",revision:"55673a2723b90f90"},{url:"/_next/static/chunks/pages/dashboard/users/profile-ee58e67a82c7f25b.js",revision:"ee58e67a82c7f25b"},{url:"/_next/static/chunks/pages/developer-f7ec644d9c74e6b0.js",revision:"f7ec644d9c74e6b0"},{url:"/_next/static/chunks/pages/documentation-26f40c1981347913.js",revision:"26f40c1981347913"},{url:"/_next/static/chunks/pages/index-e550b51a6cba5a9f.js",revision:"e550b51a6cba5a9f"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-36d12a75f0098f30.js",revision:"36d12a75f0098f30"},{url:"/_next/static/css/028f068b17183153.css",revision:"028f068b17183153"},{url:"/_next/static/mvBl4LourtjE7ajXCjLZI/_buildManifest.js",revision:"8837315d96575ea2486460118a81bfde"},{url:"/_next/static/mvBl4LourtjE7ajXCjLZI/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/developer.jpg",revision:"6ee58b47eef8362b199f521386a96806"},{url:"/favicon.ico",revision:"ae01b5c5e6b98a622954943b007c15cf"},{url:"/icon-192x192.png",revision:"ec46c2dacbf51828736883bda5c7b01b"},{url:"/icon-256x256.png",revision:"ea39581f50e03e0654ad5ac611d9b626"},{url:"/icon-384x384.png",revision:"b1b9eebb38ca46c75d54572ffcf11df4"},{url:"/icon-512x512.png",revision:"1f275e3ffec41bfc13140ced5ea13beb"},{url:"/images/Logo_PENS_White.png",revision:"93b4199b63af52f93809af91a6df6416"},{url:"/images/en.png",revision:"9a9d77961686d703e3a02186f9b1ea45"},{url:"/images/home/ornament_1.png",revision:"3cda8385034220b3d9c845190f40649f"},{url:"/images/home/ornament_2.png",revision:"3c92483affa9fb6695931d7edcdc33eb"},{url:"/images/home/ornament_3.png",revision:"238fdf483c359259e5a7af2eab3ee257"},{url:"/images/home/ornament_4.png",revision:"ce0b18b3bccbb4ebb93ea95016702941"},{url:"/images/home/pens_jumbotron.png",revision:"3c2b3d24efe0d920007b81cb66221898"},{url:"/images/home/scale1.png",revision:"e8cdae5c570ba5d2d84b1309d9b19478"},{url:"/images/id.png",revision:"a2acd84c9253477aecdfcd73e6f03a19"},{url:"/images/long-logo-invert.png",revision:"44af18148315b82263ecd31b7fa80eb2"},{url:"/images/long-logo.png",revision:"6df13c744cb166e1c501ffab33bbdf7f"},{url:"/images/programs/ee/ee-1.png",revision:"0e2367aceb95855ca8e1a85252e82984"},{url:"/images/programs/ice/ice-1.png",revision:"7e6b1d5e001172bb77ab004583ed0449"},{url:"/logo-white.png",revision:"d59c5d09b506805838a137bb3d4f0ee2"},{url:"/logo.png",revision:"07d08d7f940fd3eb6c84005b02f51f67"},{url:"/manifest.json",revision:"a4cd8b8abeddd1011ad90668e71b27a3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
