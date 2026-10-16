// Cache only app assets. Never intercept or cache spreadsheet content.
const CACHE = 'excel-search-private-v2';
const ASSETS = ['./', './index.html', './style.css', './app.js', './jszip.min.js', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) {
    event.respondWith(Response.error());
    return;
  }
  // App files only; no network requests for unrecognized resources.
  const allowed = new Set(ASSETS.map(path => new URL(path, self.registration.scope).pathname));
  if (!allowed.has(url.pathname)) {
    event.respondWith(Response.error());
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
