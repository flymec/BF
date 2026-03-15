// == Metadata =================================================================
var WidgetMetadata = {
    id: "ti.bemarkt.javday",
    title: "JAVDay 完善版",
    author: "flyme",
    description: "整合 JAVDay 所有分类与厂商，支持人气/最新排序，内置搜索与详情解析。",
    version: "1.3.3", // 保持原版本号
    requiredVersion: "0.0.1",
    site: "https://javday.app",
    // 无全局参数，保留空数组
    globalParams: [],

    // 详情函数声明（框架调用，传入 item 的 id）
    detailFunction: "loadDetail",

    modules: [
        {
            title: "🔍 搜索视频",
            functionName: "search",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "keyword",
                    title: "女優/番號/關鍵字",
                    type: "input",
                    value: "",
                    description: "输入关键词搜索"
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "🆕 最新更新",
            functionName: "loadPage",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "url",
                    title: "列表地址",
                    type: "constant",
                    value: "https://javday.app/label/new/"
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "🔥 人气系列",
            functionName: "loadPage",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "url",
                    title: "列表地址",
                    type: "constant",
                    value: "https://javday.app/label/hot/"
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "📀 新作上市",
            functionName: "loadPage",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "url",
                    title: "列表地址",
                    type: "constant",
                    value: "https://javday.app/category/new-release/"
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    value: "new",
                    enumOptions: [
                        { title: "最新上架", value: "new" },
                        { title: "人气最高", value: "popular" }
                    ]
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "🔞 有码视频",
            functionName: "loadPage",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "url",
                    title: "列表地址",
                    type: "constant",
                    value: "https://javday.app/category/censored/"
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    value: "popular",
                    enumOptions: [
                        { title: "最新上架", value: "new" },
                        { title: "人气最高", value: "popular" }
                    ]
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "🈚 无码视频",
            functionName: "loadPage",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "url",
                    title: "列表地址",
                    type: "constant",
                    value: "https://javday.app/category/uncensored/"
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    value: "new",
                    enumOptions: [
                        { title: "最新上架", value: "new" },
                        { title: "人气最高", value: "popular" }
                    ]
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "💧 无码流出",
            functionName: "loadPage",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "url",
                    title: "列表地址",
                    type: "constant",
                    value: "https://javday.app/category/uncensored-leaked/"
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    value: "new",
                    enumOptions: [
                        { title: "最新上架", value: "new" },
                        { title: "人气最高", value: "popular" }
                    ]
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "🍑 杏吧视频",
            functionName: "loadPage",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "url",
                    title: "列表地址",
                    type: "constant",
                    value: "https://javday.app/category/sex8/"
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    value: "popular",
                    enumOptions: [
                        { title: "最新上架", value: "new" },
                        { title: "人气最高", value: "popular" }
                    ]
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "🎎 玩偶姐姐",
            functionName: "loadPage",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "url",
                    title: "列表地址",
                    type: "constant",
                    value: "https://javday.app/category/hongkongdoll/"
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    value: "popular",
                    enumOptions: [
                        { title: "最新上架", value: "new" },
                        { title: "人气最高", value: "popular" }
                    ]
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "🇨🇳 国产 AV",
            functionName: "loadPage",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "url",
                    title: "列表地址",
                    type: "constant",
                    value: "https://javday.app/category/chinese-av/"
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    value: "popular",
                    enumOptions: [
                        { title: "最新上架", value: "new" },
                        { title: "人气最高", value: "popular" }
                    ]
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "🏭 国产厂商",
            functionName: "loadPage",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "url",
                    title: "厂商选择",
                    type: "enumeration",
                    value: "https://javday.app/index.php/category/madou/",
                    enumOptions: [
                        { title: "麻豆传媒", value: "https://javday.app/index.php/category/madou/" },
                        { title: "果冻传媒", value: "https://javday.app/index.php/category/91zhipianchang/" },
                        { title: "天美传媒", value: "https://javday.app/index.php/category/timi/" },
                        { title: "星空无限", value: "https://javday.app/index.php/category/xingkong/" },
                        { title: "皇家华人", value: "https://javday.app/index.php/category/royalasianstudio/" },
                        { title: "蜜桃影像", value: "https://javday.app/index.php/category/mtgw/" },
                        { title: "精东影业", value: "https://javday.app/index.php/category/jdav/" },
                        { title: "台湾 AV", value: "https://javday.app/index.php/category/twav/" },
                        { title: "JVID", value: "https://javday.app/index.php/category/jvid/" },
                        { title: "萝莉社", value: "https://javday.app/index.php/category/luolisheus/" },
                        { title: "糖心VLOG", value: "https://javday.app/index.php/category/txvlog/" },
                        { title: "Psychoporn TW", value: "https://javday.app/index.php/category/psychoporn-tw/" }
                    ]
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    value: "new",
                    enumOptions: [
                        { title: "最新上架", value: "new" },
                        { title: "人气最高", value: "popular" }
                    ]
                },
                { name: "page", title: "页码", type: "page" }
            ]
        }
    ]
};

