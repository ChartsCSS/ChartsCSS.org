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
    "revision": "18218c461e9ac6245ccc52ba3866d4db"
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
    "url": "assets/js/32.08e716bb.js",
    "revision": "e550bfeb0894cc6fd703f589106bb49d"
  },
  {
    "url": "assets/js/33.7e5a5059.js",
    "revision": "7431d5e0c9f6c639a373be9a790f8585"
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
    "url": "assets/js/76.85f897e8.js",
    "revision": "b6c0370c9353270d9bedd05411c627fe"
  },
  {
    "url": "assets/js/77.b819958d.js",
    "revision": "a8bbdf51385e5a20dfb1973e9de76cca"
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
    "url": "assets/js/app.fa890cde.js",
    "revision": "3ba9a09acf8948091871390cda9b3051"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "e04b225cfca69142ff51b34286f2d4c5"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "a436037ac52cb89257f9bc20bae1abc2"
  },
  {
    "url": "charts/column/index.html",
    "revision": "75d46cdab77e61a6867189b38baf7299"
  },
  {
    "url": "charts/index.html",
    "revision": "a465b6f85ea0be30407d612805f38499"
  },
  {
    "url": "charts/line/index.html",
    "revision": "db1ab53cef2505e59be5b5008cac0cae"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "9c3e8bcf26df8b59992284ea0d10ae7d"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "0e10f662809aed710523f916bb7940e0"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "34dfd97a514be60aa684fee4e2cb2cb5"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "23c0fbd158c89d759aee06b7c111a549"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "900b7a75738c6965ef3b06f9c9f6bd15"
  },
  {
    "url": "components/axes/index.html",
    "revision": "2c04ad85e5468e32afe550a9f9a0d3f0"
  },
  {
    "url": "components/colors/index.html",
    "revision": "160f3c3c54666b889e1d4ee4c6c29a1d"
  },
  {
    "url": "components/data/index.html",
    "revision": "42a3053cbe7f70abb768454aaa82c7e5"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "d6e158ed5dd2265c34d97639aeae766a"
  },
  {
    "url": "components/heading/index.html",
    "revision": "b4cea9b95c566fa14294c971b9ce58bc"
  },
  {
    "url": "components/index.html",
    "revision": "2938794627590396411f247bae67729f"
  },
  {
    "url": "components/labels/index.html",
    "revision": "6a56a03ebd17908f474d7b05fc8eef8d"
  },
  {
    "url": "components/legend/index.html",
    "revision": "46c70a45d06fdb6b2f3b409ed8efaa7d"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "f100350ae7637eb9073e85ea2d6b645d"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "d6a316ce204352a7ccca22bf7c2ed35e"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "c73f3418416e1dca321ad79b6752db5c"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "8401da24093d6627c8f14a97276cfd13"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "ea6ff0930cb25530e7d0ee261f87f3b1"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "8bb7dc53c635b10dbd93d6a90dd7e0f3"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "102e459456fd00017f7dd44666312d33"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "b1ac562926f7c8545c11b0fabf17ceff"
  },
  {
    "url": "customization/index.html",
    "revision": "878e0610e4c415402bbd7f74c55aa120"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "d9436741213495ed20982d7189af53fd"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "2c8086ba590cf40c1b9f2791d2c3ad87"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "4d46cd8ee115b671c494b9a51b8f40f2"
  },
  {
    "url": "development/index.html",
    "revision": "8d50916ee446023c5a75f8cdf4de635a"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "3c8f995a898e98afffa9f58758a5abea"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "e24bca28ea4e4d8124c286ceb17fb197"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "29e2df4a137582284015eb596e318609"
  },
  {
    "url": "docs/index.html",
    "revision": "af2ca14bf802c21971409ecfe9cd7779"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "fff4d5faa7087bc9d5a2a142f409c492"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "c852e25a7fb8b0ea0f517c7f4069fd96"
  },
  {
    "url": "examples/area/index.html",
    "revision": "f68b8c419a840eb6f91e945114a0edd9"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "3430f21bf924b5b62dbf4f55cec34094"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "06128efe7894079b63dadebe3ecb0f91"
  },
  {
    "url": "examples/column/index.html",
    "revision": "a00fa083482e606a27a5c8ec1ee4647f"
  },
  {
    "url": "examples/index.html",
    "revision": "a841e646ea8f51a7f6136e70c7bee344"
  },
  {
    "url": "examples/line/index.html",
    "revision": "efc773da4a77f09a3d22cb4d74e7d655"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "9761882ad8e797fe60f1d763ae5e905c"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "5d59a3e0f92a167d0980491730394788"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "1dfd477c0b251e2a834f11824273f196"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "3ee9e1c4d4de28b8d1b6eec437640e4c"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "c5c24b3e4bc394606b3b7b285e0e32c0"
  },
  {
    "url": "index.html",
    "revision": "00806638bd7885380d6ad345b578f356"
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
