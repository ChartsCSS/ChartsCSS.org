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
    "revision": "b188323d19f8accb2ffdfdc1e418704f"
  },
  {
    "url": "assets/css/0.styles.2476c045.css",
    "revision": "7f66d5adc84bd443dbe7b3758d8417ec"
  },
  {
    "url": "assets/img/html-css.png",
    "revision": "7ffa20302b6432f42fb6cc6c3a79ed51"
  },
  {
    "url": "assets/img/logo-animation.svg",
    "revision": "c063c7a42dfdbc23771a5acc2a3c74d0"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "d9d62b2429b9777d6b5314ee3e2cb6af"
  },
  {
    "url": "assets/img/logo.svg",
    "revision": "b960ca9d41d6c1ea1f24012e77c698ee"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.31320655.js",
    "revision": "ae4e177324e13ea7dfa135d0df0fae05"
  },
  {
    "url": "assets/js/11.313a148e.js",
    "revision": "c75c8e37f054aaa6e9d5eba2ebeb202f"
  },
  {
    "url": "assets/js/12.c396e1f0.js",
    "revision": "cc3c27fcf6b0c75cf1dd34bb4020ddaa"
  },
  {
    "url": "assets/js/13.c133be8b.js",
    "revision": "d8865bf370f3c202ae93af57f20069b4"
  },
  {
    "url": "assets/js/14.48ea72ce.js",
    "revision": "fc86d284a339b689de3162ec07fb51f8"
  },
  {
    "url": "assets/js/15.915add60.js",
    "revision": "9375d53977cb10c2da9a094d6d56ca0b"
  },
  {
    "url": "assets/js/16.8af1fb4d.js",
    "revision": "e892073e14e6b2705847cd2d8c480637"
  },
  {
    "url": "assets/js/17.30255889.js",
    "revision": "b54c5bf5f3cbfc6aa92bfc0248ba1f07"
  },
  {
    "url": "assets/js/18.d9fd0254.js",
    "revision": "3aa3712b813dfcdac5ea9bb37c4d5469"
  },
  {
    "url": "assets/js/19.a0c55983.js",
    "revision": "d71aae352b6bf7c36650bd0f21bbbf95"
  },
  {
    "url": "assets/js/2.fd76f4ae.js",
    "revision": "7c412db44e950505786bbae26cc46cc0"
  },
  {
    "url": "assets/js/20.2bd42132.js",
    "revision": "9e03180c694f0984652d62d0af055110"
  },
  {
    "url": "assets/js/21.509602f3.js",
    "revision": "24378fdb8c69ad070edf5776a76981e4"
  },
  {
    "url": "assets/js/22.4f3f05b3.js",
    "revision": "c031b6c16ae7f138d654502bc9257f2f"
  },
  {
    "url": "assets/js/23.2e24e11d.js",
    "revision": "1395b144eaf4dfc3b0d663faaa5b0387"
  },
  {
    "url": "assets/js/24.26b23af1.js",
    "revision": "dcde3b9764b183440b0bd41cc0eb724e"
  },
  {
    "url": "assets/js/25.eae62231.js",
    "revision": "93ac80010e3beaf467b3a71ce278f44a"
  },
  {
    "url": "assets/js/26.70d50cde.js",
    "revision": "bba348d774cd42fc8149af02de011880"
  },
  {
    "url": "assets/js/27.f456c452.js",
    "revision": "83173ee21f0d82e64216cbbdb97a634b"
  },
  {
    "url": "assets/js/28.9c37f720.js",
    "revision": "caf92452bb2dcda2606f0f33f0f345b2"
  },
  {
    "url": "assets/js/29.d32204b4.js",
    "revision": "d0536565e9105a713d1e29f637459ccf"
  },
  {
    "url": "assets/js/3.0150f190.js",
    "revision": "fdb8804b5a0750a0b620f63b1a245b11"
  },
  {
    "url": "assets/js/30.31eed814.js",
    "revision": "ecd2801a278ca9c6ca49f497976b573e"
  },
  {
    "url": "assets/js/31.b38760b4.js",
    "revision": "d2d113a3442213217d6126a01137c909"
  },
  {
    "url": "assets/js/32.a90dd6c0.js",
    "revision": "8e8012f909ce3a88095bd5150ea23e91"
  },
  {
    "url": "assets/js/33.bde7f180.js",
    "revision": "d57af4df0a5cf352e608f9d6e25bb8f3"
  },
  {
    "url": "assets/js/34.d45a8c17.js",
    "revision": "aaff6b1497abcaa08583ed3de30a83f9"
  },
  {
    "url": "assets/js/35.4701cc85.js",
    "revision": "6bb6053568892166948de2e7cc08cb73"
  },
  {
    "url": "assets/js/36.498f2505.js",
    "revision": "7229feba724af6210200d627507c14d6"
  },
  {
    "url": "assets/js/37.fee9d9f0.js",
    "revision": "19859ce4e9b4a9ea75f1f49f5cdd8607"
  },
  {
    "url": "assets/js/38.866c13b2.js",
    "revision": "97aee5782d98f0a98ecfb1306b5b18cc"
  },
  {
    "url": "assets/js/39.824fe715.js",
    "revision": "52bd1715d0932b8d0ba20feccf17bc4a"
  },
  {
    "url": "assets/js/4.ab23f4b7.js",
    "revision": "7d84bd16b478a1b61985b2f5b21ee40d"
  },
  {
    "url": "assets/js/40.129c2dec.js",
    "revision": "55277e707202687d225f19773c13f6ab"
  },
  {
    "url": "assets/js/41.ef344443.js",
    "revision": "cc7d883ccb9ae47673d5ae3a085aab9d"
  },
  {
    "url": "assets/js/42.7f119547.js",
    "revision": "e226105b4fea62c77d10d0be48e97ee6"
  },
  {
    "url": "assets/js/43.3772d08a.js",
    "revision": "a669145bf5c9d79ccaf72cbc8d005ad1"
  },
  {
    "url": "assets/js/44.7a9f5521.js",
    "revision": "e2cc234cdc6238c38059093d85d9640f"
  },
  {
    "url": "assets/js/45.4a897586.js",
    "revision": "a5e99cac1538d82569bc5b551028f1b3"
  },
  {
    "url": "assets/js/46.4b56036b.js",
    "revision": "0091ae77255e780a3c223ebc6f623e20"
  },
  {
    "url": "assets/js/47.d5df1d61.js",
    "revision": "d04b0606ed73485e444e3caa621e2c7a"
  },
  {
    "url": "assets/js/48.c5261f6f.js",
    "revision": "c981c8f3d5ad5aebe1b83a0bc0cd5f1c"
  },
  {
    "url": "assets/js/49.608bcfb3.js",
    "revision": "66b6bd2c43f7e1bd186c7aa4ba9d1a33"
  },
  {
    "url": "assets/js/5.7da2bac0.js",
    "revision": "657c6de28af5e4a2d0aa08d831912060"
  },
  {
    "url": "assets/js/50.6ad2c12b.js",
    "revision": "dfe1280adff34fddea01b83a23184b93"
  },
  {
    "url": "assets/js/51.4fc9dcc2.js",
    "revision": "0b945d5963baabda2a90ab7043b21e90"
  },
  {
    "url": "assets/js/52.46b449fa.js",
    "revision": "1c963317d0d0953492b30c5f9d63225e"
  },
  {
    "url": "assets/js/53.0e929b7e.js",
    "revision": "12c5f5f5d9e3345f6d1f2c8e33f7c004"
  },
  {
    "url": "assets/js/54.45783db0.js",
    "revision": "6d9676f2c0a6f722c65799421bb888d0"
  },
  {
    "url": "assets/js/55.b8b589f5.js",
    "revision": "5d4fbb48ebf260cb6514b21c1e84dc57"
  },
  {
    "url": "assets/js/56.56b37d63.js",
    "revision": "ad98b2ef7e5e067cbac0b6862a7241b1"
  },
  {
    "url": "assets/js/57.bbfd0ccc.js",
    "revision": "1d576e6dedb06d1288aad4b909a82e96"
  },
  {
    "url": "assets/js/58.6fc521fa.js",
    "revision": "8f50a30698c27f9f6f0674fa82d7de23"
  },
  {
    "url": "assets/js/59.e3be4521.js",
    "revision": "5e8e3eca8b6c6763712e3699b143d48c"
  },
  {
    "url": "assets/js/6.e98e2d42.js",
    "revision": "3ee3ff41aa39bfa9ef3fb83abf5a7c39"
  },
  {
    "url": "assets/js/60.694f6ec9.js",
    "revision": "227b9780b0b93b6f72d786fddde405e6"
  },
  {
    "url": "assets/js/61.185b6cec.js",
    "revision": "87b4b9314b805e2843a9264f516d644c"
  },
  {
    "url": "assets/js/7.17d5713f.js",
    "revision": "82cc9f5c0043a2308daf437187fb52f7"
  },
  {
    "url": "assets/js/8.104de35f.js",
    "revision": "d5da832cf40f8794efbd528fc361ac42"
  },
  {
    "url": "assets/js/9.0b2f2316.js",
    "revision": "e10fa52c968a0e553e2ffdbfbe128bf5"
  },
  {
    "url": "assets/js/app.6e67ea7c.js",
    "revision": "d196549055c41ad1af104f5f70c68ebb"
  },
  {
    "url": "charts/area/index.html",
    "revision": "db73a2eb253ffdfa652067035186d2ad"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "1dee800aa4c4d25e071418af3d888e64"
  },
  {
    "url": "charts/column/index.html",
    "revision": "e1778991aad0d6a354e1eacd653e435e"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "1587ac36037f54b6bdc0ec535e4bbf64"
  },
  {
    "url": "charts/index.html",
    "revision": "9b593c0bebc241718392b9c39443a14c"
  },
  {
    "url": "charts/line/index.html",
    "revision": "83305898a7c66da76eb0806e6661cf4c"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "f21da883c51159d768c81e413c41149f"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "bb649f66ee3f41117b6c64f0cf64619b"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "bee9aa2255338d830753c8ea49d944dc"
  },
  {
    "url": "components/axes/index.html",
    "revision": "85ea47ee8e977297330340b6974cc7c9"
  },
  {
    "url": "components/colors/index.html",
    "revision": "00d97cbb1497ab67d8b6bcef4e893572"
  },
  {
    "url": "components/data/index.html",
    "revision": "18229f0b137a8812dbc60189406f7f7c"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "2c2ed2525fec28e24b37d852d0333824"
  },
  {
    "url": "components/heading/index.html",
    "revision": "5c497cbeea2f459eb23233c0cef06637"
  },
  {
    "url": "components/index.html",
    "revision": "353ef18e97454703f24148b8a63aaf22"
  },
  {
    "url": "components/labels/index.html",
    "revision": "ee6d4900b0e285d66481730de8e3afa1"
  },
  {
    "url": "components/legend/index.html",
    "revision": "d02e770382c71b894b76bc3165a31e0e"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "b77e8a327f82c88b301d3c9439a62f3b"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "fbaeaf8b2bbff305613af3c00351a84f"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "441666842e72f71110cff94c89e10909"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "391190c4a800ee361bd3099b5a255373"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "97e6c0b44244d7b4d35758bd2a381dc4"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "861712e70ab3fdba27ce17247673af4c"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "615853d3ff2fe75dd3ee2ec1d651c7cb"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "63e7c45726e64be19322d7275d73a6d1"
  },
  {
    "url": "customization/index.html",
    "revision": "e5e0302681c33a60ac07dfd27bfc4a7c"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "3723981c662f208476065d20e15e8f67"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "fe4d8e3ab1ffdba2d06e44ed1589f6f1"
  },
  {
    "url": "development/index.html",
    "revision": "4cd1d34a312a173962abdfa5fc69ae81"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "e0a8b2fb9c7ec80094aac545b5eea6dc"
  },
  {
    "url": "docs/index.html",
    "revision": "a3cb1a8d2d803a24d9815a155fbf6576"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "0c57156b8ce6d584e7fa22c113490027"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "d0361e6109cf29e10b531240f7e370dd"
  },
  {
    "url": "examples/area/index.html",
    "revision": "5d5800310a6810c62d5f2ea91cc07f0b"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "3ce663e79d3a07489056996c75d14256"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "7994e2dcb51e731fbe5500a2f77c71b3"
  },
  {
    "url": "examples/column/index.html",
    "revision": "7a8e9ce3fff953e51225a8032a3f275f"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "1f4c47ad4ad270f0ad04e79bfae9b357"
  },
  {
    "url": "examples/index.html",
    "revision": "63e674ad8b83f9d3392dd525c560c140"
  },
  {
    "url": "examples/line/index.html",
    "revision": "580d60ced3a03c94155edeeed626322a"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "5e9306cab4988bb736a8098676485196"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "aa2771c9e0ea7a5e8184b565e7b963ad"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "9519cfac8cc902a7576bd55771b6de14"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "fec901ec89fc61186b915a95b4169436"
  },
  {
    "url": "index.html",
    "revision": "8128a148edd4a7e3341a33a48016e3fc"
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
