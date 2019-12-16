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
    "url": "assets/css/styles.6028edd0.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/16.3972220c.js",
    "revision": "28e4716854057e6f9e2ed7fbf8288b0c"
  },
  {
    "url": "assets/js/app.3972220c.js",
    "revision": "e1d796b007804015fa393dd8cb072335"
  },
  {
    "url": "assets/js/en-US/guide/getting-started.md.3972220c.js",
    "revision": "5709522f901a3036c6d6142090badce6"
  },
  {
    "url": "assets/js/en-US/guide/mission.md.3972220c.js",
    "revision": "6f8471528eabfd20a45864b7abc09515"
  },
  {
    "url": "assets/js/en-US/guide/README.md.3972220c.js",
    "revision": "81f95ece3f07384519e2bfdde13fc581"
  },
  {
    "url": "assets/js/en-US/guide/run-on-android.md.3972220c.js",
    "revision": "7a800f0f33cb901cc6cd9957cf85afcf"
  },
  {
    "url": "assets/js/en-US/README.md.3972220c.js",
    "revision": "ed039a35f7a1e67f0bb40336dd81af7d"
  },
  {
    "url": "assets/js/en-US/release-note.md.3972220c.js",
    "revision": "5607631be302fab7fb67e2249d629393"
  },
  {
    "url": "assets/js/guide/getting-started.md.3972220c.js",
    "revision": "f87be653c231229fc965ee75329db6e4"
  },
  {
    "url": "assets/js/guide/mission.md.3972220c.js",
    "revision": "7477e72a90b8ff1a1b4299035674bffa"
  },
  {
    "url": "assets/js/guide/README.md.3972220c.js",
    "revision": "1c0af7222ffd15fd1e155e927d86cf5e"
  },
  {
    "url": "assets/js/guide/run-on-android.md.3972220c.js",
    "revision": "bae8b5156d12c88c9354f6f8de488a48"
  },
  {
    "url": "assets/js/LayoutWrapper.3972220c.js",
    "revision": "03a79d585f55f9ed01a215463487f3d9"
  },
  {
    "url": "assets/js/notFoundWrapper.3972220c.js",
    "revision": "3f6c7997dea0fe7a94ac820770a15b6f"
  },
  {
    "url": "assets/js/README.md.3972220c.js",
    "revision": "a43e7bb8ceaed53c7777aa4a672b0758"
  },
  {
    "url": "assets/js/release-note.md.3972220c.js",
    "revision": "b679656c5a3bae9b83001a175786a025"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.3972220c.js",
    "revision": "e0b5a4d7431dc915f2dcae9e53861ed2"
  },
  {
    "url": "en-US/guide/getting-started.html",
    "revision": "723d60e7103295e9ad04ca0f4109f475"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "eeed49ef64001c7e67055b827fbc7bdd"
  },
  {
    "url": "en-US/guide/mission.html",
    "revision": "81a954b59db9cbc073284736f3a937ff"
  },
  {
    "url": "en-US/guide/run-on-android.html",
    "revision": "f58b0d954fa32cec2c17cd5f25a82c09"
  },
  {
    "url": "en-US/index.html",
    "revision": "a074861a312a62235f580f6c5647b6e8"
  },
  {
    "url": "en-US/release-note.html",
    "revision": "92649b37413c2908460b889c583341ba"
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
    "revision": "0128d5f3dfe27aaefc01a160a97f7535"
  },
  {
    "url": "guide/index.html",
    "revision": "b7164864c553099c7d21e3ac1c3056eb"
  },
  {
    "url": "guide/mission.html",
    "revision": "c1afb476e9be8c24d122a7a9851c16c9"
  },
  {
    "url": "guide/run-on-android.html",
    "revision": "5d52d3f98f728a50bb2c287ad0a316d6"
  },
  {
    "url": "index.html",
    "revision": "ca3e77bcf42ff975175446c6e707117e"
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
    "revision": "e44149f305e1672278044fe9cac6be3f"
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
