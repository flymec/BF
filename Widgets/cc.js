var WidgetMetadata = {
id: “jable_tv”,
title: “Jable.TV”,
description: “Jable.TV AV free streaming - latest, hot, categories, search”,
version: “1.0.1”,
author: “CapyPlayer”,
icon: “https://assets-cdn.jable.tv/assets/images/logo.png”,
modules: [
{
id: “latest”,
title: “\u6700\u8fd1\u66f4\u65b0”,
type: “media_list”,
functionName: “getLatest”,
cacheDuration: 1800,
params: [{ name: “page”, type: “page” }]
},
{
id: “hot”,
title: “\u71b1\u9580\u5f71\u7247”,
type: “media_list”,
functionName: “getHot”,
cacheDuration: 3600,
params: [{ name: “page”, type: “page” }]
},
{
id: “new_release”,
title: “\u5168\u65b0\u4e0a\u5e02”,
type: “media_list”,
functionName: “getNewRelease”,
cacheDuration: 3600,
params: [{ name: “page”, type: “page” }]
},
{
id: “category_list”,
title: “\u5f71\u7247\u4e3b\u984c”,
type: “category”,
functionName: “getCategories”,
cacheDuration: 86400,
params: []
},
{
id: “category_videos”,
title: “\u4e3b\u984c\u5f71\u7247”,
type: “media_list”,
functionName: “getCategoryVideos”,
cacheDuration: 3600,
params: [
{ name: “category”, type: “string”, label: “\u5206\u985e\u8def\u5f91”, defaultValue: “chinese-subtitle” },
{ name: “page”, type: “page” }
]
},
{
id: “search”,
title: “\u641c\u5c0b”,
type: “media_list”,
functionName: “searchVideos”,
cacheDuration: 600,
params: [
{ name: “keyword”, type: “string”, label: “\u641c\u5c0b\u95dc\u9375\u5b57”, required: true },
{ name: “page”, type: “page” }
]
}
]
};

var BASE_URL = “https://jable.tv”;

function ensureArray(v) {
return Array.isArray(v) ? v : [];
}

async function fetchHtml(url) {
console.log(“fetchHtml: “ + url);
var resp = await Widget.http.get(url, {
headers: {
“User-Agent”: “Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36”,
“Referer”: BASE_URL + “/”,
“Accept-Language”: “zh-TW,zh;q=0.9,en;q=0.8”
}
});
if (!resp.ok) {
throw new Error(“HTTP “ + resp.status + “ - “ + url);
}
return typeof resp.data === “string” ? resp.data : JSON.stringify(resp.data);
}

