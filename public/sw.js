if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,s,d)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const i={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return c;case"module":return i;default:return e(a)}})).then(e=>{const a=d(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Ywn9tIns-vdQitmyX3ETB/_buildManifest.js",revision:"abbe7e55d6bbfd466e747abfa40f062d"},{url:"/_next/static/Ywn9tIns-vdQitmyX3ETB/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/02378d2070f44843ea5dbc36e2a42a2ae6e7b91d.270401c8384b878ca09f.js",revision:"b6d649139d57ac42e8f2aeb416e09d4f"},{url:"/_next/static/chunks/066f506a37127b2efc58c20b22b353a2694faad8.cc3ff8b15c98193a03ee.js",revision:"1c2a936fa2f91cc63c956b243636c3bc"},{url:"/_next/static/chunks/0b0fa959cf56c1d959f22473ebe46178a826d016.f523c02ecde9c215fffc.js",revision:"0321d6327e0b6e75e8fb251ffd84ae33"},{url:"/_next/static/chunks/0d0acc7326e49d5c8ca8e537e66452acdceb78ed.f350b7a98e3d49bd21fd.js",revision:"629047dde329cf52e21f03af0d150398"},{url:"/_next/static/chunks/16a5e956582a058cf335b63e2bdabde1181b5572.a8e27b6ab5d530c45082.js",revision:"d7676558b186d89dc5eab8201396a654"},{url:"/_next/static/chunks/18059a23305d2603329a3d441f456e23acca4d3c.e595ba5b2f8d5cbf44ef.js",revision:"92fbe1ad85b28bf843f991d3fd9550d4"},{url:"/_next/static/chunks/189294c2811d82ea4d3ce4066c790661d0dfa9ff.e8ee9d98da9db13bff22.js",revision:"5d53f105ad00799b4e6e9f591a27e44e"},{url:"/_next/static/chunks/18f7b8144af90bd474e2d3a1c05dcff7df339b87.1054307f6a7bd4c5e3f5.js",revision:"be2ca13fcdd7a5d2f8d05923fb896b97"},{url:"/_next/static/chunks/1d72cf151101a8fb9501003baebc5cceaa8c9fee.d379b989d04d9c4cfa56.js",revision:"238f2b88df91a4ca2532e733f8ccd3b3"},{url:"/_next/static/chunks/28cbe902b8ae0d24213df0934c280ca31a1f3353.c322cdf6b646fbb16788.js",revision:"94c45129477c35c28bcb88e648dc93af"},{url:"/_next/static/chunks/2b5c065ff71b2fcce9a899738c4d2d6564bdcc96.3b20b1e6133ed5355e88.js",revision:"c37ceada924e9ee1740dbc842aabb506"},{url:"/_next/static/chunks/2c5b3e6e9e67a16e58304184ad651c4b0c3ee156.40fcf20bf86c7c196b07.js",revision:"e8629dd8bab307266a19de3b73e55b23"},{url:"/_next/static/chunks/2db0fabe1ff85ecdbc0ad5297cf28e8bdfa20ba7.33b04bb6ace31e0a7b96.js",revision:"3677b8c70528769672026f832842cc48"},{url:"/_next/static/chunks/309a52a4.e0c8c06f88fad3947df7.js",revision:"bcd9555df0127197aead9cb960452087"},{url:"/_next/static/chunks/36bcf0ca.e001cf7c00c2b4db6da5.js",revision:"b68e31e396745850a17009b7063fb0a7"},{url:"/_next/static/chunks/39dd6bcaf684efce8e0398575e18ca5093d0b80a.9b00b31190eaf84bf1ea.js",revision:"f41a0c4e6388edb3b9e25ec6ebcf8b43"},{url:"/_next/static/chunks/3b2df725d093288160a9e50a407d36ae2ca3b117.1f89ec9c8455ccef7a31.js",revision:"1ec1fdf838c289309bd074db765b0288"},{url:"/_next/static/chunks/3d3e7c8684a9b77335fb4350784878dfcdc465d0.1c9e861fdd16f292c37c.js",revision:"ce88ccd988ed234ff386ef7d4da52dc2"},{url:"/_next/static/chunks/458558359137533e1f309f4000598126ee6d5d97.1d2052dd6d65e38a0015.js",revision:"ef195cb745480cf59009a80e63b35b1f"},{url:"/_next/static/chunks/489390fb0f18b6cdfd3b35e7dab089df7bbfbfd4.b1d2f2004b9b48d0f0cb.js",revision:"38b627b3556b9b4b232d40d19419a518"},{url:"/_next/static/chunks/52c8026c211bc0521394698e4dca1389be60ae25.98c654c40204bdfe1943.js",revision:"cc01a5d529c9e40202e58a1bf09db071"},{url:"/_next/static/chunks/58b1514619f1cdd5d17cb87fa30d214118f5e443.3021ca4ab2a73a641da2.js",revision:"6f5eb5f91f92f1a6e0b63c08ab5ac931"},{url:"/_next/static/chunks/5e72df496e350c97b687fe5e109f4bb73d6677d7.b393baef3464da6bc513.js",revision:"e1f513e4026cbeb69d5e77e9ce0899d9"},{url:"/_next/static/chunks/653e7ae358c9f8fd3a78d609d7d655c0b58a9095.d80f858a3e6092e044d5.js",revision:"e96e592d84365c3776d00e51ac8fa227"},{url:"/_next/static/chunks/6733304c4ca2206b3e82d9b29be225a8b6f08785.f1e4ec1302d6b67d2b20.js",revision:"004b53dac6073f678ec843afda6c3026"},{url:"/_next/static/chunks/688ecf09da5d353095f088ea3a4165bef516e652.39a1e6fd9ab55893db4b.js",revision:"41dc6d8c78f8147cd857d2aa500fd6de"},{url:"/_next/static/chunks/75fc9c18.452ff4d506f80e70a151.js",revision:"b8cffb572fb0f12bf4cd583a7e1c6aa9"},{url:"/_next/static/chunks/787a40dc24a21bd7a37af8f4828322e657860e60.62c7a5f223bf6d10bab6.js",revision:"a56fe39a646a116e0331e088899f66b2"},{url:"/_next/static/chunks/78e51c4022d38db83ad9f7b2268c4ea874cb41b5.32721de432286e84742d.js",revision:"3cf926193690060fd937287d9f44b37e"},{url:"/_next/static/chunks/7f2141057fcd1e73de85cf922dd9999708ca3a6c.156f65edbe930993bea7.js",revision:"2e082a55b852a135a3332d2d94ef985c"},{url:"/_next/static/chunks/8d5ab34bb7e66bd364743d94deabbe389e91237a.34d89ac85f7eeabc25e2.js",revision:"d5c57e045b74598ad3bcbab2f702b8c7"},{url:"/_next/static/chunks/91f30678b0b12b3a8c00cc5f241f94dc51250be3.dcfafbdea8667426c9ec.js",revision:"e17e331079b3a1dffbb48ee1f0a4d21c"},{url:"/_next/static/chunks/aaa24c3d4ec30711b4e0046b79f318b3d7a11be5.0562424256ca656c62a5.js",revision:"bc77ac4afc6060db64f34fb231c2cab9"},{url:"/_next/static/chunks/aaa24c3d4ec30711b4e0046b79f318b3d7a11be5_CSS.ac762d20501fdbb5a318.js",revision:"19a3a66690c89afffbabde8fc285b1bf"},{url:"/_next/static/chunks/b43577d9.47b73235cf41d74c08f5.js",revision:"07dfa2e7651002a44b259f568c6afdc1"},{url:"/_next/static/chunks/bdbe878c80821d2f4c6b7083a5b28234f60334c9.a792a3eeef28cc6bcb66.js",revision:"43c670acda9c8d64cd906c0e3115d2b5"},{url:"/_next/static/chunks/bf09fd6802d36765d2ee19d2c37a0d709c37740a.cdb8b2fb720ce8e2babf.js",revision:"fec13743690dd606ae30608b7ae204ec"},{url:"/_next/static/chunks/c015129d1aed72818dd8c3549ee2f24ff1be2824.2f0c22503b1daa9978cb.js",revision:"8d89fef14b72e77fffb9f4f9cf4e570e"},{url:"/_next/static/chunks/c1062b663c7677f94266792a8a500dbecd103e4d.c046beef0de6d7edc923.js",revision:"456c40dd064042685475a7ad7ba663f9"},{url:"/_next/static/chunks/c6ac682175416f7babe6c4314ba205b6df9c948d.e8e96194221fc35ebc66.js",revision:"bdbf4259474c4ee683bad4d9e1a50a88"},{url:"/_next/static/chunks/d2af670f9e7a2dd5b33c86542d0977e5e93993e0.c4035bf5be87099a1a65.js",revision:"e3b1301f52703071de6afb442dfb06a3"},{url:"/_next/static/chunks/d4022afb7094d225bbcd8b5c258868a868260c27.7b31f93a1961bdc51921.js",revision:"b30cf274d6b9751a43df145242c05034"},{url:"/_next/static/chunks/e6c446500b6963c9e3b9a5465cea4ac46dd18d98.ad593334367fbf5d0c42.js",revision:"aa02c706598f422767f2d7b45d9ad137"},{url:"/_next/static/chunks/f1a31c57a2a3d4013f02af7a93e48e677700021b.3c27238dc0622d4540bb.js",revision:"4f86a7e86c637be26afe843314a28838"},{url:"/_next/static/chunks/f37fb8356fd0e80ada3e9b4c282798fefef86504.503805773fbf22c0a757.js",revision:"75d3c161072b933c5470a3e21743d640"},{url:"/_next/static/chunks/f613af8f7dcb0715ecc201e26205d5932676dca8.fad424290d1c37f370ab.js",revision:"3fdba709f17f775e6d8b664eedb0754a"},{url:"/_next/static/chunks/framework.399b4f594eb85e2c7155.js",revision:"66d52f38131373c71ef5ef1e175f7a3c"},{url:"/_next/static/chunks/main-f2adbd054f5da28a9e69.js",revision:"7c42abd0f7ca44c413cd460e4cb4a4d4"},{url:"/_next/static/chunks/pages/_app-274124a2f7a57494cee5.js",revision:"40315feda5a69559bd557af46ecc4163"},{url:"/_next/static/chunks/pages/_error-bf24ad516058af769ba3.js",revision:"2b3796fdb3cc731f57df4be2db7cafc2"},{url:"/_next/static/chunks/pages/account/change-password-4ba5870f0e7dc3c408a8.js",revision:"781302e7519c8afbf48debb399a91ede"},{url:"/_next/static/chunks/pages/account/forgot-password-8294608fe9af10bd1c63.js",revision:"6412c9f0e8415be7b22416b687747490"},{url:"/_next/static/chunks/pages/account/login-30d5f0e7ba58ef78fd0d.js",revision:"1842310258c2001090efee4cefaf86de"},{url:"/_next/static/chunks/pages/account/password-reset-4a7f57f1f64e6b00167d.js",revision:"c65f6d672ab53bef334e7a41679d14e0"},{url:"/_next/static/chunks/pages/account/register-2570b862674f9696e1ce.js",revision:"faa5cd9d3a4fe8153fd8a7ed9c74b2a9"},{url:"/_next/static/chunks/pages/admin/audit-df6b3fb6eaffdd448bfc.js",revision:"eb7aaf5fc007c7412935e135e058ee7c"},{url:"/_next/static/chunks/pages/admin/customer-email-list-7b81d1bf261130547fe4.js",revision:"c1624b6109a88e3e67d1a2681468070a"},{url:"/_next/static/chunks/pages/admin/customer-services-6d66f48d814c48530de3.js",revision:"de6ec433ccc62ce28ba1f3c6ad26b5ab"},{url:"/_next/static/chunks/pages/admin/dashboard-11abca10a27290cf96d0.js",revision:"b79c2c232e7a29612c8e12c89485cb86"},{url:"/_next/static/chunks/pages/admin/inventory-be35eb8901f83c70add5.js",revision:"afcc79000a3344aafe39b41525900aaf"},{url:"/_next/static/chunks/pages/admin/login-a32088f06cf184829a07.js",revision:"5054e9843d5ca359894e0981c552a6bd"},{url:"/_next/static/chunks/pages/admin/logistics-company-122549c578ab561f04c0.js",revision:"b16e75597277dca89adc24103e34fa84"},{url:"/_next/static/chunks/pages/admin/orders-25800b5ddb4e7e0ed7c5.js",revision:"99b5b0f78c7d81ae3689735c321dda17"},{url:"/_next/static/chunks/pages/admin/orders/%5Bid%5D-e891d78255d23d8d884c.js",revision:"becd9b2c2d0f019a9faca5682b0d95e0"},{url:"/_next/static/chunks/pages/admin/showmessages-9f6d03c76d3b0ba8fdfd.js",revision:"3fdc9c3222eefccbe9ea536d30aba5a5"},{url:"/_next/static/chunks/pages/admin/sr-monitor-43cf36464b44e3bc17ce.js",revision:"8b00489e6a3457d261ab403611d94799"},{url:"/_next/static/chunks/pages/admin/super-login-5fbd1491717b31f37c2d.js",revision:"c0765b031a4eee0cd281604817e4bdbd"},{url:"/_next/static/chunks/pages/admin/user-monitor-4a2094de3ec87f2ae41b.js",revision:"fdc45deab13fcffabe192783b638c08c"},{url:"/_next/static/chunks/pages/cart-9567a7a9dfc539509325.js",revision:"d53c5b02cc8dcdd9b2b9931eab8141a8"},{url:"/_next/static/chunks/pages/checkout-28795d31576850fa723c.js",revision:"199de7998b73c39bd1d42406664aaf15"},{url:"/_next/static/chunks/pages/cst-c312611c5e4ff365678a.js",revision:"8bf0244800cee5a33107bb6089611038"},{url:"/_next/static/chunks/pages/cst/forgot-password-05f069869c328de507e5.js",revision:"42d56f2d4c0f3565c6955f70d3c11704"},{url:"/_next/static/chunks/pages/cst/login-1138a4e4daeae96834a5.js",revision:"fb495f5a1eafb9c6f1c0ed9b36d5413a"},{url:"/_next/static/chunks/pages/cst/messages-7ed6d6b59c4610845e5a.js",revision:"1d3283fa4889f012897d8801c527512b"},{url:"/_next/static/chunks/pages/cst/orders-0dac15bf4f9de1fc99d3.js",revision:"0cc0d6a8c5f202e6c18b6eba5ef4df48"},{url:"/_next/static/chunks/pages/cst/product-reviews-e3310471fcf012cf2075.js",revision:"44e61a77df4271fa69f9888654ba4231"},{url:"/_next/static/chunks/pages/cst/products-12f97b93917489770bc2.js",revision:"c2df1722acdc0c43929975d298851aa2"},{url:"/_next/static/chunks/pages/cst/products/%5Bid%5D-e3fc2a0c80fa027e7011.js",revision:"1205c654e17ec6a8917ee771b792dbfb"},{url:"/_next/static/chunks/pages/cst/register-caf40eefd617addb8d21.js",revision:"85edb85f9a7a2e78957b5b310918537a"},{url:"/_next/static/chunks/pages/cst/registered-users-1de90035a5a6d5715d72.js",revision:"9020e8bb2c39712510cf570ee9cbd7a3"},{url:"/_next/static/chunks/pages/cst/reset-password-f2ad64998acd2b20295a.js",revision:"7235143f5bb3cfb6ddbb2fc65e0d7ff1"},{url:"/_next/static/chunks/pages/cst/reset-token-2c41dc89894f78f90293.js",revision:"e868a8f3143d229db1136308cc822a90"},{url:"/_next/static/chunks/pages/emptycart-11a60f38fa13cdfe0c1a.js",revision:"5955a7c0f1eaa31f7a064140ee0ebdc0"},{url:"/_next/static/chunks/pages/index-0bc0ccbc430486f672c4.js",revision:"07a685017f4ae5a0353a316ae88d4a0d"},{url:"/_next/static/chunks/pages/paymentsuccess-3c8bbdfe558330237f76.js",revision:"d81b500acd869297058f908aa5c610f2"},{url:"/_next/static/chunks/pages/products-d9e506e04fc5f98a6698.js",revision:"b6c96b2ddded72e76f23bdfe21f820f3"},{url:"/_next/static/chunks/pages/products/%5Bdetails%5D-fc95f31c66fdfab14987.js",revision:"8e5f8795f9239bd165700b2181b74c2b"},{url:"/_next/static/chunks/pages/products/catalogue-8de9a48c80b69ce3a052.js",revision:"073e02472ee1df9ab52df9585f0543da"},{url:"/_next/static/chunks/pages/profile-5575b259685da4473bc1.js",revision:"a1020bd8db94141bb15317c196e0dc35"},{url:"/_next/static/chunks/pages/qualityassurance-b6555061951eeb893c60.js",revision:"1eb2a44a624655e6455cd722f623db22"},{url:"/_next/static/chunks/pages/qualityassurance/forgot-password-88d2e16bb7ca9a6bd54b.js",revision:"709ee0926badabaa0c7d418acecf24f4"},{url:"/_next/static/chunks/pages/qualityassurance/login-fe54a544103298e52bca.js",revision:"1e44572d900eb669451e2c17f1945378"},{url:"/_next/static/chunks/pages/qualityassurance/messages-7c8b1eb9610e6d8b39a2.js",revision:"f0477de2c00f6422158699aeaef6c391"},{url:"/_next/static/chunks/pages/qualityassurance/orders/%5Bid%5D-29e7d3a9585b7ff13850.js",revision:"d9ac86b97ac7e5b886787567300f7c43"},{url:"/_next/static/chunks/pages/qualityassurance/register-6403c40ac7caa4733019.js",revision:"b6b98e37d967bb1f7436c0e98ffb3a3f"},{url:"/_next/static/chunks/pages/qualityassurance/reset-password-504ea57fcd925d6fb7e6.js",revision:"852290184d7848e387dd47f82ec7ccae"},{url:"/_next/static/chunks/pages/qualityassurance/reset-token-a42c3efd865621391ae6.js",revision:"6cf2c047a8fc590ffc7dcaf07e4e2241"},{url:"/_next/static/chunks/pages/salesrep/login-017807858b69d01a6fb9.js",revision:"2721d2f255a8c21d5477d8b63d4f573f"},{url:"/_next/static/chunks/pages/salesrep/messages-73890e3df5fd1852cae5.js",revision:"7a7b1abca5167e11705a63fdfd51365c"},{url:"/_next/static/chunks/pages/salesrep/newpassword-cc1b8ff09efd8a50a2cd.js",revision:"c56ad33df334d6dbdc60a50a8bac98f8"},{url:"/_next/static/chunks/pages/salesrep/passwordreset-e8080915da83016ba8c0.js",revision:"323b8eef296d817192c6de16e674f712"},{url:"/_next/static/chunks/pages/salesrep/register-d4b8cd8619ed1f912a68.js",revision:"6dfedbba7b750b1b072f5d0440332264"},{url:"/_next/static/chunks/pages/salesrep/resetcode-3349294cbca2ea02857e.js",revision:"d5183c333b9126e0b58f742d491ae12b"},{url:"/_next/static/chunks/pages/salesrep/usermonitor-c570cbe2b2956474964b.js",revision:"dd68cf87e8b984a88e028d3a7747f14c"},{url:"/_next/static/chunks/pages/superadmin/admin-users-d24a401755ca7e3f467f.js",revision:"a79e2fc0dd1681ed4f15bd809fa40580"},{url:"/_next/static/chunks/pages/superadmin/register-6a110458bd49239b3fbf.js",revision:"7356d625e5114eb4b39dafa056423972"},{url:"/_next/static/chunks/pages/termsandconditions-a3a8e246907e87a47cdf.js",revision:"4edf18cf8f02e0c8a392dec3cd901043"},{url:"/_next/static/chunks/pages/vendor/customerservices-d8aee7e249d1c40c6bfb.js",revision:"61acf23a9b764c53bd59d917f4097738"},{url:"/_next/static/chunks/pages/vendor/dashboard-a6476063a9c16af9dabf.js",revision:"0df3976531b6fd842f44e4ec3ae8305f"},{url:"/_next/static/chunks/pages/vendor/forgot-password-08ab0b1218bd50d1ef57.js",revision:"f0234a50234fbb50acc70171002daebc"},{url:"/_next/static/chunks/pages/vendor/inventory-a107dee08b4a31c10867.js",revision:"b177e0860f11b8b8c3bb9e62d85e532a"},{url:"/_next/static/chunks/pages/vendor/inventory/allproducts-ea829050221b873aa4b0.js",revision:"bb9eddf869c5df05d04f3fd80f25839e"},{url:"/_next/static/chunks/pages/vendor/inventory/create-product-031dd2eda914387c82a5.js",revision:"0a467e52d446c91608aeabd65d33ca5c"},{url:"/_next/static/chunks/pages/vendor/inventory/new-2d6eadd93f2963c3d3f0.js",revision:"1f52a06778b6b804a2ad091b4889fdd0"},{url:"/_next/static/chunks/pages/vendor/login-dc89b030c17afc02de9d.js",revision:"d7a8e3da982005034ba9c5c928b365c4"},{url:"/_next/static/chunks/pages/vendor/orders-814763b116fe5ebbd360.js",revision:"2030b7ffb2597b26c6c9d7b2edbf94af"},{url:"/_next/static/chunks/pages/vendor/orders/%5Bid%5D-d71da0ea5d79705a614a.js",revision:"55917e84ae2c89bf0c8328e4ca39b8fd"},{url:"/_next/static/chunks/pages/vendor/reset-password-5361d61a2933d4f15366.js",revision:"d8b9d05bf9d78b84ffbaf88faef192de"},{url:"/_next/static/chunks/pages/vendor/reset-token-4602b3a398098a507f79.js",revision:"1f17501d2ac62f02be202b37d54f4e6d"},{url:"/_next/static/chunks/pages/vendor/reviews-55434990dcbffe44a580.js",revision:"39adc3b267968f32e632f5f9d999ba1c"},{url:"/_next/static/chunks/pages/vendor/signup-91135c6a69c568f67f03.js",revision:"9f43638aa86dcf501137eaa33b441edd"},{url:"/_next/static/chunks/polyfills-af62f9622bcdb03bbfd9.js",revision:"fefdeed491ee3b1be0595e73407a96b6"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/00083cff28700c91e323.css",revision:"feeb74e0879ec2d4edf2fa8a36336841"},{url:"/_next/static/css/0a2fa5e3ff07decf9bdb.css",revision:"72f0e208d979659fc17726ed2465b621"},{url:"/_next/static/css/545d83d637dd04d1a894.css",revision:"12732612a64ddb401ab5d140d040a437"},{url:"/_next/static/css/b45271bab981b7812762.css",revision:"ca40a0f1b0883696b53e2e74d0200432"},{url:"/_next/static/media/ajax-loader.fb6f3c230cb846e25247dfaa1da94d8f.gif",revision:"c5cd7f5300576ab4c88202b42f6ded62"},{url:"/_next/static/media/slick.2630a3e3eab21c607e21576571b95b9d.svg",revision:"f97e3bbf73254b0112091d0192f17aec"},{url:"/_next/static/media/slick.295183786cd8a138986521d9f388a286.woff",revision:"b7c9e1e479de3b53f1e4e30ebac2403a"},{url:"/_next/static/media/slick.a4e97f5a2a64f0ab132323fbeb33ae29.eot",revision:"ced611daf7709cc778da928fec876475"},{url:"/_next/static/media/slick.c94f7671dcc99dce43e22a89f486f7c2.ttf",revision:"d41f55a78e6f49a5512878df1737e58a"},{url:"/adminicons/Thumbs.db",revision:"6229975a28231796f214c3c72bddf406"},{url:"/adminicons/search.png",revision:"817ac255d40c8cca0b5cd60a0480f2ab"},{url:"/fonts/MadeTommy/Made-Tommy-Black-Outline.otf",revision:"f1eda2a26d41c153b91ea5421660d406"},{url:"/fonts/MadeTommy/Made-Tommy-Black.otf",revision:"adbfa653b14a942adad1460ff31462be"},{url:"/fonts/MadeTommy/Made-Tommy-Bold-Outline.otf",revision:"ff955794be0c3b609f2ec35c0d07db33"},{url:"/fonts/MadeTommy/Made-Tommy-Bold.otf",revision:"e6914f49919955163f88bcd37ac5bf64"},{url:"/fonts/MadeTommy/Made-Tommy-ExtraBold-Outline.otf",revision:"d38f2a1daced024dcd7c502de434675b"},{url:"/fonts/MadeTommy/Made-Tommy-ExtraBold.otf",revision:"c7af65ce104181d630b94bcae9e6edcb"},{url:"/fonts/MadeTommy/Made-Tommy-Light-Outline.otf",revision:"cd7b3a68b27c90d12e3aa0c24d9f61e8"},{url:"/fonts/MadeTommy/Made-Tommy-Light.otf",revision:"65cb0cba0839c541f3c445417f6ccc92"},{url:"/fonts/MadeTommy/Made-Tommy-Medium-Outline.otf",revision:"5756f65e032ee2122bdec10a0047235b"},{url:"/fonts/MadeTommy/Made-Tommy-Medium.otf",revision:"1735b8087a7da730af7720fa80f666af"},{url:"/fonts/MadeTommy/Made-Tommy-Regular-Outline.otf",revision:"aedb16dd7f581365ac2fd3176744f747"},{url:"/fonts/MadeTommy/Made-Tommy-Regular.otf",revision:"672608a05e1eec1bbe92bb8243792264"},{url:"/fonts/MadeTommy/Made-Tommy-Thin-Outline.otf",revision:"798f6c2cdede87ae24a44e6a84635525"},{url:"/fonts/MadeTommy/Made-Tommy-Thin.otf",revision:"ec002dcb945fa633c1973b6930e5d350"},{url:"/icons/Avatar.svg",revision:"ed24e80478ec83fbfbb272ee16b594bb"},{url:"/icons/Logout.svg",revision:"4600d8cdcb4c0a06697e619fb1524f3d"},{url:"/icons/android-chrome-192x192.png",revision:"c8b9456215f66afeaf9c01d75e163f47"},{url:"/icons/android-chrome-512x512.png",revision:"0851aa610a0b593e9ae05d15dd350522"},{url:"/icons/apple-touch-icon.png",revision:"eea7129e7c6292e210243fc66fdc32ad"},{url:"/icons/browserconfig.xml",revision:"d2c3ec839559c9b7c7638c378d45bca5"},{url:"/icons/clipboard.svg",revision:"a19f1b2dfda08000199255b7e6db6140"},{url:"/icons/delete.png",revision:"c6081b52421985bba4f2e12bbf3603bc"},{url:"/icons/edit.svg",revision:"b8f9a058975b59a12085a68100ca0a48"},{url:"/icons/facebook.svg",revision:"8c88f068872454e059de1426e9c575b2"},{url:"/icons/favicon-16x16.png",revision:"d9a9670c5730a9917d0a4faa87bfea32"},{url:"/icons/favicon-32x32.png",revision:"1c3518583b2280feb33280e3d80edf26"},{url:"/icons/favicon.ico",revision:"d215277b6cd31c65997dd83880b15c20"},{url:"/icons/logo.png",revision:"dc73d0ac44631d15b76e6ebe75955ea0"},{url:"/icons/messages.svg",revision:"1d7ca7240db4ad79dbb62dbe41a6d7a3"},{url:"/icons/mstile-144x144.png",revision:"90e2dbc0ed56cd656d7787fa3e8d83c2"},{url:"/icons/mstile-150x150.png",revision:"723425bfc9a39b779e7a3c3f46df0b63"},{url:"/icons/mstile-310x150.png",revision:"28cdbecb9e3c66a50fe65054b0a11450"},{url:"/icons/mstile-310x310.png",revision:"1a7d1da5bdd646740f79357d28577b6a"},{url:"/icons/mstile-70x70.png",revision:"87bd47c613e4b0917930df9d37bc44b1"},{url:"/icons/notification.svg",revision:"fefb0aa176826f7a7f1355c4d61f3e7a"},{url:"/icons/notify-icon.svg",revision:"fefb0aa176826f7a7f1355c4d61f3e7a"},{url:"/icons/safari-pinned-tab.svg",revision:"97798fbb1b6f39cd0544185a7b37775d"},{url:"/icons/search.png",revision:"817ac255d40c8cca0b5cd60a0480f2ab"},{url:"/icons/user.svg",revision:"511f994002e5398927be55b5d4f64922"},{url:"/icons/usermonitor.svg",revision:"e303f878add8869cd94b9f8d13af409d"},{url:"/icons/verify.svg",revision:"9ec82dcf0d748eabe87e63d05e945803"},{url:"/img/3reen-logo.svg",revision:"e0f17133f592486f6b59faeb8e923f61"},{url:"/img/3reen.png",revision:"4e7b9b1a1845ec6a8c03fcd10071c0b0"},{url:"/img/3treenwhite.svg",revision:"94fa42e727436490365efb4e934d0bec"},{url:"/img/ArrowDown.png",revision:"80d74aed3db446cb1f5a80aa1cb6c560"},{url:"/img/Check.png",revision:"196f53fe385d110f2d46788cc51c09e0"},{url:"/img/Frame.png",revision:"d39a51533d88467d377ac33d7d3f68a1"},{url:"/img/LandN.svg",revision:"9bd9aee549e38517c73b2a45af5b8571"},{url:"/img/MobileDelete.png",revision:"245dc0c9ea2c11798e6c69231d4fd611"},{url:"/img/Order Display (4).png",revision:"9be602dfbf0a450538a468cc719ce5bd"},{url:"/img/Paypal.png",revision:"8f4b811df4bf23099967be663aa7ab11"},{url:"/img/Paystack.png",revision:"51b6a0d3daec1bb1d9a1b90dab303597"},{url:"/img/Thumbs.db",revision:"9dbddc1ebd5bef27d01869801f258005"},{url:"/img/User.png",revision:"518003cbb7a91ba16df7cfe4b8df8811"},{url:"/img/Vector (30).png",revision:"30ae3db2d30c38398ed1e8a40aaa61df"},{url:"/img/Vector (32).png",revision:"30385cb044260b4b5eb8b5bc8e9b1b1f"},{url:"/img/Vector.png",revision:"2f5a4211c83cab68a8d2d0f8424565aa"},{url:"/img/Western-union.png",revision:"454c0ae0056ee219966cadf2ea57c901"},{url:"/img/amountmade.png",revision:"891550c31aa7745734b755cd58305310"},{url:"/img/arrow-down.png",revision:"ec4eb802ebf5dfa590609313eb3f99f4"},{url:"/img/audit.png",revision:"c7dcaaeedfe45c8b894dead960d39841"},{url:"/img/back-arrow.png",revision:"32fef041791706e4fa40e42085501544"},{url:"/img/banner-min.png",revision:"8045607da19011d554c855225146d007"},{url:"/img/banner.png",revision:"639628dda4742bffe182244bb0cb0fdc"},{url:"/img/blue.png",revision:"7aabbd331a86899c3b3ad09c9d64c90c"},{url:"/img/cart.png",revision:"0133b8e1bb4bf353f088bf4988ea080a"},{url:"/img/cartCheckout.png",revision:"71ce9f213d7b63b09e371d66aa4d9bc9"},{url:"/img/circle.png",revision:"c61ce390589d25506f2b3a9d3ad53dda"},{url:"/img/contact.png",revision:"f082c0712371d62fa9cb1a23da44edfb"},{url:"/img/contactUs.png",revision:"027e6bb6aefeaeb94ba1a451665a8d36"},{url:"/img/customer.png",revision:"59d8c3da751002f9c7e2068baa6aea23"},{url:"/img/dash.jpg",revision:"d1a364e1bcf275f280b5c3514a6e8017"},{url:"/img/dash.png",revision:"4d75413f0597a5c58fd1e5fff16456d3"},{url:"/img/dashboard (2).png",revision:"c68984dabd1c2cc30bac5a3519f73487"},{url:"/img/dashboard-vector2.png",revision:"ecc5e61abab953731bdf3af8b6edda02"},{url:"/img/dashboard-vector3.png",revision:"85ba52a351ea29407d3a082846c1238a"},{url:"/img/dashboard.png",revision:"4d02d1cdb9eea1636d4cd94b46de1833"},{url:"/img/down-arrow.png",revision:"5fee81e40e8680dc14ae3b546697c42a"},{url:"/img/dryer.png",revision:"1a5cc287cebc0f44ca5439b6208818b8"},{url:"/img/edit 1.png",revision:"b5fe9a5b0ba74656219fe6887286abb9"},{url:"/img/elipse.png",revision:"98ffaf954fab04a44864edf11a1e6287"},{url:"/img/facebookI.png",revision:"0901e4bcdc20bd0500a8ff4ecddcb40d"},{url:"/img/facebookI.svg",revision:"80d2f5ae384f30508707fedb185d5c4a"},{url:"/img/fb-rounded-brand-white-64.png",revision:"61c0705bbc082dd3864bd27daf299073"},{url:"/img/feeling.png",revision:"fccff83a2094615fe92cf1733ef36d3d"},{url:"/img/flutterwave-logo-1.png",revision:"b3aebb51c816a975dae2642e326d127d"},{url:"/img/gauge3x.png",revision:"eb6dafc8fd2b0a6c559743a9ddf84ec6"},{url:"/img/google-home.png",revision:"a3d8389c964d441f9092fdad01b4c825"},{url:"/img/googleI.png",revision:"581b75f08e0270d6bf0c08a6790c59e0"},{url:"/img/googleI.svg",revision:"aab3a03b2ade9925d29a25c1fbac46bb"},{url:"/img/googlenest.jpg",revision:"d93fdf7d47d21f9cd467d53dc3aea5b9"},{url:"/img/gplus-rounded-brand-white-64.png",revision:"a9168616fd5e521733f031ae5694431e"},{url:"/img/hamburger.png",revision:"ee3b3961b0976e6d98a5309d0dbb16c3"},{url:"/img/headphone3x.png",revision:"38548fce6627650e88d724736c489bd6"},{url:"/img/headphones.png",revision:"e7768355cd5859cf831af0155c81ab87"},{url:"/img/headset.png",revision:"76665066fdeb9f26c2694632fc5a6f84"},{url:"/img/headsets.png",revision:"dc3bed159494d8227634a3f595f12916"},{url:"/img/home/3reen-banner.jpg",revision:"21f21e520f7ca7385d8f0c135383258b"},{url:"/img/home/3reen-banner2.jpg",revision:"fc60bd4c44355176db44de1b5be76913"},{url:"/img/home/banner-small.jpg",revision:"52a9b5e52f5e8c387625a9cf534a0cc9"},{url:"/img/hp-omen.png",revision:"065cc84c77f792dc70e0fe8cb1e88692"},{url:"/img/iPhone.png",revision:"4ea3bc9c92ed12c80dd925ca5f32ffe8"},{url:"/img/inev.png",revision:"5795676707df4947c66c4c550f8a1844"},{url:"/img/laptop.png",revision:"578bf738e7daeadd8da2ac3cf954afed"},{url:"/img/laptop3x.png",revision:"a19da93678a4ac6a4eae765c45dfd6ec"},{url:"/img/leftArrow.png",revision:"135f4cb56170ab6720b838d6318365c2"},{url:"/img/loading.gif",revision:"796718018e4419c389409113dc8992bc"},{url:"/img/logi.png",revision:"4c09f59c1b4ae78c7c3d85e459f62896"},{url:"/img/logistic.png",revision:"542f3fcf123fb529701b830445d4ca7d"},{url:"/img/logo.png",revision:"4e7b9b1a1845ec6a8c03fcd10071c0b0"},{url:"/img/logo.svg",revision:"34accda4960b6fe4440a49c23863742e"},{url:"/img/logoLog.png",revision:"5d92917a96d891dfe77882c9a37ce2fa"},{url:"/img/mackbook3x.png",revision:"a2a0c42bd4125c8fc89c3a11585658a9"},{url:"/img/master.png",revision:"0c46e50056e24b399703a896e559af81"},{url:"/img/matrix.png",revision:"97e007e3a9fbc66b2703e0d012847c32"},{url:"/img/menu.png",revision:"fa0a7196ae489b8ec9e68b144eec74ef"},{url:"/img/metal.png",revision:"3b4b2daea8eba8cc226122005c0cddee"},{url:"/img/microwave.png",revision:"60d3cfd2fdc2e9c020e06e431ef3d4e6"},{url:"/img/msg.png",revision:"5a377563cd7b94539721d0fdf35d2acf"},{url:"/img/name-png-format-01-1.png",revision:"30715f4ecbb9cdf9850b63bd2a056640"},{url:"/img/no-image.png",revision:"c0c008e20dea607bbd4eaaedaf1efb6c"},{url:"/img/notify.png",revision:"ea2c16e303342270ca28ada1bdbfabad"},{url:"/img/order (2).png",revision:"7a5e4ba3b6c11f48b4fd6b5d97d85ae4"},{url:"/img/pending.png",revision:"f7c9f3ae7fe2c24fb8670e82e151059b"},{url:"/img/phone.png",revision:"9197d56dd66564971670974e7f518c8c"},{url:"/img/pic.png",revision:"ffd1423b7fc76517f951e08b76e8de5b"},{url:"/img/purple-ellipse.png",revision:"f6b3416f1fdd29c69eba94b2736958fe"},{url:"/img/red-ellipse.png",revision:"f9424c60c5a64a87a74f635879c14a41"},{url:"/img/scarf3x.png",revision:"0e8607737219c601cd19563c88302824"},{url:"/img/search.png",revision:"9f6f65e667b2b4d4425037a3832c1f44"},{url:"/img/searchIcon.png",revision:"48b4106cd10f7534efb6732349142b8b"},{url:"/img/shopper.png",revision:"395873ce545d3d265e3a59223f2f9286"},{url:"/img/slider-btns.png",revision:"ce39cab553733453318bf900574d2628"},{url:"/img/spinner.gif",revision:"c0c003384035ba3df9647cb2d2d965b8"},{url:"/img/sr.png",revision:"9485f2953d421a9c8c63cdce852398f6"},{url:"/img/sr2.png",revision:"2fa60c78cfc299b9679a8e284eaeae37"},{url:"/img/star1.png",revision:"2e751d1e1b2c10e9a98e63019001816c"},{url:"/img/stars.png",revision:"b4611c7c1e77dcf33c910fe0ae5ece0f"},{url:"/img/successIcon.png",revision:"920fae13e8b604e23a2a7c08fb35421a"},{url:"/img/toaster.png",revision:"b093815b2edc5eb781b2d9d0dbe434ac"},{url:"/img/topLogo.png",revision:"8bad1e65cb6abbb14ab05a8ff675703b"},{url:"/img/totalcancelled.png",revision:"b82035d1937818ff286892a12ee45cf5"},{url:"/img/treenbg2.png",revision:"2d6e187e7d7213413b528e5736608c7f"},{url:"/img/tvTray3x.png",revision:"55b29eb2e8c572788b2d4f5724ffb8f9"},{url:"/img/userProfile.png",revision:"d59c98e4904b4c33104be914530fc099"},{url:"/img/usermonitor.png",revision:"b545ff3d674b5c392548568b4798d68d"},{url:"/img/vendor-logo.svg",revision:"388362d13edf7ad802eee48ff711d831"},{url:"/img/verify 1.png",revision:"a5861c01aa508896b1b43bdbad1a39fd"},{url:"/img/vintage3x.png",revision:"c9fd24c4e86ab2b7696860c790fb1dd4"},{url:"/img/visa.png",revision:"6a7ea0bfa55c8a6fea628da0b4437f95"},{url:"/img/vr.png",revision:"f9a2d8bacaaf7a4f4c364eb9657405e0"},{url:"/img/yellow-ellipse.png",revision:"1d2b3dfa2f2588ce157ab36d0fae5c6c"},{url:"/manifest.json",revision:"bb9bb5b45ca8941be2ce04ecde01c162"},{url:"/robots.txt",revision:"3ad0652bd17ff826a31fa29366021cfd"},{url:"/search.png",revision:"817ac255d40c8cca0b5cd60a0480f2ab"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
