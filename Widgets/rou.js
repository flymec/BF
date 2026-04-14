var WidgetMetadata = {
  id: "rou",
  title: "肉视频",
  description: "获取 rou.video 视频",
  author: "alex",
  site: "https://rou.video",
  version: "1.0.2",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    { id: "latest", title: "最新", description: "最新视频", requiresWebView: false, functionName: "loadPage", sectionMode: false, cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://rou.video/videos" },
        { name: "from", title: "页码", type: "page", value: "1" }
      ]
    },
    { id: "domestic", title: "国产AV", description: "按厂商分类浏览国产AV", requiresWebView: false, functionName: "loadPage", sectionMode: false, cacheDuration: 3600,
      params: [
        { name: "url", title: "选择厂商", type: "enumeration", value: "https://rou.video/t/糖心Vlog",
          enumOptions: [
            { title: "糖心Vlog", value: "https://rou.video/t/糖心Vlog" },
            { title: "蜜桃影像传媒", value: "https://rou.video/t/蜜桃影像传媒" },
            { title: "香蕉视频传媒", value: "https://rou.video/t/香蕉视频传媒" },
            { title: "星空无限传媒", value: "https://rou.video/t/星空无限传媒" },
            { title: "天美传媒", value: "https://rou.video/t/天美传媒" },
            { title: "精东影业", value: "https://rou.video/t/精东影业" },
            { title: "91制片厂", value: "https://rou.video/t/91制片厂" },
            { title: "杏吧传媒", value: "https://rou.video/t/杏吧传媒" },
            { title: "皇家华人", value: "https://rou.video/t/皇家华人" },
            { title: "起点传媒", value: "https://rou.video/t/起点传媒" },
            { title: "大象传媒", value: "https://rou.video/t/大象传媒" },
            { title: "果冻传媒", value: "https://rou.video/t/果冻传媒" },
            { title: "萝莉社", value: "https://rou.video/t/萝莉社" },
            { title: "ED Mosaic", value: "https://rou.video/t/ED Mosaic" },
            { title: "兔子先生", value: "https://rou.video/t/兔子先生" },
            { title: "扣扣传媒", value: "https://rou.video/t/扣扣传媒" },
            { title: "SA国际传媒", value: "https://rou.video/t/SA国际传媒" },
            { title: "爱神传媒", value: "https://rou.video/t/爱神传媒" },
            { title: "性视界传媒", value: "https://rou.video/t/性视界传媒" },
            { title: "抖阴", value: "https://rou.video/t/抖阴" },
            { title: "绝对领域传媒", value: "https://rou.video/t/绝对领域传媒" },
            { title: "乌托邦传媒", value: "https://rou.video/t/乌托邦传媒" },
            { title: "草莓视频", value: "https://rou.video/t/草莓视频" },
            { title: "渡边传媒", value: "https://rou.video/t/渡边传媒" },
            { title: "乐播传媒", value: "https://rou.video/t/乐播传媒" },
            { title: "葫芦影业", value: "https://rou.video/t/葫芦影业" }
          ]
        },
        { name: "from", title: "页码", type: "page", value: "1" }
      ]
    },
    { id: "madou", title: "麻豆", description: "按系列分类浏览麻豆传媒", requiresWebView: false, functionName: "loadPage", sectionMode: false, cacheDuration: 3600,
      params: [
        { name: "url", title: "选择系列", type: "enumeration", value: "https://rou.video/t/麻豆传媒",
          enumOptions: [
            { title: "麻豆传媒（全部）", value: "https://rou.video/t/麻豆传媒" },
            { title: "爱豆传媒", value: "https://rou.video/t/爱豆传媒" },
            { title: "MD", value: "https://rou.video/t/MD" },
            { title: "MDX", value: "https://rou.video/t/MDX" },
            { title: "麻豆US", value: "https://rou.video/t/麻豆US" },
            { title: "MSD", value: "https://rou.video/t/MSD" },
            { title: "MCY", value: "https://rou.video/t/MCY" },
            { title: "MKY", value: "https://rou.video/t/MKY" },
            { title: "MPG", value: "https://rou.video/t/MPG" },
            { title: "FLIXKO", value: "https://rou.video/t/FLIXKO" },
            { title: "猫爪影像", value: "https://rou.video/t/猫爪影像" },
            { title: "麻豆女神微爱视频", value: "https://rou.video/t/麻豆女神微爱视频" },
            { title: "麻豆番外", value: "https://rou.video/t/麻豆番外" },
            { title: "麻豆三十天特别企划", value: "https://rou.video/t/麻豆三十天特别企划" },
            { title: "麻豆导演系列", value: "https://rou.video/t/麻豆导演系列" },
            { title: "情趣K歌房", value: "https://rou.video/t/情趣K歌房" },
            { title: "突袭女优家", value: "https://rou.video/t/突袭女优家" },
            { title: "国产麻豆AV节目", value: "https://rou.video/t/国产麻豆AV节目" }
          ]
        },
        { name: "from", title: "页码", type: "page", value: "1" }
      ]
    },
    { id: "tanhua", title: "探花", description: "按系列分类浏览探花", requiresWebView: false, functionName: "loadPage", sectionMode: false, cacheDuration: 3600,
      params: [
        { name: "url", title: "选择系列", type: "enumeration", value: "https://rou.video/t/探花",
          enumOptions: [
            { title: "探花（全部）", value: "https://rou.video/t/探花" },
            { title: "91沈先生", value: "https://rou.video/t/91沈先生" },
            { title: "探花精选400", value: "https://rou.video/t/探花精选400" },
            { title: "小宝寻花", value: "https://rou.video/t/小宝寻花" },
            { title: "91lisa", value: "https://rou.video/t/91lisa" },
            { title: "午夜寻花", value: "https://rou.video/t/午夜寻花" },
            { title: "91凤鸣鸟唱", value: "https://rou.video/t/91凤鸣鸟唱" },
            { title: "大神精选", value: "https://rou.video/t/大神精选" },
            { title: "91猫先生", value: "https://rou.video/t/91猫先生" },
            { title: "千人斩探花", value: "https://rou.video/t/千人斩探花" },
            { title: "全国探花", value: "https://rou.video/t/全国探花" },
            { title: "七天探花", value: "https://rou.video/t/七天探花" },
            { title: "9总全国探花", value: "https://rou.video/t/9总全国探花" },
            { title: "鸭哥探花", value: "https://rou.video/t/鸭哥探花" },
            { title: "锤子探花", value: "https://rou.video/t/锤子探花" },
            { title: "探花合集", value: "https://rou.video/t/探花合集" },
            { title: "李寻欢", value: "https://rou.video/t/李寻欢" },
            { title: "韦小宝", value: "https://rou.video/t/韦小宝" },
            { title: "换妻探花", value: "https://rou.video/t/换妻探花" },
            { title: "行吧传媒", value: "https://rou.video/t/行吧传媒" }
          ]
        },
        { name: "from", title: "页码", type: "page", value: "1" }
      ]
    },
    { id: "selfie", title: "自拍流出", description: "自拍流出视频", requiresWebView: false, functionName: "loadPage", sectionMode: false, cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://rou.video/t/自拍流出" },
        { name: "from", title: "页码", type: "page", value: "1" }
      ]
    },
    { id: "onlyfans", title: "OnlyFans", description: "按博主分类浏览OnlyFans视频", requiresWebView: false, functionName: "loadPage", sectionMode: false, cacheDuration: 3600,
      params: [
        { name: "url", title: "选择博主", type: "enumeration", value: "https://rou.video/t/OnlyFans",
          enumOptions: [
            { title: "OnlyFans（全部）", value: "https://rou.video/t/OnlyFans" },
            { title: "fansly", value: "https://rou.video/t/fansly" },
            { title: "tangbo_hu（唐伯虎）", value: "https://rou.video/t/tangbo_hu" },
            { title: "HongKongDoll", value: "https://rou.video/t/HongKongDoll" },
            { title: "BunnyMiffy", value: "https://rou.video/t/BunnyMiffy" },
            { title: "Nana_Taipei", value: "https://rou.video/t/Nana_Taipei" },
            { title: "qiobnxingcai", value: "https://rou.video/t/qiobnxingcai" },
            { title: "suchanghub", value: "https://rou.video/t/suchanghub" },
            { title: "ssrpeach", value: "https://rou.video/t/ssrpeach" },
            { title: "nicolove.cc", value: "https://rou.video/t/nicolove.cc" },
            { title: "kitty2002102", value: "https://rou.video/t/kitty2002102" },
            { title: "Miuzxc", value: "https://rou.video/t/Miuzxc" },
            { title: "YuZuKitty", value: "https://rou.video/t/YuZuKitty" },
            { title: "ZZZ666", value: "https://rou.video/t/ZZZ666" },
            { title: "tinaislove", value: "https://rou.video/t/tinaislove" },
            { title: "aryminh", value: "https://rou.video/t/aryminh" },
            { title: "meehutao（米胡桃）", value: "https://rou.video/t/meehutao" },
            { title: "emmy18y（艾玛）", value: "https://rou.video/t/emmy18y" },
            { title: "fansone", value: "https://rou.video/t/fansone" }
          ]
        },
        { name: "from", title: "页码", type: "page", value: "1" }
      ]
    },
    { id: "japan", title: "日本", description: "日本视频", requiresWebView: false, functionName: "loadPage", sectionMode: false, cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://rou.video/t/日本" },
        { name: "from", title: "页码", type: "page", value: "1" }
      ]
    }
  ],
  search: {
    id: "search",
    title: "搜索",
    functionName: "search",
    params: [
      { name: "keyword", title: "关键词", type: "input" },
      { name: "from", title: "页码", type: "page", value: "1" }
    ]
  }
};

