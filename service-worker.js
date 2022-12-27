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
    "revision": "afbe0cabf6154a89703e9f74131a9907"
  },
  {
    "url": "assets/css/0.styles.0f4ec77f.css",
    "revision": "3977715628ab9b0b8ffa4fc398d4852b"
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
    "url": "assets/js/10.d57c1a58.js",
    "revision": "63bae5ce252dd815afabe69460cf745e"
  },
  {
    "url": "assets/js/11.71231bfb.js",
    "revision": "f3b79f0623ae9ad3565b4a5a0aadf0f6"
  },
  {
    "url": "assets/js/12.651971a6.js",
    "revision": "a79b32acc50360bc3801f5211dd8d806"
  },
  {
    "url": "assets/js/13.01e1d5ce.js",
    "revision": "d1aea5db65ba446b048afc3979a398c3"
  },
  {
    "url": "assets/js/14.1766cb1f.js",
    "revision": "f3844ab0d35c327c845c0bec22bcd5d4"
  },
  {
    "url": "assets/js/15.06da530e.js",
    "revision": "834ff9d055b311eea1431801751a8c95"
  },
  {
    "url": "assets/js/16.c30b34a5.js",
    "revision": "f42531a3de31ace501912268d076fb81"
  },
  {
    "url": "assets/js/17.9510c344.js",
    "revision": "7e19e3cbd1ff894b4b6ee26adc1c3e53"
  },
  {
    "url": "assets/js/18.59790d78.js",
    "revision": "0473dcbd0ce034b1ca3c5cf0387d5b90"
  },
  {
    "url": "assets/js/19.e5bc114f.js",
    "revision": "f9b88766a65a690d7b522d207583baf8"
  },
  {
    "url": "assets/js/2.86b2ecd0.js",
    "revision": "a4ffb45e05de2fafaf7eaa43f8aa406d"
  },
  {
    "url": "assets/js/20.d235ea97.js",
    "revision": "fa3fb9f6213af5497ed3a0f205a655db"
  },
  {
    "url": "assets/js/21.087d00b3.js",
    "revision": "aff592d28efec7b3820cdabe26ef8736"
  },
  {
    "url": "assets/js/22.506c9d47.js",
    "revision": "8f62ff3d5db843bfc0f11cb1c1f5f3e1"
  },
  {
    "url": "assets/js/23.100a91d2.js",
    "revision": "62ad749690a68138ba0208271558be18"
  },
  {
    "url": "assets/js/24.0af5f3bf.js",
    "revision": "926101eff3a9bff65f4cb0cdbbc6b21b"
  },
  {
    "url": "assets/js/25.99967f0e.js",
    "revision": "aecbfbce4a12fea27b20889b86ed24da"
  },
  {
    "url": "assets/js/26.e84247e1.js",
    "revision": "f8c42eb29d74c3bed8169bed24a0a132"
  },
  {
    "url": "assets/js/27.028c4112.js",
    "revision": "98285aecead06e51065c2172584b9c8d"
  },
  {
    "url": "assets/js/28.db3625cf.js",
    "revision": "8f97b8b8845f9d5e930562b52456fedc"
  },
  {
    "url": "assets/js/29.f961e12d.js",
    "revision": "31058eacc9e5b88ce3e8320c738bdc99"
  },
  {
    "url": "assets/js/3.fe67b784.js",
    "revision": "3c9d96fa1077bdf951d04eb10acf24ae"
  },
  {
    "url": "assets/js/30.53be07eb.js",
    "revision": "da80ec83ad0b1fd49dd529eed161ca8e"
  },
  {
    "url": "assets/js/31.0ecea82b.js",
    "revision": "c10cd75c448829ab316de0a8e129ccc3"
  },
  {
    "url": "assets/js/32.984e7c33.js",
    "revision": "1891b73b20d8b16b7d235f1147035253"
  },
  {
    "url": "assets/js/33.19c95eca.js",
    "revision": "5229e3a4b0d71c4c96499283617f0605"
  },
  {
    "url": "assets/js/34.920aadc0.js",
    "revision": "af7ccaa106c19878450b8021cce1cdfd"
  },
  {
    "url": "assets/js/35.389efd06.js",
    "revision": "49fa521e61d1c36cbdb7b0c77a04495a"
  },
  {
    "url": "assets/js/36.f6676d60.js",
    "revision": "f0c97c7f2f0e802ef721f75e726be1f1"
  },
  {
    "url": "assets/js/37.f3366e81.js",
    "revision": "fe068bee1a385359c610862e21d69dc6"
  },
  {
    "url": "assets/js/38.4e366596.js",
    "revision": "ea4d6b34c34972b61bc4d2ffcd68c587"
  },
  {
    "url": "assets/js/39.651cf6e2.js",
    "revision": "7acab0fcd117252d77e91b89cd3bee31"
  },
  {
    "url": "assets/js/4.d3ddd571.js",
    "revision": "61d0d1fffa99e350c3e237e6c09c62c3"
  },
  {
    "url": "assets/js/40.a0499721.js",
    "revision": "9633e2ec47007ed2595636f6454eb1fd"
  },
  {
    "url": "assets/js/41.141009d3.js",
    "revision": "5b2becdfe62499fb6f6f2522d8453526"
  },
  {
    "url": "assets/js/42.001c55ea.js",
    "revision": "5516bf9455f6aed07fcc362055eb043e"
  },
  {
    "url": "assets/js/43.2def363e.js",
    "revision": "abccea800c7c715b3f99747b666fe361"
  },
  {
    "url": "assets/js/44.9ea66775.js",
    "revision": "53d42681bf858e3230d601f042a641ed"
  },
  {
    "url": "assets/js/45.870f52f2.js",
    "revision": "3fa25d0af59e96cb187e6c5c61ce9bc5"
  },
  {
    "url": "assets/js/46.9172ead8.js",
    "revision": "5edbbf1dfbb3a17a7830f1f2a4e03dc7"
  },
  {
    "url": "assets/js/47.59a49e35.js",
    "revision": "be23138cc04b9a45062c87c4aa5a16a2"
  },
  {
    "url": "assets/js/48.b352dacc.js",
    "revision": "a2e21b1a949418992dada110ebcb9621"
  },
  {
    "url": "assets/js/49.c36675cc.js",
    "revision": "d7a6aa931b42e6cd497af11bb4a868e9"
  },
  {
    "url": "assets/js/5.04354424.js",
    "revision": "85d0ab3c826c7f806f13c370ef883a8a"
  },
  {
    "url": "assets/js/50.a2ffae2c.js",
    "revision": "b5b111ccd66ed002932debbc03c99dca"
  },
  {
    "url": "assets/js/51.b3d74bbe.js",
    "revision": "0c40de0738578deeda5494309bcce76a"
  },
  {
    "url": "assets/js/52.3e033c9b.js",
    "revision": "41806c1b6aa841630ec22ccb87bd85f6"
  },
  {
    "url": "assets/js/53.0d6791e6.js",
    "revision": "359622a91107977289425a3f4e6ed4c6"
  },
  {
    "url": "assets/js/54.cb0c63e4.js",
    "revision": "5d71e798a34a42b8503267a0e442ecbc"
  },
  {
    "url": "assets/js/55.f4d59f43.js",
    "revision": "f393c96659305eca07961f8c6c55386a"
  },
  {
    "url": "assets/js/56.486a65bf.js",
    "revision": "4cc740bdda49012d6dc489b59adb2d8a"
  },
  {
    "url": "assets/js/57.3563fc1b.js",
    "revision": "d49f40599061120d83aa6d2b4c7a90ba"
  },
  {
    "url": "assets/js/58.d79d7316.js",
    "revision": "1e1af9c68f180bedb0b990989a6012a5"
  },
  {
    "url": "assets/js/59.7abb53ba.js",
    "revision": "9344e62912f37ee021ba50c5f11a3cb2"
  },
  {
    "url": "assets/js/6.ae64bf7f.js",
    "revision": "2c9e14effe671a552b67e15d8fd3df1d"
  },
  {
    "url": "assets/js/60.3b32ce28.js",
    "revision": "32c9aa932a5b1491159d715726725514"
  },
  {
    "url": "assets/js/61.c748265e.js",
    "revision": "bf9b2f2bbc7f1b98342ee21993a761f8"
  },
  {
    "url": "assets/js/62.53aa2c13.js",
    "revision": "d9f19eff45eb2dc002a8ddaa808880e0"
  },
  {
    "url": "assets/js/63.8ea7e674.js",
    "revision": "7d4ce45e5b2c2a55c70d75843b191bee"
  },
  {
    "url": "assets/js/64.8dfeb986.js",
    "revision": "ce5d942d839981968bc8ff23b1b57dca"
  },
  {
    "url": "assets/js/65.151e5b28.js",
    "revision": "fae9804a619cd46dace91b78bdce7aba"
  },
  {
    "url": "assets/js/7.978efa40.js",
    "revision": "fda381ba37cfc7dbc83d3157f6a1f0b6"
  },
  {
    "url": "assets/js/8.a1898bde.js",
    "revision": "944876b2ac06d04dd44496c6f5a08535"
  },
  {
    "url": "assets/js/9.a3bd23d6.js",
    "revision": "2839bbcd011a9f6a9a440f4c9d2ce6ef"
  },
  {
    "url": "assets/js/app.fb9e18db.js",
    "revision": "f061456ae351d1a9efa17a25b8c9deac"
  },
  {
    "url": "charts/area/index.html",
    "revision": "0553f1b9791dd620176c7df3859bc896"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "26f8acf2a426668ab2d118e24fb9772e"
  },
  {
    "url": "charts/column/index.html",
    "revision": "ce08d5c4d9777c6a5836a4c9ec17cb5b"
  },
  {
    "url": "charts/index.html",
    "revision": "65c6165daf576204208e341a8a18754a"
  },
  {
    "url": "charts/line/index.html",
    "revision": "616aecd37afeacc5a399b27326a07927"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "47ee3abff06f4cb06183dff371da8ba3"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "7b79ebf39e07e884aad763400d7ea08f"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "2d64fb2e11ed6567151633e969473369"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "87e390a4375b30815865e9c743507246"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "a94b88e69f4289bd5d96a4be6d381f79"
  },
  {
    "url": "components/axes/index.html",
    "revision": "588325e87e43488ce4d85145119493d7"
  },
  {
    "url": "components/colors/index.html",
    "revision": "510604b42ddfca87d24a5229dabaea0c"
  },
  {
    "url": "components/data/index.html",
    "revision": "3c454eea6fe3ed21b400299b2fb798a4"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "63b5f79216fcf5c295a8d02a8bcfcad9"
  },
  {
    "url": "components/heading/index.html",
    "revision": "1aef4c764696605768cd86c8f959256b"
  },
  {
    "url": "components/index.html",
    "revision": "1cca703f4740bc23c0077b48da67ab94"
  },
  {
    "url": "components/labels/index.html",
    "revision": "d95186d164cdb833f3e27651c758a6f4"
  },
  {
    "url": "components/legend/index.html",
    "revision": "f055ab551d8140174bbd6dfe7890ea1f"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "423ee1924dabc11fa63518700cee0c7a"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "675418fdbb5ecf7eb37f5299f1c00765"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "ca4a60e2c7c1c753155581575dd4fc79"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "7cd01af67d16139bab06e502bb31fd3f"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "da979eb8f9f8235040de16fffb9c8a9f"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "3f0ad1f259cf5abdca4e3c77d32f8d13"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "4b1d53299f8eb86c9961147cddf44fd9"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "6bcda790bfd90ffe3aba7373eb4273d2"
  },
  {
    "url": "customization/index.html",
    "revision": "4a71a2b42f2fe729fb06acb4980a9945"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "0116b1c6ba0dcd5e64bd21696dc9b46a"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "dd09dd61e74ce1ffce86e2ce5286fb8b"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "5f52485eb2455ac27464f9e71bd47d77"
  },
  {
    "url": "development/index.html",
    "revision": "55fb0d4f4ce5380252d37b2e4cd1ddea"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "fdd750a5270647a998f7f79d2462c66a"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "14dd471d220b1512ab850ff9c2079ce0"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "9b8d0f16b26e6c15e9bf34c661a5ab81"
  },
  {
    "url": "docs/index.html",
    "revision": "853d54d814d5d0b3a387b88ce140d215"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "2fe2ae3b673ac3287b8b18e1172feb78"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "37feaf747f237c235cd3253cfe810c99"
  },
  {
    "url": "examples/area/index.html",
    "revision": "1da8f4157071a3b48376d1703f8326d9"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "511c110d5aa676af4ee78339a0a48986"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "1ea04878c6bafcf2a41fa6512072b84d"
  },
  {
    "url": "examples/column/index.html",
    "revision": "fa7726bda30a4b76c826b92d8593790e"
  },
  {
    "url": "examples/index.html",
    "revision": "e61540b568776075ac8d5702510b13c7"
  },
  {
    "url": "examples/line/index.html",
    "revision": "ea326a159d5c833675d848cb2f387df9"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "087ff129f2f087ee92f20e529f4ecfad"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "d7f6b82dd7ebc59d48e83982be8aa8a2"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "7063b7ffcf624a28ce1cd548a894be87"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "d612cff4e1467965ccee1e2fba7a8fa6"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "8c8c1d94db33995ed3bd5131d0e76a3a"
  },
  {
    "url": "index.html",
    "revision": "237a628fbbe7e2a45ed43a880af831dc"
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
