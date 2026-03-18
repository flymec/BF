var WidgetMetadata = {
  id: "ti.bemarkt.iqiyi.pro.max",
  title: "iQIYI Pro Max",
  description: "爱奇艺终极版（分类 + 搜索 + 多解析播放）",
  author: "GPT",
  site: "https://www.iqiyi.com/",
  version: "3.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    { title: "首页", function: "getHome" },
    { title: "分类", function: "getClassList" },
    { title: "搜索", function: "search" }
  ]
};

// ================= 请求封装 =================
async function fetch(url) {
  return await request(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Referer": "https://www.iqiyi.com/"
    }
  });
}

// ================= 首页推荐 =================
async function getHome() {
  const url = "https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1";

  const res = await fetch(url);
  const json = JSON.parse(res);

  const list = json.data.list || [];

  return [{
    title: "热门推荐",
    list: list.slice(0, 20).map(v => ({
      id: v.qipu_id,
      title: v.name,
      cover: v.image_url,
      desc: v.score
    }))
  }];
}

// ================= 分类 =================
async function getClassList() {
  return [
    { id: "1", name: "电影" },
    { id: "2", name: "电视剧" },
    { id: "6", name: "综艺" },
    { id: "4", name: "动漫" },
    { id: "5", name: "纪录片" }
  ];
}

// ================= 分类列表 =================
async function getVideoList(args) {
  const { id, page = 1 } = args;

  const url = `https://pcw-api.iqiyi.com/search/recommend/list?channel_id=${id}&page_id=${page}`;

  const res = await fetch(url);
  const json = JSON.parse(res);

  const list = json.data.list || [];

  return list.map(v => ({
    id: v.qipu_id,
    title: v.name,
    cover: v.image_url,
    desc: v.score
  }));
}

// ================= 搜索 =================
async function search(args) {
  const { keyword, page = 1 } = args;

  const url = `https://mesh.if.iqiyi.com/portal/lw/search/homePageV3?key=${encodeURIComponent(keyword)}&pageNum=${page}`;

  const res = await fetch(url);
  const json = JSON.parse(res);

  const blocks = json.data.templates || [];
  let result = [];

  blocks.forEach(b => {
    const list = b.data?.list || [];
    list.forEach(item => {
      result.push({
        id: item.qipuId || item.albumId,
        title: item.name,
        cover: item.imageUrl,
        desc: item.score || item.desc
      });
    });
  });

  return result;
}

// ================= 详情 =================
async function getDetail(args) {
  const { id } = args;

  const playUrl = `https://www.iqiyi.com/v_${id}.html`;

  return {
    id,
    title: "爱奇艺视频",
    cover: "",
    desc: "",
    playList: [{
      name: "多线路解析",
      urls: buildPlayUrls(playUrl)
    }]
  };
}

// ================= 解析线路（核心） =================
function buildPlayUrls(url) {
  const apis = [
    { name: "789解析", url: "https://jiexi.789jiexi.icu:4433/?url=" },
    { name: "Player-JY", url: "https://jx.playerjy.com/?url=" },
    { name: "HLS解析", url: "https://jx.hls.one/?url=" },
    { name: "极速解析", url: "https://jx.2s0.cn/player/?url=" },
    { name: "973解析", url: "https://jx.973973.xyz/?url=" },
    { name: "虾米解析", url: "https://jx.xmflv.com/?url=" },
    { name: "CK解析", url: "https://www.ckplayer.vip/jiexi/?url=" },
    { name: "七哥解析", url: "https://jx.nnxv.cn/tv.php?url=" },
    { name: "盘古解析", url: "https://www.pangujiexi.com/jiexi/?url=" },
    { name: "Playm3u8", url: "https://www.playm3u8.cn/jiexi.php?url=" },
    { name: "937解析", url: "https://bfq.937auth.vip?url=" },
    { name: "七七云", url: "https://jx.77flv.cc/?url=" },
    { name: "M1907", url: "https://im1907.top/?jx=" },
    { name: "Yparse", url: "https://jx.yparse.com/index.php?url=" }
  ];

  return apis.map(api => ({
    name: api.name,
    url: api.url + encodeURIComponent(url)
  }));
}
