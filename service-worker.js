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
    "revision": "c4544a80c73ea5656583dd196870b1b7"
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
    "url": "assets/js/33.090ea4f1.js",
    "revision": "ad76e284dda3e03efc63b0e580582669"
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
    "url": "assets/js/47.400347df.js",
    "revision": "48925eeeee043a344d3ca5f35d4c7de8"
  },
  {
    "url": "assets/js/48.a1df522b.js",
    "revision": "485473a466ae675d35a010037994a546"
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
    "url": "assets/js/55.1856e8c8.js",
    "revision": "9e6eda024b0f988516c7e32c4cb44e46"
  },
  {
    "url": "assets/js/56.860e50a1.js",
    "revision": "20f6db3a4dee2e9c98bf8e2743bd3ecc"
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
    "url": "assets/js/59.9b55cd14.js",
    "revision": "5e01889c1dceea0294f78a063456e5e0"
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
    "url": "assets/js/61.29414cd6.js",
    "revision": "f5247a6b32558f04bd6ea235fe303683"
  },
  {
    "url": "assets/js/62.6873689b.js",
    "revision": "e7851ccd4709beb2383786877443efc0"
  },
  {
    "url": "assets/js/63.2101d96b.js",
    "revision": "f73b4c871666968bd0c1fe4316c46fd2"
  },
  {
    "url": "assets/js/64.a956a8e9.js",
    "revision": "76c551ddb13cf4ed931b6d6c667231c7"
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
    "url": "assets/js/68.03b35a27.js",
    "revision": "f6427b8c021244f3315fa9c170f2b6f4"
  },
  {
    "url": "assets/js/69.9073b8de.js",
    "revision": "aed4196187ae665b7790c799f09218d5"
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
    "url": "assets/js/app.472ec3cd.js",
    "revision": "9998e493e81c32572e818d723d9bc791"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "6535d977256eb3f98270da756a4c94a8"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "61c2f574ac089bd6b122bd19947206e1"
  },
  {
    "url": "charts/column/index.html",
    "revision": "996c34c5d558bf469b043716deee9b18"
  },
  {
    "url": "charts/index.html",
    "revision": "cb74402fbb2ddfab263dd4ef31a3729a"
  },
  {
    "url": "charts/line/index.html",
    "revision": "35e9dbb630b27818e2982feaf73a4108"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "0429867077583bdd6032c16caa6ab564"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "adde0989f90609fe71b904cb5fff96c9"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "7ba30691e56793b8a52c075b300f722b"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "4b32a377dfbb0cf0be763899e1088d5a"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "be9a855634e77b355d7d57c6891a3d85"
  },
  {
    "url": "components/axes/index.html",
    "revision": "033d975817d0ba29881040bcef585509"
  },
  {
    "url": "components/colors/index.html",
    "revision": "f937e75ba753beb35d30d44f0f07c76a"
  },
  {
    "url": "components/data/index.html",
    "revision": "3d83af0d83a075e96b777db1238afd67"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "689f921ef0d2d84d7f5eb977c61f9db3"
  },
  {
    "url": "components/heading/index.html",
    "revision": "8f13bab1b1be4053a65ec9e71ab863ac"
  },
  {
    "url": "components/index.html",
    "revision": "1d2d8ddf5e1ec8d3c4a3d9d14450295e"
  },
  {
    "url": "components/labels/index.html",
    "revision": "6421e9cc5aea75a9139b56c17622fed0"
  },
  {
    "url": "components/legend/index.html",
    "revision": "db9ec154fa9fe21f5c15abae3b3b2e53"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "45ae436c26dfac676ad4ce2b170c8325"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "cfeb2be97a8cc51a5b9e604e2cba34b1"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "2dda7cd0df5d730ef008c988b5d8ebe2"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "fc315cd9401ead89401e2d179d208a74"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "7c9ca00bacbe0f38a81a4d0ce6c36719"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "615bd9e1fd7654a778a6c4f935ae6302"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "1a9e4d3cd23327a2c26e331e25c36d10"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "b847dd0f2699368dcb05a4428447f505"
  },
  {
    "url": "customization/basic-styling/index.html",
    "revision": "bbd40efcb548378e3e859658643b8aff"
  },
  {
    "url": "customization/index.html",
    "revision": "a88ce31ad296de720649d38dd9b99260"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "6c59358dc4f075420a8d781c53938116"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "ada3a9318b0fd47a453fe41163581335"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "4c61e5d78fc5661d05faa60c5c4e131b"
  },
  {
    "url": "development/index.html",
    "revision": "d5a03a175920299fd3d311c127b6de0a"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "cf9d6001104471cdb0c4302555552713"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "56d0fc8fb75938635725628802420aa1"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "ccd3ef927c1e94044e0d18064ee31faf"
  },
  {
    "url": "docs/index.html",
    "revision": "cd332ff8138da0b42637d562549af2de"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "691dafac4f6987b783a6a291f81f43eb"
  },
  {
    "url": "docs/migrate-to-v1/index.html",
    "revision": "ed78e77f32af970812462de360f885fa"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "f8016c90636e886ca45b6cb856041cbb"
  },
  {
    "url": "examples/area/index.html",
    "revision": "88e77249188d9c36a2ec88789ce45bc2"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "4dcfb68d8c682439027f4787d2e476fa"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "9a465ec694829f2f71dcc0e64f2fae88"
  },
  {
    "url": "examples/column/index.html",
    "revision": "cea21f9ecf93ddbaa62b86af7fb2402c"
  },
  {
    "url": "examples/index.html",
    "revision": "68ed1ab8fdd9bf0f550381abcba5ed91"
  },
  {
    "url": "examples/line/index.html",
    "revision": "fd3debc41632747fd06ad158b601ccbf"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "08454a76e0147d0bdf36e0b352ff63fb"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "5cbd6ecc5473e5ce2d98f1602f42a463"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "e7120785b200d867b6b368d471f38463"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "9ceb2f4f7305f9395acf1985bc084e6e"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "a57dd44932ea82e2ccfca6d28afb2680"
  },
  {
    "url": "index.html",
    "revision": "33cafc9f40d35417a4f9c7b98557e083"
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
