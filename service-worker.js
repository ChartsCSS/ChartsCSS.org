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
    "revision": "f871eb0e15507ab42522e78b14fcb2fc"
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
    "url": "assets/js/32.122d60bf.js",
    "revision": "226c5c1eb74be3488954bcf0c1ea252c"
  },
  {
    "url": "assets/js/33.eb3777bc.js",
    "revision": "3117e7f5801c989489bc37b2e2292e6f"
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
    "url": "assets/js/59.592e9b95.js",
    "revision": "750aa709ba84f6d02005c3b6385eb001"
  },
  {
    "url": "assets/js/6.b9132f3a.js",
    "revision": "e9639601c606e10f4ef645d0672a8442"
  },
  {
    "url": "assets/js/60.e8425114.js",
    "revision": "9b1cdaf813e22474c05831af84836db6"
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
    "url": "assets/js/64.42149515.js",
    "revision": "301c893db9fdbab81a2469b3ea6129f8"
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
    "url": "assets/js/76.d86d2d13.js",
    "revision": "efdef19609bac349db9b049519a62623"
  },
  {
    "url": "assets/js/77.8fa021e9.js",
    "revision": "bfde37e5cc7236685d6546886826ee8a"
  },
  {
    "url": "assets/js/78.1235f109.js",
    "revision": "328d07bce018c1b955616a97b45829fc"
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
    "url": "assets/js/app.c3dc97c3.js",
    "revision": "a6848a45ca99e7e310c4d0a103846a4b"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "34701a77614907b35ace5ff1ff605e9b"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "153c4b6f7d30a9ef3d9f668b90b56571"
  },
  {
    "url": "charts/column/index.html",
    "revision": "b556f4e5860046f59285d6386f64d061"
  },
  {
    "url": "charts/index.html",
    "revision": "f34e0b109d88404a9c0c1e957b3555f0"
  },
  {
    "url": "charts/line/index.html",
    "revision": "7b2a3004a90fb628ea1a1e36be323146"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "6b65b6978ec8463cc4c2f10b0ac95225"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "8a46234ccf97e27e37d36d3c91066314"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "ea0b577527cce9599492f8362218bdfe"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "866058c8559c9c51d9f8525e5721eec1"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "29b43239001735c02430eefd0c6bb313"
  },
  {
    "url": "components/axes/index.html",
    "revision": "bbfa08b5469a6c2d477ad62ca83e8f62"
  },
  {
    "url": "components/colors/index.html",
    "revision": "82ae0e0d6747f8b5d262d926e2832428"
  },
  {
    "url": "components/data/index.html",
    "revision": "01b067a62f8b88a6b490c7ecc19f62c7"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "920171cd75bd91d5b2f13b610800226f"
  },
  {
    "url": "components/heading/index.html",
    "revision": "de4763a470d2cc64f7bc9bcc8fc38a85"
  },
  {
    "url": "components/index.html",
    "revision": "d9f8342c2855275225b1f76770c416f0"
  },
  {
    "url": "components/labels/index.html",
    "revision": "3bec6bf55209e6ee752e60edee2f8274"
  },
  {
    "url": "components/legend/index.html",
    "revision": "5d5f109295faf4003364ccad26744858"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "ff6bbca4ee4f8f9980dfcafd26efe69e"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "8820ef871a0127ad39b9fdc0e73a7ebb"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "7b83e23fc20235892f2c1ec7620a9741"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "f1916b8d25c99dc452b1936cc9465809"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "927ff2d8e5d16431a683da2b244d435d"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "abacabf910da4bc81f2b722b4f30566a"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "e0cc3b388f1fb29475277beee90ebdeb"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "75df44fe2400031b91f189ba084b0174"
  },
  {
    "url": "customization/basic-styling/index.html",
    "revision": "4e47b7bcdf5bca70821b568029369c24"
  },
  {
    "url": "customization/index.html",
    "revision": "043fb01dd89c8909f3ea253c3cdf1108"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "d5c4ba5057922357f144427386248ada"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "a9713444bb3c097392db7d35db65d871"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "142e9b22b8bf7fd9154ac833b5ccd65a"
  },
  {
    "url": "development/index.html",
    "revision": "959504ad333934fbc73b89b08a3d6288"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "058abd152d4bd39f93268cd685c292c4"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "b7ffaa536bf756fb4263b320c75e770e"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "229e98a05673ede5862fc6fc56b3e3e6"
  },
  {
    "url": "docs/index.html",
    "revision": "6ded9561616d79dcbd22c09c2bac320d"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "486b05fe76d4c1f6865069b123cae2d2"
  },
  {
    "url": "docs/migrate-to-v1/index.html",
    "revision": "b8225095d9651d389b23c1c383e2e2e4"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "85fd5e2d600126a534f4d26c93dbfea3"
  },
  {
    "url": "examples/area/index.html",
    "revision": "f4cc99140bf2fcbba755e6984bf948d7"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "492c7305efd3d9488ec43d37a6754653"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "a76b5085bde47cd1779c7598066e6224"
  },
  {
    "url": "examples/column/index.html",
    "revision": "621e064ec83f1e50f0ff293bbef2da37"
  },
  {
    "url": "examples/index.html",
    "revision": "e4ccf4392814d545089f5bce36591fb3"
  },
  {
    "url": "examples/line/index.html",
    "revision": "f514373d7295fa29e2708a861b5cf200"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "8c00755c7ed264025a8137c035829e6d"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "d49bad6e7a4bcee62c856415032d930e"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "827513afed2fe5ced140048009f6c889"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "8d07f0ac4e160a89697950bb80c9595d"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "0fa7983a6052792741bc66b4508d6794"
  },
  {
    "url": "index.html",
    "revision": "48d280d95fb0423666a19eaa61ad24c2"
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
