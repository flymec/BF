// == Metadata =================================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday.stable",
  title: "JAVDay Stable",
  description: "修复搜索解析与国产厂商列表逻辑",
  author: "flyme",
  site: "https://javday.app",
  version: "2.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      title: "搜索视频",
      functionName: "search",
      params: [
        { name: "keyword", title: "关键词 (女優/番號)", type: "input" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "厂商分类",
      functionName: "loadPage",
      params: [
        {
          name: "url", title: "选择厂商", type: "enumeration",
          enumOptions: [
            { title: "麻豆传媒", value: "https://javday.app/category/madou/" },
            { title: "果冻传媒", value: "https://javday.app/category/91zhipianchang/" },
            { title: "天美传媒", value: "https://javday.app/category/timi/" },
            { title: "糖心VLOG", value: "https://javday.app/category/txvlog/" },
            { title: "精东影业", value: "https://javday.app/category/jdav/" }
          ],
          value: "https://javday.app/category/madou/"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ]
};

const CONFIG = {
  BASE_URL: "https://javday.app",
  UA: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
};

// == 核心逻辑修复 =============================================================

/**
 * 搜索功能修复点：
 * 1. 适配搜索页特殊的 .videoBox 容器结构
 * 2. 修正图片从 data-original 提取
 */
async function search(params) {
  const { keyword, page = 1 } = params;
  if (!keyword) return [];
  
  // 修正搜索 URL：必须保证关键字后有斜杠
  const url = `${CONFIG.BASE_URL}/search/wd/${encodeURIComponent(keyword)}/page/${page}/`;
  
  return await fetchAndParse(url, "search");
}

async function loadPage(params) {
  const { url, page = 1 } = params;
  let targetUrl = url;
  if (page > 1) {
    targetUrl = url.endsWith('/') ? `${url}page/${page}/` : `${url}/page/${page}/`;
  }
  return await fetchAndParse(targetUrl, "list");
}

/**
 * 详情页解析：兼容多种 m3u8 提取模式
 */
async function loadDetail(link) {
  const resp = await Widget.http.get(link, { headers: { "User-Agent": CONFIG.UA } });
  const html = resp.data;
  
  // 匹配策略：DPlayer -> var url -> 原始 m3u8 文本
  const patterns = [
    /url:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/,
    /var\s+url\s*=\s*['"]([^'"]+)['"]/,
    /["'](https?:\/\/[^"']+\.m3u8[^"']*)["']/
  ];

  let videoUrl = "";
  for (let p of patterns) {
    const match = html.match(p);
    if (match) { videoUrl = match[1]; break; }
  }

  if (!videoUrl) throw new Error("视频解析失败");

  return {
    videoUrl: videoUrl,
    customHeaders: { "Referer": link, "User-Agent": CONFIG.UA }
  };
}

// == 核心解析引擎 =============================================================

async function fetchAndParse(url, mode) {
  try {
    const resp = await Widget.http.get(url, { headers: { "User-Agent": CONFIG.UA } });
    const $ = Widget.html.load(resp.data);
    const results = [];

    // JAVDay 搜索页和列表页的元素类名往往一致，但内部 img 属性不同
    $(".videoBox, .video-item").each((i, el) => {
      const $el = $(el);
      const linkEl = $el.is('a') ? $el : $el.find('a').first();
      const href = linkEl.attr("href");
      const title = $el.find(".title").text().trim() || $el.find("img").attr("alt");
      
      if (!href || !title) return;

      // 关键：搜索结果页的图片通常在 data-original 属性里
      const imgObj = $el.find("img");
      let thumb = imgObj.attr("data-original") || imgObj.attr("src") || imgObj.attr("data-src");
      
      // 如果是通过 style 背景图显示的
      if (!thumb) {
        const style = $el.find(".videoBox-cover").attr("style") || "";
        const match = style.match(/url\(['"]?(.*?)['"]?\)/);
        if (match) thumb = match[1];
      }

      results.push({
        title: title,
        imgSrc: normalize(thumb),
        link: normalize(href),
        mediaType: "movie",
        description: $el.find(".time").text().trim() || "JAVDay"
      });
    });

    return results;
  } catch (err) {
    return [];
  }
}

function normalize(path) {
  if (!path) return "";
  if (path.startsWith('http')) return path;
  return CONFIG.BASE_URL + (path.startsWith('/') ? path : '/' + path);
}
