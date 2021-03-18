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
    "revision": "f6aedcbcef5a0ac228d91e285b5ce4ff"
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
    "url": "assets/js/app.5d44ce67.js",
    "revision": "e33ebe71f1dbb73e1346f7cdb1059c79"
  },
  {
    "url": "charts/area/index.html",
    "revision": "83e655e7ecb14eb580d5409e2d8c0d2a"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "4d9c5f81a9f79f704cb13d4664b3390a"
  },
  {
    "url": "charts/column/index.html",
    "revision": "5fe16eabd95bf2cdd358d3c252e2387a"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "bda07a60c171566ddf57283c2271add3"
  },
  {
    "url": "charts/index.html",
    "revision": "fa4120d6754eeb7145d7351718ddc08b"
  },
  {
    "url": "charts/line/index.html",
    "revision": "a5f314b60c54e7962ac4540102886469"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "b71e313974079dff05e46ef222eab6ce"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "35261f35e1713d85970ba56eabb35432"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "fe84549f7ff84b757270109d474af1d0"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "c4b85505c54ab9a2c4c0c331f0e2f26e"
  },
  {
    "url": "components/axes/index.html",
    "revision": "fd8b8cf8d6a40ebf2db54a31bb2f4b30"
  },
  {
    "url": "components/colors/index.html",
    "revision": "2e3c3810bdf661d6358b1211189e3f36"
  },
  {
    "url": "components/data/index.html",
    "revision": "ffeff089ab861fea4d8518426df2dca3"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "8fc378a54374f2581cb247d08e2f049f"
  },
  {
    "url": "components/heading/index.html",
    "revision": "1f587f5d98316e91e4523620fa348437"
  },
  {
    "url": "components/index.html",
    "revision": "a49f5c4a73253fd1c83ec76f80721c8c"
  },
  {
    "url": "components/labels/index.html",
    "revision": "7c319d2e67a30abb805bd5e0003b267d"
  },
  {
    "url": "components/legend/index.html",
    "revision": "d71b47033b0488f9dc9c2d31f46147a6"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "f357411e0942e45e58ad86a19b4d659f"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "9ff2a79f0e69636620044c37856b04a3"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "87b6339738ffca2aff847619b29f2cff"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "d67ce39d1a500677085621272f43e8f0"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "b03e2fd571274197bc053c0a92d168d6"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "cace1675d2851c42582c07c6513eb637"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "e097aa691b017352c8ab70911bc15944"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "9925219f77d85fb5add6d64949c857e2"
  },
  {
    "url": "customization/index.html",
    "revision": "70c29633fe1efa166195c218278b6bbd"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "f999bcd76e57f7c15228247c2e9c6653"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "9898522ad3fce4b303017cd3e8348121"
  },
  {
    "url": "development/index.html",
    "revision": "a7f5d308d7263deb9e467f0cb08a646a"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "dea7c58876acdad6175abf189d62d9e2"
  },
  {
    "url": "docs/index.html",
    "revision": "72bb318d46f14a7eefab2ace14609a3c"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "8e0293a4ef83574c3d18c9794e925269"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "a657ff374fbec83d99abac693c15bb74"
  },
  {
    "url": "examples/area/index.html",
    "revision": "f44813d0f453334bd09316ffac520b6f"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "fe2c0e40986cc2a3e3084eabd9172b15"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "de5c98d8291f970df4a3af7be74e1ee2"
  },
  {
    "url": "examples/column/index.html",
    "revision": "79c609206a99c8fa4fe78683e590b894"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "b21fbdd0eadc1f06c4f5e779ce544528"
  },
  {
    "url": "examples/index.html",
    "revision": "d9a43d3845ef6804b975a25a04a70fca"
  },
  {
    "url": "examples/line/index.html",
    "revision": "94851a34321dc0829254a51b7af0dcea"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "d3b0bd31b657c09eaadfa4c37eb9abf7"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "53ad618598bf735b832af5e8293edde7"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "d6aaa6a2cdce06e94f850ad0b10b52f9"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "22648dc7218c9de87a2af9baac4a4cfc"
  },
  {
    "url": "index.html",
    "revision": "05997246e1bdea27d633db470a6409de"
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
