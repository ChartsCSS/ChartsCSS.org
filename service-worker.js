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
    "revision": "14e8a412400e05d58885ab91de689f05"
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
    "url": "assets/js/22.e1508501.js",
    "revision": "df447986347e41ac1c499481add05ca9"
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
    "url": "assets/js/27.a4a2d8e6.js",
    "revision": "b875ced63708d7f63dfbb79bff7a5184"
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
    "url": "assets/js/46.ad43c0e9.js",
    "revision": "822b9cab29f680bae07b6829e5fa36ed"
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
    "url": "assets/js/app.44421741.js",
    "revision": "891695a97b4550f28431114c1de574bb"
  },
  {
    "url": "charts/area/index.html",
    "revision": "be3e32522b1a4c314b85c4e387f7f68a"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "2329977a108b0fa68fcc12dcd403b759"
  },
  {
    "url": "charts/column/index.html",
    "revision": "49b9bee86333a1b408255278e86d0d19"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "a3a969ac20ac1fb5a61e738f4b4069b1"
  },
  {
    "url": "charts/index.html",
    "revision": "511e354768cc1e1f15c6a183d46d111f"
  },
  {
    "url": "charts/line/index.html",
    "revision": "39887c3c232265ff6fce6fb2760833f6"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "a27da266bd1256e59d25483b06d3af49"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "cb77d6b965ed0a67a766a586358239ab"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "669fdcb3bcd1968f5c4e413a1f17a416"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "dea03f17e5a7d6ae33b91e6c7f85fc04"
  },
  {
    "url": "components/axes/index.html",
    "revision": "a4676109b68fe233d9267ee189d1c16d"
  },
  {
    "url": "components/colors/index.html",
    "revision": "ed6356b1d1b69337817e9f0cc0b91aae"
  },
  {
    "url": "components/data/index.html",
    "revision": "de7442dda9ee83a1be683e65bbdbf5f3"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "f75d9e93f5c1ce12ed5a32bde5639ab3"
  },
  {
    "url": "components/heading/index.html",
    "revision": "c440c93504a3fedb32649b7717aea4e5"
  },
  {
    "url": "components/index.html",
    "revision": "3f3a105434f5d8f5d5d4a5e556bfd5ed"
  },
  {
    "url": "components/labels/index.html",
    "revision": "a6e75db8d44fbfbcb78954111784aff7"
  },
  {
    "url": "components/legend/index.html",
    "revision": "136a8cd41dab0a3f28bbcedebb76d20c"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "bf2d5a69575fd3f244e408b172850848"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "ce4c64d1ed7a6331ce905fce64ca34d9"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "1da41e2ae286c1b151231b2ddaf44529"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "854b2dc69302ac3a690e452d6534f5a1"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "49fd93b7b2b3e763d9812fc9967314a4"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "a99e846462184a3042dcd3b6d1a1066a"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "2f0d061a218b19bdff936e4342f05845"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "8ac210186569622d0acba6e6c87a7f9d"
  },
  {
    "url": "customization/index.html",
    "revision": "6edc6c473587e34dffce509ee7fa0378"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "aea4bd111de1e95005a31b6cfebf3b0c"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "70b30172ac828e5f7c29801016b905e4"
  },
  {
    "url": "development/index.html",
    "revision": "dcf9b2e688980e3e86a9af9d6c787945"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "c2a23b2f8475f56c09bdc25ea3102452"
  },
  {
    "url": "docs/index.html",
    "revision": "bd8dcd06f1bc9b9e201e5190836838f3"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "2a4d44bf74e4e8c0c53802e6b630312a"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "3bb64bb229ea0f2aa8ea00d839379eb1"
  },
  {
    "url": "examples/area/index.html",
    "revision": "a2fbb48b6cb416fb95bc98f7c40c15bd"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "d7f863c5c3434a075d275fb9fcbf88ac"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "c5d6250357b95119ac944db36c2c0af4"
  },
  {
    "url": "examples/column/index.html",
    "revision": "9cb39e9bdd59dacf09d6fd3dd4a780b9"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "e3bd0ecd6dc4e4f45e4f71c568bf0bd3"
  },
  {
    "url": "examples/index.html",
    "revision": "e19935649ae3f0a81da67e1dfab734b5"
  },
  {
    "url": "examples/line/index.html",
    "revision": "7aac87141f3f4a2562c284d8afcf4c0a"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "8692578aa97215d132232e621ce66231"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "ebc2a6918a60572620b0b1752ed0b718"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "50f0eeb3345e1fdf094e8569efb3112b"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "88609e48d2ecbbd5e549b3cb4f2bc7f6"
  },
  {
    "url": "index.html",
    "revision": "dc4941b16e416ff1db510109f541b299"
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
