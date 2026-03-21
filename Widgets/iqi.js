WidgetMetadata = {
  id: "forward.iqiyi",
  title: "爱奇艺视频",
  description: "爱奇艺视频搜索与热播推荐",
  author: "Forward",
  site: "https://www.iqiyi.com",
  version: "1.3.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      title: "搜索",
      description: "搜索视频",
      requiresWebView: false,
      functionName: "search",
      cacheDuration: 3600,
      params: [
        {
          name: "keyword",
          title: "关键词",
          type: "input",
          description: "关键词"
        }
      ]
    },
    {
      title: "电视剧热播",
      requiresWebView: false,
      functionName: "getTvHot",
      cacheDuration: 1800,
      params: []
    },
    {
      title: "电影热播",
      requiresWebView: false,
      functionName: "getMovieHot",
      cacheDuration: 1800,
      params: []
    },
    {
      title: "综艺热播",
      requiresWebView: false,
      functionName: "getVarietyHot",
      cacheDuration: 1800,
      params: []
    }
  ]
};

// ── 公共配置 ────────────────────────────────────────────
var HEADERS = {
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  "Referer": "https://www.iqiyi.com/",
  "Accept": "application/json, */*"
};

// ── 检测 WebView 支持 ────────────────────────────────────
function getItemType() {
  try {
    // 如果框架支持 WebView，Widget.webview 或相关属性会存在
    if (typeof Widget.webview !== "undefined") return "webview";
    if (typeof Widget.openWebView === "function") return "webview";
  } catch (e) {}
  // 降级：用 url 类型，框架会用系统浏览器打开
  return "url";
}

// ── 构建条目 ─────────────────────────────────────────────
function buildItem(item) {
  var albumId = item.albumId || item.album_id || "";
  var tvId    = item.tvId    || "";
  var videoId = item.videoId || "";

  var link = albumId
    ? "https://www.iqiyi.com/a_" + albumId + ".html"
    : tvId
      ? "https://www.iqiyi.com/v_" + tvId + ".html"
      : videoId
        ? "https://www.iqiyi.com/v_" + videoId + ".html"
        : (item.pageUrl || item.vipPlayUrl || "");

  if (!link || !(item.name || item.title)) return null;

  var ITEM_TYPE = getItemType();

  return {
    id: String(albumId || tvId || videoId || Math.random().toString(36)),
    type: ITEM_TYPE,
    title: item.name || item.title || "",
    description: item.shortDesc || item.description || "",
    posterPath: item.imageUrl || item.pic || item.picUrl || "",
    link: link,
    // 部分框架用这两个字段区分 webview 与外链
    webviewUrl: link,
    openUrl: link
  };
}

// ── 热播：主接口 ─────────────────────────────────────────
async function fetchHotByChannel(channelId) {
  var url = "https://pcw-api.iqiyi.com/albums/album/hot"
    + "?channel_id=" + channelId
    + "&page_id=1&ret_num=30&mode=11";

  try {
    var res  = await Widget.http.get(url, { headers: HEADERS });
    var body = res.data;
    var list = (body.data && (body.data.list || body.data.albumList))
            || body.list
            || [];

    if (list.length) {
      var items = list.map(buildItem).filter(Boolean);
      if (items.length) return items;
    }
  } catch (e) {}

  // 降级
  return fetchHotFallback(channelId);
}

// ── 热播：降级接口 ───────────────────────────────────────
async function fetchHotFallback(channelId) {
  var url = "https://pcw-api.iqiyi.com/search/recommend/list"
    + "?page_id=1&ret_num=30&channel_id=" + channelId
    + "&mode=24&data_type=1&key=";

  var res  = await Widget.http.get(url, { headers: HEADERS });
  var list = (res.data.data && res.data.data.list) || [];
  return list.map(buildItem).filter(Boolean);
}

// ── 搜索 ─────────────────────────────────────────────────
async function search(params) {
  var keyword = (params.keyword || "").trim();
  if (!keyword) throw new Error("请输入关键词");

  var url = "https://pcw-api.iqiyi.com/search/recommend/list"
    + "?page_id=1&ret_num=20&channel_id=0"
    + "&mode=24&data_type=1"
    + "&keyword=" + encodeURIComponent(keyword);

  var res  = await Widget.http.get(url, { headers: HEADERS });
  var list = (res.data.data && res.data.data.list) || [];
  return list.map(buildItem).filter(Boolean);
}

// ── 热播入口 ─────────────────────────────────────────────
async function getTvHot()      { return fetchHotByChannel(2); }
async function getMovieHot()   { return fetchHotByChannel(1); }
async function getVarietyHot() { return fetchHotByChannel(6); }

// ── 详情 ─────────────────────────────────────────────────
async function loadDetail(link) {
  var ITEM_TYPE = getItemType();
  return {
    id: link,
    type: ITEM_TYPE,
    title: "",
    description: "",
    posterPath: "",
    link: link,
    webviewUrl: link,
    openUrl: link
  };
}
