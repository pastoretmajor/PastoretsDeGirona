const CACHE_NAME = 'my-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/logoPastorets.webP',
  '/manifest.json',
  '/robots.txt',
  '/styles.css',
  '/static/js/bundle.js', // Adjust the path to your main JavaScript bundle
  '/static/css/main.cd43fc8e.css', // Adjust the path to your main CSS bundle
  '/static/media/angel.webP',
  '/static/media/backgroundImage.webp',
  '/static/media/backgroundImageAraSi.webp',
  '/static/media/castingIcon.webP',
  '/static/media/devil.webP',
  '/static/media/logoHoritzontal.webP',
  '/static/media/logoPastorets.webP',
  '/static/media/pastor.webP',
  '/static/media/questionMarkIcon.webP',
  '/static/media/Teatre.webP',
];

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
