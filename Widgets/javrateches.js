var WidgetMetadata = {
  id: "ti.bemarkt.javrate",
  title: "JAVRate",
  description: "获取 JAVRate 推荐",
  author: "Ti",
  site: "https://www.javrate.com/",
  version: "2.4.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
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
            { title: "桃乃木香奈", value: "桃乃木香奈" },
            { title: "天海翼", value: "天海翼" },
            { title: "JULIA", value: "JULIA" },
            { title: "三上悠亜", value: "三上悠亜" }
          ],
          value: "大槻响",
          description: "选择或手动输入女优名称"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "AV 分类",
      description: "按详细分类浏览所有分类的影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "tagType",
          title: "🏷️ 分类",
          type: "enumeration",
          enumOptions: [
            { title: "热门", value: "hot" },
            { title: "颜值", value: "appearance" },
            { title: "类型", value: "genre" },
            { title: "剧情", value: "plot" },
            { title: "职业", value: "occupation" },
            { title: "关系", value: "relationship" },
            { title: "衣着", value: "outfit" },
            { title: "特征", value: "characteristics" },
            { title: "主题", value: "theme" },
            { title: "状态", value: "state" },
            { title: "玩法", value: "playstyle" },
            { title: "场景", value: "setting" }
          ],
          value: "hot"
        },
        {
          name: "tagValue", title: "具体类型", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["hot"] },
          enumOptions: [
            { title: "美脚・美腿", value: "美脚・美腿" },
            { title: "强奸・轮奸", value: "強姦・輪姦" },
            { title: "NTR・寢取", value: "NTR・寢取" },
            { title: "OL·职场", value: "OL・職場" },
            { title: "黑丝・肉丝", value: "黑絲・肉絲" },
            { title: "极上巨乳", value: "極上巨乳" },
            { title: "人妻", value: "人妻" },
            { title: "熟女", value: "熟女" },
            { title: "萝莉", value: "蘿莉" },
            { title: "时间停止", value: "時間停止" },
            { title: "女学生", value: "女學生" },
            { title: "合辑", value: "合輯" }
          ],
          value: "美脚・美腿"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["appearance"] },
          enumOptions: [
            { title: "美乳", value: "美乳" },
            { title: "性感", value: "性感" },
            { title: "巨乳", value: "巨乳" },
            { title: "美脚", value: "美腳" },
            { title: "苗条", value: "苗條" },
            { title: "美臀", value: "美臀" },
            { title: "高颜值", value: "高顏值" },
            { title: "清纯", value: "清純" },
            { title: "超爆乳", value: "超爆乳" },
            { title: "贫乳", value: "貧乳" }
          ],
          value: "美乳"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["genre"] },
          enumOptions: [
            { title: "剧情", value: "劇情" },
            { title: "企画", value: "企畫" },
            { title: "素人作品", value: "素人作品" },
            { title: "无码流出", value: "無碼流出" },
            { title: "无码破解", value: "無碼破解" },
            { title: "国产", value: "國產" },
            { title: "主观视角", value: "主觀視角" },
            { title: "4K", value: "4K" }
          ],
          value: "劇情"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["plot"] },
          enumOptions: [
            { title: "NTR", value: "NTR" },
            { title: "出轨", value: "出軌" },
            { title: "轮奸", value: "輪姦" },
            { title: "乱伦", value: "亂倫" },
            { title: "纯爱・恋爱", value: "純愛・戀愛" },
            { title: "职场", value: "職場" },
            { title: "搭讪", value: "搭訕" }
          ],
          value: "NTR"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["occupation"] },
          enumOptions: [
            { title: "风俗娘", value: "風俗娘" },
            { title: "女教师", value: "女教師" },
            { title: "护士", value: "護士" },
            { title: "偶像", value: "偶像" },
            { title: "家庭教师", value: "家庭教師" },
            { title: "女秘书", value: "女秘書" }
          ],
          value: "風俗娘"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["relationship"] },
          enumOptions: [
            { title: "女同事", value: "女同事" },
            { title: "姐姐・妹妹", value: "姐姐・妹妹" },
            { title: "女友・妻子", value: "女友・妻子" },
            { title: "母亲", value: "母親" },
            { title: "继母", value: "繼母" },
            { title: "人妻", value: "人妻" }
          ],
          value: "女同事"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["outfit"] },
          enumOptions: [
            { title: "黑丝", value: "黑絲" },
            { title: "JK校服", value: "JK校服" },
            { title: "制服", value: "制服" },
            { title: "眼镜", value: "眼鏡" },
            { title: "泳装", value: "泳裝" },
            { title: "比基尼", value: "比基尼" }
          ],
          value: "黑絲"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["characteristics"] },
          enumOptions: [
            { title: "美人", value: "美人" },
            { title: "痴女", value: "癡女" },
            { title: "御姐系", value: "御姐系" },
            { title: "处女", value: "處女" },
            { title: "女神", value: "女神" }
          ],
          value: "美人"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["theme"] },
          enumOptions: [
            { title: "淫乱", value: "淫亂" },
            { title: "3P・4P", value: "3P・4P" },
            { title: "调教", value: "調教" },
            { title: "SM", value: "SM" },
            { title: "潮吹", value: "潮吹" }
          ],
          value: "淫亂"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["state"] },
          enumOptions: [
            { title: "羞耻", value: "羞恥" },
            { title: "湿身", value: "濕身" },
            { title: "绝顶高潮", value: "絕頂高潮" }
          ],
          value: "羞恥"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["playstyle"] },
          enumOptions: [
            { title: "中出", value: "中出" },
            { title: "口交", value: "口交" },
            { title: "后入", value: "後入" },
            { title: "潮吹", value: "潮吹" },
            { title: "颜射", value: "顏射" }
          ],
          value: "中出"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["setting"] },
          enumOptions: [
            { title: "饭店", value: "飯店" },
            { title: "办公室", value: "辦公室" },
            { title: "学校", value: "學校" },
            { title: "温泉", value: "溫泉" },
            { title: "医院", value: "醫院・診所" }
          ],
          value: "飯店"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
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
          belongTo: { paramName: "categoryType", value: ["/best/thisweek"] },
          enumOptions: [
            { title: "最近一周", value: "/best/thisweek" },
            { title: "最近一月", value: "/best/thismonth" },
            { title: "最近半年", value: "/best/thishalfyear" },
            { title: "最近一年", value: "/best/thisyear" },
            { title: "全部时间", value: "/best" }
          ],
          value: "/best/thisweek"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
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
            { title: "蚊香社", value: "蚊香社" }
          ],
          value: "S1",
          description: "选择或输入出品厂商"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ]
};

