// == Metadata =================================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday",
  title: "JAVDay",
  description: "获取 JAVDay 推荐",
  author: "flyme",
  site: "https://javday.app",
  version: "1.6.1",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      id: "search",
      title: "搜索视频",
      description: "搜索JAVDay视频库",
      type: "media_list",
      functionName: "search",
      cacheDuration: 3600,
      params: [
        { name: "keyword", title: "女優/番號/關鍵字搜索…", type: "input", value: "" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "latest",
      title: "最新更新",
      description: "浏览最新更新视频",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", type: "constant", value: "https://javday.app/label/new/" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "hot",
      title: "人气系列",
      description: "浏览人气系列视频",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", type: "constant", value: "https://javday.app/label/hot/" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "new_release",
      title: "新作上市",
      description: "浏览新作上市视频",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", type: "constant", value: "https://javday.app/category/new-release/" },
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          value: "new"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "censored",
      title: "有码视频",
      description: "浏览有码分类视频",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", type: "constant", value: "https://javday.app/category/censored/" },
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          value: "popular"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "uncensored",
      title: "无码视频",
      description: "浏览无码分类视频",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", type: "constant", value: "https://javday.app/category/uncensored/" },
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          value: "new"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "uncensored_leaked",
      title: "无码流出",
      description: "浏览无码流出视频",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", type: "constant", value: "https://javday.app/category/uncensored-leaked/" },
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          value: "new"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "sex8",
      title: "杏吧视频",
      description: "浏览杏吧分类视频",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", type: "constant", value: "https://javday.app/category/sex8/" },
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          value: "popular"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "hongkongdoll",
      title: "玩偶姐姐",
      description: "浏览玩偶姐姐视频",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", type: "constant", value: "https://javday.app/category/hongkongdoll/" },
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          value: "popular"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "chinese_av",
      title: "国产 AV",
      description: "浏览国产 AV视频",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", type: "constant", value: "https://javday.app/category/chinese-av/" },
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          value: "popular"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "chinese_producers",
      title: "国产厂商",
      description: "按厂商标签浏览国产厂商视频",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url", title: "厂商选择", type: "enumeration",
          enumOptions: [
            { title: "麻豆传媒", value: "https://javday.app/index.php/category/madou/" },
            { title: "果冻传媒", value: "https://javday.app/index.php/category/91zhipianchang/" },
            { title: "天美传媒", value: "https://javday.app/index.php/category/timi/" },
            { title: "星空无限", value: "https://javday.app/index.php/category/xingkong/" },
            { title: "皇家华人", value: "https://javday.app/index.php/category/royalasianstudio/" },
            { title: "蜜桃影像", value: "https://javday.app/index.php/category/mtgw/" },
            { title: "精东影业", value: "https://javday.app/index.php/category/jdav/" },
            { title: "台湾 AV", value: "https://javday.app/index.php/category/twav/" },
            { title: "JVID", value: "https://javday.app/index.php/category/jvid/" },
            { title: "萝莉社", value: "https://javday.app/index.php/category/luolisheus/" },
            { title: "糖心VLOG", value: "https://javday.app/index.php/category/txvlog/" },
            { title: "Psychoporn TW", value: "https://javday.app/index.php/category/psychoporn-tw/" }
          ],
          value: "https://javday.app/index.php/category/madou/"
        },
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          value: "new"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ]
};

// == Constants ================================================================
const CONFIG = {
  BASE_URL: "https://javday.app",
  USER_AGENT: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  LOG_PREFIX: "JAVDay -",
  TIMEOUT: 15000
};

// == Utility Functions ========================================================

/**
 * 发送 HTTP GET 请求（兼容多种环境）
 */
