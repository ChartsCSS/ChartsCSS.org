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
    "revision": "9d40ee4d11f1b0252ab42e134005f0e8"
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
    "url": "assets/js/app.6a752d18.js",
    "revision": "3a7161fbe416883f2c76f4e9ac9e7013"
  },
  {
    "url": "charts/area/index.html",
    "revision": "433caa9277deeddfa495249b0f4e5735"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "8fe370b635251fa8c48826dedfe4fc15"
  },
  {
    "url": "charts/column/index.html",
    "revision": "8480a1dc2041dd9edb1ac82f13f56cb8"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "5893283cec03a825b57cabf66ea43f61"
  },
  {
    "url": "charts/index.html",
    "revision": "b6738f88eb8220596d6fe56e54f68f62"
  },
  {
    "url": "charts/line/index.html",
    "revision": "1c7f88fd11a60d09873950609aa0f037"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "a93149f3630b714254b655e335fb7e14"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "cc6168333db5580a8bbb8f4c4f900a73"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "1f325e861d2aa088a72da9944269d831"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "411b8eeef31aa1a118352e01cac9ec9d"
  },
  {
    "url": "components/axes/index.html",
    "revision": "d1f950c47e32df677dc4b680e52c8f36"
  },
  {
    "url": "components/colors/index.html",
    "revision": "882dbb10f8fa15b3281fbe61e5402c92"
  },
  {
    "url": "components/data/index.html",
    "revision": "e0ad45e6ad4f1246104930ccc0b12a58"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "24458bfc98deb48717c44567ba9bbfc7"
  },
  {
    "url": "components/heading/index.html",
    "revision": "755f865d7b9e512a1495be1fbcf341a7"
  },
  {
    "url": "components/index.html",
    "revision": "6e2092768cfd0700b68f194bbfc59a41"
  },
  {
    "url": "components/labels/index.html",
    "revision": "bf5c4c1fbb4d4f0010b1f19d80f42f18"
  },
  {
    "url": "components/legend/index.html",
    "revision": "c5459d77e9c2c5cd2bd11ed56150cdf8"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "00daef38b52d688f64b78d6698c17668"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "7b3d734ca7db1da050883d1b79c79c7d"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "5c75824ab0ad15e713a4f0f12f8ea896"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "b931bcd4e717a5a683382340b3fd8cc2"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "def00ffb38633a05b9690ef9bfe35fac"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "69ee528a1cbdbec43fe240157368633c"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "de96d9b76dbb4dd0c407137e15182fff"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "12740d409b853ca95102a118c4eab1e8"
  },
  {
    "url": "customization/index.html",
    "revision": "cc49de0bbfaa51e4bdc3c96d2edaf4fd"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "9ef94caf461521f360f179fc211779df"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "b59365e6b4e7f188c2e24a246efb5af0"
  },
  {
    "url": "development/index.html",
    "revision": "1978e4a8803000ed70b8b84f4ac70e14"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "07a79846ec0b827143be58f3874c77f4"
  },
  {
    "url": "docs/index.html",
    "revision": "db487a10289e3b33f648492501e0464b"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "a99704303dd2b60348a52fca4b9388dc"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "3e62984ad9abb97e2673642ec080fc18"
  },
  {
    "url": "examples/area/index.html",
    "revision": "196e985d4d519f0b691c67c0913f0091"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "bf814bba6f4199f98ebee30473c937b8"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "67a4931ee759b1f00cbb589b27d683af"
  },
  {
    "url": "examples/column/index.html",
    "revision": "6da6aed25bf57a6e0094ca935f320d21"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "eb80377328b94880c17b16544d7f6f08"
  },
  {
    "url": "examples/index.html",
    "revision": "b417c31e03f0646acec8d5799b986af9"
  },
  {
    "url": "examples/line/index.html",
    "revision": "096667f49afb4177b08f19d4a264fc7e"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "0296231b7e7ed60ad54a0ed347f955bb"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "b5514da74232f71cd68499e71c277d94"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "cccd68776bf91dc6efe6bd6c8feced18"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "122f93e2de81dae203539d29d51d36e3"
  },
  {
    "url": "index.html",
    "revision": "df2a57a0c17678bf67d1fc4313958479"
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
