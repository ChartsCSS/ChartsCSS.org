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
    "revision": "7393ea4f240ccf19a79d87ae86c41e72"
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
    "revision": "2a83fe3650a02718d29b867aad924bcb"
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
    "url": "assets/js/32.add231b4.js",
    "revision": "c8d77b66572f0bbf1ead2466d40c566d"
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
    "url": "assets/js/38.bc953344.js",
    "revision": "456353ae0b9afb8e6666e918adc7844d"
  },
  {
    "url": "assets/js/39.63f1f044.js",
    "revision": "9da445def854672a852391867e3d50c3"
  },
  {
    "url": "assets/js/4.ab23f4b7.js",
    "revision": "7d84bd16b478a1b61985b2f5b21ee40d"
  },
  {
    "url": "assets/js/40.47989a6b.js",
    "revision": "ae350eaa0e17e7459036dfbb2536b577"
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
    "url": "assets/js/48.e649281b.js",
    "revision": "f8824d1d84c789e43dbeb8a69cdf9e2e"
  },
  {
    "url": "assets/js/49.c75bfda6.js",
    "revision": "ca96b16fcb1376060d6ec18063ba1ddb"
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
    "url": "assets/js/app.5a09b268.js",
    "revision": "49ba7f1841568c6cfda9b21f82b72274"
  },
  {
    "url": "charts/area/index.html",
    "revision": "670b76ac601efba1b5f55a6258e938fb"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "45e3ce3563a1e9d35f332583ba49688b"
  },
  {
    "url": "charts/column/index.html",
    "revision": "a6204fd72840258d1052836b5037c39a"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "a7aa77142bbe5119dcb642da5b28e93e"
  },
  {
    "url": "charts/index.html",
    "revision": "722fe6b6b787924f86b0bd2a5ac62025"
  },
  {
    "url": "charts/line/index.html",
    "revision": "bb029c64ccba35e4f37855eebfca053f"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "91a6ba2a2eca107d7269b42ef50de9da"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "ee9d9c07e09fe18ff4a4cb1afe57d485"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "433462c81da5bf2a0f474d434bec39a7"
  },
  {
    "url": "components/axes/index.html",
    "revision": "c9798262cdc9d74b16fe9b5abc984bc7"
  },
  {
    "url": "components/colors/index.html",
    "revision": "32f365795139c2f6219ba7ac517f2909"
  },
  {
    "url": "components/data/index.html",
    "revision": "5f1f9e035c7dadf45c518edeede340a4"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "644080c8d5c752bc9bf30bb25fcd94ea"
  },
  {
    "url": "components/heading/index.html",
    "revision": "bddaedc9a4ffbb596af9cd806ca0b5d3"
  },
  {
    "url": "components/index.html",
    "revision": "c1301c85bb9d40a05d44342db8078a3b"
  },
  {
    "url": "components/labels/index.html",
    "revision": "c4accf99c218d2af1c883bd1a4d6c062"
  },
  {
    "url": "components/legend/index.html",
    "revision": "1b74beae6c80a49f57feb7cfef308e70"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "593e3e256b30fe9c1414ad701f65559c"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "7bb03448c783960a45fd387850099940"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "72c25a0cc687e6120e53f49620780ec9"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "87c4628b58eb55194cd14ed985e645a8"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "c7a01da851c0f57c917437bd94c75f9e"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "22a4c710e1a080735ec86fb60ce7cefa"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "65a8a9c96b1fbaaa0e672302cafbd9bc"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "1f756b5964bf210f1831cdb2607e04cc"
  },
  {
    "url": "customization/index.html",
    "revision": "a31effb7b9aa71788e5a6ab3cc3f0741"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "58f08186572fc50140a97a6ab475c5e9"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "c6acfea2adaf79a3a849c855584c2886"
  },
  {
    "url": "development/index.html",
    "revision": "6f4c884f19be76923d83be7cee0d07b2"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "45d47f598cca4d4f8887b39ddb0971d8"
  },
  {
    "url": "docs/index.html",
    "revision": "9d437751768d95cb66cee5c010a3e347"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "33b4be8fbeaf923911e455c26eb5222d"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "5dfec35f84165bfb5fa832e8e92f08f8"
  },
  {
    "url": "examples/area/index.html",
    "revision": "f012e52a546421004f6b20b76c2de872"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "984eda445f5730fd4af88546f994239c"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "6e7aa5721d7e7678746db0e5ef63f5ab"
  },
  {
    "url": "examples/column/index.html",
    "revision": "ccc0a54afb4a3be85431ebac4956577f"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "9e612bbbd394edd062306593ec7fdeff"
  },
  {
    "url": "examples/index.html",
    "revision": "4bdfabc2186734846b35ff534b855a83"
  },
  {
    "url": "examples/line/index.html",
    "revision": "a58cfe5c4a54693fcce655a35372cba7"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "9febd12f42369b50e9ae43f1a2de422e"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "312b374a2c299c9f8f7bd78c4c7949c0"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "ef4bc05d615d132859d2fd3576c78c03"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "07400c9bb487caa00b1d63bb19df8ad6"
  },
  {
    "url": "index.html",
    "revision": "5ed7a70dfb63a551ee7fa55e3f5c9ed7"
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
