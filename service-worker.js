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
    "revision": "ed43a356194b6193315b2e88f89084a8"
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
    "url": "assets/js/14.181f874a.js",
    "revision": "0063b3976230243bae4e177869ea9333"
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
    "url": "assets/js/18.0cc91384.js",
    "revision": "ce32301fc0f11be96c1ea0a6fcdb3e94"
  },
  {
    "url": "assets/js/19.b380d879.js",
    "revision": "0236eb53e550e5a65c95189386492cfd"
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
    "url": "assets/js/22.533fcead.js",
    "revision": "567f24479075531b775f2006db43fbcf"
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
    "url": "assets/js/27.31fc9d3d.js",
    "revision": "f5b348662983ed75ed02a58d110ab934"
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
    "url": "assets/js/app.d933640b.js",
    "revision": "73164169108f0a1b801196e2c8287f3c"
  },
  {
    "url": "charts/area/index.html",
    "revision": "b9e93d84aded96c136dbbe5918ffd2dd"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "ece5b18371e52c694be2b7bbb955ab77"
  },
  {
    "url": "charts/column/index.html",
    "revision": "1e9b75613ce083a8da00558a876c4527"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "bb7e0bc095563ba76dab1f99c45b4115"
  },
  {
    "url": "charts/index.html",
    "revision": "b5ff0c8076e923c177785a5c5532c1d8"
  },
  {
    "url": "charts/line/index.html",
    "revision": "9426d6992b2e60713ecfba3cdfba9de6"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "c58fe52727c454d7d85a4ddd525d4c1f"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "c3c8236de9b62a2b6f3f994fabddd040"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "5abebdf9b09e2cf4f63c6b0fa77e8243"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "91c54912be153a4380b70af13cc29c17"
  },
  {
    "url": "components/axes/index.html",
    "revision": "bcbbe5d8dafbbc61a1116f394300cb45"
  },
  {
    "url": "components/colors/index.html",
    "revision": "2ca9705ffee12e343121212af487c63e"
  },
  {
    "url": "components/data/index.html",
    "revision": "1ca1fd26de94e12342383c1c7d20d1b5"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "05f5a99cc942085f32b3c929187d94c3"
  },
  {
    "url": "components/heading/index.html",
    "revision": "a1ab75eef5267f3302cfaf4b2a8ab582"
  },
  {
    "url": "components/index.html",
    "revision": "c5eb667dd4b432a8f7209e4c992cbb4a"
  },
  {
    "url": "components/labels/index.html",
    "revision": "85cce0974d998f98a866f533861ed955"
  },
  {
    "url": "components/legend/index.html",
    "revision": "b738a6fc00d2950e5c5eaf689bf5ac99"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "49e18f27f0b4ae4cdfc77698e641474d"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "f64980f27feb13618b86ad12d5e14fc9"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "c6e6fd1c8f147613297fce5895848a21"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "99d2fcc1e96f4588bb24667c094125aa"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "5a96a29bf5c6f9ff9f5c33a4d9ec5fd9"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "7b594d89aad2a2b010045da16fde7bec"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "f807bbd10f888bae47825a164f08f773"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "503c6feac7319089080a2da5f34a9ae8"
  },
  {
    "url": "customization/index.html",
    "revision": "a3b956b5298af229f33bd4bf34b027fe"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "481a0050ae8eddbb0177f716778c3630"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "23717ad66946c1457f7affdc17d0937d"
  },
  {
    "url": "development/index.html",
    "revision": "390e2593514d3f494d6037c8dd7a5fc2"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "f5709aba1f6f23c77a6ae3d333dbb545"
  },
  {
    "url": "docs/index.html",
    "revision": "5fad0f7ff3d02bc8ac6bf5616a61790d"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "32761206046866de79d866635023a065"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "a7aaef22c504c68c9d1a0879e736576b"
  },
  {
    "url": "examples/area/index.html",
    "revision": "0eb3d1f5c398363e0216901c14172a06"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "80f805f1d892e6aeb08cca92934b36d9"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "c387c97413366e156ed2ac93830a1068"
  },
  {
    "url": "examples/column/index.html",
    "revision": "1e534da06dd60e74b063a9b540310eaf"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "5711ed6f9f1e759b2f98318a470c2c11"
  },
  {
    "url": "examples/index.html",
    "revision": "6487555bcb4a6e8b757fd488ecf2468e"
  },
  {
    "url": "examples/line/index.html",
    "revision": "0e0bb813fda283ec17b0d86ef7a4bc38"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "a5f9d4d63cf0500a5f283904e86a753d"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "f6409fce97eaa5a4f286f4c077d3a0de"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "55a912af125547efc1cbff44c53bd6bc"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "ab9d50da4142f882140d8ff60a779b4b"
  },
  {
    "url": "index.html",
    "revision": "9978be0d4e054ce89e05d97d38088ffb"
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
