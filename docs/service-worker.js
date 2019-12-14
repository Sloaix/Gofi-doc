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
    "url": "assets/css/10.styles.302306e8.css",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "assets/css/4.styles.36f8662f.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/6.styles.acb48384.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/8.styles.b96d95ab.css",
    "revision": "4bbce5651b58e620b166c2ea49c25ca1"
  },
  {
    "url": "assets/css/9.styles.0cb7e971.css",
    "revision": "bfae747143c495094b77483463aabeb5"
  },
  {
    "url": "assets/css/styles.507342c2.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/10.9eb29aa0.js",
    "revision": "341027d64e88ba5852fca37f1afbf0f4"
  },
  {
    "url": "assets/js/app.9eb29aa0.js",
    "revision": "af038927a0fa09c7e142bf73e6013eb9"
  },
  {
    "url": "assets/js/en-US/guide/getting-started.md.9eb29aa0.js",
    "revision": "a9762ed994439522e8d3537b841de8c4"
  },
  {
    "url": "assets/js/en-US/guide/README.md.9eb29aa0.js",
    "revision": "58d6494490f468bb2c7a7e2db8f0de2c"
  },
  {
    "url": "assets/js/en-US/README.md.9eb29aa0.js",
    "revision": "6b97668c57a4e057cae66d1357486519"
  },
  {
    "url": "assets/js/guide/getting-started.md.9eb29aa0.js",
    "revision": "9c67058e84dac3786c4d13645d8aa19b"
  },
  {
    "url": "assets/js/guide/README.md.9eb29aa0.js",
    "revision": "aea807fdb6c25d943c1e31cbd1466d79"
  },
  {
    "url": "assets/js/LayoutWrapper.9eb29aa0.js",
    "revision": "76d5ad62e09018be9c5129efe0296a7a"
  },
  {
    "url": "assets/js/notFoundWrapper.9eb29aa0.js",
    "revision": "609dd6c650acab8301d33ceb33556131"
  },
  {
    "url": "assets/js/README.md.9eb29aa0.js",
    "revision": "9947e4c7dc267db35729d406dfbbcc1c"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.9eb29aa0.js",
    "revision": "52bdd61dfe1bb20906a634f7c76a295a"
  },
  {
    "url": "en-US/guide/getting-started.html",
    "revision": "c2dc43f8703529ebbeb206940514a01a"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "18132f3a983f26f8a3fa0c6f729b9f9c"
  },
  {
    "url": "en-US/index.html",
    "revision": "0b2fc41c2b1d1eed75459d96f00bf12f"
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
    "revision": "ee58e00a914270d58dab0ae3b1d30bf3"
  },
  {
    "url": "guide/index.html",
    "revision": "b4a73fb860d30c5e45517b6f6bd0873b"
  },
  {
    "url": "index.html",
    "revision": "090c768870c5f4e5bcb0581865a3d327"
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
