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

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://httpbin.org/ip");
xhr.responseType = "json";
xhr.onload = ev => {
  console.log(xhr.response);
};
xhr.onerror = ev => {
  console.log("error");
};
xhr.send();

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

fetch("https://httpbin.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({message: "Does this work?"}),
  mode: "cors"
})
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