async function httpGet(url, referer = CONFIG.BASE_URL) {
  const headers = {
    "User-Agent": CONFIG.USER_AGENT,
    "Referer": referer,
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
  };

  // 尝试 apiGetAbsolute（CapyPlayer 推荐）
  if (typeof apiGetAbsolute !== 'undefined') {
    try {
      const response = await apiGetAbsolute(url, { headers, timeout: CONFIG.TIMEOUT });
      // 处理响应格式
      let html = response;
      if (response && typeof response === 'object') {
        if (response.data) html = response.data;
        else if (response.body) html = response.body;
      }
      if (typeof html !== 'string') html = String(html);
      return html;
    } catch (e) {
      console.warn(`${CONFIG.LOG_PREFIX} apiGetAbsolute 失败:`, e.message);
    }
  }

  // 尝试 Widget.http.get（旧版）
  if (typeof Widget !== 'undefined' && Widget.http && Widget.http.get) {
    try {
      const response = await Widget.http.get(url, { headers, timeout: CONFIG.TIMEOUT });
      if (response && response.data) return response.data;
      return response;
    } catch (e) {
      console.warn(`${CONFIG.LOG_PREFIX} Widget.http.get 失败:`, e.message);
    }
  }

  throw new Error(`所有请求方法均失败: ${url}`);
}

/**
 * 将相对 URL 转换为绝对 URL
 */
function normalizeUrl(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("//")) return `https:${url}`;
  const base = CONFIG.BASE_URL.replace(/\/+$/, "");
  const path = url.startsWith("/") ? url : `/${url}`;
  return base + path;
}

/**
 * 从元素的 style 属性中提取背景图片 URL
 */
function getCoverImgSrc($item) {
  const styleAttr = $item.find(".videoBox-cover").attr("style");
  if (!styleAttr) return "";
  const match = styleAttr.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
  return match ? normalizeUrl(match[1]) : "";
}

/**
 * 解析视频列表页的 DOM，提取视频项
 */
function parseVideoList($, context = "来自 JAVDay") {
  const items = [];
  $(".video-wrapper .videoBox").each((index, element) => {
    const $item = $(element);
    const link = $item.attr("href");
    const title = $item.find(".videoBox-info .title").text().trim();
    const imgSrc = getCoverImgSrc($item);

    if (!link || !title) return;

    items.push({
      id: `${index}|${link}`,
      type: "url",
      title: title,
      imgSrc: imgSrc,
      backdropPath: imgSrc,
      link: normalizeUrl(link),
      description: context,
      mediaType: "movie"
    });
  });
  return items;
}

/**
 * 从 DPlayer 脚本内容中提取视频 URL
 */
function extractVideoUrlFromDPlayerScript(scriptContent) {
  if (!scriptContent) return null;
  const regexes = [
    /video\s*:\s*{\s*[^}]*url\s*:\s*['"]([^'"]+)['"]/,
    /url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/
  ];
  for (const regex of regexes) {
    const match = scriptContent.match(regex);
    if (match && match[1]) return match[1];
  }
  return null;
}

/**
 * 从详情页 DOM 中提取视频源
 */
