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
    "revision": "fb9c4b817c1058eaa7fa750b52e8ea79"
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
    "url": "assets/js/28.1cd186ca.js",
    "revision": "4b3ce10b889a83e39d8c84959bca1d88"
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
    "url": "assets/js/31.65653b49.js",
    "revision": "f8dd45780d037df70cc186dee1e6f921"
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
    "url": "assets/js/36.ff709b2c.js",
    "revision": "baa9a0f75fad0dc87aedb0a25aa55237"
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
    "url": "assets/js/48.ac29f871.js",
    "revision": "215d17d81bf397adb737cf449ec276f5"
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
    "url": "assets/js/app.799a50ea.js",
    "revision": "d023abb5c2ef7a3370f457693ef6ad1f"
  },
  {
    "url": "charts/area/index.html",
    "revision": "1eb8a32422b05f209ac5b41dbefe8f79"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "a809e60eb45546654721f5ca4c6b168b"
  },
  {
    "url": "charts/column/index.html",
    "revision": "47bb28a5f0ccb9c91a8288cdaf54dcc6"
  },
  {
    "url": "charts/index.html",
    "revision": "f697bfac755c6f4048a6b8f121112a5e"
  },
  {
    "url": "charts/line/index.html",
    "revision": "dff59ebe28b465f5006dd72f1bab9eff"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "4ff98bd55c9b0611e3146ce556a10736"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "caf0fb5149bbf51d71f5a3b812963077"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "1935079df6d88f4e760a7bab3819a91f"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "7d99f8806eb2978de6f998563cc9849d"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "e81c421bc9f73fff25f1f5b205aa753b"
  },
  {
    "url": "components/axes/index.html",
    "revision": "b89b84f198a97d33191e691d95a8ca59"
  },
  {
    "url": "components/colors/index.html",
    "revision": "3db9aad175e72c6ddee94f0771f6733a"
  },
  {
    "url": "components/data/index.html",
    "revision": "abfe5e50fd483c982f50eeb6e4f8c772"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "e09fcc5f3bad34ff55a5fc4ff0cc5d03"
  },
  {
    "url": "components/heading/index.html",
    "revision": "f6c7a78cc477ebb7e4342ef9174ea504"
  },
  {
    "url": "components/index.html",
    "revision": "aae2165ddd73039f5079bdbb3df889b0"
  },
  {
    "url": "components/labels/index.html",
    "revision": "f67447ddfffc82ea8f1cbaabb69fbb73"
  },
  {
    "url": "components/legend/index.html",
    "revision": "20a41fb2b8a1d787f542349744ea378e"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "3c6e88494d45cdb7d5a723fd0193b77e"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "0a9442e4274f1db2a8fa8d10c8c484c6"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "1dce2f5831e9d0e019d2443e1f136d3f"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "893ad2f30abc42bad0f65ed9f021a701"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "5444e0d13258187c1bba6bbf42906165"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "9e1a18417a259bb0060f989d595135a7"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "b2daa4094fa15a89d1141e59ba8ee741"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "3b23a97abf7fe951c16d9cb2a57e48a0"
  },
  {
    "url": "customization/index.html",
    "revision": "68732c21af1e9e90c2d81883516a1b37"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "b6770e62066580b8d801564996bedd84"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "36cd271ed64c601f525c872f958942c9"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "dab20e74548ee81679cb1912e4f94b4e"
  },
  {
    "url": "development/index.html",
    "revision": "dd03112dc959335a179fad5bf8aec2aa"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "b769fec57734ab15666f36e8610dabef"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "acae7576ebd6bad9963a4573a25db51c"
  },
  {
    "url": "docs/index.html",
    "revision": "1c2e43528bec9b46298bc10b838bab19"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "b0ff5ff13105825f647382588f24b0d2"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "5d6dbc33232df59ae814dad459fef648"
  },
  {
    "url": "examples/area/index.html",
    "revision": "bea508ac315c44e9c85d670451bbd0a3"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "b84ca544e07cd5a4ae81a0f6d4301116"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "88a1c34e7edc81ecc6542414641402e5"
  },
  {
    "url": "examples/column/index.html",
    "revision": "c97fc6e2cff7dcb64a116720c553b3ca"
  },
  {
    "url": "examples/index.html",
    "revision": "fc4680253103794fef944e6959171267"
  },
  {
    "url": "examples/line/index.html",
    "revision": "951e00a42145c679851f234b5f476d11"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "f0674938c0671c6376d20bca6c4ccb99"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "efcb181ae3e01c62dbd774a1908d8f89"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "4d9dd50800551b708646614af670740f"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "3184c90043c0e094717c08091dcef687"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "ddf0768ccd21db299df5c725ea8de726"
  },
  {
    "url": "index.html",
    "revision": "b48b0aec106184701445b7fd57754fb8"
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
