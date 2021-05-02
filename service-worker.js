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
    "revision": "5e2e8bb748570b82445a53c4d5bc0ca3"
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
    "url": "assets/js/41.23c2d818.js",
    "revision": "6517289110cd465512a46836cfe00150"
  },
  {
    "url": "assets/js/42.7b9fa9ac.js",
    "revision": "5ed9039ae0092bad9e63c332d7e55854"
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
    "url": "assets/js/app.9ec435cc.js",
    "revision": "d7977ea8e308dc3b954c7f32071953a8"
  },
  {
    "url": "charts/area/index.html",
    "revision": "1f689292816219cc0ec64d0e301eaeec"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "51fda4d28d44dd41d78db0aaa1a4bcc3"
  },
  {
    "url": "charts/column/index.html",
    "revision": "5f04cee23683ca212898f16ecdb045b8"
  },
  {
    "url": "charts/index.html",
    "revision": "4ebf6807a3ca86d95d082cfadb24e26f"
  },
  {
    "url": "charts/line/index.html",
    "revision": "076e18c72230f4e938fff1c06eecb474"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "f6204d059a971d789ec8692f449061b6"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "b45ae8b3795734115e763905f306a861"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "adaff676602f24fbe28be42bb4c35467"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "b6187e3dfa6d0fb64f3c039261bcf338"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "e5b58f35b81580cfbad86f94ef27eba2"
  },
  {
    "url": "components/axes/index.html",
    "revision": "3c741ae6aca898936ba0fd5d53b9daa2"
  },
  {
    "url": "components/colors/index.html",
    "revision": "fb7906c792f73b761ebc9f6ed0f5143a"
  },
  {
    "url": "components/data/index.html",
    "revision": "8c170536263d4d5c9c7fed3e9bcc2dcc"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "f08015f39fd0da00ef5b4ab3adde8dc7"
  },
  {
    "url": "components/heading/index.html",
    "revision": "40dc41d89250cecca1ffaf5ef6eea733"
  },
  {
    "url": "components/index.html",
    "revision": "4dcb904c0fc021c8bf197ae1fa3809fa"
  },
  {
    "url": "components/labels/index.html",
    "revision": "69b00b090f8f2ffc1e5122f8e591270f"
  },
  {
    "url": "components/legend/index.html",
    "revision": "d34d43ae41281bc80d21e82892b77d18"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "327cd24065bb7fce03b190bf942e6103"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "4cc2f474d9ea47e0d8431fdefbd3109c"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "ad6bf8bbaa44d866e0d9a5a57be25ad2"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "31037d68844513f4be39655586c13148"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "ba184030ee3bbdd8461578e430e98b2e"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "9cd3d272de168f345c343db17bc60d5e"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "aec618ba2e213739ec02d83c9f9aaa92"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "059c6f5a0f87e3f3bcf54eb42deebfd7"
  },
  {
    "url": "customization/index.html",
    "revision": "d0ef4a8ee91e9fa632128f8bb0f4da5e"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "59eead0a5c079ad5e5c601b5c0b5d54f"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "56f98f33e4066aafeddbc32de247a6c4"
  },
  {
    "url": "development/index.html",
    "revision": "f4aba70cba86c17b950b34d43e941d45"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "d60bb3fc95cd236ccd6302e2c88a9a6c"
  },
  {
    "url": "docs/index.html",
    "revision": "52b1dfdefea6c14d3e65ef2606268ddb"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "f61477685de75a488e7f47c7f1c78120"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "52999e73508e3043c1f3edb4a7c55e8a"
  },
  {
    "url": "examples/area/index.html",
    "revision": "7534820c7a537c15a8bdfcd057e08d4b"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "cc34d5a7198c53dd721051c7bc402353"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "8efa8ace295656d7b38c03f97be548a7"
  },
  {
    "url": "examples/column/index.html",
    "revision": "5376dc7484bfd92b93aaaa74160778e1"
  },
  {
    "url": "examples/index.html",
    "revision": "13d4687b6de225f9668b839d9f816804"
  },
  {
    "url": "examples/line/index.html",
    "revision": "027e4e11ba9af145a59cd3fdd0ea59e2"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "bf42880661c75ff634f0ccfa5ff58b43"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "387039481792d71bccf258a67db878b3"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "337a322fc4ac9ba8c336492e89810e01"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "d1d3b1a45e6dc036548d20a88df2aa65"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "826fc596c02f86b0dfa7c42eb6a0c1c3"
  },
  {
    "url": "index.html",
    "revision": "9f17f13bdef75739918e38384ffed836"
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
