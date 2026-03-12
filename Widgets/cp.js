// == Metadata =================================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday.pro",
  title: "JAVDay Pro 修复版",
  description: "完美适配搜索与国产厂商分类",
  author: "flyme",
  site: "https://javday.app",
  version: "2.5.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      title: "搜索视频",
      description: "搜索 JAVDay 视频库",
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
            { title: "蜜桃影像", value: "https://javday.app/category/mtgw/" },
            { title: "精东影业", value: "https://javday.app/category/jdav/" },
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
  UA: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  LOG_PREFIX: "[JAVDay-Pro]"
};

// == Core Functions ===========================================================

/**
 * 搜索视频 - 核心修复：适配搜索结果页 DOM
 */
async function search(params) {
  const { keyword, page = 1 } = params;
  if (!keyword) throw new Error("请输入搜索关键词");

  // 修正：使用最新的静态搜索 URL 格式
  const searchUrl = `${CONFIG.BASE_URL}/search/wd/${encodeURIComponent(keyword)}/page/${page}/`;
  
  const html = await httpGet(searchUrl);
  const $ = Widget.html.load(html);
  
  // 关键：搜索页项类名通常是 .video-item
  return parseItems($, ".video-item, .videoBox");
}

/**
 * 加载通用页面 (最新/人气/分类)
 */
async function loadPage(params) {
  const { url, page = 1 } = params;
  let targetUrl = url;
  
  // 处理分页路径
  if (page > 1) {
    targetUrl = url.endsWith('/') ? `${url}page/${page}/` : `${url}/page/${page}/`;
  }
  
  const html = await httpGet(targetUrl);
  const $ = Widget.html.load(html);
  return parseItems($, ".videoBox");
}

/**
 * 加载视频详情并嗅探播放地址
 */
async function loadDetail(link) {
  const fullLink = normalizeUrl(link);
  const html = await httpGet(fullLink, fullLink);
  const $ = Widget.html.load(html);

  let videoUrl = "";
  
  // 1. 获取所有脚本内容进行全局正则匹配
  const scripts = $("script").map((i, el) => $(el).html()).get().join("\n");
  
  // 匹配 DPlayer 配置、JS 变量或原始 m3u8 字符串
  const regexes = [
    /url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/,
    /var\s+(?:url|main)\s*=\s*['"]([^'"]+)['"]/,
    /["'](https?:\/\/[^"']+\.m3u8[^'"]*)["']/
  ];

  for (let reg of regexes) {
    const match = scripts.match(reg);
    if (match && match[1]) {
      videoUrl = match[1];
      break;
    }
  }

  // 2. 备选方案：查找 video 标签
  if (!videoUrl) {
    videoUrl = $("video source").attr("src") || $("video").attr("src");
  }

  if (!videoUrl) throw new Error("无法解析视频源地址");

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

// == Utility & Helper Functions ===============================================

/**
 * 统一解析视频列表项
 */
function parseItems($, selector) {
  const items = [];
  $(selector).each((index, element) => {
    const $item = $(element);
    
    // 自动判断链接位置
    const linkEl = $item.is('a') ? $item : $item.find("a").first();
    const link = linkEl.attr("href");
    const title = $item.find(".title, .video-title").text().trim();
    
    if (!link || !title) return;

    // 核心修复：提取封面图 (优先读取 data-original 适配懒加载)
    const imgObj = $item.find("img");
    let imgSrc = imgObj.attr("data-original") || imgObj.attr("src") || "";
    
    // 如果是背景图模式
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

async function httpGet(url, referer = CONFIG.BASE_URL) {
  try {
    const response = await Widget.http.get(url, {
      headers: { "User-Agent": CONFIG.UA, "Referer": referer },
      timeout: 10000
    });
    return response.data;
  } catch (error) {
    console.error(`${CONFIG.LOG_PREFIX} HTTP Request Failed:`, error.message);
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
