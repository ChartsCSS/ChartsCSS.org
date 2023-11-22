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
    "revision": "91e674f966ca8510efc2953a6053fa36"
  },
  {
    "url": "assets/css/0.styles.c84b6fa6.css",
    "revision": "1bee095a6418d48c5f0089558c66163f"
  },
  {
    "url": "assets/img/bg.svg",
    "revision": "9ac85aeb7971101cae1ec0e4efd24647"
  },
  {
    "url": "assets/img/charts-css-anatomy-0-9-0.jpg",
    "revision": "3fc0c17964b4f51debb402229bf40c88"
  },
  {
    "url": "assets/img/charts-css-anatomy-1-0-0.jpg",
    "revision": "fd94517b72cc9b1fed496d8cd709941c"
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
    "url": "assets/js/1.62774714.js",
    "revision": "96660eeb751b9bd72a4b206dcab82471"
  },
  {
    "url": "assets/js/10.80ed895b.js",
    "revision": "9f00371d787c0bd49d668a89ce486cda"
  },
  {
    "url": "assets/js/11.385638ff.js",
    "revision": "200367ca0891a149667bedac53ae017a"
  },
  {
    "url": "assets/js/12.0bd6c950.js",
    "revision": "316450f2cb8d3e44e0e0b0ac1c0b4d46"
  },
  {
    "url": "assets/js/13.d3bfecb7.js",
    "revision": "a8a4f26b5c646214fb5b186a298cb886"
  },
  {
    "url": "assets/js/14.a28de1e7.js",
    "revision": "56250f8445809d247684e484bb69c2bf"
  },
  {
    "url": "assets/js/15.bda32ad4.js",
    "revision": "c3799413f5aecc5f9b7e9fb08ab78b2c"
  },
  {
    "url": "assets/js/16.2a7a7927.js",
    "revision": "7ca33510a747059c226e0f743d50a62c"
  },
  {
    "url": "assets/js/17.a644e637.js",
    "revision": "3d361742b5246233a57ab3e28e653673"
  },
  {
    "url": "assets/js/18.a8a11b1c.js",
    "revision": "cb35ea8aca819585578a797bd896ee84"
  },
  {
    "url": "assets/js/19.3524b940.js",
    "revision": "0201bc92f6771e15e48b7df71155886c"
  },
  {
    "url": "assets/js/2.dd9406c6.js",
    "revision": "6fed46286ad991ce61d55d0c1b78b9f6"
  },
  {
    "url": "assets/js/20.0393359e.js",
    "revision": "4ea8d85b99e26010d4b229c139688012"
  },
  {
    "url": "assets/js/21.61a6db7d.js",
    "revision": "923c412a5e79d14fd3a20d20ee14cd25"
  },
  {
    "url": "assets/js/22.39a86cdf.js",
    "revision": "4b928b649e7aa9e0984226195b6d035b"
  },
  {
    "url": "assets/js/23.976b2210.js",
    "revision": "f6ebd03ac1e26bdc5c1e6ab452f85c78"
  },
  {
    "url": "assets/js/24.3bc9c7cd.js",
    "revision": "3d80187eb9512b27219c47bd345e1a8f"
  },
  {
    "url": "assets/js/25.c013c219.js",
    "revision": "7128354cf5544c4d38d0e01acacbea69"
  },
  {
    "url": "assets/js/26.f16bd7db.js",
    "revision": "013a01b41f2f0e65cc3cc53daf4dbb8f"
  },
  {
    "url": "assets/js/27.51972de9.js",
    "revision": "8121f19c244cb016a6622a0d7d25e457"
  },
  {
    "url": "assets/js/28.d5fbd98e.js",
    "revision": "3ccf708ce1be0b861dc7e3e17c3b1c37"
  },
  {
    "url": "assets/js/29.e32aa6c8.js",
    "revision": "790fd7b2b08c33ddd440454de0510ca8"
  },
  {
    "url": "assets/js/3.c3512bd1.js",
    "revision": "0dd048b8957b401453a286a79a023314"
  },
  {
    "url": "assets/js/30.1d7304a0.js",
    "revision": "241bf2c9ea5ba5eaedf7a150dd479fa6"
  },
  {
    "url": "assets/js/31.e0b612ca.js",
    "revision": "2fdcdec1c8ecbf17dd5e6873ff624026"
  },
  {
    "url": "assets/js/32.122d60bf.js",
    "revision": "226c5c1eb74be3488954bcf0c1ea252c"
  },
  {
    "url": "assets/js/33.5f80530a.js",
    "revision": "c50808d72c71189e6dbd18a815520cce"
  },
  {
    "url": "assets/js/34.9aadb16e.js",
    "revision": "dce99bcdf9e24ba8cf2fb7352d74b05d"
  },
  {
    "url": "assets/js/35.21a1ff1d.js",
    "revision": "636c31901e5f34fc786e9ba5d3642eae"
  },
  {
    "url": "assets/js/36.5d5e009f.js",
    "revision": "d108777f0d7ad5a0d92448dca89bfd06"
  },
  {
    "url": "assets/js/37.fc787582.js",
    "revision": "0c169ef6a0a056f6745438171ac1e5a6"
  },
  {
    "url": "assets/js/38.45916f8c.js",
    "revision": "8d2735e1cba8dc54d71c96e4e9bc2df3"
  },
  {
    "url": "assets/js/39.7eb9921e.js",
    "revision": "5b2e77fe9db16a2843fb552b922c880a"
  },
  {
    "url": "assets/js/4.21735de4.js",
    "revision": "6b82ab4d9d015d61e5178170795b6405"
  },
  {
    "url": "assets/js/40.1184367a.js",
    "revision": "cd57f3d3f00a6b5f78b5c2546402b4db"
  },
  {
    "url": "assets/js/41.ffc3eb93.js",
    "revision": "2f755aae167e25dda5bb7e51e0ff5e3c"
  },
  {
    "url": "assets/js/42.92b95ebd.js",
    "revision": "bcf01a176ae491e2c7fa674b09f58183"
  },
  {
    "url": "assets/js/43.0cb3f5f6.js",
    "revision": "7d9a5723820023858a5358f3efcc2300"
  },
  {
    "url": "assets/js/44.de342796.js",
    "revision": "441a951bfab489bd98c0305e3fa7be3b"
  },
  {
    "url": "assets/js/45.d2cec3c0.js",
    "revision": "ec352ba4ffed127f252fe8ee7f307152"
  },
  {
    "url": "assets/js/46.60049a10.js",
    "revision": "7a8f73ef34c1668373736dedfbdae99c"
  },
  {
    "url": "assets/js/47.1b469e11.js",
    "revision": "15b845c2c49de20248b2a7493dbdabec"
  },
  {
    "url": "assets/js/48.4a74fb56.js",
    "revision": "bb261d2e0c9268c50c61c95db1dda78c"
  },
  {
    "url": "assets/js/49.ef4dede2.js",
    "revision": "19c7b22c3f7edc0d4750f157958d3865"
  },
  {
    "url": "assets/js/5.cda8c120.js",
    "revision": "7c95a6bb55df5effba2cc4694ba69895"
  },
  {
    "url": "assets/js/50.1b24bd45.js",
    "revision": "a52fcc2046df5b0e079b61439337b9ba"
  },
  {
    "url": "assets/js/51.ebb50483.js",
    "revision": "124421ae71019bc792b516e4aa22dca5"
  },
  {
    "url": "assets/js/52.0d94b96d.js",
    "revision": "3a57e1ea6af29ee1e49cac2677cd2f67"
  },
  {
    "url": "assets/js/53.84faeeef.js",
    "revision": "e109a92cc1ec8645255b3c9d2a74839d"
  },
  {
    "url": "assets/js/54.f876364e.js",
    "revision": "ae644708c06b68fd945693ffc09ca4ed"
  },
  {
    "url": "assets/js/55.3f226fed.js",
    "revision": "0ccfa41897764888bfc4f4e9ad5dee32"
  },
  {
    "url": "assets/js/56.507be0d9.js",
    "revision": "9bfaa93ef943cd9286e73890d3dfecfb"
  },
  {
    "url": "assets/js/57.cc43df38.js",
    "revision": "4384a7d10abb72143d915892c739dbec"
  },
  {
    "url": "assets/js/58.495a5b3a.js",
    "revision": "63ebdcc6b4529be47768dba90c590063"
  },
  {
    "url": "assets/js/59.ec96e871.js",
    "revision": "c1eb22480254bb35f0a0945129c23b6c"
  },
  {
    "url": "assets/js/6.b9132f3a.js",
    "revision": "e9639601c606e10f4ef645d0672a8442"
  },
  {
    "url": "assets/js/60.a49abeb0.js",
    "revision": "f2b3f347ef257e038bcddc068c87c763"
  },
  {
    "url": "assets/js/61.075590de.js",
    "revision": "c9dd4b846a8d003d8277dc5213e01064"
  },
  {
    "url": "assets/js/62.eadb12b6.js",
    "revision": "ccb13045907050bc092f745f88cb1db5"
  },
  {
    "url": "assets/js/63.7c1fb8fb.js",
    "revision": "a4672ae64e30a9b91b5a4bb0df1e7fce"
  },
  {
    "url": "assets/js/64.42149515.js",
    "revision": "301c893db9fdbab81a2469b3ea6129f8"
  },
  {
    "url": "assets/js/65.bd51f087.js",
    "revision": "c4aaa92420c0d77cdd4bd092254b0abc"
  },
  {
    "url": "assets/js/66.43b73694.js",
    "revision": "e18738771e047cd0126dc0d0ded4449f"
  },
  {
    "url": "assets/js/67.e6e9213c.js",
    "revision": "70f373af05b56f45e19656ddf8ccbfe7"
  },
  {
    "url": "assets/js/68.043f2ca6.js",
    "revision": "6bc4a20652d14780abd61f11d02b9aee"
  },
  {
    "url": "assets/js/69.e990cb23.js",
    "revision": "2c1b1fdc94729b719cd58d32c2c50d17"
  },
  {
    "url": "assets/js/7.b0fccd41.js",
    "revision": "902ee1339a8574679895e0224d125308"
  },
  {
    "url": "assets/js/70.37f6f3ef.js",
    "revision": "a73fbd414d3d485c30567c0799eb33e2"
  },
  {
    "url": "assets/js/71.d59ad677.js",
    "revision": "91ffe14e4c37f78f4b9a60d54eea2c61"
  },
  {
    "url": "assets/js/72.932e0f2b.js",
    "revision": "d81e5dc52c7c4b5f1233e2ba425a230a"
  },
  {
    "url": "assets/js/73.ee9b5c56.js",
    "revision": "8debd6090db2f4ca4dbdc15bb8a24e9f"
  },
  {
    "url": "assets/js/74.736ab9cf.js",
    "revision": "1edab818abac3b720972496df4f56b82"
  },
  {
    "url": "assets/js/75.4affc042.js",
    "revision": "19d6bb2793085a02c23c6b0c4c21275b"
  },
  {
    "url": "assets/js/76.34e5e9d2.js",
    "revision": "2ffd5b27956fb64adbedb50263d54d7e"
  },
  {
    "url": "assets/js/77.8fa021e9.js",
    "revision": "bfde37e5cc7236685d6546886826ee8a"
  },
  {
    "url": "assets/js/78.98bdb05b.js",
    "revision": "537a5148a4de2e00c5fd03e1f930d576"
  },
  {
    "url": "assets/js/79.47c2b7b5.js",
    "revision": "23acf6a08d83663551697f64c58c1dda"
  },
  {
    "url": "assets/js/80.4203a77b.js",
    "revision": "cd754de5b2354a51a48a8ac405b7dfc4"
  },
  {
    "url": "assets/js/81.a0891da3.js",
    "revision": "24629473e54c6501d938755c17c6e651"
  },
  {
    "url": "assets/js/82.aba6a480.js",
    "revision": "a977a9acbec1b6faba9c15a4b717b73e"
  },
  {
    "url": "assets/js/app.8009058c.js",
    "revision": "b146b73006be6075e42a57d144bec80b"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "fafdbd4e43b7cdf9f7803684c866bab6"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "30f5d030d5070a34ea1cf642dea5418b"
  },
  {
    "url": "charts/column/index.html",
    "revision": "fc812a0a41afe3d10703ab3a4135e21b"
  },
  {
    "url": "charts/index.html",
    "revision": "5153491d1e90210b4e1497753ea16f3a"
  },
  {
    "url": "charts/line/index.html",
    "revision": "cbcae5be7e3cd9e4e0569ae7d31d1041"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "9488b48cbd2c53a35fd0187e780b1606"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "5e68a2a49b338a4ad6a494001bded0dc"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "000a120fe3d178ead18cb166968da92e"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "979494aa6e8d47250d4a88e36e7b3c39"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "1f533d5cbbb49ecf724a521fc4f30f9e"
  },
  {
    "url": "components/axes/index.html",
    "revision": "67d5e4e0580395ad3aec1f509561bfb9"
  },
  {
    "url": "components/colors/index.html",
    "revision": "77e6b8657ee239bde0b44e4b2adb12e7"
  },
  {
    "url": "components/data/index.html",
    "revision": "5a2fddb6f9e4dc1bb05325886e8da90d"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "b3143c196a9a33e7040a00bc220b296e"
  },
  {
    "url": "components/heading/index.html",
    "revision": "2aba3825d776cf9be7fab98eee7abe9c"
  },
  {
    "url": "components/index.html",
    "revision": "85cbe1d9ba649048734284e0f5b12ea5"
  },
  {
    "url": "components/labels/index.html",
    "revision": "57fa2cf72423511f20b20fd5c62c159c"
  },
  {
    "url": "components/legend/index.html",
    "revision": "725fdb497b35383f8d15e9513a8d40d6"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "51b33a285d4edd9b4a59efed353c7488"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "9626df749d331dbbe3d6d009f438025d"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "62d3d1656755e7f84d78944838eec96c"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "fc9b3a7b6e01832868139f91ad94fc79"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "92ac7e672e86f24b6556e5ce6739f0a9"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "010d379171688b9cf6ec01286cd9e2a2"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "4c0c3d636294f8d5de54f1ae7f829b6f"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "cada1281a8b27d039ec43b4360310800"
  },
  {
    "url": "customization/basic-styling/index.html",
    "revision": "474143af5ee21bb7544df5a6713bdd33"
  },
  {
    "url": "customization/index.html",
    "revision": "fcbef52e1f4f327a49b7cfd670e40583"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "62e1f02ea66aa6fd56d1b2a671d7e227"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "008894babc684565826e0316995872c1"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "0ffda6173704394408590f6c88f3344d"
  },
  {
    "url": "development/index.html",
    "revision": "e58298df9901801812bccb574a3706d2"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "567d975bac9105960d842777582c3c9a"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "87b369aa23dfebb31dcdf6215b920d1f"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "51a9d26c7e83110c25b651e3184fbc57"
  },
  {
    "url": "docs/index.html",
    "revision": "b439267d4c49837132ca0b8000bd0d74"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "aad984fab510398a4501977f7500149b"
  },
  {
    "url": "docs/migrate-to-v1/index.html",
    "revision": "ed7d2d0f961b23da5f0aea801abd62a8"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "f31d60910e72b41f64e1d1eafc5f0ccb"
  },
  {
    "url": "examples/area/index.html",
    "revision": "a3e686a53640a1a74d182822fb1883f7"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "7f58196c69ad3e55ee0bf0cf47b6cbcc"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "51b4d92096260b39851c46beb285d733"
  },
  {
    "url": "examples/column/index.html",
    "revision": "b93e3a1aa2388493f9dfa4346a681e7c"
  },
  {
    "url": "examples/index.html",
    "revision": "843f42fa893a50551301523f601eb26b"
  },
  {
    "url": "examples/line/index.html",
    "revision": "803dc7e3e867f86b8428fa50f3e9c512"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "1db7859b36f2c85eb597adc39d09b070"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "7c2b57d52c39c9dd7cc6b030e62d9030"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "397849b9df88d3f4be0635a3b0dc7748"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "51a76bd832370e18821adba93419ecb7"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "42b75875d7b2b0b46738c894673606e9"
  },
  {
    "url": "index.html",
    "revision": "b3cfe10e3aa0c5b35bf7b8d41b0329f9"
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
