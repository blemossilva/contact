// Service Worker para PWA - Bruno Lemos Silva
// Versão 1.0.0

const CACHE_NAME = 'bruno-lemos-contact-v1';
const urlsToCache = [
  '/contact/',
  '/contact/index.html',
  '/contact/qr_contact_brunolemossilva.png',
  '/contact/BrunoLemosSilva.vcf',
  '/contact/manifest.json'
];

// Instalação do Service Worker
self.addEventListener('install', event => {
  console.log('[Service Worker] Instalando...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Cache aberto');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('[Service Worker] Erro ao cachear:', err);
      })
  );

  // Forçar ativação imediata
  self.skipWaiting();
});

// Ativação do Service Worker
self.addEventListener('activate', event => {
  console.log('[Service Worker] Ativando...');

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  // Assumir controle imediato
  return self.clients.claim();
});

// Fetch - Estratégia: Cache First, depois Network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - retornar do cache
        if (response) {
          console.log('[Service Worker] Servindo do cache:', event.request.url);
          return response;
        }

        // Não encontrado no cache - buscar da rede
        console.log('[Service Worker] Buscando da rede:', event.request.url);
        return fetch(event.request).then(response => {
          // Verificar se resposta é válida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clonar resposta (pode ser usada apenas uma vez)
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(err => {
        console.error('[Service Worker] Erro no fetch:', err);

        // Fallback para offline
        if (event.request.destination === 'document') {
          return caches.match('/contact/index.html');
        }
      })
  );
});

// Mensagens do Service Worker
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Sincronização em background (opcional)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-contacts') {
    console.log('[Service Worker] Sincronização em background');
    // Implementar lógica de sincronização se necessário
  }
});

// Notificações Push (opcional - se implementar no futuro)
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Novo contacto disponível',
    icon: '/contact/qr_contact_brunolemossilva.png',
    badge: '/contact/qr_contact_brunolemossilva.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };

  event.waitUntil(
    self.registration.showNotification('Bruno Lemos Silva', options)
  );
});
