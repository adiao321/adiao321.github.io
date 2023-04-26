/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/28/最大公因数最小公倍数/index.html","9078f73da1dfa1c87829b663efa7703f"],["/2022/11/29/浅谈二分查找/index.html","a42f8ea54591764d7a03066e9c1c4a16"],["/2022/11/30/浅谈各种排序/index.html","d3a264bf9da0f82e04978cdc70d0e465"],["/2022/11/30/高中往事回忆/0000.jpg","4b7883d293591e3ac2a54f024bbc0ef8"],["/2022/11/30/高中往事回忆/index.html","cdaf340434fd5cbf187bb2e4ac86eb09"],["/2022/12/03/递归与递推/0001.png","bba4f680255cb2655d7787f60f5274bd"],["/2022/12/03/递归与递推/index.html","f5420704ee22ff359a9216c48baec062"],["/2022/12/04/进制转换/index.html","43e250d05e73905aabbc7eb207296f68"],["/2022/12/08/22级天梯赛热身心得/0001.png","05fbff4d55cd4bd8ef524e8c76dd3b87"],["/2022/12/08/22级天梯赛热身心得/index.html","ae0e953f520cc91ae8fc934b76c044ae"],["/2022/12/09/经典题目/index.html","0269414fc61628e38c7819a31fcb33fc"],["/2022/12/11/22级天梯赛题解/0002.png","d96716aff7adf811706130446bdc41a7"],["/2022/12/11/22级天梯赛题解/0003.png","7cfc380ba9f64677e54ff2130b160da8"],["/2022/12/11/22级天梯赛题解/0004.png","e5f0d826fcbd260f5a1cbf8185c5b4c2"],["/2022/12/11/22级天梯赛题解/index.html","cc3b0f4136ad4cd554e9f44b6dd31bac"],["/2022/12/29/对结构体的理解/index.html","7d1c23972191c798b181a5913ac29605"],["/2023/02/01/牛客笔记1/index.html","28c92171f2933127dff66e99af269df2"],["/2023/02/07/牛客笔记2/index.html","2313ec6ecf84fc90b513c437780fa640"],["/2023/03/09/python知识点/index.html","92b569df47c47aae5ff1abd96c82e4be"],["/about/index.html","9d3db957d9aa68f155ef5b035d7f805e"],["/archives/2022/11/index.html","c02cdfbd99dfcb5c95b54f5830696ea6"],["/archives/2022/12/index.html","4dc69da577c69e5509235d55c7464559"],["/archives/2022/index.html","e69125079f1fa49c3857449a02976d50"],["/archives/2023/02/index.html","d970ed7e0b78bce52df2528389fd66f2"],["/archives/2023/03/index.html","a8c577914a476f1a1775d793da62e671"],["/archives/2023/index.html","dbc250605ce60b6564c2ad8faad810ee"],["/archives/index.html","29fc721216656cfcae8ef01870a1a6a3"],["/archives/page/2/index.html","f877d4272038c17fdfbe29822cdef823"],["/categories/C语言/index.html","590704ef263d94e89a512aedbb24ba6d"],["/categories/index.html","8cb9c2368ca6e808ef726ca42c2b0f22"],["/categories/回忆/index.html","5166b86d304a139c9fb45fc64798ee7f"],["/css/index.css","7e77cd51c53f0b796fe035a8014326ae"],["/css/mycss.css","ed10638fe74116bf3e63b4a557eaaf4c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/123.jpg","0eb6fd95919d526a9580bf71c833be71"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","ac15698e6f2c116a6c6d836f9201a58e"],["/img/avatar.jpg","f64595b083a8ae433b1469008e848309"],["/img/avatar1.jpg","a95826cdfc19880d51ed8cbfe3743bf8"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","8e729705d95e16c0595202d8a0a2fc5f"],["/index.html","ab7f3496d432ed01c075ffe5b3c52695"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","385ca1398abebde60ce67d26a0bc109b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","58d3a188c971e58417283cee102ebbd2"],["/myself/index.html","a2b0e8e41864834f468d167c55aa37dc"],["/page/2/index.html","008bb2b8dc1ae92e06c59f28822d1b6e"],["/sw-register.js","7ac5749902f74159024ae7e6814c3a7c"],["/tags/https-pic1-zhimg-com-80-v2-7691a11831b076f7f1a385a4c7620899-720w-webp-source-1940ef5c/index.html","9bbe30e0bbb10a65d9d6268bd3d1d946"],["/tags/index.html","bbbea19fe475f267c52a0002cde8fc5d"],["/tags/python/index.html","35267a4736bd3fc09c5e9bb2e977f23d"],["/tags/排序/index.html","b8b17185b7e1769739f22b4ffc7c9945"],["/tags/查找/index.html","468852b5f1647c9b1fa721af53a7977a"],["/tags/求数/index.html","c64c92675d2013b4549c8e239acb3e19"],["/tags/竞赛/index.html","0e79507c3a3d2aed4b04d8b24b59fdfc"],["/tags/算法/index.html","5f83539498c919389f3b353eec7fcb7e"],["/tags/练习/index.html","cb7c5b078a55a321cf6d70a1e5a6dcb0"],["/tags/高中/index.html","4b704d6f9f431b374953a6e5576d38ca"],["/timeline/index.html","6aa3f99542a33bed43b89a2d43f96419"]];
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
