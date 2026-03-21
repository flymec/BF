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
 title: "热播",
 description: "热播推荐",
 requiresWebView: false,
 functionName: "hot",
 cacheDuration: 1800,
 params: [
 {
 name: "category",
 title: "分类",
 type: "enumeration",
 description: "分类",
 value: "tv",
 enumOptions: [
 { title: "电视剧", value: "tv" },
 { title: "电影", value: "movie" }
 ]
 }
 ]
 }
 ]
};


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
 return {
 id: albumId || Math.random().toString(36),
 type: "url",
 title: item.title || "",
 posterPath: item.imageUrl || "",
 link: albumId ? "https://www.iqiyi.com/a_" + albumId + ".html" : ""
 };
 });
}

async function hot(params) {
 var category = params.category || "tv";
 var channelId = category === "movie" ? "2" : "1";

 var url = "https://mesh.if.iqiyi.com/portal/lw/videolib/data?ret_num=30&channel_id=" + channelId + "&page_id=1";

 var response = await Widget.http.get(url);
 var list = response.data.data.list || [];

 return list.map(function(item) {
 var albumId = item.albumId || "";
 return {
 id: albumId || item.tvId || Math.random().toString(36),
 type: "url",
 title: item.title || "",
 posterPath: item.imageUrl || "",
 link: albumId ? "https://www.iqiyi.com/a_" + albumId + ".html" : ""
 };
 });
}
