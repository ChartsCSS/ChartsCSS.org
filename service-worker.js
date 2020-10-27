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
    "revision": "b2608b9adca8634d0e2089bdd425f7d6"
  },
  {
    "url": "assets/css/0.styles.60093b92.css",
    "revision": "262a61b53ddc72d29b8c510eeed8d503"
  },
  {
    "url": "assets/img/html-css.png",
    "revision": "7ffa20302b6432f42fb6cc6c3a79ed51"
  },
  {
    "url": "assets/img/logo.svg",
    "revision": "1952348de51a1715764f2c692dbc4783"
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
    "url": "assets/js/25.c166051d.js",
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
    "url": "assets/js/app.ca7223b8.js",
    "revision": "d694a965f58024314b21d5d7c4025e2a"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "9c7eafafcace292a0c3a35bc39d5b9c5"
  },
  {
    "url": "charts/bubble/index.html",
    "revision": "24302fb4e0cd5b20d02291d263a271a8"
  },
  {
    "url": "charts/column/index.html",
    "revision": "77fd9ef5ab3792d80561b3ed56e7468c"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "dfef20faa6ae54fe7a8677676c44a329"
  },
  {
    "url": "charts/index.html",
    "revision": "13746be7b7a30354e76c47d3495aa75f"
  },
  {
    "url": "charts/line/index.html",
    "revision": "2b2b2f837fe9d41e1b1ef82116df7c86"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "cc1371713ab28b7d38937854245e5206"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "af893ede0a2da9f6648ab2ab89605db5"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "709e1cfc8dceab1bbb4d233a97a59f99"
  },
  {
    "url": "components/axes/index.html",
    "revision": "fb75edd2af4885d5671d72512a84d624"
  },
  {
    "url": "components/colors/index.html",
    "revision": "65cee1b207cc2393cb5d1155d6a8d665"
  },
  {
    "url": "components/data/index.html",
    "revision": "10f3eb6c7775464ce801cfc0e98d56d1"
  },
  {
    "url": "components/datasets/index.html",
    "revision": "e5484456908528737e6534c46571aa0e"
  },
  {
    "url": "components/heading/index.html",
    "revision": "b0f23543521fdc5d463ef155ed250269"
  },
  {
    "url": "components/index.html",
    "revision": "9876c7ccde28e239c7f65cb9167c64d2"
  },
  {
    "url": "components/labels/index.html",
    "revision": "a37dd76fa0daecab558009f4a49879a3"
  },
  {
    "url": "components/legend/index.html",
    "revision": "ebb8918be852b9f70c20236027b55560"
  },
  {
    "url": "components/orientation/index.html",
    "revision": "6721debc0e0a0e5ebcae9de2b1affd89"
  },
  {
    "url": "components/reverse-order/index.html",
    "revision": "b9d97dd59d19373475ea0b4dc5b896fd"
  },
  {
    "url": "components/spacing/index.html",
    "revision": "e445478d4366a6be001c6dcda7adb7ed"
  },
  {
    "url": "components/stacked/index.html",
    "revision": "9ca93c115b3bc44e8dc4c3fb3eba88c2"
  },
  {
    "url": "components/tooltips/index.html",
    "revision": "5a9c3fe8fadc5bcc7588a4a38f15021b"
  },
  {
    "url": "components/wrapper/index.html",
    "revision": "c468611d88e7809ce466e54025fe5bd1"
  },
  {
    "url": "customization/3d-effects/index.html",
    "revision": "6f531589e9fe0f68edeef9c26127431b"
  },
  {
    "url": "customization/animations/index.html",
    "revision": "c867ee5a65ed0af9c09a7984dc1178d4"
  },
  {
    "url": "customization/index.html",
    "revision": "bb9019ba27d135a68e709645d1a45c18"
  },
  {
    "url": "customization/motion-effects/index.html",
    "revision": "b3ed2951b97a34014377782fd4abd87e"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "7d1ce6152358dd41b118e3f9a15bff87"
  },
  {
    "url": "development/index.html",
    "revision": "60ca122d8b124aa1bb137415c0f8d0d0"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "795d118cbf8a14b2db30538315b92757"
  },
  {
    "url": "docs/index.html",
    "revision": "cfbbdf811c770dd7dff4cc8ac6e29cb5"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "b2df7840d18a85277a99e7f02b925190"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "83b3a938498d15de2485cbfa5362b831"
  },
  {
    "url": "examples/bar/index.html",
    "revision": "a412545ef6d6e3b614b69f271f8e7913"
  },
  {
    "url": "examples/bubble/index.html",
    "revision": "15f331b460d0d42227307ed870d1c1ec"
  },
  {
    "url": "examples/chart-builder/index.html",
    "revision": "0b0c97ba83fd8a6130c4ad93e219061f"
  },
  {
    "url": "examples/column/index.html",
    "revision": "bb68540d0e0fed07c19366e3bb0bff18"
  },
  {
    "url": "examples/donut/index.html",
    "revision": "e253e0072c80bd5519cbf4dd51e81f22"
  },
  {
    "url": "examples/index.html",
    "revision": "b43d7ce9e4729194ce447bf0984e66aa"
  },
  {
    "url": "examples/legend/index.html",
    "revision": "9a8858f06a3711138a60a40cd86a8b97"
  },
  {
    "url": "examples/line/index.html",
    "revision": "fc1f793b175cc70d30bc582d0bfbd963"
  },
  {
    "url": "examples/pie/index.html",
    "revision": "a04b07f734ed4b2e7a2fdfb784de9fc8"
  },
  {
    "url": "examples/polar/index.html",
    "revision": "fb9a0cfc9e1949ebc57bc1d09c0007a0"
  },
  {
    "url": "examples/radar/index.html",
    "revision": "a51ed1b796129b6df304d3489c79751c"
  },
  {
    "url": "examples/tooltips/index.html",
    "revision": "0bd9f6f7ac292cc7be91e4c2ec30bb19"
  },
  {
    "url": "index.html",
    "revision": "603d29ec78aaa98381439c1b0dc66d7f"
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
