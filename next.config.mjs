import withPWA from "next-pwa";

export default withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.(?:gstatic\.com|googleapis\.com)/,
        handler: "CacheFirst",
        options: {
          cacheName: "google-fonts-stylesheets",
        },
      },
      // ... other runtime caching rules
    ],
  },
  // ... other Next.js config
});
