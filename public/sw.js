self.addEventListener("install", function (event) {
  console.log("installing sw", event);
});

self.addEventListener("activate", function (event) {
  console.log("activating sw", event);
  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  console.log("fetch sw", event);
  event.respondWith(fetch(event.request));
});