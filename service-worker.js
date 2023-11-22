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
    "revision": "3bc0a4ca8cf4c03ae8d916e7f49e30e2"
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
    "url": "assets/js/18.06dd19f1.js",
    "revision": "6ee5c249ec85c57ece295ca3e33a946b"
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
    "url": "assets/js/42.92b95ebd.js",
    "revision": "bcf01a176ae491e2c7fa674b09f58183"
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
    "url": "assets/js/45.eed72381.js",
    "revision": "dc9c155ec20df52a26ac71be34fe1e8b"
  },
  {
    "url": "assets/js/46.206ba487.js",
    "revision": "ffc56b59173c586b12b9bd7ab54b4317"
  },
  {
    "url": "assets/js/47.2c254c9c.js",
    "revision": "a2d5937aca57f1eb992ceb6890f2e7ba"
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
    "url": "assets/js/68.4a8ead11.js",
    "revision": "a2fcf132dbefa7a8b8ac5dfe8e113e3b"
  },
  {
    "url": "assets/js/69.234ebecd.js",
    "revision": "3019b6b469b8314b9053f7269ba463c9"
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
    "url": "assets/js/77.cac8a26f.js",
    "revision": "fa5857198d725c97c60850e1d9b615dd"
  },
  {
    "url": "assets/js/78.90899a38.js",
    "revision": "2edf7d3494959de5c501bdeb728b5ec2"
  },
  {
    "url": "assets/js/79.89174502.js",
    "revision": "0be348b12d1382dba3dca41fcfd89c43"
  },
  {
    "url": "assets/js/80.d0526755.js",
    "revision": "83c7c3277e76b65d87d9255e1337c432"
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
    "url": "assets/js/app.04bbe71d.js",
    "revision": "c8dd9c5a40b45c5a2c4e832d2f09df39"
  },
  {
    "url": "assets/js/vendors~docsearch.c20bc4a1.js",
    "revision": "5375e7502fe3f3e3cd92cb6259919075"
  },
  {
    "url": "charts/area/index.html",
    "revision": "be734f7bc32a6f5d68f3cf1d98bc1ee4"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "4a77a3e62d96ffa108ef5fa7694a1661"
  },
  {
    "url": "charts/column/index.html",
    "revision": "3c6c2a9c8742d96f8b2251f7174ea41d"
  },
  {
    "url": "charts/index.html",
    "revision": "bebd5b0b479a40cb570339b8db10cac6"
  },
  {
    "url": "charts/line/index.html",
    "revision": "9ea3efefaa7f7bf2230d44b982953025"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "648dbdf2fecfc00d817ed1e405c58990"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "e24cf397c637513ef5ec1f441f15b1f4"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "e5f9208538a20d8413862d5b84f3c35d"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "36e9d06dea5c19f6df98b1ba38ccc531"
  },
  {
    "url": "charts/radial/index.html",
    "revision": "e43806adf15d3d0d4c55948fa3a885ac"
  },
  {
    "url": "components/axes/index.html",
    "revision": "a8d0e833f37046150357055029027b20"
  },
  {
    "url": "components/colors/index.html",
    "revision": "d7fe4dddeaf07df7aea6897fc34e13f8"
  },
  {
    "url": "components/data/index.html",
    "revision": "8170d2f467fde9cc345446b9615a2944"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "ebc9dc38f8d32dea4abe3e7e20500189"
  },
  {
    "url": "components/heading/index.html",
    "revision": "11959af7bc987229d4de5915b00290b7"
  },
  {
    "url": "components/index.html",
    "revision": "418ee3d15d3ab5c9be1ef8ce573fa7a8"
  },
  {
    "url": "components/labels/index.html",
    "revision": "ff96a17c4fece397a769da6c611fa4ae"
  },
  {
    "url": "components/legend/index.html",
    "revision": "63a161ac9e252590d142b9255230bc36"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "2f374e36d4777722c8632c7f9db99dba"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "1153abd4237ee3c95730d0b54d4a5798"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "bd5e98f024349d0d90baeeecca33bd6a"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "34e92e8b437306580adfafea5553c93b"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "ba97e445b071a1116423c386590fe43a"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "a1fae11c05b084be5f3e5d47b9c1da50"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "8e461fe120d37c9be5b9ba7328a9e35c"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "a412bf53d26354039f3daf1437fa8404"
  },
  {
    "url": "customization/basic-styling/index.html",
    "revision": "09302453beb813c75bd1d8448f09c237"
  },
  {
    "url": "customization/index.html",
    "revision": "398eab1c9cca4e7c23cd268cb216ee94"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "bd901f1d91005ec2474d0dd193133abe"
  },
  {
    "url": "development/cheat-sheet/index.html",
    "revision": "51d4a40d524ff0cfe6fe2686f08f20af"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "3c1c8b6d5e18203788f9f0368b3df2ea"
  },
  {
    "url": "development/index.html",
    "revision": "e4c2727910fcfb25ae9b8df94ceea1b0"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "68ad7a46a1d62820788d752a6d7d8c92"
  },
  {
    "url": "development/supported-features/index.html",
    "revision": "ce9941d2c72028d11efc626293012b80"
  },
  {
    "url": "docs/anatomy/index.html",
    "revision": "0f9851348c4c3e2dcc043cb1cd620589"
  },
  {
    "url": "docs/index.html",
    "revision": "24180517b008bc88d7d9767588b5e1d8"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "db16bc78160ed3918debe5d43b7fc706"
  },
  {
    "url": "docs/migrate-to-v1/index.html",
    "revision": "0c8d95176ffcd584e9a5b20bfbaaa90e"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "8d3d487dda15a38a75cb263a50b4809f"
  },
  {
    "url": "examples/area/index.html",
    "revision": "423decdd2b274a37b9fe158acc71b6f8"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "cae68147a227c4ee52352d64ce018b88"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "ccf2dce3865e4cf33318407bf727a763"
  },
  {
    "url": "examples/column/index.html",
    "revision": "1485e619df7e8d7fffee4482a1a49a9b"
  },
  {
    "url": "examples/index.html",
    "revision": "745a42bc2d0fce035a33675708026d1a"
  },
  {
    "url": "examples/line/index.html",
    "revision": "e633959f32b36cbf2929985c35cc1482"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "0529ee9476c5e8017a3cb44c065a2678"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "b3334fad8f9ef630dc03528a0a18429f"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "535ed40758728cca08f3fe8a8e62a75c"
  },
  {
    "url": "examples/radial/index.html",
    "revision": "8e0996149751453d1039c267ed7bc92c"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "c8b840c205abf354026a4f5460ae7055"
  },
  {
    "url": "index.html",
    "revision": "42b006065758966e297d09e2c4083eab"
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
