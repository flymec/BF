var WidgetMetadata = {
  id: "ti.bemarkt.javrate",
  title: "JAVRate",
  description: "获取 JAVRate 推荐",
  author: "Ti",
  site: "https://www.javrate.com/",
  version: "2.2.0", // 升级版本号
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    // 艺人模块
    {
      title: "搜索女优",
      description: "搜索女优影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "artistId",
          title: "搜索艺人",
          type: "input",
          placeholders: [
            { title: "大槻响", value: "大槻响" },
            { title: "美園和花", value: "美園和花" },
            { title: "森澤佳奈", value: "森澤佳奈" },
            { title: "波多野结衣", value: "波多野结衣" },
            { title: "明里紬", value: "明里紬" },
            { title: "松本一香", value: "松本一香" },
            { title: "桃乃木香奈", value: "桃乃木香奈" },
            { title: "希島愛理", value: "希島愛理" },
            { title: "天海翼", value: "天海翼" },
            { title: "JULIA", value: "JULIA" },
            { title: "新有菜", value: "新有菜" },
            { title: "美谷朱里", value: "美谷朱里" },
            { title: "相澤南", value: "相澤南" },
            { title: "藤森里穂", value: "藤森里穂" },
            { title: "天使萌", value: "天使萌" },
            { title: "AIKA", value: "AIKA" },
            { title: "葵司", value: "葵司" },
            { title: "小野夕子", value: "小野夕子" },
            { title: "楪可憐", value: "楪可憐" },
            { title: "三上悠亜", value: "三上悠亜" },
            { title: "水户香奈", value: "水户香奈" },
            { title: "小沢菜穂", value: "小沢菜穂" }
          ],
          value: "大槻响",
          description: "选择或手动输入女优名称"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 标签分类模块（内容过长，此处省略，保持原样）
    // 首页分类
    {
      title: "首页分类",
      description: "选择需要浏览的分类",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "categoryType",
          title: "📁 分类类型",
          type: "enumeration",
          enumOptions: [
            { title: "最新发布", value: "/movie/new/" },
            { title: "热门排行", value: "/best/thisweek" },
            { title: "无码A片", value: "/menu/uncensored/5-2-" },
            { title: "日本A片", value: "/menu/censored/5-2-" },
            { title: "国产AV", value: "/menu/chinese/5-2-" }
          ],
          value: "/movie/new/"
        },
        {
          name: "sort_by",
          title: "时间范围",
          type: "enumeration",
          belongTo: {
            paramName: "categoryType",
            value: ["/best/thisweek"],
          },
          enumOptions: [
            { title: "最近一周", value: "/best/thisweek" },
            { title: "最近一月", value: "/best/thismonth" },
            { title: "最近半年", value: "/best/thishalfyear" },
            { title: "最近一年", value: "/best/thisyear" },
            { title: "全部时间", value: "/best" }
          ],
          value: "/best/thisweek",
          description: "选择要查看的时间范围（仅热门排行有效）"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 出品厂商
    {
      title: "出品厂商",
      description: "按出品厂商浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "issuer",
          title: "选择或输入出品厂商",
          type: "input",
          placeholders: [
            { title: "S1", value: "S1" },
            { title: "SOD", value: "SOD" },
            { title: "麻豆传媒", value: "麻豆傳媒" },
            { title: "蚊香社", value: "蚊香社" },
            { title: "91製片廠", value: "91製片廠" },
            { title: "果凍傳媒", value: "果凍傳媒" },
            { title: "抖陰", value: "抖陰" },
            { title: "H.M.P芳友舍", value: "H.M.P 芳友舍" },
            { title: "天美傳媒", value: "天美傳媒" },
            { title: "蜜桃影像傳媒", value: "蜜桃影像傳媒" },
            { title: "星空無限傳媒", value: "星空無限傳媒" },
            { title: "精東影業", value: "精東影業" },
            { title: "皇家華人", value: "皇家華人" },
            { title: "桃太郎映像出版", value: "桃太郎映像出版" },
            { title: "水晶映像", value: "水晶映像" },
            { title: "本中", value: "本中" },
            { title: "溜池", value: "溜池" },
            { title: "癡女特化", value: "癡女特化" },
            { title: "無垢", value: "無垢" },
            { title: "熟女人妻最強廠", value: "熟女人妻最強廠" },
            { title: "妄想族", value: "妄想族" },
            { title: "人妻花園劇場", value: "人妻花園劇場" },
            { title: "人妻官能AV", value: "人妻官能AV" },
            { title: "変態紳士倶楽部", value: "変態紳士倶楽部" }
          ],
          value: "S1",
          description: "选择或输入出品厂商"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    }
  ]
};

// ---------- 核心逻辑 ----------
const ARTIST_MAP_REMOTE_URL = "https://raw.githubusercontent.com/flymec/BF/refs/heads/main/Widgets/javrate_actors.json";
let artistMapCache = null;
let artistMapCacheTime = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000;
const BASE_URL = "https://www.javrate.com";

function getCommonHeaders() {
  return {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    Referer: BASE_URL
  };
}

/**
 * 将相对路径转为绝对路径
 * @param {string} url - 可能为相对或绝对路径
 * @param {string} base - 基础URL
 */
function resolveUrl(url, base = BASE_URL) {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  if (url.startsWith('//')) return 'https:' + url;
  if (url.startsWith('/')) return base + url;
  return base + '/' + url;
}

// ---------- 艺人映射 ----------
async function fetchArtistMap() {
  if (artistMapCache && Date.now() - artistMapCacheTime < CACHE_DURATION) {
    return artistMapCache;
  }
  try {
    const response = await Widget.http.get(ARTIST_MAP_REMOTE_URL, {
      headers: getCommonHeaders()
    });
    if (!response.data) throw new Error("艺人列表返回空数据");
    artistMapCache = typeof response.data === "object" 
      ? response.data 
      : JSON.parse(response.data);
    if (typeof artistMapCache !== "object" || artistMapCache === null) {
      throw new Error("艺人列表格式无效");
    }
    artistMapCacheTime = Date.now();
    return artistMapCache;
  } catch (error) {
    console.error("艺人列表加载失败:", error.message);
    throw new Error("无法加载艺人列表: " + error.message);
  }
}

async function normalizeArtistName(name) {
  return name
    .replace(/[\s\u3000]+/g, "")
    .replace(/[・･]/g, "")
    .toLowerCase()
    .normalize("NFKC");
}

// ---------- 从嵌入页面提取真实视频地址 ----------
/**
 * 从嵌入页面提取真实视频流 URL (如 .m3u8)
 * @param {string} embedUrl - 嵌入页面地址
 * @param {string} referer - 来源页（详情页）
 */
async function extractRealVideoUrl(embedUrl, referer) {
  try {
    const response = await Widget.http.get(embedUrl, {
      headers: {
        ...getCommonHeaders(),
        Referer: referer || BASE_URL
      }
    });
    const html = response.data;
    const $ = Widget.html.load(html);

    // 方法1: 直接查找 <video> 标签的 src
    let videoSrc = $('video').attr('src');
    if (videoSrc) {
      return resolveUrl(videoSrc, embedUrl);
    }

    // 方法2: 查找 <script> 中的播放器配置
    const scripts = $('script').map((i, el) => $(el).html()).get();
    for (const script of scripts) {
      if (!script) continue;
      // 匹配 sources: [{ file: "https://...m3u8" }]
      const match = script.match(/sources:\s*\[\s*{\s*file:\s*["']([^"']+\.m3u8[^"']*)["']/);
      if (match) {
        return resolveUrl(match[1], embedUrl);
      }
      // 匹配 file: "https://...m3u8"
      const directMatch = script.match(/file:\s*["']([^"']+\.m3u8[^"']*)["']/);
      if (directMatch) {
        return resolveUrl(directMatch[1], embedUrl);
      }
    }

    // 方法3: 如果嵌入页面本身就是 m3u8 链接（极少见）
    if (embedUrl.includes('.m3u8')) {
      return embedUrl;
    }

    return null; // 未提取到真实视频地址
  } catch (error) {
    console.error(`提取视频地址失败 ${embedUrl}:`, error.message);
    return null;
  }
}

// ---------- 解析详情页 ----------
function parseDetailPage(detailPageHtml, detailPageUrl) {
  const $ = Widget.html.load(detailPageHtml);
  
  const titleH1 = $("h1.mb-2.mt-1");
  const movieNumber = titleH1.find("strong.fg-main").text().trim();
  const titleClone = titleH1.clone();
  titleClone.find("strong").remove();
  const mainTitleText = titleClone.text().trim();
  const rawTitle = movieNumber ? `${movieNumber} ${mainTitleText}` : mainTitleText;

  let videoUrl = null;
  let imgSrc = null;
  let description = "";

  try {
    const schemaScript = $('script[type="application/ld+json"]').html();
    if (schemaScript) {
      const schemaData = JSON.parse(schemaScript);
      videoUrl = schemaData.contentUrl || schemaData.embedUrl;
      imgSrc = schemaData.thumbnailUrl;
      description = schemaData.description || "";
    }
  } catch (e) {
    console.error(`解析 LD+JSON schema 失败:`, e.message);
  }

  if (!videoUrl) {
    videoUrl = $(".player-box iframe").attr("src");
  }

  // 转换为绝对路径
  if (videoUrl) {
    videoUrl = resolveUrl(videoUrl);
  }
  if (imgSrc) {
    imgSrc = resolveUrl(imgSrc);
  }

  let releaseDate = "";
  $('.main-content > .left h4:contains("发片日期")')
    .next("div.col-auto")
    .find("h4")
    .each(function() {
      releaseDate = $(this).text().trim();
    });
  
  if (releaseDate) {
    const dateMatch = releaseDate.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
    if (dateMatch) {
      const year = dateMatch[1];
      const month = dateMatch[2].padStart(2, '0');
      const day = dateMatch[3].padStart(2, '0');
      releaseDate = `${year}-${month}-${day}`;
    }
  }

  if (!description) {
    description = $(".description-text").text().trim();
  }

  const tags = [];
  $("section.movie-keywords a.badge").each((idx, element) => {
    tags.push($(element).text().trim());
  });
  const genreTitle = tags.join(", ");

  const backdropImg = $(".fixed-background-img").attr("src");
  if (!imgSrc && backdropImg) {
    imgSrc = resolveUrl(backdropImg);
  }

  const relatedItems = [];
  $("div.alike-grid-container .mgn-item").each((idx, element) => {
    try {
      const item = $(element);
      const linkElement = item.find(".mgn-title a");
      const relativeLink = linkElement.attr("href");
      if (!relativeLink) return;

      const absoluteLink = resolveUrl(relativeLink);
      const childImgSrc = item.find(".mgn-picture img.mgn-cover").attr("src");

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
          imgSrc: childImgSrc ? resolveUrl(childImgSrc) : "",
          link: absoluteLink,
          mediaType: "movie",
        });
      }
    } catch (e) {
      console.error(`解析条目出错: 第 ${idx + 1} 个条目时出错:`, e.message);
    }
  });

  return {
    id: detailPageUrl,
    type: "url",
    title: rawTitle,
    videoUrl: videoUrl,
    description: description || "暂无简介",
    releaseDate: releaseDate,
    genreTitle: genreTitle,
    backdropPath: imgSrc || "",
    link: detailPageUrl,
    customHeaders: videoUrl ? { Referer: BASE_URL } : undefined,
    relatedItems: relatedItems,
  };
}

// ---------- 解析列表页 ----------
async function parseItems(currentBaseUrl, $, listPageUrl) {
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
      const absoluteLink = resolveUrl(relativeLink);

      const imgSrc = item.find(".mgn-picture img.mgn-cover").attr("src") || "";

      let dateText = item.find(".mgn-date").clone().find("svg").remove().end().text().trim();
      const dateMatch = dateText.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
      if (dateMatch) {
        const year = dateMatch[1];
        const month = dateMatch[2].padStart(2, '0');
        const day = dateMatch[3].padStart(2, '0');
        dateText = `${year}-${month}-${day}`;
      }

      videoItems.push({
        id: absoluteLink,
        type: "url",
        title: fullTitle,
        backdropPath: resolveUrl(imgSrc),
        link: absoluteLink,
        releaseDate: dateText || null,
        mediaType: "movie"
      });
    } catch (e) {
      console.error(`解析条目出错: ${e.message}`);
    }
  });
  return videoItems;
}

