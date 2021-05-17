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
    "revision": "b3401333c145afab7cf89ee8ae72e6b2"
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
    "url": "assets/js/27.0cf3d54c.js",
    "revision": "9bc1e950e72e7f5b26ed77ddfad6d2b7"
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
    "url": "assets/js/40.a70181aa.js",
    "revision": "0a4bd9de8de9acfd69ba96d30387ea37"
  },
  {
    "url": "assets/js/41.a964e1a2.js",
    "revision": "96fbdf38366d35734e438b1fd2ecdec6"
  },
  {
    "url": "assets/js/42.ab96df3a.js",
    "revision": "6af0266748054f4a2e899a97bdcc98d3"
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
    "url": "assets/js/app.dc054bff.js",
    "revision": "fcbf4d75d455c2341dfda8af58416b30"
  },
  {
    "url": "charts/area/index.html",
    "revision": "34a93925022353f5272d8205a71039bb"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "9ccaab00131617088e5f4fba8f1dc306"
  },
  {
    "url": "charts/column/index.html",
    "revision": "431939c727546c09eb5b706435293e2d"
  },
  {
    "url": "charts/index.html",
    "revision": "b045fd111ac095ca94d3bca153ef408e"
  },
  {
    "url": "charts/line/index.html",
    "revision": "48a7f7de8cb4832a524a77b94cba596a"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "f99652e9acaab158b0dfed2c214d7bc9"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "58481751cb4ead81288aa839ee08947c"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "d8becf32640aa2bb35dcba4345ea826b"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "b5e9f885c24d7d8f5f1ac5e66dc9362b"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "5aefc0646905a63070dbb7deed644451"
  },
  {
    "url": "components/axes/index.html",
    "revision": "296a733f982febdf3c995f046c19fdb2"
  },
  {
    "url": "components/colors/index.html",
    "revision": "c2f3aece273b77f7153d6d63f2814172"
  },
  {
    "url": "components/data/index.html",
    "revision": "d4c3cfcbe3080795d6e4bb6e05cb0474"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "2b4cc0e0c5c2c40dd0a4d62455d7ac70"
  },
  {
    "url": "components/heading/index.html",
    "revision": "a9d4cb6882990b0f048e8cdaa2083c85"
  },
  {
    "url": "components/index.html",
    "revision": "3bcf4e019836a1da4b7090257d618f84"
  },
  {
    "url": "components/labels/index.html",
    "revision": "01ffa722d482c54401ba7081c229584d"
  },
  {
    "url": "components/legend/index.html",
    "revision": "63522ee867833ffce26246430f7e07d5"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "38c9fa03732b67ae8b2983afd7625e43"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "1dfaf0d567d1d406820acc4ccf187c59"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "b4d8fd184ff38824111fd093cae1a77d"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "d87b6f9ad78652359f259225ba07a77f"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "2f8c70b4aa6d49cade972bc1de1a740f"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "a9078ca8e083f1404b4958bb8ff1d00f"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "d8059004992f0b128fa9f79279198bfe"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "7c6851b824bf1d468bee1792913b332c"
  },
  {
    "url": "customization/index.html",
    "revision": "3527a7fd6e0cc4e28957e241b7c82fc8"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "23e6f5aa594cecc3b0f23a754a174f17"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "1b93a18d3c63769b5d764146d9ea6b6a"
  },
  {
    "url": "development/index.html",
    "revision": "46624d629f61d2ccec919e514d1d781b"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "36c7c80f99356401f2a230ff332315c0"
  },
  {
    "url": "docs/index.html",
    "revision": "c620f011a79cef038724c4da185ca8b5"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "e1ebd2fc5ec08c828eab6e786fba8d32"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "f2fb4a44ceff662864eff9d97320d20e"
  },
  {
    "url": "examples/area/index.html",
    "revision": "4fd67c3c225893e12b83575ff52b726a"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "7f4bafc40514557a583165ce585ae5f8"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "469dc2f93d2a15295ec18ef1be3d41cd"
  },
  {
    "url": "examples/column/index.html",
    "revision": "3a189e63012bac942757e5dea849f2c9"
  },
  {
    "url": "examples/index.html",
    "revision": "b0cc63294ede3f40963501f51bea4b2c"
  },
  {
    "url": "examples/line/index.html",
    "revision": "4047d01358e5acda788d6907cc90fc2b"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "bfaebfa435f90ec214de88c7ba8c774e"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "23fa6a4636f83496a2f143bc80197a0c"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "7809bb52f622b5f73eb4d76645707994"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "6a47fef90a010fb683750c3963dba178"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "e761d23eb172a4f6e8437cd790573dcf"
  },
  {
    "url": "index.html",
    "revision": "35dc1e0d0fa1976fa1873715015c4a0b"
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
