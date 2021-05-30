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
    "revision": "35412cf13cb1fff7209d1b5d0c18143b"
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
    "url": "assets/js/app.cfb2def8.js",
    "revision": "af22f6ada837f2291cd57ab6d42aef64"
  },
  {
    "url": "charts/area/index.html",
    "revision": "5e0b342cd01a1ba0afb44379d89ea8fd"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "f2189e7600b463f4f2f490583abbc42e"
  },
  {
    "url": "charts/column/index.html",
    "revision": "6b8d4257c52a9154d91441705acc4f5f"
  },
  {
    "url": "charts/index.html",
    "revision": "335f23674ac49adabeb5cd363c8b5328"
  },
  {
    "url": "charts/line/index.html",
    "revision": "b55c750b88705785d66fde78dc4c5a19"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "30c4d8db72413b7b8c7f4205066161d9"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "ff17fe720bc4ca6b2cf42b1fc86be126"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "4242d0b4b8360c2c22f51263150f8508"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "c74f16653c62e8b7e6185ec93eb6fd6f"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "58bf1e5764107f49c1a8a70a9d388c61"
  },
  {
    "url": "components/axes/index.html",
    "revision": "5d49f986e4a74f6b7bcbc5e94599b6fd"
  },
  {
    "url": "components/colors/index.html",
    "revision": "1be2d36ea046dbfdcf3e5a2ad89269be"
  },
  {
    "url": "components/data/index.html",
    "revision": "cc95c79ac1e53e3ec2db7acb9ce72387"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "086dd946d9e7fd9f7c629b8bef196229"
  },
  {
    "url": "components/heading/index.html",
    "revision": "ec4363560b17869488cd70c3daa396b1"
  },
  {
    "url": "components/index.html",
    "revision": "a6d473e0819721f89f39ee8c83c11796"
  },
  {
    "url": "components/labels/index.html",
    "revision": "8f0a243606c30b52ea6d22d5be149482"
  },
  {
    "url": "components/legend/index.html",
    "revision": "d06132b3d23dc0f94cc0b6514af94453"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "6048e917cc765db6152a3a88ef0fcd79"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "733a3d4e8a0e32c4f678b8af38067b0d"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "959faa57ddef4e017b932b8e0a08b64d"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "62e2f6824ffe5b1410a946d79e27ca8d"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "648f13673a45beaa7d2509b0277eba4a"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "44cbd81842aa5f6a23aa51471536707d"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "19188210acd52cfeb52633672458099a"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "afb7238b41ec23f94ca8dc22ab54ad13"
  },
  {
    "url": "customization/index.html",
    "revision": "ed61fe9b41a4e6091919165420ee8cd7"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "1e8ee8ad48328b3c560eac9d098d471f"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "6bc2315e9673908d849dd4f11dd115ee"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "1e510b05a8f5e3346a0a3673b8ffef47"
  },
  {
    "url": "development/index.html",
    "revision": "64dbb27ea52f3dd99f6f2f6fc62a5a5a"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "843b9af58648f2e764c6949f1347a974"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "638f060750002f03e73a6c35d7d0b25e"
  },
  {
    "url": "docs/index.html",
    "revision": "050dfe7e5d48f55d60c5e738b62d1f7c"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "6b780a592aac201014acd0b945dd5f2a"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "3dd145159a26b096e651f7e1238262dc"
  },
  {
    "url": "examples/area/index.html",
    "revision": "801158f30f03f314e276ae2e3f2d5f43"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "49dae310a4259e41b9f5a3e4c80345da"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "55d93c54c2ce64de905f88737ee9cd3c"
  },
  {
    "url": "examples/column/index.html",
    "revision": "7164fbb3a77d747d44d83771590e4a04"
  },
  {
    "url": "examples/index.html",
    "revision": "1d1ea7dec50a445755ce260ab3a5a465"
  },
  {
    "url": "examples/line/index.html",
    "revision": "d7ddce2ec3e43dd3a525bb6a61b9fb4b"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "21cf25068bbfadb00bdd81a33a4c9475"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "11b8ede2a1540c5e697cc911c026c89e"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "2c891cf6dce1fb67bbe296ebf4a100c6"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "baddfffb202e40aec5babddfb0d98881"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "9abaf3be717c3952f14efba82f44b91e"
  },
  {
    "url": "index.html",
    "revision": "cd2d9e04faab3b82e8046795c331ebfe"
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
