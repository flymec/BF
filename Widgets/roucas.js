WidgetMetadata = {
  id: "rou",
  title: "肉視頻",
  description: "獲取 rou.video 視頻",
  author: "alex",
  site: "https://rou.video",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    // 最新模块
    {
      title: "最新",
      description: "最新視頻",
      requiresWebView: false,
      functionName: "loadPage",
      sectionMode: false,
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://rou.video/home",
        },
        {
          name: "from",
          title: "頁碼",
          type: "page",
          description: "頁碼",
          value: "1",
        },
      ],
    },
    // 國產AV模块
    {
      title: "國產AV",
      description: "按廠商分類瀏覽國產AV",
      requiresWebView: false,
      functionName: "loadPage",
      sectionMode: false,
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "選擇廠商",
          type: "enumeration",
          description: "選擇廠商",
          value: "https://rou.video/t/糖心Vlog",
          enumOptions: [
            { title: "糖心Vlog", value: "https://rou.video/t/糖心Vlog" },
            { title: "蜜桃影像傳媒", value: "https://rou.video/t/蜜桃影像傳媒" },
            { title: "香蕉視頻傳媒", value: "https://rou.video/t/香蕉視頻傳媒" },
            { title: "星空無限傳媒", value: "https://rou.video/t/星空無限傳媒" },
            { title: "天美傳媒", value: "https://rou.video/t/天美傳媒" },
            { title: "精東影業", value: "https://rou.video/t/精東影業" },
            { title: "91製片廠", value: "https://rou.video/t/91製片廠" },
            { title: "杏吧傳媒", value: "https://rou.video/t/杏吧傳媒" },
            { title: "皇家華人", value: "https://rou.video/t/皇家華人" },
            { title: "起點傳媒", value: "https://rou.video/t/起點傳媒" },
            { title: "大象傳媒", value: "https://rou.video/t/大象傳媒" },
            { title: "果凍傳媒", value: "https://rou.video/t/果凍傳媒" },
            { title: "蘿莉社", value: "https://rou.video/t/蘿莉社" },
            { title: "兔子先生", value: "https://rou.video/t/兔子先生" },
            { title: "扣扣傳媒", value: "https://rou.video/t/扣扣傳媒" },
            { title: "SA國際傳媒", value: "https://rou.video/t/SA國際傳媒" },
            { title: "愛神傳媒", value: "https://rou.video/t/愛神傳媒" },
            { title: "性視界傳媒", value: "https://rou.video/t/性視界傳媒" },
            { title: "抖陰", value: "https://rou.video/t/抖陰" },
            { title: "絕對領域傳媒", value: "https://rou.video/t/絕對領域傳媒" },
            { title: "烏托邦傳媒", value: "https://rou.video/t/烏托邦傳媒" },
            { title: "草莓視頻", value: "https://rou.video/t/草莓視頻" },
            { title: "渡邊傳媒", value: "https://rou.video/t/渡邊傳媒" },
            { title: "樂播傳媒", value: "https://rou.video/t/樂播傳媒" },
            { title: "葫蘆影業", value: "https://rou.video/t/葫蘆影業" },
          ],
        },
        {
          name: "from",
          title: "頁碼",
          type: "page",
          description: "頁碼",
          value: "1",
        },
      ],
    },
    // 麻豆傳媒模块
    {
      title: "麻豆",
      description: "按系列分類瀏覽麻豆傳媒",
      requiresWebView: false,
      functionName: "loadPage",
      sectionMode: false,
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "選擇系列",
          type: "enumeration",
          description: "選擇系列",
          value: "https://rou.video/t/麻豆傳媒",
          enumOptions: [
            { title: "麻豆傳媒（全部）", value: "https://rou.video/t/麻豆傳媒" },
            { title: "愛豆傳媒", value: "https://rou.video/t/愛豆傳媒" },
            { title: "MD", value: "https://rou.video/t/MD" },
            { title: "MDX", value: "https://rou.video/t/MDX" },
            { title: "麻豆US", value: "https://rou.video/t/麻豆US" },
            { title: "MSD", value: "https://rou.video/t/MSD" },
            { title: "MCY", value: "https://rou.video/t/MCY" },
            { title: "MKY", value: "https://rou.video/t/MKY" },
            { title: "MPG", value: "https://rou.video/t/MPG" },
            { title: "FLIXKO", value: "https://rou.video/t/FLIXKO" },
            { title: "貓爪影像", value: "https://rou.video/t/貓爪影像" },
            { title: "麻豆女神微愛視頻", value: "https://rou.video/t/麻豆女神微愛視頻" },
            { title: "麻豆番外", value: "https://rou.video/t/麻豆番外" },
            { title: "麻豆導演系列", value: "https://rou.video/t/麻豆導演系列" },
            { title: "情趣K歌房", value: "https://rou.video/t/情趣K歌房" },
            { title: "突襲女優家", value: "https://rou.video/t/突襲女優家" },
            { title: "國產麻豆AV節目", value: "https://rou.video/t/國產麻豆AV節目" },
          ],
        },
        {
          name: "from",
          title: "頁碼",
          type: "page",
          description: "頁碼",
          value: "1",
        },
      ],
    },
    // 探花模块
    {
      title: "探花",
      description: "按系列分類瀏覽探花",
      requiresWebView: false,
      functionName: "loadPage",
      sectionMode: false,
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "選擇系列",
          type: "enumeration",
          description: "選擇系列",
          value: "https://rou.video/t/探花",
          enumOptions: [
            { title: "探花（全部）", value: "https://rou.video/t/探花" },
            { title: "91沈先生", value: "https://rou.video/t/91沈先生" },
            { title: "探花精選400", value: "https://rou.video/t/探花精選400" },
            { title: "小寶尋花", value: "https://rou.video/t/小寶尋花" },
            { title: "91lisa", value: "https://rou.video/t/91lisa" },
            { title: "午夜尋花", value: "https://rou.video/t/午夜尋花" },
            { title: "91鳳鳴鳥唱", value: "https://rou.video/t/91鳳鳴鳥唱" },
            { title: "大神精選", value: "https://rou.video/t/大神精選" },
            { title: "91貓先生", value: "https://rou.video/t/91貓先生" },
            { title: "千人斬探花", value: "https://rou.video/t/千人斬探花" },
            { title: "全國探花", value: "https://rou.video/t/全國探花" },
            { title: "七天探花", value: "https://rou.video/t/七天探花" },
            { title: "9總全國探花", value: "https://rou.video/t/9總全國探花" },
            { title: "鴨哥探花", value: "https://rou.video/t/鴨哥探花" },
            { title: "錘子探花", value: "https://rou.video/t/錘子探花" },
            { title: "探花合集", value: "https://rou.video/t/探花合集" },
            { title: "李尋歡", value: "https://rou.video/t/李尋歡" },
            { title: "韋小寶", value: "https://rou.video/t/韋小寶" },
            { title: "換妻探花", value: "https://rou.video/t/換妻探花" },
            { title: "行吧傳媒", value: "https://rou.video/t/行吧傳媒" },
          ],
        },
        {
          name: "from",
          title: "頁碼",
          type: "page",
          description: "頁碼",
          value: "1",
        },
      ],
    },
    // 自拍流出模块
    {
      title: "自拍流出",
      description: "自拍流出視頻",
      requiresWebView: false,
      functionName: "loadPage",
      sectionMode: false,
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://rou.video/t/自拍流出",
        },
        {
          name: "from",
          title: "頁碼",
          type: "page",
          description: "頁碼",
          value: "1",
        },
      ],
    },
    // OnlyFans模块
    {
      title: "OnlyFans",
      description: "按博主分類瀏覽OnlyFans視頻",
      requiresWebView: false,
      functionName: "loadPage",
      sectionMode: false,
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "選擇博主",
          type: "enumeration",
          description: "選擇博主",
          value: "https://rou.video/t/OnlyFans",
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
            { title: "fansone", value: "https://rou.video/t/fansone" },
          ],
        },
        {
          name: "from",
          title: "頁碼",
          type: "page",
          description: "頁碼",
          value: "1",
        },
      ],
    },
    // 日本模块
    {
      title: "日本",
      description: "日本視頻",
      requiresWebView: false,
      functionName: "loadPage",
      sectionMode: false,
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://rou.video/t/日本",
        },
        {
          name: "from",
          title: "頁碼",
          type: "page",
          description: "頁碼",
          value: "1",
        },
      ],
    },
  ],
  search: {
    title: "搜索",
    functionName: "search",
    params: [
      {
        name: "keyword",
        title: "關鍵詞",
        type: "input",
        description: "關鍵詞",
      },
      {
        name: "from",
        title: "頁碼",
        type: "page",
        description: "頁碼",
        value: "1",
      },
    ],
  },
};


