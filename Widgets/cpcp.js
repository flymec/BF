// == Metadata =================================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday",
  title: "JAVDay完善版",
  description: "JAVDay完善版",
  author: "flyme",
  site: "https://javday.app",
  version: "1.3.3",
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
      id: "latest_updates",
      title: "最新更新",
      description: "浏览最新更新视频",
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
      description: "浏览人气系列视频",
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
      description: "浏览新作上市视频",
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
      description: "浏览有码分类视频",
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
      description: "浏览无码分类视频",
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
      description: "浏览无码流出视频",
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
      description: "浏览杏吧分类视频",
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
      description: "浏览玩偶姐姐视频",
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
      description: "浏览国产 AV视频",
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
  LOG_PREFIX: "ForwardWidget: JAVDay -",
  TIMEOUT: 15000,
};

// == Utility Functions ========================================================

async function httpGet(url, referer = CONFIG.BASE_URL) {
  try {
    const response = await Widget.http.get(url, {
      headers: {
        "User-Agent": CONFIG.USER_AGENT,
        "Referer": referer,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Upgrade-Insecure-Requests": "1",
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
  url = url.trim();
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("//")) return `https:${url}`;
  const base = CONFIG.BASE_URL.replace(/\/+$/, "");
  const path = url.startsWith("/") ? url : `/${url}`;
  return (base + path).replace(/([^:]\/)\/+/g, "$1");
}

/**
 * 【修复】多策略提取封面图：
 *  1. style="background-image:url(...)"
 *  2. <img> 标签 src / data-src / data-lazy-src / data-original
 */
function getCoverImgSrc($item) {
  // 策略1: background-image style
  const coverEl = $item.find(".videoBox-cover, [class*='cover'], .thumb, .thumbnail").first();
  const styleAttr = coverEl.attr("style") || $item.attr("style") || "";
  if (styleAttr) {
    const match = styleAttr.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
    if (match && match[1]) return normalizeUrl(match[1]);
  }

  // 策略2: img 标签各种懒加载属性
  const imgEl = $item.find("img").first();
  if (imgEl.length) {
    const src =
      imgEl.attr("data-src") ||
      imgEl.attr("data-lazy-src") ||
      imgEl.attr("data-original") ||
      imgEl.attr("data-url") ||
      imgEl.attr("src");
    if (src && !src.includes("data:image")) return normalizeUrl(src);
  }

  return "";
}

/**
 * 【修复】parseVideoList：
 *  - 扩大选择器范围，兼容多种 DOM 结构
 *  - 链接从 <a> 父元素或子元素中获取
 *  - 标题从多个候选元素中获取
 */
function parseVideoList($, context = "来自 JAVDay") {
  const items = [];

  // 候选容器选择器，按优先级排列
  const containerSelectors = [
    ".video-wrapper .videoBox",
    ".video-list .videoBox",
    ".videoBox",
    ".video-item",
    "article.post",
    ".item",
  ];

  let $elements = $();
  for (const sel of containerSelectors) {
    $elements = $(sel);
    if ($elements.length > 0) {
      console.log(`${CONFIG.LOG_PREFIX} 使用选择器: ${sel}，找到 ${$elements.length} 个元素`);
      break;
    }
  }

  if ($elements.length === 0) {
    console.warn(`${CONFIG.LOG_PREFIX} 所有选择器均未匹配，尝试全局 <a> 扫描`);
    // 最后手段：扫描所有包含视频链接的 <a> 标签
    $("a[href]").each((index, element) => {
      const $item = $(element);
      const link = $item.attr("href");
      if (!link || !link.match(/\/(video|av|watch|movie|detail)\//i)) return;

      const title =
        $item.find("[class*='title']").text().trim() ||
        $item.attr("title") ||
        $item.text().trim();
      if (!title || title.length < 2) return;

      const imgSrc = getCoverImgSrc($item);
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

  $elements.each((index, element) => {
    const $item = $(element);

    // 获取链接：元素本身是 <a>，或其内部第一个 <a>
    let link = $item.attr("href") || $item.find("a[href]").first().attr("href");
    if (!link) return;

    // 获取标题：多候选
    const title =
      $item.find(".videoBox-info .title").text().trim() ||
      $item.find(".title").text().trim() ||
      $item.find("h2, h3, h4").text().trim() ||
      $item.find("[class*='title']").text().trim() ||
      $item.attr("title") || "";
    if (!title) return;

    const imgSrc = getCoverImgSrc($item);

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

  console.log(`${CONFIG.LOG_PREFIX} parseVideoList 解析到 ${items.length} 条`);
  return items;
}

function extractVideoUrlFromDPlayerScript(scriptContent) {
  if (!scriptContent) return null;
  const regexes = [
    /video\s*:\s*\{[^}]*?url\s*:\s*['"]([^'"]+)['"]/s,
    /url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/,
    /['"]url['"]\s*:\s*['"]([^'"]+)['"]/,
  ];
  for (const regex of regexes) {
    const match = scriptContent.match(regex);
    if (match && match[1]) return match[1];
  }
  return null;
}

function extractVideoUrl($) {
  let videoUrl = null;

  // 1. DPlayer 脚本
  const scripts = Array.from($("script")).map(el => $(el).html() || "");
  const dplayerScript = scripts.find(c => c.includes("new DPlayer") || c.includes("DPlayer("));
  if (dplayerScript) {
    videoUrl = extractVideoUrlFromDPlayerScript(dplayerScript);
    if (videoUrl) return normalizeUrl(videoUrl);
  }

  // 2. video / source 标签
  videoUrl =
    $("video").attr("src") ||
    $("video#J_prismPlayer").attr("src") ||
    $("source[src]").first().attr("src") ||
    $("source[data-src]").first().attr("data-src");
  if (videoUrl) return normalizeUrl(videoUrl);

  // 3. 脚本中的 m3u8
  for (const content of scripts) {
    if (content.includes(".m3u8")) {
      const match = content.match(/['"](https?:\/\/[^'"]+\.m3u8[^'"]*)['"]/);
      if (match && match[1]) return normalizeUrl(match[1]);
    }
  }

  // 4. 脚本中的 mp4
  for (const content of scripts) {
    if (content.includes(".mp4")) {
      const match = content.match(/['"](https?:\/\/[^'"]+\.mp4[^'"]*)['"]/);
      if (match && match[1]) return normalizeUrl(match[1]);
    }
  }

  // 5. iframe 播放器
  const iframeSrc =
    $("iframe[src*='player']").attr("src") ||
    $("iframe[src*='embed']").attr("src") ||
    $("iframe[src]").first().attr("src");
  if (iframeSrc) return normalizeUrl(iframeSrc);

  return null;
}

/**
 * 【修复】buildPageUrl：
 *  - 正确处理 index.php 路径
 *  - 正确处理 label / category / fiter 路径
 *  - 返回完整 URL 而非仅路径
 */
function buildPageUrl(baseUrl, sortBy, page) {
  // 去掉末尾斜杠和已有分页
  let cleanBase = baseUrl.replace(/\/+$/, "").replace(/\/page\/\d+$/, "");

  const hasIndexPhp = cleanBase.includes("index.php");
  const isLabel = /\/label\//.test(cleanBase);

  // 提取最后一段作为 slug
  // 例: https://javday.app/category/censored  -> censored
  // 例: https://javday.app/index.php/category/madou -> madou
  const slugMatch = cleanBase.match(/\/([^/]+)\/?$/);
  const slug = slugMatch ? slugMatch[1] : "";

  let path;
  if (sortBy === "popular") {
    // 人气排序路径: /fiter/by/hits/id/{slug}/
    path = `/fiter/by/hits/id/${slug}/`;
  } else if (isLabel) {
    path = `/label/${slug}/`;
  } else {
    // 判断是否含 index.php
    if (hasIndexPhp) {
      // 保留原有 category/xxx 结构，只替换 base
      const categoryMatch = cleanBase.match(/\/(category|label)\/([^/]+)/);
      if (categoryMatch) {
        path = `/index.php/${categoryMatch[1]}/${categoryMatch[2]}/`;
      } else {
        path = `/index.php/category/${slug}/`;
      }
    } else {
      const categoryMatch = cleanBase.match(/\/(category|label)\/([^/]+)/);
      if (categoryMatch) {
        path = `/${categoryMatch[1]}/${categoryMatch[2]}/`;
      } else {
        path = `/category/${slug}/`;
      }
    }
  }

  // 拼接分页
  if (page > 1) {
    path += `page/${page}/`;
  }

  return `${CONFIG.BASE_URL}${path}`;
}

// == Core Functions ===========================================================

async function loadPage(params = {}) {
  const { url, sort_by = "new", page = 1 } = params;
  if (!url) throw new Error("缺少 URL 参数");

  const targetUrl = buildPageUrl(url, sort_by, Number(page));
  console.log(`${CONFIG.LOG_PREFIX} loadPage => ${targetUrl}`);

  try {
    const html = await httpGet(targetUrl, url);
    const $ = Widget.html.load(html);
    const items = parseVideoList($, `排序:${sort_by === "new" ? "最新" : "人气"}`);

    if (items.length === 0 && sort_by === "popular") {
      console.warn(`${CONFIG.LOG_PREFIX} 人气路径无数据，降级到最新`);
      const fallbackUrl = buildPageUrl(url, "new", Number(page));
      const fallbackHtml = await httpGet(fallbackUrl, url);
      const $fallback = Widget.html.load(fallbackHtml);
      return parseVideoList($fallback, "排序:最新(人气降级)");
    }

    return items;
  } catch (error) {
    if (sort_by === "popular") {
      console.warn(`${CONFIG.LOG_PREFIX} 人气路径失败，降级到最新`, error.message);
      const fallbackUrl = buildPageUrl(url, "new", Number(page));
      const fallbackHtml = await httpGet(fallbackUrl, url);
      const $fallback = Widget.html.load(fallbackHtml);
      return parseVideoList($fallback, "排序:最新(人气降级)");
    }
    throw error;
  }
}

async function search(params = {}) {
  const { keyword, page = 1 } = params;
  if (!keyword) throw new Error("请输入搜索关键词");

  const encodedKeyword = encodeURIComponent(keyword.trim());
  const pageNum = Number(page);
  const searchUrl = pageNum > 1
    ? `${CONFIG.BASE_URL}/search/wd/${encodedKeyword}/page/${pageNum}/`
    : `${CONFIG.BASE_URL}/search/wd/${encodedKeyword}/`;

  console.log(`${CONFIG.LOG_PREFIX} search => ${searchUrl}`);
  const html = await httpGet(searchUrl, CONFIG.BASE_URL);
  const $ = Widget.html.load(html);
  return parseVideoList($, `搜索: ${keyword}`);
}

async function loadDetail(link) {
  const fullLink = normalizeUrl(link);
  console.log(`${CONFIG.LOG_PREFIX} loadDetail => ${fullLink}`);
  const html = await httpGet(fullLink, CONFIG.BASE_URL);
  const $ = Widget.html.load(html);

  const videoUrl = extractVideoUrl($);
  if (!videoUrl) throw new Error("无法找到视频源");

  const title =
    $("h1").first().text().trim() ||
    $(".article-title, .entry-title, .post-title").first().text().trim() ||
    $("title").text().trim() || "";

  return {
    title: title,
    videoUrl: videoUrl,
    customHeaders: {
      Referer: fullLink,
      "User-Agent": CONFIG.USER_AGENT,
    },
  };
}
