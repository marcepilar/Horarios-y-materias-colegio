const CACHE_NAME='horario-escolar-v1.4.0';
const ASSETS=[
 './',
 './index.html',
 './manifest.webmanifest',
 './service-worker.js',
 './version.json',
 './icon-192.png',
 './icon-512.png',
 './apple-touch-icon.png',
 './qr-horario.png'
];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET') return;
 event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(response=>{const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(req,copy)).catch(()=>{});return response;}).catch(()=>caches.match('./index.html'))));
});