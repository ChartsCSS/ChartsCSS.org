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
    "revision": "5693ebe2bb5992da9dc811f9f09a730c"
  },
  {
    "url": "assets/css/0.styles.2476c045.css",
    "revision": "7f66d5adc84bd443dbe7b3758d8417ec"
  },
  {
    "url": "assets/img/html-css.png",
    "revision": "7ffa20302b6432f42fb6cc6c3a79ed51"
  },
  {
    "url": "assets/img/logo-animation.svg",
    "revision": "1aa7e10c132d64bfa2160056b246d1b1"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "2a83fe3650a02718d29b867aad924bcb"
  },
  {
    "url": "assets/img/logo.svg",
    "revision": "b960ca9d41d6c1ea1f24012e77c698ee"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6700d27a.js",
    "revision": "3a7992f02e496907ab7820637196e98b"
  },
  {
    "url": "assets/js/11.0891754f.js",
    "revision": "90b75e6643867748933ebd790afeaa49"
  },
  {
    "url": "assets/js/12.c396e1f0.js",
    "revision": "cc3c27fcf6b0c75cf1dd34bb4020ddaa"
  },
  {
    "url": "assets/js/13.c133be8b.js",
    "revision": "d8865bf370f3c202ae93af57f20069b4"
  },
  {
    "url": "assets/js/14.ba7a7a41.js",
    "revision": "79be84440b762bf38813184cf1f6ccb3"
  },
  {
    "url": "assets/js/15.915add60.js",
    "revision": "9375d53977cb10c2da9a094d6d56ca0b"
  },
  {
    "url": "assets/js/16.8af1fb4d.js",
    "revision": "e892073e14e6b2705847cd2d8c480637"
  },
  {
    "url": "assets/js/17.014f808a.js",
    "revision": "245786076132db9887f097e08264ca71"
  },
  {
    "url": "assets/js/18.eece2ce3.js",
    "revision": "cf85d46e9f60db45bf083b35a2356639"
  },
  {
    "url": "assets/js/19.cf98c160.js",
    "revision": "c9055283dc52bbc639df94d672a43c8b"
  },
  {
    "url": "assets/js/2.fd76f4ae.js",
    "revision": "7c412db44e950505786bbae26cc46cc0"
  },
  {
    "url": "assets/js/20.1a530700.js",
    "revision": "9c359f1d44c90dc4d473fde3d6870df9"
  },
  {
    "url": "assets/js/21.509602f3.js",
    "revision": "24378fdb8c69ad070edf5776a76981e4"
  },
  {
    "url": "assets/js/22.7f70c6b8.js",
    "revision": "45eb2abc1eddc4760cfb7e83b9597031"
  },
  {
    "url": "assets/js/23.4cfa0fb3.js",
    "revision": "40faacfc2dfb00126e8fa5478d9b0155"
  },
  {
    "url": "assets/js/24.d5a2b450.js",
    "revision": "9cb44e43e1aeea834a950e02a2390cea"
  },
  {
    "url": "assets/js/25.6a8c8e1f.js",
    "revision": "5d3766f31d48244f52ddeb7732d71974"
  },
  {
    "url": "assets/js/26.79c8cc03.js",
    "revision": "422704cc3eb521936371f7da00d8b0a7"
  },
  {
    "url": "assets/js/27.dc6fb3a5.js",
    "revision": "66d1493076b382c586618b818d63a6e0"
  },
  {
    "url": "assets/js/28.18140746.js",
    "revision": "d14ad484b63fc9899f2a95d971eae3c1"
  },
  {
    "url": "assets/js/29.7baab13e.js",
    "revision": "6110f084f3e13f926a8ea5f65d617068"
  },
  {
    "url": "assets/js/3.0150f190.js",
    "revision": "fdb8804b5a0750a0b620f63b1a245b11"
  },
  {
    "url": "assets/js/30.5ce18d7a.js",
    "revision": "2fc4ed7a93ec940aeaf1e0ec5fa3d72a"
  },
  {
    "url": "assets/js/31.b4df4133.js",
    "revision": "65efb4e35a38bed039af685af9f4a50b"
  },
  {
    "url": "assets/js/32.02691b7f.js",
    "revision": "e2a6e2a7662d50250370d4320c3dd150"
  },
  {
    "url": "assets/js/33.86794c67.js",
    "revision": "2b53c075f005646214a2624adf55f590"
  },
  {
    "url": "assets/js/34.ab1f3543.js",
    "revision": "6ca6bec36d324ef197b2d8b28de5ab56"
  },
  {
    "url": "assets/js/35.44724f43.js",
    "revision": "543aaf30e00071f3c4f4e023c3f6513d"
  },
  {
    "url": "assets/js/36.1abe5ea2.js",
    "revision": "caaf42110ede92ef5173f20dbcc5d6fd"
  },
  {
    "url": "assets/js/37.8bdbff72.js",
    "revision": "168bc34bc815455fd8c9c9692afb1fe9"
  },
  {
    "url": "assets/js/38.cbe17e62.js",
    "revision": "a6b529e6764de1052a6c076963e4fee9"
  },
  {
    "url": "assets/js/39.47b0428b.js",
    "revision": "05bc370c711351f3541894601bf3b70a"
  },
  {
    "url": "assets/js/4.ab23f4b7.js",
    "revision": "7d84bd16b478a1b61985b2f5b21ee40d"
  },
  {
    "url": "assets/js/40.b1dd819c.js",
    "revision": "39d17cdc5b85477dc4c033f2b9a6d55f"
  },
  {
    "url": "assets/js/41.e50730dc.js",
    "revision": "7fa83bd5b0c006ad6d8b1d4f371ce660"
  },
  {
    "url": "assets/js/42.f0b34c55.js",
    "revision": "88a3aac5123f51c4fde5fb6341a31afe"
  },
  {
    "url": "assets/js/43.ceb17b8c.js",
    "revision": "647548e115940094f884461aafc7a146"
  },
  {
    "url": "assets/js/44.52815904.js",
    "revision": "a1ab859dd868ab124399f8bdae8204e7"
  },
  {
    "url": "assets/js/45.4a18d9b4.js",
    "revision": "779abaf4adf1346dec5b4bc1645f2bbd"
  },
  {
    "url": "assets/js/46.73c51db1.js",
    "revision": "949c53b0c0b6db8329dbbd39446cb85e"
  },
  {
    "url": "assets/js/47.ebd553ac.js",
    "revision": "d9bbf835127b187a61a51e4315dd751b"
  },
  {
    "url": "assets/js/48.92419570.js",
    "revision": "343d8e35eb45efe1fdbbba189426d472"
  },
  {
    "url": "assets/js/49.c9d79ee6.js",
    "revision": "11f6645f00f408152e25afa93cdc98e8"
  },
  {
    "url": "assets/js/5.7da2bac0.js",
    "revision": "657c6de28af5e4a2d0aa08d831912060"
  },
  {
    "url": "assets/js/50.9ecad5e2.js",
    "revision": "aa5bd773a7bcd51a3e6aebdc86e57164"
  },
  {
    "url": "assets/js/51.8d6021d1.js",
    "revision": "e7b2fff9f8278f8d2f6b075c3a4d6b82"
  },
  {
    "url": "assets/js/52.aa280f79.js",
    "revision": "f21a1c96282d77e8d56f9f68c237f29e"
  },
  {
    "url": "assets/js/53.ea55f4c2.js",
    "revision": "56c8163a8db7ce58424b6e0d4fafc825"
  },
  {
    "url": "assets/js/54.d1698311.js",
    "revision": "6df86221113ea291b86934f3d67ad1c1"
  },
  {
    "url": "assets/js/55.6f5700f4.js",
    "revision": "1ea94ce65813a7426213630fad75730a"
  },
  {
    "url": "assets/js/56.9b74aa41.js",
    "revision": "8ffa394df4607d2312f84c8e6d514043"
  },
  {
    "url": "assets/js/57.a9ad5cb5.js",
    "revision": "6435ef2263df7d433a1f3400967e1011"
  },
  {
    "url": "assets/js/58.57562cfb.js",
    "revision": "4d64417b9997c31b59214f2701a466b9"
  },
  {
    "url": "assets/js/59.4ae1ae7f.js",
    "revision": "0e3b2f7f4db008591b98e7d207750bce"
  },
  {
    "url": "assets/js/6.50755141.js",
    "revision": "83ad168bf459e277d57c74ad06cb63c4"
  },
  {
    "url": "assets/js/60.5173fcfc.js",
    "revision": "34dba22ba87a72a50e96b66388614cb1"
  },
  {
    "url": "assets/js/61.e991dd5f.js",
    "revision": "c71a59551375c1362214c9ca9196e05d"
  },
  {
    "url": "assets/js/62.af9d32f0.js",
    "revision": "b684b40d4fe876ab5e88887290d80952"
  },
  {
    "url": "assets/js/7.17d5713f.js",
    "revision": "82cc9f5c0043a2308daf437187fb52f7"
  },
  {
    "url": "assets/js/8.104de35f.js",
    "revision": "d5da832cf40f8794efbd528fc361ac42"
  },
  {
    "url": "assets/js/9.3e4662b5.js",
    "revision": "c80d1c0fdf0ca1e138aed24b12bd29b4"
  },
  {
    "url": "assets/js/app.d993d7c3.js",
    "revision": "8b86a5f1f563ee218ab66079853b060a"
  },
  {
    "url": "charts/area/index.html",
    "revision": "0075c90e30cbdd82616a44252c32cc54"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "9aaee835da307746eeca6e72e5059de6"
  },
  {
    "url": "charts/column/index.html",
    "revision": "b634b8d56154e594abfc7479a9eb269e"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "d933603d7c60e82ed74ecb69be3a66eb"
  },
  {
    "url": "charts/index.html",
    "revision": "a06defe693ee51a6e379b810684140f2"
  },
  {
    "url": "charts/line/index.html",
    "revision": "1af160285fd432ed4007666a9f893eda"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "9acc8bb7e7b21908acf056afd264dcec"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "e32bc5295173dc3baab401c6021108e7"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "0aefee7d8381e323f6b8e5edd9f1f25a"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "033cd81be8e9a8307d9793dd96b33901"
  },
  {
    "url": "components/axes/index.html",
    "revision": "f106da01054e0f164795f6d152db311a"
  },
  {
    "url": "components/colors/index.html",
    "revision": "4cc843c9a7dfdea8573abde356815e78"
  },
  {
    "url": "components/data/index.html",
    "revision": "80cad64408233add63e7a74c278bb355"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "25dd3c119c167976d63a3eaf4fd51c1a"
  },
  {
    "url": "components/heading/index.html",
    "revision": "279c239ab49625f5f3e05cb520143ae9"
  },
  {
    "url": "components/index.html",
    "revision": "f773df8f1f961e2fa730f9be582862af"
  },
  {
    "url": "components/labels/index.html",
    "revision": "b3e7b89fcefee6b02eea0bf5a479f88d"
  },
  {
    "url": "components/legend/index.html",
    "revision": "1a1a6f9dd4b83809a3388d60e7618e32"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "d7225fa7dff34fb93ca0403fc36aa41d"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "8eff94f050d2700997d60e8ac30f3a92"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "4c678da0e968ea80ef9ee571ebca0e84"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "60d3fca8b2c1466b638955411a689b43"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "2707222251f82961214bd9317499409e"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "7d585bb6c7b82d3e710035672459d6dc"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "50ce48c137638580ae76971fcc357f76"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "a9fdccb15643ec5668ce3bf4b77b4921"
  },
  {
    "url": "customization/index.html",
    "revision": "001df2aa53a67fdd2f197936c57e1cf4"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "67fa3e0f9e12ff945078f93cda520941"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "b661f6b0e25626ef6631ada32dd5af01"
  },
  {
    "url": "development/index.html",
    "revision": "9da0fde280e686772e1acb5e1a41a8d6"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "b8b58ecc6e28524c9142b812fe86cf61"
  },
  {
    "url": "docs/index.html",
    "revision": "0463618865df94783d4f31a3079a0bfe"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "6fd494568422669a72f611d08b14ea4f"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "33255ff5d0c53483455605ebabc3f5c7"
  },
  {
    "url": "examples/area/index.html",
    "revision": "4e5de036b9a1918153f9d85bb3efbdf0"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "159bef130ec46f6896df846c1b6103bb"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "5ca1127ca03ef1ecd54a84fc99090781"
  },
  {
    "url": "examples/column/index.html",
    "revision": "35eac4908b516285f9fe81654935920a"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "710a004f8f14a5ab3f70a82b865f3d73"
  },
  {
    "url": "examples/index.html",
    "revision": "c60722adf6ad78f21f681529677933e8"
  },
  {
    "url": "examples/line/index.html",
    "revision": "b3c1101362d1b7594b6f18f352c6f037"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "a528ff2bc0d0f77b7154a1fea2fb1b53"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "29fa82884f5c3627562f65ed8da5ef69"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "5dc5ad8316f02a46ab28e9b5f44ae236"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "5b4a078aa551e1c1a10a2622c2140276"
  },
  {
    "url": "index.html",
    "revision": "7ebde3541b9427de5eb7da442ae19279"
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
