var WidgetMetadata = {
id: “jable”,
title: “Jable”,
description: “获取 Jable 视频”,
author: “nibiru”,
site: “https://github.com/quantumultxx/FW-Widgets”,
version: “1.0.9”,
modules: [
{
id: “search”,
title: “搜索”,
description: “搜索”,
functionName: “search”,
cacheDuration: 3600,
params: [
{
name: “keyword”,
title: “关键词”,
type: “string”,
description: “关键词”
},
{
name: “sort_by”,
title: “排序”,
type: “enumeration”,
description: “排序”,
enumOptions: [
{ title: “最多观看”, value: “video_viewed” },
{ title: “近期最佳”, value: “post_date_and_popularity” },
{ title: “最近更新”, value: “post_date” },
{ title: “最多收藏”, value: “most_favourited” }
],
defaultValue: “post_date_and_popularity”
},
{ name: “page”, title: “页码”, type: “page” }
]
},
{
id: “hot”,
title: “热门”,
description: “热门影片”,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{
name: “url”,
title: “列表地址”,
type: “constant”,
description: “列表地址”,
defaultValue: “https://jable.tv/hot/?mode=async&function=get_block&block_id=list_videos_common_videos_list”
},
{
name: “sort_by”,
title: “排序”,
type: “enumeration”,
description: “排序”,
enumOptions: [
{ title: “今日热门”, value: “video_viewed_today” },
{ title: “本周热门”, value: “video_viewed_week” },
{ title: “本月热门”, value: “video_viewed_month” },
{ title: “所有时间”, value: “video_viewed” }
],
defaultValue: “video_viewed_week”
},
{ name: “page”, title: “页码”, type: “page” }
]
},
{
id: “latest”,
title: “最新”,
description: “最新上市影片”,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{
name: “url”,
title: “列表地址”,
type: “constant”,
description: “列表地址”,
defaultValue: “https://jable.tv/new-release/?mode=async&function=get_block&block_id=list_videos_common_videos_list”
},
{
name: “sort_by”,
title: “排序”,
type: “enumeration”,
description: “排序”,
enumOptions: [
{ title: “最新发布”, value: “post_date” },
{ title: “最多观看”, value: “video_viewed” },
{ title: “最多收藏”, value: “most_favourited” }
],
defaultValue: “post_date”
},
{ name: “page”, title: “页码”, type: “page” }
]
},
{
id: “chinese”,
title: “中文”,
description: “中文字幕影片”,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{
name: “url”,
title: “列表地址”,
type: “constant”,
description: “列表地址”,
defaultValue: “https://jable.tv/categories/chinese-subtitle/?mode=async&function=get_block&block_id=list_videos_common_videos_list”
},
{
name: “sort_by”,
title: “排序”,
type: “enumeration”,
description: “排序”,
enumOptions: [
{ title: “最近更新”, value: “post_date” },
{ title: “最多观看”, value: “video_viewed” },
{ title: “最多收藏”, value: “most_favourited” }
],
defaultValue: “post_date”
},
{ name: “page”, title: “页码”, type: “page” }
]
},
{
id: “models”,
title: “女优”,
description: “按女优分类浏览影片”,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{
name: “url”,
title: “选择女优”,
type: “enumeration”,
enumOptions: [
{ title: “三上悠亚”, value: “https://jable.tv/s1/models/yua-mikami/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “楪可怜”, value: “https://jable.tv/models/86b2f23f95cc485af79fe847c5b9de8d/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “小野夕子”, value: “https://jable.tv/models/2958338aa4f78c0afb071e2b8a6b5f1b/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “大槻响”, value: “https://jable.tv/models/hibiki-otsuki/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “藤森里穗”, value: “https://jable.tv/models/riho-fujimori/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “JULIA”, value: “https://jable.tv/models/julia/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “明里䌷”, value: “https://jable.tv/models/tsumugi-akari/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “桃乃木香奈”, value: “https://jable.tv/models/momonogi-kana/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “水户香奈”, value: “https://jable.tv/models/kana-mito/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “涼森れむ”, value: “https://jable.tv/models/7cadf3e484f607dc7d0f1c0e7a83b007/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “本庄鈴”, value: “https://jable.tv/models/honjou-suzu/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “桜空もも”, value: “https://jable.tv/models/sakura-momo/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “河北彩伽”, value: “https://jable.tv/models/saika-kawakita2/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “神木麗”, value: “https://jable.tv/models/ef9b1ab9a21b58d6ee4d7d97ab883288/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “七泽美亚”, value: “https://jable.tv/models/nanasawa-mia/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “吉沢明歩”, value: “https://jable.tv/models/akiho-yoshizawa/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “小泽菜穗”, value: “https://jable.tv/models/2ec30dc8e35906a29fe5c8f5b97e6c89/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “三原ほのか”, value: “https://jable.tv/models/mihara-honoka/?mode=async&function=get_block&block_id=list_videos_common_videos_list” }
],
defaultValue: “https://jable.tv/s1/models/yua-mikami/?mode=async&function=get_block&block_id=list_videos_common_videos_list”
},
{
name: “sort_by”,
title: “排序”,
type: “enumeration”,
enumOptions: [
{ title: “最近更新”, value: “post_date” },
{ title: “最多观看”, value: “video_viewed” },
{ title: “最多收藏”, value: “most_favourited” }
],
defaultValue: “post_date”
},
{ name: “page”, title: “页码”, type: “page” }
]
},
{
id: “costume”,
title: “衣着”,
description: “按衣着分类浏览影片”,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{
name: “url”,
title: “选择衣着”,
type: “enumeration”,
enumOptions: [
{ title: “黑丝”, value: “https://jable.tv/tags/black-pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “肉丝”, value: “https://jable.tv/tags/flesh-toned-pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “丝袜”, value: “https://jable.tv/tags/pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “兽耳”, value: “https://jable.tv/tags/kemonomimi/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “渔网”, value: “https://jable.tv/tags/fishnets/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “水着”, value: “https://jable.tv/tags/swimsuit/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “校服”, value: “https://jable.tv/tags/school-uniform/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “旗袍”, value: “https://jable.tv/tags/cheongsam/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “婚纱”, value: “https://jable.tv/tags/wedding-dress/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “女仆”, value: “https://jable.tv/tags/maid/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “和服”, value: “https://jable.tv/tags/kimono/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “眼镜娘”, value: “https://jable.tv/tags/glasses/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “过膝袜”, value: “https://jable.tv/tags/knee-socks/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “运动装”, value: “https://jable.tv/tags/sportswear/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “兔女郎”, value: “https://jable.tv/tags/bunny-girl/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “Cosplay”, value: “https://jable.tv/tags/Cosplay/?mode=async&function=get_block&block_id=list_videos_common_videos_list” }
],
defaultValue: “https://jable.tv/tags/black-pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list”
},
{
name: “sort_by”,
title: “排序”,
type: “enumeration”,
enumOptions: [
{ title: “最近更新”, value: “post_date” },
{ title: “最多观看”, value: “video_viewed” },
{ title: “最多收藏”, value: “most_favourited” }
],
defaultValue: “post_date”
},
{ name: “page”, title: “页码”, type: “page” }
]
},
{
id: “body”,
title: “身材”,
description: “按身材分类浏览影片”,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{
name: “url”,
title: “选择身材”,
type: “enumeration”,
enumOptions: [
{ title: “长身”, value: “https://jable.tv/tags/tall/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “软体”, value: “https://jable.tv/tags/flexible-body/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “贫乳”, value: “https://jable.tv/tags/small-tits/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “美腿”, value: “https://jable.tv/tags/beautiful-leg/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “美尻”, value: “https://jable.tv/tags/beautiful-butt/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “纹身”, value: “https://jable.tv/tags/tattoo/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “短发”, value: “https://jable.tv/tags/short-hair/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “白虎”, value: “https://jable.tv/tags/hairless-pussy/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “熟女”, value: “https://jable.tv/tags/mature-woman/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “巨乳”, value: “https://jable.tv/tags/big-tits/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “少女”, value: “https://jable.tv/tags/girl/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “娇小”, value: “https://jable.tv/tags/dainty/?mode=async&function=get_block&block_id=list_videos_common_videos_list” }
],
defaultValue: “https://jable.tv/tags/big-tits/?mode=async&function=get_block&block_id=list_videos_common_videos_list”
},
{
name: “sort_by”,
title: “排序”,
type: “enumeration”,
enumOptions: [
{ title: “最近更新”, value: “post_date” },
{ title: “最多观看”, value: “video_viewed” },
{ title: “最多收藏”, value: “most_favourited” }
],
defaultValue: “post_date”
},
{ name: “page”, title: “页码”, type: “page” }
]
},
{
id: “plot”,
title: “剧情”,
description: “按剧情分类浏览影片”,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{
name: “url”,
title: “选择剧情”,
type: “enumeration”,
enumOptions: [
{ title: “出轨”, value: “https://jable.tv/tags/affair/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “醜男”, value: “https://jable.tv/tags/ugly-man/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “亲属”, value: “https://jable.tv/tags/kinship/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “童贞”, value: “https://jable.tv/tags/virginity/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “复仇”, value: “https://jable.tv/tags/avenge/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “巨汉”, value: “https://jable.tv/tags/giant/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “媚药”, value: “https://jable.tv/tags/love-potion/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “催眠”, value: “https://jable.tv/tags/hypnosis/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “偷拍”, value: “https://jable.tv/tags/private-cam/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “NTR”, value: “https://jable.tv/tags/ntr/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “年龄差”, value: “https://jable.tv/tags/age-difference/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “时间停止”, value: “https://jable.tv/tags/time-stop/?mode=async&function=get_block&block_id=list_videos_common_videos_list” }
],
defaultValue: “https://jable.tv/tags/affair/?mode=async&function=get_block&block_id=list_videos_common_videos_list”
},
{
name: “sort_by”,
title: “排序”,
type: “enumeration”,
enumOptions: [
{ title: “最近更新”, value: “post_date” },
{ title: “最多观看”, value: “video_viewed” },
{ title: “最多收藏”, value: “most_favourited” }
],
defaultValue: “post_date”
},
{ name: “page”, title: “页码”, type: “page” }
]
},
{
id: “role”,
title: “角色”,
description: “按角色分类浏览影片”,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{
name: “url”,
title: “选择角色”,
type: “enumeration”,
enumOptions: [
{ title: “人妻”, value: “https://jable.tv/tags/wife/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “医生”, value: “https://jable.tv/tags/doctor/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “护士”, value: “https://jable.tv/tags/nurse/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “老师”, value: “https://jable.tv/tags/teacher/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “空姐”, value: “https://jable.tv/tags/flight-attendant/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “情侣”, value: “https://jable.tv/tags/couple/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “主播”, value: “https://jable.tv/tags/female-anchor/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “风俗娘”, value: “https://jable.tv/tags/club-hostess-and-sex-worker/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “家政妇”, value: “https://jable.tv/tags/housewife/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “搜查官”, value: “https://jable.tv/tags/detective/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “家庭教师”, value: “https://jable.tv/tags/private-teacher/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “OL”, value: “https://jable.tv/tags/ol/?mode=async&function=get_block&block_id=list_videos_common_videos_list” }
],
defaultValue: “https://jable.tv/tags/wife/?mode=async&function=get_block&block_id=list_videos_common_videos_list”
},
{
name: “sort_by”,
title: “排序”,
type: “enumeration”,
enumOptions: [
{ title: “最近更新”, value: “post_date” },
{ title: “最多观看”, value: “video_viewed” },
{ title: “最多收藏”, value: “most_favourited” }
],
defaultValue: “post_date”
},
{ name: “page”, title: “页码”, type: “page” }
]
},
{
id: “play”,
title: “玩法”,
description: “按玩法分类浏览影片”,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{
name: “url”,
title: “选择玩法”,
type: “enumeration”,
enumOptions: [
{ title: “露出”, value: “https://jable.tv/tags/outdoor/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “侵犯”, value: “https://jable.tv/tags/intrusion/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “调教”, value: “https://jable.tv/tags/tune/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “捆绑”, value: “https://jable.tv/tags/bondage/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “痴汉”, value: “https://jable.tv/tags/chikan/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “痴女”, value: “https://jable.tv/tags/chizyo/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “按摩”, value: “https://jable.tv/tags/massage/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “多P”, value: “https://jable.tv/tags/groupsex/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “泡姬”, value: “https://jable.tv/tags/soapland/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “潮吹”, value: “https://jable.tv/tags/squirting/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “中出”, value: “https://jable.tv/tags/creampie/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “集团侵犯”, value: “https://jable.tv/tags/gang-intrusion/?mode=async&function=get_block&block_id=list_videos_common_videos_list” }
],
defaultValue: “https://jable.tv/tags/outdoor/?mode=async&function=get_block&block_id=list_videos_common_videos_list”
},
{
name: “sort_by”,
title: “排序”,
type: “enumeration”,
enumOptions: [
{ title: “最近更新”, value: “post_date” },
{ title: “最多观看”, value: “video_viewed” },
{ title: “最多收藏”, value: “most_favourited” }
],
defaultValue: “post_date”
},
{ name: “page”, title: “页码”, type: “page” }
]
},
{
id: “theme”,
title: “主题”,
description: “按主题分类浏览影片”,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{
name: “url”,
title: “选择主题”,
type: “enumeration”,
enumOptions: [
{ title: “角色剧情”, value: “https://jable.tv/categories/roleplay/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “制服诱惑”, value: “https://jable.tv/categories/uniform/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “直接开啪”, value: “https://jable.tv/categories/sex-only/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “丝袜美腿”, value: “https://jable.tv/categories/pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “主奴调教”, value: “https://jable.tv/categories/bdsm/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “多P群交”, value: “https://jable.tv/categories/groupsex/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “男友视角”, value: “https://jable.tv/categories/pov/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “凌辱快感”, value: “https://jable.tv/categories/insult/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “盗摄偷拍”, value: “https://jable.tv/categories/private-cam/?mode=async&function=get_block&block_id=list_videos_common_videos_list” }
],
defaultValue: “https://jable.tv/categories/roleplay/?mode=async&function=get_block&block_id=list_videos_common_videos_list”
},
{
name: “sort_by”,
title: “排序”,
type: “enumeration”,
enumOptions: [
{ title: “最近更新”, value: “post_date” },
{ title: “最多观看”, value: “video_viewed” },
{ title: “最多收藏”, value: “most_favourited” }
],
defaultValue: “post_date”
},
{ name: “page”, title: “页码”, type: “page” }
]
},
{
id: “location”,
title: “地点”,
description: “按地点分类浏览影片”,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{
name: “url”,
title: “选择地点”,
type: “enumeration”,
enumOptions: [
{ title: “电车”, value: “https://jable.tv/tags/tram/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “监狱”, value: “https://jable.tv/tags/prison/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “温泉”, value: “https://jable.tv/tags/hot-spring/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “泳池”, value: “https://jable.tv/tags/swimming-pool/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “汽车”, value: “https://jable.tv/tags/car/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “厕所”, value: “https://jable.tv/tags/toilet/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “学校”, value: “https://jable.tv/tags/school/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “魔镜号”, value: “https://jable.tv/tags/magic-mirror/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “洗浴场”, value: “https://jable.tv/tags/bathing-place/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “图书馆”, value: “https://jable.tv/tags/library/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “健身房”, value: “https://jable.tv/tags/gym-room/?mode=async&function=get_block&block_id=list_videos_common_videos_list” },
{ title: “便利店”, value: “https://jable.tv/tags/store/?mode=async&function=get_block&block_id=list_videos_common_videos_list” }
],
defaultValue: “https://jable.tv/tags/tram/?mode=async&function=get_block&block_id=list_videos_common_videos_list”
},
{
name: “sort_by”,
title: “排序”,
type: “enumeration”,
enumOptions: [
{ title: “最近更新”, value: “post_date” },
{ title: “最多观看”, value: “video_viewed” },
{ title: “最多收藏”, value: “most_favourited” }
],
defaultValue: “post_date”
},
{ name: “page”, title: “页码”, type: “page” }
]
}
]
};

