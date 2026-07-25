const APP_CACHE = "violet-voices-app-v1-7";
const PIANO_CACHE = "violet-voices-piano-v1";
const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-192.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png",
  "./icons/favicon-16.png",
  "./README.md",
  "./AUDIO-LICENCE.txt",
  "./GPL-2.txt"
];
const PIANO_FILES = [
  "./piano/C2.mp3",
  "./piano/Ds2.mp3",
  "./piano/Fs2.mp3",
  "./piano/A2.mp3",
  "./piano/C3.mp3",
  "./piano/Ds3.mp3",
  "./piano/Fs3.mp3",
  "./piano/A3.mp3",
  "./piano/C4.mp3",
  "./piano/Ds4.mp3",
  "./piano/Fs4.mp3",
  "./piano/A4.mp3",
  "./piano/C5.mp3",
  "./piano/Ds5.mp3",
  "./piano/Fs5.mp3",
  "./piano/A5.mp3",
  "./piano/C6.mp3"
];

self.addEventListener("install", event => {
  event.waitUntil(
    Promise.all([
      caches.open(APP_CACHE).then(cache => cache.addAll(APP_FILES)),
      caches.open(PIANO_CACHE).then(cache => cache.addAll(PIANO_FILES))
    ]).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k.startsWith("violet-voices-app-") && k !== APP_CACHE)
          .map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  if (url.pathname.includes("/piano/")) {
    event.respondWith(
      caches.open(PIANO_CACHE).then(async cache => {
        const cached = await cache.match(event.request);
        if (cached) return cached;
        const response = await fetch(event.request);
        if (response.ok) cache.put(event.request, response.clone());
        return response;
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(APP_CACHE).then(cache => cache.put(event.request, copy));
      return response;
    }))
  );
});
