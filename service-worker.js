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
    "revision": "532e3b3f73b55809a78305afc15c2405"
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
    "url": "assets/js/20.5a796ca6.js",
    "revision": "bd366144727caf694433ea3ea2db9eec"
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
    "url": "assets/js/40.b1dd819c.js",
    "revision": "39d17cdc5b85477dc4c033f2b9a6d55f"
  },
  {
    "url": "assets/js/41.a964e1a2.js",
    "revision": "96fbdf38366d35734e438b1fd2ecdec6"
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
    "url": "assets/js/app.e309ac19.js",
    "revision": "33ceb69d4b791ba697278c982a866570"
  },
  {
    "url": "charts/area/index.html",
    "revision": "f65f532a6352ac8400f445ef0a0cebaf"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "9e4a465eba4178fa075dcb3df2fd6f50"
  },
  {
    "url": "charts/column/index.html",
    "revision": "b4a7a066cd6906ed87f90f91e10151b4"
  },
  {
    "url": "charts/index.html",
    "revision": "4bc13b7a9c017ad3eedf2d0f9aa561ba"
  },
  {
    "url": "charts/line/index.html",
    "revision": "83968f8b82fab3ab49ed5fb7dec05256"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "1d113089a92293c8a3dae9088ec27cdd"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "31bc4c3232a48efd80b602edb716f04a"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "ad236cbef3b2c71a463dc2075310ac2c"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "3fc6aea99598070e0c12bc3b035742bf"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "4d0eb68b41d763337019fb302c5025da"
  },
  {
    "url": "components/axes/index.html",
    "revision": "f00cc1b1f18cfd9f946cf3c2586bc505"
  },
  {
    "url": "components/colors/index.html",
    "revision": "03ecb9a74967bfd5c01996ed9fd2b92d"
  },
  {
    "url": "components/data/index.html",
    "revision": "c588442021d814c8549cf4b2e36663f2"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "1b698e9822d5ff403837c69413f5a24e"
  },
  {
    "url": "components/heading/index.html",
    "revision": "06a051f65aff00a2f1e4d2cdac01e5c7"
  },
  {
    "url": "components/index.html",
    "revision": "0e87e3fd98b3d98e64c0d714322c0ef1"
  },
  {
    "url": "components/labels/index.html",
    "revision": "59d1212dcfbf139436aa45c6fe11023f"
  },
  {
    "url": "components/legend/index.html",
    "revision": "828df0fb95ede4fcd8d198ba43120916"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "b58d95bf0294ded3fa84b9cf307e144b"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "3c6458726d25c7ec7d531ceb2f7b86d1"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "1455e7c77fab29e38135b663f0fb84cc"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "58c6726c1327b8b28a88aba4f420c557"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "f15cf31d3d65e1eded36194c574c6606"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "4de2ec583331d9e938ee90fd8f7b7276"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "31d0c4bba9ecdf73ae3907f1700b0885"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "bcf6358c3a37e117afb214ac392e9a95"
  },
  {
    "url": "customization/index.html",
    "revision": "d4ee91f0cabfd3a8ae7c4b8fa30fe4a5"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "3adab6c1ff703716a505902f81c31ae0"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "6eba55d13187c438276da1ad80312875"
  },
  {
    "url": "development/index.html",
    "revision": "eeb367143d6ff8d0a864157c26b68d47"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "a345d8ed8d51ed2f8d7b945c4c5475e4"
  },
  {
    "url": "docs/index.html",
    "revision": "01b787827d2a1cf0bd7283863a5660a4"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "16f4ece8ac6cd90ef68ba286ebce1742"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "27d4b52642905f98e497ea563c411a43"
  },
  {
    "url": "examples/area/index.html",
    "revision": "dbbd744116cbc3845367c45e0544dd5b"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "6bc285860ce2a73b06cd9b0f1587addd"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "607668223f16c6ddd8dbcd9f77253dcf"
  },
  {
    "url": "examples/column/index.html",
    "revision": "be05d4d58ddf9493fe844920c2114919"
  },
  {
    "url": "examples/index.html",
    "revision": "adf2c761c133e9f85f31bb9513343974"
  },
  {
    "url": "examples/line/index.html",
    "revision": "0eac783879bad8ef450c12f12dcc669d"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "d69781e02f4c79af16806f9fce3ccccc"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "50368b211c6e491d9533021e9370c40e"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "6cc84847cbbadf3783175cc4ff0c7368"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "0d5eec035a52f5777d0708ac587a49a9"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "44f41bb7f49eeb73b17dd18967985fdc"
  },
  {
    "url": "index.html",
    "revision": "9a22bda74394a01fe2cae0639fff87f3"
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
