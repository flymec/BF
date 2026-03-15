var WidgetMetadata = {
  id: "ti.bemarkt.javrate",
  title: "JAVRate",
  description: "JAVRate完美播放",
  author: "flyme修改",
  site: "https://www.javrate.com/",
  version: "2.1.1",
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
    // 标签分类模块
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
          value: "hot",
          description: "选择标签大类"
        },
        {
          name: "tagValue", title: "具体类型", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["hot"] },
          enumOptions: [
            { title: "美脚・美腿", value: "美脚・美腿" },
            { title: "强奸・轮奸", value: "強姦・輪姦" },
            { title: "NTR・寢取", value: "NTR・寢取" },
            { title: "OL·职场", value: "OL・職場" },
            { title: "差旅·相部屋", value: "差旅・相部屋" },
            { title: "鬼畜・SM", value: "鬼畜・SM" },
            { title: "黑丝・肉丝", value: "黑絲・肉絲" },
            { title: "台湾女优", value: "台灣女優" },
            { title: "出道作", value: "出道作" },
            { title: "极上美人", value: "極上美人" },
            { title: "极上巨乳", value: "極上巨乳" },
            { title: "人妻", value: "人妻" },
            { title: "熟女", value: "熟女" },
            { title: "萝莉", value: "蘿莉" },
            { title: "AI女优", value: "AI女優" },
            { title: "魔镜号", value: "魔鏡號" },
            { title: "时间停止", value: "時間停止" },
            { title: "女搜查官", value: "女搜查官" },
            { title: "应召・援交", value: "應召・援交" },
            { title: "感谢祭", value: "感謝祭" },
            { title: "女学生", value: "女學生" },
            { title: "女仆", value: "女僕" },
            { title: "合辑", value: "合輯" },
            { title: "M男・M女", value: "M男・M女" }
          ],
          value: "美脚・美腿",
          description: "选择要浏览的分类"
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
            { title: "美腿", value: "美腿" },
            { title: "色白", value: "色白" },
            { title: "大屁股", value: "大屁股" },
            { title: "高颜值", value: "高顏值" },
            { title: "清纯", value: "清純" },
            { title: "明星脸", value: "明星臉" },
            { title: "小只马", value: "小隻馬" },
            { title: "无毛", value: "無毛" },
            { title: "短发", value: "短髮" },
            { title: "丰满", value: "豐滿" },
            { title: "高妹", value: "高妹" },
            { title: "超爆乳", value: "超爆乳" },
            { title: "贫乳", value: "貧乳" },
            { title: "肤黑", value: "膚黑" }
          ],
          value: "美乳",
          description: "选择要浏览的分类"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["genre"] },
          enumOptions: [
            { title: "剧情", value: "劇情" },
            { title: "企画", value: "企畫" },
            { title: "真实拍摄", value: "真實拍攝" },
            { title: "单体作品", value: "單體作品" },
            { title: "国产", value: "國產" },
            { title: "素人作品", value: "素人作品" },
            { title: "主观视角", value: "主觀視角" },
            { title: "无码流出", value: "無碼流出" },
            { title: "无码破解", value: "無碼破解" },
            { title: "4K", value: "4K" }
          ],
          value: "劇情",
          description: "选择要浏览的分类"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["plot"] },
          enumOptions: [
            { title: "NTR", value: "NTR" },
            { title: "出轨", value: "出軌" },
            { title: "艳遇", value: "艷遇" },
            { title: "不伦", value: "不倫" },
            { title: "轮奸", value: "輪姦" },
            { title: "乱伦", value: "亂倫" },
            { title: "寢取", value: "寢取" },
            { title: "纯爱・恋爱", value: "純愛・戀愛" },
            { title: "职场", value: "職場" },
            { title: "搭讪", value: "搭訕" }
          ],
          value: "NTR",
          description: "选择要浏览的分类"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["occupation"] },
          enumOptions: [
            { title: "风俗娘", value: "風俗娘" },
            { title: "按摩女郎", value: "按摩女郎" },
            { title: "女教师", value: "女教師" },
            { title: "护士", value: "護士" },
            { title: "偶像", value: "偶像" },
            { title: "运动女孩", value: "運動女孩" },
            { title: "家庭教师", value: "家庭教師" },
            { title: "女秘书", value: "女秘書" },
            { title: "服务生", value: "服務生" },
            { title: "空服", value: "空服" }
          ],
          value: "風俗娘",
          description: "选择要浏览的分类"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["relationship"] },
          enumOptions: [
            { title: "女同事", value: "女同事" },
            { title: "姐姐・妹妹", value: "姐姐・妹妹" },
            { title: "女友・妻子", value: "女友・妻子" },
            { title: "女上司", value: "女上司" },
            { title: "邻居", value: "鄰居" },
            { title: "母亲", value: "母親" },
            { title: "继母", value: "繼母" },
            { title: "母子", value: "母子" },
            { title: "人妻", value: "人妻" },
            { title: "夫妻", value: "夫妻" }
          ],
          value: "女同事",
          description: "选择要浏览的分类"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["outfit"] },
          enumOptions: [
            { title: "黑丝", value: "黑絲" },
            { title: "情趣內衣", value: "情趣內衣" },
            { title: "JK校服", value: "JK校服" },
            { title: "制服", value: "制服" },
            { title: "网袜", value: "網襪" },
            { title: "肉丝", value: "肉絲" },
            { title: "白丝", value: "白絲" },
            { title: "眼镜", value: "眼鏡" },
            { title: "泳装", value: "泳裝" },
            { title: "比基尼", value: "比基尼" }
          ],
          value: "黑絲",
          description: "选择要浏览的分类"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["characteristics"] },
          enumOptions: [
            { title: "荡妇", value: "蕩婦" },
            { title: "美人", value: "美人" },
            { title: "痴女", value: "癡女" },
            { title: "少女", value: "少女" },
            { title: "御姐系", value: "御姐系" },
            { title: "校花", value: "校花" },
            { title: "处女", value: "處女" },
            { title: "女神", value: "女神" }
          ],
          value: "蕩婦",
          description: "选择要浏览的分类"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["theme"] },
          enumOptions: [
            { title: "淫乱", value: "淫亂" },
            { title: "乱交•群P", value: "亂交%20•%20群P" },
            { title: "3P・4P", value: "3P・4P" },
            { title: "凌辱", value: "凌辱" },
            { title: "调教", value: "調教" },
            { title: "SM", value: "SM" },
            { title: "潮吹", value: "潮吹" },
            { title: "露出", value: "露出" }
          ],
          value: "淫亂",
          description: "选择要浏览的分类"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["state"] },
          enumOptions: [
            { title: "羞耻", value: "羞恥" },
            { title: "湿身", value: "濕身" },
            { title: "流汗", value: "流汗" },
            { title: "绝顶高潮", value: "絕頂高潮" },
            { title: "欲求不满", value: "慾求不滿" }
          ],
          value: "羞恥",
          description: "选择要浏览的分类"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["playstyle"] },
          enumOptions: [
            { title: "中出", value: "中出" },
            { title: "口交", value: "口交" },
            { title: "后入", value: "後入" },
            { title: "潮吹", value: "潮吹" },
            { title: "乳交", value: "乳交" },
            { title: "颜射", value: "顏射" },
            { title: "深喉", value: "深喉" },
            { title: "自慰", value: "自慰" },
            { title: "足交", value: "足交" }
          ],
          value: "中出",
          description: "选择要浏览的分类"
        },
        {
          name: "tagValue", title: "具体标签", type: "enumeration",
          belongTo: { paramName: "tagType", value: ["setting"] },
          enumOptions: [
            { title: "饭店", value: "飯店" },
            { title: "自宅", value: "自宅" },
            { title: "学校", value: "學校" },
            { title: "按摩・美容店", value: "按摩・美容店" },
            { title: "办公室", value: "辦公室" },
            { title: "温泉", value: "溫泉" },
            { title: "医院・诊所", value: "醫院・診所" },
            { title: "公共场所", value: "公共場所" },
            { title: "野外露天", value: "野外露天" },
            { title: "车震", value: "車震" }
          ],
          value: "飯店",
          description: "选择要浏览的分类"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
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
          belongTo: { paramName: "categoryType", value: ["/best/thisweek"] },
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
        { name: "page", title: "页码", type: "page" }
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
            { title: "天美傳媒", value: "天美傳媒" },
            { title: "蜜桃影像傳媒", value: "蜜桃影像傳媒" },
            { title: "精東影業", value: "精東影業" },
            { title: "桃太郎映像出版", value: "桃太郎映像出版" }
          ],
          value: "S1",
          description: "选择或输入出品厂商"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ]
};


