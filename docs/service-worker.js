/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "antd-icon.svg",
    "revision": "f31032253edf454e1280c009ce0277a5"
  },
  {
    "url": "assets/css/10.styles.f8e525c9.css",
    "revision": "4bbce5651b58e620b166c2ea49c25ca1"
  },
  {
    "url": "assets/css/11.styles.4c77fcd7.css",
    "revision": "bfae747143c495094b77483463aabeb5"
  },
  {
    "url": "assets/css/12.styles.6925c946.css",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "assets/css/4.styles.2304e433.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/7.styles.e159f18d.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/styles.a8a155fa.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/12.f9603732.js",
    "revision": "ba4cfcad4071a4a53066759bdd487830"
  },
  {
    "url": "assets/js/app.f9603732.js",
    "revision": "65f50d12d1420f661ceec750089681ae"
  },
  {
    "url": "assets/js/en-US/guide/getting-started.md.f9603732.js",
    "revision": "9090935bc3c190c4a9630f13116f2d4d"
  },
  {
    "url": "assets/js/en-US/guide/README.md.f9603732.js",
    "revision": "8d2203199b3b3b6d9922309415768063"
  },
  {
    "url": "assets/js/en-US/guide/run-on-android.md.f9603732.js",
    "revision": "7abfb676fb2e4e4c6ab8eb234395bc1d"
  },
  {
    "url": "assets/js/en-US/README.md.f9603732.js",
    "revision": "740524fe34235df6894047e9bd71a468"
  },
  {
    "url": "assets/js/guide/getting-started.md.f9603732.js",
    "revision": "2af18a3bc54b819e26bd3610d3eaf95e"
  },
  {
    "url": "assets/js/guide/README.md.f9603732.js",
    "revision": "bb221130b5d1fa4c39a7c3d1dd64409a"
  },
  {
    "url": "assets/js/guide/run-on-android.md.f9603732.js",
    "revision": "c38e1f3a816d7ae10f95f9b425534e30"
  },
  {
    "url": "assets/js/LayoutWrapper.f9603732.js",
    "revision": "73a52a6a640fa277fc912ee832b42977"
  },
  {
    "url": "assets/js/notFoundWrapper.f9603732.js",
    "revision": "ae1b3c6527b49de020f12dba506724d8"
  },
  {
    "url": "assets/js/README.md.f9603732.js",
    "revision": "38d4102de46e52a0910c3dcc6fe55142"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.f9603732.js",
    "revision": "e2280ff3d843f3b49ea98ce8237781ab"
  },
  {
    "url": "en-US/guide/getting-started.html",
    "revision": "de5380618afb06b56e95a7bbb853bc23"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "2be66c1fffaec7f039c7498e93ab68ca"
  },
  {
    "url": "en-US/guide/run-on-android.html",
    "revision": "9922a95144a954a4f3fbea61945e9979"
  },
  {
    "url": "en-US/index.html",
    "revision": "66f975c7636e974243b1e5667a4c640a"
  },
  {
    "url": "favicon.png",
    "revision": "0d661fc81feb7e20de06cb7096b54b81"
  },
  {
    "url": "favicon.svg",
    "revision": "bc60d6cdc7a8c17bf0c4fc7a37b06d03"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "2997132eb454219e7ef46ca938b2e14e"
  },
  {
    "url": "guide/index.html",
    "revision": "8dded4298bd2183b577ff704bae94cb0"
  },
  {
    "url": "guide/run-on-android.html",
    "revision": "554d7c631f6c5bb0ca64bdb1a89ff409"
  },
  {
    "url": "index.html",
    "revision": "915240e1ca8db9acf83205c061930c98"
  },
  {
    "url": "iris-icon.svg",
    "revision": "398c0766e132d315515f15598971158b"
  },
  {
    "url": "logo-192x192.png",
    "revision": "0d661fc81feb7e20de06cb7096b54b81"
  },
  {
    "url": "logo-512x512.png",
    "revision": "2439f0c7a1dd54560b947947b520e8dc"
  },
  {
    "url": "logo.svg",
    "revision": "bc60d6cdc7a8c17bf0c4fc7a37b06d03"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self
        .skipWaiting()
        .then(
          () => replyPort.postMessage({ error: null }),
          error => replyPort.postMessage({ error })
        )
    );
  }
});
