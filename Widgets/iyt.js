/**
 * 爱奇艺 ForwardWidget
 */

WidgetMetadata = {
    id: "forward.iqiyi",
    title: "爱奇艺视频",
    version: "1.0.0",
    requiredVersion: "0.0.1",
    description: "爱奇艺视频搜索与热播推荐",
    author: "Forward",
    site: "https://www.iqiyi.com",
    modules: [
        {
            id: "search",
            title: "搜索视频",
            functionName: "searchVideo",
            params: [
                {
                    name: "keyword",
                    title: "关键词",
                    type: "input",
                    description: "输入视频名称或关键词",
                    value: ""
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    value: 1
                }
            ]
        },
        {
            id: "hot",
            title: "热播推荐",
            functionName: "getHot",
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
        },
        {
            id: "ranking",
            title: "风云榜",
            functionName: "getRanking",
            params: [
                {
                    name: "category",
                    title: "榜单类型",
                    type: "enumeration",
                    value: "total",
                    enumOptions: [
                        { title: "总榜", value: "total" },
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

// 频道ID映射
var CHANNEL_MAP = {
    tv: "1",
    movie: "2",
    variety: "3",
    anime: "5",
    cartoon: "5"
};

// 搜索视频
async function searchVideo(params) {
    var keyword = params.keyword || "";
    var page = params.page || 1;
    var retNum = 20;

    if (!keyword) {
        throw new Error("请输入搜索关键词");
    }

    console.log("搜索:", keyword, "页:", page);

    var searchUrl = "https://pcw-api.iqiyi.com/search/recommend/list" +
        "?page_id=" + page +
        "&ret_num=" + retNum +
        "&channel_id=1" +
        "&mode=24" +
        "&data_type=1" +
        "&keyword=" + encodeURIComponent(keyword);

    var response = await Widget.http.get(searchUrl, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Referer": "https://www.iqiyi.com/"
        }
    });

    var data = response.data;

    if (!data || !data.data || !data.data.list) {
        return [];
    }

    var list = data.data.list;
    var results = [];

    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var albumId = item.albumId || "";
        var tvId = item.tvId || "";
        var title = item.title || item.name || "";
        var description = item.description || item.abstract || "";
        var imageUrl = item.imageUrl || item.picUrl || "";

        var link = albumId ? "https://www.iqiyi.com/a_" + albumId + ".html" : "";

        if (imageUrl) {
            imageUrl = imageUrl.replace("http://", "https://");
        }

        if (title) {
            results.push({
                id: albumId || tvId || Math.random().toString(36),
                type: "url",
                title: title,
                description: description,
                posterPath: imageUrl,
                link: link,
                albumId: albumId,
                tvId: tvId
            });
        }
    }

    return results;
}

// 获取热播内容
async function getHot(params) {
    var category = params.category || "tv";
    var channelId = CHANNEL_MAP[category] || "1";

    console.log("获取热播:", category);

    var apiUrl = "https://mesh.if.iqiyi.com/portal/lw/videolib/data" +
        "?ret_num=30" +
        "&channel_id=" + channelId +
        "&page_id=1";

    var response = await Widget.http.get(apiUrl, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Referer": "https://www.iqiyi.com/"
        }
    });

    var data = response.data;

    if (!data || !data.data || !data.data.list) {
        return [];
    }

    var list = data.data.list;
    var results = [];

    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var albumId = item.albumId || "";
        var tvId = item.tvId || "";
        var title = item.title || item.name || "";
        var imageUrl = item.imageUrl || item.picUrl || "";
        var score = item.score || "";

        var link = albumId ? "https://www.iqiyi.com/a_" + albumId + ".html" : "";

        if (imageUrl) {
            imageUrl = imageUrl.replace("http://", "https://");
        }

        if (title) {
            results.push({
                id: albumId || tvId || Math.random().toString(36),
                type: "url",
                title: title,
                posterPath: imageUrl,
                rating: score,
                link: link,
                albumId: albumId,
                tvId: tvId,
                mediaType: category === "movie" ? "movie" : "tv"
            });
        }
    }

    return results;
}

// 获取风云榜
async function getRanking(params) {
    var category = params.category || "total";

    console.log("获取榜单:", category);

    var hotData = await getHot({ category: category === "total" ? "tv" : category });

    for (var i = 0; i < hotData.length; i++) {
        hotData[i].ranking = i + 1;
    }

    return hotData;
}
