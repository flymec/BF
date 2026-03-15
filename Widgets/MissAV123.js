WidgetMetadata = {
  id: "missav123",
  title: "MissAV123",
  description: "免费观看日本AV，JAV在线高清",
  author: "nibiru",
  site: "https://github.com/quantumultxx/FW-Widgets",
  version: "1.0.1",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    // 搜索模块
    {
      title: "搜索",
      description: "搜索影片",
      requiresWebView: false,
      functionName: "search",
      cacheDuration: 3600,
      params: [
        {
          name: "keyword",
          title: "关键词",
          type: "input",
          description: "输入搜索关键词",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序方式",
          enumOptions: [
            { title: "默认", value: "" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最近更新", value: "post_date" },
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
          description: "热门列表地址",
          value: "https://missav123.to/cn/hot",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序方式",
          enumOptions: [
            { title: "默认", value: "" },
            { title: "今日观看", value: "today_views" },
            { title: "每周观看", value: "weekly_views" },
            { title: "每月观看", value: "monthly_views" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 最新模块
    {
      title: "最新",
      description: "最新发布影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "最新列表地址",
          value: "https://missav123.to/cn/new",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序方式",
          enumOptions: [
            { title: "默认", value: "" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 最近添加模块
    {
      title: "最近",
      description: "最近添加影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "最近添加列表地址",
          value: "https://missav123.to/cn/recent",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序方式",
          enumOptions: [
            { title: "默认", value: "" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 无码泄露模块
    {
      title: "无码泄露",
      description: "无码泄露影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "无码泄露列表地址",
          value: "https://missav123.to/cn/uncensored-leaked",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序方式",
          enumOptions: [
            { title: "默认", value: "" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最近更新", value: "post_date" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 无码模块
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
          description: "无码列表地址",
          value: "https://missav123.to/cn/uncensored",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序方式",
          enumOptions: [
            { title: "默认", value: "" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最近更新", value: "post_date" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // VR模块
    {
      title: "VR",
      description: "VR影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "VR列表地址",
          value: "https://missav123.to/cn/vr",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序方式",
          enumOptions: [
            { title: "默认", value: "" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最近更新", value: "post_date" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 业余模块 (包含多个业余标签)
    {
      title: "业余",
      description: "按业余系列浏览",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "选择系列",
          type: "enumeration",
          enumOptions: [
            { title: "SIRO", value: "https://missav123.to/cn/tags/siro" },
            { title: "LUXU", value: "https://missav123.to/cn/tags/259luxu" },
            { title: "200GANA", value: "https://missav123.to/cn/tags/200gana" },
            { title: "PRESTIGE PREMIUM", value: "https://missav123.to/cn/tags/prestige-premium" },
            { title: "ORECO", value: "https://missav123.to/cn/tags/230oreco" },
            { title: "S-CUTE", value: "https://missav123.to/cn/makers/s-cute" },
            { title: "ARA", value: "https://missav123.to/cn/tags/261ara" },
            { title: "390JAC", value: "https://missav123.to/cn/tags/390jac" },
            { title: "328HMDN", value: "https://missav123.to/cn/tags/328hmdn" },
          ],
          value: "https://missav123.to/cn/tags/siro",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序方式",
          enumOptions: [
            { title: "默认", value: "" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最近更新", value: "post_date" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 制作商模块 (无码制作商)
    {
      title: "制作商",
      description: "按制作商浏览",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "选择制作商",
          type: "enumeration",
          enumOptions: [
            { title: "FC2", value: "https://missav123.to/cn/makers/fc2" },
            { title: "HEYZO", value: "https://missav123.to/cn/makers/heyzo" },
            { title: "1pondo", value: "https://missav123.to/cn/makers/1pondo" },
            { title: "Caribbeancom", value: "https://missav123.to/cn/makers/caribbeancom" },
            { title: "Caribbeancompr", value: "https://missav123.to/cn/makers/caribbeancompr" },
            { title: "10musume", value: "https://missav123.to/cn/makers/10musume" },
            { title: "Pacopacomama", value: "https://missav123.to/cn/makers/pacopacomama" },
            { title: "C0930", value: "https://missav123.to/cn/makers/c0930" },
            { title: "H0930", value: "https://missav123.to/cn/makers/h0930" },
            { title: "H4610", value: "https://missav123.to/cn/makers/h4610" },
            { title: "Tokyo Hot", value: "https://missav123.to/cn/makers/tokyo-hot" },
            { title: "XXX AV", value: "https://missav123.to/cn/makers/xxx-av" },
            { title: "GACHIG", value: "https://missav123.to/cn/makers/gachig" },
          ],
          value: "https://missav123.to/cn/makers/fc2",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序方式",
          enumOptions: [
            { title: "默认", value: "" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最近更新", value: "post_date" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 女演员模块 (热门女演员)
    {
      title: "女演员",
      description: "按女演员浏览",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "选择女演员",
          type: "enumeration",
          enumOptions: [
            { title: "Nagi Hikaru", value: "https://missav123.to/cn/actresses/76579c493f" },
            { title: "Miu Shiramine", value: "https://missav123.to/cn/actresses/12d09f9005" },
            { title: "Kaede Karen", value: "https://missav123.to/cn/actresses/9c116a88c4" },
            { title: "Yua Mikami", value: "https://missav123.to/cn/actresses/be7ec2d073" },
            { title: "Mina Kitano", value: "https://missav123.to/cn/actresses/4837eb040d" },
            { title: "三上悠亚", value: "https://missav123.to/cn/actresses/be7ec2d073" },
            { title: "枫可怜", value: "https://missav123.to/cn/actresses/9c116a88c4" },
            { title: "河北彩花", value: "https://missav123.to/cn/actresses?name=saika" }, // 示例，实际需替换
          ],
          value: "https://missav123.to/cn/actresses/76579c493f",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序方式",
          enumOptions: [
            { title: "默认", value: "" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最近更新", value: "post_date" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
  ],
};

/**
 * 搜索函数
 * @param {Object} params 包含 keyword, sort_by, from 等参数
 */
async function search(params = {}) {
  const keyword = encodeURIComponent(params.keyword || "");
  if (!keyword) {
    throw new Error("关键词不能为空");
  }
  
  let url = `https://missav123.to/cn/search?keyword=${keyword}`;
  
  if (params.sort_by) {
    url += `&sort_by=${params.sort_by}`;
  }
  if (params.from) {
    url += `&from=${params.from}`;
  }
  
  return await loadPage({ ...params, url });
}

/**
 * 加载列表页面
 * @param {Object} params 包含 url, sort_by, from 等参数
 */
async function loadPage(params = {}) {
  try {
    let url = params.url;
    if (!url) {
      throw new Error("地址不能为空");
    }
    
    // 构建最终URL，附加排序和页码参数
    const urlObj = new URL(url);
    if (params.sort_by) {
      urlObj.searchParams.set("sort", params.sort_by); // 假设排序参数为 sort，可能需要根据实际调整
    }
    if (params.from) {
      urlObj.searchParams.set("page", params.from); // 假设分页参数为 page
    }
    
    const finalUrl = urlObj.toString();
    
    const response = await Widget.http.get(finalUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Referer": "https://missav123.to/",
      },
    });

    if (!response || !response.data || typeof response.data !== "string") {
      throw new Error("无法获取有效的HTML内容");
    }

    const htmlContent = response.data;
    const items = parseHtml(htmlContent);
    return items;
  } catch (error) {
    console.error("加载页面出错:", error.message);
    throw error;
  }
}

/**
 * 解析HTML提取视频项
 * @param {string} htmlContent 
 * @returns {Array} 视频项数组
 */
function parseHtml(htmlContent) {
  const $ = Widget.html.load(htmlContent);
  const items = [];
  
  // 选择所有视频项，根据网站结构使用 .vid-items .item
  const videoElements = $(".vid-items .item").toArray();
  
  for (const element of videoElements) {
    const $el = $(element);
    
    // 提取封面图片
    const coverImg = $el.find(".img img").first();
    let cover = coverImg.attr("src") || coverImg.attr("data-src") || "";
    if (cover && !cover.startsWith("http")) {
      cover = "https://missav123.to" + cover;
    }
    
    // 提取标题和链接
    const titleLink = $el.find(".info .title").first();
    let title = titleLink.text().trim();
    const link = titleLink.attr("href") || "";
    const fullLink = link.startsWith("http") ? link : "https://missav123.to" + link;
    
    // 提取时长
    const durationEl = $el.find(".duration").first();
    const duration = durationEl.text().trim();
    
    // 提取代码和描述（可选）
    const codeEl = $el.find(".info .title .code").first();
    const code = codeEl.text().trim();
    // 去除代码部分的标题
    if (code && title.startsWith(code)) {
      title = title.substring(code.length).replace(/^[-\s]+/, "");
    }
    
    // 构建视频项
    const item = {
      id: fullLink,
      type: "url",
      title: title,
      backdropPath: cover,
      link: fullLink,
      mediaType: "movie",
      durationText: duration,
      description: duration, // 暂时用时长作为描述
    };
    
    // 尝试提取预览图片（如果有）
    const previewEl = $el.find("d-tag[src='Preview']").first();
    if (previewEl) {
      const previewUrl = previewEl.attr("url");
      if (previewUrl) {
        item.previewUrl = previewUrl; // 可能是一个预览图片或视频
      }
    }
    
    items.push(item);
  }
  
  return items;
}

/**
 * 加载详情页，获取播放地址和推荐视频
 * @param {string} link 视频详情页URL
 */
async function loadDetail(link) {
  try {
    const response = await Widget.http.get(link, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        "Referer": link,
      },
    });

    if (!response || !response.data) {
      throw new Error("无法获取详情页内容");
    }

    const htmlContent = response.data;
    const $ = Widget.html.load(htmlContent);
    
    // 尝试提取播放地址（hlsUrl）
    // 常见模式：var hlsUrl = '...'; 或 var videoUrl = '...';
    let hlsUrl = null;
    const scriptContents = $("script").toArray().map(s => $(s).html());
    for (const script of scriptContents) {
      if (!script) continue;
      const match = script.match(/var\s+(?:hlsUrl|videoUrl|playUrl)\s*=\s*['"]([^'"]+)['"]/);
      if (match) {
        hlsUrl = match[1];
        break;
      }
    }
    
    if (!hlsUrl) {
      // 尝试在页面其他地方查找，例如 video 标签的 src
      const videoSrc = $("video source").attr("src") || $("video").attr("src");
      if (videoSrc) {
        hlsUrl = videoSrc;
      }
    }
    
    if (!hlsUrl) {
      throw new Error("无法获取播放地址");
    }
    
    // 构建详情项
    const detailItem = {
      id: link,
      type: "detail",
      videoUrl: hlsUrl,
      mediaType: "movie",
      customHeaders: {
        "Referer": link,
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    };
    
    // 提取推荐视频（通常位于详情页下方的相关推荐区域）
    // 尝试查找推荐区域，常见类名如 .related-videos, .recommend, 或者直接使用同样的 .vid-items .item
    const relatedItems = parseHtml(htmlContent); // 复用解析函数，但可能包含当前视频，需要过滤
    // 简单过滤掉当前视频（通过链接去重）
    const filteredRelated = relatedItems.filter(item => item.link !== link);
    if (filteredRelated.length > 0) {
      detailItem.childItems = filteredRelated;
    }
    
    return detailItem;
  } catch (error) {
    console.error("加载详情出错:", error.message);
    throw error;
  }
}
async function parseHtml(htmlContent) {
  const $ = Widget.html.load(htmlContent);
  const sectionSelector = ".site-content .py-3,.pb-e-lg-40";
  const itemSelector = ".video-img-box";
  const coverSelector = "img";
  const durationSelector = ".absolute-bottom-right .label";
  const titleSelector = ".title a";

  let sections = [];
  const sectionElements = $(sectionSelector).toArray();
  
  for (const sectionElement of sectionElements) {
    const $sectionElement = $(sectionElement);
    var items = [];
    const sectionTitle = $sectionElement.find(".title-box .h3-md").first();
    const sectionTitleText = sectionTitle.text();
    const itemElements = $sectionElement.find(itemSelector).toArray();
    
    if (itemElements && itemElements.length > 0) {
      for (const itemElement of itemElements) {
        const $itemElement = $(itemElement);
        const titleId = $itemElement.find(titleSelector).first();
        const url = titleId.attr("href") || "";
        
        if (url && url.includes("jable.tv")) {
          const durationId = $itemElement.find(durationSelector).first();
          const coverId = $itemElement.find(coverSelector).first();
          const cover = coverId.attr("data-src");
          const video = coverId.attr("data-preview");
          const title = titleId.text();
          const duration = durationId.text().trim();
          
          const item = {
            id: url,
            type: "url",
            title: title,
            backdropPath: cover,
            previewUrl: video,
            link: url,
            mediaType: "movie",
            durationText: duration,
            description: duration
          };
          items.push(item);
        }
      }
    }
    
    if (items.length > 0) {
      sections.push({
        title: sectionTitleText,
        childItems: items
      });
    }
  }
  
  return sections;
}

async function loadDetail(link) {
  const response = await Widget.http.get(link, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
  });
  const hlsUrl = response.data.match(/var hlsUrl = '(.*?)';/)[1];
  if (!hlsUrl) {
    throw new Error("无法获取有效的HLS URL");
  }
  const item = {
    id: link,
    type: "detail",
    videoUrl: hlsUrl,
    mediaType: "movie",
    customHeaders: {
      "Referer": link,
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
  };
  const sections = await parseHtml(response.data);
  const items = sections.flatMap((section) => section.childItems);
  if (items.length > 0) {
    item.childItems = items;
  }
  return item;
}
