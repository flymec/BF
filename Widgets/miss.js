var WidgetMetadata = {
id: “missav_ws”,
title: “MissAV”,
description: “从 MissAV 获取分类列表和搜索影片”,
author: “ForwardWidget”,
site: “https://www.missav.ws”,
version: “1.0.0”,
requiredVersion: “0.0.1”,
detailCacheDuration: 300,
modules: [
{
title: “最新影片”,
description: “获取最新上架的影片列表”,
requiresWebView: false,
functionName: “getLatest”,
sectionMode: false,
cacheDuration: 1800,
params: [
{
name: “page”,
title: “页码”,
type: “page”,
description: “页码”,
value: “1”,
},
],
},
{
title: “分类浏览”,
description: “按分类浏览影片”,
requiresWebView: false,
functionName: “getByCategory”,
sectionMode: false,
cacheDuration: 3600,
params: [
{
name: “category”,
title: “分类”,
type: “enumeration”,
description: “选择影片分类”,
value: “uncensored-leak”,
enumOptions: [
{ title: “無碼流出”, value: “uncensored-leak” },
{ title: “無碼破解”, value: “decensored” },
{ title: “中文字幕”, value: “chinese-subtitle” },
{ title: “無碼”, value: “uncensored” },
{ title: “VR 影片”, value: “vr” },
],
},
{
name: “sort”,
title: “排序”,
type: “enumeration”,
description: “排序方式”,
value: “saved”,
enumOptions: [
{ title: “收藏數”, value: “saved” },
{ title: “最新”, value: “new” },
{ title: “觀看數”, value: “views” },
],
},
{
name: “page”,
title: “页码”,
type: “page”,
description: “页码”,
value: “1”,
},
],
},
{
title: “女优筛选”,
description: “按女优名字浏览影片”,
requiresWebView: false,
functionName: “getByActress”,
sectionMode: false,
cacheDuration: 3600,
params: [
{
name: “actress”,
title: “女优名字”,
type: “input”,
description: “输入女优名字（英文或日文）”,
value: “”,
placeholders: [
{ title: “JULIA”, value: “JULIA” },
{ title: “Yua Mikami”, value: “yua-mikami” },
{ title: “Ai Mukai”, value: “ai-mukai” },
],
},
{
name: “page”,
title: “页码”,
type: “page”,
description: “页码”,
value: “1”,
},
],
},
],
search: {
title: “搜索影片”,
functionName: “search”,
params: [
{
name: “keyword”,
title: “关键词”,
type: “input”,
description: “输入番号或关键词，例如：SSIS-001”,
value: “”,
},
{
name: “page”,
title: “页码”,
type: “page”,
description: “页码”,
value: “1”,
},
],
},
};

// ── 公共配置 ──────────────────────────────────────────────
const BASE_URL = “https://www.missav.ws”;
const DEFAULT_HEADERS = {
“User-Agent”:
“Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36”,
Referer: BASE_URL,
“Accept-Language”: “zh-TW,zh;q=0.9,en;q=0.8,ja;q=0.7”,
};

// ── 通用工具函数 ──────────────────────────────────────────

/**

- 通用 GET 请求
  */
  async function fetchPage(url) {
  const response = await Widget.http.get(url, { headers: DEFAULT_HEADERS });
  return response.data;
  }

