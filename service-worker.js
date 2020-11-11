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
    "revision": "5dcbdca0bd9519559a027bc4e815269a"
  },
  {
    "url": "assets/css/0.styles.fd51425a.css",
    "revision": "ca5b240582f50d5739f3a10523ac07bc"
  },
  {
    "url": "assets/img/html-css.png",
    "revision": "7ffa20302b6432f42fb6cc6c3a79ed51"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "61fc00dbd44c06bca1ad3bb08eb075a1"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "d9d62b2429b9777d6b5314ee3e2cb6af"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.10018530.js",
    "revision": "6e6eb48c3f8498f9c7686a287858b614"
  },
  {
    "url": "assets/js/11.1a7c9c45.js",
    "revision": "ef785433790593cd69a9fc9480bbe223"
  },
  {
    "url": "assets/js/12.a9313179.js",
    "revision": "363ed0c592d03fd8eb4b59fb46b55a2e"
  },
  {
    "url": "assets/js/13.9fa39d62.js",
    "revision": "85a672b62776459d013ede2316638c0f"
  },
  {
    "url": "assets/js/14.b40fb18e.js",
    "revision": "14def8b1302a3c5b6853496bbf2049da"
  },
  {
    "url": "assets/js/15.802ddcd7.js",
    "revision": "f6ca7218e5d7846413f94ed4949f27bf"
  },
  {
    "url": "assets/js/16.7ab464ad.js",
    "revision": "991acb4e2b0540887bca1c0cc563e942"
  },
  {
    "url": "assets/js/17.f223f7f3.js",
    "revision": "6c5c35b9c569b9b9863dbdf362e3e002"
  },
  {
    "url": "assets/js/18.1d5d81cc.js",
    "revision": "37da1a7b7a26a27fb368e10eb39d5b58"
  },
  {
    "url": "assets/js/19.4379a211.js",
    "revision": "d91c52e001a33cd567065a7f204187db"
  },
  {
    "url": "assets/js/2.d4e79637.js",
    "revision": "e1de31317194ec5289eb7709c963a367"
  },
  {
    "url": "assets/js/20.3933123c.js",
    "revision": "7d6281041015bed6d94469986719bc4c"
  },
  {
    "url": "assets/js/21.e56fd91e.js",
    "revision": "788595f5a41906c4cd615ae6c8c5acb2"
  },
  {
    "url": "assets/js/22.dfb03ef0.js",
    "revision": "d27dbafeb1d8cc53784efabe6cb74f19"
  },
  {
    "url": "assets/js/23.34a595b9.js",
    "revision": "c090c20fb268cf83228a34d04402a648"
  },
  {
    "url": "assets/js/24.0f83e15e.js",
    "revision": "d4626c9675980b51dfe4b7f0e812a4f3"
  },
  {
    "url": "assets/js/25.9ac38598.js",
    "revision": "32046e6c5d95cdcd00a281bd14aaf745"
  },
  {
    "url": "assets/js/26.3ca51e1f.js",
    "revision": "ddb9ab9866ddfa566b4372df7afb02f6"
  },
  {
    "url": "assets/js/27.e37f4b3a.js",
    "revision": "9d14022513ae8a91b44a043de0e96a13"
  },
  {
    "url": "assets/js/28.798d4686.js",
    "revision": "522cba2a937320b3031c8a7fe06ce0fd"
  },
  {
    "url": "assets/js/29.e120fb8a.js",
    "revision": "20f0a48539f5fa6a206f0e642e727619"
  },
  {
    "url": "assets/js/3.3557c775.js",
    "revision": "0f09f9b9bd3c7d04f6058b4a71601c14"
  },
  {
    "url": "assets/js/30.157e4630.js",
    "revision": "1da572c2911af76683942b5310d652b9"
  },
  {
    "url": "assets/js/31.4182ec4f.js",
    "revision": "172ac7ffe92f12b3d8f700972ff6fb85"
  },
  {
    "url": "assets/js/32.c7203a96.js",
    "revision": "8b91bd2be4f289c8c606b6756900db88"
  },
  {
    "url": "assets/js/33.833bec80.js",
    "revision": "046b98019209786946190ef3195212ed"
  },
  {
    "url": "assets/js/34.c6e537f4.js",
    "revision": "a9269b8bce684460d1c3f271d0a443c0"
  },
  {
    "url": "assets/js/35.8ec81af3.js",
    "revision": "69ef00fd775fecd8acfad32a2388a08b"
  },
  {
    "url": "assets/js/36.2ac9c0cc.js",
    "revision": "c1e53678d927a43299235927c5654c64"
  },
  {
    "url": "assets/js/37.0aa4de66.js",
    "revision": "0de946f96cc8eaf29242ea681a204b51"
  },
  {
    "url": "assets/js/38.2b53c973.js",
    "revision": "d49d23883e2bbc39ec626dea86414398"
  },
  {
    "url": "assets/js/39.efae5486.js",
    "revision": "63c8cccb8ea4caebcb1e259ee05fa400"
  },
  {
    "url": "assets/js/4.3440e4e2.js",
    "revision": "7438cbfd7c93129baf7b3203e9656824"
  },
  {
    "url": "assets/js/40.753e1c9a.js",
    "revision": "5e69d3b6a8d14ee8efa2bffac63c291b"
  },
  {
    "url": "assets/js/41.5e10347f.js",
    "revision": "5090163dab6d71a0d64706eeb9767ea4"
  },
  {
    "url": "assets/js/42.2dba98bc.js",
    "revision": "c1907ac9181faca4f8f2c73e4ada904e"
  },
  {
    "url": "assets/js/43.be9103ab.js",
    "revision": "4dc2ac6177767baccab010df856ddba9"
  },
  {
    "url": "assets/js/44.9119a043.js",
    "revision": "96b47e60ad544c44af6e0b061dbdd655"
  },
  {
    "url": "assets/js/45.4f253f07.js",
    "revision": "7a6cfc0c6a0b2bcbd4c795c417e6af10"
  },
  {
    "url": "assets/js/46.e83aa4c0.js",
    "revision": "c42861acb150f3f8df86672e98c69bac"
  },
  {
    "url": "assets/js/47.18a2bf58.js",
    "revision": "78a0c7e6634e1e0158b26788772ce6fe"
  },
  {
    "url": "assets/js/48.fa908c86.js",
    "revision": "dcb74cdb948d72ea031b6a2d3cb6bf60"
  },
  {
    "url": "assets/js/49.c468991b.js",
    "revision": "63fa72dc0188d11ad0a61dd6035510a6"
  },
  {
    "url": "assets/js/5.98958a93.js",
    "revision": "6afb2e9c4f428292502302c369985e59"
  },
  {
    "url": "assets/js/50.56ddbaa9.js",
    "revision": "34dc74662bb4b4f24b75b45921461ccb"
  },
  {
    "url": "assets/js/51.d57283ad.js",
    "revision": "0a7c7a7f8b4af1acd7b2ab5d8be14ed6"
  },
  {
    "url": "assets/js/52.9b171e6c.js",
    "revision": "53fbb077146bb324dc12e31c189d4c35"
  },
  {
    "url": "assets/js/53.d93aaffa.js",
    "revision": "08daf9199d8cd45591dda458fd6507f2"
  },
  {
    "url": "assets/js/54.ef590104.js",
    "revision": "f6ddfe2b5e186b2c9b41dbff16004ad0"
  },
  {
    "url": "assets/js/55.1a78fb6d.js",
    "revision": "010b34ef9d74ab4e6e799dac419e8541"
  },
  {
    "url": "assets/js/56.c9130103.js",
    "revision": "66862a272f77a20395ec09150bbbdcac"
  },
  {
    "url": "assets/js/57.1a3f3f72.js",
    "revision": "ad9ee111474892c221931613916d3f5a"
  },
  {
    "url": "assets/js/58.b33727e3.js",
    "revision": "01eefd1279766cb1d6c466567153d16a"
  },
  {
    "url": "assets/js/59.e4053663.js",
    "revision": "6379af8b8c1ad66d0a63199063c27f14"
  },
  {
    "url": "assets/js/6.30c6cf56.js",
    "revision": "e611b668fdf0f4a61edd032d1a31fdb3"
  },
  {
    "url": "assets/js/60.8a72fcc9.js",
    "revision": "91cb6f552be4696460f0dce5f27f7e2c"
  },
  {
    "url": "assets/js/61.2ca7d65f.js",
    "revision": "73d5008898a288002f2d76a066616892"
  },
  {
    "url": "assets/js/62.628ff5dd.js",
    "revision": "c38c028e60b587eb917264c9b56d626b"
  },
  {
    "url": "assets/js/7.a0d4370f.js",
    "revision": "cb8e7fd16accfb76b03a78e0db5e7c90"
  },
  {
    "url": "assets/js/8.c6f7a28a.js",
    "revision": "af5b1e6fab2771e5c77d0481f0f10db8"
  },
  {
    "url": "assets/js/9.ba2f466a.js",
    "revision": "1871ea4c276c32b7284bb4956713e94e"
  },
  {
    "url": "assets/js/app.603aa3e7.js",
    "revision": "45a7b4ad04cf9a114dcabfaf386290bb"
  },
  {
    "url": "charts/area/index.html",
    "revision": "e9d8e2b171165c36f86d902d1fd8ed17"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "52f02b45ec740869d35b84a79c25321b"
  },
  {
    "url": "charts/column/index.html",
    "revision": "87d314d7b09382cc2f251979c738a40d"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "543e25b0386217e6c265927379a364f5"
  },
  {
    "url": "charts/index.html",
    "revision": "262004eb9f655e7cee735d6c3644c4dd"
  },
  {
    "url": "charts/line/index.html",
    "revision": "9dbd51746d2809071792a432ae91203e"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "730aacdda31e02f286890d729f5d4fa2"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "bf1763446f55fd88701d768ca6ef09da"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "0ac528fa11a38752a82d7a3f7930dd3d"
  },
  {
    "url": "components/axes/index.html",
    "revision": "34f8ab57ad7788d7ed8e751fb5599643"
  },
  {
    "url": "components/colors/index.html",
    "revision": "0a365b7adddf6657c1bcefaf431e5f64"
  },
  {
    "url": "components/data/index.html",
    "revision": "5c7e53d704058a68b769916ff6e7556d"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "cd415d12bc029fdc784bc5d01cebc26b"
  },
  {
    "url": "components/heading/index.html",
    "revision": "73ae096a06df0e0fe84ece4998ecac6c"
  },
  {
    "url": "components/index.html",
    "revision": "84322a9353633cfe08b0717ddf53d96f"
  },
  {
    "url": "components/labels/index.html",
    "revision": "9ee8e8c6bd4350621462f5d9f8349a36"
  },
  {
    "url": "components/legend/index.html",
    "revision": "4ac82750e7804da4e9aeed0f31680736"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "124d47d1da234ce8f6ccd7b10092ea84"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "6830587f6676cc4c4bda4a97f7116245"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "fbc0268c0bdb2aa518c80cec95debfb0"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "ec0f4ef818e9342591c4f198867e2ee2"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "715472f2fb5c82c9b86d76af0df3835f"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "172866bb30742f4466106d6acf59f65e"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "fa1740444d73545b9d985b4349324239"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "19d2648dacdbff73f430f16e40bc56ad"
  },
  {
    "url": "customization/index.html",
    "revision": "c7e39a1172c13b4ac240a5efeff51102"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "14c8da4276098e0c3f244094905d1a0f"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "8e5d73bc29bd81a898769c131c67fb16"
  },
  {
    "url": "development/index.html",
    "revision": "d2b560bc27b292988e0f67fcba5abed8"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "4b175d109dfdbb8f8b85cd14fbe8d36b"
  },
  {
    "url": "docs/index.html",
    "revision": "204b311bda8f6145273bcf142538ca83"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "519fd49aabec9c6d6ccd2c4605a55c2c"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "4bbd98e356a874739dcf1de3fd978c01"
  },
  {
    "url": "examples/area/index.html",
    "revision": "778adda45ce334797134385e3d7869d4"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "79222c6a4842fd7f4c01354f3cdc0f86"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "f1acfc77cfe559f67dac4330d6d82b5c"
  },
  {
    "url": "examples/column/index.html",
    "revision": "ad93c7a04c06f878191b40369dea7d86"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "1e78d4a013bb9cd5c1e39b6149ae37dd"
  },
  {
    "url": "examples/index.html",
    "revision": "ad6ecc5cad425e3e8cddd60e645c9225"
  },
  {
    "url": "examples/legend/index.html",
    "revision": "80bc1a61687cff842f37079f684e80ed"
  },
  {
    "url": "examples/line/index.html",
    "revision": "52ca8f426965873d21dda12f3a9e5251"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "3ce87521e07baf47bd64e7d15cc495e4"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "20faebf5e8553cd3851c35bbce6f012d"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "56cac14f90d6e4d991c7d553c7403f79"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "4310a5f22bc27cbb516dcee69401459d"
  },
  {
    "url": "index.html",
    "revision": "54ec2c89ae08c24b397df046dbf08266"
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
