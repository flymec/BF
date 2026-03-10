var WidgetMetadata = {
  id: "bitch.live.pro",
  title: "碧池直播PRO",
  description: "TOM Ultimate Live",
  author: "🅣🅞🅜",
  site: "@🅣🅞🅜",
  version: "1.0.0",
  requiredVersion: "0.0.1",

  modules: [
    {
      title: "碧池直播",
      requiresWebView: false,
      functionName: "getVideos",

      params: [
        {
          name: "category",
          title: "直播分类",
          type: "enumeration",

          enumOptions: [

            { title: "卡哇伊", value: "jsonkawayi" },
            { title: "咪狐", value: "jsonmihu" },
            { title: "花蝴蝶", value: "jsonhuahudie" },
            { title: "蜜桃", value: "jsonmitao" },
            { title: "番茄社区", value: "jsonfanjiashequ" },
            { title: "LOVE", value: "jsonLOVE" },
            { title: "小妲己", value: "jsonxiaodaji" },
            { title: "77直播", value: "json77zhibo" },
            { title: "依依", value: "jsonyiyi" },
            { title: "日出", value: "jsonrichu" },
            { title: "彩虹", value: "jsoncaihong" },
            { title: "久久", value: "jsonjiujiu" },
            { title: "亚米", value: "jsonyami" },
            { title: "蝶恋", value: "jsondielian" },
            { title: "夜妖姬", value: "jsonyeyaoji" },
            { title: "套路", value: "jsontaolu" },
            { title: "樱花", value: "jsonyinghua" },
            { title: "享色", value: "jsonxiangse" },
            { title: "红浪漫", value: "jsonhonglangman" },
            { title: "金鱼", value: "jsonjinyu" }

          ]

        }
      ]
    }
  ]
};


async function getVideos(params = {}) {

  try {

    const category = params.category || "jsonkawayi";

    const url = `http://api.maiyoux.com:81/mf/${category}.txt`;

    console.log("直播请求:", url);

    const response = await Widget.http.get(url, {

      timeout: 15000,

      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "*/*"
      }

    });

    if (!response || !response.data) {
      throw new Error("接口无返回数据");
    }

    let raw = response.data;

    let list = [];

    // JSON解析
    if (typeof raw === "string") {

      try {

        raw = JSON.parse(raw);

      } catch (e) {

        console.log("JSON解析失败，进入TXT解析");

      }

    }

    // JSON格式
    if (raw && raw.zhubo && Array.isArray(raw.zhubo)) {

      list = raw.zhubo;

    }

    // TXT/M3U解析
    if (list.length === 0 && typeof response.data === "string") {

      const lines = response.data.split("\n");

      for (let line of lines) {

        line = line.trim();

        if (!line) continue;

        const parts = line.split(",");

        if (parts.length >= 2) {

          list.push({

            title: parts[0],
            address: parts[1],
            img: ""

          });

        }

      }

    }

    const videos = [];
    const cache = new Set();

    for (const item of list) {

      if (!item.address || !item.title) continue;

      if (cache.has(item.address)) continue;

      cache.add(item.address);

      const poster = item.img && item.img.length > 5
        ? item.img
        : `https://picsum.photos/400/600?random=${Math.floor(Math.random()*1000)}`;

      videos.push({

        id: item.address,
        type: "url",
        title: item.title.trim(),
        posterPath: poster,
        videoUrl: item.address

      });

    }

    if (videos.length === 0) {

      throw new Error("未解析到直播数据");

    }

    console.log("解析直播数量:", videos.length);

    return videos;

  } catch (err) {

    console.error("直播解析失败:", err);

    throw new Error("获取直播失败: " + err.message);

  }

}
