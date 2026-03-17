var WidgetMetadata = {
  id: "fly.javrate",
  title: "JAVRate",
  description: "JAVRate完美版",
  author: "fly",
  site: "https://www.javrate.com/",
  version: "2.3.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    // 艺人模块
    {
      title: "搜索女优",
      description: "搜索女优影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "artistId",
          title: "搜索艺人",
          type: "input",
          placeholders: [
            { 
              title: "大槻响", value: "大槻响" 
            },
            { 
              title: "美園和花", value: "美園和花" 
            },
            { 
              title: "森澤佳奈", value: "森澤佳奈" 
            },
            { 
              title: "波多野结衣", value: "波多野结衣" 
            },
            { 
              title: "明里紬", value: "明里紬" 
            },
            { 
              title: "松本一香", value: "松本一香" 
            },
            { 
              title: "桃乃木香奈", value: "桃乃木香奈" 
            },
            { 
              title: "希島愛理", value: "希島愛理" 
            },
            { 
              title: "天海翼", value: "天海翼" 
            },
            { 
              title: "JULIA", value: "JULIA" 
            },
            { 
              title: "新有菜", value: "新有菜" 
            },
            { 
              title: "美谷朱里", value: "美谷朱里" 
            },
            { 
              title: "相澤南", value: "相澤南" 
            },
            { 
              title: "藤森里穂", value: "藤森里穂" 
            },
            { 
              title: "天使萌", value: "天使萌" 
            },
            { 
              title: "AIKA", value: "AIKA" 
            },
            { 
              title: "葵司", value: "葵司" 
            },
            { 
              title: "小野夕子", value: "小野夕子" 
            },
            { 
              title: "楪可憐", value: "楪可憐" 
            },
            { 
              title: "三上悠亜", value: "三上悠亜" 
            },
            { 
              title: "水户香奈", value: "水户香奈" 
            },
            { 
              title: "小沢菜穂", value: "小沢菜穂" 
            }
          ],
          value: "大槻响",
          description: "选择或手动输入女优名称"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 标签分类模块
    {
      title: "AV 分类",
      description: "按详细分类浏览所有分类的影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "tagType",
          title: "🏷️ 分类",
          type: "enumeration",
          enumOptions: [
            { title: "热门", value: "hot" },
            { title: "颜值", value: "appearance" },
            { title: "类型", value: "genre" },
            { title: "剧情", value: "plot" },
            { title: "职业", value: "occupation" },
            { title: "关系", value: "relationship" },
            { title: "衣着", value: "outfit" },
            { title: "特征", value: "characteristics" },
            { title: "主题", value: "theme" },
            { title: "状态", value: "state" },
            { title: "玩法", value: "playstyle" },
            { title: "场景", value: "setting" }
          ],
          value: "hot",
          description: "选择标签大类"
        },
        //热门选项
        {
          name: "tagValue",
          title: "具体类型",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["hot"],
          },
          enumOptions: [
            { title: "美脚・美腿", value: "美脚・美腿" },
            { title: "强奸・轮奸", value: "強姦・輪姦" },
            { title: "NTR・寢取", value: "NTR・寢取" },
            { title: "OL·职场", value: "OL・職場" },
            { title: "差旅·相部屋", value: "差旅・相部屋" },
            { title: "鬼畜・SM", value: "鬼畜・SM" },
            { title: "黑丝・肉丝", value: "黑絲・肉絲" },
            { title: "台湾女优", value: "台灣女優" },
            { title: "出道作", value: "出道作" },
            { title: "极上美人", value: "極上美人" },
            { title: "极上巨乳", value: "極上巨乳" },
            { title: "人妻", value: "人妻" },
            { title: "熟女", value: "熟女" },
            { title: "萝莉", value: "蘿莉" },
            { title: "AI女优", value: "AI女優" },
            { title: "魔镜号", value: "魔鏡號" },
            { title: "时间停止", value: "時間停止" },
            { title: "女搜查官", value: "女搜查官" },
            { title: "应召・援交", value: "應召・援交" },
            { title: "感谢祭", value: "感謝祭" },
            { title: "女学生", value: "女學生" },
            { title: "女仆", value: "女僕" },
            { title: "合辑", value: "合輯" },
            { title: "M男・M女", value: "M男・M女" }
          ],
          value: "美脚・美腿",
          description: "选择要浏览的分类"
        },
        //颜值选项
        {
          name: "tagValue",
          title: "具体标签",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["appearance"],
          },
          enumOptions: [
            { title: "美乳", value: "美乳" },
            { title: "性感", value: "性感" },
            { title: "巨乳", value: "巨乳" },
            { title: "美脚", value: "美腳" },
            { title: "苗条", value: "苗條" },
            { title: "美臀", value: "美臀" },
            { title: "美腿", value: "美腿" },
            { title: "色白", value: "色白" },
            { title: "大屁股", value: "大屁股" },
            { title: "高颜值", value: "高顏值" },
            { title: "清纯", value: "清純" },
            { title: "明星脸", value: "明星臉" },
            { title: "小只马", value: "小隻馬" },
            { title: "无毛", value: "無毛" },
            { title: "短发", value: "短髮" },
            { title: "丰满", value: "豐滿" },
            { title: "高妹", value: "高妹" },
            { title: "超爆乳", value: "超爆乳" },
            { title: "贫乳", value: "貧乳" },
            { title: "肤黑", value: "膚黑" },
            { title: "大乳晕", value: "大乳暈" },
            { title: "肌肉", value: "肌肉" },
            { title: "胖女人", value: "胖女人" },
            { title: "双马尾", value: "雙馬尾" },
            { title: "鬃毛", value: "鬃毛" },
            { title: "大鸡巴", value: "大雞巴" },
            { title: "刺青纹身", value: "刺青紋身" },
            { title: "混血", value: "混血" },
            { title: "童颜", value: "童顔" },
            { title: "乳釘、穿孔、乳環", value: "乳釘、穿孔、乳環" }
          ],
          value: "美乳",
          description: "选择要浏览的分类"
        },
        //类型选项
        {
          name: "tagValue",
          title: "具体标签",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["genre"],
          },
          enumOptions: [
            { title: "剧情", value: "劇情" },
            { title: "美少女电影", value: "美少女電影" },
            { title: "形象俱乐部", value: "形象俱樂部" },
            { title: "企画", value: "企畫" },
            { title: "真实拍摄", value: "真實拍攝" },
            { title: "感官作品", value: "感官作品" },
            { title: "单体作品", value: "單體作品" },
            { title: "国产", value: "國產" },
            { title: "奇闻趣事", value: "奇聞趣事" },
            { title: "4K", value: "4K" },
            { title: "真人秀", value: "真人秀" },
            { title: "出道作品", value: "出道作品" },
            { title: "素人作品", value: "素人作品" },
            { title: "魔鬼系", value: "魔鬼系" },
            { title: "奇异的", value: "奇異的" },
            { title: "主观视角", value: "主觀視角" },
            { title: "纪念作", value: "紀念作" },
            { title: "4小時以上作品", value: "4小時以上作品" },
            { title: "精选综合", value: "精選綜合" },
            { title: "精选大合辑", value: "精選大合輯" },
            { title: "纪录片", value: "紀錄片" },
            { title: "故事集", value: "故事集" },
            { title: "二次元", value: "二次元" },
            { title: "数位马赛克", value: "數位馬賽克" },
            { title: "暗黑系", value: "暗黑系" },
            { title: "业余", value: "業餘" },
            { title: "自拍性愛", value: "自拍性愛" },
            { title: "局部特写", value: "局部特寫" },
            { title: "综艺", value: "綜藝" },
            { title: "原作改編", value: "原作改編" },
            { title: "无码流出", value: "無碼流出" },
            { title: "无做爱场面", value: "無做愛場面" },
            { title: "恶搞", value: "惡搞" },
            { title: "漫画改编", value: "漫畫改編" },
            { title: "偷拍・盗摄", value: "偷拍・盜撮" },
            { title: "后宫系", value: "後宮系" },
            { title: "薄码", value: "薄碼" },
            { title: "鬼畜片", value: "鬼畜片" },
            { title: "无码破解", value: "無碼破解" },
            { title: "ASMR颅内高潮", value: "ASMR顱内高潮" },
            { title: "解禁作", value: "解禁作" },
            { title: "中日合作", value: "中日合作" },
            { title: "女性向", value: "女性向" },
            { title: "教学", value: "教學" },
            { title: "退休作品", value: "退休作品" },
            { title: "搞笑・模仿", value: "搞笑・模仿" },
            { title: "不露脸", value: "不露臉" },
            { title: "唯美写真", value: "唯美寫真" },
            { title: "民国", value: "民國" },
            { title: "古风", value: "古風" },
            { title: "写真偶像", value: "寫真偶像" },
            { title: "心理惊悚", value: "心理驚悚" },
            { title: "特效", value: "特效" },
            { title: "节日限定", value: "節日限定" },
            { title: "被妹子搭讪", value: "被妹子搭訕" },
            { title: "热点改编", value: "熱點改編" }
          ],
          value: "劇情",
          description: "选择要浏览的分类"
        },
        //剧情选项
        {
          name: "tagValue",
          title: "具体标签",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["plot"],
          },
          enumOptions: [
            { title: "NTR", value: "NTR" },
            { title: "出轨", value: "出軌" },
            { title: "艳遇", value: "艷遇" },
            { title: "不伦", value: "不倫" },
            { title: "勾引・诱惑", value: "勾引・誘惑" },
            { title: "纯粹的欲望", value: "純粹的慾望" },
            { title: "按摩・美容", value: "按摩・物理治療・美容" },
            { title: "轮奸", value: "輪姦" },
            { title: "乱伦", value: "亂倫" },
            { title: "女优访谈", value: "女優訪談" },
            { title: "胁迫做爱", value: "脅迫做愛" },
            { title: "偷窃", value: "偷竊" },
            { title: "寢取", value: "寢取" },
            { title: "猎艳", value: "獵豔" },
            { title: "约炮", value: "約炮" },
            { title: "校园生活", value: "校園生活" },
            { title: "媚药・迷药", value: "媚藥・迷藥" },
            { title: "迷奸", value: "迷姦" },
            { title: "纯爱・恋爱", value: "純愛・戀愛" },
            { title: "旅行", value: "旅行" },
            { title: "监禁", value: "監禁" },
            { title: "出差", value: "出差" },
            { title: "粉丝福利", value: "粉絲福利" },
            { title: "报复", value: "報復" },
            { title: "酒后乱性", value: "酒後亂性" },
            { title: "游戏COSPLAY", value: "游戲COSPLAY" },
            { title: "水疗・泡泡浴", value: "水療・泡泡浴" },
            { title: "绑架", value: "綁架" },
            { title: "看病・住院", value: "看病・住院" },
            { title: "加班", value: "加班" },
            { title: "身体换业务", value: "身體換業務" },
            { title: "欠债肉偿", value: "欠債肉償" },
            { title: "私房摄影", value: "私房攝影" },
            { title: "同住一屋", value: "同住一屋・相部屋" },
            { title: "聚会・PARTY", value: "聚會・PARTY" },
            { title: "职场", value: "職場" },
            { title: "搭讪", value: "搭訕" },
            { title: "上门福利", value: "上門福利" },
            { title: "瑜珈·健身", value: "瑜珈·健身" },
            { title: "尾随", value: "尾礦" },
            { title: "运动", value: "運動" },
            { title: "街头福利", value: "街頭福利" },
            { title: "邀请函", value: "邀請函" },
            { title: "探亲", value: "探親" },
            { title: "新人面试", value: "新人面試" },
            { title: "谢罪", value: "謝罪" },
            { title: "夫妻交换", value: "夫妻交換" },
            { title: "野战", value: "野戰" },
            { title: "战斗行动", value: "戰鬥行动" },
            { title: "跳舞", value: "跳舞" },
            { title: "同学聚会", value: "同學聚會" },
            { title: "直播", value: "直播" },
            { title: "女优面试", value: "女優面試" },
            { title: "看房", value: "看房" },
            { title: "上门家访", value: "上門家訪" },
            { title: "集训", value: "集訓" },
            { title: "上门推销", value: "上門推銷" },
            { title: "捡尸", value: "撿尸" },
            { title: "丧夫", value: "喪夫" },
            { title: "新闻采访", value: "新聞采訪" },
            { title: "裸体素描", value: "裸體素描" },
            { title: "男女互换", value: "男女互換" },
            { title: "格斗", value: "格鬥" },
            { title: "神话故事", value: "神話故事" },
            { title: "电竞", value: "電競" },
            { title: "女体盛", value: "女體盛" }
          ],
          value: "NTR",
          description: "选择要浏览的分类"
        },
         //职业选项
        {
          name: "tagValue",
          title: "具体标签",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["occupation"],
          },
          enumOptions: [
            { title: "风俗娘", value: "風俗娘" },
            { title: "按摩女郎", value: "按摩女郎" },
            { title: "女教师", value: "女教師" },
            { title: "角色扮演", value: "角色扮演" },
            { title: "护士", value: "護士" },
            { title: "饭店小姐・援交妹", value: "飯店小姐・援交妹" },
            { title: "写真女郎", value: "寫真女郎" },
            { title: "偶像", value: "偶像" },
            { title: "运动女孩", value: "運動女孩" },
            { title: "女艺人・女星", value: "女藝人・女星" },
            { title: "职员", value: "職員" },
            { title: "宅男・宅女", value: "宅男・宅女" },
            { title: "家庭教师", value: "家庭教師" },
            { title: "女秘书", value: "女秘書" },
            { title: "服务生", value: "服務生" },
            { title: "网络红人", value: "網路紅人" },
            { title: "女主持・主播", value: "女主持・主播" },
            { title: "传播妹", value: "傳播妹" },
            { title: "空服", value: "空服" },
            { title: "其他职业", value: "其他職業" },
            { title: "家政妇", value: "家政婦" },
            { title: "模特儿", value: "模特兒" },
            { title: "女奴", value: "女奴" },
            { title: "老板娘，女主人", value: "老闆娘，女主人" },
            { title: "健身教练", value: "健身教練" },
            { title: "黑帮", value: "黑幫" },
            { title: "女医生", value: "女醫生" },
            { title: "泡姬", value: "泡姬" },
            { title: "女业务", value: "女業務" },
            { title: "黑人男优", value: "黑人男優" },
            { title: "女鬼・女妖", value: "女鬼・女妖" },
            { title: "女性护理", value: "女性護理" },
            { title: "房产中介", value: "房產中介" },
            { title: "白人女优", value: "白人女優" },
            { title: "赛车女郎", value: "賽車女郎" },
            { title: "女贼", value: "女賊" },
            { title: "舞女", value: "舞女" },
            { title: "国产女优", value: "國產女優" },
            { title: "女格斗家", value: "女格鬥家" },
            { title: "罪犯・逃犯", value: "罪犯・逃犯" },
            { title: "客服小姐", value: "客服小姐" },
            { title: "游泳教练", value: "游泳教練" },
            { title: "女警", value: "女警" },
            { title: "陪酒女", value: "陪酒女" },
            { title: "修理工", value: "修理工" },
            { title: "幼稚园老师", value: "幼稚園老師" },
            { title: "女祭司", value: "女祭司" },
            { title: "DJ", value: "DJ" },
            { title: "拉拉队", value: "拉拉隊" },
            { title: "实习生", value: "實習生" },
            { title: "舞蹈老师", value: "舞蹈老師" },
            { title: "荷官", value: "荷官" },
            { title: "女记者", value: "女記者" },
            { title: "清扫员", value: "清掃員" },
            { title: "女间谍・特工", value: "女間諜・特工" },
            { title: "女机器人", value: "女機器人" },
            { title: "女战士", value: "女戰士" },
            { title: "性爱娃娃", value: "性愛娃娃" },
            { title: "足球宝贝", value: "足球寶貝" }
          ],
          value: "風俗娘",
          description: "选择要浏览的分类"
        },
        //关系选项
        {
          name: "tagValue",
          title: "具体标签",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["relationship"],
          },
          enumOptions: [
            { title: "女同事", value: "女同事" },
            { title: "姐姐・妹妹", value: "姐姐・妹妹" },
            { title: "女友・妻子", value: "女友・妻子" },
            { title: "女上司", value: "女上司" },
            { title: "邻居", value: "鄰居" },
            { title: "公公", value: "公公" },
            { title: "姐弟・兄妹", value: "姐弟・兄妹" },
            { title: "儿媳", value: "兒媳" },
            { title: "青梅竹马", value: "青梅竹馬" },
            { title: "同学", value: "同學" },
            { title: "嫂嫂", value: "嫂嫂" },
            { title: "母亲", value: "母親" },
            { title: "继母", value: "繼母" },
            { title: "母子", value: "母子" },
            { title: "女友姐姐", value: "女友姐姐" },
            { title: "岳母", value: "岳母" },
            { title: "继父", value: "繼父" },
            { title: "小姨子", value: "小姨子" },
            { title: "表姐・表妹", value: "表姐・表妹" },
            { title: "叔叔・侄女", value: "叔叔・姪女" },
            { title: "小三・情人", value: "小三・情人" },
            { title: "父女", value: "父女" },
            { title: "朋友女友・妻子", value: "朋友女友・妻子" },
            { title: "下属女友・妻子", value: "下屬女友・妻子" },
            { title: "上司女友・妻子", value: "上司女友・妻子" },
            { title: "女友闺蜜", value: "女友閨蜜" },
            { title: "女儿", value: "女兒" },
            { title: "未亡人・寡妇", value: "未亡人・寡婦" },
            { title: "婶婶", value: "嬸嬸" },
            { title: "朋友母亲", value: "朋友母親" },
            { title: "同事女友・妻子", value: "同事女友・妻子" },
            { title: "母女", value: "母女" },
            { title: "学姐・学妹", value: "學姐・學妹" },
            { title: "母亲的朋友", value: "母親的朋友" },
            { title: "阿姨・侄子", value: "阿姨・侄子" },
            { title: "小姨・姑姑", value: "小姨・姑姑" },
            { title: "父亲", value: "父親" },
            { title: "女租客", value: "女租客" },
            { title: "室友", value: "室友" },
            { title: "夫妻", value: "夫妻" },
            { title: "女房东", value: "女房東" },
            { title: "弟媳", value: "弟媳" }
          ],
          value: "女同事",
          description: "选择要浏览的分类"
        },
        //衣着选项
        {
          name: "tagValue",
          title: "具体标签",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["outfit"],
          },
          enumOptions: [
            { title: "黑丝", value: "黑絲" },
            { title: "情趣內衣", value: "情趣內衣" },
            { title: "内衣", value: "內衣" },
            { title: "JK校服", value: "JK校服" },
            { title: "制服", value: "制服" },
            { title: "猥亵穿着", value: "猥褻穿著" },
            { title: "网袜", value: "網襪" },
            { title: "COSPLAY服饰", value: "COSPLAY服飾" },
            { title: "过膝袜・小腿袜", value: "過膝襪・小腿襪" },
            { title: "肉丝", value: "肉絲" },
            { title: "白丝", value: "白絲" },
            { title: "和服・浴衣・丧服", value: "和服・浴衣・喪服" },
            { title: "眼镜", value: "眼鏡" },
            { title: "女仆制服", value: "女僕制服" },
            { title: "泳装", value: "泳裝" },
            { title: "高跟鞋", value: "高跟鞋" },
            { title: "运动服装", value: "運動服裝" },
            { title: "兔女郎装扮", value: "兔女郎妝扮" },
            { title: "护士制服", value: "護士制服" },
            { title: "紧身衣", value: "緊身衣" },
            { title: "短裙・迷你裙", value: "短裙・迷你裙" },
            { title: "比基尼", value: "比基尼" },
            { title: "蒙面・面罩", value: "蒙面・面罩" },
            { title: "完全着衣", value: "完全着衣" },
            { title: "性感睡衣", value: "性感睡衣" },
            { title: "牛仔裤", value: "牛仔褲" },
            { title: "猫耳装饰", value: "貓耳裝飾" },
            { title: "中囯服装", value: "中囯服裝" },
            { title: "靴子", value: "靴子" },
            { title: "裸体围裙", value: "裸體圍裙" },
            { title: "空姐制服", value: "空姐制服" },
            { title: "身体意识", value: "身體意識" },
            { title: "口罩", value: "口罩" },
            { title: "警察制服", value: "警察制服" },
            { title: "医生制服", value: "醫生製服" },
            { title: "古装", value: "古裝" },
            { title: "婚纱", value: "婚紗" },
            { title: "睡衣", value: "睡衣" },
            { title: "体操服装", value: "體操服裝" }
          ],
          value: "黑絲",
          description: "选择要浏览的分类"
        },
        //特征选项
        {
          name: "tagValue",
          title: "具体标签",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["characteristics"],
          },
          enumOptions: [
            { title: "荡妇", value: "蕩婦" },
            { title: "美人", value: "美人" },
            { title: "痴女", value: "癡女" },
            { title: "少女", value: "少女" },
            { title: "蛮横娇羞", value: "蠻橫嬌羞" },
            { title: "美人妻", value: "美人妻" },
            { title: "极品美人", value: "極品美人" },
            { title: "清楚系", value: "清楚系" },
            { title: "变态", value: "變態" },
            { title: "御姐系", value: "御姐系" },
            { title: "校花", value: "校花" },
            { title: "老头子", value: "老頭子" },
            { title: "拜金女", value: "拜金女" },
            { title: "野性", value: "野性" },
            { title: "若妻", value: "若妻" },
            { title: "绿茶婊", value: "綠茶婊" },
            { title: "骚扰", value: "騷擾" },
            { title: "坂道系", value: "阪道系" },
            { title: "叛逆少女", value: "叛逆少女" },
            { title: "港区女子", value: "港區女子" },
            { title: "地味", value: "地味" },
            { title: "女神", value: "女神" },
            { title: "心机婊", value: "心機婊" },
            { title: "傲娇", value: "傲嬌" },
            { title: "三十路", value: "三十路" },
            { title: "文艺女", value: "文藝女" },
            { title: "贵妇", value: "貴婦" },
            { title: "女王", value: "女王" },
            { title: "处男", value: "處男" },
            { title: "地雷系", value: "地雷系" },
            { title: "正统派", value: "正統派" },
            { title: "四十路", value: "四十路" },
            { title: "新娘", value: "新娘" },
            { title: "大小姐", value: "大小姐" },
            { title: "女同性恋", value: "女同性戀" },
            { title: "昭和系", value: "昭和系" },
            { title: "废青", value: "廢青" },
            { title: "中性", value: "中性" },
            { title: "正太", value: "正太" },
            { title: "神待娘", value: "神待娘" },
            { title: "老太婆", value: "老太婆" },
            { title: "处女", value: "處女" },
            { title: "双胞胎姐妹", value: "雙胞胎姐妹" },
            { title: "田舍娘", value: "田舍娘" },
            { title: "变性者", value: "變性者" }
          ],
          value: "蕩婦",
          description: "选择要浏览的分类"
        },
        //主题选项
        {
          name: "tagValue",
          title: "具体标签",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["theme"],
          },
          enumOptions: [
            { title: "淫乱", value: "淫亂" },
            { title: "乱交•群P", value: "亂交%20•%20群P" },
            { title: "3P・4P", value: "3P・4P" },
            { title: "按摩棒", value: "按摩棒" },
            { title: "两男一女", value: "兩男一女" },
            { title: "多P", value: "多P" },
            { title: "凌辱", value: "凌辱" },
            { title: "抹油", value: "抹油" },
            { title: "调教", value: "調教" },
            { title: "拘束・拷问", value: "拘束・拷問" },
            { title: "捆绑", value: "捆綁" },
            { title: "淫语", value: "淫語" },
            { title: "SM", value: "SM" },
            { title: "双飞", value: "雙飛" },
            { title: "两女一男", value: "兩女一男" },
            { title: "跳蛋", value: "跳蛋" },
            { title: "放尿", value: "放尿" },
            { title: "性骚扰", value: "性騷擾" },
            { title: "诱骗女性", value: "誘騙女性" },
            { title: "淫荡・硬核", value: "淫蕩・硬核" },
            { title: "偷窥", value: "偷窺" },
            { title: "大乱交", value: "大亂交" },
            { title: "两男两女", value: "兩男兩女" },
            { title: "在丈夫面前被操", value: "在丈夫面前被操" },
            { title: "色诱", value: "色誘" },
            { title: "一男多女", value: "一男多女" },
            { title: "导尿", value: "導尿" },
            { title: "口球", value: "口球" },
            { title: "露出", value: "露出" },
            { title: "即时插入", value: "即時插入" },
            { title: "蜡烛", value: "蠟燭" },
            { title: "催眠", value: "催眠" },
            { title: "潜入", value: "潛入" },
            { title: "刑架", value: "刑架" },
            { title: "调戏", value: "調戲" },
            { title: "喝尿", value: "喝尿" },
            { title: "纹身刺字", value: "紋身刺字" },
            { title: "剃毛", value: "剃毛" },
            { title: "约会", value: "約會" },
            { title: "瘙痒", value: "瘙癢" }
          ],
          value: "淫亂",
          description: "选择要浏览的分类"
        },
        //状态选项
        {
          name: "tagValue",
          title: "具体标签",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["state"],
          },
          enumOptions: [
            { title: "羞耻", value: "羞恥" },
            { title: "湿身", value: "濕身" },
            { title: "流汗", value: "流汗" },
            { title: "酒醉", value: "酒醉" },
            { title: "早漏", value: "早漏" },
            { title: "绝顶高潮", value: "絕頂高潮" },
            { title: "欲求不满", value: "慾求不滿" },
            { title: "白眼失神", value: "白眼失神" }
          ],
          value: "羞恥",
          description: "选择要浏览的分类"
        },
        //玩法选项
        {
          name: "tagValue",
          title: "具体标签",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["playstyle"],
          },
          enumOptions: [
            { title: "中出", value: "中出" },
            { title: "口交", value: "口交" },
            { title: "女上位", value: "女上位" },
            { title: "骑乘位", value: "騎乗位" },
            { title: "后入", value: "後入" },
            { title: "手指插入", value: "手指插入" },
            { title: "潮吹", value: "潮吹" },
            { title: "乳交", value: "乳交" },
            { title: "舔阴", value: "舔陰" },
            { title: "口爆", value: "口爆" },
            { title: "颜射", value: "顏射" },
            { title: "深喉", value: "深喉" },
            { title: "接吻", value: "接吻" },
            { title: "舔腳", value: "舔腳" },
            { title: "吞精", value: "吞精" },
            { title: "69", value: "69" },
            { title: "自慰", value: "自慰" },
            { title: "足交", value: "足交" },
            { title: "打手枪", value: "打手槍" },
            { title: "唾液敷面", value: "唾液敷面" },
            { title: "插入异物", value: "插入異物" },
            { title: "打屁股", value: "打屁股" },
            { title: "颜面骑乘", value: "顔面騎乘" },
            { title: "二穴同入", value: "二穴同入" },
            { title: "拳击交", value: "拳擊交" }
          ],
          value: "中出",
          description: "选择要浏览的分类"
        },
        //场景选项
        {
          name: "tagValue",
          title: "具体标签",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["setting"],
          },
          enumOptions: [
            { title: "饭店", value: "飯店" },
            { title: "自宅", value: "自宅" },
            { title: "学校", value: "學校" },
            { title: "按摩・美容店", value: "按摩・美容店" },
            { title: "办公室", value: "辦公室" },
            { title: "温泉", value: "溫泉" },
            { title: "医院・诊所", value: "醫院・診所" },
            { title: "公共场所", value: "公共場所" },
            { title: "泡泡浴店", value: "泡泡浴店" },
            { title: "更衣室", value: "更衣室" },
            { title: "野外露天", value: "野外露天" },
            { title: "风俗夜場", value: "風俗夜場" },
            { title: "火车", value: "火車" },
            { title: "泳池", value: "泳池" },
            { title: "乡下", value: "鄉下" },
            { title: "AV拍摄现场", value: "AV拍攝現場" },
            { title: "仓库", value: "倉庫" },
            { title: "监狱", value: "監獄" },
            { title: "健身房", value: "健身房" },
            { title: "情趣饭店", value: "情趣飯店" },
            { title: "厕所", value: "厠所" },
            { title: "酒吧", value: "酒吧" },
            { title: "便利商店", value: "便利商店" },
            { title: "车震", value: "車震" },
            { title: "KTV夜总会", value: "KTV夜總會" },
            { title: "体育馆", value: "體育舘" },
            { title: "商店", value: "商店" },
            { title: "咖啡店", value: "咖啡店" },
            { title: "海滩", value: "海灘" },
            { title: "巴士", value: "巴士" },
            { title: "废墟", value: "廢墟" },
            { title: "画室", value: "畫室" },
            { title: "赌场", value: "賭場" },
            { title: "厨房", value: "廚房" },
            { title: "餐厅", value: "餐廳" },
            { title: "电梯", value: "電梯" },
            { title: "建筑工地", value: "建築工地" }
          ],
          value: "飯店",
          description: "选择要浏览的分类"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 首页分类
    {
      title: "首页分类",
      description: "选择需要浏览的分类",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "categoryType",
          title: "📁 分类类型",
          type: "enumeration",
          enumOptions: [
            { title: "最新发布", value: "/movie/new/" },
            { title: "热门排行", value: "/best/thisweek" },
            { title: "无码A片", value: "/menu/uncensored/5-2-" },
            { title: "日本A片", value: "/menu/censored/5-2-" },
            { title: "国产AV", value: "/menu/chinese/5-2-" }
          ],
          value: "/movie/new/"
        },
        {
          name: "sort_by",
          title: "时间范围",
          type: "enumeration",
          belongTo: {
            paramName: "categoryType",
            value: ["/best/thisweek"],
          },
          enumOptions: [
            { title: "最近一周", value: "/best/thisweek" },
            { title: "最近一月", value: "/best/thismonth" },
            { title: "最近半年", value: "/best/thishalfyear" },
            { title: "最近一年", value: "/best/thisyear" },
            { title: "全部时间", value: "/best" }
          ],
          value: "/best/thisweek",
          description: "选择要查看的时间范围（仅热门排行有效）"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 出品厂商
    {
      title: "出品厂商",
      description: "按出品厂商浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "issuer",
          title: "选择或输入出品厂商",
          type: "input",
          placeholders: [
            { 
              title: "S1", value: "S1" 
            },
            { 
              title: "SOD", value: "SOD" 
            },
            { 
              title: "麻豆传媒", value: "麻豆傳媒" 
            },
            { 
              title: "蚊香社", value: "蚊香社" 
            },
            { 
              title: "91製片廠", value: "91製片廠" 
            },
            { 
              title: "果凍傳媒", value: "果凍傳媒" 
            },
            { 
              title: "抖陰", value: "抖陰" 
            },
            { 
              title: "H.M.P芳友舍", value: "H.M.P 芳友舍" 
            },
            { 
              title: "天美傳媒", value: "天美傳媒" 
            },
            { 
              title: "蜜桃影像傳媒", value: "蜜桃影像傳媒" 
            },
            { 
              title: "星空無限傳媒", value: "星空無限傳媒" 
            },
            { 
              title: "精東影業", value: "精東影業" 
            },
            { 
              title: "皇家華人", value: "皇家華人" 
            },
            { 
              title: "桃太郎映像出版", value: "桃太郎映像出版" 
            },
            { 
              title: "水晶映像", value: "水晶映像" 
            },
            { 
              title: "本中", value: "本中" 
            },
            { 
              title: "溜池", value: "溜池" 
            },
            { 
              title: "癡女特化", value: "癡女特化" 
            },
            { 
              title: "無垢", value: "無垢" 
            },
            { 
              title: "熟女人妻最強廠", value: "熟女人妻最強廠" 
            },
            { 
              title: "妄想族", value: "妄想族" 
            },
            { 
              title: "人妻花園劇場", value: "人妻花園劇場" 
            },
            { 
              title: "人妻官能AV", value: "人妻官能AV" 
            },
            { 
              title: "変態紳士倶楽部", value: "変態紳士倶楽部" 
            }
          ],
          value: "S1",
          description: "选择或输入出品厂商"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    }
  ]
};
// ==================== 配置常量 ====================
const CONFIG = {
  ARTIST_MAP_URL: "https://raw.githubusercontent.com/flymec/BF/refs/heads/main/Widgets/javrate_actors.json",
  BASE_URL: "https://www.javrate.com",
  CACHE: {
    artistMap: { maxAge: 24 * 60 * 60 * 1000, maxSize: 1 },
    detailPages: { maxAge: 60 * 1000, maxSize: 50 },
    listPages: { maxAge: 30 * 60 * 1000, maxSize: 30 }
  },
  TIMEOUT: {
    request: 15000,
    retry: 3000
  },
  MAX_RETRIES: 3,
  MAX_PAGE: 100, // 最大页码限制
  USER_AGENT: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36"
};