// == Constants ================================================================

const BASE_URL = "https://www.javrate.com";
const ARTIST_MAP_REMOTE_URL = "https://raw.githubusercontent.com/flymec/BF/refs/heads/main/Widgets/javrate_actors.json";

let artistMapCache = null;
let artistMapCacheTime = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000;

// == Utilities ================================================================

function getCommonHeaders(referer = BASE_URL) {
  return {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": referer,
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "zh-TW,zh;q=0.9,en;q=0.8",
  };
}

async function httpGet(url, referer = BASE_URL) {
  const response = await Widget.http.get(url, {
    headers: getCommonHeaders(referer),
    timeout: 15000,
  });
  if (!response?.data) throw new Error(`请求失败或内容为空: ${url}`);
  return response.data;
}

function normalizeUrl(url) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  if (url.startsWith("//")) return `https:${url}`;
  if (url.startsWith("/")) return `${BASE_URL}${url}`;
  return url;
}

function errorItem(description, link = "") {
  return {
    id: `error-${Date.now()}`,
    type: "url",
    title: "加载失败",
    description,
    backdropPath: "",
    link
  };
}

async function normalizeArtistName(name) {
  return name
    .replace(/[\s\u3000]+/g, "")
    .replace(/[・･]/g, "")
    .toLowerCase()
    .normalize("NFKC");
}

// == Artist Map ===============================================================

async function fetchArtistMap() {
  if (artistMapCache && Date.now() - artistMapCacheTime < CACHE_DURATION) {
    return artistMapCache;
  }
  const response = await Widget.http.get(ARTIST_MAP_REMOTE_URL, {
    headers: getCommonHeaders()
  });
  if (!response.data) throw new Error("艺人列表返回空数据");
  artistMapCache = typeof response.data === "object"
    ? response.data
    : JSON.parse(response.data);
  artistMapCacheTime = Date.now();
  return artistMapCache;
}

// == List Page Parsing ========================================================

