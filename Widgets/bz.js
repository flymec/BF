// 元数据定义（分类列表已省略中间部分，实际使用时需保留全部）
var WidgetMetadata = {
  id: "Bitch",
  title: "碧池直播",
  description: "TOM.5",
  author: "🅣🅞🅜",
  site: "@🅣🅞🅜",
  version: "0.0.2", // 版本号更新
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
            // ... 此处省略其他分类（实际使用需保留所有）
            { title: "情趣", value: "jsonqingqu" }
          ]
        }
      ]
    }
  ]
};

/**
 * 获取视频列表（兼容原环境，无额外依赖）
 * @param {Object} params - 参数，包含 category
 * @returns {Promise<Array>} 视频数组
 */
async function getVideos(params) {
  try {
    // 1. 参数校验
    if (!params || typeof params.category !== 'string') {
      throw new Error('缺少必要参数或参数无效：category');
    }

    // 2. 构建 URL
    const url = 'http://api.maiyoux.com:81/mf/' + params.category + '.txt';

    // 3. 发起请求（只传 headers，无 timeout）
    const response = await Widget.http.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 4.4.2; OPPO R11 Build/NMF26X) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36',
        'Content-Type': 'application/octet-stream'
      }
    });

    // 4. 处理响应数据
    if (!response || !response.data) {
      throw new Error('API 返回数据为空');
    }

    // 5. 解析数据（若为字符串则尝试 JSON 解析）
    let data = response.data;
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        throw new Error('返回数据不是有效的 JSON 格式');
      }
    }

    // 6. 验证数据结构
    if (typeof data !== 'object' || !data || !Array.isArray(data.zhubo)) {
      throw new Error('返回数据格式错误：缺少 zhubo 数组');
    }

    // 7. 转换数据
    const videos = [];
    for (let i = 0; i < data.zhubo.length; i++) {
      const item = data.zhubo[i];
      // 过滤：必须包含 address 和 title，且为字符串
      if (item && typeof item.address === 'string' && typeof item.title === 'string') {
        videos.push({
          id: item.address,
          type: 'url',
          title: item.title.trim(),
          posterPath: (item.img && typeof item.img === 'string') ? item.img : '',
          videoUrl: item.address
        });
      }
    }

    return videos;

  } catch (error) {
    // 将错误抛给上层处理
    throw new Error('视频获取失败: ' + error.message);
  }
}
