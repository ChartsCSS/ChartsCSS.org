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
    "revision": "5cf646ce2a22a1b72f63a7cbff4ed337"
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
    "url": "assets/js/20.0393359e.js",
    "revision": "4ea8d85b99e26010d4b229c139688012"
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
    "url": "assets/js/24.3bc9c7cd.js",
    "revision": "3d80187eb9512b27219c47bd345e1a8f"
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
    "url": "assets/js/33.5f80530a.js",
    "revision": "c50808d72c71189e6dbd18a815520cce"
  },
  {
    "url": "assets/js/34.9aadb16e.js",
    "revision": "dce99bcdf9e24ba8cf2fb7352d74b05d"
  },
  {
    "url": "assets/js/35.21a1ff1d.js",
    "revision": "636c31901e5f34fc786e9ba5d3642eae"
  },
  {
    "url": "assets/js/36.5d5e009f.js",
    "revision": "d108777f0d7ad5a0d92448dca89bfd06"
  },
  {
    "url": "assets/js/37.fc787582.js",
    "revision": "0c169ef6a0a056f6745438171ac1e5a6"
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
    "url": "assets/js/43.0cb3f5f6.js",
    "revision": "7d9a5723820023858a5358f3efcc2300"
  },
  {
    "url": "assets/js/44.f5da00cb.js",
    "revision": "aeecc9f178e032bd6df148a4557d35c3"
  },
  {
    "url": "assets/js/45.eed72381.js",
    "revision": "dc9c155ec20df52a26ac71be34fe1e8b"
  },
  {
    "url": "assets/js/46.206ba487.js",
    "revision": "ffc56b59173c586b12b9bd7ab54b4317"
  },
  {
    "url": "assets/js/47.2c254c9c.js",
    "revision": "a2d5937aca57f1eb992ceb6890f2e7ba"
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
    "url": "assets/js/50.1b24bd45.js",
    "revision": "a52fcc2046df5b0e079b61439337b9ba"
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
    "url": "assets/js/53.e6d08ad2.js",
    "revision": "3d4812048ae54406ca28541763194b55"
  },
  {
    "url": "assets/js/54.63bd470a.js",
    "revision": "d0c14126eb5623b9704614c201359257"
  },
  {
    "url": "assets/js/55.3f226fed.js",
    "revision": "0ccfa41897764888bfc4f4e9ad5dee32"
  },
  {
    "url": "assets/js/56.507be0d9.js",
    "revision": "9bfaa93ef943cd9286e73890d3dfecfb"
  },
  {
    "url": "assets/js/57.cc43df38.js",
    "revision": "4384a7d10abb72143d915892c739dbec"
  },
  {
    "url": "assets/js/58.495a5b3a.js",
    "revision": "63ebdcc6b4529be47768dba90c590063"
  },
  {
    "url": "assets/js/59.ec96e871.js",
    "revision": "c1eb22480254bb35f0a0945129c23b6c"
  },
  {
    "url": "assets/js/6.b9132f3a.js",
    "revision": "e9639601c606e10f4ef645d0672a8442"
  },
  {
    "url": "assets/js/60.a49abeb0.js",
    "revision": "f2b3f347ef257e038bcddc068c87c763"
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
    "url": "assets/js/66.43b73694.js",
    "revision": "e18738771e047cd0126dc0d0ded4449f"
  },
  {
    "url": "assets/js/67.e6e9213c.js",
    "revision": "70f373af05b56f45e19656ddf8ccbfe7"
  },
  {
    "url": "assets/js/68.043f2ca6.js",
    "revision": "6bc4a20652d14780abd61f11d02b9aee"
  },
  {
    "url": "assets/js/69.234ebecd.js",
    "revision": "3019b6b469b8314b9053f7269ba463c9"
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
    "url": "assets/js/app.b991538c.js",
    "revision": "99de102826045c585821b7e2312f3fcd"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "44c142b213f15d998c0997bb49139a12"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "8c0977c557f3673cbf46208fde6d746b"
  },
  {
    "url": "charts/column/index.html",
    "revision": "aed8a7e2464c0817a89d3868147fb92f"
  },
  {
    "url": "charts/index.html",
    "revision": "66f181baa6e8026446c5329498996a73"
  },
  {
    "url": "charts/line/index.html",
    "revision": "bdcc862237f81d558e9faae310684623"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "d30521f17e24f86644b79f2505a7a818"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "1345d096969e096bfa47ba1aece1f141"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "61f8be92f50ee0906986164e09abf380"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "3f70c62782acff2d5930a7fe3cede876"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "28979cf03195a5a5fddae9645c643ecc"
  },
  {
    "url": "components/axes/index.html",
    "revision": "86bc6e305bfff5a564609bf6d8603620"
  },
  {
    "url": "components/colors/index.html",
    "revision": "79930d6058a744fdce81d15056cd472b"
  },
  {
    "url": "components/data/index.html",
    "revision": "7e61b7bfa3eaa7ef27e7800d9a1c8fab"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "f9c58ae8f346f6a0ad9b861daf3fd375"
  },
  {
    "url": "components/heading/index.html",
    "revision": "78e2ae3419f1ce53932eeb8815cfe23c"
  },
  {
    "url": "components/index.html",
    "revision": "6bb2a10ffeeb1e4297d92bae44d17850"
  },
  {
    "url": "components/labels/index.html",
    "revision": "891f1e654ae41b844697204c80f2c681"
  },
  {
    "url": "components/legend/index.html",
    "revision": "090f806c831de595bf6d76867ee171dd"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "19508e21147ab8e3e1af3dbb94b15cc6"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "193ddecae08cec1b082037c3026964ba"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "99bbd7d257239289cb4d72808e47c36e"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "94e145f61ec26614de376c1808e17cce"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "baaaadc2d322ce79f270b9322f3fde7e"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "93bc3a315deaf93d36ac07382c6af0ca"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "ac80351597d40a75bc14071dcbdfa5f2"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "487af5d83272767eddac147438937c7f"
  },
  {
    "url": "customization/basic-styling/index.html",
    "revision": "60491b09954f2299af20fe3b50ae8c9c"
  },
  {
    "url": "customization/index.html",
    "revision": "50e0b8c12219931511678a7630609ec8"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "e552a5bff8b5a2f652a4790fcca10eb0"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "91b80ce52d67f9fb915a517ff35c14d1"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "e705adf4db2d7ce60edab5d36b363605"
  },
  {
    "url": "development/index.html",
    "revision": "d42bc5326922571863b8c0313179efea"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "98837691be8a29e9f5ca437a1742e5f1"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "5893954baf2a3ad9d2c58778621ac3e5"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "72234ea92ec88ff2a516ce8f5f131c9c"
  },
  {
    "url": "docs/index.html",
    "revision": "5dae77448721dda54061f98d1a7eb61b"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "4bbd2232bc28456c2a9164a7b5311709"
  },
  {
    "url": "docs/migrate-to-v1/index.html",
    "revision": "a7a43f093132a72f2a8c78442bf2b514"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "da049e9d192806b9f78fefd60a5a4a2b"
  },
  {
    "url": "examples/area/index.html",
    "revision": "d6a0acf3b059c9364878d530407ae71b"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "6c47f4cd09316e751cd52d3a4cb33401"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "5251fb64fdb093e2ccd09cc41cf22e5e"
  },
  {
    "url": "examples/column/index.html",
    "revision": "15ebd48d1a87c176cd8207c42bc36782"
  },
  {
    "url": "examples/index.html",
    "revision": "27810a3532e635b9f4d2ee86e9034558"
  },
  {
    "url": "examples/line/index.html",
    "revision": "a3b6c37b9f103c75a694856ebb1e8499"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "8969fae2c47d026d0dead8ce92892263"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "c166462a0fde776653447cc2f5d5c0e3"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "ca66acd6516d67a15a1cd565c8da1df1"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "6a932e3f951456916d49a9c35c120139"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "8a7b1f1d7261be9d452471ec6c2f17a3"
  },
  {
    "url": "index.html",
    "revision": "62c49305d61a70adaaf3575694faf171"
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
