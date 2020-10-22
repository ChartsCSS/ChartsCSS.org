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
    "revision": "3f297fa1bcb45c0bc8c01ad0431d46f8"
  },
  {
    "url": "assets/css/0.styles.7983aa3d.css",
    "revision": "46b07f92b6f59ad958c80a774f421dec"
  },
  {
    "url": "assets/img/html-css.png",
    "revision": "7ffa20302b6432f42fb6cc6c3a79ed51"
  },
  {
    "url": "assets/img/logo.svg",
    "revision": "1952348de51a1715764f2c692dbc4783"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.146cae1b.js",
    "revision": "9688184d5b56361847597303fc55afd2"
  },
  {
    "url": "assets/js/11.42395215.js",
    "revision": "155b1794777cd8cac7332ba963fafbc7"
  },
  {
    "url": "assets/js/12.a56e80c5.js",
    "revision": "cf288fda947084f90c9bcb11a1c40041"
  },
  {
    "url": "assets/js/13.cff6d4aa.js",
    "revision": "31467eb63d18243140c0f3cc3f894923"
  },
  {
    "url": "assets/js/14.7d19ad6d.js",
    "revision": "f0383b2d3e7c7fb68f48c0d40ee2c34c"
  },
  {
    "url": "assets/js/15.e056e0dd.js",
    "revision": "336a57f340a1bd5256bbdb9e3e222613"
  },
  {
    "url": "assets/js/16.41e871e9.js",
    "revision": "7a30ea54e080e17ce411325dd89182b3"
  },
  {
    "url": "assets/js/17.f366df35.js",
    "revision": "3f6466013c0b12e305edb21855072d90"
  },
  {
    "url": "assets/js/18.bb0d00b1.js",
    "revision": "8803440285ea0ed06bb0e645dba19e13"
  },
  {
    "url": "assets/js/19.445062e1.js",
    "revision": "33b4cfc5beaa131298ddf8171a7155cd"
  },
  {
    "url": "assets/js/2.fe179995.js",
    "revision": "47a87fb4c99396d4a7b38c97e05689e7"
  },
  {
    "url": "assets/js/20.bad3d32c.js",
    "revision": "a2a23daf65c66bb6b39c9df97a7dcb6c"
  },
  {
    "url": "assets/js/21.dfa38806.js",
    "revision": "9039db2419253453ddb2ddd6d204d260"
  },
  {
    "url": "assets/js/22.319a77b5.js",
    "revision": "70e4ad121b2e8001c00ad19ce5b7f785"
  },
  {
    "url": "assets/js/23.8a2232e1.js",
    "revision": "79c6f058ec9db55f14b73760798abc0b"
  },
  {
    "url": "assets/js/24.6eb8b15e.js",
    "revision": "e756b99a94b5c1ec14ec82860552bdcc"
  },
  {
    "url": "assets/js/25.692b1318.js",
    "revision": "ee81daaf3520a4825f0ce502244e6068"
  },
  {
    "url": "assets/js/26.3d415a7c.js",
    "revision": "63528da21d51942c195475621cb2b514"
  },
  {
    "url": "assets/js/27.20b8357d.js",
    "revision": "ef833e4418575d03e7ddeb2c9d15f34f"
  },
  {
    "url": "assets/js/28.bf98b65a.js",
    "revision": "d9ac3da8af041bb4cc88e6f2e09c48e0"
  },
  {
    "url": "assets/js/29.abef8bfd.js",
    "revision": "a55558b57b8478bf236ec443e6ac941e"
  },
  {
    "url": "assets/js/3.adce5e1d.js",
    "revision": "107bfb253477d195bf82c1ebf512cbee"
  },
  {
    "url": "assets/js/30.5e54c669.js",
    "revision": "7ca6944234e77d98775a30e808e102e9"
  },
  {
    "url": "assets/js/31.a0554086.js",
    "revision": "bc8197be905baadb8875c0d6c2201dc5"
  },
  {
    "url": "assets/js/32.26a86250.js",
    "revision": "2756425eff5d6e6d30def5b9c76c59ec"
  },
  {
    "url": "assets/js/33.6bcbea6c.js",
    "revision": "0d69e7196dbd3eecb7758bfc6eb8e91c"
  },
  {
    "url": "assets/js/34.2b26a5c1.js",
    "revision": "7ceec888c2427360d8db4dbbc23df8fb"
  },
  {
    "url": "assets/js/35.b11527a4.js",
    "revision": "f96d984ef7f40f5bb131c26b4dbe885a"
  },
  {
    "url": "assets/js/36.ea34a34f.js",
    "revision": "2110782f32b9ab8b0e52bf656d36feb5"
  },
  {
    "url": "assets/js/37.0233227e.js",
    "revision": "db9c6977906d44f774aef8e8df53bdfc"
  },
  {
    "url": "assets/js/38.c0fbb767.js",
    "revision": "d5f361973fc6a5e25c839004c19ee80e"
  },
  {
    "url": "assets/js/39.7eaa6a4d.js",
    "revision": "62f298488d77e8e76664b9ea1edbfc5c"
  },
  {
    "url": "assets/js/4.65071136.js",
    "revision": "e2fdbc03242afc86045c3934b6755539"
  },
  {
    "url": "assets/js/40.deb25b2a.js",
    "revision": "c994584eefb2081d5389d6ebe0ccdd35"
  },
  {
    "url": "assets/js/41.e5b4bca7.js",
    "revision": "1d6cfa7065ea9cf5ac1d36df0a99e9a8"
  },
  {
    "url": "assets/js/42.54a26d97.js",
    "revision": "5bd1ec78f34789e19da65eff1aa1d6de"
  },
  {
    "url": "assets/js/43.e16dcb86.js",
    "revision": "a6f833e8f82f05be9d7da07a03604d78"
  },
  {
    "url": "assets/js/44.70af036c.js",
    "revision": "40bd829a6c754c374d77bb43d68b22b4"
  },
  {
    "url": "assets/js/45.4fe1aacf.js",
    "revision": "125a72f26bf34e73a422a1c814a13461"
  },
  {
    "url": "assets/js/46.4423ce80.js",
    "revision": "9a4d6553dd0a7c331478c41adf98d20c"
  },
  {
    "url": "assets/js/47.f62e21df.js",
    "revision": "7a1749c0b8065c8b01df2f88a7f93a10"
  },
  {
    "url": "assets/js/48.09e347d8.js",
    "revision": "95b6d3963b792574eb865599ed3a6dfc"
  },
  {
    "url": "assets/js/49.8786d22a.js",
    "revision": "43dc4a1819d7dcd9c87e9e98d9cab127"
  },
  {
    "url": "assets/js/5.1d5445c9.js",
    "revision": "d4d411fa0e7cca968185c03bbe47ecbf"
  },
  {
    "url": "assets/js/50.4f867eb7.js",
    "revision": "b238e375802df8984790429ca2537135"
  },
  {
    "url": "assets/js/51.bbf73d6c.js",
    "revision": "d7ff7f6f0650fb58872d0fe696c48d66"
  },
  {
    "url": "assets/js/52.ce09e07b.js",
    "revision": "92a1e05323364a5e06c0a642cddbda9f"
  },
  {
    "url": "assets/js/53.644ff422.js",
    "revision": "d8af3279217311555f7c4fed8f28aaff"
  },
  {
    "url": "assets/js/54.6f729b16.js",
    "revision": "aef668289c3ed15fe19d472bd38c02f5"
  },
  {
    "url": "assets/js/55.e5dd230d.js",
    "revision": "22bf0070f0b92b563881171e56cf653f"
  },
  {
    "url": "assets/js/56.0b19830c.js",
    "revision": "cc6625c6152e498247b716435c5a9903"
  },
  {
    "url": "assets/js/57.294ea4b9.js",
    "revision": "01b4ee03309d99c44b95000ac44872fb"
  },
  {
    "url": "assets/js/58.469de053.js",
    "revision": "fdcdc9d6ef52ecbcd97ddeeae03ac054"
  },
  {
    "url": "assets/js/59.df0c09bb.js",
    "revision": "51009b4fb74d12c60ac2cee040d26c36"
  },
  {
    "url": "assets/js/6.b21d50a1.js",
    "revision": "fbf8688b6fcce880cb28b0b5c7f41540"
  },
  {
    "url": "assets/js/60.5abc9a06.js",
    "revision": "2ba94eac5ad0ad5ee2b54e77189746d0"
  },
  {
    "url": "assets/js/61.bfab9ae7.js",
    "revision": "6be67e3eac224a610669578b7a079f79"
  },
  {
    "url": "assets/js/7.87a58ff9.js",
    "revision": "28013267b6c09f05c27b3668c2a17e3d"
  },
  {
    "url": "assets/js/8.59a633c7.js",
    "revision": "63ae95a75509f82257d64189c24a5bfb"
  },
  {
    "url": "assets/js/9.825dfde7.js",
    "revision": "ac13d48211d89b1e0291b18c7103f31c"
  },
  {
    "url": "assets/js/app.fabd1134.js",
    "revision": "f1a630e695e57847bf4804ca1162c839"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "23e516eb7b57fd6cb5096e896091872a"
  },
  {
    "url": "charts/bubble/index.html",
    "revision": "60725ad28beef9999c2bd559abe151c3"
  },
  {
    "url": "charts/column/index.html",
    "revision": "4dcb62b03c522b4c4ebe2eb7103e5781"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "25bff420b714891ec129b0f27488b489"
  },
  {
    "url": "charts/index.html",
    "revision": "9cebad7f72a8aaf23a67a68933ef3512"
  },
  {
    "url": "charts/line/index.html",
    "revision": "d3f8285dd1d79c644b8faae2ccc1d21b"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "001719f0f9008ff75b0c46a4b6c7d65d"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "f1b28c5fa67c843b567504610e675309"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "fa16641bd9f629fd29c3dd92535ec2ae"
  },
  {
    "url": "components/axes/index.html",
    "revision": "7422ea1c7433b9d20d7f58763cc13e9c"
  },
  {
    "url": "components/colors/index.html",
    "revision": "091d3d66166e3bfa0185a94afcda0dcb"
  },
  {
    "url": "components/data/index.html",
    "revision": "08009c5b1c1b94d23898046b39cbb720"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "0470bd8df301bf38fc9504e5d120f99d"
  },
  {
    "url": "components/index.html",
    "revision": "b7995d3ef0d22dc66ae816fc49004452"
  },
  {
    "url": "components/labels/index.html",
    "revision": "8a40a89ed815901445f30442fd03fcd1"
  },
  {
    "url": "components/legend/index.html",
    "revision": "a4b199d2cfd26ac92b43491c2f4d9dda"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "99d1b5140dde1142109d48be6ff024ff"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "c3a829afad2346a2b00713b5ab481d4c"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "abf8978573865fbf728b1e5e5b31f3b8"
  },
  {
    "url": "components/title/index.html",
    "revision": "34de97e519ee5ea46faf9c39d121ba6d"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "2018de1158e93ef638773a5b72d5476b"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "a4812d2b303c832129d8277d2162e271"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "e83029c7eac9fed45f9e3e2402a33c6b"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "e16fbb8c036cf51a46f07ba8ded2e0d8"
  },
  {
    "url": "customization/index.html",
    "revision": "aa420b6b053dafbeebe0ed9b7987e791"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "8ececfcda17baadf6da4a5a526b6156f"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "1bdfd3c00e493fdd8494817c82938b9d"
  },
  {
    "url": "development/index.html",
    "revision": "230a92ea1fd845e0d1f1a861a4e1d90d"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "6a2dc106bc1f640f74193f039f57ebf8"
  },
  {
    "url": "docs/index.html",
    "revision": "eb4e20877ca74c52cfd18ab9077ae9cb"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "7cab19a6d3670eee1b6d4b96774ac792"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "edd5cddd5ab23bcbdd79923ed4a0a876"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "1337b0b459137d44f6154f8274d096e2"
  },
  {
    "url": "examples/bubble/index.html",
    "revision": "d5cf8d57b188f9ffa04e90844ee50787"
  },
  {
    "url": "examples/charts/index.html",
    "revision": "f59c338067b2abe6154cebf637c6ff8c"
  },
  {
    "url": "examples/column/index.html",
    "revision": "1b160df5940ceeeaf58b76d4f65f307f"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "23eb977d52106535df53f33eb2dc0aab"
  },
  {
    "url": "examples/index.html",
    "revision": "096b3aae81d685bb2b9e99d922a4a207"
  },
  {
    "url": "examples/legend/index.html",
    "revision": "a5f4967ccc9bff4e422a6a3b9f09156c"
  },
  {
    "url": "examples/line/index.html",
    "revision": "699ff1c12195d9985978da3af64ee3a5"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "651aceab7f53a9729ae411a305f38c3f"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "6bf9ae77e42d2bb6db617b94811c9af5"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "4d16cdcb224f3b3856f330915c52aafc"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "081e8f1635791a7524a57232201f48e0"
  },
  {
    "url": "index.html",
    "revision": "2865b87fafd2457b0bb151a4e57f1c8f"
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
