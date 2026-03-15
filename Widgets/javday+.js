// == Metadata =================================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday",
  title: "JAVDay",
  description: "javday完美版",
  author: "flyme",
  site: "https://javday.app",
  version: "1.6.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      title: "搜索视频",
      description: "搜索JAVDay视频库",
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
        { name: "page", title: "页码", type: "page", description: "搜索结果页码" },
      ],
    },
    {
      title: "最新更新",
      description: "浏览最新更新视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/label/new/" },
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      title: "人气系列",
      description: "浏览人气系列视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/label/hot/" },
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      title: "新作上市",
      description: "浏览新作上市视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/new-release/" },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" },
          ],
          value: "new",
        },
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      title: "有码视频",
      description: "浏览有码分类视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/censored/" },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" },
          ],
          value: "popular",
        },
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      title: "无码视频",
      description: "浏览无码分类视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/uncensored/" },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" },
          ],
          value: "new",
        },
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      title: "无码流出",
      description: "浏览无码流出视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/uncensored-leaked/" },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" },
          ],
          value: "new",
        },
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      title: "杏吧视频",
      description: "浏览杏吧分类视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/sex8/" },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" },
          ],
          value: "popular",
        },
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      title: "玩偶姐姐",
      description: "浏览玩偶姐姐视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/hongkongdoll/" },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" },
          ],
          value: "popular",
        },
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      title: "国产 AV",
      description: "浏览国产 AV视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/chinese-av/" },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" },
          ],
          value: "popular",
        },
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      title: "国产厂商",
      description: "按厂商标签浏览国产厂商视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "厂商选择",
          type: "enumeration",
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
            { title: "Psychoporn TW", value: "https://javday.app/index.php/category/psychoporn-tw/" },
          ],
          value: "https://javday.app/index.php/category/madou/",
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" },
          ],
          value: "new",
        },
        { name: "page", title: "页码", type: "page" },
      ],
    },
  ],
};

// == Constants ================================================================
const CONFIG = {
  BASE_URL: "https://javday.app",
  USER_AGENT:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
  LOG_PREFIX: "ForwardWidget: JAVDay -",
  TIMEOUT: 10000,
  MAX_RETRIES: 2,
};

// == Utility Functions ========================================================

/**
 * 带重试机制的 HTTP GET 请求
 * @param {string} url     - 目标地址
 * @param {string} referer - Referer 请求头
 * @param {number} retries - 剩余重试次数（内部递归使用）
 */
async function httpGet(url, referer = CONFIG.BASE_URL, retries = CONFIG.MAX_RETRIES) {
  try {
    const response = await Widget.http.get(url, {
      headers: {
        "User-Agent": CONFIG.USER_AGENT,
        Referer: referer,
      },
      timeout: CONFIG.TIMEOUT,
    });
    if (!response?.data) throw new Error("响应内容为空");
    return response.data;
  } catch (error) {
    if (retries > 0) {
      console.warn(`${CONFIG.LOG_PREFIX} 请求失败，剩余重试 ${retries} 次: ${url}`);
      await sleep(500);
      return httpGet(url, referer, retries - 1);
    }
    console.error(`${CONFIG.LOG_PREFIX} 请求最终失败: ${url}`, error.message);
    throw error;
  }
}

/**
 * 延时工具
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 规范化 URL：处理相对路径、协议相对路径、去除多余斜杠
 */
function normalizeUrl(url) {
  if (!url) return "";
  url = url.trim();
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("//")) return `https:${url}`;
  const base = CONFIG.BASE_URL.replace(/\/+$/, "");
  const path = url.startsWith("/") ? url : `/${url}`;
  return (base + path).replace(/([^:]\/)\/+/g, "$1");
}

/**
 * 从视频卡片 DOM 元素提取封面图地址
 */
function getCoverImgSrc($item) {
  const styleAttr = $item.find(".videoBox-cover").attr("style");
  if (!styleAttr) return "";
  const match = styleAttr.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
  if (!match || !match[1]) return "";
  return normalizeUrl(match[1]);
}

/**
 * 解析页面视频列表，返回标准化条目数组
 * @param {object} $       - cheerio 实例
 * @param {string} context - 来源描述（显示在 description 字段）
 */
function parseVideoList($, context = "来自 JAVDay") {
  const items = [];
  $(".video-wrapper .videoBox").each((index, element) => {
    const $item = $(element);
    const link = $item.attr("href");
    const title = $item.find(".videoBox-info .title").text().trim();
    const imgSrc = getCoverImgSrc($item);

    if (!link || !title) return;

    const fullLink = normalizeUrl(link);
    items.push({
      // 使用完整 URL 作为唯一 id，避免跨页 index 重复
      id: fullLink,
      type: "url",
      title,
      imgSrc,
      backdropPath: imgSrc,
      link: fullLink,
      description: context,
      mediaType: "movie",
    });
  });
  return items;
}

/**
 * 从 URL 中提取末尾有效路径段作为分类 ID
 * 跳过纯数字段（页码残留）和空段，避免取到错误值
 */
