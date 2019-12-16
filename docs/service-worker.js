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
    "url": "assets/css/styles.37e6adb0.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/16.2f1f2a3a.js",
    "revision": "28e4716854057e6f9e2ed7fbf8288b0c"
  },
  {
    "url": "assets/js/app.2f1f2a3a.js",
    "revision": "3b0e28a4f35203b072e12bf9b0d0a34b"
  },
  {
    "url": "assets/js/en-US/guide/getting-started.md.2f1f2a3a.js",
    "revision": "5709522f901a3036c6d6142090badce6"
  },
  {
    "url": "assets/js/en-US/guide/mission.md.2f1f2a3a.js",
    "revision": "6f8471528eabfd20a45864b7abc09515"
  },
  {
    "url": "assets/js/en-US/guide/README.md.2f1f2a3a.js",
    "revision": "81f95ece3f07384519e2bfdde13fc581"
  },
  {
    "url": "assets/js/en-US/guide/run-on-android.md.2f1f2a3a.js",
    "revision": "146c6f0265445684ff76d9ade590ee22"
  },
  {
    "url": "assets/js/en-US/README.md.2f1f2a3a.js",
    "revision": "21a05ccb7704677080f8c1d41baa3c4b"
  },
  {
    "url": "assets/js/en-US/release-note.md.2f1f2a3a.js",
    "revision": "5607631be302fab7fb67e2249d629393"
  },
  {
    "url": "assets/js/guide/getting-started.md.2f1f2a3a.js",
    "revision": "f87be653c231229fc965ee75329db6e4"
  },
  {
    "url": "assets/js/guide/mission.md.2f1f2a3a.js",
    "revision": "7477e72a90b8ff1a1b4299035674bffa"
  },
  {
    "url": "assets/js/guide/README.md.2f1f2a3a.js",
    "revision": "1c0af7222ffd15fd1e155e927d86cf5e"
  },
  {
    "url": "assets/js/guide/run-on-android.md.2f1f2a3a.js",
    "revision": "0178b52141e95e3bac67354a887ec08b"
  },
  {
    "url": "assets/js/LayoutWrapper.2f1f2a3a.js",
    "revision": "03a79d585f55f9ed01a215463487f3d9"
  },
  {
    "url": "assets/js/notFoundWrapper.2f1f2a3a.js",
    "revision": "3f6c7997dea0fe7a94ac820770a15b6f"
  },
  {
    "url": "assets/js/README.md.2f1f2a3a.js",
    "revision": "1581c1a6c846f9ca18a19dbcc6683210"
  },
  {
    "url": "assets/js/release-note.md.2f1f2a3a.js",
    "revision": "b679656c5a3bae9b83001a175786a025"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.2f1f2a3a.js",
    "revision": "e0b5a4d7431dc915f2dcae9e53861ed2"
  },
  {
    "url": "en-US/guide/getting-started.html",
    "revision": "ab8e1ab237a55d0f4873b92455d403f5"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "82f9c87e3f670655377b498545a60307"
  },
  {
    "url": "en-US/guide/mission.html",
    "revision": "89535ef6e2e3256a499166c7e8fe8520"
  },
  {
    "url": "en-US/guide/run-on-android.html",
    "revision": "01cfcb7b822378d6e0871a619e356620"
  },
  {
    "url": "en-US/index.html",
    "revision": "139603c9cc44917ee1b764a2f8c40f5c"
  },
  {
    "url": "en-US/release-note.html",
    "revision": "2b6b1172388659759fccd802a0a68d38"
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
    "revision": "d4db1906aabd13f54302e5e43c11920a"
  },
  {
    "url": "guide/index.html",
    "revision": "a4f896b59e2c69fb202d08109cc458a4"
  },
  {
    "url": "guide/mission.html",
    "revision": "bea9790dd22a8be3f3d5d7ba5d49ea3e"
  },
  {
    "url": "guide/run-on-android.html",
    "revision": "180719b47de010583eb6e626f0a01125"
  },
  {
    "url": "index.html",
    "revision": "1d86f6d7ec9a3bf982932e4108843fe3"
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
    "revision": "ccfe01aee9a4436a6daa77b10163e60d"
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
