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
    "revision": "e36f854c4b16d28fd062f93b819dd009"
  },
  {
    "url": "assets/css/0.styles.fa867714.css",
    "revision": "9ff046a1b22933ab0ca269e66a4d4d69"
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
    "url": "assets/js/18.ded4c6fd.js",
    "revision": "4272d04bd932cf5b82d9f4823ad3f6fb"
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
    "url": "assets/js/24.102312e8.js",
    "revision": "a21e806492991d70c444ecc9318520f4"
  },
  {
    "url": "assets/js/25.d8d0dc65.js",
    "revision": "52c6324e7e1bee280c67fc3de311767a"
  },
  {
    "url": "assets/js/26.c6480ffb.js",
    "revision": "7bf6bff93a54a428255ed5d93ab71d14"
  },
  {
    "url": "assets/js/27.3eda44c3.js",
    "revision": "9eeaa8e0ae342b139f4709a75800a61b"
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
    "url": "assets/js/33.629cf249.js",
    "revision": "026ccb5ffbca647b72d5a639d43592c1"
  },
  {
    "url": "assets/js/34.6c86a642.js",
    "revision": "44ed7954b89853b6f018a9e602a60e06"
  },
  {
    "url": "assets/js/35.9db27a43.js",
    "revision": "10b796e2df759f93cf6a2f534fba92da"
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
    "url": "assets/js/40.8f408bf1.js",
    "revision": "161340923095e4d5b9e73def3b29ae3c"
  },
  {
    "url": "assets/js/41.3db15d0e.js",
    "revision": "c7e233fe6ccc86ab227c6df95eae154a"
  },
  {
    "url": "assets/js/42.66b0f838.js",
    "revision": "d2fd93ef9a3b2f6ffb40876dd7697f38"
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
    "url": "assets/js/45.a1594047.js",
    "revision": "9b041332e0933825d8e583aa29f0ea65"
  },
  {
    "url": "assets/js/46.79fc6b6d.js",
    "revision": "5e761cba6352db91be9e32fbfeeb648f"
  },
  {
    "url": "assets/js/47.faa97b55.js",
    "revision": "cbec38e1bd02ab97f10d2da9c125a421"
  },
  {
    "url": "assets/js/48.ea9d87a8.js",
    "revision": "22ccff0b84e2b6fd1137ad20efcdd921"
  },
  {
    "url": "assets/js/49.df3b4809.js",
    "revision": "878d8dd30025eb90d1f1de7ef1da8719"
  },
  {
    "url": "assets/js/5.cda8c120.js",
    "revision": "7c95a6bb55df5effba2cc4694ba69895"
  },
  {
    "url": "assets/js/50.35ea0b87.js",
    "revision": "19b17d4123566dd6cd9efbed570d4c93"
  },
  {
    "url": "assets/js/51.f88b2227.js",
    "revision": "0d333fbbb86710aaa6adedb3d4c99ab9"
  },
  {
    "url": "assets/js/52.7f438243.js",
    "revision": "83904b439a40e491dd87a3879c661ac5"
  },
  {
    "url": "assets/js/53.a43dcfe8.js",
    "revision": "d041fef40da603d162e4e023346e1885"
  },
  {
    "url": "assets/js/54.3e2eb5b8.js",
    "revision": "fa11e6b4656d2df90235075d2521a24c"
  },
  {
    "url": "assets/js/55.6a52158a.js",
    "revision": "8061916498936172e49fa78fd9d85ce8"
  },
  {
    "url": "assets/js/56.3d815f2e.js",
    "revision": "6a3e6559ac23915ce57cc2ac6226dc88"
  },
  {
    "url": "assets/js/57.63b636f2.js",
    "revision": "9cf9e828ffdcd5e6094e0fc64a217418"
  },
  {
    "url": "assets/js/58.e9dd7ec2.js",
    "revision": "821817c618115f86ef1bb7acff75a28e"
  },
  {
    "url": "assets/js/59.fc8ae849.js",
    "revision": "ef40809df1381f0f383b08efc3a40953"
  },
  {
    "url": "assets/js/6.b9132f3a.js",
    "revision": "e9639601c606e10f4ef645d0672a8442"
  },
  {
    "url": "assets/js/60.681440de.js",
    "revision": "dba836cc440a1dc6505959be8a19379a"
  },
  {
    "url": "assets/js/61.e5a6a3f6.js",
    "revision": "dd186a3bb5ed6f96d0b126c16c6cce28"
  },
  {
    "url": "assets/js/62.ea60d393.js",
    "revision": "888767cf08bca2cef47cc3887f07fe0a"
  },
  {
    "url": "assets/js/63.4fb4a0db.js",
    "revision": "cd379b51b470aab902151c845c142d2c"
  },
  {
    "url": "assets/js/64.9c3ab527.js",
    "revision": "09923a5718d4dbdb561c4dd57f85a2be"
  },
  {
    "url": "assets/js/65.ba72cef3.js",
    "revision": "149cca441e317dbd53b0a15d849f19bc"
  },
  {
    "url": "assets/js/66.a50b7a8e.js",
    "revision": "a384a47070bf3a3098a81be2a8498f0c"
  },
  {
    "url": "assets/js/67.b353cd90.js",
    "revision": "a310039ff4727ba63d5829ae04a61c64"
  },
  {
    "url": "assets/js/68.4b451756.js",
    "revision": "6ac2ef8d2b3a67a401814b508a0d5c1e"
  },
  {
    "url": "assets/js/69.d1e9a9e3.js",
    "revision": "0e5a4b16e98a4b5cdc93c5297ea39488"
  },
  {
    "url": "assets/js/7.b0fccd41.js",
    "revision": "902ee1339a8574679895e0224d125308"
  },
  {
    "url": "assets/js/70.42ef0f1d.js",
    "revision": "be59aa2b71783d9ed5c5665db4d15531"
  },
  {
    "url": "assets/js/71.95113294.js",
    "revision": "24cb81d5190090aa222b88f561012a0f"
  },
  {
    "url": "assets/js/72.430c39a6.js",
    "revision": "676396b8ebf817d670fd644aa3e97ebc"
  },
  {
    "url": "assets/js/73.116b829d.js",
    "revision": "52d2f38bea1f8c8ff4b803eccc606951"
  },
  {
    "url": "assets/js/74.85683847.js",
    "revision": "cf74af52a046322c1e15dc45555379cc"
  },
  {
    "url": "assets/js/75.c9cffc09.js",
    "revision": "7357d38a28d3d15361f97d4b31932c4a"
  },
  {
    "url": "assets/js/76.afc36ee4.js",
    "revision": "e507559454b8b1c4c4582b13a9703ba7"
  },
  {
    "url": "assets/js/77.b23b063b.js",
    "revision": "949703dc263389a0076a69257a1d8810"
  },
  {
    "url": "assets/js/78.fc97e1ff.js",
    "revision": "0405d5f5888e9c0cb3d707c092a68a5a"
  },
  {
    "url": "assets/js/79.fd615066.js",
    "revision": "1b87557f30874dc641cc0a07363ac19f"
  },
  {
    "url": "assets/js/80.90ba31b0.js",
    "revision": "8436328ac99d30b81a4db5d458abd468"
  },
  {
    "url": "assets/js/81.42d4bcb4.js",
    "revision": "c24b72754a9b2953e0c1296cc84ca511"
  },
  {
    "url": "assets/js/82.9aba34ae.js",
    "revision": "cba6b06614d0ccbfffa1d75d16e2431e"
  },
  {
    "url": "assets/js/83.53ffb560.js",
    "revision": "68591bcd19d57bde5e139b585c764d62"
  },
  {
    "url": "assets/js/app.5e696442.js",
    "revision": "fa0d102ced8934b6d50709662fc6e695"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "ccf6847e41d5ecd7c43051c98fe7da50"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "bb6cc260490efa80b6b387ca720a07f1"
  },
  {
    "url": "charts/column/index.html",
    "revision": "93492f5f959cc585a6d62593ed1935ea"
  },
  {
    "url": "charts/index.html",
    "revision": "d3e32554cdd2f036ed8cbd134e877a19"
  },
  {
    "url": "charts/line/index.html",
    "revision": "06fa52bf21c290b82c2ec053c3ca7774"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "d9de7ec44ad3c8270cedc23e617409ec"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "36a1085c2648250b4422b39af497559f"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "75ffadd8ed8f844c9fd5d1c24c8fb8f4"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "70c17bdefb0f378ae044b893da7b7c39"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "25f2b3d6355cbd3f399a708d8ae75942"
  },
  {
    "url": "components/axes/index.html",
    "revision": "9b4004741899cde927b051f4157949cf"
  },
  {
    "url": "components/colors/index.html",
    "revision": "bc490273982d82d877dc9ae0d2fedd54"
  },
  {
    "url": "components/data-position/index.html",
    "revision": "a8af43d3fe3dec1962a3b009ee4b4e39"
  },
  {
    "url": "components/data/index.html",
    "revision": "0fcb276a9a83a3cde723c63c118af815"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "edd74694fb24ff0dc71678652f720624"
  },
  {
    "url": "components/heading/index.html",
    "revision": "e28269ea114bde38ef662ea838aa51a0"
  },
  {
    "url": "components/index.html",
    "revision": "355e6b2ddf5ef7081f3f2571b3dc97c7"
  },
  {
    "url": "components/labels/index.html",
    "revision": "d4d14284be3576d95aae21d0ad99b46d"
  },
  {
    "url": "components/legend/index.html",
    "revision": "c65ec9258c01bdc80e13154532244f4d"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "832405015f6215c3b728467b41c38c5b"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "0045179a891205ab337149c01d9acb2d"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "aa8a0468f856657a6a72b097d874362a"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "ac4e918a3ecd420f127e8d5e2d124d7e"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "5ac5e12a6ab4725f9a6787b557002337"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "10447607d4b733a24341e572e3fb2f48"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "d24f25bae07e8acde0765be91b70fbd0"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "fb088907278b6cf4d70ecd9a73f72efc"
  },
  {
    "url": "customization/basic-styling/index.html",
    "revision": "6c7baea588a50d12835677184820eb86"
  },
  {
    "url": "customization/index.html",
    "revision": "3308a1e6f6de8fc490d1588c2d906e8f"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "51c6a4ff0de5daa4b9d87619f7f0684b"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "d9877c277f625457e092dae35cbb01d1"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "714b155aa8735e3b0021c0bc869e4180"
  },
  {
    "url": "development/index.html",
    "revision": "ee002fc7ddffb6fa1670f487d0ad6556"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "3074ad5e9efe6c8bf295ac97ece1ee25"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "4287c317458be907daf17bc9ec75c2e9"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "f36e2b29ca739befa0563d59aec6da5e"
  },
  {
    "url": "docs/index.html",
    "revision": "eb5fd456c6b60692edfdaadc43554cb4"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "04b439515a75fc7823deb454a3286a22"
  },
  {
    "url": "docs/migrate-to-v1/index.html",
    "revision": "907791105240937be24f1b7cbb150534"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "9611907a1af12b9735d528d69374bada"
  },
  {
    "url": "examples/area/index.html",
    "revision": "cdcd1aab55aea49f8990341a9cbe0d21"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "1938017306107fedd5ea312ba4e0fb03"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "854191000ae42dced6962ebdbacef32d"
  },
  {
    "url": "examples/column/index.html",
    "revision": "b313a9277436d68e56eb28104de3f4d5"
  },
  {
    "url": "examples/index.html",
    "revision": "29d94c3b4e2f59714a685a768ea47d71"
  },
  {
    "url": "examples/line/index.html",
    "revision": "b31750c044c037ba2a49a02d7e3db5a0"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "a595a5e2f461c1b7f8ebf959f8f0ce22"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "272ac2bcf6ff21315fc9601e47406268"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "87bff8c218704cb311cccadf19f74ac7"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "09c5f79c96712b113457737992fbc86e"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "7bddec3caaf98877107b922a52a12bad"
  },
  {
    "url": "index.html",
    "revision": "93a904ae92ba4da2a47b9950491b429f"
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
