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
    "revision": "d221b0daad8032c21b4820bcd7c8c789"
  },
  {
    "url": "assets/css/0.styles.5bafc00f.css",
    "revision": "8f56b506be8848361cc0ab9b0a70decc"
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
    "url": "assets/js/15.77be5010.js",
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
    "url": "assets/js/29.8b4c0a36.js",
    "revision": "2276c4470261bb7f651fd76ce41bd799"
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
    "url": "assets/js/31.0f399a97.js",
    "revision": "50474eccae976b276984752a8909458d"
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
    "url": "assets/js/61.13b00f77.js",
    "revision": "a69fefb923bde66b5db3f54566a2d8b7"
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
    "url": "assets/js/app.341aa6a5.js",
    "revision": "86c11a72312a86ad7b7ede2283ed51d0"
  },
  {
    "url": "charts/area/index.html",
    "revision": "451401a27ba0a3760ff654cc7495a738"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "a6661412c7d1095751eefaa40e7da1fc"
  },
  {
    "url": "charts/column/index.html",
    "revision": "12e40adacbd148e402aa8648cb3217eb"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "ca806c2fbef7bade62c9e5691142c9ed"
  },
  {
    "url": "charts/index.html",
    "revision": "542fd1aeb8e1db992c17152a3cefc5a1"
  },
  {
    "url": "charts/line/index.html",
    "revision": "c2b13ced29007c80555ceb0ccee8e300"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "0c6eb432d7b03321ea9e749100a76bbf"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "757c4b916c5cd936c285f01ac7005610"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "2998a05965c1e65a3d52bf9b7b7eea2e"
  },
  {
    "url": "components/axes/index.html",
    "revision": "f0b79e6af188f541e033e3a44a9ae2c0"
  },
  {
    "url": "components/colors/index.html",
    "revision": "33c46a4356f47dd8ec53b24d759f9b91"
  },
  {
    "url": "components/data/index.html",
    "revision": "6476581ef51b473b93170d7e2084e048"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "89a60f9c787f4188d365c9ec919f76cb"
  },
  {
    "url": "components/heading/index.html",
    "revision": "98e29703a5c1ed010c6e8cc990a73495"
  },
  {
    "url": "components/index.html",
    "revision": "5fe4ab3795de9222a3378b2ec7493f0e"
  },
  {
    "url": "components/labels/index.html",
    "revision": "69e1d7dae636068870c13dee70d2de0c"
  },
  {
    "url": "components/legend/index.html",
    "revision": "6c8d5e54f30885a8a3bb6d20fa4f60f0"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "0e06638429408ba00d82c0d5c1ee454e"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "5ea8811a294d2d7c44fa2879c6d404de"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "157d15d7ef7301d5960941cc559cc2c4"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "9f6840b7d45b16c55bb00b45f72b638e"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "c6aa986086643b468a08b83bf4541c79"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "e35d71fb00bd5ccb0bb50583c1618939"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "4e4a645656ef03789853119c016208d1"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "55fffdf72ed297988048e47399898599"
  },
  {
    "url": "customization/index.html",
    "revision": "e384e4dceb96abc634686347acc0d5ea"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "e3e4b49348a5ffaaf21d21d1a53803c9"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "ad14c65832efa128cbb4b63ae641b454"
  },
  {
    "url": "development/index.html",
    "revision": "cf5b55c5f050268dd682c80f6d4dc6d8"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "47867ebd38a71d73dd4e80d3f6efc4ff"
  },
  {
    "url": "docs/index.html",
    "revision": "10e425a955c17b3ce79a73e39e8e8f22"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "b916ddb54d49b2f466f332af38ce4766"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "939e1d9bac7abda0e7becab54b856130"
  },
  {
    "url": "examples/area/index.html",
    "revision": "1f8fd5353274117866098007c04a37bf"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "21d8b914d77b25ae216b7dcb3c04837e"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "8afe3b19576abd3413dfb50c023791f3"
  },
  {
    "url": "examples/column/index.html",
    "revision": "af78440c0d21b1f4e09f5519008fb6ce"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "4ce47ca702cdf8ce190052fcc4863606"
  },
  {
    "url": "examples/index.html",
    "revision": "6612531f1bd01fed3954fb7b5ba25b77"
  },
  {
    "url": "examples/line/index.html",
    "revision": "1f913ce1f9630b58e7d4225f7dc14452"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "7637ad7ba6236f6c6bf3bd0024a2c4bb"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "a5be6bae29a51db57e82d12ad156b475"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "b8c5b1c57f3002c9e63d798426c4f585"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "224b44db8938c7ba6d415136d4638e8a"
  },
  {
    "url": "index.html",
    "revision": "42acb7549ff21fc9394f1f7e966d5687"
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
