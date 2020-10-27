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
    "revision": "88c3996b512fb4fd133b4666616e4853"
  },
  {
    "url": "assets/css/0.styles.2e24c9aa.css",
    "revision": "a4530c00fc46f41faf1d47ad3abbeba0"
  },
  {
    "url": "assets/img/html-css.png",
    "revision": "7ffa20302b6432f42fb6cc6c3a79ed51"
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
    "url": "assets/js/10.7955c7d0.js",
    "revision": "4e6f8740fdc820421c3d0df0f895e6a2"
  },
  {
    "url": "assets/js/11.9fe64de6.js",
    "revision": "d8a23665ba0065128a41cae3b79e2b10"
  },
  {
    "url": "assets/js/12.6fea088e.js",
    "revision": "a8e4815f35d37f8fed4f6bb5437f562a"
  },
  {
    "url": "assets/js/13.36ecabec.js",
    "revision": "d4d1b81bbc663e7b32d7c9ebb74e2170"
  },
  {
    "url": "assets/js/14.beb506c8.js",
    "revision": "c1734787e9425b18fdc3846710966b4c"
  },
  {
    "url": "assets/js/15.4ad9757d.js",
    "revision": "4333a47338fef2e202589ef1d01fae6c"
  },
  {
    "url": "assets/js/16.6d278992.js",
    "revision": "b7151b450bdc0ce5f994343697af9ef2"
  },
  {
    "url": "assets/js/17.6d0b46ef.js",
    "revision": "02d1c8dc2e448525db3527396bfe115c"
  },
  {
    "url": "assets/js/18.bb1cc010.js",
    "revision": "fa61e6d222915d68718af4cf3d269b92"
  },
  {
    "url": "assets/js/19.bc7ac92c.js",
    "revision": "97efe5a17d67b41134095b8e7a015211"
  },
  {
    "url": "assets/js/2.974ffbd3.js",
    "revision": "a53ee8243ad5b2a7a5f0a128493510a9"
  },
  {
    "url": "assets/js/20.0ab19e99.js",
    "revision": "9245382086b08d4f4ae37955dca127af"
  },
  {
    "url": "assets/js/21.69fab86f.js",
    "revision": "2b26d2ae9404d91d7bad4dcb80e1cf46"
  },
  {
    "url": "assets/js/22.c7a625ef.js",
    "revision": "feda5c2c09d54c90caa6b2cd7883ecf9"
  },
  {
    "url": "assets/js/23.ec0d0913.js",
    "revision": "29fa905b604e898b0b308505554bc047"
  },
  {
    "url": "assets/js/24.572f4417.js",
    "revision": "f87bd705f3446e40d583d122dd674e4a"
  },
  {
    "url": "assets/js/25.d0603c98.js",
    "revision": "02272c53ac4c0faa3be7f96e65c75819"
  },
  {
    "url": "assets/js/26.54bb83d3.js",
    "revision": "dbe9eaeff0e3a26de3f2b0d1655ea563"
  },
  {
    "url": "assets/js/27.c94b60be.js",
    "revision": "e2f4e88c24686a6db0e3f0440e580ca7"
  },
  {
    "url": "assets/js/28.d6b9dff9.js",
    "revision": "3bccbbce8fa80ea310e5ca6f033e38bf"
  },
  {
    "url": "assets/js/29.d6bfe6bb.js",
    "revision": "4ce3a3a47342ace8386e33d57c25e795"
  },
  {
    "url": "assets/js/3.0bff6d16.js",
    "revision": "f228b7acbcb1693d5eee75f4adc115e6"
  },
  {
    "url": "assets/js/30.5b58e6a2.js",
    "revision": "b5de894049dc90d85762ebc98011880f"
  },
  {
    "url": "assets/js/31.4e73a355.js",
    "revision": "036913f6d6fa2a18ec1cd431d84e6bbf"
  },
  {
    "url": "assets/js/32.971ae1e2.js",
    "revision": "3970914aa942c5f457701356d045e3a4"
  },
  {
    "url": "assets/js/33.3c584493.js",
    "revision": "b3a7d9df714fa1c3533bd8ce63395204"
  },
  {
    "url": "assets/js/34.92db01e1.js",
    "revision": "1d7b4c64c5957e355416880c07362dac"
  },
  {
    "url": "assets/js/35.601e9e97.js",
    "revision": "fadf8b6aff144b096709a3f684e01d2a"
  },
  {
    "url": "assets/js/36.b70ff329.js",
    "revision": "1165fddc0bf68bf991d46561aaf4221c"
  },
  {
    "url": "assets/js/37.6c08203d.js",
    "revision": "50978726b37de7402aea836a1c13eff3"
  },
  {
    "url": "assets/js/38.0fa6058c.js",
    "revision": "dcaca4d4b723973f06f0896502780c23"
  },
  {
    "url": "assets/js/39.7e55281d.js",
    "revision": "150290ec5f128f88cf4108fe805dbdf7"
  },
  {
    "url": "assets/js/4.71c43fd0.js",
    "revision": "c3141c0ec3463fafd8548c85f7b5e6db"
  },
  {
    "url": "assets/js/40.24f99239.js",
    "revision": "f95016c86a342629f478b0cc782148a4"
  },
  {
    "url": "assets/js/41.15b30a29.js",
    "revision": "bbc52f66211f6ba90aad2e5f5fbb3ca8"
  },
  {
    "url": "assets/js/42.32dfa3a5.js",
    "revision": "e2ad46c45dbac10374c9434f0cd123c5"
  },
  {
    "url": "assets/js/43.78358732.js",
    "revision": "c79ff17d636ef6d21a43aa2f9c737e3e"
  },
  {
    "url": "assets/js/44.f8fb0c98.js",
    "revision": "b045e8f76ad7e65daeecd4af3d5c7ebe"
  },
  {
    "url": "assets/js/45.8ebbc1ee.js",
    "revision": "c165029c96012649ae17df259addc919"
  },
  {
    "url": "assets/js/46.93eb2e52.js",
    "revision": "5eb5e5570dbedf7f1db0b6c823c8ece8"
  },
  {
    "url": "assets/js/47.3c96f553.js",
    "revision": "5fce3fe10d9f842767b60001adb58f34"
  },
  {
    "url": "assets/js/48.6ba402ae.js",
    "revision": "b7a0ccb459ccb2cadaa9d2ada659882a"
  },
  {
    "url": "assets/js/49.6bbf78c5.js",
    "revision": "addf8f8646609e8c7e9f1ac47f5c20a5"
  },
  {
    "url": "assets/js/5.95ff1d5e.js",
    "revision": "75eb453a9995d821d3e817bb59b2aa47"
  },
  {
    "url": "assets/js/50.8536f81e.js",
    "revision": "1a89e4074b8da4ee5c763a76b0a8cad8"
  },
  {
    "url": "assets/js/51.86430362.js",
    "revision": "6414ebd964d79e9c0547bdf6f9b4fe3c"
  },
  {
    "url": "assets/js/52.9acd7290.js",
    "revision": "e7292dbc6e93834dff66bbae5761094f"
  },
  {
    "url": "assets/js/53.70914670.js",
    "revision": "f1aa851b2c5bc350bf3c415c94c11c50"
  },
  {
    "url": "assets/js/54.21bb78d8.js",
    "revision": "d2a9b445b2f473b3ca9e908c61d92a4b"
  },
  {
    "url": "assets/js/55.9a417eac.js",
    "revision": "723ada850f74f0323a93b2a86080e862"
  },
  {
    "url": "assets/js/56.18dceaf8.js",
    "revision": "c4262cbe7884e8e0bc7a899dadcb889f"
  },
  {
    "url": "assets/js/57.1153608f.js",
    "revision": "c0654f7c147e925607c09a270d3fab9f"
  },
  {
    "url": "assets/js/58.b5a32158.js",
    "revision": "dbe85337a8904bb27f8400e3f3f44e35"
  },
  {
    "url": "assets/js/59.3f76d881.js",
    "revision": "4b5b62f219229781b0eb77d6e2a16f2c"
  },
  {
    "url": "assets/js/6.6dbe4279.js",
    "revision": "8dd4048cfd6071f350e5ef5abad401a1"
  },
  {
    "url": "assets/js/60.8ea0a68d.js",
    "revision": "223b049a3a15a823eb5ad5d86c0b355b"
  },
  {
    "url": "assets/js/61.ee995d67.js",
    "revision": "0d2b90b81cf4aee3b9ff839e7347fdee"
  },
  {
    "url": "assets/js/62.996f86dc.js",
    "revision": "7752e97116312e60a75a2b3a6fceec64"
  },
  {
    "url": "assets/js/7.0f45670d.js",
    "revision": "34e4c4f9e63d2b408d359e67fb30fbc1"
  },
  {
    "url": "assets/js/8.b311a12d.js",
    "revision": "f8d9f4de9332378a003d1df6b8d5e54a"
  },
  {
    "url": "assets/js/9.57e2703e.js",
    "revision": "d095174f0401ef0af28e3efbff8846cd"
  },
  {
    "url": "assets/js/app.51a75f12.js",
    "revision": "27f71b36bf0fe214a4f5c0d063890238"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "6c7b5a3c9a6e5202bf9cdb30e51ef943"
  },
  {
    "url": "charts/bubble/index.html",
    "revision": "f152b2fbde13e345e10fa14e13cbdc92"
  },
  {
    "url": "charts/column/index.html",
    "revision": "189e12adf569d3786c5a08dfc7bb8d21"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "7c3cd93c274e418fa4ae6b7253ff0be3"
  },
  {
    "url": "charts/index.html",
    "revision": "00a0ff54a2b6eb6f6d635d099def5c5b"
  },
  {
    "url": "charts/line/index.html",
    "revision": "7a0e1304156ca11244ba11d1a9b67311"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "edbcff993808ee5ee40656bc0733975c"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "8ee7d2a71dc1c4b76e639f9c590b593d"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "e94246e2e3c0dc7ca253b62fdbd840df"
  },
  {
    "url": "components/axes/index.html",
    "revision": "35d5c7261b788b757b06f3b4283f6c1b"
  },
  {
    "url": "components/colors/index.html",
    "revision": "1e5b9e61d9c7f50acc9965d91c2f7f03"
  },
  {
    "url": "components/data/index.html",
    "revision": "f2aea8185a8e290e4653c14e6bff3ddf"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "c90c26424ce0c92adc201ee5116dbaf2"
  },
  {
    "url": "components/heading/index.html",
    "revision": "90fb81e01c55ae5990b6564d08726dff"
  },
  {
    "url": "components/index.html",
    "revision": "f3c48ab1a036db109db2a80f5d51c736"
  },
  {
    "url": "components/labels/index.html",
    "revision": "fe3e582515501d55129ff99e4a73b0e2"
  },
  {
    "url": "components/legend/index.html",
    "revision": "ec04a6ece040fcf5ae0a74c5cc38e43e"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "429155b1c44cf84219e074298369040c"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "7880c6bbfd8e098061215cf480245e90"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "ed5b2406d587b4714782dd0eed117695"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "2c02aea7ca2f0f29754a76779728062c"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "f0b0cea2bcc0eaf413fb6ced52cbe2b9"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "c486095f2c06039dd8a9e785f3e7b900"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "62f0610ab7045fbadc51f2876e4be59f"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "02785a5dc2b00d33d0de0b94fee45f59"
  },
  {
    "url": "customization/index.html",
    "revision": "4d8aad0ed2b23b3be0a412a396605f3a"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "57fa57b5f4d7bfa1297f613370762ee1"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "cfbdce4710443c6271041c07832c91af"
  },
  {
    "url": "development/index.html",
    "revision": "cd77a84771931b6cdde24dd870a8f2a6"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "323dcb6bd98993e838a48ac71d0e02b9"
  },
  {
    "url": "docs/index.html",
    "revision": "ce7dfdb4133a0bf85ea20f1fc1970dab"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "a1ff017fd978eafe253af15db4e1763f"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "6e2698ca621a4499252c681e1e9410bc"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "47731a4a644d17f2134cebc3ef01178f"
  },
  {
    "url": "examples/bubble/index.html",
    "revision": "bbba73ee2f5b4c4270521f009da246b1"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "84d12d5f10dcd3251e6c4efa0b8c6200"
  },
  {
    "url": "examples/column/index.html",
    "revision": "2d1ea6cc5dac32204551d75ed7da2e77"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "7a0c9cd122bb139d28d41b3e33b8be98"
  },
  {
    "url": "examples/index.html",
    "revision": "56d70d7d66340e8b016e58090bfca2a6"
  },
  {
    "url": "examples/legend/index.html",
    "revision": "70f0cab86f95a546fb88fe8874b46c48"
  },
  {
    "url": "examples/line/index.html",
    "revision": "0ca48a46c298ead3ab2d8e0f83cf6b58"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "600480035a59e54e8dcf875fa3aad22a"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "cdec3cfd2b0e4c65a797760a416830a9"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "e9edaaf1f3d2a632166b129600689d6d"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "179c1740b718a3c96a11f3499713e067"
  },
  {
    "url": "index.html",
    "revision": "33dd266ea7443701d14aea92816f47a7"
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
