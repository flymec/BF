/**
 * 爱奇艺 ForwardWidget 模块
 * 提供爱奇艺视频搜索、热播推荐等功能
 */

var WidgetMetadata = {
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
            id: "search",
            title: "搜索视频",
            functionName: "search",
            description: "搜索爱奇艺视频",
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
                    description: "页码",
                    value: 1
                }
            ]
        },
        {
            id: "hot",
            title: "热播推荐",
            functionName: "hot",
            description: "获取爱奇艺热播内容",
            params: [
                {
                    name: "category",
                    title: "分类",
                    type: "enumeration",
                    description: "选择内容分类",
                    value: "tv",
                    enumOptions: [
                        { title: "电视剧", value: "tv" },
                        { title: "电影", value: "movie" },
                        { title: "综艺", value: "variety" },
                        { title: "动漫", value: "anime" }
                    ]
                },
                {
                    name: "type",
                    title: "类型",
                    type: "enumeration",
                    description: "热播类型",
                    value: "hot",
                    enumOptions: [
                        { title: "热播", value: "hot" },
                        { title: "最新", value: "latest" },
                        { title: "推荐", value: "recommend" }
                    ]
                }
            ]
        },
        {
            id: "ranking",
            title: "风云榜",
            functionName: "ranking",
            description: "获取爱奇艺风云榜数据",
            params: [
                {
                    name: "category",
                    title: "榜单类型",
                    type: "enumeration",
                    description: "选择榜单类型",
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
        },
        {
            id: "detail",
            title: "视频详情",
            functionName: "detail",
            description: "获取视频详情",
            params: [
                {
                    name: "albumId",
                    title: "专辑ID",
                    type: "input",
                    description: "爱奇艺专辑ID (album_id)",
                    value: ""
                },
                {
                    name: "tvId",
                    title: "视频ID",
                    type: "input",
                    description: "爱奇艺视频ID (tv_id)",
                    value: ""
                }
            ]
        }
    ],
    search: {
        title: "搜索爱奇艺",
        functionName: "search",
        params: [
            {
                name: "keyword",
                title: "关键词",
                type: "input",
                description: "输入视频名称或关键词",
                value: ""
            }
        ]
    }
};

// 频道ID映射
var CHANNEL_MAP = {
    tv: "1",      // 电视剧
    movie: "2",   // 电影
    variety: "3",  // 综艺
    anime: "5",    // 动漫
    cartoon: "5"   // 动漫别名
};

// 搜索视频
async function search(params) {
    var keyword = params.keyword || "";
    var page = params.page || 1;
    var retNum = 20;

    if (!keyword) {
        throw new Error("请输入搜索关键词");
    }

    console.log("搜索关键词:", keyword, "页码:", page);

    var searchUrl = "https://pcw-api.iqiyi.com/search/recommend/list" +
        "?page_id=" + page +
        "&ret_num=" + retNum +
        "&channel_id=1" +
        "&mode=24" +
        "&data_type=1" +
        "&keyword=" + encodeURIComponent(keyword);

    console.log("搜索URL:", searchUrl);

    var response = await Widget.http.get(searchUrl, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Referer": "https://www.iqiyi.com/",
            "Accept": "application/json, text/plain, */*"
        }
    });

    var data = response.data;
    console.log("搜索响应:", JSON.stringify(data).slice(0, 500));

    if (!data || !data.data || !data.data.list) {
        // 尝试备用搜索方式
        return await searchBackup(keyword, page, retNum);
    }

    return formatSearchResult(data.data.list, keyword);
}

// 备用搜索方式
async function searchBackup(keyword, page, retNum) {
    var searchUrl = "https://so.iqiyi.com/so/q_" + encodeURIComponent(keyword) + "_c_" + page;

    console.log("备用搜索URL:", searchUrl);

    var response = await Widget.http.get(searchUrl, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Referer": "https://www.iqiyi.com/",
            "Accept": "text/html,application/xhtml+xml"
        }
    });

    // 解析HTML响应
    var html = response.data;
    var $ = Widget.html.load(html);

    var results = [];
    $(".qy-mod-li, .qy-mod-li-link").each(function() {
        var $this = $(this);
        var title = $this.attr("title") || $this.text().trim();
        var href = $this.attr("href") || "";

        // 提取专辑ID
        var albumIdMatch = href.match(/album_id[=:]([^&]+)/i) || href.match(/a_([^.]+)\.html/);
        var albumId = albumIdMatch ? albumIdMatch[1] : "";

        // 提取tvId
        var tvIdMatch = href.match(/tv_id[=:]([^&]+)/i) || href.match(/v_([^.]+)\.html/);
        var tvId = tvIdMatch ? tvIdMatch[1] : "";

        if (title && href) {
            results.push({
                id: albumId || tvId || Math.random().toString(36),
                type: "url",
                title: title.substring(0, 100),
                link: href,
                albumId: albumId,
                tvId: tvId
            });
        }
    });

    console.log("备用搜索结果数:", results.length);
    return results.slice(0, retNum);
}

