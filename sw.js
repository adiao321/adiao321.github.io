/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/28/最大公因数最小公倍数/index.html","ebb56d6035f78be64e11eaded39e3314"],["/2022/11/29/浅谈二分查找/index.html","8c93155618415e6458ea33ca5642181f"],["/2022/11/30/浅谈各种排序/index.html","664ac358cbe0635e3d68d0f094b422fa"],["/2022/11/30/高中往事回忆/0000.jpg","4b7883d293591e3ac2a54f024bbc0ef8"],["/2022/11/30/高中往事回忆/index.html","3c0d2cbdb4fa5457c81b7589e3a9a662"],["/2022/12/03/递归与递推/0001.png","bba4f680255cb2655d7787f60f5274bd"],["/2022/12/03/递归与递推/index.html","ca95163fcb50fd8fee82d9f31ad98f47"],["/2022/12/04/进制转换/index.html","8035a67de6089732e496076a4828c5c8"],["/2022/12/08/22级天梯赛热身心得/0001.png","05fbff4d55cd4bd8ef524e8c76dd3b87"],["/2022/12/08/22级天梯赛热身心得/index.html","abfb54ada1a11097c4eec7159c08bc67"],["/2022/12/09/经典题目/index.html","b520748b5fa105c26efae05221b0dc54"],["/2022/12/11/22级天梯赛题解/0002.png","d96716aff7adf811706130446bdc41a7"],["/2022/12/11/22级天梯赛题解/0003.png","7cfc380ba9f64677e54ff2130b160da8"],["/2022/12/11/22级天梯赛题解/0004.png","e5f0d826fcbd260f5a1cbf8185c5b4c2"],["/2022/12/11/22级天梯赛题解/index.html","a42f7904d8f97a720a322b22a1000b85"],["/2022/12/29/对结构体的理解/index.html","7812a94a275a30ac4d392738bd07ff4a"],["/2023/02/01/牛客笔记1/index.html","5b0c503a2e09c70f1ebb4e14ecefbe9b"],["/2023/02/07/牛客笔记2/index.html","4708198c98e8a983facdf1974af5b37e"],["/2023/03/09/python知识点/index.html","1d74c8cbfc01b0304bcecc781f4b2893"],["/2023/07/03/Python笔记_2/index.html","c1354f56e482d8c801149b2d69f76fbf"],["/2023/07/06/泰迪杯2019年B题/index.html","6832e22d325db1984f6d42fb3a62cea6"],["/about/index.html","2e11ccd3602f508736cd26fdb7e792ea"],["/archives/2022/11/index.html","60711452c653dc7ae1e95c47ca5a197f"],["/archives/2022/12/index.html","56abc92effdb91b6f6b32aa7ab5fdf53"],["/archives/2022/index.html","37e1244d41107f3f5369762ce01c8445"],["/archives/2023/02/index.html","8bb6f46b9f813993e6d6e79354c4b5ff"],["/archives/2023/03/index.html","ea4d3e050369bd3d2b187909aa9ea447"],["/archives/2023/07/index.html","435cd2133531da84f5001b660a0aa4eb"],["/archives/2023/index.html","11e49262f666003080b7731519887867"],["/archives/index.html","9dea890f012bb2cc15b8fd03f0493d9c"],["/archives/page/2/index.html","72fe8da3ae06866d760262f1958afc02"],["/categories/C语言/index.html","da22d6352148c6b150bf0a445e835ceb"],["/categories/index.html","03cdc24a32dc17a31f683d67631accb8"],["/categories/回忆/index.html","b3b92de29452aae3920849df0409ab49"],["/css/index.css","7e77cd51c53f0b796fe035a8014326ae"],["/css/mycss.css","ed10638fe74116bf3e63b4a557eaaf4c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/123.jpg","0eb6fd95919d526a9580bf71c833be71"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","ac15698e6f2c116a6c6d836f9201a58e"],["/img/avatar.jpg","f64595b083a8ae433b1469008e848309"],["/img/avatar1.jpg","a95826cdfc19880d51ed8cbfe3743bf8"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","8e729705d95e16c0595202d8a0a2fc5f"],["/index.html","fa61813bcfe9cab11f0dc7c3c96c8ae2"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","0d45e2dde66c04d5532f7fbb334ce1a4"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","2712dbe823830dcb9da7d6e2d25c9071"],["/myself/index.html","2d698193831ab3b94dba02a9c4362020"],["/page/2/index.html","8f790b5e8df74c6504f9e28e30850733"],["/sw-register.js","0916c4de2e5693c11c54e7562a533fce"],["/tags/https-pic1-zhimg-com-80-v2-7691a11831b076f7f1a385a4c7620899-720w-webp-source-1940ef5c/index.html","358c0668bf11df4ca5880cc5d1dd1194"],["/tags/index.html","0b0abe9c30ad2b77c8a67adca0b7b6cd"],["/tags/python/index.html","14f298cc8aa6b5eed7b8706e2a417853"],["/tags/排序/index.html","8750f1b7a34540132008926d0fb858f7"],["/tags/查找/index.html","6dd1c997538b33ae5e3d606b4b149938"],["/tags/求数/index.html","46fdd8f738d0b0d8f2940e7bfcf703f8"],["/tags/泰迪杯/index.html","be9c3dab727e5832bf14011d3dab519f"],["/tags/竞赛/index.html","c1c28bb94c8ac930254da5678a003474"],["/tags/算法/index.html","2290c6429cf8b6b640f8bea2158c0a29"],["/tags/练习/index.html","34d95d56545c02338e0fa3eb2e18eb4d"],["/tags/高中/index.html","27505d6007ce3c362f51c2c6d183473d"],["/timeline/index.html","935fef3b62698f0f7feb77c7d99cd109"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
