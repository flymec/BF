var WidgetMetadata = {
    id: "hanime1_me_taoyhu_v4_5", 
    title: "Hanime1-fw",
    description: "hanime1本地化",
    author: "网络/TaYhu", 
    site: "https://hanime1.me",
    version: "4.5.0",
    requiredVersion: "0.0.2",
    detailCacheDuration: 300,
    modules: [
        {
            title: "搜索影片",
            description: "高级搜索：支持关键词、基础筛选及多重标签自由组合输入",
            requiresWebView: false,
            functionName: "searchVideos",
            cacheDuration: 600, // 优化：10分钟缓存，便于探索新资源
            params: [
                { name: "keyword", title: "搜索关键词", type: "input", description: "输入搜索关键词（标题、番号、作者等）", value: "" },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    description: "排序规则",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
                        { title: "最新上市", value: "new_release" },
                        { title: "最新上传", value: "latest_upload" },
                        { title: "本日排行", value: "daily_rank" },
                        { title: "本周排行", value: "weekly_rank" },
                        { title: "本月排行", value: "monthly_rank" },
                        { title: "观看次数", value: "views" },
                        { title: "点赞比例", value: "likes" },
                        { title: "时长最长", value: "duration" },
                        { title: "他们在看", value: "watching" }
                    ]
                },
                {
                    name: "upload_time",
                    title: "发布日期",
                    type: "enumeration",
                    description: "筛选发布时间",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
                        { title: "过去 24 小时", value: "24h" },
                        { title: "过去 2 天", value: "2d" },
                        { title: "过去 1 周", value: "1w" },
                        { title: "过去 1 个月", value: "1m" },
                        { title: "过去 3 个月", value: "3m" },
                        { title: "过去 1 年", value: "1y" }
                    ]
                },
                {
                    name: "duration_filter",
                    title: "时长范围",
                    type: "enumeration",
                    description: "筛选影片时长",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
                        { title: "1 分钟 +", value: "1m_plus" },
                        { title: "5 分钟 +", value: "5m_plus" },
                        { title: "10 分钟 +", value: "10m_plus" },
                        { title: "20 分钟 +", value: "20m_plus" },
                        { title: "30 分钟 +", value: "30m_plus" },
                        { title: "60 分钟 +", value: "60m_plus" },
                        { title: "0 - 10 分钟", value: "0_10m" },
                        { title: "0 - 20 分钟", value: "0_20m" }
                    ]
                },
                { name: "tags", title: "内容标签", type: "input", description: "输入标签名(简繁均可), 多个标签用空格或逗号分隔", value: "" },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "他们在看",
            description: "当前大家正在观看的影片",
            requiresWebView: false,
            functionName: "loadWatching",
            cacheDuration: 0, // 优化：0秒，实时刷新，不再存旧数据
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "最新上传",
            description: "最新上传影片",
            requiresWebView: false,
            functionName: "loadLatestUpload",
            cacheDuration: 300, // 优化：5分钟缓存，紧跟野生更新
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "本日热门",
            description: "本日热门影片",
            requiresWebView: false,
            functionName: "loadDailyHot",
            cacheDuration: 3600, // 优化：1小时长效缓存，极致省流秒开
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "本周热门",
            description: "本周热门影片",
            requiresWebView: false,
            functionName: "loadWeeklyHot",
            cacheDuration: 3600, // 优化：1小时长效缓存
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "本月热门",
            description: "本月热门影片",
            requiresWebView: false,
            functionName: "loadMonthlyHot",
            cacheDuration: 3600, // 优化：1小时长效缓存
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "最新上市",
            description: "最新上市影片",
            requiresWebView: false,
            functionName: "loadNewRelease",
            cacheDuration: 3600, // 优化：1小时长效缓存
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "影片分类",
            description: "终极过滤：支持全标签下拉菜单选择叠加与自动繁简转换",
            requiresWebView: false,
            functionName: "loadByGenre",
            cacheDuration: 600, // 优化：10分钟缓存
            params: [
                {
                    name: "genre",
                    title: "基础大分类",
                    type: "enumeration",
                    description: "选择主分类",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
                        { title: "里番", value: "rifan" },
                        { title: "泡面番", value: "paomian" },
                        { title: "Motion Anime", value: "motion" },
                        { title: "3DCG", value: "3dcg" },
                        { title: "2D 动画", value: "2d" },
                        { title: "2.5D", value: "2_5d" },
                        { title: "AI 生成", value: "ai" },
                        { title: "MMD", value: "mmd" },
                        { title: "Cosplay", value: "cosplay" }
                    ]
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    description: "排序规则",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
                        { title: "最新上市", value: "new_release" },
                        { title: "最新上传", value: "latest_upload" },
                        { title: "本日排行", value: "daily_rank" },
                        { title: "本周排行", value: "weekly_rank" },
                        { title: "本月排行", value: "monthly_rank" },
                        { title: "观看次数", value: "views" },
                        { title: "点赞比例", value: "likes" },
                        { title: "时长最长", value: "duration" },
                        { title: "他们在看", value: "watching" }
                    ]
                },
                {
                    name: "upload_time",
                    title: "发布日期",
                    type: "enumeration",
                    description: "筛选发布时间",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
                        { title: "过去 24 小时", value: "24h" },
                        { title: "过去 2 天", value: "2d" },
                        { title: "过去 1 周", value: "1w" },
                        { title: "过去 1 个月", value: "1m" },
                        { title: "过去 3 个月", value: "3m" },
                        { title: "过去 1 年", value: "1y" }
                    ]
                },
                {
                    name: "duration_filter",
                    title: "时长范围",
                    type: "enumeration",
                    description: "筛选影片时长",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
                        { title: "1 分钟 +", value: "1m_plus" },
                        { title: "5 分钟 +", value: "5m_plus" },
                        { title: "10 分钟 +", value: "10m_plus" },
                        { title: "20 分钟 +", value: "20m_plus" },
                        { title: "30 分钟 +", value: "30m_plus" },
                        { title: "60 分钟 +", value: "60m_plus" },
                        { title: "0 - 10 分钟", value: "0_10m" },
                        { title: "0 - 20 分钟", value: "0_20m" }
                    ]
                },
                {
                    name: "tag_attr",
                    title: "影片属性",
                    type: "enumeration",
                    description: "影片属性标签",
                    value: "all",
                    enumOptions: [
                        {title:"全部",value:"all"}, {title:"无码",value:"无码"}, {title:"AI解码",value:"AI解码"}, 
                        {title:"中文字幕",value:"中文字幕"}, {title:"中文配音",value:"中文配音"}, {title:"同人作品",value:"同人作品"}, 
                        {title:"断面图",value:"断面图"}, {title:"ASMR",value:"ASMR"}, {title:"1080p",value:"1080p"}, 
                        {title:"60FPS",value:"60FPS"}
                    ]
                },
                {
                    name: "tag_rel",
                    title: "人物关系",
                    type: "enumeration",
                    description: "人物关系标签",
                    value: "all",
                    enumOptions: [
                        {title:"全部",value:"all"}, {title:"近亲",value:"近亲"}, {title:"姐",value:"姐"}, 
                        {title:"妹",value:"妹"}, {title:"母",value:"母"}, {title:"女儿",value:"女儿"}, 
                        {title:"师生",value:"师生"}, {title:"情侣",value:"情侣"}, {title:"青梅竹马",value:"青梅竹马"}, 
                        {title:"同事",value:"同事"}
                    ]
                },
                {
                    name: "tag_role",
                    title: "角色设定",
                    type: "enumeration",
                    description: "角色设定标签",
                    value: "all",
                    enumOptions: [
                        {title:"全部",value:"all"}, {title:"JK",value:"JK"}, {title:"处女",value:"处女"}, 
                        {title:"御姐",value:"御姐"}, {title:"熟女",value:"熟女"}, {title:"人妻",value:"人妻"}, 
                        {title:"女教师",value:"女教师"}, {title:"男教师",value:"男教师"}, {title:"女医生",value:"女医生"}, 
                        {title:"女病人",value:"女病人"}, {title:"护士",value:"护士"}, {title:"OL",value:"OL"}, 
                        {title:"女警",value:"女警"}, {title:"大小姐",value:"大小姐"}, {title:"偶像",value:"偶像"}, 
                        {title:"女仆",value:"女仆"}, {title:"巫女",value:"巫女"}, {title:"魔女",value:"魔女"}, 
                        {title:"修女",value:"修女"}, {title:"风俗娘",value:"风俗娘"}, {title:"公主",value:"公主"}, 
                        {title:"女忍者",value:"女忍者"}, {title:"女战士",value:"女战士"}, {title:"女骑士",value:"女骑士"}, 
                        {title:"魔法少女",value:"魔法少女"}, {title:"异种族",value:"异种族"}, {title:"天使",value:"天使"}, 
                        {title:"妖精",value:"妖精"}, {title:"魔物娘",value:"魔物娘"}, {title:"魅魔",value:"魅魔"}, 
                        {title:"吸血鬼",value:"吸血鬼"}, {title:"女鬼",value:"女鬼"}, {title:"兽娘",value:"兽娘"}, 
                        {title:"福瑞",value:"福瑞"}, {title:"乳牛",value:"乳牛"}, {title:"机械娘",value:"机械娘"}, 
                        {title:"碧池",value:"碧池"}, {title:"痴女",value:"痴女"}, {title:"雌小鬼",value:"雌小鬼"}, 
                        {title:"不良少女",value:"不良少女"}, {title:"傲娇",value:"傲娇"}, {title:"病娇",value:"病娇"}, 
                        {title:"无口",value:"无口"}, {title:"无表情",value:"无表情"}, {title:"眼神死",value:"眼神死"}, 
                        {title:"正太",value:"正太"}, {title:"伪娘",value:"伪娘"}, {title:"扶他",value:"扶他"}
                    ]
                },
                {
                    name: "tag_body",
                    title: "外貌身材",
                    type: "enumeration",
                    description: "外貌身材标签",
                    value: "all",
                    enumOptions: [
                        {title:"全部",value:"all"}, {title:"短发",value:"短发"}, {title:"马尾",value:"马尾"}, 
                        {title:"双马尾",value:"双马尾"}, {title:"丸子头",value:"丸子头"}, {title:"巨乳",value:"巨乳"}, 
                        {title:"乳环",value:"乳环"}, {title:"舌环",value:"舌环"}, {title:"贫乳",value:"贫乳"}, 
                        {title:"黑皮肤",value:"黑皮肤"}, {title:"晒痕",value:"晒痕"}, {title:"眼镜娘",value:"眼镜娘"}, 
                        {title:"兽耳",value:"兽耳"}, {title:"尖耳朵",value:"尖耳朵"}, {title:"异色瞳",value:"异色瞳"}, 
                        {title:"美人痣",value:"美人痣"}, {title:"肌肉女",value:"肌肉女"}, {title:"白虎",value:"白虎"}, 
                        {title:"阴毛",value:"阴毛"}, {title:"腋毛",value:"腋毛"}, {title:"大屌",value:"大屌"}, 
                        {title:"着衣",value:"着衣"}, {title:"水手服",value:"水手服"}, {title:"体操服",value:"体操服"}, 
                        {title:"泳装",value:"泳装"}, {title:"比基尼",value:"比基尼"}, {title:"死库水",value:"死库水"}, 
                        {title:"和服",value:"和服"}, {title:"兔女郎",value:"兔女郎"}, {title:"围裙",value:"围裙"}, 
                        {title:"啦啦队",value:"啦啦队"}, {title:"丝袜",value:"丝袜"}, {title:"吊袜带",value:"吊袜带"}, 
                        {title:"热裤",value:"热裤"}, {title:"迷你裙",value:"迷你裙"}, {title:"性感内衣",value:"性感内衣"}, 
                        {title:"紧身衣",value:"紧身衣"}, {title:"丁字裤",value:"丁字裤"}, {title:"高跟鞋",value:"高跟鞋"}, 
                        {title:"睡衣",value:"睡衣"}, {title:"婚纱",value:"婚纱"}, {title:"旗袍",value:"旗袍"}, 
                        {title:"古装",value:"古装"}, {title:"哥德",value:"哥德"}, {title:"口罩",value:"口罩"}, 
                        {title:"刺青",value:"刺青"}, {title:"淫纹",value:"淫纹"}, {title:"身体写字",value:"身体写字"}
                    ]
                },
                {
                    name: "tag_loc",
                    title: "情境场所",
                    type: "enumeration",
                    description: "情境场所标签",
                    value: "all",
                    enumOptions: [
                        {title:"全部",value:"all"}, {title:"校园",value:"校园"}, {title:"教室",value:"教室"}, 
                        {title:"图书馆",value:"图书馆"}, {title:"保健室",value:"保健室"}, {title:"游泳池",value:"游泳池"}, 
                        {title:"爱情宾馆",value:"爱情宾馆"}, {title:"医院",value:"医院"}, {title:"办公室",value:"办公室"}, 
                        {title:"浴室",value:"浴室"}, {title:"窗边",value:"窗边"}, {title:"公共厕所",value:"公共厕所"}, 
                        {title:"公众场合",value:"公众场合"}, {title:"户外野战",value:"户外野战"}, {title:"电车",value:"电车"}, 
                        {title:"车震",value:"车震"}, {title:"游艇",value:"游艇"}, {title:"露营帐篷",value:"露营帐篷"}, 
                        {title:"电影院",value:"电影院"}, {title:"健身房",value:"健身房"}, {title:"沙滩",value:"沙滩"}, 
                        {title:"温泉",value:"温泉"}, {title:"夜店",value:"夜店"}, {title:"监狱",value:"监狱"}, 
                        {title:"教堂",value:"教堂"}
                    ]
                },
                {
                    name: "tag_plot",
                    title: "故事剧情",
                    type: "enumeration",
                    description: "故事剧情标签",
                    value: "all",
                    enumOptions: [
                        {title:"全部",value:"all"}, {title:"纯爱",value:"纯爱"}, {title:"恋爱喜剧",value:"恋爱喜剧"}, 
                        {title:"后宫",value:"后宫"}, {title:"十指紧扣",value:"十指紧扣"}, {title:"开大车",value:"开大车"}, 
                        {title:"NTR",value:"NTR"}, {title:"精神控制",value:"精神控制"}, {title:"药物",value:"药物"}, 
                        {title:"痴汉",value:"痴汉"}, {title:"阿嘿颜",value:"阿嘿颜"}, {title:"精神崩溃",value:"精神崩溃"}, 
                        {title:"猎奇",value:"猎奇"}, {title:"BDSM",value:"BDSM"}, {title:"捆绑",value:"捆绑"}, 
                        {title:"眼罩",value:"眼罩"}, {title:"项圈",value:"项圈"}, {title:"调教",value:"调教"}, 
                        {title:"异物插入",value:"异物插入"}, {title:"寻欢洞",value:"寻欢洞"}, {title:"肉便器",value:"肉便器"}, 
                        {title:"性奴隶",value:"性奴隶"}, {title:"胃凸",value:"胃凸"}, {title:"强制",value:"强制"}, 
                        {title:"轮奸",value:"轮奸"}, {title:"凌辱",value:"凌辱"}, {title:"性暴力",value:"性暴力"}, 
                        {title:"逆强制",value:"逆强制"}, {title:"女王样",value:"女王样"}, {title:"榨精",value:"榨精"}, 
                        {title:"母女丼",value:"母女丼"}, {title:"姐妹丼",value:"姐妹丼"}, {title:"出轨",value:"出轨"}, 
                        {title:"醉酒",value:"醉酒"}, {title:"摄影",value:"摄影"}, {title:"睡眠奸",value:"睡眠奸"}, 
                        {title:"机械奸",value:"机械奸"}, {title:"虫奸",value:"虫奸"}, {title:"性转换",value:"性转换"}, 
                        {title:"百合",value:"百合"}, {title:"耽美",value:"耽美"}, {title:"时间停止",value:"时间停止"}, 
                        {title:"异世界",value:"异世界"}, {title:"怪兽",value:"怪兽"}, {title:"哥布林",value:"哥布林"}, 
                        {title:"世界末日",value:"世界末日"}
                    ]
                },
                {
                    name: "tag_pos",
                    title: "性交体位",
                    type: "enumeration",
                    description: "性交体位标签",
                    value: "all",
                    enumOptions: [
                        {title:"全部",value:"all"}, {title:"手交",value:"手交"}, {title:"指交",value:"指交"}, 
                        {title:"乳交",value:"乳交"}, {title:"乳头交",value:"乳头交"}, {title:"肛交",value:"肛交"}, 
                        {title:"双洞齐下",value:"双洞齐下"}, {title:"脚交",value:"脚交"}, {title:"素股",value:"素股"}, 
                        {title:"拳交",value:"拳交"}, {title:"3P",value:"3P"}, {title:"群交",value:"群交"}, 
                        {title:"口交",value:"口交"}, {title:"跪舔",value:"跪舔"}, {title:"深喉咙",value:"深喉咙"}, 
                        {title:"口爆",value:"口爆"}, {title:"吞精",value:"吞精"}, {title:"舔蛋蛋",value:"舔蛋蛋"}, 
                        {title:"舔穴",value:"舔穴"}, {title:"69",value:"69"}, {title:"自慰",value:"自慰"}, 
                        {title:"腋交",value:"腋交"}, {title:"舔腋下",value:"舔腋下"}, {title:"发交",value:"发交"}, 
                        {title:"舔耳朵",value:"舔耳朵"}, {title:"舔脚",value:"舔脚"}, {title:"内射",value:"内射"}, 
                        {title:"外射",value:"外射"}, {title:"颜射",value:"颜射"}, {title:"潮吹",value:"潮吹"}, 
                        {title:"怀孕",value:"怀孕"}, {title:"喷奶",value:"喷奶"}, {title:"放尿",value:"放尿"}, 
                        {title:"排便",value:"排便"}, {title:"骑乘位",value:"骑乘位"}, {title:"背后位",value:"背后位"}, 
                        {title:"颜面骑乘",value:"颜面骑乘"}, {title:"火车便当",value:"火车便当"}, {title:"一字马",value:"一字马"}, 
                        {title:"性玩具",value:"性玩具"}, {title:"飞机杯",value:"飞机杯"}, {title:"跳蛋",value:"跳蛋"}, 
                        {title:"毒龙钻",value:"毒龙钻"}, {title:"触手",value:"触手"}, {title:"兽交",value:"兽交"}, 
                        {title:"颈手枷",value:"颈手枷"}, {title:"扯头发",value:"扯头发"}, {title:"掐脖子",value:"掐脖子"}, 
                        {title:"打屁股",value:"打屁股"}, {title:"肉棒打脸",value:"肉棒打脸"}, {title:"阴道外翻",value:"阴道外翻"}, 
                        {title:"男乳首责",value:"男乳首责"}, {title:"接吻",value:"接吻"}, {title:"舌吻",value:"舌吻"}, 
                        {title:"POV",value:"POV"}
                    ]
                },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "新番预告",
            description: "查看即将上映的新番",
            requiresWebView: false,
            functionName: "loadPreviews",
            cacheDuration: 3600, // 保持：1小时缓存
            params: []
        }
    ]
};

