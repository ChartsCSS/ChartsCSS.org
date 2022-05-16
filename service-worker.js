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
    "revision": "a0492700a7aba9b4cfed981a6b6785ae"
  },
  {
    "url": "assets/css/0.styles.e59849b9.css",
    "revision": "f319e0f9c484541c026079e43ffcb48f"
  },
  {
    "url": "assets/img/charts-css-anatomy-0-9-0.jpg",
    "revision": "3fc0c17964b4f51debb402229bf40c88"
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
    "url": "assets/js/10.f759717e.js",
    "revision": "2e1174214a6bcec03c4ae02c0515feea"
  },
  {
    "url": "assets/js/11.5c29c7dd.js",
    "revision": "da844523c0e99c4e6282255276009376"
  },
  {
    "url": "assets/js/12.050e982f.js",
    "revision": "6fc2191ae06177b69ab3a6eaf651898d"
  },
  {
    "url": "assets/js/13.7296b689.js",
    "revision": "b3320cf5939e866b72125dee2e574be1"
  },
  {
    "url": "assets/js/14.6535f793.js",
    "revision": "37334123056fc9ed79a1183c2961ef0a"
  },
  {
    "url": "assets/js/15.2151b38d.js",
    "revision": "ffc434c6d61c4c65e75966135eaceb3e"
  },
  {
    "url": "assets/js/16.c1120908.js",
    "revision": "5fc988a71db40a11f7bf6bb1216180e1"
  },
  {
    "url": "assets/js/17.cabce94b.js",
    "revision": "d2949e5a15e6ee8a05d818a1c8b016c7"
  },
  {
    "url": "assets/js/18.b942829e.js",
    "revision": "c85f44740e17ef462a0d1222f13d2b19"
  },
  {
    "url": "assets/js/19.2b0d60b8.js",
    "revision": "cec6d1b4939dcaa4402ebd47fb6488e3"
  },
  {
    "url": "assets/js/2.ee7b6655.js",
    "revision": "14b526d5e0036a240bd618a16fedece7"
  },
  {
    "url": "assets/js/20.f9db9d5e.js",
    "revision": "45c128ab4645f8944a7bbd9ea4dbd0c5"
  },
  {
    "url": "assets/js/21.f64c93b5.js",
    "revision": "dec15c1e7db62df806ebe75c14d18e75"
  },
  {
    "url": "assets/js/22.ec51e956.js",
    "revision": "5a1cb500572aa800314e056aeed67d3a"
  },
  {
    "url": "assets/js/23.40796659.js",
    "revision": "d1662ea11243f88769c11dca8b30c9d2"
  },
  {
    "url": "assets/js/24.aff94836.js",
    "revision": "e31f2d04c2043f857566b04816eca95c"
  },
  {
    "url": "assets/js/25.887670da.js",
    "revision": "33b02e8447e727a005e74ef3acb141f8"
  },
  {
    "url": "assets/js/26.cbccf081.js",
    "revision": "b3b9f3b06cc34e6c6c814827e54c89cc"
  },
  {
    "url": "assets/js/27.f54825ea.js",
    "revision": "9216a80275e195f3f126b1839875a32e"
  },
  {
    "url": "assets/js/28.1cd186ca.js",
    "revision": "4b3ce10b889a83e39d8c84959bca1d88"
  },
  {
    "url": "assets/js/29.5ab49f5b.js",
    "revision": "da600c16a5e4b5450ca95cc25b53fb6e"
  },
  {
    "url": "assets/js/3.fd109e8c.js",
    "revision": "bbc08d920acd9aa835ff2475a8f9a46f"
  },
  {
    "url": "assets/js/30.f7cd439f.js",
    "revision": "91be30fb97b0a59d095a18b12aa13091"
  },
  {
    "url": "assets/js/31.65653b49.js",
    "revision": "f8dd45780d037df70cc186dee1e6f921"
  },
  {
    "url": "assets/js/32.9107a9f8.js",
    "revision": "62f703a971285b13ddcced6377caea94"
  },
  {
    "url": "assets/js/33.587a9e61.js",
    "revision": "95b30df76ae5b9a91e7f3e3ba9aefe0f"
  },
  {
    "url": "assets/js/34.a936e762.js",
    "revision": "0697049ee3e57294a95036819edea8c0"
  },
  {
    "url": "assets/js/35.9ce624cb.js",
    "revision": "6633f3d104469836a407a5fae3ef53eb"
  },
  {
    "url": "assets/js/36.ff709b2c.js",
    "revision": "baa9a0f75fad0dc87aedb0a25aa55237"
  },
  {
    "url": "assets/js/37.3adbe6a3.js",
    "revision": "f6f0bfe6c25748b120034b729f0fcb13"
  },
  {
    "url": "assets/js/38.9602ddbb.js",
    "revision": "60b363af81efee04b9dc8b02ebd08c2c"
  },
  {
    "url": "assets/js/39.ef4afb72.js",
    "revision": "27bdf51cdc0146df3b24e51bebc33e87"
  },
  {
    "url": "assets/js/4.520bdba3.js",
    "revision": "47b9838c6d769e299402beaedc174114"
  },
  {
    "url": "assets/js/40.1456f789.js",
    "revision": "a352e90495a71b5837cabf8f1a9a8841"
  },
  {
    "url": "assets/js/41.01e66872.js",
    "revision": "328353231a7e6aff07c04ad4a59ffff6"
  },
  {
    "url": "assets/js/42.32c294ce.js",
    "revision": "c814ff67fd26c151962df9e62583fa36"
  },
  {
    "url": "assets/js/43.77697da6.js",
    "revision": "4e67cb63a0cb4ec20e887a0a165cb654"
  },
  {
    "url": "assets/js/44.06a86b5f.js",
    "revision": "3eb58da5d7269905badbffa8507092fb"
  },
  {
    "url": "assets/js/45.8b4ced5b.js",
    "revision": "a9202573eb813f14c3933fb4b20a0f45"
  },
  {
    "url": "assets/js/46.3c9dfa1e.js",
    "revision": "e2f07c22ed8bed250b906fdbf3ceed6c"
  },
  {
    "url": "assets/js/47.3d124de5.js",
    "revision": "de77dd8f2557903d17c9ba6af3a44388"
  },
  {
    "url": "assets/js/48.aa0bc4e3.js",
    "revision": "3a617c4c81c6f3f161402b7cf9aefd36"
  },
  {
    "url": "assets/js/49.bc7e1924.js",
    "revision": "68397d4f6a9bfa3aee857e90f0761216"
  },
  {
    "url": "assets/js/5.ca3e992f.js",
    "revision": "7041b6dbfea0c6eeb70797d9a8394694"
  },
  {
    "url": "assets/js/50.4a020581.js",
    "revision": "30f9600ea57b22fbc003e57d3163fc11"
  },
  {
    "url": "assets/js/51.8f554af2.js",
    "revision": "5023298e4b40b0ccf0ef305e6062c5f7"
  },
  {
    "url": "assets/js/52.b62797da.js",
    "revision": "cb7e5a6d9d6b59c3381f0e11b903af47"
  },
  {
    "url": "assets/js/53.91fec211.js",
    "revision": "277ff9dcb70d580ce2a915e4ee490460"
  },
  {
    "url": "assets/js/54.904cb905.js",
    "revision": "de6e80c17a519f9cfb3c7aa5c205d081"
  },
  {
    "url": "assets/js/55.1789c692.js",
    "revision": "845a7b419cb6ed30ba1b10baef53f874"
  },
  {
    "url": "assets/js/56.1d448c8c.js",
    "revision": "1a75837092b4dad4fc1366fa604a7c33"
  },
  {
    "url": "assets/js/57.7320a269.js",
    "revision": "86f7128d63b9ea1558d0da3573e9178a"
  },
  {
    "url": "assets/js/58.096a03fc.js",
    "revision": "18c259857c9e06f8d8fdc173f51d274b"
  },
  {
    "url": "assets/js/59.52a8631f.js",
    "revision": "0115d3765a45c7314db79de6ccfe96b7"
  },
  {
    "url": "assets/js/6.c42931c5.js",
    "revision": "55b8db893bdb954b2e3af7a1c3eeed11"
  },
  {
    "url": "assets/js/60.437bf6d9.js",
    "revision": "6c7f7aa667c29ca932ed7f909c3cf7db"
  },
  {
    "url": "assets/js/61.8dd5196d.js",
    "revision": "4ffd9bcc565708688da3d8c5c61ed715"
  },
  {
    "url": "assets/js/62.0ea29632.js",
    "revision": "ebb4f54928d285ce835727baefa8abb2"
  },
  {
    "url": "assets/js/63.72f6d7cb.js",
    "revision": "d901ea4afc5db030645ddeaa30157d7a"
  },
  {
    "url": "assets/js/64.4686f2e2.js",
    "revision": "b35f8652d1fe24bd92ee5b1a669aa7c7"
  },
  {
    "url": "assets/js/7.a241d51d.js",
    "revision": "b730cedbb32d4ac342ba7d80d19c4be5"
  },
  {
    "url": "assets/js/8.772e7f39.js",
    "revision": "b7a8bc959707e7ad2f1e4f63961960de"
  },
  {
    "url": "assets/js/9.a7a5c84d.js",
    "revision": "e066a88ef7da355ca3b64b9010470571"
  },
  {
    "url": "assets/js/app.6ff4c46b.js",
    "revision": "8b96f85da6b5d77ed52be986fd7c42d3"
  },
  {
    "url": "charts/area/index.html",
    "revision": "3e9316f3e3c672cec6078a9799a93b09"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "58e2922b4c2f45abb50deeb35fa07912"
  },
  {
    "url": "charts/column/index.html",
    "revision": "5a20df621f0620891bae413327956fdc"
  },
  {
    "url": "charts/index.html",
    "revision": "ecb2047ffa521f5ca65817c925619511"
  },
  {
    "url": "charts/line/index.html",
    "revision": "1ed9d6be9411a493869855eeaa4999de"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "308b094b0e5d69ba4caa9952d9698129"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "c9aa5c7a122b56c925b9e77676848be9"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "77f4180eee92e408019667ed81581ea0"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "7b66fc140d5566b8a841b3287bfd0cd5"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "e7e4ef796ef8d1af04edb3c7432d6d38"
  },
  {
    "url": "components/axes/index.html",
    "revision": "9ca5929c2f1e0551fd534a2741e56a67"
  },
  {
    "url": "components/colors/index.html",
    "revision": "60b96a4f74003343def731e6fef6fbe9"
  },
  {
    "url": "components/data/index.html",
    "revision": "2b3c8099f8b71808ee0d2cf81df29815"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "5df72239c385fe61f7b6f171246f37a6"
  },
  {
    "url": "components/heading/index.html",
    "revision": "82374ad65fa413397a16918ce0cfc444"
  },
  {
    "url": "components/index.html",
    "revision": "f8d2eff5c7deda1f88487de920667ab0"
  },
  {
    "url": "components/labels/index.html",
    "revision": "82f4c0773d532816d2e17fba05445746"
  },
  {
    "url": "components/legend/index.html",
    "revision": "59517afe85b9084b83ee2ed8d8f0db8f"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "1e59a7d630729fbf3b516d65be68ab53"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "dcd0aaf411195441064e6b4ed8a1bbce"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "2b6c15822b23495b51f1e4a224c6846a"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "a1ab7d53f3aa9a287f9ea509b969ed47"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "ba4929f41d2cebc2fc0a6b2744b0562c"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "ac196c7b20ae7ad67bf5477a807d229f"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "482cd63672df1b023af5bdca2c91decc"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "0d2c7bf48c886b3548bb617da7b8043b"
  },
  {
    "url": "customization/index.html",
    "revision": "f6865566950c345882b3e8375a553994"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "8bc4b5104782fff01912883817e5fd64"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "0e5c2ac285ea0d36486a7f837a05e7d1"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "5819524bea2eb697243b496f0784eead"
  },
  {
    "url": "development/index.html",
    "revision": "310a2998be2075ccaca9a42bdfcb0721"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "2d4cb80ff7da9f24a2352c3d9eecbcde"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "706fa8a11148a1e745417cc1b9e74257"
  },
  {
    "url": "docs/index.html",
    "revision": "0c2392929107b61a4b6247837d78b35e"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "72b81c3ccf5ba476893f959715f0ec79"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "6b26352b1970fb26b1d75bbdf3dc4ee0"
  },
  {
    "url": "examples/area/index.html",
    "revision": "5f8361ffd865a92d44ff5b323ad9b8f1"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "e3bf0e87d0e9b2d87d0caa4bf104bc12"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "960b2ee4ad218c9981173a6b0daeaa22"
  },
  {
    "url": "examples/column/index.html",
    "revision": "392da2ab9d221f6ab678dd45177205ba"
  },
  {
    "url": "examples/index.html",
    "revision": "4899d79faee34628cb878c455f18adf8"
  },
  {
    "url": "examples/line/index.html",
    "revision": "b3172a213957e5d628a47690e8f0f23e"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "47df47d05585bd63fd009ac2926293b5"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "a20f054e801d2d78d6a8dc65b45c4b06"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "0b934689f964dfb3467e9a5463709eae"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "f30a7aa7a3cf81c54fda87d0b6e1c2a8"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "7922983f87e1223074546966aeb2d2f4"
  },
  {
    "url": "index.html",
    "revision": "bcb002feca0911818c8da105b9a82a42"
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
