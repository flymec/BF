// == Metadata =================================================================
var WidgetMetadata = {
  id: "ti.bemarkt.missav123",
  title: "MissAV123",
  description: "获取 MissAV123 热门、最新、无码视频",
  author: "改编自 flyme",
  site: "https://missav123.to",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      title: "搜索视频",
      description: "搜索 MissAV123 视频库",
      requiresWebView: false,
      functionName: "search",
      cacheDuration: 3600,
      params: [
        { name: "keyword", title: "番号 / 女优 / 关键词", type: "input", value: "", description: "输入要搜索的内容" },
        { name: "page", title: "页码", type: "page", description: "搜索结果页码" }
      ]
    },
    {
      title: "热门视频",
      description: "当前最热门的视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "/cn/hot" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "最新视频",
      description: "最新发布的视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "/cn/new" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "最近更新",
      description: "最近添加的视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "/cn/recent" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "有码视频",
      description: "浏览有码分类，可排序",
      requiresWebView: false,
      functionName: "loadCensored",
      cacheDuration: 1800,
      params: [
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "热门", value: "hot" },
            { title: "发布日期", value: "release_date" },
            { title: "添加日期", value: "added_date" },
            { title: "今日观看", value: "today_views" },
            { title: "每周观看", value: "weekly_views" },
            { title: "每月观看", value: "monthly_views" },
            { title: "最受欢迎", value: "most_viewed" },
            { title: "最喜欢", value: "most_favorited" }
          ],
          value: "release_date"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "无码视频",
      description: "浏览无码分类，可排序",
      requiresWebView: false,
      functionName: "loadUncensored",
      cacheDuration: 1800,
      params: [
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "热门", value: "hot" },
            { title: "发布日期", value: "release_date" },
            { title: "添加日期", value: "added_date" },
            { title: "今日观看", value: "today_views" },
            { title: "每周观看", value: "weekly_views" },
            { title: "每月观看", value: "monthly_views" },
            { title: "最受欢迎", value: "most_viewed" },
            { title: "最喜欢", value: "most_favorited" }
          ],
          value: "release_date"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "无码泄露",
      description: "浏览无码泄露视频，可排序",
      requiresWebView: false,
      functionName: "loadUncensoredLeaked",
      cacheDuration: 1800,
      params: [
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "热门", value: "hot" },
            { title: "发布日期", value: "release_date" },
            { title: "添加日期", value: "added_date" },
            { title: "今日观看", value: "today_views" },
            { title: "每周观看", value: "weekly_views" },
            { title: "每月观看", value: "monthly_views" },
            { title: "最受欢迎", value: "most_viewed" },
            { title: "最喜欢", value: "most_favorited" }
          ],
          value: "release_date"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "VR视频",
      description: "浏览VR分类，可排序",
      requiresWebView: false,
      functionName: "loadVr",
      cacheDuration: 1800,
      params: [
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "热门", value: "hot" },
            { title: "发布日期", value: "release_date" },
            { title: "添加日期", value: "added_date" },
            { title: "今日观看", value: "today_views" },
            { title: "每周观看", value: "weekly_views" },
            { title: "每月观看", value: "monthly_views" },
            { title: "最受欢迎", value: "most_viewed" },
            { title: "最喜欢", value: "most_favorited" }
          ],
          value: "release_date"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "业余系列",
      description: "选择业余系列浏览",
      requiresWebView: false,
      functionName: "loadSeries",
      cacheDuration: 1800,
      params: [
        {
          name: "series", title: "系列", type: "enumeration",
          enumOptions: [
            { title: "SIRO", value: "siro" },
            { title: "LUXU", value: "259luxu" },
            { title: "200GANA", value: "200gana" },
            { title: "PRESTIGE PREMIUM", value: "prestige-premium" },
            { title: "ORECO", value: "230oreco" },
            { title: "S-CUTE", value: "s-cute" },
            { title: "ARA", value: "261ara" },
            { title: "390JAC", value: "390jac" },
            { title: "328HMDN", value: "328hmdn" }
          ],
          value: "siro"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "无码厂商",
      description: "选择无码厂商浏览",
      requiresWebView: false,
      functionName: "loadMaker",
      cacheDuration: 1800,
      params: [
        {
          name: "maker", title: "厂商", type: "enumeration",
          enumOptions: [
            { title: "FC2", value: "fc2" },
            { title: "HEYZO", value: "heyzo" },
            { title: "1pondo", value: "1pondo" },
            { title: "Caribbeancom", value: "caribbeancom" },
            { title: "Caribbeancompr", value: "caribbeancompr" },
            { title: "10musume", value: "10musume" },
            { title: "Pacopacomama", value: "pacopacomama" },
            { title: "C0930", value: "c0930" },
            { title: "H0930", value: "h0930" },
            { title: "H4610", value: "h4610" },
            { title: "Tokyo Hot", value: "tokyo-hot" },
            { title: "XXX AV", value: "xxx-av" },
            { title: "GACHIG", value: "gachig" }
          ],
          value: "fc2"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ]
};

// == Constants ================================================================
const CONFIG = {
  BASE_URL: "https://missav123.to",
  USER_AGENT: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  LOG_PREFIX: "MissAV123:",
  TIMEOUT: 10000,
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
        Referer: referer,
      },
      timeout: CONFIG.TIMEOUT,
    });
    if (!response?.data) throw new Error("响应内容为空");
    return response.data;
  } catch (error) {
    console.error(`${CONFIG.LOG_PREFIX} 请求失败: ${url}`, error.message);
    throw error;
  }
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
  return (base + path).replace(/([^:]\/)\/+/g, "$1");
}

