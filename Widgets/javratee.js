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
            { title: "大槻响", value: "大槻响" },
            { title: "美園和花", value: "美園和花" },
            { title: "森澤佳奈", value: "森澤佳奈" },
            { title: "波多野结衣", value: "波多野结衣" },
            { title: "明里紬", value: "明里紬" },
            { title: "松本一香", value: "松本一香" },
            { title: "桃乃木香奈", value: "桃乃木香奈" },
            { title: "希島愛理", value: "希島愛理" },
            { title: "天海翼", value: "天海翼" },
            { title: "JULIA", value: "JULIA" },
            { title: "新有菜", value: "新有菜" },
            { title: "美谷朱里", value: "美谷朱里" },
            { title: "相澤南", value: "相澤南" },
            { title: "藤森里穂", value: "藤森里穂" },
            { title: "天使萌", value: "天使萌" },
            { title: "AIKA", value: "AIKA" },
            { title: "葵司", value: "葵司" },
            { title: "小野夕子", value: "小野夕子" },
            { title: "楪可憐", value: "楪可憐" },
            { title: "三上悠亜", value: "三上悠亜" },
            { title: "水户香奈", value: "水户香奈" },
            { title: "小沢菜穂", value: "小沢菜穂" }
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
    // 标签分类模块 (保持原有配置不变)
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
        // ... 其他标签选项保持不变
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 首页分类 (保持原有配置不变)
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
    // 出品厂商 (保持原有配置不变)
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
            { title: "S1", value: "S1" },
            { title: "SOD", value: "SOD" },
            { title: "麻豆传媒", value: "麻豆傳媒" },
            { title: "蚊香社", value: "蚊香社" },
            { title: "91製片廠", value: "91製片廠" },
            { title: "果凍傳媒", value: "果凍傳媒" },
            { title: "抖陰", value: "抖陰" },
            { title: "H.M.P芳友舍", value: "H.M.P 芳友舍" },
            { title: "天美傳媒", value: "天美傳媒" },
            { title: "蜜桃影像傳媒", value: "蜜桃影像傳媒" },
            { title: "星空無限傳媒", value: "星空無限傳媒" },
            { title: "精東影業", value: "精東影業" },
            { title: "皇家華人", value: "皇家華人" },
            { title: "桃太郎映像出版", value: "桃太郎映像出版" },
            { title: "水晶映像", value: "水晶映像" },
            { title: "本中", value: "本中" },
            { title: "溜池", value: "溜池" },
            { title: "癡女特化", value: "癡女特化" },
            { title: "無垢", value: "無垢" },
            { title: "熟女人妻最強廠", value: "熟女人妻最強廠" },
            { title: "妄想族", value: "妄想族" },
            { title: "人妻花園劇場", value: "人妻花園劇場" },
            { title: "人妻官能AV", value: "人妻官能AV" },
            { title: "変態紳士倶楽部", value: "変態紳士倶楽部" }
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