// ─── 工具函数 ────────────────────────────────────────────

function ensureArray(v) {
return Array.isArray(v) ? v : [];
}

function safeData(data) {
if (typeof data === “string”) {
try { return JSON.parse(data); } catch (_) { return data; }
}
return data || “”;
}

var DEFAULT_HEADERS = {
“User-Agent”: “Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36”,
“Accept”: “text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8”
};

// ─── HTML 解析：使用 Widget.dom ──────────────────────────

function parseHtmlToItems(html) {
var items = [];
var docId = Widget.dom.parse(html);
try {
var cards = Widget.dom.select(docId, “.video-img-box”);
ensureArray(cards).forEach(function(card, idx) {
try {
// 获取链接和标题
var titleLinks = Widget.dom.select(card, “.title a”);
if (!titleLinks || titleLinks.length === 0) return;
var linkNode = titleLinks[0];
var href = linkNode.attributes && linkNode.attributes.href ? linkNode.attributes.href : null;
if (!href) return;
var title = (linkNode.text || “”).trim();
if (!title) return;

```
    // 获取封面
    var imgs = Widget.dom.select(card, "img");
    var poster = "";
    if (imgs && imgs[0]) {
      var a = imgs[0].attributes || {};
      poster = a["data-src"] || a["src"] || a["data-original"] || "";
    }

    // 获取时长
    var labels = Widget.dom.select(card, ".absolute-bottom-right .label");
    var duration = labels && labels[0] ? (labels[0].text || "").trim() : "";

    // 提取 ID
    var idMatch = href.match(/\/videos\/([^\/]+)/);
    var id = idMatch ? idMatch[1] : ("item_" + idx);

    var fullLink = href.startsWith("http") ? href : "https://jable.tv" + href;

    items.push({
      id: String(id),
      title: duration ? title + "  " + duration : title,
      posterUrl: poster,
      mediaType: "movie",
      link: fullLink
    });
  } catch (e) {
    console.warn("parseCard err: " + e.message);
  }
});
```

} catch (e) {
console.error(“parseHtmlToItems err: “ + e.message);
}
Widget.dom.remove(docId);
console.log(“parsed items count: “ + items.length);
return items;
}

// ─── 通用列表加载 ─────────────────────────────────────────

async function fetchList(url, sortBy, page) {
var fullUrl = url;
if (sortBy) fullUrl += “&sort_by=” + sortBy;
if (page && page > 1) fullUrl += “&from=” + page;
console.log(“fetchList: “ + fullUrl);
var resp = await Widget.http.get(fullUrl, { headers: DEFAULT_HEADERS });
if (!resp.ok) {
throw new Error(“HTTP “ + resp.status);
}
var html = typeof resp.data === “string” ? resp.data : JSON.stringify(resp.data);
return parseHtmlToItems(html);
}

// ─── 模块函数 ─────────────────────────────────────────────

async function search(params) {
try {
var kw = encodeURIComponent(params.keyword || “”);
if (!kw) return [];
var url = “https://jable.tv/search/” + kw + “/?mode=async&function=get_block&block_id=list_videos_videos_list_search_result&q=” + kw;
return await fetchList(url, params.sort_by, params.page);
} catch (e) {
console.error(“search err: “ + e.message);
return [];
}
}

async function loadPage(params) {
try {
var url = params.url;
if (!url) {
console.error(“loadPage: url is empty”);
return [];
}
return await fetchList(url, params.sort_by, params.page);
} catch (e) {
console.error(“loadPage err: “ + e.message);
return [];
}
}

// ─── loadDetail ───────────────────────────────────────────

async function loadDetail(link) {
console.log(“loadDetail: “ + link);
var resp = await Widget.http.get(link, { headers: DEFAULT_HEADERS });
if (!resp.ok) {
throw new Error(“HTTP “ + resp.status + “ - detail”);
}
var html = typeof resp.data === “string” ? resp.data : JSON.stringify(resp.data);

// 提取 hlsUrl
var hlsMatch = html.match(/var hlsUrl\s*=\s*’([^’]+)’/);
if (!hlsMatch) {
hlsMatch = html.match(/var hlsUrl\s*=\s*”([^”]+)”/);
}
if (!hlsMatch) {
console.error(“loadDetail: hlsUrl not found”);
throw new Error(“hlsUrl not found”);
}
var videoUrl = hlsMatch[1];

// 提取标题
var titleMatch = html.match(/<meta[^>]+property=“og:title”[^>]+content=”([^”]+)”/i);
if (!titleMatch) titleMatch = html.match(/<title>([^<]+)</title>/i);
var title = titleMatch ? titleMatch[1].trim() : “”;

// 提取封面
var coverMatch = html.match(/<meta[^>]+property=“og:image”[^>]+content=”([^”]+)”/i);
var posterUrl = coverMatch ? coverMatch[1] : “”;

return {
title: title,
posterUrl: posterUrl,
videoUrl: videoUrl
};
}
