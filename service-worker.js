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
    "revision": "40798a8e2e6fae147c7e4de444749955"
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
    "revision": "c063c7a42dfdbc23771a5acc2a3c74d0"
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
    "url": "assets/js/14.b4e7e733.js",
    "revision": "b6449dd2cfd2f840c7c6013706ce8af6"
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
    "url": "assets/js/17.8a2e86cc.js",
    "revision": "35eb2b0bc34717897a150f60151bade5"
  },
  {
    "url": "assets/js/18.d9fd0254.js",
    "revision": "3aa3712b813dfcdac5ea9bb37c4d5469"
  },
  {
    "url": "assets/js/19.a0c55983.js",
    "revision": "d71aae352b6bf7c36650bd0f21bbbf95"
  },
  {
    "url": "assets/js/2.fd76f4ae.js",
    "revision": "7c412db44e950505786bbae26cc46cc0"
  },
  {
    "url": "assets/js/20.2bd42132.js",
    "revision": "9e03180c694f0984652d62d0af055110"
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
    "url": "assets/js/36.67a8908b.js",
    "revision": "0c05b0707082216a1a2b473056397ecb"
  },
  {
    "url": "assets/js/37.bc59a156.js",
    "revision": "5aa1c015312a316455a1cfb05ca98577"
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
    "url": "assets/js/40.971a3bac.js",
    "revision": "db8c8f1c234013fc71c0cfe7788d275c"
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
    "url": "assets/js/app.1df7ea7a.js",
    "revision": "5f30b5459c67d6ae2a09b683e5956d2f"
  },
  {
    "url": "charts/area/index.html",
    "revision": "4f54416097c1f8389e74b2ba4d0925c3"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "853821bb6f8b82b31dbd47f2de8f0fba"
  },
  {
    "url": "charts/column/index.html",
    "revision": "c2a387d9c777f713393a49d8d73f6a34"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "42d2614713ed98217594fda6bd4a6922"
  },
  {
    "url": "charts/index.html",
    "revision": "050a537ad8c12c530530a77b65cfb6cd"
  },
  {
    "url": "charts/line/index.html",
    "revision": "f109043508d758e256bb61f8326a4bad"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "735fa510fc7d3ad7618041cb0a5f95d3"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "7338e180e80783f079b05b240e744d02"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "ef8ed731296232de67df0223fe388b30"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "6a759d5bed253d59b7e5feb3759b582f"
  },
  {
    "url": "components/axes/index.html",
    "revision": "4d570f7f0e4e74ee996c0e4e0b134af6"
  },
  {
    "url": "components/colors/index.html",
    "revision": "3334ea31d0cbddb55610e9e927abae1a"
  },
  {
    "url": "components/data/index.html",
    "revision": "cb0845a2795be7f0502058b053c6abce"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "521a0f86182d33bd75a3fba6dc33c080"
  },
  {
    "url": "components/heading/index.html",
    "revision": "aaa94f1cd34537f9089ae29b82d4d914"
  },
  {
    "url": "components/index.html",
    "revision": "3fae521777e8f2fd887d417458dcdbb7"
  },
  {
    "url": "components/labels/index.html",
    "revision": "81f4bc5265bdfacd743afa572bbe0c24"
  },
  {
    "url": "components/legend/index.html",
    "revision": "487f4f0bbf688ed4de80951e1c4ae910"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "1a46b89f079c819dd8054d6d75a89215"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "72c68f36f6463a57d777a44d1a9a0d7d"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "e89a79053bcc23e778fb4e2aed465573"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "bc518280c041cae00196149bb002a3df"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "12777dda24cd90e245d4cf0e9ccc6e24"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "7fdfdf7fe8b3252436f853f2a77f5aee"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "5c01b4b1b6eae67539ac3bb97549b094"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "98e802572a446e11cf1af1dd65a17bb1"
  },
  {
    "url": "customization/index.html",
    "revision": "e3aafae8f8ef05785f1897bcc9877e68"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "9f436e92ca11736138df9b56c8d7c3be"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "f2d3aa88ed8164dee111527dc19ab905"
  },
  {
    "url": "development/index.html",
    "revision": "4ed1caae3e60c423c202f9f296a3064e"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "246fb9aa78a431eca977e97530412f14"
  },
  {
    "url": "docs/index.html",
    "revision": "8dc27d1cf9f3cafb4602e9635144550e"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "5ee86d742dbd5735ad23cc8c89d74004"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "a3ffade97d1370ed0deee28d95f267b1"
  },
  {
    "url": "examples/area/index.html",
    "revision": "2fba12a26c2b19dfa84413ed28f019e2"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "f062fcdb5f5e2070ef832335323a470b"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "a76aa4d0836ab5e8a2203ba204c3112f"
  },
  {
    "url": "examples/column/index.html",
    "revision": "6cae93e89deec965f83c6d91ed7401f1"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "6b52ff28ac1f791127e7d4a9f0208e24"
  },
  {
    "url": "examples/index.html",
    "revision": "fa97b27d95867bf1b857a175f6ddf303"
  },
  {
    "url": "examples/line/index.html",
    "revision": "9611826e016570c45c4d307aac1be903"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "0342886d831961c37de982264b850126"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "bf3347279af1e5854d32560797356513"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "69f141a394849369d5ba69466e6fabc7"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "db8dcc679836351738be64a1de7d9581"
  },
  {
    "url": "index.html",
    "revision": "ca907a12dd60036d268960db09acc10c"
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
