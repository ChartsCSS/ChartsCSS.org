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
    "revision": "8e1d15aa35dd5fc579b65ab74ac1dfeb"
  },
  {
    "url": "assets/css/0.styles.9cf88a27.css",
    "revision": "c020cb6ed19c9463bf6f07706d33975f"
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
    "url": "assets/js/18.9aec2966.js",
    "revision": "df56a2eadebcca7e6b7a59525cbf5e06"
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
    "url": "assets/js/20.66e235e9.js",
    "revision": "75409c2dec505ca88f44209f59a88c8b"
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
    "url": "assets/js/25.d657dfcf.js",
    "revision": "be623d3469725c94da6540a3e7feae33"
  },
  {
    "url": "assets/js/26.8a3ff77c.js",
    "revision": "6136e47c970518bba97515abb8cab69b"
  },
  {
    "url": "assets/js/27.8c0f34f0.js",
    "revision": "3ecdfb784598287c35fbc1c45b2e937c"
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
    "url": "assets/js/32.ce69fa8a.js",
    "revision": "a423599cfed20d9aa7c9331b3fed43df"
  },
  {
    "url": "assets/js/33.13414664.js",
    "revision": "87a184c342c0c768ad546eca5d117e67"
  },
  {
    "url": "assets/js/34.4820948e.js",
    "revision": "be540fdb5931760db0715537463b966d"
  },
  {
    "url": "assets/js/35.e0962902.js",
    "revision": "fbf8ca09f8c5369b0cb92e26b01294df"
  },
  {
    "url": "assets/js/36.116aeee2.js",
    "revision": "9d38adb9053901835c148dd2b807b825"
  },
  {
    "url": "assets/js/37.95931d68.js",
    "revision": "1d03d1743746dbe848300560433cbd52"
  },
  {
    "url": "assets/js/38.f024fc3c.js",
    "revision": "1a207e3914e25fb98faa4f767f201007"
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
    "url": "assets/js/42.2aeaef9f.js",
    "revision": "8801c8333e917350c66978b68c2cb03d"
  },
  {
    "url": "assets/js/43.1b6b700e.js",
    "revision": "af526777e81f22dd0a084c9b2509dae5"
  },
  {
    "url": "assets/js/44.3c615703.js",
    "revision": "1c07cdc75f5b2f06b769a8369a712b5f"
  },
  {
    "url": "assets/js/45.f128f750.js",
    "revision": "d453d6677889eab00e8b6ab70b79c735"
  },
  {
    "url": "assets/js/46.b2e92422.js",
    "revision": "713555c0adb4be66cce7737507ea9167"
  },
  {
    "url": "assets/js/47.75d2979c.js",
    "revision": "821fe12117d969453c6e1d3a461f7c3f"
  },
  {
    "url": "assets/js/48.9af6bb96.js",
    "revision": "cdbc88ce8f72fea108ea2cb99ba19835"
  },
  {
    "url": "assets/js/49.81fd27d2.js",
    "revision": "c1d3fa059adc06116488988b81a90a47"
  },
  {
    "url": "assets/js/5.cda8c120.js",
    "revision": "7c95a6bb55df5effba2cc4694ba69895"
  },
  {
    "url": "assets/js/50.34bfe245.js",
    "revision": "edd191bbf282b26d2d465927d4ccfaa5"
  },
  {
    "url": "assets/js/51.cb9a0de4.js",
    "revision": "37fb0e63b57099484359997c07447bb8"
  },
  {
    "url": "assets/js/52.3fa9ffa4.js",
    "revision": "86f05289ff3c01e4ebd5fa655be33b4a"
  },
  {
    "url": "assets/js/53.85eea11b.js",
    "revision": "1819cba6a52a12a75b9ccad130fd3044"
  },
  {
    "url": "assets/js/54.34189729.js",
    "revision": "81b6b9dfd776bdeb894da739bfc127bc"
  },
  {
    "url": "assets/js/55.09e19f9e.js",
    "revision": "a022b1e14428be1bb541bdc37a101120"
  },
  {
    "url": "assets/js/56.766f088c.js",
    "revision": "50012a2d28d833c0d1fa7b980cbea696"
  },
  {
    "url": "assets/js/57.6c858eed.js",
    "revision": "f17d571552348b13413d2e975535b018"
  },
  {
    "url": "assets/js/58.fb632680.js",
    "revision": "d0071be6e3f95f03c78786325bd38067"
  },
  {
    "url": "assets/js/59.36912b09.js",
    "revision": "1c676407d3adda0d37be72bccd2e2230"
  },
  {
    "url": "assets/js/6.b9132f3a.js",
    "revision": "e9639601c606e10f4ef645d0672a8442"
  },
  {
    "url": "assets/js/60.50e512d5.js",
    "revision": "09f9aff9ee4a353dbc018d1c70a6fb2b"
  },
  {
    "url": "assets/js/61.05157dcd.js",
    "revision": "817a88d01f0473babf017b4b2886d932"
  },
  {
    "url": "assets/js/62.bc789683.js",
    "revision": "7c362ba3cce1399f266b7f0adced3c9c"
  },
  {
    "url": "assets/js/63.ad7a57f8.js",
    "revision": "1ef1da36b9c7840fad4da5c4eb705742"
  },
  {
    "url": "assets/js/64.cdcf86e5.js",
    "revision": "eebfe351eb7575499f39cdafd3e17688"
  },
  {
    "url": "assets/js/65.0bfbf019.js",
    "revision": "68bc6ab70155500001fc7440f63e52ad"
  },
  {
    "url": "assets/js/66.c3ea2c5e.js",
    "revision": "db2cc30462936ad0b3da32020a18790b"
  },
  {
    "url": "assets/js/67.3a2656fb.js",
    "revision": "3bdc59f52d54fc23e7e0a5e6791e4fe6"
  },
  {
    "url": "assets/js/68.507bab91.js",
    "revision": "0a23c39b20aa3101e865804c0bad690e"
  },
  {
    "url": "assets/js/69.6fc82ac9.js",
    "revision": "4d19c50f7eddc056be2b542b381c1f4f"
  },
  {
    "url": "assets/js/7.b0fccd41.js",
    "revision": "902ee1339a8574679895e0224d125308"
  },
  {
    "url": "assets/js/70.2dfcabb4.js",
    "revision": "803bff25a2e159df8fc8c00d989c88bc"
  },
  {
    "url": "assets/js/71.7468ad5f.js",
    "revision": "dec50485a228ae87697c90e8aeab7c32"
  },
  {
    "url": "assets/js/72.43f06615.js",
    "revision": "8576686b5238f68753decc4759aecb34"
  },
  {
    "url": "assets/js/73.a9adbfb2.js",
    "revision": "bf5520cd60e8a4044948bfeba948959a"
  },
  {
    "url": "assets/js/74.c2c89c16.js",
    "revision": "9ac48154aeeaf780202c827a425f0723"
  },
  {
    "url": "assets/js/75.0609bf15.js",
    "revision": "37a37fe3c5b8c3bb71493e59062cdeba"
  },
  {
    "url": "assets/js/76.c786ff4f.js",
    "revision": "41ae2fd7fd8fbaba0bde2c7e6f0460aa"
  },
  {
    "url": "assets/js/77.f72cbb58.js",
    "revision": "bde288655bd06e96f93682f0788dedcb"
  },
  {
    "url": "assets/js/78.2f4407cd.js",
    "revision": "8ff3e4104d781a6c3e823b3b326a74a1"
  },
  {
    "url": "assets/js/79.04153914.js",
    "revision": "7cad927591107f2d095377c4fe5f6a2b"
  },
  {
    "url": "assets/js/80.cca950e9.js",
    "revision": "bff4ba316a2cae86748ed4b9460b0dd2"
  },
  {
    "url": "assets/js/app.f19f9fbc.js",
    "revision": "ec42f00d4ea83585e334b22241c0e250"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "9f7ccec38dc70d707922ec2099e5fba3"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "3cdf6a1a58437150f79f8e3ab20f457c"
  },
  {
    "url": "charts/column/index.html",
    "revision": "0f0b2e4011657c1c36be25b2332526cd"
  },
  {
    "url": "charts/index.html",
    "revision": "6f62d60be189681dfb72eae0928eafaa"
  },
  {
    "url": "charts/line/index.html",
    "revision": "b4e99405bce3c901bda7c8d0ab862f24"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "614f5e053ec3c29e140ae5fdf177d24e"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "dfaf91d5b96117a73fa28de65378c508"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "c4fecd6617badc2b03f2f664c27c8ef9"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "4ae29bdc864010f821db42b2a5918f1d"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "ef222714007940b43d16d270fe87542a"
  },
  {
    "url": "components/axes/index.html",
    "revision": "030d99e5d022808249bbdd7ea1739403"
  },
  {
    "url": "components/colors/index.html",
    "revision": "3e3315070b90a1aa8ab4383142333e49"
  },
  {
    "url": "components/data/index.html",
    "revision": "4556c656382d4551b6d73987ee850c12"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "181a1f3740854a9249556f0b94a9b10d"
  },
  {
    "url": "components/heading/index.html",
    "revision": "0500de9c13574ddb6e5d02fe666ac96f"
  },
  {
    "url": "components/index.html",
    "revision": "de0b008b142cf46a8bc85ac1c0b9217d"
  },
  {
    "url": "components/labels/index.html",
    "revision": "410ef328a028b235d4e56d67766d4c7e"
  },
  {
    "url": "components/legend/index.html",
    "revision": "b6e125eee5c5f2d560ed30428f6ff52c"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "e7fcc3c646272f97b16a9b0f5dba19ba"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "fc34821c1a21f3d0b46c51a1ee6e7af7"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "e7183de34d0ae4044b9154d7b9112ed8"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "86aaf6768e9ae9aaae22985e11751cdd"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "ac713810f4f37fc9f2cede899bf9d3d4"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "cc4263f6a2fb5b04e916456f93e98d74"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "9d93471d2502c03bc8ab817644d77a40"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "8cb1397f90e626edc42b8c7ca5b4cd1a"
  },
  {
    "url": "customization/index.html",
    "revision": "30f03180c2e456f3ff0fafd2dcbf3000"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "5c57cbcd5dbff29e90fc62820c4a9bac"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "2cfdee2a6b08bb1695089073203ae4ab"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "b3706f6c1a2bc24afc91826dc176316a"
  },
  {
    "url": "development/index.html",
    "revision": "601c8396f30285fa72b0d53795d4edd3"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "38d818bc34144963197f3386116fa89d"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "d972eea7185a81f4d6e3498dea416cff"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "123271bb6a8116bd79fdfd3efa681aaf"
  },
  {
    "url": "docs/index.html",
    "revision": "32c7f99574f0157a73b4e2a628746ed1"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "630ea90e862f0be34002c72a4d0a2a6c"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "ee24b68d191344c50f0d9a431d140da3"
  },
  {
    "url": "examples/area/index.html",
    "revision": "f6b8c560865d4892ea51f0c4cc770543"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "a5a16f3d9e7b0af173fbc31238d9679c"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "c5d266bf729909b56223835d41ea627d"
  },
  {
    "url": "examples/column/index.html",
    "revision": "472737c4f184f9836a7788f597457c81"
  },
  {
    "url": "examples/index.html",
    "revision": "28cde40a40bd2a9fa8bcf2726dacff8e"
  },
  {
    "url": "examples/line/index.html",
    "revision": "e8147868aa0f29db71369459bbd6e756"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "ac20906dc5303bce770734b271676ecc"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "d7ca8b9543a8c13dc1d8bec2611effaa"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "4d2c41cea4714ae35d53edca0baf9313"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "503d6abb57aa573abd6ae8890464d1b7"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "14a91ce815574832e459e3d65a82442c"
  },
  {
    "url": "index.html",
    "revision": "fdbc25aa852318093f552b50f00deae3"
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
