var WidgetMetadata = {
  id: "bitch.live",
  title: "碧池直播",
  description: "TOM.5",
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
            { title: "蜜桃", value: "jsonmitao" },
            { title: "番茄社区", value: "jsonfanjiashequ" },
            { title: "LOVE", value: "jsonLOVE" }
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

    console.log("请求地址:", url);

    const response = await Widget.http.get(url,{
      timeout:15000,
      headers:{
        "User-Agent":"Mozilla/5.0",
        "Accept":"*/*"
      }
    });

    if(!response || !response.data){
      throw new Error("接口无返回数据");
    }

    let data = response.data;

    // 如果是字符串尝试解析
    if(typeof data === "string"){
      try{
        data = JSON.parse(data);
      }catch(e){
        console.log("JSON解析失败，尝试M3U解析");
      }
    }

    let list = [];

    // JSON格式
    if(data && data.zhubo && Array.isArray(data.zhubo)){
      list = data.zhubo;
    }

    // 如果不是JSON尝试按行解析
    if(list.length === 0 && typeof response.data === "string"){

      const lines = response.data.split("\n");

      for(let line of lines){

        line = line.trim();

        if(!line) continue;

        const parts = line.split(",");

        if(parts.length >= 2){

          list.push({
            title:parts[0],
            address:parts[1],
            img:""
          });

        }

      }

    }

    const videos = [];
    const cache = new Set();

    for(const item of list){

      if(!item.address || !item.title) continue;

      if(cache.has(item.address)) continue;

      cache.add(item.address);

      videos.push({
        id:item.address,
        type:"url",
        title:item.title.trim(),
        posterPath:item.img || "",
        videoUrl:item.address
      });

    }

    if(videos.length === 0){
      throw new Error("解析后没有视频数据");
    }

    console.log("解析视频数量:",videos.length);

    return videos;

  }catch(err){

    console.error("视频获取失败:",err);

    throw new Error("视频获取失败: "+err.message);

  }

}