// ==================== 通用请求头 ====================
function getHeaders() {
  return {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Referer": "https://rou.video/",
    "Cache-Control": "no-cache",
    "Pragma": "no-cache"
  };
}

// ==================== 搜索 ====================
async function search(params) {
  params = params || {};
  var keyword = encodeURIComponent(params.keyword || "");
  if (!keyword) return [];
  var url = "https://rou.video/search?q=" + keyword;
  return await loadPage({ url: url, from: params.from });
}

// ==================== 加载列表 ====================
async function loadPage(params) {
  var sections = await loadPageSections(params);
  var items = [];
  for (var i = 0; i < sections.length; i++) {
    var childItems = sections[i].childItems;
    for (var j = 0; j < childItems.length; j++) {
      items.push(childItems[j]);
    }
  }
  return items;
}

// ==================== 加载列表（分页） ====================
async function loadPageSections(params) {
  try {
    var url = params.url;
    if (!url) throw new Error("地址不能为空");

    var page = params.from;
    if (page && page !== "1") {
      var sep = url.indexOf("?") >= 0 ? "&" : "?";
      url += sep + "page=" + page;
    }

    console.log("[rou] 请求 URL: " + url);

    var response = await Widget.http.get(url, { headers: getHeaders() });

    if (!response || !response.data || typeof response.data !== "string") {
      throw new Error("无法获取有效的 HTML 内容");
    }

    var html = response.data;
    console.log("[rou] 获取 HTML 长度: " + html.length);

    // 保存调试片段（可选）
    // console.log("[rou] HTML 前500字符: " + html.substring(0, 500));

    var result = parseHtml(html);
    console.log("[rou] 解析到视频数量: " + (result[0]?.childItems?.length || 0));
    return result;

  } catch (error) {
    console.error("[rou] 加载出错: " + error.message);
    throw error;
  }
}

