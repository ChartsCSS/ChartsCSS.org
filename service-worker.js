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
    "revision": "f7dc8e2ce41d526a1112aed2961b096e"
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
    "url": "assets/js/46.206ba487.js",
    "revision": "ffc56b59173c586b12b9bd7ab54b4317"
  },
  {
    "url": "assets/js/47.0254ad14.js",
    "revision": "d1e9ff5d9e4f6d50c4ad74109da21553"
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
    "url": "assets/js/55.8a479e96.js",
    "revision": "00721894565e8c00815fc9da9afc1637"
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
    "url": "assets/js/60.acf32991.js",
    "revision": "fd119c00794b91581c4b055afc123d94"
  },
  {
    "url": "assets/js/61.590ebeea.js",
    "revision": "cee5028ca9e7581633bdf4a676a0f093"
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
    "url": "assets/js/app.6e56f924.js",
    "revision": "bbd67b897643b7af5338c99485e82eb5"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "84a466765732d78f09e663cbf89e53d1"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "a62e1f6e44cea6e29521ac0ab43c550d"
  },
  {
    "url": "charts/column/index.html",
    "revision": "455974aceb99646d410b817640cf5530"
  },
  {
    "url": "charts/index.html",
    "revision": "622d2515e4dee95fcaf17a6b9e277628"
  },
  {
    "url": "charts/line/index.html",
    "revision": "a2ef9405a408abd1d63b32f152aea734"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "ebda557dc82c2bc305dd6e0905612c25"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "f556d46c578aed573694b09d6143d4ab"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "4f6004c998ec7e13c2de1a76db7c84b4"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "9926a99e23da76402e8ee88e041e55b6"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "d35247c1174caf91d143aa9557fbd7da"
  },
  {
    "url": "components/axes/index.html",
    "revision": "8f0cb1b447e548a728082ed6e0264e5a"
  },
  {
    "url": "components/colors/index.html",
    "revision": "9a0ca3c0da22d2b1f326cb3c68beba5c"
  },
  {
    "url": "components/data/index.html",
    "revision": "be25917569a433415c50b0373fc9704a"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "771a0c93e283d6335ed0757199d091ed"
  },
  {
    "url": "components/heading/index.html",
    "revision": "3fc73aa1a083db3e350bab1a67f61f91"
  },
  {
    "url": "components/index.html",
    "revision": "4ed54ae5eef48c5a27add5c46121c2d6"
  },
  {
    "url": "components/labels/index.html",
    "revision": "a92a5299746f336a3a887452e519f522"
  },
  {
    "url": "components/legend/index.html",
    "revision": "6dde2ae52289c7d9ef3e9aaf5cda9e01"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "01223a041f64a8ed3b66573a9d6e2528"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "f8153034ec5d651679d0a3f116397162"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "7c86972db6a15af96c091c2688168008"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "d26c1251f658de2f8dd3c6b7574fd950"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "d2a80fc304cf034330b1f11ff8865d05"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "04b5247775504ef48896c1d1b97a8356"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "688eb79dfc86b841ad3e9bd0c4740053"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "2dfb7528cb110639bb7fa770f6e5ebd5"
  },
  {
    "url": "customization/basic-styling/index.html",
    "revision": "a9c9e170fa2693ee4664348bc4dec183"
  },
  {
    "url": "customization/index.html",
    "revision": "b90c0e7930af3578cb53742fda99a8b3"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "21313c28cdf0077679a1895197869920"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "8d3fcdf6d51b44a882a603990f871554"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "11f3674a737e3b8cc46f2f268cab43f5"
  },
  {
    "url": "development/index.html",
    "revision": "7db8da7b8c33f172fa7260247c578e8d"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "4a65715e5b754e1572ac26f2a4710c76"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "c612a2eed1bc351e2c3cbe4c5adc31a7"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "6304728304a30db12253dce9b00567d4"
  },
  {
    "url": "docs/index.html",
    "revision": "b1e26efbaee7ba6fc658a68bafe5d4c4"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "27d8150eb2ae3df97ffd18c65fba7f95"
  },
  {
    "url": "docs/migrate-to-v1/index.html",
    "revision": "558b3d3f335082d63cba4a0c4e77cb31"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "1fd5d7f62ca0909ebddd1ebeb692994d"
  },
  {
    "url": "examples/area/index.html",
    "revision": "d391f92bc4e4f1095ffa082d62fd1fb4"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "8ba163505b6b63f7a35e365b45a53223"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "332563d894a0078b3cd2295be7ba96ed"
  },
  {
    "url": "examples/column/index.html",
    "revision": "80e8457b479f5140594c39527b4846f0"
  },
  {
    "url": "examples/index.html",
    "revision": "0a816abb832aafa86f417f145226619e"
  },
  {
    "url": "examples/line/index.html",
    "revision": "be348e84c3d504fdad3f85f3ae68868c"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "6dcf70ac647b65d89cadbd09a9167a97"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "b1b60b2fe089c45a815c3a4824c67701"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "61adb3b4edd62b9b3bf73d599fb5d7a4"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "fadf1e1a6a77896711361e3b4f0d3efa"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "c63bfc42202ad4703cd270f663a9c098"
  },
  {
    "url": "index.html",
    "revision": "12214fe34557f078e22729835b272b3e"
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
