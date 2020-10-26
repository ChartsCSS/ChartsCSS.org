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
    "revision": "622f81e4d88d4ceb196831bd7d21d560"
  },
  {
    "url": "assets/css/0.styles.d1c44b01.css",
    "revision": "0bb37dbb13b4bab88d4b95239ed35240"
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
    "url": "assets/js/10.34dd0178.js",
    "revision": "e483bd7b470c7d7224aea63c958d8855"
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
    "url": "assets/js/14.f78c23da.js",
    "revision": "3f6165783fbb380aa11d2bbf6889e679"
  },
  {
    "url": "assets/js/15.384adf36.js",
    "revision": "3010d51618244090dc68e3b1e72445f3"
  },
  {
    "url": "assets/js/16.be86cad4.js",
    "revision": "9ba267ed64a11360f3f798b542dd0b9c"
  },
  {
    "url": "assets/js/17.171b20be.js",
    "revision": "0669e49e8aaca2ca446c8f2c6952ae9e"
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
    "url": "assets/js/2.390ace5f.js",
    "revision": "8f5e2cadbc08627713397c3742b0dfdc"
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
    "url": "assets/js/3.0c16e86a.js",
    "revision": "451a497eefb8b2c24fbf3c6983d2e2c6"
  },
  {
    "url": "assets/js/30.da8d9ae1.js",
    "revision": "a454f83c3ddbfbeb62476c43a55c2257"
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
    "url": "assets/js/33.d789fb6e.js",
    "revision": "8cdc0ecdf3d818c6c9947af72e4e6de9"
  },
  {
    "url": "assets/js/34.447b4b51.js",
    "revision": "c1417cf45e2fa5aac416e8be5c69dd45"
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
    "url": "assets/js/app.ac49cbc7.js",
    "revision": "10fcb71bbf47542d10bc9a8088cc4ea3"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "e9a20a1d29da834a966ea950774fb018"
  },
  {
    "url": "charts/bubble/index.html",
    "revision": "df3f13fa12471c6f67124c5444743f96"
  },
  {
    "url": "charts/column/index.html",
    "revision": "66112bd389138c3a3bfdc4c1f5f7db2a"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "302b6a77703f50697c5ac4fd3b4eb8c8"
  },
  {
    "url": "charts/index.html",
    "revision": "d58d90585f8c8be7b2d74287d4bef7f7"
  },
  {
    "url": "charts/line/index.html",
    "revision": "6807b7c14be65acc4bd13a402b8545e1"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "2e37ddee9fe59e981a0df3d140615f09"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "d6452ad46bbc885782fbceae2e1c8d9f"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "64d9c7eeb0019918eb4e69451e7ad53a"
  },
  {
    "url": "components/axes/index.html",
    "revision": "d45a0ba1cf8febb0ceefc52608296066"
  },
  {
    "url": "components/colors/index.html",
    "revision": "f9996544e3733dbf98d201d15be8a383"
  },
  {
    "url": "components/data/index.html",
    "revision": "63de009c6fdc9e1d79488cfb54232fc2"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "08ae4ab9b0f9cd64b38bff134672f370"
  },
  {
    "url": "components/heading/index.html",
    "revision": "894f7f43a9b7182dac21e7b004f0f04e"
  },
  {
    "url": "components/index.html",
    "revision": "8dbeb7d57f19da974fb6fbb2c757942b"
  },
  {
    "url": "components/labels/index.html",
    "revision": "7f5e05607ab26df82fc5ddcf1490ac79"
  },
  {
    "url": "components/legend/index.html",
    "revision": "8675a54d5e77ba708404f30ee4020f1a"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "aafc3ba3d40dae0efa47f821612b3f07"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "5688ea7d1f5fa122d463b35d487f7f20"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "997fcd8c92f834d1f52093bc4a532ec0"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "82837f352fe6f333fc57d16743e641d5"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "688c5758364ce16c5dee68a9536d1b0e"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "526abd67af3064a078ffb26b17fc3a90"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "3e1ea0ad2b1a146ef08df0581e30e2a9"
  },
  {
    "url": "customization/index.html",
    "revision": "6170fb08f385eb929e2e238025a471e1"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "68d23fb9f1e7e8e197b6124edc963fc2"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "5b1532f1dcc989230d41ac6753a18b0e"
  },
  {
    "url": "development/index.html",
    "revision": "c124c7c2aa2119973581f92f2612fa2c"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "87bf5fa4cb4deed4ca899a9be8207e49"
  },
  {
    "url": "docs/index.html",
    "revision": "b10e51aba663af81779a8a2e48a7ad56"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "6aca8b401c6c64f90bf8f8a8b2f239cc"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "4664e9fcacd15ae8e2eba20d48461860"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "da69a84139e0042b085421fe2647ce32"
  },
  {
    "url": "examples/bubble/index.html",
    "revision": "cc86331542b3ca42c00b425ea87d9f6d"
  },
  {
    "url": "examples/charts/index.html",
    "revision": "9fd6d0d44ec470a56ea9a28497ea9452"
  },
  {
    "url": "examples/column/index.html",
    "revision": "277c73a48eeefd68f048a978d53b65ef"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "eca5be9364ad526c8db14ac8fc424eb3"
  },
  {
    "url": "examples/index.html",
    "revision": "44b9895050589f804d822dbe68d66cf7"
  },
  {
    "url": "examples/legend/index.html",
    "revision": "dbc0e85f913195cb1eb6c37b216c551f"
  },
  {
    "url": "examples/line/index.html",
    "revision": "39de2f4fe3ee357ca1a6ed3b95be857d"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "e57f12237255e85b4bfa4b2fbd70dc4e"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "68029e606decf3cc2412876586ac17e4"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "02899c624d3fc9cde54a8560308cb62c"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "2b0b6794c4a649043c9555ee1afa0bb4"
  },
  {
    "url": "index.html",
    "revision": "74f63a6f47cce56c4c9925ce413b7efd"
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
