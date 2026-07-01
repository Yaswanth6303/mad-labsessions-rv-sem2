if ("ServiceWorker" in navigator) {
  navigator.ServiceWorker.register("/sw.js")
    .then((res) => console.log(`Service Worker Registered ${res}`))
    .catch((err) => console.log(`Registration Error ${err}`));
} else {
  console.log("Service worker not supported in this browser.");
}
