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
    "revision": "7869957d2a4ca32f6b3ffe395258fd00"
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
    "url": "assets/js/18.f72a553d.js",
    "revision": "bbd7b9bf8e49ae57257956c9bf961079"
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
    "url": "assets/js/25.81c0148a.js",
    "revision": "16fee6612182c638eeb447f38e355586"
  },
  {
    "url": "assets/js/26.16026cef.js",
    "revision": "a10e99c4be0cb81d3777ffab9a2ff858"
  },
  {
    "url": "assets/js/27.f3d9d879.js",
    "revision": "b3f10a67c14afb75ce992bb4716094db"
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
    "url": "assets/js/34.02afbb92.js",
    "revision": "d3277aad41a5dc3d3f6ffda9e2766f70"
  },
  {
    "url": "assets/js/35.165fc3f7.js",
    "revision": "0271fd88e7d0afeb3d547c4e0a41bd84"
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
    "url": "assets/js/43.17b0568b.js",
    "revision": "1055f055684dc40e80b0c4f26f5bc2eb"
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
    "url": "assets/js/57.f8e0c992.js",
    "revision": "7f87973056ea370d605e3074cf31190f"
  },
  {
    "url": "assets/js/58.fb632680.js",
    "revision": "d0071be6e3f95f03c78786325bd38067"
  },
  {
    "url": "assets/js/59.98e204f7.js",
    "revision": "40c3402b3f74744b3d83d39a47d1e768"
  },
  {
    "url": "assets/js/6.b9132f3a.js",
    "revision": "e9639601c606e10f4ef645d0672a8442"
  },
  {
    "url": "assets/js/60.7dff7425.js",
    "revision": "f5f9447c021502214c01f480812e6f86"
  },
  {
    "url": "assets/js/61.590ebeea.js",
    "revision": "cee5028ca9e7581633bdf4a676a0f093"
  },
  {
    "url": "assets/js/62.78746f3c.js",
    "revision": "6b1d29fe470a2f275e9ecfa3e9f408fc"
  },
  {
    "url": "assets/js/63.d992cfce.js",
    "revision": "d9660a3cf51ffa75c9e4c5947eb59cc9"
  },
  {
    "url": "assets/js/64.3da52456.js",
    "revision": "839d7a98737fe9f73d8324efb9d4d7f7"
  },
  {
    "url": "assets/js/65.712bb27d.js",
    "revision": "5f50a316ac53b109c45c079c4a0245a1"
  },
  {
    "url": "assets/js/66.3db9567a.js",
    "revision": "bf9ca8a9b51f9a164535d6cd23749461"
  },
  {
    "url": "assets/js/67.e6e9213c.js",
    "revision": "70f373af05b56f45e19656ddf8ccbfe7"
  },
  {
    "url": "assets/js/68.44d8c3df.js",
    "revision": "298b91e2aa7cd2c377c5639104422d0c"
  },
  {
    "url": "assets/js/69.6ecc8ca0.js",
    "revision": "4b982caa8bc6b0debb5c2614de021e0e"
  },
  {
    "url": "assets/js/7.b0fccd41.js",
    "revision": "902ee1339a8574679895e0224d125308"
  },
  {
    "url": "assets/js/70.95dcd217.js",
    "revision": "4f67b70624430165a5d9efb2036ddbdc"
  },
  {
    "url": "assets/js/71.c8357b71.js",
    "revision": "e69915fe0ea84bf34c965142f396201a"
  },
  {
    "url": "assets/js/72.50fdd8c1.js",
    "revision": "2ebe498a74fb01d742d66bf2ef9959ba"
  },
  {
    "url": "assets/js/73.84c2a1a7.js",
    "revision": "e31e2c65eeb147e9ca261a9d688519a2"
  },
  {
    "url": "assets/js/74.79ae8205.js",
    "revision": "befc6fac9360e456df5b65cd05ec5217"
  },
  {
    "url": "assets/js/75.f4cfee51.js",
    "revision": "1ee2c4c4d285a5c39df566a17804c87c"
  },
  {
    "url": "assets/js/76.bc7ecd16.js",
    "revision": "bbeab8aa25634acd13c260982efe884e"
  },
  {
    "url": "assets/js/77.c3d93599.js",
    "revision": "d63117f6c2e3eba2fc994a43a3b3e797"
  },
  {
    "url": "assets/js/78.3478bee2.js",
    "revision": "6713ee6c9b4214f3a69190454641ede9"
  },
  {
    "url": "assets/js/79.bb643254.js",
    "revision": "fa8d01efaadfbdb83bdf7ad601ecab0e"
  },
  {
    "url": "assets/js/80.f1f88fa2.js",
    "revision": "d22f735a1696d01266fb438faa2a3928"
  },
  {
    "url": "assets/js/81.90cd2ed3.js",
    "revision": "4b2685dd0ce5e64329e779bd5afea3df"
  },
  {
    "url": "assets/js/app.21c4f0b7.js",
    "revision": "b3af2783d2e132a2d92a90d900c3c9cd"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "4b4ffa7d6b6d46153ceb3558057d203e"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "159f21ed40b8d425dedb2550c72b79e5"
  },
  {
    "url": "charts/column/index.html",
    "revision": "2195d0eef87d6d5f1d88a045846188e3"
  },
  {
    "url": "charts/index.html",
    "revision": "250061c7149ff000421e91a060c12480"
  },
  {
    "url": "charts/line/index.html",
    "revision": "c0e386574752195d7f8b91f03403e817"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "b21efa7c8d5aa376e33186e94518f8f5"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "fa07443c0aec1fe2a46974fc770b2aee"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "f1acc1a4272914903d2811c4b8553e96"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "dd54686654324636d9a470d6f493915a"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "64cc65fc539ee52ad29891c91ff442d6"
  },
  {
    "url": "components/axes/index.html",
    "revision": "ba7b0a5d5133a57b6642360c3168c127"
  },
  {
    "url": "components/colors/index.html",
    "revision": "5bc4b732f5965bd2eb2fc62cefbc5ec1"
  },
  {
    "url": "components/data/index.html",
    "revision": "29448df9c07f1cea00a36d63e2410e8c"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "8d09b2b794908f8d9e5fe7872719fdf6"
  },
  {
    "url": "components/heading/index.html",
    "revision": "fa31fa2c5b9b2e58afb1161b589a2a8f"
  },
  {
    "url": "components/index.html",
    "revision": "abdbdcb8fee44f446c482cff3e3abfe3"
  },
  {
    "url": "components/labels/index.html",
    "revision": "edb2b79846fb174492fe7e478de2c557"
  },
  {
    "url": "components/legend/index.html",
    "revision": "63a64fe3a7cb1e6fb21a36ce5478bc46"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "e07976548c35c8b2aa432ae49e4b929c"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "5d68a8ed720a416fd151e2bde81a076c"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "aa6b5dfe1ea909a3825e4a878ff6e8d8"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "80c697804929ac9d86680c7e28130b20"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "3d4402a114bb214fced3e92ad31c6ddf"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "244654f6b6cc6e79a681944fa0c15b34"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "c6b820c6a033135e4f0f172ef96d93c3"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "459d55677d43e0bdd530aa4bafb53743"
  },
  {
    "url": "customization/basic-styling/index.html",
    "revision": "71fe26999480d145e7f9c3dd4d0ecd1f"
  },
  {
    "url": "customization/index.html",
    "revision": "e4f241988aa30cc5e15d4e42ce564e0c"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "7c791473cc840e7792ebf9cd295ec0cd"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "161f4acec5a0fde4865b3bdf11321789"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "eb086183490f0cda951496d342869332"
  },
  {
    "url": "development/index.html",
    "revision": "c48f6820bcc5b6f65fc628a0d96b4704"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "0de13b198cf976bbe38ab4f83a066590"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "22cfc7ada919a0c66841208cd2e4b12e"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "673676ed224dbf9718caa74afb11892b"
  },
  {
    "url": "docs/index.html",
    "revision": "a68bb5fe06626331c7048458175f789d"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "1c12017edd7a8ef30dcce1669affa783"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "2213adb583086bc1d0e6d62951313e2f"
  },
  {
    "url": "examples/area/index.html",
    "revision": "d4c7cf08055aaa74d0ac429903a42f1c"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "604a1988dd05fc192bafa434ce02e115"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "128fb0ca2d624c465867cc50eee077ef"
  },
  {
    "url": "examples/column/index.html",
    "revision": "fb3ab6b7ffa65e35179ea988cd812898"
  },
  {
    "url": "examples/index.html",
    "revision": "d4234ad12b7b2c92cece10695e9f749f"
  },
  {
    "url": "examples/line/index.html",
    "revision": "4767e93d4e5ab6b5ae619613d329b36a"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "fd55566ff525dd43d7d022a6da28093f"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "f77dbe3f71c4cd5782bbb8549c5cc691"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "3968e3086d12835b1861f3d9f9a5ad8e"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "55015af01dd8120d2b0f55cc5b585ea7"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "d85605779fc5244a42e71a28816b65d5"
  },
  {
    "url": "index.html",
    "revision": "27bbec470235f4e1ae7865bcf66f050f"
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