// ---------- 获取列表页数据 ----------
async function fetchDataForPath(path, params = {}) {
  const page = parseInt(params.page, 10) || 1;
  let requestUrl = "";

  if (!path || !path.startsWith("/")) {
    path = "/" + (path || "");
  }

  if (path.includes("/actor/movie/") && path.endsWith(".html")) {
    const artistId = path.match(/\/actor\/movie\/([^\/]+)\.html$/)?.[1];
    if (!artistId) {
      return [{
        id: "artist-id-error", 
        type: "url", 
        title: "艺人识别错误", 
        description: `无法从URL识别艺人ID: ${path}`, 
        backdropPath: "", 
        link: path 
      }];
    }
    requestUrl = page > 1 
      ? `${BASE_URL}/actor/movie/1-0-2-${page}/${artistId}.html`
      : `${BASE_URL}${path}`;
  }
  else if (path.startsWith("/keywords/movie/")) {
    requestUrl = page > 1 
      ? `${BASE_URL}${path}?page=${page}&sort=5`
      : `${BASE_URL}${path}`;
  }
  else if (path.startsWith("/Issuer/")) {
    requestUrl = page > 1 
      ? `${BASE_URL}${path}?page=${page}&sort=5`
      : `${BASE_URL}${path}`;
  }
  else if (path.startsWith("/best/")) { 
    const sortByPath = params.sort_by || path; 
    requestUrl = page > 1 
      ? `${BASE_URL}${sortByPath}?page=${page}` 
      : `${BASE_URL}${sortByPath}`;
  }
  else if ([
    "/menu/uncensored/5-2-", 
    "/menu/censored/5-2-", 
    "/menu/chinese/5-2-"
  ].includes(path)) {
    requestUrl = `${BASE_URL}${path}${page}`;
  }
  else if (path === "/movie/new/") {
    requestUrl = `${BASE_URL}${path}`;
  }
  else {
    const trimmedPath = path.endsWith("/") ? path.slice(0, -1) : path;
    requestUrl = page > 1 
      ? `${BASE_URL}${trimmedPath}/${page}.html`
      : `${BASE_URL}${trimmedPath}`;
  }

  try {
    const response = await Widget.http.get(requestUrl, {
      headers: getCommonHeaders(),
    });
    
    if (!response?.data) {
      return [{
        id: `${requestUrl}-error`,
        type: "url",
        title: "加载失败",
        description: `服务器未返回有效数据: ${requestUrl}`,
        backdropPath: "",
        link: requestUrl
      }];
    }
    if (response.data.includes("抱歉，没有找到")) {
      return [{
        id: `${requestUrl}-no-content`,
        type: "url",
        title: "未找到影片",
        description: "此页面没有任何影片，请尝试其他分页或分类",
        backdropPath: "",
        link: requestUrl
      }];
    }

    const $ = Widget.html.load(response.data);
    const items = await parseItems(BASE_URL, $, requestUrl);
    
    if (items.length === 0) {
      return [{
        id: `${requestUrl}-empty`,
        type: "url",
        title: "无匹配影片",
        description: "未找到任何影片，可能是内容已变更",
        backdropPath: "",
        link: requestUrl
      }];
    }
    
    return items;
  } catch (error) {
    console.error(`请求失败: ${requestUrl} - ${error.message}`);
    return [{
      id: `${requestUrl}-error`,
      type: "url",
      title: `加载失败: 第${page}页`,
      description: `请求出错: ${error.message}`,
      backdropPath: "",
      link: requestUrl
    }];
  }
}

