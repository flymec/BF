// == Metadata =========================================================
var WidgetMetadata = {
  id: "jav.aggregate.pro",
  title: "JAV Aggregator",
  description: "JAV 全站聚合终极版",
  author: "Pro",
  version: "3.0.0",
  requiredVersion: "0.0.1",

  modules: [

    {
      title: "JAVDay 搜索",
      functionName: "searchJavDay",
      params: [
        { name: "keyword", title: "番号 / 女优", type: "input" },
        { name: "page", type: "page" }
      ]
    },

    {
      title: "MissAV 搜索",
      functionName: "searchMissAV",
      params: [
        { name: "keyword", title: "番号 / 女优", type: "input" },
        { name: "page", type: "page" }
      ]
    },

    {
      title: "SupJav 最新",
      functionName: "supjavLatest",
      params: [
        { name: "page", type: "page" }
      ]
    }

  ]
};


// == 基础配置 =========================================================

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
  "Accept": "*/*",
  "Connection": "keep-alive"
};


// == 通用请求 =========================================================

async function request(url, referer = url) {

  const res = await Widget.http.get(url, {
    headers: {
      ...HEADERS,
      Referer: referer
    },
    timeout: 15000
  });

  return res.data;
}


// == URL修复 =========================================================

function fixUrl(url, base) {

  if (!url) return "";

  if (url.startsWith("http")) return url;

  if (url.startsWith("//")) return "https:" + url;

  if (url.startsWith("/")) return base + url;

  return base + "/" + url;
}


// == 通用视频解析器 =========================================================

async function universalParser($, referer) {

  // DPlayer
  const scripts = $("script")
    .map((i, e) => $(e).html())
    .get();

  for (const s of scripts) {

    const m3u8 = s?.match(
      /https?:\/\/[^'"]+\.m3u8[^'"]*/
    );

    if (m3u8) return m3u8[0];

    const mp4 = s?.match(
      /https?:\/\/[^'"]+\.mp4[^'"]*/
    );

    if (mp4) return mp4[0];
  }


  // video
  const video =
    $("video").attr("src") ||
    $("video source").attr("src");

  if (video) return video;


  // iframe
  const iframe = $("iframe").attr("src");

  if (iframe) {

    const html = await request(iframe, referer);

    const $$ = Widget.html.load(html);

    const src =
      $$("video").attr("src") ||
      $$("source").attr("src");

    if (src) return src;

    const m = html.match(
      /https?:\/\/[^'"]+\.m3u8[^'"]*/
    );

    if (m) return m[0];
  }

  return null;
}


// =====================================================================
// JAVDAY
// =====================================================================

async function searchJavDay(params) {

  const keyword = encodeURIComponent(params.keyword);

  const page = params.page || 1;

  const base = "https://javday.app";

  let url;

  if (page === 1)
    url = `${base}/search/wd/${keyword}/`;
  else
    url = `${base}/search/wd/${keyword}/page/${page}/`;

  const html = await request(url);

  const $ = Widget.html.load(html);

  const list = [];

  $(".video-wrapper .videoBox").each((i, el) => {

    const $item = $(el);

    const link = fixUrl($item.attr("href"), base);

    const title = $item
      .find(".title")
      .text()
      .trim();

    const style = $item
      .find(".videoBox-cover")
      .attr("style");

    let img = "";

    if (style) {

      const m = style.match(/url\((.*?)\)/);

      if (m) img = fixUrl(m[1], base);
    }

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


// =====================================================================
// MISSAV
// =====================================================================

async function searchMissAV(params) {

  const keyword = encodeURIComponent(params.keyword);

  const page = params.page || 1;

  const base = "https://missav.com";

  const url = `${base}/search/${keyword}?page=${page}`;

  const html = await request(url);

  const $ = Widget.html.load(html);

  const list = [];

  $("a[href*='/video/']").each((i, el) => {

    const $item = $(el);

    const link = fixUrl($item.attr("href"), base);

    const title = $item.find("h2").text();

    const img = $item.find("img").attr("src");

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


// =====================================================================
// SUPJAV
// =====================================================================

async function supjavLatest(params) {

  const page = params.page || 1;

  const base = "https://supjav.com";

  const url =
    page === 1
      ? base
      : `${base}/page/${page}/`;

  const html = await request(url);

  const $ = Widget.html.load(html);

  const list = [];

  $("article").each((i, el) => {

    const $item = $(el);

    const link = $item.find("a").attr("href");

    const title = $item.find("h2").text();

    const img = $item.find("img").attr("src");

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


// =====================================================================
// 通用详情
// =====================================================================

async function loadDetail(link) {

  const html = await request(link);

  const $ = Widget.html.load(html);

  const video = await universalParser($, link);

  if (!video)
    throw new Error("视频解析失败");

  return {
    id: link,
    type: "url",
    videoUrl: video,
    customHeaders: HEADERS
  };
}
