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
    "revision": "328aea235aedb587a8269b3bb5a69a57"
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
    "url": "assets/js/app.49591dea.js",
    "revision": "99229f75e6cf14bf733d277475167840"
  },
  {
    "url": "charts/area/index.html",
    "revision": "ccb018e7039c443b245e077fdf923f98"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "b3e70fa27f862caa197ec41b38667b71"
  },
  {
    "url": "charts/column/index.html",
    "revision": "194a8373a8a94383ba37ffd56a92741a"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "93b284f5a217679cf7d416d8000396a6"
  },
  {
    "url": "charts/index.html",
    "revision": "02cc0f44a6367e92e3f7b7fc46b77791"
  },
  {
    "url": "charts/line/index.html",
    "revision": "4e796786587a5ad58f3058c1e101b915"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "3f51fa1e36624f369ddbab361cc066f3"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "cf66d48724eff13133859ba4dd46e4a1"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "a645658f91559c67aa82ab65ef942dd2"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "5375ed5b831c12065df850f53db84824"
  },
  {
    "url": "components/axes/index.html",
    "revision": "6e4a5d8930f281c8d04891809ce45cbe"
  },
  {
    "url": "components/colors/index.html",
    "revision": "2199fc0b19eb39e9336fd9eb9bc59045"
  },
  {
    "url": "components/data/index.html",
    "revision": "445695f4caeb91ceabbb34dd98b46396"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "1533f30f101cc3c6bd4108932735cf30"
  },
  {
    "url": "components/heading/index.html",
    "revision": "6c65581f4418ea1f6d899d6cc3def8c8"
  },
  {
    "url": "components/index.html",
    "revision": "e62f864d02b3e436df73a3744a003689"
  },
  {
    "url": "components/labels/index.html",
    "revision": "e0be4733345cc94d420dd51d226573fc"
  },
  {
    "url": "components/legend/index.html",
    "revision": "14278dbb52c1c8ccc287345c639d0f54"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "ace16cbbd4da2cdfbdd29b983e654113"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "3c381b511461a0c390eb0c755bed494a"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "0f8c23a9601aac6b2b081818dc83d00f"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "b1af696cd3dcb8d3a4b2ed20c3328fb2"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "e0580135faca95e2da417ead90167e43"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "3644326369d50b502f19f02cdf2b42dd"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "67c6f95f87da5106fee54490bc84fb63"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "bbe392b4fe8922bef64e91a0908e85fe"
  },
  {
    "url": "customization/index.html",
    "revision": "bcbe1555d1b0c5f7010499bb05c297ba"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "88dc0bac753ca03a5dfd373c76885b97"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "2ecf2935a55bdfca7d56f756a1e4a474"
  },
  {
    "url": "development/index.html",
    "revision": "bfc340d9ef53fe9f6777a567f1d11470"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "c5c33637116e2972665ce6c349b98925"
  },
  {
    "url": "docs/index.html",
    "revision": "93fe6028ab97fb7112589f424984e0cc"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "4e236f74d2afa3a1d882bd7c90c20aef"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "13f024e7e846df538690965059f1d39d"
  },
  {
    "url": "examples/area/index.html",
    "revision": "f6b3ae1b35da543d05fe34795cf91fd8"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "ea980b9aba75b83a847ea0d671fb49bf"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "4a1054237b6e10915de650c37ca8cf75"
  },
  {
    "url": "examples/column/index.html",
    "revision": "800fdbb131f0926d72e994062211541d"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "11d115b439c191b31b53bcfe5a3a3c91"
  },
  {
    "url": "examples/index.html",
    "revision": "d37e6239028f6d58a5ab2857380336dc"
  },
  {
    "url": "examples/line/index.html",
    "revision": "a3882b06a732e34c6e44d42baed82bf1"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "11c8ef8cbd9ba7a928725c2d8cdf051e"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "0d208f37630bf23804305d55d7b74704"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "bc3fa25d5f01eabef5b0c46267199589"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "cf744fe957bdf82ac85ee2e8334aeb02"
  },
  {
    "url": "index.html",
    "revision": "507276ede2d8cdd78bad9907a9841989"
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
