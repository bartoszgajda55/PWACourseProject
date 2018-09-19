self.addEventListener("install", function (event) {
  console.log("installing sw", event);
  event.waitUntil(
    caches.open("static")
      .then(function (cache) {
        console.log("precaching app shell");
        cache.add("/src/js/app.js");
      })
  );
});

self.addEventListener("activate", function (event) {
  console.log("activating sw", event);
  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  event.respondWith(fetch(event.request));
});