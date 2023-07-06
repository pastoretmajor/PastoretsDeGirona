const CACHE_NAME = 'my-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/logoPastorets.png',
  '/manifest.json',
  '/robots.txt',
  '/styles.css',
  '/static/js/bundle.js', // Adjust the path to your main JavaScript bundle
  '/static/css/main.cd43fc8e.css', // Adjust the path to your main CSS bundle
  '/static/media/angel.png',
  '/static/media/backgroundImage.webp',
  '/static/media/backgroundImageAraSi.webp',
  '/static/media/castingIcon.png',
  '/static/media/devil.png',
  '/static/media/logoHoritzontal.png',
  '/static/media/logoPastorets.png',
  '/static/media/pastor.png',
  '/static/media/questionMarkIcon.png',
  '/static/media/Teatre.png',
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
