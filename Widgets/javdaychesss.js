// == Metadata ===================================================
var WidgetMetadata = {
  id: "forwardwidget.universal.framework",
  title: "Universal Media Plugin",
  description: "ForwardWidget 通用插件开发框架",
  author: "Framework",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 120,

  modules: [
    {
      title: "搜索",
      functionName: "search",
      params: [
        { name: "keyword", type: "input", title: "关键词" },
        { name: "page", type: "page" }
      ]
    },
    {
      title: "最新内容",
      functionName: "latest",
      params: [
        { name: "page", type: "page" }
      ]
    }
  ]
};


// ===============================================================
// CONFIG
// ===============================================================

const CONFIG = {

  USER_AGENT:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",

  TIMEOUT: 15000,

  HEADERS: {
    "Accept": "*/*",
    "Connection": "keep-alive"
  }
};


// ===============================================================
// LOGGER
// ===============================================================

function log(...args) {
  console.log("[ForwardWidget]", ...args);
}


// ===============================================================
// HTTP CLIENT
// ===============================================================

async function request(url, referer = url) {

  try {

    const res = await Widget.http.get(url, {

      headers: {
        ...CONFIG.HEADERS,
        "User-Agent": CONFIG.USER_AGENT,
        Referer: referer
      },

      timeout: CONFIG.TIMEOUT
    });

    return res.data;

  } catch (err) {

    log("Request error:", url, err);

    throw err;
  }
}


// ===============================================================
// URL NORMALIZER
// ===============================================================

function normalizeUrl(url, base) {

  if (!url) return "";

  if (url.startsWith("http")) return url;

  if (url.startsWith("//"))
    return "https:" + url;

  if (url.startsWith("/"))
    return base + url;

  return base + "/" + url;
}


// ===============================================================
// LIST PARSER (示例)
// ===============================================================

function parseList($, selector, base) {

  const list = [];

  $(selector).each((i, el) => {

    const $item = $(el);

    const link =
      normalizeUrl(
        $item.find("a").attr("href"),
        base
      );

    const title =
      $item.find(".title").text().trim();

    const img =
      $item.find("img").attr("src");

    if (!title) return;

    list.push({

      id: link,
      type: "url",
      title: title,
      imgSrc: img,
      link: link,
      mediaType: "movie"

    });

  });

  return list;
}


// ===============================================================
// SEARCH (示例实现)
// ===============================================================

async function search(params) {

  const keyword = encodeURIComponent(params.keyword);

  const page = params.page || 1;

  const base = "https://example.com";

  const url =
    page === 1
      ? `${base}/search/${keyword}`
      : `${base}/search/${keyword}?page=${page}`;

  const html = await request(url);

  const $ = Widget.html.load(html);

  return parseList($, ".item", base);
}


// ===============================================================
// LATEST (示例实现)
// ===============================================================

async function latest(params) {

  const page = params.page || 1;

  const base = "https://example.com";

  const url =
    page === 1
      ? base
      : `${base}/page/${page}`;

  const html = await request(url);

  const $ = Widget.html.load(html);

  return parseList($, ".item", base);
}


// ===============================================================
// DETAIL
// ===============================================================

async function loadDetail(link) {

  const html = await request(link);

  const $ = Widget.html.load(html);

  // 在这里实现你自己的播放器解析逻辑
  const videoUrl = null;

  if (!videoUrl)
    throw new Error("未实现播放器解析");

  return {

    id: link,
    type: "url",
    videoUrl: videoUrl,
    customHeaders: {
      "User-Agent": CONFIG.USER_AGENT
    }

  };
}
