var WidgetMetadata = {
  id: "com.iqiyi.widget",
  title: "爱奇艺 iQIYI",
  description: "浏览爱奇艺热门剧集、电影、综艺等（API版）",
  author: "YourName",
  site: "https://www.iqiyi.com",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    // 搜索模块（需要抓包确定搜索接口）
    {
      title: "搜索爱奇艺",
      description: "搜索剧集、电影、综艺等内容",
      requiresWebView: false,
      functionName: "search",
      cacheDuration: 3600,
      params: [
        { name: "keyword", title: "输入关键词…", type: "input", value: "", description: "剧名、演员、导演等" },
        { name: "page", title: "页码", type: "page", description: "搜索结果页码" }
      ]
    },
    // 电视剧模块（以下 URL 为示例，实际应替换为对应的 API）
    {
      title: "电视剧",
      description: "浏览热门电视剧",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "apiUrl",
          title: "API地址",
          type: "constant",
          value: "https://www.iqiyi.com/prelw/portal/lw/v7/channel/tv", // 推测地址
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上线", value: "new" },
            { title: "最热播放", value: "hot" }
          ],
          value: "hot",
          description: "选择视频排序方式"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 电影模块
    {
      title: "电影",
      description: "浏览最新电影",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "apiUrl",
          title: "API地址",
          type: "constant",
          value: "https://www.iqiyi.com/prelw/portal/lw/v7/channel/movie", // 推测
        },
        { name: "sort_by", title: "排序方式", type: "enumeration", enumOptions: [ { title: "最新上线", value: "new" }, { title: "最热播放", value: "hot" } ], value: "hot" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    // 综艺模块
    {
      title: "综艺",
      description: "浏览热门综艺",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "apiUrl", title: "API地址", type: "constant", value: "https://www.iqiyi.com/prelw/portal/lw/v7/channel/variety" },
        { name: "sort_by", title: "排序方式", type: "enumeration", enumOptions: [ { title: "最新上线", value: "new" }, { title: "最热播放", value: "hot" } ], value: "hot" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    // 动漫模块
    {
      title: "动漫",
      description: "浏览热门动漫",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "apiUrl", title: "API地址", type: "constant", value: "https://www.iqiyi.com/prelw/portal/lw/v7/channel/cartoon" },
        { name: "sort_by", title: "排序方式", type: "enumeration", enumOptions: [ { title: "最新上线", value: "new" }, { title: "最热播放", value: "hot" } ], value: "hot" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    // 短剧模块（需确认实际频道）
    {
      title: "短剧",
      description: "浏览热门短剧",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "apiUrl", title: "API地址", type: "constant", value: "https://www.iqiyi.com/prelw/portal/lw/v7/channel/shortplay" },
        { name: "sort_by", title: "排序方式", type: "enumeration", enumOptions: [ { title: "最新上线", value: "new" }, { title: "最热播放", value: "hot" } ], value: "hot" },
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ]
};

const IQIYI_LOG_PREFIX = "Widget: iQiyi API -";
const IQIYI_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

// ---------- 辅助函数：构建API请求参数 ----------
function buildApiUrl(baseApiUrl, sortBy, page) {
  // 根据实际抓包结果调整参数名
  const params = new URLSearchParams({
    lwaFastKey: baseApiUrl.includes('tv') ? 'Page_tv_1' : 'Page_recommend_1', // 需动态生成或从base中提取
    page: page,
    sort: sortBy === 'hot' ? 'hot' : 'new',
    v: '17.033.24824' // 版本号可能变化，最好从原页面提取或忽略
  });
  return `${baseApiUrl}?${params.toString()}`;
}

// ---------- 核心函数：加载列表（基于API）----------
async function loadPage(params = {}) {
  const apiUrl = params.apiUrl;      // 传入的是API基地址
  const sortBy = params.sort_by || "hot";
  const page = parseInt(params.page, 10) || 1;

  const targetUrl = buildApiUrl(apiUrl, sortBy, page);

  try {
    const response = await Widget.http.get(targetUrl, {
      headers: {
        "User-Agent": IQIYI_USER_AGENT,
        "Referer": "https://www.iqiyi.com/",
      }
    });

    if (!response?.data) {
      throw new Error("无法获取API数据");
    }

    // 假设API返回JSON格式，以下字段需根据实际数据调整
    let data = response.data;
    // 如果返回的是JSONP或文本，可能需要解析
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        // 可能是JSONP，尝试提取
        const match = data.match(/\(({.+})\)/);
        if (match) data = JSON.parse(match[1]);
      }
    }

    // 假设数据在 data.list 或 data.data 中
    const list = data.list || data.data || data.videos || [];
    const items = list.map((item, index) => {
      // 根据实际返回字段映射
      let link = item.url || item.link || item.playUrl;
      if (link && !link.startsWith('http')) {
        link = 'https://www.iqiyi.com' + (link.startsWith('/') ? '' : '/') + link;
      }
      return {
        id: `${index}|${link}`,
        type: "url",
        title: item.title || item.name,
        imgSrc: item.image || item.pic || item.cover,
        backdropPath: item.image || item.pic,
        link: link,
        description: item.desc || item.subtitle || '',
        mediaType: "movie",
      };
    });

    return items;
  } catch (error) {
    console.error(`${IQIYI_LOG_PREFIX} 加载列表失败: ${error.message}`);
    throw error;
  }
}