async function parseItems($) {
  const videoItems = [];
  $('div[class^="movie-grid-new-"] .mgn-item').each((index, element) => {
    try {
      const item = $(element);
      const linkEl = item.find(".mgn-title a");
      const relativeLink = linkEl.attr("href");
      const titleEl = item.find(".mgn-title h3, .mgn-title h4, .mgn-title h5").first();
      if (!relativeLink || !titleEl.length) return;

      const movieNumber = titleEl.find("strong").text().trim();
      const titleClone = titleEl.clone();
      titleClone.find("strong").remove();
      const movieTitle = titleClone.text().trim();
      const fullTitle = `${movieNumber} ${movieTitle}`.trim();

      const absoluteLink = relativeLink.startsWith("http")
        ? relativeLink
        : `${BASE_URL}${relativeLink.startsWith("/") ? "" : "/"}${relativeLink}`;

      const imgSrc = item.find(".mgn-picture img.mgn-cover").attr("src") || "";

      let dateText = item.find(".mgn-date").clone().find("svg").remove().end().text().trim();
      const dateMatch = dateText.match(/(\d{4})-(\d{2})-(\d{2})/);
      if (dateMatch) dateText = `${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}`;

      videoItems.push({
        id: absoluteLink,
        type: "url",
        title: fullTitle,
        backdropPath: imgSrc,
        imgSrc: imgSrc,
        link: absoluteLink,
        releaseDate: dateText || null,
        mediaType: "movie"
      });
    } catch (e) {
      console.error(`parseItems 第 ${index} 项出错:`, e.message);
    }
  });
  return videoItems;
}

async function fetchDataForPath(path, params = {}) {
  const page = parseInt(params.page, 10) || 1;
  let requestUrl = "";

  if (!path || !path.startsWith("/")) path = "/" + (path || "");

  if (path.includes("/actor/movie/") && path.endsWith(".html")) {
    const artistId = path.match(/\/actor\/movie\/([^\/]+)\.html$/)?.[1];
    if (!artistId) return [errorItem(`无法从URL识别艺人ID: ${path}`, path)];
    requestUrl = page > 1
      ? `${BASE_URL}/actor/movie/1-0-2-${page}/${artistId}.html`
      : `${BASE_URL}${path}`;
  } else if (path.startsWith("/keywords/movie/")) {
    requestUrl = page > 1
      ? `${BASE_URL}${path}?page=${page}&sort=5`
      : `${BASE_URL}${path}`;
  } else if (path.startsWith("/Issuer/")) {
    requestUrl = page > 1
      ? `${BASE_URL}${path}?page=${page}&sort=5`
      : `${BASE_URL}${path}`;
  } else if (path.startsWith("/best")) {
    const sortByPath = params.sort_by || path;
    requestUrl = page > 1
      ? `${BASE_URL}${sortByPath}?page=${page}`
      : `${BASE_URL}${sortByPath}`;
  } else if (["/menu/uncensored/5-2-", "/menu/censored/5-2-", "/menu/chinese/5-2-"].includes(path)) {
    requestUrl = `${BASE_URL}${path}${page}`;
  } else if (path === "/movie/new/") {
    requestUrl = `${BASE_URL}${path}`;
  } else {
    const trimmedPath = path.replace(/\/+$/, "");
    requestUrl = page > 1
      ? `${BASE_URL}${trimmedPath}/${page}.html`
      : `${BASE_URL}${trimmedPath}`;
  }

  try {
    const html = await httpGet(requestUrl, BASE_URL);
    if (html.includes("抱歉，没有找到")) return [errorItem("此页面没有任何影片", requestUrl)];
    const $ = Widget.html.load(html);
    const items = await parseItems($);
    if (items.length === 0) return [errorItem("未找到任何影片，可能是内容已变更", requestUrl)];
    return items;
  } catch (error) {
    console.error(`fetchDataForPath 失败 [${requestUrl}]:`, error.message);
    return [errorItem(`加载失败: ${error.message}`, requestUrl)];
  }
}

// == loadDetail ===============================================================
//
// javrate.com 详情页结构（已通过浏览器源码确认）：
//
//   <iframe id="v2-player"
//     src="/Player/V2?payload=BASE64URL_ENCODED_STRING&poster=IMAGE_URL"
//     ...>
//   </iframe>
//
// payload 在静态 HTML 里直接存在，无需执行 JS。
// 策略：
//   1. HTTP 请求详情页，用 cheerio 抓 #v2-player 的 src
//   2. 拼成完整 URL 作为 videoUrl，type 设为 "webview"
//      让框架内嵌这个播放器 iframe（与 JAVDay 的 webview 模式一致）
//
// ============================================================================