// ---------- 加载详情（核心改进）----------
async function loadDetail(linkValue) {
  try {
    const response = await Widget.http.get(linkValue, {
      headers: getCommonHeaders(),
    });
    
    if (!response || !response.data) {
      throw new Error("无法加载详情页面: " + linkValue);
    }
    
    const detailData = parseDetailPage(response.data, linkValue);

    // 如果 videoUrl 是嵌入页面（包含 /embed/ 特征），尝试提取真实视频地址
    if (detailData.videoUrl && detailData.videoUrl.includes('/embed/')) {
      const realUrl = await extractRealVideoUrl(detailData.videoUrl, linkValue);
      if (realUrl) {
        detailData.videoUrl = realUrl;
        // 更新 customHeaders，仍以 javrate.com 为 Referer（视频服务器可能要求来源为嵌入页，但经过测试多数接受主站）
        detailData.customHeaders = { Referer: BASE_URL };
        console.log('成功提取真实视频地址:', realUrl);
      } else {
        console.warn('未能提取真实视频地址，将使用原嵌入链接');
      }
    }

    return detailData;
  } catch (error) {
    console.error(`loadDetail: 加载详情失败 ${linkValue}:`, error);
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

// ---------- 页面加载入口 ----------
async function loadPage(params) {
  let path = "";
  
  if (params?.artistId) {
    try {
      const artistMap = await fetchArtistMap();
      const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(params.artistId);
    
      if (!isUUID) {
        const normalizedInput = await normalizeArtistName(params.artistId);
        let matchedId = null;
        let matchedName = null;
        let matchScore = 0;
      
        for (const [name, id] of Object.entries(artistMap)) {
          const normalizedMapName = await normalizeArtistName(name);
        
          if (normalizedMapName === normalizedInput) {
            matchedId = id;
            matchedName = name;
            matchScore = 100;
            break;
          }
        
          if (normalizedMapName.includes(normalizedInput)) {
            const score = normalizedInput.length * 10;
            if (score > matchScore) {
              matchScore = score;
              matchedId = id;
              matchedName = name;
            }
          }
        }
      
        if (!matchedId) {
          return [{
            id: "artist-not-found",
            type: "url", 
            title: "艺人未找到",
            description: `未找到艺人: ${params.artistId}\n\n请尝试输入全名或更换艺人名称`,
            backdropPath: "",
            link: ""
          }];
        }
      
        params.artistId = matchedId;
      }
    
      path = `/actor/movie/${params.artistId}.html`;
    } catch (error) {
      console.error("艺人模块处理出错:", error.message);
      return [{
        id: "artist-map-error",
        type: "url",
        title: "艺人列表加载失败",
        description: "请检查网络连接或稍后再试\n错误信息: " + error.message,
        backdropPath: "",
        link: ""
      }];
    }
  } else if (params && params.tagType && params.tagValue) {
    const encodedTag = encodeURIComponent(params.tagValue);
    path = `/keywords/movie/${encodedTag}`;
  } else if (params && params.issuer) {
    const decodedIssuer = decodeURIComponent(params.issuer);
    const encodedIssuer = encodeURIComponent(decodedIssuer);
    path = `/Issuer/${encodedIssuer}`;
  } else if (params && params.categoryType) {
    path = params.categoryType;
  } else {
    return [{
      id: "param-error",
      type: "url",
      title: "参数配置错误",
      description: "缺少必要参数，请检查模块配置。",
      backdropPath: "",
      link: ""
    }];
  }
  
  return fetchDataForPath(path, params);
}
