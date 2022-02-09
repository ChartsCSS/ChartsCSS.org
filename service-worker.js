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
    "revision": "f18d5bc5e776a56a84e96f8a0c0273ec"
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
    "url": "assets/js/29.5ab49f5b.js",
    "revision": "da600c16a5e4b5450ca95cc25b53fb6e"
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
    "url": "assets/js/40.1456f789.js",
    "revision": "a352e90495a71b5837cabf8f1a9a8841"
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
    "url": "assets/js/47.3d124de5.js",
    "revision": "de77dd8f2557903d17c9ba6af3a44388"
  },
  {
    "url": "assets/js/48.aa0bc4e3.js",
    "revision": "3a617c4c81c6f3f161402b7cf9aefd36"
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
    "url": "assets/js/50.4a020581.js",
    "revision": "30f9600ea57b22fbc003e57d3163fc11"
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
    "url": "assets/js/app.b069760c.js",
    "revision": "68c0e5b6d61361f446a7fe00cf709edd"
  },
  {
    "url": "charts/area/index.html",
    "revision": "2ff4a5f3a3b6c1ce57ab341e2b1f1565"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "908edd77a306eb47197d3b549ab44097"
  },
  {
    "url": "charts/column/index.html",
    "revision": "673cc8bf8545e816f917e82ff025b9a0"
  },
  {
    "url": "charts/index.html",
    "revision": "562b952d56da5e38ae95366436c89002"
  },
  {
    "url": "charts/line/index.html",
    "revision": "4b5b4eff6814b62cfc262e7dc6305fd7"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "dcab2094e695cb3396292f883b26a0bb"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "179316ed2314af85cdd4ce6102fda680"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "9e12645bee8ec3d8e40d45614bac37ce"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "deef7413385d521d083bc0fa60aa20e6"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "2759ff65c6a6deb73e21d183e912781d"
  },
  {
    "url": "components/axes/index.html",
    "revision": "1bb1a191be353c4594d8a3fc81864b14"
  },
  {
    "url": "components/colors/index.html",
    "revision": "ba30fb3fd03a063819ee85fef870d4f8"
  },
  {
    "url": "components/data/index.html",
    "revision": "9c3893ce5d235391c2c9683669fe0095"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "96b1af346d29887558e238d5b5dc4516"
  },
  {
    "url": "components/heading/index.html",
    "revision": "ecd23d54c69ff2285a63dd5ba51dae8b"
  },
  {
    "url": "components/index.html",
    "revision": "dc25e06fda1a813bd7165cc745f74cde"
  },
  {
    "url": "components/labels/index.html",
    "revision": "e4d8ff606d556dfc6679a99bc0b4e65f"
  },
  {
    "url": "components/legend/index.html",
    "revision": "a31332066c52fbbf75512753132a6ef6"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "ea0934a240493bd9d3a84980c7c6dc56"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "082b3a2460350ded450391f0f5512db1"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "ebc19415bc960d52214f943a1d44344f"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "f7b2f14ee694fcb4bdfe3f47dddc6154"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "430722a86331543ea6b7ccc16d4fe72e"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "c3f87edf68cb696f56d33963b6ebde13"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "374e6e5d4a6c411c4c1e97de95c332fe"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "0def47641d3b6b2f7277475c9a6056d0"
  },
  {
    "url": "customization/index.html",
    "revision": "fa5befa2b2bd4786ad62f3032cfef55c"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "71a0645753d736f1cf41e46910fa5824"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "cecd6018fa49a1ec7da1b53b68101360"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "9a83ace24ab1fc9da2565cd5d2292fd1"
  },
  {
    "url": "development/index.html",
    "revision": "0f7eead14eb22cc065f7bb570edf39b3"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "1390afbedb8a65ed809747a1cfabf193"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "1bd19347b8bc5711fd6f36fe3e591a9c"
  },
  {
    "url": "docs/index.html",
    "revision": "c0c468c4671017a1eb0e8232995abd42"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "ca2d7b269f778a88f3c2db55daabbe60"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "f90fef82d6cdbb46032a8082accbb5b8"
  },
  {
    "url": "examples/area/index.html",
    "revision": "b25040b70429c560162b114491280659"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "54cc13dcd592d3600f65c4ded7c503dd"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "247382377712ed6855a37160f1372ca8"
  },
  {
    "url": "examples/column/index.html",
    "revision": "5a11672dcd19b7db88be48b7b1f448ad"
  },
  {
    "url": "examples/index.html",
    "revision": "b3f52b9a4e2b15f1f46d3e77c8448334"
  },
  {
    "url": "examples/line/index.html",
    "revision": "d5258659707201a27f53ac5f5255170b"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "79d40280c2739a571a09378d82474d0a"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "5d30d48d0b04c598f1de368f120abb19"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "33bae5803bfbab5ac7aeb4ec5271b6c9"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "3053ba54a9437133f87c58bc91f4fb93"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "d42b861ec3304e9dbc463d8333fb1ff6"
  },
  {
    "url": "index.html",
    "revision": "b928b82571198fd39e328ded3f70f505"
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
