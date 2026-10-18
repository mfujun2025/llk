// 卡卡速联流量卡 —— 号卡套餐数据（来自云号卡微店接口，2026-10-19 抓取）
// 字段：name 套餐名 / op 运营商 / cur 现月租 / orig 原月租 / g 流量(GB,已含定向) / g_d 定向流量(GB)
//       call 通话分钟 / age 年龄限制 / area 发货区域(全国=可办全国) / charge 充值说明 / hot 是否爆款 / url 办理链接
window.CARDS = [
  { name: "广电奔马卡", op: "广电", cur: 29.0, orig: 39.0, g: 200, g_d: 0, call: 0, age: "18-60", area: "收货地", charge: "激活当月专属渠道首充100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74636936&share_id=263475" },
  { name: "广电锦程卡", op: "广电", cur: 29.0, orig: 39.0, g: 230, g_d: 0, call: 0, age: "18-60", area: "全国", charge: "激活过程中首充200元", hot: true, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74784747&share_id=263475" },
  { name: "N广电雾淞卡", op: "广电", cur: 29.0, orig: 29.0, g: 192, g_d: 0, call: 0, age: "18-60", area: "收货地", charge: "激活过程充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74786625&share_id=263475" },
  { name: "N1广电麦香卡", op: "广电", cur: 28.0, orig: 28.0, g: 350, g_d: 30, call: 200, age: "18-34", area: "全国", charge: "激活过程充值100元", hot: true, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74772540&share_id=263475" },
  { name: "广电麦穗卡", op: "广电", cur: 28.0, orig: 28.0, g: 350, g_d: 30, call: 200, age: "18-34", area: "全国", charge: "激活过程充值100元", hot: true, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74778135&share_id=263475" },
  { name: "N3广电奔马卡", op: "广电", cur: 39.0, orig: 39.0, g: 60, g_d: 0, call: 0, age: "18-64", area: "全国", charge: "激活当月专属渠道充值100元", hot: true, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74615176&share_id=263475" },
  { name: "N联通优胜卡", op: "联通", cur: 39.0, orig: 39.0, g: 200, g_d: 0, call: 200, age: "18-50", area: "全国", charge: "激活过程强充200元", hot: true, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74750004&share_id=263475" },
  { name: "联通香树卡", op: "联通", cur: 39.0, orig: 39.0, g: 200, g_d: 0, call: 200, age: "18-50", area: "全国", charge: "激活过程强充100元", hot: true, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74741553&share_id=263475" },
  { name: "移动风力卡", op: "移动", cur: 20.0, orig: 48.0, g: 230, g_d: 30, call: 200, age: "18-24", area: "随机", charge: "激活过程中充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74764459&share_id=263475" },
  { name: "广电福地卡", op: "广电", cur: 29.0, orig: 29.0, g: 130, g_d: 0, call: 200, age: "18-65", area: "随机", charge: "快递员处激活后一次性首充100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74764460&share_id=263475" },
  { name: "联通双龙卡", op: "联通", cur: 39.0, orig: 39.0, g: 240, g_d: 0, call: 200, age: "18-60", area: "随机", charge: "激活当月任意渠道一次性首充200", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74750943&share_id=263475" },
  { name: "联通香缇卡", op: "联通", cur: 19.0, orig: 29.0, g: 100, g_d: 0, call: 200, age: "18-60", area: "随机", charge: "激活当月任意渠道一次性首充100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74656614&share_id=263475" },
  { name: "G1联通双凤卡", op: "联通", cur: 39.0, orig: 39.0, g: 240, g_d: 0, call: 200, age: "18-60", area: "随机", charge: "快递员处激活后一次性首充200/300元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74733376&share_id=263475" },
  { name: "联通江豚卡", op: "联通", cur: 39.0, orig: 59.0, g: 550, g_d: 0, call: 300, age: "18-29", area: "随机", charge: "激活当月任意渠道一次性首充100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74513495&share_id=263475" },
  { name: "广电福源卡", op: "广电", cur: 39.0, orig: 39.0, g: 180, g_d: 0, call: 250, age: "18-65", area: "随机", charge: "快递员处激活后一次性首充100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74764461&share_id=263475" },
  { name: "N广电小鹿卡", op: "广电", cur: 28.0, orig: 28.0, g: 150, g_d: 30, call: 200, age: "18-34", area: "随机", charge: "激活当月快递处充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74659880&share_id=263475" },
  { name: "N广电福狮卡", op: "广电", cur: 29.0, orig: 29.0, g: 130, g_d: 0, call: 200, age: "18-65", area: "随机", charge: "快递员处激活后一次性首充200元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74730559&share_id=263475" },
  { name: "联通福气卡", op: "联通", cur: 39.0, orig: 59.0, g: 210, g_d: 110, call: 400, age: "18-60", area: "随机", charge: "激活当月72小时内任意渠道一次性首充100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74651470&share_id=263475" },
  { name: "G1电信菊石卡", op: "电信", cur: 39.0, orig: 39.0, g: 200, g_d: 0, call: 200, age: "18-28", area: "随机", charge: "快递员处激活后一次性首充100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74744370&share_id=263475" },
  { name: "N2广电奔马卡", op: "广电", cur: 39.0, orig: 39.0, g: 60, g_d: 0, call: 0, age: "18-59", area: "全国", charge: "激活当月专属渠道充值100元", hot: true, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74513494&share_id=263475" },
  { name: "广电奔渝卡", op: "广电", cur: 39.0, orig: 39.0, g: 60, g_d: 0, call: 0, age: "18-59", area: "收货地及归属地", charge: "激活过程中充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74473169&share_id=263475" },
  { name: "联通双凤卡", op: "联通", cur: 39.0, orig: 39.0, g: 240, g_d: 0, call: 200, age: "18-60", area: "随机", charge: "快递员处激活后一次性首充200/300元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74635508&share_id=263475" },
  { name: "联通福年卡", op: "联通", cur: 39.0, orig: 59.0, g: 200, g_d: 100, call: 200, age: "18-26", area: "随机", charge: "激活当月72小时内任意渠道一次性首充100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74653838&share_id=263475" },
  { name: "G1广电福年卡", op: "广电", cur: 39.0, orig: 39.0, g: 180, g_d: 0, call: 250, age: "18-65", area: "随机", charge: "快递员处激活后一次性首充200元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74238036&share_id=263475" },
  { name: "联通天龙卡", op: "联通", cur: 39.0, orig: 39.0, g: 640, g_d: 0, call: 200, age: "18-30", area: "收货地", charge: "激活后快递员处一次性首充100/300元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74503913&share_id=263475" },
  { name: "N广电小象卡", op: "广电", cur: 38.0, orig: 38.0, g: 190, g_d: 30, call: 300, age: "18-34", area: "随机", charge: "快递员处激活后充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74659881&share_id=263475" },
  { name: "联通天使卡", op: "联通", cur: 39.0, orig: 39.0, g: 60, g_d: 0, call: 50, age: "18-59", area: "随机", charge: "激活当月任意渠道一次性充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74478560&share_id=263475" },
  { name: "广电奔秦卡", op: "广电", cur: 39.0, orig: 39.0, g: 60, g_d: 0, call: 0, age: "18-59", area: "收货地及归属地", charge: "激活过程充值200元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74473170&share_id=263475" },
  { name: "广电奔吉卡", op: "广电", cur: 39.0, orig: 39.0, g: 60, g_d: 0, call: 0, age: "18-59", area: "收货地及归属地", charge: "激活当月专属渠道充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74473171&share_id=263475" },
  { name: "广电奔浙卡", op: "广电", cur: 39.0, orig: 39.0, g: 60, g_d: 0, call: 0, age: "18-59", area: "收货地及归属地", charge: "激活后快递员处充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74475578&share_id=263475" },
  { name: "联通天鹅卡", op: "联通", cur: 39.0, orig: 59.0, g: 60, g_d: 0, call: 200, age: "18-59", area: "随机", charge: "激活当月任意渠道一次性充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74478561&share_id=263475" },
  { name: "广电洋芋卡", op: "广电", cur: 29.0, orig: 29.0, g: 100, g_d: 0, call: 100, age: "18-39", area: "随机", charge: "激活过程中充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74659883&share_id=263475" },
  { name: "电信菊石卡", op: "电信", cur: 39.0, orig: 39.0, g: 200, g_d: 0, call: 200, age: "18-28", area: "随机", charge: "快递员处激活后一次性首充100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74703328&share_id=263475" },
];


window.LINKS = {
  store: "https://hk.yunhaoka.cn/#/pages/micro_store/index?agent_id=fdef2c8d91da4c9fb967e505d8255dd7",
  agent: "https://hk.yunhaoka.cn/#/pages/public/register?code=7755188"
};