// ---------- 搜索函数（需抓包确定搜索API）----------
async function search(params = {}) {
  const keyword = params.keyword || "";
  const page = parseInt(params.page, 10) || 1;

  if (!keyword) {
    throw new Error("请输入搜索关键词");
  }

  // 推测搜索API，需实际抓包确认
  const searchApi = "https://www.iqiyi.com/search/api/v1";
  const targetUrl = `${searchApi}?key=${encodeURIComponent(keyword)}&page=${page}`;

  try {
    const response = await Widget.http.get(targetUrl, {
      headers: {
        "User-Agent": IQIYI_USER_AGENT,
        "Referer": "https://www.iqiyi.com/",
      }
    });

    // 同样解析JSON，结构需适配
    let data = response.data;
    if (typeof data === 'string') data = JSON.parse(data);

    const list = data.list || data.data || data.items || [];
    const items = list.map((item, index) => {
      let link = item.url || item.link;
      if (link && !link.startsWith('http')) {
        link = 'https://www.iqiyi.com' + (link.startsWith('/') ? '' : '/') + link;
      }
      return {
        id: `${index}|${link}`,
        type: "url",
        title: item.title || item.name,
        imgSrc: item.image || item.pic,
        backdropPath: item.image || item.pic,
        link: link,
        description: `搜索: ${keyword}`,
        mediaType: "movie",
      };
    });

    return items;
  } catch (error) {
    console.error(`${IQIYI_LOG_PREFIX} 搜索失败: ${error.message}`);
    throw error;
  }
}

// ---------- 详情页：获取视频播放地址 ----------
async function loadDetail(link) {
  try {
    // 爱奇艺的视频播放地址通常需要从播放页解析或通过专用API获取
    // 这里提供两种思路：

    // 1. 直接请求播放页，从HTML中提取（但页面可能动态加载）
    const response = await Widget.http.get(link, {
      headers: {
        "User-Agent": IQIYI_USER_AGENT,
        "Referer": link,
      }
    });

    // 尝试从HTML中提取视频地址（可能性较低）
    const $ = Widget.html.load(response.data);
    // 常见模式：查找 video 标签或 data-player 属性
    let videoUrl = $('video').attr('src');
    if (videoUrl) {
      return {
        id: link,
        type: "url",
        videoUrl: videoUrl,
        customHeaders: { "Referer": link, "User-Agent": IQIYI_USER_AGENT }
      };
    }

    // 2. 或者调用专门的视频地址API（需要抓包）
    // 例如从播放页中找到类似 getVideoUrl 的接口
    // 这里仅为示例，实际需替换
    const videoApi = "https://www.iqiyi.com/player/api/getVideoUrl";
    const videoId = extractVideoId(link); // 需要实现从链接提取视频ID
    const apiResponse = await Widget.http.get(`${videoApi}?vid=${videoId}`, {
      headers: { "User-Agent": IQIYI_USER_AGENT, "Referer": link }
    });
    const apiData = typeof apiResponse.data === 'string' ? JSON.parse(apiResponse.data) : apiResponse.data;
    if (apiData && apiData.url) {
      return {
        id: link,
        type: "url",
        videoUrl: apiData.url,
        customHeaders: { "Referer": link, "User-Agent": IQIYI_USER_AGENT }
      };
    }

    throw new Error("未找到可播放的视频源");
  } catch (error) {
    console.error(`${IQIYI_LOG_PREFIX} 加载详情失败: ${error.message}`);
    throw error;
  }
}

// 辅助函数：从链接提取视频ID（根据实际URL格式实现）
function extractVideoId(link) {
  // 示例：https://www.iqiyi.com/v_19rrmh4xps.html  -> v_19rrmh4xps
  const match = link.match(/\/(v_[a-zA-Z0-9]+)\.html/);
  return match ? match[1] : '';
}
