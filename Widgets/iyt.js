var WidgetMetadata = {
  id: "com.iqiyi.hotlist",
  title: "爱奇艺热门推荐",
  description: "基于爱奇艺热搜榜的各分类热门视频",
  author: "YourName",
  site: "https://www.iqiyi.com",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      title: "🔥 热搜榜",
      description: "爱奇艺热搜榜热门视频",
      requiresWebView: false,
      functionName: "loadHotList",
      cacheDuration: 3600,
      params: [
        {
          name: "category",
          title: "分类",
          type: "constant",
          value: "热搜", // 对应 hotList 中的分类标题
        }
      ]
    },
    {
      title: "📺 热门电视剧",
      description: "爱奇艺热门电视剧",
      requiresWebView: false,
      functionName: "loadHotList",
      cacheDuration: 3600,
      params: [
        {
          name: "category",
          title: "分类",
          type: "constant",
          value: "电视剧",
        }
      ]
    },
    {
      title: "🎬 热门电影",
      description: "爱奇艺热门电影",
      requiresWebView: false,
      functionName: "loadHotList",
      cacheDuration: 3600,
      params: [
        {
          name: "category",
          title: "分类",
          type: "constant",
          value: "电影",
        }
      ]
    },
    {
      title: "🎤 热门综艺",
      description: "爱奇艺热门综艺",
      requiresWebView: false,
      functionName: "loadHotList",
      cacheDuration: 3600,
      params: [
        {
          name: "category",
          title: "分类",
          type: "constant",
          value: "综艺",
        }
      ]
    },
    {
      title: "📱 热门短剧",
      description: "爱奇艺热门短剧",
      requiresWebView: false,
      functionName: "loadHotList",
      cacheDuration: 3600,
      params: [
        {
          name: "category",
          title: "分类",
          type: "constant",
          value: "短剧",
        }
      ]
    },
    {
      title: "🆓 热门免费",
      description: "爱奇艺热门免费视频",
      requiresWebView: false,
      functionName: "loadHotList",
      cacheDuration: 3600,
      params: [
        {
          name: "category",
          title: "分类",
          type: "constant",
          value: "免费",
        }
      ]
    }
  ]
};

const IQIYI_LOG_PREFIX = "Widget: iQiyi HotList -";
const IQIYI_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

// hotList 接口地址（您已验证有效的）
const HOTLIST_API = "https://mesh.if.iqiyi.com/portal/lw/search/keywords/hotList?device_id=b4355997ee51ca6f8963fc194f7cb9c3&v=17.033.24824&appMode=&src=";

// 从 playUrl 中提取 albumid
function extractAlbumId(playUrl) {
  if (!playUrl) return null;
  const match = playUrl.match(/albumid=(\d+)/);
  return match ? match[1] : null;
}

// 构建详情页链接（优先使用 albumid，其次使用 docId）
function buildDetailLink(item) {
  const albumId = extractAlbumId(item.playUrl);
  if (albumId) {
    return `https://www.iqiyi.com/a_${albumId}.html`;
  }
  if (item.docId) {
    return `https://www.iqiyi.com/play?docId=${item.docId}`;
  }
  // 最后备选：使用 qipuId 构造（不一定有效）
  if (item.qipuId) {
    return `https://www.iqiyi.com/lib/${item.qipuId}.html`;
  }
  return null;
}

// 解析单个视频项为标准格式
function parseVideoItem(item, categoryName) {
  if (!item || !item.title) return null;

  const link = buildDetailLink(item);
  if (!link) {
    console.log(`${IQIYI_LOG_PREFIX} 无法构建链接: ${item.title}`);
    return null;
  }

  // 处理封面图（确保完整https）
  let imgSrc = item.image || '';
  if (imgSrc && !imgSrc.startsWith('http')) {
    imgSrc = 'https:' + imgSrc;
  }

  // 构建描述信息
  let description = item.tag || '';
  if (item.metaTags && Array.isArray(item.metaTags)) {
    const tags = item.metaTags.map(t => t.name).filter(Boolean).join(' · ');
    if (tags) description = description ? `${description} | ${tags}` : tags;
  }

  return {
    id: `${categoryName}_${item.qipuId || item.docId || Date.now()}`,
    type: "url",
    title: item.title,
    imgSrc: imgSrc,
    backdropPath: imgSrc,
    link: link,                 // 详情页链接
    description: description || `爱奇艺热门${categoryName}`,
    mediaType: "movie",
  };
}

// 核心函数：加载 hotList 并过滤指定分类
async function loadHotList(params) {
  const targetCategory = params.category || "热搜";  // 默认热搜

  try {
    const response = await Widget.http.get(HOTLIST_API, {
      headers: {
        "User-Agent": IQIYI_USER_AGENT,
        "Referer": "https://www.iqiyi.com/",
      }
    });

    if (!response?.data) {
      throw new Error("无法获取 hotList 数据");
    }

    let data = response.data;
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }

    // 在 data.hotQuery 数组中查找指定分类
    const categories = data.hotQuery || [];
    const target = categories.find(cat => cat.title === targetCategory);

    if (!target || !Array.isArray(target.items)) {
      console.warn(`${IQIYI_LOG_PREFIX} 未找到分类 "${targetCategory}" 或该分类下无数据`);
      return [];
    }

    // 解析该分类下的所有视频项
    const items = target.items
      .map(item => parseVideoItem(item, targetCategory))
      .filter(item => item !== null);

    return items;
  } catch (error) {
    console.error(`${IQIYI_LOG_PREFIX} 加载失败: ${error.message}`);
    throw error;
  }
}

// 详情函数：返回视频播放地址（因爱奇艺播放地址复杂，此处返回详情页链接，让外部播放器尝试）
async function loadDetail(link) {
  // 由于无法直接获取真实视频流，我们返回详情页链接。
  // 某些播放器可能支持加载网页，但通常无法直接播放。
  // 您可以尝试在此处实现更复杂的播放地址解析，但需要额外的抓包工作。
  return {
    id: link,
    type: "url",
    videoUrl: link,  // 将详情页链接作为视频地址返回，期望外部播放器能够处理（可能失败）
    customHeaders: {
      "User-Agent": IQIYI_USER_AGENT,
      "Referer": "https://www.iqiyi.com/",
    }
  };
}

// 为了兼容旧版调用方式，保留 search 函数（此处简单返回空）
async function search(params) {
  console.warn(`${IQIYI_LOG_PREFIX} 搜索功能暂未实现`);
  return [];
}
