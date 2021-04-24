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
    "revision": "629ee9157ff23c3421a1382c2cfb5474"
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
    "revision": "e052684fdfc0872caa2a1138cdb17fda"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "3324ec97eb94cee3e419b48fccf7f516"
  },
  {
    "url": "assets/img/logo.svg",
    "revision": "bd28dd87f8e967fc3f42bec7df8ea8d0"
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
    "url": "assets/js/28.0ab97c11.js",
    "revision": "80f18f7b7e4733ea68b36095b9ab40af"
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
    "url": "assets/js/46.a6944fd7.js",
    "revision": "4ca7489b66792424e65fa4a1252d537c"
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
    "url": "assets/js/app.2bda4812.js",
    "revision": "0ad9ff64157096cd7f26982f2f5ca7af"
  },
  {
    "url": "charts/area/index.html",
    "revision": "0bfc337dd6cd1982e0b6df0a3f2a28f2"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "a7e0733cadb0d2244db0b152bcaaa2ce"
  },
  {
    "url": "charts/column/index.html",
    "revision": "1cc0aba6c4516dcba079796e13bf1a2c"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "b6e8aee9b77c4895b8c06d00105e0543"
  },
  {
    "url": "charts/index.html",
    "revision": "9f8eaa6e4559d31fc9e57231a7bb5040"
  },
  {
    "url": "charts/line/index.html",
    "revision": "4f8c5520a62d9bc12b480c7f0d717a53"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "b58a29f1fb6515c0fd7d6bd2a5378e79"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "cabb40427430ea6712b564b0c5b4acf1"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "97a4418e5446c81f8e6ad21adfbec21f"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "5a0ec863faee4164ee029d403e7c024a"
  },
  {
    "url": "components/axes/index.html",
    "revision": "bc177efcec3cde79d82bec16ed359c92"
  },
  {
    "url": "components/colors/index.html",
    "revision": "a8023dd3c2623e090bdc244965a2b111"
  },
  {
    "url": "components/data/index.html",
    "revision": "6187387b3e0bcecdc18e2f300740c000"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "22690b77079025e4e99e1ed680bdf578"
  },
  {
    "url": "components/heading/index.html",
    "revision": "ed836c32697df33dc2427162ec84d31a"
  },
  {
    "url": "components/index.html",
    "revision": "e595e17dcdc730426ed0759923d83135"
  },
  {
    "url": "components/labels/index.html",
    "revision": "e61a240adfadd4b673e6d1e2efa6d23b"
  },
  {
    "url": "components/legend/index.html",
    "revision": "34619133893074370f2681cb8b1b373f"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "f7ae64c9ffbf8ef0c4758551c15908ce"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "8af08acc98c40e02f4d8d8262cdf56c8"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "904b25ad3a3bad5dd8aff6caa11a0bec"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "e52deae329ccaabf0bf6046f174e1334"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "9807088905a5c55e8540333cbb270dd8"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "1901dd1ddebb96272dcd34182473f51c"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "333d067b6051eb1502ba4e4aac9b9218"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "6822a97a0da6f7c5c21b0b1f2100eb79"
  },
  {
    "url": "customization/index.html",
    "revision": "6a5a7781a87b36ece739671374dd52f7"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "72affda74f771c28a494efc0645423a5"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "0d9b9c0d826e156ef2b33fe3e59a49f0"
  },
  {
    "url": "development/index.html",
    "revision": "90e0d16c06d08781b9e979649e8e7e02"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "0cb05320cd182bebdddef5b943ed7374"
  },
  {
    "url": "docs/index.html",
    "revision": "c6f969740e55ae71482e4c64bf4183a4"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "4233845acd47c627f189ba04acf70896"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "c504a169ff3c37687936ed16a1da6d27"
  },
  {
    "url": "examples/area/index.html",
    "revision": "8cc0dc874390b79646c41731dfba2741"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "59d67a543834b4e8c38828967f87cab8"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "ea09eabb4f4b31f35a2b8eaa15f5694c"
  },
  {
    "url": "examples/column/index.html",
    "revision": "7e243e1bc28ccd9d79835a3f3f566b05"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "60804f9eca423e1f33703574c5ee9e3d"
  },
  {
    "url": "examples/index.html",
    "revision": "e8c8b94a79f2c753fcfe4be3f46772a3"
  },
  {
    "url": "examples/line/index.html",
    "revision": "6e0cb2e9b1fac1cdfd4d68cf73e70a2f"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "6971d3604377d7a4539cb2f22ab5bd58"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "2d2dd341c1d24483ce59a1cb0b9ee59a"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "55f862732c7803f2867d2a62c905ef6a"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "e2155c10efc02f54b9cd4f6aeab5c4fd"
  },
  {
    "url": "index.html",
    "revision": "1ac6522822815e84ba71dc2ec8db1c45"
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
