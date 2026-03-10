/**********************
 * 插件基础信息
 **********************/
var WidgetMetadata = {
  id: "universal.video.plugin",
  title: "Universal Video Plugin",
  description: "Professional Plugin Framework",
  author: "Developer",
  version: "2.0.0",
  requiredVersion: "0.0.1",

  detailCacheDuration: 60,

  modules: [
    {
      title: "视频列表",
      requiresWebView: false,
      functionName: "getVideos",

      params: [
        {
          name: "url",
          title: "数据源地址",
          type: "input",
          placeholder: "输入API或M3U地址"
        },

        {
          name: "page",
          title: "页码",
          type: "input",
          placeholder: "1"
        }
      ]
    }
  ]
};



/**********************
 * 全局缓存系统
 **********************/

const CACHE = {};

function setCache(key,data,ttl=30000){

  CACHE[key] = {
    data:data,
    expire:Date.now()+ttl
  };

}

function getCache(key){

  if(!CACHE[key]) return null;

  if(Date.now()>CACHE[key].expire){
    delete CACHE[key];
    return null;
  }

  return CACHE[key].data;

}



/**********************
 * 网络请求封装
 **********************/

async function request(url){

  console.log("请求:",url);

  const res = await Widget.http.get(url,{
    timeout:15000,
    headers:{
      "User-Agent":"Mozilla/5.0",
      "Accept":"*/*"
    }
  });

  if(!res || !res.data){
    throw new Error("接口无返回数据");
  }

  return res.data;

}



/**********************
 * JSON解析
 **********************/

function parseJSON(data){

  try{

    if(typeof data==="string"){
      data = JSON.parse(data);
    }

    if(Array.isArray(data)) return data;

    if(data.list) return data.list;

    if(data.data) return data.data;

    if(data.zhubo) return data.zhubo;

  }catch(e){}

  return [];

}



/**********************
 * TXT解析
 **********************/

function parseTXT(data){

  if(typeof data!=="string") return [];

  const list=[];

  const lines=data.split("\n");

  for(let line of lines){

    line=line.trim();

    if(!line) continue;

    if(line.startsWith("#")) continue;

    const parts=line.split(",");

    if(parts.length>=2){

      list.push({
        title:parts[0],
        address:parts[1]
      });

    }

  }

  return list;

}



/**********************
 * M3U解析
 **********************/

function parseM3U(data){

  if(typeof data!=="string") return [];

  const list=[];
  const lines=data.split("\n");

  let title="";

  for(let line of lines){

    line=line.trim();

    if(line.startsWith("#EXTINF")){
      const match=line.match(/,(.*)/);
      title=match?match[1]:"直播";
    }

    if(line.startsWith("http")){

      list.push({
        title:title,
        address:line
      });

    }

  }

  return list;

}



/**********************
 * 去重
 **********************/

function dedupe(list){

  const set=new Set();
  const result=[];

  for(const item of list){

    if(!item.address) continue;

    if(set.has(item.address)) continue;

    set.add(item.address);

    result.push(item);

  }

  return result;

}



/**********************
 * 自动封面
 **********************/

function poster(){

  return `https://picsum.photos/400/600?random=${Math.floor(Math.random()*1000)}`;

}



/**********************
 * 主入口
 **********************/

async function getVideos(params={}){

  try{

    const url=params.url;

    if(!url){
      throw new Error("缺少数据源地址");
    }

    const page=parseInt(params.page||1);

    const cacheKey=url+"_page_"+page;

    const cache=getCache(cacheKey);

    if(cache){
      console.log("使用缓存");
      return cache;
    }

    const raw=await request(url);

    let list=[];

    list=list.concat(parseJSON(raw));
    list=list.concat(parseTXT(raw));
    list=list.concat(parseM3U(raw));

    list=dedupe(list);

    const videos=list.map(item=>({

      id:item.address,

      type:"url",

      title:item.title || "视频",

      posterPath:item.img || poster(),

      videoUrl:item.address

    }));

    setCache(cacheKey,videos);

    console.log("解析完成:",videos.length);

    return videos;

  }catch(err){

    console.error(err);

    throw new Error("视频获取失败: "+err.message);

  }

}
