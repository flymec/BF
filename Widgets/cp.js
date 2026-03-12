// == Metadata =================================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday",
  title: "JAVDay",
  description: "获取 JAVDay 推荐",
  author: "flyme",
  site: "https://javday.app",
  version: "1.6.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      id: "search",
      title: "搜索视频",
      description: "搜索JAVDay视频库",
      type: "media_list",
      requiresWebView: false,
      functionName: "search",
      cacheDuration: 3600,
      params: [
        {
          name: "keyword",
          title: "女優/番號/關鍵字搜索…",
          type: "input",
          value: "",
          description: "女優/番號/關鍵字搜索…",
        },
        { name: "page", title: "页码", type: "page", description: "搜索结果页码" }
      ]
    },
    {
      id: "latest",
      title: "最新更新",
      description: "浏览最新更新视频",
      type: "media_list",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/label/new/" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "hot",
      title: "人气系列",
      description: "浏览人气系列视频",
      type: "media_list",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/label/hot/" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "new_release",
      title: "新作上市",
      description: "浏览新作上市视频",
      type: "media_list",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/new-release/" },
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
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/censored/" },
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
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/uncensored/" },
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
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/uncensored-leaked/" },
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
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/sex8/" },
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
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/hongkongdoll/" },
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
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/chinese-av/" },
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
      requiresWebView: false,
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
          value: "https://javday.app/index.php/category/madou/",
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
  USER_AGENT: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
  LOG_PREFIX: "ForwardWidget: JAVDay -",
  TIMEOUT: 10000,
};

// == Utility Functions ========================================================

/**
 * 发送 HTTP GET 请求（封装错误处理和 headers）
 * @param {string} url 请求地址
 * @param {string} referer Referer 头，默认使用 BASE_URL
 * @returns {Promise<string>} HTML 内容
 */
async function httpGet(url, referer = CONFIG.BASE_URL) {
  try {
    const responseText = await apiGetAbsolute(url, {
      headers: {
        "User-Agent": CONFIG.USER_AGENT,
        Referer: referer,
      },
      timeout: CONFIG.TIMEOUT,
    });
    if (!responseText) throw new Error("响应内容为空");
    return responseText;
  } catch (error) {
    console.error(`${CONFIG.LOG_PREFIX} 请求失败: ${url}`, error.message);
    throw error;
  }
}

/**
 * 将相对 URL 转换为绝对 URL
 * @param {string} url 原始 URL
 * @returns {string} 绝对 URL
 */
function normalizeUrl(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("//")) return `https:${url}`;
  const base = CONFIG.BASE_URL.replace(/\/+$/, "");
  const path = url.startsWith("/") ? url : `/${url}`;
  return (base + path).replace(/([^:]\/)\/+/g, "$1");
}

/**
 * 解析 HTML 字符串为 DOM 文档
 * @param {string} html HTML 字符串
 * @returns {Document} DOM 文档对象
 */
function parseHTML(html) {
  const parser = new DOMParser();
  return parser.parseFromString(html, 'text/html');
}

/**
 * 从元素的 style 属性中提取背景图片 URL
 * @param {Element} element 包含封面样式的 DOM 元素
 * @returns {string} 图片 URL
 */
function getCoverImgSrc(element) {
  const coverEl = element.querySelector(".videoBox-cover");
  if (!coverEl) return "";
  const styleAttr = coverEl.getAttribute("style");
  if (!styleAttr) return "";
  const match = styleAttr.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
  if (!match || !match[1]) return "";
  return normalizeUrl(match[1]);
}

/**
 * 解析视频列表页的 DOM，提取视频项
 * @param {Document} doc DOM 文档
 * @param {string} context 描述信息（用于返回值）
 * @returns {Array} 视频项数组
 */
function parseVideoList(doc, context = "来自 JAVDay") {
  const items = [];
  const videoBoxes = doc.querySelectorAll(".video-wrapper .videoBox");
  videoBoxes.forEach((element, index) => {
    const link = element.getAttribute("href");
    const titleEl = element.querySelector(".videoBox-info .title");
    const title = titleEl ? titleEl.textContent.trim() : "";
    const imgSrc = getCoverImgSrc(element);

    if (!link || !title) return;

    items.push({
      id: `${index}|${link}`,
      type: "url",
      title: title,
      imgSrc: imgSrc,
      backdropPath: imgSrc,
      link: normalizeUrl(link),
      description: context,
      mediaType: "movie",
    });
  });
  return items;
}

/**
 * 从 DPlayer 脚本内容中提取视频 URL
 * @param {string} scriptContent 脚本内容
 * @returns {string|null} 视频 URL
 */
