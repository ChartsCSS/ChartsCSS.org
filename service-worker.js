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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b868cc032a787b167e5a733992c0f2be"
  },
  {
    "url": "assets/css/0.styles.90673527.css",
    "revision": "77410c56c3c6ae84d0267f428bec59a3"
  },
  {
    "url": "assets/img/charts-css-anatomy-0-9-0.jpg",
    "revision": "3fc0c17964b4f51debb402229bf40c88"
  },
  {
    "url": "assets/img/html-css.png",
    "revision": "7ffa20302b6432f42fb6cc6c3a79ed51"
  },
  {
    "url": "assets/img/lana.jpg",
    "revision": "67e986cb584e02fe12284d13b098ac94"
  },
  {
    "url": "assets/img/logo-animation.svg",
    "revision": "e052684fdfc0872caa2a1138cdb17fda"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "3324ec97eb94cee3e419b48fccf7f516"
  },
  {
    "url": "assets/img/logo.svg",
    "revision": "bd28dd87f8e967fc3f42bec7df8ea8d0"
  },
  {
    "url": "assets/img/rami.jpg",
    "revision": "3256e82bfcb52c1eb0bce07cb4373e0b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f759717e.js",
    "revision": "2e1174214a6bcec03c4ae02c0515feea"
  },
  {
    "url": "assets/js/11.5c29c7dd.js",
    "revision": "da844523c0e99c4e6282255276009376"
  },
  {
    "url": "assets/js/12.050e982f.js",
    "revision": "6fc2191ae06177b69ab3a6eaf651898d"
  },
  {
    "url": "assets/js/13.7296b689.js",
    "revision": "b3320cf5939e866b72125dee2e574be1"
  },
  {
    "url": "assets/js/14.6535f793.js",
    "revision": "37334123056fc9ed79a1183c2961ef0a"
  },
  {
    "url": "assets/js/15.2151b38d.js",
    "revision": "ffc434c6d61c4c65e75966135eaceb3e"
  },
  {
    "url": "assets/js/16.c1120908.js",
    "revision": "5fc988a71db40a11f7bf6bb1216180e1"
  },
  {
    "url": "assets/js/17.cabce94b.js",
    "revision": "d2949e5a15e6ee8a05d818a1c8b016c7"
  },
  {
    "url": "assets/js/18.b942829e.js",
    "revision": "c85f44740e17ef462a0d1222f13d2b19"
  },
  {
    "url": "assets/js/19.2b0d60b8.js",
    "revision": "cec6d1b4939dcaa4402ebd47fb6488e3"
  },
  {
    "url": "assets/js/2.ee7b6655.js",
    "revision": "14b526d5e0036a240bd618a16fedece7"
  },
  {
    "url": "assets/js/20.f9db9d5e.js",
    "revision": "45c128ab4645f8944a7bbd9ea4dbd0c5"
  },
  {
    "url": "assets/js/21.f64c93b5.js",
    "revision": "dec15c1e7db62df806ebe75c14d18e75"
  },
  {
    "url": "assets/js/22.ec51e956.js",
    "revision": "5a1cb500572aa800314e056aeed67d3a"
  },
  {
    "url": "assets/js/23.40796659.js",
    "revision": "d1662ea11243f88769c11dca8b30c9d2"
  },
  {
    "url": "assets/js/24.aff94836.js",
    "revision": "e31f2d04c2043f857566b04816eca95c"
  },
  {
    "url": "assets/js/25.887670da.js",
    "revision": "33b02e8447e727a005e74ef3acb141f8"
  },
  {
    "url": "assets/js/26.cbccf081.js",
    "revision": "b3b9f3b06cc34e6c6c814827e54c89cc"
  },
  {
    "url": "assets/js/27.f54825ea.js",
    "revision": "9216a80275e195f3f126b1839875a32e"
  },
  {
    "url": "assets/js/28.002f8873.js",
    "revision": "1b3d6f189ba4ddc2f25f5d9b084ba216"
  },
  {
    "url": "assets/js/29.a08648fb.js",
    "revision": "ae146a5df6867cbd86ba79a35ef599f5"
  },
  {
    "url": "assets/js/3.fd109e8c.js",
    "revision": "bbc08d920acd9aa835ff2475a8f9a46f"
  },
  {
    "url": "assets/js/30.f7cd439f.js",
    "revision": "91be30fb97b0a59d095a18b12aa13091"
  },
  {
    "url": "assets/js/31.1cbf7cc1.js",
    "revision": "3560ae2840f868d8f0ff98de0463dfe6"
  },
  {
    "url": "assets/js/32.9107a9f8.js",
    "revision": "62f703a971285b13ddcced6377caea94"
  },
  {
    "url": "assets/js/33.587a9e61.js",
    "revision": "95b30df76ae5b9a91e7f3e3ba9aefe0f"
  },
  {
    "url": "assets/js/34.a936e762.js",
    "revision": "0697049ee3e57294a95036819edea8c0"
  },
  {
    "url": "assets/js/35.9ce624cb.js",
    "revision": "6633f3d104469836a407a5fae3ef53eb"
  },
  {
    "url": "assets/js/36.f7518840.js",
    "revision": "093cdd2f3e57c1d9fb9f76a3bf87a524"
  },
  {
    "url": "assets/js/37.3adbe6a3.js",
    "revision": "f6f0bfe6c25748b120034b729f0fcb13"
  },
  {
    "url": "assets/js/38.9602ddbb.js",
    "revision": "60b363af81efee04b9dc8b02ebd08c2c"
  },
  {
    "url": "assets/js/39.ef4afb72.js",
    "revision": "27bdf51cdc0146df3b24e51bebc33e87"
  },
  {
    "url": "assets/js/4.520bdba3.js",
    "revision": "47b9838c6d769e299402beaedc174114"
  },
  {
    "url": "assets/js/40.68691003.js",
    "revision": "4abe4903459747e91d6884944e5dab3e"
  },
  {
    "url": "assets/js/41.01e66872.js",
    "revision": "328353231a7e6aff07c04ad4a59ffff6"
  },
  {
    "url": "assets/js/42.32c294ce.js",
    "revision": "c814ff67fd26c151962df9e62583fa36"
  },
  {
    "url": "assets/js/43.77697da6.js",
    "revision": "4e67cb63a0cb4ec20e887a0a165cb654"
  },
  {
    "url": "assets/js/44.06a86b5f.js",
    "revision": "3eb58da5d7269905badbffa8507092fb"
  },
  {
    "url": "assets/js/45.8b4ced5b.js",
    "revision": "a9202573eb813f14c3933fb4b20a0f45"
  },
  {
    "url": "assets/js/46.3c9dfa1e.js",
    "revision": "e2f07c22ed8bed250b906fdbf3ceed6c"
  },
  {
    "url": "assets/js/47.29568dd0.js",
    "revision": "e4aef2ccb5c8be20126d1210d0b17dc6"
  },
  {
    "url": "assets/js/48.21155489.js",
    "revision": "b00ecec18256c752c906085cc99c56a3"
  },
  {
    "url": "assets/js/49.bc7e1924.js",
    "revision": "68397d4f6a9bfa3aee857e90f0761216"
  },
  {
    "url": "assets/js/5.ca3e992f.js",
    "revision": "7041b6dbfea0c6eeb70797d9a8394694"
  },
  {
    "url": "assets/js/50.f449ec8f.js",
    "revision": "2e3563a2b79b54a7e7be66a265fd5f39"
  },
  {
    "url": "assets/js/51.8f554af2.js",
    "revision": "5023298e4b40b0ccf0ef305e6062c5f7"
  },
  {
    "url": "assets/js/52.b62797da.js",
    "revision": "cb7e5a6d9d6b59c3381f0e11b903af47"
  },
  {
    "url": "assets/js/53.91fec211.js",
    "revision": "277ff9dcb70d580ce2a915e4ee490460"
  },
  {
    "url": "assets/js/54.904cb905.js",
    "revision": "de6e80c17a519f9cfb3c7aa5c205d081"
  },
  {
    "url": "assets/js/55.1789c692.js",
    "revision": "845a7b419cb6ed30ba1b10baef53f874"
  },
  {
    "url": "assets/js/56.1d448c8c.js",
    "revision": "1a75837092b4dad4fc1366fa604a7c33"
  },
  {
    "url": "assets/js/57.7320a269.js",
    "revision": "86f7128d63b9ea1558d0da3573e9178a"
  },
  {
    "url": "assets/js/58.096a03fc.js",
    "revision": "18c259857c9e06f8d8fdc173f51d274b"
  },
  {
    "url": "assets/js/59.52a8631f.js",
    "revision": "0115d3765a45c7314db79de6ccfe96b7"
  },
  {
    "url": "assets/js/6.c42931c5.js",
    "revision": "55b8db893bdb954b2e3af7a1c3eeed11"
  },
  {
    "url": "assets/js/60.437bf6d9.js",
    "revision": "6c7f7aa667c29ca932ed7f909c3cf7db"
  },
  {
    "url": "assets/js/61.8dd5196d.js",
    "revision": "4ffd9bcc565708688da3d8c5c61ed715"
  },
  {
    "url": "assets/js/62.0ea29632.js",
    "revision": "ebb4f54928d285ce835727baefa8abb2"
  },
  {
    "url": "assets/js/63.72f6d7cb.js",
    "revision": "d901ea4afc5db030645ddeaa30157d7a"
  },
  {
    "url": "assets/js/64.4686f2e2.js",
    "revision": "b35f8652d1fe24bd92ee5b1a669aa7c7"
  },
  {
    "url": "assets/js/7.a241d51d.js",
    "revision": "b730cedbb32d4ac342ba7d80d19c4be5"
  },
  {
    "url": "assets/js/8.772e7f39.js",
    "revision": "b7a8bc959707e7ad2f1e4f63961960de"
  },
  {
    "url": "assets/js/9.a7a5c84d.js",
    "revision": "e066a88ef7da355ca3b64b9010470571"
  },
  {
    "url": "assets/js/app.ea4b88e0.js",
    "revision": "89f2efbb628a096e36edb041471b7f64"
  },
  {
    "url": "charts/area/index.html",
    "revision": "b78d0a0b1a9f3d7b80f47fbee32502d2"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "333c235bd2db58483a9e33c497503ec2"
  },
  {
    "url": "charts/column/index.html",
    "revision": "3b8313098724e1d76e2fb5ba4a11778e"
  },
  {
    "url": "charts/index.html",
    "revision": "67675aac2eb8bcb090ab693d5a56673a"
  },
  {
    "url": "charts/line/index.html",
    "revision": "2f1fcb19317453621d6d05727e8a9df7"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "30543fb2cb3dcea9bc8fd1e0455cdf72"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "9717d5bc240cce757842742109be518a"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "5bf72cb094e2de6cc7a1a099d4684308"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "5d42480cdc7043a1efab8955066aa2db"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "81c277f5233e6b407ef3cfe7c286f108"
  },
  {
    "url": "components/axes/index.html",
    "revision": "2e2f326626550f3dd21abeebc79f2bc4"
  },
  {
    "url": "components/colors/index.html",
    "revision": "4c53655e20eff02f4600419cb7512c5f"
  },
  {
    "url": "components/data/index.html",
    "revision": "b593acb9b6ae2e04688ddc436dce471c"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "69d93304336f5242f9cd43b24f3573e1"
  },
  {
    "url": "components/heading/index.html",
    "revision": "0c0bc239a3c1156573bcbf03f97881b7"
  },
  {
    "url": "components/index.html",
    "revision": "3facc099031f67a384845e6934277eba"
  },
  {
    "url": "components/labels/index.html",
    "revision": "825cdb6363723d33e59f2fc0fe718936"
  },
  {
    "url": "components/legend/index.html",
    "revision": "d7c2f91fac22d3388f078e68d238c200"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "a5e7872c1390a6ab4f24bad49ca486d5"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "04eb2168e686f83687065d7b7beeb3cc"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "a1f1caa037be23a0fa4c17415d3d8349"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "1fd6ee30453ca8d6e3f4a20e9a022d1c"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "80a899f51a0b308682d623c1b7627e6e"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "f84dea4ea21a7012cc6bc0b5780bfd88"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "6a31a910975510dd0a68e3ef46b3776a"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "833925952c88dd0c7e769ae746141493"
  },
  {
    "url": "customization/index.html",
    "revision": "cae992fa768280f474a968c8d6fcb8c9"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "fcdb56443aa673fccc67b48fd6676efc"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "ce22b3d556b73e404f456a44ed053e52"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "d58049b67c3835a4c200f45a559be300"
  },
  {
    "url": "development/index.html",
    "revision": "e34740a73545f2cfd85bf350aa9f3e9a"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "3eacf0d6a199546ecb7ce6629918bbb7"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "31a61f8ece78befa89fd60078adbf4a4"
  },
  {
    "url": "docs/index.html",
    "revision": "a3b6c88e3961f1777e5b2c75e3c3fdd7"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "cede38e0934573ec614e91899d8e6ab9"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "fbf8c5ef09a6af99d0ff3dd71cb70a2a"
  },
  {
    "url": "examples/area/index.html",
    "revision": "339e3fffb13c1ebe9411f649baa5360d"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "4d5f22fa69e0c3e5b0b7f2925dcdac6e"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "d756ed401be8ca5739c448d5d3d78ae9"
  },
  {
    "url": "examples/column/index.html",
    "revision": "1198f774d19365f1bf7b50bd561de49c"
  },
  {
    "url": "examples/index.html",
    "revision": "f1d4ba88d844b576e85f47c27bbd70aa"
  },
  {
    "url": "examples/line/index.html",
    "revision": "f32eff6019e94fbbdc32721fd4c31573"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "24b7577a4045a62f3c0fdcc618ff521d"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "fe142e05cd8ce71d623aa09fd4ee5229"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "3837fba8d7c8d484781bf41d25981215"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "98100705543456b7e161eed221c112f5"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "82c1f52f5aafd5849fc7f42517668748"
  },
  {
    "url": "index.html",
    "revision": "3b85e49964a92c4b75822f34e7686a19"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