async function search(params) {
  params = params || {};
  var keyword = encodeURIComponent(params.keyword || "");
  var url = "https://rou.video/search?q=" + keyword;
  return await loadPage({ url: url, from: params.from });
}

async function loadPage(params) {
  params = params || {};
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

async function loadPageSections(params) {
  params = params || {};
  try {
    var url = params.url;
    if (!url) {
      throw new Error("地址不能為空");
    }

    // 翻页: ?order=createdAt&page=N
    var page = params.from;
    if (page && page !== "1") {
      var sep = url.indexOf("?") >= 0 ? "&" : "?";
      url += sep + "order=createdAt&page=" + page;
    }

    var response = await Widget.http.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "zh-TW,zh;q=0.9,en;q=0.8",
        "Referer": "https://rou.video/",
      },
    });

    if (!response || !response.data || typeof response.data !== "string") {
      throw new Error("無法獲取有效的HTML內容");
    }

    return parseHtml(response.data);
  } catch (error) {
    console.error("加載出錯:", error.message);
    throw error;
  }
}

function parseHtml(htmlContent) {
  var $ = Widget.html.load(htmlContent);
  var items = [];

  // 每个视频卡片: <a href="/v/xxx">...</a>
  var linkElements = $("a[href^='/v/']").toArray();

  for (var i = 0; i < linkElements.length; i++) {
    var $a = $(linkElements[i]);
    var href = $a.attr("href") || "";
    if (!href || href.indexOf("/v/") !== 0) {
      continue;
    }

    var link = "https://rou.video" + href;

    // 封面: img 的 src，通常是第一张图
    var $img = $a.find("img").first();
    var cover = $img.attr("src") || $img.attr("data-src") || "";

    // 标题: img 的 alt 属性即标题
    var title = $img.attr("alt") || "";
    if (!title) {
      title = $a.text().trim();
    }

    // 时长: a 标签内文本中匹配时间格式
    var aText = $a.text() || "";
    var durationMatch = aText.match(/(\d+小時\d+分\d+秒|\d+小時\d+分|\d+分\d+秒|\d+分|\d+秒)/);
    var duration = durationMatch ? durationMatch[0] : "";

    if (link && title) {
      items.push({
        id: link,
        type: "url",
        title: title,
        backdropPath: cover,
        link: link,
        mediaType: "movie",
        durationText: duration,
        description: duration,
      });
    }
  }

  if (items.length > 0) {
    return [{ title: "", childItems: items }];
  }
  return [];
}

