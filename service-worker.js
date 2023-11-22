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
    "revision": "656f1c943a43765e9496d6dc20a133f7"
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
    "url": "assets/js/18.d0513414.js",
    "revision": "77661dfc411301c0ce0f969db6cba5ea"
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
    "url": "assets/js/25.d8d0dc65.js",
    "revision": "52c6324e7e1bee280c67fc3de311767a"
  },
  {
    "url": "assets/js/26.c6480ffb.js",
    "revision": "7bf6bff93a54a428255ed5d93ab71d14"
  },
  {
    "url": "assets/js/27.3eda44c3.js",
    "revision": "9eeaa8e0ae342b139f4709a75800a61b"
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
    "url": "assets/js/32.5a660c9b.js",
    "revision": "d218e69de53b10d71771e1a039a30729"
  },
  {
    "url": "assets/js/33.629cf249.js",
    "revision": "026ccb5ffbca647b72d5a639d43592c1"
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
    "url": "assets/js/42.66b0f838.js",
    "revision": "d2fd93ef9a3b2f6ffb40876dd7697f38"
  },
  {
    "url": "assets/js/43.0cb3f5f6.js",
    "revision": "7d9a5723820023858a5358f3efcc2300"
  },
  {
    "url": "assets/js/44.f5da00cb.js",
    "revision": "aeecc9f178e032bd6df148a4557d35c3"
  },
  {
    "url": "assets/js/45.a1594047.js",
    "revision": "9b041332e0933825d8e583aa29f0ea65"
  },
  {
    "url": "assets/js/46.79fc6b6d.js",
    "revision": "5e761cba6352db91be9e32fbfeeb648f"
  },
  {
    "url": "assets/js/47.faa97b55.js",
    "revision": "cbec38e1bd02ab97f10d2da9c125a421"
  },
  {
    "url": "assets/js/48.ea9d87a8.js",
    "revision": "22ccff0b84e2b6fd1137ad20efcdd921"
  },
  {
    "url": "assets/js/49.df3b4809.js",
    "revision": "878d8dd30025eb90d1f1de7ef1da8719"
  },
  {
    "url": "assets/js/5.cda8c120.js",
    "revision": "7c95a6bb55df5effba2cc4694ba69895"
  },
  {
    "url": "assets/js/50.22fc4121.js",
    "revision": "49dbc7ab44a196a3bc00f6a3f99e1923"
  },
  {
    "url": "assets/js/51.f88b2227.js",
    "revision": "0d333fbbb86710aaa6adedb3d4c99ab9"
  },
  {
    "url": "assets/js/52.83e0b3d9.js",
    "revision": "c130a3655b30b4cc0a0e0cbbdc285c13"
  },
  {
    "url": "assets/js/53.28b707f6.js",
    "revision": "4ff2f5a5939fa95a0e802da73a5f19de"
  },
  {
    "url": "assets/js/54.55edd8be.js",
    "revision": "5c196ef9d8abb781722a3d4fe6414dee"
  },
  {
    "url": "assets/js/55.3064dce9.js",
    "revision": "1da137b351ae97e38042d923857053d4"
  },
  {
    "url": "assets/js/56.3d815f2e.js",
    "revision": "6a3e6559ac23915ce57cc2ac6226dc88"
  },
  {
    "url": "assets/js/57.63b636f2.js",
    "revision": "9cf9e828ffdcd5e6094e0fc64a217418"
  },
  {
    "url": "assets/js/58.e9dd7ec2.js",
    "revision": "821817c618115f86ef1bb7acff75a28e"
  },
  {
    "url": "assets/js/59.c49680d0.js",
    "revision": "2fe259bbb84e2b34df5daeb5cd1e8cf9"
  },
  {
    "url": "assets/js/6.b9132f3a.js",
    "revision": "e9639601c606e10f4ef645d0672a8442"
  },
  {
    "url": "assets/js/60.681440de.js",
    "revision": "dba836cc440a1dc6505959be8a19379a"
  },
  {
    "url": "assets/js/61.e5a6a3f6.js",
    "revision": "dd186a3bb5ed6f96d0b126c16c6cce28"
  },
  {
    "url": "assets/js/62.ea60d393.js",
    "revision": "888767cf08bca2cef47cc3887f07fe0a"
  },
  {
    "url": "assets/js/63.4fb4a0db.js",
    "revision": "cd379b51b470aab902151c845c142d2c"
  },
  {
    "url": "assets/js/64.9c3ab527.js",
    "revision": "09923a5718d4dbdb561c4dd57f85a2be"
  },
  {
    "url": "assets/js/65.ba72cef3.js",
    "revision": "149cca441e317dbd53b0a15d849f19bc"
  },
  {
    "url": "assets/js/66.a50b7a8e.js",
    "revision": "a384a47070bf3a3098a81be2a8498f0c"
  },
  {
    "url": "assets/js/67.b353cd90.js",
    "revision": "a310039ff4727ba63d5829ae04a61c64"
  },
  {
    "url": "assets/js/68.849bd234.js",
    "revision": "0b3348ad6517b059916053190c376867"
  },
  {
    "url": "assets/js/69.0ee18070.js",
    "revision": "0749f203f3cc4ac58a0a280e62145914"
  },
  {
    "url": "assets/js/7.b0fccd41.js",
    "revision": "902ee1339a8574679895e0224d125308"
  },
  {
    "url": "assets/js/70.42ef0f1d.js",
    "revision": "be59aa2b71783d9ed5c5665db4d15531"
  },
  {
    "url": "assets/js/71.66264dca.js",
    "revision": "37116e7e3d6fde2c27cc05df0d5cf4f7"
  },
  {
    "url": "assets/js/72.f017cf91.js",
    "revision": "b9fe0126c2ffdd0cb64b14ae3267f6d2"
  },
  {
    "url": "assets/js/73.a760c6f8.js",
    "revision": "945beea7bde55bf611bb6683b552408f"
  },
  {
    "url": "assets/js/74.c9bd8f4b.js",
    "revision": "e95ae449daf59b9268733b116f606f14"
  },
  {
    "url": "assets/js/75.c36b461b.js",
    "revision": "a25d147a6cab0538bdf15f0c9d8bec39"
  },
  {
    "url": "assets/js/76.afc36ee4.js",
    "revision": "e507559454b8b1c4c4582b13a9703ba7"
  },
  {
    "url": "assets/js/77.6d75fbbc.js",
    "revision": "3e76cfb52a5d36527f7e2829261e2a19"
  },
  {
    "url": "assets/js/78.ff02f01b.js",
    "revision": "63d4f79e927d3140fa02665fa8c3ceda"
  },
  {
    "url": "assets/js/79.fd615066.js",
    "revision": "1b87557f30874dc641cc0a07363ac19f"
  },
  {
    "url": "assets/js/80.90ba31b0.js",
    "revision": "8436328ac99d30b81a4db5d458abd468"
  },
  {
    "url": "assets/js/81.42d4bcb4.js",
    "revision": "c24b72754a9b2953e0c1296cc84ca511"
  },
  {
    "url": "assets/js/82.9aba34ae.js",
    "revision": "cba6b06614d0ccbfffa1d75d16e2431e"
  },
  {
    "url": "assets/js/83.53ffb560.js",
    "revision": "68591bcd19d57bde5e139b585c764d62"
  },
  {
    "url": "assets/js/app.35ce6e04.js",
    "revision": "24f9c0754fd6193d4012f05e5a6fad28"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "8605b6a23cf1d0c1f58cc51c4c96de82"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "6cb844b2a51e31eacf513a94e429a1dc"
  },
  {
    "url": "charts/column/index.html",
    "revision": "db1e15c669b22e9d69138f17ab173a25"
  },
  {
    "url": "charts/index.html",
    "revision": "0c767cd5a6b1628d19f72c1c178f51c6"
  },
  {
    "url": "charts/line/index.html",
    "revision": "95c6cd22077b1187a1c802f252f4e1e4"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "d189d96a678a247352dcdc029c65c86d"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "c7e4ee54f2d57d5c7ffc4a363961a7d7"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "236e1615e2d324b6fa77b78b85709a9d"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "582a57c2c64819604ab3204174046965"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "4f91433a5478a10bc58fe6d10d8f89a7"
  },
  {
    "url": "components/axes/index.html",
    "revision": "ac6e932082d943ae0fb23a2063822d05"
  },
  {
    "url": "components/colors/index.html",
    "revision": "b02680e63bfaf85d14f09b12ea8e778b"
  },
  {
    "url": "components/data-position/index.html",
    "revision": "9dafb5263dace95cc8d5de83144a1245"
  },
  {
    "url": "components/data/index.html",
    "revision": "6211bdfef5aeb5131ca0b2f7a2a3f927"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "764258c4a740e94bea0a73e56c410e24"
  },
  {
    "url": "components/heading/index.html",
    "revision": "ea47432f1dd1ab391699facee5416a0d"
  },
  {
    "url": "components/index.html",
    "revision": "170e81465d1d9950fe72feec4d5175fd"
  },
  {
    "url": "components/labels/index.html",
    "revision": "b97cdcb45fbc7259d3d6ade24abd841e"
  },
  {
    "url": "components/legend/index.html",
    "revision": "9a140dda9f1eb87a68f50e4cd4838b2c"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "f58c2d0071beca145e02d625d18d8de0"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "7e435a54c5d1baad6b73bf45ca533d7e"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "7808aa69b2c5b46e80066819a2840319"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "812d4463cba0c386591b39e291cd25f2"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "2a2f848c5caf157c50c12c67866b5092"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "59722fb33296458abbc4a0fac8118f2a"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "45bd1c4e0f31fd00b448482f2c00496d"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "9a27020f68880e04455220ed409e1be3"
  },
  {
    "url": "customization/basic-styling/index.html",
    "revision": "74539a6bf68fc08b3971687ffc232567"
  },
  {
    "url": "customization/index.html",
    "revision": "9dc10eccee88e4e6f81bc725745bd347"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "82fbf4148903440e47f5117a2117bb6d"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "8819a650872d3333646f8d140bc84ac9"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "89100591917093abf12ae36cc4ac3e36"
  },
  {
    "url": "development/index.html",
    "revision": "7ad3b9d58bea064fc4d4408db00e9f28"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "cb544e0d8ed3809a393ef640ab1248f8"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "afd650fb0033b02b31fd784ca620cfaa"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "71b072523c5eb8739ee53ee2ab90d3c8"
  },
  {
    "url": "docs/index.html",
    "revision": "5bc0a2e7838767b5ce18112dfb8c92e9"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "066a1d97c823e45e52753f4719d7d9b0"
  },
  {
    "url": "docs/migrate-to-v1/index.html",
    "revision": "020db1685e55512967c2130c34fad974"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "e2fe6d496d7ee0994697bae02d6db191"
  },
  {
    "url": "examples/area/index.html",
    "revision": "3fb6320c384d8c459f26c17a7dd4da15"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "2c7ad14cff78365ab9551ebe215d33ec"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "566568d0a838a95a816ef59699e994de"
  },
  {
    "url": "examples/column/index.html",
    "revision": "8827ccbf66b7f03f10cd01739b6c7ef9"
  },
  {
    "url": "examples/index.html",
    "revision": "94a47447d0847a56ed9b74bb1d9480ac"
  },
  {
    "url": "examples/line/index.html",
    "revision": "0e233ccd5879d9a408f8b96a076febae"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "ac09b4fbe8997ae7043a843eb3268b9a"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "3f9e0baa897d3a2799d414556cc75e03"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "fd7bd58cbb364d12995c14b796b5d100"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "a54b0808717d12acff9de86595095d29"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "383e0c0ac1959567566a235505906b1d"
  },
  {
    "url": "index.html",
    "revision": "c77355bd71bb2c74930e07f7f255071a"
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
