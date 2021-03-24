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
    "revision": "64cd086a1185168a5749dea4cf95fafa"
  },
  {
    "url": "assets/css/0.styles.9f50e0fc.css",
    "revision": "8ff595b37a78cfa5aca3a3780f447b62"
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
    "url": "assets/img/rami.jpg",
    "revision": "3256e82bfcb52c1eb0bce07cb4373e0b"
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
    "url": "assets/js/17.0a9d00f8.js",
    "revision": "3f5ffaa30c4d638743eebb1edefab245"
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
    "url": "assets/js/46.85f68741.js",
    "revision": "aa100c3e68eb5b49804137af0dfad18e"
  },
  {
    "url": "assets/js/47.2338eb13.js",
    "revision": "a0c8e6ddcfb9ce6d10e77091c6a1839e"
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
    "url": "assets/js/61.e08a1ec7.js",
    "revision": "beef2658f62675cc3918e3681cd71e8f"
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
    "url": "assets/js/app.fec3529e.js",
    "revision": "b5301a17bdefd69e94bbdea332427419"
  },
  {
    "url": "charts/area/index.html",
    "revision": "e859c60baa34c7e7e26ba7c629399404"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "561e750526c6c25453eed80626a99de2"
  },
  {
    "url": "charts/column/index.html",
    "revision": "bb2e00ca441f7061229291860e83f480"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "70f77d0654016589c4a52a3033a4e5ff"
  },
  {
    "url": "charts/index.html",
    "revision": "72f55273967057ac35944d24f20ebf5b"
  },
  {
    "url": "charts/line/index.html",
    "revision": "1ddf93f5845587441fdac27bfb003b5d"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "66d42d99eb1696b39022e33cb8c31ebf"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "1e75761e69b15d4514dced783d950dca"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "bd4d3c4711f178b1e80c21570c5ca12b"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "282b66b5643eadcfd2d680011ef46713"
  },
  {
    "url": "components/axes/index.html",
    "revision": "ad42b1a5bd93a191ee3c1a9985068848"
  },
  {
    "url": "components/colors/index.html",
    "revision": "ca127f567061f6644b93331daae14ae2"
  },
  {
    "url": "components/data/index.html",
    "revision": "e699e154ad6a0f1a7c6ca03c61cc4437"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "5fb9d920a1aa695a65fd87eb6eecd883"
  },
  {
    "url": "components/heading/index.html",
    "revision": "beff3cdedd541913bcf499b28828fca8"
  },
  {
    "url": "components/index.html",
    "revision": "76e19f42e48a13d6699bd750f6fb42df"
  },
  {
    "url": "components/labels/index.html",
    "revision": "41210b0a689dea4b50452c26417a3879"
  },
  {
    "url": "components/legend/index.html",
    "revision": "82889670b598857741e8d8c6b28f0b24"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "59e2c1144733044094762723e1cdfe6d"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "2967c7a474ae0b3ed51b208b468942c8"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "26f67c74a12a0a7203779548443cda01"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "11df85bdba727c1b03e69ba229eab2fc"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "7831382651c03317040a922c8546de7b"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "fd5e62146bf4f5d872407a4f14d78bca"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "0052af730e4bf4eeafb06e1ef79e1b1a"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "552063ddebad7fdc0ceb154b9e377ef5"
  },
  {
    "url": "customization/index.html",
    "revision": "75ce4f128fdda44490fb1177cfd69ce7"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "179b1119c2fc5fa1085a1e801c8f2371"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "d686c4ab415f2271d4a6ba121d3f7e98"
  },
  {
    "url": "development/index.html",
    "revision": "347caf4d81c2fdd1ef3c741f973697b2"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "c9e0ccdb2c699489983f162e420103e3"
  },
  {
    "url": "docs/index.html",
    "revision": "22aab6137e207126aa52cee461f29a73"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "8ec8317c40e7509a5e2a4c610ef69f83"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "3cf8af0c5e2f48cf2140676091bddace"
  },
  {
    "url": "examples/area/index.html",
    "revision": "143be4957bb796847180f2c01c0dbf33"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "f7192cc5d9d4ab39c0b8c302d7cde778"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "6f485a0a98de260486e61d206f20273a"
  },
  {
    "url": "examples/column/index.html",
    "revision": "a526844cd537bfad57ffcf07c9280090"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "786747d5d37c647c990dc9937c66cc48"
  },
  {
    "url": "examples/index.html",
    "revision": "953429e3864fc527ce3bcd425a1f539a"
  },
  {
    "url": "examples/line/index.html",
    "revision": "a8cf5cba104354ae44a1062f771b4875"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "9373bb226aa520fa98795c06f95cfc68"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "9e5f55951c06175d89161467ccce806e"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "d0bc8209f9ffeceb5a59d90573fd329d"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "642e3c78fa50429d94a90cf9f117fddc"
  },
  {
    "url": "index.html",
    "revision": "858504781a18e876a4bd38587743eb2c"
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