/**
 * 解析视频列表项
 */
function parseVideoList($, context = "") {
  const items = [];
  $(".vid-items .item").each((index, element) => {
    const $item = $(element);

    // 图片
    const $img = $item.find(".img img");
    let imgSrc = $img.attr("src") || $img.attr("data-src") || "";
    imgSrc = normalizeUrl(imgSrc);

    // 链接 (优先使用标题链接)
    const linkEl = $item.find(".info a.title").attr("href") || $item.find(".img a.poster").attr("href");
    if (!linkEl) return;
    const link = normalizeUrl(linkEl);

    // 标题 (番号 + 描述)
    const $title = $item.find(".info a.title");
    const code = $title.find(".code").text().trim();
    const desc = $title.contents().filter((i, el) => el.nodeType === 3).text().trim() || $title.find("span:not(.code)").text().trim();
    const title = code && desc ? `${code} ${desc}` : (code || desc || "无标题");

    // 时长
    const duration = $item.find(".duration").text().trim();

    // 收藏数
    const favText = $item.find(".favorite span").text().trim();
    const favorites = favText ? parseInt(favText, 10) : 0;

    // 上传时间 & 点赞率 (可选，放入描述)
    const metaDivs = $item.find(".info .meta div");
    const uploaded = metaDivs.eq(0).text().trim();
    const like = metaDivs.eq(1).text().trim().replace(/[^0-9%]/g, "");

    const description = `⏱️${duration}  ❤️${favorites}  📅${uploaded}  👍${like}`;

    items.push({
      id: `${index}|${link}`,
      type: "url",
      title: title,
      imgSrc: imgSrc,
      backdropPath: imgSrc,
      link: link,
      description: description || context,
      mediaType: "movie",
    });
  });
  return items;
}

/**
 * 从详情页提取视频播放地址（增强版）
 */
