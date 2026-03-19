// CapyPlayer Widget for Jable.TV
// 通过解析 HTML 页面获取视频列表与播放地址

var WidgetMetadata = {
id: “jable_tv”,
title: “Jable.TV”,
description: “Jable.TV 免費高清AV在線看，支持最新更新、熱門影片、分類瀏覽”,
version: “1.0.0”,
author: “CapyPlayer”,
icon: “https://assets-cdn.jable.tv/assets/images/logo.png”,
modules: [
{
id: “latest”,
title: “最近更新”,
type: “media_list”,
functionName: “getLatest”,
cacheDuration: 1800,
params: [
{ name: “page”, type: “page” }
]
},
{
id: “hot”,
title: “熱門影片”,
type: “media_list”,
functionName: “getHot”,
cacheDuration: 3600,
params: [
{ name: “page”, type: “page” }
]
},
{
id: “new_release”,
title: “全新上市”,
type: “media_list”,
functionName: “getNewRelease”,
cacheDuration: 3600,
params: [
{ name: “page”, type: “page” }
]
},
{
id: “category_list”,
title: “影片主題”,
type: “category”,
functionName: “getCategories”,
cacheDuration: 86400,
params: []
},
{
id: “category_videos”,
title: “主題影片”,
type: “media_list”,
functionName: “getCategoryVideos”,
cacheDuration: 3600,
params: [
{ name: “category”, type: “string”, label: “分類路徑”, defaultValue: “chinese-subtitle” },
{ name: “page”, type: “page” }
]
},
{
id: “search”,
title: “搜尋”,
type: “media_list”,
functionName: “searchVideos”,
cacheDuration: 600,
params: [
{ name: “keyword”, type: “string”, label: “搜尋關鍵字”, required: true },
{ name: “page”, type: “page” }
]
}
]
};

var BASE_URL = “https://jable.tv”;

// ––––– 通用工具 –––––

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
var html = typeof resp.data === “string” ? resp.data : JSON.stringify(resp.data);
return html;
}

// 从视频页面 HTML 解析卡片列表
function parseVideoCards(html, docId) {
var items = [];
try {
var cards = Widget.dom.select(docId, “.video-img-box”);
if (!cards || cards.length === 0) {
cards = Widget.dom.select(docId, “.img-box”);
}
cards.forEach(function(card, idx) {
try {
// 获取链接
var linkEl = Widget.dom.select(card, “a”);
var link = linkEl && linkEl[0] ? (linkEl[0].attributes && linkEl[0].attributes.href) : null;
if (!link) return;

```
    // 获取封面图
    var imgEl = Widget.dom.select(card, "img");
    var poster = "";
    if (imgEl && imgEl[0]) {
      var attrs = imgEl[0].attributes || {};
      poster = attrs["data-src"] || attrs["src"] || attrs["data-original"] || "";
    }

    // 获取标题
    var titleEl = Widget.dom.select(card, "h6");
    if (!titleEl || titleEl.length === 0) {
      titleEl = Widget.dom.select(card, ".title");
    }
    var title = titleEl && titleEl[0] ? (titleEl[0].text || "").trim() : "";

    // 获取时长
    var durEl = Widget.dom.select(card, ".duration");
    var duration = durEl && durEl[0] ? (durEl[0].text || "").trim() : "";

    if (!link || !title) return;

    // 从链接提取 ID（如 /videos/abc-123/ -> abc-123）
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

// 通用列表页抓取
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

// ––––– 模块函数 –––––

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
catEls.forEach(function(el, idx) {
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

    // 从链接提取分类路径，如 /categories/roleplay/ -> roleplay
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

// ––––– loadDetail –––––
// 解析视频详情页，从 <script> 标签中提取 m3u8 URL

async function loadDetail(link) {
try {
console.log(“loadDetail: “ + link);
var html = await fetchHtml(link);

```
// 从 script 标签中提取 m3u8 URL
var m3u8Match = html.match(/https?:\/\/[^\s"'<>]+\.m3u8[^\s"'<>]*/);
var videoUrl = m3u8Match ? m3u8Match[0] : null;

// 提取标题
var titleMatch = html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i);
if (!titleMatch) {
  titleMatch = html.match(/<title>([^<]+)<\/title>/i);
}
var title = titleMatch ? titleMatch[1].trim() : "";

// 提取封面
var coverMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
var posterUrl = coverMatch ? coverMatch[1] : "";

if (!videoUrl) {
  console.error("loadDetail: m3u8 not found in " + link);
  // 尝试第二种匹配方式：hlsUrl 或 file:
  var hlsMatch = html.match(/(?:hlsUrl|file)['":\s]+["']?(https?:\/\/[^\s"'<>]+\.m3u8[^\s"'<>]*)/i);
  if (hlsMatch) videoUrl = hlsMatch[1];
}

if (!videoUrl) {
  throw new Error("未能提取到播放地址，可能需要登入或頁面結構已變更");
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
