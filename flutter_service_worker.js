'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"appbarlogo.png": "e464c10970eb9d08ac9c57ed5b59520f",
"flutter_bootstrap.js": "8e728c15e48b2516460e085456deb161",
"version.json": "f5df27aa675614241f0099a1a54863af",
"index.html": "569efd2558653108273d18e44a2a870c",
"/": "569efd2558653108273d18e44a2a870c",
"pdf_viewer.html": "e3d3537a4c363dc18de00f8e6fbf63fb",
"main.dart.js": "bb12e310e3d6e857b251e70be37edd4c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"fix_selection.css": "8ec0a56d48eef546f8174c4a95afc3e9",
"favicon.png": "2942f09ec600bbca33f4f26400f1e7f2",
"logo.png": "e464c10970eb9d08ac9c57ed5b59520f",
"icons/icon-192.png": "2942f09ec600bbca33f4f26400f1e7f2",
"icons/icon-maskable-192.png": "2942f09ec600bbca33f4f26400f1e7f2",
"icons/Icon-maskable-512.png": "2942f09ec600bbca33f4f26400f1e7f2",
"icons/Icon-512.png": "2942f09ec600bbca33f4f26400f1e7f2",
"style.css": "2ff94db3bea5de544c88011f53db5f1f",
"manifest.json": "500dff00b956e40ed548e87ce7abde09",
"build/index.html": "37061be687156590be23307f6e1a0552",
"assets/AssetManifest.json": "a0bddfff6e42da6f0ab40969ad0e7fb9",
"assets/NOTICES": "66bea4f5dae150883d6f677a418e25f2",
"assets/FontManifest.json": "a372adef5b1cb15c4f9d9237f5d8185c",
"assets/AssetManifest.bin.json": "a3e94ce4eae5d344d72c71210d774b08",
"assets/packages/esc_pos_utils_plus/resources/capabilities.json": "cfcc98d389d1ee4358f773efe8a9cdac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "869c60cfbea9b98ebd9ba553de958755",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_tex/core/mathjax_core.js": "9b5f306485385a5a7519247602d50c24",
"assets/packages/flutter_tex/core/flutter_tex.html": "c281d36e549d9b8422f043ae45437d41",
"assets/packages/flutter_tex/core/flutter_tex.css": "062a3279da48d0913eeeeb0d2266e26f",
"assets/packages/flutter_tex/core/flutter_tex.js": "7cd72377628156a02d872e8e179375be",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "8a5f575ecdf23f21bcae8204882d54bb",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "b11db8ec59b494470e6a9ecfe498e67a",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "224219a4d108f1e47aa8d883be6ecd7f",
"assets/packages/html_editor_enhanced/assets/summernote.html": "0a4697b4b9d3eba6074a152e66b83aaf",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "dc5e7f18c8d36ac1d3d4753a87c98d0a",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "f1c66d2bb0db13d30b7aaa86c07be1a4",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "1cd76f2bcd4d6d7bb8d765a234734796",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "1ab07b822bdb41c14c6fab2d4d041d4a",
"assets/packages/quill_native_bridge_linux/assets/xclip": "d37b0dbbc8341839cde83d351f96279e",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/win_ble/assets/BLEServer.exe": "28aa0e2566083c860f029ff4bc32c4ce",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "212200617f206374f58a6661f8d5d473",
"assets/fonts/MaterialIcons-Regular.otf": "8a198ee65c83f24c7332bd6c72fa5ef6",
"assets/assets/language/bn.json": "003c11b650435b27241fbdaaf486cc20",
"assets/assets/language/en.json": "e41567eeb09ca91f4bd4cf3286291660",
"assets/assets/image/maintenance.png": "3cf6759b308c7c9731d5294f400038e1",
"assets/assets/image/course_thumbnail.png": "ac0726ca3e9d14678bb7e640e0fd125e",
"assets/assets/image/down_arrow.png": "04807f8dd115c1e23c10d7f2b8798fad",
"assets/assets/image/check.png": "68d46abc1f96897ba6eed13e8d9701f6",
"assets/assets/image/email_sent.json": "603fd9bb8d54e6e956112f07407363ef",
"assets/assets/image/home_active.png": "d974ed4ca32c155c3a06877f6f46465e",
"assets/assets/image/login_animation.json": "fda8d7c4e9bf3d49df504bb4f3373fd7",
"assets/assets/image/update.png": "b7cfdbc8ad908a9db95e78e36a0edda8",
"assets/assets/image/bell.png": "0ccdea7c74fcec468ad0a45e0bdace24",
"assets/assets/image/image_picker.png": "d16a2d625cb5a38def4ada9586427f64",
"assets/assets/image/send_sms.png": "5b9a90a77094f9f5d684d4c0d87db271",
"assets/assets/image/sms.png": "9b19cc8ec79d32d37aa3105b7aa640e1",
"assets/assets/image/students.png": "10affcf5ac0b05a965b76c02a4e91ab2",
"assets/assets/image/course_management_icon.png": "f4a514d475eb5d0384ad23235d2d055e",
"assets/assets/image/live_session_icon.png": "fa45703852e6cb56160d90997630ecc5",
"assets/assets/image/settings.png": "140d838a42d36eee908ed2c6a0a16d59",
"assets/assets/image/active_profile.png": "29479ba0435741580ca9f4a467be6207",
"assets/assets/image/themes.png": "519c129186afdad9b3d6b84c9ef0a4e3",
"assets/assets/image/package.png": "839f3b921cafdce90105f7bf3cdb9eb6",
"assets/assets/image/backup.json": "4052d9ec02518218cae0c8eb130a906b",
"assets/assets/image/lock.png": "d5836c0bf00c15e0926167e6c42231a6",
"assets/assets/image/system_setting_icon.png": "2a12ceb541475121c5ffbe7a10f5fd81",
"assets/assets/image/dashboard_icon.png": "567db88c660e793bcf5418985c2b94da",
"assets/assets/image/log_out.png": "3f45a387761cd0a3e0cd335065320dea",
"assets/assets/image/export.png": "b272c3ae4a166645e0a31ca734dd1148",
"assets/assets/image/yup.json": "9be0146a80011b6a20d8513fe8ccc666",
"assets/assets/image/chat_history.png": "b00bb764df99cca8527a2fe0283b565e",
"assets/assets/image/logout.png": "1603dcaaaf4537c010dd57f5684671b1",
"assets/assets/image/guest.png": "15b61a6abf52c4050dab93df36752904",
"assets/assets/image/united_kingdom.png": "bbd8fd7399eb38fb175d75cd53b9f61b",
"assets/assets/image/home.png": "1fd72a0b4ab396a013402e6f5a5bccd6",
"assets/assets/image/no_data.json": "e02a97e99d24c50a4c29ebc30b91b6f0",
"assets/assets/image/help_and_support.png": "4b01b771d21c3519ae82b95615e435be",
"assets/assets/image/answer_icon.png": "c531112233e72d92554c4ad8195cf9e1",
"assets/assets/image/waves.json": "9ba033d7467d28d387a68a63b07394ab",
"assets/assets/image/active_cart.png": "dfb87d8a5a5d7f4f1bbcaade8be14232",
"assets/assets/image/frontend_cms_icon.png": "3a4955aaf19f706e5509054dd4ffe307",
"assets/assets/image/expense.png": "e47b3574da0761a94df80cb115860be7",
"assets/assets/image/quiz_management_icon.png": "569fa26470035d5c5053f28be2e58b65",
"assets/assets/image/backup.png": "847222efcbe98972b3dd795d68876866",
"assets/assets/image/active_category.png": "5172786c0462c4cc407ac7bd647ed5a2",
"assets/assets/image/checkmark.png": "572eae81f567349880c57a297b31b1c7",
"assets/assets/image/arrows.png": "2d845a0f76a1803a8d1fd6418f702aca",
"assets/assets/image/notes.png": "f0d26001e2b6a8af826e33bb06821c2a",
"assets/assets/image/search.png": "618f1cfbbabf85fd0943bcec95c38de3",
"assets/assets/image/placeholder.jpg": "81abc0d9b59a9aba9191102834f2d978",
"assets/assets/image/photo.png": "80090c6a1ef3deaaaa712d9637fd87f3",
"assets/assets/image/home_route_icon.png": "e555c5b10211906b0aab3d72e9ca61ca",
"assets/assets/image/student.png": "f4f2312673e76ae48741463ddb99e24f",
"assets/assets/image/sms_history.png": "54d3b8151831e3956ee47ff0236f0ef3",
"assets/assets/image/favicon.png": "7dc8170365c0dcc51d344352db13e83b",
"assets/assets/image/student_manage_icon.png": "346fffe83cd1e08f5bf1f65923565a10",
"assets/assets/image/menu.png": "8d109a9b81d54e966845ad38a00951ee",
"assets/assets/image/image_picker_icon.png": "a5912d7abb650b541342f8f80c0e771a",
"assets/assets/image/warning_icon.png": "171fa6dbadf16aef78bc96a29bf94ab7",
"assets/assets/image/logo.png": "e464c10970eb9d08ac9c57ed5b59520f",
"assets/assets/image/verify_payment.png": "0e0545fcfda97eb28ac38c180f255852",
"assets/assets/image/globe.png": "00cb6cd0addb61d5331e081879221a48",
"assets/assets/image/report_icon.png": "3f3f117eb6463dcb9e7dd58dbea9a3aa",
"assets/assets/image/calendar.png": "84fff3f3beedde1b08ade30affe2a734",
"assets/assets/image/video_icon.png": "be2b7a33496b8b0aa1fef7b3a227d42e",
"assets/assets/image/video.png": "8b4d9c7150bfc95693a8f2546fff0f5d",
"assets/assets/image/filter_icon.png": "c0c29a7a150a576741eec997443316a1",
"assets/assets/image/spain.png": "b13b4bda2102e72fcbe89a835ee91cab",
"assets/assets/image/profile.png": "c542b5e11dca495fa0c719d69f31e9e6",
"assets/assets/image/payment_history.png": "916c27a350a03e516206ab6d4392820e",
"assets/assets/image/order_payment_icon.png": "e85ff8a0e6992408941aee1f4bfbcc0b",
"assets/assets/image/call.png": "aa82fd20170708c72293abfacd9f4a19",
"assets/assets/image/bangladesh.png": "347fee817e0dc4170df558a6dce00fef",
"assets/assets/image/france.png": "8f3085b825c7d8e27edab15e80ee3e6e",
"assets/assets/image/language.png": "94dea24fb4a2cf3c2d3ba8b270db0e8a",
"assets/assets/image/delete.png": "005473c6c5d16faa68e130981706f41c",
"assets/assets/image/italy.png": "c79c4a259edb6984eda4f60453783808",
"assets/assets/image/bundle_course_icon.png": "61764cdda5a896f3cdb92fe1a4931980",
"assets/assets/image/phone.svg": "b48c127b66aee295948538b30a1f4aa9",
"assets/assets/image/up_arrow.png": "1c487db2b0323e140edf82e1dccd85cb",
"assets/assets/image/chatting.png": "7d4d4068b6cf0cacf3683905686f1f8b",
"assets/assets/image/inActive.png": "a44c5a4fc324121b154cbfe3a406dd3e",
"assets/assets/image/edit_iicon.png": "d928222fd5532a98c9fc7d1f9b88d92d",
"assets/assets/image/trash.png": "ff30b04463ee584562155b087fcc61d8",
"assets/assets/image/india.png": "79e3010f0ea67140bc49beb7f33850eb",
"assets/assets/image/sec.json": "98b21c2161dbf28ca873788e8f6430ff",
"assets/assets/image/activity_log_icon.png": "740cc4b95795827c698bfef8d5b08101",
"assets/assets/image/setting_icon.png": "5eb903d32e431b7bc54004c394936366",
"assets/assets/image/whatsapp.png": "ec69d1fab1d1b2bd76ab53aab8e982e2",
"assets/assets/image/payment_remainder.png": "24fdb5a8e0fa3e624f883913ffa6b75e",
"assets/assets/image/camera.png": "0005f5acaf9f726c8db4826ef6f55c91",
"assets/assets/image/printer.png": "77fbb61082ecfb20570f42017ad030a5",
"assets/assets/image/exam_created_icon.png": "35e57785583d67290b89a9696670b7e3",
"assets/assets/image/no_internet.png": "bb8d725c9d0b01de82027c053d341204",
"assets/assets/image/quiz.png": "ea6ab41a81cfdde28b7e4ab8829bf4a3",
"assets/assets/image/single_course_icon.png": "28f252f1bb0c07a98685db8da3f54cae",
"assets/assets/image/saudi.png": "a39296665f237666b6d436b6de291e66",
"assets/assets/image/close.png": "94b07d473742464f3974fd8cd2d314ce",
"assets/assets/font/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/assets/font/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/font/Roboto-SemiBold.ttf": "dae3c6eddbf79c41f922e4809ca9d09c",
"assets/assets/font/SolaimanLipi.ttf": "606055243509260f506382cc97cbafbf",
"assets/assets/font/Roboto-Bold.ttf": "8c9110ec6a1737b15a5611dc810b0f92",
"assets/assets/icon/svg/offline_icon.svg": "613d83d7490543b1d39741fe6f8d7e19",
"assets/assets/icon/svg/google_icon.svg": "ef0c273c8f8ea5e91800fad58a9665e0",
"assets/assets/icon/svg/lesson_icon.svg": "afcd2a50b91ea912f347d01220e59d01",
"assets/assets/icon/svg/lock_icon.svg": "82e679b8137feec1ad16d286d5d32ac4",
"assets/assets/icon/svg/twitter_x_icon.svg": "4390e8f6e1342ac1700db3ded1f32492",
"assets/assets/icon/svg/facebook_icon.svg": "900ff464a989f77e3e536ac68aeb124f",
"assets/assets/icon/svg/pdf_icon.svg": "d0ff45104ccf431d6acc5bb6601529b0",
"assets/assets/icon/svg/apple_icon.svg": "02cda81bc49bc61c4ef39497f21147fc",
"assets/assets/icon/svg/online_icon.svg": "97d20a75b4e1689e2509ace65c152113",
"assets/assets/icon/svg/warning_icon.svg": "de23da11ef457947f7b61f67027f7992",
"assets/assets/icon/svg/mail_icon.svg": "b23a663d4ecdafef95600780dc039ee5",
"service_worker.js": "6e8e506201e652b215ba8287696d074b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
