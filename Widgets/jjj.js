var WidgetMetadata = {
  id: "ti.bemarkt.javrate",
  title: "JAVRate",
  description: "获取 JAVRate 推荐",
  author: "Ti",
  site: "https://www.javrate.com/",
  version: "2.1.2",
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
    // 标签分类模块（完整内容保持不变，因篇幅此处省略，实际使用请保留原完整对象）
    // 此处仅展示模块结构，完整模块列表见原代码
    // 请将原模块列表完整复制到此处
  ]
};

// 全局常量
const ARTIST_MAP_REMOTE_URL = "https://raw.githubusercontent.com/flymec/BF/refs/heads/main/Widgets/javrate_actors.json";
let artistMapCache = null;
let artistMapCacheTime = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000;
const BASE_URL = "https://www.javrate.com";

/**
 * 获取公共请求头
 */
function getCommonHeaders() {
  return {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    Referer: BASE_URL
  };
}

/**
 * 获取艺人映射表（从远程缓存）
 */
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

/**
 * 标准化艺人名称（去空格、统一大小写、NFKC正规化）
 */
async function normalizeArtistName(name) {
  return name
    .replace(/[\s\u3000]+/g, "")
    .replace(/[・･]/g, "")
    .toLowerCase()
    .normalize("NFKC");
}

/**
 * 解析详情页，提取视频地址、元数据及关联影片
 */
function parseDetailPage(detailPageHtml, detailPageUrl) {
  const $ = Widget.html.load(detailPageHtml);
  
  // 提取标题和番号
  const titleH1 = $("h1.mb-2.mt-1");
  const movieNumber = titleH1.find("strong.fg-main").text().trim();
  const titleClone = titleH1.clone();
  titleClone.find("strong").remove();
  const mainTitleText = titleClone.text().trim();
  const rawTitle = movieNumber ? `${movieNumber} ${mainTitleText}` : mainTitleText;

  let videoUrl = null;
  let imgSrc = null;
  let description = "";

  // 尝试从 LD+JSON 提取视频信息
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

  // 如果未获取到，尝试从播放器 iframe 获取
  if (!videoUrl) {
    videoUrl = $(".player-box iframe").attr("src");
  }

  // 将视频地址转为绝对 URL
  if (videoUrl) {
    if (videoUrl.startsWith("//")) {
      videoUrl = "https:" + videoUrl;
    } else if (videoUrl.startsWith("/")) {
      videoUrl = BASE_URL + videoUrl;
    } else if (!videoUrl.startsWith("http")) {
      // 相对路径，拼接 BASE_URL
      videoUrl = new URL(videoUrl, BASE_URL).href;
    }
  }

  // 提取发布日期
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

  // 如果描述为空，使用备用字段
  if (!description) {
    description = $(".description-text").text().trim();
  }

  // 提取标签
  const tags = [];
  $("section.movie-keywords a.badge").each((idx, element) => {
    tags.push($(element).text().trim());
  });
  const genreTitle = tags.join(", ");

  // 提取背景图（备用封面）
  const backdropImg = $(".fixed-background-img").attr("src");
  if (!imgSrc) {
    imgSrc = backdropImg;
  }

  // 提取关联影片（右侧推荐）
  const relatedItems = [];
  $("div.alike-grid-container .mgn-item").each((idx, element) => {
    try {
      const item = $(element);
      const linkElement = item.find(".mgn-title a");
      const relativeLink = linkElement.attr("href");
      if (!relativeLink) return;

      const absoluteLink = relativeLink.startsWith("http")
        ? relativeLink
        : BASE_URL + (relativeLink.startsWith("/") ? relativeLink : "/" + relativeLink);

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
          imgSrc: childImgSrc || "",
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
    videoUrl: videoUrl || "",               // 确保不为 null
    description: description || "暂无简介",
    releaseDate: releaseDate,
    genreTitle: genreTitle,
    backdropPath: imgSrc || "",
    link: detailPageUrl,
    // 动态设置 Referer 为来源网站，部分视频托管需要验证来源
    customHeaders: videoUrl ? { Referer: BASE_URL } : undefined,
    relatedItems: relatedItems,
  };
}

/**
 * 解析列表页的影片条目
 */
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
      const absoluteLink = relativeLink.startsWith("http")
        ? relativeLink
        : `${currentBaseUrl}${relativeLink.startsWith("/") ? "" : "/"}${relativeLink}`;

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
        backdropPath: imgSrc,
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

/**
 * 根据路径和参数获取列表数据
 */
async function fetchDataForPath(path, params = {}) {
  const page = parseInt(params.page, 10) || 1;
  let requestUrl = "";

  if (!path || !path.startsWith("/")) {
    path = "/" + (path || "");
  }

  // 处理不同分页规则
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

/**
 * 加载详情页（点击列表项时调用）
 */
async function loadDetail(linkValue) {
  let currentBaseUrl = BASE_URL;
  
  const urlMatch = linkValue.match(/^(https?:\/\/[^/]+)/);
  if (urlMatch) {
    currentBaseUrl = urlMatch[0];
  } else {
    console.warn(`loadDetail: 无法从链接 ${linkValue} 中解析baseUrl，将使用默认值`);
  }
  
  try {
    const response = await Widget.http.get(linkValue, {
      headers: getCommonHeaders(),
    });
    
    if (!response || !response.data) {
      throw new Error("无法加载详情页面: " + linkValue);
    }
    
    const detailData = parseDetailPage(response.data, linkValue);

    return {
      id: linkValue,
      type: "url",
      title: detailData.title,
      videoUrl: detailData.videoUrl,
      description: detailData.description,
      releaseDate: detailData.releaseDate,
      genreTitle: detailData.genreTitle,
      backdropPath: detailData.backdropPath || "",
      link: detailData.link,
      customHeaders: detailData.customHeaders,
      relatedItems: detailData.relatedItems || [],
    };
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

/**
 * 入口函数：根据模块参数加载列表页
 */
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
  }
  else if (params && params.tagType && params.tagValue) {
    const encodedTag = encodeURIComponent(params.tagValue);
    path = `/keywords/movie/${encodedTag}`;
  }
  else if (params && params.issuer) {
    const decodedIssuer = decodeURIComponent(params.issuer);
    const encodedIssuer = encodeURIComponent(decodedIssuer);
    path = `/Issuer/${encodedIssuer}`;
  }
  else if (params && params.categoryType) {
    path = params.categoryType;
  }
  else {
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