function extractVideoUrl($) {
  // 1. 尝试 video 标签
  let videoUrl = $("video#J_prismPlayer").attr("src") ||
                 $("video source[src*='.m3u8']").attr("src") ||
                 $("video source").attr("src");
  if (videoUrl) return videoUrl;

  // 2. iframe 播放器
  const iframeSrc = $("iframe[src*='player']").attr("src") ||
                    $("iframe[src*='embed']").attr("src");
  if (iframeSrc) return normalizeUrl(iframeSrc);

  // 3. 提取所有 script 内容
  const scripts = $("script").map((i, el) => $(el).html()).get();
  for (const script of scripts) {
    if (!script) continue;
    // 匹配 window.__NUXT__ 中的视频地址
    const nuxtMatch = script.match(/videoUrl["']?\s*:\s*["']([^"']+\.(m3u8|mp4)[^"']*)["']/);
    if (nuxtMatch) return nuxtMatch[1];
    // 匹配 DPlayer / ArtPlayer 配置
    const playerMatch = script.match(/url:\s*['"]([^'"]+\.(m3u8|mp4)[^'"]*)['"]/);
    if (playerMatch) return playerMatch[1];
    // 匹配 hls.js 配置
    const hlsMatch = script.match(/src:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/);
    if (hlsMatch) return hlsMatch[1];
    // 通用正则：http(s)://... 以 m3u8 或 mp4 结尾
    const generalMatch = script.match(/https?:\/\/[^'"\s]+\.(m3u8|mp4)[^'"\s]*/);
    if (generalMatch) return generalMatch[0];
  }

  // 4. 检查元素属性
  const dataAttr = $("[data-video]").attr("data-video") ||
                   $("[data-url]").attr("data-url");
  if (dataAttr) return dataAttr;

  return null;
}

// == Core Functions ===========================================================

/**
 * 通用列表加载 (用于固定 URL，如 /cn/hot, /cn/new, /cn/recent)
 */
async function loadPage(params = {}) {
  const { url, page = 1 } = params;
  if (!url) throw new Error("缺少 URL 参数");

  const pageUrl = page > 1 ? `${url}?page=${page}` : url;
  const fullUrl = normalizeUrl(pageUrl);

  const html = await httpGet(fullUrl);
  const $ = Widget.html.load(html);
  return parseVideoList($, `列表: ${url}`);
}

/**
 * 有码视频
 */
async function loadCensored(params = {}) {
  const { sort_by = "release_date", page = 1 } = params;
  const url = new URL("/cn/censored", CONFIG.BASE_URL);
  url.searchParams.set("sort", sort_by);
  if (page > 1) url.searchParams.set("page", page);
  const html = await httpGet(url.toString());
  const $ = Widget.html.load(html);
  return parseVideoList($, "有码视频");
}

/**
 * 无码视频
 */
async function loadUncensored(params = {}) {
  const { sort_by = "release_date", page = 1 } = params;
  const url = new URL("/cn/uncensored", CONFIG.BASE_URL);
  url.searchParams.set("sort", sort_by);
  if (page > 1) url.searchParams.set("page", page);
  const html = await httpGet(url.toString());
  const $ = Widget.html.load(html);
  return parseVideoList($, "无码视频");
}

/**
 * 无码泄露
 */
async function loadUncensoredLeaked(params = {}) {
  const { sort_by = "release_date", page = 1 } = params;
  const url = new URL("/cn/uncensored-leaked", CONFIG.BASE_URL);
  url.searchParams.set("sort", sort_by);
  if (page > 1) url.searchParams.set("page", page);
  const html = await httpGet(url.toString());
  const $ = Widget.html.load(html);
  return parseVideoList($, "无码泄露");
}

/**
 * VR视频
 */
async function loadVr(params = {}) {
  const { sort_by = "release_date", page = 1 } = params;
  const url = new URL("/cn/vr", CONFIG.BASE_URL);
  url.searchParams.set("sort", sort_by);
  if (page > 1) url.searchParams.set("page", page);
  const html = await httpGet(url.toString());
  const $ = Widget.html.load(html);
  return parseVideoList($, "VR视频");
}

/**
 * 业余系列
 */
async function loadSeries(params = {}) {
  const { series, page = 1 } = params;
  if (!series) throw new Error("请选择系列");
  let url = `${CONFIG.BASE_URL}/cn/tags/${series}`;
  if (page > 1) url += `?page=${page}`;
  const html = await httpGet(url);
  const $ = Widget.html.load(html);
  return parseVideoList($, `系列: ${series}`);
}

/**
 * 无码厂商
 */
async function loadMaker(params = {}) {
  const { maker, page = 1 } = params;
  if (!maker) throw new Error("请选择厂商");
  let url = `${CONFIG.BASE_URL}/cn/makers/${maker}`;
  if (page > 1) url += `?page=${page}`;
  const html = await httpGet(url);
  const $ = Widget.html.load(html);
  return parseVideoList($, `厂商: ${maker}`);
}

/**
 * 搜索
 */
async function search(params = {}) {
  const { keyword, page = 1 } = params;
  if (!keyword) throw new Error("请输入搜索关键词");

  const url = new URL("/cn/search", CONFIG.BASE_URL);
  url.searchParams.set("keyword", keyword);
  if (page > 1) url.searchParams.set("page", page);

  const html = await httpGet(url.toString());
  const $ = Widget.html.load(html);
  return parseVideoList($, `搜索: ${keyword}`);
}

/**
 * 加载视频详情
 */
async function loadDetail(link) {
  const fullLink = normalizeUrl(link);
  const html = await httpGet(fullLink, fullLink);
  const $ = Widget.html.load(html);

  let videoUrl = extractVideoUrl($);

  // 提取 itemid 用于 API 请求
  const itemId = $('d-tag[src="WatchFiles"]').attr('itemid') ||
                 $('[itemid]').attr('itemid');

  // 尝试请求 API (推测的端点，需根据实际网络请求调整)
  if (!videoUrl && itemId) {
    const apiEndpoints = [
      `/ajax/video/${itemId}`,
      `/api/video/${itemId}`,
      `/cn/ajax/video/${itemId}`,
      `/hls/${itemId}/master.m3u8`,
    ];
    for (const endpoint of apiEndpoints) {
      try {
        const apiUrl = normalizeUrl(endpoint);
        const response = await httpGet(apiUrl, fullLink);
        // 尝试解析 JSON
        try {
          const data = JSON.parse(response);
          videoUrl = data.url || data.videoUrl || data.data?.url || data.file;
          if (videoUrl) break;
        } catch {
          // 如果返回的是纯文本 URL 或 m3u8 内容
          if (response.startsWith('http') && /\.(m3u8|mp4)/i.test(response)) {
            videoUrl = response.trim();
            break;
          }
          // 如果是 m3u8 文件内容，可能需要从中提取 URL（暂不处理）
        }
      } catch (e) {
        // 忽略错误，尝试下一个端点
      }
    }
  }

  // 尝试解密 data-url (Base64)
  if (!videoUrl) {
    const dataUrl = $('#video-files .file').attr('data-url');
    if (dataUrl) {
      try {
        // 部分环境支持 Widget.utils.base64Decode，否则使用 atob
        const decoded = (Widget.utils?.base64Decode ? Widget.utils.base64Decode(dataUrl) : atob(dataUrl));
        if (decoded.includes('http')) {
          videoUrl = decoded;
        }
      } catch (e) {
        console.log("data-url 解码失败", e);
      }
    }
  }

  // 如果仍然找不到，返回详情页 iframe 作为后备（需播放器支持 iframe 类型）
  if (!videoUrl) {
    console.warn("无法提取视频源，返回详情页 URL 作为 iframe 播放");
    return {
      id: fullLink,
      type: "iframe",      // 若播放器不支持 iframe，可尝试 "webview"
      url: fullLink,
      customHeaders: {
        "Referer": fullLink,
        "User-Agent": CONFIG.USER_AGENT,
      },
    };
  }

  return {
    id: fullLink,
    type: "url",
    videoUrl: videoUrl,
    customHeaders: {
      "Referer": fullLink,
      "User-Agent": CONFIG.USER_AGENT,
      "Origin": new URL(fullLink).origin,
    },
  };
}

// == Exports ==================================================================
module.exports = {
  metadata: WidgetMetadata,
  search,
  loadPage,
  loadCensored,
  loadUncensored,
  loadUncensoredLeaked,
  loadVr,
  loadSeries,
  loadMaker,
  loadDetail,
};
