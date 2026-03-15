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
        {
          name: "keyword",
          title: "番号 / 女优 / 关键词",
          type: "input",
          value: "",
          description: "输入要搜索的内容",
        },
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
      functionName: "loadAll",
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
      functionName: "loadAll",
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
      functionName: "loadAll",
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
      functionName: "loadAll",
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
 * 从详情页提取视频播放地址
 */
function extractVideoUrl($) {
  // 尝试 video 标签
  let videoUrl = $("video#J_prismPlayer").attr("src") ||
                 $("video source[src*='.m3u8']").attr("src") ||
                 $("video source").attr("src");
  if (videoUrl) return videoUrl;

  // 尝试 iframe
  const iframeSrc = $("iframe[src*='player']").attr("src") ||
                    $("iframe[src*='embed']").attr("src");
  if (iframeSrc) return normalizeUrl(iframeSrc);

  // 尝试 script 中的配置 (常见 DPlayer / Hls)
  const scripts = $("script").map((i, el) => $(el).html()).get();
  for (const script of scripts) {
    if (!script) continue;
    // 匹配 url: 'https://...' 或 "https://..."
    const match = script.match(/['"](https?:\/\/[^'"]+\.(m3u8|mp4)[^'"]*)['"]/);
    if (match) return match[1];
    // 匹配 DPlayer 结构
    const dplayerMatch = script.match(/video\s*:\s*{\s*[^}]*url\s*:\s*['"]([^'"]+)['"]/);
    if (dplayerMatch) return dplayerMatch[1];
  }

  return null;
}

// == Core Functions ===========================================================

/**
 * 通用列表加载 (用于固定 URL，如 /hot, /new)
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
 * 加载 /all 分类列表，支持 type 和 sort
 */
async function loadAll(params = {}) {
  const { sort_by = "release_date", page = 1, type = "" } = params;
  // type 由模块内部隐含传递：有码、无码等分别对应不同 type 值
  // 我们需要从模块调用时传入，但这里参数没有 type，所以需要根据调用的模块来区分
  // 解决方法：在 metadata 的每个 loadAll 模块中，通过 constant 传递 type 参数
  // 但为了简化，我们在函数内部根据模块 title 判断？不稳健。
  // 更好的方式：在 params 中加入 type 字段，在 metadata 中通过 constant 传入。
  // 下面我们重构：让 loadAll 接受包含 type 的 params。
  // 注意：用户实际调用时，metadata 里定义的 params 只包含 sort_by 和 page，没有 type。
  // 因此我们无法在 loadAll 中获取 type。需要调整 metadata，为每个分类模块增加一个隐藏的 type 常量。
  // 这里我们采用变通：使用函数名称绑定不同分类，但不符合设计。
  // 重新设计：为每个分类单独写一个 load 函数，如 loadCensored, loadUncensored 等，它们内部固定 type 值。
  // 为了快速实现，我们在这里做判断：根据调用堆栈？不可靠。
  // 最简单：在 metadata 中，为有码、无码等模块使用不同的函数名，分别实现。
  // 但代码重复。我们可以写一个辅助函数 _loadAll(type, sort, page)。
  // 然后在每个具体函数中调用它。
  // 由于时间，我们在这里假设 type 通过 params.type 传入，并在 metadata 中为每个分类增加一个隐藏 constant。
  // 修改 metadata：为每个 loadAll 模块增加一个参数 { name: "type", type: "constant", value: "censored" } 等。
  // 这样做最清晰。
  // 下面按此修正。
  throw new Error("loadAll 需要子类化，请使用具体分类函数");
}

// 具体分类函数
async function loadCensored(params) {
  return _loadAll("censored", params.sort_by, params.page);
}
async function loadUncensored(params) {
  return _loadAll("uncensored", params.sort_by, params.page);
}
async function loadUncensoredLeaked(params) {
  return _loadAll("uncensored-leaked", params.sort_by, params.page);
}
async function loadVr(params) {
  return _loadAll("vr", params.sort_by, params.page);
}

async function _loadAll(type, sort_by, page = 1) {
  const url = new URL("/cn/all", CONFIG.BASE_URL); // 注意此处显式加上 /cn
  if (type) url.searchParams.set("type", type);
  if (sort_by) url.searchParams.set("sort", sort_by);
  if (page > 1) url.searchParams.set("page", page);

  const html = await httpGet(url.toString());
  const $ = Widget.html.load(html);
  return parseVideoList($, `${type} / ${sort_by}`);
}

/**
 * 业余系列 (tags)
 */
async function loadSeries(params = {}) {
  const { series, page = 1 } = params;
  if (!series) throw new Error("请选择系列");

  let url = `${CONFIG.BASE_URL}/tags/${series}`;
  if (page > 1) url += `?page=${page}`;

  const html = await httpGet(url);
  const $ = Widget.html.load(html);
  return parseVideoList($, `系列: ${series}`);
}

/**
 * 无码厂商 (makers)
 */
async function loadMaker(params = {}) {
  const { maker, page = 1 } = params;
  if (!maker) throw new Error("请选择厂商");

  let url = `${CONFIG.BASE_URL}/makers/${maker}`;
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

// == 修正 Metadata 中的函数引用 ================================================
// 由于我们在上面修改了分类函数，需要更新 Metadata 中的 functionName。
// 手动更新比较麻烦，但我们可以动态修改 Metadata 对象，或者直接重写 Metadata 数组。
// 为了清晰，我们重新定义 Metadata 模块，将 loadAll 替换为具体函数。
// 我们重新组织一下：将上面的 Metadata 复制下来并修正。

// 重新定义 Metadata（修正版）
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