const BASE_URL = "https://hanime1.me";
const REQUEST_TIMEOUT = 10000;

function getCommonHeaders() {
    return {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": BASE_URL,
        "Accept-Language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };
}

async function httpGetWithTimeout(url) {
    return Widget.http.get(url, {
        headers: getCommonHeaders(),
        timeout: REQUEST_TIMEOUT
    });
}

function normalizeImageUrl(src) {
    if (!src) return "";
    if (src.startsWith("//")) return "https:" + src;
    if (src.startsWith("/")) return BASE_URL + src;
    if (!src.startsWith("http")) return BASE_URL + "/" + src;
    return src;
}

async function fetchAndParse(url) {
    try {
        const response = await httpGetWithTimeout(url);
        const $ = Widget.html.load(response.data);
        const items = [];

        $('a[href*="/watch?v="]').each((i, el) => {
            const $a = $(el);
            const href = $a.attr('href');
            if (!href) return;

            let link = href;
            if (!link.startsWith('http')) {
                link = BASE_URL + (link.startsWith('/') ? '' : '/') + link;
            }

            if (items.some(it => it.link === link)) return;

            let poster = "";
            const $img = $a.find('img').first();
            if ($img.length) {
                poster = $img.attr('data-src') || $img.attr('src') || "";
                if (poster.includes('background.jpg')) poster = "";
            }
            if (!poster) {
                const $cardImg = $a.closest('.search-doujin-videos, .home-rows-videos-div').find('img').first();
                if ($cardImg.length) {
                    poster = $cardImg.attr('data-src') || $cardImg.attr('src') || "";
                    if (poster.includes('background.jpg')) poster = "";
                }
            }
            poster = normalizeImageUrl(poster);

            let title = $a.find('.card-mobile-title, .home-rows-videos-title, [class*="title"]').first().text().trim();
            if (!title) {
                title = $img.attr('alt') || $a.attr('title') || "";
            }
            if (!title) return;

            const duration = $a.find('.card-mobile-duration, .duration, [class*="time"]').first().text().trim();
            const author = $a.find('.card-mobile-user, .author, [class*="user"]').first().text().trim();

            items.push({
                id: link,
                type: "url",
                title: title,
                posterPath: poster,
                backdropPath: poster,
                mediaType: "movie",
                durationText: duration,
                description: author,
                link: link
            });
        });

        return items;
    } catch (e) {
        console.error(`Fetch error for ${url}:`, e);
        return [];
    }
}

// --- 映射字典函数集合 ---

function mapSortToApi(sortValue) {
    const map = {
        "new_release": "最新上市",
        "latest_upload": "最新上傳",
        "daily_rank": "本日排行",
        "weekly_rank": "本週排行",
        "monthly_rank": "本月排行",
        "views": "觀看次數",
        "likes": "點讚比例",
        "duration": "時長最長",
        "watching": "他們在看"
    };
    return map[sortValue] || "";
}

function mapGenreToApi(genreValue) {
    const map = {
        "rifan": "裏番",           
        "paomian": "泡麵番",         
        "motion": "Motion Anime",
        "3dcg": "3DCG",
        "2d": "2D動畫",             
        "2_5d": "2.5D",         
        "ai": "AI生成",
        "mmd": "MMD",
        "cosplay": "Cosplay"
    };
    return map[genreValue] || "";
}

function mapTimeToApi(val) {
    const map = {
        "24h": "過去 24 小時",
        "2d": "過去 2 天",
        "1w": "過去 1 週",
        "1m": "過去 1 個月",
        "3m": "過去 3 個月",
        "1y": "過去 1 年"
    };
    return map[val] || "";
}

function mapDurationToApi(val) {
    const map = {
        "1m_plus": "1 分鐘 +",
        "5m_plus": "5 分鐘 +",
        "10m_plus": "10 分鐘 +",
        "20m_plus": "20 分鐘 +",
        "30m_plus": "30 分鐘 +",
        "60m_plus": "60 分鐘 +",
        "0_10m": "0 - 10 分鐘",
        "0_20m": "0 - 20 分鐘"
    };
    return map[val] || "";
}

/**
 * 核心引擎：全量繁简转换字典
 */
const S2T_MAP = {
    "无码": "無碼", "AI解码": "AI解碼", "中文字幕": "中文字幕", "中文配音": "中文配音", "同人作品": "同人作品", "断面图": "斷面圖", 
    "近亲": "近親", "女儿": "女兒", "师生": "師生", "情侣": "情侶", "青梅竹马": "青梅竹馬", 
    "处女": "處女", "御姐": "御姐", "熟女": "熟女", "女教师": "女教師", "男教师": "男教師", "女医生": "女醫生", "女病人": "女病人", "护士": "護士", "女警": "女警", "大小姐": "大小姐", "女仆": "女僕", "魔女": "魔女", "修女": "修女", "风俗娘": "風俗娘", "女忍者": "女忍者", "女战士": "女戰士", "女骑士": "女騎士", "魔法少女": "魔法少女", "异种族": "異種族", "妖精": "妖精", "魔物娘": "魔物娘", "魅魔": "魅魔", "吸血鬼": "吸血鬼", "女鬼": "女鬼", "兽娘": "獸娘", "乳牛": "乳牛", "机械娘": "機械娘", "痴女": "痴女", "雌小鬼": "雌小鬼", "不良少女": "不良少女", "傲娇": "傲嬌", "病娇": "病嬌", "无表情": "無表情", "伪娘": "偽娘", "扶他": "扶他",
    "短发": "短髮", "马尾": "馬尾", "双马尾": "雙馬尾", "丸子头": "丸子頭", "乳环": "乳環", "舌环": "舌環", "贫乳": "貧乳", "黑皮肤": "黑皮膚", "晒痕": "曬痕", "眼镜娘": "眼鏡娘", "兽耳": "獸耳", "尖耳朵": "尖耳朵", "异色瞳": "異色瞳", "美人痣": "美人痣", "肌肉女": "肌肉女", "阴毛": "陰毛", "腋毛": "腋毛", "大屌": "大屌", "着衣": "著衣", "体操服": "體操服", "兔女郎": "兔女郎", "围裙": "圍裙", "啦啦队": "啦啦隊", "丝袜": "絲襪", "吊袜带": "吊襪帶", "热裤": "熱褲", "迷你裙": "迷你裙", "性感内衣": "性感內衣", "紧身衣": "緊身衣", "丁字裤": "丁字褲", "高跟鞋": "高跟鞋", "婚纱": "婚紗", "旗袍": "旗袍", "哥德": "哥德", "刺青": "刺青", "淫纹": "淫紋", "身体写字": "身體寫字",
    "校园": "校園", "图书馆": "圖書館", "游泳池": "游泳池", "爱情宾馆": "愛情賓館", "医院": "醫院", "办公室": "辦公室", "窗边": "窗邊", "公共厕所": "公共廁所", "公众场合": "公眾场合", "户外野战": "戶外野戰", "电车": "電車", "车震": "車震", "游艇": "遊艇", "露营帐篷": "露營帳篷", "电影院": "電影院", "健身房": "健身房", "沙滩": "沙灘", "夜店": "夜店", "监狱": "監獄", 
    "纯爱": "純愛", "恋爱喜剧": "戀愛喜劇", "后宫": "後宮", "十指紧扣": "十指緊扣", "开大车": "開大車", "精神控制": "精神控制", "药物": "藥物", "痴汉": "痴漢", "阿嘿颜": "阿嘿顏", "精神崩溃": "精神崩潰", "猎奇": "獵奇", "捆绑": "綑綁", "项圈": "項圈", "调教": "調教", "异物插入": "異物插入", "寻欢洞": "尋歡洞", "肉便器": "肉便器", "性奴隶": "性奴隸", "胃凸": "胃凸", "强制": "強制", "轮奸": "輪姦", "凌辱": "凌辱", "性暴力": "性暴力", "逆强制": "逆強制", "女王样": "女王樣", "榨精": "榨精", "母女丼": "母女丼", "姐妹丼": "姐妹丼", "出轨": "出軌", "醉酒": "醉酒", "睡眠奸": "睡眠姦", "机械奸": "機械姦", "虫奸": "蟲姦", "性转换": "性轉換", "时间停止": "時間停止", "异世界": "異世界", "怪兽": "怪獸", "世界末日": "世界末日",
    "手交": "手交", "指交": "指交", "乳交": "乳交", "乳头交": "乳頭交", "肛交": "肛交", "双洞齐下": "雙洞齊下", "脚交": "腳交", "素股": "素股", "拳交": "拳交", "群交": "群交", "口交": "口交", "跪舔": "跪舔", "深喉咙": "深喉嚨", "吞精": "吞精", "舔蛋蛋": "舔蛋蛋", "舔穴": "舔穴", "自慰": "自慰", "腋交": "腋交", "舔腋下": "舔腋下", "发交": "髮交", "舔耳朵": "舔耳朵", "舔脚": "舔腳", "内射": "內射", "颜射": "顏射", "怀孕": "懷孕", "喷奶": "噴奶", "骑乘位": "騎乘位", "背后位": "背後位", "颜面骑乘": "顏面騎乘", "火车便当": "火車便當", "一字马": "一字馬", "性玩具": "性玩具", "飞机杯": "飛機杯", "跳蛋": "跳蛋", "毒龙钻": "毒龍鑽", "触手": "觸手", "兽交": "獸交", "颈手枷": "頸手枷", "扯头发": "扯頭髮", "掐脖子": "掐脖子", "打屁股": "打屁股", "肉棒打脸": "肉棒打臉", "阴道外翻": "陰道外翻", "男乳首责": "男乳首責", "接吻": "接吻", "舌吻": "舌吻",
    "动态": "動態", "动画": "動畫", "里番": "裏番", "泡面番": "泡麵番"
};

/**
 * 扫描并替换字符串中的所有简体标签词汇
 */
function convertToTraditional(text) {
    if (!text) return "";
    let result = text;
    for (const [simp, trad] of Object.entries(S2T_MAP)) {
        result = result.split(simp).join(trad);
    }
    return result;
}

/**
 * 通用提取标签并拼接的辅助函数 (同时兼容分类模块的下拉框，与搜索模块的输入框)
 */
function appendTagsToQuery(params, queryParts) {
    // 1. 处理“影片分类”模块的下拉菜单标签
    const fields = ['tag_attr', 'tag_rel', 'tag_role', 'tag_body', 'tag_plot', 'tag_loc', 'tag_pos'];
    fields.forEach(field => {
        if (params[field] && params[field].trim() && params[field] !== 'all') {
            const tagsList = params[field].split(/[\s,，]+/); 
            for (let tag of tagsList) {
                if (tag && tag !== 'all') {
                    const apiTag = convertToTraditional(tag);
                    queryParts.push(`tags%5B%5D=${encodeURIComponent(apiTag)}`);
                }
            }
        }
    });

    // 2. 处理“搜索影片”模块的单行手打多重标签
    if (params.tags && params.tags.trim()) {
        const tagsList = params.tags.split(/[\s,，]+/); 
        for (let tag of tagsList) {
            if (tag && tag !== 'all') {
                const apiTag = convertToTraditional(tag);
                queryParts.push(`tags%5B%5D=${encodeURIComponent(apiTag)}`);
            }
        }
    }
}

// --- 请求触发函数集合 ---

async function searchVideos(params) {
    const page = params.page || 1;
    const rawKeyword = params.keyword || "";
    const sort = mapSortToApi(params.sort_by);
    const time = mapTimeToApi(params.upload_time);
    const duration = mapDurationToApi(params.duration_filter);

    let url = `${BASE_URL}/search`;
    const queryParts = [];
    
    if (rawKeyword) {
        const processedKeyword = convertToTraditional(rawKeyword);
        queryParts.push(`query=${encodeURIComponent(processedKeyword)}`);
    }

    if (sort) queryParts.push(`sort=${encodeURIComponent(sort)}`);
    if (time) queryParts.push(`time=${encodeURIComponent(time)}`);
    if (duration) queryParts.push(`duration=${encodeURIComponent(duration)}`);
    
    appendTagsToQuery(params, queryParts);

    if (page > 1) queryParts.push(`page=${page}`);

    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }
    
    return fetchAndParse(url);
}

