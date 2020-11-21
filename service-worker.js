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
    "revision": "a9f6c1aa8098ab77c232d36c6d023ba4"
  },
  {
    "url": "assets/css/0.styles.ea18f924.css",
    "revision": "bd81a49918d6bd638ece4f1784d19336"
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
    "url": "assets/js/3.79b6f7a2.js",
    "revision": "744c5b20197025ad5ccb84093acbf137"
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
    "url": "assets/js/app.77d7e2f3.js",
    "revision": "6f0e4393ce73224ccd39608f56c71399"
  },
  {
    "url": "charts/area/index.html",
    "revision": "f717972e6ccef2e911cccc52de6aae3b"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "8dd98e4999da1823208bbb450de53c8f"
  },
  {
    "url": "charts/column/index.html",
    "revision": "f5a72819f87a588e71cfa26e2149b334"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "277840cdc8f45752705be60468a27c34"
  },
  {
    "url": "charts/index.html",
    "revision": "5570e90c77554084ab375db4fdb579c6"
  },
  {
    "url": "charts/line/index.html",
    "revision": "97889a09c5c9a876bac2aa74b565cf62"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "1c2a38a6fbf6567ff014e83e5640e41b"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "3eff20913650226aa01b1b87ba1b1e82"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "01fc93b5f8122ebcefa34b6f25db05aa"
  },
  {
    "url": "components/axes/index.html",
    "revision": "7d1d281220e829b4a4c18dd2cd0c1014"
  },
  {
    "url": "components/colors/index.html",
    "revision": "692a5fe2cfdd78c2f0833a0b8eda1219"
  },
  {
    "url": "components/data/index.html",
    "revision": "788ec26cd48d8b6461e406a7af26b5b4"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "88c5ddf0c5185da24fb0928355a480b1"
  },
  {
    "url": "components/heading/index.html",
    "revision": "bb65861e806d31adde9727fd9e7a4c84"
  },
  {
    "url": "components/index.html",
    "revision": "0b6f6ce734cf32389d443e43b43ae585"
  },
  {
    "url": "components/labels/index.html",
    "revision": "5cfefda489333c80fcf14896889054d7"
  },
  {
    "url": "components/legend/index.html",
    "revision": "7e782d4424b4041b82dcacb90ca24261"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "eb4b16f1eae6b8225a40a380d9ede293"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "8707ba31d8995d86dff05b498b263857"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "15f3668ef76bad21ffda1c3d4a3efb59"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "b295b456b907ee19bc7c5facf9cd24af"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "fd98a1a1123ddc2ff5b4a2c4d39a23b8"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "48f6615935e4370e0bba2a7fdf9d2365"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "fd7a3c09d961feaa6e21981f8efe0cb9"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "85f407204cbeba2e5331c2037cc121cd"
  },
  {
    "url": "customization/index.html",
    "revision": "f373175eef0969d16cdbd61df998411c"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "a8abddf70bf5fe96af8c1a9089124242"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "af82d5dd91cead9afe9a188b08649e00"
  },
  {
    "url": "development/index.html",
    "revision": "5e7dfef65613f7032c238fe51b946de8"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "b135b55de1059e5294cd27d7e49629a1"
  },
  {
    "url": "docs/index.html",
    "revision": "91a8b6c25b67049dc7c20b29dc438962"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "516fad9d58fb455826bb1dd4197282c4"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "cc2eb2b35ec3685d04e7feb6d31e23c5"
  },
  {
    "url": "examples/area/index.html",
    "revision": "07f6f5f85ad9fc06d04048cdd4dfbcb4"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "6d800b6eef4c48e2a1b3cb95a3725ef1"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "2a744c274f90affbdf7b290d05349770"
  },
  {
    "url": "examples/column/index.html",
    "revision": "b680ddb6b7ba094239d728e9ad79c877"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "fae72e232ed2ed546e1b6d52172061a0"
  },
  {
    "url": "examples/index.html",
    "revision": "95f4408cad03779360d19725954f9ca6"
  },
  {
    "url": "examples/line/index.html",
    "revision": "3e471df1d265f690cae42adecd1dd9e5"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "32886980d925aac58377a2c005f2c37f"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "4e21adc4d7ffece46d35a516ff9f6333"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "b9b317c82128fa9d57466bcb9907a7e0"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "3a28e56e79c323937d9841215c95b3e1"
  },
  {
    "url": "index.html",
    "revision": "bc1cc6e89b00bffb6b4fd1c9b7b8716a"
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