const ARTIST_MAP_REMOTE_URL = "https://raw.githubusercontent.com/flymec/BF/refs/heads/main/Widgets/javrate_actors.json";
let artistMapCache = null;
let artistMapCacheTime = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000;
const BASE_URL = "https://www.javrate.com";

function getCommonHeaders(referer) {
  return {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    Referer: referer || BASE_URL
  };
}

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


function parseDetailPage(detailPageHtml, detailPageUrl) {
  const $ = Widget.html.load(detailPageHtml);
  
  const titleH1 = $("h1.mb-2.mt-1");
  const movieNumber = titleH1.find("strong.fg-main").text().trim();
  const titleClone = titleH1.clone();
  titleClone.find("strong").remove();
  const mainTitleText = titleClone.text().trim();
  const rawTitle = movieNumber ? `${movieNumber} ${mainTitleText}` : mainTitleText;

  let imgSrc = null;

  try {
    const schemaScript = $('script[type="application/ld+json"]').html();
    if (schemaScript) {
      const schemaData = JSON.parse(schemaScript);
      imgSrc = schemaData.thumbnailUrl;
    }
  } catch (e) {
    console.error(`解析 LD+JSON schema 失败:`, e.message);
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

  const tags = [];
  $("section.movie-keywords a.badge").each((idx, element) => {
    tags.push($(element).text().trim());
  });
  const genreTitle = tags.join(", ");

  const backdropImg = $(".fixed-background-img").attr("src");
  if (!imgSrc) {
    imgSrc = backdropImg;
  }

  // 播放器 iframe — <iframe id="v2-player" src="/Player/V2?payload=...">
  const iframeSrc = $("#v2-player").attr("src")
    || $("iframe[src*='/Player/V2']").attr("src")
    || $("iframe[src*='payload']").attr("src");

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
      console.error(`解析条目出错:`, e.message);
    }
  });

  return {
    rawTitle,
    imgSrc: imgSrc || "",
    releaseDate,
    genreTitle,
    iframeSrc,
    relatedItems,
  };
}


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