function extractVideoUrlFromDPlayerScript(scriptContent) {
  if (!scriptContent) return null;
  const regexes = [
    /video\s*:\s*{\s*[^}]*url\s*:\s*['"]([^'"]+)['"]/,
    /url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/,
  ];
  for (const regex of regexes) {
    const match = scriptContent.match(regex);
    if (match && match[1]) return match[1];
  }
  return null;
}

/**
 * 从详情页 DOM 中提取视频源（综合多种方式）
 * @param {Document} doc DOM 文档
 * @returns {string|null} 视频 URL
 */
function extractVideoUrl(doc) {
  // 1. 查找 DPlayer 脚本
  const scripts = doc.querySelectorAll("script");
  for (const script of scripts) {
    const content = script.textContent;
    if (content && content.includes("new DPlayer")) {
      const url = extractVideoUrlFromDPlayerScript(content);
      if (url) return url;
    }
  }

  // 2. 常见 video 标签
  const videoSrc = doc.querySelector("video#J_prismPlayer")?.getAttribute("src") ||
                   doc.querySelector("source[src*='.m3u8']")?.getAttribute("src") ||
                   doc.querySelector("video source")?.getAttribute("src");
  if (videoSrc) return videoSrc;

  // 3. 脚本中内联的 m3u8 地址
  for (const script of scripts) {
    const content = script.textContent;
    if (content && content.includes(".m3u8")) {
      const match = content.match(/['"](https?:\/\/[^'"]+\.m3u8[^'"]*)['"]/);
      if (match && match[1]) return match[1];
    }
  }

  // 4. iframe 嵌入
  const iframeSrc = doc.querySelector("iframe[src*='player']")?.getAttribute("src");
  if (iframeSrc) return normalizeUrl(iframeSrc);

  return null;
}

/**
 * 从 URL 中提取分类/标签 ID（用于构建人气排序路径）
 * @param {string} url 基础 URL
 * @returns {string} ID
 */
function extractCategoryId(url) {
  const parts = url.split("/").filter(p => p && p !== "index.php");
  return parts.pop() || "unknown";
}

/**
 * 构建分页 URL（支持排序）
 * @param {string} baseUrl 基础 URL（如分类页、标签页）
 * @param {string} sortBy 排序方式 new / popular
 * @param {number} page 页码
 * @returns {string} 完整分页 URL
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
 * @param {string} path 路径
 * @returns {string} 完整 URL
 */
function getFullUrl(path) {
  if (path.startsWith("http")) return path;
  return `${CONFIG.BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

// == Core Functions ===========================================================

/**
 * 加载通用列表页（分类/标签/厂商）
 * @param {Object} params 参数 { url, sort_by, page }
 * @returns {Promise<Array>} 视频项数组
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
    const doc = parseHTML(html);
    const items = parseVideoList(doc, `排序:${sort_by === "new" ? "最新" : "人气"}`);

    if (items.length === 0 && sort_by === "popular") {
      console.warn(`${CONFIG.LOG_PREFIX} 人气路径无数据，降级到普通路径`);
      const fallbackPath = buildPageUrl(url, "new", page);
      const fallbackHtml = await httpGet(getFullUrl(fallbackPath), url);
      const fallbackDoc = parseHTML(fallbackHtml);
      return parseVideoList(fallbackDoc, "排序:最新(人气降级)");
    }

    return items;
  } catch (error) {
    if (sort_by === "popular") {
      console.warn(`${CONFIG.LOG_PREFIX} 人气路径请求失败，尝试降级`, error.message);
      const fallbackPath = buildPageUrl(url, "new", page);
      const fallbackHtml = await httpGet(getFullUrl(fallbackPath), url);
      const fallbackDoc = parseHTML(fallbackHtml);
      return parseVideoList(fallbackDoc, "排序:最新(人气降级)");
    }
    throw error;
  }
}

/**
 * 搜索视频
 * @param {Object} params 参数 { keyword, page }
 * @returns {Promise<Array>} 视频项数组
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
  const doc = parseHTML(html);
  const items = parseVideoList(doc, `搜索: ${keyword}`);
  return items;
}

/**
 * 加载视频详情，提取播放地址
 * @param {string} link 视频详情页 URL
 * @returns {Promise<Object>} 视频源对象
 */
async function loadDetail(link) {
  const fullLink = normalizeUrl(link);
  const html = await httpGet(fullLink, fullLink);
  const doc = parseHTML(html);

  const title = doc.querySelector("h1.page-title")?.textContent?.trim() || 
                doc.querySelector("title")?.textContent?.trim() || 
                "无标题";
  const videoUrl = extractVideoUrl(doc);
  if (!videoUrl) throw new Error("无法找到视频源");

  return {
    title: title,
    videoUrl: videoUrl,
    customHeaders: {
      Referer: fullLink,
      "User-Agent": CONFIG.USER_AGENT,
    },
  };
}
