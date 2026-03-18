/**
 * @type {import('@forward-widget/libs/env')}
 */

WidgetMetadata = {
  name: "iQIYI Pro Max",
  version: "3.0.0",
  description: "爱奇艺（分类 + 搜索 + 多解析）",
  author: "GPT"
};

// ================= 分类 =================
export async function loadClassList() {
  return [
    { id: "1", name: "电影" },
    { id: "2", name: "电视剧" },
    { id: "6", name: "综艺" },
    { id: "4", name: "动漫" }
  ];
}

// ================= 列表 =================
export async function loadList({ classId, page }) {
  const url = `https://pcw-api.iqiyi.com/search/recommend/list?channel_id=${classId}&page_id=${page || 1}`;

  const resp = await Widget.http.get(url);
  const json = await resp.json();

  const list = json.data?.list || [];

  return list.map(v => ({
    id: String(v.qipu_id),
    title: v.name,
    cover: v.image_url,
    description: v.score
  }));
}

// ================= 搜索 =================
export async function search({ keyword, page }) {
  const url = `https://mesh.if.iqiyi.com/portal/lw/search/homePageV3?key=${encodeURIComponent(keyword)}&pageNum=${page || 1}`;

  const resp = await Widget.http.get(url);
  const json = await resp.json();

  let result = [];

  (json.data?.templates || []).forEach(t => {
    (t.data?.list || []).forEach(v => {
      result.push({
        id: String(v.qipuId || v.albumId),
        title: v.name,
        cover: v.imageUrl,
        description: v.score || v.desc
      });
    });
  });

  return result;
}

// ================= 详情（核心） =================
export async function loadDetail({ id }) {
  const playUrl = `https://www.iqiyi.com/v_${id}.html`;

  return {
    id,
    title: "爱奇艺视频",
    cover: "",
    description: "",
    playUrls: buildParseUrls(playUrl)
  };
}

// ================= 解析线路 =================
function buildParseUrls(url) {
  const apis = [
    { name: "Player-JY", url: "https://jx.playerjy.com/?url=" },
    { name: "HLS", url: "https://jx.hls.one/?url=" },
    { name: "虾米", url: "https://jx.xmflv.com/?url=" },
    { name: "M1907", url: "https://im1907.top/?jx=" },
    { name: "Yparse", url: "https://jx.yparse.com/index.php?url=" }
  ];

  return apis.map(api => ({
    name: api.name,
    url: api.url + encodeURIComponent(url)
  }));
}
