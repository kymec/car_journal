"use strict";var precacheConfig=[["/car_journal/addcar.722feff5.png","06bf53e8a8ec7a87fe97ec50090baa3a"],["/car_journal/additem.3fa6bb23.png","015b98a3d89ddba5ae00c76b6c972f04"],["/car_journal/backup.f99c4121.png","2972d4b330f8ab5ed269a9ce9acb76d0"],["/car_journal/car_journal.a7330d4f.js","8b4a91d21d2ff4d70503293981b09f20"],["/car_journal/car_journal.c283ecbb.css","de13b8a37087d6bbe1890098e3aadf3f"],["/car_journal/delete.b96039cd.png","92b7daef0cfe018551f44f2691a023fa"],["/car_journal/edit.95541e16.png","e3e15d1f6004ea7fe05c91693ac7827f"],["/car_journal/home.036639ce.png","6669972e0153c0a816ea4f08aabe3bc3"],["/car_journal/icon-128x128.32d5dc3e.png","f28e5e083ce25a4a14cfaac8f5209137"],["/car_journal/icon-144x144.87a505a6.png","08940e93faa41a493454985197d7ea66"],["/car_journal/icon-152x152.38703dde.png","c1d5a3984e52474c2ea9a0f8c7a509e0"],["/car_journal/icon-192x192.114e7e34.png","9d8808a1fd4aa5d4a29a4a789a086e47"],["/car_journal/icon-384x384.49428bfc.png","e0b5d2e05ee54c22e6751093abcafdff"],["/car_journal/icon-512x512.9e2f9a60.png","f9d2a9b9560fb67f0c2fb56c6915be8b"],["/car_journal/icon-72x72.64453812.png","3102783f236a7ca360696ffc022331c2"],["/car_journal/icon-96x96.fb9524ff.png","6abbb8256a164307694c6792890a6559"],["/car_journal/index.html","28d00fc53bb87f90b9e724063b14a2d2"],["/car_journal/report.500304b8.png","9fa5c3c3b2779d5aa2f1c4f486dc44e3"],["/car_journal/tyre.9916175e.jpg","ac6905ed232b481d37847184bdf579e0"]],cacheName="sw-precache-v3-car_journal-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,n,r){var t=new URL(e);return r&&t.pathname.match(r)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],r=new URL(a,self.location),t=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(n,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!a.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),a=urlsToCacheKeys.has(n));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/car_journal/index.html",self.location).toString(),a=urlsToCacheKeys.has(n)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});