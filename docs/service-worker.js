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
    "url": "assets/css/12.styles.086a19bd.css",
    "revision": "4bbce5651b58e620b166c2ea49c25ca1"
  },
  {
    "url": "assets/css/13.styles.cfa8098d.css",
    "revision": "bfae747143c495094b77483463aabeb5"
  },
  {
    "url": "assets/css/14.styles.ae28dfad.css",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "assets/css/4.styles.88b22142.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/8.styles.c0c25a03.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/styles.8b7eabc0.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/14.38d177ac.js",
    "revision": "1bdaa015550091a138906d2abe0f0932"
  },
  {
    "url": "assets/js/app.38d177ac.js",
    "revision": "dd56f4ad8d245a721d1a845b7d88a7d3"
  },
  {
    "url": "assets/js/en-US/guide/getting-started.md.38d177ac.js",
    "revision": "9090935bc3c190c4a9630f13116f2d4d"
  },
  {
    "url": "assets/js/en-US/guide/mission.md.38d177ac.js",
    "revision": "e2a36cd32e0a4648215572c28940c7c9"
  },
  {
    "url": "assets/js/en-US/guide/README.md.38d177ac.js",
    "revision": "c83c75a977015c0d7b01a07efa74beef"
  },
  {
    "url": "assets/js/en-US/guide/run-on-android.md.38d177ac.js",
    "revision": "afab34fa8cbe1e8e86e6daa8527870e5"
  },
  {
    "url": "assets/js/en-US/README.md.38d177ac.js",
    "revision": "f761941f834cdcd1963d281821c8dea0"
  },
  {
    "url": "assets/js/guide/getting-started.md.38d177ac.js",
    "revision": "c33f0ebae707f374c2849ff617fb7ae2"
  },
  {
    "url": "assets/js/guide/mission.md.38d177ac.js",
    "revision": "392083d76a814b562e4ed9b72c121675"
  },
  {
    "url": "assets/js/guide/README.md.38d177ac.js",
    "revision": "543f7cb435d2495d28cff38daad0f51f"
  },
  {
    "url": "assets/js/guide/run-on-android.md.38d177ac.js",
    "revision": "85dd344d05282efaed78585582182f55"
  },
  {
    "url": "assets/js/LayoutWrapper.38d177ac.js",
    "revision": "f6c80e0e141d9b0d0f4fe2d0281274af"
  },
  {
    "url": "assets/js/notFoundWrapper.38d177ac.js",
    "revision": "b8070dcb68e2cba7426aec279ebf3846"
  },
  {
    "url": "assets/js/README.md.38d177ac.js",
    "revision": "e9ec9532a280e62ba5c4e1ac99724ea2"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.38d177ac.js",
    "revision": "2094b96d18f25a7003800ad73c17d95b"
  },
  {
    "url": "en-US/guide/getting-started.html",
    "revision": "c96584536d2da06785b9e7e0721ac5c3"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "697464e5cb1f7c09c97034c80c96b32b"
  },
  {
    "url": "en-US/guide/mission.html",
    "revision": "c7d3f21ea3d40606fef9e7ac473a6cc7"
  },
  {
    "url": "en-US/guide/run-on-android.html",
    "revision": "f034a5b11894205478a6176711788fa5"
  },
  {
    "url": "en-US/index.html",
    "revision": "95527ba522ac931e795a586a55890cab"
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
    "revision": "2c80407f1ad5e372aac216edb45b9272"
  },
  {
    "url": "guide/index.html",
    "revision": "07894b397ed5bc7bb729960d870c5509"
  },
  {
    "url": "guide/mission.html",
    "revision": "430d48dafacce5986503486cf68de213"
  },
  {
    "url": "guide/run-on-android.html",
    "revision": "6eace0f9117e68f4e90b6194fc836a25"
  },
  {
    "url": "index.html",
    "revision": "68e6e1deda980e840920f79ee3aa3fc1"
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