function extractCategoryId(url) {
  const cleanUrl = url.split("?")[0].split("#")[0];
  const parts = cleanUrl
    .split("/")
    .filter((p) => p && p !== "index.php" && !/^\d+$/.test(p));
  const id = parts.pop();
  if (!id) throw new Error(`无法从 URL 提取分类 ID: ${url}`);
  return id;
}

/**
 * 根据 baseUrl、排序方式、页码构建目标路径
 *
 * 修复说明（对比旧版）：
 * - popular 排序时区分 label 和 category，分别生成对应的 filter 路由
 *   旧版统一用 /filter/by/hits/id/，label 类型会产生 404
 * - 保留 index.php 前缀以兼容厂商子页
 */
function buildPageUrl(baseUrl, sortBy, page) {
  const cleanBase = baseUrl
    .split("?")[0]
    .replace(/\/+$/, "")
    .replace(/\/page\/\d+$/, "");

  const isLabel = cleanBase.includes("/label/");
  const isIndexPhp = cleanBase.includes("index.php");
  const id = extractCategoryId(cleanBase);

  let path;
  if (sortBy === "popular") {
    path = isLabel
      ? `/filter/by/hits/label/${id}/`
      : `/filter/by/hits/id/${id}/`;
  } else {
    path = isLabel ? `/label/${id}/` : `/category/${id}/`;
  }

  if (isIndexPhp) {
    path = `/index.php${path}`;
  }

  if (page > 1) {
    path += `page/${page}/`;
  }

  return path;
}

/**
 * 将路径补全为完整 URL
 */
