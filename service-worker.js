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
    "revision": "8e9a3d18e3007f4104e687da1f737e70"
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
    "url": "assets/js/app.25ef443d.js",
    "revision": "f48c9d7eb76aab9f9d933342ce624838"
  },
  {
    "url": "charts/area/index.html",
    "revision": "55b5d3c6080d5c694699a44e3636b702"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "fddcf7be7965e84818156f53b167631f"
  },
  {
    "url": "charts/column/index.html",
    "revision": "9524bc3d18dd7c9d6c833b27b10a4403"
  },
  {
    "url": "charts/index.html",
    "revision": "1849036795ac24e00e957414583098e6"
  },
  {
    "url": "charts/line/index.html",
    "revision": "50611b2aa188265062ce282cf9904e08"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "de2fc2bad5401758f3a5e78a40cc5f4d"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "3ec71d699f86d01b3aa66e21b39eec4f"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "b6f686c3338576f81cc7317e4e0b01c8"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "0b8b607296f9254ebfd2db053c96d0f2"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "f73dbf4500f5720d13f06526b35f4f1f"
  },
  {
    "url": "components/axes/index.html",
    "revision": "f944f7849be04a911daec757d0f41f15"
  },
  {
    "url": "components/colors/index.html",
    "revision": "15195987cf2e479ee4d0860d57c9065d"
  },
  {
    "url": "components/data/index.html",
    "revision": "d05583ec7392660cb7fc104087b818fa"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "2bb44a5ccd1f888a7998b0aaaa13db53"
  },
  {
    "url": "components/heading/index.html",
    "revision": "60f79280af58640c4f95c45bb5eaffb8"
  },
  {
    "url": "components/index.html",
    "revision": "ab79d73e718a3e15c54fdfd8f0e6829b"
  },
  {
    "url": "components/labels/index.html",
    "revision": "e095ebf5697509bac3b66f6400d349fc"
  },
  {
    "url": "components/legend/index.html",
    "revision": "43cf93b945d8904e695a7720dd0df0fa"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "8fa55d2178deb2424a80f0732b2cbf31"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "226378b45b11cef404cd7103a7aeeaca"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "abd27b850df251fd2200a0ea86940e74"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "459b15c827fd58a259a208026963cf50"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "9fa3cd988686df7545af839ffe5bdec6"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "8a159c9e5d94347f05073bf91f6d6678"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "3a99306443a1ccb94e621cf15e04d9f5"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "21b033e49713114ee40117d3da061b50"
  },
  {
    "url": "customization/index.html",
    "revision": "f9aea4eac2bf9cd7bd0bb4cf498b53c5"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "16a1917c96eb1ea7b33bf09c2d4185e5"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "9298dec243193692930c347ad8994231"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "1b439a85a3d320295cea32b19f50b5f2"
  },
  {
    "url": "development/index.html",
    "revision": "3d9bcd26e40507aabcb88ad416520875"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "5038e2b0680982a940c5ad7a424e5eb4"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "3dfb552f8060589af26318d5bf5fe5a1"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "11d49e28bce4ad135336eadd28d56fbf"
  },
  {
    "url": "docs/index.html",
    "revision": "55d96f7e00c73a8c109b5753a822f76c"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "57eabe5809ad0fbb079274f24e406a84"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "d985aaf01be31dcc07508002755c82aa"
  },
  {
    "url": "examples/area/index.html",
    "revision": "ce9e82b2af6d70a321ddd8ea4e30ce01"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "6bbd0304487adf085995f546c7cd9fd9"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "1c0a590bc1d540eaf585115ea8c143bd"
  },
  {
    "url": "examples/column/index.html",
    "revision": "b5c3cee101629647402da557715c7d97"
  },
  {
    "url": "examples/index.html",
    "revision": "9722707b52512ccbcfa5f1e8506d5c75"
  },
  {
    "url": "examples/line/index.html",
    "revision": "271f3edf8380d974048f018c8d8dbbf4"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "81aae398a89d3e92e8eee791a43aa72f"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "4b0477119a05c251d73e7fcc75a89b51"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "b9d2c0144a0db08d6f52418642339fdf"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "fea7ad68964fa7017292b486024b73e0"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "fa5e3ba5f708ec2a79df13a1b0a097d1"
  },
  {
    "url": "index.html",
    "revision": "7d3b99adc554e0f4905bb73bf402f8d0"
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
