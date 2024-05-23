self.addEventListener('fetch', (event) => {
    // Only cache GET requests
    if (event.request.method === 'GET') {
      event.respondWith(
        caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }
  
          return fetch(event.request).then((networkResponse) => {
            // Check if the response is valid
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
  
            // Clone the response to cache it
            const responseToCache = networkResponse.clone();
  
            caches.open('your-cache-name').then((cache) => {
              cache.put(event.request, responseToCache);
            });
  
            return networkResponse;
          });
        })
      );
    }
  });
  const CACHE_NAME = 'your-cache-name';
  const urlsToCache = [
    // List your URLs to cache here
  ];
  
  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
    );
  });
  
  self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
    