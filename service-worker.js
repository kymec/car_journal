"use strict";var precacheConfig=[["/car_journal/car_journal.8bec91b9.css","c6441ab42af72f2513c06b075875f604"],["/car_journal/car_journal.e31bd3eb.js","62f486d3988184596dc925e974fa2493"],["/car_journal/icon-128x128.ced52e5c.png","ffbe17a289c2874249722e2a223b48cd"],["/car_journal/icon-144x144.421ea6cc.png","ce8352b919dd52381e43fd0f89496ffd"],["/car_journal/icon-152x152.9e080804.png","27112b11f4546b111f92e8326d572ec3"],["/car_journal/icon-192x192.4d3b7a6b.png","b10a9b070a254b73a4751699a944e41d"],["/car_journal/icon-384x384.8dcfbb4e.png","d2b9cdf5e8d7b57bf465c194ea04286a"],["/car_journal/icon-512x512.00efe03e.png","61870e8dfe4e692afae9a7b940a80410"],["/car_journal/icon-72x72.29a7c6cf.png","78b9dca0abc550256f54fd7eabb8c4bc"],["/car_journal/icon-96x96.dbcc1348.png","64235ebb70f55845dc59d68fee3c04d5"],["/car_journal/index.html","823c2e90e52392bffe98da6b79876d47"]],cacheName="sw-precache-v3-car_journal-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=n),r.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,r,t){var a=new URL(e);return t&&a.pathname.match(t)||(a.search+=(a.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(r)),a.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var r=new URL(n).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,n){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],r=e[1],t=new URL(n,self.location),a=createCacheKey(t,hashParamName,r,/\.\w{8}\./);return[t.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!n.has(r)){var t=new Request(r,{credentials:"same-origin"});return fetch(t).then(function(n){if(!n.ok)throw new Error("Request for "+r+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(r,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(r){return Promise.all(r.map(function(r){if(!n.has(r.url))return e.delete(r)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,r=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,"index.html"),n=urlsToCacheKeys.has(r));!n&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(r=new URL("/car_journal/index.html",self.location).toString(),n=urlsToCacheKeys.has(r)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});