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
    "revision": "2ebc17f779fbb55efc22e19af8aa929c"
  },
  {
    "url": "assets/css/0.styles.11b269f2.css",
    "revision": "4419ed50c867bef431d93f474cb517a3"
  },
  {
    "url": "assets/img/html-css.png",
    "revision": "7ffa20302b6432f42fb6cc6c3a79ed51"
  },
  {
    "url": "assets/img/logo.svg",
    "revision": "1952348de51a1715764f2c692dbc4783"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6414b2be.js",
    "revision": "96c9e7c9eedbcfafcab66cc952101c90"
  },
  {
    "url": "assets/js/11.198e054b.js",
    "revision": "ce3df5e6992f02a4a5d2a7669948ab5e"
  },
  {
    "url": "assets/js/12.eeaaec0c.js",
    "revision": "b8e875bdf541561db6d183d2b7b04a59"
  },
  {
    "url": "assets/js/13.e6da5855.js",
    "revision": "f99679a0ec6a0fd85fa33ee4f9025118"
  },
  {
    "url": "assets/js/14.b064758b.js",
    "revision": "6dc9a22ed5bf36f40df407dfc432b52d"
  },
  {
    "url": "assets/js/15.58024381.js",
    "revision": "f56d87b53b7887d044a7b2f77f3c6739"
  },
  {
    "url": "assets/js/16.2a83add2.js",
    "revision": "3d11d6bdb5dad13a165b8b8bb02cd6f4"
  },
  {
    "url": "assets/js/17.6a447359.js",
    "revision": "0768e5f9aefaef8e567b8119e14f1969"
  },
  {
    "url": "assets/js/18.40bdfae2.js",
    "revision": "8163e312a62bf41176e83ff16a597708"
  },
  {
    "url": "assets/js/19.d4d7e622.js",
    "revision": "312bca5a235a0d6724069cbba19a6c3e"
  },
  {
    "url": "assets/js/2.13630e68.js",
    "revision": "e9816805de1907557173b038c8813a01"
  },
  {
    "url": "assets/js/20.b6239f99.js",
    "revision": "3135fc1c0b8cadebe618ddb6a235977b"
  },
  {
    "url": "assets/js/21.36038db6.js",
    "revision": "0db2f70eb223e06eff64f1a227a23c27"
  },
  {
    "url": "assets/js/22.f176a2d4.js",
    "revision": "b458e493f8ad0617eed7b8f7c3a799a3"
  },
  {
    "url": "assets/js/23.53abcae0.js",
    "revision": "8893fe17f642163145e3539007d0c5bb"
  },
  {
    "url": "assets/js/24.29f5ac24.js",
    "revision": "0b7a5196bbfe4e4ad89d12ad57cf03b8"
  },
  {
    "url": "assets/js/25.8669b5cc.js",
    "revision": "1e838282fb9f9ea3d3a06b66752fe917"
  },
  {
    "url": "assets/js/26.429130e4.js",
    "revision": "af9a718ba6f2a2b2c3cf9f2081d38b1b"
  },
  {
    "url": "assets/js/27.2b0cf4d3.js",
    "revision": "afca3f71bd76ebfc1162ca910c5c5149"
  },
  {
    "url": "assets/js/28.b04a280c.js",
    "revision": "4e3cf12ca0c586e1654d9ec01d447e59"
  },
  {
    "url": "assets/js/29.0fb909fe.js",
    "revision": "1d8d178bdf38904603ce59b32dcd32b3"
  },
  {
    "url": "assets/js/3.01e4ec4e.js",
    "revision": "b8ce230ab5ff13c61a60dd53d14b8ff8"
  },
  {
    "url": "assets/js/30.412d5e43.js",
    "revision": "ac8795f8dfc09832f9a00dd780592da3"
  },
  {
    "url": "assets/js/31.29955e0c.js",
    "revision": "c058395ef1cb08f6e4a67d7a2e8d2f89"
  },
  {
    "url": "assets/js/32.f3de068c.js",
    "revision": "fb617fe86a2e844e15d099576962801a"
  },
  {
    "url": "assets/js/33.b5e66a42.js",
    "revision": "b5854b2312291891347ee5d0abcdffbe"
  },
  {
    "url": "assets/js/34.2037142f.js",
    "revision": "0520d5c4211e5b6a2d838f11fd06d303"
  },
  {
    "url": "assets/js/35.ca938abb.js",
    "revision": "116c7584bdb060a9e2f6e12b49dcb9a2"
  },
  {
    "url": "assets/js/36.22887512.js",
    "revision": "ddf7bef4562660087fd8b987ad59ad6a"
  },
  {
    "url": "assets/js/37.3ea5dc28.js",
    "revision": "31db2da174aa258fa8a0151fca4de48b"
  },
  {
    "url": "assets/js/38.048e5754.js",
    "revision": "5753f76de2563320b8b4b8da02f675a1"
  },
  {
    "url": "assets/js/39.e4ca0b46.js",
    "revision": "5f77e058f6f9881593e0b86b887d35b6"
  },
  {
    "url": "assets/js/4.5791e67d.js",
    "revision": "06f431e1fb7391ba9f5d5fa36ea640b4"
  },
  {
    "url": "assets/js/40.b8de94e9.js",
    "revision": "f7f6912796b6d87849e62c413c1ae97b"
  },
  {
    "url": "assets/js/41.d6877b79.js",
    "revision": "c57186d1461e087d9e2723625ec7e34f"
  },
  {
    "url": "assets/js/42.7fcc7534.js",
    "revision": "6b0944d4e57ba3cd1fa835090c00bf74"
  },
  {
    "url": "assets/js/43.f76b0915.js",
    "revision": "92fcb76b30a1c99ebf85877b10a9ad06"
  },
  {
    "url": "assets/js/44.e05726ff.js",
    "revision": "6ab8bf4496d8e68bda100e65eceb7835"
  },
  {
    "url": "assets/js/45.c0265ccf.js",
    "revision": "585112ecd1afc1f47e7aef35bc055111"
  },
  {
    "url": "assets/js/46.47f4be22.js",
    "revision": "14c15818fd4087fcd56651b13c776116"
  },
  {
    "url": "assets/js/47.d68d4a1d.js",
    "revision": "4b70d440f63845d79969ee9f1b717000"
  },
  {
    "url": "assets/js/48.26adec6d.js",
    "revision": "e19baf86791e8987ce5437bfd060bc26"
  },
  {
    "url": "assets/js/49.648ebae1.js",
    "revision": "e33ad8d3772532a8f065b0ddbfd58e17"
  },
  {
    "url": "assets/js/5.2d729460.js",
    "revision": "9b8ec6c8f54a9bbb3ca0da04ffd2692d"
  },
  {
    "url": "assets/js/50.8be3c22f.js",
    "revision": "e33693d2775909c997ee0835bc5ab8d2"
  },
  {
    "url": "assets/js/51.41314ba2.js",
    "revision": "9574ab00a38a611236a60fdf9d2f0a76"
  },
  {
    "url": "assets/js/52.ef46cf73.js",
    "revision": "aa5a89c9231058d5e9834ce51176ebee"
  },
  {
    "url": "assets/js/53.a7afa49d.js",
    "revision": "aaa86867dbf04b54e767291342997d41"
  },
  {
    "url": "assets/js/54.bdc137f5.js",
    "revision": "e79c27aed490b0bf30d8ee848cd48c47"
  },
  {
    "url": "assets/js/55.bd1cffb1.js",
    "revision": "16a97405bff03b6f1d64b74d5546f4d9"
  },
  {
    "url": "assets/js/56.629e6972.js",
    "revision": "bb0e60f664c2cdf7ed7fabf563df668c"
  },
  {
    "url": "assets/js/57.85a89b6b.js",
    "revision": "fe29edf200c5593093c7c4a57e295bec"
  },
  {
    "url": "assets/js/58.3ec91ac8.js",
    "revision": "904eaf62303fc2e94202d145119852c7"
  },
  {
    "url": "assets/js/59.7771df80.js",
    "revision": "680c933c9b7c7be1ad2d5ebae78cc437"
  },
  {
    "url": "assets/js/6.9313eb66.js",
    "revision": "2b6281fac9b7a3da4a7cf56e5030182f"
  },
  {
    "url": "assets/js/60.7c034032.js",
    "revision": "fca32f96e71df3e12b8b17deb9cea931"
  },
  {
    "url": "assets/js/61.1e7028d3.js",
    "revision": "b492d5d10af3e08ecb47c0d18559cd0f"
  },
  {
    "url": "assets/js/7.4059d7c5.js",
    "revision": "589ea95d1ddde59411016c40f18a92a0"
  },
  {
    "url": "assets/js/8.1450da85.js",
    "revision": "91eaa50d9d4340e1201bd32238285bdb"
  },
  {
    "url": "assets/js/9.dd61a4c9.js",
    "revision": "1a4290da21f0c251b8983344a23399e5"
  },
  {
    "url": "assets/js/app.dd893ba5.js",
    "revision": "5404bc59cd1d84a69c25ff6ab47466ca"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "29c4c52f434364b3db13b27321febf70"
  },
  {
    "url": "charts/bubble/index.html",
    "revision": "66e4fb50ae13a7d33e7ffc1daf615f64"
  },
  {
    "url": "charts/column/index.html",
    "revision": "5ad4434a519b4c751d316abba2f57a09"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "91ccd3e9b29fc0473c45db7603304108"
  },
  {
    "url": "charts/index.html",
    "revision": "f4daad8d5210e65c2df2f06736fd7b0f"
  },
  {
    "url": "charts/line/index.html",
    "revision": "174e6cf7d2dad174f7cd0d4d86e1c6b9"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "795114fe9b7c6e8f445252b424ec2bee"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "bc42c7c136e1e33d9cd5938a16b35c61"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "04df9ae69a6993654654a3234297de42"
  },
  {
    "url": "components/axes/index.html",
    "revision": "803adbc95ff1f2ee0a48801201736816"
  },
  {
    "url": "components/colors/index.html",
    "revision": "1e957f90db121f1be9067601b9db6abb"
  },
  {
    "url": "components/data/index.html",
    "revision": "d80bddf80acb650ee434f019cd67b6a5"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "586c7ceaae20169b70e89a721f2c905f"
  },
  {
    "url": "components/index.html",
    "revision": "146e925b677d6619c132603c0f73a37e"
  },
  {
    "url": "components/labels/index.html",
    "revision": "244a4eb9091efcbf26856d8840c8ad2d"
  },
  {
    "url": "components/legend/index.html",
    "revision": "3e011f4a7b00632876f0e901bea099ed"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "5c80b563890d6d26f2dd1066c0f4b509"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "0def14654683e3e5315ec4e06b61be61"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "e99f1b25872bf1fe9df8cb9b302fc0f8"
  },
  {
    "url": "components/title/index.html",
    "revision": "211337c969c56f25abf3ee4636fe7328"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "717361c1be440800dacd4af41ad34142"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "62b08eb6ac8c60e367b1bffa2270c07d"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "c6f1e1a6128033fb4ea0d5bd2ddaed58"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "0e8ee7630d03437e74e25708f61417f6"
  },
  {
    "url": "customization/index.html",
    "revision": "8234aacaf6d3fe7067f32dd4dcfa2c8f"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "5626b56dcd8877fb939301d17c44545d"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "6ba92425a124cb122492dc723f5b5e21"
  },
  {
    "url": "development/index.html",
    "revision": "11600256361da8215006d45c3d86e39f"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "bade9aa2c6e5cf4e209a6a98b0c66df1"
  },
  {
    "url": "docs/index.html",
    "revision": "22107494fb553787e73e67af9a21deaa"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "c5d66fa45aa00556a57fb95bde0c4c2f"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "b13a69f78b51543304f92e172955ad57"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "1b7bc584df8dcab3999150c5ffb724d5"
  },
  {
    "url": "examples/bubble/index.html",
    "revision": "69961d7b21b8107c43d9fa98067bb739"
  },
  {
    "url": "examples/charts/index.html",
    "revision": "ed02850153de933d75ab39438c64008e"
  },
  {
    "url": "examples/column/index.html",
    "revision": "6d294c15f43d4322a0c675588f765e37"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "1aa322b115b83a1d2c817974a2133ee0"
  },
  {
    "url": "examples/index.html",
    "revision": "11f5e39ab4770406448bcb6fb119f29f"
  },
  {
    "url": "examples/legend/index.html",
    "revision": "fcdd2709163b10f3fe68420d91cdb128"
  },
  {
    "url": "examples/line/index.html",
    "revision": "d358f92c556ee7c37c5e7acf50747961"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "e964e050878a6841b3070883cd362605"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "0edfd9a3ab40b589abd518b3fe3d23d5"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "efe2446eb27aad7753d240ec46d96f2c"
  },
  {
    "url": "examples/tooltips.html",
    "revision": "cf8c5472c46de1b780e3b0b834c82ec1"
  },
  {
    "url": "index.html",
    "revision": "5c8f215c3dbd4f182bfb77a81b3ff0ed"
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
