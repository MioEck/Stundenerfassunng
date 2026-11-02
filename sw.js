// Service Worker — macht die App offline-fähig und installierbar
// Bei jeder Änderung an der App CACHE_NAME hochzählen, dann erscheint „Update verfügbar“.
const CACHE_NAME = 'stundenzettel-v40';
const URLS = [
  './',
  './index.html',
  './stundenzettel.html',
  './manifest.json',
  './logo.png',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './favicon-32.png'
];

self.addEventListener('install', (event) => {
  // cache: 'reload' umgeht den Browser-Cache, damit wirklich die neue Version geladen wird
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(URLS.map((url) =>
        fetch(url, { cache: 'reload' }).then((resp) => {
          if (!resp.ok) throw new Error(`${url}: ${resp.status}`);
          return cache.put(url, resp);
        })
      ))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  // Nur eigene GET-Anfragen aus dem Cache bedienen (GitHub-Sync läuft direkt übers Netz)
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((response) => response || fetch(req))
  );
});
