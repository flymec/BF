// == Metadata =================================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday.diag",
  title: "JAVDay 诊断器",
  description: "诊断网络请求失败原因",
  author: "diag",
  site: "https://javday.app",
  version: "1.0.0-diag",
  requiredVersion: "0.0.1",
  modules: [
    {
      id: "diag_latest",
      title: "【诊断】请求测试",
      type: "media_list",
      functionName: "diagLoad",
      cacheDuration: 0,
      params: []
    }
  ]
};

// == 诊断工具 ================================================================
const BASE_URL = "https://javday.app";
const USER_AGENTS = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
];

// 尝试多种日志输出方式
function log(...args) {
  if (typeof console !== 'undefined' && console.log) {
    console.log(...args);
  }
  // 如果环境提供 Widget.log 或其他，可添加
}

// 通用请求函数，支持重试和备用方法
async function request(url, options = {}, retry = 2) {
  const method = options.method || 'GET';
  const headers = options.headers || {};
  const timeout = options.timeout || 15000;

  for (let attempt = 1; attempt <= retry; attempt++) {
    log(`请求尝试 ${attempt}/${retry}: ${url}`);

    // 尝试方法1: apiGetAbsolute (CapyPlayer 推荐)
    if (typeof apiGetAbsolute !== 'undefined') {
      try {
        log("使用 apiGetAbsolute...");
        const response = await apiGetAbsolute(url, {
          headers: headers,
          timeout: timeout
        });
        log("apiGetAbsolute 成功，响应类型:", typeof response);
        return response;
      } catch (e) {
        log("apiGetAbsolute 失败:", e.message);
      }
    }

    // 尝试方法2: Widget.http.get (旧版兼容)
    if (typeof Widget !== 'undefined' && Widget.http && Widget.http.get) {
      try {
        log("使用 Widget.http.get...");
        const response = await Widget.http.get(url, {
          headers: headers,
          timeout: timeout
        });
        log("Widget.http.get 成功");
        // 检查 response 结构
        if (response && response.data) {
          return response.data;
        }
        return response; // 可能直接是字符串
      } catch (e) {
        log("Widget.http.get 失败:", e.message);
      }
    }

    // 等待后重试
    if (attempt < retry) {
      log(`等待 1 秒后重试...`);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  throw new Error(`所有请求方法均失败: ${url}`);
}

// 主诊断函数
async function diagLoad() {
  const testUrl = BASE_URL + "/label/new/";
  log("=== 开始网络诊断 ===");
  
  // 测试不同 User-Agent
  for (let i = 0; i < USER_AGENTS.length; i++) {
    const ua = USER_AGENTS[i];
    log(`\n--- 测试 User-Agent ${i+1} ---`);
    try {
      const headers = {
        "User-Agent": ua,
        "Referer": BASE_URL,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"
      };
      
      const response = await request(testUrl, { headers, timeout: 10000 }, 1);
      log("请求成功，获取到响应");
      
      // 处理响应，可能是字符串或对象
      let html = response;
      if (response && typeof response === 'object') {
        if (response.data) html = response.data;
        else if (response.body) html = response.body;
        else html = JSON.stringify(response);
      }
      
      if (typeof html !== 'string') {
        html = String(html);
      }
      
      log("响应长度:", html.length);
      log("响应前200字符:", html.substring(0, 200));
      
      // 检查是否包含预期内容
      if (html.includes("videoBox") || html.includes("video-wrapper")) {
        log("✅ 响应包含视频列表特征，解析有望！");
        // 尝试解析一个条目
        const $ = Widget.html.load(html);
        const boxes = $(".video-wrapper .videoBox");
        log("找到 .video-wrapper .videoBox 数量:", boxes.length);
        if (boxes.length > 0) {
          const first = boxes.first();
          log("第一个条目标题:", first.find(".videoBox-info .title").text().trim());
          log("第一个条目链接:", first.attr("href"));
        } else {
          log("⚠️ 选择器未命中，请检查页面结构");
        }
      } else if (html.includes("403") || html.includes("Forbidden")) {
        log("❌ 可能被服务器拒绝 (403)");
      } else if (html.includes("404")) {
        log("❌ 页面不存在 (404)");
      } else {
        log("⚠️ 响应不包含视频列表特征，可能被反爬或页面结构变化");
      }
      
      // 如果成功，返回一个模拟条目，让界面能看到结果
      return [{
        id: "diag",
        type: "url",
        title: `诊断成功 (UA${i+1})`,
        link: testUrl,
        description: "请查看控制台日志"
      }];
      
    } catch (e) {
      log(`User-Agent ${i+1} 请求失败:`, e.message);
    }
  }
  
  log("=== 所有尝试均失败 ===");
  // 返回一个错误提示条目
  return [{
    id: "error",
    type: "url",
    title: "❌ 请求失败，请查看日志",
    link: "",
    description: "控制台可能有详细错误信息"
  }];
}

// 保留 loadDetail 占位
async function loadDetail(link) {
  return { title: "占位", videoUrl: "" };
}
