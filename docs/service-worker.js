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
    "url": "assets/css/styles.efe706a2.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/16.1b395339.js",
    "revision": "28e4716854057e6f9e2ed7fbf8288b0c"
  },
  {
    "url": "assets/js/app.1b395339.js",
    "revision": "d8e512bf0047d7bf2a5028a916a18116"
  },
  {
    "url": "assets/js/en-US/guide/getting-started.md.1b395339.js",
    "revision": "6788961660468004c3b4d6164ea48dff"
  },
  {
    "url": "assets/js/en-US/guide/mission.md.1b395339.js",
    "revision": "6f8471528eabfd20a45864b7abc09515"
  },
  {
    "url": "assets/js/en-US/guide/README.md.1b395339.js",
    "revision": "81f95ece3f07384519e2bfdde13fc581"
  },
  {
    "url": "assets/js/en-US/guide/run-on-android.md.1b395339.js",
    "revision": "146c6f0265445684ff76d9ade590ee22"
  },
  {
    "url": "assets/js/en-US/README.md.1b395339.js",
    "revision": "efdbe5e08ed3a358b432c96ac1927b86"
  },
  {
    "url": "assets/js/en-US/release-note.md.1b395339.js",
    "revision": "25ea9bf9c227bcf21ca9a6d1bc2e36a7"
  },
  {
    "url": "assets/js/guide/getting-started.md.1b395339.js",
    "revision": "f87be653c231229fc965ee75329db6e4"
  },
  {
    "url": "assets/js/guide/mission.md.1b395339.js",
    "revision": "7477e72a90b8ff1a1b4299035674bffa"
  },
  {
    "url": "assets/js/guide/README.md.1b395339.js",
    "revision": "1c0af7222ffd15fd1e155e927d86cf5e"
  },
  {
    "url": "assets/js/guide/run-on-android.md.1b395339.js",
    "revision": "0178b52141e95e3bac67354a887ec08b"
  },
  {
    "url": "assets/js/LayoutWrapper.1b395339.js",
    "revision": "03a79d585f55f9ed01a215463487f3d9"
  },
  {
    "url": "assets/js/notFoundWrapper.1b395339.js",
    "revision": "3f6c7997dea0fe7a94ac820770a15b6f"
  },
  {
    "url": "assets/js/README.md.1b395339.js",
    "revision": "6b207c23d285473a93a2dca8fe0bd5c3"
  },
  {
    "url": "assets/js/release-note.md.1b395339.js",
    "revision": "1c325067e3fe0b58f73bc42264c2d46e"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.1b395339.js",
    "revision": "e0b5a4d7431dc915f2dcae9e53861ed2"
  },
  {
    "url": "en-US/guide/getting-started.html",
    "revision": "1cf1d915ee5e7e2c27041274eff82367"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "7326e6d9bd26368c77434719dbca74ea"
  },
  {
    "url": "en-US/guide/mission.html",
    "revision": "cd23bb5aad4e454ca52ca899fb3efcfd"
  },
  {
    "url": "en-US/guide/run-on-android.html",
    "revision": "6fc25b313b5a84e8be2c4c66758d3927"
  },
  {
    "url": "en-US/index.html",
    "revision": "0628c5c4e24c8996a11334c22cc5a14b"
  },
  {
    "url": "en-US/release-note.html",
    "revision": "b5428568472adfe5d14467ddb6c5b9cb"
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
    "revision": "8ee186d98c3fdc2c08080952f9c87d26"
  },
  {
    "url": "guide/index.html",
    "revision": "7bb02c2b0c166db7a9b4c00e9a7fa288"
  },
  {
    "url": "guide/mission.html",
    "revision": "455a074b3878367ab1169e4bde0dc00e"
  },
  {
    "url": "guide/run-on-android.html",
    "revision": "dd48e4e150e1f83f67f508abac73f644"
  },
  {
    "url": "index.html",
    "revision": "de8824cddbf3529833a74ebaafd543dc"
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
    "revision": "d48cbfda6719b802b75fc5fcec5a29af"
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
