// == Metadata =================================================================
// 必须用 var，不能用 const/let
var WidgetMetadata = {
  id: "ti.bemarkt.javday",
  title: "JAVDay完善版",
  description: "JAVDay完善版",
  author: "flyme",
  site: "https://javday.app",
  version: "2.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      id: "search",
      title: "搜索视频",
      description: "搜索JAVDay视频库",
      type: "media_list",
      functionName: "search",        // 必须与全局 async function 名一致
      cacheDuration: 3600,
      params: [
        {
          name: "keyword",
          title: "女優/番號/關鍵字搜索…",
          type: "input",
          value: "",
          description: "女優/番號/關鍵字搜索…",
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "latest_updates",
      title: "最新更新",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/label/new/" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "popular_series",
      title: "人气系列",
      type: "media_list",
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
      type: "media_list",
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
      type: "media_list",
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
      type: "media_list",
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
      type: "media_list",
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
      type: "media_list",
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
      type: "media_list",
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
      type: "media_list",
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
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url", title: "厂商选择", type: "enumeration",
          enumOptions: [
            { title: "麻豆传媒",   value: "https://javday.app/index.php/category/madou/" },
            { title: "果冻传媒",   value: "https://javday.app/index.php/category/91zhipianchang/" },
            { title: "天美传媒",   value: "https://javday.app/index.php/category/timi/" },
            { title: "星空无限",   value: "https://javday.app/index.php/category/xingkong/" },
            { title: "皇家华人",   value: "https://javday.app/index.php/category/royalasianstudio/" },
            { title: "蜜桃影像",   value: "https://javday.app/index.php/category/mtgw/" },
            { title: "精东影业",   value: "https://javday.app/index.php/category/jdav/" },
            { title: "台湾 AV",    value: "https://javday.app/index.php/category/twav/" },
            { title: "JVID",       value: "https://javday.app/index.php/category/jvid/" },
            { title: "萝莉社",     value: "https://javday.app/index.php/category/luolisheus/" },
            { title: "糖心VLOG",   value: "https://javday.app/index.php/category/txvlog/" },
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
var BASE_URL   = "https://javday.app";
var UA         = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
var LOG        = "JAVDay:";
var TIMEOUT    = 15000;

// == Helpers ==================================================================

/**
 * 保证返回数组，防止 map/forEach 崩溃（规范要求数据源函数必须返回数组）
 */
function ensureArray(val) {
  if (Array.isArray(val)) return val;
  return [];
}

/**
 * 相对→绝对 URL
 */
function normalizeUrl(url) {
  if (!url) return "";
  url = url.trim();
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("//")) return "https:" + url;
  var base = BASE_URL.replace(/\/+$/, "");
  var path  = url.startsWith("/") ? url : "/" + url;
  return (base + path).replace(/([^:]\/)\/+/g, "$1");
}

/**
 * HTTP GET，带标准浏览器头
 */
async function httpGet(url, referer) {
  referer = referer || BASE_URL;
  var response = await Widget.http.get(url, {
    headers: {
      "User-Agent":      UA,
      "Referer":         referer,
      "Accept":          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    },
    timeout: TIMEOUT,
  });
  if (!response || !response.data) throw new Error(LOG + " 响应为空: " + url);
  if (response.status && (response.status < 200 || response.status >= 300)) {
    throw new Error(LOG + " HTTP " + response.status + ": " + url);
  }
  return response.data;
}

/**
 * 从元素中提取封面图（支持 background-image 和各种懒加载 img）
 */
function getCover($item) {
  // 1. background-image style
  var coverEl  = $item.find(".videoBox-cover, [class*='cover'], .thumb").first();
  var styleStr = coverEl.attr("style") || $item.attr("style") || "";
  if (styleStr) {
    var m = styleStr.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
    if (m && m[1]) return normalizeUrl(m[1]);
  }
  // 2. img 懒加载属性
  var imgEl = $item.find("img").first();
  if (imgEl.length) {
    var src = imgEl.attr("data-src") ||
              imgEl.attr("data-lazy-src") ||
              imgEl.attr("data-original") ||
              imgEl.attr("data-url") ||
              imgEl.attr("src") || "";
    if (src && !src.startsWith("data:")) return normalizeUrl(src);
  }
  return "";
}

/**
 * 解析列表页 DOM → MediaItem[]
 * 规范要求：数据源函数必须返回 MediaItem[]
 * loadDetail 只在条目没有 videoUrl 且有 link 时触发，所以列表只需返回 link
 */
function parseVideoList($, context) {
  context = context || "JAVDay";
  var items = [];

  // 候选选择器，按优先级
  var selectors = [
    ".video-wrapper .videoBox",
    ".video-list .videoBox",
    ".videoBox",
    ".video-item",
    "article.post",
  ];

  var $els = $();
  for (var i = 0; i < selectors.length; i++) {
    $els = $(selectors[i]);
    if ($els.length > 0) break;
  }

  // 兜底：扫描所有 <a> 含视频特征路径
  if ($els.length === 0) {
    $("a[href]").each(function(idx, el) {
      var $a   = $(el);
      var link = $a.attr("href") || "";
      if (!link.match(/\/(video|av|watch|movie|detail|p)\//i) && !link.match(/\.html?$/i)) return;
      var title = $a.find("[class*='title']").text().trim() ||
                  $a.attr("title") || $a.text().trim();
      if (!title || title.length < 2) return;
      var imgSrc = getCover($a);
      items.push({
        id:          idx + "|" + link,
        type:        "url",               // 规范 type 值
        title:       title,
        imgSrc:      imgSrc,
        backdropPath: imgSrc,
        link:        normalizeUrl(link),  // 有 link 无 videoUrl → 触发 loadDetail
        description: context,
        mediaType:   "movie",
      });
    });
    return items;
  }

  $els.each(function(idx, el) {
    var $item = $(el);
    var link  = $item.attr("href") || $item.find("a[href]").first().attr("href") || "";
    if (!link) return;

    var title =
      $item.find(".videoBox-info .title").text().trim() ||
      $item.find(".title").text().trim() ||
      $item.find("h2, h3, h4").first().text().trim() ||
      $item.find("[class*='title']").text().trim() ||
      $item.attr("title") || "";
    if (!title) return;

    var imgSrc = getCover($item);

    items.push({
      id:           idx + "|" + link,
      type:         "url",
      title:        title,
      imgSrc:       imgSrc,
      backdropPath: imgSrc,
      link:         normalizeUrl(link),   // 无 videoUrl → 触发 loadDetail
      description:  context,
      mediaType:    "movie",
    });
  });

  return items;
}

/**
 * 构建分页 URL（返回完整绝对地址）
 */
function buildPageUrl(baseUrl, sortBy, page) {
  var clean = baseUrl.replace(/\/+$/, "").replace(/\/page\/\d+\/?$/, "");

  var hasIndexPhp = clean.indexOf("index.php") !== -1;
  var isLabel     = /\/label\//.test(clean);

  // 取最后一段 slug
  var slugMatch = clean.match(/\/([^/]+)\/?$/);
  var slug      = slugMatch ? slugMatch[1] : "";

  // 提取 category|label 段（用于 index.php 路径）
  var catMatch = clean.match(/\/(category|label)\/([^/]+)/);

  var path;
  if (sortBy === "popular") {
    // 人气排序固定走 /fiter/by/hits/id/{slug}/
    path = "/fiter/by/hits/id/" + slug + "/";
  } else if (isLabel) {
    path = "/label/" + slug + "/";
  } else if (hasIndexPhp) {
    path = catMatch
      ? "/index.php/" + catMatch[1] + "/" + catMatch[2] + "/"
      : "/index.php/category/" + slug + "/";
  } else {
    path = catMatch
      ? "/" + catMatch[1] + "/" + catMatch[2] + "/"
      : "/category/" + slug + "/";
  }

  if (Number(page) > 1) {
    path += "page/" + page + "/";
  }

  return BASE_URL + path;
}

// == 视频详情提取 =============================================================

function extractFromDPlayer(scripts) {
  for (var i = 0; i < scripts.length; i++) {
    var c = scripts[i];
    if (!c || (c.indexOf("DPlayer") === -1 && c.indexOf("dplayer") === -1)) continue;
    var patterns = [
      /video\s*:\s*\{[^}]*?url\s*:\s*['"]([^'"]+)['"]/s,
      /url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/,
      /['"]url['"]\s*:\s*['"]([^'"]+)['"]/,
    ];
    for (var j = 0; j < patterns.length; j++) {
      var m = c.match(patterns[j]);
      if (m && m[1]) return normalizeUrl(m[1]);
    }
  }
  return null;
}

function extractVideoUrl($) {
  var scripts = [];
  $("script").each(function(_, el) { scripts.push($(el).html() || ""); });

  // 1. DPlayer
  var url = extractFromDPlayer(scripts);
  if (url) return url;

  // 2. video / source 标签
  url = $("video").attr("src") ||
        $("video#J_prismPlayer").attr("src") ||
        $("source[src]").first().attr("src") ||
        $("source[data-src]").first().attr("data-src");
  if (url) return normalizeUrl(url);

  // 3. 脚本内联 m3u8
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].indexOf(".m3u8") !== -1) {
      var m = scripts[i].match(/['"](https?:\/\/[^'"]+\.m3u8[^'"]*)['"]/);
      if (m && m[1]) return normalizeUrl(m[1]);
    }
  }

  // 4. 脚本内联 mp4
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].indexOf(".mp4") !== -1) {
      var m = scripts[i].match(/['"](https?:\/\/[^'"]+\.mp4[^'"]*)['"]/);
      if (m && m[1]) return normalizeUrl(m[1]);
    }
  }

  // 5. iframe 播放器
  url = $("iframe[src*='player']").attr("src") ||
        $("iframe[src*='embed']").attr("src") ||
        $("iframe[src]").first().attr("src");
  if (url) return normalizeUrl(url);

  return null;
}

// == 模块函数（名称必须与 functionName 完全一致）=============================

/**
 * 通用列表加载（分类 / 标签 / 厂商）
 * 规范：必须返回 MediaItem[]
 */
async function loadPage(params) {
  params = params || {};
  var url     = params.url    || "";
  var sortBy  = params.sort_by || "new";
  var page    = Number(params.page) || 1;

  if (!url) throw new Error("缺少 url 参数");

  var targetUrl = buildPageUrl(url, sortBy, page);
  console.log(LOG, "loadPage =>", targetUrl);

  var html, $, items;

  try {
    html  = await httpGet(targetUrl, url);
    $     = Widget.html.load(html);
    items = parseVideoList($, sortBy === "new" ? "最新" : "人气");
  } catch (e) {
    // popular 路径失败 → 降级到 new
    if (sortBy === "popular") {
      console.warn(LOG, "人气路径失败，降级", e.message);
      var fbUrl  = buildPageUrl(url, "new", page);
      html  = await httpGet(fbUrl, url);
      $     = Widget.html.load(html);
      items = parseVideoList($, "最新(降级)");
    } else {
      throw e;
    }
  }

  // popular 路径返回空 → 降级
  if (items.length === 0 && sortBy === "popular") {
    console.warn(LOG, "人气路径无数据，降级");
    var fbUrl  = buildPageUrl(url, "new", page);
    html  = await httpGet(fbUrl, url);
    $     = Widget.html.load(html);
    items = parseVideoList($, "最新(降级)");
  }

  return ensureArray(items); // 规范：必须返回数组
}

/**
 * 搜索
 * 规范：必须返回 MediaItem[]
 */
async function search(params) {
  params = params || {};
  var keyword = (params.keyword || "").trim();
  var page    = Number(params.page) || 1;

  if (!keyword) throw new Error("请输入搜索关键词");

  var encoded   = encodeURIComponent(keyword);
  var searchUrl = page > 1
    ? BASE_URL + "/search/wd/" + encoded + "/page/" + page + "/"
    : BASE_URL + "/search/wd/" + encoded + "/";

  console.log(LOG, "search =>", searchUrl);
  var html  = await httpGet(searchUrl, BASE_URL);
  var $     = Widget.html.load(html);
  var items = parseVideoList($, "搜索: " + keyword);

  return ensureArray(items); // 规范：必须返回数组
}

/**
 * 详情加载
 * 规范：条目有 link 无 videoUrl 时触发；返回 { title, videoUrl } 或 { title, episodeItems }
 */
async function loadDetail(link) {
  var fullLink = normalizeUrl(link);
  console.log(LOG, "loadDetail =>", fullLink);

  var html = await httpGet(fullLink, BASE_URL);
  var $    = Widget.html.load(html);

  var videoUrl = extractVideoUrl($);

  var title =
    $("h1").first().text().trim() ||
    $(".article-title, .entry-title, .post-title").first().text().trim() ||
    $("title").text().replace(/[-_|].*$/, "").trim() || "";

  if (!videoUrl) {
    throw new Error("无法找到视频源: " + fullLink);
  }

  // 规范返回格式：{ title, videoUrl }
  return {
    title:    title,
    videoUrl: String(videoUrl),
    // 自定义请求头（播放时携带）
    customHeaders: {
      "Referer":    fullLink,
      "User-Agent": UA,
    },
  };
}
