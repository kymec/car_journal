"use strict";var precacheConfig=[["/car_journal/addcar.31140e63.png","87274153c5d955884b523266b49fe31b"],["/car_journal/additem.7f21df66.png","34ef7fc4d9685bd21eb45ff6a68f6a2a"],["/car_journal/car_journal.43bc2561.js","4c4b0eec84776af41983c9986f808684"],["/car_journal/car_journal.b2d3cfc6.css","a6c2683bc55b245a1b26b283ce7af2b3"],["/car_journal/delete.fcdeff50.png","6d302144b7af621a85fb04791eb289cc"],["/car_journal/edit.74a36639.png","3c1c2ccf5cfadd1f1105c4d1441d4857"],["/car_journal/home.2e93d0c8.png","49127a7196a27cd3739fc6cdfd4c7ba8"],["/car_journal/icon-128x128.32d5dc3e.png","f28e5e083ce25a4a14cfaac8f5209137"],["/car_journal/icon-144x144.87a505a6.png","08940e93faa41a493454985197d7ea66"],["/car_journal/icon-152x152.38703dde.png","c1d5a3984e52474c2ea9a0f8c7a509e0"],["/car_journal/icon-192x192.114e7e34.png","9d8808a1fd4aa5d4a29a4a789a086e47"],["/car_journal/icon-384x384.49428bfc.png","e0b5d2e05ee54c22e6751093abcafdff"],["/car_journal/icon-512x512.9e2f9a60.png","f9d2a9b9560fb67f0c2fb56c6915be8b"],["/car_journal/icon-72x72.64453812.png","3102783f236a7ca360696ffc022331c2"],["/car_journal/icon-96x96.fb9524ff.png","6abbb8256a164307694c6792890a6559"],["/car_journal/index.html","c139bbfc1b858d4892bfbe64046c8c09"],["/car_journal/report.b226e05a.png","79b0a99923e344c2445d61475b42c211"],["/car_journal/tyre.e981b56d.png","5cb1f69f7d198464b7ba0b6dbba91d0c"]],cacheName="sw-precache-v3-car_journal-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=n),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,a,r){var t=new URL(e);return r&&t.pathname.match(r)||(t.search+=(t.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(a)),t.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var a=new URL(n).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],a=e[1],r=new URL(n,self.location),t=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(n){if(!n.ok)throw new Error("Request for "+a+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(a,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!n.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),n=urlsToCacheKeys.has(a));!n&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/car_journal/index.html",self.location).toString(),n=urlsToCacheKeys.has(a)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});