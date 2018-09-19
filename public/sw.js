self.addEventListener("install", function (event) {
  console.log("installing sw", event);
  event.waitUntil(
    caches.open("static")
      .then(function (cache) {
        console.log("precaching app shell");
        cache.add("/");
        cache.add("/index.html");
        cache.add("/src/js/app.js");
      })
  );
});

self.addEventListener("activate", function (event) {
  console.log("activating sw", event);
  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request);
        }
      })
  );
});