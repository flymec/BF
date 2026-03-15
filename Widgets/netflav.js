WidgetMetadata = {
  id: "netflav",
  title: "Netflav",
  description: "获取 Netflav 视频元数据，支持搜索和分类浏览（无播放源，仅元数据）",
  author: "nibiru",
  site: "https://github.com/quantumultxx/FW-Widgets",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    // 搜索模块
    {
      title: "搜索",
      description: "按关键词搜索影片",
      requiresWebView: false,
      functionName: "search",
      cacheDuration: 3600,
      params: [
        {
          name: "keyword",
          title: "关键词",
          type: "input",
          description: "标题或番号",
        },
        {
          name: "type",
          title: "搜索类型",
          type: "enumeration",
          description: "选择按标题或番号搜索",
          enumOptions: [
            { title: "标题", value: "title" },
            { title: "番号", value: "code" },
          ],
          value: "title",
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 最新影片（主页）
    {
      title: "最新",
      description: "最新上架影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://netflav.com/",
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 有码影片
    {
      title: "有码",
      description: "有码影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://netflav.com/censored",
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 无码影片
    {
      title: "无码",
      description: "无码影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://netflav.com/uncensored",
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 中文字幕影片
    {
      title: "中文字幕",
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
          value: "https://netflav.com/chinese-sub",
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 热门影片
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
          value: "https://netflav.com/trending",
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 全部影片
    {
      title: "全部",
      description: "全部影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://netflav.com/all",
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
  ],
};

/**
 * 搜索函数
 * @param {Object} params 包含 keyword, type, from 等参数
 * @returns {Promise<Array>} 视频列表（每个项类型为 url）
 */
async function search(params = {}) {
  const keyword = encodeURIComponent(params.keyword || "");
  const type = params.type || "title";
  const from = params.from || 1;
  // 构造搜索 URL，假设分页参数为 page
  const url = `https://netflav.com/search?type=${type}&keyword=${keyword}&page=${from}`;
  return await loadPage({ url });
}

/**
 * 加载页面函数
 * @param {Object} params 包含 url, from 等参数
 * @returns {Promise<Array>} 视频列表
 */
async function loadPage(params = {}) {
  const sections = await loadPageSections(params);
  // 将所有视频项合并为一个列表
  return sections.flatMap((section) => section.childItems);
}

/**
 * 加载页面并解析为区块
 * @param {Object} params 包含 url, from 等参数
 * @returns {Promise<Array>} 区块数组，每个区块有 title 和 childItems
 */
async function loadPageSections(params = {}) {
  try {
    let url = params.url;
    if (!url) {
      throw new Error("地址不能为空");
    }
    // 添加分页参数（如果提供了 from）
    if (params.from && params.from > 1) {
      const separator = url.includes('?') ? '&' : '?';
      url += `${separator}page=${params.from}`;
    }
    const response = await Widget.http.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    if (!response || !response.data || typeof response.data !== "string") {
      throw new Error("无法获取有效的HTML内容");
    }

    return parseHtml(response.data);
  } catch (error) {
    console.error("加载页面出错:", error.message);
    throw error;
  }
}

/**
 * 解析 HTML 提取视频信息
 * @param {string} htmlContent HTML 字符串
 * @returns {Array} 区块数组
 */
function parseHtml(htmlContent) {
  const $ = Widget.html.load(htmlContent);
  // Netflav 首页和列表页的视频项容器
  const itemSelector = ".grid_0_cell";
  const coverSelector = "a:first-child img";
  const titleSelector = ".grid_0_title";
  const dateSelector = ".grid_0_date";
  const linkSelector = "a[href^='/video?id=']";

  let items = [];
  const itemElements = $(itemSelector).toArray();

  for (const itemElement of itemElements) {
    const $itemElement = $(itemElement);
    const linkElement = $itemElement.find(linkSelector).first();
    const relativeLink = linkElement.attr("href");
    if (!relativeLink) continue;

    const fullLink = `https://netflav.com${relativeLink}`;
    const title = $itemElement.find(titleSelector).text().trim();
    const date = $itemElement.find(dateSelector).text().trim();
    const coverElement = $itemElement.find(coverSelector).first();
    const cover = coverElement.attr("data-src") || coverElement.attr("src") || "";

    // 构建视频项，type 为 "url" 表示直接打开链接（无视频源）
    const item = {
      id: relativeLink,
      type: "url", // 点击后用浏览器打开
      title: title,
      backdropPath: cover,
      link: fullLink,
      mediaType: "movie",
      description: date, // 使用发布日期作为描述
    };
    items.push(item);
  }

  // 将整个页面作为一个区块返回
  return [{
    title: "视频列表",
    childItems: items,
  }];
}

/**
 * 加载详情页，返回推荐视频列表（无视频源）
 * @param {string} link 详情页 URL
 * @returns {Promise<Object>} 详情对象，包含推荐视频
 */
async function loadDetail(link) {
  const response = await Widget.http.get(link, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
  });

  // 解析详情页，获取推荐视频（如果有）
  const sections = parseHtml(response.data);
  const recommendations = sections.flatMap((section) => section.childItems);

  // 返回一个详情对象，无视频源，但可包含推荐列表
  const detailItem = {
    id: link,
    type: "detail", // 仅用于展示推荐，不提供播放
    mediaType: "movie",
    title: "详情页", // 可选，实际可从页面解析标题
    childItems: recommendations, // 推荐视频列表
  };
  return detailItem;
}
