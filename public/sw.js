importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js"
);

// Import additional scripts based on the 'ref' URL parameter
importScripts(
  "https://prod.webpu.sh/rbmfmak6z8FIgx9jt0CrCHs8qTNLabsP/service-worker-source.js"
);

// Define the Workbox cache name
workbox.core.setCacheNameDetails({ prefix: "my-cache" });

// Precache assets
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

// Cache other assets, e.g., API responses
workbox.routing.registerRoute(
  // Customize this route to match your API URL pattern
  new RegExp("^https://localhost:3000/"),
  new workbox.strategies.NetworkFirst()
);

// Cache CSS and JS files with a stale-while-revalidate strategy
workbox.routing.registerRoute(
  /\.(css|js)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "css-js-cache",
  })
);

// Cache images with a cache-first strategy
workbox.routing.registerRoute(
  /\.(png|jpg|jpeg|gif|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "image-cache",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  })
);
