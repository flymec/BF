// == Metadata =================================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday.pro",
  title: "JAVDay 旗舰版",
  description: "支持搜索、人气排序及国产厂商分类优化",
  author: "flyme",
  site: "https://javday.app",
  version: "1.9.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      title: "视频搜索",
      functionName: "search",
      params: [
        { name: "keyword", title: "番號/女優/關鍵字", type: "input" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "分类浏览",
      functionName: "loadPage",
      params: [
        {
          name: "url", title: "分类", type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "https://javday.app/label/new/" },
            { title: "有码视频", value: "https://javday.app/category/censored/" },
            { title: "无码视频", value: "https://javday.app/category/uncensored/" },
            { title: "国产 AV", value: "https://javday.app/category/chinese-av/" },
            { title: "麻豆传媒", value: "https://javday.app/index.php/category/madou/" },
            { title: "果冻传媒", value: "https://javday.app/index.php/category/91zhipianchang/" },
            { title: "天美传媒", value: "https://javday.app/index.php/category/timi/" },
            { title: "星空无限", value: "https://javday.app/index.php/category/xingkong/" },
            { title: "蜜桃影像", value: "https://javday.app/index.php/category/mtgw/" },
            { title: "精东影业", value: "https://javday.app/index.php/category/jdav/" },
            { title: "糖心VLOG", value: "https://javday.app/index.php/category/txvlog/" }
          ],
          value: "https://javday.app/label/new/"
        },
        {
          name: "sort_by", title: "排序", type: "enumeration",
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
  UA: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
};

// == 核心功能 =================================================================

/**
 * 列表加载：兼容普通分类、厂商分类及人气转换
 */
async function loadPage(params) {
  const { url, sort_by = "new", page = 1 } = params;
  let targetUrl = url;

  // 1. 提取分类 ID (处理包含 index.php 的复杂路径)
  const idMatch = url.match(/\/category\/([^/]+)\/?$/);
  const catId = idMatch ? idMatch[1] : null;

  // 2. 人气排序逻辑重定向 (仅限 category 类型)
  if (sort_by === "popular" && catId) {
    targetUrl = `${CONFIG.BASE_URL}/fiter/by/hits/id/${catId}/`;
  }

  // 3. 拼接页码 (注意：fiter 路径的分页结构可能不同，这里使用通用适配)
  if (page > 1) {
    targetUrl = targetUrl.endsWith('/') ? `${targetUrl}page/${page}/` : `${targetUrl}/page/${page}/`;
  }

  return await fetchItems(targetUrl);
}

/**
 * 搜索功能：适配搜索结果特有的布局
 */
async function search(params) {
  const { keyword, page = 1 } = params;
  if (!keyword) return [];
  const url = `${CONFIG.BASE_URL}/search/wd/${encodeURIComponent(keyword)}/page/${page}/`;
  return await fetchItems(url);
}

/**
 * 详情解析：强化对播放器脚本的嗅探
 */
async function loadDetail(link) {
  const resp = await Widget.http.get(link, { headers: { "User-Agent": CONFIG.UA, "Referer": CONFIG.BASE_URL } });
  const $ = Widget.html.load(resp.data);
  
  let videoUrl = "";
  const html = resp.data;

  // 匹配 DPlayer 里的 url 字段或独立的 m3u8 链接
  const regexes = [
    /url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/,
    /var\s+url\s*=\s*['"]([^'"]+)['"]/,
    /source\s*src=['"]([^'"]+\.m3u8[^'"]*)['"]/
  ];

  for (let reg of regexes) {
    const match = html.match(reg);
    if (match) {
      videoUrl = match[1];
      break;
    }
  }

  if (!videoUrl) throw new Error("无法抓取播放地址，请检查网页是否需要人机验证");

  return {
    videoUrl: videoUrl,
    customHeaders: {
      "User-Agent": CONFIG.UA,
      "Referer": link,
      "Origin": CONFIG.BASE_URL
    }
  };
}

// == 通用抓取解析器 =============================================================

async function fetchItems(url) {
  try {
    const resp = await Widget.http.get(url, { headers: { "User-Agent": CONFIG.UA } });
    const $ = Widget.html.load(resp.data);
    const results = [];

    // 适配多种布局容器：.videoBox (主站), .video-item (搜索), .box-video-list a (厂商)
    $(".videoBox, .video-item, .box-video-list a").each((i, el) => {
      const $el = $(el);
      const href = $el.attr("href") || $el.find("a").attr("href");
      const title = $el.find(".title, .video-title").text().trim() || $el.attr("title");
      
      if (!href || !title) return;

      // 提取封面
      let thumb = "";
      const cover = $el.find(".videoBox-cover, .video-cover, .img-responsive");
      const style = cover.attr("style") || "";
      const imgMatch = style.match(/url\(['"]?(.*?)['"]?\)/);
      
      if (imgMatch) {
        thumb = imgMatch[1];
      } else {
        thumb = cover.attr("src") || cover.attr("data-src") || $el.find("img").attr("src");
      }

      results.push({
        title: title,
        imgSrc: normalize(thumb),
        link: normalize(href),
        mediaType: "movie",
        description: $el.find(".time, .p-time").text().trim() || "JAVDay"
      });
    });

    return results;
  } catch (err) {
    console.error("Fetch Error:", err);
    return [];
  }
}

function normalize(path) {
  if (!path) return "";
  if (path.startsWith('http')) return path;
  return CONFIG.BASE_URL + (path.startsWith('/') ? path : '/' + path);
}
