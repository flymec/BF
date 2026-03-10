WidgetMetadata = {
  id: "jable",
  title: "Jable",
  description: "获取 Jable 视频",
  author: "nibiru",
  site: "https://github.com/quantumultxx/FW-Widgets",
  version: "1.0.9",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    // 搜索模块
    {
      title: "搜索",
      description: "搜索",
      requiresWebView: false,
      functionName: "search",
      cacheDuration: 3600,
      params: [
        { name: "keyword", title: "关键词", type: "input", description: "关键词" },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "最多观看", value: "video_viewed" },
            { title: "近期最佳", value: "post_date_and_popularity" },
            { title: "最近更新", value: "post_date" },
            { title: "最多收藏", value: "most_favourited" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 热门模块
    {
      title: "热门",
      description: "热门影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://jable.tv/hot/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "今日热门", value: "video_viewed_today" },
            { title: "本周热门", value: "video_viewed_week" },
            { title: "本月热门", value: "video_viewed_month" },
            { title: "所有时间", value: "video_viewed" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 最新模块
    {
      title: "最新",
      description: "最新上市影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://jable.tv/new-release/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "最新发布", value: "latest-updates" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 中文模块
    {
      title: "中文",
      description: "中文字幕影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://jable.tv/categories/chinese-subtitle/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "最近更新", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 女优模块
    {
      title: "女优",
      description: "按女优分类浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "选择女优",
          type: "enumeration",
          belongTo: { paramName: "sort_by", value: ["post_date","video_viewed","most_favourited"] },
          enumOptions: [
            { title: "三上悠亚", value: "https://jable.tv/s1/models/yua-mikami/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "楪可怜", value: "https://jable.tv/models/86b2f23f95cc485af79fe847c5b9de8d/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            // ... 其他女优
          ],
          value: "https://jable.tv/s1/models/yua-mikami/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "最近更新", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 衣着、剧情、地点等模块类似（保持原样，此处省略以节省空间）
    // ...
  ],
}
// ==/WidgetMetadata==

// 辅助函数：安全提取文本
function safeText($element, selector) {
  const el = $element.find(selector).first();
  return el ? el.text().trim() : '';
}

// 辅助函数：安全提取属性
function safeAttr($element, selector, attr) {
  const el = $element.find(selector).first();
  return el ? el.attr(attr) : '';
}

async function search(params = {}) {
  const keyword = encodeURIComponent(params.keyword || "");
  let url = `https://jable.tv/search/${keyword}/?mode=async&function=get_block&block_id=list_videos_videos_list_search_result&q=${keyword}`;
  if (params.sort_by) url += `&sort_by=${params.sort_by}`;
  if (params.from) url += `&from=${params.from}`;
  return await loadPage({ ...params, url });
}

async function loadPage(params = {}) {
  const sections = await loadPageSections(params);
  return sections.flatMap(section => section.childItems || []);
}

async function loadPageSections(params = {}) {
  try {
    let url = params.url;
    if (!url) throw new Error("地址不能为空");
    if (params.sort_by) url += `&sort_by=${params.sort_by}`;
    if (params.from) url += `&from=${params.from}`;

    const response = await Widget.http.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Referer": "https://jable.tv/",
      },
    });

    if (!response?.data || typeof response.data !== "string") {
      throw new Error("无法获取有效的HTML内容");
    }

    return parseHtml(response.data);
  } catch (error) {
    console.error("加载页面失败:", error.message);
    throw error;
  }
}

function parseHtml(htmlContent) {
  const $ = Widget.html.load(htmlContent);
  const sections = [];

  // 更精确的区块选择器：匹配视频列表容器
  const sectionSelector = ".site-content .video-lists > .py-3, .site-content .pb-e-lg-40";
  $(sectionSelector).each((index, sectionElement) => {
    const $section = $(sectionElement);
    const sectionTitle = $section.find(".title-box .h3-md").first().text().trim();
    const items = [];

    $section.find(".video-img-box").each((i, itemElement) => {
      const $item = $(itemElement);
      const linkEl = $item.find(".title a").first();
      const url = linkEl.attr('href') || '';

      // 只处理有效链接
      if (url && url.includes('jable.tv')) {
        try {
          const coverEl = $item.find("img").first();
          const cover = coverEl.attr('data-src') || coverEl.attr('src') || '';
          const preview = coverEl.attr('data-preview') || '';
          const title = linkEl.text().trim();
          const duration = safeText($item, ".absolute-bottom-right .label");

          items.push({
            id: url,
            type: "url",
            title: title,
            backdropPath: cover,
            previewUrl: preview,
            link: url,
            mediaType: "movie",
            durationText: duration,
            description: duration,
          });
        } catch (itemError) {
          console.warn("解析单个视频项失败:", itemError);
        }
      }
    });

    if (items.length > 0) {
      sections.push({
        title: sectionTitle,
        childItems: items,
      });
    }
  });

  return sections;
}

async function loadDetail(link) {
  try {
    const response = await Widget.http.get(link, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "https://jable.tv/",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      },
    });

    const html = response.data;
    // 尝试多种方式提取视频URL
    let hlsUrl = null;

    // 方法1: 正则提取 var hlsUrl = '...';
    const hlsMatch = html.match(/var\s+hlsUrl\s*=\s*['"]([^'"]+)['"]/);
    if (hlsMatch) hlsUrl = hlsMatch[1];

    // 方法2: 查找 video 标签的 src
    if (!hlsUrl) {
      const videoSrcMatch = html.match(/<video[^>]+src=["']([^"']+\.m3u8[^"']*)["']/i);
      if (videoSrcMatch) hlsUrl = videoSrcMatch[1];
    }

    // 方法3: 查找包含 .m3u8 的 JavaScript 变量
    if (!hlsUrl) {
      const m3u8Match = html.match(/(?:https?:)?\/\/[^'"\s]+\.m3u8[^'"\s]*/);
      if (m3u8Match) hlsUrl = m3u8Match[0];
    }

    if (!hlsUrl) {
      throw new Error("无法获取有效的HLS视频URL");
    }

    // 构建详情项
    const item = {
      id: link,
      type: "detail",
      videoUrl: hlsUrl,
      mediaType: "movie",
      customHeaders: {
        "Referer": link,
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    };

    // 尝试提取推荐视频
    const sections = parseHtml(html);
    if (sections.length > 0) {
      item.childItems = sections.flatMap(s => s.childItems || []);
    }

    return item;
  } catch (error) {
    console.error("加载详情失败:", error.message);
    throw error;
  }
}