async function loadByGenre(params) {
    const page = params.page || 1;
    const genre = mapGenreToApi(params.genre);
    const sort = mapSortToApi(params.sort_by);
    const time = mapTimeToApi(params.upload_time);
    const duration = mapDurationToApi(params.duration_filter);

    let url = `${BASE_URL}/search`;
    const queryParts = [];
    
    if (genre) queryParts.push(`genre=${encodeURIComponent(genre)}`);
    if (sort) queryParts.push(`sort=${encodeURIComponent(sort)}`);
    if (time) queryParts.push(`time=${encodeURIComponent(time)}`);
    if (duration) queryParts.push(`duration=${encodeURIComponent(duration)}`);
    
    appendTagsToQuery(params, queryParts);

    if (page > 1) queryParts.push(`page=${page}`);

    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }
    
    return fetchAndParse(url);
}


async function loadWatching(params) {
    const page = params.page || 1;
    let url = `${BASE_URL}/search?sort=${encodeURIComponent('他們在看')}`;
    if (page > 1) url += `&page=${page}`;
    return fetchAndParse(url);
}

async function loadLatestUpload(params) {
    const page = params.page || 1;
    let url = `${BASE_URL}/search?sort=${encodeURIComponent('最新上傳')}`;
    if (page > 1) url += `&page=${page}`;
    return fetchAndParse(url);
}

