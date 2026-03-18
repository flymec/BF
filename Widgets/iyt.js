WidgetMetadata = {
    id: "iqiyi",
    title: "爱奇艺",
    description: "爱奇艺（分类 + 搜索）",
    author: "GPT",
    site: "https://www.iqiyi.com/",
    version: "1.0.0",
    requiredVersion: "0.0.2",
    detailCacheDuration: 120,

    modules: [
        {
            title: "分类",
            functionName: "getCategory",
            params: []
        },
        {
            title: "分类视频",
            functionName: "getCategoryList",
            params: [
                { name: "cid", type: "input", value: "1" },
                { name: "page", type: "page", value: "1" }
            ]
        },
        {
            title: "搜索",
            functionName: "searchVideos",
            params: [
                { name: "keyword", type: "input", value: "" },
                { name: "page", type: "page", value: "1" }
            ]
        }
    ]
};



// ================= 分类 =================
async function getCategory() {
    return [
        { id: "1", title: "电影" },
        { id: "2", title: "电视剧" },
        { id: "6", title: "综艺" },
        { id: "4", title: "动漫" },
        { id: "5", title: "纪录片" }
    ];
}



// ================= 分类列表 =================
async function getCategoryList(params = {}) {
    const cid = params.cid || "1";
    const page = parseInt(params.page) || 1;

    const url = `https://pcw-api.iqiyi.com/search/recommend/list?channel_id=${cid}&page_id=${page}`;

    try {
        const res = await Widget.http.get(url);
        const json = JSON.parse(res.data);

        const list = json.data?.list || [];

        return list.map(v => ({
            id: String(v.qipu_id),
            title: v.name,
            cover: v.image_url,
            description: v.score || ""
        }));

    } catch (e) {
        return [placeholder("分类加载失败")];
    }
}



// ================= 搜索 =================
async function searchVideos(params = {}) {
    const keyword = params.keyword?.trim();
    const page = parseInt(params.page) || 1;

    if (!keyword) return [placeholder("请输入关键词")];

    const url = `https://mesh.if.iqiyi.com/portal/lw/search/homePageV3?key=${encodeURIComponent(keyword)}&pageNum=${page}`;

    try {
        const res = await Widget.http.get(url);
        const json = JSON.parse(res.data);

        let result = [];

        (json.data?.templates || []).forEach(t => {
            (t.data?.list || []).forEach(v => {
                result.push({
                    id: String(v.qipuId || v.albumId),
                    title: v.name,
                    cover: v.imageUrl,
                    description: v.score || v.desc || ""
                });
            });
        });

        return result.length ? result : [placeholder("无结果")];

    } catch (e) {
        return [placeholder("搜索失败")];
    }
}



// ================= 详情 =================
async function loadDetail(link) {
    const playUrl = `https://www.iqiyi.com/v_${link}.html`;

    return {
        id: link,
        title: "爱奇艺视频",
        videoUrl: playUrl,
        cover: "",
        description: "",
        playerType: "web"
    };
}



// ================= 占位 =================
function placeholder(msg = "暂无数据") {
    return {
        id: "placeholder",
        title: msg,
        cover: "",
        description: ""
    };
}
