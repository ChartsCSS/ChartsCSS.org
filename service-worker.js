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
    "revision": "211d226515500fbb860f8bc23d1b13ee"
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
    "url": "assets/js/28.b46a2647.js",
    "revision": "12ec60d31091305fe956f4347c7ce553"
  },
  {
    "url": "assets/js/29.21261f74.js",
    "revision": "51e6be0b35d702101b61d0dfd45171f0"
  },
  {
    "url": "assets/js/3.fd109e8c.js",
    "revision": "bbc08d920acd9aa835ff2475a8f9a46f"
  },
  {
    "url": "assets/js/30.bdb73fb7.js",
    "revision": "3a123a976824dadba3349cc6dadad1dc"
  },
  {
    "url": "assets/js/31.22f9bbcc.js",
    "revision": "5d9ea940ba9f6fc020d23eeb2fd00c2f"
  },
  {
    "url": "assets/js/32.2df60ee1.js",
    "revision": "6387f61c10037dce64d3bcae3b45a5d3"
  },
  {
    "url": "assets/js/33.9b730514.js",
    "revision": "1693d7f89488ffd5355aedea324fee24"
  },
  {
    "url": "assets/js/34.2a37fdb9.js",
    "revision": "1dce778d2727185d30a96ad7c4abe824"
  },
  {
    "url": "assets/js/35.a23ad7d4.js",
    "revision": "c9337e8401aa8ac0afe89b25abbf7543"
  },
  {
    "url": "assets/js/36.6c85a48d.js",
    "revision": "a525058229930ded8e51187e9e0e5b83"
  },
  {
    "url": "assets/js/37.8c803c37.js",
    "revision": "95e63b7a4fc8272e530ac69e14a2d96c"
  },
  {
    "url": "assets/js/38.e345b0fc.js",
    "revision": "834e5ac0a8e18eb5aaff5a45bd218333"
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
    "url": "assets/js/app.f4117860.js",
    "revision": "eb9d607c7ccd0aa1ebda1076e4cafefd"
  },
  {
    "url": "charts/area/index.html",
    "revision": "9b490dfb4dc22a6d2a6284db70531a94"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "dc5373017b2231c8b31da4ef7a6a8663"
  },
  {
    "url": "charts/column/index.html",
    "revision": "d1688d45257dd42295a6702d7186fe42"
  },
  {
    "url": "charts/index.html",
    "revision": "33f274ae86a55b6d725e33325bbd66ec"
  },
  {
    "url": "charts/line/index.html",
    "revision": "ba0f551565cb2cca9a37651abc5e1dad"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "f7335d5c75b4b5b9f9b8919debb3e5f2"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "8f38926658748f66010aa8cbb63850e9"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "624252279e55defdd4d5109791793be0"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "137104f8a7dd148b2a819806e675c6db"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "8dee799e0cf40331089f613acb877b00"
  },
  {
    "url": "components/axes/index.html",
    "revision": "2114279ac9f7ffe4ace703bc646a1ad7"
  },
  {
    "url": "components/colors/index.html",
    "revision": "25e182fc8a0d3361ceda01f82c834fe2"
  },
  {
    "url": "components/data/index.html",
    "revision": "103fd7cd2f5336f83d06886063a31303"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "7e5a7988590154974e18d1211504f160"
  },
  {
    "url": "components/heading/index.html",
    "revision": "9f19895042141f529b3bf511ff8ca29d"
  },
  {
    "url": "components/index.html",
    "revision": "f2f605a078bead4bafe9e6f431d31061"
  },
  {
    "url": "components/labels/index.html",
    "revision": "0025e85aab2cf34d20b93ec9f0b5f883"
  },
  {
    "url": "components/legend/index.html",
    "revision": "d0b9e183038055c52cd197babe0f1384"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "19e00d004b565c52ca1e374f1174fe13"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "eb3a120629256b4f186dc2d2cdda7e57"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "29ff230c4b314e144f30297c89d01d2f"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "e81ad6a0c3f2ef7eb8e35b8057c176f0"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "df90965ab194cbe69b4e70fb2389f057"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "81eeab27031ced43c42ed02ff7fdbc00"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "24828501a48d5462f71393faa6d48147"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "4470ad2cd2ff11e9004ae1359c09d7b3"
  },
  {
    "url": "customization/index.html",
    "revision": "da1e002d44e8e959905b908c5c704fcd"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "00cdfabc323fe065adbcee63470620f9"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "4587eae8800b608dd10cc1b51807b917"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "caf064fb15cab3b7bbb3fd18e92eb9d2"
  },
  {
    "url": "development/index.html",
    "revision": "bf78fcdf2898dba19bcd46a72ba45ca0"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "33b7c5dc2bafdde5789a4cce05dd392e"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "6432a0a814f2238595e4c11bbd819c20"
  },
  {
    "url": "docs/index.html",
    "revision": "83fc0182aa90e4d723f0664cc725ae73"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "6003608486cd1c0566f6f6e086fee35b"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "7440568538578080070407f68529e5d0"
  },
  {
    "url": "examples/area/index.html",
    "revision": "17675b88148b4f8c00f6bcd34903ed93"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "070231a482990347b655d056062da837"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "32a706822a049780a29dd10b7d5b25ae"
  },
  {
    "url": "examples/column/index.html",
    "revision": "e53184da9df30827446f648516143734"
  },
  {
    "url": "examples/index.html",
    "revision": "2a098d7cc7b7cd2b671f323ceb60bc8c"
  },
  {
    "url": "examples/line/index.html",
    "revision": "8d8f1d0797ef7d8fd01708e0eeb137db"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "6738717cc5a3a811e714d39d70ffb26a"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "29cffc0e648b995dfd82f84c0494331a"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "254e448829cb414dd0a209e17ebcadeb"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "62f61c7c1735d0c191e07f2e99e4ce28"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "7089667eb151ba18d54448c5f4e03495"
  },
  {
    "url": "index.html",
    "revision": "c0e4192610b985607ac765b72a31db79"
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
