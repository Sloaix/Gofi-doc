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
    "url": "assets/css/13.styles.7fa74bb9.css",
    "revision": "4bbce5651b58e620b166c2ea49c25ca1"
  },
  {
    "url": "assets/css/15.styles.ca424cfa.css",
    "revision": "bfae747143c495094b77483463aabeb5"
  },
  {
    "url": "assets/css/16.styles.f3d61237.css",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "assets/css/4.styles.2df3145b.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/9.styles.ec4d6ecc.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/styles.73a67443.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/16.1594c74c.js",
    "revision": "28e4716854057e6f9e2ed7fbf8288b0c"
  },
  {
    "url": "assets/js/app.1594c74c.js",
    "revision": "b10219191d71de2ddeb67b1208671cbf"
  },
  {
    "url": "assets/js/en-US/guide/getting-started.md.1594c74c.js",
    "revision": "6788961660468004c3b4d6164ea48dff"
  },
  {
    "url": "assets/js/en-US/guide/mission.md.1594c74c.js",
    "revision": "6f8471528eabfd20a45864b7abc09515"
  },
  {
    "url": "assets/js/en-US/guide/README.md.1594c74c.js",
    "revision": "81f95ece3f07384519e2bfdde13fc581"
  },
  {
    "url": "assets/js/en-US/guide/run-on-android.md.1594c74c.js",
    "revision": "c8fd0309a7c4e3a1a5d1b9b69add3377"
  },
  {
    "url": "assets/js/en-US/README.md.1594c74c.js",
    "revision": "efdbe5e08ed3a358b432c96ac1927b86"
  },
  {
    "url": "assets/js/en-US/release-note.md.1594c74c.js",
    "revision": "25ea9bf9c227bcf21ca9a6d1bc2e36a7"
  },
  {
    "url": "assets/js/guide/getting-started.md.1594c74c.js",
    "revision": "61d9672bd71e9db7eaacfd59a03b7625"
  },
  {
    "url": "assets/js/guide/mission.md.1594c74c.js",
    "revision": "7477e72a90b8ff1a1b4299035674bffa"
  },
  {
    "url": "assets/js/guide/README.md.1594c74c.js",
    "revision": "1c0af7222ffd15fd1e155e927d86cf5e"
  },
  {
    "url": "assets/js/guide/run-on-android.md.1594c74c.js",
    "revision": "a9cb6aacf17960cc186b1601608ba4c7"
  },
  {
    "url": "assets/js/LayoutWrapper.1594c74c.js",
    "revision": "03a79d585f55f9ed01a215463487f3d9"
  },
  {
    "url": "assets/js/notFoundWrapper.1594c74c.js",
    "revision": "3f6c7997dea0fe7a94ac820770a15b6f"
  },
  {
    "url": "assets/js/README.md.1594c74c.js",
    "revision": "6b207c23d285473a93a2dca8fe0bd5c3"
  },
  {
    "url": "assets/js/release-note.md.1594c74c.js",
    "revision": "1c325067e3fe0b58f73bc42264c2d46e"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.1594c74c.js",
    "revision": "e0b5a4d7431dc915f2dcae9e53861ed2"
  },
  {
    "url": "en-US/guide/getting-started.html",
    "revision": "004c592dce9355ca2c6b6dd4bfc8e2cd"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "3c0e421c79a897ef74be56eeb84495a7"
  },
  {
    "url": "en-US/guide/mission.html",
    "revision": "f148232dbe474276e9c03c0f9c6d2662"
  },
  {
    "url": "en-US/guide/run-on-android.html",
    "revision": "e23f76273773ff2a952e18ea307c5a41"
  },
  {
    "url": "en-US/index.html",
    "revision": "933557465d80b5092f7376042f74ec90"
  },
  {
    "url": "en-US/release-note.html",
    "revision": "14d0cbb360e28577c2b29d2f4f098198"
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
    "revision": "769fcb26f3a03770e3f365d1ec6aadb6"
  },
  {
    "url": "guide/index.html",
    "revision": "a762b5a9b17d7e8c5b4bad7807e16a34"
  },
  {
    "url": "guide/mission.html",
    "revision": "101f560a3dbbffe7ac66d2faa695f64e"
  },
  {
    "url": "guide/run-on-android.html",
    "revision": "04be551fac0067d3b6b2f03bb213b7e1"
  },
  {
    "url": "index.html",
    "revision": "2c4d7dda9e87a0e1b8a3efcdb99f2af8"
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
  },
  {
    "url": "release-note.html",
    "revision": "133fe821682bc8e30d31f7bb4e28fcf8"
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
