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
    "revision": "e4204e9037fe50dc993497ef558cf78b"
  },
  {
    "url": "assets/css/0.styles.9cf88a27.css",
    "revision": "c020cb6ed19c9463bf6f07706d33975f"
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
    "url": "assets/js/18.9aec2966.js",
    "revision": "df56a2eadebcca7e6b7a59525cbf5e06"
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
    "url": "assets/js/20.66e235e9.js",
    "revision": "75409c2dec505ca88f44209f59a88c8b"
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
    "url": "assets/js/25.d657dfcf.js",
    "revision": "be623d3469725c94da6540a3e7feae33"
  },
  {
    "url": "assets/js/26.8a3ff77c.js",
    "revision": "6136e47c970518bba97515abb8cab69b"
  },
  {
    "url": "assets/js/27.8c0f34f0.js",
    "revision": "3ecdfb784598287c35fbc1c45b2e937c"
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
    "url": "assets/js/32.ce69fa8a.js",
    "revision": "a423599cfed20d9aa7c9331b3fed43df"
  },
  {
    "url": "assets/js/33.13414664.js",
    "revision": "87a184c342c0c768ad546eca5d117e67"
  },
  {
    "url": "assets/js/34.02afbb92.js",
    "revision": "d3277aad41a5dc3d3f6ffda9e2766f70"
  },
  {
    "url": "assets/js/35.165fc3f7.js",
    "revision": "0271fd88e7d0afeb3d547c4e0a41bd84"
  },
  {
    "url": "assets/js/36.116aeee2.js",
    "revision": "9d38adb9053901835c148dd2b807b825"
  },
  {
    "url": "assets/js/37.95931d68.js",
    "revision": "1d03d1743746dbe848300560433cbd52"
  },
  {
    "url": "assets/js/38.f024fc3c.js",
    "revision": "1a207e3914e25fb98faa4f767f201007"
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
    "url": "assets/js/42.2aeaef9f.js",
    "revision": "8801c8333e917350c66978b68c2cb03d"
  },
  {
    "url": "assets/js/43.1b6b700e.js",
    "revision": "af526777e81f22dd0a084c9b2509dae5"
  },
  {
    "url": "assets/js/44.3c615703.js",
    "revision": "1c07cdc75f5b2f06b769a8369a712b5f"
  },
  {
    "url": "assets/js/45.f128f750.js",
    "revision": "d453d6677889eab00e8b6ab70b79c735"
  },
  {
    "url": "assets/js/46.b2e92422.js",
    "revision": "713555c0adb4be66cce7737507ea9167"
  },
  {
    "url": "assets/js/47.75d2979c.js",
    "revision": "821fe12117d969453c6e1d3a461f7c3f"
  },
  {
    "url": "assets/js/48.9af6bb96.js",
    "revision": "cdbc88ce8f72fea108ea2cb99ba19835"
  },
  {
    "url": "assets/js/49.81fd27d2.js",
    "revision": "c1d3fa059adc06116488988b81a90a47"
  },
  {
    "url": "assets/js/5.cda8c120.js",
    "revision": "7c95a6bb55df5effba2cc4694ba69895"
  },
  {
    "url": "assets/js/50.34bfe245.js",
    "revision": "edd191bbf282b26d2d465927d4ccfaa5"
  },
  {
    "url": "assets/js/51.cb9a0de4.js",
    "revision": "37fb0e63b57099484359997c07447bb8"
  },
  {
    "url": "assets/js/52.3fa9ffa4.js",
    "revision": "86f05289ff3c01e4ebd5fa655be33b4a"
  },
  {
    "url": "assets/js/53.85eea11b.js",
    "revision": "1819cba6a52a12a75b9ccad130fd3044"
  },
  {
    "url": "assets/js/54.34189729.js",
    "revision": "81b6b9dfd776bdeb894da739bfc127bc"
  },
  {
    "url": "assets/js/55.09e19f9e.js",
    "revision": "a022b1e14428be1bb541bdc37a101120"
  },
  {
    "url": "assets/js/56.766f088c.js",
    "revision": "50012a2d28d833c0d1fa7b980cbea696"
  },
  {
    "url": "assets/js/57.6c858eed.js",
    "revision": "f17d571552348b13413d2e975535b018"
  },
  {
    "url": "assets/js/58.fb632680.js",
    "revision": "d0071be6e3f95f03c78786325bd38067"
  },
  {
    "url": "assets/js/59.36912b09.js",
    "revision": "1c676407d3adda0d37be72bccd2e2230"
  },
  {
    "url": "assets/js/6.b9132f3a.js",
    "revision": "e9639601c606e10f4ef645d0672a8442"
  },
  {
    "url": "assets/js/60.50e512d5.js",
    "revision": "09f9aff9ee4a353dbc018d1c70a6fb2b"
  },
  {
    "url": "assets/js/61.05157dcd.js",
    "revision": "817a88d01f0473babf017b4b2886d932"
  },
  {
    "url": "assets/js/62.bc789683.js",
    "revision": "7c362ba3cce1399f266b7f0adced3c9c"
  },
  {
    "url": "assets/js/63.ad7a57f8.js",
    "revision": "1ef1da36b9c7840fad4da5c4eb705742"
  },
  {
    "url": "assets/js/64.cdcf86e5.js",
    "revision": "eebfe351eb7575499f39cdafd3e17688"
  },
  {
    "url": "assets/js/65.0bfbf019.js",
    "revision": "68bc6ab70155500001fc7440f63e52ad"
  },
  {
    "url": "assets/js/66.c3ea2c5e.js",
    "revision": "db2cc30462936ad0b3da32020a18790b"
  },
  {
    "url": "assets/js/67.3a2656fb.js",
    "revision": "3bdc59f52d54fc23e7e0a5e6791e4fe6"
  },
  {
    "url": "assets/js/68.507bab91.js",
    "revision": "0a23c39b20aa3101e865804c0bad690e"
  },
  {
    "url": "assets/js/69.6fc82ac9.js",
    "revision": "4d19c50f7eddc056be2b542b381c1f4f"
  },
  {
    "url": "assets/js/7.b0fccd41.js",
    "revision": "902ee1339a8574679895e0224d125308"
  },
  {
    "url": "assets/js/70.6ddbd392.js",
    "revision": "c58e9ddac359a64e7ff7805506938e42"
  },
  {
    "url": "assets/js/71.2dfaa2c8.js",
    "revision": "90dc65be6c1f5c0ebb7136ff4d65a400"
  },
  {
    "url": "assets/js/72.43f06615.js",
    "revision": "8576686b5238f68753decc4759aecb34"
  },
  {
    "url": "assets/js/73.fcb52d39.js",
    "revision": "359d2491bce4802e3ec91b7f094581c9"
  },
  {
    "url": "assets/js/74.dbacc3b0.js",
    "revision": "d5c23b28160aa0a3fa904c7ae388b13e"
  },
  {
    "url": "assets/js/75.d1685710.js",
    "revision": "515fd3c189ba51e3e908cc448572eb28"
  },
  {
    "url": "assets/js/76.c786ff4f.js",
    "revision": "41ae2fd7fd8fbaba0bde2c7e6f0460aa"
  },
  {
    "url": "assets/js/77.e298c887.js",
    "revision": "daa7b1c0c8d0eba11661b3cd3c9acde4"
  },
  {
    "url": "assets/js/78.2f4407cd.js",
    "revision": "8ff3e4104d781a6c3e823b3b326a74a1"
  },
  {
    "url": "assets/js/79.8155314a.js",
    "revision": "b769a1213e4a3b1735bf1d899a1c48ed"
  },
  {
    "url": "assets/js/80.cca950e9.js",
    "revision": "bff4ba316a2cae86748ed4b9460b0dd2"
  },
  {
    "url": "assets/js/app.8bd2fc13.js",
    "revision": "b204e510d72f41d79e5aa3348fc76dda"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "7b735871c5745ba1dbcd38e73b847139"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "3042b96e2603e4997e51d045f7c88a95"
  },
  {
    "url": "charts/column/index.html",
    "revision": "623047cda8d66d8d12ad4d23e29e318b"
  },
  {
    "url": "charts/index.html",
    "revision": "01cc2d236881a20457a4687098f61736"
  },
  {
    "url": "charts/line/index.html",
    "revision": "a45345691f310f46b28a8b2007876fac"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "b8024557f21787a6cc618325bffe8728"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "f1ba3d4288fe2fdbb9cdecb575a752d9"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "c22cc6a8b54d468242a9bbc675b11630"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "84269c8e3eaa554ca8b729307e71a4e8"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "d852437d96ea1fe2f852f9cd11e2740c"
  },
  {
    "url": "components/axes/index.html",
    "revision": "f6585b6bdd6b601816c27df97390a3a6"
  },
  {
    "url": "components/colors/index.html",
    "revision": "5d2c0aa42bb9bad61e6822f3f4e5373a"
  },
  {
    "url": "components/data/index.html",
    "revision": "6c561b134727f1be81934493ef872742"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "b89c41e705fddea2c3bffcbf790d59ab"
  },
  {
    "url": "components/heading/index.html",
    "revision": "8321cfbc1c568ffffc7e1b8d6e434e7a"
  },
  {
    "url": "components/index.html",
    "revision": "9b8f4f27d4fce8cbdb9a3f27afcc8c74"
  },
  {
    "url": "components/labels/index.html",
    "revision": "5c6e73b5aece56ff2ea665cf491893eb"
  },
  {
    "url": "components/legend/index.html",
    "revision": "d4161f1a1e0eae996ba3a35bcba721b5"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "5d20aece475d2c5dedd5266ba555d594"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "579dd2ec73d338e4812c0dfe980f9203"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "0c8676516a623cf77c35286840b1f7e2"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "206a1866deaea315ee1df541a2f5d485"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "1cd7103c021e0e105291aecc916dab39"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "a547fa872c19003837051d87008c46ca"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "9b87ed9726211d88b8c0f289a9b1f41a"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "f7436f573a3031c8b95422f2aaf03eb1"
  },
  {
    "url": "customization/index.html",
    "revision": "342eab49edebe60bd9d87c4debb95282"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "59a8e76f542fa132ca19d27ffa07c844"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "08545da823633c3f5c277f82b318c926"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "4d758c87c16e05a893ce1cacdbe891e6"
  },
  {
    "url": "development/index.html",
    "revision": "46cd75caae1d6ae506822d5f20b21d52"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "da714f1548ed8c7ab1c5411db3c1e14a"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "90c5a26799fa63f42a44207376f2c734"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "7e556e809aa795defd97598424dda1fa"
  },
  {
    "url": "docs/index.html",
    "revision": "f733559ba6d0a9627a11af62af91781a"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "2ebb2de9ec1a25c3fc77ad2ba53524af"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "f03dee315068ee22a7d142b32351943d"
  },
  {
    "url": "examples/area/index.html",
    "revision": "9ae0b5aca08e89408d188145844ccc4f"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "3de6d1c4bda9e50f6e1b6207514a68ed"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "9814996810f35f4ef2790daf45f1ed52"
  },
  {
    "url": "examples/column/index.html",
    "revision": "a75f3cd1421727daf0cad3e5018d9338"
  },
  {
    "url": "examples/index.html",
    "revision": "5f12ab64ad44d1af09ea96bd14481ed6"
  },
  {
    "url": "examples/line/index.html",
    "revision": "742f10637d9c298ce00c661e0d81b65c"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "8d30138561202f4aa498b1b84740a125"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "17c9223da985aa530d4f15033bb3c25e"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "a15132355115a5f647dbcd36e56341c2"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "24b83c8b8d36410a8712a8f81126205d"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "1d823c9e5bb6e90af89f1afac4cc43ce"
  },
  {
    "url": "index.html",
    "revision": "729b27e47646279c3aa07a81df0e1895"
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
