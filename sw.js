self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('s1k-cache').then(cache => {
      return cache.addAll(['index.html', 'style.css', 'script.js']);
    })
  );
});
