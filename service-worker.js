const CACHE_NAME = 'spotifyrewind-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/song.html',
        '/manifest.json',

        '/styles/styles.css',

        '/scripts/musicplayer.js',
        '/scripts/gridimageopen.js',
        '/scripts/messageopen.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})