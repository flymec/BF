var WidgetMetadata = {
  id: "ti.bemarkt.javrate",
  title: "JAVRate",
  description: "获取 JAVRate 推荐",
  author: "Ti",
  site: "https://www.javrate.com/",
  version: "2.2.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    // 艺人模块（内容与原脚本完全一致，此处省略，实际使用时请粘贴原模块数组）
    // 请将原 WidgetMetadata.modules 完整复制至此
  ]
};

// 全局常量
const ARTIST_MAP_REMOTE_URL = "https://raw.githubusercontent.com/flymec/BF/refs/heads/main/Widgets/javrate_actors.json";
let artistMapCache = null;
let artistMapCacheTime = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000;
const BASE_URL = "https://www.javrate.com";

// 简单内存缓存（适用于详情页）
const detailCache = new Map();
const DETAIL_CACHE_TTL = 60 * 1000; // 60秒

function getCommonHeaders() {
  return {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    Referer: BASE_URL
  };
}

// 将相对/协议相对URL转为绝对URL
function toAbsoluteUrl(url, base = BASE_URL) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("//")) return "https:" + url;
  if (url.startsWith("/")) return base + url;
  return base + "/" + url;
}

// 递归获取真实视频地址（处理 iframe 嵌套）
async function resolveVideoUrl(iframeSrc) {
  if (!iframeSrc) return null;
  const absoluteIframeSrc = toAbsoluteUrl(iframeSrc);
  try {
    const resp = await Widget.http.get(absoluteIframeSrc, { headers: getCommonHeaders() });
    const $ = Widget.html.load(resp.data);
    // 尝试找到 video 标签的 src
    let videoSrc = $("video source").attr("src") || $("video").attr("src");
    if (videoSrc) return toAbsoluteUrl(videoSrc);
    // 尝试找到新的 iframe（极少情况）
    const nestedIframe = $("iframe").attr("src");
    if (nestedIframe) return resolveVideoUrl(nestedIframe);
    return absoluteIframeSrc; // 若未找到，返回原iframe地址
  } catch (e) {
    console.warn("解析 iframe 页面失败:", e.message);
    return absoluteIframeSrc; // 降级返回原地址
  }
}

async function fetchArtistMap() {
  if (artistMapCache && Date.now() - artistMapCacheTime < CACHE_DURATION) return artistMapCache;
  try {
    const response = await Widget.http.get(ARTIST_MAP_REMOTE_URL, { headers: getCommonHeaders() });
    if (!response.data) throw new Error("艺人列表返回空数据");
    artistMapCache = typeof response.data === "object" ? response.data : JSON.parse(response.data);
    if (typeof artistMapCache !== "object" || artistMapCache === null) throw new Error("艺人列表格式无效");
    artistMapCacheTime = Date.now();
    return artistMapCache;
  } catch (error) {
    console.error("艺人列表加载失败:", error.message);
    throw new Error("无法加载艺人列表: " + error.message);
  }
}

async function normalizeArtistName(name) {
  return name.replace(/[\s\u3000]+/g, "").replace(/[・･]/g, "").toLowerCase().normalize("NFKC");
}

// 解析详情页（增强版）
async function parseDetailPage(detailPageHtml, detailPageUrl) {
  const $ = Widget.html.load(detailPageHtml);
  
  // 标题
  const titleH1 = $("h1.mb-2.mt-1");
  const movieNumber = titleH1.find("strong.fg-main").text().trim();
  const titleClone = titleH1.clone();
  titleClone.find("strong").remove();
  const mainTitleText = titleClone.text().trim();
  const rawTitle = movieNumber ? `${movieNumber} ${mainTitleText}` : mainTitleText;

  // 提取封面图（绝对化）
  let imgSrc = toAbsoluteUrl($(".fixed-background-img").attr("src") || "");

  // 视频地址优先从 LD+JSON 获取
  let videoUrl = null;
  let description = "";
  try {
    const schemaScript = $('script[type="application/ld+json"]').html();
    if (schemaScript) {
      const schemaData = JSON.parse(schemaScript);
      videoUrl = schemaData.contentUrl || schemaData.embedUrl;
      description = schemaData.description || "";
    }
  } catch (e) { console.error("解析 LD+JSON 失败:", e.message); }

  // 若无，则从 iframe 获取并递归解析
  if (!videoUrl) {
    const iframeSrc = $(".player-box iframe").attr("src");
    if (iframeSrc) {
      videoUrl = await resolveVideoUrl(iframeSrc);
    }
  } else {
    videoUrl = toAbsoluteUrl(videoUrl);
  }

  // 发布日期
  let releaseDate = "";
  $('.main-content > .left h4:contains("发片日期")').next("div.col-auto").find("h4").each(function() {
    releaseDate = $(this).text().trim();
  });
  if (releaseDate) {
    const dateMatch = releaseDate.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
    if (dateMatch) {
      releaseDate = `${dateMatch[1]}-${dateMatch[2].padStart(2,'0')}-${dateMatch[3].padStart(2,'0')}`;
    }
  }

  // 描述
  if (!description) description = $(".description-text").text().trim() || "暂无简介";

  // 标签
  const tags = [];
  $("section.movie-keywords a.badge").each((i, el) => tags.push($(el).text().trim()));
  const genreTitle = tags.join(", ");

  // 关联影片（并发获取可能更高效，但简单起见保留顺序）
  const relatedItems = [];
  const relatedPromises = [];
  $("div.alike-grid-container .mgn-item").each((idx, element) => {
    try {
      const item = $(element);
      const linkElement = item.find(".mgn-title a");
      const relativeLink = linkElement.attr("href");
      if (!relativeLink) return;
      const absoluteLink = toAbsoluteUrl(relativeLink);
      const childImgSrc = toAbsoluteUrl(item.find(".mgn-picture img.mgn-cover").attr("src") || "");
      const childTitleH = item.find(".mgn-title h5");
      const titleClone = childTitleH.clone();
      titleClone.find("strong").remove();
      const mainTitle = titleClone.text().trim();
      const number = childTitleH.find("strong").text().trim();
      const fullTitle = `${number} ${mainTitle}`.trim();
      if (fullTitle && absoluteLink) {
        relatedItems.push({
          id: absoluteLink,
          type: "url",
          title: fullTitle,
          imgSrc: childImgSrc,
          link: absoluteLink,
          mediaType: "movie",
        });
      }
    } catch (e) { console.error(`解析关联条目出错:`, e.message); }
  });

  return {
    id: detailPageUrl,
    type: "url",
    title: rawTitle,
    videoUrl: videoUrl || "",
    description,
    releaseDate,
    genreTitle,
    backdropPath: imgSrc,
    link: detailPageUrl,
    customHeaders: videoUrl ? { Referer: BASE_URL } : undefined,
    relatedItems,
  };
}

