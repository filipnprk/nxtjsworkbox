import withPWA from "next-pwa";

export default withPWA({
  dest: "public",
  runtimeCaching: [
    // Define runtime caching rules here
  ],
  // ... other PWA config
  // other Next.js config options here
});
