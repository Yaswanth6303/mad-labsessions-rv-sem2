var cacheName = "cache-data";
var assets = [
  "/",
  "/index.html",
  "/img/bathroomprod.jpg",
  "/img/camera.jpg",
  "/img/headphone.jpg",
  "/img/cosmetics.jpeg",
  "/js/script.js",
  "/sw.js",
  "/manifest.json",
];

self.addEventListener("install", (event) => {
  console.log(`Service Worker installing`);
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    }),
  );
});

self.addEventListener("activate", (event) => {
  console.log(`Service Worker activated`);
});

self.addEventListener("fetch", (event) => {
  console.log(event);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
