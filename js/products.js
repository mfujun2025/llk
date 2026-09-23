// 卡卡速联流量卡 —— 号卡套餐数据（来自云号卡微店接口，2026-09-24 抓取）
// 字段：name 套餐名 / op 运营商 / cur 现月租 / orig 原月租 / g 流量(GB,已含定向) / g_d 定向流量(GB)
//       call 通话分钟 / age 年龄限制 / area 发货区域(全国=可办全国) / charge 充值说明 / hot 是否爆款 / url 办理链接
window.CARDS = [
  { name: "N3广电奔马卡", op: "广电", cur: 39, orig: 39, g: 60, g_d: 0, call: 0, age: "18-64", area: "全国", charge: "激活当月专属渠道充值100元", hot: true, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74615176&share_id=263475" },
  { name: "电信菊石卡", op: "电信", cur: 39, orig: 39, g: 200, g_d: 0, call: 200, age: "18-28", area: "只发河北石家庄市", charge: "快递员处激活后一次性首充100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74703328&share_id=263475" },
  { name: "G1移动灵珠卡", op: "移动", cur: 29, orig: 79, g: 230, g_d: 30, call: 500, age: "18-27", area: "只发福建", charge: "激活过程中充值200元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74690459&share_id=263475" },
  { name: "广电奔马卡", op: "广电", cur: 39, orig: 39, g: 60, g_d: 0, call: 0, age: "18-60", area: "发10省", charge: "激活当月专属渠道首充100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74636936&share_id=263475" },
  { name: "G1联通羚羊卡", op: "联通", cur: 39, orig: 59, g: 550, g_d: 0, call: 300, age: "18-29", area: "只发四川", charge: "激活当月任意渠道一次性首充100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74688581&share_id=263475" },
  { name: "联通双凤卡", op: "联通", cur: 39, orig: 39, g: 240, g_d: 0, call: 200, age: "18-60", area: "只发四川", charge: "快递员处激活后一次性首充200/300元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74635508&share_id=263475" },
  { name: "移动金鹏卡", op: "移动", cur: 39.9, orig: 39.9, g: 255, g_d: 0, call: 200, age: "18-60", area: "只发四川成都", charge: "激活过程中充值300元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74665106&share_id=263475" },
  { name: "移动天涯卡", op: "移动", cur: 39, orig: 59, g: 100, g_d: 0, call: 200, age: "18-60", area: "只发安徽4市", charge: "激活当月任意渠道一次性充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74536748&share_id=263475" },
  { name: "移动灵珠卡", op: "移动", cur: 29, orig: 79, g: 230, g_d: 30, call: 500, age: "18-27", area: "只发福建", charge: "激活过程中充值200元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74629832&share_id=263475" },
  { name: "联通香缇卡", op: "联通", cur: 19, orig: 29, g: 100, g_d: 0, call: 200, age: "18-60", area: "只发重庆", charge: "激活当月任意渠道一次性首充100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74656614&share_id=263475" },
  { name: "G2广电福狮卡", op: "广电", cur: 29, orig: 29, g: 130, g_d: 0, call: 200, age: "18-65", area: "只发福建", charge: "快递员处激活后一次性首充200元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74643958&share_id=263475" },
  { name: "N广电小鹿卡", op: "广电", cur: 28, orig: 28, g: 150, g_d: 30, call: 200, age: "18-34", area: "只发陕西", charge: "激活当月快递处充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74659880&share_id=263475" },
  { name: "联通真性卡", op: "联通", cur: 39, orig: 39, g: 102, g_d: 0, call: 100, age: "18-30", area: "全国", charge: "激活过程中充值100元", hot: true, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74557406&share_id=263475" },
  { name: "联通福气卡", op: "联通", cur: 39, orig: 59, g: 210, g_d: 110, call: 400, age: "18-60", area: "只发福建", charge: "激活当月72小时内任意渠道一次性首充100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74651470&share_id=263475" },
  { name: "广电奔渝卡", op: "广电", cur: 39, orig: 39, g: 60, g_d: 0, call: 0, age: "18-59", area: "只发重庆", charge: "激活过程中充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74473169&share_id=263475" },
  { name: "联通江豚卡", op: "联通", cur: 39, orig: 59, g: 550, g_d: 0, call: 300, age: "18-29", area: "只发四川成都", charge: "激活当月任意渠道一次性首充100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74513495&share_id=263475" },
  { name: "N2广电奔马卡", op: "广电", cur: 39, orig: 39, g: 60, g_d: 0, call: 0, age: "18-59", area: "全国", charge: "激活当月专属渠道充值100元", hot: true, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74513494&share_id=263475" },
  { name: "N广电小象卡", op: "广电", cur: 38, orig: 38, g: 190, g_d: 30, call: 300, age: "18-34", area: "只发陕西", charge: "快递员处激活后充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74659881&share_id=263475" },
  { name: "联通福年卡", op: "联通", cur: 39, orig: 59, g: 200, g_d: 100, call: 200, age: "18-26", area: "只发福建", charge: "激活当月72小时内任意渠道一次性首充100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74653838&share_id=263475" },
  { name: "G2广电福年卡", op: "广电", cur: 39, orig: 39, g: 180, g_d: 0, call: 250, age: "18-65", area: "只发福建", charge: "快递员处激活后一次性首充200元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74643959&share_id=263475" },
  { name: "G1广电福狮卡", op: "广电", cur: 29, orig: 29, g: 130, g_d: 0, call: 200, age: "18-65", area: "只发福建", charge: "快递员处激活后一次性首充200元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74238035&share_id=263475" },
  { name: "联通天使卡", op: "联通", cur: 39, orig: 39, g: 60, g_d: 0, call: 50, age: "18-59", area: "只发四川", charge: "激活当月任意渠道一次性充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74478560&share_id=263475" },
  { name: "移动金龙卡", op: "移动", cur: 29.9, orig: 29.9, g: 260, g_d: 0, call: 100, age: "18-60", area: "只发四川眉山", charge: "激活过程中充值200元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74651471&share_id=263475" },
  { name: "移动金钻卡", op: "移动", cur: 39.9, orig: 39.9, g: 305, g_d: 0, call: 200, age: "18-60", area: "只发四川眉山", charge: "激活过程中充值200元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74652899&share_id=263475" },
  { name: "联通天龙卡", op: "联通", cur: 39, orig: 39, g: 640, g_d: 0, call: 200, age: "18-30", area: "只发四川成都", charge: "激活后快递员处一次性首充100/300元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74503913&share_id=263475" },
  { name: "广电奔浙卡", op: "广电", cur: 39, orig: 39, g: 60, g_d: 0, call: 0, age: "18-59", area: "只发浙江", charge: "激活后快递员处充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74475578&share_id=263475" },
  { name: "G1广电福年卡", op: "广电", cur: 39, orig: 39, g: 180, g_d: 0, call: 250, age: "18-65", area: "只发福建", charge: "快递员处激活后一次性首充200元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74238036&share_id=263475" },
  { name: "广电奔秦卡", op: "广电", cur: 39, orig: 39, g: 60, g_d: 0, call: 0, age: "18-59", area: "只发陕西", charge: "激活过程充值200元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74473170&share_id=263475" },
  { name: "广电奔吉卡", op: "广电", cur: 39, orig: 39, g: 60, g_d: 0, call: 0, age: "18-59", area: "只发吉林", charge: "激活当月专属渠道充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74473171&share_id=263475" },
  { name: "广电洋芋卡", op: "广电", cur: 29, orig: 29, g: 100, g_d: 0, call: 100, age: "18-39", area: "只发陕西", charge: "激活过程中充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74659883&share_id=263475" },
];

// 关键跳转链接
window.LINKS = {
  store: "https://hk.yunhaoka.cn/#/pages/micro_store/index?agent_id=fdef2c8d91da4c9fb967e505d8255dd7",
  agent: "https://hk.yunhaoka.cn/#/pages/public/register?code=7755188"
};
