let deferredPrompt;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
    .then(function () {
      console.log("Service Worker registerd");
    });
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  return false;
});

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
    // reject("error bo tak");
  }, 3000);
});

fetch("https://httpbin.org/ip")
  .then(value => {
    return value.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

promise.then(value => {
  console.log(value);
}).catch(reason =>  {
  console.error(reason);
});