async function loadDetail(link) {
  const headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": "https://rou.video/",
  };

  // 1. 获取详情页 HTML
  const response = await Widget.http.get(link, { headers });
  const html = response.data;

  // 2. 提取 __NEXT_DATA__ 中的视频信息
  const nextDataMatch = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (!nextDataMatch) throw new Error("无法解析页面数据");
  const nextData = JSON.parse(nextDataMatch[1]);
  const video = nextData.props?.pageProps?.video;
  if (!video) throw new Error("未找到视频信息");

  // 3. 获取视频源信息（分辨率、folder）
  const sources = video.sources || [];
  if (sources.length === 0) throw new Error("没有可用源");
  const bestSource = sources[sources.length - 1];
  const folder = bestSource.folder || `${video.id}-${bestSource.resolution}`;

  // 4. 从封面图 URL 提取 CDN 域名和完整的查询参数（签名）
  const coverUrl = video.coverImageUrl;
  const domainMatch = coverUrl.match(/https?:\/\/([^\/]+)/);
  const cdnDomain = domainMatch ? domainMatch[1] : "v.rn246.xyz";
  const queryMatch = coverUrl.match(/\?(.+)$/);
  const queryString = queryMatch ? "?" + queryMatch[1] : "";

  // 5. 构造 TS 片段的基础 URL（不含签名参数）
  const tsBase = `https://${cdnDomain}/hls/${folder}/${folder}-${bestSource.resolution}/CLS-`;

  // 6. 根据时长估算 TS 片段数量（每个片段约 8 秒，适当增加 2 个以防不足）
  const duration = video.duration || 600;
  const segments = Math.ceil(duration / 8) + 2;

  // 7. 生成虚拟 m3u8 内容（EXT-X-BYTERANGE 不需要，直接完整 TS）
  let m3u8Content = "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-TARGETDURATION:10\n#EXT-X-MEDIA-SEQUENCE:0\n";
  for (let i = 0; i < segments; i++) {
    const seq = i.toString().padStart(3, '0');
    m3u8Content += `#EXTINF:10.0,\n${tsBase}${seq}.ts${queryString}\n`;
  }
  m3u8Content += "#EXT-X-ENDLIST";

  // 8. 转为 base64 data URI（播放器可直接识别）
  const dataUri = "data:application/vnd.apple.mpegurl;base64," + btoa(unescape(encodeURIComponent(m3u8Content)));

  // 9. 构造返回对象
  const item = {
    id: link,
    type: "detail",
    videoUrl: dataUri,
    mediaType: "movie",
    customHeaders: {
      "Referer": link,
      "Origin": "https://rou.video",
      "User-Agent": headers["User-Agent"]
    },
  };

  // 10. 添加相关推荐（如果有 parseHtml 函数）
  try {
    const sections = parseHtml(html);
    const related = sections.flatMap(s => s.childItems);
    if (related.length) item.childItems = related;
  } catch (e) {}

  return item;
}
