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
    "revision": "5b6ef5a218b6fd7dcdd0be56361f279e"
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
    "url": "assets/js/14.48ea72ce.js",
    "revision": "fc86d284a339b689de3162ec07fb51f8"
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
    "url": "assets/js/17.30255889.js",
    "revision": "b54c5bf5f3cbfc6aa92bfc0248ba1f07"
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
    "url": "assets/js/57.a41dd8dd.js",
    "revision": "99bf3f79856dc8c1760fcb0285df1682"
  },
  {
    "url": "assets/js/58.265fe46b.js",
    "revision": "c4558f192f2a0bb702698e65e9517aec"
  },
  {
    "url": "assets/js/59.0b8f1d1d.js",
    "revision": "b0af4fc1c2e5e8761168350ebad095a2"
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
    "url": "assets/js/app.71abc38c.js",
    "revision": "35b0aa45cf1f8b5a461339f8d2144207"
  },
  {
    "url": "charts/area/index.html",
    "revision": "f14c8ec9708a50589d3719f9cbd70a2c"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "1da24db7c324c6a10ec6f54482758f44"
  },
  {
    "url": "charts/column/index.html",
    "revision": "9d4dcef41a7a2f064a2c7cdcdd32aec2"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "99bf7154db466817e35461f57411de10"
  },
  {
    "url": "charts/index.html",
    "revision": "6d998553c029d3cd405b254db34c3471"
  },
  {
    "url": "charts/line/index.html",
    "revision": "9363e8a8778434ee39cb801f1803f79e"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "aed441b56b0205153fb4776e09fa54f8"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "5fe4cbdb1d91daacce71409e08a0e8d6"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "311c1c5bc1eba006ab1e3f4ac8f49952"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "74ceaeeb14c7be2ef9b64383a96de998"
  },
  {
    "url": "components/axes/index.html",
    "revision": "d4c6b3f295a007479c4f1db499c75175"
  },
  {
    "url": "components/colors/index.html",
    "revision": "5bf804ea8e8ae114d43affdadfd7f47b"
  },
  {
    "url": "components/data/index.html",
    "revision": "52259dbe1f1d2ed15be5b3028f1b235e"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "2237a73c302b70422c59dbed06a59f51"
  },
  {
    "url": "components/heading/index.html",
    "revision": "cc014e22e3c2f64018db8cf9055b9e84"
  },
  {
    "url": "components/index.html",
    "revision": "197fff12315940df032eae8daef9fabc"
  },
  {
    "url": "components/labels/index.html",
    "revision": "162a810ea237c7bb23b1cc56f8795c5c"
  },
  {
    "url": "components/legend/index.html",
    "revision": "9d960aa9eeee6e4bbf40a3c2227ac9fd"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "a918e487de6fc9eccda6733fb51278a2"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "891b6ad0bf24e521a3c0c52ac1bc96a8"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "2e7dd423b868139dd61689b8efdcbda7"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "9129222a3ab0086054e3016b731fdea4"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "8d57a3b2359c6dc6a8dc5c67aa7dd53b"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "fc4b2463e7694dbc16ddb8c450842524"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "e34a69d0cbfe8d0b44c2db6a0118b8de"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "3738c2bbd3a745b727183f161874a04b"
  },
  {
    "url": "customization/index.html",
    "revision": "af2ec2109122836f9211001971feb774"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "e997f2de53b5926b0b29e67ffdb3fbf7"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "650f32681d1e81456c0ff537dbdd49a7"
  },
  {
    "url": "development/index.html",
    "revision": "6f6c6f201676e59c9cad0a6cd7aebcf3"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "e36a9052ae471444c4a0c5a8ea072f1d"
  },
  {
    "url": "docs/index.html",
    "revision": "9325100bfe052b34b2fa43714d864a4a"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "6ef387e368b43215b906881e42e8cc24"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "366e2b6de73343bb40814d5a630f59e0"
  },
  {
    "url": "examples/area/index.html",
    "revision": "c254ada44163a7a890824e08b657e5b6"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "07f77a3b27dc059eb811afa1c5caa796"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "37093d407078f46ca091fae8af4597b9"
  },
  {
    "url": "examples/column/index.html",
    "revision": "35dd89ef282aceb8b00aeca57289481f"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "6a072916c354d97f931a249470a4ba24"
  },
  {
    "url": "examples/index.html",
    "revision": "88ff49ee9fea0c1beb2700f21049ed39"
  },
  {
    "url": "examples/line/index.html",
    "revision": "498ee5145e5fe8ce24dd50703ae837ee"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "4ee2b4b3d1c768eeb454094c52ab78ec"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "73d472df10aa7eda347537e5cbf4a00c"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "49726024712fa799ce9953bc236b29f2"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "b5d0cf9b752ffc2ca7c4d39b5059698b"
  },
  {
    "url": "index.html",
    "revision": "ece4c240b01a03c5d54f12bafc9a7200"
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
