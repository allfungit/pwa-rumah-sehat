// (A) FILES TO CACHE
const cName = "JSQueue",
cFiles = [
  "favicon.png",
  "icon-512.png",
  "ding-dong.mp3",
  "1a-js-queue.html",
  "1b-js-queue.html",
  "2-js-queue.js",
  "2-js-queue.css"
];

// (B) CREATE/INSTALL CACHE
self.addEventListener("install", (evt) => {
  self.skipWaiting();
  evt.waitUntil(
    caches.open(cName)
    .then((cache) => { return cache.addAll(cFiles); })
    .catch((err) => { console.error(err) })
  );
});

// (C) LOAD FROM CACHE, FALLBACK TO NETWORK IF NOT FOUND
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request)
    .then((res) => { return res || fetch(evt.request); })
  );
});