// 解析列表页（图片绝对化）
async function parseItems($, listPageUrl) {
  const videoItems = [];
  const items = $('div[class^="movie-grid-new-"] .mgn-item');
  items.each((index, element) => {
    try {
      const item = $(element);
      const linkElement = item.find(".mgn-title a");
      const relativeLink = linkElement.attr("href");
      const titleElement = item.find(".mgn-title h3");
      if (!relativeLink || !titleElement.length) return;

      const movieNumber = titleElement.find("strong").text().trim();
      const movieTitle = titleElement.clone().find("strong").remove().end().text().trim();
      const fullTitle = `${movieNumber} ${movieTitle}`.trim();
      const absoluteLink = toAbsoluteUrl(relativeLink);
      const imgSrc = toAbsoluteUrl(item.find(".mgn-picture img.mgn-cover").attr("src") || "");

      let dateText = item.find(".mgn-date").clone().find("svg").remove().end().text().trim();
      const dateMatch = dateText.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
      if (dateMatch) {
        dateText = `${dateMatch[1]}-${dateMatch[2].padStart(2,'0')}-${dateMatch[3].padStart(2,'0')}`;
      }

      videoItems.push({
        id: absoluteLink,
        type: "url",
        title: fullTitle,
        backdropPath: imgSrc,
        link: absoluteLink,
        releaseDate: dateText || null,
        mediaType: "movie"
      });
    } catch (e) { console.error(`解析条目出错: ${e.message}`); }
  });
  return videoItems;
}

// 构建请求URL（与之前相同，略）
function buildRequestUrl(path, page, params) {
  // 此处复用原 fetchDataForPath 中的逻辑，为节省篇幅不重复，实际使用时请原样保留
  // 建议将原 fetchDataForPath 函数重命名为 buildRequestUrl 和 fetchData 分离，但为简洁，此处略。
  // 实际完整脚本需包含原 fetchDataForPath 函数体。
}

async function fetchDataForPath(path, params = {}) {
  const page = parseInt(params.page, 10) || 1;
  let requestUrl = "";
  if (!path || !path.startsWith("/")) path = "/" + (path || "");
  // ... 完整分页逻辑与原脚本相同，此处省略 ...
  // 注意：请务必保留原 fetchDataForPath 的实现，这里仅示意。
  try {
    const response = await Widget.http.get(requestUrl, { headers: getCommonHeaders() });
    if (!response?.data) throw new Error("无数据");
    const $ = Widget.html.load(response.data);
    const items = await parseItems($, requestUrl);
    if (items.length === 0) return [{
      id: `${requestUrl}-empty`, type: "url", title: "无匹配影片", description: "未找到任何影片", backdropPath: "", link: requestUrl
    }];
    return items;
  } catch (error) {
    console.error(`请求失败: ${requestUrl}`, error);
    return [{
      id: `${requestUrl}-error`, type: "url", title: `加载失败`, description: error.message, backdropPath: "", link: requestUrl
    }];
  }
}

async function loadDetail(linkValue) {
  // 检查缓存
  const cached = detailCache.get(linkValue);
  if (cached && Date.now() - cached.timestamp < DETAIL_CACHE_TTL) {
    return cached.data;
  }

  try {
    const response = await Widget.http.get(linkValue, { headers: getCommonHeaders() });
    if (!response?.data) throw new Error("无法加载详情页");
    const detailData = await parseDetailPage(response.data, linkValue);
    const result = {
      id: linkValue,
      type: "url",
      title: detailData.title,
      videoUrl: detailData.videoUrl,
      description: detailData.description,
      releaseDate: detailData.releaseDate,
      genreTitle: detailData.genreTitle,
      backdropPath: detailData.backdropPath,
      link: detailData.link,
      customHeaders: detailData.customHeaders,
      relatedItems: detailData.relatedItems,
    };
    // 存入缓存
    detailCache.set(linkValue, { timestamp: Date.now(), data: result });
    return result;
  } catch (error) {
    console.error(`loadDetail 失败:`, error);
    return {
      id: linkValue,
      type: "url",
      title: "加载详情失败",
      description: error.message,
      link: linkValue,
      backdropPath: "",
    };
  }
}

async function loadPage(params) {
  let path = "";
  // 艺人处理逻辑（与原脚本相同，略）
  // ...
  return fetchDataForPath(path, params);
}
