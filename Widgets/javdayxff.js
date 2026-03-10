// == Metadata =================================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday",
  title: "JAVDay",
  description: "获取 JAVDay 推荐",
  author: "Ti",
  site: "https://javday.app",
  version: "1.4.0",
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
  USER_AGENT: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  LOG_PREFIX: "JAVDay Widget:",
  TIMEOUT: 20000,
};

// == Utility Functions ========================================================

/**
 * 发送 HTTP GET 请求
 */
async function httpGet(url, referer = CONFIG.BASE_URL) {
  try {
    const response = await Widget.http.get(url, {
      headers: {
        "User-Agent": CONFIG.USER_AGENT,
        "Referer": referer,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
        "Connection": "keep-alive"
      },
      timeout: CONFIG.TIMEOUT,
    });
    
    if (!response?.data) {
      throw new Error("响应内容为空");
    }
    return response.data;
  } catch (error) {
    console.error(`${CONFIG.LOG_PREFIX} 请求失败: ${url}`, error.message);
    throw error;
  }
}

/**
 * 标准化 URL
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
 * 获取封面图片 URL
 */
function getCoverImgSrc($item) {
  const styleAttr = $item.find(".videoBox-cover").attr("style");
  if (!styleAttr) return "";
  
  const match = styleAttr.match(/url\(['"]?([^'")]+)['"]?\)/);
  if (!match || !match[1]) return "";
  
  return normalizeUrl(match[1]);
}

/**
 * 解析视频列表
 */
function parseVideoList($, context = "来自 JAVDay") {
  const items = [];
  
  $(".video-wrapper .videoBox, .col-style .videoBox").each((index, element) => {
    const $item = $(element);
    const link = $item.attr("href");
    const title = $item.find(".videoBox-info .title").text().trim();
    const imgSrc = getCoverImgSrc($item);
    
    // 获取观看次数
    const viewsText = $item.find(".views .number").text().trim();
    const views = viewsText ? ` 👁️${viewsText}` : "";

    if (!link || !title) return;

    items.push({
      id: `${index}|${link}`,
      type: "url",
      title: title,
      imgSrc: imgSrc,
      backdropPath: imgSrc,
      link: normalizeUrl(link),
      description: `${context}${views}`,
      mediaType: "movie",
    });
  });
  
  return items;
}

/**
 * 从页面中提取视频播放地址 - 增强版
 */
