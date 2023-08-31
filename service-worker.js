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
    "revision": "115829855e506059ecc5978d48ab8f96"
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
    "url": "assets/js/18.9c1ae2f2.js",
    "revision": "dd0a3e319c7889f7bf3b8178de194ac4"
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
    "url": "assets/js/33.5afa941b.js",
    "revision": "6ef19e25464aa228f94dfcb5c7d5e381"
  },
  {
    "url": "assets/js/34.53f11c7e.js",
    "revision": "cec6dc63730ee374e7e2c1df07808f05"
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
    "url": "assets/js/53.27c751ff.js",
    "revision": "80e1929c4bee506ed0455c3f688892fd"
  },
  {
    "url": "assets/js/54.b7b950ef.js",
    "revision": "18d624d5ca2c7ef17fd5f1dd2a49bc96"
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
    "url": "assets/js/64.76b6e481.js",
    "revision": "5a63df8b46ebec47ef7a63caa112fa9e"
  },
  {
    "url": "assets/js/65.08924562.js",
    "revision": "e4822fbe51b3ab4b52c558f17cc8784c"
  },
  {
    "url": "assets/js/66.c7f204ff.js",
    "revision": "45df43ae1f65d1b1a3d1693716501b86"
  },
  {
    "url": "assets/js/67.6373a60c.js",
    "revision": "ebe88274b903548fca683d463924ee10"
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
    "url": "assets/js/70.6ddbd392.js",
    "revision": "c58e9ddac359a64e7ff7805506938e42"
  },
  {
    "url": "assets/js/71.2dfaa2c8.js",
    "revision": "90dc65be6c1f5c0ebb7136ff4d65a400"
  },
  {
    "url": "assets/js/72.43f06615.js",
    "revision": "8576686b5238f68753decc4759aecb34"
  },
  {
    "url": "assets/js/73.fcb52d39.js",
    "revision": "359d2491bce4802e3ec91b7f094581c9"
  },
  {
    "url": "assets/js/74.dbacc3b0.js",
    "revision": "d5c23b28160aa0a3fa904c7ae388b13e"
  },
  {
    "url": "assets/js/75.d1685710.js",
    "revision": "515fd3c189ba51e3e908cc448572eb28"
  },
  {
    "url": "assets/js/76.c786ff4f.js",
    "revision": "41ae2fd7fd8fbaba0bde2c7e6f0460aa"
  },
  {
    "url": "assets/js/77.38171903.js",
    "revision": "984cb6b2d69cf416b13f69d4eb61097f"
  },
  {
    "url": "assets/js/78.b86ff0af.js",
    "revision": "4dcd09af6502538883e805c0740863e4"
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
    "url": "assets/js/app.3cd786ff.js",
    "revision": "9deae2ebc1b950f23cd9033073751ba9"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "dabc4394b9ad9197d786575c1b7d4719"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "4ed2df9e1fb3be735b58bb0a64f26f75"
  },
  {
    "url": "charts/column/index.html",
    "revision": "1e825f5e10f7b04f075731f0be5ca75f"
  },
  {
    "url": "charts/index.html",
    "revision": "101a4b656dce840cc4c48d76d27d777c"
  },
  {
    "url": "charts/line/index.html",
    "revision": "4195a035a8f4d4455fb35c64a8f5023b"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "d61c01c4762bfc82b1efb5283ec59e7b"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "b56e65afe6eac25801d6005f5904478d"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "e90e6fe625859c688caadfe7043fa7ee"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "b3ca895473b88c92fbf0babaabb040f4"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "a4fe339ad54ff1a8a071de3533987faf"
  },
  {
    "url": "components/axes/index.html",
    "revision": "9f6ca88fd29e5c7d07bede10f89d18ef"
  },
  {
    "url": "components/colors/index.html",
    "revision": "b7719e79b8ac6f2e5f8455a505f82817"
  },
  {
    "url": "components/data/index.html",
    "revision": "56f22dff4a33217b6800f81caf7b9e28"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "4f8c6da82d8181e6b601e1cb74f4a396"
  },
  {
    "url": "components/heading/index.html",
    "revision": "aee3d83b9b34852b9b6bd1ebf004c0d4"
  },
  {
    "url": "components/index.html",
    "revision": "bdef6a5869c678c3311dcc7aeecc6c0c"
  },
  {
    "url": "components/labels/index.html",
    "revision": "b6d710114f3b5696a69f005204190c7f"
  },
  {
    "url": "components/legend/index.html",
    "revision": "d94a869f35e053b0816883095468230a"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "bc7e6165d432bd15f319ab60e56f93ae"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "3ebfd10e86c77f3b1a12417b39db42ee"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "52687416a3e4180d4bb96d2866d1ac64"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "4b1bb8461d7537c8434535c885cd517e"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "5e65aaddf5c7508af93eb374807f57ab"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "2ba8184c8e96dc3ac6edf8dba2f32b9d"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "97c95447fbcfecbecf6d431e424abcd6"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "2fa097502d38ec1343edf80d249386d5"
  },
  {
    "url": "customization/index.html",
    "revision": "171c4cd183682b9a72fa1a85aa59705c"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "3ba9d861a84c3cb644b20b7b52fe840a"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "b11e461f6ba0f3ad95d766b888dd844f"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "fe498a45638f0a361233ba8a48a6cbfd"
  },
  {
    "url": "development/index.html",
    "revision": "1033d61da5fca1c697160e5a7794972e"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "25dad298162331291f11967d0ae63988"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "815e95bff41cab9c6bfebbb784812ab7"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "eeb8cd0214cfd55fb6e68367e535fb5e"
  },
  {
    "url": "docs/index.html",
    "revision": "45f642c0e0daf633b86e04d0aa05ae6d"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "9f926909be65f84977b8886ef72f230b"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "a5dde346079e684281c1df158b162980"
  },
  {
    "url": "examples/area/index.html",
    "revision": "7cdcfaacb0f444ee4a97c452060531d5"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "43f2f0502195883b344c8ee349124503"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "52e16b2815dbf589f2b24749a720ae30"
  },
  {
    "url": "examples/column/index.html",
    "revision": "a114a5c47c9d56a69169270190407d5b"
  },
  {
    "url": "examples/index.html",
    "revision": "e9693c1f27ccfcd6ccc95409dbcc35a1"
  },
  {
    "url": "examples/line/index.html",
    "revision": "e8aae333d43154231b8ce6efd3e93a9b"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "1f804df2a5ffe0e25a8f14a3bb921f33"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "6f2875341ad9b1956473b58ef558abdf"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "1ffc5613e2231ca41f83036ca3c8dae6"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "48fdb5e4b6c6e2ff58d5dbc20d4da2f1"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "05cdb45b67c1ab8039c7dc0a3833aaec"
  },
  {
    "url": "index.html",
    "revision": "16a91ebcdcf367361dcbb59267fb2e46"
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
