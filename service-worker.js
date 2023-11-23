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
    "revision": "c40f1dc43496865a38f9e38e444b9b6f"
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
    "url": "assets/js/18.d0513414.js",
    "revision": "77661dfc411301c0ce0f969db6cba5ea"
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
    "url": "assets/js/40.1184367a.js",
    "revision": "cd57f3d3f00a6b5f78b5c2546402b4db"
  },
  {
    "url": "assets/js/41.ffc3eb93.js",
    "revision": "2f755aae167e25dda5bb7e51e0ff5e3c"
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
    "url": "assets/js/50.22fc4121.js",
    "revision": "49dbc7ab44a196a3bc00f6a3f99e1923"
  },
  {
    "url": "assets/js/51.7e8ea569.js",
    "revision": "eb200c5129dd5cc2cf7ef93b7c4eae4e"
  },
  {
    "url": "assets/js/52.b4496fcb.js",
    "revision": "8ccb6b8c53733ba2cf193b43496627f6"
  },
  {
    "url": "assets/js/53.28b707f6.js",
    "revision": "4ff2f5a5939fa95a0e802da73a5f19de"
  },
  {
    "url": "assets/js/54.55edd8be.js",
    "revision": "5c196ef9d8abb781722a3d4fe6414dee"
  },
  {
    "url": "assets/js/55.3064dce9.js",
    "revision": "1da137b351ae97e38042d923857053d4"
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
    "url": "assets/js/59.c49680d0.js",
    "revision": "2fe259bbb84e2b34df5daeb5cd1e8cf9"
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
    "url": "assets/js/68.849bd234.js",
    "revision": "0b3348ad6517b059916053190c376867"
  },
  {
    "url": "assets/js/69.0ee18070.js",
    "revision": "0749f203f3cc4ac58a0a280e62145914"
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
    "url": "assets/js/74.703629b8.js",
    "revision": "ad1cd513a77a93a0dd6dad307c6e56a2"
  },
  {
    "url": "assets/js/75.c36b461b.js",
    "revision": "a25d147a6cab0538bdf15f0c9d8bec39"
  },
  {
    "url": "assets/js/76.afc36ee4.js",
    "revision": "e507559454b8b1c4c4582b13a9703ba7"
  },
  {
    "url": "assets/js/77.6d75fbbc.js",
    "revision": "3e76cfb52a5d36527f7e2829261e2a19"
  },
  {
    "url": "assets/js/78.ff02f01b.js",
    "revision": "63d4f79e927d3140fa02665fa8c3ceda"
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
    "url": "assets/js/app.25d456d7.js",
    "revision": "f078793a57fae0ba55a7ecc14a015ce5"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "9ee8645a9aa74e00387985bfc70c958d"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "080aa9142ce8a6f8d859d8325d06e45c"
  },
  {
    "url": "charts/column/index.html",
    "revision": "6136ef6a51f071c16b2cde54b4831658"
  },
  {
    "url": "charts/index.html",
    "revision": "a391dd35efa3e653b4f650fc97b156ee"
  },
  {
    "url": "charts/line/index.html",
    "revision": "3a0e25ef6eeb9164b64b5f123ee9bbc8"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "d8d5afc05957c2aaca25d355ce862bbd"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "4d65473f83d55b2ba1cc2f40dfde2abf"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "a5a6830ae015a13cf354b7c532a98a34"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "ca771c4cb9cc3296fc9a7464eebb6665"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "19de23857e0fa19255c73cc9be0352e1"
  },
  {
    "url": "components/axes/index.html",
    "revision": "7a1e75aa46f8ef2cbdc72d7c384b5d67"
  },
  {
    "url": "components/colors/index.html",
    "revision": "534728fe504962021ed80ae3080323d6"
  },
  {
    "url": "components/data-position/index.html",
    "revision": "6854f8cb8b249562e329fc9e3f79397a"
  },
  {
    "url": "components/data/index.html",
    "revision": "d23a47d9d2f5e67c6d396b286d14ae42"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "71b95d17c0c8b5df7c88a69d16b036a6"
  },
  {
    "url": "components/heading/index.html",
    "revision": "ae4655676c2a39e6bea17fcb65bb9121"
  },
  {
    "url": "components/index.html",
    "revision": "e722cbc013a51c90c8506ab176abcdf0"
  },
  {
    "url": "components/labels/index.html",
    "revision": "f4b2a3e02e872f5cdad4d9062e05691c"
  },
  {
    "url": "components/legend/index.html",
    "revision": "d7c6b25c0f88229d8b4b1aa9daeca326"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "c8356611d7e07dacac477c8283260b48"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "d826e108dadde399665ae6c5d14d2187"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "b6572da49bd8fd99dcf0d33317f2ff61"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "f6415770694853c85243549fbc81f4c4"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "39629bed2b0e72dc3055b6203df943ec"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "78fda623f95f9f90de063875d36385e2"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "1780b1191e2489c20e0776fdf2c2f129"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "9d4f6f8786d820ebb1d5e52effffa86f"
  },
  {
    "url": "customization/basic-styling/index.html",
    "revision": "f0f97f7ce792acef2a951f2c7a34b131"
  },
  {
    "url": "customization/index.html",
    "revision": "4b16f8cd659e096efb5e682d5828ca53"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "d0828fae0b2c6da511b292ac957d41df"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "485e3d8e90fde82081a84aa9efab677a"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "5eb3b2e3eb3a8a6a4d92c743514d4e7e"
  },
  {
    "url": "development/index.html",
    "revision": "d6c0cef3b5f648d5df5d147d4399d5b8"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "154408aa6cab27e8ede6f50e611f9370"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "21615d0c29bf8951e26c899455e16f78"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "2d518e02aef532f2f95688c2d93748e4"
  },
  {
    "url": "docs/index.html",
    "revision": "cda82ef824955c69fe0e41ed2e7890b0"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "9dba02d50d748faebbcd1687d6457bec"
  },
  {
    "url": "docs/migrate-to-v1/index.html",
    "revision": "67d964f1422685fa7f14ebfc399839c7"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "47e0dbe1535fadd4821fd50e7fb8ad74"
  },
  {
    "url": "examples/area/index.html",
    "revision": "af219f77a5ee7746ac057e979517daf6"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "cdd1d80c5ab41ad6cca0129f5bf8c35f"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "e3a35dcd7a0c68c07d71f0034986ed4b"
  },
  {
    "url": "examples/column/index.html",
    "revision": "eab7ce1408a9628f323e3907bdb3ee21"
  },
  {
    "url": "examples/index.html",
    "revision": "bbb9b5e221800a4de5d4af6f42225482"
  },
  {
    "url": "examples/line/index.html",
    "revision": "d5dc2b43054c3f1a208bcf6eb929ad68"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "ec35ccf7f58f01ac63add625af6d311e"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "8688d28aba8c4f94fce70b6d483e502f"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "405f82e94a2546b95432e1d9a968b14c"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "fe95a841596e749f8fcab5b172f73646"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "1b9c034f4dc8f0d564a8a84558d23859"
  },
  {
    "url": "index.html",
    "revision": "12c6ce1961d7c6223f8a8b2588c886e5"
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
