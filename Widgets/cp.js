// == Metadata =================================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday",
  title: "JAVDay",
  description: "测试模块",
  author: "flyme",
  site: "https://javday.app",
  version: "1.0.0-test",
  requiredVersion: "0.0.1",
  modules: [
    {
      id: "latest_simple",
      title: "【测试】最新更新",
      type: "media_list",
      functionName: "loadLatestSimple",
      cacheDuration: 0, // 测试时可关闭缓存
      params: [
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ]
};

// == Constants ================================================================
const BASE_URL = "https://javday.app";
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36";

// == Helper: 带日志的网络请求 =================================================
async function fetchHTML(url) {
  console.log("请求URL:", url);
  try {
    const response = await apiGetAbsolute(url, {
      headers: { "User-Agent": USER_AGENT, Referer: BASE_URL },
      timeout: 10000
    });
    console.log("响应类型:", typeof response, "长度:", response?.length || '未知');
    // 如果 response 是对象且包含 data，则提取 data
    const html = (response && typeof response === 'object' && response.data) ? response.data : response;
    console.log("HTML前200字符:", html?.substring(0, 200));
    return html;
  } catch (e) {
    console.error("请求失败:", e.message);
    throw e;
  }
}

// == 解析函数（极度简化，只提取标题和链接）===================================
function parseSimpleItems(html) {
  const $ = Widget.html.load(html);
  const items = [];
  $(".video-wrapper .videoBox").each((i, el) => {
    const link = $(el).attr("href");
    const title = $(el).find(".videoBox-info .title").text().trim();
    if (link && title) {
      items.push({
        id: i + "",
        type: "url",
        title: title,
        link: link.startsWith("http") ? link : BASE_URL + (link.startsWith("/") ? link : "/" + link),
        imgSrc: "", // 暂不处理封面
        description: "测试条目"
      });
    }
  });
  console.log("解析到的条目数:", items.length);
  return items;
}

// == 模块函数 =================================================================
async function loadLatestSimple(params) {
  const page = params.page || 1;
  let url = `${BASE_URL}/label/new/`;
  if (page > 1) url = `${BASE_URL}/label/new/page/${page}/`;
  
  const html = await fetchHTML(url);
  const items = parseSimpleItems(html);
  if (items.length === 0) {
    // 尝试打印整个页面结构，帮助调试
    console.log("未解析到条目，页面标题:", Widget.html.load(html)("title").text());
  }
  return items; // 必须返回数组
}

// == 详情页函数（可选，但建议实现）===========================================
async function loadDetail(link) {
  console.log("加载详情:", link);
  const html = await fetchHTML(link);
  const $ = Widget.html.load(html);
  
  // 提取标题
  const title = $("h1.page-title").text().trim() || $("title").text().trim() || "无标题";
  
  // 提取视频地址（简化版）
  let videoUrl = null;
  $("script").each((i, el) => {
    const content = $(el).html();
    if (content && content.includes("new DPlayer")) {
      const match = content.match(/url\s*:\s*['"]([^'"]+)['"]/);
      if (match) videoUrl = match[1];
      return false;
    }
  });
  if (!videoUrl) {
    videoUrl = $("video source").attr("src") || $("iframe[src*='player']").attr("src");
  }
  
  if (!videoUrl) throw new Error("未找到视频地址");
  
  return {
    title: title,
    videoUrl: videoUrl,
    customHeaders: { Referer: link, "User-Agent": USER_AGENT }
  };
}