async function fetchDataForPath(path, params = {}) {
  const page = parseInt(params.page, 10) || 1;
  let requestUrl = "";

  if (!path || !path.startsWith("/")) {
    path = "/" + (path || "");
  }

  if (path.includes("/actor/movie/") && path.endsWith(".html")) {
    const artistId = path.match(/\/actor\/movie\/([^\/]+)\.html$/)?.[1];
    if (!artistId) {
      return [{ id: "artist-id-error", type: "url", title: "艺人识别错误", description: `无法从URL识别艺人ID: ${path}`, backdropPath: "", link: path }];
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
  else if (["/menu/uncensored/5-2-", "/menu/censored/5-2-", "/menu/chinese/5-2-"].includes(path)) {
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
      headers: getCommonHeaders(BASE_URL),
    });
    
    if (!response?.data) {
      return [{ id: `${requestUrl}-error`, type: "url", title: "加载失败", description: `服务器未返回有效数据`, backdropPath: "", link: requestUrl }];
    }
    if (response.data.includes("抱歉，没有找到")) {
      return [{ id: `${requestUrl}-no-content`, type: "url", title: "未找到影片", description: "此页面没有任何影片，请尝试其他分页或分类", backdropPath: "", link: requestUrl }];
    }

    const $ = Widget.html.load(response.data);
    const items = await parseItems(BASE_URL, $, requestUrl);
    
    if (items.length === 0) {
      return [{ id: `${requestUrl}-empty`, type: "url", title: "无匹配影片", description: "未找到任何影片，可能是内容已变更", backdropPath: "", link: requestUrl }];
    }
    
    return items;
  } catch (error) {
    console.error(`请求失败: ${requestUrl} - ${error.message}`);
    return [{ id: `${requestUrl}-error`, type: "url", title: `加载失败: 第${page}页`, description: `请求出错: ${error.message}`, backdropPath: "", link: requestUrl }];
  }
}


