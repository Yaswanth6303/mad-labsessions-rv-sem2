self.addEventListener("load", () => {
  console.log(`Service worker loaded`);
});

self.addEventListener("register", () => {
  console.log(`Service worker registered`);
});

self.addEventListener("install", () => {
  console.log(`Service worker installed`);
});

self.addEventListener("fetch", (event) => {
  console.log(`Fetch event: ${event.request.url}`);
});
