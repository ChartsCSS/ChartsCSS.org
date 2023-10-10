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
    "revision": "3bb1f5e49c36cd95d5fb06b1f87d6845"
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
    "url": "assets/js/18.065fe84d.js",
    "revision": "9e7f2a713d97252dc1b762f97b6ceb63"
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
    "url": "assets/js/33.df47527a.js",
    "revision": "dfb9b3cec498a4fc9d7933ec9edb6004"
  },
  {
    "url": "assets/js/34.3d4d8d0f.js",
    "revision": "3afc83d5df317ac9e0e7c89da10340e9"
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
    "url": "assets/js/47.400347df.js",
    "revision": "48925eeeee043a344d3ca5f35d4c7de8"
  },
  {
    "url": "assets/js/48.66350509.js",
    "revision": "380bf8879fed35372d38e36a3fe010a9"
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
    "url": "assets/js/53.02e310d6.js",
    "revision": "1ebc48003d0e3679f11d91df363003f8"
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
    "url": "assets/js/61.41ee7981.js",
    "revision": "8c666fc7fd338d96e96589e98d34c689"
  },
  {
    "url": "assets/js/62.6873689b.js",
    "revision": "e7851ccd4709beb2383786877443efc0"
  },
  {
    "url": "assets/js/63.7c1fb8fb.js",
    "revision": "a4672ae64e30a9b91b5a4bb0df1e7fce"
  },
  {
    "url": "assets/js/64.42149515.js",
    "revision": "301c893db9fdbab81a2469b3ea6129f8"
  },
  {
    "url": "assets/js/65.6ae37675.js",
    "revision": "ac43344f76e0610868b65a318499d6a3"
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
    "url": "assets/js/68.309e03f0.js",
    "revision": "21366f162c44776f54032891911c5f95"
  },
  {
    "url": "assets/js/69.e990cb23.js",
    "revision": "2c1b1fdc94729b719cd58d32c2c50d17"
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
    "url": "assets/js/77.8fa021e9.js",
    "revision": "bfde37e5cc7236685d6546886826ee8a"
  },
  {
    "url": "assets/js/78.90899a38.js",
    "revision": "2edf7d3494959de5c501bdeb728b5ec2"
  },
  {
    "url": "assets/js/79.03af50e5.js",
    "revision": "410bedab8a26df14ecfcfbb9a171aefa"
  },
  {
    "url": "assets/js/80.4203a77b.js",
    "revision": "cd754de5b2354a51a48a8ac405b7dfc4"
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
    "url": "assets/js/app.70710493.js",
    "revision": "4fd73c683acd95cdc8b70a74ee094399"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "da79d1f2ad94bdd72d3981ef46c2c247"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "40329e86da80c21ec23c308426c78832"
  },
  {
    "url": "charts/column/index.html",
    "revision": "8c51f71268241eddcee614773ec2674b"
  },
  {
    "url": "charts/index.html",
    "revision": "caa446137fcfa4972ffc3134c6bfa078"
  },
  {
    "url": "charts/line/index.html",
    "revision": "10afc4f500c97cd6fb08b9d042c27f97"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "0b6dea3222a06cb173748d333c580211"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "93c7d37d840bbb1f6805e9d9606b86cf"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "28794dc70d9fc6de0e5ce2f0ae610248"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "034de82470bb24cfdabea5af9f01264e"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "2a33164d0b3a3aa10351689b85e48066"
  },
  {
    "url": "components/axes/index.html",
    "revision": "23960312de2ccc520337b2b88820cba9"
  },
  {
    "url": "components/colors/index.html",
    "revision": "583e9173539ad53ef3384639e61e4478"
  },
  {
    "url": "components/data/index.html",
    "revision": "d7f5b4fc9107bb9e4c208cfc42215f0c"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "2a9740fb4c2edf071e80d12913c7e98f"
  },
  {
    "url": "components/heading/index.html",
    "revision": "c9b3edf663311fb6be379906b2990f00"
  },
  {
    "url": "components/index.html",
    "revision": "c6073ade64edd959a16d68c2fd14941d"
  },
  {
    "url": "components/labels/index.html",
    "revision": "52e744d0436c73c8618e3aea3ac5aef9"
  },
  {
    "url": "components/legend/index.html",
    "revision": "97de5b55d08b479971615f7033fc7014"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "c0ed5f9be83b97fae0593fe0c0e89917"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "6ae5e97eacfce46f047581896653e64f"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "5abdedc764c18455e012dd0296119e5d"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "c5a9e524be4e3e5e61067e1afa2d2b6c"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "45c0ebbfb893a4a08c7843552f78f2ae"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "72a96856ebf960675f198bcab8df835f"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "423552c880c93c321816745b32b552c0"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "adc89aa55a3b5f9165ffca4e07569362"
  },
  {
    "url": "customization/basic-styling/index.html",
    "revision": "5bcf04aeba5de380ba304c67e2cef489"
  },
  {
    "url": "customization/index.html",
    "revision": "aebda5f1ffbf5ddd9ac3d78ea6b18abd"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "fe75187cef4ecdb4d2304039e42d2049"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "361ab40fa65d7dae33f9943e3444800c"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "5075796b2521f248082be363bb8735c3"
  },
  {
    "url": "development/index.html",
    "revision": "701e430344cb10120ae2f005209cbd89"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "d9f50191b16bb255a8b0f5068125105f"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "f0af8d0dbaa8bcf50ff2dbf0ead46d81"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "9f3d1312f13bfbe9bfc14f0b91a785de"
  },
  {
    "url": "docs/index.html",
    "revision": "992d3688741c3ddb7486e09457c65a0b"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "05aa26f79b1e3c841a46b79b73af710b"
  },
  {
    "url": "docs/migrate-to-v1/index.html",
    "revision": "018760abfd0402ffc68a38d8081f448d"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "e50bbcc126f2a90dc06513819808bfa5"
  },
  {
    "url": "examples/area/index.html",
    "revision": "79a391b4db05aee69d7a8186599615d2"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "84fc43f6690c1538f43d19f72872cbde"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "7b439333ebaffe2999e54bf9c05d91e3"
  },
  {
    "url": "examples/column/index.html",
    "revision": "0c14f264b53933615ffacafdedb452f2"
  },
  {
    "url": "examples/index.html",
    "revision": "8fd85a29f77ac0ba84c18818370793cc"
  },
  {
    "url": "examples/line/index.html",
    "revision": "0d3dd0ed027928a1203e76c5e710e198"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "d4de39377b83231b65ffa4c44cc24ebf"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "272b803b0498962f61835573acc0c094"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "fa640acbbfb8399cedbdba61e376b68a"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "a0e6139194ec8375b4b9f5906fee93df"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "c2e45f0a2bdf15771e5abe7af2afc2da"
  },
  {
    "url": "index.html",
    "revision": "f5ddf69a44ef3cd9e40e5078b55b0842"
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
