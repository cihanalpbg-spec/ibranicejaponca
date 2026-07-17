const CACHE_NAME = 'lingostudy-cache-v2';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;700;800&family=Noto+Sans+JP:wght@300;400;500;700&family=Outfit:wght@300;400;500;600;700;800&display=swap'
];

// Install Event - Cache all essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching all assets');
      return cache.addAll(ASSETS);
    }).then(() => {
      // Force the waiting service worker to become the active service worker
      return self.skipWaiting();
    })
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      // Allow the active service worker to set itself as the controller for all clients within its scope
      return self.clients.claim();
    })
  );
});

// Fetch Event - Stale-while-revalidate Strategy
// This allows instantaneous loading from cache while checking for updates in the background
self.addEventListener('fetch', (event) => {
  // Only handle GET requests and local/safe HTTP resources
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        // Check if response is valid
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch((err) => {
        console.log('[Service Worker] Fetch failed, serving cached asset:', err);
      });
      
      // Return cached response immediately if present, otherwise wait for network fetch
      return cachedResponse || fetchPromise;
    })
  );
});
