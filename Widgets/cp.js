// == Metadata =================================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday.complete",
  title: "JAVDay Final Pro",
  description: "修复搜索、国产厂商分类及 m3u8 地址提取",
  author: "flyme",
  site: "https://javday.app",
  version: "2.2.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      title: "搜索视频",
      description: "搜索JAVDay视频库",
      requiresWebView: false,
      functionName: "search",
      params: [
        { name: "keyword", title: "女優/番號/關鍵字搜索…", type: "input", value: "" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "最新更新",
      functionName: "loadPage",
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/label/new/" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "人气热榜",
      functionName: "loadPage",
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/label/hot/" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "国产厂商",
      description: "浏览国产/麻豆/天美等视频",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url", title: "厂商选择", type: "enumeration",
          enumOptions: [
            { title: "麻豆传媒", value: "https://javday.app/category/madou/" },
            { title: "果冻传媒", value: "https://javday.app/category/91zhipianchang/" },
            { title: "天美传媒", value: "https://javday.app/category/timi/" },
            { title: "星空无限", value: "https://javday.app/category/xingkong/" },
            { title: "糖心VLOG", value: "https://javday.app/category/txvlog/" },
            { title: "JVID", value: "https://javday.app/category/jvid/" }
          ],
          value: "https://javday.app/category/madou/",
        },
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ]
};

// == Constants ================================================================
const CONFIG = {
  BASE_URL: "https://javday.app",
  UA: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  LOG_PREFIX: "[JAVDay-Widget]"
};

// == Utility Functions ========================================================

async function httpGet(url, referer = CONFIG.BASE_URL) {
  try {
    const response = await Widget.http.get(url, {
      headers: { "User-Agent": CONFIG.UA, "Referer": referer },
      timeout: 10000
    });
    if (!response?.data) throw new Error("Empty Response");
    return response.data;
  } catch (error) {
    console.error(`${CONFIG.LOG_PREFIX} HTTP Error: ${url}`, error.message);
    throw error;
  }
}

function normalizeUrl(url) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  const base = CONFIG.BASE_URL.replace(/\/+$/, "");
  const path = url.startsWith("/") ? url : `/${url}`;
  return base + path;
}

// == Core Parsers =============================================================

/**
 * 解析视频项列表
 */
function parseVideoList($, selector = ".videoBox") {
  const items = [];
  $(selector).each((index, element) => {
    const $item = $(element);
    // 兼容 a 标签在外部或内部的情况
    const link = $item.is('a') ? $item.attr("href") : $item.find("a").first().attr("href");
    const title = $item.find(".title, .video-title").text().trim();
    
    if (!link || !title) return;

    // 修复：搜索页使用 data-original，分类页使用 style 或 src
    const imgObj = $item.find("img");
    let imgSrc = imgObj.attr("data-original") || imgObj.attr("src") || "";
    
    if (!imgSrc) {
      const style = $item.find(".videoBox-cover").attr("style") || "";
      const match = style.match(/url\(['"]?(.*?)['"]?\)/);
      imgSrc = match ? match[1] : "";
    }

    items.push({
      id: `${index}|${link}`,
      type: "url",
      title: title,
      imgSrc: normalizeUrl(imgSrc),
      link: normalizeUrl(link),
      description: $item.find(".time").text().trim() || "JAVDay",
      mediaType: "movie",
    });
  });
  return items;
}

// == Main Functions ===========================================================

/**
 * 搜索视频
 */
async function search(params) {
  const { keyword, page = 1 } = params;
  if (!keyword) throw new Error("请输入关键词");

  // 修复：JAVDay 最新的静态搜索路径
  const searchUrl = `${CONFIG.BASE_URL}/search/wd/${encodeURIComponent(keyword)}/page/${page}/`;
  
  const html = await httpGet(searchUrl);
  const $ = Widget.html.load(html);
  
  // 关键修复：搜索页的容器类名通常是 .video-item
  return parseVideoList($, ".video-item, .videoBox");
}

/**
 * 加载通用页面/厂商页面
 */
async function loadPage(params) {
  const { url, page = 1 } = params;
  let targetUrl = url;
  if (page > 1) {
    targetUrl = url.endsWith('/') ? `${url}page/${page}/` : `${url}/page/${page}/`;
  }
  
  const html = await httpGet(targetUrl);
  const $ = Widget.html.load(html);
  return parseVideoList($, ".videoBox");
}

/**
 * 加载详情并嗅探视频源
 */
async function loadDetail(link) {
  const fullLink = normalizeUrl(link);
  const html = await httpGet(fullLink, fullLink);
  const $ = Widget.html.load(html);

  let videoUrl = "";

  // 1. 扫描所有 script 标签内容
  const scriptContent = $("script").map((i, el) => $(el).html()).get().join("\n");
  
  // 匹配策略：DPlayer 配置、var url 定义、或任何 m3u8 字符串
  const regexes = [
    /url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/,
    /var\s+url\s*=\s*['"]([^'"]+)['"]/,
    /["'](https?:\/\/[^"']+\.m3u8[^'"]*)["']/
  ];

  for (let reg of regexes) {
    const match = scriptContent.match(reg);
    if (match && match[1]) {
      videoUrl = match[1];
      break;
    }
  }

  if (!videoUrl) throw new Error("未找到视频源");

  return {
    id: fullLink,
    type: "url",
    videoUrl: videoUrl,
    customHeaders: {
      "Referer": fullLink,
      "User-Agent": CONFIG.UA,
      "Origin": CONFIG.BASE_URL
    },
  };
}
