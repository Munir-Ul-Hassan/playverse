'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f41191bb585c1ce8dcdea2d25fbaea8a",
".git/config": "831dda4917ce31f11e3607dbfdaf15eb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2aa7659fcfaf106a063b09e094518cfc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f2e56558ec71ce54ea36b8a9bbfa9670",
".git/logs/refs/heads/gh-pages": "f2e56558ec71ce54ea36b8a9bbfa9670",
".git/logs/refs/remotes/origin/gh-pages": "5df9f3b7add67627aca532633922690a",
".git/objects/01/b192fa69735fbfebef036125198c18859896cb": "793a62bf4d53f3111c70a5879d8044e9",
".git/objects/0e/ed0fd1be80b679c47584cd8b77d621d097202a": "955726217d356443a8752b39b9ace2a8",
".git/objects/0f/82a8360517d2c8b7d16e85434d40c6fb735954": "6a607eaa588a4312c03292ddbe569cfa",
".git/objects/0f/ee5a3613f9c058881a31b2fd8e88cda7cf70fa": "a2b1e4b45835302b52d2b1d46546c494",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/8c6034a5c8e182f1404b354fd1beefdd8aa697": "f9c164683345c699c254bf1844e84097",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "0185c67dad999f49755704755e660c16",
".git/objects/1e/49c009a6534db9887576d9e785a80037258279": "2a73da777faa2bd4041559a4ba16a335",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/29/52ea2f90b5e05da84e0399f538a3e91568c470": "c713ed700d60046e2eba51326c8387df",
".git/objects/2e/1635a9e76a78ea054ec5acaef5af9783136e03": "08f9c0db507d5f213edfff1a82daacad",
".git/objects/47/c0e6ce88a5a3a7338deb1ac2fc9425fde2a099": "ab506b339ca443be7afb2690696d9761",
".git/objects/48/d2c1a9929dd1737662a1beae4240e8a2a4d8c6": "27f4ad0170a90afbfbee307ea20b15e6",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/4c4a617d67a10dc482604d147b2e04960edef5": "91c43a1ead662a0a08b9e6aac2b9789e",
".git/objects/51/edfc12ad4a65ea0d995b8f06689f319d659a01": "b88537e98662244af4001c0381d85cd8",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5b/5a3e88ef5a461306e255c4f8c052790c387f67": "62c257544125eb499d7264a201012615",
".git/objects/5d/ed5120c5aa045fecbf6efddc822c4aa7426d46": "84eee0cf714378af9f422893fce0b9a4",
".git/objects/69/b3bd724c69e2fd880fbc582aa9466e6e7eac9e": "f5f4729664074cc291c07f6f21c10b13",
".git/objects/6a/68d32c13f4d511ac6a4004fbabf7bed1b8a89a": "be319bc949a54ddcb51cdcf1b3784a44",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/77/6961384d33f5861d01c45150fd525e6cdedc64": "e3a7e59f817049db7273121289e348de",
".git/objects/7b/d4673afc249045fd5b84a029209d4d9ea501b6": "75fabc42575e717eda8de1cfd4f87f08",
".git/objects/86/8749801a06df9f26b16834e56b74470f5b2841": "744a5c5da30186124a54fae1c17f9e90",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d0f6230a7b564463102f59ed95fc1c7d31d5a0": "1ce521de9c7c04240697803ada6edf8c",
".git/objects/8a/4740bf1ae0d999be3640a0ff90f24ed581ec1a": "03d5737ba96810094259e9d081c24dc4",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/9f85ab6930f703ef73ece37b3559d8ef56b73f": "ed43d1a730160ea42f0688eafef6a9fd",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/a7/e3333cd44976828d68c7beda916db5c14aac60": "33ee2383feaa3b61a1d0ba97edd3723e",
".git/objects/b0/80749d3e60a89af3266ad0d675247cba31da0c": "093596d1cab9cfdeec9ce602d2abcf79",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c4/5383bf017191f73a39bca452d264c26e505d90": "e5ede9025cbb9919b78bfbaa94bbe84f",
".git/objects/c4/82e2fcd0c02ce8e1b033ea2f8defb9008f582c": "b894c5ccb4ed6f33b02f329d829b273b",
".git/objects/c7/78d93d8153a2cbc20b713986415f355d3f0f77": "0e3e5b83db17dd3e3e177e03ba73e96f",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ca/160f725f6350451b9c3e6eab8a1610844289f2": "31a5050763909636739fde63c05af111",
".git/objects/ca/41e7c0a3e5f190cd7a1fa6bc5002bd9bc3ef14": "eb3052b118d1026d6e1950dd7451506d",
".git/objects/ca/46da13da50df37d9fdeafeb8f716781e3fd27e": "e1a1a66ef527b0d9b6d11fa3810c1f29",
".git/objects/ca/8ebacbef5a736313bc63da2e54dacf6b9fe152": "427fc5a9cadc17ab7fe5f688ea3db476",
".git/objects/ca/bc6a0625535758e809ed2238f71cfad13b88fe": "782f885978f9928e8b3340bbbb76db01",
".git/objects/ce/65b7327349bd5d2a6b65d457445c933c57f838": "27afc1f747b5877819e0ec153a718dce",
".git/objects/cf/0d76986577f4927edb0442751150f4348d2b2b": "8de0c8bd13efdfbfdb8a5c2e557e4ff6",
".git/objects/d1/6ebc502cf87c2de6b8f5f3c20300e0a53fdaea": "1e84a4cbca5cd7966b31d5dd930ef2b2",
".git/objects/d3/3d7fbe0815bb636d7a3143ec8fc14bf516d85e": "7a97d18a63a3e8aa015abf6ea5418e82",
".git/objects/d4/02e2035db902fb6e58606d8106abb4ba79cffd": "f14d292c7a9b5e8401337e7d93fa01f1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/7727d3ef675ae0491444bf70f8900c6e405d56": "7cc050d3132232b9e1f1a8bc8bbda1cb",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/ddd2426b35520c662092060eee3f89e037d89a": "623d035f72708101899e1d9c4b309bb2",
".git/objects/e4/fbfdc18f69775825c049d31d27aeea986bd6c8": "4d28f9d8f54e4df30e3609fb4c5ae39d",
".git/objects/e5/c5b38b839b723b9ffddf3699113f242909ad76": "5b9e39ae59b4f066e3c682854f5ce970",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/510d5f0ac9892c8176c1e9aba4fdba6b040426": "acf87b0a9d4cbbd46b032c52cb305b17",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e109a4cab6a3da5d30887d7897d422fcf0aa03": "102745fa9bb30ca9b3ed07e7e3e7361d",
".git/objects/fa/987b27dd97690426abab4511b7d2a2ac0a8bc7": "7e98f2fccbfd1cf4139d8792b164e4a2",
".git/refs/heads/gh-pages": "063fc95ea5884bb94778ce643fb5263a",
".git/refs/remotes/origin/gh-pages": "063fc95ea5884bb94778ce643fb5263a",
"assets/AssetManifest.bin": "f501649bf7bf7c821f56f5795f2956bf",
"assets/AssetManifest.bin.json": "afa9f4acacbe9de428dc998ae58651af",
"assets/AssetManifest.json": "46ee806a7c25178947b9988f638c21da",
"assets/assets/app_store.png": "82abb35062020f18d133827dac612005",
"assets/assets/car-match-icon-copy.png": "dabad5ec8cfebf8f43ddb27a9abb74c6",
"assets/assets/career.png": "4df94560af8176428d594e75de2b73fa",
"assets/assets/cartoon.png": "4618a4af1b7b3f9e9b279c3586f3995d",
"assets/assets/cashbag.png": "8832d96192f2e47b08e78e65c31c2f0a",
"assets/assets/flag.png": "838b3d2975fb2463880687020d1a3635",
"assets/assets/game1.png": "8bfab764fa537586438fe0341d3767b7",
"assets/assets/leftcat.png": "d130b2aae3f7c4e37aa132a1fbc067a8",
"assets/assets/linkedin.png": "88a16451d1f21a238c2e798260d73f29",
"assets/assets/logo2.png": "9e6b3d2ab33e4fee7540b0971b49a8cc",
"assets/assets/logo3.png": "68dc68e4529e9905c88b035d37b442df",
"assets/assets/logo4.png": "8076957a82f498873424ce053e7e47e1",
"assets/assets/main.png": "be1233207cb299a6c2b5a2ab2e1a6d27",
"assets/assets/main1.png": "31d1c9061341a9ee6deb0e215a96f426",
"assets/assets/ms_icon_240.png": "4dd6618e7a3bad8b04883bef828ab240",
"assets/assets/ourgames.jpg": "8bff36aaba8e0537445a04c3ea4dc19e",
"assets/assets/playverse.png": "d60c11a93395dda498040b306ad76366",
"assets/assets/play_store.png": "2b3058e90cb773e15b3e70d427f5b0e8",
"assets/assets/play_store1.png": "a25899fb52126cd0e1b2228ef6e80264",
"assets/assets/rightcat.png": "9861d080c3fb293e314e09451db7e499",
"assets/assets/skyline1.png": "a66158bda41a50b11e315a298c603ea0",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "bbe3543decca0ccc455bf83965ad6aa7",
"assets/NOTICES": "fea7df40e00043dba3817d422473d6f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "c7eb97c21a4646318543a95f96fd7903",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "e6fa2dcf4484a66a9c6803f346a4765a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cab06d0e7acb2d745f8b5939e5f2038c",
"/": "cab06d0e7acb2d745f8b5939e5f2038c",
"main.dart.js": "a338ba13acc1859b6d960f7c94a2b762",
"manifest.json": "7b74ca54b97f908229b09540b2e17282",
"version.json": "07669d4dd4825529777f3344cb913436"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
