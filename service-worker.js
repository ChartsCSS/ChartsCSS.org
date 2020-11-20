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
    "revision": "4d3123c732c3c26c2ea1168a3434408e"
  },
  {
    "url": "assets/css/0.styles.0e131c17.css",
    "revision": "168d3bc0c450d6455ae19e1ad87a4b03"
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
    "url": "assets/js/19.6718adf7.js",
    "revision": "7da5b241199f39de1520691585f48111"
  },
  {
    "url": "assets/js/2.dcadb151.js",
    "revision": "a6e9ea7dad6c4c8106e7bed2712d7439"
  },
  {
    "url": "assets/js/20.a50030c8.js",
    "revision": "3d963e79806c4e2a09e9702281afe61f"
  },
  {
    "url": "assets/js/21.81ed39ea.js",
    "revision": "fa67d7f12d23721dccb32b955929476e"
  },
  {
    "url": "assets/js/22.c71a586d.js",
    "revision": "5da485f5fff5ed78478c8f0e39b99128"
  },
  {
    "url": "assets/js/23.b7a84cae.js",
    "revision": "4cb2d38667c6e70ea99106cc40c36cba"
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
    "url": "assets/js/29.a9188458.js",
    "revision": "780bf864394f49224ee436ffa509ae24"
  },
  {
    "url": "assets/js/3.99b631e7.js",
    "revision": "ceecc210a3db06a5487601044b2d8733"
  },
  {
    "url": "assets/js/30.7c12ecc4.js",
    "revision": "802ae2cb20f1cf34f7632681786d7d5c"
  },
  {
    "url": "assets/js/31.ae440c1f.js",
    "revision": "ea0a68b0011672db3883c933374970f7"
  },
  {
    "url": "assets/js/32.22423064.js",
    "revision": "0c28a87d7abafa9060d39fe0cf645ab3"
  },
  {
    "url": "assets/js/33.5cad1818.js",
    "revision": "1d6e2da2c55a55e9b105b9cb2c7c83f2"
  },
  {
    "url": "assets/js/34.d6276c55.js",
    "revision": "142ee162422ec04e851f587ba29381d9"
  },
  {
    "url": "assets/js/35.c080a949.js",
    "revision": "bad7eef06dd23b99920b8a63e1277a58"
  },
  {
    "url": "assets/js/36.c9badce3.js",
    "revision": "24369a399b7d15624de08011ba3cad8d"
  },
  {
    "url": "assets/js/37.64bffd2c.js",
    "revision": "82d899462ebf49b41e1edec893ba9dd1"
  },
  {
    "url": "assets/js/38.397cbdc4.js",
    "revision": "f70bd5ec38fd611b7fc90a89f68d14a1"
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
    "url": "assets/js/42.95d6a5e9.js",
    "revision": "f857c1c6e3d140fbed6bb43a54269aea"
  },
  {
    "url": "assets/js/43.683eeec8.js",
    "revision": "144e507b82d039083094457d1f25cf89"
  },
  {
    "url": "assets/js/44.d944610a.js",
    "revision": "646d9fe4126d7258dc19afff2157b63f"
  },
  {
    "url": "assets/js/45.d7cb9b01.js",
    "revision": "50897bb6320f266093d1d5b8239ba12f"
  },
  {
    "url": "assets/js/46.c56e430c.js",
    "revision": "d572b2eb760262d17c2fab613e1c81a8"
  },
  {
    "url": "assets/js/47.e9d3796d.js",
    "revision": "9a7f9786af8e2a9b7cdcd41279430bf9"
  },
  {
    "url": "assets/js/48.85d5b566.js",
    "revision": "47d2a08abb28ca11570a31c224afa1d2"
  },
  {
    "url": "assets/js/49.3c2a6abf.js",
    "revision": "df07aa67e8d18ec6ce179b6fcdce4f70"
  },
  {
    "url": "assets/js/5.f1ee4482.js",
    "revision": "7450b8142961ee381fd17b9240851e29"
  },
  {
    "url": "assets/js/50.38c2e9ab.js",
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
    "url": "assets/js/61.5ed06b49.js",
    "revision": "b1553ea41c06afe960011790f04f956d"
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
    "url": "assets/js/app.82c9994c.js",
    "revision": "539e05f478eaec4433ede9bdbc3a7af5"
  },
  {
    "url": "charts/area/index.html",
    "revision": "13d5813a3f8e0cf4167bd6d5d0d04317"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "c744d5da792935015b13bf2f0e163e88"
  },
  {
    "url": "charts/column/index.html",
    "revision": "dab719b877f392e5020fc2520cb2d157"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "09d86b5d4bfc139b3b989571f7c37c57"
  },
  {
    "url": "charts/index.html",
    "revision": "470a061dd4312ab49895111a4ab06d71"
  },
  {
    "url": "charts/line/index.html",
    "revision": "ffd5f4c2583bf4300fd206ce1b1efa75"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "aaaca79408fa258758a85104cc380eb8"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "338e7c8a424ae82af354858c64dbb5d8"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "2b1a864a441020f01e99b358ac12b5ce"
  },
  {
    "url": "components/axes/index.html",
    "revision": "2eda1259070e28785647fd53ebe283b1"
  },
  {
    "url": "components/colors/index.html",
    "revision": "f0c67ecdf9fa70f78e1fb252716f847b"
  },
  {
    "url": "components/data/index.html",
    "revision": "fe3ace558dcb138ba41bcb3868bb0cca"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "524bec21ccdfcff05b1184fcea956975"
  },
  {
    "url": "components/heading/index.html",
    "revision": "c082f274689f89e1f80d7da287a10e22"
  },
  {
    "url": "components/index.html",
    "revision": "0662891c525594e8e7fba5b3b0cc2e93"
  },
  {
    "url": "components/labels/index.html",
    "revision": "a43fb3b97ff63890e5a3556a81566df1"
  },
  {
    "url": "components/legend/index.html",
    "revision": "731f1e20409d2298efead0d951502983"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "a7cf535bc28c69156812549c492f3bd5"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "d33f3293c4d40ad02b0bc8cad065a83d"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "e836134a367ddd9c93d0c45ca628d837"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "1b7f0a2a8b08d44adfd8c28d4188d6ad"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "d8753cc4b8463bf201bd74fdd21abc78"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "781ccb2a9fb47f377b8243de297974ec"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "a4f03c2209154f930dba908d4f5bae87"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "a1ae3c98e7ea0858cc9d7d4bd4864a9d"
  },
  {
    "url": "customization/index.html",
    "revision": "85ca3541a34f8a35164b25d339281e1e"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "3e882f7d7b4af4f36b46e6665873588b"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "32e591a2023967bb5bacfa6e3bf23c18"
  },
  {
    "url": "development/index.html",
    "revision": "c9ff3cc1e05d196957e03841f31468e9"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "e6fcebe74616e1d1ede1e93afe16e56f"
  },
  {
    "url": "docs/index.html",
    "revision": "c953fe989aab553e06e544bc83a60224"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "2393483c5efc405ca42a60c89b53e8b5"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "a98434285406c7d232d6b674bcad2c58"
  },
  {
    "url": "examples/area/index.html",
    "revision": "c42574bc0ca29292537f0dee3d0a0c8f"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "c28d4efbee137ca1392089afab238fab"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "862551dc0767f56e7eb1abe8c625122b"
  },
  {
    "url": "examples/column/index.html",
    "revision": "6e53fb2b1d5b875833513d05eef2afe7"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "555cd9f0a628c0dc45b876ead17fe5a4"
  },
  {
    "url": "examples/index.html",
    "revision": "e0f72a7f5c9e7d0a0fb36de6c7ce3952"
  },
  {
    "url": "examples/line/index.html",
    "revision": "c6145535c75fff478daea5f638a2b1d6"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "1367a72bab91f38336740a942485fc31"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "51f368c9fff759709d38295db6f599e8"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "4babd8b696b34996611e66b6613eb18d"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "dec0a7553790defe220bb1f025741fea"
  },
  {
    "url": "index.html",
    "revision": "75228395fbabc41fc10edaf62f9bd0fc"
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
