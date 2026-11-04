/* ValidLance · service worker: abre sin conexión y siempre busca primero la versión nueva. Versión: 8a9ae5b52c */
const V = 'vl-8a9ae5b52c';
const CORE = ['./', 'index.html', 'styles.css?v=8a9ae5b52c', 'app.js?v=8a9ae5b52c', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png', 'og.jpg'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(V).then((c) => Promise.all(CORE.map((u) => c.add(u).catch(() => null)))).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url); if (u.origin !== location.origin) return; // el servidor de IA y las webs externas no pasan por aquí
  if (/\/datos\//.test(u.pathname)) { e.respondWith(fetch(r).catch(() => caches.match(r))); return; } // datos de mercado del día: siempre los nuevos
  if (r.mode === 'navigate') { // la página: primero la red (versión nueva); sin conexión, la guardada
    e.respondWith(fetch(r).then((res) => { const cp = res.clone(); caches.open(V).then((c) => c.put('index.html', cp)); return res; }).catch(() => caches.match('index.html').then((m) => m || caches.match('./'))));
    return;
  }
  e.respondWith(caches.match(r).then((m) => m || fetch(r).then((res) => { if (res.ok) { const cp = res.clone(); caches.open(V).then((c) => c.put(r, cp)); } return res; })));
});
