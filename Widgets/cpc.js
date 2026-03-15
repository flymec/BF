var WidgetMetadata = {
  id: "ti.bemarkt.javday",
  title: "JAVDay完善版",
  description: "JAVDay完善版",
  author: "flyme",
  site: "https://javday.app",
  version: "1.3.1",
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
          description: "女優/番號/關鍵字搜索…"
        },
        { name: "page", title: "页码", type: "page", description: "搜索结果页码" }
      ]
    },
    {
      title: "最新更新",
      description: "浏览最新更新视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/label/new/" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "人气系列",
      description: "浏览人气系列视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/label/hot/" },
        { name: "page", title: "页码", type: "page" }
      ]
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
      title: "有码视频",
      description: "浏览有码分类视频",
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
      title: "无码视频",
      description: "浏览无码分类视频",
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
      title: "无码流出",
      description: "浏览无码流出视频",
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
      title: "杏吧视频",
      description: "浏览杏吧分类视频",
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
      title: "玩偶姐姐",
      description: "浏览玩偶姐姐视频",
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
      title: "国产 AV",
      description: "浏览国产 AV视频",
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
      title: "国产厂商",
      description: "按厂商标签浏览国产厂商视频",
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

// == Utility Functions ========================================================
const CONFIG = {
  BASE_URL: "https://javday.app",
  USER_AGENT: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
  LOG_PREFIX: "ForwardWidget: JAVDay -",
  TIMEOUT: 10000,
};

async function httpGet(url, referer = CONFIG.BASE_URL) {
  try {
    const response = await Widget.http.get(url, {
      headers: {
        "User-Agent": CONFIG.USER_AGENT,
        Referer: referer,
      },
      timeout: CONFIG.TIMEOUT,
    });
    if (response.status && (response.status < 200 || response.status >= 300)) {
      throw new Error(`HTTP ${response.status}`);
    }
    if (!response?.data) throw new Error("响应内容为空");
    return response.data;
  } catch (error) {
    console.error(`${CONFIG.LOG_PREFIX} 请求失败: ${url}`, error.message);
    throw error;
  }
}

function normalizeUrl(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("//")) return `https:${url}`;
  const base = CONFIG.BASE_URL.replace(/\/+$/, "");
  const path = url.startsWith("/") ? url : `/${url}`;
  return (base + path).replace(/([^:]\/)\/+/g, "$1");
}

function getCoverImgSrc($item) {
  const styleAttr = $item.find(".videoBox-cover").attr("style");
  if (!styleAttr) return "";
  const match = styleAttr.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
  if (!match || !match[1]) return "";
  return normalizeUrl(match[1]);
}

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
      mediaType: "movie",
    });
  });
  return items;
}

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

function extractVideoUrl($) {
  let videoUrl = null;

  const dplayerScript = Array.from($("script")).find(el => {
    const content = $(el).html();
    return content && content.includes("new DPlayer");
  });
  if (dplayerScript) {
    videoUrl = extractVideoUrlFromDPlayerScript($(dplayerScript).html());
    if (videoUrl) return normalizeUrl(videoUrl);
  }

  videoUrl = $("video#J_prismPlayer").attr("src") ||
             $("source[src*='.m3u8']").attr("src") ||
             $("video source").attr("src");
  if (videoUrl) return normalizeUrl(videoUrl);

  const scriptContents = Array.from($("script")).map(el => $(el).html());
  for (const content of scriptContents) {
    if (content && content.includes(".m3u8")) {
      const match = content.match(/['"](https?:\/\/[^'"]+\.m3u8[^'"]*)['"]/);
      if (match && match[1]) return normalizeUrl(match[1]);
    }
  }

  const iframeSrc = $("iframe[src*='player']").attr("src");
  if (iframeSrc) return normalizeUrl(iframeSrc);

  return null;
}

function extractCategoryId(url) {
  const parts = url.split("/").filter(p => p && p !== "index.php");
  return parts.pop() || "unknown";
}

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

function getFullUrl(path) {
  if (path.startsWith("http")) return path;
  return `${CONFIG.BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

// == Core Functions ===========================================================

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

async function loadDetail(link) {
  const fullLink = normalizeUrl(link);
  const html = await httpGet(fullLink, fullLink);
  const $ = Widget.html.load(html);

  const videoUrl = extractVideoUrl($);
  if (!videoUrl) throw new Error("无法找到视频源");

  return {
    id: fullLink,
    type: "url",
    videoUrl: videoUrl,
    customHeaders: {
      Referer: fullLink,
      "User-Agent": CONFIG.USER_AGENT,
    },
  };
}
