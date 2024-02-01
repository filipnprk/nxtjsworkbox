import { InjectManifest } from "workbox-webpack-plugin";

export default {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Add your custom service worker configuration
      config.plugins.push(
        new InjectManifest({
          swSrc: "./public/xpsw.js", // Path to your custom service worker file
          swDest: "service-worker.js",
          exclude: [/_buildManifest\.js$/, /_ssgManifest\.js$/],
        })
      );
    }
    return config;
  },
};