// == Constants ================================================================
const CONFIG = {
    BASE_URL: "https://javday.app",
    USER_AGENT: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
    LOG_PREFIX: "JAVDay -",
    TIMEOUT: 10000,
};

// == Utility Functions ========================================================

/**
 * 发送 HTTP GET 请求（封装错误处理和 headers）
 * @param {string} url 请求地址
 * @param {string} referer Referer 头，默认使用 BASE_URL
 * @returns {Promise<string>} HTML 内容
 */
async function httpGet(url, referer = CONFIG.BASE_URL) {
    try {
        const response = await Widget.http.get(url, {
            headers: {
                "User-Agent": CONFIG.USER_AGENT,
                Referer: referer,
            },
            timeout: CONFIG.TIMEOUT,
        });
        if (response.status && (response.status < 200 || response.status >= 300)) {
            throw new Error(`HTTP ${response.status}`);
        }
        if (!response?.data) throw new Error("响应内容为空");
        return response.data;
    } catch (error) {
        console.error(`${CONFIG.LOG_PREFIX} 请求失败: ${url}`, error.message);
        throw error;
    }
}

/**
 * 将相对 URL 转换为绝对 URL
 * @param {string} url 原始 URL
 * @returns {string} 绝对 URL
 */
function normalizeUrl(url) {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    if (url.startsWith("//")) return `https:${url}`;
    const base = CONFIG.BASE_URL.replace(/\/+$/, "");
    const path = url.startsWith("/") ? url : `/${url}`;
    return (base + path).replace(/([^:]\/)\/+/g, "$1");
}

/**
 * 从元素的 style 属性中提取背景图片 URL
 * @param {Cheerio} $item 视频项 cheerio 对象
 * @returns {string} 图片 URL
 */
function getCoverImgSrc($item) {
    const styleAttr = $item.find(".videoBox-cover").attr("style");
    if (!styleAttr) return "";
    const match = styleAttr.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
    if (!match || !match[1]) return "";
    return normalizeUrl(match[1]);
}

/**
 * 构建符合视频模块标准的 item 对象
 * @param {Object} data 原始数据
 * @returns {Object} 标准 item
 */
function buildItem({ id, title, poster, backdrop, description, link, mediaType = "movie" }) {
    return {
        id: String(id),          // 直接使用详情页 URL 作为唯一标识
        type: "url",             // 自定义类型，触发 detailFunction
        mediaType: mediaType,
        title: title,
        posterPath: poster || "",
        backdropPath: backdrop || poster || "",
        description: description || "暂无简介",
        link: link || id,        // 保留详情页链接，方便 detail 使用
        // 可选字段，用于丰富展示
        genreTitle: mediaType === "movie" ? "影片" : "剧集",
        subTitle: "",
        rating: 0,
        releaseDate: "",
    };
}

