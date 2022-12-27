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
    "revision": "91c31c552e3f881039b4ab6ac79f79df"
  },
  {
    "url": "assets/css/0.styles.d1f1a0e8.css",
    "revision": "d14c57ecd54cc9540c2ac5bba834edb9"
  },
  {
    "url": "assets/img/bg.svg",
    "revision": "9ac85aeb7971101cae1ec0e4efd24647"
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
    "url": "assets/js/10.dfba9450.js",
    "revision": "297b90f40e64747674795133ce7f8d74"
  },
  {
    "url": "assets/js/11.24950531.js",
    "revision": "debb0cab974bbcf10cbd6a8e6d14809e"
  },
  {
    "url": "assets/js/12.dff88290.js",
    "revision": "148e8ed4db3ca7b93808a0a3f3633f51"
  },
  {
    "url": "assets/js/13.2bff61d1.js",
    "revision": "2a7b135ca2844edf26e465d9c2c38366"
  },
  {
    "url": "assets/js/14.e0a2331b.js",
    "revision": "61b6349d08a623280fa11fed930d2489"
  },
  {
    "url": "assets/js/15.d739e4bb.js",
    "revision": "19a09ab745e66303587a185d3994b6dc"
  },
  {
    "url": "assets/js/16.1ae4f690.js",
    "revision": "2d6c1a9dfcef2179e57129987c228bc5"
  },
  {
    "url": "assets/js/17.04d71e77.js",
    "revision": "887289079696b508a7c84d0e04801811"
  },
  {
    "url": "assets/js/18.0b29f824.js",
    "revision": "7ab8c5e41a4d24f85589132b2e22811f"
  },
  {
    "url": "assets/js/19.73fce9db.js",
    "revision": "902934bf42dd00bbe8e682e030d89559"
  },
  {
    "url": "assets/js/2.9c015161.js",
    "revision": "a2afd48fce1f4df46e31607630694c78"
  },
  {
    "url": "assets/js/20.6e87d3be.js",
    "revision": "82c35d0b2c42ac99639e714fd5dfc331"
  },
  {
    "url": "assets/js/21.f5c2505e.js",
    "revision": "7745791904dded8822de12c73dc39f8a"
  },
  {
    "url": "assets/js/22.179bb2a1.js",
    "revision": "6ed24bc2cef052d3bc76185f1035bbe9"
  },
  {
    "url": "assets/js/23.dc70b22a.js",
    "revision": "3feed324ed92a949c693a3b7c08dc50d"
  },
  {
    "url": "assets/js/24.bb5d2cdd.js",
    "revision": "99d2a3aa928cbdbd9fadbb48188fbe72"
  },
  {
    "url": "assets/js/25.351130d1.js",
    "revision": "e3c57ef2a8e3c72c8b0a3da5f2eef788"
  },
  {
    "url": "assets/js/26.6fe1f433.js",
    "revision": "892d1051c359038b1e2ff0d7f39ba00c"
  },
  {
    "url": "assets/js/27.27ffa612.js",
    "revision": "b0fcbe8272afaa44566b293953419d24"
  },
  {
    "url": "assets/js/28.d28661fe.js",
    "revision": "0266a18330292ef35c5d36dfd71100f8"
  },
  {
    "url": "assets/js/29.632c5c39.js",
    "revision": "6ea9619f07ce339aedff60c9504558cb"
  },
  {
    "url": "assets/js/3.cccd4400.js",
    "revision": "446fa07f894179709147a4e978cc7fcd"
  },
  {
    "url": "assets/js/30.776002b9.js",
    "revision": "5964fd8017a4028d9223d70e8ffa3ee6"
  },
  {
    "url": "assets/js/31.ca11faaa.js",
    "revision": "d56bc754ddbbc2e0e062045ded2ae4a2"
  },
  {
    "url": "assets/js/32.55edbed1.js",
    "revision": "6d488286b1f495f596ec530abee170ce"
  },
  {
    "url": "assets/js/33.cc1b662c.js",
    "revision": "c91fa968677b148a7b1c1af6ef51b8fa"
  },
  {
    "url": "assets/js/34.00621d99.js",
    "revision": "1a6b9b5280f75917f1aa0fe5b0f45a66"
  },
  {
    "url": "assets/js/35.afcd3291.js",
    "revision": "04239a79b7ec89cc2283a380325e10de"
  },
  {
    "url": "assets/js/36.27a6aad1.js",
    "revision": "b542a58d6a3b0a6e1a5f86edc47631a3"
  },
  {
    "url": "assets/js/37.74b8a223.js",
    "revision": "7c900782bf07a5de4cbd7a87f03fefca"
  },
  {
    "url": "assets/js/38.4d409970.js",
    "revision": "b9ccaef5fc2dacd6aba688138e028c02"
  },
  {
    "url": "assets/js/39.c4b6a4b7.js",
    "revision": "17c1de2f92b35378692cc8f184b3511e"
  },
  {
    "url": "assets/js/4.bd989681.js",
    "revision": "0b22785cb4bb2a504b0d8f04947b8f33"
  },
  {
    "url": "assets/js/40.b30d4e5b.js",
    "revision": "631484a75600d40a493b72ae7fec8d50"
  },
  {
    "url": "assets/js/41.697a5405.js",
    "revision": "0468df3a1a886395937ee7d3f921a468"
  },
  {
    "url": "assets/js/42.f7bbb312.js",
    "revision": "53757d74d91619505f8fcfe2738f5ee4"
  },
  {
    "url": "assets/js/43.26676bd5.js",
    "revision": "159c9ff4cbc34641c13cf27809efcc60"
  },
  {
    "url": "assets/js/44.cf1ac0e6.js",
    "revision": "5b8eed1a699865fe7e3816de3c1d80e6"
  },
  {
    "url": "assets/js/45.7097714c.js",
    "revision": "00bc4ad5118ce396cbc932ae38d51fb3"
  },
  {
    "url": "assets/js/46.ff04f774.js",
    "revision": "9a43dcf767ee76765e68ba9649c8a430"
  },
  {
    "url": "assets/js/47.ee65725a.js",
    "revision": "8eeb026a154f05f2a976ff363e11c1f4"
  },
  {
    "url": "assets/js/48.9adee8a9.js",
    "revision": "4231d2b8fcac0663329602be3d96c843"
  },
  {
    "url": "assets/js/49.75ef3d1d.js",
    "revision": "1e2283e5560127cd80733be7f7ad4b3f"
  },
  {
    "url": "assets/js/5.be295822.js",
    "revision": "80510a09e53ed7b97873b0eba4129b7e"
  },
  {
    "url": "assets/js/50.b5195be3.js",
    "revision": "f413053f5265ba5740c9676694d857fc"
  },
  {
    "url": "assets/js/51.1c9ecec9.js",
    "revision": "9eece6b341158730aa5ce2d3c96c981a"
  },
  {
    "url": "assets/js/52.d683b9d7.js",
    "revision": "524f88ff1bf0eba376ee50e23d804397"
  },
  {
    "url": "assets/js/53.d1bd86f2.js",
    "revision": "db77b3bf41c93e25c0d2208dae1f299f"
  },
  {
    "url": "assets/js/54.8c68eb06.js",
    "revision": "43e84540e1c43760090590586c2fae11"
  },
  {
    "url": "assets/js/55.7ef4b9b8.js",
    "revision": "8df9cd5b54362a977430539bf1998070"
  },
  {
    "url": "assets/js/56.11c1b410.js",
    "revision": "109a94d12b0fcfc79f2e8522141377e3"
  },
  {
    "url": "assets/js/57.a4e29be9.js",
    "revision": "4ef4cd9dd173880e1e10d40987f35666"
  },
  {
    "url": "assets/js/58.e04bdf45.js",
    "revision": "1f999082727e83eb58b8371fe91b87dd"
  },
  {
    "url": "assets/js/59.f1b94295.js",
    "revision": "940ff23037b50b978a87e18c67bd47b1"
  },
  {
    "url": "assets/js/6.9b7ed833.js",
    "revision": "0880af18efe3a5f101033624cd8ffde8"
  },
  {
    "url": "assets/js/60.07bcbb98.js",
    "revision": "e64d96c605b3053d2342e414aac1a473"
  },
  {
    "url": "assets/js/61.548e73e5.js",
    "revision": "0661e55fc432745355f3425264b9f3fe"
  },
  {
    "url": "assets/js/62.a4bc141e.js",
    "revision": "159340da48528105d9bb336361850d45"
  },
  {
    "url": "assets/js/63.8ce0f3e6.js",
    "revision": "3d4b7612d37cc4cf99eb84c20094383f"
  },
  {
    "url": "assets/js/64.2debb4ca.js",
    "revision": "ca81c980f47eae95cf640f92740040ab"
  },
  {
    "url": "assets/js/65.498e32e8.js",
    "revision": "a87c48d1383c70dd46138b0749d8a6e9"
  },
  {
    "url": "assets/js/7.e8442a92.js",
    "revision": "8cdd5a19aca5704bf2d13532bcb40991"
  },
  {
    "url": "assets/js/8.673e52c5.js",
    "revision": "33858751cec61eb6e01d001fb249d510"
  },
  {
    "url": "assets/js/9.97244cc5.js",
    "revision": "9184ce156095aac5292bf4a0337e93a0"
  },
  {
    "url": "assets/js/app.a506c1c3.js",
    "revision": "1035ea2e74adc4d83129ea2e49b3b3d5"
  },
  {
    "url": "charts/area/index.html",
    "revision": "5bdd02b445bf38e96bee77d6b1adc47e"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "2571e964307c498b7bd7b9c2be560b6e"
  },
  {
    "url": "charts/column/index.html",
    "revision": "02b3e8b94bdb9ee4d70e5a56a04089a4"
  },
  {
    "url": "charts/index.html",
    "revision": "4048ef079afe19514b74ca69779def60"
  },
  {
    "url": "charts/line/index.html",
    "revision": "8dace0b8cb82e586bdcbf405afc03b58"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "1e6c7ec1007a405784e9808be13febb0"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "098402b856b24d57b84ad0109f2a90a9"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "6ad87226573c94dd2363e2cd7635ea3d"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "bd00a48db1def61ad72683d5f994f34b"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "56dd173b0c4acb6f2652a3d37e5b3197"
  },
  {
    "url": "components/axes/index.html",
    "revision": "139180def4a5cabe5c380fb390a671a5"
  },
  {
    "url": "components/colors/index.html",
    "revision": "3b6d2519838c15a509a595a857914cf0"
  },
  {
    "url": "components/data/index.html",
    "revision": "df37467c4d1ee3134d2fe8e9f80e52ca"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "df7722fe5dbfd35b2c409e7169d5b549"
  },
  {
    "url": "components/heading/index.html",
    "revision": "675e811e0936cbc3121b46d44e8c8376"
  },
  {
    "url": "components/index.html",
    "revision": "8f39e7945f20118a0fa7cdfb802ee462"
  },
  {
    "url": "components/labels/index.html",
    "revision": "9559c77afa8f1038cb3912d24986ba02"
  },
  {
    "url": "components/legend/index.html",
    "revision": "f72006e5ee8bdc37250295c2cfb97e43"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "634fdc1270c9d0083f34ddd85a45ff10"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "c7f043ae1c928fbc8cf111a57fd3c2ae"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "1583f7e5f9c38c02cab20b25bc1c3a2b"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "7fc1d53f5f2931f95efccbc4451ba5bb"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "d5fce510443e07254e9d21efac077068"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "569d1f0ac75fa3ff887847e628cf45ee"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "23dc0a7d67ff6f7dba970bfbc93fbe7b"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "86217323c04a8e67956402feaf5d01c6"
  },
  {
    "url": "customization/index.html",
    "revision": "cfd198c813859b9cb6d6b3c3a243895c"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "0e4a968391a7316474fe741f9b532ff2"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "34c20247565aaac19a05cb2b0bca8488"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "e106222f5d7ca0d981bf7486860400e8"
  },
  {
    "url": "development/index.html",
    "revision": "c9b03f195fb4bf5f0f4dcb89e0e7e172"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "01cab250fd83bb1028d64347b178d1b2"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "4ae6458e4787722d2d9b803f476c3906"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "9d9a4907a2469b66d40425b41f291711"
  },
  {
    "url": "docs/index.html",
    "revision": "5ab41317783bf9acb77a8597eaf39159"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "0736e3a9d9cf50753b3c6f2dacd51377"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "ad6f3be6f541d31846331690439c5d55"
  },
  {
    "url": "examples/area/index.html",
    "revision": "54ffe69b95a04f3a8d7bfe7371fc9010"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "614e4065ef0c64fe52b092ce222c747f"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "6a000a0ff88f568be574370641ae5306"
  },
  {
    "url": "examples/column/index.html",
    "revision": "c4154c5bc619f65cf94ca92776cb73b4"
  },
  {
    "url": "examples/index.html",
    "revision": "87167a9b4aa62be7db229db4cdc69f24"
  },
  {
    "url": "examples/line/index.html",
    "revision": "c56486a2ef7d83c9765c7b2706e1e058"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "574a697cd98bb5592b424644f3e3ed91"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "b9f03f657d6ebb12ec6cb2c2414a456d"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "4a09e005451c773437e44e2f29818e1f"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "c74517a28674ff2351c8d33d3797d1ce"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "9860296cb6d799be796a8f4b4dd5a2db"
  },
  {
    "url": "index.html",
    "revision": "47dbe746c7581cce775436ce51f0f6ae"
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