function extractVideoUrl($) {
  let videoUrl = null;

  // 1. 查找 DPlayer 脚本
  $("script").each((i, el) => {
    const content = $(el).html();
    if (content && content.includes("new DPlayer")) {
      const url = extractVideoUrlFromDPlayerScript(content);
      if (url) {
        videoUrl = url;
        return false; // 跳出循环
      }
    }
  });
  if (videoUrl) return videoUrl;

  // 2. 常见 video 标签
  videoUrl = $("video#J_prismPlayer").attr("src") ||
             $("source[src*='.m3u8']").attr("src") ||
             $("video source").attr("src");
  if (videoUrl) return videoUrl;

  // 3. 脚本中内联的 m3u8 地址
  $("script").each((i, el) => {
    const content = $(el).html();
    if (content && content.includes(".m3u8")) {
      const match = content.match(/['"](https?:\/\/[^'"]+\.m3u8[^'"]*)['"]/);
      if (match && match[1]) {
        videoUrl = match[1];
        return false;
      }
    }
  });
  if (videoUrl) return videoUrl;

  // 4. iframe 嵌入
  videoUrl = $("iframe[src*='player']").attr("src");
  if (videoUrl) return normalizeUrl(videoUrl);

  return null;
}

/**
 * 从 URL 中提取分类/标签 ID
 */
function extractCategoryId(url) {
  const parts = url.split("/").filter(p => p && p !== "index.php");
  return parts.pop() || "unknown";
}

/**
 * 构建分页 URL（支持排序）
 */
function buildPageUrl(baseUrl, sortBy, page) {
  const cleanBase = baseUrl.replace(/\/+$/, "").replace(/\/page\/\d+$/, "");
  const id = extractCategoryId(cleanBase);
  const isLabel = cleanBase.includes("/label/");

  let path;
  if (sortBy === "popular") {
    path = `/fiter/by/hits/id/${id}/`;
  } else {
    path = isLabel ? `/label/${id}/` : `/category/${id}/`;
  }

  if (cleanBase.includes("index.php")) {
    path = `/index.php${path}`;
  }

  if (page > 1) {
    path += `page/${page}/`;
  }

  return path;
}

/**
 * 将路径转换为完整 URL
 */
function getFullUrl(path) {
  if (path.startsWith("http")) return path;
  return `${CONFIG.BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

// == Core Functions ===========================================================

/**
 * 加载通用列表页（分类/标签/厂商）
 */
async function loadPage(params = {}) {
  const { url, sort_by = "new", page = 1 } = params;
  if (!url) throw new Error("缺少 URL 参数");

  let targetUrl;
  if (sort_by === "popular") {
    const popularPath = buildPageUrl(url, "popular", page);
    targetUrl = getFullUrl(popularPath);
  } else {
    const normalPath = buildPageUrl(url, "new", page);
    targetUrl = getFullUrl(normalPath);
  }

  try {
    const html = await httpGet(targetUrl, url);
    const $ = Widget.html.load(html);
    const items = parseVideoList($, `排序:${sort_by === "new" ? "最新" : "人气"}`);

    // 如果人气路径无数据，降级到普通路径
    if (items.length === 0 && sort_by === "popular") {
      console.warn(`${CONFIG.LOG_PREFIX} 人气路径无数据，降级到普通路径`);
      const fallbackPath = buildPageUrl(url, "new", page);
      const fallbackHtml = await httpGet(getFullUrl(fallbackPath), url);
      const $fallback = Widget.html.load(fallbackHtml);
      return parseVideoList($fallback, "排序:最新(人气降级)");
    }

    return items;
  } catch (error) {
    if (sort_by === "popular") {
      console.warn(`${CONFIG.LOG_PREFIX} 人气路径请求失败，尝试降级`, error.message);
      const fallbackPath = buildPageUrl(url, "new", page);
      const fallbackHtml = await httpGet(getFullUrl(fallbackPath), url);
      const $fallback = Widget.html.load(fallbackHtml);
      return parseVideoList($fallback, "排序:最新(人气降级)");
    }
    throw error;
  }
}

/**
 * 搜索视频
 */
async function search(params = {}) {
  const { keyword, page = 1 } = params;
  if (!keyword) throw new Error("请输入搜索关键词");

  const encodedKeyword = encodeURIComponent(keyword);
  let searchUrl;
  if (page === 1) {
    searchUrl = `${CONFIG.BASE_URL}/search/wd/${encodedKeyword}/`;
  } else {
    searchUrl = `${CONFIG.BASE_URL}/search/wd/${encodedKeyword}/page/${page}/`;
  }

  const html = await httpGet(searchUrl);
  const $ = Widget.html.load(html);
  const items = parseVideoList($, `搜索: ${keyword}`);
  return items;
}

/**
 * 加载视频详情，提取播放地址
 */
async function loadDetail(link) {
  const fullLink = normalizeUrl(link);
  const html = await httpGet(fullLink, fullLink);
  const $ = Widget.html.load(html);

  const title = $("h1.page-title").text().trim() || 
                $("title").text().trim() || 
                "无标题";
  const videoUrl = extractVideoUrl($);
  if (!videoUrl) throw new Error("无法找到视频源");

  return {
    title: title,
    videoUrl: videoUrl,
    customHeaders: {
      Referer: fullLink,
      "User-Agent": CONFIG.USER_AGENT
    }
  };
}