// 格式化搜索结果
function formatSearchResult(list, keyword) {
    var results = [];

    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var albumId = item.albumId || "";
        var tvId = item.tvId || "";
        var videoId = item.videoId || "";
        var title = item.title || item.name || "";
        var description = item.description || item.abstract || "";
        var imageUrl = item.imageUrl || item.picUrl || item.pic || "";
        var duration = item.duration || item.timeLength || "";

        // 构建视频链接
        var link = "";
        if (albumId) {
            link = "https://www.iqiyi.com/a_" + albumId + ".html";
        } else if (tvId) {
            link = "https://www.iqiyi.com/v_" + tvId + ".html";
        }

        // 转换图片URL
        if (imageUrl) {
            imageUrl = imageUrl.replace("http://", "https://");
        }

        if (title) {
            results.push({
                id: albumId || tvId || videoId || Math.random().toString(36),
                type: "url",
                title: title.substring(0, 100),
                description: description.substring(0, 200),
                posterPath: imageUrl,
                duration: duration,
                link: link,
                albumId: albumId,
                tvId: tvId,
                videoId: videoId,
                source: "iqiyi"
            });
        }
    }

    console.log("格式化搜索结果数:", results.length);
    return results;
}

// 获取热播内容
async function hot(params) {
    var category = params.category || "tv";
    var type = params.type || "hot";

    var channelId = CHANNEL_MAP[category] || "1";

    console.log("获取热播内容 - 分类:", category, "类型:", type, "频道ID:", channelId);

    // 使用爱奇艺 mesh API 获取视频库数据
    var apiUrl = "https://mesh.if.iqiyi.com/portal/lw/videolib/data" +
        "?ret_num=30" +
        "&channel_id=" + channelId +
        "&page_id=1" +
        "&mode=" + (type === "hot" ? "24" : "11");

    console.log("热播API URL:", apiUrl);

    var response = await Widget.http.get(apiUrl, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Referer": "https://www.iqiyi.com/",
            "Accept": "application/json, text/plain, */*"
        }
    });

    var data = response.data;
    console.log("热播数据响应:", JSON.stringify(data).slice(0, 500));

    if (!data || !data.data || !data.data.list) {
        return [];
    }

    return formatHotResult(data.data.list, category);
}

// 格式化热播结果
function formatHotResult(list, category) {
    var results = [];

    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var albumId = item.albumId || "";
        var tvId = item.tvId || "";
        var title = item.title || item.name || "";
        var imageUrl = item.imageUrl || item.picUrl || item.pic || "";
        var description = item.description || item.abstract || "";
        var score = item.score || item.rating || "";

        // 确定媒体类型
        var mediaType = "tv";
        if (category === "movie") {
            mediaType = "movie";
        } else if (category === "variety") {
            mediaType = "tv";
        } else if (category === "anime") {
            mediaType = "tv";
        }

        // 构建链接
        var link = "";
        if (albumId) {
            link = "https://www.iqiyi.com/a_" + albumId + ".html";
        } else if (tvId) {
            link = "https://www.iqiyi.com/v_" + tvId + ".html";
        }

        // 转换图片URL
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
                rating: score,
                mediaType: mediaType,
                link: link,
                albumId: albumId,
                tvId: tvId,
                source: "iqiyi"
            });
        }
    }

    console.log("热播结果数:", results.length);
    return results;
}

// 获取风云榜
async function ranking(params) {
    var category = params.category || "total";

    console.log("获取风云榜 - 分类:", category);

    // 风云榜API - 使用不同的频道ID
    var channelId = CHANNEL_MAP[category] || "1";

    // 获取热播内容作为榜单数据
    var hotData = await hot({ category: category, type: "hot" });

    // 添加排名信息
    for (var i = 0; i < hotData.length; i++) {
        hotData[i].ranking = i + 1;
    }

    console.log("榜单结果数:", hotData.length);
    return hotData;
}

// 获取视频详情
async function detail(params) {
    var albumId = params.albumId || "";
    var tvId = params.tvId || "";

    if (!albumId && !tvId) {
        throw new Error("请提供 albumId 或 tvId");
    }

    console.log("获取视频详情 - albumId:", albumId, "tvId:", tvId);

    var link = "";
    if (albumId) {
        link = "https://www.iqiyi.com/a_" + albumId + ".html";
    } else {
        link = "https://www.iqiyi.com/v_" + tvId + ".html";
    }

    // 尝试获取详情页
    var response = await Widget.http.get(link, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Referer": "https://www.iqiyi.com/",
            "Accept": "text/html,application/xhtml+xml"
        }
    });

    var html = response.data;
    var $ = Widget.html.load(html);

    var title = $("title").text().trim() || "";
    var description = $("meta[name=description]").attr("content") || "";
    var imageUrl = $("meta[property=og:image]").attr("content") || "";

    // 提取评分
    var scoreMatch = html.match(/"score":\s*([\d.]+)/);
    var score = scoreMatch ? scoreMatch[1] : "";

    // 提取年份
    var yearMatch = html.match(/(\d{4})/);
    var year = yearMatch ? yearMatch[1] : "";

    return {
        id: albumId || tvId || Math.random().toString(36),
        type: "url",
        title: title.split("_")[0] || title.split("-")[0],
        description: description,
        posterPath: imageUrl,
        rating: score,
        releaseDate: year,
        link: link,
        albumId: albumId,
        tvId: tvId,
        source: "iqiyi"
    };
}
