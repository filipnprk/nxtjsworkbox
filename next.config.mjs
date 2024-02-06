import { InjectManifest } from "workbox-webpack-plugin";

export default {
  webpack: (config, { isServer }) => {
    // if (!isServer) {
    //   // Add your custom service worker configuration
    //   config.plugins.push(
    //     new InjectManifest({
    //       swSrc: "./public/xpsw.js", // Path to your custom service worker file
    //       swDest: "out/service-worker.js",
    //       globDirectory: "out",
    //       globPatterns: ["**/*.html", "_next/**/*.{js,html,css}"],
    //     })
    //   );
    // }
    return config;
  },
};
