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
    "revision": "8c2977dd59542a9fa7db699041e64671"
  },
  {
    "url": "assets/css/0.styles.70e41865.css",
    "revision": "e46a1172d84fe65f91ef8e48364e036d"
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
    "url": "assets/js/10.0e21b17c.js",
    "revision": "96c9e7c9eedbcfafcab66cc952101c90"
  },
  {
    "url": "assets/js/11.6b0274f4.js",
    "revision": "ce3df5e6992f02a4a5d2a7669948ab5e"
  },
  {
    "url": "assets/js/12.864eca31.js",
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
    "url": "assets/js/17.70141353.js",
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
    "url": "assets/js/28.917fafc8.js",
    "revision": "4e3cf12ca0c586e1654d9ec01d447e59"
  },
  {
    "url": "assets/js/29.0fb909fe.js",
    "revision": "1d8d178bdf38904603ce59b32dcd32b3"
  },
  {
    "url": "assets/js/3.892eaa05.js",
    "revision": "581b02c38a68b723bc8998da755854f8"
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
    "url": "assets/js/4.066d0ed2.js",
    "revision": "0cef21cf5225a5cf09e3a52809fdecc5"
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
    "url": "assets/js/5.1193dc1a.js",
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
    "url": "assets/js/6.f397948d.js",
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
    "url": "assets/js/7.433939cf.js",
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
    "url": "assets/js/app.b61e0a38.js",
    "revision": "8fd86a1ec1524ce0d374f81e2ad3d38f"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "ea2719a726de3c5338dc0fa673a2f3d2"
  },
  {
    "url": "charts/bubble/index.html",
    "revision": "92395c0df2770aea75a49705d120025b"
  },
  {
    "url": "charts/column/index.html",
    "revision": "e860a1a2dc0740747365b31fc01a1bf6"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "71ae9afa1fd62347c2466f4b6a77f5a4"
  },
  {
    "url": "charts/index.html",
    "revision": "d9289ff3e5acaea4becdab5ee8b0fa03"
  },
  {
    "url": "charts/line/index.html",
    "revision": "22afede07ff5e45e0205c7fcad43f0ce"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "2a0e66d5aac1e91c7bd1a8bd7943652f"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "55539cbe5e459b1cceba762cfd939271"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "c1552522d7e4f538ba98cae687ae22f7"
  },
  {
    "url": "components/axes/index.html",
    "revision": "e2f9a6fe56789f742311957b798cae91"
  },
  {
    "url": "components/colors/index.html",
    "revision": "30383871e2b67ea6ab31747c19da65ef"
  },
  {
    "url": "components/data/index.html",
    "revision": "eeb9ec964870a92a6c4d2a3922a05a9a"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "1d9a9d61912b16561a3784681fcaad74"
  },
  {
    "url": "components/index.html",
    "revision": "46f768466f9ad0c0db26ebd75c8744ed"
  },
  {
    "url": "components/labels/index.html",
    "revision": "ca4376f1387af61997c0363ef19dea6d"
  },
  {
    "url": "components/legend/index.html",
    "revision": "91c60e1446b25f27414027dc8d7d9e77"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "6c923c2ac1d6f7ab62078091bd2401ac"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "ae65d496e08c73a52da416462c2cd3bd"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "2e20807879b01e1bee44166f95b2caeb"
  },
  {
    "url": "components/title/index.html",
    "revision": "9540e7516e2cda919798becd30e13d27"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "9c80d83be67105d609171826ff4cd207"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "20b29963d22de42c0b57cb9e450a24d8"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "ee8342c804bf4ad9677053b794ec6a7e"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "2c4210ac423063e4c1a33c8435f5700a"
  },
  {
    "url": "customization/index.html",
    "revision": "8d1b6e490afb76621d0c4a5286f2eaae"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "5850a2f8cdd760ac0e3c49919d9af263"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "72053278522638dca9fc9d61bf84b510"
  },
  {
    "url": "development/index.html",
    "revision": "08462631e52ef4b9478c5153a172b735"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "b72253e4b90c9299ae331b6270a81d1e"
  },
  {
    "url": "docs/index.html",
    "revision": "af83d7bbb8f780066ae6d13ae75a8af4"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "09381f5e28cccd0ba157b17841ead843"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "2ddda739ee050a61ff489414f1855fb6"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "be7ea611297cec03c36d139d4fa572c9"
  },
  {
    "url": "examples/bubble/index.html",
    "revision": "7ed66c20b99dcea7b63f74fe7fef1816"
  },
  {
    "url": "examples/charts/index.html",
    "revision": "a7c502591b7f1287d441d66954ae9cb4"
  },
  {
    "url": "examples/column/index.html",
    "revision": "10ca1e5c814a76ef7aa12cca6f1860e1"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "2d94e2f077c0843562241c1419554a7f"
  },
  {
    "url": "examples/index.html",
    "revision": "7096e00625e6c0fb19d9c8f681ab9e86"
  },
  {
    "url": "examples/legend/index.html",
    "revision": "f84c1e95edd27b9803a6bd1f39470fdb"
  },
  {
    "url": "examples/line/index.html",
    "revision": "d676a31da8c2e5bcab8ea574aeef530a"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "102098105443fec51789e97bb43d8bb0"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "000091682cc3eddd93e4dae7cc5a332c"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "14d2477ca12b5956d1360fd7891785c8"
  },
  {
    "url": "examples/tooltips.html",
    "revision": "2cf85c780d95efea7c670966fdc421c3"
  },
  {
    "url": "index.html",
    "revision": "a11395b5e09bdd97ec850f042efbcc5e"
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