async function loadDailyHot(params) {
    const page = params.page || 1;
    let url = `${BASE_URL}/search?sort=${encodeURIComponent('本日排行')}`;
    if (page > 1) url += `&page=${page}`;
    return fetchAndParse(url);
}

async function loadWeeklyHot(params) {
    const page = params.page || 1;
    let url = `${BASE_URL}/search?sort=${encodeURIComponent('本週排行')}`;
    if (page > 1) url += `&page=${page}`;
    return fetchAndParse(url);
}

async function loadMonthlyHot(params) {
    const page = params.page || 1;
    let url = `${BASE_URL}/search?sort=${encodeURIComponent('本月排行')}`;
    if (page > 1) url += `&page=${page}`;
    return fetchAndParse(url);
}

async function loadNewRelease(params) {
    const page = params.page || 1;
    let url = `${BASE_URL}/search?sort=${encodeURIComponent('最新上市')}`;
    if (page > 1) url += `&page=${page}`;
    return fetchAndParse(url);
}

function parsePreviewsHtml(html, pageUrl) {
    const $ = Widget.html.load(html);
    const items = [];

    $('a[href*="/watch?v="]').each((i, el) => {
        const $a = $(el);
        const href = $a.attr('href');
        if (!href) return;

        let link = href;
        if (!link.startsWith('http')) {
            link = BASE_URL + (link.startsWith('/') ? '' : '/') + link;
        }

        if (items.some(it => it.link === link)) return;

        let poster = "";
        const $img = $a.find('img').first();
        if ($img.length) {
            poster = $img.attr('data-src') || $img.attr('src') || "";
            if (poster.includes('background.jpg')) poster = "";
        }
        if (!poster) {
            const $cardImg = $a.closest('.search-doujin-videos, .home-rows-videos-div, .video-card').find('img').first();
            if ($cardImg.length) {
                poster = $cardImg.attr('data-src') || $cardImg.attr('src') || "";
                if (poster.includes('background.jpg')) poster = "";
            }
        }
        poster = normalizeImageUrl(poster);

        let title = $a.find('.card-mobile-title, .home-rows-videos-title, [class*="title"]').first().text().trim();
        if (!title) {
            title = $img.attr('alt') || $a.attr('title') || "";
        }
        if (!title) {
            const $header = $a.closest('div').prevAll('h3, h4, h5').first();
            if ($header.length) title = $header.text().trim();
        }
        if (!title) return; 

        const duration = $a.find('.card-mobile-duration, .duration, [class*="time"]').first().text().trim();
        const author = $a.find('.card-mobile-user, .author, [class*="user"]').first().text().trim();

        items.push({
            id: link,
            type: "url",
            title: title,
            posterPath: poster,
            backdropPath: poster,
            mediaType: "movie",
            durationText: duration,
            description: author || "新番预告",
            link: link
        });
    });

    if (items.length > 0) return items;

    $('.preview-image-modal-trigger, .hidden-sm.hidden-md.hidden-lg .preview-image-modal-trigger').each((i, el) => {
        const $img = $(el);
        let poster = $img.attr('src') || $img.attr('data-src');
        if (!poster) return;
        poster = normalizeImageUrl(poster);

        let title = $img.attr('alt') || "";
        if (!title) {
            const $caption = $img.closest('div').find('h5.caption, h4, h3');
            if ($caption.length) {
                title = $caption.text().trim().split('\n')[0];
            }
        }
        if (!title) title = "新番预告";
        if (title.length > 40) title = title.substring(0, 40) + "...";

        const link = pageUrl; 

        items.push({
            id: poster,
            type: "url",
            title: title,
            posterPath: poster,
            backdropPath: poster,
            mediaType: "movie",
            description: "静态预告 (无播放源)",
            link: link 
        });
    });

    return items;
}

