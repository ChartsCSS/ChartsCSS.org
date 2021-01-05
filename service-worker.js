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
    "revision": "9e71dd7c12dfec2ce0119e5f1e3d19b2"
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
    "url": "assets/js/17.30255889.js",
    "revision": "b54c5bf5f3cbfc6aa92bfc0248ba1f07"
  },
  {
    "url": "assets/js/18.021036c4.js",
    "revision": "e9f589d33a27a3cfd86237cb204e9278"
  },
  {
    "url": "assets/js/19.660b7178.js",
    "revision": "36b2b4e0c986ac7e990ad4d6391fb9a8"
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
    "url": "assets/js/21.34639bbb.js",
    "revision": "5a6f64223ed682e05b0a738363ef212f"
  },
  {
    "url": "assets/js/22.19a14382.js",
    "revision": "b31bdff581192e282b312ead513fb821"
  },
  {
    "url": "assets/js/23.5d4a70f0.js",
    "revision": "4cd80dac0bf058dc552419ffe1f14dd4"
  },
  {
    "url": "assets/js/24.b7866b8d.js",
    "revision": "5d8b91f8283f815e6561910a2d85abd1"
  },
  {
    "url": "assets/js/25.41f7d37f.js",
    "revision": "c2d0fce38b1f6eff7a07d0e8eedbd2d2"
  },
  {
    "url": "assets/js/26.2c3d989e.js",
    "revision": "d02ccb6b157f12d5c731b0165f99b68f"
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
    "url": "assets/js/app.c10de9dc.js",
    "revision": "edc4342e2fe43b190725f9b113b90b0e"
  },
  {
    "url": "charts/area/index.html",
    "revision": "3aa514766be6d270a12499490d28e6e8"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "0ca3eeed0eb3b9b7f678399752202d55"
  },
  {
    "url": "charts/column/index.html",
    "revision": "473a3074a76bb478f49649e4f58841aa"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "10cf643daddd529e376444d8fc214b4b"
  },
  {
    "url": "charts/index.html",
    "revision": "e14cbbb11c57d8704fd824c70aafc622"
  },
  {
    "url": "charts/line/index.html",
    "revision": "6d67016d3358efe6afa290c850120314"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "c6a68c61cabdee1d4b0aea600d7c4574"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "981763baf318e8398ed7cd08efa2a5de"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "2613b1ddf483d14be6c54040f96d501b"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "bae66a13da5b752d03245bb127bbae6f"
  },
  {
    "url": "components/axes/index.html",
    "revision": "73dda39ea0a3a70a3d380e9107e979ef"
  },
  {
    "url": "components/colors/index.html",
    "revision": "b1484b7454780fe99f6c358562d9425c"
  },
  {
    "url": "components/data/index.html",
    "revision": "4d465ebde036c89b4e7443495aa05d66"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "4e8167818a3fcf2d7aed30ad75110e75"
  },
  {
    "url": "components/heading/index.html",
    "revision": "08d9ee6e5a5dba73b2f139809c320e07"
  },
  {
    "url": "components/index.html",
    "revision": "3d904488f7f3861170d9c32e9397522f"
  },
  {
    "url": "components/labels/index.html",
    "revision": "26c4b0ac9985cf619e0e967be871b081"
  },
  {
    "url": "components/legend/index.html",
    "revision": "fb443b225f2973d8d826e9b618817310"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "b1a18ec89bbd04739b2b7c9c06105b3e"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "ef547f0c62e219af055c88d10b96c782"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "13d92bdd5de2e11aad7a15426b2c8100"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "8ac5fa1739c018c86205912386beab84"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "01dcc41da7d00f158b53ebf53a56b836"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "b706fc1e8ce7adc43aa721963e3c0182"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "b1af1009df14bdc282498f5f37833c5a"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "185915b8cd2b26b767ba4b4ddd1b6449"
  },
  {
    "url": "customization/index.html",
    "revision": "458c8b6b95f74d48644e5f5753615a85"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "1277c9670c036ce311f3e59eb0e7f655"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "db7bbe65881f73487653a12ab5e34bad"
  },
  {
    "url": "development/index.html",
    "revision": "76c9dcea329159488a7144a52fcfb189"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "58c76d87b74f8230d3c55a50b2198f56"
  },
  {
    "url": "docs/index.html",
    "revision": "78f62ed09ae99dee7a34d1cbdf299b6d"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "a02305c40345b277c2a48ce73d799512"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "74171d13b1d7fd05bc0fc98cfbf5057b"
  },
  {
    "url": "examples/area/index.html",
    "revision": "12a23657060bf66c91f1ef9eee5f3ffa"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "274aab780ef1b528ba7d0a8913865bc6"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "4d4b6c31dbf8ee1b42201e7885b7d0af"
  },
  {
    "url": "examples/column/index.html",
    "revision": "4b3d065ef0c07fdbeadad6504c4ac719"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "cffb357f377e107720da85531083903c"
  },
  {
    "url": "examples/index.html",
    "revision": "6365a39f710220866774b4cf7cb68a8e"
  },
  {
    "url": "examples/line/index.html",
    "revision": "2eedb13949bb7515cec6bc98923ab1fb"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "1c9b14f2850aecf4b21de98f758e24b2"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "538acae76e9adbcc52f11dab63de1824"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "20f987204882cf8e63eb02f8d0e1a668"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "b27051fb3469503ec6a20ae8397a5209"
  },
  {
    "url": "index.html",
    "revision": "29f30ae6aebac449233b1d93809a7125"
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