/**
 * 解析视频列表页的 DOM，提取视频项
 * @param {Cheerio} $ cheerio 实例
 * @param {string} context 描述信息（用于返回值）
 * @returns {Array} 视频项数组
 */
function parseVideoList($, context = "来自 JAVDay") {
    const items = [];
    $(".video-wrapper .videoBox").each((index, element) => {
        const $item = $(element);
        const link = $item.attr("href");
        const title = $item.find(".videoBox-info .title").text().trim();
        const imgSrc = getCoverImgSrc($item);

        if (!link || !title) return;

        items.push(buildItem({
            id: normalizeUrl(link),
            title: title,
            poster: imgSrc,
            backdrop: imgSrc,
            description: context,
            link: normalizeUrl(link),
            mediaType: "movie",
        }));
    });
    return items;
}

/**
 * 从 DPlayer 脚本内容中提取视频 URL
 * @param {string} scriptContent 脚本内容
 * @returns {string|null} 视频 URL
 */
function extractVideoUrlFromDPlayerScript(scriptContent) {
    if (!scriptContent) return null;
    const regexes = [
        /video\s*:\s*{\s*[^}]*url\s*:\s*['"]([^'"]+)['"]/,
        /url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/,
    ];
    for (const regex of regexes) {
        const match = scriptContent.match(regex);
        if (match && match[1]) return match[1];
    }
    return null;
}

/**
 * 从详情页 DOM 中提取视频源（综合多种方式）
 * @param {Cheerio} $ cheerio 实例
 * @returns {string|null} 视频 URL（已转换为绝对地址）
 */
