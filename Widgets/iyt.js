WidgetMetadata = {
 id: "forward.iqiyi",
 title: "爱奇艺视频",
 description: "爱奇艺视频搜索与热播推荐",
 author: "Forward",
 site: "https://www.iqiyi.com",
 version: "1.0.0",
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
 description: "电视剧热播",
 requiresWebView: false,
 functionName: "getTvHot",
 cacheDuration: 1800,
 params: []
 },
 {
 title: "电影热播",
 description: "电影热播",
 requiresWebView: false,
 functionName: "getMovieHot",
 cacheDuration: 1800,
 params: []
 },
 {
 title: "综艺热播",
 description: "综艺热播",
 requiresWebView: false,
 functionName: "getVarietyHot",
 cacheDuration: 1800,
 params: []
 }
 ]
};

// 视频解析接口列表
var videoParseList = [
 "https://jiexi.789jiexi.icu:4433/?url=",
 "https://jx.playerjy.com/?url=",
 "https://jx.hls.one/?url=",
 "https://jx.2s0.cn/player/?url=",
 "https://bd.jx.cn/?url=",
 "https://www.pouyun.com/?url=",
 "https://jx.973973.xyz/?url=",
 "https://jx.xmflv.com/?url=",
 "https://www.ckplayer.vip/jiexi/?url=",
 "https://jx.nnxv.cn/tv.php?url=",
];

function getParseUrl(originalUrl) {
 // 使用第一个可用的解析接口
 return videoParseList[0] + encodeURIComponent(originalUrl);
}

async function search(params) {
 var keyword = params.keyword || "";
 if (!keyword) {
 throw new Error("请输入关键词");
 }

 var url = "https://pcw-api.iqiyi.com/search/recommend/list?page_id=1&ret_num=20&channel_id=1&mode=24&data_type=1&keyword=" + encodeURIComponent(keyword);

 var response = await Widget.http.get(url);
 var list = response.data.data.list || [];

 return list.map(function(item) {
 var albumId = item.albumId || "";
 var tvId = item.tvId || "";
 var videoId = item.videoId || "";
 
 var link = "";
 var idValue = "";
 if (albumId) {
 link = "https://www.iqiyi.com/a_" + albumId + ".html";
 idValue = albumId;
 } else if (tvId) {
 link = "https://www.iqiyi.com/v_" + tvId + ".html";
 idValue = tvId;
 } else if (videoId) {
 link = "https://www.iqiyi.com/v_" + videoId + ".html";
 idValue = videoId;
 }
 
 return {
 id: idValue || Math.random().toString(36),
 type: "url",
 title: item.title || "",
 description: item.description || "",
 posterPath: item.imageUrl || item.picUrl || "",
 link: link,
 tvId: tvId || videoId || ""
 };
 });
}

async function getTvHot(params) {
 var url = "https://www.iqiyi.com/list/%E7%94%B5%E8%A7%86%E5%89%A7.html";

 var response = await Widget.http.get(url, {
 headers: {
 "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
 "Referer": "https://www.iqiyi.com/"
 }
 });

 var html = response.data;
 var $ = Widget.html.load(html);
 var results = [];

 $(".qy-mod-li").each(function() {
 var $this = $(this);
 var title = $this.attr("title") || $this.find(".qy-mod-li-tit").text().trim();
 var link = $this.find("a").attr("href") || "";
 var img = $this.find("img").attr("src") || "";
 var albumId = link.match(/album_([^.]+)\.html/);
 albumId = albumId ? albumId[1] : "";
 var tvIdMatch = link.match(/tv_([^.]+)\.html/);
 var tvId = tvIdMatch ? tvIdMatch[1] : "";

 if (title && link) {
 results.push({
 id: albumId || tvId || Math.random().toString(36),
 type: "url",
 title: title,
 posterPath: img,
 link: link,
 tvId: tvId
 });
 }
 });

 return results.slice(0, 30);
}

async function getMovieHot(params) {
 var url = "https://www.iqiyi.com/list/%E7%94%B5%E5%BD%B1%E7%94%B5%E8%A7%86.html";

 var response = await Widget.http.get(url, {
 headers: {
 "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
 "Referer": "https://www.iqiyi.com/"
 }
 });

 var html = response.data;
 var $ = Widget.html.load(html);
 var results = [];

 $(".qy-mod-li").each(function() {
 var $this = $(this);
 var title = $this.attr("title") || $this.find(".qy-mod-li-tit").text().trim();
 var link = $this.find("a").attr("href") || "";
 var img = $this.find("img").attr("src") || "";
 var albumId = link.match(/album_([^.]+)\.html/);
 albumId = albumId ? albumId[1] : "";
 var tvIdMatch = link.match(/tv_([^.]+)\.html/);
 var tvId = tvIdMatch ? tvIdMatch[1] : "";

 if (title && link) {
 results.push({
 id: albumId || tvId || Math.random().toString(36),
 type: "url",
 title: title,
 posterPath: img,
 link: link,
 tvId: tvId
 });
 }
 });

 return results.slice(0, 30);
}

async function getVarietyHot(params) {
 var url = "https://www.iqiyi.com/list/%E7%BB%BC%E8%89%BA%E7%94%B5%E8%A7%86.html";

 var response = await Widget.http.get(url, {
 headers: {
 "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
 "Referer": "https://www.iqiyi.com/"
 }
 });

 var html = response.data;
 var $ = Widget.html.load(html);
 var results = [];

 $(".qy-mod-li").each(function() {
 var $this = $(this);
 var title = $this.attr("title") || $this.find(".qy-mod-li-tit").text().trim();
 var link = $this.find("a").attr("href") || "";
 var img = $this.find("img").attr("src") || "";
 var albumId = link.match(/album_([^.]+)\.html/);
 albumId = albumId ? albumId[1] : "";
 var tvIdMatch = link.match(/tv_([^.]+)\.html/);
 var tvId = tvIdMatch ? tvIdMatch[1] : "";

 if (title && link) {
 results.push({
 id: albumId || tvId || Math.random().toString(36),
 type: "url",
 title: title,
 posterPath: img,
 link: link,
 tvId: tvId
 });
 }
 });

 return results.slice(0, 30);
}

async function loadDetail(link) {
 // 使用解析接口获取真实视频地址
 var parseUrl = getParseUrl(link);
 
 return {
 id: link,
 type: "url",
 videoUrl: parseUrl,
 link: link,
 playerType: "system"
 };
}
