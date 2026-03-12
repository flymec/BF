// == Metadata =================================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday",
  title: "JAVDay",
  description: "获取 JAVDay 推荐（含搜索与分类）",
  author: "flyme",
  site: "https://javday.app",
  version: "1.6.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      title: "搜索视频",
      description: "搜索 JAVDay 视频库",
      requiresWebView: false,
      functionName: "search",
      params: [
        { name: "keyword", title: "关键词", type: "input", value: "" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "分类浏览",
      description: "按分类查看视频",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url", title: "分类", type: "enumeration",
          enumOptions: [
            { title: "最新更新", value: "https://javday.app/label/new/" },
            { title: "人气系列", value: "https://javday.app/label/hot/" },
            { title: "新作上市", value: "https://javday.app/category/new-release/" },
            { title: "有码视频", value: "https://javday.app/category/censored/" },
            { title: "无码视频", value: "https://javday.app/category/uncensored/" },
            { title: "国产 AV", value: "https://javday.app/category/chinese-av/" },
            { title: "玩偶姐姐", value: "https://javday.app/category/hongkongdoll/" }
          ],
          value: "https://javday.app/label/new/"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    }
    // ... 其他模块可按需保留
  ]
};

// == Constants ================================================================
const CONFIG = {
  BASE_URL: "https://javday.app",
  UA: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
};

// == Core Functions ===========================================================

/**
 * 搜索功能
 */
async function search(params) {
  const { keyword, page = 1 } = params;
  const url = `${CONFIG.BASE_URL}/search/wd/${encodeURIComponent(keyword)}/page/${page}/`;
  return await fetchAndParse(url);
}

/**
 * 列表分页加载
 */
async function loadPage(params) {
  const { url, page = 1 } = params;
  let targetUrl = url;
  
  // 处理分页路径拼接
  if (page > 1) {
    targetUrl = url.endsWith('/') ? `${url}page/${page}/` : `${url}/page/${page}/`;
  }
  
  return await fetchAndParse(targetUrl);
}

/**
 * 详情页解析（获取播放地址）
 */
async function loadDetail(link) {
  const resp = await Widget.http.get(link, { headers: { "User-Agent": CONFIG.UA } });
  const $ = Widget.html.load(resp.data);
  
  // 1. 尝试从脚本中提取 DPlayer 配置
  let videoUrl = "";
  $('script').each((i, el) => {
    const html = $(el).html();
    if (html.includes('new DPlayer')) {
      const match = html.match(/url:\s*["']([^"']+)["']/);
      if (match) videoUrl = match[1];
    }
  });

  // 2. 兜底策略：查找 source 标签
  if (!videoUrl) {
    videoUrl = $('source[type="application/x-mpegURL"]').attr('src') || $('video').attr('src');
  }

  if (!videoUrl) throw new Error("未找到视频源");

  return {
    videoUrl: videoUrl,
    header: {
      "Referer": link,
      "User-Agent": CONFIG.UA
    }
  };
}

// == Helper Functions =========================================================

async function fetchAndParse(url) {
  const resp = await Widget.http.get(url, {
    headers: { "User-Agent": CONFIG.UA }
  });
  
  const $ = Widget.html.load(resp.data);
  const items = [];

  $(".video-wrapper .videoBox").each((i, el) => {
    const $el = $(el);
    const href = $el.attr("href");
    const title = $el.find(".videoBox-info .title").text().trim();
    
    // 提取背景图
    const style = $el.find(".videoBox-cover").attr("style") || "";
    const imgMatch = style.match(/url\(['"]?(.*?)['"]?\)/);
    const thumb = imgMatch ? imgMatch[1] : "";

    if (href) {
      items.push({
        title: title,
        imgSrc: thumb.startsWith('http') ? thumb : CONFIG.BASE_URL + thumb,
        link: href.startsWith('http') ? href : CONFIG.BASE_URL + href,
        // CapyPlayer 识别 movie 类型会自动触发 loadDetail
        mediaType: "movie" 
      });
    }
  });

  return items;
}

