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
    "revision": "21a35d22f53c065c06fb7404ccd741b3"
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
    "url": "assets/js/33.b9e1ba79.js",
    "revision": "9534ee76113060411150781be9a16e07"
  },
  {
    "url": "assets/js/34.1202f7b2.js",
    "revision": "03fd19eb63c30cbd0194c3bbe6d06d1c"
  },
  {
    "url": "assets/js/35.555ef8f9.js",
    "revision": "f0cb9dbc6b63f0b70527780a1622d554"
  },
  {
    "url": "assets/js/36.5ddcea73.js",
    "revision": "8c4acfd0db86d0440ecca99ae8252706"
  },
  {
    "url": "assets/js/37.41050539.js",
    "revision": "ac1272d1c68ee6e99d2457c357f29283"
  },
  {
    "url": "assets/js/38.45916f8c.js",
    "revision": "8d2735e1cba8dc54d71c96e4e9bc2df3"
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
    "url": "assets/js/43.8c189dde.js",
    "revision": "f6cc6b50e3cfa1268ef30ac148137563"
  },
  {
    "url": "assets/js/44.f5da00cb.js",
    "revision": "aeecc9f178e032bd6df148a4557d35c3"
  },
  {
    "url": "assets/js/45.fb580991.js",
    "revision": "74bf6f62d9ff672d58479b957c69eaaa"
  },
  {
    "url": "assets/js/46.206ba487.js",
    "revision": "ffc56b59173c586b12b9bd7ab54b4317"
  },
  {
    "url": "assets/js/47.0254ad14.js",
    "revision": "d1e9ff5d9e4f6d50c4ad74109da21553"
  },
  {
    "url": "assets/js/48.4a74fb56.js",
    "revision": "bb261d2e0c9268c50c61c95db1dda78c"
  },
  {
    "url": "assets/js/49.ef4dede2.js",
    "revision": "19c7b22c3f7edc0d4750f157958d3865"
  },
  {
    "url": "assets/js/5.cda8c120.js",
    "revision": "7c95a6bb55df5effba2cc4694ba69895"
  },
  {
    "url": "assets/js/50.0e61caaa.js",
    "revision": "ef37b43807262b53e2b0d89804891c54"
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
    "url": "assets/js/53.ef3783c9.js",
    "revision": "0f4a7f9095b6e4f2a658da0335e0b3a9"
  },
  {
    "url": "assets/js/54.f876364e.js",
    "revision": "ae644708c06b68fd945693ffc09ca4ed"
  },
  {
    "url": "assets/js/55.3f226fed.js",
    "revision": "0ccfa41897764888bfc4f4e9ad5dee32"
  },
  {
    "url": "assets/js/56.4b0b1d23.js",
    "revision": "6a7e8ff0838bb6d3eafda07575f74f83"
  },
  {
    "url": "assets/js/57.cc43df38.js",
    "revision": "4384a7d10abb72143d915892c739dbec"
  },
  {
    "url": "assets/js/58.cb0e2ec4.js",
    "revision": "ef8774f073419bd3137b0241aa4a6532"
  },
  {
    "url": "assets/js/59.27e5bc87.js",
    "revision": "8d4df045ef848628e146827043404881"
  },
  {
    "url": "assets/js/6.b9132f3a.js",
    "revision": "e9639601c606e10f4ef645d0672a8442"
  },
  {
    "url": "assets/js/60.acf32991.js",
    "revision": "fd119c00794b91581c4b055afc123d94"
  },
  {
    "url": "assets/js/61.075590de.js",
    "revision": "c9dd4b846a8d003d8277dc5213e01064"
  },
  {
    "url": "assets/js/62.eadb12b6.js",
    "revision": "ccb13045907050bc092f745f88cb1db5"
  },
  {
    "url": "assets/js/63.7c1fb8fb.js",
    "revision": "a4672ae64e30a9b91b5a4bb0df1e7fce"
  },
  {
    "url": "assets/js/64.acb7df7c.js",
    "revision": "afa6026c7ca6f5059a96e03c0a71071c"
  },
  {
    "url": "assets/js/65.bd51f087.js",
    "revision": "c4aaa92420c0d77cdd4bd092254b0abc"
  },
  {
    "url": "assets/js/66.af99c4ae.js",
    "revision": "63e17efa816dbc1404aa7aecf9d8faf0"
  },
  {
    "url": "assets/js/67.1c4985dc.js",
    "revision": "3c8cdb5e3f775cf90d046e3bd2fd78f8"
  },
  {
    "url": "assets/js/68.0ff3b577.js",
    "revision": "e517b41daf3f1f1c6eef55d0d3722f9b"
  },
  {
    "url": "assets/js/69.1c20241d.js",
    "revision": "b91b5910da8ebbceb78218fd3735c52f"
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
    "url": "assets/js/79.03af50e5.js",
    "revision": "410bedab8a26df14ecfcfbb9a171aefa"
  },
  {
    "url": "assets/js/80.cf45302e.js",
    "revision": "bba8e9bec63e46bc61479b3788bffa94"
  },
  {
    "url": "assets/js/81.84afcfce.js",
    "revision": "18c1c5d0e4a701b1e98cdcd4de64944f"
  },
  {
    "url": "assets/js/82.aba6a480.js",
    "revision": "a977a9acbec1b6faba9c15a4b717b73e"
  },
  {
    "url": "assets/js/app.2ca993ad.js",
    "revision": "318d94d9e0fc838ed9dd0aad6cbe7039"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "58bd5556861c486b3f74dd7eaf9f90fa"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "cb227b4584ada47114bfbbe480214fc5"
  },
  {
    "url": "charts/column/index.html",
    "revision": "04eed32bc0dce2c67622663e4d271238"
  },
  {
    "url": "charts/index.html",
    "revision": "e3ec7564ffb2b9d16f3cc510625b78ae"
  },
  {
    "url": "charts/line/index.html",
    "revision": "33f5c04fc9f73ded102fd68048561f31"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "7dc15b57922619adfa0ac63f8e930716"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "4e97170dc702e724d27d8d6d6dcc6f4e"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "338e4e233ead1e77c3c2a504090d7cf2"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "ef02933afd34662f9a7c13d8635a56c4"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "b8a39ce41c4983b90094e070478ac42f"
  },
  {
    "url": "components/axes/index.html",
    "revision": "e5d533c64a7ca290d1972696952c7a64"
  },
  {
    "url": "components/colors/index.html",
    "revision": "d6311c1a2b62e0d2d0b89ec9d22a942d"
  },
  {
    "url": "components/data/index.html",
    "revision": "4d944e31a11e779847aef6afc639e06c"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "6e4b376cdd700cf10135a803f30547a5"
  },
  {
    "url": "components/heading/index.html",
    "revision": "c21d18ac6b3f964b05c58a6c14e05b64"
  },
  {
    "url": "components/index.html",
    "revision": "8a2a1c8c2de3263ec56a83a08bc32828"
  },
  {
    "url": "components/labels/index.html",
    "revision": "8beac595d789316a9d63deea8e2ceeca"
  },
  {
    "url": "components/legend/index.html",
    "revision": "f1edaded0037bc2584bcbec21824932e"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "0c700721380ad9a43afb751777c730d8"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "af345c52d43059321b0d39eb54343027"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "d48bd2ff5eb0175a38797e4763c1bcdd"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "6f4a84b9ea1e572e3612f3b4d1f2712f"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "a9b69f3c9456203588affe146e293823"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "bd986f4d78acb49803702acc6bba9f96"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "115f901bd305454479e37fd9642f91ed"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "0ea1c49c39e688fef1f37f4c3dcf5eb2"
  },
  {
    "url": "customization/basic-styling/index.html",
    "revision": "8a5c4c2bebfaf9cc17edaa3d37f81194"
  },
  {
    "url": "customization/index.html",
    "revision": "5afadf5b4fd170066a4874577503888f"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "53cba0bcea0f21354105b69acbc3562d"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "182d4e2d36e6f5a8f9445d97de611e26"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "0c6c4303487fc414ef53383a67aac134"
  },
  {
    "url": "development/index.html",
    "revision": "debaebf96469f3d3494231c6c08cd79f"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "1818d704dc006f96e7b0c54a93ad8036"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "99218bd4da2d192f22efce93417ea99d"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "f51f85a5545266f84d4d5a178bee62f8"
  },
  {
    "url": "docs/index.html",
    "revision": "3221ea80e7a32e8294c1fa1fa41aff01"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "b437f7549a329aab36580a5177bf6acb"
  },
  {
    "url": "docs/migrate-to-v1/index.html",
    "revision": "eb4d43c565df39e62eea4063da002b21"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "005c56cbeb33ae8c3dc2add96ece5344"
  },
  {
    "url": "examples/area/index.html",
    "revision": "f792776abb0d2796ca57af734aecf848"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "55ac3c2369e5dfa97a513ca88fb2ebbd"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "e6172b0b5ffc8c66ff614d264adf3e87"
  },
  {
    "url": "examples/column/index.html",
    "revision": "2a198fd19e8ad5eb3d0f04b8e3b26850"
  },
  {
    "url": "examples/index.html",
    "revision": "d929219b400eee3104cdc79be08d473a"
  },
  {
    "url": "examples/line/index.html",
    "revision": "b644375f642ba6ad27dbd484488ed911"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "3226d6e6727966928b206ceccb196e56"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "382a2a6ecb49fe82e54aba93ce41cf3d"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "e45542b28249b77a7ad230cac4c9790d"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "87ca9464baeb415c1d54bd954bea4488"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "381e02341d9c51247f59aab2349556e1"
  },
  {
    "url": "index.html",
    "revision": "cdbf905c54f5a20085187ea689b2eed5"
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
