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
    "revision": "d071b0652bc4c3dcc7393fe607442dfb"
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
    "url": "assets/js/18.06dd19f1.js",
    "revision": "6ee5c249ec85c57ece295ca3e33a946b"
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
    "url": "assets/js/76.d86d2d13.js",
    "revision": "efdef19609bac349db9b049519a62623"
  },
  {
    "url": "assets/js/77.8fa021e9.js",
    "revision": "bfde37e5cc7236685d6546886826ee8a"
  },
  {
    "url": "assets/js/78.98bdb05b.js",
    "revision": "537a5148a4de2e00c5fd03e1f930d576"
  },
  {
    "url": "assets/js/79.6c68b767.js",
    "revision": "bcc2ea50cdf68ee51b80208dd00b5efe"
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
    "url": "assets/js/app.253c2aa2.js",
    "revision": "5392e08f035d9ccda7ec3830bdb561a1"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "4a8179e26f4551f0be8e69c339ec43d6"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "29d49ac95674ed1f2cc93ac5d64d4b17"
  },
  {
    "url": "charts/column/index.html",
    "revision": "8f1a1716ec77437fc4e0f0b4cd0c4f79"
  },
  {
    "url": "charts/index.html",
    "revision": "bf3d30e1840f1d22740b8b50a09b4963"
  },
  {
    "url": "charts/line/index.html",
    "revision": "dc92d241903d9bf3e3ab94018ee632a8"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "5354d953d4fbf68999904210a45f8158"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "294e4f3986d93dce0ea90c9c24870e6c"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "30a0d9cedbbe064f5ec6bebb8ab66875"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "2eae37d276a1fba233cc3e14954bf106"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "c4d5d5d54881f58bc0246ab964d399b6"
  },
  {
    "url": "components/axes/index.html",
    "revision": "167eaf41e413d7f1c837c21d3c35d99e"
  },
  {
    "url": "components/colors/index.html",
    "revision": "d85254cf8a8c75df45bf4c27fe0d2418"
  },
  {
    "url": "components/data/index.html",
    "revision": "f2ab348c361fc93e0c687d8cc1fef155"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "dbce5d9e370c8c2f77e551462cbdcf2a"
  },
  {
    "url": "components/heading/index.html",
    "revision": "1b97595cbead920f0a10d86a5ea6e6d9"
  },
  {
    "url": "components/index.html",
    "revision": "d09e80e0dfddede72112e3ac1f8c1927"
  },
  {
    "url": "components/labels/index.html",
    "revision": "f5528f757649b540aeb9ffdc7d1af81d"
  },
  {
    "url": "components/legend/index.html",
    "revision": "3f6fd023b5d153cecb29d1ee2410e9ee"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "da4473924a9f1dcdde42793ca2f491b7"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "edaaa3c8f1af53dbc82c03d6273ba883"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "d10dd1a88df0e6fee03f61c57a292670"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "aa79acb879c19b0b5d4db753b98fbeb1"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "5d89f3c858a9d228ed17c397ac701beb"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "da352dab2ddc976920bb97d68c482482"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "09ebef828c913fd297c3fa86bbaa660b"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "05fe2a94d657977925bb90ef158c5a6f"
  },
  {
    "url": "customization/basic-styling/index.html",
    "revision": "c91face91f76a742727687a91bd40cb7"
  },
  {
    "url": "customization/index.html",
    "revision": "8adf814389e9ae5a18f01e4a7650c9a1"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "70e12db64cdf6757e0ac40bc59363a12"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "4b72ef1409cfe79a972a1cf1842b8039"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "20ebfc298004ac58ea9489df87535337"
  },
  {
    "url": "development/index.html",
    "revision": "1d01b7ad9d2a625340c56c400e9e89d5"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "9f3a69cd81fbd27d7e59e415ec906ff3"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "8aa3c5942d96b22d0d676d8c89e7e7e5"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "32c64e2a0df7fa63b613c3d60ff749f4"
  },
  {
    "url": "docs/index.html",
    "revision": "d2a07086b56ddc571eff19ce8a5b342e"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "450c08f44f31faf7454292af02e5f996"
  },
  {
    "url": "docs/migrate-to-v1/index.html",
    "revision": "2623fa33987f99884b89e85b3e034c11"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "fd52bacf84d64912658efa28c03366b2"
  },
  {
    "url": "examples/area/index.html",
    "revision": "165b282bc73b5c8aa4cc2cf58cfaf810"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "f8840cbfd4baae47db66d77dcc26feb6"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "ea9abb8e556cc3645661676d024c9eb5"
  },
  {
    "url": "examples/column/index.html",
    "revision": "fd5b6d9508a1d919b125015a759dd376"
  },
  {
    "url": "examples/index.html",
    "revision": "3bb95ee9313d3d2773f47192fb1f316a"
  },
  {
    "url": "examples/line/index.html",
    "revision": "3ae7c2b0a74b0a17011419328c9c93a2"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "7df85700e2a000334f37e15b2f38d4a8"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "d36021b7bf68aee69f5fc15b5da7a21f"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "25af75170c9f79d5f061765d0504e3f0"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "df31b2fb5c97efc1a05ae69d7bdaebdf"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "552e7d24035451e7f1ab51fe6f984f2f"
  },
  {
    "url": "index.html",
    "revision": "192e7fff5f321831a132d4a5dc25fec1"
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