async function loadDetail(linkValue) {
  if (!linkValue) throw new Error("缺少视频链接");

  const fullLink = linkValue.startsWith("http")
    ? linkValue
    : `${BASE_URL}${linkValue}`;

  const html = await httpGet(fullLink, BASE_URL);
  const $ = Widget.html.load(html);

  // ── 播放器 iframe（核心）────────────────────────────────────────────────────
  // <iframe id="v2-player" src="/Player/V2?payload=...&poster=...">
  const iframeSrc = $("#v2-player").attr("src")
    || $("iframe[src*='/Player/V2']").attr("src")
    || $("iframe[src*='payload']").attr("src");

  if (!iframeSrc) {
    throw new Error("未找到播放器 iframe (#v2-player)，页面结构可能已变更");
  }

  const playerUrl = normalizeUrl(iframeSrc);

  // ── 标题 ────────────────────────────────────────────────────────────────────
  const titleH1 = $("h1.mb-2.mt-1, h1").first();
  const movieNumber = titleH1.find("strong.fg-main, strong").first().text().trim();
  const titleClone = titleH1.clone();
  titleClone.find("strong").remove();
  const mainTitleText = titleClone.text().trim();
  const rawTitle = movieNumber ? `${movieNumber} ${mainTitleText}` : mainTitleText;

  // ── 封面图 ──────────────────────────────────────────────────────────────────
  // poster 参数里就有封面图 URL，直接从 iframe src 解析
  let imgSrc = "";
  try {
    const posterMatch = iframeSrc.match(/[?&]poster=([^&]+)/);
    if (posterMatch) {
      imgSrc = decodeURIComponent(posterMatch[1]);
    }
  } catch (e) {}
  if (!imgSrc) {
    imgSrc = $(".fixed-background-img").attr("src")
      || $('meta[property="og:image"]').attr("content")
      || "";
  }

  // ── 发布日期 ────────────────────────────────────────────────────────────────
  let releaseDate = "";
  const rawDate = $('h4:contains("发片日期")').next("div").find("h4").text().trim();
  const dateMatch = rawDate.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
  if (dateMatch) {
    releaseDate = `${dateMatch[1]}-${dateMatch[2].padStart(2, "0")}-${dateMatch[3].padStart(2, "0")}`;
  }

  // ── 标签 ────────────────────────────────────────────────────────────────────
  const tags = [];
  $("section.movie-keywords a.badge").each((i, el) => tags.push($(el).text().trim()));

  // ── 相关推荐 ────────────────────────────────────────────────────────────────
  const relatedItems = [];
  $("div.alike-grid-container .mgn-item").each((idx, element) => {
    try {
      const item = $(element);
      const relLink = item.find(".mgn-title a").attr("href");
      if (!relLink) return;
      const absLink = relLink.startsWith("http") ? relLink : `${BASE_URL}${relLink}`;
      const relTitleEl = item.find(".mgn-title h3, .mgn-title h5").first();
      const relNumber = relTitleEl.find("strong").text().trim();
      const relClone = relTitleEl.clone();
      relClone.find("strong").remove();
      const relFullTitle = `${relNumber} ${relClone.text().trim()}`.trim();
      const relImg = item.find(".mgn-picture img.mgn-cover").attr("src") || "";
      if (relFullTitle && absLink) {
        relatedItems.push({
          id: absLink,
          type: "url",
          title: relFullTitle,
          imgSrc: relImg,
          link: absLink,
          mediaType: "movie"
        });
      }
    } catch (e) {}
  });

  return {
    id: fullLink,
    type: "webview",
    title: rawTitle || "JAVRate 影片",
    videoUrl: playerUrl,          // /Player/V2?payload=... 完整 URL
    description: tags.join(", ") || "暂无简介",
    releaseDate: releaseDate,
    genreTitle: tags.join(", "),
    backdropPath: imgSrc,
    link: fullLink,
    customHeaders: {
      "Referer": fullLink,
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
    relatedItems: relatedItems,
  };
}

// == loadPage =================================================================

async function loadPage(params) {
  let path = "";

  if (params?.artistId) {
    try {
      const artistMap = await fetchArtistMap();
      const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(params.artistId);

      if (!isUUID) {
        const normalizedInput = await normalizeArtistName(params.artistId);
        let matchedId = null;
        let matchScore = 0;

        for (const [name, id] of Object.entries(artistMap)) {
          const normalizedMapName = await normalizeArtistName(name);
          if (normalizedMapName === normalizedInput) {
            matchedId = id; matchScore = 100; break;
          }
          if (normalizedMapName.includes(normalizedInput)) {
            const score = normalizedInput.length * 10;
            if (score > matchScore) { matchScore = score; matchedId = id; }
          }
        }

        if (!matchedId) return [errorItem(`未找到艺人: ${params.artistId}，请尝试输入全名`, "")];
        params.artistId = matchedId;
      }

      path = `/actor/movie/${params.artistId}.html`;

    } catch (error) {
      return [errorItem(`艺人列表加载失败: ${error.message}`, "")];
    }

  } else if (params?.tagType && params?.tagValue) {
    path = `/keywords/movie/${encodeURIComponent(params.tagValue)}`;

  } else if (params?.issuer) {
    path = `/Issuer/${encodeURIComponent(decodeURIComponent(params.issuer))}`;

  } else if (params?.categoryType) {
    path = params.categoryType;

  } else {
    return [errorItem("缺少必要参数，请检查模块配置", "")];
  }

  return fetchDataForPath(path, params);
}