async function loadPreviews(params) {
    const d = new Date();
    const year = d.getFullYear();
    let month = d.getMonth() + 1;
    let paddedMonth = month < 10 ? '0' + month : month;

    const url1 = `${BASE_URL}/previews/${year}${paddedMonth}`;
    const url2 = `${BASE_URL}/previews/${year}-${paddedMonth}`;
    
    let html = "";
    let finalUrl = url1;

    try {
        const response = await httpGetWithTimeout(url1);
        html = response.data;
    } catch (e) {
        try {
            const response2 = await httpGetWithTimeout(url2);
            html = response2.data;
            finalUrl = url2;
        } catch (e2) {
            console.error("Preview load failed on both URLs", e2);
            return [];
        }
    }

    try {
        return parsePreviewsHtml(html, finalUrl); 
    } catch (parseError) {
        console.error("Preview parse failed", parseError);
        return [];
    }
}

async function loadDetail(link) {
    try {
        const response = await httpGetWithTimeout(link);
        const $ = Widget.html.load(response.data);

        let videoUrl = "";
        const qualityIds = ['#video-sd', '#video-hd', '#video-720p', '#video-1080p'];
        for (const id of qualityIds) {
            const val = $(id).val();
            if (val) {
                videoUrl = val;
                break;
            }
        }

        if (!videoUrl) {
            const match = response.data.match(/source\s*=\s*['"](https:\/\/[^'"]+)['"]/);
            if (match) videoUrl = match[1];
        }

        if (!videoUrl) {
            videoUrl = $('video source').attr('src');
        }

        if (!videoUrl) {
            throw new Error("video_url_not_found");
        }

        videoUrl = videoUrl.replace(/&amp;/g, '&');

        const title = $('meta[property="og:title"]').attr('content') || "标题未知";
        const desc = $('meta[property="og:description"]').attr('content') || "";
        const cover = $('meta[property="og:image"]').attr('content') || "";

        const childItems = [];
        $('.home-rows-videos-div a[href*="/watch?v="]').each((i, el) => {
            if (i >= 10) return false;

            const $a = $(el);
            let recLink = $a.attr('href');
            if (!recLink) return;
            if (!recLink.startsWith('http')) {
                recLink = BASE_URL + (recLink.startsWith('/') ? '' : '/') + recLink;
            }

            const $img = $a.find('img').first();
            let recPoster = $img.attr('data-src') || $img.attr('src') || "";
            recPoster = normalizeImageUrl(recPoster);

            let recTitle = $a.find('.home-rows-videos-title, [class*="title"]').first().text().trim();
            if (!recTitle) recTitle = $img.attr('alt') || "相关视频";

            childItems.push({
                id: recLink,
                type: "url",
                title: recTitle,
                posterPath: recPoster,
                backdropPath: recPoster,
                mediaType: "movie",
                link: recLink
            });
        });

        return {
            id: link,
            type: "detail",
            videoUrl: videoUrl,
            title: title,
            description: desc,
            posterPath: normalizeImageUrl(cover),
            backdropPath: normalizeImageUrl(cover),
            mediaType: "movie",
            link: link,
            childItems: childItems,
            headers: getCommonHeaders()
        };

    } catch (error) {
        console.error("Detail load error:", error);
        let errorMsg = "无法加载视频，请重试。";
        if (error.message === "video_url_not_found") {
            errorMsg = "未找到视频地址，可能需登录或该视频已失效。";
        }
        return {
            id: link,
            type: "detail",
            videoUrl: link, 
            title: "加载失败",
            description: errorMsg,
            posterPath: "",
            mediaType: "movie",
            link: link
        };
    }
}