// ==================== 解析 HTML ====================
function parseHtml(htmlContent) {
  var $ = Widget.html.load(htmlContent);
  var items = [];

  // 尝试多种常见选择器（根据网站最新结构调整）
  var selectors = [
    "a.group",                       // 原选择器
    "a[href*='/v/']",                // 所有包含 /v/ 的链接
    ".video-card a",                 // 可能的卡片类名
    ".grid a[href]",                 // 网格布局
    "article a",                     // 文章元素
    ".item a",                       // 通用 item
    ".post a"                        // 通用 post
  ];

  var cardElements = [];
  for (var s = 0; s < selectors.length; s++) {
    var elements = $(selectors[s]).toArray();
    if (elements.length > 0) {
      cardElements = elements;
      console.log("[rou] 使用选择器: " + selectors[s] + " 找到 " + elements.length + " 个元素");
      break;
    }
  }

  // 如果仍未找到，尝试直接从所有链接中过滤
  if (cardElements.length === 0) {
    console.log("[rou] 未匹配到专用选择器，尝试全局链接过滤");
    cardElements = $("a[href*='/v/']").toArray();
    console.log("[rou] 全局链接过滤找到 " + cardElements.length + " 个元素");
  }

  for (var i = 0; i < cardElements.length; i++) {
    var $card = $(cardElements[i]);
    var href = $card.attr("href") || "";

    // 确保是视频详情页
    if (!href || href.indexOf("/v/") < 0) continue;

    var link = href.startsWith("http") ? href : "https://rou.video" + href;

    // 封面图：尝试多种方式获取
    var $img = $card.find("img").first();
    var cover = $img.attr("src") || $img.attr("data-src") || $img.attr("data-original") || "";
    if (!cover) {
      // 尝试从背景图获取
      var style = $card.attr("style") || "";
      var bgMatch = style.match(/url\(['"]?([^'"]+)['"]?\)/);
      if (bgMatch) cover = bgMatch[1];
    }
    if (cover && cover.startsWith("/")) {
      cover = "https://rou.video" + cover;
    }

    // 标题：尝试多种选择器
    var title = "";
    var titleSelectors = ["h2", "h3", "h4", ".title", "[class*='title']", ".name", ".heading"];
    for (var ts = 0; ts < titleSelectors.length; ts++) {
      var $titleEl = $card.find(titleSelectors[ts]).first();
      if ($titleEl.length) {
        title = $titleEl.text().trim();
        if (title) break;
      }
    }
    if (!title) {
      title = $card.attr("title") || $img.attr("alt") || "";
    }

    // 时长
    var duration = "";
    var durationSelectors = ["[class*='duration']", "[class*='time']", ".label", ".length", ".runtime"];
    for (var ds = 0; ds < durationSelectors.length; ds++) {
      var $durEl = $card.find(durationSelectors[ds]).first();
      if ($durEl.length) {
        duration = $durEl.text().trim();
        if (duration) break;
      }
    }

    // 标签
    var tags = [];
    $card.find("a[href*='/t/']").each(function () {
      var tagText = $(this).text().trim();
      if (tagText) tags.push(tagText);
    });

    if (link && title) {
      items.push({
        id: link,
        type: "url",
        title: title,
        posterPath: cover,
        backdropPath: cover,
        link: link,
        mediaType: "movie",
        durationText: duration,
        description: tags.join(" · ") || duration
      });
    }
  }

  console.log("[rou] 最终有效视频项: " + items.length);

  if (items.length > 0) {
    return [{ title: "", childItems: items }];
  }
  return [];
}

