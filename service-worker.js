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
    "revision": "ed8516afc306426185fad398e03da194"
  },
  {
    "url": "assets/css/0.styles.c84b6fa6.css",
    "revision": "1bee095a6418d48c5f0089558c66163f"
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
    "url": "assets/img/charts-css-anatomy-1-0-0.jpg",
    "revision": "fd94517b72cc9b1fed496d8cd709941c"
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
    "url": "assets/js/1.62774714.js",
    "revision": "96660eeb751b9bd72a4b206dcab82471"
  },
  {
    "url": "assets/js/10.80ed895b.js",
    "revision": "9f00371d787c0bd49d668a89ce486cda"
  },
  {
    "url": "assets/js/11.385638ff.js",
    "revision": "200367ca0891a149667bedac53ae017a"
  },
  {
    "url": "assets/js/12.0bd6c950.js",
    "revision": "316450f2cb8d3e44e0e0b0ac1c0b4d46"
  },
  {
    "url": "assets/js/13.d3bfecb7.js",
    "revision": "a8a4f26b5c646214fb5b186a298cb886"
  },
  {
    "url": "assets/js/14.a28de1e7.js",
    "revision": "56250f8445809d247684e484bb69c2bf"
  },
  {
    "url": "assets/js/15.bda32ad4.js",
    "revision": "c3799413f5aecc5f9b7e9fb08ab78b2c"
  },
  {
    "url": "assets/js/16.2a7a7927.js",
    "revision": "7ca33510a747059c226e0f743d50a62c"
  },
  {
    "url": "assets/js/17.a644e637.js",
    "revision": "3d361742b5246233a57ab3e28e653673"
  },
  {
    "url": "assets/js/18.a8a11b1c.js",
    "revision": "cb35ea8aca819585578a797bd896ee84"
  },
  {
    "url": "assets/js/19.3524b940.js",
    "revision": "0201bc92f6771e15e48b7df71155886c"
  },
  {
    "url": "assets/js/2.dd9406c6.js",
    "revision": "6fed46286ad991ce61d55d0c1b78b9f6"
  },
  {
    "url": "assets/js/20.a7139373.js",
    "revision": "63d791d4615665e5be866503fcf61d85"
  },
  {
    "url": "assets/js/21.61a6db7d.js",
    "revision": "923c412a5e79d14fd3a20d20ee14cd25"
  },
  {
    "url": "assets/js/22.39a86cdf.js",
    "revision": "4b928b649e7aa9e0984226195b6d035b"
  },
  {
    "url": "assets/js/23.976b2210.js",
    "revision": "f6ebd03ac1e26bdc5c1e6ab452f85c78"
  },
  {
    "url": "assets/js/24.9fe0b5cf.js",
    "revision": "f8eb0ba2d6c08b0840faae3c832dc7b7"
  },
  {
    "url": "assets/js/25.c013c219.js",
    "revision": "7128354cf5544c4d38d0e01acacbea69"
  },
  {
    "url": "assets/js/26.f16bd7db.js",
    "revision": "013a01b41f2f0e65cc3cc53daf4dbb8f"
  },
  {
    "url": "assets/js/27.51972de9.js",
    "revision": "8121f19c244cb016a6622a0d7d25e457"
  },
  {
    "url": "assets/js/28.d5fbd98e.js",
    "revision": "3ccf708ce1be0b861dc7e3e17c3b1c37"
  },
  {
    "url": "assets/js/29.e32aa6c8.js",
    "revision": "790fd7b2b08c33ddd440454de0510ca8"
  },
  {
    "url": "assets/js/3.c3512bd1.js",
    "revision": "0dd048b8957b401453a286a79a023314"
  },
  {
    "url": "assets/js/30.1d7304a0.js",
    "revision": "241bf2c9ea5ba5eaedf7a150dd479fa6"
  },
  {
    "url": "assets/js/31.e0b612ca.js",
    "revision": "2fdcdec1c8ecbf17dd5e6873ff624026"
  },
  {
    "url": "assets/js/32.5a660c9b.js",
    "revision": "d218e69de53b10d71771e1a039a30729"
  },
  {
    "url": "assets/js/33.41db659b.js",
    "revision": "c160eb212b176986edf2fae357627da6"
  },
  {
    "url": "assets/js/34.fe4e2cde.js",
    "revision": "21302f626c8de790ff7bc4a6a4a7b324"
  },
  {
    "url": "assets/js/35.2825b961.js",
    "revision": "1f313b854aff0817230ce390bf478fe3"
  },
  {
    "url": "assets/js/36.251ac211.js",
    "revision": "73a7303777312c690c33a788004e9717"
  },
  {
    "url": "assets/js/37.41050539.js",
    "revision": "ac1272d1c68ee6e99d2457c357f29283"
  },
  {
    "url": "assets/js/38.72ecf8ee.js",
    "revision": "61930c6647adaf12d1df0bf34ce1f8a1"
  },
  {
    "url": "assets/js/39.7eb9921e.js",
    "revision": "5b2e77fe9db16a2843fb552b922c880a"
  },
  {
    "url": "assets/js/4.21735de4.js",
    "revision": "6b82ab4d9d015d61e5178170795b6405"
  },
  {
    "url": "assets/js/40.1184367a.js",
    "revision": "cd57f3d3f00a6b5f78b5c2546402b4db"
  },
  {
    "url": "assets/js/41.ffc3eb93.js",
    "revision": "2f755aae167e25dda5bb7e51e0ff5e3c"
  },
  {
    "url": "assets/js/42.92b95ebd.js",
    "revision": "bcf01a176ae491e2c7fa674b09f58183"
  },
  {
    "url": "assets/js/43.3e6df17f.js",
    "revision": "80cf26846780a4dca252182c264e46df"
  },
  {
    "url": "assets/js/44.26af6052.js",
    "revision": "faa94d626303546c2542bf865690a1f3"
  },
  {
    "url": "assets/js/45.aff2af6e.js",
    "revision": "1f8bcf029871f13881adaf898a664cdf"
  },
  {
    "url": "assets/js/46.60049a10.js",
    "revision": "7a8f73ef34c1668373736dedfbdae99c"
  },
  {
    "url": "assets/js/47.b067cd25.js",
    "revision": "ae855c1a9ba93dcb3f345259fc36bac7"
  },
  {
    "url": "assets/js/48.23ebb8b9.js",
    "revision": "233b422f16197730e07a331ed2f4d0d7"
  },
  {
    "url": "assets/js/49.bce778b4.js",
    "revision": "8f812a57c4ade52e8c8810ea280e98b3"
  },
  {
    "url": "assets/js/5.cda8c120.js",
    "revision": "7c95a6bb55df5effba2cc4694ba69895"
  },
  {
    "url": "assets/js/50.71b87e17.js",
    "revision": "11d6c8b840964ea3d04a11c22625f93b"
  },
  {
    "url": "assets/js/51.ebb50483.js",
    "revision": "124421ae71019bc792b516e4aa22dca5"
  },
  {
    "url": "assets/js/52.0d94b96d.js",
    "revision": "3a57e1ea6af29ee1e49cac2677cd2f67"
  },
  {
    "url": "assets/js/53.07f0761d.js",
    "revision": "3587c8a15a90f43ea8bf385a55be93f1"
  },
  {
    "url": "assets/js/54.252ae3a4.js",
    "revision": "f6d8b3a713fa635d319eff7728286d04"
  },
  {
    "url": "assets/js/55.3f226fed.js",
    "revision": "0ccfa41897764888bfc4f4e9ad5dee32"
  },
  {
    "url": "assets/js/56.6ebdd843.js",
    "revision": "d182dda4c0877a23f4049bf315b06088"
  },
  {
    "url": "assets/js/57.496aee69.js",
    "revision": "e24cd96efa2bb5af02a6adccca1463e4"
  },
  {
    "url": "assets/js/58.cb0e2ec4.js",
    "revision": "ef8774f073419bd3137b0241aa4a6532"
  },
  {
    "url": "assets/js/59.a0f25c0e.js",
    "revision": "b19b6fc05c1a6d8b995146bba979c0f5"
  },
  {
    "url": "assets/js/6.b9132f3a.js",
    "revision": "e9639601c606e10f4ef645d0672a8442"
  },
  {
    "url": "assets/js/60.4f0794a9.js",
    "revision": "190fc33feb930e36bfe707779c3b7217"
  },
  {
    "url": "assets/js/61.2247fa1b.js",
    "revision": "e1b879dfc87bf1dbae06b821fa245c5c"
  },
  {
    "url": "assets/js/62.eadb12b6.js",
    "revision": "ccb13045907050bc092f745f88cb1db5"
  },
  {
    "url": "assets/js/63.d992cfce.js",
    "revision": "d9660a3cf51ffa75c9e4c5947eb59cc9"
  },
  {
    "url": "assets/js/64.acb7df7c.js",
    "revision": "afa6026c7ca6f5059a96e03c0a71071c"
  },
  {
    "url": "assets/js/65.712bb27d.js",
    "revision": "5f50a316ac53b109c45c079c4a0245a1"
  },
  {
    "url": "assets/js/66.af99c4ae.js",
    "revision": "63e17efa816dbc1404aa7aecf9d8faf0"
  },
  {
    "url": "assets/js/67.e6e9213c.js",
    "revision": "70f373af05b56f45e19656ddf8ccbfe7"
  },
  {
    "url": "assets/js/68.b28d5485.js",
    "revision": "980bb60ef8d30c0a6e79e2493c522bf7"
  },
  {
    "url": "assets/js/69.3f0c7a2d.js",
    "revision": "6323ad7cdbcad19d9b65af11c1c4f687"
  },
  {
    "url": "assets/js/7.b0fccd41.js",
    "revision": "902ee1339a8574679895e0224d125308"
  },
  {
    "url": "assets/js/70.37f6f3ef.js",
    "revision": "a73fbd414d3d485c30567c0799eb33e2"
  },
  {
    "url": "assets/js/71.d59ad677.js",
    "revision": "91ffe14e4c37f78f4b9a60d54eea2c61"
  },
  {
    "url": "assets/js/72.932e0f2b.js",
    "revision": "d81e5dc52c7c4b5f1233e2ba425a230a"
  },
  {
    "url": "assets/js/73.ee9b5c56.js",
    "revision": "8debd6090db2f4ca4dbdc15bb8a24e9f"
  },
  {
    "url": "assets/js/74.736ab9cf.js",
    "revision": "1edab818abac3b720972496df4f56b82"
  },
  {
    "url": "assets/js/75.4affc042.js",
    "revision": "19d6bb2793085a02c23c6b0c4c21275b"
  },
  {
    "url": "assets/js/76.34e5e9d2.js",
    "revision": "2ffd5b27956fb64adbedb50263d54d7e"
  },
  {
    "url": "assets/js/77.822748c7.js",
    "revision": "80c15a56bc722f895d80ece96ad981e2"
  },
  {
    "url": "assets/js/78.2c4b8d6b.js",
    "revision": "7315e8076e50bfc33a99fba3746aeabf"
  },
  {
    "url": "assets/js/79.6ffee677.js",
    "revision": "3222d5c2494feff5d982b1bfae1f8478"
  },
  {
    "url": "assets/js/80.d0526755.js",
    "revision": "83c7c3277e76b65d87d9255e1337c432"
  },
  {
    "url": "assets/js/81.a0891da3.js",
    "revision": "24629473e54c6501d938755c17c6e651"
  },
  {
    "url": "assets/js/82.aba6a480.js",
    "revision": "a977a9acbec1b6faba9c15a4b717b73e"
  },
  {
    "url": "assets/js/app.8a815cee.js",
    "revision": "abd282f2ca66fb336177419e73e1101d"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "34cfec5891fd5f2e4ed7d895775bb598"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "93c6917f0d745538109d20c9bab7751b"
  },
  {
    "url": "charts/column/index.html",
    "revision": "8ab1eab6e4d77e274fb8ac8c7cf8c018"
  },
  {
    "url": "charts/index.html",
    "revision": "20625458cb976bc9a6660bb861d3426d"
  },
  {
    "url": "charts/line/index.html",
    "revision": "ef0a4558cb1d10a681bfb295bbd6ca85"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "d9805b9b58d14c9dc4218d03e175e0b0"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "4302e78cabf3d8f20a229d0b9bb4b96c"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "9953075d61809a6b2c04726ab3baf9df"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "0753226748e39811e95377a708658dac"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "0cba54b851ef87d73dda4b6dc7b3ba42"
  },
  {
    "url": "components/axes/index.html",
    "revision": "f5c61a588e004efad89c445b53f1559d"
  },
  {
    "url": "components/colors/index.html",
    "revision": "334d2e1a1741569df85fc0378807326a"
  },
  {
    "url": "components/data/index.html",
    "revision": "e93d8579b03de6240bc96c4076de9358"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "0b3a3f4b4a74d6b3ed6e0c47c22d909a"
  },
  {
    "url": "components/heading/index.html",
    "revision": "9f2c188eb261731ded3f56b7c6dce513"
  },
  {
    "url": "components/index.html",
    "revision": "94083440bf3ad5ba066f2544f1a353b0"
  },
  {
    "url": "components/labels/index.html",
    "revision": "9324e032a70579bd5f2b2b74f88a64b3"
  },
  {
    "url": "components/legend/index.html",
    "revision": "067eb165005fa598dfa06ec48df67fda"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "e99d2c21cc31f3a8c92bcb96af72bb8d"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "91cc9c9aeb2798614a200a3573b381a1"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "4a7c16ea88afe65443c688e2a78e8115"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "69225bf93e9982a44e5cad8841544c13"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "8b01a46918d31c692ba45c0b0f8612e2"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "93d7d06eed95b8dfb1c18dc6b4ddd530"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "fa6d53afb567abe65887517c338dbcc9"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "7d5c6dc8537e0bab0fea0a90aa29bff3"
  },
  {
    "url": "customization/basic-styling/index.html",
    "revision": "9f5dd0b3900e1c75c83cf9af40f14c32"
  },
  {
    "url": "customization/index.html",
    "revision": "b4c1cf6b31285107362d3c5ac5a3ad7b"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "c1f4103854d1d5e4cfbe27cee0c18c69"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "5d990192ca9e0ab0e79e345926206db8"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "13e5b45f9f8ce029a8ba4ff484977bd9"
  },
  {
    "url": "development/index.html",
    "revision": "8ade0c7513f8c91aeb72c73e76789b6e"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "49d4e7f859cb6666bd64d91f3ee0b584"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "5bd73f9812fb6b08a481141a9f428865"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "b088a42de8dc5fdcbdf821141845a6b3"
  },
  {
    "url": "docs/index.html",
    "revision": "8e4a860776af603fb3eba2c5220fe8c1"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "cd8bf3cd104465b212220605f5e68079"
  },
  {
    "url": "docs/migrate-to-v1/index.html",
    "revision": "d59c0c2329b0d9f182b6664af15ef3aa"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "9dd5c9b1634fbfd3aff632f0c2da1d8c"
  },
  {
    "url": "examples/area/index.html",
    "revision": "6496eac1065c76d69daef400d37ecfb0"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "d1a1f28c67605b8803a39f37d36788b6"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "b83a130455eaa1891fef7b399fd7a073"
  },
  {
    "url": "examples/column/index.html",
    "revision": "23b1631ec89093dc7578691b1f9f6c03"
  },
  {
    "url": "examples/index.html",
    "revision": "5413bc3f02c47b75b7afc903b0aaf293"
  },
  {
    "url": "examples/line/index.html",
    "revision": "f3c213282b3d0fdf9f925a9368babfd6"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "822deab76530f812459d2241f846d032"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "2d1cfae55b5a4d0a7ac6329960aa4bb8"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "5cfb8a278bc094a1e3816c2b94779466"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "8cd6883de24a3c8653b41563b3f75b66"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "0339fde449089ef2a68ac4b8a623988f"
  },
  {
    "url": "index.html",
    "revision": "2e5adcc08078a763458706840108bbc5"
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
