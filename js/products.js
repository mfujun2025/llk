// 卡卡速联流量卡 —— 号卡套餐数据（来自云号卡微店接口，2026-09-02 抓取）
// 字段：name 套餐名 / op 运营商 / cur 现月租 / orig 原月租 / g 流量(GB,已含定向) / g_d 定向流量(GB)
//       call 通话分钟 / age 年龄限制 / area 发货区域(全国=可办全国) / charge 充值说明 / hot 是否爆款 / url 办理链接
window.CARDS = [
  { name: "广电旅行卡", op: "广电", cur: 29, orig: 39, g: 200, call: 0,   age: "18-60", area: "全国", charge: "激活当月专属渠道充值2个100元", hot: true,  url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74633141&share_id=263475" },
  { name: "广电麦芽卡", op: "广电", cur: 29, orig: 29, g: 192, call: 0,   age: "18-59", area: "全国", charge: "激活过程中充值100元",           hot: true,  url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74629833&share_id=263475" },
  { name: "广电小麦卡", op: "广电", cur: 29, orig: 39, g: 180, call: 150, age: "18-59", area: "全国", charge: "激活过程中充值100元",           hot: true,  url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74629834&share_id=263475" },
  { name: "联通星云卡", op: "联通", cur: 29, orig: 39, g: 150, call: 300, age: "18-59", area: "全国", charge: "激活当月任意渠道一次性首充100元", hot: true, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74527580&share_id=263475" },
  { name: "联通星海卡", op: "联通", cur: 39, orig: 39, g: 150, call: 300, age: "18-59", area: "全国", charge: "激活当月任意渠道一次性首充100元", hot: true, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74515413&share_id=263475" },
  { name: "联通真性卡", op: "联通", cur: 39, orig: 39, g: 102, call: 100, age: "18-60", area: "全国", charge: "激活过程中充值100元",           hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74557406&share_id=263475" },
  { name: "联通风霜卡", op: "联通", cur: 39, orig: 39, g: 150, call: 200, age: "18-27", area: "全国", charge: "下单预存200元",                 hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74494524&share_id=263475" },
  { name: "N3广电奔马卡", op: "广电", cur: 39, orig: 39, g: 60,  call: 0,  age: "18-64", area: "全国", charge: "激活当月专属渠道充值100元",     hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74615176&share_id=263475" },
  { name: "N2广电奔马卡", op: "广电", cur: 39, orig: 39, g: 60,  call: 0,  age: "18-59", area: "全国", charge: "激活当月专属渠道充值100元",     hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74513494&share_id=263475" },
  { name: "移动灵珠卡", op: "移动", cur: 29, orig: 79, g: 230, call: 500, age: "18-27", area: "只发福建",   charge: "激活过程中充值200元",             hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74629832&share_id=263475" },
  { name: "移动薄荷卡", op: "移动", cur: 29, orig: 59, g: 150, call: 200, age: "18-26", area: "只发湖南",   charge: "激活后专属链接一次性首充200元",   hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74509779&share_id=263475" },
  { name: "移动天涯卡", op: "移动", cur: 39, orig: 59, g: 100, call: 200, age: "18-60", area: "只发安徽4市", charge: "激活当月任意渠道一次性充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74536748&share_id=263475" },
  { name: "联通江豚卡", op: "联通", cur: 39, orig: 59, g: 550, call: 300, age: "18-29", area: "只发四川成都",charge: "激活当月任意渠道一次性首充100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74513495&share_id=263475" },
  { name: "联通天龙卡", op: "联通", cur: 39, orig: 39, g: 640, call: 200, age: "18-29", area: "只发四川成都",charge: "激活后快递员处一次性首充100/300元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74503913&share_id=263475" },
  { name: "联通风信卡", op: "联通", cur: 39, orig: 49, g: 220, call: 300, age: "18-28", area: "只发福建",   charge: "激活72小时内任意渠道一次性首充100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74558345&share_id=263475" },
  { name: "联通天使卡", op: "联通", cur: 39, orig: 39, g: 60,  call: 50,  age: "18-59", area: "只发四川",   charge: "激活当月任意渠道一次性充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74478560&share_id=263475" },
  { name: "联通天鹅卡", op: "联通", cur: 39, orig: 59, g: 60,  call: 200, age: "18-59", area: "只发重庆",   charge: "激活当月任意渠道一次性充值100元", hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74478561&share_id=263475" },
  { name: "G1广电福狮卡", op: "广电", cur: 29, orig: 29, g: 130, call: 200, age: "18-65", area: "只发福建", charge: "快递员处激活后一次性首充200元",   hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74238035&share_id=263475" },
  { name: "G1广电福年卡", op: "广电", cur: 39, orig: 39, g: 180, call: 250, age: "18-65", area: "只发福建", charge: "快递员处激活后一次性首充200元",   hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74238036&share_id=263475" },
  { name: "广电奔吉卡", op: "广电", cur: 39, orig: 39, g: 60,  call: 0,  age: "18-59", area: "只发吉林",   charge: "激活当月专属渠道充值100元",       hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74473171&share_id=263475" },
  { name: "广电奔渝卡", op: "广电", cur: 39, orig: 39, g: 60,  call: 0,  age: "18-59", area: "只发重庆",   charge: "激活过程中充值100元",             hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74473169&share_id=263475" },
  { name: "广电奔浙卡", op: "广电", cur: 39, orig: 39, g: 60,  call: 0,  age: "18-59", area: "只发浙江",   charge: "激活后快递员处充值100元",         hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74475578&share_id=263475" },
  { name: "广电奔秦卡", op: "广电", cur: 39, orig: 39, g: 60,  call: 0,  age: "18-59", area: "只发陕西",   charge: "激活过程充值200元",               hot: false, url: "https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=74473170&share_id=263475" }
];

// 关键跳转链接
window.LINKS = {
  store: "https://hk.yunhaoka.cn/#/pages/micro_store/index?agent_id=fdef2c8d91da4c9fb967e505d8255dd7",
  agent: "https://hk.yunhaoka.cn/#/pages/public/register?code=7755188"
};