/**

- 解析影片列表页面，返回 VideoItem 数组
  */
  function parseVideoList(html) {
  const $ = Widget.html.load(html);
  const items = [];

// MissAV 影片卡片 selector
$(“div.thumbnail”).each(function () {
try {
const $el = $(this);

```
  // 封面图
  const coverUrl =
    $el.find("img").attr("data-src") ||
    $el.find("img").attr("src") ||
    "";

  // 详情页链接
  const link = $el.find("a.movie-link").attr("href") || "";
  const fullLink = link.startsWith("http") ? link : BASE_URL + link;

  // 标题
  const title =
    $el.find("div.detail a.movie-link").text().trim() ||
    $el.find("a.movie-link").attr("title") ||
    "无标题";

  // 番号（通常在标题或独立标签里）
  const code =
    $el.find("div.detail span.text-nord13").text().trim() || "";

  // 发布日期
  const releaseDate =
    $el.find("div.detail div.meta span").first().text().trim() || "";

  if (!fullLink) return;

  items.push({
    id: fullLink,
    type: "url",
    title: code ? `[${code}] ${title}` : title,
    posterPath: coverUrl,
    backdropPath: coverUrl,
    releaseDate: releaseDate,
    mediaType: "movie",
    link: fullLink,
    description: code,
  });
} catch (e) {
  console.error("解析影片卡片失败:", e);
}
```

});

return items;
}

// ── 详情加载 ──────────────────────────────────────────────

/**

- 加载详情页，获取实际播放地址
- ForwardWidget 会在 type=url 且无 videoUrl 时调用此函数
  */
  async function loadDetail(link) {
  try {
  const html = await fetchPage(link);
  const $ = Widget.html.load(html);
  
  // 尝试从页面内嵌 script 中提取 m3u8 地址
  let videoUrl = “”;
  $(“script”).each(function () {
  const text = $(this).html() || “”;
  // 常见模式：source = “https://…m3u8”
  const m3u8Match = text.match(/source\s*=\s*[”’]([^"']+.m3u8[^"']*)/);
  if (m3u8Match) {
  videoUrl = m3u8Match[1];
  return false; // break
  }
  // 备用模式：“video_url”:”…”
  const jsonMatch = text.match(/“video_url”\s*:\s*”([^”]+)”/);
  if (jsonMatch) {
  videoUrl = jsonMatch[1].replace(/\/g, “”);
  return false;
  }
  });
  
  // 封面
  const coverUrl =
  $(‘meta[property=“og:image”]’).attr(“content”) ||
  $(“video”).attr(“poster”) ||
  “”;
  
  // 标题
  const title =
  $(‘meta[property=“og:title”]’).attr(“content”) ||
  $(“h1.video-title”).text().trim() ||
  “”;
  
  // 描述
  const description = $(‘meta[property=“og:description”]’).attr(“content”) || “”;
  
  // 发行日期
  const releaseDate =
  $(‘span[itemprop=“datePublished”]’).text().trim() ||
  $(”.text-nord13”).first().text().trim() ||
  “”;
  
  // 女优
  const actress = [];
  $(‘a[href*=”/actresses/”]’).each(function () {
  actress.push($(this).text().trim());
  });
  
  // 标签/分类
  const genres = [];
  $(‘a[href*=”/genres/”]’).each(function () {
  genres.push($(this).text().trim());
  });
  
  return {
  id: link,
  type: “url”,
  title: title,
  posterPath: coverUrl,
  backdropPath: coverUrl,
  releaseDate: releaseDate,
  mediaType: “movie”,
  videoUrl: videoUrl,
  link: link,
  description: [
  description,
  actress.length ? “女优: “ + actress.join(”, “) : “”,
  genres.length ? “标签: “ + genres.join(”, “) : “”,
  ]
  .filter(Boolean)
  .join(”\n”),
  playerType: “system”,
  };
  } catch (error) {
  console.error(“加载详情失败:”, error);
  throw error;
  }
  }

// ── 模块函数 ──────────────────────────────────────────────

/**

- 最新影片
  */
  async function getLatest(params = {}) {
  try {
  const page = params.page || 1;
  const url = page > 1 ? `${BASE_URL}/en?page=${page}` : `${BASE_URL}/en`;
  const html = await fetchPage(url);
  const items = parseVideoList(html);
  if (items.length === 0) {
  throw new Error(“未找到影片，可能网站结构已变更”);
  }
  return items;
  } catch (error) {
  console.error(“获取最新影片失败:”, error);
  throw error;
  }
  }

/**

- 按分类浏览
  */
  async function getByCategory(params = {}) {
  try {
  const category = params.category || “uncensored-leak”;
  const sort = params.sort || “saved”;
  const page = params.page || 1;
  
  // MissAV 分类 URL 格式: /en/search/<category>?filters=<category>&sort=<sort>&page=<n>
  let url = `${BASE_URL}/en/search/${category}?filters=${category}&sort=${sort}`;
  if (page > 1) url += `&page=${page}`;
  
  const html = await fetchPage(url);
  const items = parseVideoList(html);
  if (items.length === 0) {
  throw new Error(“该分类下未找到影片”);
  }
  return items;
  } catch (error) {
  console.error(“按分类浏览失败:”, error);
  throw error;
  }
  }

/**

- 按女优筛选
  */
  async function getByActress(params = {}) {
  try {
  const actress = (params.actress || “”).trim();
  if (!actress) {
  throw new Error(“请输入女优名字”);
  }
  const page = params.page || 1;
  // 名字转小写、空格换成短横线（与网站 URL 规则一致）
  const slug = actress.toLowerCase().replace(/\s+/g, “-”);
  let url = `${BASE_URL}/en/actresses/${slug}`;
  if (page > 1) url += `?page=${page}`;
  
  const html = await fetchPage(url);
  const items = parseVideoList(html);
  if (items.length === 0) {
  throw new Error(`未找到女优「${actress}」的影片，请检查名字拼写`);
  }
  return items;
  } catch (error) {
  console.error(“按女优筛选失败:”, error);
  throw error;
  }
  }

/**

- 关键词搜索
  */
  async function search(params = {}) {
  try {
  const keyword = (params.keyword || “”).trim();
  if (!keyword) {
  throw new Error(“请输入搜索关键词”);
  }
  const page = params.page || 1;
  const encoded = encodeURIComponent(keyword);
  let url = `${BASE_URL}/en/search/${encoded}`;
  if (page > 1) url += `?page=${page}`;
  
  const html = await fetchPage(url);
  const items = parseVideoList(html);
  if (items.length === 0) {
  throw new Error(`未找到关键词「${keyword}」的相关影片`);
  }
  return items;
  } catch (error) {
  console.error(“搜索失败:”, error);
  throw error;
  }
  }
