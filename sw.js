// sw.js (サービスワーカー)
const CACHE_NAME = 'burncalorie-v1';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './icon.png',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/vanilla-calendar-pro/build/vanilla-calendar.min.js',
  'https://cdn.jsdelivr.net/npm/vanilla-calendar-pro/build/vanilla-calendar.min.css'
];

// インストール時にファイルをキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

// キャッシュからレスポンスを返す
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});