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
    "revision": "f800b72940ca841173b6bdaad02ebbb3"
  },
  {
    "url": "assets/css/0.styles.f18bbae9.css",
    "revision": "f7a662276667605a7ae95c1c3422095b"
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
    "url": "assets/js/app.5c11cbbd.js",
    "revision": "8adf31536bf4c271d828a5f8d2261c39"
  },
  {
    "url": "charts/area/index.html",
    "revision": "635c3f62cc841dfae361e6b9b03a6b81"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "6faa7add1e1dd67db4fda641aeb8fe2b"
  },
  {
    "url": "charts/column/index.html",
    "revision": "e813e8921e252f16c6a054b0f82ce2c3"
  },
  {
    "url": "charts/index.html",
    "revision": "1bdac654c97a0cf899551c8ca18fb9b0"
  },
  {
    "url": "charts/line/index.html",
    "revision": "4075c89ee491d32b01883fd2c309c31e"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "4d77d241c3782da3c3a0a651cd6b1ac8"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "64d2d55b60fd13a80c95cdbba5b3729c"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "5f0c7feb455772eeb7a27841fa3738ca"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "2e82f0af0dc2f876602693062e10d8cc"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "31c9db88530f138774af61acd691953f"
  },
  {
    "url": "components/axes/index.html",
    "revision": "e7b727bc0186156655d0d979bb3d7afd"
  },
  {
    "url": "components/colors/index.html",
    "revision": "9d784618eb7806831dddd281051b3ec6"
  },
  {
    "url": "components/data/index.html",
    "revision": "958e788a8b493a9363e353ec978cff57"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "84f4e526c81266d8a41f699709d46f65"
  },
  {
    "url": "components/heading/index.html",
    "revision": "b5fac9f2dcff2dea6653c136b73c8439"
  },
  {
    "url": "components/index.html",
    "revision": "caf427c4de33ae4ac8d5eb75639cabdc"
  },
  {
    "url": "components/labels/index.html",
    "revision": "6946a5a91fe3a640ad3f0dbbebf1360d"
  },
  {
    "url": "components/legend/index.html",
    "revision": "418c9a122ff5f12f178d46bcab87f6d0"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "0ed03219180eff572b1431c9c2798229"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "c93298581d4e01349b70ff59be0a5e1c"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "b0a3ef1420b3636d1c1c438c9ddb10c4"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "e18093b98d36a7657bec621891ac95e0"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "311b9c004c8620a48789c93fb0e5e42a"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "261a91464306c8daa77228ba6a4677eb"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "9d0b601c0e802694ca6f5eb2f05462fc"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "2dc5caf386ae136cc2fdd5fab2651e77"
  },
  {
    "url": "customization/index.html",
    "revision": "1ac5c214bb05a28330cdc306d651b133"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "e258f392be5b844256937bfe1fef8512"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "5f86e0123a5874ca11c8c26bcf53992f"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "52b609624de8d40aca0c974e4039f27c"
  },
  {
    "url": "development/index.html",
    "revision": "a0604c4303a4706c93e75679fa67270f"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "8b8ab63b6a60d154c9181b8f2bc1682d"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "39c378f003defaff93f012c9b4f3112f"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "b6fe18fb2b02f4b732f67f5cbe123f45"
  },
  {
    "url": "docs/index.html",
    "revision": "7944e7f27f30c08aa5629ef439e944a5"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "e622f1f6f6150c1eaf45cb7ece97f5a7"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "c8393bcf92d8e27ba07e21e818c83125"
  },
  {
    "url": "examples/area/index.html",
    "revision": "5991038718c95bc6edf1308bdf61d55a"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "41acbc665637442bec12d5b9b0768a99"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "bbd2e4b8b1b49ad51d09cc06a4a43e1a"
  },
  {
    "url": "examples/column/index.html",
    "revision": "93a85c819adbdb0c86fe22c804dd2be1"
  },
  {
    "url": "examples/index.html",
    "revision": "c078020cbffe6a33a035aa8cb2c68047"
  },
  {
    "url": "examples/line/index.html",
    "revision": "9513272cf82ead60fb769ccd66415b03"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "9508d6b5e8c717998511249ddad1ac95"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "ad88eb4b14e1ad0675c4ffd292d63c9f"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "18d99b2f4b81d31793a1ba7d4aa21a09"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "653274e23b31a4a87196c47e3e267d55"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "7bbaf29e3078b1d03574031aa5c5f6e6"
  },
  {
    "url": "index.html",
    "revision": "c6f2e2774bca78c27fcc96aa2a040c67"
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
