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
    "revision": "2fcd34c83ebeb74d4a7e1909cd5035af"
  },
  {
    "url": "assets/css/0.styles.90673527.css",
    "revision": "77410c56c3c6ae84d0267f428bec59a3"
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
    "url": "assets/js/48.ac29f871.js",
    "revision": "215d17d81bf397adb737cf449ec276f5"
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
    "url": "assets/js/50.f449ec8f.js",
    "revision": "2e3563a2b79b54a7e7be66a265fd5f39"
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
    "url": "assets/js/app.4b9ab3ab.js",
    "revision": "85821aaf4cc4664090d5e4d2007119c2"
  },
  {
    "url": "charts/area/index.html",
    "revision": "a32d578b969d0804e998a8bb5febc556"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "78942658c09c929250a178e71b1e1a2a"
  },
  {
    "url": "charts/column/index.html",
    "revision": "db5a94d84b8886ecece5a7e1a593d452"
  },
  {
    "url": "charts/index.html",
    "revision": "ac9c3afd7bfa7665f321522b981c0553"
  },
  {
    "url": "charts/line/index.html",
    "revision": "88f007db53a7c570b1a9c02012ec787a"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "f845f7539fe25b0dc2845c0d32278ee4"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "9665e61046a1e8a0f78abbea3a2e7e2d"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "906123ed420deb182a8ca41447e956fa"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "aa7394cc2a4849f2f180330dad59c005"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "aa5194205aa8df786d982961979e5cf7"
  },
  {
    "url": "components/axes/index.html",
    "revision": "b870e29c6e34bfeaa3742603608412d0"
  },
  {
    "url": "components/colors/index.html",
    "revision": "007897b1b142056c20a984980a6a1449"
  },
  {
    "url": "components/data/index.html",
    "revision": "6ae67f68078bfa8337ca07ab44a4ae25"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "96ab6f98375170e59a89f7fbaca9e1c4"
  },
  {
    "url": "components/heading/index.html",
    "revision": "69f8795fdbaf3cb9a862e991bd039c84"
  },
  {
    "url": "components/index.html",
    "revision": "226ae0feced6f662b8f32078ac014442"
  },
  {
    "url": "components/labels/index.html",
    "revision": "d80cc71d78321858e4a58c98dbffa082"
  },
  {
    "url": "components/legend/index.html",
    "revision": "d00c582ba9461f339d38edd509b629db"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "9ee15c6e79b3ad148f5f2a19c5576cbe"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "704ddd814dc601718be85f3659f79365"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "a980977a150c659bd9344da271a69129"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "2f3010f50a7e62ad0ee60c2793691020"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "7f0bd3c303c330ba345c08db6dd9b923"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "5a567afb31711f174a366f62e7c10e36"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "c4b8183f505eeadbdab43f6a52ddd04b"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "e4392aac4a08fb5f007aa4ed546172a0"
  },
  {
    "url": "customization/index.html",
    "revision": "0ca4df116462fa4d9a961051457d8d53"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "ae10584c06210b8cb24e000b11b4849c"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "313cbee498077814bd0aeaa7f93ad087"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "6e1be2d9128d2954e36cf578222e2915"
  },
  {
    "url": "development/index.html",
    "revision": "914cbdf2e64cd9d62e899c071d31ee54"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "97212f1d095bb3f25a2aa1c9ca3d2a57"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "7c02aa46cf3c03b8a1d6b565bae8926c"
  },
  {
    "url": "docs/index.html",
    "revision": "0f58fe8e3f489b2851fb28188a6a0bda"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "07c28bdbf8d74de55dd3da48f9b7474e"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "a3218b596985e855c157bb192b9db289"
  },
  {
    "url": "examples/area/index.html",
    "revision": "b5f1aeea63d56fd7c1b10ac6bb1ec2aa"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "f4b9105b596db56eaa502507ad4842a6"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "a4d94bd5c7da7c69c2fc4d8f945c1e02"
  },
  {
    "url": "examples/column/index.html",
    "revision": "57282d14f382f7351db8ad1a51b5ca17"
  },
  {
    "url": "examples/index.html",
    "revision": "417ab1a2a06b6b54583aa2cd120f90f7"
  },
  {
    "url": "examples/line/index.html",
    "revision": "495ff37f1acf86783a26bed89c1ad379"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "5cbee639f21db3c2e9800ada1f458f61"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "0af2955350b143e5193274182841a8ce"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "0167fb9c9bb23744f1e7bf69e9d6249f"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "74ab280308de97338e0696c881da9c76"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "5299ecb5a8dddeb355cacf3e7b5264e3"
  },
  {
    "url": "index.html",
    "revision": "d355d850835dd6d43d671b92bf189cb9"
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