// ==================== 加载详情 ====================
async function loadDetail(link) {
  console.log("[rou] 加载详情: " + link);

  var response = await Widget.http.get(link, { headers: getHeaders() });

  var html = response.data;
  var hlsUrl = "";

  // 多种方式提取 m3u8
  var patterns = [
    /(?:hlsUrl|videoUrl|src|file)\s*[=:]\s*['"]([^'"]+\.m3u8[^'"]*)['"]/i,
    /"file"\s*:\s*"([^"]+\.m3u8[^"]*)"/i,
    /https?:\/\/[^\s'"<>]+\.m3u8[^\s'"<>]*/i,
    /source\s+src=["']([^"']+\.m3u8[^"']*)["']/i,
    /<video[^>]+src=["']([^"']+\.m3u8[^"']*)["']/i
  ];

  for (var p = 0; p < patterns.length; p++) {
    var match = html.match(patterns[p]);
    if (match) {
      hlsUrl = match[1] || match[0];
      console.log("[rou] 找到 m3u8: " + hlsUrl);
      break;
    }
  }

  if (!hlsUrl) {
    console.warn("[rou] 未找到 m3u8 地址，可能需要 WebView");
    throw new Error("无法获取视频流地址，可能需要 WebView 解析");
  }

  var item = {
    id: link,
    type: "detail",
    videoUrl: hlsUrl,
    mediaType: "movie",
    customHeaders: {
      "Referer": link,
      "User-Agent": getHeaders()["User-Agent"]
    }
  };

  // 尝试解析相关推荐
  try {
    var sections = parseHtml(html);
    var related = [];
    for (var i = 0; i < sections.length; i++) {
      var arr = sections[i].childItems;
      for (var j = 0; j < arr.length; j++) {
        related.push(arr[j]);
      }
    }
    if (related.length > 0) {
      item.childItems = related;
      console.log("[rou] 相关推荐数量: " + related.length);
    }
  } catch (e) {
    console.log("[rou] 相关推荐解析失败: " + e.message);
  }

  return item;
}
