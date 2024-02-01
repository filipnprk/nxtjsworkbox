if (!self.define) {
  let e,
    s = {};
  const c = (c, i) => (
    (c = new URL(c + ".js", i).href),
    s[c] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = c), (e.onload = s), document.head.appendChild(e);
        } else (e = c), importScripts(c), s();
      }).then(() => {
        let e = s[c];
        if (!e) throw new Error(`Module ${c} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, t) => {
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[a]) return;
    let f = {};
    const n = (e) => c(e, a),
      r = {
        module: {
          uri: a,
        },
        exports: f,
        require: n,
      };
    s[a] = Promise.all(i.map((e) => r[e] || n(e))).then((e) => (t(...e), f));
  };
}
define(["./workbox-f8ae644d"], function (e) {
  "use strict";
  importScripts(
    "https://prod.webpu.sh/rbmfmak6z8FIgx9jt0CrCHs8qTNLabsP/service-worker-source.js"
  ),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/framework-5429a50ba5373c56.js",
          revision: "5429a50ba5373c56",
        },
        {
          url: "/_next/static/chunks/main-c84f94ed95976fc3.js",
          revision: "c84f94ed95976fc3",
        },
        {
          url: "/_next/static/chunks/pages/_app-399b5d72f15800d1.js",
          revision: "399b5d72f15800d1",
        },
        {
          url: "/_next/static/chunks/pages/_error-5a00309fd5f4b49e.js",
          revision: "5a00309fd5f4b49e",
        },
        {
          url: "/_next/static/chunks/pages/index-aee2d8454a17f51d.js",
          revision: "aee2d8454a17f51d",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",
          revision: "8fa1640cc84ba8fe",
        },
        {
          url: "/_next/static/css/073066c4e7875270.css",
          revision: "073066c4e7875270",
        },
        {
          url: "/_next/static/css/876d048b5dab7c28.css",
          revision: "876d048b5dab7c28",
        },
        {
          url: "/_next/static/jXYs3liwKyA2-m4O2Vix3/_buildManifest.js",
          revision: "e6faa35ed1d23b336beb07deaa30fdd7",
        },
        {
          url: "/_next/static/jXYs3liwKyA2-m4O2Vix3/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/media/05a31a2ca4975f99-s.woff2",
          revision: "f1b44860c66554b91f3b1c81556f73ca",
        },
        {
          url: "/_next/static/media/513657b02c5c193f-s.woff2",
          revision: "c4eb7f37bc4206c901ab08601f21f0f2",
        },
        {
          url: "/_next/static/media/51ed15f9841b9f9d-s.woff2",
          revision: "bb9d99fb9bbc695be80777ca2c1c2bee",
        },
        {
          url: "/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",
          revision: "74c3556b9dad12fb76f84af53ba69410",
        },
        {
          url: "/_next/static/media/d6b16ce4a6175f26-s.woff2",
          revision: "dd930bafc6297347be3213f22cc53d3e",
        },
        {
          url: "/_next/static/media/ec159349637c90ad-s.woff2",
          revision: "0e89df9522084290e01e4127495fae99",
        },
        {
          url: "/_next/static/media/fd4db3eb5472fc27-s.woff2",
          revision: "71f3fcaf22131c3368d9ec28ef839831",
        },
        {
          url: "/favicon.ico",
          revision: "c30c7d42707a47a3f4591831641e50dc",
        },
        {
          url: "/next.svg",
          revision: "8e061864f388b47f33a1c3780831193e",
        },
        {
          url: "/testfile.js",
          revision: "67b4b17c93a1b5b072fd4c8831f2b75d",
        },
        {
          url: "/vercel.svg",
          revision: "61c6b19abff40ea7acd577be818f3976",
        },
      ],
      {
        ignoreURLParametersMatching: [],
      }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: c,
              state: i,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    );
});
