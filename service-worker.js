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
    "revision": "673e9a7d68e5fef55260aeabdb4601ed"
  },
  {
    "url": "assets/css/0.styles.1a68583f.css",
    "revision": "5c6226a9eb80e31efaddb698b1cc3806"
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
    "url": "assets/js/10.dccbac77.js",
    "revision": "c5544c100e11bab28db62376083d5d4c"
  },
  {
    "url": "assets/js/11.b1d544ef.js",
    "revision": "55e0c2e22f61c4bd46d25e2727e72a10"
  },
  {
    "url": "assets/js/12.bc070f2e.js",
    "revision": "6bba2cb4d923393a857cbdc2b4020ee6"
  },
  {
    "url": "assets/js/13.2d22dcdd.js",
    "revision": "06cb69854cc04a5d0d678271c11446dc"
  },
  {
    "url": "assets/js/14.4c9402af.js",
    "revision": "3d11c189731eb05307973770b1df2133"
  },
  {
    "url": "assets/js/15.384adf36.js",
    "revision": "3010d51618244090dc68e3b1e72445f3"
  },
  {
    "url": "assets/js/16.e6a45355.js",
    "revision": "8a81fd93e9f162f2173f212cccb4cdb2"
  },
  {
    "url": "assets/js/17.ea0265f1.js",
    "revision": "0af2d4c3842eb1e60d50f7a61320124c"
  },
  {
    "url": "assets/js/18.fba5d94a.js",
    "revision": "fb3a224b16397566c93ca3250d3311d0"
  },
  {
    "url": "assets/js/19.eba27f5e.js",
    "revision": "723368ed2608790d8bebb9a8495763d6"
  },
  {
    "url": "assets/js/2.8ffe75af.js",
    "revision": "d0c412c722639695a3f576bc6c3584c5"
  },
  {
    "url": "assets/js/20.619790d8.js",
    "revision": "a36812e0e42e860b2d9657741c714bdf"
  },
  {
    "url": "assets/js/21.df54d237.js",
    "revision": "859b59cede4908da8617fb3131a18f92"
  },
  {
    "url": "assets/js/22.c7d5f056.js",
    "revision": "ed4221f460bfc7233c95587e98b6da81"
  },
  {
    "url": "assets/js/23.03d81dd5.js",
    "revision": "aebc244544b65064c2f36600d08e190c"
  },
  {
    "url": "assets/js/24.32173ee5.js",
    "revision": "052bf6e95b847612517171612b5cc340"
  },
  {
    "url": "assets/js/25.397b7e92.js",
    "revision": "ec6480c9ab02f7537023cebe50be742b"
  },
  {
    "url": "assets/js/26.7d48474c.js",
    "revision": "0ef19b58f4696f828893fa3f07df213f"
  },
  {
    "url": "assets/js/27.8e0269f5.js",
    "revision": "dae867f42946a491aed8b51a3384e3d9"
  },
  {
    "url": "assets/js/28.2644bf3e.js",
    "revision": "b44c6e88f31a9fbb31330238d81efdfb"
  },
  {
    "url": "assets/js/29.fe70525b.js",
    "revision": "abc12311b6549348c7cce5802c7f2227"
  },
  {
    "url": "assets/js/3.77b77000.js",
    "revision": "b7d7a382e56d986b745d3b943795f159"
  },
  {
    "url": "assets/js/30.16c6cf78.js",
    "revision": "10b3f2b702d0314a408727106778fb11"
  },
  {
    "url": "assets/js/31.6bef53ed.js",
    "revision": "7ff4017b95d7073beba96769de7246ca"
  },
  {
    "url": "assets/js/32.4322f6b5.js",
    "revision": "55e546b9514c3ec3a8a211f8ae3cfa2b"
  },
  {
    "url": "assets/js/33.9b114dff.js",
    "revision": "bab0436443345374df4d7ea1d82bb3f2"
  },
  {
    "url": "assets/js/34.c57f221e.js",
    "revision": "0ebc73ea6fa83bc09027101b6e3a8b5d"
  },
  {
    "url": "assets/js/35.0e394c52.js",
    "revision": "3f443ea02812128101571d98771dc221"
  },
  {
    "url": "assets/js/36.773f06d8.js",
    "revision": "d93bbd45b3fb7f19244c5daf68c99103"
  },
  {
    "url": "assets/js/37.f3123c59.js",
    "revision": "5359eedc812cd1530cdf5c068df63f5a"
  },
  {
    "url": "assets/js/38.628eb71c.js",
    "revision": "ccb3ba888f142bdff672b06cb0c19c06"
  },
  {
    "url": "assets/js/39.55f5a106.js",
    "revision": "6a7c5bf21ba90dcd0272abe416749019"
  },
  {
    "url": "assets/js/4.fa06ac3b.js",
    "revision": "d225905132543c7d13d0ea67e298dac1"
  },
  {
    "url": "assets/js/40.bbdfb42b.js",
    "revision": "ae5c39a3e22bd961936c78ea9f5c4ead"
  },
  {
    "url": "assets/js/41.0e4afb74.js",
    "revision": "8fecac79b894da76dd1292f52d1432f2"
  },
  {
    "url": "assets/js/42.6d393970.js",
    "revision": "e03b3989a43ddae0cd6ec1b59876fa0d"
  },
  {
    "url": "assets/js/43.1e8e24fd.js",
    "revision": "90853ef77a6a82b95624af4a0a70bc76"
  },
  {
    "url": "assets/js/44.963e114b.js",
    "revision": "8d14a6d3c5a658d036f51ca0ff9544dd"
  },
  {
    "url": "assets/js/45.df1c24df.js",
    "revision": "bdc60d30158cf2a69529e1c82a242ebd"
  },
  {
    "url": "assets/js/46.68ad19b2.js",
    "revision": "6ff2ac849ca7d7cdb33f2b269cb1f82d"
  },
  {
    "url": "assets/js/47.dcff1717.js",
    "revision": "2cc34ee26fb024d42acb7b282db1c613"
  },
  {
    "url": "assets/js/48.dcdc3252.js",
    "revision": "7b4215864fff01e24f12c3f7be91b1d6"
  },
  {
    "url": "assets/js/49.b500b42b.js",
    "revision": "e089ec8178b81830a13b2e703cd482f0"
  },
  {
    "url": "assets/js/5.9680658c.js",
    "revision": "6bc8687ce627bc71bffe25d0047a49ee"
  },
  {
    "url": "assets/js/50.dad5feb0.js",
    "revision": "a59d557b51a193e69333c7fd148d8f07"
  },
  {
    "url": "assets/js/51.e8be123a.js",
    "revision": "00bce59f5ce1c07e4d0e1bc23d5a1aca"
  },
  {
    "url": "assets/js/52.40ed5654.js",
    "revision": "0e1a7aecbfafc58cd599d7e5a70d3e9f"
  },
  {
    "url": "assets/js/53.8e1c9c67.js",
    "revision": "12e8e8accef8774f8a589d66575cbb80"
  },
  {
    "url": "assets/js/54.8f7a854c.js",
    "revision": "8a38b6df8679106f30f959cca772e6b9"
  },
  {
    "url": "assets/js/55.d3f701a0.js",
    "revision": "afe5117b636a45a2a3f9fc65ff140ef6"
  },
  {
    "url": "assets/js/56.12681086.js",
    "revision": "a77658a99230d89f7b775b9c221b66c1"
  },
  {
    "url": "assets/js/57.7612d886.js",
    "revision": "6d715dc9766309acc37e418c1522e3d5"
  },
  {
    "url": "assets/js/58.3e26e3df.js",
    "revision": "6396fd74f146d3ce1e1d7856c644c205"
  },
  {
    "url": "assets/js/59.216df960.js",
    "revision": "66229bdd7374e30403fcd6765968acb5"
  },
  {
    "url": "assets/js/6.b99737e8.js",
    "revision": "ab1e1f7392206b31b110c4595f0e6b96"
  },
  {
    "url": "assets/js/60.e3b72f0c.js",
    "revision": "c3ebd19d8e3b69b21b579c65d9c60909"
  },
  {
    "url": "assets/js/61.ddac1398.js",
    "revision": "e1b52cd15d5c8c099b7de6e922bc0fa4"
  },
  {
    "url": "assets/js/7.55b5978c.js",
    "revision": "b2cc1887da4f3e3250c27ba1c3e9cc9d"
  },
  {
    "url": "assets/js/8.42934443.js",
    "revision": "6be2ce945196dba00598dfea05f9a695"
  },
  {
    "url": "assets/js/9.e5edf59b.js",
    "revision": "b2f0369edf95553314aa6c9b3d2521a8"
  },
  {
    "url": "assets/js/app.03966985.js",
    "revision": "ec7e6429516caae4b33a9f6549f7bca0"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "a51dab0d524563f4164c85b889f038bb"
  },
  {
    "url": "charts/bubble/index.html",
    "revision": "c4a32facaf801cc146c79355cd2849bb"
  },
  {
    "url": "charts/column/index.html",
    "revision": "44204eb8276a23a3958b8cbd966c14ff"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "3ba2a511b074eefa3ccd8ad0807a6018"
  },
  {
    "url": "charts/index.html",
    "revision": "42e8ef986ad12b8c6105d94c2e6e88fc"
  },
  {
    "url": "charts/line/index.html",
    "revision": "763c1286feb482de66b91812e8b9000c"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "412d12ff3ece3e47befe6830cdbb20db"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "421246674b75c2ba29e43df46ec77be5"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "e2d0203ba0c750b1df7895a57f45dde3"
  },
  {
    "url": "components/axes/index.html",
    "revision": "3ca22e7248fde24af07b5493f41e022b"
  },
  {
    "url": "components/colors/index.html",
    "revision": "a3b9156ef0b47b2220c87ed91f98bc5f"
  },
  {
    "url": "components/data/index.html",
    "revision": "f6bc8c8913b4784ba518ce4209e686d4"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "c6d6ac300fcd4f15ec215bc53b2bda83"
  },
  {
    "url": "components/heading/index.html",
    "revision": "07b17ac4dc9b37a13ee4bb54291fbfe4"
  },
  {
    "url": "components/index.html",
    "revision": "86f74a09c78fb8b3025429b22c533bac"
  },
  {
    "url": "components/labels/index.html",
    "revision": "a8577bcdd24d0e954cdd0a6d09e04ee9"
  },
  {
    "url": "components/legend/index.html",
    "revision": "48e88fe7f213e9884faa452d69268c97"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "baefa72c2748d4abefb5dfaeec824ce5"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "04f5bb0d93488dcc5c7c32edb7fd27b0"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "e66f75f8056f00a05142bb8b8be4f582"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "10a05e13979f07544069b5253a05063f"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "d122224aeccbd741a66de0a90ce939f7"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "c8f7452391dad015d6f8211f2b7eb730"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "b48454d01a40238aae900195d72f8f75"
  },
  {
    "url": "customization/index.html",
    "revision": "dea22c208c139efdd6d35b9fb2809b07"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "1e9e5a6b6421dec7011c74e55c43996b"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "209f84e48dd01143d96aa365018c4ee8"
  },
  {
    "url": "development/index.html",
    "revision": "7517ef57e22d8660d3da3a8d8b677576"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "796138846cc5f5e4be0b4dcd2fdf6ebc"
  },
  {
    "url": "docs/index.html",
    "revision": "13bae163f2a32f4a9a98d95dc032c9d8"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "503fa8e824fd8c29346032254565e8b3"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "41ee13446077ca6d498d82d1d6fbf599"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "53333e08ddf4c4c3b145dc149a224802"
  },
  {
    "url": "examples/bubble/index.html",
    "revision": "c2ebd81bc0b12a8ff2e3f9385bb34cae"
  },
  {
    "url": "examples/charts/index.html",
    "revision": "eebd7b7259cf97a838bdacdb776fbe92"
  },
  {
    "url": "examples/column/index.html",
    "revision": "020cb335e609370df7553190ce056a59"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "d15315da692afa3adc807c9164202b9d"
  },
  {
    "url": "examples/index.html",
    "revision": "9837292c117dfaffe744e2794ba2316a"
  },
  {
    "url": "examples/legend/index.html",
    "revision": "2b3db4271059515ec032b460b3d6be57"
  },
  {
    "url": "examples/line/index.html",
    "revision": "9dae60415703c54183a44e656f0d8dd7"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "0280b689928df82ec9c9e2a8f2df1253"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "82bd3851a1ed202872187e1dc6e20a78"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "a5b8e68ca2d3913db1b2be3e71f51c54"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "0e7461e3aee06aeb6874b0b1d9a200fa"
  },
  {
    "url": "index.html",
    "revision": "8278032430e2da1f09ec8212951e707d"
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