function extractVideoUrl($) {
  console.log(`${CONFIG.LOG_PREFIX} 开始提取视频地址`);
  
  const html = $.html();
  const results = [];
  
  // 方法1: 查找所有 script 标签中的视频配置
  const scripts = $("script").map((i, el) => $(el).html()).get();
  
  for (const script of scripts) {
    if (!script) continue;
    
    // 匹配各种格式的视频URL
    const patterns = [
      // DPlayer 配置
      /url:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/,
      /url:\s*['"]([^'"]+\.mp4[^'"]*)['"]/,
      /video:\s*{\s*url:\s*['"]([^'"]+)['"]/,
      /"url":"([^"]+\.m3u8[^"]*)"/,
      /'url':'([^']+\.m3u8[^']*)'/,
      /video_url["']?\s*[:=]\s*["']([^"']+)["']/,
      /playUrl["']?\s*[:=]\s*["']([^"']+)["']/,
      /src["']?\s*[:=]\s*["']([^"']+\.m3u8[^"']*)["']/,
      /src["']?\s*[:=]\s*["']([^"']+\.mp4[^"']*)["']/
    ];
    
    for (const pattern of patterns) {
      const matches = script.match(new RegExp(pattern, 'g'));
      if (matches) {
        for (const match of matches) {
          const urlMatch = match.match(/(?:url|src)["']?\s*[:=]\s*["']([^"']+)["']/);
          if (urlMatch && urlMatch[1]) {
            const videoUrl = urlMatch[1].replace(/\\/g, '');
            if (videoUrl.includes('.m3u8') || videoUrl.includes('.mp4')) {
              console.log(`${CONFIG.LOG_PREFIX} 从 script 提取到视频地址: ${videoUrl.substring(0, 100)}`);
              results.push(videoUrl);
            }
          }
        }
      }
    }
  }
  
  // 方法2: 查找 video 标签
  const videoSelectors = [
    "video source[src*='.m3u8']",
    "video source[src*='.mp4']",
    "video[src*='.m3u8']",
    "video[src*='.mp4']",
    "source[type='application/x-mpegURL']",
    "source[type='application/vnd.apple.mpegurl']"
  ];
  
  for (const selector of videoSelectors) {
    const src = $(selector).attr("src");
    if (src) {
      console.log(`${CONFIG.LOG_PREFIX} 从 ${selector} 提取到地址`);
      results.push(src);
    }
  }
  
  // 方法3: 直接使用正则从 HTML 提取所有视频链接
  const urlPatterns = [
    /https?:\/\/[^'"\s]+\.m3u8[^'"\s]*/g,
    /https?:\/\/[^'"\s]+\.mp4[^'"\s]*/g,
    /https?:\/\/[^'"\s]+\/play\/[^'"\s]*/g,
    /https?:\/\/[^'"\s]+\/video\/[^'"\s]*/g
  ];
  
  for (const pattern of urlPatterns) {
    const matches = html.match(pattern);
    if (matches) {
      for (const match of matches) {
        console.log(`${CONFIG.LOG_PREFIX} 从 HTML 提取到链接: ${match.substring(0, 100)}`);
        results.push(match);
      }
    }
  }
  
  // 方法4: 查找 iframe 播放器
  const iframeSrc = $("iframe#playiframe").attr("src") || 
                    $("iframe[src*='player']").attr("src") ||
                    $("iframe[src*='vod']").attr("src") ||
                    $("iframe").attr("src");
                    
  if (iframeSrc) {
    console.log(`${CONFIG.LOG_PREFIX} 找到 iframe: ${iframeSrc}`);
    // 如果是相对路径，转换为绝对路径
    const fullIframeSrc = normalizeUrl(iframeSrc);
    results.push(fullIframeSrc);
  }
  
  // 去重并过滤
  const uniqueResults = [...new Set(results)].filter(url => {
    return url && (url.includes('.m3u8') || url.includes('.mp4') || url.includes('player') || url.includes('play'));
  });
  
  console.log(`${CONFIG.LOG_PREFIX} 找到 ${uniqueResults.length} 个视频链接`);
  
  // 优先返回 m3u8 链接
  const m3u8Url = uniqueResults.find(url => url.includes('.m3u8'));
  if (m3u8Url) return m3u8Url;
  
  // 其次返回 mp4 链接
  const mp4Url = uniqueResults.find(url => url.includes('.mp4'));
  if (mp4Url) return mp4Url;
  
  // 最后返回其他链接
  if (uniqueResults.length > 0) {
    return uniqueResults[0];
  }
  
  return null;
}

/**
 * 提取分类ID
 */
function extractCategoryId(url) {
  const match = url.match(/\/([^/]+?)(?:\/page\/\d+)?\/?$/);
  if (match && match[1]) {
    return match[1].replace(/\/+$/, '');
  }
  
  const parts = url.split('/').filter(p => p && p !== "index.php");
  return parts[parts.length - 1] || 'unknown';
}

/**
 * 构建分页URL
 */
function buildPageUrl(baseUrl, sortBy, page) {
  // 移除尾部斜杠和页码部分
  const cleanBase = baseUrl.replace(/\/+$/, '').replace(/\/page\/\d+$/, '');
  const id = extractCategoryId(cleanBase);
  
  // 判断是否是标签页
  const isLabel = cleanBase.includes('/label/');
  
  let path;
  if (sortBy === "popular") {
    path = `/fiter/by/hits/id/${id}/`;
  } else {
    path = isLabel ? `/label/${id}/` : `/category/${id}/`;
  }
  
  // 处理 index.php 的情况
  if (cleanBase.includes('index.php')) {
    path = `/index.php${path}`;
  }
  
  // 添加页码
  if (page > 1) {
    path = path.replace(/\/$/, '') + `/page/${page}/`;
  }
  
  return path;
}

/**
 * 获取完整URL
 */
function getFullUrl(path) {
  if (path.startsWith("http")) return path;
  return `${CONFIG.BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

// == Core Functions ===========================================================

/**
 * 加载列表页
 */
async function loadPage(params = {}) {
  const { url, sort_by = "new", page = 1 } = params;
  if (!url) throw new Error("缺少 URL 参数");

  // 构建目标 URL
  const pagePath = buildPageUrl(url, sort_by, page);
  const targetUrl = getFullUrl(pagePath);
  
  console.log(`${CONFIG.LOG_PREFIX} 加载列表: ${targetUrl}`);

  try {
    const html = await httpGet(targetUrl, url);
    const $ = Widget.html.load(html);
    let items = parseVideoList($, `排序:${sort_by === "new" ? "最新" : "人气"}`);
    
    // 如果人气排序无数据，尝试降级
    if (items.length === 0 && sort_by === "popular") {
      console.log(`${CONFIG.LOG_PREFIX} 人气路径无数据，降级到最新排序`);
      const fallbackPath = buildPageUrl(url, "new", page);
      const fallbackHtml = await httpGet(getFullUrl(fallbackPath), url);
      const $fallback = Widget.html.load(fallbackHtml);
      items = parseVideoList($fallback, "排序:最新(人气降级)");
    }
    
    return items;
  } catch (error) {
    if (sort_by === "popular") {
      console.log(`${CONFIG.LOG_PREFIX} 人气路径失败，尝试降级`, error.message);
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
  
  // 使用正确的搜索路径格式
  let searchUrl;
  if (page === 1) {
    searchUrl = `${CONFIG.BASE_URL}/search/?wd=${encodedKeyword}`;
  } else {
    searchUrl = `${CONFIG.BASE_URL}/search/page/${page}/wd/${encodedKeyword}/`;
  }
  
  console.log(`${CONFIG.LOG_PREFIX} 搜索: ${searchUrl}`);

  const html = await httpGet(searchUrl);
  const $ = Widget.html.load(html);
  const items = parseVideoList($, `搜索: ${keyword}`);
  
  return items;
}

/**
 * 加载视频详情 - 最终修复版
 */
async function loadDetail(link) {
  const fullLink = normalizeUrl(link);
  console.log(`${CONFIG.LOG_PREFIX} 加载详情: ${fullLink}`);
  
  try {
    const html = await httpGet(fullLink, fullLink);
    const $ = Widget.html.load(html);
    
    // 提取视频地址
    let videoUrl = extractVideoUrl($);
    
    if (!videoUrl) {
      // 如果没找到，尝试从页面中查找任何可能的视频链接
      const htmlContent = $.html();
      const possibleUrls = htmlContent.match(/https?:\/\/[^'"\s]+\.(?:m3u8|mp4|flv|mkv|ts)[^'"\s]*/g);
      if (possibleUrls && possibleUrls.length > 0) {
        videoUrl = possibleUrls[0];
        console.log(`${CONFIG.LOG_PREFIX} 使用正则提取的视频地址: ${videoUrl.substring(0, 100)}`);
      }
    }
    
    if (!videoUrl) {
      // 尝试获取页面中的第一个 iframe
      const iframeSrc = $("iframe").attr("src");
      if (iframeSrc) {
        videoUrl = normalizeUrl(iframeSrc);
        console.log(`${CONFIG.LOG_PREFIX} 使用 iframe 地址: ${videoUrl}`);
      }
    }
    
    if (!videoUrl) {
      throw new Error("无法找到视频源");
    }
    
    // 标准化视频URL
    videoUrl = normalizeUrl(videoUrl);
    
    console.log(`${CONFIG.LOG_PREFIX} 最终视频地址: ${videoUrl.substring(0, 200)}`);
    
    // 判断视频类型
    const isM3u8 = videoUrl.includes('.m3u8');
    const isMp4 = videoUrl.includes('.mp4');
    const isIframe = videoUrl.includes('player') || videoUrl.includes('play');
    
    // 构建返回对象
    const result = {
      id: fullLink,
      type: isM3u8 ? "hls" : (isMp4 ? "url" : "url"),
      videoUrl: videoUrl,
      customHeaders: {
        "Referer": fullLink,
        "User-Agent": CONFIG.USER_AGENT,
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Range": "bytes=0-"
      },
    };
    
    // 如果是 iframe 地址，添加额外的处理标志
    if (isIframe) {
      result.type = "url";
      result.embed = true;
    }
    
    return result;
    
  } catch (error) {
    console.error(`${CONFIG.LOG_PREFIX} 加载详情失败:`, error);
    throw error;
  }
}

// 导出函数
module.exports = {
  loadPage,
  search,
  loadDetail
};