function extractVideoUrl($) {
    let videoUrl = null;

    // 1. 查找 DPlayer 脚本
    const dplayerScript = Array.from($("script")).find(el => {
        const content = $(el).html();
        return content && content.includes("new DPlayer");
    });
    if (dplayerScript) {
        videoUrl = extractVideoUrlFromDPlayerScript($(dplayerScript).html());
        if (videoUrl) return normalizeUrl(videoUrl);
    }

    // 2. 常见 video 标签
    videoUrl = $("video#J_prismPlayer").attr("src") ||
               $("source[src*='.m3u8']").attr("src") ||
               $("video source").attr("src");
    if (videoUrl) return normalizeUrl(videoUrl);

    // 3. 脚本中内联的 m3u8 地址
    const scriptContents = Array.from($("script")).map(el => $(el).html());
    for (const content of scriptContents) {
        if (content && content.includes(".m3u8")) {
            const match = content.match(/['"](https?:\/\/[^'"]+\.m3u8[^'"]*)['"]/);
            if (match && match[1]) return normalizeUrl(match[1]);
        }
    }

    // 4. iframe 嵌入
    const iframeSrc = $("iframe[src*='player']").attr("src");
    if (iframeSrc) return normalizeUrl(iframeSrc);

    return null;
}

/**
 * 从 URL 中提取分类/标签 ID（用于构建人气排序路径）
 * @param {string} url 基础 URL
 * @returns {string} ID
 */
function extractCategoryId(url) {
    const parts = url.split("/").filter(p => p && p !== "index.php");
    return parts.pop() || "unknown";
}

/**
 * 构建分页 URL（支持排序）
 * @param {string} baseUrl 基础 URL（如分类页、标签页）
 * @param {string} sortBy 排序方式 new / popular
 * @param {number} page 页码
 * @returns {string} 完整分页 URL
 */
function buildPageUrl(baseUrl, sortBy, page) {
    const cleanBase = baseUrl.replace(/\/+$/, "").replace(/\/page\/\d+$/, "");
    const id = extractCategoryId(cleanBase);
    const isLabel = cleanBase.includes("/label/");

    let path;
    if (sortBy === "popular") {
        path = `/fiter/by/hits/id/${id}/`;
    } else {
        path = isLabel ? `/label/${id}/` : `/category/${id}/`;
    }

    if (cleanBase.includes("index.php")) {
        path = `/index.php${path}`;
    }

    if (page > 1) {
        path += `page/${page}/`;
    }

    return path;
}

/**
 * 将路径转换为完整 URL
 * @param {string} path 路径
 * @returns {string} 完整 URL
 */
function getFullUrl(path) {
    if (path.startsWith("http")) return path;
    return `${CONFIG.BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

// == Core Functions ===========================================================

/**
 * 加载通用列表页（分类/标签/厂商）
 * @param {Object} params 参数 { url, sort_by, page }
 * @returns {Promise<Array>} 视频项数组
 */
async function loadPage(params = {}) {
    const { url, sort_by = "new", page = 1 } = params;
    if (!url) throw new Error("缺少 URL 参数");

    // 构建目标 URL
    let targetUrl;
    if (sort_by === "popular") {
        const popularPath = buildPageUrl(url, "popular", page);
        targetUrl = getFullUrl(popularPath);
    } else {
        const normalPath = buildPageUrl(url, "new", page);
        targetUrl = getFullUrl(normalPath);
    }

    try {
        const html = await httpGet(targetUrl, url);
        const $ = Widget.html.load(html);
        const items = parseVideoList($, `排序:${sort_by === "new" ? "最新" : "人气"}`);

        // 如果人气路径返回空列表且不是普通路径，尝试降级
        if (items.length === 0 && sort_by === "popular") {
            console.warn(`${CONFIG.LOG_PREFIX} 人气路径无数据，降级到普通路径`);
            const fallbackPath = buildPageUrl(url, "new", page);
            const fallbackHtml = await httpGet(getFullUrl(fallbackPath), url);
            const $fallback = Widget.html.load(fallbackHtml);
            return parseVideoList($fallback, "排序:最新(人气降级)");
        }

        return items;
    } catch (error) {
        // 如果人气路径请求失败且是 popular，尝试普通路径
        if (sort_by === "popular") {
            console.warn(`${CONFIG.LOG_PREFIX} 人气路径请求失败，尝试降级`, error.message);
            const fallbackPath = buildPageUrl(url, "new", page);
            const fallbackHtml = await httpGet(getFullUrl(fallbackPath), url);
            const $fallback = Widget.html.load(fallbackHtml);
            return parseVideoList($fallback, "排序:最新(人气降级)");
        }
        throw error;
    }
}

/**
 * 搜索视频
 * @param {Object} params 参数 { keyword, page }
 * @returns {Promise<Array>} 视频项数组
 */
async function search(params = {}) {
    const { keyword, page = 1 } = params;
    if (!keyword) throw new Error("请输入搜索关键词");

    const encodedKeyword = encodeURIComponent(keyword);
    let searchUrl;
    if (page === 1) {
        searchUrl = `${CONFIG.BASE_URL}/search/wd/${encodedKeyword}/`;
    } else {
        searchUrl = `${CONFIG.BASE_URL}/search/wd/${encodedKeyword}/page/${page}/`;
    }

    const html = await httpGet(searchUrl);
    const $ = Widget.html.load(html);
    const items = parseVideoList($, `搜索: ${keyword}`);
    return items;
}

/**
 * 加载视频详情，提取播放地址（被 detailFunction 调用）
 * @param {string} id 视频项的唯一标识（此处为详情页 URL）
 * @returns {Promise<Object>} 视频源对象
 */
async function loadDetail(id) {
    const fullLink = normalizeUrl(id);
    const html = await httpGet(fullLink, fullLink);
    const $ = Widget.html.load(html);

    const videoUrl = extractVideoUrl($);
    if (!videoUrl) throw new Error("无法找到视频源");

    return {
        id: fullLink,
        type: "url",
        videoUrl: videoUrl,
        customHeaders: {
            Referer: fullLink,
            "User-Agent": CONFIG.USER_AGENT,
        },
    };
}
