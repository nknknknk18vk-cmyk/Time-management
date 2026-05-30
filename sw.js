const CACHE_NAME = 'prep-tracker-v1';
const ASSETS_TO_CACHE = [
  '/preparation/',
  '/preparation/index.html',
  // Add your CSS and JS files here, e.g.:
  // '/preparation/style.css',
  // '/preparation/script.js'
];

// Install Event: Cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch Event: Serve from cache if available, else fetch from network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
