var WidgetMetadata = {
id: “jable_tv”,
title: “Jable.TV”,
description: “Jable.TV - latest, hot, categories, models, search”,
version: “2.0.0”,
author: “CapyPlayer”,
icon: “https://assets-cdn.jable.tv/assets/images/logo.png”,
modules: [
{
id: “search”,
title: “\u641c\u5c0b”,
type: “media_list”,
functionName: “search”,
cacheDuration: 600,
params: [
{ name: “keyword”, title: “\u95dc\u9375\u5b57”, type: “string”, required: true },
{
name: “sort_by”,
title: “\u6392\u5e8f”,
type: “enum”,
enumOptions: [
{ title: “\u6700\u591a\u89c0\u770b”, value: “video_viewed” },
{ title: “\u8fd1\u671f\u6700\u4f73”, value: “post_date_and_popularity” },
{ title: “\u6700\u8fd1\u66f4\u65b0”, value: “post_date” },
{ title: “\u6700\u591a\u6536\u85cf”, value: “most_favourited” }
],
defaultValue: “post_date_and_popularity”
},
{ name: “page”, type: “page” }
]
},
{
id: “hot”,
title: “\u71b1\u9580”,
type: “media_list”,
functionName: “getHot”,
cacheDuration: 3600,
params: [
{
name: “sort_by”,
title: “\u6642\u9593\u7bc4\u570d”,
type: “enum”,
enumOptions: [
{ title: “\u4eca\u65e5\u71b1\u9580”, value: “video_viewed_today” },
{ title: “\u672c\u9031\u71b1\u9580”, value: “video_viewed_week” },
{ title: “\u672c\u6708\u71b1\u9580”, value: “video_viewed_month” },
{ title: “\u6240\u6709\u6642\u9593”, value: “video_viewed” }
],
defaultValue: “video_viewed_week”
},
{ name: “page”, type: “page” }
]
},
{
id: “latest”,
title: “\u6700\u65b0”,
type: “media_list”,
functionName: “getLatest”,
cacheDuration: 1800,
params: [
{
name: “sort_by”,
title: “\u6392\u5e8f”,
type: “enum”,
enumOptions: [
{ title: “\u6700\u65b0\u767c\u4f48”, value: “post_date” },
{ title: “\u6700\u591a\u89c0\u770b”, value: “video_viewed” },
{ title: “\u6700\u591a\u6536\u85cf”, value: “most_favourited” }
],
defaultValue: “post_date”
},
{ name: “page”, type: “page” }
]
},
{
id: “chinese”,
title: “\u4e2d\u6587\u5b57\u5e55”,
type: “media_list”,
functionName: “getChinese”,
cacheDuration: 3600,
params: [
{
name: “sort_by”,
title: “\u6392\u5e8f”,
type: “enum”,
enumOptions: [
{ title: “\u6700\u65b0\u66f4\u65b0”, value: “post_date” },
{ title: “\u6700\u591a\u89c0\u770b”, value: “video_viewed” },
{ title: “\u6700\u591a\u6536\u85cf”, value: “most_favourited” }
],
defaultValue: “post_date”
},
{ name: “page”, type: “page” }
]
},
{
id: “theme”,
title: “\u4e3b\u984c”,
type: “media_list”,
functionName: “getTheme”,
cacheDuration: 3600,
params: [
{
name: “url”,
title: “\u9078\u64c7\u4e3b\u984c”,
type: “enum”,
enumOptions: [
{ title: “\u89d2\u8272\u5287\u60c5”, value: “https://jable.tv/categories/roleplay/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u5236\u670d\u8a98\u60d1”, value: “https://jable.tv/categories/uniform/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u76f4\u63a5\u958b\u556a”, value: “https://jable.tv/categories/sex-only/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u7d72\u896a\u7f8e\u817f”, value: “https://jable.tv/categories/pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u4e3b\u5974\u8abf\u6559”, value: “https://jable.tv/categories/bdsm/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “多P群交”, value: “https://jable.tv/categories/groupsex/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u7537\u53cb\u8996\u89d2”, value: “https://jable.tv/categories/pov/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u51cc\u8fb1\u5feb\u611f”, value: “https://jable.tv/categories/insult/?mode=async&function=get_block&block_id=list_videos_common_videos_list” }
],
defaultValue: “https://jable.tv/categories/roleplay/?mode=async&function=get_block&block_id=list_videos_common_videos_list”
},
{
name: “sort_by”,
title: “\u6392\u5e8f”,
type: “enum”,
enumOptions: [
{ title: “\u6700\u65b0\u66f4\u65b0”, value: “post_date” },
{ title: “\u6700\u591a\u89c0\u770b”, value: “video_viewed” },
{ title: “\u6700\u591a\u6536\u85cf”, value: “most_favourited” }
],
defaultValue: “post_date”
},
{ name: “page”, type: “page” }
]
},
{
id: “body_type”,
title: “\u8eab\u6750”,
type: “media_list”,
functionName: “getBodyType”,
cacheDuration: 3600,
params: [
{
name: “url”,
title: “\u9078\u64c7\u8eab\u6750”,
type: “enum”,
enumOptions: [
{ title: “\u5c0f\u4e73”, value: “https://jable.tv/tags/small-tits/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u5de8\u4e73”, value: “https://jable.tv/tags/big-tits/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u7f8e\u817f”, value: “https://jable.tv/tags/beautiful-leg/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u7f8e\u5c3b”, value: “https://jable.tv/tags/beautiful-butt/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u718a\u5973”, value: “https://jable.tv/tags/mature-woman/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u5a07\u5c0f”, value: “https://jable.tv/tags/dainty/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u77ed\u9aee”, value: “https://jable.tv/tags/short-hair/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u767d\u864e”, value: “https://jable.tv/tags/hairless-pussy/?mode=async&function=get_block&block_id=list_videos_common_videos_list” }
],
defaultValue: “https://jable.tv/tags/big-tits/?mode=async&function=get_block&block_id=list_videos_common_videos_list”
},
{
name: “sort_by”,
title: “\u6392\u5e8f”,
type: “enum”,
enumOptions: [
{ title: “\u6700\u65b0\u66f4\u65b0”, value: “post_date” },
{ title: “\u6700\u591a\u89c0\u770b”, value: “video_viewed” },
{ title: “\u6700\u591a\u6536\u85cf”, value: “most_favourited” }
],
defaultValue: “post_date”
},
{ name: “page”, type: “page” }
]
},
{
id: “costume”,
title: “\u8863\u8457”,
type: “media_list”,
functionName: “getCostume”,
cacheDuration: 3600,
params: [
{
name: “url”,
title: “\u9078\u64c7\u8863\u8457”,
type: “enum”,
enumOptions: [
{ title: “\u9ed1\u7d72”, value: “https://jable.tv/tags/black-pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u808c\u7d72”, value: “https://jable.tv/tags/flesh-toned-pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u7d72\u896a”, value: “https://jable.tv/tags/pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u6821\u670d”, value: “https://jable.tv/tags/school-uniform/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u5973\u50d5”, value: “https://jable.tv/tags/maid/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u548c\u670d”, value: “https://jable.tv/tags/kimono/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u773c\u93e1\u5a18”, value: “https://jable.tv/tags/glasses/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u5154\u5973\u90ce”, value: “https://jable.tv/tags/bunny-girl/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “Cosplay”, value: “https://jable.tv/tags/Cosplay/?mode=async&function=get_block&block_id=list_videos_common_videos_list” }
],
defaultValue: “https://jable.tv/tags/black-pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list”
},
{
name: “sort_by”,
title: “\u6392\u5e8f”,
type: “enum”,
enumOptions: [
{ title: “\u6700\u65b0\u66f4\u65b0”, value: “post_date” },
{ title: “\u6700\u591a\u89c0\u770b”, value: “video_viewed” },
{ title: “\u6700\u591a\u6536\u85cf”, value: “most_favourited” }
],
defaultValue: “post_date”
},
{ name: “page”, type: “page” }
]
},
{
id: “role”,
title: “\u89d2\u8272”,
type: “media_list”,
functionName: “getRole”,
cacheDuration: 3600,
params: [
{
name: “url”,
title: “\u9078\u64c7\u89d2\u8272”,
type: “enum”,
enumOptions: [
{ title: “\u4eba\u59bb”, value: “https://jable.tv/tags/wife/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u8b77\u58eb”, value: “https://jable.tv/tags/nurse/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u8001\u5e2b”, value: “https://jable.tv/tags/teacher/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u7a7a\u59d0”, value: “https://jable.tv/tags/flight-attendant/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “OL”, value: “https://jable.tv/tags/ol/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u9ede\u64ad”, value: “https://jable.tv/tags/female-anchor/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “\u5bb6\u653f\u5a66”, value: “https://jable.tv/tags/housewife/?mode=async&function=get_block&block_id=list_videos_common_videos_list” }
],
defaultValue: “https://jable.tv/tags/wife/?mode=async&function=get_block&block_id=list_videos_common_videos_list”
},
{
name: “sort_by”,
title: “\u6392\u5e8f”,
type: “enum”,
enumOptions: [
{ title: “\u6700\u65b0\u66f4\u65b0”, value: “post_date” },
{ title: “\u6700\u591a\u89c0\u770b”, value: “video_viewed” },
{ title: “\u6700\u591a\u6536\u85cf”, value: “most_favourited” }
],
defaultValue: “post_date”
},
{ name: “page”, type: “page” }
]
}
]
};

var ASYNC_SUFFIX = “?mode=async&function=get_block&block_id=list_videos_common_videos_list”;
var DEFAULT_HEADERS = {
“User-Agent”: “Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36”,
“Accept”: “text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8”,
“Referer”: “https://jable.tv/”
};

function ensureArray(v) {
return Array.isArray(v) ? v : [];
}

function safeStr(v) {
return typeof v === “string” ? v : String(v || “”);
}

async function fetchPage(url) {
console.log(“fetch: “ + url);
var resp = await Widget.http.get(url, { headers: DEFAULT_HEADERS });
if (!resp.ok) {
throw new Error(“HTTP “ + resp.status + “ - “ + url);
}
return typeof resp.data === “string” ? resp.data : JSON.stringify(resp.data);
}

function buildUrl(base, sortBy, page) {
var url = base;
if (sortBy) url += “&sort_by=” + sortBy;
if (page && page > 1) url += “&from=” + page;
return url;
}

function parseItems(html) {
var items = [];
var docId = Widget.dom.parse(html);
try {
var cards = Widget.dom.select(docId, “.video-img-box”);
ensureArray(cards).forEach(function(card, idx) {
try {
var titleEl = Widget.dom.select(card, “.title a”);
if (!titleEl || titleEl.length === 0) return;
var linkNode = titleEl[0];
var link = linkNode.attributes && linkNode.attributes.href ? linkNode.attributes.href : null;
if (!link) return;

```
    var title = (linkNode.text || "").trim();
    if (!title) return;

    var imgEl = Widget.dom.select(card, "img");
    var poster = "";
    if (imgEl && imgEl[0]) {
      var a = imgEl[0].attributes || {};
      poster = a["data-src"] || a["src"] || a["data-original"] || "";
    }

    var durEl = Widget.dom.select(card, ".label");
    var duration = durEl && durEl[0] ? (durEl[0].text || "").trim() : "";

    var idMatch = link.match(/\/videos\/([^\/]+)/);
    var id = idMatch ? idMatch[1] : ("item_" + idx);

    items.push({
      id: String(id),
      title: title + (duration ? "  " + duration : ""),
      posterUrl: poster,
      mediaType: "movie",
      link: link.startsWith("http") ? link : "https://jable.tv" + link
    });
  } catch (e) {
    console.warn("parseCard err: " + e.message);
  }
});
```

} catch (e) {
console.error(“parseItems err: “ + e.message);
}
Widget.dom.remove(docId);
console.log(“parsed items: “ + items.length);
return items;
}

async function fetchAndParse(baseUrl, params) {
var url = buildUrl(baseUrl, params.sort_by, params.page);
var html = await fetchPage(url);
return parseItems(html);
}

async function search(params) {
try {
var kw = encodeURIComponent(params.keyword || “”);
if (!kw) return [];
var base = “https://jable.tv/search/” + kw + “/?mode=async&function=get_block&block_id=list_videos_videos_list_search_result&q=” + kw;
return await fetchAndParse(base, params);
} catch (e) {
console.error(“search err: “ + e.message);
return [];
}
}

async function getHot(params) {
try {
var base = “https://jable.tv/hot/” + ASYNC_SUFFIX;
return await fetchAndParse(base, params);
} catch (e) {
console.error(“getHot err: “ + e.message);
return [];
}
}

async function getLatest(params) {
try {
var base = “https://jable.tv/new-release/” + ASYNC_SUFFIX;
return await fetchAndParse(base, params);
} catch (e) {
console.error(“getLatest err: “ + e.message);
return [];
}
}

async function getChinese(params) {
try {
var base = “https://jable.tv/categories/chinese-subtitle/” + ASYNC_SUFFIX;
return await fetchAndParse(base, params);
} catch (e) {
console.error(“getChinese err: “ + e.message);
return [];
}
}

async function getTheme(params) {
try {
if (!params.url) return [];
return await fetchAndParse(params.url, params);
} catch (e) {
console.error(“getTheme err: “ + e.message);
return [];
}
}

async function getBodyType(params) {
try {
if (!params.url) return [];
return await fetchAndParse(params.url, params);
} catch (e) {
console.error(“getBodyType err: “ + e.message);
return [];
}
}

async function getCostume(params) {
try {
if (!params.url) return [];
return await fetchAndParse(params.url, params);
} catch (e) {
console.error(“getCostume err: “ + e.message);
return [];
}
}

async function getRole(params) {
try {
if (!params.url) return [];
return await fetchAndParse(params.url, params);
} catch (e) {
console.error(“getRole err: “ + e.message);
return [];
}
}

async function loadDetail(link) {
try {
console.log(“loadDetail: “ + link);
var html = await fetchPage(link);
var hlsMatch = html.match(/var hlsUrl\s*=\s*’([^’]+)’/);
if (!hlsMatch) {
hlsMatch = html.match(/hlsUrl\s*[=:]\s*[”’]([^"']+.m3u8[^"']*)/);
}
if (!hlsMatch) {
hlsMatch = html.match(/https?://[^\s”’<>]+.m3u8[^\s”’<>]*/);
if (hlsMatch) hlsMatch = [null, hlsMatch[0]];
}
if (!hlsMatch) {
throw new Error(“m3u8 not found”);
}
var videoUrl = hlsMatch[1];

```
var titleMatch = html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/i);
if (!titleMatch) titleMatch = html.match(/<title>([^<]+)<\/title>/i);
var title = titleMatch ? titleMatch[1].trim() : "";

var coverMatch = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i);
var posterUrl = coverMatch ? coverMatch[1] : "";

return {
  title: title,
  posterUrl: posterUrl,
  videoUrl: videoUrl,
  customHeaders: {
    "Referer": link,
    "User-Agent": DEFAULT_HEADERS["User-Agent"]
  }
};
```

} catch (e) {
console.error(“loadDetail err: “ + e.message);
throw e;
}
}
