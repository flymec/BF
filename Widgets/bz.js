/**
 * 碧池直播 - 视频源插件
 * 
 * 该脚本用于从指定API获取直播视频列表，支持多种分类。
 * 适用于支持 Scriptable 或类似小部件运行环境的工具。
 * 
 * @module WidgetMetadata
 * @version 0.0.2
 */

const WidgetMetadata = {
  id: "Bitch",
  title: "碧池直播",
  description: "TOM.5 - 增强版",
  author: "🅣🅞🅜",
  site: "@🅣🅞🅜",
  version: "0.0.2",
  requiredVersion: "0.0.1",
  modules: [
    {
      title: "碧池直播",
      requiresWebView: false,
      functionName: "getVideos",
      params: [
        {
          name: "category",
          title: "类型",
          type: "enumeration",
          enumOptions: [
            { title: "卡哇伊", value: "jsonkawayi" },
            { title: "咪狐", value: "jsonmihu" },
            { title: "花蝴蝶", value: "jsonhuahudie" },
            // ... 省略中间部分（保持原样）
            { title: "情趣", value: "jsonqingqu" }
          ]
        }
      ]
    }
  ]
};

// 常量定义
const API_BASE_URL = "http://api.maiyoux.com:81/mf/";
const REQUEST_TIMEOUT = 10000; // 10秒超时
const USER_AGENT = "Mozilla/5.0 (Linux; Android 4.4.2; OPPO R11 Build/NMF26X) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36";

/**
 * 获取指定分类的直播视频列表
 * 
 * @param {Object} params - 参数对象
 * @param {string} params.category - 分类标识（例如 "jsonkawayi"）
 * @returns {Promise<Array>} 视频列表，每个视频包含 id, type, title, posterPath, videoUrl
 * @throws {Error} 当参数无效、网络请求失败或数据格式错误时抛出异常
 */
async function getVideos(params = {}) {
  // 1. 参数验证
  const category = params.category;
  if (!category || typeof category !== 'string') {
    throw new Error("无效的参数：category 必须为非空字符串");
  }

  // 2. 构建请求URL
  const url = `${API_BASE_URL}${category}.txt`;
  console.log(`[视频获取] 开始请求，分类: ${category}, URL: ${url}`);

  // 3. 发起HTTP请求（带超时）
  let response;
  try {
    response = await Widget.http.get(url, {
      headers: {
        'User-Agent': USER_AGENT,
        'Content-Type': 'application/octet-stream'
      },
      timeout: REQUEST_TIMEOUT
    });
  } catch (networkError) {
    throw new Error(`网络请求失败: ${networkError.message}`);
  }

  // 4. 响应数据基本验证
  if (!response) {
    throw new Error("API 返回空响应");
  }
  if (!response.data) {
    throw new Error("API 返回数据为空");
  }

  // 5. 数据结构验证
  const responseData = response.data;
  if (typeof responseData !== 'object' || responseData === null) {
    throw new Error("返回数据不是有效的对象");
  }
  if (!Array.isArray(responseData.zhubo)) {
    throw new Error("返回数据缺少 'zhubo' 数组");
  }

  // 6. 数据转换与过滤
  const rawList = responseData.zhubo;
  const videos = rawList
    .filter(item => {
      // 过滤无效条目：必须包含 address 和 title，且为字符串
      const hasValidAddress = item.address && typeof item.address === 'string';
      const hasValidTitle = item.title && typeof item.title === 'string';
      if (!hasValidAddress || !hasValidTitle) {
        console.warn(`[视频过滤] 跳过无效条目: ${JSON.stringify(item)}`);
        return false;
      }
      return true;
    })
    .map(item => ({
      id: item.address,                     // 使用地址作为唯一标识
      type: "url",                           // 固定类型
      title: item.title.trim(),               // 标题去空格
      posterPath: item.img && typeof item.img === 'string' ? item.img : '', // 海报（可能为空）
      videoUrl: item.address                   // 视频地址
    }));

  // 7. 结果日志
  if (videos.length === 0) {
    console.warn(`[视频获取] 警告: 分类 "${category}" 过滤后无有效视频，原始数据长度: ${rawList.length}`);
  } else {
    console.log(`[视频获取] 成功获取 ${videos.length} 个视频`);
  }

  return videos;
}

// 可选：导出模块（根据运行环境决定是否需要）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WidgetMetadata, getVideos };
}
