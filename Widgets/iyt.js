/**
 * 爱奇艺 ForwardWidget
 */

var WidgetMetadata = {
    id: "forward.iqiyi",
    title: "爱奇艺视频",
    version: "1.0.0",
    requiredVersion: "0.0.1",
    description: "爱奇艺视频搜索与热播推荐",
    author: "Forward",
    site: "https://www.iqiyi.com",
    modules: [
        {
            title: "搜索视频",
            functionName: "searchVideo",
            cacheDuration: 3600,
            params: [
                {
                    name: "keyword",
                    title: "关键词",
                    type: "input",
                    value: ""
                }
            ]
        },
        {
            title: "热播推荐",
            functionName: "getHot",
            cacheDuration: 1800,
            params: [
                {
                    name: "category",
                    title: "分类",
                    type: "enumeration",
                    value: "tv",
                    enumOptions: [
                        { title: "电视剧", value: "tv" },
                        { title: "电影", value: "movie" },
                        { title: "综艺", value: "variety" },
                        { title: "动漫", value: "anime" }
                    ]
                }
            ]
        }
    ],
    search: {
        title: "搜索爱奇艺",
        functionName: "searchVideo",
        params: [
            {
                name: "keyword",
                title: "关键词",
                type: "input",
                value: ""
            }
        ]
    }
};

var CHANNEL_MAP = {
    tv: "1",
    movie: "2",
    variety: "3",
    anime: "5"
};

async function searchVideo(params) {
    var keyword = params.keyword || "";
    if (!keyword) {
        throw new Error("请输入搜索关键词");
    }

    var url = "https://pcw-api.iqiyi.com/search/recommend/list"
        + "?page_id=1"
        + "&ret_num=20"
        + "&channel_id=1"
        + "&mode=24"
        + "&data_type=1"
        + "&keyword=" + encodeURIComponent(keyword);

    var response = await Widget.http.get(url);
    var list = response?.data?.data?.list || [];

    return list.map(function(item) {
        var albumId = item.albumId || "";
        return {
            id: albumId || Math.random().toString(36),
            type: "url",
            title: item.title || item.name || "",
            description: item.description || "",
            posterPath: (item.imageUrl || item.picUrl || "").replace("http://", "https://"),
            link: albumId ? "https://www.iqiyi.com/a_" + albumId + ".html" : ""
        };
    });
}

async function getHot(params) {
    var category = params.category || "tv";
    var channelId = CHANNEL_MAP[category] || "1";

    var url = "https://mesh.if.iqiyi.com/portal/lw/videolib/data"
        + "?ret_num=30"
        + "&channel_id=" + channelId
        + "&page_id=1";

    var response = await Widget.http.get(url);
    var list = response?.data?.data?.list || [];

    return list.map(function(item) {
        var albumId = item.albumId || "";
        return {
            id: albumId || item.tvId || Math.random().toString(36),
            type: "url",
            title: item.title || item.name || "",
            posterPath: (item.imageUrl || item.picUrl || "").replace("http://", "https://"),
            rating: item.score || "",
            link: albumId ? "https://www.iqiyi.com/a_" + albumId + ".html" : "",
            mediaType: category === "movie" ? "movie" : "tv"
        };
    });
}
