var cacheName = "hello-pwa";
var filesToCache = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/main.js",
  "./images/hello-icon-128.png",
  "./images/hello-icon-144.png",
  "./images/hello-icon-152.png",
  "./images/hello-icon-192.png",
  "./images/hello-icon-256.png",
  "./images/hello-icon-512.png",
  "./images/bpvt0384ont81.png",
  "./fonts/noto-serif-v20-latin-regular.woff2",
  "./favicon.ico"
];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(cacheName);
        return cache.addAll(filesToCache);
      } catch (e) {
        console.log("after install", e.message);
      }
    })()
  );
});

/* Serve cached content when offline */
self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      try {
        const response = await caches.match(e.request);
        return response || fetch(e.request);
      } catch (e) {
        console.log(e.message);
      }
    })()
  );
});
