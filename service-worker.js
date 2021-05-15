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
    "revision": "c9e600aa4935d3e565bddd3a014a3da1"
  },
  {
    "url": "assets/css/0.styles.a2ea28e1.css",
    "revision": "5df537ca26b642018a11b0ad8b45b721"
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
    "url": "assets/js/14.fa132398.js",
    "revision": "fe1f546c37176da7ddbcbaa4c46d983f"
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
    "url": "assets/js/20.dd67062a.js",
    "revision": "81e638bd819fcc8dc0608a392c2016f4"
  },
  {
    "url": "assets/js/21.9f178c99.js",
    "revision": "a4dd59b6a0674490feeb83fba55018fb"
  },
  {
    "url": "assets/js/22.4f3f05b3.js",
    "revision": "c031b6c16ae7f138d654502bc9257f2f"
  },
  {
    "url": "assets/js/23.2e24e11d.js",
    "revision": "1395b144eaf4dfc3b0d663faaa5b0387"
  },
  {
    "url": "assets/js/24.26b23af1.js",
    "revision": "dcde3b9764b183440b0bd41cc0eb724e"
  },
  {
    "url": "assets/js/25.66f65ada.js",
    "revision": "ab2bc0eb29fcbdb72db2064889bf4601"
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
    "url": "assets/js/29.53982b61.js",
    "revision": "444400326c54d0a5864d11a6d43b344f"
  },
  {
    "url": "assets/js/3.f56f5668.js",
    "revision": "a6db01eb4f2963cb9b7b8296f1b889bd"
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
    "url": "assets/js/40.7af26e8c.js",
    "revision": "2edcec87587759cd3781197eb9d7bcc8"
  },
  {
    "url": "assets/js/41.a964e1a2.js",
    "revision": "96fbdf38366d35734e438b1fd2ecdec6"
  },
  {
    "url": "assets/js/42.2cf0a5ad.js",
    "revision": "1e3d7a188e8b53b2f282f678a8e39628"
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
    "url": "assets/js/46.2f5f38b9.js",
    "revision": "a7be0c4b014643de3f5aa28fcbaadbff"
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
    "url": "assets/js/50.3a3b58bf.js",
    "revision": "a66f5b7d0b43cf92435b87b324eb73fe"
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
    "url": "assets/js/55.b8b589f5.js",
    "revision": "5d4fbb48ebf260cb6514b21c1e84dc57"
  },
  {
    "url": "assets/js/56.56b37d63.js",
    "revision": "ad98b2ef7e5e067cbac0b6862a7241b1"
  },
  {
    "url": "assets/js/57.bbfd0ccc.js",
    "revision": "1d576e6dedb06d1288aad4b909a82e96"
  },
  {
    "url": "assets/js/58.6fc521fa.js",
    "revision": "8f50a30698c27f9f6f0674fa82d7de23"
  },
  {
    "url": "assets/js/59.a11c289e.js",
    "revision": "b55c26b142a3c15a92855a69532aa5a3"
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
    "url": "assets/js/61.68e2dc93.js",
    "revision": "acb1559df8a8d61ae597b1e85e954a8e"
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
    "url": "assets/js/app.2659a26a.js",
    "revision": "c0e6e2f5c7e50421c7ae858381303f84"
  },
  {
    "url": "charts/area/index.html",
    "revision": "409ec6ac86bd4b9efff2e5ba45a05b0e"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "b7661820fa920222730fd1543df754ca"
  },
  {
    "url": "charts/column/index.html",
    "revision": "8ee3b65ba7f9e6f5641e8ac5b7314c56"
  },
  {
    "url": "charts/index.html",
    "revision": "208b0d34c9809b5e3bc333ba0172539a"
  },
  {
    "url": "charts/line/index.html",
    "revision": "743313f7046fe6d952c2f1ae3e49ce43"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "6783beebaf9663082cdab8537ad324db"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "1129442dd0c60d0faa9fdf8456791d17"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "f93f212b6f8a31d5b8a8b3771d373b25"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "02b6ab43f6237f67ec3a3c8f02392f14"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "c975533cb743e0bc7e47385aa98b2e53"
  },
  {
    "url": "components/axes/index.html",
    "revision": "599f400fc43d10fad4f673c3a84ab3b5"
  },
  {
    "url": "components/colors/index.html",
    "revision": "d378a2be0f98a377a0756ebf4b2eb8f2"
  },
  {
    "url": "components/data/index.html",
    "revision": "143a5b9b71908afae8e91b9c0b9c0674"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "1f9627c2692624f3e71067cad976a8a6"
  },
  {
    "url": "components/heading/index.html",
    "revision": "34634d89930807ad4434f3c074a2f2b3"
  },
  {
    "url": "components/index.html",
    "revision": "f7e31aa8616bee3c91a3bc05909f7322"
  },
  {
    "url": "components/labels/index.html",
    "revision": "6570e63119d2947c1b25fcb18d8a7d95"
  },
  {
    "url": "components/legend/index.html",
    "revision": "8a2a48c1c86d37ea1e095e6a3a38ca57"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "cd6b988fd4bc0d168a142ca130c13831"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "aa68a1824b191762707aab10409d0147"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "20c1be01835001328275e64f1af131a4"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "590f472aeac8ff8a788c312b2fff1489"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "bea554e5a76d4b700fe6f7608aea1c23"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "3563f47955239efcce079433728429b7"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "e6b8ae7ca2f77c592e1cfd8c1d71dfe4"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "cdcbfdf17c885b28def7b72df9a33452"
  },
  {
    "url": "customization/index.html",
    "revision": "96c0d4e778535a139bacb1cdcc239ad3"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "2ff05a25d13ec2ebb66eb43171b68054"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "2465175c174c63dd119143f11c7de58f"
  },
  {
    "url": "development/index.html",
    "revision": "0603b98db2dc9804a9e8029c81575cda"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "9affe1d068d322fea5f9966b1564f2a5"
  },
  {
    "url": "docs/index.html",
    "revision": "87863b63993403beb4fada180f27b554"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "b37c21424c68b3fd68d08db6ba17770d"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "563cca7d66f31de353588c7236c42bcd"
  },
  {
    "url": "examples/area/index.html",
    "revision": "1df33a428e3edad0e2f33232b6696d4f"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "5ac64bb6187e9b996130b00b6d50f111"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "34c693a390aefe53e7b2e5ba8e7c0ce1"
  },
  {
    "url": "examples/column/index.html",
    "revision": "47c70b557713274964037163858d9103"
  },
  {
    "url": "examples/index.html",
    "revision": "cda732ee74d999eaeedd5ebbd89f0221"
  },
  {
    "url": "examples/line/index.html",
    "revision": "cf311f3f51c13de83832619a7e5e6f3c"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "e79fea1023c351ed54adeb002bbfec46"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "6aaf9e08fb93e65519255598effa95dc"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "7029b81cb6c075504b1fc3b10cfbb1bd"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "f1499c1ed30d0922c31ecf0786392b02"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "9d1a710bf270952eaaea515d64a7a739"
  },
  {
    "url": "index.html",
    "revision": "91f32ba402fa03c427f810007df1e18e"
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
