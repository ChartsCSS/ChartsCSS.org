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
    "revision": "b95262ef35401b51cd0a46c97c27fb7f"
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
    "url": "assets/js/42.061a4902.js",
    "revision": "5eb3ba5483efba4686094fce4addbce6"
  },
  {
    "url": "assets/js/43.5ffdcd93.js",
    "revision": "87fcc47e1f9907f2a066b6b16b6e3b60"
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
    "url": "assets/js/53.84faeeef.js",
    "revision": "e109a92cc1ec8645255b3c9d2a74839d"
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
    "url": "assets/js/66.76b44fed.js",
    "revision": "26353c4b5e0a0573e6bbafeb71ecac7f"
  },
  {
    "url": "assets/js/67.b80beb55.js",
    "revision": "a9292730cb8cb86b91d4e7fcfbdeed5f"
  },
  {
    "url": "assets/js/68.ed266849.js",
    "revision": "e8e17d22247326df9c43e3fe36ff4afa"
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
    "url": "assets/js/app.66cb24a6.js",
    "revision": "0bd2a11c01386dffe1138462be01e3f4"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "3d1d983cbe3f659b8042333b2d9858b8"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "be50ceac310c67237fdf3f25f9cb6c3c"
  },
  {
    "url": "charts/column/index.html",
    "revision": "11e6f297d839de1ff2accfc900e8d56e"
  },
  {
    "url": "charts/index.html",
    "revision": "7b851ef0b0db37bc9f676890ea140635"
  },
  {
    "url": "charts/line/index.html",
    "revision": "dafb58aa73758d0f9c5b3621c0e724b9"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "5af804926c62bd6c442c0ee2c4d4f0fd"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "8676d025ba14f150e81eb7e4c8019dc1"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "669a6e6361e5bc109c53b53c76e5f9ed"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "5dc2696d15df3b37b0a2375e6ac9ae61"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "25732011f630a0911eab0ced145457b7"
  },
  {
    "url": "components/axes/index.html",
    "revision": "fce8a0a0adc604d7cee3f6b40ce923e0"
  },
  {
    "url": "components/colors/index.html",
    "revision": "ea376ee9d7c303ab3c1fba110a5ddee3"
  },
  {
    "url": "components/data/index.html",
    "revision": "4a31f6bebb5e77ce0fa89632079cb8ab"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "05947b4e24836533d254265ab9cd79ad"
  },
  {
    "url": "components/heading/index.html",
    "revision": "f985c5d6e837d19818bdc252ccf01e73"
  },
  {
    "url": "components/index.html",
    "revision": "a74132fc666dda56795b23fa9a0529f2"
  },
  {
    "url": "components/labels/index.html",
    "revision": "70cd4fd561c2a9183b6a0c11a88c0786"
  },
  {
    "url": "components/legend/index.html",
    "revision": "087c04fc92468bef85f8e158edc2ff02"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "d03b1ea1e5bdd4827aef145e3e08c8bc"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "e31e554a9ee26982fd9bae6a75055568"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "6305f8cd56ce3d2bf358150fbfd00df0"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "0cb7638a9d0982315148f2820204151a"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "36fd93dc7d31d525f46a16fba9298e8f"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "6390764b72649973caac55b3456ac53b"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "728fd1d0f62e3b6a09bad45a0fc10977"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "fa5d97f114e4df02879101e30e414bdd"
  },
  {
    "url": "customization/basic-styling/index.html",
    "revision": "9a98d4d6fc811e7f9ee9b0cb5e65abfc"
  },
  {
    "url": "customization/index.html",
    "revision": "aa205cbb2782b5f144a0556d0a4ed423"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "5b13522db7b9d7c5b84626bfc6060118"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "2d12c09e329193b271fac68181557657"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "883c35639f5f6d764ac6ad93d5c020ed"
  },
  {
    "url": "development/index.html",
    "revision": "d2383c9c038ee54f4f7c2464f0e88648"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "efe94601e840f8d5c6fe8d28813182b5"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "0c09aff67f074788c0c897f65f0828aa"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "edab5c1f2ca350ca5dde9c2a09ebea6e"
  },
  {
    "url": "docs/index.html",
    "revision": "b4fedafb9a654e07414c09a152f493f4"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "70b84e3721885b6b4ba4d7db1b63031d"
  },
  {
    "url": "docs/migrate-to-v1/index.html",
    "revision": "a34ae4902c220b7322b61e5d9284fc9a"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "2820c84c94a8108a10e2033dea6b7d1e"
  },
  {
    "url": "examples/area/index.html",
    "revision": "52a77c02331411caf26286618c5e2838"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "df6e5f0dd53fd16847e2ec571cf9920c"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "a685d8c3fd29623ed6c1836a13a5b591"
  },
  {
    "url": "examples/column/index.html",
    "revision": "3df08a7f3fdca40a95c7a733ef0ef5e7"
  },
  {
    "url": "examples/index.html",
    "revision": "9fa3161361de17072242ba5a8569f27c"
  },
  {
    "url": "examples/line/index.html",
    "revision": "207bafabe5627ac0e33a6c2b1ecc7e8e"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "717b618a9aa99235a84467044430addd"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "38a2be309f4f1574bf4ac6f759b2d528"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "c11b6503618dcb827e562694eb14620f"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "4232e4964c58ec8c349536d2ac72085a"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "abd2654ef3e3d61fe25f510b081b41f7"
  },
  {
    "url": "index.html",
    "revision": "210475e3eb65c712d4bb924ebb6a9f72"
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