function parseVideoCards(html, docId) {
var items = [];
try {
var cards = Widget.dom.select(docId, “.video-img-box”);
if (!cards || cards.length === 0) {
cards = Widget.dom.select(docId, “.img-box”);
}
ensureArray(cards).forEach(function(card, idx) {
try {
var linkEl = Widget.dom.select(card, “a”);
var link = linkEl && linkEl[0] ? (linkEl[0].attributes && linkEl[0].attributes.href) : null;
if (!link) return;

```
    var imgEl = Widget.dom.select(card, "img");
    var poster = "";
    if (imgEl && imgEl[0]) {
      var attrs = imgEl[0].attributes || {};
      poster = attrs["data-src"] || attrs["src"] || attrs["data-original"] || "";
    }

    var titleEl = Widget.dom.select(card, "h6");
    if (!titleEl || titleEl.length === 0) {
      titleEl = Widget.dom.select(card, ".title");
    }
    var title = titleEl && titleEl[0] ? (titleEl[0].text || "").trim() : "";

    var durEl = Widget.dom.select(card, ".duration");
    var duration = durEl && durEl[0] ? (durEl[0].text || "").trim() : "";

    if (!link || !title) return;

    var idMatch = link.match(/\/videos\/([^\/]+)/);
    var id = idMatch ? idMatch[1] : ("item_" + idx);

    items.push({
      id: String(id),
      title: title + (duration ? " [" + duration + "]" : ""),
      posterUrl: poster,
      mediaType: "movie",
      link: link.startsWith("http") ? link : BASE_URL + link
    });
  } catch (e) {
    console.warn("parseCard error: " + e.message);
  }
});
```

} catch (e) {
console.error(“parseVideoCards error: “ + e.message);
}
return items;
}

async function fetchListPage(path, page) {
var url = BASE_URL + path;
if (page && page > 1) {
url += “?page=” + page;
}
var html = await fetchHtml(url);
var docId = Widget.dom.parse(html);
var items = parseVideoCards(html, docId);
Widget.dom.remove(docId);
console.log(“fetchListPage count: “ + items.length);
return items;
}

async function getLatest(params) {
try {
return await fetchListPage(”/latest-updates/”, params.page || 1);
} catch (e) {
console.error(“getLatest error: “ + e.message);
return [];
}
}

async function getHot(params) {
try {
return await fetchListPage(”/hot/”, params.page || 1);
} catch (e) {
console.error(“getHot error: “ + e.message);
return [];
}
}

async function getNewRelease(params) {
try {
return await fetchListPage(”/new-release/”, params.page || 1);
} catch (e) {
console.error(“getNewRelease error: “ + e.message);
return [];
}
}

async function getCategories(params) {
try {
var html = await fetchHtml(BASE_URL + “/categories/”);
var docId = Widget.dom.parse(html);
var cats = [];
var catEls = Widget.dom.select(docId, “.category-img-box”);
if (!catEls || catEls.length === 0) {
catEls = Widget.dom.select(docId, “.img-box”);
}
ensureArray(catEls).forEach(function(el, idx) {
try {
var linkEl = Widget.dom.select(el, “a”);
var href = linkEl && linkEl[0] ? (linkEl[0].attributes && linkEl[0].attributes.href) : null;
if (!href) return;

```
    var imgEl = Widget.dom.select(el, "img");
    var icon = "";
    if (imgEl && imgEl[0]) {
      var attrs = imgEl[0].attributes || {};
      icon = attrs["src"] || attrs["data-src"] || "";
    }

    var titleEl = Widget.dom.select(el, "h5");
    if (!titleEl || titleEl.length === 0) titleEl = Widget.dom.select(el, "h6");
    var name = titleEl && titleEl[0] ? (titleEl[0].text || "").trim() : "";

    if (!href || !name) return;

    var catMatch = href.match(/\/categories\/([^\/]+)/);
    var catSlug = catMatch ? catMatch[1] : ("cat_" + idx);

    cats.push({
      id: catSlug,
      name: name,
      icon: icon,
      params: { category: catSlug, page: 1 }
    });
  } catch (e) {
    console.warn("parseCategory error: " + e.message);
  }
});
Widget.dom.remove(docId);
console.log("getCategories count: " + cats.length);
return cats;
```

} catch (e) {
console.error(“getCategories error: “ + e.message);
return [];
}
}

async function getCategoryVideos(params) {
var category = params.category || “chinese-subtitle”;
var page = params.page || 1;
try {
return await fetchListPage(”/categories/” + category + “/”, page);
} catch (e) {
console.error(“getCategoryVideos error: “ + e.message);
return [];
}
}

async function searchVideos(params) {
var keyword = params.keyword || “”;
var page = params.page || 1;
if (!keyword) return [];
try {
var url = BASE_URL + “/?s=” + encodeURIComponent(keyword);
if (page > 1) url += “&page=” + page;
var html = await fetchHtml(url);
var docId = Widget.dom.parse(html);
var items = parseVideoCards(html, docId);
Widget.dom.remove(docId);
return items;
} catch (e) {
console.error(“searchVideos error: “ + e.message);
return [];
}
}

async function loadDetail(link) {
try {
console.log(“loadDetail: “ + link);
var html = await fetchHtml(link);

```
var m3u8Match = html.match(/https?:\/\/[^\s"'<>]+\.m3u8[^\s"'<>]*/);
var videoUrl = m3u8Match ? m3u8Match[0] : null;

var titleMatch = html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/i);
if (!titleMatch) {
  titleMatch = html.match(/<title>([^<]+)<\/title>/i);
}
var title = titleMatch ? titleMatch[1].trim() : "";

var coverMatch = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i);
var posterUrl = coverMatch ? coverMatch[1] : "";

if (!videoUrl) {
  var hlsMatch = html.match(/(?:hlsUrl|file)\s*[=:]\s*["'](https?:\/\/[^\s"'<>]+\.m3u8[^\s"'<>]*)/i);
  if (hlsMatch) videoUrl = hlsMatch[1];
}

if (!videoUrl) {
  throw new Error("m3u8 not found, login may be required");
}

return {
  title: title,
  posterUrl: posterUrl,
  videoUrl: videoUrl
};
```

} catch (e) {
console.error(“loadDetail error: “ + e.message);
throw e;
}
}
