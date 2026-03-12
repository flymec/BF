// == Metadata =================================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday.debug",
  title: "JAVDay 调试版",
  description: "用于诊断数据获取问题",
  author: "debug",
  site: "https://javday.app",
  version: "1.0.0-debug",
  requiredVersion: "0.0.1",
  modules: [
    {
      id: "debug_latest",
      title: "【调试】最新更新",
      type: "media_list",
      functionName: "debugLoadLatest",
      cacheDuration: 0, // 关闭缓存便于调试
      params: [
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ]
};

// == 工具函数 ================================================================
const BASE_URL = "https://javday.app";
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36";

/**
 * 安全地打印日志（CapyPlayer 环境可能没有 console，但文档中允许使用）
 */
function log(...args) {
  // 如果环境不支持 console，尝试使用 Widget.log 或忽略
  if (typeof console !== 'undefined' && console.log) {
    console.log(...args);
  }
}

/**
 * 发送请求并返回 HTML 字符串（兼容 apiGetAbsolute 的不同返回值）
 */
async function fetchHTML(url) {
  log("请求URL:", url);
  try {
    const response = await apiGetAbsolute(url, {
      headers: {
        "User-Agent": USER_AGENT,
        "Referer": BASE_URL,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
      },
      timeout: 15000
    });
    
    log("响应类型:", typeof response);
    
    // 处理可能的响应格式
    let html = response;
    if (response && typeof response === 'object') {
      // 如果返回对象，尝试提取 data 字段
      if (response.data) {
        html = response.data;
        log("从 response.data 提取");
      } else {
        // 可能是其他格式，尝试 JSON 序列化（但通常不会）
        html = JSON.stringify(response);
        log("响应为对象，已转换为字符串");
      }
    }
    
    if (typeof html !== 'string') {
      html = String(html);
    }
    
    log("HTML 前 500 字符:", html.substring(0, 500));
    return html;
  } catch (error) {
    log("请求异常:", error.message);
    throw error;
  }
}

/**
 * 极简解析：提取所有 .videoBox 的标题和链接
 */
function parseItems(html) {
  log("开始解析 HTML");
  const $ = Widget.html.load(html);
  
  // 检查页面标题，确认是否正常加载
  const pageTitle = $("title").text();
  log("页面标题:", pageTitle);
  
  // 检查选择器是否匹配到元素
  const boxes = $(".video-wrapper .videoBox");
  log("找到 .video-wrapper .videoBox 数量:", boxes.length);
  
  if (boxes.length === 0) {
    // 尝试打印部分页面结构，帮助判断选择器是否正确
    log("页面结构样例:", $("body").html().substring(0, 300));
  }
  
  const items = [];
  boxes.each((index, el) => {
    const link = $(el).attr("href");
    const title = $(el).find(".videoBox-info .title").text().trim();
    log(`条目 ${index}: 标题="${title}", 链接="${link}"`);
    
    if (link && title) {
      items.push({
        id: index + "",
        type: "url",
        title: title,
        link: link.startsWith("http") ? link : BASE_URL + (link.startsWith("/") ? link : "/" + link),
        imgSrc: "", // 封面暂不处理
        description: "调试条目"
      });
    }
  });
  
  log("最终解析到的条目数:", items.length);
  return items;
}

// == 模块函数 ================================================================
async function debugLoadLatest(params) {
  const page = params.page || 1;
  let url = `${BASE_URL}/label/new/`;
  if (page > 1) {
    url = `${BASE_URL}/label/new/page/${page}/`;
  }
  
  try {
    const html = await fetchHTML(url);
    const items = parseItems(html);
    return items; // 必须返回数组
  } catch (e) {
    log("模块执行出错:", e.message);
    return []; // 出错时返回空数组，避免界面崩溃
  }
}

// == 详情页函数（可选，用于测试）============================================
async function loadDetail(link) {
  log("加载详情:", link);
  const html = await fetchHTML(link);
  const $ = Widget.html.load(html);
  
  // 提取标题
  const title = $("h1.page-title").text().trim() || $("title").text().trim() || "无标题";
  
  // 提取视频地址（简化）
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
  
  if (!videoUrl) {
    log("未找到视频地址");
    throw new Error("未找到视频地址");
  }
  
  return {
    title: title,
    videoUrl: videoUrl,
    customHeaders: { Referer: link, "User-Agent": USER_AGENT }
  };
}
