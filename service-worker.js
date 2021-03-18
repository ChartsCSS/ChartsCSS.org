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
    "revision": "752cd423dd4d3a4b539686465495a824"
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
    "url": "assets/js/17.2715e876.js",
    "revision": "a2256078355c5ca49b7036d739b8cd47"
  },
  {
    "url": "assets/js/18.f6b2fc70.js",
    "revision": "a810cbf7c0974afbe9dd2afa62c0eacd"
  },
  {
    "url": "assets/js/19.9ef760ce.js",
    "revision": "b19b6ebe4135b5a2974fff5e6c516aa7"
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
    "url": "assets/js/21.5d10525f.js",
    "revision": "63ed513188f5de77269d78f6ff00b3a1"
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
    "url": "assets/js/47.56495741.js",
    "revision": "24a8a04d4aa1a37f4dbf99ead8de2b00"
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
    "url": "assets/js/app.1f80e884.js",
    "revision": "b1203d736b67768bbc24bb862a4bc2ce"
  },
  {
    "url": "charts/area/index.html",
    "revision": "ec9e8ff111cccb4d543b7acc7740df32"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "b40a6418fecb2ff53cf03776b656cb5e"
  },
  {
    "url": "charts/column/index.html",
    "revision": "257b30db7739c31703130a90a945674b"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "a54eaf332ae262bb7fec1edb364e0192"
  },
  {
    "url": "charts/index.html",
    "revision": "f0c43b20cec84ac06a23f0eb595aa54e"
  },
  {
    "url": "charts/line/index.html",
    "revision": "a0bae2d191e6dee794c63ec0a7084891"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "e100a00af5dca1132afe48304f8274fa"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "5b3b700e85b39383c9d10edd6952d76d"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "a93bfd767d04cd4a0a57e59e9a81e011"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "09a8c91e244b32f07ba4b2a6ba2871df"
  },
  {
    "url": "components/axes/index.html",
    "revision": "c9e958931dac2ecf80088317b9110ee3"
  },
  {
    "url": "components/colors/index.html",
    "revision": "09c83c229e3eb007e567378fab6f9572"
  },
  {
    "url": "components/data/index.html",
    "revision": "2a9fb2e98f09fcc63ed768531789be11"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "a3b951890723a83056497fb01c2f871c"
  },
  {
    "url": "components/heading/index.html",
    "revision": "e507fa6275713f55495b11c860deb640"
  },
  {
    "url": "components/index.html",
    "revision": "dd12861f255ca12134a233d0bb91cbec"
  },
  {
    "url": "components/labels/index.html",
    "revision": "41714f8fa312a839c7a96fa4c88ec357"
  },
  {
    "url": "components/legend/index.html",
    "revision": "91b29361718206e998c9f7a60336ca4f"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "a674efc6c1912c006b04e8932397feb6"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "2b32ce7c7639412c1482961b89483183"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "fabd36aeda9d168e92cc7a95d7e123a1"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "6865ccc0854d0bbfbb7d0cc41220d51d"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "32d294e975e17eaeef6a434734f8e1c7"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "319ce3f5233ba6bb97746bf9409d783d"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "7b249342eeb655b73b5e23d6eb0ae82f"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "a8f402eef21b2dfbea9069d8c9022983"
  },
  {
    "url": "customization/index.html",
    "revision": "562d37d47c12d7f9317b6e5e5875bae5"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "42b28a4e19b6c5e9c841f6052b5ac573"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "581adaa83a0a1fc709c4bbac213a8260"
  },
  {
    "url": "development/index.html",
    "revision": "f18a2eda0a96fedcf4a192695d9c8410"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "599f6c1a7b8e4348ca87c76e9fbb61f9"
  },
  {
    "url": "docs/index.html",
    "revision": "5f0be9127b923329173af8ef218f7437"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "a2e9acb199467644fdf45c88be30fe08"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "c8d39ba3ad5cb83b50bac245ad7d4f87"
  },
  {
    "url": "examples/area/index.html",
    "revision": "a15b7719097149ab536057d3b5372204"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "5bde4d42c5660d0f0f7fbcd969fbf1b6"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "cb659fd2f171d8bd409045574565453d"
  },
  {
    "url": "examples/column/index.html",
    "revision": "585eac300db2d33cd8b56ade1268e111"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "c39790a1510b0d7f46e76e48c6b8f5e3"
  },
  {
    "url": "examples/index.html",
    "revision": "14f986e7a9b6f27f30be86212fe519dc"
  },
  {
    "url": "examples/line/index.html",
    "revision": "542c94ea4d16cd3680dce297207d7857"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "ad58da34faa9d3f42b462fe1661f1825"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "c3a12bb32bde58bf921ac1209ffc8afe"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "d08059f9d1c752bb6526db692f494130"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "67b8ed2b37e40e2b7de1c5fb56705d7c"
  },
  {
    "url": "index.html",
    "revision": "14ccf5f66ca505830f48d42d222cd9e4"
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
