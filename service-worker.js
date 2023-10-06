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
    "revision": "5bf627d827cae5564b4c239b8b7365b1"
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
    "url": "assets/js/34.226ab9db.js",
    "revision": "8597d0f60549c5ee416f96472cf64196"
  },
  {
    "url": "assets/js/35.0b60a9df.js",
    "revision": "1ee26efb80be1203b3b166952525979a"
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
    "url": "assets/js/42.061a4902.js",
    "revision": "5eb3ba5483efba4686094fce4addbce6"
  },
  {
    "url": "assets/js/43.981cd2f2.js",
    "revision": "ed717235007c73ac85021a8c39002ffb"
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
    "url": "assets/js/55.d1772200.js",
    "revision": "6f4a0e165789abaf02beb5a2942343ac"
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
    "url": "assets/js/62.0fa53dbf.js",
    "revision": "3eec00a4d4d9446677713167f9d4d18f"
  },
  {
    "url": "assets/js/63.cd399189.js",
    "revision": "582317f196b2d419300a85deaf1c3a0e"
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
    "url": "assets/js/app.0b9d380f.js",
    "revision": "11da0bedee3ca5a7f036d87ca8738af5"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "4451376b2b1c9586045cdf04626601b9"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "b05f5ccf2d933d1ba2f70dab0582079c"
  },
  {
    "url": "charts/column/index.html",
    "revision": "d1f0e7ce0f8b4059269f2599a987da84"
  },
  {
    "url": "charts/index.html",
    "revision": "771371155fd5618be041f425afeb4a5a"
  },
  {
    "url": "charts/line/index.html",
    "revision": "9fbb8749d9964b396c5ebb9db6b0f236"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "24aa29395465d6ec9ae48de4bb7f9af1"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "5781a370036dd94b66bd89a885f098d3"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "81880848d7baff919d5b1b71a3a5e0ac"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "5ae3ffc6262af6d36a62f179f7c87db4"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "072344e641c725b2bb51e958d17bcca6"
  },
  {
    "url": "components/axes/index.html",
    "revision": "03c34c13ee068a18297e07aa3bf6d195"
  },
  {
    "url": "components/colors/index.html",
    "revision": "f86f41ed47e21cf2b1cf01c88916724a"
  },
  {
    "url": "components/data/index.html",
    "revision": "98e57f3863536441ceef6333b3677175"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "ca3dd2c15dd5d1660b1e2f99dbba8ab6"
  },
  {
    "url": "components/heading/index.html",
    "revision": "45ef92f9c3169fc84075ce3ea62ac25b"
  },
  {
    "url": "components/index.html",
    "revision": "6a23109518c4cb244a1871fc60cf0ef7"
  },
  {
    "url": "components/labels/index.html",
    "revision": "64f77134b89a07100960727bf24625ff"
  },
  {
    "url": "components/legend/index.html",
    "revision": "a3c12d5e4867a536040cb6dfef9bca6e"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "ae60b49aa8f420ccb21a6b5002034c8b"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "84b0a19eec1dbe13041c95cd5beb4efd"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "992dfd896941a286b45034724775bdcf"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "306efed1bfe8797624bc8cfe3d8ea08d"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "ffb0e38b6d1a58053181138d23853326"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "dc19c1be475cc391889702295c751952"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "fc0399393ae4e4d4d78e25b3563fa275"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "2173f765f5cee302d106c71be4d08981"
  },
  {
    "url": "customization/basic-styling/index.html",
    "revision": "001d25514cb14a5bfcd0f168a32d3fe5"
  },
  {
    "url": "customization/index.html",
    "revision": "78104883c4f4a2db2d0ff93b121261a5"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "4a84c776bc32a4d5b12917b831af4a91"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "49ececd4e6cee4e5f48c50c88afc3bfb"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "799e02e4ec808b79fb0234a9bdd0fb59"
  },
  {
    "url": "development/index.html",
    "revision": "70841d5b4a168f949e9f2214a3d911d5"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "37403c7575c0e7881cea5bd09999ce17"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "710824debce77d5b5c72fe37c754a180"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "b54c3a0895c8a4404f4683751a65137f"
  },
  {
    "url": "docs/index.html",
    "revision": "9556bdd1a72acd5dc5545639953f405c"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "3adc290fb09ab071dcd64c4c7515d124"
  },
  {
    "url": "docs/migrate-to-v1/index.html",
    "revision": "0e5ecdc241e058cfe9cb31ac44acdcf5"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "919d80f337b0c88ea4b1155ab741804a"
  },
  {
    "url": "examples/area/index.html",
    "revision": "042b224928b3473e2d9c49ca2bec2dcf"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "38c4ccb5c6ffb53cab497b420be2017d"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "98513b821db9036e9d1917f92d280ca8"
  },
  {
    "url": "examples/column/index.html",
    "revision": "fee8bca8b137042af9086ce9cf05ec64"
  },
  {
    "url": "examples/index.html",
    "revision": "382c9ed5ba52c380ba772cd8705f1d75"
  },
  {
    "url": "examples/line/index.html",
    "revision": "1e226b544a6d313a51a6ed57debe9aa0"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "301d55ed7382b855b281a45238a23917"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "aaef4558d08c1dd55541f8f36da433ef"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "943d366e25da80412bffbb241638e776"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "cc75bb526433bc63554d819b0783c0c1"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "c21bb5730cbbef0de9ff4fd10c20bd8e"
  },
  {
    "url": "index.html",
    "revision": "65183cbda9c90b26fb39f1043d702e7e"
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
