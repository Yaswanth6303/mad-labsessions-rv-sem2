// Install Event
var stock_cache = "stock";
var assets = [
  "/",
  "/index.html",
  "/manifest.json",
  "/sw.js",
  "/app.js",
  "/stock.json",
  "/assets/logo.png",
];

self.addEventListener("install", (event) => {
  console.log("Service Worker Installed");

  event.waitUntil(
    caches
      .open(stock_cache)
      .then((cache) => {
        console.log("Caching Files");
        return cache.addAll(assets);
      })
      .catch((err) => {
        console.log("Cache Error:", err);
      }),
  );
});

// Activate Event
self.addEventListener("activate", (event) => {
  console.log("Service Worker Activated");
});

// Fetch Event
self.addEventListener("fetch", (event) => {
  console.log("Fetching:", event.request.url);

  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        // Return cached response if found
        if (response) {
          return response;
        }

        // Otherwise fetch from network
        return fetch(event.request);
      })
      .catch((err) => {
        console.log("Fetch Error:", err);
      }),
  );
});
