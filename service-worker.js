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
    "revision": "606df3ec6756f40fc587778194178ebd"
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
    "url": "assets/js/18.fab15dae.js",
    "revision": "b550386f42e5ec9ca15e679d16536d37"
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
    "url": "assets/js/51.f88b2227.js",
    "revision": "0d333fbbb86710aaa6adedb3d4c99ab9"
  },
  {
    "url": "assets/js/52.83e0b3d9.js",
    "revision": "c130a3655b30b4cc0a0e0cbbdc285c13"
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
    "url": "assets/js/64.329daaf2.js",
    "revision": "f7411ebbd1f4c534c768d0ef1b804437"
  },
  {
    "url": "assets/js/65.7a950467.js",
    "revision": "199fb2919a76ff082a821e64a77aa571"
  },
  {
    "url": "assets/js/66.e43cfc49.js",
    "revision": "dde8b60b400a5cd260ee154963975979"
  },
  {
    "url": "assets/js/67.811fe3f5.js",
    "revision": "aa20b57513d0a5064bc62efaea774f81"
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
    "url": "assets/js/app.0044e80d.js",
    "revision": "fd4c84fefb976d469880f2731153684d"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "afb81ab43b3847477886aca9bc8894c2"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "9bf0b1085147f6bdd009ea0db88d8d09"
  },
  {
    "url": "charts/column/index.html",
    "revision": "8784208f5beb4b8f8a3080713de231ba"
  },
  {
    "url": "charts/index.html",
    "revision": "c7de8b42dc6f0709816f7321d69b132d"
  },
  {
    "url": "charts/line/index.html",
    "revision": "6d296868661d7e43adbc7d94c3ceae7c"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "03e148201407118966b1ca3d22da74b3"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "ea03daf5ca9d7342b5059da66b02a462"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "f091d2a4b70ae950776e942d17b451b1"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "0a6ffc7f7d586d073ef5e5407a73abb7"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "31f7ffbd57004e64b6efab28a3a0059c"
  },
  {
    "url": "components/axes/index.html",
    "revision": "05a099c61667fbd904a17afd1ff67467"
  },
  {
    "url": "components/colors/index.html",
    "revision": "679ba622f7986f23fe3327f2665acb6c"
  },
  {
    "url": "components/data-position/index.html",
    "revision": "c36c56b2e7d9752da057888a8c9acc00"
  },
  {
    "url": "components/data/index.html",
    "revision": "d1feccc492c8d07498fafcd41d2ab7b9"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "db39694941fdbb9466314b964e3e18f2"
  },
  {
    "url": "components/heading/index.html",
    "revision": "9b800a34a16e31a245414d5bcb70f048"
  },
  {
    "url": "components/index.html",
    "revision": "832d78302264ffba3459080e24eaf083"
  },
  {
    "url": "components/labels/index.html",
    "revision": "ea3a1a13477ba5b687ab99843d42e200"
  },
  {
    "url": "components/legend/index.html",
    "revision": "6bfdfeed3663c6aee79c518f95dbed57"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "54797878e55941351eb1358929d67b6d"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "5f6942d49d1001b07fac03135092bdbb"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "42cbb3d6b6f0c37798feeeaa2105e9d4"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "f42d62fa0cbff0ca4b1f4665868f9369"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "c20a99e03549a2b6155844e7b022626b"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "d521ca41c4671acbc025ed1c81e8711a"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "6f33da61b17aa287b354dd48bb57c07f"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "058857729bc044755834a8a35c22d9ab"
  },
  {
    "url": "customization/basic-styling/index.html",
    "revision": "27fa0bc21496dc3dcc82e15f93ad573f"
  },
  {
    "url": "customization/index.html",
    "revision": "28987cad18dcb66198010a86b95ec15b"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "e614d905fd57050268019052b02c269a"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "6978a3f230a35855ee092bb8d778241b"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "a5754c3b7d3d83657fb19a8b911289b2"
  },
  {
    "url": "development/index.html",
    "revision": "84363d707201692fd1d090e6f75168b9"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "57bd7f982c0c4985cc9de130d5b38473"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "8058fb85b085d9a2ab555fe22ee95b74"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "e35cca53c413590d15334b2ccf038e14"
  },
  {
    "url": "docs/index.html",
    "revision": "c2e32582d533e4954049639b71be00c8"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "ce1a9b16efad1fabdbbbca5b97063c45"
  },
  {
    "url": "docs/migrate-to-v1/index.html",
    "revision": "53803e417a2e193a8d4e0f063bbdd007"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "04d197db7d681993964c6fedd6d676ec"
  },
  {
    "url": "examples/area/index.html",
    "revision": "cf65119ea8a86008ebfca6d204f95a39"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "83475b75f87578b20075c49d3a726a86"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "3b5be3c8d219e245f034cc5f81e5b6e9"
  },
  {
    "url": "examples/column/index.html",
    "revision": "1528c6f4d9724aab9091e96c02b58514"
  },
  {
    "url": "examples/index.html",
    "revision": "e5bb37c76e2d5a58c320f16ec905978e"
  },
  {
    "url": "examples/line/index.html",
    "revision": "ec87382dcea4d397e431688d6243a714"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "414d7df70e973184b663c7bd0446cbe7"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "a30b202628a0d28dac2f8106b7d159a3"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "a4a14c22b91787412b0fc7d357813aca"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "d0275c10d8db16d6e2085b27ec5f7fcf"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "fd88f35b0c816ec47075f123a4ec3340"
  },
  {
    "url": "index.html",
    "revision": "aefca89a282c6f56be8d9f0d94edc016"
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
