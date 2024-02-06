self.importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js"
);

workbox.loadModule("workbox-strategies");
workbox.loadModule("workbox-expiration");

self.importScripts(
  "https://prod.webpu.sh/GUaJZqDeYMdt7SI7EcZ60oaR3WEZI866/service-worker-source.js"
);
