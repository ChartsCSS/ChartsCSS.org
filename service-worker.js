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
    "revision": "c22f0029a8618e8ba59da461091f0087"
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
    "url": "assets/js/app.e3a8ae75.js",
    "revision": "a2a65a8307dd159ea8377812f190c7ab"
  },
  {
    "url": "charts/area/index.html",
    "revision": "67446f6d8cdaca76d70ddf2433b772e6"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "df152aae7b441aacded11bfaa9e25a3e"
  },
  {
    "url": "charts/column/index.html",
    "revision": "ea0f190c17a9c6a1f9bec7bdfca17bef"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "9c68efd7626edf914a1084c13fc0fb16"
  },
  {
    "url": "charts/index.html",
    "revision": "b3a7bf98b09b34f4044e311af0a5dfc3"
  },
  {
    "url": "charts/line/index.html",
    "revision": "f1fa2fa06cad16aefb8701bb1dfccca3"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "0bc21fa684fcd5c5fab8c06fba0e5134"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "bf7ba6daed76de278df43fb3a0f83d49"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "f94e3c2dfe3680fab622af443a165049"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "d561edc77088916f596c68eb9d0aab04"
  },
  {
    "url": "components/axes/index.html",
    "revision": "7922a9b3b76fd953790c2dba7a53b86f"
  },
  {
    "url": "components/colors/index.html",
    "revision": "6b4e1a6a71125fea6c24bd16aaed23ce"
  },
  {
    "url": "components/data/index.html",
    "revision": "a3f07b50391fb4226bdac66618adfe22"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "26370e707e3dfe4c075183add5ec0283"
  },
  {
    "url": "components/heading/index.html",
    "revision": "9e63bbc0b98f3b47276dfac2356e0099"
  },
  {
    "url": "components/index.html",
    "revision": "6e8fc80c02ddb4a9809f593722367735"
  },
  {
    "url": "components/labels/index.html",
    "revision": "282d2a8ff661199de805336141e0cebb"
  },
  {
    "url": "components/legend/index.html",
    "revision": "c410afd97b40d13dcab7ed29addbec31"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "25b1207c708628e0ecc88237f11c53f8"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "f16b2b38a8b3597c58ca5d16dc7c51b7"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "40f89b419a3221c0c5a6411dae9c6595"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "627435c45d636df5251f410ec780e737"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "689efbab212e23c598f52c15d286dfae"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "ac81fd9db2b4020f1d77be99d40afe37"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "6d4383c9efaf51f6b604078fea365923"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "1ae3b1d62cd7b7e2f536244b38c7f48a"
  },
  {
    "url": "customization/index.html",
    "revision": "5e3c7c0aab0db68bfc19a97e202ad0ef"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "cb3873d351d5e0216176a30e3e09e039"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "48c268d942b65830e037d0a70becba60"
  },
  {
    "url": "development/index.html",
    "revision": "161b84c97104268f6326cf3d6b60160a"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "da84eb0a237317fe6dfb63b95190ea44"
  },
  {
    "url": "docs/index.html",
    "revision": "64331ddf61552619eb1cc899b2d922f2"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "744da96b1d6e671f937fa74f4dae5c3c"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "04f94b18f40b9d4b6b5bbdce784f17fe"
  },
  {
    "url": "examples/area/index.html",
    "revision": "f082ac984137c59605a95070687b9b39"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "5e11b4b8db00f9f782c4049236b22161"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "69353868617bb2bd2dcec7ad2ac41dc5"
  },
  {
    "url": "examples/column/index.html",
    "revision": "10e86a7850c249cf05d7bdaffff42483"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "6449e15c6a921ee95a194d94270d4b4b"
  },
  {
    "url": "examples/index.html",
    "revision": "7ddf070d4d093144957c991de8ef1c19"
  },
  {
    "url": "examples/line/index.html",
    "revision": "9ef925b38c00f6129e52a6fdf21163d7"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "b4cf9a7619742bc63ca68b9e28f0c0d0"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "965697e4bf50966e17cc7f9895e92cfb"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "e7aebe6c744f444d4eb1e4255bc87719"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "0e6b15374e47952dbcccff41f150d633"
  },
  {
    "url": "index.html",
    "revision": "8bfb569c24766982dff0e4664b76ed38"
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
