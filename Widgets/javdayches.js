// == Metadata =====================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday.pro",
  title: "JAVDay",
  description: "JAVDay 终极稳定版",
  author: "Pro",
  site: "https://javday.app",
  version: "2.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,

  modules: [

    {
      title: "搜索视频",
      functionName: "search",
      params: [
        {
          name: "keyword",
          title: "女优 / 番号 / 关键字",
          type: "input"
        },
        { name: "page", type: "page" }
      ]
    },

    {
      title: "最新更新",
      functionName: "category",
      params: [
        { name: "url", type: "constant", value: "/label/new/" },
        { name: "page", type: "page" }
      ]
    },

    {
      title: "人气系列",
      functionName: "category",
      params: [
        { name: "url", type: "constant", value: "/label/hot/" },
        { name: "page", type: "page" }
      ]
    },

    {
      title: "有码视频",
      functionName: "category",
      params: [
        { name: "url", type: "constant", value: "/category/censored/" },
        { name: "page", type: "page" }
      ]
    },

    {
      title: "无码视频",
      functionName: "category",
      params: [
        { name: "url", type: "constant", value: "/category/uncensored/" },
        { name: "page", type: "page" }
      ]
    },

    {
      title: "无码流出",
      functionName: "category",
      params: [
        { name: "url", type: "constant", value: "/category/uncensored-leaked/" },
        { name: "page", type: "page" }
      ]
    }

  ]
};


// == 基础配置 =====================================================

const BASE = "https://javday.app";

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
  Referer: BASE,
  Origin: BASE
};


// == 网络请求 =====================================================

async function request(url) {

  const res = await Widget.http.get(url, {
    headers: HEADERS,
    timeout: 10000
  });

  return res.data;
}


// == URL 修复 =====================================================

function fixUrl(url) {

  if (!url) return "";

  if (url.startsWith("http")) return url;

  if (url.startsWith("//")) return "https:" + url;

  if (url.startsWith("/")) return BASE + url;

  return BASE + "/" + url;
}


// == 解析封面 =====================================================

function getCover($item) {

  const style = $item
    .find(".videoBox-cover")
    .attr("style");

  if (!style) return "";

  const match = style.match(/url\((.*?)\)/);

  if (!match) return "";

  return fixUrl(match[1].replace(/['"]/g, ""));
}


// == 解析列表 =====================================================

function parseList($) {

  const list = [];

  $(".video-wrapper .videoBox").each((i, el) => {

    const $item = $(el);

    const link = fixUrl($item.attr("href"));

    const title = $item
      .find(".title")
      .text()
      .trim();

    if (!link) return;

    const img = getCover($item);

    list.push({
      id: link,
      type: "url",
      title: title,
      imgSrc: img,
      backdropPath: img,
      link: link,
      mediaType: "movie"
    });

  });

  return list;
}


// == 分类 =====================================================

async function category(params) {

  let { url, page } = params;

  if (!page) page = 1;

  let target;

  if (page === 1)
    target = BASE + url;
  else
    target = BASE + url + "page/" + page + "/";

  const html = await request(target);

  const $ = Widget.html.load(html);

  return parseList($);
}


// == 搜索 =====================================================

async function search(params) {

  const keyword = encodeURIComponent(params.keyword);

  const page = params.page || 1;

  let url;

  if (page === 1)
    url = `${BASE}/search/wd/${keyword}/`;
  else
    url = `${BASE}/search/wd/${keyword}/page/${page}/`;

  const html = await request(url);

  const $ = Widget.html.load(html);

  return parseList($);
}


// == 视频解析 =====================================================

async function parseVideo($, referer) {

  const scripts = $("script")
    .map((i, e) => $(e).html())
    .get();


  // DPlayer
  for (const s of scripts) {

    const m3u8 = s?.match(
      /url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/
    );

    if (m3u8) return m3u8[1];

    const mp4 = s?.match(
      /['"](https?:\/\/[^'"]+\.mp4[^'"]*)['"]/
    );

    if (mp4) return mp4[1];
  }


  // video
  const video =
    $("video").attr("src") ||
    $("video source").attr("src");

  if (video) return fixUrl(video);


  // iframe
  const iframe = $("iframe").attr("src");

  if (iframe) {

    const iframeUrl = fixUrl(iframe);

    const html = await request(iframeUrl);

    const $$ = Widget.html.load(html);

    const src =
      $$("video").attr("src") ||
      $$("source").attr("src");

    if (src) return fixUrl(src);

    const text = html.match(
      /https?:\/\/[^'"]+\.m3u8[^'"]*/
    );

    if (text) return text[0];
  }


  // 页面扫描
  const text = $.html().match(
    /https?:\/\/[^'"]+\.m3u8[^'"]*/
  );

  if (text) return text[0];

  return null;
}


// == 详情 =====================================================

async function loadDetail(link) {

  const url = fixUrl(link);

  const html = await request(url);

  const $ = Widget.html.load(html);

  const video = await parseVideo($, url);

  if (!video)
    throw new Error("解析失败");

  return {
    id: url,
    type: "url",
    videoUrl: video,
    customHeaders: HEADERS
  };
}