function getFullUrl(path) {
  if (path.startsWith("http")) return path;
  return `${CONFIG.BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * 判断 URL 是否为直接媒体流（m3u8 / mp4）
 * 基于 pathname 判断，兼容带 query 参数的 CDN 链接
 *
 * 修复说明：旧版用 !url.match(/\.(m3u8|mp4)$/) 判断，
 * 会将 xxx.com/hls/stream?token=abc 等无扩展名 CDN 链接误判为 iframe
 */
function isDirectMediaUrl(url) {
  if (!url) return false;
  try {
    const pathname = new URL(url).pathname.toLowerCase();
    return pathname.endsWith(".m3u8") || pathname.endsWith(".mp4");
  } catch {
    return /\.(m3u8|mp4)(\?|$)/i.test(url);
  }
}

/**
 * 判断 URL 是否为播放器 iframe 嵌入（而非直链）
 * 仅当明确含 player/embed/iframe 关键词时才视为 iframe
 *
 * 修复说明：旧版用 !url.match(/\.(m3u8|mp4)$/) 作为 iframe 判断条件，
 * 过于宽松，会把大量不含扩展名的 CDN 直链误判为 iframe
 */
function isIframePlayerUrl(url) {
  if (!url) return false;
  if (isDirectMediaUrl(url)) return false;
  return /player|embed|iframe/i.test(url);
}

/**
 * 核心视频地址提取器
 * 依次尝试：DPlayer 脚本 → video/source 标签 → 内联脚本 → iframe 嵌入
 *
 * 修复说明：
 * - DPlayer 正则加 /s 标志支持多行匹配
 * - 内联脚本提取时优先匹配 pathname 含扩展名的链接，减少误匹配
 * - iframe 选择器拆分为 player/embed/m3u8 三种精确匹配
 */
function extractVideoUrl($) {
  // 1. DPlayer 初始化脚本中的 video.url 字段
  let foundFromDPlayer = null;
  $("script").each((i, el) => {
    if (foundFromDPlayer) return false;
    const content = $(el).html() || "";
    if (!content.includes("new DPlayer")) return;

    const regexes = [
      /video\s*:\s*\{[^}]*?url\s*:\s*['"]([^'"]+)['"]/s,
      /url\s*:\s*['"]([^'"]+\.(?:m3u8|mp4)[^'"]*)['"]/,
    ];
    for (const regex of regexes) {
      const match = content.match(regex);
      if (match?.[1]) {
        foundFromDPlayer = match[1];
        break;
      }
    }
  });
  if (foundFromDPlayer) return foundFromDPlayer;

  // 2. <video> / <source> 标签的 src 属性
  const videoSrc =
    $("video#J_prismPlayer").attr("src") ||
    $("source[src*='.m3u8'], source[src*='.mp4']").attr("src") ||
    $("video source").attr("src") ||
    $("video").attr("src");
  if (videoSrc) return videoSrc;

  // 3. 内联 <script> 中的完整 http(s) 媒体链接（pathname 含扩展名）
  let foundFromScript = null;
  $("script").each((i, el) => {
    if (foundFromScript) return false;
    const content = $(el).html() || "";
    if (!content.includes(".m3u8") && !content.includes(".mp4")) return;

    const match = content.match(/['"]((https?:)?\/\/[^'"]+\.(?:m3u8|mp4)[^'"]*)['"]/i);
    if (match?.[1]) {
      foundFromScript = match[1].startsWith("//") ? `https:${match[1]}` : match[1];
    }
  });
  if (foundFromScript) return foundFromScript;

  // 4. iframe 嵌入播放器（精确匹配，避免误抓无关 iframe）
  const iframeSrc =
    $("iframe[src*='player']").attr("src") ||
    $("iframe[src*='embed']").attr("src") ||
    $("iframe[src*='m3u8']").attr("src");
  if (iframeSrc) return normalizeUrl(iframeSrc);

  return null;
}

// == Internal Helpers =========================================================

/**
 * 人气排序请求失败或返回空列表时，降级为最新排序
 */
async function loadFallbackToNew(url, page) {
  console.warn(`${CONFIG.LOG_PREFIX} 人气排序降级为最新排序，url=${url} page=${page}`);
  const fallbackPath = buildPageUrl(url, "new", page);
  const html = await httpGet(getFullUrl(fallbackPath), url);
  const $ = Widget.html.load(html);
  return parseVideoList($, "排序:最新(人气降级)");
}

/**
 * 构建 WebView 回退结果对象
 */
function buildWebViewResult(referer, videoUrl) {
  return {
    id: referer,
    type: "webview",
    videoUrl,
    customHeaders: {
      Referer: referer,
      "User-Agent": CONFIG.USER_AGENT,
    },
  };
}

// == Core Functions ===========================================================

/**
 * 加载分类 / 标签页视频列表
 */
async function loadPage(params = {}) {
  const { url, sort_by = "new", page = 1 } = params;
  if (!url) throw new Error("缺少 URL 参数");

  const path = buildPageUrl(url, sort_by, page);
  const targetUrl = getFullUrl(path);

  let html;
  try {
    html = await httpGet(targetUrl, url);
  } catch (error) {
    if (sort_by === "popular") {
      return loadFallbackToNew(url, page);
    }
    throw error;
  }

  const $ = Widget.html.load(html);
  const items = parseVideoList($, `排序:${sort_by === "new" ? "最新" : "人气"}`);

  if (items.length === 0 && sort_by === "popular") {
    return loadFallbackToNew(url, page);
  }

  return items;
}

/**
 * 关键词搜索视频
 */
async function search(params = {}) {
  const { keyword, page = 1 } = params;
  if (!keyword?.trim()) throw new Error("请输入搜索关键词");

  const trimmed = keyword.trim();
  const encodedKeyword = encodeURIComponent(trimmed);
  const searchUrl =
    page === 1
      ? `${CONFIG.BASE_URL}/search/wd/${encodedKeyword}/`
      : `${CONFIG.BASE_URL}/search/wd/${encodedKeyword}/page/${page}/`;

  const html = await httpGet(searchUrl);
  const $ = Widget.html.load(html);
  const items = parseVideoList($, `搜索: ${trimmed}`);

  if (items.length === 0) {
    console.warn(`${CONFIG.LOG_PREFIX} 搜索无结果: ${trimmed}`);
  }

  return items;
}

/**
 * 加载视频详情页并提取播放地址
 *
 * 修复说明（对比旧版）：
 * - isIframe 改用精确的 isIframePlayerUrl()，不再误判 CDN 直链为 iframe
 * - iframe 解析结果用 isDirectMediaUrl() 验证
 * - 二级 iframe 仍非直链时明确回退 WebView
 * - buildWebViewResult 统一封装，消除重复代码
 */
async function loadDetail(link) {
  const fullLink = normalizeUrl(link);
  if (!fullLink) throw new Error("无效的视频链接");

  const html = await httpGet(fullLink, fullLink);
  const $ = Widget.html.load(html);

  let videoUrl = extractVideoUrl($);
  if (!videoUrl) throw new Error("无法在页面中找到视频源，建议使用 WebView 模式播放");

  videoUrl = normalizeUrl(videoUrl);

  if (isIframePlayerUrl(videoUrl)) {
    try {
      const iframeHtml = await httpGet(videoUrl, fullLink);
      const $iframe = Widget.html.load(iframeHtml);
      const realUrl = extractVideoUrl($iframe);

      if (realUrl && isDirectMediaUrl(realUrl)) {
        videoUrl = normalizeUrl(realUrl);
      } else if (realUrl) {
        console.warn(`${CONFIG.LOG_PREFIX} 二级 iframe 仍非直链，回退 WebView: ${realUrl}`);
        return buildWebViewResult(fullLink, normalizeUrl(realUrl));
      } else {
        console.warn(`${CONFIG.LOG_PREFIX} iframe 内未找到视频地址，回退 WebView`);
        return buildWebViewResult(fullLink, videoUrl);
      }
    } catch (err) {
      console.warn(`${CONFIG.LOG_PREFIX} iframe 解析异常，回退 WebView:`, err.message);
      return buildWebViewResult(fullLink, videoUrl);
    }
  }

  return {
    id: fullLink,
    type: "url",
    videoUrl,
    customHeaders: {
      Referer: fullLink,
      "User-Agent": CONFIG.USER_AGENT,
    },
  };
}
