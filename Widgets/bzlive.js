var WidgetMetadata = {
  id: "universal.live.plugin",
  title: "Universal Live",
  description: "Advanced Live Source Parser",
  author: "Developer",
  version: "1.0.0",
  requiredVersion: "0.0.1",

  modules: [
    {
      title: "直播列表",
      requiresWebView: false,
      functionName: "getVideos",
      params: [
        {
          name: "source",
          title: "直播源",
          type: "input",
          placeholder: "输入直播源URL"
        }
      ]
    }
  ]
};


// 简单缓存
const cache = {};


async function getVideos(params = {}) {

  try {

    if (!params.source) {
      throw new Error("缺少直播源地址");
    }

    const url = params.source;

    console.log("请求源:", url);

    // 缓存30秒
    if (cache[url] && Date.now() - cache[url].time < 30000) {
      console.log("使用缓存");
      return cache[url].data;
    }

    const response = await Widget.http.get(url, {
      timeout: 15000,
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "*/*"
      }
    });

    if (!response?.data) {
      throw new Error("接口返回为空");
    }

    let raw = response.data;
    let list = [];

    // JSON解析
    if (typeof raw === "string") {
      try {
        raw = JSON.parse(raw);
      } catch {}
    }

    if (raw?.zhubo && Array.isArray(raw.zhubo)) {
      list = raw.zhubo;
    }

    // TXT/M3U解析
    if (list.length === 0 && typeof response.data === "string") {

      const lines = response.data.split("\n");

      for (let line of lines) {

        line = line.trim();
        if (!line) continue;

        if (line.startsWith("#")) continue;

        const parts = line.split(",");

        if (parts.length >= 2) {

          list.push({
            title: parts[0],
            address: parts[1]
          });

        }

      }

    }

    const videos = [];
    const dedupe = new Set();

    for (const item of list) {

      if (!item.address) continue;

      if (dedupe.has(item.address)) continue;

      dedupe.add(item.address);

      videos.push({

        id: item.address,
        type: "url",
        title: item.title || "直播",
        posterPath: "",
        videoUrl: item.address

      });

    }

    cache[url] = {
      time: Date.now(),
      data: videos
    };

    return videos;

  } catch (err) {

    console.error("解析失败:", err);

    throw new Error("直播获取失败: " + err.message);

  }

}
