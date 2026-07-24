const CACHE = "violet-voices-v1-2";
const ASSETS = ["./","./index.html","./manifest.webmanifest","./icons/apple-touch-icon.png","./icons/favicon-16.png","./icons/favicon-32.png","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-192.png","./icons/icon-maskable-512.png"];
self.addEventListener("install", event => { self.skipWaiting(); event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))); });
self.addEventListener("activate", event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", event => { event.respondWith(caches.match(event.request).then(response => response || fetch(event.request))); });
