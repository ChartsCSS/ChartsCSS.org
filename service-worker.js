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
    "revision": "4a5551b37139a327a609a60951e1832d"
  },
  {
    "url": "assets/css/0.styles.f44e40da.css",
    "revision": "b07e4502998f8d32f95471b89dec6395"
  },
  {
    "url": "assets/img/html-css.png",
    "revision": "7ffa20302b6432f42fb6cc6c3a79ed51"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "61fc00dbd44c06bca1ad3bb08eb075a1"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "d9d62b2429b9777d6b5314ee3e2cb6af"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9e96680c.js",
    "revision": "52a8ae6fdbf141c4a606508b550795a7"
  },
  {
    "url": "assets/js/11.fd339af6.js",
    "revision": "817b62a86b3012b829b511cf91261d83"
  },
  {
    "url": "assets/js/12.62063063.js",
    "revision": "d141aa34e3a50291cec421f13440116f"
  },
  {
    "url": "assets/js/13.fee44438.js",
    "revision": "64c835fd16095f80d8bbe0cdcb3dd051"
  },
  {
    "url": "assets/js/14.4c42da19.js",
    "revision": "d0ce8998c0b7629ba9736819f9b72b36"
  },
  {
    "url": "assets/js/15.3e148092.js",
    "revision": "7593ba86503ff36d3da4792579f33536"
  },
  {
    "url": "assets/js/16.8394eec7.js",
    "revision": "d9d2d6ef9749537f19c811de6d9a724e"
  },
  {
    "url": "assets/js/17.f2f495f3.js",
    "revision": "c3804a9250b55818e9bf0e0259385d6f"
  },
  {
    "url": "assets/js/18.19b00ebe.js",
    "revision": "521d0cb788c33b20f59f08c798dca217"
  },
  {
    "url": "assets/js/19.cc016989.js",
    "revision": "3c4b86990d416f6cd3e6df304c407e01"
  },
  {
    "url": "assets/js/2.dcadb151.js",
    "revision": "a6e9ea7dad6c4c8106e7bed2712d7439"
  },
  {
    "url": "assets/js/20.96864112.js",
    "revision": "be07350b62003c7b0d690102e2cc348a"
  },
  {
    "url": "assets/js/21.3418c666.js",
    "revision": "76dd5bc1d210028f110254861aca30aa"
  },
  {
    "url": "assets/js/22.c71a586d.js",
    "revision": "5da485f5fff5ed78478c8f0e39b99128"
  },
  {
    "url": "assets/js/23.6c674109.js",
    "revision": "e2ff22520acb0cff5e3768b039585182"
  },
  {
    "url": "assets/js/24.f7b5a482.js",
    "revision": "48c0baa388538ea8654bff7eb07ce9ce"
  },
  {
    "url": "assets/js/25.4bfa9335.js",
    "revision": "8ca0eb4a5499b2e65124cd8ac76c1be5"
  },
  {
    "url": "assets/js/26.dcbb0c4f.js",
    "revision": "ab52ba27f0ee1cc634d12dcd67a5d7c8"
  },
  {
    "url": "assets/js/27.109f3694.js",
    "revision": "cc73b1ab6cfaae7184a88d567dfc9e7c"
  },
  {
    "url": "assets/js/28.79622416.js",
    "revision": "fdc22fbd36ed68a80db1b8aae524d03f"
  },
  {
    "url": "assets/js/29.df46d468.js",
    "revision": "bc27e28fc8a380923805d25d806957ce"
  },
  {
    "url": "assets/js/3.79b6f7a2.js",
    "revision": "744c5b20197025ad5ccb84093acbf137"
  },
  {
    "url": "assets/js/30.7c12ecc4.js",
    "revision": "802ae2cb20f1cf34f7632681786d7d5c"
  },
  {
    "url": "assets/js/31.fd6fc434.js",
    "revision": "8509769b99485761774e14e9883b335e"
  },
  {
    "url": "assets/js/32.116cace4.js",
    "revision": "283b8c86f546871da2158d0e7f53696d"
  },
  {
    "url": "assets/js/33.7de4c27f.js",
    "revision": "bdcf0def3b1998f1074cd785a7c52939"
  },
  {
    "url": "assets/js/34.6c6acf99.js",
    "revision": "764d281b7038663d59e76d581a61218f"
  },
  {
    "url": "assets/js/35.91855b3c.js",
    "revision": "44204ba9fe26ff04c8ea952f4031cd02"
  },
  {
    "url": "assets/js/36.e3e840c2.js",
    "revision": "9ea961e5be3debf4fd88ab86a7712a8e"
  },
  {
    "url": "assets/js/37.212b5f66.js",
    "revision": "9f377ab181a0b7669e69e3f6eef3d82c"
  },
  {
    "url": "assets/js/38.c2b37eaa.js",
    "revision": "60774d63ee0f5b744e7017946860b06b"
  },
  {
    "url": "assets/js/39.958ff3fe.js",
    "revision": "4f2ae17bd3f46e3b0c25fc12205724cb"
  },
  {
    "url": "assets/js/4.21a048d9.js",
    "revision": "dfd3573c5b79ce30f9ced86a6194d367"
  },
  {
    "url": "assets/js/40.df0c3afc.js",
    "revision": "f92517fcf373e90c9ced2ae78b6c2985"
  },
  {
    "url": "assets/js/41.7beff9b9.js",
    "revision": "4c74d093e5c92dd85fdfb627c5aa114c"
  },
  {
    "url": "assets/js/42.22e51071.js",
    "revision": "0f0d9f1658d2b73a3939e5f8c0d3b516"
  },
  {
    "url": "assets/js/43.683eeec8.js",
    "revision": "144e507b82d039083094457d1f25cf89"
  },
  {
    "url": "assets/js/44.cba1d7d0.js",
    "revision": "0061dcdddf05fc6894ae92bd7574c9ee"
  },
  {
    "url": "assets/js/45.d4632f84.js",
    "revision": "9efdb2cc75b4c370559cf79f97ce8dd3"
  },
  {
    "url": "assets/js/46.0e62398a.js",
    "revision": "6bf7ca443c13bad898fce6b2bac11b53"
  },
  {
    "url": "assets/js/47.61e5e2f6.js",
    "revision": "3cc1f5c8c5d78943b24e236eabf62be9"
  },
  {
    "url": "assets/js/48.85d5b566.js",
    "revision": "47d2a08abb28ca11570a31c224afa1d2"
  },
  {
    "url": "assets/js/49.afef26da.js",
    "revision": "8017fb8e51eac9970f1a204f2342d7d1"
  },
  {
    "url": "assets/js/5.f1ee4482.js",
    "revision": "7450b8142961ee381fd17b9240851e29"
  },
  {
    "url": "assets/js/50.94b6a264.js",
    "revision": "b3af82a8cdd0c2c792ddeb9c036f7332"
  },
  {
    "url": "assets/js/51.f11be6b2.js",
    "revision": "4e7e1bcca6ef7f71cb3f2be77b92997b"
  },
  {
    "url": "assets/js/52.55fa3c8b.js",
    "revision": "e9c1e363f7f5f707cc49e194a4168350"
  },
  {
    "url": "assets/js/53.b020e6c4.js",
    "revision": "1cc18a77f2cfe1c2c486affc08413fae"
  },
  {
    "url": "assets/js/54.9f8ce529.js",
    "revision": "c54d8f0ad5d0a83dc3fcc3260c287730"
  },
  {
    "url": "assets/js/55.5ba250d0.js",
    "revision": "94b2dc3372ec29efb81b7834f0d0f134"
  },
  {
    "url": "assets/js/56.2c4df9f3.js",
    "revision": "9bcbe73419f37c5949713a76c2089a86"
  },
  {
    "url": "assets/js/57.ad92c2c9.js",
    "revision": "8b81063e88f49f8cca46db7965b25b6c"
  },
  {
    "url": "assets/js/58.9159246b.js",
    "revision": "86a675199f9b8e8fa1686e9594e80b41"
  },
  {
    "url": "assets/js/59.37c53acd.js",
    "revision": "7f4231fe979c4755012460b93d1fa7ac"
  },
  {
    "url": "assets/js/6.f87ef0bc.js",
    "revision": "8c52bf78fadcf04a873cf5c78b2fb485"
  },
  {
    "url": "assets/js/60.3495fe1a.js",
    "revision": "910d6642898aea969c2f71b7152f386d"
  },
  {
    "url": "assets/js/61.5cfbe294.js",
    "revision": "1d44b2051197e1e28808e0008db2be76"
  },
  {
    "url": "assets/js/62.83778f7f.js",
    "revision": "797e46009bb1d2f5c251d228d8c4d48b"
  },
  {
    "url": "assets/js/7.6783306b.js",
    "revision": "e6b708e78a1f8b14424c90942f149396"
  },
  {
    "url": "assets/js/8.36728f20.js",
    "revision": "fa98c5d4d053f52fa5153978065a07c2"
  },
  {
    "url": "assets/js/9.7ea4c45e.js",
    "revision": "01b313dc1ac6cb365a46401d937ca17a"
  },
  {
    "url": "assets/js/app.0dc662c4.js",
    "revision": "88ac586ae4c19c05676717167ccc90a6"
  },
  {
    "url": "charts/area/index.html",
    "revision": "da55b336e0890f5d63540c8aee735b08"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "480bb0580bd8998c56d5651581eb150c"
  },
  {
    "url": "charts/column/index.html",
    "revision": "a2a9e3cc29faeefbec88feff57affc0a"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "acea4259437d95a0a9229fe433d8c9c5"
  },
  {
    "url": "charts/index.html",
    "revision": "2d6620d3a2eeff07b89db5307ba294b2"
  },
  {
    "url": "charts/line/index.html",
    "revision": "8a9478f449a3065e44dd64484d541c28"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "24359e0212f44c4424cb35e0d72e4e25"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "628fab5dfbbadd184b54fbc89f4aafe1"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "a3a432958890760d77ebd3b293fed14b"
  },
  {
    "url": "components/axes/index.html",
    "revision": "b1f6a442211670f636f80d3fbcf527ba"
  },
  {
    "url": "components/colors/index.html",
    "revision": "2f16c064b501555ce6995d7694d6ab99"
  },
  {
    "url": "components/data/index.html",
    "revision": "9b69e51abaac2d286a5292b72f00ee78"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "272af58396115cac36b3991ddb8d6912"
  },
  {
    "url": "components/heading/index.html",
    "revision": "b12fef50b7a5410a84078d60de2939ef"
  },
  {
    "url": "components/index.html",
    "revision": "674ab6a3571d5849523a7d133cf2f9d9"
  },
  {
    "url": "components/labels/index.html",
    "revision": "df7dedf5b58465cbc3a8bfc361114ae5"
  },
  {
    "url": "components/legend/index.html",
    "revision": "7f13fdd2dcd773c4aa07aa4b934487b4"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "fffbb8c543798cfaf40abcab23c7aca9"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "ea46ce0f730f8aabf0847883f85a3227"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "2245fa219b06829041639d3e79c6c950"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "f5785e3d588084bfdf02297e12700d45"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "7db49357f39cef4cb8cdd839bdc43548"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "eab94a1259a97acd15dfa3e7c4ba8e50"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "f5ddf4cd52c6efa004df93a0cb9245d3"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "c3e526f748dbba25e00e45bb0f42f845"
  },
  {
    "url": "customization/index.html",
    "revision": "6467290e6cff2fbb082b6379a7e57321"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "056cf1b28463b564e9128936b4a60066"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "dee8b763417456d55722485927118dfe"
  },
  {
    "url": "development/index.html",
    "revision": "4fdb6876f8323feee8a833a3b27c8883"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "ff89289623146d169570f7f5430358cf"
  },
  {
    "url": "docs/index.html",
    "revision": "3c74fcfb9bfaeb87aebfc486e8bf6c29"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "bd510bbc6618da34ff98d30e139b451f"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "8c5bb0c24dae183fc78baab7b2fe364e"
  },
  {
    "url": "examples/area/index.html",
    "revision": "d0e43cbc1983d456bb42774b907effad"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "b66ab67e7ce350d3c5e1e2011232b4be"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "3107ba94427aab17d0bb3a19a323b907"
  },
  {
    "url": "examples/column/index.html",
    "revision": "604132d3ab399f159554b444b614ae1d"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "814526e4050aaff67948c533ae97a1bd"
  },
  {
    "url": "examples/index.html",
    "revision": "6246f501d97d51b5881340a12348255e"
  },
  {
    "url": "examples/line/index.html",
    "revision": "bd561c69dcc7029fbc3f862288a3a2fc"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "b23257403f9f7e6422ad9f72afc77eeb"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "8ca9ad10943a562a930c11dffad3a406"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "88032c51735ab8d07eda00a010657842"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "d23fb3262daf325d9f25ad839c9a3a25"
  },
  {
    "url": "index.html",
    "revision": "3d9cdf1b6fd6f26ad4327ee7b41873d7"
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
