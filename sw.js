/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/28/最大公因数最小公倍数/index.html","f84d6e06332b037e21f8a5dbf9357f4c"],["/2022/11/29/浅谈二分查找/index.html","7dded3b21716e07b515ee1f65586283d"],["/2022/11/30/浅谈各种排序/index.html","d1db0e436750b89c8afaa6f0977fd1d7"],["/2022/11/30/高中往事回忆/0000.jpg","4b7883d293591e3ac2a54f024bbc0ef8"],["/2022/11/30/高中往事回忆/index.html","9001cdfa6e0369c3816a5e93ab9f8ff9"],["/2022/12/03/递归与递推/0001.png","bba4f680255cb2655d7787f60f5274bd"],["/2022/12/03/递归与递推/index.html","1006ebdbeb4b01515b8de8ffbd9ffefd"],["/2022/12/04/进制转换/index.html","d5b547d1e3a734ad737c9fee1f736967"],["/2022/12/08/22级天梯赛热身心得/0001.png","05fbff4d55cd4bd8ef524e8c76dd3b87"],["/2022/12/08/22级天梯赛热身心得/index.html","62e7b7df0d94109cfe284de8b574e27a"],["/2022/12/09/经典题目/index.html","57170acf3181b271df72365c0402f7c5"],["/2022/12/11/22级天梯赛题解/0002.png","d96716aff7adf811706130446bdc41a7"],["/2022/12/11/22级天梯赛题解/0003.png","7cfc380ba9f64677e54ff2130b160da8"],["/2022/12/11/22级天梯赛题解/0004.png","e5f0d826fcbd260f5a1cbf8185c5b4c2"],["/2022/12/11/22级天梯赛题解/index.html","30930e77823d0b0b29215f43d196aeab"],["/2022/12/29/对结构体的理解/index.html","4c60a45a816113e9012cd8e4b6a710f9"],["/2023/02/01/牛客笔记1/index.html","47170ef6677827342fb3e75706f1efca"],["/2023/02/07/牛客笔记2/index.html","810f01131a8dad01abbd8c6bc4a5c574"],["/2023/03/09/python知识点/index.html","bacfc05ff8ede1a1953bcb2db1a4234f"],["/2023/07/03/Python笔记_2/index.html","849ed2c5d9b50680b66829239f34f40c"],["/about/index.html","091bb129bf96f17d236686f658a953d1"],["/archives/2022/11/index.html","0f6dfb425c23dc662296211ea310fb4e"],["/archives/2022/12/index.html","e01e15d66017d3fc031adbf211a8bff8"],["/archives/2022/index.html","4b6213187121633d1aa00bf4c31fcf7f"],["/archives/2023/02/index.html","c92c49875c9b8961e50520653bc52364"],["/archives/2023/03/index.html","60916d4e6c936d7667b99ce33a157346"],["/archives/2023/07/index.html","f6ced43f882a581fe073a69000a65fdc"],["/archives/2023/index.html","bc0ec20714aba43f6685e091d0303b9c"],["/archives/index.html","f8eaa03c82afc5b036ebe45454f87718"],["/archives/page/2/index.html","ea89f9daa1a210f55c197b579ecefd5c"],["/categories/C语言/index.html","c6f81efc413e3c2aa66239da41780ce9"],["/categories/index.html","55de154eddd5182c2432e46a3cc1dbde"],["/categories/回忆/index.html","3a359044146c28095ebc86363c0444a0"],["/css/index.css","8e5d643d89f3900dd96879b8ed19fbd3"],["/css/mycss.css","ed10638fe74116bf3e63b4a557eaaf4c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/123.jpg","0eb6fd95919d526a9580bf71c833be71"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","ac15698e6f2c116a6c6d836f9201a58e"],["/img/archive_img.jpg","7d45e1367b69f8c57f120075062418cc"],["/img/avatar1.jpg","a95826cdfc19880d51ed8cbfe3743bf8"],["/img/category.jpg","e9ea9cb36cbc5a55e5b38031a129250d"],["/img/default_top.jpg","ad5b77722375055796d6e076357df460"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/tag_img.jpg","c71cf19f3d5b223cd1b5e02f8e11b840"],["/img/wechat.jpg","8e729705d95e16c0595202d8a0a2fc5f"],["/index.html","d3a5a38c465eaeeb1bf30399bfb1e9f5"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","8663e09433731ce6d3ae4d8993255435"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","fb468659a1497eb687cb7cae26d7c953"],["/myself/index.html","50ad62cd39cb1bf1ba5d6bcc6a02f0fc"],["/page/2/index.html","33cff247fb1fa9a8c77a919c17127d45"],["/sw-register.js","6b42a5b3392e136c1267967f37198b15"],["/tags/https-pic1-zhimg-com-80-v2-7691a11831b076f7f1a385a4c7620899-720w-webp-source-1940ef5c/index.html","66d5e46c292c4b9787afc4287b8cfe90"],["/tags/index.html","05d1202bb992308ca7145ba4cd2bbc29"],["/tags/python/index.html","31bb842f71bd92f32e9881d6fd9c2ea4"],["/tags/排序/index.html","c5c3a415e98e59c461b470ff208e2c14"],["/tags/查找/index.html","3feab041ab42b9a7fec9399dcc2f4576"],["/tags/求数/index.html","b43037d3683bb7a45dde1ca725c7a933"],["/tags/竞赛/index.html","b7f3f421b73dc6a9ce26451820a15a34"],["/tags/算法/index.html","2d275671d78601fd283c1ffb2d3f4723"],["/tags/练习/index.html","072e80b10f994e140a1e6b97b88f67d1"],["/tags/高中/index.html","6e8a75237385c0a4bafd6604154b90cd"],["/timeline/index.html","ba33e66ff9ce3c7cfb9d53e1ec6034b8"]];
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