// == loadDetail ===============================================================
//
// 解析流程（已通过浏览器实际验证）：
//
// 步骤 1：请求详情页
//   从 <iframe id="v2-player" src="/Player/V2?payload=..."> 取播放器地址
//
// 步骤 2：请求 /Player/V2?payload=...
//   页面源码里有：
//     initialSignedUrl: 'https://videocdn.avking.xyz/bcdn_token=.../.../playlist.m3u8'
//   这是带鉴权 token 的完整 m3u8 直链
//
// 步骤 3：type: "url" 直播 m3u8
//   Referer 设 https://www.javrate.com/（CDN 防盗链校验此值）
//
// ============================================================================

async function loadDetail(linkValue) {
  let currentBaseUrl = BASE_URL;
  const urlMatch = linkValue.match(/^(https?:\/\/[^/]+)/);
  if (urlMatch) currentBaseUrl = urlMatch[0];

  try {
    // 步骤 1：请求详情页
    const detailResponse = await Widget.http.get(linkValue, {
      headers: getCommonHeaders(BASE_URL),
    });
    
    if (!detailResponse || !detailResponse.data) {
      throw new Error("无法加载详情页面: " + linkValue);
    }
    
    const detailData = parseDetailPage(detailResponse.data, linkValue);

    // 步骤 2：从 /Player/V2 页面取 initialSignedUrl
    let videoUrl = null;

    if (detailData.iframeSrc) {
      const playerUrl = detailData.iframeSrc.startsWith("http")
        ? detailData.iframeSrc
        : `${currentBaseUrl}${detailData.iframeSrc.startsWith("/") ? "" : "/"}${detailData.iframeSrc}`;

      try {
        const playerResponse = await Widget.http.get(playerUrl, {
          headers: getCommonHeaders(linkValue),
        });

        if (playerResponse?.data) {
          const html = playerResponse.data;

          // 优先：initialSignedUrl（含完整 token 的 playlist.m3u8）
          const initialMatch = html.match(/initialSignedUrl\s*:\s*['"]([^'"]+)['"]/);
          if (initialMatch?.[1]) {
            videoUrl = initialMatch[1];
          }

          // 备用：signedUrl（目录地址，补全后缀）
          if (!videoUrl) {
            const signedMatch = html.match(/[^a-zA-Z]signedUrl\s*:\s*['"]([^'"]+)['"]/);
            if (signedMatch?.[1]) {
              videoUrl = signedMatch[1].replace(/\/+$/, "") + "/playlist.m3u8";
            }
          }

          // 兜底：直接扫描 videocdn 域名的 m3u8 地址
          if (!videoUrl) {
            const cdnMatch = html.match(/(https?:\/\/videocdn\.[^'"]+\.m3u8[^'"]*)/);
            if (cdnMatch?.[1]) videoUrl = cdnMatch[1];
          }
        }
      } catch (err) {
        console.warn(`Player/V2 请求失败: ${err.message}`);
      }
    }

    if (!videoUrl) {
      throw new Error("无法获取视频地址");
    }

    return {
      id: linkValue,
      type: "url",
      title: detailData.rawTitle,
      videoUrl: videoUrl,
      description: detailData.genreTitle || "暂无简介",
      releaseDate: detailData.releaseDate,
      genreTitle: detailData.genreTitle,
      backdropPath: detailData.imgSrc || "",
      link: linkValue,
      // CDN 防盗链校验 Referer 为 https://www.javrate.com/
      customHeaders: {
        "Referer": "https://www.javrate.com/",
        "Origin": "https://www.javrate.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
      },
      relatedItems: detailData.relatedItems || [],
    };
  } catch (error) {
    console.error(`loadDetail 失败 ${linkValue}:`, error);
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