// ==================== 缓存系统 ====================
const Cache = {
  stores: {
    artistMap: new Map(),
    detailPages: new Map(),
    listPages: new Map()
  },
  
  get(storeName, key) {
    const store = this.stores[storeName];
    if (!store) return null;
    
    const item = store.get(key);
    if (!item) return null;
    
    if (Date.now() - item.timestamp > CONFIG.CACHE[storeName].maxAge) {
      store.delete(key);
      return null;
    }
    
    // 简单的 LRU 更新
    store.delete(key);
    store.set(key, item);
    return item.data;
  },
  
  set(storeName, key, data) {
    const store = this.stores[storeName];
    if (!store) return;
    
    // 检查大小限制
    if (store.size >= CONFIG.CACHE[storeName].maxSize) {
      // 删除最早的项
      const firstKey = store.keys().next().value;
      store.delete(firstKey);
    }
    
    store.set(key, {
      data,
      timestamp: Date.now()
    });
  },
  
  clear(storeName) {
    if (storeName) {
      this.stores[storeName].clear();
    } else {
      Object.keys(this.stores).forEach(key => this.stores[key].clear());
    }
  }
};

// ==================== 日志系统 ====================
const Logger = {
  levels: {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3
  },
  currentLevel: 1, // 默认为 INFO
  
  formatMessage(level, message, data) {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level}] ${message}${data ? ' ' + JSON.stringify(data) : ''}`;
  },
  
  debug(message, data) {
    if (this.currentLevel <= this.levels.DEBUG) {
      console.debug(this.formatMessage('DEBUG', message, data));
    }
  },
  
  info(message, data) {
    if (this.currentLevel <= this.levels.INFO) {
      console.info(this.formatMessage('INFO', message, data));
    }
  },
  
  warn(message, data) {
    if (this.currentLevel <= this.levels.WARN) {
      console.warn(this.formatMessage('WARN', message, data));
    }
  },
  
  error(message, data) {
    if (this.currentLevel <= this.levels.ERROR) {
      console.error(this.formatMessage('ERROR', message, data));
    }
  }
};

// ==================== 工具函数 ====================
const Utils = {
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
  
  safeDecodeURI(str) {
    try {
      return decodeURIComponent(str);
    } catch {
      return str;
    }
  },
  
  safeEncodeURI(str) {
    try {
      return encodeURIComponent(str);
    } catch {
      return str;
    }
  },
  
  normalizeArtistName(name) {
    if (!name) return '';
    return name
      .replace(/[\s\u3000]+/g, '')
      .replace(/[・･]/g, '')
      .toLowerCase()
      .normalize('NFKC');
  },
  
  validatePage(page) {
    const pageNum = parseInt(page, 10);
    if (isNaN(pageNum) || pageNum < 1) return 1;
    return Math.min(pageNum, CONFIG.MAX_PAGE);
  },
  
  validateVideoUrl(url) {
    if (!url || typeof url !== 'string') return false;
    try {
      new URL(url);
      return url.includes('.m3u8') || url.includes('.mp4');
    } catch {
      return false;
    }
  },
  
  extractDate(dateStr) {
    if (!dateStr) return null;
    const match = dateStr.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
    if (match) {
      const [_, year, month, day] = match;
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
    return null;
  },
  
  buildUrl(base, path) {
    if (path.startsWith('http')) return path;
    const cleanBase = base.replace(/\/+$/, '');
    const cleanPath = path.replace(/^\/+/, '');
    return `${cleanBase}/${cleanPath}`;
  }
};

// ==================== 网络请求 ====================
async function fetchWithRetry(url, options = {}, retryCount = 0) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), CONFIG.TIMEOUT.request);
  
  try {
    Logger.debug(`请求: ${url}`, { retryCount });
    
    const response = await Widget.http.get(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'User-Agent': CONFIG.USER_AGENT,
        'Referer': options.referer || CONFIG.BASE_URL,
        ...options.headers
      }
    });
    
    if (!response || !response.data) {
      throw new Error('服务器未返回数据');
    }
    
    return response;
  } catch (error) {
    Logger.warn(`请求失败: ${url}`, { error: error.message, retryCount });
    
    if (retryCount < CONFIG.MAX_RETRIES) {
      const delay = CONFIG.TIMEOUT.retry * Math.pow(2, retryCount);
      Logger.info(`等待 ${delay}ms 后重试...`);
      await Utils.sleep(delay);
      return fetchWithRetry(url, options, retryCount + 1);
    }
    
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

// ==================== 艺人列表管理 ====================
const ArtistManager = {
  async fetchMap() {
    // 检查缓存
    const cached = Cache.get('artistMap', 'map');
    if (cached) {
      Logger.debug('使用缓存的艺人列表');
      return cached;
    }
    
    try {
      Logger.info('正在加载艺人列表...');
      const response = await fetchWithRetry(CONFIG.ARTIST_MAP_URL, {
        referer: CONFIG.BASE_URL
      });
      
      if (!response.data) {
        throw new Error('艺人列表返回空数据');
      }
      
      const data = typeof response.data === 'object' 
        ? response.data 
        : JSON.parse(response.data);
      
      if (typeof data !== 'object' || data === null) {
        throw new Error('艺人列表格式无效');
      }
      
      // 预处理：建立标准化名称到原始名称的映射
      const normalizedMap = {};
      for (const [name, id] of Object.entries(data)) {
        const normalized = Utils.normalizeArtistName(name);
        normalizedMap[normalized] = { name, id };
      }
      
      Cache.set('artistMap', 'map', normalizedMap);
      Logger.info(`艺人列表加载成功，共 ${Object.keys(normalizedMap).length} 条`);
      
      return normalizedMap;
    } catch (error) {
      Logger.error('艺人列表加载失败', error);
      throw new Error(`无法加载艺人列表: ${error.message}`);
    }
  },
  
  async findArtist(input) {
    if (!input) return null;
    
    // 检查是否是 UUID
    const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(input);
    if (isUUID) {
      return { id: input, name: input, exact: true };
    }
    
    const map = await this.fetchMap();
    const normalizedInput = Utils.normalizeArtistName(input);
    
    // 精确匹配
    if (map[normalizedInput]) {
      return { 
        ...map[normalizedInput], 
        exact: true 
      };
    }
    
    // 模糊匹配
    let bestMatch = null;
    let bestScore = 0;
    
    for (const [normalized, info] of Object.entries(map)) {
      if (normalized.includes(normalizedInput)) {
        const score = normalizedInput.length * 10;
        if (score > bestScore) {
          bestScore = score;
          bestMatch = { ...info, exact: false };
        }
      }
    }
    
    return bestMatch;
  }
};

// ==================== 页面解析器 ====================
const Parser = {
  parseListPage($, baseUrl) {
    const items = [];
    const elements = $('div[class^="movie-grid-new-"] .mgn-item');
    
    elements.each((index, element) => {
      try {
        const item = $(element);
        
        const linkElement = item.find('.mgn-title a');
        const relativeLink = linkElement.attr('href');
        const titleElement = item.find('.mgn-title h3');
        
        if (!relativeLink || !titleElement.length) return;
        
        const number = titleElement.find('strong').text().trim();
        const title = titleElement.clone().find('strong').remove().end().text().trim();
        const fullTitle = number ? `${number} ${title}`.trim() : title;
        
        const absoluteLink = Utils.buildUrl(baseUrl, relativeLink);
        const imgSrc = item.find('.mgn-picture img.mgn-cover').attr('src') || '';
        
        const dateText = item.find('.mgn-date').clone().find('svg').remove().end().text().trim();
        const releaseDate = Utils.extractDate(dateText);
        
        items.push({
          id: absoluteLink,
          type: 'url',
          title: fullTitle,
          backdropPath: imgSrc,
          link: absoluteLink,
          releaseDate: releaseDate,
          mediaType: 'movie'
        });
      } catch (e) {
        Logger.error('解析列表项失败', e);
      }
    });
    
    return items;
  },
  
  parseDetailPage($, url) {
    // 标题
    const titleH1 = $('h1.mb-2.mt-1');
    const number = titleH1.find('strong.fg-main').text().trim();
    const titleClone = titleH1.clone();
    titleClone.find('strong').remove();
    const mainTitle = titleClone.text().trim();
    const rawTitle = number ? `${number} ${mainTitle}` : mainTitle;
    
    // 图片
    let imgSrc = null;
    try {
      const schemaScript = $('script[type="application/ld+json"]').html();
      if (schemaScript) {
        const schemaData = JSON.parse(schemaScript);
        imgSrc = schemaData.thumbnailUrl;
      }
    } catch (e) {
      Logger.debug('解析 LD+JSON 失败', e);
    }
    
    if (!imgSrc) {
      imgSrc = $('.fixed-background-img').attr('src');
    }
    
    // 发布日期
    let releaseDate = '';
    $('.main-content > .left h4:contains("发片日期")')
      .next('div.col-auto')
      .find('h4')
      .each(function() {
        releaseDate = $(this).text().trim();
      });
    
    releaseDate = Utils.extractDate(releaseDate) || '';
    
    // 标签
    const tags = [];
    $('section.movie-keywords a.badge').each((idx, element) => {
      tags.push($(element).text().trim());
    });
    
    // 播放器 iframe
    const iframeSrc = $('#v2-player').attr('src') ||
                      $('iframe[src*="/Player/V2"]').attr('src') ||
                      $('iframe[src*="payload"]').attr('src');
    
    // 相关推荐
    const relatedItems = [];
    $('div.alike-grid-container .mgn-item').each((idx, element) => {
      try {
        const item = $(element);
        const linkElement = item.find('.mgn-title a');
        const relativeLink = linkElement.attr('href');
        if (!relativeLink) return;
        
        const absoluteLink = Utils.buildUrl(CONFIG.BASE_URL, relativeLink);
        const childImgSrc = item.find('.mgn-picture img.mgn-cover').attr('src');
        
        const childTitleH = item.find('.mgn-title h5');
        const titleClone = childTitleH.clone();
        titleClone.find('strong').remove();
        const mainTitle = titleClone.text().trim();
        const number = childTitleH.find('strong').text().trim();
        const fullTitle = number ? `${number} ${mainTitle}`.trim() : mainTitle;
        
        if (fullTitle && absoluteLink) {
          relatedItems.push({
            id: absoluteLink,
            type: 'url',
            title: fullTitle,
            imgSrc: childImgSrc || '',
            link: absoluteLink,
            mediaType: 'movie'
          });
        }
      } catch (e) {
        Logger.error('解析相关推荐失败', e);
      }
    });
    
    return {
      rawTitle,
      imgSrc: imgSrc || '',
      releaseDate,
      tags,
      genreTitle: tags.join(', '),
      iframeSrc,
      relatedItems
    };
  },
  
  parsePlayerPage(html) {
    const result = {
      videoUrl: null,
      qualities: [],
      subtitles: []
    };
    
    // 匹配 initialSignedUrl (完整 m3u8)
    const initialMatch = html.match(/initialSignedUrl\s*:\s*['"]([^'"]+)['"]/);
    if (initialMatch?.[1] && Utils.validateVideoUrl(initialMatch[1])) {
      result.videoUrl = initialMatch[1];
      return result;
    }
    
    // 匹配 signedUrl
    const signedMatch = html.match(/[^a-zA-Z]signedUrl\s*:\s*['"]([^'"]+)['"]/);
    if (signedMatch?.[1]) {
      const baseUrl = signedMatch[1].replace(/\/+$/, '');
      const m3u8Url = `${baseUrl}/playlist.m3u8`;
      if (Utils.validateVideoUrl(m3u8Url)) {
        result.videoUrl = m3u8Url;
        return result;
      }
    }
    
    // 直接匹配 m3u8 URL
    const cdnMatch = html.match(/(https?:\/\/videocdn\.[^'"\s]+\.m3u8[^'"\s]*)/);
    if (cdnMatch?.[1] && Utils.validateVideoUrl(cdnMatch[1])) {
      result.videoUrl = cdnMatch[1];
      return result;
    }
    
    return result;
  }
};

// ==================== URL 构建器 ====================
const UrlBuilder = {
  buildPath(params) {
    if (params?.artistId) {
      return `/actor/movie/${params.artistId}.html`;
    }
    
    if (params?.tagType && params?.tagValue) {
      const encodedTag = Utils.safeEncodeURI(params.tagValue);
      return `/keywords/movie/${encodedTag}`;
    }
    
    if (params?.issuer) {
      const decodedIssuer = Utils.safeDecodeURI(params.issuer);
      const encodedIssuer = Utils.safeEncodeURI(decodedIssuer);
      return `/Issuer/${encodedIssuer}`;
    }
    
    if (params?.categoryType) {
      return params.categoryType;
    }
    
    return null;
  },
  
  buildRequestUrl(path, params) {
    const page = Utils.validatePage(params?.page);
    
    // 艺人详情页
    if (path.includes('/actor/movie/') && path.endsWith('.html')) {
      const artistId = path.match(/\/actor\/movie\/([^\/]+)\.html$/)?.[1];
      if (artistId && page > 1) {
        return `${CONFIG.BASE_URL}/actor/movie/1-0-2-${page}/${artistId}.html`;
      }
      return `${CONFIG.BASE_URL}${path}`;
    }
    
    // 标签页
    if (path.startsWith('/keywords/movie/')) {
      return page > 1 
        ? `${CONFIG.BASE_URL}${path}?page=${page}&sort=5`
        : `${CONFIG.BASE_URL}${path}`;
    }
    
    // 厂商页
    if (path.startsWith('/Issuer/')) {
      return page > 1 
        ? `${CONFIG.BASE_URL}${path}?page=${page}&sort=5`
        : `${CONFIG.BASE_URL}${path}`;
    }
    
    // 排行榜
    if (path.startsWith('/best/')) {
      const sortByPath = params?.sort_by || path;
      return page > 1 
        ? `${CONFIG.BASE_URL}${sortByPath}?page=${page}` 
        : `${CONFIG.BASE_URL}${sortByPath}`;
    }
    
    // 分类菜单
    if (['/menu/uncensored/5-2-', '/menu/censored/5-2-', '/menu/chinese/5-2-'].includes(path)) {
      return `${CONFIG.BASE_URL}${path}${page}`;
    }
    
    // 默认处理
    const trimmedPath = path.endsWith('/') ? path.slice(0, -1) : path;
    return page > 1 
      ? `${CONFIG.BASE_URL}${trimmedPath}/${page}.html`
      : `${CONFIG.BASE_URL}${trimmedPath}`;
  }
};

// ==================== 错误处理 ====================
function createErrorItem(id, title, description, link = '') {
  return [{
    id,
    type: 'url',
    title,
    description,
    backdropPath: '',
    link
  }];
}

// ==================== 主要功能函数 ====================

async function loadPage(params) {
  try {
    Logger.info('loadPage 被调用', { params });
    
    // 处理艺人参数
    if (params?.artistId) {
      try {
        const artist = await ArtistManager.findArtist(params.artistId);
        
        if (!artist) {
          return createErrorItem(
            'artist-not-found',
            '艺人未找到',
            `未找到艺人: ${params.artistId}\n\n请尝试输入全名或更换艺人名称`
          );
        }
        
        if (!artist.exact) {
          Logger.info('使用模糊匹配', { input: params.artistId, matched: artist.name });
        }
        
        params.artistId = artist.id;
      } catch (error) {
        Logger.error('艺人处理失败', error);
        return createErrorItem(
          'artist-map-error',
          '艺人列表加载失败',
          `错误信息: ${error.message}\n\n请检查网络连接或稍后再试`
        );
      }
    }
    
    // 构建路径
    const path = UrlBuilder.buildPath(params);
    if (!path) {
      return createErrorItem(
        'param-error',
        '参数配置错误',
        '缺少必要参数，请检查模块配置。'
      );
    }
    
    // 构建请求 URL
    const requestUrl = UrlBuilder.buildRequestUrl(path, params);
    
    // 检查缓存
    const cacheKey = `${requestUrl}_${params?.page || 1}`;
    const cached = Cache.get('listPages', cacheKey);
    if (cached) {
      Logger.debug('使用缓存的列表页', { url: requestUrl });
      return cached;
    }
    
    // 发起请求
    const response = await fetchWithRetry(requestUrl, {
      referer: CONFIG.BASE_URL
    });
    
    // 检查空结果
    if (response.data.includes('抱歉，没有找到')) {
      return createErrorItem(
        `${requestUrl}-no-content`,
        '未找到影片',
        '此页面没有任何影片，请尝试其他分页或分类',
        requestUrl
      );
    }
    
    // 解析页面
    const $ = Widget.html.load(response.data);
    const items = Parser.parseListPage($, CONFIG.BASE_URL);
    
    if (items.length === 0) {
      return createErrorItem(
        `${requestUrl}-empty`,
        '无匹配影片',
        '未找到任何影片，可能是内容已变更',
        requestUrl
      );
    }
    
    // 存入缓存
    Cache.set('listPages', cacheKey, items);
    
    return items;
  } catch (error) {
    Logger.error('loadPage 失败', error);
    return createErrorItem(
      'load-error',
      '加载失败',
      `错误信息: ${error.message}`,
      ''
    );
  }
}

async function loadDetail(linkValue) {
  try {
    Logger.info('loadDetail 被调用', { link: linkValue });
    
    // 检查缓存
    const cached = Cache.get('detailPages', linkValue);
    if (cached) {
      Logger.debug('使用缓存的详情页', { link: linkValue });
      return cached;
    }
    
    // 请求详情页
    const detailResponse = await fetchWithRetry(linkValue, {
      referer: CONFIG.BASE_URL
    });
    
    // 解析详情页
    const $ = Widget.html.load(detailResponse.data);
    const detailData = Parser.parseDetailPage($, linkValue);
    
    // 获取视频地址
    let videoUrl = null;
    
    if (detailData.iframeSrc) {
      const playerUrl = Utils.buildUrl(CONFIG.BASE_URL, detailData.iframeSrc);
      
      try {
        const playerResponse = await fetchWithRetry(playerUrl, {
          referer: linkValue
        });
        
        if (playerResponse?.data) {
          const playerData = Parser.parsePlayerPage(playerResponse.data);
          videoUrl = playerData.videoUrl;
        }
      } catch (error) {
        Logger.warn('获取视频地址失败', { error: error.message });
      }
    }
    
    if (!videoUrl || !Utils.validateVideoUrl(videoUrl)) {
      throw new Error('无法获取有效的视频地址');
    }
    
    const result = {
      id: linkValue,
      type: 'url',
      title: detailData.rawTitle,
      videoUrl: videoUrl,
      description: detailData.genreTitle || '暂无简介',
      releaseDate: detailData.releaseDate,
      genreTitle: detailData.genreTitle,
      backdropPath: detailData.imgSrc || '',
      link: linkValue,
      customHeaders: {
        'Referer': CONFIG.BASE_URL,
        'Origin': CONFIG.BASE_URL,
        'User-Agent': CONFIG.USER_AGENT
      },
      relatedItems: detailData.relatedItems || []
    };
    
    // 存入缓存
    Cache.set('detailPages', linkValue, result);
    
    return result;
  } catch (error) {
    Logger.error('loadDetail 失败', { link: linkValue, error: error.message });
    
    return {
      id: linkValue,
      type: 'url',
      title: '加载详情失败',
      description: error.message,
      link: linkValue,
      backdropPath: ''
    };
  }
}

// ==================== 导出函数 ====================
// 这些函数会被外部调用
window.loadPage = loadPage;
window.loadDetail = loadDetail;
