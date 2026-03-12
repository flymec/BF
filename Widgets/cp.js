// == Metadata =================================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday",
  title: "JAVDay Pro",
  description: "JAVDay 全功能版 - 支持人气排序与防盗链播放",
  author: "flyme",
  site: "https://javday.app",
  version: "1.7.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      title: "搜索视频",
      functionName: "search",
      params: [
        { name: "keyword", title: "关键词", type: "input" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "综合分类",
      functionName: "loadPage",
      params: [
        {
          name: "url", title: "分类", type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "https://javday.app/label/new/" },
            { title: "人气热榜", value: "https://javday.app/label/hot/" },
            { title: "新作上市", value: "https://javday.app/category/new-release/" },
            { title: "有码视频", value: "https://javday.app/category/censored/" },
            { title: "无码视频", value: "https://javday.app/category/uncensored/" },
            { title: "国产原创", value: "https://javday.app/category/chinese-av/" }
          ],
          value: "https://javday.app/label/new/"
        },
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "最新", value: "new" },
            { title: "人气", value: "popular" }
          ],
          value: "new"
        },
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ]
};

const CONFIG = {
  BASE_URL: "https://javday.app",
  UA: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
};

// == 核心逻辑 =================================================================

/**
 * 列表页加载（含人气排序转换）
 */
async function loadPage(params) {
  const { url, sort_by = "new", page = 1 } = params;
  let targetUrl = url;

  // 1. 如果选择人气排序，需要重写 URL 结构
  // 例如：/category/censored/ -> /fiter/by/hits/id/censored/
  if (sort_by === "popular" && url.includes("/category/")) {
    const catId = url.split('/').filter(Boolean).pop();
    targetUrl = `${CONFIG.BASE_URL}/fiter/by/hits/id/${catId}/`;
  }

  // 2. 拼接页码
  if (page > 1) {
    targetUrl = targetUrl.endsWith('/') ? `${targetUrl}page/${page}/` : `${targetUrl}/page/${page}/`;
  }

  return await fetchAndParse(targetUrl);
}

/**
 * 搜索逻辑
 */
async function search(params) {
  const { keyword, page = 1 } = params;
  if (!keyword) return [];
  const url = `${CONFIG.BASE_URL}/search/wd/${encodeURIComponent(keyword)}/page/${page}/`;
  return await fetchAndParse(url);
}

/**
 * 视频详情解析（重点修复播放器提取）
 */
async function loadDetail(link) {
  const resp = await Widget.http.get(link, { headers: { "User-Agent": CONFIG.UA } });
  const $ = Widget.html.load(resp.data);
  
  let videoUrl = "";

  // 策略 A: 提取内联 DPlayer 配置
  const scripts = $("script").toArray();
  for (let script of scripts) {
    const content = $(script).html();
    if (content && content.includes("new DPlayer")) {
      const match = content.match(/url:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/);
      if (match) {
        videoUrl = match[1];
        break;
      }
    }
  }

  // 策略 B: 提取 script 标签内的字符串变量
  if (!videoUrl) {
    for (let script of scripts) {
      const content = $(script).html();
      const match = content.match(/var\s+(?:url|main)\s*=\s*['"]([^'"]+\.m3u8[^'"]*)['"]/i);
      if (match) {
        videoUrl = match[1];
        break;
      }
    }
  }

  if (!videoUrl) throw new Error("此视频暂无可播放源或需要网页访问");

  return {
    videoUrl: videoUrl,
    customHeaders: {
      "Referer": link,
      "User-Agent": CONFIG.UA,
      "Origin": CONFIG.BASE_URL
    }
  };
}

// == 工具函数 =================================================================

async function fetchAndParse(url) {
  try {
    const resp = await Widget.http.get(url, { headers: { "User-Agent": CONFIG.UA } });
    const $ = Widget.html.load(resp.data);
    const items = [];

    $(".videoBox").each((i, el) => {
      const $el = $(el);
      // JAVDay 有时 a 标签在外部，有时在内部
      const linkEl = $el.is('a') ? $el : $el.find('a').first();
      const href = linkEl.attr("href");
      const title = $el.find(".title").text().trim() || $el.find("img").attr("alt");
      
      // 封面提取逻辑优化
      let thumb = "";
      const style = $el.find(".videoBox-cover").attr("style") || "";
      const imgMatch = style.match(/url\(['"]?(.*?)['"]?\)/);
      if (imgMatch) {
        thumb = imgMatch[1];
      } else {
        thumb = $el.find("img").attr("src") || $el.find("img").attr("data-src");
      }

      if (href && title) {
        items.push({
          title: title,
          imgSrc: thumb ? (thumb.startsWith('http') ? thumb : CONFIG.BASE_URL + thumb) : "",
          link: href.startsWith('http') ? href : CONFIG.BASE_URL + href,
          mediaType: "movie",
          description: $el.find(".time").text().trim() // 显示时长或日期
        });
      }
    });

    return items;
  } catch (e) {
    console.error("Fetch Error: ", e);
    return [];
  }
}
