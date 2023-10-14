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
    "revision": "1b5e555b3c7d2762ff24f6a1a0815f3d"
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
    "url": "assets/js/63.aa09e799.js",
    "revision": "1f5c79aff1bde476ebf2ecb4810fb79f"
  },
  {
    "url": "assets/js/64.10b61a44.js",
    "revision": "16154478684e6d8694ea37bfd2543a5a"
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
    "url": "assets/js/79.d65d80fe.js",
    "revision": "39c52b38cbf7b6a95b0d74eb2b4812ec"
  },
  {
    "url": "assets/js/80.d0526755.js",
    "revision": "83c7c3277e76b65d87d9255e1337c432"
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
    "url": "assets/js/app.c9a430f9.js",
    "revision": "6673f5ea09215706481abd7f26dd9d3d"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "66f795a3fa6838c03b31fa5258b588f3"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "2db05adb4c0b4d3740f64181cb74b134"
  },
  {
    "url": "charts/column/index.html",
    "revision": "1d797cf5cddc56fd1a61c0bf482d969f"
  },
  {
    "url": "charts/index.html",
    "revision": "86247e0b2b5670d5e1cfb83b1af11add"
  },
  {
    "url": "charts/line/index.html",
    "revision": "4e47640d6e2350da0915ea30a3b5fe1f"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "084f88605653ec480e93035bcb3614dc"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "170e6433dd8491b0869bbb53eef3b2f3"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "b911489476cc3eb0f8c061a380779608"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "50d4c651fe1a56a8c4a256cdebcba0f6"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "0c55343fd0e9bc03775beed9b08b8e63"
  },
  {
    "url": "components/axes/index.html",
    "revision": "e9fe614227d9a503cfbecf09e79dc352"
  },
  {
    "url": "components/colors/index.html",
    "revision": "79066e9bf2d201a6a76afdef73759d39"
  },
  {
    "url": "components/data/index.html",
    "revision": "f501476c590bbcf245cbea66fb6a7b8d"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "30fde2bbfa91c277c11705500aff41f6"
  },
  {
    "url": "components/heading/index.html",
    "revision": "71fc3063e34c9589a7af3e29a5c29e6a"
  },
  {
    "url": "components/index.html",
    "revision": "e9ded2e2e59ba7aaba41e9d65e1a65f3"
  },
  {
    "url": "components/labels/index.html",
    "revision": "571354f4b42345d96a7e2241367f4595"
  },
  {
    "url": "components/legend/index.html",
    "revision": "404df0dd66d681f148910536f565af90"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "52323437ce230c3dc2593a7271597a42"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "2b9eaf56519472c5dc21b382b84f69d3"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "7925642d420c65623f1fafe604a968cf"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "5fb4a3f7a90c5a3d09054e71e36cb4d1"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "0eab8aab1958f22732ff6754c27058ae"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "be8f51140a76238fc0fe91a45dd5a4b5"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "e780792da289a8281ff081184649a4e1"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "fae2812678cf2bf7b74a79306fc0272b"
  },
  {
    "url": "customization/basic-styling/index.html",
    "revision": "5baa11c5dceec37db952cc8cfae0b712"
  },
  {
    "url": "customization/index.html",
    "revision": "7f5fff4ee24b28340792af7ac33848af"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "86b1a273438fe1779985b4bbd76a72f5"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "b85d6437d5bf5d009303bdbfa81f2485"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "0fc8c1153f3746583489618ddaa3e0ec"
  },
  {
    "url": "development/index.html",
    "revision": "d86deb1127a180c3e6ff8ba0eaef67c5"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "f692de58afe7feb881a4249d35554c01"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "f3be392cf1c15330350f12a9c5df7201"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "32d35c1d80e2b777aa869b55a6ac5010"
  },
  {
    "url": "docs/index.html",
    "revision": "856f494c1c6bffd7dcd7040165905e40"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "1a920c24d48d0f9d1096f125efe35912"
  },
  {
    "url": "docs/migrate-to-v1/index.html",
    "revision": "c071046cdbb1e76e581a34f0f2838015"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "b2c61e27646eb8b2dd621d80f781e17f"
  },
  {
    "url": "examples/area/index.html",
    "revision": "b57b54ab0257abf43e6e49b74e46c576"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "ac437f667a2512c2836a3c2a999fd461"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "8c8ce55f504bbad3a97c6203d6db8090"
  },
  {
    "url": "examples/column/index.html",
    "revision": "b96a4280225146e19d7fd0e1122e315b"
  },
  {
    "url": "examples/index.html",
    "revision": "fc99ccd487d1247b46247a7d30b84f67"
  },
  {
    "url": "examples/line/index.html",
    "revision": "cdaafb2a2db45e9222abb088d17a3cdf"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "4e4f7c4fa2d27f3ae1ac85797a383a64"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "6f3909409e325e12ea12edc4a6f20f40"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "c3fa7b1b23dc744af0a953a0429425e2"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "5942c7c54853f25f732a6cff53058a26"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "3c126631f893995ccb53cf88f57de405"
  },
  {
    "url": "index.html",
    "revision": "a653417e765b66dd9114a2a194981870"
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
